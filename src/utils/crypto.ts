/**
 * Cryptographic security utilities for KIPS FBISE Portal.
 * Uses native Web Crypto API (SHA-256) available in all modern browsers.
 */

const SALT_PREFIX = 'kips_fbise_salt_2026_sec_';
const SESSION_SECRET = 'kips_session_integrity_sig_2026_auth_sec_salt';

export function signSession(username: string, role: string): string {
  let hash = 0;
  const str = `${SESSION_SECRET}:${username.trim().toLowerCase()}:${role.trim().toLowerCase()}`;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return `sig_${Math.abs(hash).toString(16)}`;
}

export function verifySession(username: string, role: string, signature: string): boolean {
  if (!username || !role || !signature) return false;
  return signSession(username, role) === signature;
}

export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(SALT_PREFIX + password.trim());
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function verifyPassword(providedPassword: string, storedHashOrPlain: string): Promise<boolean> {
  if (!storedHashOrPlain) return false;
  // Legacy migration check: if previously stored in plain text
  if (storedHashOrPlain === providedPassword.trim()) {
    return true;
  }
  // Compare salted SHA-256 cryptographic hash
  const computed = await hashPassword(providedPassword);
  return computed === storedHashOrPlain;
}
