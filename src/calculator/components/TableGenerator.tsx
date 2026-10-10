import React, { useState } from 'react';
import { AngleUnit, VariableStore } from '../types/calculator';
import { evaluateExpression } from '../utils/mathEngine';

interface TableGeneratorProps {
  isOpen: boolean;
  onClose: () => void;
  angleUnit: AngleUnit;
  vars: VariableStore;
}

export const TableGenerator: React.FC<TableGeneratorProps> = ({
  isOpen,
  onClose,
  angleUnit,
  vars,
}) => {
  const [fxExpr, setFxExpr] = useState('X^2 - 4');
  const [start, setStart] = useState('-3');
  const [end, setEnd] = useState('3');
  const [step, setStep] = useState('1');
  const [rows, setRows] = useState<{ x: number; fx: string }[]>([]);
  const [hasGenerated, setHasGenerated] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = () => {
    const s = parseFloat(start) || 0;
    const e = parseFloat(end) || 0;
    const st = parseFloat(step) || 1;

    if (st <= 0) return;
    const count = Math.min(Math.floor((e - s) / st) + 1, 50);

    const generated: { x: number; fx: string }[] = [];
    for (let i = 0; i < count; i++) {
      const curX = Number((s + i * st).toFixed(6));
      const res = evaluateExpression(fxExpr, angleUnit, { ...vars, X: curX });
      generated.push({ x: curX, fx: res.exact });
    }
    setRows(generated);
    setHasGenerated(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#20252e] border border-slate-700/80 rounded-xl w-full max-w-md p-5 text-slate-100 shadow-2xl max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between pb-3 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e5a93c]" />
            <h3 className="font-bold text-sm tracking-wide">TABLE Mode (f(X) Generator)</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-slate-800"
          >
            ESC
          </button>
        </div>

        {/* Inputs */}
        <div className="space-y-3 my-3 text-xs font-mono">
          <div>
            <label className="block text-slate-400 mb-1">f(X) = </label>
            <input
              type="text"
              value={fxExpr}
              onChange={(e) => setFxExpr(e.target.value)}
              placeholder="e.g. 2*X + 1 or X^2"
              className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-white"
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-slate-400 mb-1">Start</label>
              <input
                type="number"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">End</label>
              <input
                type="number"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Step</label>
              <input
                type="number"
                value={step}
                onChange={(e) => setStep(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white"
              />
            </div>
          </div>

          <button
            onClick={handleGenerate}
            className="w-full py-2 bg-[#e5a93c] text-black font-bold text-xs rounded hover:brightness-105"
          >
            Generate Table
          </button>
        </div>

        {/* Table Display */}
        {hasGenerated && (
          <div className="flex-1 overflow-y-auto bg-[#b4c8a8] border border-[#384234] rounded-lg p-2.5 font-mono text-slate-950 text-xs mt-2 scrollbar-thin">
            <div className="grid grid-cols-3 font-bold border-b border-slate-900 pb-1 mb-1 text-center">
              <span>No.</span>
              <span>X</span>
              <span>f(X)</span>
            </div>
            <div className="divide-y divide-black/10">
              {rows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-3 py-1 text-center hover:bg-black/5">
                  <span className="opacity-60">{idx + 1}</span>
                  <span className="font-semibold">{row.x}</span>
                  <span className="font-bold">{row.fx}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
