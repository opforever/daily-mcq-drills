import React from 'react';
import { HistoryItem } from '../types/calculator';

interface HistoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  history: HistoryItem[];
  onReplay: (item: HistoryItem) => void;
  onClear: () => void;
}

export const HistoryDrawer: React.FC<HistoryDrawerProps> = ({
  isOpen,
  onClose,
  history,
  onReplay,
  onClear,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-end">
      <div className="bg-[#1b2029] border-l border-slate-700/80 w-full max-w-sm h-full flex flex-col text-slate-100 shadow-2xl animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="p-4 border-b border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#94c973]" />
            <h3 className="font-bold text-sm tracking-wide">Tape & History</h3>
            <span className="text-[11px] text-slate-400 font-mono">({history.length})</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-xs px-2.5 py-1 rounded bg-slate-800"
          >
            Close
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
          {history.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-500 text-xs text-center p-6">
              <span className="text-2xl mb-2">📜</span>
              <p>No calculation history yet.</p>
              <p className="mt-1 text-slate-600">Calculations performed on the keypad will appear here.</p>
            </div>
          ) : (
            history.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/70 border border-slate-850 hover:border-slate-700 rounded-lg p-3 transition-colors text-right font-mono flex flex-col group"
              >
                <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1 font-sans">
                  <span className="bg-slate-800 px-1.5 py-0.5 rounded text-[9px]">
                    {item.mode} · {item.angleUnit}
                  </span>
                  <span>{new Date(item.timestamp).toLocaleTimeString()}</span>
                </div>

                <div className="text-xs text-slate-300 font-semibold truncate my-1">
                  {item.display || item.expression}
                </div>

                <div className="text-base font-bold text-[#b4c8a8] mt-0.5">
                  = {item.exactResult && item.exactResult !== item.result ? item.exactResult : item.result}
                </div>

                {item.exactResult && item.exactResult !== item.result && (
                  <div className="text-[10px] text-slate-400">
                    ≈ {item.result}
                  </div>
                )}

                <div className="flex justify-end gap-2 mt-2 pt-2 border-t border-slate-800 opacity-80 group-hover:opacity-100">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(item.result);
                    }}
                    className="text-[10px] px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-sans"
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => {
                      onReplay(item);
                      onClose();
                    }}
                    className="text-[10px] px-2 py-0.5 rounded bg-[#94c973]/20 hover:bg-[#94c973]/30 text-[#94c973] font-sans font-semibold"
                  >
                    Replay to Screen
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {history.length > 0 && (
          <div className="p-3 border-t border-slate-800 flex justify-between items-center bg-slate-900/40">
            <button
              onClick={onClear}
              className="text-xs text-rose-400 hover:text-rose-300 px-3 py-1 rounded hover:bg-rose-950/30"
            >
              Clear All
            </button>
            <button
              onClick={() => {
                const text = history.map((h) => `${h.display || h.expression} = ${h.result}`).join('\n');
                navigator.clipboard.writeText(text);
              }}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1 rounded"
            >
              Copy All Tape
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
