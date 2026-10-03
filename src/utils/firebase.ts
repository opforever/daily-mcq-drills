import { initializeApp, getApps } from 'firebase/app';
import {
  initializeFirestore,
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  onSnapshot,
  getDocs,
  writeBatch,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore';
import { Drill, UserAttempt, User, ChatMessage, Announcement, InProgressDrillSession } from '../types';

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
    const q = query(collection(db, DRILLS_COL));
    return onSnapshot(
      q,
      (snapshot) => {
        const drills: Drill[] = [];
        snapshot.forEach((docSnap) => {
          drills.push(docSnap.data() as Drill);
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
 * Real-time listener for student attempts across all devices.
 */
export function subscribeToCloudAttempts(
  onSuccess: (attempts: UserAttempt[]) => void,
  onError?: (err: any) => void
): () => void {
  try {
    const q = query(collection(db, ATTEMPTS_COL));
    return onSnapshot(
      q,
      (snapshot) => {
        const attempts: UserAttempt[] = [];
        snapshot.forEach((docSnap) => {
          attempts.push(docSnap.data() as UserAttempt);
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
    await setDoc(ref, drill, { merge: true });
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
    recordWrite(1);
    const ref = doc(db, USERS_COL, user.username.toLowerCase());
    await setDoc(ref, user, { merge: true });
  } catch (err) {
    console.error('Error saving user to Firestore:', err);
  }
}

/**
 * Wipe all cloud drills and attempts, preserving admin.
 */
export async function resetCloudPortalData(): Promise<void> {
  try {
    // 1. Delete all drills
    const drillsSnap = await getDocs(collection(db, DRILLS_COL));
    const batch = writeBatch(db);
    drillsSnap.forEach((d) => batch.delete(d.ref));
    
    // 2. Delete all attempts
    const attemptsSnap = await getDocs(collection(db, ATTEMPTS_COL));
    attemptsSnap.forEach((a) => batch.delete(a.ref));
    
    // 3. Delete non-admin users
    const usersSnap = await getDocs(collection(db, USERS_COL));
    usersSnap.forEach((u) => {
      const data = u.data() as User;
      if (data.role !== 'admin') {
        batch.delete(u.ref);
      }
    });

    await batch.commit();
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
    await setDoc(ref, announcement);
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
    await deleteDoc(ref);
  } catch (err) {
    console.error('Error clearing announcement in cloud:', err);
  }
}

/**
 * Deletes a specific user account AND all their quiz attempts from Firestore.
 * Strictly guarantees that no other user data, admin data, or drills are affected.
 */
export async function deleteSpecificUserAndDataFromCloud(username: string): Promise<void> {
  try {
    const cleanU = username.trim().toLowerCase();
    if (cleanU === 'admin') return;

    recordWrite(1);
    // 1. Delete user account document
    const userRef = doc(db, USERS_COL, cleanU);
    await deleteDoc(userRef);

    // 2. Query and delete all test attempts belonging to this user
    const attemptsSnap = await getDocs(collection(db, ATTEMPTS_COL));
    const batch = writeBatch(db);
    let count = 0;
    attemptsSnap.forEach((attDoc) => {
      const data = attDoc.data();
      if ((data.username || '').trim().toLowerCase() === cleanU) {
        batch.delete(attDoc.ref);
        count++;
      }
    });

    if (count > 0) {
      recordWrite(count);
      await batch.commit();
    }
  } catch (err) {
    console.error('Error deleting specific user from cloud:', err);
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



