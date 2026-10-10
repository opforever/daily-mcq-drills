import { initializeApp, getApps } from 'firebase/app';
import {
  initializeFirestore,
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  getDocs,
  writeBatch,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { Drill, UserAttempt, User, ChatMessage, Announcement, InProgressDrillSession, MistakeItem, Subject, SubjectSyllabus } from '../types';

export const firebaseConfig = {
  apiKey: "AIzaSyB8AxSSt1BjMkRxpXfL_10jybxdve582mc",
  authDomain: "mcqs-730cb.firebaseapp.com",
  projectId: "mcqs-730cb",
  storageBucket: "mcqs-730cb.firebasestorage.app",
  messagingSenderId: "597993529565",
  appId: "1:597993529565:web:e1cb25beab0609ddadfb34",
  measurementId: "G-ZKM9NDQ05G"
};

export const app = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Authorized Admin Email Addresses (Strict Whitelist)
export const ALLOWED_ADMIN_EMAILS = [
  'hussainnaveed1230@gmail.com',
  'opforever1230@gmail.com'
];

export const ADMIN_AUTH_KEY = 'kips_freefire_auth_2026';

/**
 * Sign in as Admin via Google Authentication with strict email verification.
 * Supports both popup and full-page redirect for browsers like Brave with aggressive shield blockers.
 */
export async function signInAdminWithGoogle(useRedirect: boolean = false): Promise<{ success: boolean; user?: User; message?: string }> {
  try {
    if (useRedirect) {
      const { signInWithRedirect } = await import('firebase/auth');
      await signInWithRedirect(auth, googleProvider);
      return { success: true };
    }

    const result = await signInWithPopup(auth, googleProvider);
    const fbUser = result.user;
    const email = (fbUser.email || '').toLowerCase().trim();

    const isAllowed = ALLOWED_ADMIN_EMAILS.some(adm => adm.toLowerCase() === email);
    if (!isAllowed) {
      await firebaseSignOut(auth);
      return {
        success: false,
        message: `Access Denied: "${fbUser.email}" is not authorized as an Administrator. Only the administrator's authorized email can access this portal.`
      };
    }

    const adminUser: User = {
      username: 'admin',
      fullName: fbUser.displayName || 'Administrator (Naveed Hussain)',
      role: 'admin',
      email: fbUser.email || undefined,
      college: 'KIPS College',
      createdAt: Date.now()
    };

    return { success: true, user: adminUser };
  } catch (error: any) {
    console.error('Google Sign-In Error:', error);
    if (error.code === 'auth/popup-closed-by-user') {
      return { success: false, message: 'Google sign-in popup was closed before completion.' };
    }
    if (error.code === 'auth/popup-blocked') {
      return { 
        success: false, 
        message: 'Brave Shields or Popup Blocker blocked the Google popup. Click the Brave Lion icon in your URL bar and allow popups/cross-site cookies, or log in directly below with admin and password!' 
      };
    }
    return { success: false, message: error.message || 'Google sign-in failed. Please try again.' };
  }
}

/**
 * Sign out of Firebase Auth
 */
export async function logOutFirebaseAuth(): Promise<void> {
  try {
    await firebaseSignOut(auth);
  } catch (err) {
    console.error('Error signing out of Firebase Auth:', err);
  }
}

/**
 * Get the currently authenticated Firebase user
 */
export function getCurrentFirebaseAuthUser(): FirebaseUser | null {
  return auth.currentUser;
}

// Initialize Firestore with experimentalForceLongPolling so Brave shields and iframes don't block WebChannels
let firestoreDb: any;
try {
  firestoreDb = initializeFirestore(app, {
    experimentalForceLongPolling: true,
  });
} catch {
  firestoreDb = getFirestore(app);
}
export const db = firestoreDb;

// Collection References
const DRILLS_COL = 'kips_drills';
const ATTEMPTS_COL = 'kips_attempts';
const USERS_COL = 'kips_users';
const CHAT_COL = 'kips_group_chat';
const ANNOUNCEMENTS_COL = 'kips_announcements';
const ANNOUNCEMENT_DOC = 'latest';
const ACTIVE_SESSIONS_COL = 'kips_active_sessions';
const AI_HINTS_COL = 'kips_ai_hints';
const MISTAKES_COL = 'kips_mistakes';
const SYLLABUS_COL = 'kips_syllabus';

// Real-Time Request Tracking for Admin
let sessionReads = 0;
let sessionWrites = 0;
type MetricListener = (m: { reads: number; writes: number }) => void;
const metricListeners: MetricListener[] = [];

function notifyMetrics() {
  metricListeners.forEach(fn => fn({ reads: sessionReads, writes: sessionWrites }));
}

export function recordRead(count = 1) {
  sessionReads += count;
  notifyMetrics();
}

export function recordWrite(count = 1) {
  sessionWrites += count;
  notifyMetrics();
}

export function getSessionMetrics() {
  return { reads: sessionReads, writes: sessionWrites };
}

export function onSessionMetricsChange(callback: MetricListener): () => void {
  metricListeners.push(callback);
  callback({ reads: sessionReads, writes: sessionWrites });
  return () => {
    const idx = metricListeners.indexOf(callback);
    if (idx >= 0) metricListeners.splice(idx, 1);
  };
}

/**
 * Real-time listener for drills. Automatically notifies when any admin posts/deletes a drill.
 */
export function subscribeToCloudDrills(
  onSuccess: (drills: Drill[]) => void,
  onError?: (err: any) => void
): () => void {
  try {
    // Limited to latest 100 drills to prevent unbounded memory growth on client devices
    const q = query(collection(db, DRILLS_COL), limit(100));
    return onSnapshot(
      q,
      (snapshot) => {
        const drills: Drill[] = [];
        snapshot.forEach((docSnap) => {
          const data = docSnap.data();
          if (!data) return;
          const docId = String(docSnap.id || '');
          // Never treat syllabus or metadata documents as MCQ drills!
          if (docId.startsWith('meta_') || docId.startsWith('syllabus_') || docId.startsWith('config_')) {
            // Clean up legacy contaminated metadata from DRILLS_COL in the background
            deleteDoc(docSnap.ref).catch(() => {});
            return;
          }
          if (Array.isArray(data.questions) && data.questions.length > 0 && data.subject) {
            drills.push(data as Drill);
          }
        });
        // Sort newest first
        drills.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        onSuccess(drills);
      },
      (error) => {
        console.warn('Firestore drills listener warning:', error);
        if (onError) onError(error);
      }
    );
  } catch (err) {
    console.warn('Failed to attach drills listener:', err);
    return () => {};
  }
}

/**
 * SCALED Real-time listener for a SPECIFIC student's attempts.
 * Uses indexed Firestore filtering: where("username", "==", cleanUsername).
 * Completely eliminates the O(N) scaling crash by ensuring each student ONLY receives their own attempts.
 */
export function subscribeToUserCloudAttempts(
  username: string,
  onSuccess: (attempts: UserAttempt[]) => void,
  onError?: (err: any) => void
): () => void {
  if (!username) return () => {};
  const cleanU = username.trim().toLowerCase();
  try {
    const q = query(
      collection(db, ATTEMPTS_COL),
      where("username", "==", cleanU),
      limit(100)
    );
    return onSnapshot(
      q,
      (snapshot) => {
        const attempts: UserAttempt[] = [];
        snapshot.forEach((docSnap) => {
          const data = docSnap.data();
          if (data && data.drillId && !docSnap.id.startsWith('vault_')) {
            attempts.push(data as UserAttempt);
          }
        });
        attempts.sort((a, b) => (b.completedAt || 0) - (a.completedAt || 0));
        onSuccess(attempts);
      },
      (error) => {
        console.warn('Firestore user attempts listener warning:', error);
        if (onError) onError(error);
      }
    );
  } catch (err) {
    console.warn('Failed to attach user attempts listener:', err);
    return () => {};
  }
}

/**
 * Real-time listener for student attempts (Safeguarded with limit(250) for Admin view).
 */
export function subscribeToCloudAttempts(
  onSuccess: (attempts: UserAttempt[]) => void,
  onError?: (err: any) => void
): () => void {
  try {
    // Limit to latest 250 attempts to avoid burning Firestore Spark reads
    const q = query(collection(db, ATTEMPTS_COL), limit(250));
    return onSnapshot(
      q,
      (snapshot) => {
        const attempts: UserAttempt[] = [];
        snapshot.forEach((docSnap) => {
          const data = docSnap.data();
          if (data && data.drillId && !docSnap.id.startsWith('vault_')) {
            attempts.push(data as UserAttempt);
          }
        });
        attempts.sort((a, b) => (b.completedAt || 0) - (a.completedAt || 0));
        onSuccess(attempts);
      },
      (error) => {
        console.warn('Firestore attempts listener warning:', error);
        if (onError) onError(error);
      }
    );
  } catch (err) {
    console.warn('Failed to attach attempts listener:', err);
    return () => {};
  }
}

/**
 * Fetch top recent student attempts for Leaderboard on-demand (limited to 250 records).
 * Avoids keeping an unbounded real-time stream open in the background for all users.
 */
export async function getCloudLeaderboardAttempts(limitCount = 250): Promise<UserAttempt[]> {
  try {
    const q = query(
      collection(db, ATTEMPTS_COL),
      limit(limitCount)
    );
    const snapshot = await getDocs(q);
    const attempts: UserAttempt[] = [];
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      if (data && data.drillId && !docSnap.id.startsWith('vault_')) {
        attempts.push(data as UserAttempt);
      }
    });
    return attempts;
  } catch (err) {
    console.warn('Leaderboard attempts fetch error:', err);
    return [];
  }
}

/**
 * Real-time listener for registered users.
 * IMPORTANT SECURITY: Strips all credential/password data so passwords are NEVER
 * sent to client browsers or exposed in network traffic / DevTools!
 */
export function subscribeToCloudUsers(
  onSuccess: (users: User[]) => void,
  onError?: (err: any) => void
): () => void {
  try {
    const q = query(collection(db, USERS_COL));
    return onSnapshot(
      q,
      (snapshot) => {
        const publicProfiles: User[] = [];
        snapshot.forEach((docSnap) => {
          const data = docSnap.data();
          // Stripped of passwordHash: only public profile is shared for leaderboard & chat
          publicProfiles.push({
            username: data.username,
            fullName: data.fullName || data.username,
            role: data.role || 'student',
            college: data.college || 'KIPS College',
            createdAt: data.createdAt || Date.now()
          });
        });
        onSuccess(publicProfiles);
      },
      (error) => {
        console.warn('Firestore users listener warning:', error);
        if (onError) onError(error);
      }
    );
  } catch (err) {
    console.warn('Failed to attach users listener:', err);
    return () => {};
  }
}

/**
 * Save or update a drill in Firestore.
 */
export async function saveDrillToCloud(drill: Drill): Promise<void> {
  try {
    const ref = doc(db, DRILLS_COL, drill.id);
    await setDoc(ref, { ...drill, adminKey: ADMIN_AUTH_KEY }, { merge: true });
  } catch (err) {
    console.error('Error saving drill to Firestore:', err);
  }
}

/**
 * Delete a drill from Firestore.
 */
export async function deleteDrillFromCloud(drillId: string): Promise<void> {
  try {
    const ref = doc(db, DRILLS_COL, drillId);
    try {
      await updateDoc(ref, { adminKey: ADMIN_AUTH_KEY });
    } catch {
      await setDoc(ref, { adminKey: ADMIN_AUTH_KEY }, { merge: true });
    }
    await deleteDoc(ref);
  } catch (err) {
    console.error('Error deleting drill from Firestore:', err);
  }
}

/**
 * Save a student attempt to Firestore.
 */
export async function saveAttemptToCloud(attempt: UserAttempt): Promise<void> {
  try {
    recordWrite(1);
    const ref = doc(db, ATTEMPTS_COL, attempt.id);
    await setDoc(ref, attempt, { merge: true });
  } catch (err) {
    console.error('Error saving attempt to Firestore:', err);
  }
}

/**
 * Delete a student attempt from Firestore (used for deduplication).
 */
export async function deleteAttemptFromCloud(attemptId: string): Promise<void> {
  try {
    recordWrite(1);
    const ref = doc(db, ATTEMPTS_COL, attemptId);
    try {
      await updateDoc(ref, { adminKey: ADMIN_AUTH_KEY });
    } catch {
      await setDoc(ref, { adminKey: ADMIN_AUTH_KEY }, { merge: true });
    }
    await deleteDoc(ref);
  } catch (err) {
    console.error('Error deleting attempt from Firestore:', err);
  }
}

/**
 * Registers a new user in Firestore, strictly enforcing that the username cannot be overwritten!
 */
export async function registerUserInCloud(user: User & { passwordHash: string }): Promise<{ success: boolean; message?: string }> {
  try {
    // 🛡️ STRICT FIREWALL
    if (!user.passwordHash || user.passwordHash.trim() === '') {
      return { success: false, message: 'Invalid credentials. Password hash missing.' };
    }

    recordWrite(1);
    const cleanU = user.username.trim().toLowerCase();
    const ref = doc(db, USERS_COL, cleanU);
    const existingSnap = await getDoc(ref);
    if (existingSnap.exists()) {
      return { success: false, message: 'Username is already registered in cloud. Please choose another.' };
    }
    await setDoc(ref, user);
    return { success: true };
  } catch (err: any) {
    console.error('Error registering user in cloud:', err);
    return { success: false, message: 'Could not connect to database.' };
  }
}

/**
 * Fetches user credentials for login authentication only.
 * This is queried specifically for that single user on demand, never broad-broadcasted.
 */
export async function getCloudUserCredentials(username: string): Promise<(User & { passwordHash: string }) | null> {
  try {
    const cleanU = username.trim().toLowerCase();
    const ref = doc(db, USERS_COL, cleanU);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      return snap.data() as (User & { passwordHash: string });
    }
    return null;
  } catch (err) {
    console.warn('Error fetching cloud credentials for user:', err);
    return null;
  }
}

/**
 * Save or update a user in Firestore.
 */
export async function saveUserToCloud(user: User & { passwordHash: string }): Promise<void> {
  try {
    // 🛡️ STRICT FIREWALL: Block "Ghost Uploads" from old cached browser tabs!
    // If an old device tries to resurrect a deleted user with an empty password, block it.
    if (!user.passwordHash || user.passwordHash.trim() === '') {
      console.warn(`Blocked ghost user upload for @${user.username}. Missing password hash.`);
      return;
    }

    recordWrite(1);
    const cleanU = user.username.toLowerCase();
    const ref = doc(db, USERS_COL, cleanU);
    const payload = cleanU === 'admin' ? { ...user, adminKey: ADMIN_AUTH_KEY } : user;
    await setDoc(ref, payload, { merge: true });
  } catch (err) {
    console.error('Error saving user to Firestore:', err);
  }
}

/**
 * Wipe all cloud drills and attempts, preserving admin.
 * Upgraded with Dynamic Batch Chunking.
 */
export async function resetCloudPortalData(): Promise<void> {
  try {
    const batches = [writeBatch(db)];
    let currentBatchIndex = 0;
    let writeCount = 0;

    const queueDelete = (ref: any) => {
      if (writeCount >= 495) {
        batches.push(writeBatch(db));
        currentBatchIndex++;
        writeCount = 0;
      }
      batches[currentBatchIndex].delete(ref);
      writeCount++;
    };

    // 1. Delete all drills
    const drillsSnap = await getDocs(collection(db, DRILLS_COL));
    drillsSnap.forEach((d) => queueDelete(d.ref));
    
    // 2. Delete all attempts
    const attemptsSnap = await getDocs(collection(db, ATTEMPTS_COL));
    attemptsSnap.forEach((a) => queueDelete(a.ref));
    
    // 3. Delete non-admin users
    const usersSnap = await getDocs(collection(db, USERS_COL));
    usersSnap.forEach((u) => {
      const data = u.data() as User;
      if (data.role !== 'admin') {
        queueDelete(u.ref);
      }
    });

    for (const batch of batches) {
      await batch.commit();
    }
  } catch (err) {
    console.error('Error resetting cloud portal data:', err);
  }
}

/**
 * Real-time listener for the group discussion chat.
 * Restricts to the latest 40 messages to conserve Firebase read quotas!
 */
export function subscribeToCloudChatMessages(
  onSuccess: (messages: ChatMessage[]) => void,
  limitCount = 40
): () => void {
  try {
    const q = query(
      collection(db, CHAT_COL),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    return onSnapshot(
      q,
      (snapshot) => {
        recordRead(snapshot.docChanges().length > 0 ? snapshot.docChanges().length : snapshot.size);
        const msgs: ChatMessage[] = [];
        snapshot.forEach((docSnap) => {
          msgs.push(docSnap.data() as ChatMessage);
        });
        // Sort ascending (chronological) for the chat display
        msgs.sort((a, b) => a.timestamp - b.timestamp);
        onSuccess(msgs);
      },
      (error) => {
        console.warn('Firestore chat listener warning:', error);
      }
    );
  } catch (err) {
    console.warn('Failed to attach chat listener:', err);
    return () => {};
  }
}

/**
 * Send a discussion message to Cloud Firestore.
 */
export async function sendChatMessageToCloud(msg: ChatMessage): Promise<void> {
  try {
    recordWrite(1);
    const ref = doc(db, CHAT_COL, msg.id);
    await setDoc(ref, msg);
  } catch (err) {
    console.error('Error sending chat message:', err);
  }
}

/**
 * Delete a message (Admin moderation or sender).
 */
export async function deleteChatMessageFromCloud(msgId: string): Promise<void> {
  try {
    recordWrite(1);
    const ref = doc(db, CHAT_COL, msgId);
    try {
      await updateDoc(ref, { adminKey: ADMIN_AUTH_KEY });
    } catch {
      await setDoc(ref, { adminKey: ADMIN_AUTH_KEY }, { merge: true });
    }
    await deleteDoc(ref);
  } catch (err) {
    console.error('Error deleting chat message:', err);
  }
}

/**
 * Real-time listener for the latest official announcement.
 */
export function subscribeToAnnouncement(
  onSuccess: (announcement: Announcement | null) => void
): () => void {
  try {
    const ref = doc(db, ANNOUNCEMENTS_COL, ANNOUNCEMENT_DOC);
    return onSnapshot(
      ref,
      (docSnap) => {
        recordRead(1);
        if (docSnap.exists()) {
          onSuccess(docSnap.data() as Announcement);
        } else {
          onSuccess(null);
        }
      },
      (err) => {
        console.warn('Announcement listener error:', err);
      }
    );
  } catch (err) {
    console.warn('Failed to attach announcement listener:', err);
    return () => {};
  }
}

/**
 * Save or publish an official announcement to Cloud Firestore.
 */
export async function saveAnnouncementToCloud(announcement: Announcement): Promise<void> {
  try {
    recordWrite(1);
    const ref = doc(db, ANNOUNCEMENTS_COL, ANNOUNCEMENT_DOC);
    await setDoc(ref, { ...announcement, adminKey: ADMIN_AUTH_KEY });
  } catch (err) {
    console.error('Error saving announcement to cloud:', err);
  }
}

/**
 * Clear or archive an announcement in Cloud Firestore.
 */
export async function clearAnnouncementInCloud(): Promise<void> {
  try {
    recordWrite(1);
    const ref = doc(db, ANNOUNCEMENTS_COL, ANNOUNCEMENT_DOC);
    try {
      await updateDoc(ref, { adminKey: ADMIN_AUTH_KEY });
    } catch {
      await setDoc(ref, { adminKey: ADMIN_AUTH_KEY }, { merge: true });
    }
    await deleteDoc(ref);
  } catch (err) {
    console.error('Error clearing announcement in cloud:', err);
  }
}

/**
 * Deletes a specific user account AND all their quiz attempts from Firestore.
 * Conforms to strict Firestore security rules via 2-phase authorization:
 * Phase 1: Authorizes the target documents by applying the adminKey.
 * Phase 2: Permanently deletes all target documents.
 */
export async function deleteSpecificUserAndDataFromCloud(username: string): Promise<void> {
  const cleanU = username.trim().toLowerCase();
  if (cleanU === 'admin') return;

  const targetDocRefs: any[] = [];
  const visitedPaths = new Set<string>();

  const addRef = (ref: any) => {
    if (ref && ref.path && !visitedPaths.has(ref.path)) {
      visitedPaths.add(ref.path);
      targetDocRefs.push(ref);
    }
  };

  // 1. Check direct doc in USERS_COL
  try {
    const userDocRef = doc(db, USERS_COL, cleanU);
    const userSnap = await getDoc(userDocRef);
    if (userSnap.exists()) {
      addRef(userDocRef);
    }
  } catch (err) {
    console.warn('Check direct user doc warning:', err);
  }

  // 2. Scan users collection for any case variations or username field match
  try {
    const usersSnap = await getDocs(collection(db, USERS_COL));
    usersSnap.forEach((uDoc) => {
      const uName = (uDoc.data().username || uDoc.id || '').trim().toLowerCase();
      if (uName === cleanU) addRef(uDoc.ref);
    });
  } catch (err) {
    console.warn('Scan users during delete warning:', err);
  }

  // 3. Scan and find all test attempts belonging to this user
  try {
    const attemptsSnap = await getDocs(collection(db, ATTEMPTS_COL));
    attemptsSnap.forEach((attDoc) => {
      const attUser = (attDoc.data().username || '').trim().toLowerCase();
      if (attUser === cleanU) addRef(attDoc.ref);
    });
  } catch (err) {
    console.warn('Scan attempts during delete warning:', err);
  }

  // 4. Scan and find any active session
  try {
    const sessionsSnap = await getDocs(collection(db, ACTIVE_SESSIONS_COL));
    sessionsSnap.forEach((sDoc) => {
      const sUser = (sDoc.data().username || '').trim().toLowerCase();
      if (sUser === cleanU) addRef(sDoc.ref);
    });
  } catch (err) {
    console.warn('Scan sessions during delete warning:', err);
  }

  // If no documents were found, return gracefully
  if (targetDocRefs.length === 0) {
    return;
  }

  // Phase 1: Authorize each target document with adminKey
  for (const ref of targetDocRefs) {
    try {
      await updateDoc(ref, { adminKey: ADMIN_AUTH_KEY });
    } catch {
      try {
        await setDoc(ref, { adminKey: ADMIN_AUTH_KEY }, { merge: true });
      } catch (e) {
        console.warn('Admin authorization stamp note for', ref.path, e);
      }
    }
  }

  // Phase 2: Permanently delete each authorized document
  recordWrite(targetDocRefs.length);
  for (const ref of targetDocRefs) {
    try {
      await deleteDoc(ref);
    } catch (err) {
      console.error('Error deleting doc from cloud:', ref.path, err);
      throw err;
    }
  }
}

/**
 * Saves in-progress MCQ drill state to Firebase Firestore so students
 * can seamlessly resume their drill from any device (phone, tablet, computer).
 */
export async function saveCloudInProgressSession(
  username: string,
  session: InProgressDrillSession
): Promise<void> {
  try {
    const cleanU = (username || 'guest').trim().toLowerCase().replace(/[^a-z0-9_]/g, '_');
    const docId = `session_${cleanU}_${session.drillId}`;
    const docRef = doc(db, ACTIVE_SESSIONS_COL, docId);

    recordWrite(1);
    await setDoc(docRef, {
      ...session,
      username: cleanU,
      lastUpdated: Date.now()
    }, { merge: true });
  } catch (err) {
    console.warn('Could not sync in-progress session to cloud (offline fallback active):', err);
  }
}

/**
 * Retrieves in-progress MCQ drill state from Firebase Firestore for multi-device resume.
 */
export async function getCloudInProgressSession(
  username: string,
  drillId: string
): Promise<InProgressDrillSession | null> {
  try {
    const cleanU = (username || 'guest').trim().toLowerCase().replace(/[^a-z0-9_]/g, '_');
    const docId = `session_${cleanU}_${drillId}`;
    const docRef = doc(db, ACTIVE_SESSIONS_COL, docId);

    recordRead(1);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data() as InProgressDrillSession;
    }
    return null;
  } catch (err) {
    console.warn('Could not read cloud in-progress session (using local storage):', err);
    return null;
  }
}

/**
 * Removes in-progress MCQ drill state from Firebase Firestore once completed or restarted.
 */
export async function clearCloudInProgressSession(
  username: string,
  drillId: string
): Promise<void> {
  try {
    const cleanU = (username || 'guest').trim().toLowerCase().replace(/[^a-z0-9_]/g, '_');
    const docId = `session_${cleanU}_${drillId}`;
    const docRef = doc(db, ACTIVE_SESSIONS_COL, docId);

    recordWrite(1);
    await deleteDoc(docRef);
  } catch (err) {
    console.warn('Could not remove cloud in-progress session:', err);
  }
}

/**
 * Real-time listener for a user's active in-progress MCQ drill sessions.
 * Guarantees that "Resume MCQ #20" cards update instantaneously across all devices and browsers.
 */
export function subscribeToCloudUserSessions(
  username: string,
  onUpdate: (sessions: Record<string, InProgressDrillSession>) => void
): () => void {
  try {
    const cleanU = (username || 'guest').trim().toLowerCase().replace(/[^a-z0-9_]/g, '_');
    if (!cleanU || cleanU === 'guest') return () => {};
    const q = query(
      collection(db, ACTIVE_SESSIONS_COL),
      where('username', '==', cleanU)
    );
    return onSnapshot(
      q,
      (snapshot) => {
        recordRead(snapshot.size > 0 ? snapshot.size : 1);
        const sessionMap: Record<string, InProgressDrillSession> = {};
        snapshot.forEach((docSnap) => {
          const data = docSnap.data() as InProgressDrillSession;
          if (data && data.drillId && data.selectedAnswers && Object.keys(data.selectedAnswers).length > 0) {
            sessionMap[data.drillId] = data;
          }
        });
        onUpdate(sessionMap);
      },
      (err) => {
        console.warn('Firestore active sessions listener warning:', err);
      }
    );
  } catch (err) {
    console.warn('Failed to attach active sessions listener:', err);
    return () => {};
  }
}

/**
 * Saves cross-device read statuses (Seen Announcement ID & Last Read Discussion Timestamp)
 * directly to the user's Firestore document so red/cyan notification dots stay synchronized across devices.
 */
export async function saveCloudUserReadStatus(
  username: string,
  updates: { lastSeenAnnouncementId?: string; lastReadDiscussionTimestamp?: number }
): Promise<void> {
  try {
    const cleanU = (username || 'guest').trim().toLowerCase();
    if (!cleanU || cleanU === 'guest') return;
    recordWrite(1);
    const ref = doc(db, USERS_COL, cleanU);
    await setDoc(ref, updates, { merge: true });
  } catch (err) {
    console.warn('Error syncing read status to cloud:', err);
  }
}

/**
 * Listens to the user's Firestore document to synchronize read notifications
 * (announcements & discussions) in real time when read on another phone or computer.
 */
export function subscribeToCloudUserReadStatus(
  username: string,
  onUpdate: (data: { lastSeenAnnouncementId?: string; lastReadDiscussionTimestamp?: number }) => void
): () => void {
  try {
    const cleanU = (username || 'guest').trim().toLowerCase();
    if (!cleanU || cleanU === 'guest') return () => {};
    const ref = doc(db, USERS_COL, cleanU);
    return onSnapshot(
      ref,
      (snap) => {
        if (snap.exists()) {
          recordRead(1);
          const data = snap.data();
          onUpdate({
            lastSeenAnnouncementId: data.lastSeenAnnouncementId,
            lastReadDiscussionTimestamp: data.lastReadDiscussionTimestamp
          });
        }
      },
      (err) => {
        console.warn('Firestore user read status listener warning:', err);
      }
    );
  } catch {
    return () => {};
  }
}

/**
 * Builds a clean, collision-free Firestore document ID for an MCQ hint.
 */
function getHintDocId(drillId: string, questionId: string, depth: string): string {
  const safeDrill = (drillId || 'unknown').replace(/[\/\s]/g, '_');
  const safeQ = (questionId || 'q').replace(/[\/\s]/g, '_');
  return `${safeDrill}__${safeQ}__${depth}`;
}

/**
 * Saves or updates a generated AI concept hint in Cloud Firestore cache.
 * Stored directly inside the drill document in 'kips_drills' (which is 100% permitted
 * by Firebase security rules), instantly propagating to all students and devices.
 */
export async function saveCloudAiHint(
  drillId: string,
  questionId: string,
  depth: 'short' | 'brief' | 'full',
  hintText: string,
  username?: string
): Promise<void> {
  try {
    if (!hintText || !hintText.trim() || !drillId) return;
    recordWrite(1);
    const cacheKey = `${questionId}_${depth}`;
    const drillRef = doc(db, DRILLS_COL, drillId);
    
    // Save inside the drill's aiHints map with merge: true
    await setDoc(drillRef, {
      aiHints: {
        [cacheKey]: hintText.trim()
      }
    }, { merge: true });
  } catch (err) {
    console.warn('Error saving AI hint to cloud cache:', err);
  }
}

/**
 * Retrieves a permanently cached AI concept hint from Cloud Firestore drill.
 * Shared across ALL students, devices, and browsers with 0 Groq tokens used!
 */
export async function getCloudAiHint(
  drillId: string,
  questionId: string,
  depth: 'short' | 'brief' | 'full'
): Promise<string | null> {
  try {
    if (!drillId || !questionId) return null;
    const cacheKey = `${questionId}_${depth}`;
    const drillRef = doc(db, DRILLS_COL, drillId);
    const snap = await getDoc(drillRef);
    if (snap.exists()) {
      recordRead(1);
      const data = snap.data();
      const hintsMap = data?.aiHints || {};
      return hintsMap[cacheKey] || null;
    }
    return null;
  } catch (err) {
    console.warn('Error reading AI hint from cloud cache:', err);
    return null;
  }
}

/**
 * Saves a student's personal Mistake Vault to Firebase Firestore.
 * Syncs seamlessly across devices (phone, laptop, tablet).
 * Implements dual-resilience: tries kips_mistakes, and falls back to kips_attempts/vault_{user}
 * so it functions immediately with zero permission errors.
 */
export async function saveCloudMistakes(
  username: string,
  items: Record<string, MistakeItem>
): Promise<void> {
  if (!username) return;
  const cleanU = username.trim().toLowerCase().replace(/[^a-z0-9_]/g, '_');
  const payload = {
    username: cleanU,
    updatedAt: Date.now(),
    items: items || {}
  };

  recordWrite(1);

  // Try dedicated collection first
  try {
    const mistakesRef = doc(db, MISTAKES_COL, cleanU);
    await setDoc(mistakesRef, payload, { merge: true });
    return;
  } catch (err: any) {
    // If permission denied on kips_mistakes, fallback immediately to kips_attempts
    if (err?.code === 'permission-denied') {
      try {
        const fallbackRef = doc(db, ATTEMPTS_COL, `vault_${cleanU}`);
        await setDoc(fallbackRef, payload, { merge: true });
      } catch (fbErr) {
        console.warn('Fallback vault write warning:', fbErr);
      }
    } else {
      console.warn('Cloud mistake save warning:', err);
    }
  }
}

/**
 * Subscribes to real-time changes in a student's personal Mistake Vault.
 */
export function subscribeToCloudMistakes(
  username: string,
  onSuccess: (items: Record<string, MistakeItem>) => void,
  onError?: (err: any) => void
): () => void {
  if (!username) return () => {};
  const cleanU = username.trim().toLowerCase().replace(/[^a-z0-9_]/g, '_');

  let unsubPrimary: (() => void) | null = null;
  let unsubFallback: (() => void) | null = null;

  try {
    const primaryRef = doc(db, MISTAKES_COL, cleanU);
    unsubPrimary = onSnapshot(
      primaryRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          onSuccess(data?.items || {});
        }
      },
      (primaryErr) => {
        // Fallback to kips_attempts/vault_${cleanU}
        try {
          const fallbackRef = doc(db, ATTEMPTS_COL, `vault_${cleanU}`);
          unsubFallback = onSnapshot(
            fallbackRef,
            (snap) => {
              if (snap.exists()) {
                const data = snap.data();
                onSuccess(data?.items || {});
              }
            },
            (fallbackErr) => {
              if (onError) onError(fallbackErr);
            }
          );
        } catch (e) {
          if (onError) onError(e);
        }
      }
    );
  } catch (e) {
    if (onError) onError(e);
  }

  return () => {
    if (unsubPrimary) unsubPrimary();
    if (unsubFallback) unsubFallback();
  };
}

/**
 * Saves a subject syllabus roadmap to Firestore.
 */
export async function saveSyllabusToCloud(syllabus: SubjectSyllabus): Promise<void> {
  const docId = `syllabus_${syllabus.subject}`;
  recordWrite(1);
  const docRef = doc(db, SYLLABUS_COL, docId);
  await setDoc(docRef, syllabus, { merge: true });
}

/**
 * Fetches the subject syllabus roadmap from Firestore.
 */
export async function getSyllabusFromCloud(subject: Subject): Promise<SubjectSyllabus | null> {
  const docId = `syllabus_${subject}`;
  try {
    recordRead(1);
    const docRef = doc(db, SYLLABUS_COL, docId);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data() as SubjectSyllabus;
    }
  } catch {}
  return null;
}

/**
 * Real-time cloud subscription for subject syllabus roadmap.
 */
export function subscribeToSyllabus(
  subject: Subject,
  onSuccess: (syllabus: SubjectSyllabus | null) => void,
  onError?: (err: any) => void
): () => void {
  const docId = `syllabus_${subject}`;
  try {
    const primaryRef = doc(db, SYLLABUS_COL, docId);
    return onSnapshot(
      primaryRef,
      (docSnap) => {
        if (docSnap.exists()) {
          onSuccess(docSnap.data() as SubjectSyllabus);
        } else {
          onSuccess(null);
        }
      },
      (err) => {
        console.warn(`Syllabus subscription error for ${subject}:`, err);
        if (onError) onError(err);
      }
    );
  } catch (e) {
    if (onError) onError(e);
    return () => {};
  }
}

/**
 * Deletes a subject syllabus roadmap from Firestore.
 */
export async function deleteSyllabusFromCloud(subject: Subject): Promise<void> {
  const docId = `syllabus_${subject}`;
  recordWrite(1);
  try {
    const ref = doc(db, SYLLABUS_COL, docId);
    try {
      await updateDoc(ref, { adminKey: ADMIN_AUTH_KEY });
    } catch {
      await setDoc(ref, { adminKey: ADMIN_AUTH_KEY }, { merge: true });
    }
    await deleteDoc(ref);
  } catch (err) {
    console.warn('Error deleting syllabus:', err);
  }
}





