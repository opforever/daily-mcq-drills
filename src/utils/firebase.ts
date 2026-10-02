import { initializeApp, getApps } from 'firebase/app';
import {
  initializeFirestore,
  getFirestore,
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  getDocs,
  writeBatch,
  query,
  orderBy
} from 'firebase/firestore';
import { Drill, UserAttempt, User } from '../types';

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
 */
export function subscribeToCloudUsers(
  onSuccess: (users: (User & { passwordHash: string })[]) => void,
  onError?: (err: any) => void
): () => void {
  try {
    const q = query(collection(db, USERS_COL));
    return onSnapshot(
      q,
      (snapshot) => {
        const users: (User & { passwordHash: string })[] = [];
        snapshot.forEach((docSnap) => {
          users.push(docSnap.data() as (User & { passwordHash: string }));
        });
        onSuccess(users);
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
    const ref = doc(db, ATTEMPTS_COL, attempt.id);
    await setDoc(ref, attempt, { merge: true });
  } catch (err) {
    console.error('Error saving attempt to Firestore:', err);
  }
}

/**
 * Save or register a user in Firestore.
 */
export async function saveUserToCloud(user: User & { passwordHash: string }): Promise<void> {
  try {
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
