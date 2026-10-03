import React, { useState, useEffect } from 'react';
import { Subject, Drill, User, UserAttempt, Announcement, ChatMessage, InProgressDrillSession } from './types';
import { 
  getStoredDrills, 
  saveDrill, 
  deleteDrill, 
  getCurrentUser, 
  setCurrentUser, 
  getAttemptsForUser, 
  saveAttempt,
  resetAllDataExceptAdmin,
  syncFromCloudDrills,
  syncFromCloudAttempts,
  syncFromCloudUsers,
  getStoredAttempts,
  getStoredUsers,
  deleteSpecificUserAndData,
  getSeenAnnouncementId,
  setSeenAnnouncementId,
  getLastReadDiscussionTimestamp,
  setLastReadDiscussionTimestamp,
  saveInProgressSession,
  clearInProgressSession
} from './utils/storage';
import { 
  subscribeToCloudDrills, 
  subscribeToCloudAttempts, 
  subscribeToCloudUsers,
  subscribeToAnnouncement,
  saveAnnouncementToCloud,
  clearAnnouncementInCloud,
  subscribeToCloudChatMessages,
  subscribeToCloudUserSessions,
  saveCloudUserReadStatus,
  subscribeToCloudUserReadStatus,
  clearCloudInProgressSession
} from './utils/firebase';
import { Navbar } from './components/Navbar';
import { DrillList } from './components/DrillList';
import { DrillViewer } from './components/DrillViewer';
import { ScorecardModal } from './components/ScorecardModal';
import { AdminDrillPoster } from './components/AdminDrillPoster';
import { LeaderboardModal } from './components/LeaderboardModal';
import { AnnouncementModal } from './components/AnnouncementModal';
import { ChangePasswordModal } from './components/ChangePasswordModal';
import { AuthGate } from './components/AuthGate';
import { ResetConfirmModal } from './components/ResetConfirmModal';
import { GroupChatModal } from './components/GroupChatModal';
import { FirebaseHealthModal } from './components/FirebaseHealthModal';
import { AiTutorModal } from './components/AiTutorModal';
import { Sparkles } from 'lucide-react';

export default function App() {
  // 1. Persistent Subject Tab (Remembers Chemistry, Physics, Biology on page reload)
  const [currentSubject, setCurrentSubjectState] = useState<Subject>(() => {
    try {
      const saved = localStorage.getItem('kips_current_subject_v3');
      if (saved === 'physics' || saved === 'chemistry' || saved === 'biology') {
        return saved;
      }
    } catch {}
    return 'physics';
  });

  const setCurrentSubject = (subj: Subject) => {
    setCurrentSubjectState(subj);
    try {
      localStorage.setItem('kips_current_subject_v3', subj);
    } catch {}
  };

  const [drills, setDrills] = useState<Drill[]>([]);
  const [currentUser, setCurrentUserState] = useState<User | null>(null);
  const [userAttempts, setUserAttempts] = useState<UserAttempt[]>([]);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isCloudConnected, setIsCloudConnected] = useState(false);
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [lastSeenAnnId, setLastSeenAnnId] = useState<string | null>(() => {
    const u = getCurrentUser();
    return u ? getSeenAnnouncementId(u.username) : null;
  });
  
  // 2. Persistent Active Drill State (Restores active drill on reload, cleanly clears on exit)
  const [activeDrill, setActiveDrillState] = useState<Drill | null>(null);

  const setActiveDrill = (drill: Drill | null) => {
    setActiveDrillState(drill);
    try {
      if (drill) {
        localStorage.setItem('kips_active_drill_id_v3', drill.id);
        if (drill.subject) {
          setCurrentSubject(drill.subject);
        }
      } else {
        localStorage.removeItem('kips_active_drill_id_v3');
      }
    } catch {}
  };

  const [scorecardData, setScorecardData] = useState<{ drill: Drill; attempt: UserAttempt } | null>(null);

  // Modals
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [isAiTutorOpen, setIsAiTutorOpen] = useState(false);
  const [isAdminDrillPosterOpen, setIsAdminDrillPosterOpen] = useState(false);
  const [drillToEdit, setDrillToEdit] = useState<Drill | null>(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isFirebaseHealthOpen, setIsFirebaseHealthOpen] = useState(false);

  // Discussions Unread Messages Tracking (Pulsing Red Dot)
  const [latestChatMessages, setLatestChatMessages] = useState<ChatMessage[]>([]);
  const [lastReadChatTimestamp, setLastReadChatTimestamp] = useState<number>(() => {
    const u = getCurrentUser();
    return u ? getLastReadDiscussionTimestamp(u.username) : 0;
  });

  // Multi-Device Cloud Active Sessions (In-Progress MCQ Resume)
  const [activeSessions, setActiveSessions] = useState<Record<string, InProgressDrillSession>>({});

  // Has unread messages if any message from other users has timestamp > user's last read timestamp
  const hasUnreadDiscussion = Boolean(
    currentUser &&
    !isChatOpen &&
    latestChatMessages.some(m => 
      m.senderUsername.toLowerCase() !== currentUser.username.toLowerCase() &&
      m.timestamp > lastReadChatTimestamp
    )
  );

  const handleOpenChat = () => {
    setIsChatOpen(true);
    if (currentUser) {
      const newestTimestamp = latestChatMessages.length > 0
        ? Math.max(...latestChatMessages.map(m => m.timestamp), Date.now())
        : Date.now();
      setLastReadChatTimestamp(newestTimestamp);
      setLastReadDiscussionTimestamp(currentUser.username, newestTimestamp);
      saveCloudUserReadStatus(currentUser.username, { lastReadDiscussionTimestamp: newestTimestamp });
    }
  };

  // Toast alert
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Load drills and restore persistent session on mount + attach live Firebase sync
  useEffect(() => {
    const loadedDrills = getStoredDrills();
    setDrills(loadedDrills);

    // Check if user was in a specific drill before browser refresh
    try {
      const savedDrillId = localStorage.getItem('kips_active_drill_id_v3');
      if (savedDrillId) {
        const found = loadedDrills.find(d => d.id === savedDrillId);
        if (found) {
          setActiveDrillState(found);
          if (found.subject) {
            setCurrentSubject(found.subject);
          }
        }
      }
    } catch {}

    const savedUser = getCurrentUser();
    if (savedUser) {
      setCurrentUserState(savedUser);
      setUserAttempts(getAttemptsForUser(savedUser.username));
      setLastSeenAnnId(getSeenAnnouncementId(savedUser.username));
    }
    setIsInitializing(false);

    // 1. Live Firestore Drills listener across all phones & devices
    const unsubDrills = subscribeToCloudDrills((cloudDrills) => {
      setIsCloudConnected(true);
      setDrills(cloudDrills);
      syncFromCloudDrills(cloudDrills);

      // Keep active drill up-to-date with live cloud edits
      try {
        const savedDrillId = localStorage.getItem('kips_active_drill_id_v3');
        if (savedDrillId) {
          const found = cloudDrills.find(d => d.id === savedDrillId);
          if (found) {
            setActiveDrillState(found);
          }
        }
      } catch {}
    });

    // 2. Live Firestore Attempts & Leaderboard listener
    const unsubAttempts = subscribeToCloudAttempts((cloudAttempts) => {
      setIsCloudConnected(true);
      syncFromCloudAttempts(cloudAttempts);
      const user = getCurrentUser();
      if (user) {
        setUserAttempts(getAttemptsForUser(user.username));
      }
    });

    // 3. Live Firestore Registered Users listener
    const unsubUsers = subscribeToCloudUsers((cloudUsers) => {
      syncFromCloudUsers(cloudUsers);
    });

    // 4. Live Official Announcements listener
    const unsubAnnouncement = subscribeToAnnouncement((ann) => {
      setAnnouncement(ann);
    });

    // 5. Live Discussion Chat listener for unread red dot notification
    const unsubChat = subscribeToCloudChatMessages((msgs) => {
      setLatestChatMessages(msgs);
    }, 35);

    return () => {
      unsubDrills();
      unsubAttempts();
      unsubUsers();
      unsubAnnouncement();
      unsubChat();
    };
  }, []);

  // Automatically mark messages as read if user has the discussions modal actively open
  useEffect(() => {
    if (isChatOpen && currentUser && latestChatMessages.length > 0) {
      const newestTimestamp = Math.max(...latestChatMessages.map(m => m.timestamp), Date.now());
      setLastReadChatTimestamp(newestTimestamp);
      setLastReadDiscussionTimestamp(currentUser.username, newestTimestamp);
      saveCloudUserReadStatus(currentUser.username, { lastReadDiscussionTimestamp: newestTimestamp });
    }
  }, [isChatOpen, latestChatMessages, currentUser]);

  // Live cross-device sync for active sessions and read statuses (Announcements & Discussions)
  useEffect(() => {
    if (!currentUser) {
      setActiveSessions({});
      return;
    }

    // 1. Live Firestore Active In-Progress Sessions (Resume MCQ #20) across all devices
    const unsubSessions = subscribeToCloudUserSessions(currentUser.username, (cloudSessions) => {
      setActiveSessions(cloudSessions);
      // Synchronize into local storage cache so DrillViewer and offline work seamlessly
      drills.forEach(d => {
        if (cloudSessions[d.id]) {
          saveInProgressSession(currentUser.username, cloudSessions[d.id]);
        }
      });
    });

    // 2. Live Firestore User Read Status (Announcements seen & Discussions read across devices)
    const unsubReadStatus = subscribeToCloudUserReadStatus(currentUser.username, (readData) => {
      if (readData.lastSeenAnnouncementId) {
        setLastSeenAnnId(readData.lastSeenAnnouncementId);
        setSeenAnnouncementId(currentUser.username, readData.lastSeenAnnouncementId);
      }
      if (readData.lastReadDiscussionTimestamp) {
        setLastReadChatTimestamp(prev => Math.max(prev, readData.lastReadDiscussionTimestamp!));
        setLastReadDiscussionTimestamp(currentUser.username, readData.lastReadDiscussionTimestamp);
      }
    });

    return () => {
      unsubSessions();
      unsubReadStatus();
    };
  }, [currentUser?.username, drills]);

  const handleUserLogin = (user: User) => {
    setCurrentUserState(user);
    setUserAttempts(getAttemptsForUser(user.username));
    setLastSeenAnnId(getSeenAnnouncementId(user.username));
    setLastReadChatTimestamp(getLastReadDiscussionTimestamp(user.username));

    if (user.role === 'admin' && drills.length === 0) {
      setIsAdminDrillPosterOpen(true);
    }
  };

  const handleOpenAnnouncement = () => {
    setIsAnnouncementOpen(true);
    if (announcement && currentUser) {
      setSeenAnnouncementId(currentUser.username, announcement.id);
      setLastSeenAnnId(announcement.id);
      saveCloudUserReadStatus(currentUser.username, { lastSeenAnnouncementId: announcement.id });
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentUserState(null);
    setUserAttempts([]);
    setActiveDrill(null);
    setScorecardData(null);
  };

  const handleOpenAddDrill = () => {
    setDrillToEdit(null);
    setIsAdminDrillPosterOpen(true);
  };

  const handleEditDrill = (drill: Drill) => {
    setDrillToEdit(drill);
    setIsAdminDrillPosterOpen(true);
  };

  const handleSaveNewDrill = (newDrill: Drill) => {
    saveDrill(newDrill);
    const updated = getStoredDrills();
    setDrills(updated);
    setCurrentSubject(newDrill.subject);
    if (activeDrill && activeDrill.id === newDrill.id) {
      setActiveDrill(newDrill);
    }
    const wasEditing = Boolean(drillToEdit);
    setIsAdminDrillPosterOpen(false);
    setDrillToEdit(null);
    showToast(wasEditing ? `✓ Updated Day ${newDrill.dayNumber} ${newDrill.title} in Cloud!` : `✓ Published Day ${newDrill.dayNumber} ${newDrill.title} to Cloud!`);
  };

  const handleDeleteDrill = (drillId: string) => {
    deleteDrill(drillId);
    const updated = getStoredDrills();
    setDrills(updated);
    if (activeDrill && activeDrill.id === drillId) {
      setActiveDrill(null);
    }
    showToast('✓ Drill deleted successfully from Cloud.');
  };

  const handleResetAllData = () => {
    resetAllDataExceptAdmin();
    setDrills([]);
    setUserAttempts([]);
    setActiveDrill(null);
    setScorecardData(null);
    setIsResetModalOpen(false);
    showToast('✓ Portal reset complete. All drills and student scores cleared.');
  };

  const handleSaveAnnouncement = async (newAnn: Announcement) => {
    await saveAnnouncementToCloud(newAnn);
    setAnnouncement(newAnn);
    showToast('📢 Official announcement broadcasted to all students!');
  };

  const handleClearAnnouncement = async () => {
    await clearAnnouncementInCloud();
    setAnnouncement(null);
    showToast('✓ Announcement cleared.');
  };

  const handleDeleteUser = async (username: string) => {
    const res = await deleteSpecificUserAndData(username);
    if (res.success) {
      showToast(res.message);
      if (currentUser && currentUser.username.toLowerCase() === username.toLowerCase()) {
        handleLogout();
      } else if (currentUser) {
        setUserAttempts(getAttemptsForUser(currentUser.username));
      }
    } else {
      showToast(res.message || 'Failed to delete user.');
    }
  };

  const handleFinishDrill = (attempt: UserAttempt) => {
    saveAttempt(attempt);
    if (currentUser) {
      setUserAttempts(getAttemptsForUser(currentUser.username));
      clearInProgressSession(currentUser.username, attempt.drillId);
      clearCloudInProgressSession(currentUser.username, attempt.drillId);
      setActiveSessions(prev => {
        const next = { ...prev };
        delete next[attempt.drillId];
        return next;
      });
    }
    if (activeDrill) {
      setScorecardData({ drill: activeDrill, attempt });
      setActiveDrill(null);
    }
  };

  const handleRetakeFromScorecard = () => {
    if (scorecardData) {
      const drillToRetake = scorecardData.drill;
      setScorecardData(null);
      setActiveDrill(drillToRetake);
    }
  };

  // Brief initial check while loading localStorage
  if (isInitializing) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent" />
          <span className="text-xs text-slate-400">Loading KIPS Drill Portal...</span>
        </div>
      </div>
    );
  }

  // Authentication Gate: User CANNOT do anything until they sign in or register
  if (!currentUser) {
    return <AuthGate onLoginSuccess={handleUserLogin} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 rounded-xl border border-emerald-500/40 bg-emerald-950/90 px-4 py-2.5 text-xs font-semibold text-emerald-200 shadow-xl backdrop-blur-md transition-all">
          {toastMessage}
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        currentSubject={currentSubject}
        onSelectSubject={(sub) => {
          setCurrentSubject(sub);
          setActiveDrill(null);
        }}
        currentUser={currentUser}
        onOpenAuth={() => {}}
        onLogout={handleLogout}
        onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
        onOpenAddDrill={handleOpenAddDrill}
        onOpenResetModal={() => setIsResetModalOpen(true)}
        isCloudConnected={isCloudConnected}
        onOpenChat={handleOpenChat}
        hasUnreadDiscussion={hasUnreadDiscussion}
        onOpenFirebaseHealth={() => setIsFirebaseHealthOpen(true)}
        onOpenAnnouncement={handleOpenAnnouncement}
        hasActiveAnnouncement={Boolean(announcement && announcement.isActive && announcement.id !== lastSeenAnnId)}
        onOpenChangePassword={() => setIsChangePasswordOpen(true)}
        onOpenAiTutor={() => setIsAiTutorOpen(true)}
      />

      {/* Floating AI Tutor Quick Trigger Button (Mobile & Desktop) */}
      {!isAiTutorOpen && currentUser && (
        <button
          onClick={() => setIsAiTutorOpen(true)}
          title="Ask KIPS FBISE AI Tutor (GPT 120B)"
          className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full border border-cyan-400/40 bg-gradient-to-r from-slate-900 via-cyan-950 to-blue-950 p-2 sm:px-4 sm:py-2.5 text-white shadow-xl shadow-cyan-500/20 backdrop-blur-md transition-all hover:scale-105 hover:border-cyan-300 hover:shadow-cyan-500/30 cursor-pointer group"
        >
          <div className="flex h-8 w-8 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-md">
            <Sparkles className="h-4 w-4 sm:h-3.5 sm:w-3.5 text-cyan-100 animate-pulse" />
          </div>
          <div className="text-left hidden xs:block">
            <div className="text-[11px] sm:text-xs font-bold leading-tight group-hover:text-cyan-300 transition">
              AI Tutor
            </div>
            <div className="text-[9px] text-cyan-400 font-medium leading-none">
              GPT 120B • {currentSubject.toUpperCase()}
            </div>
          </div>
        </button>
      )}

      {/* Main Content Area */}
      <main className="pb-16">
        {activeDrill ? (
          <DrillViewer
            drill={activeDrill}
            currentUser={currentUser}
            onBack={() => setActiveDrill(null)}
            onFinishDrill={handleFinishDrill}
            onDeleteDrill={handleDeleteDrill}
            onEditDrill={handleEditDrill}
            onOpenAiTutor={() => setIsAiTutorOpen(true)}
          />
        ) : (
          <DrillList
            subject={currentSubject}
            drills={drills}
            userAttempts={userAttempts}
            currentUser={currentUser}
            activeSessions={activeSessions}
            onSelectDrill={(drill) => setActiveDrill(drill)}
            onDeleteDrill={handleDeleteDrill}
            onEditDrill={handleEditDrill}
            onOpenAddDrill={handleOpenAddDrill}
          />
        )}
      </main>

      {/* Modals */}
      {scorecardData && (
        <ScorecardModal
          drill={scorecardData.drill}
          attempt={scorecardData.attempt}
          onClose={() => setScorecardData(null)}
          onRetake={handleRetakeFromScorecard}
        />
      )}

      {isAdminDrillPosterOpen && (
        <AdminDrillPoster
          initialSubject={currentSubject}
          existingDrills={drills}
          onSaveDrill={handleSaveNewDrill}
          drillToEdit={drillToEdit}
          onClose={() => {
            setIsAdminDrillPosterOpen(false);
            setDrillToEdit(null);
          }}
        />
      )}

      {isLeaderboardOpen && (
        <LeaderboardModal 
          currentUser={currentUser}
          onDeleteUser={handleDeleteUser}
          onClose={() => setIsLeaderboardOpen(false)} 
        />
      )}

      {isAnnouncementOpen && (
        <AnnouncementModal
          announcement={announcement}
          currentUser={currentUser}
          onClose={() => setIsAnnouncementOpen(false)}
          onSaveAnnouncement={handleSaveAnnouncement}
          onClearAnnouncement={handleClearAnnouncement}
        />
      )}

      {isChangePasswordOpen && currentUser && (
        <ChangePasswordModal
          currentUser={currentUser}
          onClose={() => setIsChangePasswordOpen(false)}
          onSuccessToast={showToast}
        />
      )}

      {/* Temporary Private KIPS FBISE AI Tutor (Qwen 27B) */}
      {isAiTutorOpen && currentUser && (
        <AiTutorModal
          currentUser={currentUser}
          activeSubject={currentSubject}
          activeDrill={activeDrill}
          onClose={() => setIsAiTutorOpen(false)}
        />
      )}

      {isResetModalOpen && (
        <ResetConfirmModal
          onConfirm={handleResetAllData}
          onClose={() => setIsResetModalOpen(false)}
        />
      )}

      {/* Persistent Group Discussion / Doubts Chat */}
      {isChatOpen && currentUser && (
        <GroupChatModal
          currentUser={currentUser}
          onClose={() => setIsChatOpen(false)}
          initialSubject={currentSubject}
        />
      )}

      {/* Admin Firebase Health & Cloud Quotas Monitor */}
      {isFirebaseHealthOpen && (
        <FirebaseHealthModal
          onClose={() => setIsFirebaseHealthOpen(false)}
          drills={drills}
          attemptsCount={getStoredAttempts().length}
          usersCount={getStoredUsers().length}
          messagesCount={25}
        />
      )}
    </div>
  );
}
