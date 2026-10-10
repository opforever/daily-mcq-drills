import { Drill, LeaderboardUser, User, UserAttempt, OptionKey, InProgressDrillSession, MistakeItem, Subject, SubjectSyllabus } from '../types';
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
import { hashPassword, verifyPassword, signSession, verifySession } from './crypto';

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

  if (!drill || !Array.isArray(drill.questions) || drill.questions.length === 0) {
    return false;
  }

  drill.questions.forEach((q) => {
    if (!q || !q.question) return;
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
    const validDrills = drills.filter((d: any) => 
      d && 
      d.id && 
      !String(d.id).startsWith('syllabus_') && 
      !String(d.id).startsWith('meta_') && 
      Array.isArray(d.questions) && 
      d.questions.length > 0 && 
      d.subject
    );
    validDrills.forEach(d => {
      if (autoRepairKnownDrill(d)) {
        saveDrillToCloud(d).catch(() => {});
      }
    });
    if (validDrills.length !== drills.length) {
      localStorage.setItem(DRILLS_KEY, JSON.stringify(validDrills));
    }
    return validDrills;
  } catch {
    return [];
  }
}

export function syncFromCloudDrills(drills: Drill[]): void {
  try {
    const validDrills = (drills || []).filter((d: any) => 
      d && 
      d.id && 
      !String(d.id).startsWith('syllabus_') && 
      !String(d.id).startsWith('meta_') && 
      Array.isArray(d.questions) && 
      d.questions.length > 0 && 
      d.subject
    );
    validDrills.forEach(d => {
      if (autoRepairKnownDrill(d)) {
        saveDrillToCloud(d).catch(() => {});
      }
    });
    localStorage.setItem(DRILLS_KEY, JSON.stringify(validDrills));
  } catch {}
}

export function syncFromCloudAttempts(attempts: UserAttempt[]): void {
  try {
    const bestAttemptsMap = new Map<string, UserAttempt>();
    const oldIdsToDelete: string[] = [];

    attempts.forEach(a => {
      const uKey = (a.username || '').trim().toLowerCase();
      if (uKey === 'admin') return;

      // Clean up any practice attempts that should not be saved as official drill attempts
      if (a.drillId && a.drillId.startsWith('mistake-practice-')) {
        if (a.id) oldIdsToDelete.push(a.id);
        return;
      }

      const groupKey = `${uKey}_${a.drillId}`;
      const existing = bestAttemptsMap.get(groupKey);

      if (!existing) {
        bestAttemptsMap.set(groupKey, a);
      } else {
        // We have duplicate attempts for the same drill
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

    // Delete phantom old duplicate attempts from Firestore
    oldIdsToDelete.forEach(id => {
      deleteAttemptFromCloud(id).catch(() => {});
    });

    const cleanAttempts = Array.from(bestAttemptsMap.values());
    localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(cleanAttempts));
  } catch {}
}

export function syncFromCloudUsers(cloudUsers: User[]): void {
  try {
    const admin = DEFAULT_USERS[0];
    const userMap = new Map<string, User>();
    userMap.set('admin', admin);

    cloudUsers.forEach(u => {
      const key = (u.username || '').trim().toLowerCase();
      if (key && key !== 'admin') {
        userMap.set(key, {
          username: u.username,
          fullName: u.fullName || u.username,
          role: u.role || 'student',
          college: u.college || 'KIPS College FBISE',
          createdAt: u.createdAt || Date.now()
        });
      }
    });

    const combined = Array.from(userMap.values());
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
    const adminCloudCreds = await getCloudUserCredentials('admin');
    let isAdminValid = false;

    if (adminCloudCreds && adminCloudCreds.passwordHash) {
      isAdminValid = await verifyPassword(password, adminCloudCreds.passwordHash);
    } else {
      // If admin password hash is not yet initialized directly on admin doc, check owner account
      const ownerCreds = (await getCloudUserCredentials('opforever')) || (await getCloudUserCredentials('hussain'));
      if (ownerCreds && ownerCreds.passwordHash) {
        isAdminValid = await verifyPassword(password, ownerCreds.passwordHash);
        if (isAdminValid) {
          // Store hash on admin account in cloud so it is permanently bound
          saveUserToCloud({
            username: 'admin',
            role: 'admin',
            fullName: 'FBISE Drill Master (Admin)',
            college: 'KIPS College',
            createdAt: Date.now(),
            passwordHash: ownerCreds.passwordHash
          }).catch(() => {});
        }
      }
    }

    if (isAdminValid) {
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
    const parsed = JSON.parse(raw);

    // Cryptographic Session Signature Check (Anti-Tampering Firewall)
    if (parsed && parsed.user && parsed.sig) {
      const isValid = verifySession(parsed.user.username, parsed.user.role, parsed.sig);
      if (!isValid) {
        console.warn('🛡️ Security Firewall: Session tampering detected in LocalStorage! Forged session revoked.');
        localStorage.removeItem(CURRENT_USER_KEY);
        return null;
      }
      return parsed.user;
    }

    // Direct object compatibility: re-seal with signature if valid
    if (parsed && parsed.username && parsed.role) {
      const user = parsed as User;
      setCurrentUser(user);
      return user;
    }

    return null;
  } catch {
    return null;
  }
}

export function setCurrentUser(user: User | null): void {
  if (user) {
    const sig = signSession(user.username, user.role);
    const envelope = {
      user,
      sig,
      updatedAt: Date.now()
    };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(envelope));
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
      // Exclude temporary practice drill attempts from official stored attempts
      if (a.drillId && a.drillId.startsWith('mistake-practice-')) return;

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
  // Never save temporary mistake-practice quiz attempts to official attempts database
  if (attempt.drillId && attempt.drillId.startsWith('mistake-practice-')) {
    return;
  }

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

export function computeLeaderboard(customUsers?: User[], customAttempts?: UserAttempt[]): LeaderboardUser[] {
  const users = customUsers || getStoredUsers();
  const attempts = customAttempts || getStoredAttempts();

  // ONLY registered students present in the authoritative users collection appear on the leaderboard
  const registeredStudents = users.filter(u => u.role !== 'admin' && u.username.toLowerCase() !== 'admin');

  return registeredStudents
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
        biology: { completed: 0, score: 0, total: 0 },
        computer: { completed: 0, score: 0, total: 0 },
        maths: { completed: 0, score: 0, total: 0 }
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
    .filter(u => u.drillsCompleted > 0 || u.username !== 'admin')
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

  // 1. Delete from Cloud Firestore FIRST (authoritative cloud deletion)
  try {
    await deleteSpecificUserAndDataFromCloud(cleanU);
  } catch (err: any) {
    console.error('Error deleting user from cloud:', err);
    return { success: false, message: err?.message || 'Failed to delete user from cloud.' };
  }

  // 2. Remove user from local users cache
  const users = getStoredUsers().filter(u => u.username.toLowerCase() !== cleanU);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  // 3. Remove all attempts by this user from local attempts cache
  const attempts = getStoredAttempts().filter(a => (a.username || '').toLowerCase() !== cleanU);
  localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(attempts));

  return { success: true, message: `Successfully deleted student @${username} and all their records.` };
}

/**
 * Changes a user's password securely after verifying their current password.
 * Hashes the new password with salted SHA-256 before updating Firestore.
 */
export async function changeUserPassword(
  username: string,
  currentPassword: string,
  newPassword: string
): Promise<{ success: boolean; message: string }> {
  const cleanU = username.trim().toLowerCase();
  if (!cleanU) return { success: false, message: 'Username is required.' };
  if (!currentPassword) return { success: false, message: 'Please provide your current password.' };
  if (!newPassword || newPassword.length < 4) {
    return { success: false, message: 'New password must be at least 4 characters long.' };
  }
  if (currentPassword === newPassword) {
    return { success: false, message: 'New password must be different from current password.' };
  }

  // 1. Admin case
  if (cleanU === 'admin') {
    const adminCloudCreds = await getCloudUserCredentials('admin');
    let isCurrentValid = false;
    if (adminCloudCreds && adminCloudCreds.passwordHash) {
      isCurrentValid = await verifyPassword(currentPassword, adminCloudCreds.passwordHash);
    } else {
      const ownerCreds = (await getCloudUserCredentials('opforever')) || (await getCloudUserCredentials('hussain'));
      if (ownerCreds && ownerCreds.passwordHash) {
        isCurrentValid = await verifyPassword(currentPassword, ownerCreds.passwordHash);
      }
    }

    if (!isCurrentValid) {
      return { success: false, message: 'Current admin password is incorrect.' };
    }

    const newHash = await hashPassword(newPassword);
    await saveUserToCloud({
      username: 'admin',
      role: 'admin',
      fullName: 'FBISE Drill Master (Admin)',
      college: 'KIPS College',
      createdAt: Date.now(),
      passwordHash: newHash
    });
    return { success: true, message: 'Admin password successfully updated!' };
  }

  // 2. Student case
  const creds = await getCloudUserCredentials(cleanU);
  if (!creds) {
    return { success: false, message: 'User account not found in database.' };
  }

  const isCurrentValid = await verifyPassword(currentPassword, creds.passwordHash);
  if (!isCurrentValid) {
    return { success: false, message: 'Current password is incorrect.' };
  }

  const newHash = await hashPassword(newPassword);
  await saveUserToCloud({
    ...creds,
    passwordHash: newHash
  });

  return { success: true, message: 'Password successfully updated! Your new password is now active.' };
}

/**
 * Allows an admin to reset a student's password if the student forgets it.
 */
export async function adminResetStudentPassword(
  targetStudentUsername: string,
  newPassword: string
): Promise<{ success: boolean; message: string }> {
  const cleanU = targetStudentUsername.trim().toLowerCase();
  if (cleanU === 'admin') {
    return { success: false, message: 'Cannot reset master admin from student list.' };
  }
  if (!newPassword || newPassword.length < 4) {
    return { success: false, message: 'New password must be at least 4 characters long.' };
  }

  const creds = await getCloudUserCredentials(cleanU);
  if (!creds) {
    return { success: false, message: 'Student account not found in database.' };
  }

  const newHash = await hashPassword(newPassword);
  await saveUserToCloud({
    ...creds,
    passwordHash: newHash
  });

  return { success: true, message: `Password for @${targetStudentUsername} has been reset to: "${newPassword}"` };
}

export type { InProgressDrillSession };

/**
 * Saves in-progress MCQ answers and timer so student work is never lost.
 */
export function saveInProgressSession(username: string, session: InProgressDrillSession): void {
  try {
    const cleanU = (username || 'guest').trim().toLowerCase();
    const key = `kips_progress_${cleanU}_${session.drillId}`;
    localStorage.setItem(key, JSON.stringify(session));
  } catch (err) {
    console.warn('Failed to save in-progress drill session:', err);
  }
}

/**
 * Retrieves in-progress session for a specific user and drill.
 */
export function getInProgressSession(username: string, drillId: string): InProgressDrillSession | null {
  try {
    const cleanU = (username || 'guest').trim().toLowerCase();
    const key = `kips_progress_${cleanU}_${drillId}`;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as InProgressDrillSession;
  } catch {
    return null;
  }
}

/**
 * Clears in-progress session once a drill is finished or abandoned.
 */
export function clearInProgressSession(username: string, drillId: string): void {
  try {
    const cleanU = (username || 'guest').trim().toLowerCase();
    const key = `kips_progress_${cleanU}_${drillId}`;
    localStorage.removeItem(key);
  } catch {}
}

/**
 * Retrieves the last announcement ID viewed by a specific user.
 */
export function getSeenAnnouncementId(username: string): string | null {
  try {
    const cleanU = (username || 'guest').trim().toLowerCase();
    return localStorage.getItem(`kips_seen_ann_${cleanU}`);
  } catch {
    return null;
  }
}

/**
 * Marks an announcement as viewed/seen by a user so the notification badge clears.
 */
export function setSeenAnnouncementId(username: string, announcementId: string): void {
  try {
    const cleanU = (username || 'guest').trim().toLowerCase();
    localStorage.setItem(`kips_seen_ann_${cleanU}`, announcementId);
  } catch {}
}

/**
 * Retrieves the timestamp of the last discussion message read by a user.
 */
export function getLastReadDiscussionTimestamp(username: string): number {
  try {
    const cleanU = (username || 'guest').trim().toLowerCase();
    const val = localStorage.getItem(`kips_last_read_chat_${cleanU}`);
    return val ? parseInt(val, 10) : 0;
  } catch {
    return 0;
  }
}

/**
 * Updates the timestamp of the last read discussion message for a user.
 */
export function setLastReadDiscussionTimestamp(username: string, timestamp: number): void {
  try {
    const cleanU = (username || 'guest').trim().toLowerCase();
    localStorage.setItem(`kips_last_read_chat_${cleanU}`, timestamp.toString());
  } catch {}
}

/**
 * Retrieves a locally cached AI hint for this browser device.
 */
export function getLocalAiHint(drillId: string, questionId: string, depth: string): string | null {
  try {
    return localStorage.getItem(`kips_hint_${drillId}_${questionId}_${depth}`);
  } catch {
    return null;
  }
}

/**
 * Saves an AI hint to local cache for instant zero-latency recall.
 */
export function setLocalAiHint(drillId: string, questionId: string, depth: string, hintText: string): void {
  try {
    if (!hintText) return;
    localStorage.setItem(`kips_hint_${drillId}_${questionId}_${depth}`, hintText);
  } catch {}
}

/**
 * Retrieves the local cache of Mistake Vault items for a user.
 */
export function getStoredMistakes(username: string): Record<string, MistakeItem> {
  try {
    const cleanU = (username || 'guest').trim().toLowerCase();
    const raw = localStorage.getItem(`kips_mistakes_${cleanU}`);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

/**
 * Saves Mistake Vault items to local storage.
 */
export function setStoredMistakes(username: string, items: Record<string, MistakeItem>): void {
  try {
    const cleanU = (username || 'guest').trim().toLowerCase();
    localStorage.setItem(`kips_mistakes_${cleanU}`, JSON.stringify(items));
  } catch {}
}

/**
 * Retrieves local fallback cache for subject syllabus.
 */
export function getStoredSyllabus(subject: Subject): SubjectSyllabus | null {
  try {
    const raw = localStorage.getItem(`kips_cached_syllabus_${subject}`);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Saves local fallback cache for subject syllabus.
 */
export function setStoredSyllabus(subject: Subject, syllabus: SubjectSyllabus | null): void {
  try {
    if (syllabus) {
      localStorage.setItem(`kips_cached_syllabus_${subject}`, JSON.stringify(syllabus));
    } else {
      localStorage.removeItem(`kips_cached_syllabus_${subject}`);
    }
  } catch {}
}



