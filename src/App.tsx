import React, { Suspense, lazy, useState, useEffect, useCallback, useMemo } from 'react';
import { Subject, Drill, User, UserAttempt, Announcement, ChatMessage, InProgressDrillSession, MistakeItem, MCQ } from './types';
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
  clearInProgressSession,
  getStoredMistakes,
  setStoredMistakes,
  getStoredSyllabus,
  setStoredSyllabus
} from './utils/storage';
import { 
  subscribeToCloudDrills, 
  subscribeToCloudAttempts, 
  subscribeToUserCloudAttempts,
  subscribeToCloudUsers,
  subscribeToAnnouncement,
  saveAnnouncementToCloud,
  clearAnnouncementInCloud,
  subscribeToCloudChatMessages,
  subscribeToCloudUserSessions,
  saveCloudUserReadStatus,
  subscribeToCloudUserReadStatus,
  clearCloudInProgressSession,
  saveCloudMistakes,
  subscribeToCloudMistakes,
  logOutFirebaseAuth
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
import { MistakeVaultModal } from './components/MistakeVaultModal';
import { DrillPrintModal } from './components/DrillPrintModal';
import { SyllabusModal } from './components/SyllabusModal';
import { CalculatorModal } from './components/CalculatorModal';
import { SettingsModal } from './components/SettingsModal';
import { SubjectSyllabus, ThemeId } from './types';
import { subscribeToSyllabus } from './utils/firebase';
import { getStoredUserTheme, saveUserTheme, applyThemeToDOM } from './utils/themeEngine';
import { Sparkles, Calculator } from 'lucide-react';

const StudyLibrary = lazy(() => import('./components/StudyLibrary').then(module => ({ default: module.StudyLibrary })));

export default function App() {
  // 1. Persistent Subject Tab (Remembers Physics, Chemistry, Biology, Computer, Maths on page reload)
  const [currentSubject, setCurrentSubjectState] = useState<Subject>(() => {
    try {
      const saved = localStorage.getItem('kips_current_subject_v3');
      if (saved === 'physics' || saved === 'chemistry' || saved === 'biology' || saved === 'computer' || saved === 'maths') {
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
  const [isMistakeVaultOpen, setIsMistakeVaultOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isStudyLibraryOpen, setIsStudyLibraryOpen] = useState(false);
  const [currentTheme, setCurrentThemeState] = useState<ThemeId>(() => getStoredUserTheme());

  // Restore and apply user's saved visual theme on initial mount and when user session changes
  useEffect(() => {
    const savedTheme = getStoredUserTheme(currentUser?.username);
    setCurrentThemeState(savedTheme);
    applyThemeToDOM(savedTheme);
  }, [currentUser?.username]);

  const handleSelectTheme = (themeId: ThemeId) => {
    setCurrentThemeState(themeId);
    saveUserTheme(themeId, currentUser?.username);
  };

  const [syllabusMap, setSyllabusMap] = useState<Record<string, SubjectSyllabus | null>>(() => ({
    computer: getStoredSyllabus('computer'),
    maths: getStoredSyllabus('maths'),
    physics: getStoredSyllabus('physics'),
    chemistry: getStoredSyllabus('chemistry'),
    biology: getStoredSyllabus('biology')
  }));
  const [printDrill, setPrintDrill] = useState<Drill | null>(null);

  // Student Mistake Vault State (Synced with Firestore)
  const [mistakes, setMistakes] = useState<Record<string, MistakeItem>>({});

  // Discussions Unread Messages Tracking (Pulsing Red Dot)
  const [latestChatMessages, setLatestChatMessages] = useState<ChatMessage[]>([]);
  const [lastReadChatTimestamp, setLastReadChatTimestamp] = useState<number>(() => {
    const u = getCurrentUser();
    return u ? getLastReadDiscussionTimestamp(u.username) : 0;
  });

  // Multi-Device Cloud Active Sessions (In-Progress MCQ Resume)
  const [activeSessions, setActiveSessions] = useState<Record<string, InProgressDrillSession>>({});

  // Real-time synchronization of student Mistake Vault across all devices
  useEffect(() => {
    if (!currentUser) {
      setMistakes({});
      return;
    }

    // Load initial local cache
    const initial = getStoredMistakes(currentUser.username);
    setMistakes(initial);

    // Attach Firestore real-time listener
    const unsubscribe = subscribeToCloudMistakes(
      currentUser.username,
      (cloudMistakes) => {
        setMistakes(cloudMistakes);
        setStoredMistakes(currentUser.username, cloudMistakes);
      }
    );

    return () => unsubscribe();
  }, [currentUser?.username]);

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

    // 1. Live Firestore Drills listener across all phones & devices (capped at 100)
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

    // 2. Live Official Announcements listener
    const unsubAnnouncement = subscribeToAnnouncement((ann) => {
      setAnnouncement(ann);
    });

    // 3. Live Discussion Chat listener for unread red dot notification (capped at 35)
    const unsubChat = subscribeToCloudChatMessages((msgs) => {
      setLatestChatMessages(msgs);
    }, 35);

    // 4. Live Subject Syllabus Roadmap listeners (Computer & Maths)
    const unsubSyllabusComp = subscribeToSyllabus('computer', (s) => {
      setSyllabusMap(prev => ({ ...prev, computer: s }));
      setStoredSyllabus('computer', s);
    });
    const unsubSyllabusMath = subscribeToSyllabus('maths', (s) => {
      setSyllabusMap(prev => ({ ...prev, maths: s }));
      setStoredSyllabus('maths', s);
    });

    return () => {
      unsubDrills();
      unsubAnnouncement();
      unsubChat();
      unsubSyllabusComp();
      unsubSyllabusMath();
    };
  }, []);

  // Global hotkey: Alt + C or Option + C opens/closes the Scientific Calculator
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
        setIsCalculatorOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // SCALED: Dedicated student-scoped attempts listener
  // Avoids O(N) memory burn by only streaming the active student's own attempts
  useEffect(() => {
    if (!currentUser) return;
    const unsubUserAttempts = subscribeToUserCloudAttempts(
      currentUser.username,
      (cloudUserAttempts) => {
        setIsCloudConnected(true);
        syncFromCloudAttempts(cloudUserAttempts);
        setUserAttempts(cloudUserAttempts);
      }
    );
    return () => unsubUserAttempts();
  }, [currentUser?.username]);

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
    logOutFirebaseAuth().catch(() => {});
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
      throw new Error(res.message || 'Failed to delete user.');
    }
  };

  const handleFinishDrill = (attempt: UserAttempt) => {
    const isPracticeDrill = attempt.drillId.startsWith('mistake-practice-');

    // Only save official curriculum drills to persistent syllabus attempts
    if (!isPracticeDrill) {
      saveAttempt(attempt);
    }

    if (currentUser) {
      if (!isPracticeDrill) {
        setUserAttempts(getAttemptsForUser(currentUser.username));
      }
      clearInProgressSession(currentUser.username, attempt.drillId);
      clearCloudInProgressSession(currentUser.username, attempt.drillId);
      setActiveSessions(prev => {
        const next = { ...prev };
        delete next[attempt.drillId];
        return next;
      });

      // Automatically catalog wrong questions into the student's Mistake Vault
      // OR mark correctly solved questions in practice as Mastered!
      if (activeDrill) {
        setMistakes(prev => {
          const next = { ...prev };
          let changed = false;
          let newlyMastered = 0;

          activeDrill.questions.forEach(q => {
            const userAnswer = attempt.answers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;

            // Find matching mistake in vault by question ID or question text:
            const existingKey = Object.keys(next).find(k => {
              const m = next[k];
              return m.question.id === q.id || m.question.question.trim() === q.question.trim();
            });

            if (isPracticeDrill) {
              // During a Practice Mistakes Quiz:
              if (existingKey) {
                if (isCorrect) {
                  // The user answered correctly! Mark as Mastered!
                  next[existingKey] = {
                    ...next[existingKey],
                    isMastered: true,
                    userAnswer: userAnswer,
                    lastPracticedAt: Date.now()
                  };
                  newlyMastered++;
                  changed = true;
                } else {
                  // User still answered incorrectly
                  next[existingKey] = {
                    ...next[existingKey],
                    isMastered: false,
                    userAnswer: userAnswer,
                    reviewCount: (next[existingKey].reviewCount || 0) + 1,
                    lastPracticedAt: Date.now()
                  };
                  changed = true;
                }
              }
            } else {
              // During an Official Drill:
              if (userAnswer && !isCorrect) {
                const targetKey = existingKey || `${activeDrill.id}__${q.id}`;
                next[targetKey] = {
                  id: targetKey,
                  drillId: activeDrill.id,
                  drillTitle: activeDrill.title,
                  drillDay: activeDrill.dayNumber,
                  subject: activeDrill.subject,
                  chapter: activeDrill.chapter,
                  question: q,
                  userAnswer: userAnswer,
                  addedAt: next[targetKey]?.addedAt || Date.now(),
                  reviewCount: (next[targetKey]?.reviewCount || 0) + 1,
                  isMastered: false
                };
                changed = true;
              } else if (userAnswer && isCorrect && existingKey) {
                // User re-took an official drill and got it right!
                next[existingKey] = {
                  ...next[existingKey],
                  isMastered: true,
                  lastPracticedAt: Date.now()
                };
                newlyMastered++;
                changed = true;
              }
            }
          });

          if (changed) {
            setStoredMistakes(currentUser.username, next);
            saveCloudMistakes(currentUser.username, next);
          }
          if (newlyMastered > 0) {
            showToast(`🎉 ${newlyMastered} ${newlyMastered === 1 ? 'mistake' : 'mistakes'} mastered & moved to Mastered in Vault!`);
          }
          return next;
        });
      }
    }
    if (activeDrill) {
      setScorecardData({ drill: activeDrill, attempt });
      setActiveDrill(null);
    }
  };

  // Mistake Vault Handlers
  const handleToggleMistake = (q: MCQ, drillObj?: Drill | null) => {
    if (!currentUser || !drillObj) return;
    const key = `${drillObj.id}__${q.id}`;
    setMistakes(prev => {
      const next = { ...prev };
      if (next[key]) {
        delete next[key];
        showToast('Removed from Mistake Vault');
      } else {
        next[key] = {
          id: key,
          drillId: drillObj.id,
          drillTitle: drillObj.title,
          drillDay: drillObj.dayNumber,
          subject: drillObj.subject,
          chapter: drillObj.chapter,
          question: q,
          addedAt: Date.now(),
          reviewCount: 1,
          isMastered: false,
          isBookmarked: true
        };
        showToast('Saved to Mistake Vault!');
      }
      setStoredMistakes(currentUser.username, next);
      saveCloudMistakes(currentUser.username, next);
      return next;
    });
  };

  const handleRemoveMistake = (mistakeId: string) => {
    if (!currentUser) return;
    setMistakes(prev => {
      const next = { ...prev };
      delete next[mistakeId];
      setStoredMistakes(currentUser.username, next);
      saveCloudMistakes(currentUser.username, next);
      return next;
    });
    showToast('Removed from vault');
  };

  const handleToggleMastered = (mistakeId: string) => {
    if (!currentUser) return;
    setMistakes(prev => {
      const next = { ...prev };
      if (next[mistakeId]) {
        const willMaster = !next[mistakeId].isMastered;
        next[mistakeId] = {
          ...next[mistakeId],
          isMastered: willMaster
        };
        setStoredMistakes(currentUser.username, next);
        saveCloudMistakes(currentUser.username, next);
        showToast(willMaster ? 'Question marked as Mastered! 🎉' : 'Marked for revision');
      }
      return next;
    });
  };

  const handleClearMastered = () => {
    if (!currentUser) return;
    setMistakes(prev => {
      const next: Record<string, MistakeItem> = {};
      Object.keys(prev).forEach(k => {
        if (!prev[k].isMastered) {
          next[k] = prev[k];
        }
      });
      setStoredMistakes(currentUser.username, next);
      saveCloudMistakes(currentUser.username, next);
      return next;
    });
    showToast('Cleaned all mastered questions from vault');
  };

  const handlePracticeMistakes = (questions: MCQ[], subject: Subject) => {
    if (!questions.length) return;
    const practiceDrill: Drill = {
      id: `mistake-practice-${Date.now()}`,
      subject,
      dayNumber: 0,
      drillNumber: 0,
      title: `Mistake Vault Practice (${questions.length} MCQs)`,
      chapter: 'Weak Area Revision Quiz',
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      totalMarks: questions.length,
      questions,
      createdAt: Date.now()
    };
    setActiveDrill(practiceDrill);
    setIsMistakeVaultOpen(false);
  };

  const handleRetakeFromScorecard = () => {
    if (scorecardData) {
      const drillToRetake = scorecardData.drill;
      setScorecardData(null);
      setActiveDrill(drillToRetake);
    }
  };

  const handleSelectDrill = useCallback((drill: Drill) => {
    setActiveDrill(drill);
  }, []);

  const handleBackFromDrill = useCallback(() => {
    setActiveDrill(null);
  }, []);

  const handleSelectSubject = useCallback((sub: Subject) => {
    setCurrentSubject(sub);
    setActiveDrill(null);
  }, []);

  const handleOpenLeaderboard = useCallback(() => {
    setIsLeaderboardOpen(true);
  }, []);

  const handleOpenResetModal = useCallback(() => {
    setIsResetModalOpen(true);
  }, []);

  const handleOpenFirebaseHealth = useCallback(() => {
    setIsFirebaseHealthOpen(true);
  }, []);

  const handleOpenChangePassword = useCallback(() => {
    setIsChangePasswordOpen(true);
  }, []);

  const handleOpenAiTutorModal = useCallback(() => {
    setIsAiTutorOpen(true);
  }, []);

  const handleOpenMistakeVault = useCallback(() => {
    setIsMistakeVaultOpen(true);
  }, []);

  const handleOpenSyllabus = useCallback(() => {
    setIsSyllabusOpen(true);
  }, []);

  const handlePrintDrill = useCallback((drill: Drill) => {
    setPrintDrill(drill);
  }, []);

  const unresolvedMistakesCount = useMemo(() => {
    return Object.values(mistakes).filter(m => !m.isMastered).length;
  }, [mistakes]);

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
    <div 
      className="min-h-screen font-sans w-full max-w-full overflow-x-hidden transition-colors duration-300"
      style={{
        backgroundColor: 'var(--theme-bg, #020617)',
        color: 'var(--theme-text, #f8fafc)'
      }}
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 rounded-xl border border-emerald-500/40 bg-emerald-950/90 px-4 py-2.5 text-xs font-semibold text-emerald-200 shadow-xl backdrop-blur-md transition-all">
          {toastMessage}
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        currentSubject={currentSubject}
        onSelectSubject={handleSelectSubject}
        currentUser={currentUser}
        onOpenAuth={() => {}}
        onLogout={handleLogout}
        onOpenLeaderboard={handleOpenLeaderboard}
        onOpenAddDrill={handleOpenAddDrill}
        onOpenResetModal={handleOpenResetModal}
        isCloudConnected={isCloudConnected}
        onOpenChat={handleOpenChat}
        hasUnreadDiscussion={hasUnreadDiscussion}
        onOpenFirebaseHealth={handleOpenFirebaseHealth}
        onOpenAnnouncement={handleOpenAnnouncement}
        hasActiveAnnouncement={Boolean(announcement && announcement.isActive && announcement.id !== lastSeenAnnId)}
        onOpenChangePassword={handleOpenChangePassword}
        onOpenAiTutor={handleOpenAiTutorModal}
        onOpenMistakeVault={handleOpenMistakeVault}
        unresolvedMistakesCount={unresolvedMistakesCount}
        onOpenSyllabus={handleOpenSyllabus}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenStudyLibrary={() => setIsStudyLibraryOpen(open => !open)}
        isStudyLibraryOpen={isStudyLibraryOpen}
      />

      {/* Floating AI Tutor Quick Trigger Button (Mobile & Desktop) */}
      {!isAiTutorOpen && currentUser && (
        <button
          onClick={handleOpenAiTutorModal}
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
        {isStudyLibraryOpen ? (
          <Suspense fallback={<div className="study-state"><span>Opening study library…</span></div>}>
            <StudyLibrary />
          </Suspense>
        ) : activeDrill ? (
          <DrillViewer
            drill={activeDrill}
            currentUser={currentUser}
            onBack={handleBackFromDrill}
            onFinishDrill={handleFinishDrill}
            onDeleteDrill={handleDeleteDrill}
            onEditDrill={handleEditDrill}
            onOpenAiTutor={handleOpenAiTutorModal}
            onOpenCalculator={() => setIsCalculatorOpen(true)}
            mistakes={mistakes}
            onToggleMistake={(q) => handleToggleMistake(q, activeDrill)}
          />
        ) : (
          <DrillList
            subject={currentSubject}
            drills={drills}
            userAttempts={userAttempts}
            currentUser={currentUser}
            activeSessions={activeSessions}
            onSelectDrill={handleSelectDrill}
            onDeleteDrill={handleDeleteDrill}
            onEditDrill={handleEditDrill}
            onOpenAddDrill={handleOpenAddDrill}
            onPrintDrill={handlePrintDrill}
            onOpenSyllabus={handleOpenSyllabus}
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
          onOpenMistakeVault={() => setIsMistakeVaultOpen(true)}
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

      {/* Student Personal Mistake Vault Modal */}
      {isMistakeVaultOpen && (
        <MistakeVaultModal
          mistakes={mistakes}
          onClose={() => setIsMistakeVaultOpen(false)}
          onRemoveMistake={handleRemoveMistake}
          onToggleMastered={handleToggleMastered}
          onPracticeMistakes={handlePracticeMistakes}
          onClearMastered={handleClearMastered}
        />
      )}

      {/* Printable Test Paper / PDF Export Modal */}
      {printDrill && (
        <DrillPrintModal
          drill={printDrill}
          onClose={() => setPrintDrill(null)}
        />
      )}

      {/* 102-Day Subject Syllabus Roadmap Modal (Computer & Maths) */}
      {isSyllabusOpen && (
        <SyllabusModal
          subject={currentSubject}
          currentUser={currentUser}
          syllabus={syllabusMap[currentSubject] || null}
          onSyllabusUpdated={(updated) => {
            setSyllabusMap(prev => ({ ...prev, [currentSubject]: updated }));
          }}
          onClose={() => setIsSyllabusOpen(false)}
          onSelectDayDrill={(dayNum) => {
            const found = drills.find(d => d.subject === currentSubject && d.dayNumber === dayNum);
            if (found) {
              setActiveDrill(found);
            } else {
              showToast(`No MCQ drill published for Day ${dayNum} yet.`);
            }
          }}
        />
      )}

      {/* Full-Screen Physical Scientific Calculator (Casio fx-991ES PLUS) */}
      <CalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        activeSubject={currentSubject}
      />

      {/* Visual Theme & Portal Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        currentUser={currentUser}
        currentTheme={currentTheme}
        onSelectTheme={handleSelectTheme}
      />
    </div>
  );
}
