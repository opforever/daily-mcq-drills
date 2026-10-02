import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Drill, OptionKey, UserAttempt } from '../types';
import { LatexRenderer } from '../utils/latexRenderer';
import { CheckCircle2, XCircle, Trophy, RotateCcw, X, Filter } from 'lucide-react';

interface ScorecardModalProps {
  drill: Drill;
  attempt: UserAttempt;
  onClose: () => void;
  onRetake: () => void;
}

export const ScorecardModal: React.FC<ScorecardModalProps> = ({
  drill,
  attempt,
  onClose,
  onRetake
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'wrong' | 'correct'>('all');

  const totalQuestions = drill.questions.length;
  const score = attempt.score;
  const percentage = Math.round((score / totalQuestions) * 100);

  useEffect(() => {
    if (percentage >= 70) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore if canvas-confetti is not loaded
      }
    }
  }, [percentage]);

  const getVerdict = () => {
    if (percentage >= 90) return { title: 'Outstanding! FBISE Board Topper Level 🌟', color: 'text-amber-400' };
    if (percentage >= 75) return { title: 'Great Job! Strong Concept Clarity 🚀', color: 'text-emerald-400' };
    if (percentage >= 50) return { title: 'Good Effort! Revise Weak Areas 💡', color: 'text-cyan-400' };
    return { title: 'Needs Revision! Review Textbook Explanations 📚', color: 'text-rose-400' };
  };

  const filteredQuestions = drill.questions.filter(q => {
    const userSelected = attempt.answers[q.id];
    const isCorrect = userSelected === q.correctAnswer;
    if (filterMode === 'wrong') return !isCorrect;
    if (filterMode === 'correct') return isCorrect;
    return true;
  });

  const minutes = Math.floor(attempt.timeSpentSeconds / 60);
  const seconds = attempt.timeSpentSeconds % 60;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-4 overflow-y-auto">
      <div className="relative my-6 w-full max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-2xl sm:p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-xl p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header Summary */}
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/20">
            <Trophy className="h-7 w-7" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Drill #{drill.drillNumber} • {drill.chapter}
          </span>
          <h2 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
            {drill.title}
          </h2>
          <p className={`mt-1 text-sm font-semibold ${getVerdict().color}`}>
            {getVerdict().title}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="my-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-center">
            <p className="text-xs font-medium text-slate-400">Your Score</p>
            <p className="mt-1 text-2xl font-bold text-white">
              {score} <span className="text-sm font-normal text-slate-400">/ {totalQuestions}</span>
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-center">
            <p className="text-xs font-medium text-slate-400">Accuracy</p>
            <p className="mt-1 text-2xl font-bold text-cyan-400">{percentage}%</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-center">
            <p className="text-xs font-medium text-slate-400">Incorrect</p>
            <p className="mt-1 text-2xl font-bold text-rose-400">{totalQuestions - score}</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-center">
            <p className="text-xs font-medium text-slate-400">Time Taken</p>
            <p className="mt-1 text-2xl font-bold text-emerald-400">
              {minutes}m {seconds}s
            </p>
          </div>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-slate-400" />
            <span className="text-xs font-semibold text-slate-300">Review Questions:</span>
          </div>
          <div className="flex gap-1.5">
            <button
              onClick={() => setFilterMode('all')}
              className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                filterMode === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              All ({totalQuestions})
            </button>
            <button
              onClick={() => setFilterMode('wrong')}
              className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                filterMode === 'wrong'
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Mistakes ({totalQuestions - score})
            </button>
            <button
              onClick={() => setFilterMode('correct')}
              className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                filterMode === 'correct'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Correct ({score})
            </button>
          </div>
        </div>

        {/* Question Review List */}
        <div className="mt-4 max-h-[360px] space-y-4 overflow-y-auto pr-1">
          {filteredQuestions.map((q, idx) => {
            const userSelected = attempt.answers[q.id];
            const isCorrect = userSelected === q.correctAnswer;

            return (
              <div
                key={q.id}
                className={`rounded-xl border p-4 ${
                  isCorrect
                    ? 'border-emerald-500/20 bg-emerald-950/10'
                    : 'border-rose-500/20 bg-rose-950/10'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5">
                    {isCorrect ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    ) : (
                      <XCircle className="h-5 w-5 text-rose-400" />
                    )}
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-400">
                      Question {idx + 1}
                    </p>
                    <div className="mt-1 text-sm font-medium text-slate-100">
                      <LatexRenderer content={q.question} />
                    </div>

                    {/* Options list */}
                    <div className="mt-2.5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                      {(['A', 'B', 'C', 'D'] as OptionKey[]).map(key => {
                        const isThisCorrect = key === q.correctAnswer;
                        const isThisSelected = key === userSelected;

                        let optClass = 'border-slate-800 bg-slate-900/60 text-slate-300';
                        if (isThisCorrect) {
                          optClass = 'border-emerald-500/50 bg-emerald-950/40 text-emerald-200 font-semibold';
                        } else if (isThisSelected && !isThisCorrect) {
                          optClass = 'border-rose-500/50 bg-rose-950/40 text-rose-200 line-through';
                        }

                        return (
                          <div
                            key={key}
                            className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs ${optClass}`}
                          >
                            <span className="font-bold">{key})</span>
                            <LatexRenderer content={q.options[key]} inline />
                            {isThisCorrect && (
                              <span className="ml-auto text-[10px] font-bold text-emerald-400">
                                Correct
                              </span>
                            )}
                            {isThisSelected && !isThisCorrect && (
                              <span className="ml-auto text-[10px] font-bold text-rose-400">
                                Your Pick
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* FBISE Explanation */}
                    {q.explanation && (
                      <div className="mt-2.5 rounded-lg border border-slate-800 bg-slate-950/60 p-2.5 text-xs text-slate-300">
                        <span className="font-semibold text-cyan-400">FBISE Textbook Rationale: </span>
                        <LatexRenderer content={q.explanation} inline />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-4">
          <button
            onClick={onRetake}
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-700 hover:text-white"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Retake Drill</span>
          </button>

          <button
            onClick={onClose}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-2 text-sm font-semibold text-white shadow-md transition hover:from-blue-500 hover:to-cyan-500"
          >
            Back to Drills
          </button>
        </div>
      </div>
    </div>
  );
};
