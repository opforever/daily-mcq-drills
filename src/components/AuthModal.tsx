import React, { useState } from 'react';
import { User } from '../types';
import { authenticateUser, registerUser, setCurrentUser } from '../utils/storage';
import { signInAdminWithGoogle } from '../utils/firebase';
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

  const handleGoogleAdminLogin = async () => {
    setError(null);
    setIsSubmitting(true);
    try {
      const res = await signInAdminWithGoogle();
      if (res.success && res.user) {
        setCurrentUser(res.user);
        onSuccess(res.user);
      } else {
        setError(res.message || 'Google sign-in failed.');
      }
    } catch (err: any) {
      setError(err?.message || 'Google sign-in encountered an error.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Admin Mode: Google Sign-in */}
        {mode === 'admin' && (
          <div className="mt-4 space-y-3">
            <button
              type="button"
              onClick={handleGoogleAdminLogin}
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-slate-700 bg-white py-2.5 px-4 text-xs font-bold text-slate-900 shadow-md transition-all hover:bg-slate-100 disabled:opacity-60 cursor-pointer"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>{isSubmitting ? 'Verifying with Google...' : 'Sign in with Google (Admin)'}</span>
            </button>

            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-slate-800" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">or sign in with password</span>
              <div className="h-px flex-1 bg-slate-800" />
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-3.5 space-y-3">
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
      </div>
    </div>
  );
};
