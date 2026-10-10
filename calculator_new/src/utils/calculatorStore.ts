import { AngleUnit, CalcMode, HistoryItem, VariableStore } from '../types/calculator';
import { MathExpressionState, createInitialModel } from './mathModel';

export interface CalculatorSessionState {
  mathState: MathExpressionState;
  result: string;
  exactResult: string;
  isExactMode: boolean;
  angleUnit: AngleUnit;
  mode: CalcMode;
  vars: VariableStore;
  history: HistoryItem[];
  historyIndex: number;
  soundEnabled: boolean;
}

const DEFAULT_CALC_STATE: CalculatorSessionState = {
  mathState: createInitialModel(),
  result: '0',
  exactResult: '0',
  isExactMode: true,
  angleUnit: 'DEG',
  mode: 'COMP',
  vars: {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    X: 0,
    Y: 0,
    M: 0,
    Ans: 0,
  },
  history: [],
  historyIndex: -1,
  soundEnabled: true,
};

const STORAGE_KEY = 'kips_calculator_session_state_v2';

let memoryCalcState: CalculatorSessionState | null = null;

export function getCalculatorSession(): CalculatorSessionState {
  if (memoryCalcState) return memoryCalcState;
  try {
    // Purge incompatible legacy session from v1
    sessionStorage.removeItem('kips_calculator_session_state_v1');
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.mathState && parsed.vars) {
        // Ensure cursor has valid stack array and offset
        if (!parsed.mathState.cursor || !Array.isArray(parsed.mathState.cursor.stack)) {
          parsed.mathState.cursor = { stack: [], offset: Number(parsed.mathState?.cursor?.offset) || 0 };
        }
        if (!Array.isArray(parsed.mathState.items)) {
          parsed.mathState.items = [];
        }
        memoryCalcState = parsed;
        return parsed;
      }
    }
  } catch {}
  memoryCalcState = { ...DEFAULT_CALC_STATE };
  return memoryCalcState;
}

export function saveCalculatorSession(state: Partial<CalculatorSessionState>): void {
  const current = getCalculatorSession();
  const updated: CalculatorSessionState = { ...current, ...state };
  memoryCalcState = updated;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {}
}

export function resetCalculatorSession(): CalculatorSessionState {
  memoryCalcState = {
    ...DEFAULT_CALC_STATE,
    mathState: createInitialModel(),
  };
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {}
  return memoryCalcState;
}
