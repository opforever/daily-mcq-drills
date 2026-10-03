import React from 'react';
import { Subject, User } from '../types';
import { 
  Atom, 
  FlaskConical, 
  Dna, 
  Trophy, 
  PlusCircle, 
  User as UserIcon, 
  LogOut, 
  ShieldCheck, 
  BookOpen, 
  RotateCcw,
  MessageSquare,
  Activity,
  Megaphone,
  KeyRound,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  currentSubject: Subject;
  onSelectSubject: (subject: Subject) => void;
  currentUser: User | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  onOpenLeaderboard: () => void;
  onOpenAddDrill: () => void;
  onOpenResetModal?: () => void;
  isCloudConnected?: boolean;
  onOpenChat: () => void;
  onOpenFirebaseHealth?: () => void;
  onOpenAnnouncement: () => void;
  hasActiveAnnouncement?: boolean;
  hasUnreadDiscussion?: boolean;
  onOpenChangePassword?: () => void;
  onOpenAiTutor?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSubject,
  onSelectSubject,
  currentUser,
  onOpenAuth,
  onLogout,
  onOpenLeaderboard,
  onOpenAddDrill,
  onOpenResetModal,
  isCloudConnected,
  onOpenChat,
  onOpenFirebaseHealth,
  onOpenAnnouncement,
  hasActiveAnnouncement = false,
  hasUnreadDiscussion = false,
  onOpenChangePassword,
  onOpenAiTutor
}) => {
  const isAdmin = currentUser?.role === 'admin';

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md">
      {/* Top Banner Row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2 sm:px-6">
        {/* Brand */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-slate-900/90 overflow-hidden shadow-md shadow-cyan-500/20 ring-1 ring-cyan-500/30 p-0.5">
            <img src="/kips.jpeg" alt="KIPS Logo" className="h-full w-full object-contain rounded-lg" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-extrabold tracking-tight text-white text-base sm:text-lg">
                KIPS <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">FBISE</span>
              </span>
              <span className="hidden rounded-full border border-blue-500/30 bg-blue-950/60 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-blue-300 sm:inline-block">
                1st Year Drills
              </span>
              {isCloudConnected && (
                <button
                  type="button"
                  onClick={isAdmin && onOpenFirebaseHealth ? onOpenFirebaseHealth : undefined}
                  className={`hidden items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 md:inline-flex transition ${
                    isAdmin ? 'hover:bg-emerald-900/60 cursor-pointer' : ''
                  }`}
                  title={isAdmin ? 'View real-time Firebase requests used' : 'Connected to Firestore cloud'}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  Cloud Live {isAdmin && '• Quotas ↗'}
                </button>
              )}
            </div>
            <p className="hidden xs:block text-[10px] sm:text-[11px] text-slate-400 leading-tight">Daily 20–25 MCQ Practice & Mastery</p>
          </div>
        </div>

        {/* Action Items - Aligned in a straight, uniform row */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Announcement Bell / Megaphone Icon Button */}
          <button
            onClick={onOpenAnnouncement}
            className="relative flex h-8 w-8 sm:h-8.5 sm:w-8.5 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-850/80 text-slate-300 transition-all hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-300 cursor-pointer"
            title="College announcements & notices"
          >
            <Megaphone className="h-4 w-4" />
            {hasActiveAnnouncement && (
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 ring-2 ring-slate-950"></span>
              </span>
            )}
          </button>

          {/* AI Tutor Assistant Button */}
          {onOpenAiTutor && (
            <button
              onClick={onOpenAiTutor}
              className="flex h-8 sm:h-8.5 items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-gradient-to-r from-cyan-950/60 to-blue-950/60 px-2 sm:px-2.5 text-xs font-semibold text-cyan-300 transition-all hover:border-cyan-400 hover:bg-cyan-900/50 hover:text-white cursor-pointer shadow-sm shadow-cyan-500/10"
              title="Open KIPS FBISE AI Tutor (GPT 120B)"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
              <span className="hidden sm:inline">AI Tutor</span>
            </button>
          )}

          {/* Student & Admin Discussion Chat */}
          <button
            onClick={onOpenChat}
            className="relative flex h-8 sm:h-8.5 items-center gap-1.5 rounded-lg border border-indigo-500/40 bg-indigo-950/40 px-2 sm:px-2.5 text-xs font-semibold text-indigo-300 transition-all hover:border-indigo-400 hover:bg-indigo-900/60 hover:text-white cursor-pointer"
            title={hasUnreadDiscussion ? "New unread messages in Discussions!" : "Open group discussion and student doubts chat"}
          >
            <MessageSquare className="h-3.5 w-3.5 text-indigo-400" />
            <span className="hidden md:inline">Discussions</span>
            {hasUnreadDiscussion && (
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5" title="Unread messages">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-600 ring-2 ring-slate-950"></span>
              </span>
            )}
          </button>

          {/* Leaderboard */}
          <button
            onClick={onOpenLeaderboard}
            className="flex h-8 sm:h-8.5 items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-950/30 px-2 sm:px-2.5 text-xs font-semibold text-amber-300 transition-all hover:border-amber-400 hover:bg-amber-900/50 hover:text-white"
            title="Leaderboard rankings"
          >
            <Trophy className="h-3.5 w-3.5 text-amber-400" />
            <span className="hidden sm:inline">Leaderboard</span>
          </button>

          {/* Admin Exclusive: Post New Drill */}
          {isAdmin && (
            <button
              onClick={onOpenAddDrill}
              className="flex h-8 sm:h-8.5 items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-950/50 px-2.5 py-1 text-xs font-bold text-emerald-300 transition-all hover:border-emerald-400 hover:bg-emerald-900/70 hover:text-white"
            >
              <PlusCircle className="h-3.5 w-3.5 text-emerald-400" />
              <span>Post Drill</span>
            </button>
          )}

          {/* Admin Exclusive: Quota Quick Button (Mobile or when badge not visible) */}
          {isAdmin && onOpenFirebaseHealth && (
            <button
              onClick={onOpenFirebaseHealth}
              className="hidden lg:flex h-8 sm:h-8.5 items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-950/30 px-2 text-xs font-medium text-cyan-300 transition hover:bg-cyan-900/50 hover:text-white"
              title="Firebase Requests & Quotas"
            >
              <Activity className="h-3.5 w-3.5 text-cyan-400" />
              <span>Quota</span>
            </button>
          )}

          {/* Admin Exclusive: Reset All Data */}
          {isAdmin && onOpenResetModal && (
            <button
              onClick={onOpenResetModal}
              title="Reset all drills and student data"
              className="hidden xl:flex h-8 sm:h-8.5 items-center gap-1 rounded-lg border border-rose-500/30 bg-rose-950/30 px-2 text-xs font-medium text-rose-300 transition hover:bg-rose-900/50 hover:text-white"
            >
              <RotateCcw className="h-3.5 w-3.5 text-rose-400" />
              <span>Reset</span>
            </button>
          )}

          {/* User Profile Pill */}
          {currentUser ? (
            <div className="flex h-8 sm:h-8.5 items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/90 pl-2 pr-1">
              <div className="flex items-center gap-1.5">
                {isAdmin ? (
                  <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                ) : (
                  <UserIcon className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                )}
                <span className="max-w-[70px] sm:max-w-[110px] truncate text-xs font-medium text-slate-200">
                  {currentUser.fullName || currentUser.username}
                </span>
                {isAdmin && (
                  <span className="hidden sm:inline rounded bg-cyan-900/70 px-1 py-0.2 text-[9px] font-bold uppercase tracking-wider text-cyan-300">
                    Admin
                  </span>
                )}
              </div>
              {onOpenChangePassword && (
                <button
                  onClick={onOpenChangePassword}
                  title="Change Account Password"
                  className="rounded p-1 text-slate-400 transition hover:bg-slate-800 hover:text-cyan-300 cursor-pointer"
                >
                  <KeyRound className="h-3.5 w-3.5" />
                </button>
              )}
              <button
                onClick={onLogout}
                title="Log out"
                className="rounded p-1 text-slate-400 transition hover:bg-slate-800 hover:text-rose-400 cursor-pointer"
              >
                <LogOut className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex h-8 sm:h-8.5 items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-3 text-xs font-semibold text-white shadow-sm transition hover:from-blue-500 hover:to-cyan-500"
            >
              <UserIcon className="h-3.5 w-3.5" />
              <span>Login</span>
            </button>
          )}
        </div>
      </div>

      {/* Subject Navigation Tabs - Clean, Seamless Segmented Control */}
      <div className="bg-slate-950/60 pb-1">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-1 sm:px-6">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5">
            <button
              onClick={() => onSelectSubject('physics')}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                currentSubject === 'physics'
                  ? 'bg-cyan-500/15 text-cyan-400 ring-1 ring-cyan-500/40 shadow-sm shadow-cyan-950/50'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <Atom className={`h-4 w-4 ${currentSubject === 'physics' ? 'text-cyan-400' : 'text-slate-500'}`} />
              <span>Physics</span>
            </button>

            <button
              onClick={() => onSelectSubject('chemistry')}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                currentSubject === 'chemistry'
                  ? 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/40 shadow-sm shadow-amber-950/50'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <FlaskConical className={`h-4 w-4 ${currentSubject === 'chemistry' ? 'text-amber-400' : 'text-slate-500'}`} />
              <span>Chemistry</span>
            </button>

            <button
              onClick={() => onSelectSubject('biology')}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                currentSubject === 'biology'
                  ? 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/40 shadow-sm shadow-emerald-950/50'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <Dna className={`h-4 w-4 ${currentSubject === 'biology' ? 'text-emerald-400' : 'text-slate-500'}`} />
              <span>Biology</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-500">
            <span>FBISE Curriculum</span>
            <span>•</span>
            <span>2026 Session</span>
          </div>
        </div>
      </div>
    </header>
  );
};
