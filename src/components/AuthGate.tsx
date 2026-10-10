import React, { useState, useEffect } from 'react';
import { User } from '../types';
import { authenticateUser, registerUser, setCurrentUser } from '../utils/storage';
import { signInAdminWithGoogle, auth, ALLOWED_ADMIN_EMAILS } from '../utils/firebase';
import { getRedirectResult } from 'firebase/auth';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showRedirectOption, setShowRedirectOption] = useState(false);

  // Check for Google Redirect Result (Brave / Mobile Friendly)
  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      if (result && result.user) {
        const email = (result.user.email || '').toLowerCase().trim();
        const isAllowed = ALLOWED_ADMIN_EMAILS.some(adm => adm.toLowerCase() === email);
        if (isAllowed) {
          const adminUser: User = {
            username: 'admin',
            fullName: result.user.displayName || 'Administrator (Naveed Hussain)',
            role: 'admin',
            email: result.user.email || undefined,
            college: 'KIPS College',
            createdAt: Date.now()
          };
          setCurrentUser(adminUser);
          onLoginSuccess(adminUser);
        } else {
          setError(`Access Denied: "${result.user.email}" is not authorized as an Administrator.`);
        }
      }
    }).catch((err) => {
      console.warn('Redirect auth check error:', err);
    });
  }, [onLoginSuccess]);

  const handleGoogleAdminLogin = async (useRedirect: boolean = false) => {
    setError(null);
    setShowRedirectOption(false);
    setIsSubmitting(true);
    try {
      const res = await signInAdminWithGoogle(useRedirect);
      if (res.success && res.user) {
        setCurrentUser(res.user);
        onLoginSuccess(res.user);
      } else if (!res.success && res.message) {
        setError(res.message);
        if (res.message.includes('Brave') || res.message.includes('blocked')) {
          setShowRedirectOption(true);
        }
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
          onLoginSuccess(res.user);
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
          onLoginSuccess(res.user);
        } else {
          setError(res.message || 'Invalid username or password.');
        }
      }
    } catch {
      setError('An error occurred during verification. Please try again.');
    } finally {
      setIsSubmitting(false);
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
              className={`flex-1 rounded-xl py-2 text-xs font-bold transition-all cursor-pointer ${
                mode === 'login' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Student Login
            </button>
            <button
              type="button"
              onClick={() => { setMode('signup'); setError(null); }}
              className={`flex-1 rounded-xl py-2 text-xs font-bold transition-all cursor-pointer ${
                mode === 'signup' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Create Account
            </button>
            <button
              type="button"
              onClick={() => { setMode('admin'); setError(null); }}
              className={`flex-1 rounded-xl py-2 text-xs font-bold transition-all cursor-pointer ${
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
              {mode === 'admin' && 'Admin Portal Access'}
            </h2>
            <p className="mt-0.5 text-[11px] text-slate-400">
              {mode === 'login' && 'Your session stays saved on this device automatically.'}
              {mode === 'signup' && 'No email verification required. Just enter username & password.'}
              {mode === 'admin' && 'Sign in with your verified administrator Google account.'}
            </p>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-rose-500/40 bg-rose-950/40 p-3 text-xs text-rose-300">
              <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Admin Mode: One-Click Google Sign-In */}
          {mode === 'admin' && (
            <div className="mt-5 space-y-3.5">
              <button
                type="button"
                onClick={() => handleGoogleAdminLogin(false)}
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-slate-700 bg-white py-3 px-4 text-xs font-bold text-slate-900 shadow-md transition-all hover:bg-slate-100 hover:shadow-lg disabled:opacity-60 cursor-pointer"
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
                <span>{isSubmitting ? 'Authenticating with Google...' : 'Sign in with Google (Admin)'}</span>
              </button>

              {showRedirectOption && (
                <button
                  type="button"
                  onClick={() => handleGoogleAdminLogin(true)}
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-950/40 py-2.5 px-4 text-xs font-semibold text-cyan-300 hover:bg-cyan-900/60 cursor-pointer"
                >
                  <span>↗ Try Google Sign-in with Redirect (Brave Friendly)</span>
                </button>
              )}

              <div className="flex items-center gap-2 pt-1">
                <div className="h-px flex-1 bg-slate-800" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">or sign in with password</span>
                <div className="h-px flex-1 bg-slate-800" />
              </div>
            </div>
          )}

          {/* Auth Form */}
          <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
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
