import React, { useState } from 'react';
import { Drill, Subject, User, UserAttempt } from '../types';
import { 
  Atom, 
  FlaskConical, 
  Dna, 
  Calendar, 
  BookOpen, 
  CheckCircle, 
  Play, 
  Search, 
  Trash2, 
  Award,
  Sparkles,
  TrendingUp,
  Clock
} from 'lucide-react';

interface DrillListProps {
  subject: Subject;
  drills: Drill[];
  userAttempts: UserAttempt[];
  currentUser: User | null;
  onSelectDrill: (drill: Drill) => void;
  onDeleteDrill?: (drillId: string) => void;
  onOpenAddDrill: () => void;
}

export const DrillList: React.FC<DrillListProps> = ({
  subject,
  drills,
  userAttempts,
  currentUser,
  onSelectDrill,
  onDeleteDrill,
  onOpenAddDrill
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [drillToDelete, setDrillToDelete] = useState<Drill | null>(null);

  const subjectMeta = {
    physics: {
      name: 'Physics',
      tagline: 'Mechanics, Vectors, Thermodynamics & Circular Motion',
      icon: Atom,
      color: 'from-cyan-500 to-blue-600',
      badgeBorder: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/40',
      btnBg: 'bg-cyan-600 hover:bg-cyan-500'
    },
    chemistry: {
      name: 'Chemistry',
      tagline: 'Stoichiometry, Bonding Theories, Orbitals & Equilibrium',
      icon: FlaskConical,
      color: 'from-amber-500 to-orange-600',
      badgeBorder: 'border-amber-500/30 text-amber-400 bg-amber-950/40',
      btnBg: 'bg-amber-600 hover:bg-amber-500'
    },
    biology: {
      name: 'Biology',
      tagline: 'Cell Biology, Macromolecules, Bioenergetics & Diversity',
      icon: Dna,
      color: 'from-emerald-500 to-teal-600',
      badgeBorder: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/40',
      btnBg: 'bg-emerald-600 hover:bg-emerald-500'
    }
  }[subject];

  const filteredDrills = drills
    .filter(d => d.subject === subject)
    .filter(d => {
      const q = searchQuery.toLowerCase();
      return (
        d.title.toLowerCase().includes(q) ||
        d.chapter.toLowerCase().includes(q) ||
        `day ${d.dayNumber}`.includes(q) ||
        `drill ${d.drillNumber}`.includes(q)
      );
    })
    .sort((a, b) => b.dayNumber - a.dayNumber);

  // Subject quick stats
  const subjectAttempts = userAttempts.filter(a => a.subject === subject);
  const totalSubjectScore = subjectAttempts.reduce((acc, a) => acc + a.score, 0);
  const totalSubjectPossible = subjectAttempts.reduce((acc, a) => acc + a.totalQuestions, 0);
  const subjectAccuracy = totalSubjectPossible > 0 ? Math.round((totalSubjectScore / totalSubjectPossible) * 100) : 0;

  const Icon = subjectMeta.icon;

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      {/* Subject Hero Header */}
      <div className="relative mb-6 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 p-6 shadow-xl sm:p-8">
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${subjectMeta.color} shadow-lg shadow-black/40 ring-1 ring-white/20`}>
              <Icon className="h-7 w-7 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
                  {subjectMeta.name} Drills
                </h1>
                <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${subjectMeta.badgeBorder}`}>
                  FBISE 1st Year
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                {subjectMeta.tagline}
              </p>
            </div>
          </div>

          {/* Quick Subject Stats */}
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2 text-center">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Solved</span>
              <p className="text-lg font-extrabold text-white">
                {subjectAttempts.length} <span className="text-xs font-normal text-slate-500">/ {filteredDrills.length}</span>
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2 text-center">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Accuracy</span>
              <p className="text-lg font-extrabold text-cyan-400">
                {subjectAccuracy}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Actions Bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 min-w-[240px] max-w-md">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder={`Search ${subjectMeta.name} drills by chapter or topic...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-800 bg-slate-900/90 py-2.5 pl-10 pr-4 text-xs font-medium text-slate-200 placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          />
        </div>

        {currentUser?.role === 'admin' && (
          <button
            onClick={onOpenAddDrill}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:from-blue-500 hover:to-cyan-500"
          >
            <Sparkles className="h-4 w-4" />
            <span>+ Add Day's MCQs</span>
          </button>
        )}
      </div>

      {/* Drill Cards Grid */}
      {filteredDrills.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-800 bg-slate-900/30 p-12 text-center">
          <BookOpen className="mx-auto h-12 w-12 text-slate-600" />
          <h3 className="mt-4 text-base font-bold text-slate-200">
            {searchQuery ? 'No Matching Drills' : `No ${subjectMeta.name} Drills Published Yet`}
          </h3>
          <p className="mx-auto mt-1 max-w-md text-xs text-slate-400">
            {searchQuery
              ? 'No drills match your search query. Try searching for another topic or chapter.'
              : currentUser?.role === 'admin'
              ? `You haven't posted any ${subjectMeta.name} drills yet. Click below to paste your questions from Google AI Studio and publish Day 1 for your students!`
              : `Today's ${subjectMeta.name} drill hasn't been uploaded yet. Your drill master will post it after college lectures. Check back shortly!`}
          </p>
          {currentUser?.role === 'admin' && (
            <button
              onClick={onOpenAddDrill}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg hover:from-blue-500 hover:to-cyan-500 transition"
            >
              <Sparkles className="h-4 w-4" />
              <span>Post First {subjectMeta.name} Drill</span>
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredDrills.map((drill) => {
            // Check if user has attempted this drill
            const userAttempt = userAttempts.find(a => a.drillId === drill.id);
            const isCompleted = !!userAttempt;
            const scorePercentage = userAttempt ? Math.round((userAttempt.score / drill.questions.length) * 100) : 0;

            return (
              <div
                key={drill.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg transition-all hover:border-slate-700 hover:bg-slate-900/95"
              >
                <div>
                  {/* Top Day Badge & Date */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 rounded-lg border border-blue-500/20 bg-blue-950/50 px-2.5 py-1 text-xs font-extrabold text-blue-400">
                      <span>Day {drill.dayNumber}</span>
                      <span className="text-slate-600">•</span>
                      <span>Drill #{drill.drillNumber}</span>
                    </span>

                    <span className="flex items-center gap-1 text-[11px] text-slate-500">
                      <Calendar className="h-3 w-3" />
                      <span>{drill.date}</span>
                    </span>
                  </div>

                  {/* Title & Chapter */}
                  <h3 className="mt-3.5 text-base font-bold text-slate-100 group-hover:text-cyan-400 transition">
                    {drill.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-slate-400">
                    {drill.chapter}
                  </p>

                  {/* Drill Specs */}
                  <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3.5 w-3.5 text-slate-500" />
                      <span>{drill.questions.length} MCQs</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-3.5 w-3.5 text-slate-500" />
                      <span>{drill.totalMarks || drill.questions.length} Marks</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="mt-5 border-t border-slate-800/80 pt-4">
                  {isCompleted ? (
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                        <div>
                          <span className="text-xs font-bold text-emerald-400">
                            Solved: {userAttempt.score}/{drill.questions.length}
                          </span>
                          <span className="ml-1 text-[11px] text-slate-500">
                            ({scorePercentage}%)
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => onSelectDrill(drill)}
                        className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:bg-slate-700 hover:text-white"
                      >
                        Retake / Review
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-medium text-slate-500">
                        Unattempted
                      </span>
                      <button
                        onClick={() => onSelectDrill(drill)}
                        className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-xs font-bold text-white shadow-md transition hover:from-blue-500 hover:to-cyan-500"
                      >
                        <Play className="h-3.5 w-3.5 fill-current" />
                        <span>Start Drill</span>
                      </button>
                    </div>
                  )}

                  {/* Admin Delete Action */}
                  {currentUser?.role === 'admin' && onDeleteDrill && (
                    <div className="mt-3 flex justify-end">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setDrillToDelete(drill);
                        }}
                        className="flex items-center gap-1 text-[11px] text-rose-500/80 hover:text-rose-400 transition"
                      >
                        <Trash2 className="h-3 w-3" />
                        <span>Delete Drill</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* In-App Delete Confirmation Modal (Reliable in all iframes and browsers) */}
      {drillToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400">
                <Trash2 className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Delete This Drill?</h4>
                <p className="text-xs text-slate-400">Day {drillToDelete.dayNumber} • {drillToDelete.title}</p>
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-300 leading-relaxed">
              Are you sure you want to permanently delete this drill and its {drillToDelete.questions.length} MCQs?
            </p>

            <div className="mt-5 flex items-center justify-end gap-2 border-t border-slate-800 pt-3">
              <button
                onClick={() => setDrillToDelete(null)}
                className="rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:bg-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (onDeleteDrill) {
                    onDeleteDrill(drillToDelete.id);
                  }
                  setDrillToDelete(null);
                }}
                className="rounded-xl bg-rose-600 px-4 py-1.5 text-xs font-bold text-white shadow hover:bg-rose-500"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
