import React, { useState, useEffect, useCallback } from 'react';
import { AngleUnit, CalcMode, HistoryItem, VariableStore } from '../types/calculator';
import { NaturalDisplay } from './NaturalDisplay';
import { Keypad } from './Keypad';
import { evaluateExpression, toEng, toDMS } from '../utils/mathEngine';
import {
  MathExpressionState,
  createInitialModel,
  mathModelToEvaluatableString,
  insertTokenIntoModel,
  deleteFromModel,
  moveCursorInModel,
  genId,
} from '../utils/mathModel';
import { ModeModal } from './ModeModal';
import { EquationSolver } from './EquationSolver';
import { MatrixSolver } from './MatrixSolver';
import { TableGenerator } from './TableGenerator';
import { ConstantsCatalog } from './ConstantsCatalog';
import { HistoryDrawer } from './HistoryDrawer';
import { GuideModal } from './GuideModal';

export const CasioCalculator: React.FC = () => {
  // Structured Math State (handles fractions and cursor navigation with zero bugs)
  const [mathState, setMathState] = useState<MathExpressionState>(createInitialModel);
  const [result, setResult] = useState('1.178511302');
  const [exactResult, setExactResult] = useState('5√2/6');
  const [isExactMode, setIsExactMode] = useState(true);

  const [angleUnit, setAngleUnit] = useState<AngleUnit>('RAD');
  const [mode, setMode] = useState<CalcMode>('COMP');
  const [isShift, setIsShift] = useState(false);
  const [isAlpha, setIsAlpha] = useState(false);
  const [isStoreMode, setIsStoreMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Variables store
  const [vars, setVars] = useState<VariableStore>({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    X: 0,
    Y: 0,
    M: 0,
    Ans: 1.178511302,
  });

  // History tape
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      expression: '(√2/2)+(√2/3)',
      result: '1.178511302',
      exactResult: '5√2/6',
      timestamp: Date.now() - 3600000,
      angleUnit: 'RAD',
      mode: 'COMP',
    },
    {
      id: 'init-2',
      expression: 'sin(π/6)',
      result: '0.5',
      exactResult: '1/2',
      timestamp: Date.now() - 1800000,
      angleUnit: 'RAD',
      mode: 'COMP',
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

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

  // Evaluate current expression
  const handleCalculate = useCallback(() => {
    const exprString = mathModelToEvaluatableString(mathState.items);
    if (!exprString.trim()) return;
    const res = evaluateExpression(exprString, angleUnit, vars);

    setResult(res.text);
    setExactResult(res.exact);
    setIsExactMode(true);

    if (!res.isError) {
      setVars((prev) => ({ ...prev, Ans: res.numValue }));

      const newItem: HistoryItem = {
        id: Math.random().toString(36).substring(2, 9),
        expression: exprString,
        result: res.text,
        exactResult: res.exact,
        timestamp: Date.now(),
        angleUnit,
        mode,
      };

      setHistory((prev) => [newItem, ...prev.slice(0, 49)]);
      setHistoryIndex(-1);
    }
  }, [mathState, angleUnit, vars, mode]);

  // Insert token or function into expression
  const insertToken = useCallback((token: string) => {
    setMathState((prev) => insertTokenIntoModel(prev, token));
  }, []);

  // Handle all keypad buttons
  const handleKeyPress = useCallback((action: string, _label?: string) => {
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

    // ON (Reset)
    if (action === 'ON') {
      setMathState({ items: [], cursor: { offset: 0 } });
      setResult('0');
      setExactResult('0');
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // AC (All Clear)
    if (action === 'AC') {
      setMathState({ items: [], cursor: { offset: 0 } });
      setResult('0');
      setExactResult('0');
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // DEL (Delete character before cursor)
    if (action === 'DEL') {
      if (isShift) {
        setIsShift(false);
        return;
      }
      setMathState((s) => deleteFromModel(s));
      return;
    }

    // MODE / SETUP
    if (action === 'MODE') {
      if (isShift) {
        setIsSetupOpen(true);
      } else {
        setIsModeOpen(true);
      }
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // D-PAD IN-FRACTION CURSOR NAVIGATION & HISTORY REPLAY
    if (action === 'UP') {
      // If inside fraction denominator, UP jumps directly to numerator!
      if (mathState.cursor.fracId && mathState.cursor.field === 'den') {
        setMathState((s) => moveCursorInModel(s, 'UP'));
        return;
      }
      // Replay history if at root
      if (!mathState.cursor.fracId && history.length > 0) {
        const nextIdx = historyIndex < history.length - 1 ? historyIndex + 1 : 0;
        setHistoryIndex(nextIdx);
        setMathState({
          items: [{ type: 'text', id: genId(), value: history[nextIdx].expression }],
          cursor: { offset: 1 },
        });
        setResult(history[nextIdx].result);
        setExactResult(history[nextIdx].exactResult || history[nextIdx].result);
        return;
      }
      setMathState((s) => moveCursorInModel(s, 'UP'));
      return;
    }

    if (action === 'DOWN') {
      // If inside fraction numerator, DOWN jumps directly to denominator!
      if (mathState.cursor.fracId && mathState.cursor.field === 'num') {
        setMathState((s) => moveCursorInModel(s, 'DOWN'));
        return;
      }
      // Replay history if at root
      if (!mathState.cursor.fracId && history.length > 0 && historyIndex >= 0) {
        const nextIdx = historyIndex > 0 ? historyIndex - 1 : -1;
        setHistoryIndex(nextIdx);
        if (nextIdx >= 0) {
          setMathState({
            items: [{ type: 'text', id: genId(), value: history[nextIdx].expression }],
            cursor: { offset: 1 },
          });
          setResult(history[nextIdx].result);
          setExactResult(history[nextIdx].exactResult || history[nextIdx].result);
        } else {
          setMathState({ items: [], cursor: { offset: 0 } });
          setResult('0');
        }
        return;
      }
      setMathState((s) => moveCursorInModel(s, 'DOWN'));
      return;
    }

    if (action === 'LEFT') {
      setMathState((s) => moveCursorInModel(s, 'LEFT'));
      return;
    }

    if (action === 'RIGHT') {
      setMathState((s) => moveCursorInModel(s, 'RIGHT'));
      return;
    }

    // S<=>D TOGGLE (Exact <-> Decimal)
    if (action === 'S_D') {
      setIsExactMode((prev) => !prev);
      return;
    }

    // CALC / SOLVE
    if (action === 'CALC') {
      if (isShift) {
        // SOLVE
        handleCalculate();
      } else {
        handleCalculate();
      }
      setIsShift(false);
      return;
    }

    // INTEGRAL / DERIVATIVE / Σ
    if (action === 'INTEGRAL') {
      if (isShift) {
        // d/dx(f, a)
        insertToken('d/dx(X^2, 3)');
      } else if (isAlpha) {
        insertToken(':');
      } else {
        // Definite integral: ∫(f, a, b)
        insertToken('∫(X, 0, 1)');
      }
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // LOG_AB / Σ
    if (action === 'LOG_AB') {
      if (isShift) {
        insertToken('Σ(X, 1, 10)');
      } else {
        insertToken('log_2(8)');
      }
      setIsShift(false);
      return;
    }

    // FRACTION (■/□)
    if (action === 'FRAC') {
      setMathState((s) => insertTokenIntoModel(s, 'FRAC'));
      setIsShift(false);
      return;
    }

    // SQRT (√ / ³√)
    if (action === 'SQRT') {
      if (isShift) {
        insertToken('³√(');
      } else {
        insertToken('√(');
      }
      setIsShift(false);
      return;
    }

    // SQR (x² / x³)
    if (action === 'SQR') {
      if (isShift) {
        insertToken('^3');
      } else if (isAlpha) {
        // DEC base
        setMode('BASE-N');
      } else {
        insertToken('^2');
      }
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // POW (x^■ / ⁿ√)
    if (action === 'POW') {
      if (isShift) {
        insertToken('ⁿ√(');
      } else if (isAlpha) {
        // HEX base
        setMode('BASE-N');
      } else {
        insertToken('^');
      }
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // LOG (10^x / BIN)
    if (action === 'LOG') {
      if (isShift) {
        insertToken('10^(');
      } else if (isAlpha) {
        setMode('BASE-N');
      } else {
        insertToken('log(');
      }
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // LN (e^x / OCT)
    if (action === 'LN') {
      if (isShift) {
        insertToken('e^(');
      } else if (isAlpha) {
        setMode('BASE-N');
      } else {
        insertToken('ln(');
      }
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // NEG / A
    if (action === 'NEG') {
      if (isAlpha) {
        insertToken('A');
      } else {
        insertToken('-');
      }
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // DMS / B
    if (action === 'DMS') {
      if (isAlpha) {
        insertToken('B');
      } else {
        // Convert current result or insert degree symbol
        const num = parseFloat(result);
        if (!Number.isNaN(num)) {
          setExactResult(toDMS(num));
          setIsExactMode(true);
        } else {
          insertToken('°');
        }
      }
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // HYP / C / Abs
    if (action === 'HYP') {
      if (isShift) {
        // Abs
        insertToken('Abs(');
      } else if (isAlpha) {
        insertToken('C');
      } else {
        // Hyperbolic mode cycle: inserts sinh(
        insertToken('sinh(');
      }
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // SIN / sin⁻¹ / D
    if (action === 'SIN') {
      if (isShift) {
        insertToken('sin⁻¹(');
      } else if (isAlpha) {
        insertToken('D');
      } else {
        insertToken('sin(');
      }
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // COS / cos⁻¹ / E
    if (action === 'COS') {
      if (isShift) {
        insertToken('cos⁻¹(');
      } else if (isAlpha) {
        insertToken('E');
      } else {
        insertToken('cos(');
      }
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // TAN / tan⁻¹ / F
    if (action === 'TAN') {
      if (isShift) {
        insertToken('tan⁻¹(');
      } else if (isAlpha) {
        insertToken('F');
      } else {
        insertToken('tan(');
      }
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // RCL / STO
    if (action === 'RCL') {
      if (isShift) {
        setIsStoreMode(true);
      } else {
        // Recall Ans or default
        insertToken('Ans');
      }
      setIsShift(false);
      return;
    }

    // ENG / i
    if (action === 'ENG') {
      if (isAlpha) {
        insertToken('i');
      } else {
        const num = parseFloat(result);
        if (!Number.isNaN(num)) {
          setResult(toEng(num));
        }
      }
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // ( / %
    if (action === 'OPEN_PAREN') {
      if (isShift) {
        insertToken('%');
      } else {
        insertToken('(');
      }
      setIsShift(false);
      return;
    }

    // ) / , / X
    if (action === 'CLOSE_PAREN') {
      if (isShift) {
        insertToken(',');
      } else if (isAlpha) {
        insertToken('X');
      } else {
        insertToken(')');
      }
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // M+ / M- / M
    if (action === 'M_PLUS') {
      if (isShift) {
        // M-
        const num = parseFloat(result) || 0;
        setVars((v) => ({ ...v, M: v.M - num }));
      } else if (isAlpha) {
        insertToken('M');
      } else {
        // M+
        const num = parseFloat(result) || 0;
        setVars((v) => ({ ...v, M: v.M + num }));
      }
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // CONST / 7
    if (action === '7') {
      if (isShift) {
        setConstCatalogTab('constants');
        setIsConstantsOpen(true);
      } else {
        insertToken('7');
      }
      setIsShift(false);
      return;
    }

    // CONV / 8
    if (action === '8') {
      if (isShift) {
        setConstCatalogTab('conversions');
        setIsConstantsOpen(true);
      } else {
        insertToken('8');
      }
      setIsShift(false);
      return;
    }

    // CLR / 9
    if (action === '9') {
      if (isShift) {
        // Clear memory
        setVars({
          A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, X: 0, Y: 0, M: 0, Ans: 0,
        });
      } else {
        insertToken('9');
      }
      setIsShift(false);
      return;
    }

    // MATRIX / 4
    if (action === '4') {
      if (isShift) {
        setIsMatrixOpen(true);
      } else {
        insertToken('4');
      }
      setIsShift(false);
      return;
    }

    // VECTOR / 5
    if (action === '5') {
      if (isShift) {
        setIsMatrixOpen(true);
      } else {
        insertToken('5');
      }
      setIsShift(false);
      return;
    }

    // 6
    if (action === '6') {
      insertToken('6');
      return;
    }

    // MUL (× / nPr)
    if (action === 'MUL') {
      if (isShift) {
        insertToken(' P ');
      } else {
        insertToken('×');
      }
      setIsShift(false);
      return;
    }

    // DIV (÷ / nCr)
    if (action === 'DIV') {
      if (isShift) {
        insertToken(' C ');
      } else {
        insertToken('/');
      }
      setIsShift(false);
      return;
    }

    // STAT / 1
    if (action === '1') {
      if (isShift) {
        setMode('STAT');
      } else {
        insertToken('1');
      }
      setIsShift(false);
      return;
    }

    // CMPLX / 2
    if (action === '2') {
      if (isShift) {
        setMode('CMPLX');
      } else {
        insertToken('2');
      }
      setIsShift(false);
      return;
    }

    // BASE / 3
    if (action === '3') {
      if (isShift) {
        setMode('BASE-N');
      } else {
        insertToken('3');
      }
      setIsShift(false);
      return;
    }

    // ADD (+ / Pol)
    if (action === 'ADD') {
      if (isShift) {
        insertToken('Pol(');
      } else {
        insertToken('+');
      }
      setIsShift(false);
      return;
    }

    // SUB (- / Rec)
    if (action === 'SUB') {
      if (isShift) {
        insertToken('Rec(');
      } else {
        insertToken('-');
      }
      setIsShift(false);
      return;
    }

    // 0 / Rnd
    if (action === '0') {
      if (isShift) {
        const num = parseFloat(result);
        if (!Number.isNaN(num)) setResult(`${Math.round(num)}`);
      } else {
        insertToken('0');
      }
      setIsShift(false);
      return;
    }

    // DOT (. / Ran# / RanInt)
    if (action === 'DOT') {
      if (isShift) {
        insertToken('Ran#');
      } else if (isAlpha) {
        insertToken('RanInt(1, 6)');
      } else {
        insertToken('.');
      }
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // EXP (×10^x / π / e)
    if (action === 'EXP') {
      if (isShift) {
        insertToken('π');
      } else if (isAlpha) {
        insertToken('e');
      } else {
        insertToken('×10^');
      }
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    // ANS / DRG▶
    if (action === 'ANS') {
      if (isShift) {
        // Cycle angle unit
        setAngleUnit((u) => (u === 'DEG' ? 'RAD' : u === 'RAD' ? 'GRA' : 'DEG'));
      } else {
        insertToken('Ans');
      }
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
      if (isShift) {
        insertToken('!');
      } else {
        insertToken('^(-1)');
      }
      setIsShift(false);
      return;
    }
  }, [handleCalculate, insertToken, isShift, isAlpha, history, historyIndex, result]);

  // Physical computer keyboard binding
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't capture when typing in inputs/modals
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key >= '0' && e.key <= '9') {
        e.preventDefault();
        handleKeyPress(e.key);
      } else if (e.key === '+') {
        e.preventDefault();
        handleKeyPress('ADD');
      } else if (e.key === '-') {
        e.preventDefault();
        handleKeyPress('SUB');
      } else if (e.key === '*') {
        e.preventDefault();
        handleKeyPress('MUL');
      } else if (e.key === '/') {
        e.preventDefault();
        handleKeyPress('DIV');
      } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        handleKeyPress('EQUALS');
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        handleKeyPress('DEL');
      } else if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
        e.preventDefault();
        handleKeyPress('AC');
      } else if (e.key === '.') {
        e.preventDefault();
        handleKeyPress('DOT');
      } else if (e.key === '(') {
        e.preventDefault();
        handleKeyPress('OPEN_PAREN');
      } else if (e.key === ')') {
        e.preventDefault();
        handleKeyPress('CLOSE_PAREN');
      } else if (e.key === '^') {
        e.preventDefault();
        handleKeyPress('POW');
      } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        insertToken('sin(');
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        insertToken('π');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        handleKeyPress('UP');
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        handleKeyPress('DOWN');
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handleKeyPress('LEFT');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleKeyPress('RIGHT');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyPress, insertToken]);

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
            hasHistoryPrev={history.length > 0}
            hasHistoryNext={historyIndex > 0}
            onSelectCursor={(cursor) => setMathState((s) => ({ ...s, cursor }))}
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
          setMathState({
            items: [{ type: 'text', id: genId(), value: item.expression }],
            cursor: { offset: 1 },
          });
          setResult(item.result);
          setExactResult(item.exactResult || item.result);
        }}
        onClear={() => setHistory([])}
      />

      <GuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
};
