import React, { useState } from 'react';
import { User } from '../types';
import { authenticateUser, registerUser } from '../utils/storage';
import { 
  BookOpen, 
  ShieldCheck, 
  User as UserIcon, 
  Lock, 
  Sparkles, 
  AlertCircle, 
  Atom, 
  FlaskConical, 
  Dna,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface AuthGateProps {
  onLoginSuccess: (user: User) => void;
}

export const AuthGate: React.FC<AuthGateProps> = ({ onLoginSuccess }) => {
  const [mode, setMode] = useState<'login' | 'signup' | 'admin'>('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (mode === 'signup') {
      const res = registerUser(username, password, fullName, 'student');
      if (res.success && res.user) {
        onLoginSuccess(res.user);
      } else {
        setError(res.message || 'Registration failed');
      }
    } else {
      const res = authenticateUser(username, password);
      if (res.success && res.user) {
        if (mode === 'admin' && res.user.role !== 'admin') {
          setError('This account does not have Admin privileges.');
          return;
        }
        onLoginSuccess(res.user);
      } else {
        setError(res.message || 'Invalid username or password.');
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 py-8 text-slate-100 selection:bg-cyan-500 selection:text-white sm:px-6">
      {/* Background Decorative Glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Brand Header */}
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-600 shadow-xl shadow-cyan-500/20 ring-1 ring-white/20">
            <BookOpen className="h-8 w-8 text-white" />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/60 px-3 py-1 text-xs font-bold text-blue-300">
            <span>KIPS College</span>
            <span className="text-slate-500">•</span>
            <span>FBISE 1st Year</span>
          </div>

          <h1 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
            Daily MCQ Drill Portal
          </h1>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">
            Physics • Chemistry • Biology Daily Lecture Quizzes
          </p>

          {/* Subject Pills */}
          <div className="mt-3 flex justify-center gap-2 text-[11px] font-semibold">
            <span className="flex items-center gap-1 rounded-lg border border-cyan-800/40 bg-cyan-950/50 px-2.5 py-1 text-cyan-300">
              <Atom className="h-3 w-3" /> Physics
            </span>
            <span className="flex items-center gap-1 rounded-lg border border-amber-800/40 bg-amber-950/50 px-2.5 py-1 text-amber-300">
              <FlaskConical className="h-3 w-3" /> Chemistry
            </span>
            <span className="flex items-center gap-1 rounded-lg border border-emerald-800/40 bg-emerald-950/50 px-2.5 py-1 text-emerald-300">
              <Dna className="h-3 w-3" /> Biology
            </span>
          </div>
        </div>

        {/* Auth Card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          {/* Mode Tabs */}
          <div className="flex rounded-2xl border border-slate-800 bg-slate-950 p-1.5">
            <button
              type="button"
              onClick={() => { setMode('login'); setError(null); }}
              className={`flex-1 rounded-xl py-2 text-xs font-bold transition-all ${
                mode === 'login' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Student Login
            </button>
            <button
              type="button"
              onClick={() => { setMode('signup'); setError(null); }}
              className={`flex-1 rounded-xl py-2 text-xs font-bold transition-all ${
                mode === 'signup' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Create Account
            </button>
            <button
              type="button"
              onClick={() => { setMode('admin'); setError(null); }}
              className={`flex-1 rounded-xl py-2 text-xs font-bold transition-all ${
                mode === 'admin' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Admin
            </button>
          </div>

          {/* Subtitle instructions */}
          <div className="mt-4 text-center">
            <h2 className="text-sm font-bold text-white">
              {mode === 'login' && 'Sign in to access your daily drills'}
              {mode === 'signup' && 'Create your account in seconds'}
              {mode === 'admin' && 'Admin Portal (Add & Manage Drills)'}
            </h2>
            <p className="mt-0.5 text-[11px] text-slate-400">
              {mode === 'login' && 'Your session stays saved on this device automatically.'}
              {mode === 'signup' && 'No email verification required. Just enter username & password.'}
              {mode === 'admin' && 'Login with your admin password to post new daily MCQs.'}
            </p>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-rose-500/40 bg-rose-950/40 p-3 text-xs text-rose-300">
              <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Auth Form */}
          <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
            {mode === 'signup' && (
              <div>
                <label className="text-xs font-medium text-slate-300">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Daniyal Khan"
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>
            )}

            <div>
              <label className="text-xs font-medium text-slate-300">
                {mode === 'admin' ? 'Admin Username' : 'Username'}
              </label>
              <div className="relative mt-1">
                <UserIcon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={mode === 'admin' ? 'admin' : 'e.g. hamza_kips'}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2.5 pl-10 pr-3.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300">Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2.5 pl-10 pr-3.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 py-3 text-xs font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:from-blue-500 hover:to-cyan-500"
            >
              <span>
                {mode === 'signup'
                  ? 'Create Account & Enter'
                  : mode === 'admin'
                  ? 'Access Admin Dashboard'
                  : 'Sign In & Start Practicing'}
              </span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Feature Badges below card */}
        <div className="mt-6 grid grid-cols-2 gap-2 text-center text-[11px] text-slate-400">
          <div className="flex items-center justify-center gap-1 rounded-xl border border-slate-800/60 bg-slate-900/40 py-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            <span>Permanent Device Login</span>
          </div>
          <div className="flex items-center justify-center gap-1 rounded-xl border border-slate-800/60 bg-slate-900/40 py-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            <span>Instant MCQ Explanations</span>
          </div>
        </div>
      </div>
    </div>
  );
};
