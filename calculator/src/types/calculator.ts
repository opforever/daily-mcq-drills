export type AngleUnit = 'DEG' | 'RAD' | 'GRA';

export type CalcMode = 
  | 'COMP' 
  | 'CMPLX' 
  | 'STAT' 
  | 'BASE-N' 
  | 'EQN' 
  | 'MATRIX' 
  | 'TABLE' 
  | 'VECTOR';

export type BaseNFormat = 'DEC' | 'HEX' | 'BIN' | 'OCT';

export interface HistoryItem {
  id: string;
  expression: string;
  /** Pretty single-line form for the tape, e.g. "(√2/2)+(√2/3)" */
  display?: string;
  /** JSON snapshot of the structured MathItem[] so replays restore real fractions */
  modelJson?: string;
  result: string;
  exactResult?: string;
  timestamp: number;
  angleUnit: AngleUnit;
  mode: CalcMode;
}

export interface VariableStore {
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
  F: number;
  X: number;
  Y: number;
  M: number;
  Ans: number;
}

export interface ComplexNumber {
  re: number;
  im: number;
}

export interface ScientificConstant {
  id: number;
  symbol: string;
  name: string;
  value: number;
  unit: string;
  category: string;
}

export interface UnitConversion {
  id: number;
  name: string;
  fromUnit: string;
  toUnit: string;
  factor: number; // multiply fromUnit by factor to get toUnit
  formula?: (val: number) => number;
}

export interface MatrixData {
  rows: number;
  cols: number;
  values: number[][];
}

export interface VectorData {
  dim: 2 | 3;
  values: number[];
}
