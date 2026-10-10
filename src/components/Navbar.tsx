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
  Sparkles,
  Bookmark,
  Cpu,
  Calculator,
  CalendarRange,
  Settings
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
  onOpenMistakeVault?: () => void;
  unresolvedMistakesCount?: number;
  onOpenSyllabus?: () => void;
  onOpenCalculator?: () => void;
  onOpenSettings?: () => void;
  onOpenStudyLibrary?: () => void;
  isStudyLibraryOpen?: boolean;
}

export const Navbar: React.FC<NavbarProps> = React.memo(({
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
  onOpenAiTutor,
  onOpenMistakeVault,
  unresolvedMistakesCount = 0,
  onOpenSyllabus,
  onOpenCalculator,
  onOpenSettings,
  onOpenStudyLibrary,
  isStudyLibraryOpen = false
}) => {
  const isAdmin = currentUser?.role === 'admin';

  return (
    <header 
      className="sticky top-0 z-40 backdrop-blur-md w-full max-w-full overflow-hidden border-b transition-colors duration-300"
      style={{
        backgroundColor: 'var(--theme-nav, rgba(2, 6, 23, 0.95))',
        borderColor: 'var(--theme-border, rgba(30, 41, 59, 0.8))'
      }}
    >
      {/* Top Banner Row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2.5 py-1.5 sm:px-6 sm:py-2">
        {/* Brand */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-slate-900/90 overflow-hidden shadow-md shadow-cyan-500/20 ring-1 ring-cyan-500/30 p-0.5">
            <img src="/kips.jpeg" alt="KIPS Logo" className="h-full w-full object-contain rounded-lg" />
          </div>
          <div>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="font-extrabold tracking-tight text-white text-sm sm:text-lg">
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
            <p className="hidden md:block text-[10px] sm:text-[11px] text-slate-400 leading-tight">Daily 20–25 MCQ Practice & Mastery</p>
          </div>
        </div>

        {/* Action Items - Guaranteed never to overflow on mobile screens */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Announcement Bell / Megaphone Icon Button */}
          <button
            onClick={onOpenAnnouncement}
            className="relative flex h-7.5 w-7.5 sm:h-8.5 sm:w-8.5 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-850/80 text-slate-300 transition-all hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-300 cursor-pointer"
            title="College announcements & notices"
          >
            <Megaphone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            {hasActiveAnnouncement && (
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 ring-2 ring-slate-950"></span>
              </span>
            )}
          </button>

          {/* Scientific Calculator Quick Access right next to announcements */}
          {onOpenCalculator && (
            <button
              onClick={onOpenCalculator}
              className="relative flex h-7.5 w-7.5 sm:h-8.5 sm:w-auto items-center justify-center sm:justify-start sm:px-2.5 gap-1.5 rounded-lg border border-amber-500/40 bg-gradient-to-r from-amber-950/50 to-slate-900/90 text-xs font-bold text-amber-300 transition-all hover:border-amber-400 hover:bg-amber-900/60 hover:text-white cursor-pointer shadow-sm shadow-amber-500/10"
              title="Open Casio fx-991ES PLUS Scientific Calculator (Alt + C)"
            >
              <Calculator className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-400" />
              <span className="hidden sm:inline">Calculator</span>
            </button>
          )}

          {/* AI Tutor Assistant Button: Hidden on mobile since floating trigger is always available! */}
          {onOpenAiTutor && (
            <button
              onClick={onOpenAiTutor}
              className="hidden sm:flex h-8 sm:h-8.5 items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-gradient-to-r from-cyan-950/60 to-blue-950/60 px-2 sm:px-2.5 text-xs font-semibold text-cyan-300 transition-all hover:border-cyan-400 hover:bg-cyan-900/50 hover:text-white cursor-pointer shadow-sm shadow-cyan-500/10"
              title="Open KIPS FBISE AI Tutor (GPT 120B)"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
              <span className="hidden md:inline">AI Tutor</span>
            </button>
          )}

          {/* Student & Admin Discussion Chat */}
          <button
            onClick={onOpenChat}
            className="relative flex h-7.5 w-7.5 sm:h-8.5 sm:w-auto items-center justify-center sm:justify-start sm:px-2.5 gap-1.5 rounded-lg border border-indigo-500/40 bg-indigo-950/40 text-xs font-semibold text-indigo-300 transition-all hover:border-indigo-400 hover:bg-indigo-900/60 hover:text-white cursor-pointer"
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

          {/* Syllabus Roadmap Button (Exclusively for Computer & Maths as requested) */}
          {(currentSubject === 'computer' || currentSubject === 'maths') && onOpenSyllabus && (
            <button
              onClick={onOpenSyllabus}
              className={`flex h-7.5 sm:h-8.5 items-center gap-1.5 rounded-lg border px-2 sm:px-2.5 text-xs font-bold transition-all shadow-sm cursor-pointer ${
                currentSubject === 'computer'
                  ? 'border-indigo-500/50 bg-gradient-to-r from-indigo-950/80 to-purple-950/80 text-indigo-300 hover:border-indigo-400 hover:text-white shadow-indigo-500/15'
                  : 'border-rose-500/50 bg-gradient-to-r from-rose-950/80 to-pink-950/80 text-rose-300 hover:border-rose-400 hover:text-white shadow-rose-500/15'
              }`}
              title={`View 102-Day FBISE ${currentSubject === 'computer' ? 'Computer Science' : 'Mathematics'} Study Roadmap & Syllabus`}
            >
              <CalendarRange className={`h-3.5 w-3.5 ${currentSubject === 'computer' ? 'text-indigo-400' : 'text-rose-400'}`} />
              <span className="inline">Syllabus</span>
            </button>
          )}

          {/* Leaderboard */}
          <button
            onClick={onOpenLeaderboard}
            className="flex h-7.5 w-7.5 sm:h-8.5 sm:w-auto items-center justify-center sm:justify-start sm:px-2.5 gap-1.5 rounded-lg border border-amber-500/30 bg-amber-950/30 text-xs font-semibold text-amber-300 transition-all hover:border-amber-400 hover:bg-amber-900/50 hover:text-white cursor-pointer"
            title="Leaderboard rankings"
          >
            <Trophy className="h-3.5 w-3.5 text-amber-400" />
            <span className="hidden md:inline">Leaderboard</span>
          </button>

          {/* Student Mistake Vault */}
          {onOpenMistakeVault && (
            <button
              onClick={onOpenMistakeVault}
              className="relative flex h-7.5 w-7.5 sm:h-8.5 sm:w-auto items-center justify-center sm:justify-start sm:px-2.5 gap-1.5 rounded-lg border border-rose-500/30 bg-rose-950/30 text-xs font-semibold text-rose-300 transition-all hover:border-rose-400 hover:bg-rose-900/50 hover:text-white cursor-pointer shadow-sm"
              title={unresolvedMistakesCount > 0 ? `${unresolvedMistakesCount} MCQs need revision in Mistake Vault` : "Personal Mistake Vault"}
            >
              <Bookmark className="h-3.5 w-3.5 text-rose-400" />
              <span className="hidden md:inline">Mistakes</span>
              {unresolvedMistakesCount > 0 && (
                <span className="absolute -top-1 -right-1 sm:static sm:inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-600 px-1 text-[9px] font-black text-white">
                  {unresolvedMistakesCount}
                </span>
              )}
            </button>
          )}

          {/* Visual Theme & Portal Settings Button */}
          {onOpenSettings && (
            <button
              onClick={onOpenSettings}
              className="flex h-7.5 w-7.5 sm:h-8.5 sm:w-auto items-center justify-center sm:justify-start sm:px-2.5 gap-1.5 rounded-lg border border-slate-700/80 bg-slate-800/80 text-xs font-semibold text-slate-300 transition-all hover:border-cyan-400 hover:bg-slate-700 hover:text-cyan-300 cursor-pointer shadow-sm"
              title="Change visual theme & portal settings"
            >
              <Settings className="h-3.5 w-3.5 text-cyan-400 transition-transform group-hover:rotate-45" />
              <span className="hidden md:inline">Theme</span>
            </button>
          )}

          {/* Admin Exclusive: Post New Drill */}
          {isAdmin && (
            <button
              onClick={onOpenAddDrill}
              className="flex h-7.5 sm:h-8.5 items-center gap-1 rounded-lg border border-emerald-500/30 bg-emerald-950/50 px-2 sm:px-2.5 py-1 text-xs font-bold text-emerald-300 transition-all hover:border-emerald-400 hover:bg-emerald-900/70 hover:text-white"
            >
              <PlusCircle className="h-3.5 w-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Post Drill</span>
            </button>
          )}

          {/* Admin Exclusive: Quota Quick Button */}
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

          {/* User Profile Pill & Logout (Fully Responsive!) */}
          {currentUser ? (
            <div className="flex items-center gap-1 shrink-0">
              {/* Desktop Profile Pill */}
              <div className="hidden sm:flex h-8.5 items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/90 pl-2 pr-1">
                <div className="flex items-center gap-1.5">
                  {isAdmin ? (
                    <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  ) : (
                    <UserIcon className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  )}
                  <span className="max-w-[85px] md:max-w-[120px] truncate text-xs font-medium text-slate-200">
                    {currentUser.fullName || currentUser.username}
                  </span>
                  {isAdmin && (
                    <span className="rounded bg-cyan-900/70 px-1 py-0.2 text-[9px] font-bold uppercase tracking-wider text-cyan-300">
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
                  title="Sign out"
                  className="rounded p-1 text-slate-400 transition hover:bg-slate-800 hover:text-rose-400 cursor-pointer"
                >
                  <LogOut className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Mobile Compact User Pill */}
              <div className="flex sm:hidden items-center gap-1 shrink-0">
                <button
                  onClick={onOpenChangePassword}
                  className="flex h-7.5 items-center gap-1 rounded-lg border border-slate-800 bg-slate-900/90 px-1.5 text-[11px] font-semibold text-slate-200 hover:border-slate-700 transition cursor-pointer"
                  title={`Signed in as ${currentUser.username}. Tap to change password.`}
                >
                  {isAdmin ? (
                    <ShieldCheck className="h-3 w-3 text-cyan-400 shrink-0" />
                  ) : (
                    <UserIcon className="h-3 w-3 text-slate-400 shrink-0" />
                  )}
                  <span className="max-w-[42px] truncate">{currentUser.username}</span>
                </button>
                
                <button
                  onClick={onLogout}
                  className="flex h-7.5 w-7.5 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/90 text-slate-400 hover:border-rose-500/50 hover:bg-rose-950/40 hover:text-rose-300 transition cursor-pointer shrink-0"
                  title="Sign out of account"
                >
                  <LogOut className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex h-7.5 sm:h-8.5 items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-2.5 sm:px-3 text-xs font-semibold text-white shadow-sm transition hover:from-blue-500 hover:to-cyan-500"
            >
              <UserIcon className="h-3.5 w-3.5" />
              <span>Login</span>
            </button>
          )}
        </div>
      </div>

      {/* Subject Navigation Tabs - Clean, Seamless Segmented Control */}
      <div className="bg-slate-950/60 pb-1 w-full max-w-full overflow-hidden border-t border-slate-900/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-2.5 py-1 sm:px-6">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 w-full sm:w-auto">
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

            <button
              onClick={() => onSelectSubject('computer')}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                currentSubject === 'computer'
                  ? 'bg-indigo-500/15 text-indigo-400 ring-1 ring-indigo-500/40 shadow-sm shadow-indigo-950/50'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <Cpu className={`h-4 w-4 ${currentSubject === 'computer' ? 'text-indigo-400' : 'text-slate-500'}`} />
              <span>Computer</span>
            </button>

            <button
              onClick={() => onSelectSubject('maths')}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                currentSubject === 'maths'
                  ? 'bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/40 shadow-sm shadow-rose-950/50'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <Calculator className={`h-4 w-4 ${currentSubject === 'maths' ? 'text-rose-400' : 'text-slate-500'}`} />
              <span>Maths</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden md:inline text-[11px] text-slate-500">FBISE Curriculum <span className="px-1">•</span> 2026 Session</span>
            {onOpenStudyLibrary && (
              <button
                type="button"
                onClick={onOpenStudyLibrary}
                aria-pressed={isStudyLibraryOpen}
                className={`flex h-8 items-center gap-1.5 rounded-lg border px-2.5 text-xs font-semibold transition ${isStudyLibraryOpen ? 'border-emerald-400/50 bg-emerald-400/15 text-emerald-300' : 'border-slate-700 bg-slate-900/80 text-slate-300 hover:border-emerald-400/50 hover:text-emerald-300'}`}
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>{isStudyLibraryOpen ? 'Daily drills' : 'Study library'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
});

Navbar.displayName = 'Navbar';
