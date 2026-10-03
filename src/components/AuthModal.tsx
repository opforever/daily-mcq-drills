import React, { useState } from 'react';
import { User } from '../types';
import { authenticateUser, registerUser } from '../utils/storage';
import { ShieldCheck, User as UserIcon, Lock, Sparkles, X, AlertCircle } from 'lucide-react';

interface AuthModalProps {
  onSuccess: (user: User) => void;
  onClose: () => void;
  defaultAdminMode?: boolean;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onSuccess, onClose, defaultAdminMode = false }) => {
  const [mode, setMode] = useState<'login' | 'signup' | 'admin'>(defaultAdminMode ? 'admin' : 'login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      if (mode === 'signup') {
        const res = await registerUser(username, password, fullName, 'student');
        if (res.success && res.user) {
          onSuccess(res.user);
        } else {
          setError(res.message || 'Registration failed');
        }
      } else {
        const res = await authenticateUser(username, password);
        if (res.success && res.user) {
          if (mode === 'admin' && res.user.role !== 'admin') {
            setError('This account does not have Admin privileges.');
            return;
          }
          onSuccess(res.user);
        } else {
          setError(res.message || 'Invalid username or password');
        }
      }
    } catch {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickFillAdmin = () => {
    setUsername('admin');
    setPassword('kips123');
    setMode('admin');
    setError(null);
  };

  const handleQuickFillStudent = () => {
    setUsername('hamza_kips');
    setPassword('123456');
    setMode('login');
    setError(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-4">
      <div className="relative w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-xl p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
            {mode === 'admin' ? <ShieldCheck className="h-6 w-6 text-cyan-200" /> : <UserIcon className="h-6 w-6" />}
          </div>
          <h2 className="text-xl font-bold text-white">
            {mode === 'admin' ? 'Admin Portal Access' : mode === 'signup' ? 'Create Student Account' : 'Student Login'}
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            {mode === 'admin'
              ? 'Login with admin credentials to post & manage daily drills'
              : 'Enter your username and password to track your daily marks'}
          </p>
        </div>

        {/* Tab switch */}
        <div className="mt-5 flex rounded-xl border border-slate-800 bg-slate-950 p-1">
          <button
            type="button"
            onClick={() => { setMode('login'); setError(null); }}
            className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition ${
              mode === 'login' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => { setMode('signup'); setError(null); }}
            className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition ${
              mode === 'signup' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Sign Up
          </button>
          <button
            type="button"
            onClick={() => { setMode('admin'); setError(null); }}
            className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition ${
              mode === 'admin' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Admin
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-950/40 p-3 text-xs text-rose-300">
            <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          {mode === 'signup' && (
            <div>
              <label className="text-xs font-medium text-slate-300">Your Full Name</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Daniyal Khan"
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="text-xs font-medium text-slate-300">Username</label>
            <div className="relative mt-1">
              <UserIcon className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. kips_student"
                className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-slate-300">Password</label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-2 w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 py-2.5 text-xs font-bold text-white shadow-lg transition hover:from-blue-500 hover:to-cyan-500 ${
              isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting
              ? 'Verifying...'
              : mode === 'signup'
              ? 'Create Account & Start'
              : mode === 'admin'
              ? 'Verify Admin Login'
              : 'Login'}
          </button>
        </form>

        {/* Demo Fast-Fill Shortcuts */}
        <div className="mt-5 border-t border-slate-800 pt-4 text-center">
          <p className="text-[11px] font-semibold text-slate-500">Quick Test Credentials:</p>
          <div className="mt-2 flex justify-center gap-2">
            <button
              type="button"
              onClick={handleQuickFillAdmin}
              className="rounded-lg border border-cyan-800/40 bg-cyan-950/40 px-2.5 py-1 text-[11px] font-semibold text-cyan-300 hover:bg-cyan-900/60"
            >
              Fill Admin (admin / kips123)
            </button>
            <button
              type="button"
              onClick={handleQuickFillStudent}
              className="rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-[11px] font-semibold text-slate-300 hover:bg-slate-700"
            >
              Fill Student Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
