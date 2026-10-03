/**
 * Cryptographic security utilities for KIPS FBISE Portal.
 * Uses native Web Crypto API (SHA-256) available in all modern browsers.
 */

const SALT_PREFIX = 'kips_fbise_salt_2026_sec_';

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
