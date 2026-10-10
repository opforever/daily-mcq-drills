import React from 'react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#1f242e] border border-slate-700/80 rounded-xl w-full max-w-lg max-h-[85vh] flex flex-col text-slate-100 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e5a93c]" />
            <h3 className="font-bold text-sm tracking-wide">
              fx-991ES PLUS Guide & Shortcuts
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-xs px-2.5 py-1 rounded bg-slate-800"
          >
            ESC
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 text-xs font-sans text-slate-300 scrollbar-thin">
          <section>
            <h4 className="font-bold text-slate-100 text-sm mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e5a93c]" />
              Natural-V.P.A.M. & Exact Formats
            </h4>
            <p className="leading-relaxed text-slate-400">
              The fx-991ES Plus displays expressions as they appear in your textbook:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-300">
              <li><strong>Fractions:</strong> Press <code className="bg-slate-800 px-1 py-0.5 rounded text-[#e5a93c]">■/□</code> to format stacked numerators and denominators.</li>
              <li><strong>Square Roots:</strong> Press <code className="bg-slate-800 px-1 py-0.5 rounded text-[#e5a93c]">√■</code> for exact radical forms like <span className="font-mono">5√2/6</span>.</li>
              <li><strong>S⇔D Button:</strong> Toggles between exact format (fractions/radicals) and decimal numbers.</li>
            </ul>
          </section>

          <section>
            <h4 className="font-bold text-slate-100 text-sm mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e05068]" />
              Physical Hardware Keyboard Shortcuts
            </h4>
            <div className="grid grid-cols-2 gap-2 font-mono text-[11px] mt-2">
              <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="text-[#e5a93c] font-bold">0 - 9</span>
                <span className="text-slate-400 ml-2">Digits</span>
              </div>
              <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="text-[#e5a93c] font-bold">+ - * /</span>
                <span className="text-slate-400 ml-2">Basic operators</span>
              </div>
              <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="text-[#e5a93c] font-bold">Enter or =</span>
                <span className="text-slate-400 ml-2">Calculate (=)</span>
              </div>
              <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="text-[#e5a93c] font-bold">Backspace</span>
                <span className="text-slate-400 ml-2">Delete (DEL)</span>
              </div>
              <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="text-[#e5a93c] font-bold">Escape or C</span>
                <span className="text-slate-400 ml-2">All Clear (AC)</span>
              </div>
              <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="text-[#e5a93c] font-bold">s, c, t</span>
                <span className="text-slate-400 ml-2">sin, cos, tan</span>
              </div>
              <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="text-[#e5a93c] font-bold">p, e</span>
                <span className="text-slate-400 ml-2">Pi (π) and Euler (e)</span>
              </div>
              <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="text-[#e5a93c] font-bold">^</span>
                <span className="text-slate-400 ml-2">Power (x^y)</span>
              </div>
              <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="text-[#e5a93c] font-bold">( and )</span>
                <span className="text-slate-400 ml-2">Parentheses</span>
              </div>
              <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="text-[#e5a93c] font-bold">Arrow Keys</span>
                <span className="text-slate-400 ml-2">Replay History</span>
              </div>
            </div>
          </section>

          <section>
            <h4 className="font-bold text-slate-100 text-sm mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#94c973]" />
              Advanced Scientific Features
            </h4>
            <div className="space-y-1.5 text-slate-400">
              <p>• <strong>Calculus:</strong> Press <code className="bg-slate-800 px-1 py-0.5 rounded text-white font-mono">∫dx</code> to evaluate definite integrals or numerical derivatives.</p>
              <p>• <strong>Hyperbolic:</strong> Press <code className="bg-slate-800 px-1 py-0.5 rounded text-white font-mono">hyp</code> for sinh, cosh, tanh and their inverses.</p>
              <p>• <strong>MODE:</strong> Access CMPLX (complex numbers), STAT, BASE-N (Dec, Hex, Bin, Oct), EQN (polynomials & linear systems), MATRIX, TABLE, and VECTOR.</p>
              <p>• <strong>SHIFT + 7 (CONST):</strong> Access 40 physical constants including <span className="font-mono">c₀, h, ℏ, G, e, mₑ</span>.</p>
              <p>• <strong>SHIFT + 8 (CONV):</strong> 40 metric and imperial unit conversions.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
