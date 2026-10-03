import React, { useState, useEffect, useRef } from 'react';
import { Drill, OptionKey, UserAttempt, User } from '../types';
import { LatexRenderer } from '../utils/latexRenderer';
import { 
  saveInProgressSession, 
  getInProgressSession, 
  clearInProgressSession 
} from '../utils/storage';
import {
  saveCloudInProgressSession,
  getCloudInProgressSession,
  clearCloudInProgressSession
} from '../utils/firebase';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  HelpCircle, 
  Check, 
  Flag, 
  RotateCcw, 
  Sparkles, 
  Timer, 
  Trash2,
  Edit3,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Cloud,
  Loader2,
  Lightbulb,
  Bot,
  RotateCw
} from 'lucide-react';

interface DrillViewerProps {
  drill: Drill;
  currentUser: User | null;
  onBack: () => void;
  onFinishDrill: (attempt: UserAttempt) => void;
  onDeleteDrill?: (drillId: string) => void;
  onEditDrill?: (drill: Drill) => void;
  onOpenAiTutor?: () => void;
}

export const DrillViewer: React.FC<DrillViewerProps> = ({
  drill,
  currentUser,
  onBack,
  onFinishDrill,
  onDeleteDrill,
  onEditDrill,
  onOpenAiTutor
}) => {
  const username = currentUser?.username || 'guest';
  const savedSession = getInProgressSession(username, drill.id);

  const [currentIndex, setCurrentIndex] = useState<number>(() => savedSession?.currentIndex ?? 0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, OptionKey>>(() => savedSession?.selectedAnswers ?? {});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>(() => savedSession?.showExplanation ?? {});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [expandedExplanations, setExpandedExplanations] = useState<Record<string, boolean>>(() => savedSession?.expandedExplanations ?? {});
  const [isResumed, setIsResumed] = useState<boolean>(() => Boolean(savedSession && Object.keys(savedSession.selectedAnswers || {}).length > 0));
  const [cloudSyncStatus, setCloudSyncStatus] = useState<'idle' | 'checking' | 'saving' | 'synced'>('idle');
  const [cloudNotice, setCloudNotice] = useState<string | null>(null);

  // Timer settings: countdown toggleable (defaults to elapsed stopwatch, toggle to 25-min countdown)
  const [isCountdownEnabled, setIsCountdownEnabled] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(drill.questions.length * 60); // 1 min per MCQ
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(() => savedSession?.elapsedSeconds ?? 0);

  // Socratic AI Concept Hint state (per question)
  const [conceptHints, setConceptHints] = useState<Record<string, string>>({});
  const [isLoadingHint, setIsLoadingHint] = useState<Record<string, boolean>>({});
  const [hintError, setHintError] = useState<Record<string, string>>({});
  const [expandedHints, setExpandedHints] = useState<Record<string, boolean>>({});

  const handleRequestConceptHint = async (qId: string, forceRefresh = false) => {
    // If already loaded and not force refreshing, just toggle expansion
    if (conceptHints[qId] && !forceRefresh) {
      setExpandedHints(prev => ({ ...prev, [qId]: !prev[qId] }));
      return;
    }

    const questionObj = drill.questions.find(q => q.id === qId);
    if (!questionObj) return;

    setExpandedHints(prev => ({ ...prev, [qId]: true }));
    setIsLoadingHint(prev => ({ ...prev, [qId]: true }));
    setHintError(prev => ({ ...prev, [qId]: '' }));

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            {
              role: 'user',
              content: `I am attempting this FBISE 1st Year MCQ in ${drill.subject.toUpperCase()}:\n\n"${questionObj.question}"\n\nOptions:\nA) ${questionObj.options.A}\nB) ${questionObj.options.B}\nC) ${questionObj.options.C}\nD) ${questionObj.options.D}\n\nI am feeling stuck. Please explain the underlying core concept, textbook formula, or scientific principle so I can solve it on my own. DO NOT tell me which option is correct (do not state A, B, C, or D) and do not state the final answer!`
            }
          ],
          userContext: {
            username: currentUser?.username,
            fullName: currentUser?.fullName,
            role: currentUser?.role,
            college: currentUser?.college,
            activeSubject: drill.subject,
            isHintRequest: true,
            activeDrill: {
              id: drill.id,
              title: drill.title,
              chapter: drill.chapter,
              dayNumber: drill.dayNumber,
              subject: drill.subject
            }
          }
        })
      });

      if (!response.ok) {
        throw new Error('AI hint service temporarily unavailable. Please try again.');
      }

      const data = await response.json();
      const hintText = data.reply || data.content || data.message;
      if (!hintText) {
        throw new Error('No hint received.');
      }

      setConceptHints(prev => ({ ...prev, [qId]: hintText }));
    } catch (err: any) {
      setHintError(prev => ({ ...prev, [qId]: err.message || 'Failed to fetch AI concept hint.' }));
    } finally {
      setIsLoadingHint(prev => ({ ...prev, [qId]: false }));
    }
  };

  // 1. Initial Cloud Sync Check: Checks Firebase Firestore for progress saved on other devices
  useEffect(() => {
    let isMounted = true;
    const syncFromCloud = async () => {
      if (!username || username === 'guest') return;
      try {
        setCloudSyncStatus('checking');
        const cloudSession = await getCloudInProgressSession(username, drill.id);
        if (!isMounted || !cloudSession) {
          setCloudSyncStatus('idle');
          return;
        }

        const localSession = getInProgressSession(username, drill.id);
        const cloudAnswerCount = Object.keys(cloudSession.selectedAnswers || {}).length;
        const localAnswerCount = Object.keys(localSession?.selectedAnswers || {}).length;

        // If cloud has newer progress or more answered questions than local device
        const isCloudNewer = !localSession || (cloudSession.lastUpdated > (localSession.lastUpdated || 0));

        if (cloudAnswerCount > 0 && (isCloudNewer || cloudAnswerCount > localAnswerCount)) {
          setCurrentIndex(cloudSession.currentIndex);
          setSelectedAnswers(cloudSession.selectedAnswers || {});
          setShowExplanation(cloudSession.showExplanation || {});
          setExpandedExplanations(cloudSession.expandedExplanations || {});
          setElapsedSeconds(cloudSession.elapsedSeconds || 0);
          setIsResumed(true);
          setCloudNotice(`☁️ Progress restored from your other device (Question #${cloudSession.currentIndex + 1} • ${cloudAnswerCount} answered)`);
          saveInProgressSession(username, cloudSession);

          setTimeout(() => {
            if (isMounted) setCloudNotice(null);
          }, 4500);
        }
        setCloudSyncStatus('synced');
      } catch {
        if (isMounted) setCloudSyncStatus('idle');
      }
    };

    syncFromCloud();
    return () => { isMounted = false; };
  }, [drill.id, username]);

  // 2. Dual-Layer Auto-Save: Instant localStorage + Debounced Cloud Firestore sync
  useEffect(() => {
    if (Object.keys(selectedAnswers).length > 0) {
      const sessionData = {
        drillId: drill.id,
        currentIndex,
        selectedAnswers,
        showExplanation,
        expandedExplanations,
        elapsedSeconds,
        lastUpdated: Date.now()
      };

      // Immediate local save
      saveInProgressSession(username, sessionData);

      // Debounced Cloud Firestore write
      setCloudSyncStatus('saving');
      const debounceTimer = setTimeout(async () => {
        if (username && username !== 'guest') {
          await saveCloudInProgressSession(username, sessionData);
          setCloudSyncStatus('synced');
        }
      }, 600);

      return () => clearTimeout(debounceTimer);
    }
  }, [currentIndex, selectedAnswers, showExplanation, expandedExplanations, elapsedSeconds, drill.id, username]);

  // Browser reload / accidental close warning if drill has active answers
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (Object.keys(selectedAnswers).length > 0) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [selectedAnswers]);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds(prev => prev + 1);
      if (isCountdownEnabled) {
        setRemainingSeconds(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isCountdownEnabled]);

  const currentQ = drill.questions[currentIndex];
  const totalQuestions = drill.questions.length;
  const answeredCount = Object.keys(selectedAnswers).length;

  const handleSelectOption = (key: OptionKey) => {
    // Only allow selecting once per question for realistic test tracking, or update
    if (selectedAnswers[currentQ.id]) return;

    setSelectedAnswers(prev => ({
      ...prev,
      [currentQ.id]: key
    }));

    // Auto-expand textbook notes only on mistakes, otherwise keep clean
    const isCorrect = key === currentQ.correctAnswer;
    if (!isCorrect) {
      setExpandedExplanations(prev => ({
        ...prev,
        [currentQ.id]: true
      }));
    }

    // Instantly reveal explanation
    setShowExplanation(prev => ({
      ...prev,
      [currentQ.id]: true
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    let score = 0;
    drill.questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });

    // Clear in-progress session once test is finalized
    clearInProgressSession(username, drill.id);
    clearCloudInProgressSession(username, drill.id);

    const userKey = currentUser ? currentUser.username.trim().toLowerCase().replace(/[^a-z0-9_]/g, '_') : 'guest';
    const attempt: UserAttempt = {
      id: `attempt_${userKey}_${drill.id}`,
      drillId: drill.id,
      username: currentUser ? currentUser.username : 'Guest Student',
      subject: drill.subject,
      score,
      totalQuestions: drill.questions.length,
      answers: selectedAnswers,
      completedAt: Date.now(),
      timeSpentSeconds: isCountdownEnabled ? (drill.questions.length * 60 - remainingSeconds) : elapsedSeconds
    };

    onFinishDrill(attempt);
  };

  const handleResetProgress = () => {
    if (confirm('Restart this drill from Question #1? Your in-progress answers will be cleared.')) {
      clearInProgressSession(username, drill.id);
      clearCloudInProgressSession(username, drill.id);
      setSelectedAnswers({});
      setShowExplanation({});
      setExpandedExplanations({});
      setCurrentIndex(0);
      setElapsedSeconds(0);
      setIsResumed(false);
    }
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentSelected = selectedAnswers[currentQ.id];
  const hasAnsweredCurrent = !!currentSelected;
  const isCurrentCorrect = currentSelected === currentQ.correctAnswer;

  return (
    <div className="mx-auto max-w-4xl px-3 py-4 sm:px-6 sm:py-6">
      {/* Top Header Card */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/90 p-3 sm:p-4 backdrop-blur-sm">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:bg-slate-700 hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to List</span>
        </button>

        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <span className="rounded-md bg-blue-950/80 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-blue-400 border border-blue-800/40">
              Day {drill.dayNumber} • Drill #{drill.drillNumber}
            </span>
            <span className="text-xs text-slate-400">{drill.chapter}</span>
          </div>
          <h1 className="mt-0.5 text-base font-bold text-white sm:text-lg">
            {drill.title}
          </h1>
        </div>

        {/* Right side controls: Timer & Admin Delete */}
        <div className="flex items-center gap-2">
          {/* Cloud Sync Status Indicator */}
          <div 
            className="hidden sm:flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950/70 px-2.5 py-1.5 text-[11px]"
            title="In-progress answers are automatically synced to Cloud Firestore so you can resume on any device"
          >
            {cloudSyncStatus === 'checking' && (
              <>
                <Loader2 className="h-3 w-3 animate-spin text-cyan-400" />
                <span className="text-slate-400">Syncing...</span>
              </>
            )}
            {cloudSyncStatus === 'saving' && (
              <>
                <Loader2 className="h-3 w-3 animate-spin text-amber-400" />
                <span className="text-amber-300">Cloud saving...</span>
              </>
            )}
            {(cloudSyncStatus === 'synced' || cloudSyncStatus === 'idle') && (
              <>
                <Cloud className="h-3.5 w-3.5 text-cyan-400" />
                <span className="text-slate-300 font-medium">Cloud Synced</span>
              </>
            )}
          </div>

          {/* Timer Control (Toggleable countdown) */}
          <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-1.5">
            <button
              onClick={() => setIsCountdownEnabled(!isCountdownEnabled)}
              className={`flex items-center gap-1.5 text-xs font-semibold transition ${
                isCountdownEnabled ? 'text-amber-400' : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Click to toggle countdown / stopwatch mode"
            >
              <Timer className="h-3.5 w-3.5" />
              <span>{isCountdownEnabled ? 'Countdown:' : 'Elapsed:'}</span>
            </button>
            <span className="font-mono text-xs font-bold text-white">
              {isCountdownEnabled ? formatTimer(remainingSeconds) : formatTimer(elapsedSeconds)}
            </span>
          </div>

          {/* Admin Edit Drill Option */}
          {currentUser?.role === 'admin' && onEditDrill && (
            <button
              onClick={() => onEditDrill(drill)}
              title="Edit questions, options, or explanations of this drill"
              className="flex items-center gap-1 rounded-xl border border-cyan-500/40 bg-cyan-950/40 px-2.5 py-1.5 text-xs font-semibold text-cyan-300 hover:bg-cyan-900/60 hover:text-white transition"
            >
              <Edit3 className="h-3.5 w-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Edit Drill</span>
            </button>
          )}

          {/* Admin Delete Drill Option */}
          {currentUser?.role === 'admin' && onDeleteDrill && (
            <button
              onClick={() => setShowDeleteModal(true)}
              title="Delete this drill"
              className="flex items-center gap-1 rounded-xl border border-rose-500/40 bg-rose-950/40 px-2.5 py-1.5 text-xs font-semibold text-rose-300 hover:bg-rose-900/60 hover:text-white transition"
            >
              <Trash2 className="h-3.5 w-3.5 text-rose-400" />
              <span className="hidden sm:inline">Delete</span>
            </button>
          )}
        </div>
      </div>

      {/* Cloud Cross-Device Resume Toast Notice */}
      {cloudNotice && (
        <div className="mb-3 flex items-center justify-between gap-2 rounded-xl border border-cyan-500/40 bg-gradient-to-r from-cyan-950/90 via-slate-900 to-blue-950/90 px-3.5 py-2.5 text-xs text-cyan-200 shadow-xl backdrop-blur-md animate-fade-in">
          <div className="flex items-center gap-2.5">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-300">
              <Cloud className="h-3.5 w-3.5" />
            </div>
            <span className="font-medium">{cloudNotice}</span>
          </div>
          <button 
            type="button" 
            onClick={() => setCloudNotice(null)} 
            className="rounded p-1 text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer text-xs"
            title="Dismiss"
          >
            ✕
          </button>
        </div>
      )}

      {/* Auto-Save & Resumed Progress Status Banner */}
      {isResumed && answeredCount > 0 && (
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-2 text-xs text-emerald-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
            <span>
              <strong>Auto-Save Active:</strong> Resumed from Question #{currentIndex + 1} with {answeredCount} saved answers.
            </span>
          </div>
          <button
            type="button"
            onClick={handleResetProgress}
            className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-rose-300 transition underline decoration-dotted cursor-pointer"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Start Fresh</span>
          </button>
        </div>
      )}

      {/* Admin Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400">
                <Trash2 className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Delete This Drill?</h4>
                <p className="text-xs text-slate-400">{drill.title}</p>
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-300">
              Are you sure you want to permanently delete this drill and return to the drill list?
            </p>

            <div className="mt-5 flex items-center justify-end gap-2 border-t border-slate-800 pt-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:bg-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (onDeleteDrill) {
                    onDeleteDrill(drill.id);
                  }
                  setShowDeleteModal(false);
                  onBack();
                }}
                className="rounded-xl bg-rose-600 px-4 py-1.5 text-xs font-bold text-white shadow hover:bg-rose-500"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Progress Bar & Question Jump Pills */}
      <div className="mb-5 rounded-2xl border border-slate-800 bg-slate-900/50 p-3 sm:p-4">
        <div className="mb-2.5 flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-300">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span className="text-slate-400">
            {answeredCount} of {totalQuestions} answered ({Math.round((answeredCount / totalQuestions) * 100)}%)
          </span>
        </div>

        {/* Linear progress track */}
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>

        {/* Quick Question Jump Grid */}
        <div className="mt-3 flex flex-wrap gap-1.5 max-h-20 overflow-y-auto pr-1">
          {drill.questions.map((q, idx) => {
            const answered = selectedAnswers[q.id];
            const isCorrect = answered === q.correctAnswer;
            const isCurrent = idx === currentIndex;

            let pillStyle = 'border-slate-800 bg-slate-950/70 text-slate-400 hover:border-slate-600';
            if (isCurrent) {
              pillStyle = 'ring-2 ring-cyan-400 border-transparent bg-slate-800 text-white font-bold';
            } else if (answered) {
              pillStyle = isCorrect
                ? 'border-emerald-500/50 bg-emerald-950/60 text-emerald-300 font-semibold'
                : 'border-rose-500/50 bg-rose-950/60 text-rose-300 font-semibold';
            }

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-7 w-7 rounded-lg border text-xs transition ${pillStyle}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl sm:p-7">
        {/* Question Statement */}
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xs font-bold text-blue-400 ring-1 ring-blue-500/30">
            Q{currentIndex + 1}
          </div>
          <div className="flex-1 text-base font-semibold leading-relaxed text-slate-100 sm:text-lg">
            <LatexRenderer content={currentQ.question} />
          </div>
        </div>

        {/* Socratic AI Concept Hint Section (Spoiler-Free) */}
        <div className="mt-4 pt-3.5 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => handleRequestConceptHint(currentQ.id)}
              disabled={isLoadingHint[currentQ.id]}
              className="flex items-center gap-2 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-950/40 via-slate-900 to-cyan-950/40 px-3.5 py-1.5 text-xs font-semibold text-amber-300 hover:border-amber-400 hover:text-white transition shadow-sm cursor-pointer group"
              title="Explains the governing textbook concept or formula without revealing the answer"
            >
              <Lightbulb className="h-4 w-4 text-amber-400 shrink-0 group-hover:scale-110 transition" />
              <span>
                {expandedHints[currentQ.id]
                  ? 'Hide AI Concept Hint'
                  : conceptHints[currentQ.id]
                  ? 'View AI Concept Hint'
                  : 'Stuck? Ask AI (Concept Hint)'}
              </span>
              {isLoadingHint[currentQ.id] && (
                <Loader2 className="h-3.5 w-3.5 animate-spin text-cyan-400 ml-1" />
              )}
            </button>

            <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <Sparkles className="h-3 w-3 text-cyan-400" />
              <span>Explains concept • Won't reveal the answer</span>
            </span>
          </div>

          {/* Expanded AI Concept Hint Box */}
          {expandedHints[currentQ.id] && (
            <div className="mt-3 rounded-2xl border border-amber-500/40 bg-gradient-to-br from-amber-950/30 via-slate-900/90 to-slate-950 p-4 shadow-xl backdrop-blur-md animate-fade-in">
              <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-amber-500/20">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-500/20 text-amber-300">
                    <Lightbulb className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-amber-200">
                      AI Socratic Concept Hint ({drill.subject.toUpperCase()})
                    </h5>
                    <p className="text-[10px] text-slate-400">
                      Governing principle & formula guidance • Answers are never spoiled
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {onOpenAiTutor && (
                    <button
                      type="button"
                      onClick={() => onOpenAiTutor()}
                      className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-cyan-400 hover:text-cyan-200 transition cursor-pointer"
                      title="Open full AI Tutor chat modal"
                    >
                      <Bot className="h-3.5 w-3.5" />
                      <span>Full Tutor</span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => handleRequestConceptHint(currentQ.id, true)}
                    disabled={isLoadingHint[currentQ.id]}
                    className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                    title="Regenerate hint"
                  >
                    <RotateCw className={`h-3 w-3 ${isLoadingHint[currentQ.id] ? 'animate-spin' : ''}`} />
                  </button>
                </div>
              </div>

              {isLoadingHint[currentQ.id] ? (
                <div className="flex items-center gap-3 py-4 text-xs text-slate-300 justify-center">
                  <Loader2 className="h-4 w-4 animate-spin text-cyan-400 shrink-0" />
                  <span>KIPS AI Tutor (Qwen 27B) is formulating your concept hint...</span>
                </div>
              ) : hintError[currentQ.id] ? (
                <div className="text-xs text-rose-300 py-2 flex items-center justify-between">
                  <span>{hintError[currentQ.id]}</span>
                  <button
                    type="button"
                    onClick={() => handleRequestConceptHint(currentQ.id, true)}
                    className="underline text-cyan-400 ml-2 cursor-pointer"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <LatexRenderer content={conceptHints[currentQ.id] || ''} />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Options Grid */}
        <div className="mt-6 space-y-3">
          {(['A', 'B', 'C', 'D'] as OptionKey[]).map(key => {
            const isSelected = currentSelected === key;
            const isTargetCorrect = key === currentQ.correctAnswer;

            let optionStyle = 'border-slate-800 bg-slate-950/60 text-slate-200 hover:border-slate-700 hover:bg-slate-800/60 cursor-pointer';

            if (hasAnsweredCurrent) {
              if (isTargetCorrect) {
                optionStyle = 'border-emerald-500 bg-emerald-950/60 text-emerald-100 shadow-md shadow-emerald-950/50';
              } else if (isSelected && !isCurrentCorrect) {
                optionStyle = 'border-rose-500 bg-rose-950/60 text-rose-100 shadow-md shadow-rose-950/50';
              } else {
                optionStyle = 'border-slate-800/60 bg-slate-950/30 text-slate-500 opacity-60 cursor-default';
              }
            }

            return (
              <button
                key={key}
                disabled={hasAnsweredCurrent}
                onClick={() => handleSelectOption(key)}
                className={`w-full rounded-xl border p-4 text-left transition-all ${optionStyle}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                        hasAnsweredCurrent && isTargetCorrect
                          ? 'bg-emerald-500 text-white'
                          : hasAnsweredCurrent && isSelected && !isCurrentCorrect
                          ? 'bg-rose-500 text-white'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {key}
                    </span>
                    <div className="text-sm font-medium leading-relaxed">
                      <LatexRenderer content={currentQ.options[key]} inline />
                    </div>
                  </div>

                  {/* Feedback Badges */}
                  {hasAnsweredCurrent && isTargetCorrect && (
                    <div className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="hidden sm:inline">Correct Answer</span>
                    </div>
                  )}

                  {hasAnsweredCurrent && isSelected && !isCurrentCorrect && (
                    <div className="flex items-center gap-1 rounded-full bg-rose-500/20 px-2 py-0.5 text-xs font-semibold text-rose-400">
                      <XCircle className="h-4 w-4" />
                      <span className="hidden sm:inline">Your Selection</span>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Instant Feedback Banner & Collapsible Explanation */}
        {hasAnsweredCurrent && (
          <div
            className={`mt-6 rounded-2xl border transition-all duration-300 overflow-hidden shadow-lg ${
              isCurrentCorrect
                ? 'border-emerald-500/40 bg-emerald-950/25'
                : 'border-rose-500/40 bg-rose-950/25'
            }`}
          >
            {/* Top Action Bar of the Feedback Banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:px-5 border-b border-slate-800/80 bg-slate-950/60">
              <div className="flex items-center gap-2 flex-wrap">
                {isCurrentCorrect ? (
                  <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400">
                    <CheckCircle2 className="h-4 w-4 shrink-0" /> That's Correct!
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-400">
                    <XCircle className="h-4 w-4 shrink-0" /> Incorrect (Correct: Option {currentQ.correctAnswer})
                  </span>
                )}

                {/* Read / Hide Explanation Button */}
                <button
                  type="button"
                  onClick={() => {
                    setExpandedExplanations(prev => ({
                      ...prev,
                      [currentQ.id]: !prev[currentQ.id]
                    }));
                  }}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/90 px-2.5 py-1 text-xs font-semibold text-cyan-300 hover:bg-slate-700 hover:text-white transition cursor-pointer"
                >
                  <BookOpen className="h-3.5 w-3.5 text-cyan-400" />
                  <span>{expandedExplanations[currentQ.id] ? 'Hide Textbook Notes' : 'Read Textbook Notes'}</span>
                  {expandedExplanations[currentQ.id] ? (
                    <ChevronUp className="h-3.5 w-3.5" />
                  ) : (
                    <ChevronDown className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>

              {/* Instant Next Question Button placed right here — Zero Scrolling! */}
              <div className="flex items-center gap-2">
                {currentIndex < totalQuestions - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-1.5 text-xs font-bold text-white shadow-md hover:from-blue-500 hover:to-cyan-500 transition cursor-pointer animate-pulse"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-1.5 text-xs font-bold text-white shadow-md hover:from-emerald-500 hover:to-teal-500 transition cursor-pointer"
                  >
                    <span>Finish Test</span>
                    <Check className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Expandable Explanation Body */}
            {expandedExplanations[currentQ.id] && (
              <div className="p-4 sm:p-5 text-xs sm:text-sm leading-relaxed text-slate-200 bg-slate-900/80 animate-fadeIn">
                <span className="font-bold text-cyan-400">FBISE Textbook Analysis: </span>
                <LatexRenderer content={currentQ.explanation} inline />
              </div>
            )}
          </div>
        )}

        {/* Bottom Navigation Buttons (Sticky so it's always immediately reachable) */}
        <div className="sticky bottom-3 z-30 mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/95 p-3.5 sm:p-4 backdrop-blur-md shadow-2xl">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`flex items-center gap-1.5 rounded-xl border px-4 py-2 text-xs font-semibold transition ${
              currentIndex === 0
                ? 'border-slate-800 bg-slate-900/50 text-slate-600 cursor-not-allowed'
                : 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-2">
            {currentIndex < totalQuestions - 1 ? (
              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-2 text-xs font-semibold text-white shadow-md transition hover:from-blue-500 hover:to-cyan-500"
              >
                <span>Next Question</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : null}

            {/* Submit Test Button */}
            <button
              onClick={handleSubmit}
              className={`flex items-center gap-1.5 rounded-xl px-5 py-2 text-xs font-bold shadow-md transition ${
                answeredCount === totalQuestions
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 ring-2 ring-emerald-500/40'
                  : 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60'
              }`}
            >
              <Check className="h-4 w-4" />
              <span>{answeredCount === totalQuestions ? 'Finish & See Scorecard' : `Submit (${answeredCount}/${totalQuestions})`}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
