import { Drill, LeaderboardUser, User, UserAttempt, OptionKey } from '../types';
import { INITIAL_DRILLS } from '../data/initialDrills';
import {
  saveDrillToCloud,
  deleteDrillFromCloud,
  saveAttemptToCloud,
  deleteAttemptFromCloud,
  saveUserToCloud,
  registerUserInCloud,
  getCloudUserCredentials,
  deleteSpecificUserAndDataFromCloud,
  resetCloudPortalData
} from './firebase';
import { hashPassword, verifyPassword } from './crypto';

const DRILLS_KEY = 'kips_drills_clean_v3';
const USERS_KEY = 'kips_users_clean_v3';
const CURRENT_USER_KEY = 'kips_current_user_clean_v3';
const ATTEMPTS_KEY = 'kips_attempts_clean_v3';

// Default Admin account profile (zero plain text password stored in client user list!)
const DEFAULT_USERS: User[] = [
  {
    username: 'admin',
    role: 'admin',
    fullName: 'FBISE Drill Master (Admin)',
    college: 'KIPS College',
    createdAt: Date.now()
  }
];

const DEFAULT_ATTEMPTS: UserAttempt[] = [];

export function autoRepairKnownDrill(drill: Drill): boolean {
  if (drill.subject !== 'biology') return false;
  let changed = false;
  
  const knownAnswers: Record<string, OptionKey> = {
    'Unlike DNA, RNA is generally single-stranded': 'B',
    'relative abundance in a typical eukaryotic cell': 'C',
    'length of a messenger RNA (mRNA) molecule is highly variable': 'C',
    'how many different kinds of tRNA molecules have been identified': 'B',
    'typical length of a tRNA molecule': 'C',
    "cloverleaf' model of tRNA features several distinct loops": 'A',
    'specific site for amino acid attachment': 'B',
    'middle loop of the tRNA cloverleaf structure': 'C',
    'Theta loop of a tRNA molecule': 'A',
    'primary role of rRNA during translation': 'C',
    'folded back on itself to form a double-helical region': 'C',
    'covalently bonded together, the resulting complex is called': 'B',
    'where are glycolipids abundantly present in mammals': 'B',
    'Blood group antigens': 'D',
    'Lipoproteins are complexes formed by proteins and': 'B',
    'basic structural framework of all biological cell membranes': 'C',
    'primarily composed of nucleic acids complexed with': 'B',
    'two major cellular structures are composed entirely of nucleoproteins': 'B',
    'NOT listed in the textbook as a function of glycoproteins': 'C',
    'makes up roughly 3-4% of the total cellular RNA': 'C',
    'where are lipoproteins NEVER found': 'D',
    "structurally alters the 3' CCA-OH terminus": 'B',
    'difference between a codon and an anticodon': 'B',
    'interaction between cells, such as immune system responses': 'A',
    'mRNA, tRNA, and rRNA all share which of the following characteristics': 'B'
  };

  drill.questions.forEach((q) => {
    for (const [snippet, correctKey] of Object.entries(knownAnswers)) {
      if (q.question.includes(snippet)) {
        if (q.correctAnswer !== correctKey) {
          q.correctAnswer = correctKey;
          changed = true;
        }
        break;
      }
    }
  });

  return changed;
}

export function getStoredDrills(): Drill[] {
  try {
    const raw = localStorage.getItem(DRILLS_KEY);
    if (!raw) {
      localStorage.setItem(DRILLS_KEY, JSON.stringify([]));
      return [];
    }
    const parsed = JSON.parse(raw);
    const drills = Array.isArray(parsed) ? parsed : [];
    drills.forEach(d => {
      if (autoRepairKnownDrill(d)) {
        saveDrillToCloud(d).catch(() => {});
      }
    });
    return drills;
  } catch {
    return [];
  }
}

export function syncFromCloudDrills(drills: Drill[]): void {
  try {
    drills.forEach(d => {
      if (autoRepairKnownDrill(d)) {
        saveDrillToCloud(d).catch(() => {});
      }
    });
    localStorage.setItem(DRILLS_KEY, JSON.stringify(drills));
  } catch {}
}

export function syncFromCloudAttempts(attempts: UserAttempt[]): void {
  try {
    const bestAttemptsMap = new Map<string, UserAttempt>();
    const oldIdsToDelete: string[] = [];

    attempts.forEach(a => {
      const uKey = (a.username || '').trim().toLowerCase();
      const groupKey = `${uKey}_${a.drillId}`;
      const existing = bestAttemptsMap.get(groupKey);

      if (!existing) {
        bestAttemptsMap.set(groupKey, a);
      } else {
        // We have duplicate attempts for the same drill!
        if (a.score > existing.score || (a.score === existing.score && a.completedAt > existing.completedAt)) {
          if (existing.id && existing.id !== `attempt_${uKey}_${a.drillId}`) {
            oldIdsToDelete.push(existing.id);
          }
          bestAttemptsMap.set(groupKey, a);
        } else {
          if (a.id && a.id !== `attempt_${uKey}_${a.drillId}`) {
            oldIdsToDelete.push(a.id);
          }
        }
      }
    });

    // Delete phantom old attempts from Firestore
    oldIdsToDelete.forEach(id => {
      deleteAttemptFromCloud(id).catch(() => {});
    });

    const cleanAttempts = Array.from(bestAttemptsMap.values());
    localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(cleanAttempts));
  } catch {}
}

export function syncFromCloudUsers(users: User[]): void {
  try {
    // Merge with admin profile
    const admin = DEFAULT_USERS[0];
    const hasAdmin = users.some(u => u.username.toLowerCase() === 'admin');
    const combined = hasAdmin ? users : [admin, ...users];
    localStorage.setItem(USERS_KEY, JSON.stringify(combined));
  } catch {}
}

export function saveDrill(drill: Drill): void {
  const drills = getStoredDrills();
  const existingIdx = drills.findIndex(d => d.id === drill.id);
  if (existingIdx >= 0) {
    drills[existingIdx] = drill;
  } else {
    drills.unshift(drill); // latest first
  }
  localStorage.setItem(DRILLS_KEY, JSON.stringify(drills));
  // Live Cloud Sync
  saveDrillToCloud(drill).catch(err => console.warn('Cloud drill save skipped:', err));
}

export function deleteDrill(drillId: string): void {
  const currentDrills = getStoredDrills();
  const updatedDrills = currentDrills.filter(d => d.id !== drillId);
  localStorage.setItem(DRILLS_KEY, JSON.stringify(updatedDrills));
  
  // Also clean any attempts associated with this drill
  const attempts = getStoredAttempts().filter(a => a.drillId !== drillId);
  localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(attempts));

  // Live Cloud Delete
  deleteDrillFromCloud(drillId).catch(err => console.warn('Cloud drill delete skipped:', err));
}

export function getStoredUsers(): User[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (!raw) {
      localStorage.setItem(USERS_KEY, JSON.stringify(DEFAULT_USERS));
      return DEFAULT_USERS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return DEFAULT_USERS;
    // Ensure credentials never linger in client storage
    return parsed.map(u => ({
      username: u.username,
      role: u.role || 'student',
      fullName: u.fullName || u.username,
      college: u.college || 'KIPS College FBISE',
      createdAt: u.createdAt || Date.now()
    }));
  } catch {
    return DEFAULT_USERS;
  }
}

export async function registerUser(
  username: string, 
  password: string, 
  fullName: string = '', 
  role: 'admin' | 'student' = 'student'
): Promise<{ success: boolean; message?: string; user?: User }> {
  const cleanUsername = username.trim().toLowerCase();
  if (!cleanUsername || cleanUsername.length < 3) {
    return { success: false, message: 'Username must be at least 3 characters long.' };
  }
  if (!password || password.length < 4) {
    return { success: false, message: 'Password must be at least 4 characters long.' };
  }

  // Check locally if user exists
  const users = getStoredUsers();
  if (users.some(u => u.username.toLowerCase() === cleanUsername)) {
    return { success: false, message: 'Username is already registered. Please choose another or login.' };
  }

  // Cryptographic Salted SHA-256 Hashing before storing anywhere!
  const hashedPassword = await hashPassword(password);

  const safeUser: User = {
    username: cleanUsername,
    role,
    fullName: fullName.trim() || cleanUsername,
    college: 'KIPS College FBISE',
    createdAt: Date.now()
  };

  // Strictly check and save to cloud ensuring no duplicate username overwrite!
  const cloudRes = await registerUserInCloud({
    ...safeUser,
    passwordHash: hashedPassword
  });

  if (!cloudRes.success) {
    return { success: false, message: cloudRes.message || 'Could not register user.' };
  }

  users.push(safeUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  setCurrentUser(safeUser);

  return { success: true, user: safeUser };
}

export async function authenticateUser(
  username: string, 
  password: string
): Promise<{ success: boolean; message?: string; user?: User }> {
  const cleanUsername = username.trim().toLowerCase();
  if (!cleanUsername) {
    return { success: false, message: 'Please enter your username.' };
  }
  if (!password) {
    return { success: false, message: 'Please enter your password.' };
  }

  // 1. Admin account check
  if (cleanUsername === 'admin') {
    const isAdminPassword = await verifyPassword(password, 'kips123');
    if (isAdminPassword) {
      const adminUser: User = {
        username: 'admin',
        role: 'admin',
        fullName: 'FBISE Drill Master (Admin)',
        college: 'KIPS College',
        createdAt: Date.now()
      };
      setCurrentUser(adminUser);
      return { success: true, user: adminUser };
    } else {
      return { success: false, message: 'Invalid admin credentials.' };
    }
  }

  // 2. Fetch credentials on-demand for this specific user only from Cloud Firestore
  const cloudCreds = await getCloudUserCredentials(cleanUsername);
  if (!cloudCreds) {
    return { success: false, message: 'User does not exist. Please create an account.' };
  }

  // 3. Verify cryptographic password (supports legacy migration as well)
  const isValid = await verifyPassword(password, cloudCreds.passwordHash);
  if (!isValid) {
    return { success: false, message: 'Incorrect password. Please try again.' };
  }

  // If the account previously had plain text password, migrate it to salted SHA-256 now
  if (cloudCreds.passwordHash === password.trim()) {
    const newHash = await hashPassword(password);
    saveUserToCloud({ ...cloudCreds, passwordHash: newHash }).catch(() => {});
  }

  const safeUser: User = {
    username: cloudCreds.username,
    role: cloudCreds.role,
    fullName: cloudCreds.fullName || cloudCreds.username,
    college: cloudCreds.college || 'KIPS College',
    createdAt: cloudCreds.createdAt || Date.now()
  };

  setCurrentUser(safeUser);
  return { success: true, user: safeUser };
}

export function getCurrentUser(): User | null {
  try {
    const raw = localStorage.getItem(CURRENT_USER_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function setCurrentUser(user: User | null): void {
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

export function getStoredAttempts(): UserAttempt[] {
  try {
    const raw = localStorage.getItem(ATTEMPTS_KEY);
    if (!raw) {
      localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(DEFAULT_ATTEMPTS));
      return DEFAULT_ATTEMPTS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return DEFAULT_ATTEMPTS;

    // Deduplicate by username + drillId, keeping highest/latest score
    const bestMap = new Map<string, UserAttempt>();
    parsed.forEach(a => {
      const uKey = (a.username || '').trim().toLowerCase();
      const groupKey = `${uKey}_${a.drillId}`;
      const existing = bestMap.get(groupKey);
      if (!existing || a.score > existing.score || (a.score === existing.score && a.completedAt > existing.completedAt)) {
        bestMap.set(groupKey, a);
      }
    });
    return Array.from(bestMap.values());
  } catch {
    return DEFAULT_ATTEMPTS;
  }
}

export function saveAttempt(attempt: UserAttempt): void {
  const attempts = getStoredAttempts();
  // If user already took this drill, update with latest or higher
  const uKey = attempt.username.trim().toLowerCase();
  const existingIdx = attempts.findIndex(a => a.drillId === attempt.drillId && a.username.trim().toLowerCase() === uKey);
  if (existingIdx >= 0) {
    attempts[existingIdx] = attempt;
  } else {
    attempts.unshift(attempt);
  }
  localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(attempts));

  // Live Cloud Sync for student attempt
  saveAttemptToCloud(attempt).catch(err => console.warn('Cloud attempt save skipped:', err));
}

export function getAttemptsForUser(username: string): UserAttempt[] {
  const cleanU = username.trim().toLowerCase();
  return getStoredAttempts().filter(a => (a.username || '').trim().toLowerCase() === cleanU);
}

export function computeLeaderboard(): LeaderboardUser[] {
  const users = getStoredUsers();
  const attempts = getStoredAttempts();

  return users
    .map(user => {
      const uKey = (user.username || '').trim().toLowerCase();
      const userAttemptsRaw = attempts.filter(a => (a.username || '').trim().toLowerCase() === uKey);
      
      // Deduplicate by drillId to get student's best score per unique drill
      const userBestAttemptsMap = new Map<string, UserAttempt>();
      userAttemptsRaw.forEach(att => {
        const existing = userBestAttemptsMap.get(att.drillId);
        if (!existing || att.score > existing.score || (att.score === existing.score && att.completedAt > existing.completedAt)) {
          userBestAttemptsMap.set(att.drillId, att);
        }
      });
      const uniqueDrillAttempts = Array.from(userBestAttemptsMap.values());

      let totalScore = 0;
      let totalPossibleMarks = 0;
      const subjectBreakdown = {
        physics: { completed: 0, score: 0, total: 0 },
        chemistry: { completed: 0, score: 0, total: 0 },
        biology: { completed: 0, score: 0, total: 0 }
      };

      uniqueDrillAttempts.forEach(att => {
        totalScore += att.score;
        totalPossibleMarks += att.totalQuestions;
        if (att.subject && subjectBreakdown[att.subject]) {
          subjectBreakdown[att.subject].completed += 1;
          subjectBreakdown[att.subject].score += att.score;
          subjectBreakdown[att.subject].total += att.totalQuestions;
        }
      });

      const accuracyPercentage = totalPossibleMarks > 0 ? Math.round((totalScore / totalPossibleMarks) * 100) : 0;
      const currentStreak = Math.min(uniqueDrillAttempts.length, 7);

      return {
        username: user.username,
        fullName: user.fullName || user.username,
        role: user.role,
        drillsCompleted: uniqueDrillAttempts.length,
        totalScore,
        totalPossibleMarks,
        accuracyPercentage,
        currentStreak,
        lastActive: uniqueDrillAttempts.length > 0 ? Math.max(...uniqueDrillAttempts.map(a => a.completedAt)) : user.createdAt,
        subjectBreakdown
      };
    })
    .sort((a, b) => b.totalScore - a.totalScore || b.accuracyPercentage - a.accuracyPercentage);
}

/**
 * Resets all drills, student accounts, test attempts, and leaderboard data.
 * Keeps ONLY the admin account intact so admin login never breaks.
 */
export function resetAllDataExceptAdmin(): void {
  // Clear all drills
  localStorage.setItem(DRILLS_KEY, JSON.stringify([]));
  // Clear all student attempts
  localStorage.setItem(ATTEMPTS_KEY, JSON.stringify([]));
  // Clean up legacy keys
  ['kips_drills_v1', 'kips_drills_clean_v2', 'kips_attempts_v1'].forEach(k => {
    try { localStorage.removeItem(k); } catch {}
  });
  // Filter users to keep only admin
  const users = getStoredUsers();
  const adminUsers = users.filter(u => u.role === 'admin');
  if (adminUsers.length > 0) {
    localStorage.setItem(USERS_KEY, JSON.stringify(adminUsers));
  } else {
    localStorage.setItem(USERS_KEY, JSON.stringify(DEFAULT_USERS));
  }

  // Cloud reset
  resetCloudPortalData().catch(err => console.warn('Cloud reset skipped:', err));
}

/**
 * Deletes a specific student account and all their attempts from the leaderboard & cloud.
 * Strictly guarantees that no other student's records or admin data are touched!
 */
export async function deleteSpecificUserAndData(username: string): Promise<{ success: boolean; message: string }> {
  const cleanU = username.trim().toLowerCase();
  if (cleanU === 'admin') {
    return { success: false, message: 'The master admin account cannot be deleted.' };
  }

  // 1. Remove user from local users
  const users = getStoredUsers().filter(u => u.username.toLowerCase() !== cleanU);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  // 2. Remove all attempts by this user
  const attempts = getStoredAttempts().filter(a => (a.username || '').toLowerCase() !== cleanU);
  localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(attempts));

  // 3. Delete from Cloud Firestore
  await deleteSpecificUserAndDataFromCloud(cleanU);

  return { success: true, message: `Successfully deleted student @${username} and all their records.` };
}
