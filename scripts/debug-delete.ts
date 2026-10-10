import { initializeApp } from 'firebase/app';
import { 
  initializeFirestore, 
  doc, 
  getDoc, 
  getDocs,
  collection,
  writeBatch,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8AxSSt1BjMkRxpXfL_10jybxdve582mc",
  authDomain: "mcqs-730cb.firebaseapp.com",
  projectId: "mcqs-730cb",
  storageBucket: "mcqs-730cb.firebasestorage.app",
  messagingSenderId: "597993529565",
  appId: "1:597993529565:web:e1cb25beab0609ddadfb34",
  measurementId: "G-ZKM9NDQ05G"
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

const ADMIN_KEY = 'kips_freefire_auth_2026';

async function debugDelete() {
  const targetUsername = 'network_test_delete';
  console.log(`=== DEBUGGING DELETION FOR: ${targetUsername} ===`);

  // 1. Look for user document in kips_users
  const userRef = doc(db, 'kips_users', targetUsername);
  const userSnap = await getDoc(userRef);
  console.log(`User doc 'kips_users/${targetUsername}' exists:`, userSnap.exists());
  if (userSnap.exists()) {
    console.log("User data:", userSnap.data());
  }

  // Also scan all users in kips_users to find any matches
  const allUsersSnap = await getDocs(collection(db, 'kips_users'));
  const matchingUserDocs: any[] = [];
  allUsersSnap.forEach(d => {
    const u = (d.data().username || d.id || '').trim().toLowerCase();
    if (u === targetUsername.toLowerCase()) {
      matchingUserDocs.push({ id: d.id, path: d.ref.path, data: d.data() });
    }
  });
  console.log(`Found ${matchingUserDocs.length} matching user docs:`, matchingUserDocs.map(m => m.path));

  // 2. Scan attempts in kips_attempts
  const allAttemptsSnap = await getDocs(collection(db, 'kips_attempts'));
  const matchingAttemptDocs: any[] = [];
  allAttemptsSnap.forEach(d => {
    const u = (d.data().username || '').trim().toLowerCase();
    if (u === targetUsername.toLowerCase()) {
      matchingAttemptDocs.push({ id: d.id, path: d.ref.path });
    }
  });
  console.log(`Found ${matchingAttemptDocs.length} matching attempt docs:`, matchingAttemptDocs.map(m => m.path));

  // 3. Scan active sessions
  const allSessionsSnap = await getDocs(collection(db, 'kips_active_sessions'));
  const matchingSessionDocs: any[] = [];
  allSessionsSnap.forEach(d => {
    const u = (d.data().username || '').trim().toLowerCase();
    if (u === targetUsername.toLowerCase()) {
      matchingSessionDocs.push({ id: d.id, path: d.ref.path });
    }
  });
  console.log(`Found ${matchingSessionDocs.length} matching session docs:`, matchingSessionDocs.map(m => m.path));

  // Now let's test deleting one by one to see EXACTLY which operation fails!
  console.log("\n--- STEP-BY-STEP DELETION TEST ---");
  
  for (const m of matchingUserDocs) {
    console.log(`Attempting to delete user doc: ${m.path}...`);
    try {
      // First try stamping
      console.log(`  Stamping ${m.path}...`);
      await updateDoc(doc(db, 'kips_users', m.id), { adminKey: ADMIN_KEY });
      console.log(`  ✓ Stamped! Now deleting ${m.path}...`);
      await deleteDoc(doc(db, 'kips_users', m.id));
      console.log(`  ✓ Successfully deleted ${m.path}!`);
    } catch (err: any) {
      console.error(`  ✗ Error on ${m.path}:`, err.code, err.message);
    }
  }

  for (const m of matchingAttemptDocs) {
    console.log(`Attempting to delete attempt doc: ${m.path}...`);
    try {
      console.log(`  Stamping ${m.path}...`);
      await updateDoc(doc(db, 'kips_attempts', m.id), { adminKey: ADMIN_KEY });
      console.log(`  ✓ Stamped! Now deleting ${m.path}...`);
      await deleteDoc(doc(db, 'kips_attempts', m.id));
      console.log(`  ✓ Successfully deleted ${m.path}!`);
    } catch (err: any) {
      console.error(`  ✗ Error on ${m.path}:`, err.code, err.message);
    }
  }

  for (const m of matchingSessionDocs) {
    console.log(`Attempting to delete session doc: ${m.path}...`);
    try {
      await deleteDoc(doc(db, 'kips_active_sessions', m.id));
      console.log(`  ✓ Successfully deleted ${m.path}!`);
    } catch (err: any) {
      console.error(`  ✗ Error on ${m.path}:`, err.code, err.message);
    }
  }

  process.exit(0);
}

debugDelete().catch(console.error);
