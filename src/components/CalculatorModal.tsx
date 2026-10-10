import React, { useState, useEffect } from 'react';
import { CasioCalculator } from '../calculator/components/CasioCalculator';
import { X, Volume2, VolumeX, RotateCcw, HelpCircle, Copy, Check, Maximize2, Minimize2, Sparkles, Calculator as CalcIcon } from 'lucide-react';
import { getCalculatorSession, resetCalculatorSession } from '../calculator/utils/calculatorStore';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeSubject?: string;
}

export const CalculatorModal: React.FC<CalculatorModalProps> = ({
  isOpen,
  onClose,
  activeSubject
}) => {
  const [scale, setScale] = useState<number>(1);
  const [autoFit, setAutoFit] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [resetKey, setResetKey] = useState<number>(0);

  // Auto-calculate scale on mobile/small viewports so calculator fits screen without vertical cutoff
  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      // Calculator natural dimensions approx 420px width x 680px height
      if (autoFit) {
        let computedScale = 1;
        
        // Height constraint (leave ~85px for modal header & padding)
        const availableHeight = vh - 90;
        const availableWidth = vw - 24;

        const heightScale = availableHeight / 690;
        const widthScale = availableWidth / 420;

        computedScale = Math.min(1, heightScale, widthScale);
        // Don't shrink smaller than 0.62 for readability
        computedScale = Math.max(0.62, Math.min(1, Number(computedScale.toFixed(2))));
        setScale(computedScale);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, autoFit]);

  // Handle ESC key to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleCopyCurrentResult = () => {
    const session = getCalculatorSession();
    if (session && session.result) {
      navigator.clipboard.writeText(session.exactResult && session.exactResult !== session.result ? session.exactResult : session.result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleHardReset = () => {
    if (window.confirm('Reset calculator memory and clear all calculations?')) {
      resetCalculatorSession();
      setResetKey(prev => prev + 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Scientific Calculator"
    >
      {/* Top Modal Navigation Bar */}
      <header className="flex items-center justify-between px-3 sm:px-6 py-2.5 bg-slate-900/95 border-b border-slate-800 text-slate-100 shrink-0 select-none shadow-md z-20">
        {/* Left: Brand & Model */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20 ring-1 ring-amber-400/40">
            <CalcIcon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-mono font-bold text-sm sm:text-base text-white tracking-tight">
                CASIO fx-991ES PLUS
              </span>
              <span className="hidden xs:inline-block rounded-md border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.2 text-[9px] font-mono font-bold text-amber-400">
                Natural-V.P.A.M.
              </span>
            </div>
            <p className="text-[10px] text-slate-400 hidden sm:block">
              Full Scientific Calculator {activeSubject ? `• ${activeSubject.toUpperCase()} Mode` : ''} • Data autosaved
            </p>
          </div>
        </div>

        {/* Right: Quick Controls & Close Button */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Quick Copy Result */}
          <button
            onClick={handleCopyCurrentResult}
            className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-800 text-slate-300 hover:text-white text-xs font-medium transition cursor-pointer"
            title="Copy current calculator answer to clipboard"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Ans'}</span>
          </button>

          {/* Scale Control Toggle */}
          <div className="hidden sm:flex items-center bg-slate-950 border border-slate-800 rounded-lg p-0.5 text-xs font-mono">
            <button
              onClick={() => {
                setAutoFit(true);
              }}
              className={`px-2 py-1 rounded text-[10px] transition ${
                autoFit ? 'bg-amber-500 text-black font-bold' : 'text-slate-400 hover:text-white'
              }`}
              title="Auto-fit to screen height"
            >
              Auto
            </button>
            <button
              onClick={() => {
                setAutoFit(false);
                setScale(1);
              }}
              className={`px-2 py-1 rounded text-[10px] transition ${
                !autoFit && scale === 1 ? 'bg-amber-500 text-black font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              100%
            </button>
            <button
              onClick={() => {
                setAutoFit(false);
                setScale(0.85);
              }}
              className={`px-2 py-1 rounded text-[10px] transition ${
                !autoFit && scale === 0.85 ? 'bg-amber-500 text-black font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              85%
            </button>
          </div>

          {/* Reset Calculator Session */}
          <button
            onClick={handleHardReset}
            className="p-1.5 sm:px-2 sm:py-1.5 rounded-lg border border-slate-700 hover:border-rose-500/50 bg-slate-800 hover:bg-rose-950/30 text-slate-300 hover:text-rose-400 text-xs font-medium transition cursor-pointer"
            title="Reset calculator memory and history"
          >
            <RotateCcw className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white font-bold text-xs sm:text-sm transition shadow-md shadow-rose-600/30 cursor-pointer"
            title="Close calculator (Esc)"
          >
            <X className="h-4 w-4" />
            <span>Close</span>
          </button>
        </div>
      </header>

      {/* Main Full-Screen Calculator Area */}
      <main className="flex-1 w-full overflow-y-auto overflow-x-hidden flex items-center justify-center p-2 sm:p-4 touch-manipulation">
        <div 
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
          }}
          className="transition-transform duration-150 my-auto flex justify-center w-full max-w-full"
        >
          <CasioCalculator key={resetKey} />
        </div>
      </main>

      {/* Persistent Note at bottom */}
      <footer className="py-1.5 px-4 bg-slate-900/90 border-t border-slate-800 text-center text-[10px] sm:text-[11px] text-slate-400 font-mono flex items-center justify-between shrink-0">
        <span className="text-slate-500">
          💡 You can close anytime to check questions — calculations & history remain saved.
        </span>
        <span className="hidden md:inline text-slate-500">
          Keyboard shortcuts active (Enter = Calculate, Del = Backspace, Esc = AC/Close)
        </span>
      </footer>
    </div>
  );
};
