import React, { useState, useMemo } from 'react';
import { MistakeItem, Subject, MCQ, OptionKey } from '../types';
import { LatexRenderer } from '../utils/latexRenderer';
import { 
  Bookmark, 
  CheckCircle2, 
  AlertCircle, 
  Trash2, 
  Play, 
  X, 
  Filter, 
  Search, 
  RotateCcw, 
  Sparkles,
  BookOpen,
  Atom,
  FlaskConical,
  Dna,
  ChevronDown,
  ChevronUp,
  Award,
  Layers
} from 'lucide-react';

interface MistakeVaultModalProps {
  mistakes: Record<string, MistakeItem>;
  onClose: () => void;
  onRemoveMistake: (mistakeId: string) => void;
  onToggleMastered: (mistakeId: string) => void;
  onPracticeMistakes: (questions: MCQ[], subject: Subject) => void;
  onClearMastered?: () => void;
}

export const MistakeVaultModal: React.FC<MistakeVaultModalProps> = ({
  mistakes,
  onClose,
  onRemoveMistake,
  onToggleMastered,
  onPracticeMistakes,
  onClearMastered
}) => {
  const [selectedSubject, setSelectedSubject] = useState<'all' | Subject>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'unresolved' | 'mastered'>(() => {
    const list = Object.values(mistakes || {});
    const hasUnresolved = list.some(m => !m.isMastered);
    return hasUnresolved ? 'unresolved' : 'all';
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedExplanations, setExpandedExplanations] = useState<Record<string, boolean>>({});

  const mistakeList = useMemo(() => {
    return Object.values(mistakes || {}).sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));
  }, [mistakes]);

  // Computed statistics
  const stats = useMemo(() => {
    let total = mistakeList.length;
    let unresolved = 0;
    let mastered = 0;
    let physics = 0;
    let chemistry = 0;
    let biology = 0;
    let computer = 0;
    let maths = 0;

    mistakeList.forEach(m => {
      if (m.isMastered) mastered++;
      else unresolved++;

      if (m.subject === 'physics') physics++;
      else if (m.subject === 'chemistry') chemistry++;
      else if (m.subject === 'biology') biology++;
      else if (m.subject === 'computer') computer++;
      else if (m.subject === 'maths') maths++;
    });

    return { total, unresolved, mastered, physics, chemistry, biology, computer, maths };
  }, [mistakeList]);

  // Filtered items
  const filteredMistakes = useMemo(() => {
    return mistakeList.filter(m => {
      // Subject filter
      if (selectedSubject !== 'all' && m.subject !== selectedSubject) return false;

      // Status filter
      if (selectedStatus === 'unresolved' && m.isMastered) return false;
      if (selectedStatus === 'mastered' && !m.isMastered) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchQuestion = m.question.question.toLowerCase().includes(q);
        const matchChapter = m.chapter?.toLowerCase().includes(q);
        const matchDrill = m.drillTitle?.toLowerCase().includes(q);
        if (!matchQuestion && !matchChapter && !matchDrill) return false;
      }

      return true;
    });
  }, [mistakeList, selectedSubject, selectedStatus, searchQuery]);

  const toggleExplanation = (id: string) => {
    setExpandedExplanations(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleStartPractice = () => {
    if (filteredMistakes.length === 0) return;
    const questionsToPractice = filteredMistakes.map(m => m.question);
    const targetSubject = selectedSubject === 'all' 
      ? (filteredMistakes[0]?.subject || 'physics') 
      : selectedSubject;
    onPracticeMistakes(questionsToPractice, targetSubject);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-3 sm:p-6 overflow-y-auto">
      <div className="flex flex-col w-full max-w-4xl max-h-[92vh] rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-500/10 overflow-hidden">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-rose-500 via-pink-600 to-amber-500 text-white shadow-lg shadow-rose-500/20">
              <Bookmark className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">Mistake Vault</h2>
                <span className="rounded-full border border-rose-500/30 bg-rose-950/60 px-2.5 py-0.5 text-xs font-semibold text-rose-300">
                  {stats.unresolved} Needs Revision
                </span>
                {stats.mastered > 0 && (
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-950/60 px-2 py-0.5 text-[11px] font-semibold text-emerald-300">
                    {stats.mastered} Mastered
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400">
                Personal weakness bank • Automatically saved across all your devices
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition hover:bg-slate-800 hover:text-white cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Quick Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-slate-800/80 bg-slate-950/40 p-3 sm:px-6 text-xs">
          <div className="flex items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/20 text-rose-400">
              <AlertCircle className="h-4 w-4" />
            </div>
            <div>
              <div className="font-bold text-white">{stats.unresolved} MCQs</div>
              <div className="text-[10px] text-slate-400">Needs Practice</div>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <div>
              <div className="font-bold text-white">{stats.mastered} MCQs</div>
              <div className="text-[10px] text-slate-400">Mastered</div>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
              <Atom className="h-4 w-4" />
            </div>
            <div>
              <div className="font-bold text-white">{stats.physics} Physics</div>
              <div className="text-[10px] text-slate-400">{stats.chemistry} Chem • {stats.biology} Bio</div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <button
              onClick={handleStartPractice}
              disabled={filteredMistakes.length === 0}
              className={`w-full flex items-center justify-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-bold transition shadow-lg ${
                filteredMistakes.length > 0
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-500/20 hover:scale-[1.02] cursor-pointer'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50'
              }`}
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>Practice ({filteredMistakes.length})</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Controls */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-slate-800 bg-slate-900/60 p-3 sm:px-6">
          {/* Subject Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {(['all', 'physics', 'chemistry', 'biology', 'computer', 'maths'] as const).map(subj => (
              <button
                key={subj}
                onClick={() => setSelectedSubject(subj)}
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold capitalize transition cursor-pointer ${
                  selectedSubject === subj
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                }`}
              >
                {subj}
              </button>
            ))}
          </div>

          {/* Status Pills */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSelectedStatus('unresolved')}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition cursor-pointer ${
                selectedStatus === 'unresolved'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              Unresolved ({stats.unresolved})
            </button>
            <button
              onClick={() => setSelectedStatus('mastered')}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition cursor-pointer ${
                selectedStatus === 'mastered'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              Mastered ({stats.mastered})
            </button>
            <button
              onClick={() => setSelectedStatus('all')}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition cursor-pointer ${
                selectedStatus === 'all'
                  ? 'bg-slate-700 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              All ({stats.total})
            </button>

            {/* Clear Mastered Button */}
            {selectedStatus === 'mastered' && stats.mastered > 0 && onClearMastered && (
              <button
                onClick={onClearMastered}
                className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800/80 px-2 py-1 text-xs font-medium text-slate-300 hover:border-rose-500/50 hover:bg-rose-950/40 hover:text-rose-300 transition cursor-pointer ml-1"
                title="Remove all mastered questions from vault"
              >
                <Trash2 className="h-3 w-3" />
                <span>Clear Mastered</span>
              </button>
            )}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-56">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search MCQs or chapter..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-800 bg-slate-950 py-1.5 pl-8 pr-3 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Mistake Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredMistakes.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              {selectedStatus === 'unresolved' && stats.mastered > 0 ? (
                <>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 mb-3 shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="text-base font-bold text-white">All Mistakes Solved! 🎉</h3>
                  <p className="mt-1 text-xs text-slate-400 max-w-sm">
                    Awesome job! You have successfully solved and mastered all {stats.mastered} {stats.mastered === 1 ? 'question' : 'questions'}. They are now marked as Mastered.
                  </p>
                  <button
                    onClick={() => setSelectedStatus('mastered')}
                    className="mt-4 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition cursor-pointer shadow-md shadow-emerald-600/20"
                  >
                    View Mastered Questions ({stats.mastered})
                  </button>
                </>
              ) : (
                <>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-slate-400 mb-3">
                    <Bookmark className="h-7 w-7 text-slate-500" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {selectedStatus === 'unresolved' ? 'No unresolved mistakes!' : 'Mistake Vault is empty'}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 max-w-sm">
                    {selectedStatus === 'unresolved'
                      ? 'Great job! You have mastered all questions or haven\'t made any mistakes yet in this section.'
                      : 'Questions you get wrong during drills will automatically be cataloged here so you can master them.'}
                  </p>
                </>
              )}
            </div>
          ) : (
            filteredMistakes.map((item, idx) => {
              const isExpanded = expandedExplanations[item.id];
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border p-4 sm:p-5 transition-all ${
                    item.isMastered
                      ? 'border-emerald-500/30 bg-emerald-950/20'
                      : 'border-slate-800 bg-slate-950/70 hover:border-slate-700'
                  }`}
                >
                  {/* Top Bar: Subject Badge, Drill info, Status */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`rounded-md px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${
                        item.subject === 'physics'
                          ? 'bg-blue-950 text-blue-400 border border-blue-500/30'
                          : item.subject === 'chemistry'
                          ? 'bg-amber-950 text-amber-400 border border-amber-500/30'
                          : 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                      }`}>
                        {item.subject}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {item.drillTitle} • Day {item.drillDay}
                      </span>
                      {item.chapter && (
                        <span className="hidden sm:inline-block text-xs text-slate-500">
                          • {item.chapter}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Explicit Status Badge */}
                      {item.isMastered ? (
                        <span className="flex items-center gap-1 rounded-md border border-emerald-500/40 bg-emerald-950/70 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                          <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                          <span>Mastered</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 rounded-md border border-rose-500/40 bg-rose-950/70 px-2 py-0.5 text-[10px] font-bold text-rose-300">
                          <AlertCircle className="h-3 w-3 text-rose-400" />
                          <span>Needs Practice</span>
                        </span>
                      )}

                      {/* Mastered Status Toggle */}
                      <button
                        onClick={() => onToggleMastered(item.id)}
                        className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition cursor-pointer ${
                          item.isMastered
                            ? 'border border-slate-700 bg-slate-800 text-slate-300 hover:border-rose-500/50 hover:text-rose-300'
                            : 'border border-emerald-500/40 bg-emerald-900/40 text-emerald-300 hover:bg-emerald-900/70'
                        }`}
                        title={item.isMastered ? 'Click to mark as needing revision' : 'Click to mark as mastered'}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>{item.isMastered ? 'Mark Unsolved' : 'Mark Mastered'}</span>
                      </button>

                      {/* Remove Button */}
                      <button
                        onClick={() => onRemoveMistake(item.id)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:border-rose-500/40 hover:bg-rose-950/40 hover:text-rose-300 transition cursor-pointer"
                        title="Remove from vault"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Question Text */}
                  <div className="text-sm font-medium text-slate-100 leading-relaxed">
                    <span className="font-bold text-cyan-400 mr-1.5">Q.</span>
                    <LatexRenderer content={item.question.question} inline />
                  </div>

                  {/* Options Grid */}
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {(['A', 'B', 'C', 'D'] as const).map(optKey => {
                      const isCorrect = item.question.correctAnswer === optKey;
                      const wasUserWrong = item.userAnswer === optKey && !isCorrect;

                      return (
                        <div
                          key={optKey}
                          className={`flex items-start gap-2 rounded-xl p-2.5 border transition ${
                            isCorrect
                              ? 'border-emerald-500/50 bg-emerald-950/40 text-emerald-200'
                              : wasUserWrong
                              ? 'border-rose-500/50 bg-rose-950/40 text-rose-200'
                              : 'border-slate-800/80 bg-slate-900/60 text-slate-300'
                          }`}
                        >
                          <span className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                            isCorrect
                              ? 'bg-emerald-600 text-white'
                              : wasUserWrong
                              ? 'bg-rose-600 text-white'
                              : 'border border-slate-700 bg-slate-800 text-slate-400'
                          }`}>
                            {optKey}
                          </span>
                          <div className="flex-1 leading-snug pt-0.5">
                            <LatexRenderer content={item.question.options[optKey]} inline />
                            {wasUserWrong && (
                              <span className="ml-1.5 text-[10px] font-bold text-rose-400">
                                (Your Answer)
                              </span>
                            )}
                            {isCorrect && (
                              <span className="ml-1.5 text-[10px] font-bold text-emerald-400">
                                (Correct)
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation Toggle */}
                  <div className="mt-3 border-t border-slate-800/60 pt-2.5">
                    <button
                      onClick={() => toggleExplanation(item.id)}
                      className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition cursor-pointer"
                    >
                      {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                      <span>{isExpanded ? 'Hide Solution Explanation' : 'View Solution Explanation'}</span>
                    </button>

                    {isExpanded && (
                      <div className="mt-2 rounded-xl border border-slate-800 bg-slate-900/90 p-3 text-xs text-slate-300 leading-relaxed animate-fade-in">
                        <div className="font-semibold text-emerald-400 mb-1">
                          Correct Choice: ({item.question.correctAnswer})
                        </div>
                        <LatexRenderer content={item.question.explanation || 'Refer to textbook concept definition.'} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="flex shrink-0 items-center justify-between border-t border-slate-800 bg-slate-950/80 px-5 py-3 sm:px-6 text-xs text-slate-400">
          <span>Synced with Firebase Firestore across all devices</span>
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-1.5 text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition cursor-pointer"
          >
            Close Vault
          </button>
        </div>
      </div>
    </div>
  );
};
