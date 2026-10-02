import React, { useState } from 'react';
import { AlertTriangle, Trash2, X, ShieldAlert } from 'lucide-react';

interface ResetConfirmModalProps {
  onConfirm: () => void;
  onClose: () => void;
}

export const ResetConfirmModal: React.FC<ResetConfirmModalProps> = ({ onConfirm, onClose }) => {
  const [typedConfirm, setTypedConfirm] = useState('');
  const isConfirmed = typedConfirm.trim().toLowerCase() === 'reset';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-4">
      <div className="relative w-full max-w-md rounded-2xl border border-rose-500/40 bg-slate-900 p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-xl p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/20 text-rose-400 ring-1 ring-rose-500/40">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Reset All Portal Data?</h3>
            <p className="text-xs text-rose-400 font-medium">Irreversible Admin Action</p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-rose-500/20 bg-rose-950/20 p-3.5 text-xs text-slate-300 space-y-2">
          <p className="font-semibold text-rose-200">This action will permanently delete:</p>
          <ul className="list-disc pl-4 space-y-1 text-slate-400">
            <li>All drills across Physics, Chemistry, and Biology.</li>
            <li>All student accounts and quiz attempts.</li>
            <li>All student leaderboard stats and streaks.</li>
          </ul>
          <p className="text-[11px] text-cyan-300 font-medium pt-1">
            ✓ Your Admin account (`admin`) will be kept safe so you can log in and start fresh.
          </p>
        </div>

        <div className="mt-4">
          <label className="text-xs font-medium text-slate-300">
            Type <span className="font-mono font-bold text-rose-400">RESET</span> to confirm:
          </label>
          <input
            type="text"
            value={typedConfirm}
            onChange={(e) => setTypedConfirm(e.target.value)}
            placeholder="Type RESET here"
            className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2 text-xs font-mono text-white placeholder-slate-600 focus:border-rose-500 focus:outline-none"
          />
        </div>

        <div className="mt-6 flex items-center justify-end gap-2 border-t border-slate-800 pt-4">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white"
          >
            Cancel
          </button>
          <button
            disabled={!isConfirmed}
            onClick={onConfirm}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition shadow-lg ${
              isConfirmed
                ? 'bg-rose-600 text-white hover:bg-rose-500 cursor-pointer'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-50'
            }`}
          >
            <Trash2 className="h-4 w-4" />
            <span>Yes, Reset All Data</span>
          </button>
        </div>
      </div>
    </div>
  );
};
