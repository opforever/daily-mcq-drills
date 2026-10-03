import React, { useState, useEffect } from 'react';
import { Subject, Drill, User, UserAttempt, Announcement } from './types';
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
  deleteSpecificUserAndData
} from './utils/storage';
import { 
  subscribeToCloudDrills, 
  subscribeToCloudAttempts, 
  subscribeToCloudUsers,
  subscribeToAnnouncement,
  saveAnnouncementToCloud,
  clearAnnouncementInCloud
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

export default function App() {
  const [currentSubject, setCurrentSubject] = useState<Subject>('physics');
  const [drills, setDrills] = useState<Drill[]>([]);
  const [currentUser, setCurrentUserState] = useState<User | null>(null);
  const [userAttempts, setUserAttempts] = useState<UserAttempt[]>([]);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isCloudConnected, setIsCloudConnected] = useState(false);
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  
  // Drill taking state
  const [activeDrill, setActiveDrill] = useState<Drill | null>(null);
  const [scorecardData, setScorecardData] = useState<{ drill: Drill; attempt: UserAttempt } | null>(null);

  // Modals
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [isAdminDrillPosterOpen, setIsAdminDrillPosterOpen] = useState(false);
  const [drillToEdit, setDrillToEdit] = useState<Drill | null>(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isFirebaseHealthOpen, setIsFirebaseHealthOpen] = useState(false);

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

    const savedUser = getCurrentUser();
    if (savedUser) {
      setCurrentUserState(savedUser);
      setUserAttempts(getAttemptsForUser(savedUser.username));
    }
    setIsInitializing(false);

    // 1. Live Firestore Drills listener across all phones & devices
    const unsubDrills = subscribeToCloudDrills((cloudDrills) => {
      setIsCloudConnected(true);
      setDrills(cloudDrills);
      syncFromCloudDrills(cloudDrills);
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

    return () => {
      unsubDrills();
      unsubAttempts();
      unsubUsers();
      unsubAnnouncement();
    };
  }, []);

  const handleUserLogin = (user: User) => {
    setCurrentUserState(user);
    setUserAttempts(getAttemptsForUser(user.username));
    if (user.role === 'admin' && drills.length === 0) {
      setIsAdminDrillPosterOpen(true);
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
        onOpenChat={() => setIsChatOpen(true)}
        onOpenFirebaseHealth={() => setIsFirebaseHealthOpen(true)}
        onOpenAnnouncement={() => setIsAnnouncementOpen(true)}
        hasActiveAnnouncement={Boolean(announcement && announcement.isActive)}
        onOpenChangePassword={() => setIsChangePasswordOpen(true)}
      />

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
          />
        ) : (
          <DrillList
            subject={currentSubject}
            drills={drills}
            userAttempts={userAttempts}
            currentUser={currentUser}
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
