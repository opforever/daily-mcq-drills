import React from 'react';
import { AngleUnit, CalcMode } from '../types/calculator';

interface ModeModalProps {
  isOpen: boolean;
  isSetup: boolean; // true if SHIFT + MODE was pressed
  currentMode: CalcMode;
  currentAngleUnit: AngleUnit;
  onSelectMode: (mode: CalcMode) => void;
  onSelectAngleUnit: (unit: AngleUnit) => void;
  onClose: () => void;
}

export const ModeModal: React.FC<ModeModalProps> = ({
  isOpen,
  isSetup,
  currentAngleUnit,
  onSelectMode,
  onSelectAngleUnit,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#242933] border border-slate-700 w-full max-w-sm rounded-xl p-5 shadow-2xl text-slate-100">
        <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e5a93c]" />
            <h3 className="font-bold text-sm tracking-wide text-slate-200">
              {isSetup ? 'fx-991ES PLUS SETUP' : 'fx-991ES PLUS MODE'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-700"
          >
            ESC
          </button>
        </div>

        {isSetup ? (
          /* SETUP MENU (Angle units & Display options) */
          <div className="py-4 space-y-3">
            <p className="text-xs text-slate-400 mb-2">Select Angle Unit or Formatting:</p>
            <div className="grid grid-cols-1 gap-2 text-sm font-mono">
              <button
                onClick={() => { onSelectAngleUnit('DEG'); onClose(); }}
                className={`flex items-center justify-between p-2.5 rounded-lg border text-left transition-colors ${
                  currentAngleUnit === 'DEG'
                    ? 'border-[#e5a93c] bg-[#e5a93c]/10 text-[#e5a93c] font-bold'
                    : 'border-slate-700 hover:border-slate-500 bg-slate-800/60'
                }`}
              >
                <span>3: Deg (Degrees)</span>
                {currentAngleUnit === 'DEG' && <span className="text-xs">● Active</span>}
              </button>

              <button
                onClick={() => { onSelectAngleUnit('RAD'); onClose(); }}
                className={`flex items-center justify-between p-2.5 rounded-lg border text-left transition-colors ${
                  currentAngleUnit === 'RAD'
                    ? 'border-[#e5a93c] bg-[#e5a93c]/10 text-[#e5a93c] font-bold'
                    : 'border-slate-700 hover:border-slate-500 bg-slate-800/60'
                }`}
              >
                <span>4: Rad (Radians)</span>
                {currentAngleUnit === 'RAD' && <span className="text-xs">● Active</span>}
              </button>

              <button
                onClick={() => { onSelectAngleUnit('GRA'); onClose(); }}
                className={`flex items-center justify-between p-2.5 rounded-lg border text-left transition-colors ${
                  currentAngleUnit === 'GRA'
                    ? 'border-[#e5a93c] bg-[#e5a93c]/10 text-[#e5a93c] font-bold'
                    : 'border-slate-700 hover:border-slate-500 bg-slate-800/60'
                }`}
              >
                <span>5: Gra (Gradians)</span>
                {currentAngleUnit === 'GRA' && <span className="text-xs">● Active</span>}
              </button>
            </div>
          </div>
        ) : (
          /* CALCULATOR MODES */
          <div className="py-4">
            <p className="text-xs text-slate-400 mb-2.5">Select Operating Mode:</p>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {[
                { id: 'COMP', num: '1', label: 'COMP', desc: 'Standard arithmetic & calc' },
                { id: 'CMPLX', num: '2', label: 'CMPLX', desc: 'Complex numbers (a+bi)' },
                { id: 'STAT', num: '3', label: 'STAT', desc: 'Statistics & 1-Var' },
                { id: 'BASE-N', num: '4', label: 'BASE-N', desc: 'Dec, Hex, Bin, Oct' },
                { id: 'EQN', num: '5', label: 'EQN', desc: 'Equation solvers (2x2, quad, cubic)' },
                { id: 'MATRIX', num: '6', label: 'MATRIX', desc: 'Matrix calc & det' },
                { id: 'TABLE', num: '7', label: 'TABLE', desc: 'f(X) table generator' },
                { id: 'VECTOR', num: '8', label: 'VECTOR', desc: 'Vector operations' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    onSelectMode(m.id as CalcMode);
                    onClose();
                  }}
                  className="flex flex-col p-2.5 rounded-lg border border-slate-700 bg-slate-800/70 hover:border-[#e5a93c] hover:bg-slate-800 transition-colors text-left"
                >
                  <span className="font-bold text-slate-200 text-sm">
                    {m.num}: {m.label}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{m.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="pt-2 border-t border-slate-700/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md text-xs font-medium bg-slate-700 hover:bg-slate-600 text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
