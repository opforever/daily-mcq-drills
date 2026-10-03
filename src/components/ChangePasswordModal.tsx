import React, { useState } from 'react';
import { User } from '../types';
import { changeUserPassword } from '../utils/storage';
import { KeyRound, Lock, Eye, EyeOff, X, CheckCircle2, AlertCircle, Shield } from 'lucide-react';

interface ChangePasswordModalProps {
  currentUser: User;
  onClose: () => void;
  onSuccessToast?: (msg: string) => void;
}

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  currentUser,
  onClose,
  onSuccessToast
}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!currentPassword) {
      setError('Please enter your current password.');
      return;
    }
    if (newPassword.length < 4) {
      setError('New password must be at least 4 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('New password and confirmation do not match.');
      return;
    }
    if (currentPassword === newPassword) {
      setError('New password cannot be the same as your current password.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await changeUserPassword(currentUser.username, currentPassword, newPassword);
      if (res.success) {
        setIsSuccess(true);
        if (onSuccessToast) onSuccessToast('✓ Password updated successfully!');
        setTimeout(() => {
          onClose();
        }, 1800);
      } else {
        setError(res.message);
      }
    } catch {
      setError('An error occurred while updating your password. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-4 backdrop-blur-sm overflow-y-auto">
      <div className="relative my-4 w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-2xl animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-xl p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
            <KeyRound className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">Change Password</h2>
            <p className="text-xs text-slate-400">
              Account: <span className="font-semibold text-cyan-300">@{currentUser.username}</span>
            </p>
          </div>
        </div>

        {isSuccess ? (
          <div className="my-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="mt-3 text-sm font-bold text-white">Password Updated!</h3>
            <p className="mt-1 text-xs text-slate-400">
              Your new password is now active and protected with salted cryptographic hashing.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
            {error && (
              <div className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-950/40 p-2.5 text-xs text-rose-300">
                <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
                <span>{error}</span>
              </div>
            )}

            {/* Current Password */}
            <div>
              <label className="text-xs font-semibold text-slate-300">Current Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
                <input
                  type={showCurrent ? 'text' : 'password'}
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2 pl-9 pr-9 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showCurrent ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label className="text-xs font-semibold text-slate-300">New Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
                <input
                  type={showNew ? 'text' : 'password'}
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Minimum 4 characters"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2 pl-9 pr-9 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showNew ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div>
              <label className="text-xs font-semibold text-slate-300">Confirm New Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
                <input
                  type={showNew ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter new password"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-2.5 text-[11px] text-slate-400 flex items-center gap-2">
              <Shield className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
              <span>Passwords are cryptographically encrypted with salted SHA-256 before cloud sync.</span>
            </div>

            <div className="mt-4 flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="rounded-xl border border-slate-800 bg-slate-850 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-xs font-bold text-white shadow-lg transition hover:from-blue-500 hover:to-cyan-500 ${
                  isSubmitting ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                <KeyRound className="h-3.5 w-3.5" />
                <span>{isSubmitting ? 'Updating...' : 'Update Password'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
