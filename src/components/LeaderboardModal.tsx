import React, { useState, useEffect } from 'react';
import { LeaderboardUser } from '../types';
import { computeLeaderboard } from '../utils/storage';
import { Trophy, Medal, Award, Flame, X, User as UserIcon, Atom, FlaskConical, Dna } from 'lucide-react';

interface LeaderboardModalProps {
  onClose: () => void;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({ onClose }) => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);

  useEffect(() => {
    setLeaderboard(computeLeaderboard());
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-4 overflow-y-auto">
      <div className="relative my-4 w-full max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-2xl sm:p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-xl p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/20">
            <Trophy className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white">
              KIPS College FBISE Leaderboard
            </h2>
            <p className="text-xs text-slate-400">
              Rankings based on total score, MCQs completed, and overall accuracy
            </p>
          </div>
        </div>

        {/* Podium Top 3 */}
        {leaderboard.length >= 3 && (
          <div className="my-5 grid grid-cols-3 gap-2 sm:gap-3 text-center">
            {/* Rank 2 - Silver */}
            <div className="flex flex-col items-center justify-end rounded-2xl border border-slate-700/60 bg-slate-950/60 p-3 sm:p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-400/20 text-slate-300 ring-1 ring-slate-400/40">
                <Medal className="h-5 w-5" />
              </div>
              <span className="mt-2 text-xs font-bold text-slate-300">#2 Silver</span>
              <p className="max-w-[90px] truncate text-xs font-semibold text-white sm:text-sm">
                {leaderboard[1].fullName}
              </p>
              <p className="mt-1 text-sm font-extrabold text-cyan-400 sm:text-base">
                {leaderboard[1].totalScore} pts
              </p>
              <span className="text-[10px] text-slate-500">{leaderboard[1].accuracyPercentage}% acc</span>
            </div>

            {/* Rank 1 - Gold */}
            <div className="flex flex-col items-center justify-end rounded-2xl border border-amber-500/40 bg-gradient-to-b from-amber-950/40 to-slate-950/80 p-3 sm:p-4 ring-1 ring-amber-500/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 shadow-md shadow-amber-500/40">
                <Trophy className="h-6 w-6" />
              </div>
              <span className="mt-2 text-xs font-extrabold text-amber-400">#1 Top Rank</span>
              <p className="max-w-[100px] truncate text-xs font-bold text-white sm:text-sm">
                {leaderboard[0].fullName}
              </p>
              <p className="mt-1 text-base font-black text-amber-400 sm:text-lg">
                {leaderboard[0].totalScore} pts
              </p>
              <span className="text-[10px] font-semibold text-emerald-400">{leaderboard[0].accuracyPercentage}% acc</span>
            </div>

            {/* Rank 3 - Bronze */}
            <div className="flex flex-col items-center justify-end rounded-2xl border border-amber-700/40 bg-slate-950/60 p-3 sm:p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-700/20 text-amber-400 ring-1 ring-amber-700/40">
                <Award className="h-5 w-5" />
              </div>
              <span className="mt-2 text-xs font-bold text-amber-500">#3 Bronze</span>
              <p className="max-w-[90px] truncate text-xs font-semibold text-white sm:text-sm">
                {leaderboard[2].fullName}
              </p>
              <p className="mt-1 text-sm font-extrabold text-cyan-400 sm:text-base">
                {leaderboard[2].totalScore} pts
              </p>
              <span className="text-[10px] text-slate-500">{leaderboard[2].accuracyPercentage}% acc</span>
            </div>
          </div>
        )}

        {/* Full Table */}
        <div className="mt-4 max-h-[300px] overflow-y-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/80 text-[11px] uppercase tracking-wider text-slate-400 sticky top-0">
              <tr>
                <th className="py-2.5 px-3">Rank</th>
                <th className="py-2.5 px-3">Student</th>
                <th className="py-2.5 px-3 text-center">Drills</th>
                <th className="py-2.5 px-3 text-center">Score</th>
                <th className="py-2.5 px-3 text-center">Accuracy</th>
                <th className="py-2.5 px-3 text-right">Subjects</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
              {leaderboard.map((user, idx) => (
                <tr key={user.username} className="hover:bg-slate-800/40 transition">
                  <td className="py-2.5 px-3 font-bold text-slate-300">
                    {idx === 0 ? '🥇 1' : idx === 1 ? '🥈 2' : idx === 2 ? '🥉 3' : `#${idx + 1}`}
                  </td>
                  <td className="py-2.5 px-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[10px] font-bold text-slate-300">
                        {user.fullName[0].toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{user.fullName}</p>
                        <p className="text-[10px] text-slate-500">@{user.username}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-2.5 px-3 text-center font-medium text-slate-300">
                    {user.drillsCompleted}
                  </td>
                  <td className="py-2.5 px-3 text-center font-bold text-cyan-400">
                    {user.totalScore}
                  </td>
                  <td className="py-2.5 px-3 text-center">
                    <span className="rounded-full bg-slate-800 px-2 py-0.5 font-bold text-emerald-400">
                      {user.accuracyPercentage}%
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <div className="flex justify-end gap-1">
                      {user.subjectBreakdown.physics.completed > 0 && (
                        <span title={`Physics: ${user.subjectBreakdown.physics.score} pts`} className="rounded bg-cyan-950/60 border border-cyan-800/40 px-1.5 py-0.5 text-[9px] text-cyan-400 font-bold">
                          PHY
                        </span>
                      )}
                      {user.subjectBreakdown.chemistry.completed > 0 && (
                        <span title={`Chemistry: ${user.subjectBreakdown.chemistry.score} pts`} className="rounded bg-amber-950/60 border border-amber-800/40 px-1.5 py-0.5 text-[9px] text-amber-400 font-bold">
                          CHM
                        </span>
                      )}
                      {user.subjectBreakdown.biology.completed > 0 && (
                        <span title={`Biology: ${user.subjectBreakdown.biology.score} pts`} className="rounded bg-emerald-950/60 border border-emerald-800/40 px-1.5 py-0.5 text-[9px] text-emerald-400 font-bold">
                          BIO
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-4 flex justify-end border-t border-slate-800 pt-3">
          <button
            onClick={onClose}
            className="rounded-xl bg-slate-800 px-5 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
