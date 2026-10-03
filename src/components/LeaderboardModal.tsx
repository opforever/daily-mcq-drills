import React, { useState, useEffect } from 'react';
import { LeaderboardUser, User } from '../types';
import { 
  computeLeaderboard, 
  getStoredUsers, 
  getStoredAttempts, 
  adminResetStudentPassword, 
  syncFromCloudAttempts, 
  syncFromCloudUsers 
} from '../utils/storage';
import { subscribeToCloudAttempts, subscribeToCloudUsers } from '../utils/firebase';
import { 
  Trophy, 
  Medal, 
  Award, 
  X, 
  Trash2, 
  AlertTriangle, 
  ShieldCheck, 
  Users,
  Search,
  KeyRound,
  RotateCw,
  Cloud,
  CheckCircle2
} from 'lucide-react';

interface LeaderboardModalProps {
  currentUser?: User | null;
  onClose: () => void;
  onDeleteUser?: (username: string) => Promise<void>;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  currentUser,
  onClose,
  onDeleteUser
}) => {
  const isAdmin = currentUser?.role === 'admin';
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'students'>('leaderboard');
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);
  const [allStudents, setAllStudents] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [userToDelete, setUserToDelete] = useState<string | null>(null);
  const [userToReset, setUserToReset] = useState<string | null>(null);
  const [resetNewPass, setResetNewPass] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshData = () => {
    const users = getStoredUsers();
    const attempts = getStoredAttempts();
    setLeaderboard(computeLeaderboard(users, attempts));
    const storedUsers = users.filter(u => u.role !== 'admin' && u.username.toLowerCase() !== 'admin');
    setAllStudents(storedUsers);
  };

  useEffect(() => {
    let currentUsers = getStoredUsers();
    let currentAttempts = getStoredAttempts();

    const updateAll = () => {
      setLeaderboard(computeLeaderboard(currentUsers, currentAttempts));
      const filtered = currentUsers.filter(u => u.role !== 'admin' && u.username.toLowerCase() !== 'admin');
      setAllStudents(filtered);
    };

    updateAll();

    // Attach real-time cloud listeners so new devices immediately populate leaderboard with all students
    const unsubAttempts = subscribeToCloudAttempts((cloudAttempts) => {
      currentAttempts = cloudAttempts;
      syncFromCloudAttempts(cloudAttempts);
      updateAll();
    });

    const unsubUsers = subscribeToCloudUsers((cloudUsers) => {
      currentUsers = cloudUsers;
      syncFromCloudUsers(cloudUsers);
      updateAll();
    });

    return () => {
      unsubAttempts();
      unsubUsers();
    };
  }, []);

  const handleManualRefresh = () => {
    setIsRefreshing(true);
    refreshData();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  const handleConfirmDelete = async () => {
    if (!userToDelete || !onDeleteUser) return;
    const target = userToDelete.trim().toLowerCase();
    setIsDeleting(true);
    try {
      await onDeleteUser(target);
      setFeedbackMsg(`✓ Successfully deleted student @${target} and wiped all their quiz records.`);
      setUserToDelete(null);

      // Immediately remove deleted user from local view so all other students remain visible smoothly
      const updatedUsers = getStoredUsers().filter(u => u.username.toLowerCase() !== target);
      const updatedAttempts = getStoredAttempts().filter(a => (a.username || '').toLowerCase() !== target);
      setLeaderboard(computeLeaderboard(updatedUsers, updatedAttempts));
      const filtered = updatedUsers.filter(u => u.role !== 'admin' && u.username.toLowerCase() !== 'admin');
      setAllStudents(filtered);
    } catch {
      setFeedbackMsg('Failed to delete student. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleConfirmResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userToReset || !resetNewPass || resetNewPass.length < 4) return;
    setIsResetting(true);
    try {
      const res = await adminResetStudentPassword(userToReset, resetNewPass);
      if (res.success) {
        setFeedbackMsg(`✓ Password for @${userToReset} has been reset to "${resetNewPass}".`);
        setUserToReset(null);
        setResetNewPass('');
      } else {
        setFeedbackMsg(res.message);
      }
    } catch {
      setFeedbackMsg('Failed to reset student password.');
    } finally {
      setIsResetting(false);
    }
  };

  const filteredLeaderboard = leaderboard.filter(u => 
    u.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredStudents = allStudents.filter(u => 
    (u.fullName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-4 overflow-y-auto">
      <div className="relative my-4 w-full max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-2xl sm:p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-xl p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 pr-10">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/20">
              <Trophy className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-extrabold text-white">
                  KIPS College FBISE Leaderboard
                </h2>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                  <Cloud className="h-3 w-3 text-emerald-400" />
                  Live Sync
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Rankings based on total score, MCQs completed, and overall accuracy
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleManualRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition cursor-pointer"
            title="Force refresh data from Cloud Firestore"
          >
            <RotateCw className={`h-3.5 w-3.5 ${isRefreshing ? 'animate-spin text-cyan-400' : 'text-slate-400'}`} />
            <span>{isRefreshing ? 'Syncing...' : 'Refresh'}</span>
          </button>
        </div>

        {/* Feedback Message */}
        {feedbackMsg && (
          <div className="mt-3 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-2.5 text-xs text-emerald-300 flex items-center justify-between">
            <span>{feedbackMsg}</span>
            <button onClick={() => setFeedbackMsg(null)} className="text-slate-400 hover:text-white ml-2">
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {/* Admin Tabs Switcher */}
        {isAdmin && (
          <div className="mt-4 flex rounded-xl border border-slate-800 bg-slate-950 p-1">
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-semibold transition ${
                activeTab === 'leaderboard' ? 'bg-amber-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Trophy className="h-3.5 w-3.5" />
              <span>Leaderboard Ranking</span>
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-semibold transition ${
                activeTab === 'students' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users className="h-3.5 w-3.5" />
              <span>Manage Registered Students ({allStudents.length})</span>
            </button>
          </div>
        )}

        {/* Search Bar */}
        <div className="mt-3 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search student by name or @username..."
            className="w-full rounded-xl border border-slate-800 bg-slate-950 pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
          />
        </div>

        {activeTab === 'leaderboard' ? (
          <>
            {/* Podium Top 3 (only when no search query and at least 3 users) */}
            {!searchQuery && leaderboard.length >= 3 && (
              <div className="my-4 grid grid-cols-3 gap-2 sm:gap-3 text-center">
                {/* Rank 2 - Silver */}
                <div className="flex flex-col items-center justify-end rounded-2xl border border-slate-700/60 bg-slate-950/60 p-2.5 sm:p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-400/20 text-slate-300 ring-1 ring-slate-400/40">
                    <Medal className="h-4 w-4" />
                  </div>
                  <span className="mt-1 text-[11px] font-bold text-slate-300">#2 Silver</span>
                  <p className="max-w-[85px] sm:max-w-[120px] truncate text-xs font-semibold text-white">
                    {leaderboard[1].fullName}
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm font-extrabold text-cyan-400">
                    {leaderboard[1].totalScore} pts
                  </p>
                  <span className="text-[10px] text-slate-500">{leaderboard[1].accuracyPercentage}% acc</span>
                </div>

                {/* Rank 1 - Gold */}
                <div className="flex flex-col items-center justify-end rounded-2xl border border-amber-500/40 bg-gradient-to-b from-amber-950/40 to-slate-950/80 p-2.5 sm:p-4 ring-1 ring-amber-500/30">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 shadow-md shadow-amber-500/40">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <span className="mt-1 text-[11px] font-extrabold text-amber-400">#1 Top Rank</span>
                  <p className="max-w-[95px] sm:max-w-[140px] truncate text-xs font-bold text-white sm:text-sm">
                    {leaderboard[0].fullName}
                  </p>
                  <p className="mt-0.5 text-sm sm:text-base font-black text-amber-400">
                    {leaderboard[0].totalScore} pts
                  </p>
                  <span className="text-[10px] font-semibold text-emerald-400">{leaderboard[0].accuracyPercentage}% acc</span>
                </div>

                {/* Rank 3 - Bronze */}
                <div className="flex flex-col items-center justify-end rounded-2xl border border-amber-700/40 bg-slate-950/60 p-2.5 sm:p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-700/20 text-amber-400 ring-1 ring-amber-700/40">
                    <Award className="h-4 w-4" />
                  </div>
                  <span className="mt-1 text-[11px] font-bold text-amber-500">#3 Bronze</span>
                  <p className="max-w-[85px] sm:max-w-[120px] truncate text-xs font-semibold text-white">
                    {leaderboard[2].fullName}
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm font-extrabold text-cyan-400">
                    {leaderboard[2].totalScore} pts
                  </p>
                  <span className="text-[10px] text-slate-500">{leaderboard[2].accuracyPercentage}% acc</span>
                </div>
              </div>
            )}

            {/* Leaderboard Table */}
            <div className="mt-3 max-h-[300px] overflow-y-auto rounded-xl border border-slate-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950/90 text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 sticky top-0 backdrop-blur-sm z-10">
                  <tr>
                    <th className="py-2.5 px-3">Rank</th>
                    <th className="py-2.5 px-3">Student</th>
                    <th className="py-2.5 px-2 text-center">Drills</th>
                    <th className="py-2.5 px-2 text-center">Score</th>
                    <th className="py-2.5 px-2 text-center">Accuracy</th>
                    <th className="py-2.5 px-3 text-right">Subjects</th>
                    {isAdmin && <th className="py-2.5 px-3 text-right">Manage</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                  {filteredLeaderboard.length === 0 ? (
                    <tr>
                      <td colSpan={isAdmin ? 7 : 6} className="py-8 text-center text-slate-500 text-xs">
                        No students found matching your search.
                      </td>
                    </tr>
                  ) : (
                    filteredLeaderboard.map((user, idx) => (
                      <tr key={user.username} className="hover:bg-slate-800/40 transition">
                        <td className="py-2.5 px-3 font-bold text-slate-300">
                          {idx === 0 ? '🥇 1' : idx === 1 ? '🥈 2' : idx === 2 ? '🥉 3' : `#${idx + 1}`}
                        </td>
                        <td className="py-2.5 px-3">
                          <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-800 text-[10px] font-bold text-slate-300">
                              {user.fullName ? user.fullName[0].toUpperCase() : 'U'}
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-white truncate max-w-[120px] sm:max-w-[160px]">{user.fullName}</p>
                              <p className="text-[10px] text-slate-500 truncate">@{user.username}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-2.5 px-2 text-center font-medium text-slate-300">
                          {user.drillsCompleted}
                        </td>
                        <td className="py-2.5 px-2 text-center font-bold text-cyan-400">
                          {user.totalScore}
                        </td>
                        <td className="py-2.5 px-2 text-center">
                          <span className="rounded-full bg-slate-800 px-2 py-0.5 font-bold text-emerald-400 text-[11px]">
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
                        {isAdmin && (
                          <td className="py-2.5 px-3 text-right">
                            {user.username.toLowerCase() !== 'admin' && (
                              <button
                                onClick={() => setUserToDelete(user.username)}
                                title={`Delete @${user.username} and wipe their quiz data`}
                                className="rounded-lg p-1 text-slate-500 hover:bg-rose-950/50 hover:text-rose-400 transition"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            )}
                          </td>
                        )}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          /* Admin Manage All Registered Students */
          <div className="mt-3 max-h-[340px] overflow-y-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/90 text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 sticky top-0 backdrop-blur-sm z-10">
                <tr>
                  <th className="py-2.5 px-3">Student</th>
                  <th className="py-2.5 px-3">College</th>
                  <th className="py-2.5 px-3 text-center">Joined</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                {filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-slate-500 text-xs">
                      No registered students found.
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map((st) => (
                    <tr key={st.username} className="hover:bg-slate-800/40 transition">
                      <td className="py-2.5 px-3">
                        <div>
                          <p className="font-semibold text-white">{st.fullName || st.username}</p>
                          <p className="text-[10px] text-slate-500">@{st.username}</p>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 text-slate-400">
                        {st.college || 'KIPS College'}
                      </td>
                      <td className="py-2.5 px-3 text-center text-slate-400 text-[11px]">
                        {new Date(st.createdAt || Date.now()).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => {
                              setUserToReset(st.username);
                              setResetNewPass('kips1234');
                            }}
                            className="inline-flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-950/40 px-2 py-1 text-[11px] font-semibold text-cyan-300 hover:bg-cyan-900/60 hover:text-white transition cursor-pointer"
                            title="Reset student password"
                          >
                            <KeyRound className="h-3 w-3" />
                            <span>Reset Pass</span>
                          </button>
                          <button
                            onClick={() => setUserToDelete(st.username)}
                            className="inline-flex items-center gap-1 rounded-lg border border-rose-500/30 bg-rose-950/40 px-2 py-1 text-[11px] font-semibold text-rose-300 hover:bg-rose-900/60 hover:text-white transition cursor-pointer"
                          >
                            <Trash2 className="h-3 w-3" />
                            <span>Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Confirmation Modal for User Deletion */}
        {userToDelete && (
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/90 p-4">
            <div className="w-full max-w-md rounded-2xl border border-rose-500/40 bg-slate-900 p-5 shadow-2xl animate-fadeIn">
              <div className="flex items-center gap-3 text-rose-400">
                <AlertTriangle className="h-6 w-6 shrink-0" />
                <h3 className="text-base font-bold text-white">Delete Student & All Quiz Records?</h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                You are about to permanently delete student <strong className="text-white">@{userToDelete}</strong>. 
                This will wipe their user account, all recorded test attempts, scores, and remove them from the Leaderboard.
              </p>
              <div className="mt-3 rounded-lg border border-emerald-500/30 bg-emerald-950/20 p-2.5 text-[11px] text-emerald-300">
                ✓ <strong>Safe Isolation:</strong> No other student's data, scores, or drills will be touched or affected in any way.
              </div>
              <div className="mt-5 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setUserToDelete(null)}
                  disabled={isDeleting}
                  className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirmDelete}
                  disabled={isDeleting}
                  className="flex items-center gap-1.5 rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white shadow-lg hover:bg-rose-500 transition cursor-pointer"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  <span>{isDeleting ? 'Deleting...' : 'Yes, Delete Student'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal for Admin Reset Student Password */}
        {userToReset && (
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/90 p-4">
            <div className="w-full max-w-md rounded-2xl border border-cyan-500/40 bg-slate-900 p-5 shadow-2xl animate-fadeIn">
              <div className="flex items-center gap-3 text-cyan-400">
                <KeyRound className="h-6 w-6 shrink-0" />
                <h3 className="text-base font-bold text-white">Reset Password for @{userToReset}</h3>
              </div>
              <p className="mt-2 text-xs text-slate-300">
                Set a temporary or new password for this student. The student will be able to log in with this password immediately.
              </p>

              <form onSubmit={handleConfirmResetPassword} className="mt-4 space-y-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300">New Password</label>
                  <input
                    type="text"
                    required
                    value={resetNewPass}
                    onChange={(e) => setResetNewPass(e.target.value)}
                    placeholder="Enter new password (min 4 chars)"
                    className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="mt-5 flex items-center justify-end gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setUserToReset(null)}
                    disabled={isResetting}
                    className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isResetting}
                    className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-xs font-bold text-white shadow-lg hover:from-blue-500 hover:to-cyan-500 transition cursor-pointer"
                  >
                    <KeyRound className="h-3.5 w-3.5" />
                    <span>{isResetting ? 'Resetting...' : 'Save New Password'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3">
          <span className="text-[11px] text-slate-500">
            {isAdmin ? 'Admin View: Full moderation enabled' : 'Scores refresh automatically after each completed drill'}
          </span>
          <button
            onClick={onClose}
            className="rounded-xl bg-slate-800 px-5 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
