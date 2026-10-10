import { ThemeId } from '../types';
import { APP_THEMES } from '../data/themes';

const VALID_THEME_IDS: Set<string> = new Set(APP_THEMES.map(t => t.id));
const DEFAULT_THEME: ThemeId = 'midnight-cyan';
const GLOBAL_THEME_KEY = 'kips_active_theme_v1';

export function isValidTheme(id: string | null | undefined): id is ThemeId {
  return typeof id === 'string' && VALID_THEME_IDS.has(id);
}

export function getThemeStorageKey(username?: string): string {
  if (username && username.trim()) {
    return `kips_user_theme_${username.trim().toLowerCase()}`;
  }
  return GLOBAL_THEME_KEY;
}

export function getStoredUserTheme(username?: string): ThemeId {
  try {
    if (typeof window === 'undefined') return DEFAULT_THEME;

    // 1. Check user-specific theme preference
    if (username && username.trim()) {
      const userKey = getThemeStorageKey(username);
      const userSaved = localStorage.getItem(userKey);
      if (isValidTheme(userSaved)) {
        return userSaved;
      }
    }

    // 2. Check global browser theme preference
    const globalSaved = localStorage.getItem(GLOBAL_THEME_KEY);
    if (isValidTheme(globalSaved)) {
      return globalSaved;
    }
  } catch {}

  return DEFAULT_THEME;
}

export function saveUserTheme(themeId: ThemeId, username?: string): void {
  if (!isValidTheme(themeId)) return;

  try {
    if (typeof window !== 'undefined') {
      // Save globally
      localStorage.setItem(GLOBAL_THEME_KEY, themeId);

      // Save per specific user
      if (username && username.trim()) {
        const userKey = getThemeStorageKey(username);
        localStorage.setItem(userKey, themeId);
      }
    }
  } catch {}

  applyThemeToDOM(themeId);
}

export function applyThemeToDOM(themeId: ThemeId): void {
  if (typeof document === 'undefined') return;

  const validTheme = isValidTheme(themeId) ? themeId : DEFAULT_THEME;
  const root = document.documentElement;

  root.setAttribute('data-theme', validTheme);

  // Sync with meta theme-color for mobile browser address bars
  const themeObj = APP_THEMES.find(t => t.id === validTheme);
  if (themeObj) {
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', themeObj.previewColors.bg);
  }
}
