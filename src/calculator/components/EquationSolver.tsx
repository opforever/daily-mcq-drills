import React, { useState } from 'react';
import { solveLinear2, solveQuadratic, solveCubic } from '../utils/mathEngine';

interface EquationSolverProps {
  isOpen: boolean;
  onClose: () => void;
  onInsertResult: (val: string) => void;
}

export const EquationSolver: React.FC<EquationSolverProps> = ({
  isOpen,
  onClose,
  onInsertResult,
}) => {
  const [eqType, setEqType] = useState<'2lin' | 'quad' | 'cubic'>('quad');

  // Quadratic inputs: ax² + bx + c = 0
  const [qA, setQA] = useState('1');
  const [qB, setQB] = useState('-5');
  const [qC, setQC] = useState('6');
  const [quadRoots, setQuadRoots] = useState<{ x1: string; x2: string } | null>(null);

  // 2-Unknown Linear: a1*x + b1*y = c1, a2*x + b2*y = c2
  const [lA1, setLA1] = useState('2');
  const [lB1, setLB1] = useState('3');
  const [lC1, setLC1] = useState('8');
  const [lA2, setLA2] = useState('1');
  const [lB2, setLB2] = useState('-1');
  const [lC2, setLC2] = useState('-1');
  const [linSol, setLinSol] = useState<{ x: string; y: string } | null>(null);

  // Cubic: ax³ + bx² + cx + d = 0
  const [cA, setCA] = useState('1');
  const [cB, setCB] = useState('-6');
  const [cC, setCC] = useState('11');
  const [cD, setCD] = useState('-6');
  const [cubicRoots, setCubicRoots] = useState<{ x1: string; x2: string; x3: string } | null>(null);

  if (!isOpen) return null;

  const handleSolveQuad = () => {
    const a = parseFloat(qA) || 0;
    const b = parseFloat(qB) || 0;
    const c = parseFloat(qC) || 0;
    setQuadRoots(solveQuadratic(a, b, c));
  };

  const handleSolveLin = () => {
    const a1 = parseFloat(lA1) || 0;
    const b1 = parseFloat(lB1) || 0;
    const c1 = parseFloat(lC1) || 0;
    const a2 = parseFloat(lA2) || 0;
    const b2 = parseFloat(lB2) || 0;
    const c2 = parseFloat(lC2) || 0;
    setLinSol(solveLinear2(a1, b1, c1, a2, b2, c2));
  };

  const handleSolveCubic = () => {
    const a = parseFloat(cA) || 0;
    const b = parseFloat(cB) || 0;
    const c = parseFloat(cC) || 0;
    const d = parseFloat(cD) || 0;
    setCubicRoots(solveCubic(a, b, c, d));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#20252e] border border-slate-700/80 rounded-xl w-full max-w-md p-5 text-slate-100 shadow-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#94c973]" />
            <h3 className="font-bold text-sm tracking-wide">EQN Solver (fx-991ES)</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-slate-800"
          >
            ESC
          </button>
        </div>

        {/* EQN Type Tabs */}
        <div className="flex rounded-lg bg-slate-900/60 p-1 my-3 text-xs font-mono">
          <button
            onClick={() => setEqType('quad')}
            className={`flex-1 py-1.5 rounded-md font-medium transition-colors ${
              eqType === 'quad' ? 'bg-[#94c973] text-black font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            ax² + bx + c = 0
          </button>
          <button
            onClick={() => setEqType('2lin')}
            className={`flex-1 py-1.5 rounded-md font-medium transition-colors ${
              eqType === '2lin' ? 'bg-[#94c973] text-black font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            2 Unknowns
          </button>
          <button
            onClick={() => setEqType('cubic')}
            className={`flex-1 py-1.5 rounded-md font-medium transition-colors ${
              eqType === 'cubic' ? 'bg-[#94c973] text-black font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Cubic
          </button>
        </div>

        {/* QUADRATIC */}
        {eqType === 'quad' && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2 text-xs font-mono">
              <div>
                <label className="block text-slate-400 mb-1">a (x²)</label>
                <input
                  type="number"
                  value={qA}
                  onChange={(e) => setQA(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">b (x)</label>
                <input
                  type="number"
                  value={qB}
                  onChange={(e) => setQB(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">c (const)</label>
                <input
                  type="number"
                  value={qC}
                  onChange={(e) => setQC(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-white"
                />
              </div>
            </div>

            <button
              onClick={handleSolveQuad}
              className="w-full py-2 bg-[#94c973] text-slate-950 font-bold text-xs rounded hover:brightness-105"
            >
              Solve Quadratic
            </button>

            {quadRoots && (
              <div className="bg-[#b4c8a8] text-slate-950 p-3 rounded-lg font-mono text-sm space-y-1 border border-[#384234]">
                <div className="flex justify-between items-center">
                  <span>X₁ = <strong className="text-base">{quadRoots.x1}</strong></span>
                  <button
                    onClick={() => { onInsertResult(quadRoots.x1); onClose(); }}
                    className="text-[10px] bg-black/10 hover:bg-black/20 px-2 py-0.5 rounded font-sans font-semibold"
                  >
                    Paste to Calc
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <span>X₂ = <strong className="text-base">{quadRoots.x2}</strong></span>
                  <button
                    onClick={() => { onInsertResult(quadRoots.x2); onClose(); }}
                    className="text-[10px] bg-black/10 hover:bg-black/20 px-2 py-0.5 rounded font-sans font-semibold"
                  >
                    Paste to Calc
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 2-UNKNOWNS LINEAR */}
        {eqType === '2lin' && (
          <div className="space-y-4">
            <div className="space-y-2 text-xs font-mono">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-slate-400 mb-1">a₁·X</label>
                  <input
                    type="number"
                    value={lA1}
                    onChange={(e) => setLA1(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">b₁·Y</label>
                  <input
                    type="number"
                    value={lB1}
                    onChange={(e) => setLB1(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">= c₁</label>
                  <input
                    type="number"
                    value={lC1}
                    onChange={(e) => setLC1(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-slate-400 mb-1">a₂·X</label>
                  <input
                    type="number"
                    value={lA2}
                    onChange={(e) => setLA2(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">b₂·Y</label>
                  <input
                    type="number"
                    value={lB2}
                    onChange={(e) => setLB2(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">= c₂</label>
                  <input
                    type="number"
                    value={lC2}
                    onChange={(e) => setLC2(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleSolveLin}
              className="w-full py-2 bg-[#94c973] text-slate-950 font-bold text-xs rounded hover:brightness-105"
            >
              Solve 2x2 System
            </button>

            {linSol && (
              <div className="bg-[#b4c8a8] text-slate-950 p-3 rounded-lg font-mono text-sm space-y-1 border border-[#384234]">
                <div className="flex justify-between items-center">
                  <span>X = <strong className="text-base">{linSol.x}</strong></span>
                  <button
                    onClick={() => { onInsertResult(linSol.x); onClose(); }}
                    className="text-[10px] bg-black/10 hover:bg-black/20 px-2 py-0.5 rounded font-sans font-semibold"
                  >
                    Paste X
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <span>Y = <strong className="text-base">{linSol.y}</strong></span>
                  <button
                    onClick={() => { onInsertResult(linSol.y); onClose(); }}
                    className="text-[10px] bg-black/10 hover:bg-black/20 px-2 py-0.5 rounded font-sans font-semibold"
                  >
                    Paste Y
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* CUBIC */}
        {eqType === 'cubic' && (
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-1.5 text-xs font-mono">
              <div>
                <label className="block text-slate-400 mb-1">a (x³)</label>
                <input
                  type="number"
                  value={cA}
                  onChange={(e) => setCA(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">b (x²)</label>
                <input
                  type="number"
                  value={cB}
                  onChange={(e) => setCB(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">c (x)</label>
                <input
                  type="number"
                  value={cC}
                  onChange={(e) => setCC(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">d (=0)</label>
                <input
                  type="number"
                  value={cD}
                  onChange={(e) => setCD(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white"
                />
              </div>
            </div>

            <button
              onClick={handleSolveCubic}
              className="w-full py-2 bg-[#94c973] text-slate-950 font-bold text-xs rounded hover:brightness-105"
            >
              Solve Cubic
            </button>

            {cubicRoots && (
              <div className="bg-[#b4c8a8] text-slate-950 p-3 rounded-lg font-mono text-sm space-y-1 border border-[#384234]">
                <div className="flex justify-between items-center">
                  <span>X₁ = <strong>{cubicRoots.x1}</strong></span>
                  <button
                    onClick={() => { onInsertResult(cubicRoots.x1); onClose(); }}
                    className="text-[10px] bg-black/10 hover:bg-black/20 px-2 py-0.5 rounded font-sans font-semibold"
                  >
                    Paste
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <span>X₂ = <strong>{cubicRoots.x2}</strong></span>
                  <button
                    onClick={() => { onInsertResult(cubicRoots.x2); onClose(); }}
                    className="text-[10px] bg-black/10 hover:bg-black/20 px-2 py-0.5 rounded font-sans font-semibold"
                  >
                    Paste
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <span>X₃ = <strong>{cubicRoots.x3}</strong></span>
                  <button
                    onClick={() => { onInsertResult(cubicRoots.x3); onClose(); }}
                    className="text-[10px] bg-black/10 hover:bg-black/20 px-2 py-0.5 rounded font-sans font-semibold"
                  >
                    Paste
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
