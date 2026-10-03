import React, { useState } from 'react';
import { Announcement, User } from '../types';
import { Megaphone, X, Bell, Send, Trash2, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface AnnouncementModalProps {
  announcement: Announcement | null;
  currentUser: User | null;
  onClose: () => void;
  onSaveAnnouncement: (announcement: Announcement) => Promise<void>;
  onClearAnnouncement: () => Promise<void>;
}

export const AnnouncementModal: React.FC<AnnouncementModalProps> = ({
  announcement,
  currentUser,
  onClose,
  onSaveAnnouncement,
  onClearAnnouncement
}) => {
  const isAdmin = currentUser?.role === 'admin';
  const [isEditing, setIsEditing] = useState(isAdmin && !announcement);
  const [title, setTitle] = useState(announcement?.title || '');
  const [message, setMessage] = useState(announcement?.message || '');
  const [priority, setPriority] = useState<'normal' | 'important' | 'alert'>(announcement?.priority || 'normal');
  const [isSaving, setIsSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !message.trim()) return;

    setIsSaving(true);
    setStatusMsg(null);
    try {
      const newAnnouncement: Announcement = {
        id: `ann_${Date.now()}`,
        title: title.trim(),
        message: message.trim(),
        author: currentUser?.fullName || currentUser?.username || 'FBISE Drill Master (Admin)',
        timestamp: Date.now(),
        priority,
        isActive: true
      };
      await onSaveAnnouncement(newAnnouncement);
      setIsEditing(false);
      setStatusMsg('✓ Announcement published to all student devices!');
    } catch {
      setStatusMsg('Failed to publish announcement. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleClear = async () => {
    if (!confirm('Are you sure you want to clear/remove the current announcement?')) return;
    setIsSaving(true);
    try {
      await onClearAnnouncement();
      setTitle('');
      setMessage('');
      setIsEditing(true);
      setStatusMsg('✓ Announcement removed.');
    } catch {
      setStatusMsg('Failed to clear announcement.');
    } finally {
      setIsSaving(false);
    }
  };

  const formatTime = (ts: number) => {
    const diffMin = Math.floor((Date.now() - ts) / 60000);
    if (diffMin < 1) return 'Just now';
    if (diffMin < 60) return `${diffMin}m ago`;
    const diffHours = Math.floor(diffMin / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    return new Date(ts).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-4 backdrop-blur-sm overflow-y-auto">
      <div className="relative my-4 w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-xl p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
            <Megaphone className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0 pr-6">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white">Portal Announcements</h2>
              {announcement && announcement.isActive && (
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400">Official college notifications & schedule updates</p>
          </div>
        </div>

        {statusMsg && (
          <div className="mt-3 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-2.5 text-xs text-emerald-300">
            {statusMsg}
          </div>
        )}

        {/* Admin Switcher */}
        {isAdmin && (
          <div className="mt-4 flex rounded-xl border border-slate-800 bg-slate-950 p-1">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition ${
                !isEditing ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              View Active Notice
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition ${
                isEditing ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              {announcement ? 'Edit / New Notice' : '+ Post Notice'}
            </button>
          </div>
        )}

        {/* Content Body */}
        {isEditing && isAdmin ? (
          /* Admin Post / Edit Form */
          <form onSubmit={handlePublish} className="mt-4 space-y-3">
            <div>
              <label className="text-xs font-semibold text-slate-300">Announcement Title</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Day 16 Physics Drill Schedule Update"
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300">Message Content</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your announcement details here for all students..."
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300">Priority Level</label>
              <div className="mt-1 grid grid-cols-3 gap-2">
                {(['normal', 'important', 'alert'] as const).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={`rounded-xl border py-1.5 text-xs font-semibold capitalize transition ${
                      priority === p
                        ? p === 'alert'
                          ? 'border-rose-500 bg-rose-950/60 text-rose-300'
                          : p === 'important'
                          ? 'border-amber-500 bg-amber-950/60 text-amber-300'
                          : 'border-cyan-500 bg-cyan-950/60 text-cyan-300'
                        : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-2 pt-2 border-t border-slate-800">
              {announcement ? (
                <button
                  type="button"
                  onClick={handleClear}
                  disabled={isSaving}
                  className="flex items-center gap-1.5 rounded-xl border border-rose-500/40 bg-rose-950/40 px-3 py-2 text-xs font-semibold text-rose-400 hover:bg-rose-900/50 transition cursor-pointer"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  <span>Clear Notice</span>
                </button>
              ) : <div />}

              <button
                type="submit"
                disabled={isSaving}
                className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-xs font-bold text-white shadow-lg hover:from-blue-500 hover:to-cyan-500 transition cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
                <span>{isSaving ? 'Publishing...' : 'Publish to Students'}</span>
              </button>
            </div>
          </form>
        ) : (
          /* View Announcement */
          <div className="mt-4">
            {announcement && announcement.isActive ? (
              <div
                className={`rounded-2xl border p-4 sm:p-5 ${
                  announcement.priority === 'alert'
                    ? 'border-rose-500/40 bg-rose-950/20'
                    : announcement.priority === 'important'
                    ? 'border-amber-500/40 bg-amber-950/20'
                    : 'border-cyan-500/40 bg-cyan-950/20'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {announcement.priority === 'alert' ? (
                      <span className="flex items-center gap-1 rounded-md bg-rose-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-rose-400 border border-rose-500/30">
                        <AlertTriangle className="h-3 w-3" /> Alert
                      </span>
                    ) : announcement.priority === 'important' ? (
                      <span className="flex items-center gap-1 rounded-md bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-400 border border-amber-500/30">
                        <Bell className="h-3 w-3" /> Important
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 rounded-md bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400 border border-cyan-500/30">
                        <Megaphone className="h-3 w-3" /> Notice
                      </span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Clock className="h-3 w-3" />
                    <span>{formatTime(announcement.timestamp)}</span>
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold text-white sm:text-lg">
                  {announcement.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-200 whitespace-pre-wrap">
                  {announcement.message}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-3 text-[11px] text-slate-400">
                  <span>Posted by <strong className="text-cyan-300 font-semibold">{announcement.author}</strong></span>
                  {isAdmin && (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-cyan-400 hover:underline font-semibold"
                    >
                      Edit Notice
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800/60 text-slate-500">
                  <Bell className="h-6 w-6" />
                </div>
                <h3 className="mt-3 text-sm font-bold text-slate-200">No Active Announcements</h3>
                <p className="mx-auto mt-1 max-w-xs text-xs text-slate-400">
                  There are currently no new notices. College drill timings and exam updates will appear right here!
                </p>
                {isAdmin && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:from-blue-500 hover:to-cyan-500 transition"
                  >
                    <Megaphone className="h-3.5 w-3.5" />
                    <span>Post First Announcement</span>
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
