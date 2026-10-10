import React, { useState } from 'react';
import { matrixDet2x2, matrixDet3x3 } from '../utils/mathEngine';

interface MatrixSolverProps {
  isOpen: boolean;
  onClose: () => void;
  onInsertResult: (val: string) => void;
}

export const MatrixSolver: React.FC<MatrixSolverProps> = ({
  isOpen,
  onClose,
  onInsertResult,
}) => {
  const [dim, setDim] = useState<2 | 3>(2);
  const [matrixA, setMatrixA] = useState<number[][]>([
    [1, 2, 0],
    [3, 4, 0],
    [0, 0, 1],
  ]);
  const [matrixB, setMatrixB] = useState<number[][]>([
    [2, 0, 0],
    [1, 3, 0],
    [0, 0, 1],
  ]);
  const [calcResult, setCalcResult] = useState<string | null>(null);
  const [resMatrix, setResMatrix] = useState<number[][] | null>(null);

  if (!isOpen) return null;

  const updateCellA = (r: number, c: number, val: string) => {
    const next = matrixA.map((row) => [...row]);
    next[r][c] = parseFloat(val) || 0;
    setMatrixA(next);
  };

  const updateCellB = (r: number, c: number, val: string) => {
    const next = matrixB.map((row) => [...row]);
    next[r][c] = parseFloat(val) || 0;
    setMatrixB(next);
  };

  const handleDetA = () => {
    if (dim === 2) {
      const d = matrixDet2x2(matrixA);
      setCalcResult(`det(MatA) = ${d}`);
      setResMatrix(null);
    } else {
      const d = matrixDet3x3(matrixA);
      setCalcResult(`det(MatA) = ${d}`);
      setResMatrix(null);
    }
  };

  const handleMultiply = () => {
    const size = dim;
    const res: number[][] = Array(size).fill(0).map(() => Array(size).fill(0));
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let sum = 0;
        for (let k = 0; k < size; k++) {
          sum += matrixA[i][k] * matrixB[k][j];
        }
        res[i][j] = sum;
      }
    }
    setResMatrix(res);
    setCalcResult(`MatA × MatB computed`);
  };

  const handleAdd = () => {
    const size = dim;
    const res: number[][] = Array(size).fill(0).map(() => Array(size).fill(0));
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        res[i][j] = matrixA[i][j] + matrixB[i][j];
      }
    }
    setResMatrix(res);
    setCalcResult(`MatA + MatB computed`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#20252e] border border-slate-700/80 rounded-xl w-full max-w-lg p-5 text-slate-100 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e5a93c]" />
            <h3 className="font-bold text-sm tracking-wide">MATRIX Mode (MatA / MatB)</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-slate-800"
          >
            ESC
          </button>
        </div>

        {/* Dimension selector */}
        <div className="flex items-center gap-3 my-3">
          <span className="text-xs text-slate-400">Dimension:</span>
          <div className="flex gap-2">
            <button
              onClick={() => setDim(2)}
              className={`px-3 py-1 rounded text-xs font-mono font-bold ${
                dim === 2 ? 'bg-[#e5a93c] text-black' : 'bg-slate-800 text-slate-300'
              }`}
            >
              2 × 2
            </button>
            <button
              onClick={() => setDim(3)}
              className={`px-3 py-1 rounded text-xs font-mono font-bold ${
                dim === 3 ? 'bg-[#e5a93c] text-black' : 'bg-slate-800 text-slate-300'
              }`}
            >
              3 × 3
            </button>
          </div>
        </div>

        {/* Matrices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
          {/* MatA */}
          <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
            <span className="text-xs font-bold text-[#e5a93c] block mb-2 font-mono">MatA ({dim}×{dim})</span>
            <div className={`grid gap-1.5 font-mono ${dim === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
              {Array.from({ length: dim }).map((_, r) =>
                Array.from({ length: dim }).map((__, c) => (
                  <input
                    key={`a-${r}-${c}`}
                    type="number"
                    value={matrixA[r][c]}
                    onChange={(e) => updateCellA(r, c, e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 text-center py-1 text-xs rounded text-white font-mono"
                  />
                ))
              )}
            </div>
          </div>

          {/* MatB */}
          <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
            <span className="text-xs font-bold text-[#e05068] block mb-2 font-mono">MatB ({dim}×{dim})</span>
            <div className={`grid gap-1.5 font-mono ${dim === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
              {Array.from({ length: dim }).map((_, r) =>
                Array.from({ length: dim }).map((__, c) => (
                  <input
                    key={`b-${r}-${c}`}
                    type="number"
                    value={matrixB[r][c]}
                    onChange={(e) => updateCellB(r, c, e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 text-center py-1 text-xs rounded text-white font-mono"
                  />
                ))
              )}
            </div>
          </div>
        </div>

        {/* Operations */}
        <div className="flex flex-wrap gap-2 my-3">
          <button
            onClick={handleDetA}
            className="flex-1 min-w-[100px] py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-xs font-mono rounded text-slate-200 border border-slate-700"
          >
            det(MatA)
          </button>
          <button
            onClick={handleAdd}
            className="flex-1 min-w-[100px] py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-xs font-mono rounded text-slate-200 border border-slate-700"
          >
            MatA + MatB
          </button>
          <button
            onClick={handleMultiply}
            className="flex-1 min-w-[100px] py-1.5 px-3 bg-[#e5a93c] text-black hover:brightness-105 text-xs font-mono font-bold rounded"
          >
            MatA × MatB
          </button>
        </div>

        {/* Results */}
        {calcResult && (
          <div className="bg-[#b4c8a8] text-slate-950 p-3 rounded-lg font-mono border border-[#384234] mt-3">
            <div className="flex justify-between items-center text-xs font-bold mb-1">
              <span>{calcResult}</span>
              {calcResult.includes('det') && (
                <button
                  onClick={() => {
                    const match = calcResult.match(/=\s*([-\d.]+)/);
                    if (match) onInsertResult(match[1]);
                    onClose();
                  }}
                  className="bg-black/10 hover:bg-black/20 text-[10px] px-2 py-0.5 rounded font-sans"
                >
                  Paste to Calc
                </button>
              )}
            </div>

            {resMatrix && (
              <div className="mt-2 text-center text-xs space-y-1">
                {resMatrix.map((row, r) => (
                  <div key={r} className="flex justify-center gap-4">
                    {row.map((val, c) => (
                      <span key={c} className="w-12 inline-block font-bold">
                        {val}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
