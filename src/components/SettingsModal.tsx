import React, { useState } from 'react';
import { User, ThemeId } from '../types';
import { APP_THEMES } from '../data/themes';
import { 
  Settings, 
  X, 
  Check, 
  Sparkles, 
  Palette, 
  Moon, 
  Sun, 
  Monitor, 
  ShieldCheck, 
  User as UserIcon, 
  RotateCcw,
  Sliders
} from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
  currentTheme: ThemeId;
  onSelectTheme: (themeId: ThemeId) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  currentTheme,
  onSelectTheme,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [previewToast, setPreviewToast] = useState<string | null>(null);

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All Themes (10)' },
    { id: 'Cyber & Neon', label: 'Cyber & Neon' },
    { id: 'Nature & Warmth', label: 'Nature & Warmth' },
    { id: 'Deep Space', label: 'Deep Space' },
    { id: 'Minimalist', label: 'Minimalist' },
  ];

  const filteredThemes = activeCategory === 'all'
    ? APP_THEMES
    : APP_THEMES.filter(t => t.category === activeCategory);

  const handleApplyTheme = (themeId: ThemeId, themeName: string) => {
    onSelectTheme(themeId);
    setPreviewToast(`Theme changed to "${themeName}"! Saved to your profile.`);
    setTimeout(() => setPreviewToast(null), 3000);
  };

  const handleResetDefault = () => {
    handleApplyTheme('midnight-cyan', 'Midnight Cyan');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Settings and Themes"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative flex flex-col w-full max-w-3xl max-h-[90vh] rounded-3xl border border-slate-700/80 bg-slate-900/95 shadow-2xl text-slate-100 overflow-hidden font-sans">
        {/* Glow Header Accent */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-800 shrink-0 bg-slate-950/40">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-500/30 shadow-md">
              <Sliders className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Portal Settings & Themes
                </h2>
                <span className="rounded-full bg-cyan-950/80 border border-cyan-500/40 px-2 py-0.5 text-[10px] font-mono font-bold text-cyan-300">
                  10 Themes
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Personalize your study workspace. Theme is saved to your account.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition cursor-pointer"
            title="Close settings (Esc)"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Success Toast */}
        {previewToast && (
          <div className="mx-6 mt-3 px-4 py-2 rounded-xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-200 text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
            <Check className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>{previewToast}</span>
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 px-5 sm:px-6 pt-3.5 pb-2 overflow-x-auto no-scrollbar border-b border-slate-800/60 shrink-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/20'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Themes Grid */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {filteredThemes.map((theme) => {
              const isSelected = currentTheme === theme.id;

              return (
                <div
                  key={theme.id}
                  onClick={() => handleApplyTheme(theme.id, theme.name)}
                  className={`group relative rounded-2xl p-4 border transition-all cursor-pointer select-none overflow-hidden ${
                    isSelected
                      ? 'border-cyan-400 bg-slate-800/90 shadow-lg shadow-cyan-500/15 ring-2 ring-cyan-500/30'
                      : 'border-slate-800 bg-slate-850/60 hover:border-slate-700 hover:bg-slate-800/60'
                  }`}
                >
                  {/* Subtle Theme Glow Background */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
                    style={{ backgroundColor: theme.previewColors.accent }}
                  />

                  {/* Header info */}
                  <div className="flex items-start justify-between gap-2 mb-2 relative z-10">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white group-hover:text-cyan-300 transition">
                          {theme.name}
                        </span>
                        {isSelected && (
                          <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-cyan-500 text-slate-950 font-extrabold text-[9px] uppercase tracking-wider">
                            <Check className="h-2.5 w-2.5 stroke-[3]" /> Active
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {theme.accentName}
                      </span>
                    </div>

                    {/* Color Swatch Pill Preview */}
                    <div className="flex items-center gap-1 p-1 rounded-lg border border-slate-700/80 bg-slate-950/80 shrink-0">
                      <span 
                        className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-inner" 
                        style={{ backgroundColor: theme.previewColors.bg }}
                        title="Background"
                      />
                      <span 
                        className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-inner" 
                        style={{ backgroundColor: theme.previewColors.card }}
                        title="Card surface"
                      />
                      <span 
                        className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-inner" 
                        style={{ backgroundColor: theme.previewColors.accent }}
                        title="Primary accent"
                      />
                      <span 
                        className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-inner" 
                        style={{ backgroundColor: theme.previewColors.secondary }}
                        title="Secondary accent"
                      />
                    </div>
                  </div>

                  {/* Tagline Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-3 line-clamp-2 relative z-10">
                    {theme.tagline}
                  </p>

                  {/* Live Mini Preview Bar */}
                  <div 
                    className="relative z-10 w-full rounded-xl p-2 border flex items-center justify-between text-[11px] font-mono shadow-inner"
                    style={{ 
                      backgroundColor: theme.previewColors.card,
                      borderColor: isSelected ? theme.previewColors.accent : 'rgba(255,255,255,0.08)'
                    }}
                  >
                    <div className="flex items-center gap-1.5">
                      <span 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: theme.previewColors.accent }}
                      />
                      <span style={{ color: theme.previewColors.text }}>KIPS FBISE</span>
                    </div>
                    <span 
                      className="px-2 py-0.5 rounded-md text-[10px] font-bold"
                      style={{ 
                        backgroundColor: theme.previewColors.accent,
                        color: theme.id === 'cyberpunk-violet' || theme.id === 'tokyo-neon' || theme.id === 'crimson-abyss' ? '#ffffff' : '#000000'
                      }}
                    >
                      {isSelected ? 'Selected' : 'Apply'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-t border-slate-800 bg-slate-950/60 shrink-0 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            {currentUser ? (
              <span className="flex items-center gap-1.5">
                <UserIcon className="h-3.5 w-3.5 text-slate-400" />
                <span>Theme tied to <strong>@{currentUser.username}</strong></span>
              </span>
            ) : (
              <span>Guest session theme active</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetDefault}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800 text-slate-300 hover:text-white transition cursor-pointer"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset Default</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold transition shadow-md cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
