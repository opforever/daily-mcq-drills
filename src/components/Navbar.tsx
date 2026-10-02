import React from 'react';
import { Subject, User } from '../types';
import { 
  Atom, 
  FlaskConical, 
  Dna, 
  Trophy, 
  Sparkles, 
  PlusCircle, 
  User as UserIcon, 
  LogOut, 
  ShieldCheck,
  BookOpen,
  RotateCcw
} from 'lucide-react';

interface NavbarProps {
  currentSubject: Subject;
  onSelectSubject: (subject: Subject) => void;
  currentUser: User | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  onOpenLeaderboard: () => void;
  onOpenAiStudioPrompts: () => void;
  onOpenAddDrill: () => void;
  onOpenResetModal?: () => void;
  isCloudConnected?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSubject,
  onSelectSubject,
  currentUser,
  onOpenAuth,
  onLogout,
  onOpenLeaderboard,
  onOpenAiStudioPrompts,
  onOpenAddDrill,
  onOpenResetModal,
  isCloudConnected
}) => {
  const isAdmin = currentUser?.role === 'admin';

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      {/* Top Banner */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-600 shadow-lg shadow-cyan-500/20 ring-1 ring-white/20">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-white sm:text-lg">
                KIPS <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">FBISE</span>
              </span>
              <span className="hidden rounded-full border border-blue-500/30 bg-blue-950/60 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-blue-300 sm:inline-block">
                1st Year Drills
              </span>
              {isCloudConnected && (
                <span className="hidden items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 md:inline-flex" title="Connected to Google Firebase Firestore live cloud database">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  Cloud Live
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-400">Daily 20–25 MCQ Practice & Mastery</p>
          </div>
        </div>

        {/* Action Items */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Admin Exclusive: AI Studio Prompts */}
          {isAdmin && (
            <button
              onClick={onOpenAiStudioPrompts}
              className="flex items-center gap-1.5 rounded-lg border border-purple-500/30 bg-purple-950/30 px-2.5 py-1.5 text-xs font-medium text-purple-300 transition-all hover:border-purple-400 hover:bg-purple-900/50 hover:text-white"
              title="Get copy-paste System Instructions for Google AI Studio"
            >
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              <span className="hidden md:inline">AI Studio</span> Prompts
            </button>
          )}

          {/* Admin Exclusive: Post New Drill */}
          {isAdmin && (
            <button
              onClick={onOpenAddDrill}
              className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-1.5 text-xs font-semibold text-emerald-300 transition-all hover:border-emerald-400 hover:bg-emerald-900/60 hover:text-white"
            >
              <PlusCircle className="h-3.5 w-3.5 text-emerald-400" />
              <span>Post Drill</span>
            </button>
          )}

          {/* Admin Exclusive: Reset All Data */}
          {isAdmin && onOpenResetModal && (
            <button
              onClick={onOpenResetModal}
              title="Reset all drills and student data"
              className="flex items-center gap-1.5 rounded-lg border border-rose-500/30 bg-rose-950/30 px-2.5 py-1.5 text-xs font-medium text-rose-300 transition-all hover:border-rose-400 hover:bg-rose-900/50 hover:text-white"
            >
              <RotateCcw className="h-3.5 w-3.5 text-rose-400" />
              <span className="hidden lg:inline">Reset Data</span>
            </button>
          )}

          {/* Leaderboard (Available for everyone) */}
          <button
            onClick={onOpenLeaderboard}
            className="flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-950/30 px-2.5 py-1.5 text-xs font-medium text-amber-300 transition-all hover:border-amber-400 hover:bg-amber-900/50 hover:text-white"
          >
            <Trophy className="h-3.5 w-3.5 text-amber-400" />
            <span className="hidden sm:inline">Leaderboard</span>
          </button>

          {/* User Auth Profile Pill */}
          {currentUser ? (
            <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/80 py-1 pl-2.5 pr-1.5">
              <div className="flex items-center gap-1.5">
                {isAdmin ? (
                  <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
                ) : (
                  <UserIcon className="h-3.5 w-3.5 text-slate-400" />
                )}
                <span className="max-w-[90px] truncate text-xs font-medium text-slate-200 sm:max-w-[120px]">
                  {currentUser.fullName || currentUser.username}
                </span>
                {isAdmin && (
                  <span className="rounded bg-cyan-900/70 px-1 py-0.5 text-[9px] font-bold uppercase tracking-wider text-cyan-300">
                    Admin
                  </span>
                )}
              </div>
              <button
                onClick={onLogout}
                title="Log out"
                className="rounded p-1 text-slate-400 transition hover:bg-slate-800 hover:text-rose-400"
              >
                <LogOut className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:from-blue-500 hover:to-cyan-500"
            >
              <UserIcon className="h-3.5 w-3.5" />
              <span>Login</span>
            </button>
          )}
        </div>
      </div>

      {/* Subject Navigation Tabs */}
      <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-2 sm:px-6">
        <button
          onClick={() => onSelectSubject('physics')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
            currentSubject === 'physics'
              ? 'bg-cyan-500/15 text-cyan-400 ring-1 ring-cyan-500/40 shadow-sm shadow-cyan-950'
              : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
          }`}
        >
          <Atom className={`h-4 w-4 ${currentSubject === 'physics' ? 'text-cyan-400' : 'text-slate-500'}`} />
          <span>Physics</span>
        </button>

        <button
          onClick={() => onSelectSubject('chemistry')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
            currentSubject === 'chemistry'
              ? 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/40 shadow-sm shadow-amber-950'
              : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
          }`}
        >
          <FlaskConical className={`h-4 w-4 ${currentSubject === 'chemistry' ? 'text-amber-400' : 'text-slate-500'}`} />
          <span>Chemistry</span>
        </button>

        <button
          onClick={() => onSelectSubject('biology')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
            currentSubject === 'biology'
              ? 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/40 shadow-sm shadow-emerald-950'
              : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
          }`}
        >
          <Dna className={`h-4 w-4 ${currentSubject === 'biology' ? 'text-emerald-400' : 'text-slate-500'}`} />
          <span>Biology</span>
        </button>
      </div>
    </header>
  );
};
