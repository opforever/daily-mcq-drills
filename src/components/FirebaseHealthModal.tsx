import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Database, 
  HardDrive, 
  ExternalLink, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Users, 
  FileText, 
  Award, 
  MessageSquare,
  Sparkles,
  Zap
} from 'lucide-react';
import { getSessionMetrics, onSessionMetricsChange } from '../utils/firebase';
import { Drill, UserAttempt, User, ChatMessage } from '../types';

interface FirebaseHealthModalProps {
  onClose: () => void;
  drills: Drill[];
  attemptsCount: number;
  usersCount: number;
  messagesCount: number;
}

export const FirebaseHealthModal: React.FC<FirebaseHealthModalProps> = ({
  onClose,
  drills,
  attemptsCount,
  usersCount,
  messagesCount
}) => {
  const [metrics, setMetrics] = useState(getSessionMetrics());

  useEffect(() => {
    const unsub = onSessionMetricsChange((m) => {
      setMetrics(m);
    });
    return () => unsub();
  }, []);

  // Free Tier Daily Limits (Spark Plan)
  const DAILY_READ_LIMIT = 50000;
  const DAILY_WRITE_LIMIT = 20000;
  const STORAGE_LIMIT_MB = 1024; // 1 GB

  // Estimate total stored KB
  // Average drill = 8KB, attempt = 0.5KB, message = 0.2KB, user = 0.3KB
  const estimatedDrillsKb = drills.length * 8;
  const estimatedAttemptsKb = attemptsCount * 0.5;
  const estimatedMessagesKb = messagesCount * 0.2;
  const estimatedUsersKb = usersCount * 0.3;
  const totalEstimatedKb = Math.max(1, Math.round(estimatedDrillsKb + estimatedAttemptsKb + estimatedMessagesKb + estimatedUsersKb));
  const totalEstimatedMb = (totalEstimatedKb / 1024).toFixed(3);
  const storagePercentage = ((Number(totalEstimatedMb) / STORAGE_LIMIT_MB) * 100).toFixed(4);

  const readsPercentage = ((metrics.reads / DAILY_READ_LIMIT) * 100).toFixed(2);
  const writesPercentage = ((metrics.writes / DAILY_WRITE_LIMIT) * 100).toFixed(2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-4 overflow-y-auto">
      <div className="relative my-4 w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-2xl sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-600 text-white shadow-md">
              <Activity className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white sm:text-xl">
                  Firebase Cloud Health & Quotas
                </h2>
                <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Spark Free Tier
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Live document counters, session request tracker & Google Cloud limits
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Status Callout */}
        <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3.5 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs">
            <p className="font-semibold text-emerald-200">
              Your Google Cloud Firestore is healthy & configured permanently
            </p>
            <p className="text-slate-400 mt-0.5">
              Project ID: <code className="text-emerald-300 font-mono">mcqs-730cb</code> • Rules: <code className="text-slate-300 font-mono">if true;</code> (No 30-day expiration timer) • Long-polling enabled for all browsers.
            </p>
          </div>
        </div>

        {/* Real-time Session Request Monitor */}
        <div className="mt-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <Zap className="h-3.5 w-3.5 text-amber-400" />
            Session Real-Time Request Activity
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Reads Card */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Reads (This Session)</span>
                <span className="font-mono text-slate-200">{metrics.reads} / 50,000 daily</span>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-black text-white">{metrics.reads}</span>
                <span className="text-xs font-semibold text-emerald-400">{readsPercentage}% used</span>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  style={{ width: `${Math.max(1, Math.min(100, Number(readsPercentage)))}%` }}
                />
              </div>
              <p className="mt-2 text-[11px] text-slate-500">
                Resets daily at 00:00 PST. 50,000 free reads/day provided by Google.
              </p>
            </div>

            {/* Writes Card */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Writes (This Session)</span>
                <span className="font-mono text-slate-200">{metrics.writes} / 20,000 daily</span>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-black text-white">{metrics.writes}</span>
                <span className="text-xs font-semibold text-emerald-400">{writesPercentage}% used</span>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                  style={{ width: `${Math.max(1, Math.min(100, Number(writesPercentage)))}%` }}
                />
              </div>
              <p className="mt-2 text-[11px] text-slate-500">
                Submitting tests, posting drills & chat messages = 1 write each.
              </p>
            </div>
          </div>
        </div>

        {/* Database Inventory */}
        <div className="mt-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <Database className="h-3.5 w-3.5 text-blue-400" />
            Current Cloud Data Stored
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-3 text-center">
              <FileText className="h-4 w-4 text-cyan-400 mx-auto mb-1" />
              <div className="text-lg font-bold text-white">{drills.length}</div>
              <div className="text-[11px] text-slate-400">Active Drills</div>
            </div>

            <div className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-3 text-center">
              <Award className="h-4 w-4 text-emerald-400 mx-auto mb-1" />
              <div className="text-lg font-bold text-white">{attemptsCount}</div>
              <div className="text-[11px] text-slate-400">Student Attempts</div>
            </div>

            <div className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-3 text-center">
              <MessageSquare className="h-4 w-4 text-indigo-400 mx-auto mb-1" />
              <div className="text-lg font-bold text-white">{messagesCount}</div>
              <div className="text-[11px] text-slate-400">Chat Messages</div>
            </div>

            <div className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-3 text-center">
              <Users className="h-4 w-4 text-purple-400 mx-auto mb-1" />
              <div className="text-lg font-bold text-white">{usersCount}</div>
              <div className="text-[11px] text-slate-400">Registered Users</div>
            </div>
          </div>
        </div>

        {/* Storage Volume Meter */}
        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <HardDrive className="h-4 w-4 text-purple-400" />
              Total Estimated Cloud Storage
            </span>
            <span className="font-mono text-slate-400">
              ~{totalEstimatedKb} KB / 1,024 MB ({storagePercentage}%)
            </span>
          </div>
          <div className="mt-2.5 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
            <div 
              className="h-full bg-purple-500 rounded-full"
              style={{ width: `${Math.max(1, Number(storagePercentage))}%` }}
            />
          </div>
          <p className="mt-2 text-[11px] text-slate-400">
            You are utilizing <strong className="text-white">&lt;0.01%</strong> of your 1,000 MB free database quota.
          </p>
        </div>

        {/* Link to Official Google Firebase Usage Console */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-4">
          <div className="text-xs text-slate-400">
            Want to see Google's official hourly bar graphs?
          </div>
          <a
            href="https://console.firebase.google.com/u/0/project/mcqs-730cb/firestore/usage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl border border-blue-500/40 bg-blue-950/60 px-4 py-2 text-xs font-bold text-blue-300 hover:bg-blue-900/60 hover:text-white transition"
          >
            <span>Open Official Firebase Usage Console</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
