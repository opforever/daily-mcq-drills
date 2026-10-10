import React, { useState, useEffect, useCallback } from 'react';
import { AngleUnit, CalcMode, HistoryItem, VariableStore } from '../types/calculator';
import { NaturalDisplay } from './NaturalDisplay';
import { Keypad } from './Keypad';
import {
  evaluateExpression,
  toEng,
  toDMS,
  solveForX,
  formatNumberText,
} from '../utils/mathEngine';
import {
  MathExpressionState,
  MathItem,
  CursorPosition,
  createInitialModel,
  mathModelToEvaluatableString,
  mathModelToDisplayString,
  insertTokenIntoModel,
  deleteFromModel,
  deleteForwardFromModel,
  moveCursorInModel,
  modelFromString,
  charsToTextItems,
  cloneItems,
  clampCursor,
} from '../utils/mathModel';
import { playKeyClick } from '../utils/audio';
import { ModeModal } from './ModeModal';
import { EquationSolver } from './EquationSolver';
import { MatrixSolver } from './MatrixSolver';
import { TableGenerator } from './TableGenerator';
import { ConstantsCatalog } from './ConstantsCatalog';
import { HistoryDrawer } from './HistoryDrawer';
import { GuideModal } from './GuideModal';
import { getCalculatorSession, saveCalculatorSession } from '../utils/calculatorStore';

const INITIAL_VARS: VariableStore = {
  A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, X: 0, Y: 0, M: 0, Ans: 0,
};

// ALPHA-key -> variable letter mapping (for STO/RCL flows)
const ALPHA_VAR: Record<string, keyof VariableStore> = {
  NEG: 'A',
  DMS: 'B',
  HYP: 'C',
  SIN: 'D',
  COS: 'E',
  TAN: 'F',
  CLOSE_PAREN: 'X',
  S_D: 'Y',
  M_PLUS: 'M',
};

// Tokens that CONTINUE from the previous result (Ans <op> ...) instead of
// starting a fresh expression — exactly like a real Casio after pressing "=".
const CONTINUATION_TOKENS = new Set(['+', '-', '×', '÷', '!', '%', ' P ', ' C ', '°', ',']);
function isContinuationToken(token: string, force?: boolean): boolean {
  if (force !== undefined) return force;
  return CONTINUATION_TOKENS.has(token) || token.startsWith('^');
}

interface DraftState {
  items: MathItem[];
  result: string;
  exactResult: string;
}

export const CasioCalculator: React.FC = () => {
  const initialSession = getCalculatorSession();

  // Structured math state (recursive fractions + path cursor)
  const [mathState, setMathState] = useState<MathExpressionState>(() => {
    const ms = initialSession.mathState;
    if (ms && Array.isArray(ms.items) && ms.cursor && Array.isArray(ms.cursor.stack)) {
      return { items: ms.items, cursor: clampCursor(ms.items, ms.cursor) };
    }
    return createInitialModel();
  });
  const [result, setResult] = useState(initialSession.result || '0');
  const [exactResult, setExactResult] = useState(initialSession.exactResult || '0');
  const [isExactMode, setIsExactMode] = useState(initialSession.isExactMode ?? true);

  // True right after "=": value keys start a NEW expression, operator keys
  // continue from Ans — like the real device.
  const [justEvaluated, setJustEvaluated] = useState(false);
  // True right after a ▲/▼ (or tape) recall: value keys REPLACE the recalled
  // expression, but operator keys APPEND to it (Casio continues editing the
  // recalled expression — it must not silently swap in "Ans").
  const [justRecalled, setJustRecalled] = useState(false);

  const [angleUnit, setAngleUnit] = useState<AngleUnit>(initialSession.angleUnit || 'DEG');
  const [mode, setMode] = useState<CalcMode>(initialSession.mode || 'COMP');
  const [isShift, setIsShift] = useState(false);
  const [isAlpha, setIsAlpha] = useState(false);
  const [isStoreMode, setIsStoreMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(initialSession.soundEnabled ?? true);

  // Variables store (a calculator boots with everything zeroed)
  const [vars, setVars] = useState<VariableStore>(initialSession.vars || INITIAL_VARS);

  // History tape (starts empty — no fake demo entries)
  const [history, setHistory] = useState<HistoryItem[]>(initialSession.history || []);
  const [historyIndex, setHistoryIndex] = useState<number>(initialSession.historyIndex ?? -1);
  // The unsaved input preserved when ▲ is pressed mid-typing, restored by ▼
  const [draft, setDraft] = useState<DraftState | null>(null);

  // Synchronize state changes to session store so user can close modal and return without losing data
  useEffect(() => {
    saveCalculatorSession({
      mathState,
      result,
      exactResult,
      isExactMode,
      angleUnit,
      mode,
      vars,
      history,
      historyIndex,
      soundEnabled,
    });
  }, [mathState, result, exactResult, isExactMode, angleUnit, mode, vars, history, historyIndex, soundEnabled]);

  // Active dialogs
  const [isModeOpen, setIsModeOpen] = useState(false);
  const [isSetupOpen, setIsSetupOpen] = useState(false);
  const [isEqnOpen, setIsEqnOpen] = useState(false);
  const [isMatrixOpen, setIsMatrixOpen] = useState(false);
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [isConstantsOpen, setIsConstantsOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [constCatalogTab, setConstCatalogTab] = useState<'constants' | 'conversions'>('constants');

  const anyModalOpen =
    isModeOpen || isSetupOpen || isEqnOpen || isMatrixOpen || isTableOpen ||
    isConstantsOpen || isHistoryOpen || isGuideOpen;

  // -----------------------------------------------------------------------
  // Evaluation
  // -----------------------------------------------------------------------
  const handleCalculate = useCallback(() => {
    let state = mathState;
    // "=" on an empty screen recalls Ans, like the real fx-991ES
    if (state.items.length === 0) {
      state = modelFromString('Ans');
      setMathState(state);
    }

    const exprString = mathModelToEvaluatableString(state.items);
    const res = evaluateExpression(exprString, angleUnit, vars);

    setResult(res.text);
    setExactResult(res.exact);
    setIsExactMode(true);
    setIsShift(false);
    setIsAlpha(false);
    setIsStoreMode(false);
    setHistoryIndex(-1);
    setDraft(null);

    if (res.isError) {
      // Keep the expression "hot" so the user can fix it (Casio behaviour)
      setJustEvaluated(false);
      return;
    }

    setJustEvaluated(true);
    setJustRecalled(false);
    setVars((prev) => ({ ...prev, Ans: res.numValue }));

    const newItem: HistoryItem = {
      id: Math.random().toString(36).substring(2, 9),
      expression: exprString,
      display: mathModelToDisplayString(state.items),
      modelJson: JSON.stringify(state.items),
      result: res.text,
      exactResult: res.exact,
      timestamp: Date.now(),
      angleUnit,
      mode,
    };
    setHistory((prev) => [newItem, ...prev.slice(0, 49)]);
  }, [mathState, angleUnit, vars, mode]);

  // SHIFT+CALC ("SOLVE"): numerically solves  f(X) = 0
  const handleSolve = useCallback(() => {
    setIsShift(false);
    setIsAlpha(false);
    const exprString = mathModelToEvaluatableString(mathState.items);
    if (mathState.items.length === 0 || !/\bX\b/.test(exprString)) {
      handleCalculate();
      return;
    }
    const root = solveForX(exprString, angleUnit, vars);
    if (root === null) {
      setResult("Can't Solve");
      setExactResult("Can't Solve");
      setIsExactMode(false);
      setJustEvaluated(false);
      return;
    }
    setVars((prev) => ({ ...prev, X: root }));
    const text = `X=${formatNumberText(root)}`;
    setResult(text);
    setExactResult(text);
    setIsExactMode(true);
    setJustEvaluated(true);
    setJustRecalled(false);
    setHistoryIndex(-1);
    setDraft(null);
  }, [mathState, angleUnit, vars, handleCalculate]);

  // -----------------------------------------------------------------------
  // Insertion (with post-"=" continuation semantics)
  // -----------------------------------------------------------------------
  const insertToken = useCallback(
    (token: string, opts?: { continuation?: boolean }) => {
      setMathState((prev) => {
        let base = prev;
        const cont = isContinuationToken(token, opts?.continuation);
        if (justEvaluated) {
          // after "=": operators continue from Ans, values start fresh
          base = cont ? modelFromString('Ans') : createInitialModel();
        } else if (justRecalled) {
          // after a recall: operators continue the RECALLED expression,
          // values start fresh (real Casio behaviour)
          base = cont ? prev : createInitialModel();
        }
        return insertTokenIntoModel(base, token);
      });
      setJustEvaluated(false);
      setJustRecalled(false);
      setHistoryIndex(-1);
      setDraft(null);
    },
    [justEvaluated, justRecalled]
  );

  // -----------------------------------------------------------------------
  // History recall (▲ / ▼)
  // -----------------------------------------------------------------------
  const applyHistoryItem = useCallback((item: HistoryItem) => {
    let items: MathItem[];
    if (item.modelJson) {
      try {
        items = JSON.parse(item.modelJson) as MathItem[];
      } catch {
        items = charsToTextItems(item.expression);
      }
    } else {
      items = charsToTextItems(item.expression);
    }
    setMathState({ items, cursor: { stack: [], offset: items.length } });
    setResult(item.result);
    setExactResult(item.exactResult || item.result);
    setIsExactMode(true);
    setJustEvaluated(false);
    setJustRecalled(true);
  }, []);

  const recallOlder = useCallback(() => {
    if (history.length === 0) return;
    if (historyIndex >= history.length - 1) return; // at the OLDEST entry — stop, never wrap
    if (historyIndex === -1) {
      // preserve whatever the user was typing so ▼ can bring it back
      setDraft({ items: cloneItems(mathState.items), result, exactResult });
    }
    const nextIdx = historyIndex + 1;
    setHistoryIndex(nextIdx);
    applyHistoryItem(history[nextIdx]);
  }, [history, historyIndex, mathState, result, exactResult, applyHistoryItem]);

  const recallNewer = useCallback(() => {
    if (historyIndex < 0) return;
    const nextIdx = historyIndex - 1;
    setHistoryIndex(nextIdx);
    if (nextIdx >= 0) {
      applyHistoryItem(history[nextIdx]);
      return;
    }
    // back past the newest entry -> restore the saved draft
    if (draft) {
      setMathState({ items: draft.items, cursor: { stack: [], offset: draft.items.length } });
      setResult(draft.result);
      setExactResult(draft.exactResult);
      setDraft(null);
    } else {
      setMathState(createInitialModel());
      setResult('0');
      setExactResult('0');
      setIsExactMode(true);
    }
    setJustEvaluated(false);
    setJustRecalled(false);
  }, [historyIndex, history, draft, applyHistoryItem]);

  // -----------------------------------------------------------------------
  // Keypad / keyboard action dispatcher
  // -----------------------------------------------------------------------
  const handleKeyPress = useCallback(
    (action: string, _label?: string) => {
      // ---- STORE mode (SHIFT -> RCL, then ALPHA + variable) ----
      if (isStoreMode) {
        if (action === 'RCL') {
          setIsStoreMode(false);
          setIsShift(false);
          return;
        }
        if (isAlpha && ALPHA_VAR[action]) {
          const letter = ALPHA_VAR[action];
          setVars((v) => ({ ...v, [letter]: v.Ans }));
          setIsStoreMode(false);
          setIsAlpha(false);
          setIsShift(false);
          return;
        }
        if (action !== 'ALPHA' && action !== 'SHIFT') {
          setIsStoreMode(false); // any other key cancels the pending store
        }
      }

      // SHIFT TOGGLE
      if (action === 'SHIFT') {
        setIsShift((s) => !s);
        setIsAlpha(false);
        return;
      }

      // ALPHA TOGGLE
      if (action === 'ALPHA') {
        setIsAlpha((a) => !a);
        setIsShift(false);
        return;
      }

      // ON: full power-on reset (memory + tape included)
      if (action === 'ON') {
        setMathState(createInitialModel());
        setResult('0');
        setExactResult('0');
        setIsExactMode(true);
        setIsShift(false);
        setIsAlpha(false);
        setIsStoreMode(false);
        setJustEvaluated(false);
        setJustRecalled(false);
        setHistoryIndex(-1);
        setDraft(null);
        setVars(INITIAL_VARS);
        setHistory([]);
        return;
      }

      // AC: clear the current entry only (like the real AC key)
      if (action === 'AC') {
        setMathState(createInitialModel());
        setResult('0');
        setExactResult('0');
        setIsExactMode(true);
        setIsShift(false);
        setIsAlpha(false);
        setIsStoreMode(false);
        setJustEvaluated(false);
        setJustRecalled(false);
        setHistoryIndex(-1);
        setDraft(null);
        return;
      }

      // DEL (backspace before cursor)
      if (action === 'DEL') {
        if (isShift) {
          setIsShift(false); // INS mode not implemented — just cancel SHIFT
          return;
        }
        setJustEvaluated(false);
        setJustRecalled(false);
        setHistoryIndex(-1);
        setDraft(null);
        setMathState((s) => deleteFromModel(s));
        return;
      }

      // Forward delete (physical Delete key)
      if (action === 'DEL_FWD') {
        setJustEvaluated(false);
        setJustRecalled(false);
        setHistoryIndex(-1);
        setDraft(null);
        setMathState((s) => deleteForwardFromModel(s));
        return;
      }

      // MODE / SETUP
      if (action === 'MODE') {
        if (isShift) setIsSetupOpen(true);
        else setIsModeOpen(true);
        setIsShift(false);
        setIsAlpha(false);
        return;
      }

      // ---- D-PAD: cursor navigation + history recall ----
      if (action === 'UP') {
        if (historyIndex >= 0) {
          recallOlder();
          return;
        }
        const moved = moveCursorInModel(mathState, 'UP');
        if (moved) {
          setMathState(moved);
          setJustEvaluated(false);
          setJustRecalled(false);
          return;
        }
        // ▲ with nowhere to go: history recall is ONLY valid from the root
        // baseline. Inside a fraction field (e.g. an already-topmost
        // numerator) it must be a no-op — the old fall-through replaced the
        // expression being edited with a history entry ("goes out of place").
        if (mathState.cursor.stack.length === 0) {
          recallOlder();
        }
        return;
      }

      if (action === 'DOWN') {
        if (historyIndex >= 0) {
          recallNewer();
          return;
        }
        const moved = moveCursorInModel(mathState, 'DOWN');
        if (moved) {
          setMathState(moved);
          setJustEvaluated(false);
          setJustRecalled(false);
        }
        return;
      }

      if (action === 'LEFT' || action === 'RIGHT') {
        const moved = moveCursorInModel(mathState, action);
        if (moved) {
          setMathState(moved);
          setJustEvaluated(false);
          setJustRecalled(false);
          if (historyIndex !== -1) {
            // moving the cursor exits recall but KEEPS the recalled
            // expression editable (real Casio behaviour)
            setHistoryIndex(-1);
            setDraft(null);
          }
        }
        return;
      }

      // S<=>D TOGGLE (Exact <-> Decimal) / ALPHA Y
      if (action === 'S_D') {
        if (isAlpha) {
          insertToken('Y');
          setIsAlpha(false);
          return;
        }
        setIsExactMode((prev) => !prev);
        return;
      }

      // CALC / SOLVE
      if (action === 'CALC') {
        if (isShift) handleSolve();
        else {
          handleCalculate();
          setIsShift(false);
        }
        return;
      }

      // INTEGRAL / DERIVATIVE / Σ — insert complete editable skeletons
      if (action === 'INTEGRAL') {
        if (isShift) insertToken('d/dx(X,0)');
        else if (isAlpha) insertToken(':');
        else insertToken('∫(X,0,1)');
        setIsShift(false);
        setIsAlpha(false);
        return;
      }

      // LOG_AB / Σ
      if (action === 'LOG_AB') {
        if (isShift) insertToken('Σ(X,1,5)');
        else insertToken('log_2(');
        setIsShift(false);
        return;
      }

      // FRACTION (■/□) — structured template, nests inside itself
      if (action === 'FRAC') {
        insertToken('FRAC');
        setIsShift(false);
        return;
      }

      // SQRT (√ / ³√)
      if (action === 'SQRT') {
        insertToken(isShift ? '³√(' : '√(');
        setIsShift(false);
        return;
      }

      // SQR (x² / x³)
      if (action === 'SQR') {
        if (isShift) insertToken('^3');
        else if (isAlpha) setMode('BASE-N');
        else insertToken('^2');
        setIsShift(false);
        setIsAlpha(false);
        return;
      }

      // POW (x^■ / ⁿ√)
      if (action === 'POW') {
        if (isShift) insertToken('ⁿ√(');
        else if (isAlpha) setMode('BASE-N');
        else insertToken('^');
        setIsShift(false);
        setIsAlpha(false);
        return;
      }

      // LOG (10^x / BIN)
      if (action === 'LOG') {
        if (isShift) insertToken('10^(');
        else if (isAlpha) setMode('BASE-N');
        else insertToken('log(');
        setIsShift(false);
        setIsAlpha(false);
        return;
      }

      // LN (e^x / OCT)
      if (action === 'LN') {
        if (isShift) insertToken('e^(');
        else if (isAlpha) setMode('BASE-N');
        else insertToken('ln(');
        setIsShift(false);
        setIsAlpha(false);
        return;
      }

      // NEG (-) / ∠ / A
      if (action === 'NEG') {
        if (isShift) insertToken('°');
        else if (isAlpha) insertToken('A');
        else insertToken('-');
        setIsShift(false);
        setIsAlpha(false);
        return;
      }

      // DMS: plain inserts °, SHIFT converts the result to °'"
      if (action === 'DMS') {
        if (isAlpha) insertToken('B');
        else if (isShift) {
          if (!result.includes('ERROR')) {
            setExactResult(toDMS(vars.Ans));
            setIsExactMode(true);
          }
        } else insertToken('°');
        setIsShift(false);
        setIsAlpha(false);
        return;
      }

      // HYP / Abs / C
      if (action === 'HYP') {
        if (isShift) insertToken('Abs(');
        else if (isAlpha) insertToken('C');
        else insertToken('sinh(');
        setIsShift(false);
        setIsAlpha(false);
        return;
      }

      // SIN / sin⁻¹ / D
      if (action === 'SIN') {
        if (isShift) insertToken('sin⁻¹(');
        else if (isAlpha) insertToken('D');
        else insertToken('sin(');
        setIsShift(false);
        setIsAlpha(false);
        return;
      }

      // COS / cos⁻¹ / E
      if (action === 'COS') {
        if (isShift) insertToken('cos⁻¹(');
        else if (isAlpha) insertToken('E');
        else insertToken('cos(');
        setIsShift(false);
        setIsAlpha(false);
        return;
      }

      // TAN / tan⁻¹ / F
      if (action === 'TAN') {
        if (isShift) insertToken('tan⁻¹(');
        else if (isAlpha) insertToken('F');
        else insertToken('tan(');
        setIsShift(false);
        setIsAlpha(false);
        return;
      }

      // RCL / STO
      if (action === 'RCL') {
        if (isShift) {
          setIsStoreMode(true); // then ALPHA + variable stores Ans into it
          setIsShift(false);
        } else {
          insertToken('Ans');
        }
        return;
      }

      // ENG / i — engineering notation of the CURRENT value (uses Ans, not
      // parseFloat(result), which broke on exact results like "5√2/6")
      if (action === 'ENG') {
        if (isAlpha) insertToken('i');
        else if (!result.includes('ERROR')) {
          setResult(toEng(vars.Ans));
          setExactResult(toEng(vars.Ans));
          setIsExactMode(false);
        }
        setIsShift(false);
        setIsAlpha(false);
        return;
      }

      // ( / %
      if (action === 'OPEN_PAREN') {
        insertToken(isShift ? '%' : '(');
        setIsShift(false);
        return;
      }

      // ) / , / X
      if (action === 'CLOSE_PAREN') {
        if (isShift) insertToken(',');
        else if (isAlpha) insertToken('X');
        else insertToken(')');
        setIsShift(false);
        setIsAlpha(false);
        return;
      }

      // M+ / M- / M  (memory always operates on Ans, never on the text)
      if (action === 'M_PLUS') {
        if (isShift) setVars((v) => ({ ...v, M: v.M - v.Ans }));
        else if (isAlpha) insertToken('M');
        else setVars((v) => ({ ...v, M: v.M + v.Ans }));
        setIsShift(false);
        setIsAlpha(false);
        return;
      }

      // CONST / 7
      if (action === '7') {
        if (isShift) {
          setConstCatalogTab('constants');
          setIsConstantsOpen(true);
        } else insertToken('7');
        setIsShift(false);
        return;
      }

      // CONV / 8
      if (action === '8') {
        if (isShift) {
          setConstCatalogTab('conversions');
          setIsConstantsOpen(true);
        } else insertToken('8');
        setIsShift(false);
        return;
      }

      // CLR / 9
      if (action === '9') {
        if (isShift) {
          setVars({ ...INITIAL_VARS });
        } else insertToken('9');
        setIsShift(false);
        return;
      }

      // MATRIX / 4
      if (action === '4') {
        if (isShift) setIsMatrixOpen(true);
        else insertToken('4');
        setIsShift(false);
        return;
      }

      // VECTOR / 5
      if (action === '5') {
        if (isShift) setIsMatrixOpen(true);
        else insertToken('5');
        setIsShift(false);
        return;
      }

      if (action === '6') {
        insertToken('6');
        return;
      }

      // MUL (× / nPr)
      if (action === 'MUL') {
        insertToken(isShift ? ' P ' : '×');
        setIsShift(false);
        return;
      }

      // DIV (÷ / nCr) — ÷ inserts a plain inline division sign. The stacked
      // fraction template is created ONLY by the ■/□ fraction key.
      if (action === 'DIV') {
        if (isShift) insertToken(' C ');
        else insertToken('÷');
        setIsShift(false);
        return;
      }

      // STAT / 1
      if (action === '1') {
        if (isShift) setMode('STAT');
        else insertToken('1');
        setIsShift(false);
        return;
      }

      // CMPLX / 2
      if (action === '2') {
        if (isShift) setMode('CMPLX');
        else insertToken('2');
        setIsShift(false);
        return;
      }

      // BASE / 3
      if (action === '3') {
        if (isShift) setMode('BASE-N');
        else insertToken('3');
        setIsShift(false);
        return;
      }

      // ADD (+ / Pol)
      if (action === 'ADD') {
        insertToken(isShift ? 'Pol(' : '+');
        setIsShift(false);
        return;
      }

      // SUB (- / Rec)
      if (action === 'SUB') {
        insertToken(isShift ? 'Rec(' : '-');
        setIsShift(false);
        return;
      }

      // 0 / Rnd
      if (action === '0') {
        if (isShift) {
          if (!result.includes('ERROR')) {
            const rounded = `${Math.round(vars.Ans)}`;
            setResult(rounded);
            setExactResult(rounded);
            setIsExactMode(false);
          }
        } else insertToken('0');
        setIsShift(false);
        return;
      }

      // DOT (. / Ran# / RanInt)
      if (action === 'DOT') {
        if (isShift) insertToken('Ran#');
        else if (isAlpha) insertToken('RanInt(1,6)');
        else insertToken('.');
        setIsShift(false);
        setIsAlpha(false);
        return;
      }

      // EXP (×10^x / π / e)
      if (action === 'EXP') {
        if (isShift) insertToken('π');
        else if (isAlpha) insertToken('e');
        else insertToken('×10^');
        setIsShift(false);
        setIsAlpha(false);
        return;
      }

      // ANS / DRG▶
      if (action === 'ANS') {
        if (isShift) {
          setAngleUnit((u) => (u === 'DEG' ? 'RAD' : u === 'RAD' ? 'GRA' : 'DEG'));
        } else insertToken('Ans');
        setIsShift(false);
        return;
      }

      // EQUALS (=)
      if (action === 'EQUALS') {
        handleCalculate();
        return;
      }

      // INV (x^-1 / x!)
      if (action === 'INV') {
        insertToken(isShift ? '!' : '^(-1)');
        setIsShift(false);
        return;
      }
    },
    [
      handleCalculate, handleSolve, insertToken, recallOlder, recallNewer,
      isShift, isAlpha, isStoreMode, mathState, historyIndex, result, vars.Ans,
      justRecalled,
    ]
  );

  // -----------------------------------------------------------------------
  // Physical computer keyboard binding
  // -----------------------------------------------------------------------
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || target.isContentEditable)
      ) {
        return; // never steal keys from form fields
      }

      // While any dialog is open the calculator must not react at all;
      // Escape closes the top-most dialog instead of clearing the screen.
      if (anyModalOpen) {
        if (e.key === 'Escape') {
          e.preventDefault();
          if (isGuideOpen) setIsGuideOpen(false);
          else if (isConstantsOpen) setIsConstantsOpen(false);
          else if (isHistoryOpen) setIsHistoryOpen(false);
          else if (isTableOpen) setIsTableOpen(false);
          else if (isMatrixOpen) setIsMatrixOpen(false);
          else if (isEqnOpen) setIsEqnOpen(false);
          else {
            setIsModeOpen(false);
            setIsSetupOpen(false);
          }
        }
        return;
      }

      const press = (action: string, sound: 'num' | 'func' | 'dpad' | 'ac' = 'func') => {
        e.preventDefault();
        playKeyClick(sound, soundEnabled);
        handleKeyPress(action);
      };
      const type = (token: string, sound: 'num' | 'func' = 'func') => {
        e.preventDefault();
        playKeyClick(sound, soundEnabled);
        insertToken(token);
      };

      const k = e.key;

      if (/^[0-9]$/.test(k)) return void press(k, 'num');

      switch (k) {
        case '.': return void press('DOT', 'num');
        case '+': return void press('ADD');
        case '-': return void press('SUB');
        case '*': case '×': return void press('MUL');
        case '/': case '÷': return void press('DIV');
        case '^': return void press('POW');
        case '(': return void press('OPEN_PAREN');
        case ')': return void press('CLOSE_PAREN');
        case ',': return void type(',');
        case '!': return void type('!');
        case '%': return void type('%');
        case 'Enter': case '=': return void press('EQUALS');
        case 'Backspace': return void press('DEL', 'ac');
        case 'Delete': return void press('DEL_FWD', 'ac');
        case 'Escape': return void press('AC', 'ac');
        case 'ArrowUp': return void press('UP', 'dpad');
        case 'ArrowDown': return void press('DOWN', 'dpad');
        case 'ArrowLeft': return void press('LEFT', 'dpad');
        case 'ArrowRight': return void press('RIGHT', 'dpad');
        default: break;
      }

      // Letter shortcuts (case-sensitive: Shift gives inverse/alt forms)
      switch (k) {
        case 's': return void type('sin(');
        case 'S': return void type('sin⁻¹(');
        case 'c': return void type('cos(');
        case 'C': return void type('cos⁻¹(');
        case 't': return void type('tan(');
        case 'T': return void type('tan⁻¹(');
        case 'h': return void type('sinh(');
        case 'l': return void type('log(');
        case 'L': return void type('ln(');
        case 'r': return void type('√(');
        case 'R': return void type('³√(');
        case 'p': return void type('π');
        case 'P': return void type(' P ');
        case 'a': return void type('Ans');
        case 'A': return void type('A');
        case 'b': case 'B': return void type('B');
        case 'd': case 'D': return void type('D');
        case 'E': return void type('E');
        case 'f': case 'F': return void type('F');
        case 'e': return void type('e');
        case 'x': return void type('X');
        case 'y': return void type('Y');
        case 'm': return void type('M');
        default: return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    anyModalOpen, isGuideOpen, isConstantsOpen, isHistoryOpen, isTableOpen,
    isMatrixOpen, isEqnOpen, handleKeyPress, insertToken, soundEnabled,
  ]);

  // Click-to-place cursor from the LCD
  const handleSelectCursor = useCallback(
    (cursor: CursorPosition) => {
      setMathState((s) => ({ ...s, cursor: clampCursor(s.items, cursor) }));
      setJustEvaluated(false);
      setJustRecalled(false);
      if (historyIndex !== -1) {
        setHistoryIndex(-1);
        setDraft(null);
      }
    },
    [historyIndex]
  );

  return (
    <div className="w-full flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 text-slate-100">
      {/* ---------------- CASIO FX-991ES PLUS PHYSICAL CASING ---------------- */}
      <div className="relative w-full max-w-[420px] rounded-[36px] bg-[#1a1e24] p-4 sm:p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.08)] border-t border-[#464f5d] border-b-[5px] border-b-[#0b0d10] flex flex-col transition-all">
        {/* Curved outer body texture and realistic subtle highlights */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[36px] bg-gradient-to-tr from-black/40 via-transparent to-white/5"
          aria-hidden="true"
        />

        {/* TOP BRANDING & SOLAR PANEL HEADER */}
        <div className="relative z-10 flex items-start justify-between mb-3 px-1">
          {/* Brand & Model Badges */}
          <div className="flex flex-col">
            <span className="font-sans font-black text-xl tracking-[0.14em] text-white/95 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] leading-none">
              CASIO
            </span>
            <span className="font-mono font-bold text-[11px] tracking-tight text-slate-300 mt-1 leading-none">
              fx-991ES PLUS
            </span>
            <span className="font-sans italic font-semibold text-[8.5px] tracking-wider text-slate-400 mt-0.5 leading-none">
              NATURAL-V.P.A.M.
            </span>
          </div>

          {/* SOLAR PANEL & 2nd EDITION BADGE */}
          <div className="flex flex-col items-end">
            <div className="w-24 h-7 rounded bg-[#2b1810] border border-[#5a3625] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] flex items-center justify-around p-1 overflow-hidden relative">
              {/* Photovoltaic glass reflection & grid cells */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-500/10 to-white/15 pointer-events-none" />
              <div className="w-full h-full flex justify-between gap-1 opacity-70">
                <span className="w-px h-full bg-[#8c5035]/60" />
                <span className="w-px h-full bg-[#8c5035]/60" />
                <span className="w-px h-full bg-[#8c5035]/60" />
                <span className="w-px h-full bg-[#8c5035]/60" />
              </div>
            </div>
            <span className="text-[8.5px] font-sans font-bold text-slate-400 tracking-tight mt-1">
              2nd edition
            </span>
          </div>
        </div>

        {/* NATURAL LCD SCREEN */}
        <div className="relative z-10 mb-2">
          <NaturalDisplay
            mathState={mathState}
            result={result}
            exactResult={exactResult}
            isExactMode={isExactMode}
            angleUnit={angleUnit}
            mode={mode}
            isShift={isShift}
            isAlpha={isAlpha}
            isMemorySet={vars.M !== 0}
            isStoreMode={isStoreMode}
            hasHistoryPrev={history.length > 0 && historyIndex < history.length - 1}
            hasHistoryNext={historyIndex > -1}
            onSelectCursor={handleSelectCursor}
          />
        </div>

        {/* PHYSICAL KEYPAD CLUSTER */}
        <div className="relative z-10">
          <Keypad
            onKeyPress={handleKeyPress}
            isShift={isShift}
            isAlpha={isAlpha}
            soundEnabled={soundEnabled}
          />
        </div>
      </div>

      {/* QUICK ACCESS CONTROLS / TOOLBAR */}
      <div className="w-full max-w-[420px] mt-4 flex items-center justify-between text-xs px-2 py-2 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              soundEnabled ? 'bg-slate-800 text-[#e5a93c]' : 'text-slate-500 hover:text-slate-300'
            }`}
            title="Toggle mechanical key audio"
          >
            {soundEnabled ? '🔊 Sound On' : '🔇 Muted'}
          </button>

          <button
            onClick={() => setAngleUnit((u) => (u === 'DEG' ? 'RAD' : u === 'RAD' ? 'GRA' : 'DEG'))}
            className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-slate-300"
          >
            Unit: <strong className="text-[#e5a93c]">{angleUnit}</strong>
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsHistoryOpen(true)}
            className="px-2 py-1 rounded hover:bg-slate-800 text-[11px] text-slate-300 transition-colors"
          >
            📜 Tape ({history.length})
          </button>

          <button
            onClick={() => {
              setConstCatalogTab('constants');
              setIsConstantsOpen(true);
            }}
            className="px-2 py-1 rounded hover:bg-slate-800 text-[11px] text-[#e5a93c] transition-colors"
          >
            CONST (40)
          </button>

          <button
            onClick={() => setIsGuideOpen(true)}
            className="px-2 py-1 rounded hover:bg-slate-800 text-[11px] text-slate-400 hover:text-white transition-colors"
          >
            Help ⌨
          </button>
        </div>
      </div>

      {/* ALL MODAL DIALOGS */}
      <ModeModal
        isOpen={isModeOpen || isSetupOpen}
        isSetup={isSetupOpen}
        currentMode={mode}
        currentAngleUnit={angleUnit}
        onSelectMode={(newMode) => {
          setMode(newMode);
          if (newMode === 'EQN') setIsEqnOpen(true);
          if (newMode === 'MATRIX' || newMode === 'VECTOR') setIsMatrixOpen(true);
          if (newMode === 'TABLE') setIsTableOpen(true);
        }}
        onSelectAngleUnit={(newUnit) => setAngleUnit(newUnit)}
        onClose={() => {
          setIsModeOpen(false);
          setIsSetupOpen(false);
        }}
      />

      <EquationSolver
        isOpen={isEqnOpen}
        onClose={() => setIsEqnOpen(false)}
        onInsertResult={(val) => insertToken(val)}
      />

      <MatrixSolver
        isOpen={isMatrixOpen}
        onClose={() => setIsMatrixOpen(false)}
        onInsertResult={(val) => insertToken(val)}
      />

      <TableGenerator
        isOpen={isTableOpen}
        onClose={() => setIsTableOpen(false)}
        angleUnit={angleUnit}
        vars={vars}
      />

      <ConstantsCatalog
        isOpen={isConstantsOpen}
        onClose={() => setIsConstantsOpen(false)}
        initialTab={constCatalogTab}
        onInsertValue={(val) => insertToken(val)}
      />

      <HistoryDrawer
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onReplay={(item) => {
          applyHistoryItem(item);
        }}
        onClear={() => {
          setHistory([]);
          setHistoryIndex(-1);
          setDraft(null);
        }}
      />

      <GuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
};
