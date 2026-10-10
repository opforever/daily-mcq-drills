import React, { useState, useMemo, useEffect } from 'react';
import { Subject, User, SubjectSyllabus, SyllabusUnit, SyllabusDayItem } from '../types';
import { parseSyllabusInput, getSampleSyllabusJson } from '../utils/syllabusParser';
import { saveSyllabusToCloud, deleteSyllabusFromCloud } from '../utils/firebase';
import { setStoredSyllabus } from '../utils/storage';
import { exportSyllabusToPdf } from '../utils/syllabusExporter';
import { 
  CalendarRange, 
  BookOpen, 
  X, 
  Upload, 
  Sparkles, 
  CheckCircle2, 
  Circle, 
  Search, 
  Trash2, 
  Clipboard, 
  FileCode2, 
  HelpCircle, 
  Cpu, 
  Calculator, 
  Clock, 
  Layers, 
  Calendar, 
  ChevronRight, 
  ChevronDown, 
  Printer, 
  CheckSquare, 
  AlertCircle,
  Play,
  RotateCcw,
  Download,
  FileText
} from 'lucide-react';

interface SyllabusModalProps {
  subject: Subject;
  currentUser: User | null;
  syllabus: SubjectSyllabus | null;
  onSyllabusUpdated: (updated: SubjectSyllabus | null) => void;
  onClose: () => void;
  onSelectDayDrill?: (dayNumber: number) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  subject,
  currentUser,
  syllabus,
  onSyllabusUpdated,
  onClose,
  onSelectDayDrill
}) => {
  const isAdmin = currentUser?.role === 'admin';
  const subjectName = subject === 'computer' ? 'Computer Science' : subject === 'maths' ? 'Mathematics' : subject;
  const SubjectIcon = subject === 'computer' ? Cpu : Calculator;
  const themeColor = subject === 'computer' ? 'indigo' : 'rose';

  // Mode: 'view' | 'editor'
  const [viewMode, setViewMode] = useState<'view' | 'editor'>(syllabus ? 'view' : (isAdmin ? 'editor' : 'view'));
  
  // Editor state
  const [rawInput, setRawInput] = useState<string>('');
  const [validationError, setValidationError] = useState<string | null>(null);
  const [parsedPreview, setParsedPreview] = useState<SubjectSyllabus | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // View & Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUnitFilter, setSelectedUnitFilter] = useState<number | 'all'>('all');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const [expandedUnits, setExpandedUnits] = useState<Record<number, boolean>>({});

  // Local student completion tracking
  const [completedDaysMap, setCompletedDaysMap] = useState<Record<number, boolean>>(() => {
    try {
      const cleanU = currentUser?.username || 'guest';
      const raw = localStorage.getItem(`kips_syllabus_done_${cleanU}_${subject}`);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  const toggleDayCompletion = (dayNum: number) => {
    setCompletedDaysMap(prev => {
      const next = { ...prev, [dayNum]: !prev[dayNum] };
      try {
        const cleanU = currentUser?.username || 'guest';
        localStorage.setItem(`kips_syllabus_done_${cleanU}_${subject}`, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // Expand all units initially
  useEffect(() => {
    if (syllabus?.units) {
      const map: Record<number, boolean> = {};
      syllabus.units.forEach(u => {
        map[u.unitNumber] = true;
      });
      setExpandedUnits(map);
    }
  }, [syllabus]);

  const toggleUnitAccordion = (uNum: number) => {
    setExpandedUnits(prev => ({ ...prev, [uNum]: !prev[uNum] }));
  };

  // Live parser for editor
  const handleInputChange = (text: string) => {
    setRawInput(text);
    if (!text.trim()) {
      setValidationError(null);
      setParsedPreview(null);
      return;
    }
    const res = parseSyllabusInput(text, subject, currentUser?.username || 'admin');
    if (res.success && res.syllabus) {
      setValidationError(null);
      setParsedPreview(res.syllabus);
    } else {
      setValidationError(res.error || 'Invalid format');
      setParsedPreview(null);
    }
  };

  const handleLoadSample = () => {
    const sample = getSampleSyllabusJson(subject);
    handleInputChange(sample);
  };

  const handlePasteClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        handleInputChange(text);
      }
    } catch {
      // clipboard access denied, paste manually
    }
  };

  const handleSaveSyllabus = async () => {
    if (!parsedPreview || (parsedPreview.allDays || []).length === 0) {
      setValidationError('Please paste or load a valid syllabus before saving.');
      return;
    }

    setIsSaving(true);
    setValidationError(null);
    try {
      setStoredSyllabus(subject, parsedPreview);
      await saveSyllabusToCloud(parsedPreview);
      onSyllabusUpdated(parsedPreview);
      setViewMode('view');
      setToastMessage('Syllabus roadmap saved & synced across all devices!');
      setTimeout(() => setToastMessage(null), 3500);
    } catch (err: any) {
      console.error('Failed to save syllabus to cloud:', err);
      // Still show in local view since local storage succeeded
      onSyllabusUpdated(parsedPreview);
      setViewMode('view');
      if (err?.code === 'permission-denied' || String(err?.message || '').includes('permission')) {
        setToastMessage('Saved locally! Note: Add kips_syllabus to Firestore security rules to sync across other devices.');
      } else {
        setToastMessage('Saved locally in browser.');
      }
      setTimeout(() => setToastMessage(null), 4000);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteSyllabus = async () => {
    if (!window.confirm(`Are you sure you want to delete the ${subjectName} syllabus roadmap?`)) return;
    setIsSaving(true);
    try {
      setStoredSyllabus(subject, null);
      await deleteSyllabusFromCloud(subject);
      onSyllabusUpdated(null);
      setParsedPreview(null);
      setRawInput('');
      setViewMode('editor');
      setToastMessage('Syllabus deleted.');
      setTimeout(() => setToastMessage(null), 3000);
    } catch (err) {
      console.error('Error deleting syllabus:', err);
      onSyllabusUpdated(null);
      setParsedPreview(null);
      setRawInput('');
      setViewMode('editor');
    } finally {
      setIsSaving(false);
    }
  };

  // Filtered days and stats
  const allDaysList = useMemo(() => syllabus?.allDays || [], [syllabus]);
  
  const completedCount = useMemo(() => {
    return (allDaysList || []).filter(d => d && completedDaysMap[d.dayNumber]).length;
  }, [allDaysList, completedDaysMap]);

  const progressPercent = (allDaysList || []).length > 0 
    ? Math.round((completedCount / (allDaysList || []).length) * 100) 
    : 0;

  const filteredDays = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return (allDaysList || []).filter(d => {
      if (!d) return false;
      // Unit filter
      if (selectedUnitFilter !== 'all' && d.unitNumber !== selectedUnitFilter) {
        return false;
      }
      // Status filter
      const isDone = Boolean(completedDaysMap[d.dayNumber]);
      if (selectedStatusFilter === 'completed' && !isDone) return false;
      if (selectedStatusFilter === 'pending' && isDone) return false;

      // Search query
      if (q) {
        const matchTopic = (d.topic || '').toLowerCase().includes(q);
        const matchDate = (d.date || '').toLowerCase().includes(q);
        const matchUnit = (d.unitTitle || '').toLowerCase().includes(q);
        const matchFocus = (d.coreFocus || '').toLowerCase().includes(q);
        const matchDay = `day ${d.dayNumber}`.includes(q);
        if (!matchTopic && !matchDate && !matchUnit && !matchFocus && !matchDay) return false;
      }

      return true;
    });
  }, [allDaysList, selectedUnitFilter, selectedStatusFilter, searchQuery, completedDaysMap]);

  const handleDownloadPdf = () => {
    if (!syllabus) return;
    try {
      exportSyllabusToPdf(syllabus, completedDaysMap);
      setToastMessage('Official multi-page PDF downloaded successfully!');
      setTimeout(() => setToastMessage(null), 3500);
    } catch (err) {
      console.error('Failed to export syllabus PDF:', err);
      setToastMessage('Could not generate PDF. Please try again.');
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="syllabus-modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-2.5 sm:p-5 overflow-y-auto">
      {/* Dynamic Print Stylesheet to eliminate 1-page cutoff in browser print */}
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 10mm 12mm 10mm 12mm;
          }
          body {
            background: #ffffff !important;
            color: #000000 !important;
          }
          .no-print {
            display: none !important;
          }
          .syllabus-modal-overlay {
            position: static !important;
            inset: auto !important;
            display: block !important;
            background: transparent !important;
            backdrop-filter: none !important;
            padding: 0 !important;
            overflow: visible !important;
            z-index: auto !important;
          }
          .syllabus-modal-container {
            max-height: none !important;
            max-width: 100% !important;
            overflow: visible !important;
            border: none !important;
            box-shadow: none !important;
            background: transparent !important;
            display: block !important;
          }
          .syllabus-scroll-area {
            overflow: visible !important;
            max-height: none !important;
            height: auto !important;
            display: block !important;
          }
          .syllabus-unit-section {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            margin-bottom: 16px !important;
          }
          .syllabus-day-card {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
        }
      `}</style>

      <div className="syllabus-modal-container flex flex-col w-full max-w-5xl max-h-[94vh] rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-500/10 overflow-hidden">
        
        {/* ======================= HEADER ======================= */}
        <div className="no-print shrink-0 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-950/90 px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-3">
            <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr ${
              subject === 'computer' 
                ? 'from-indigo-600 via-purple-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 ring-1 ring-indigo-400/40' 
                : 'from-rose-600 via-pink-600 to-amber-500 text-white shadow-lg shadow-rose-500/25 ring-1 ring-rose-400/40'
            }`}>
              <SubjectIcon className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-extrabold text-white flex items-center gap-2">
                  <span>{syllabus?.title || `FBISE ${subjectName} Study Roadmap`}</span>
                </h2>
                <span className={`rounded-md border px-2 py-0.5 text-[10px] font-bold ${
                  subject === 'computer'
                    ? 'border-indigo-500/30 bg-indigo-950/60 text-indigo-300'
                    : 'border-rose-500/30 bg-rose-950/60 text-rose-300'
                }`}>
                  102-Day Plan
                </span>
              </div>
                <p className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                <span>{syllabus?.startDate || 'Oct 5, 2026'} → {syllabus?.endDate || 'Jan 30, 2027'}</span>
                <span>•</span>
                <span>{(allDaysList || []).length} Total Study Days</span>
                {isAdmin && <span className="text-cyan-400 font-semibold">• Admin Mode</span>}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View vs Editor Toggle (Admin only) */}
            {isAdmin && (
              <div className="flex items-center rounded-xl border border-slate-800 bg-slate-950 p-1 text-xs">
                <button
                  onClick={() => setViewMode('view')}
                  className={`rounded-lg px-3 py-1.5 font-bold transition cursor-pointer ${
                    viewMode === 'view'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Roadmap View
                </button>
                <button
                  onClick={() => {
                    setViewMode('editor');
                    if (!rawInput && syllabus) {
                      setRawInput(JSON.stringify(syllabus, null, 2));
                      setParsedPreview(syllabus);
                    }
                  }}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-bold transition cursor-pointer ${
                    viewMode === 'editor'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Upload className="h-3.5 w-3.5" />
                  <span>Upload JSON</span>
                </button>
              </div>
            )}

            {/* Direct Download PDF Button */}
            {syllabus && viewMode === 'view' && (
              <button
                onClick={handleDownloadPdf}
                className="flex items-center gap-1.5 rounded-xl border border-cyan-500/40 bg-gradient-to-r from-cyan-600 to-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-md transition hover:from-cyan-500 hover:to-blue-500 hover:scale-[1.02] cursor-pointer"
                title="Download complete multi-page PDF document"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download PDF</span>
              </button>
            )}

            {/* Direct Print Button */}
            {syllabus && viewMode === 'view' && (
              <button
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition cursor-pointer"
                title="Print full syllabus schedule"
              >
                <Printer className="h-3.5 w-3.5" />
                <span>Print</span>
              </button>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition hover:bg-slate-800 hover:text-white cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="no-print mx-4 mt-3 rounded-xl border border-emerald-500/40 bg-emerald-950/80 p-2.5 text-xs text-emerald-200 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* ======================= BODY ======================= */}
        {viewMode === 'editor' ? (
          /* =========================================================================
           * ADMIN SYLLABUS JSON UPLOADER & PARSER VIEW
           * ========================================================================= */
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            <div className="rounded-2xl border border-purple-500/30 bg-purple-950/20 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <FileCode2 className="h-5 w-5 text-purple-400 shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Upload 102-Day Syllabus Schedule (JSON / Text)</h3>
                    <p className="text-xs text-purple-200/80 mt-0.5">
                      Paste the complete day-by-day FBISE schedule in JSON format. It will be parsed and synced to Firebase instantly.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleLoadSample}
                    className="flex items-center gap-1.5 rounded-lg border border-purple-500/40 bg-purple-900/40 px-2.5 py-1 text-xs font-semibold text-purple-300 hover:bg-purple-800/60 hover:text-white transition cursor-pointer"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Load Sample</span>
                  </button>
                  <button
                    type="button"
                    onClick={handlePasteClipboard}
                    className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition cursor-pointer"
                  >
                    <Clipboard className="h-3.5 w-3.5" />
                    <span>Paste</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {validationError && (
              <div className="flex items-center gap-2 rounded-xl border border-rose-500/40 bg-rose-950/60 p-3 text-xs text-rose-300">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* JSON Input Area */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-300">
                  JSON / Roadmap Schedule Input
                </label>
                <span className="text-[11px] text-slate-500">
                  {rawInput.length} chars • {parsedPreview ? `${(parsedPreview.allDays || []).length} days parsed` : 'No days parsed'}
                </span>
              </div>
              <textarea
                value={rawInput}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={`Paste your ${subjectName} syllabus JSON or day-by-day text roadmap here...\n\nExample:\n{\n  "title": "FBISE Computer Science 1st Year Roadmap",\n  "totalStudyDays": 102,\n  "units": [\n    {\n      "unitNumber": 1,\n      "unitTitle": "Unit 1: Computer Systems (18 Days)",\n      "coreFocus": "Data representation, Logic Gates, SDLC",\n      "days": [\n        { "dayNumber": 1, "date": "Oct 5 (Mon)", "topic": "1.1 Data Representation (ASCII, Binary)" }\n      ]\n    }\n  ]\n}`}
                rows={14}
                className="w-full font-mono text-xs rounded-2xl border border-slate-800 bg-slate-950 p-4 text-slate-200 placeholder-slate-600 focus:border-cyan-500 focus:outline-none"
              />
            </div>

            {/* Live Parsing Preview Card */}
            {parsedPreview && (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Valid Syllabus Roadmap Detected</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="rounded-md bg-emerald-900/60 px-2 py-0.5 font-semibold text-emerald-300 border border-emerald-500/30">
                      {(parsedPreview.units || []).length} Units
                    </span>
                    <span className="rounded-md bg-cyan-900/60 px-2 py-0.5 font-semibold text-cyan-300 border border-cyan-500/30">
                      {(parsedPreview.allDays || []).length} Total Days
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
                  {(parsedPreview.units || []).map(u => (
                    <div key={u.unitNumber} className="rounded-xl border border-slate-800 bg-slate-950/70 p-2.5">
                      <div className="font-bold text-white flex items-center justify-between">
                        <span>{u.unitTitle}</span>
                        <span className="text-[10px] text-cyan-400">{(u.days || []).length} Days</span>
                      </div>
                      {u.coreFocus && (
                        <p className="text-[11px] text-slate-400 truncate mt-0.5">
                          {u.coreFocus}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-2">
              {syllabus ? (
                <button
                  type="button"
                  onClick={handleDeleteSyllabus}
                  disabled={isSaving}
                  className="flex items-center gap-1.5 rounded-xl border border-rose-500/40 bg-rose-950/40 px-3.5 py-2 text-xs font-semibold text-rose-300 hover:bg-rose-900/60 transition cursor-pointer"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  <span>Delete Syllabus</span>
                </button>
              ) : <div />}

              <div className="flex items-center gap-2">
                {syllabus && (
                  <button
                    type="button"
                    onClick={() => setViewMode('view')}
                    className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800 transition cursor-pointer"
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleSaveSyllabus}
                  disabled={isSaving || !parsedPreview}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2 text-xs font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:scale-105 disabled:opacity-50 cursor-pointer"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{isSaving ? 'Syncing to Cloud...' : 'Save & Publish Roadmap'}</span>
                </button>
              </div>
            </div>
          </div>
        ) : !syllabus || (syllabus.allDays || []).length === 0 ? (
          /* =========================================================================
           * EMPTY STATE (NO SYLLABUS YET)
           * ========================================================================= */
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-800 text-slate-400 ring-1 ring-slate-700">
              <CalendarRange className="h-8 w-8" />
            </div>
            <div className="max-w-md">
              <h3 className="text-base font-bold text-white">No Syllabus Roadmap Uploaded Yet</h3>
              <p className="text-xs text-slate-400 mt-1">
                {isAdmin
                  ? `You haven't uploaded the 102-day FBISE ${subjectName} study roadmap yet. You can upload the full schedule JSON in one click.`
                  : `Your instructor hasn't published the ${subjectName} study roadmap yet. Please check back soon.`}
              </p>
            </div>
            {isAdmin && (
              <button
                onClick={() => setViewMode('editor')}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:scale-105 cursor-pointer"
              >
                <Upload className="h-4 w-4" />
                <span>Upload JSON Roadmap</span>
              </button>
            )}
          </div>
        ) : (
          /* =========================================================================
           * INTERACTIVE SYLLABUS ROADMAP DISPLAY VIEW
           * ========================================================================= */
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Overview Stats & Progress Banner */}
            <div className="shrink-0 border-b border-slate-800/80 bg-slate-950/60 p-4 sm:px-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Progress Meter */}
                <div className="flex-1 min-w-[240px]">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-slate-300 flex items-center gap-1.5">
                      <CheckSquare className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Roadmap Progress</span>
                    </span>
                    <span className="font-bold text-white">
                      {completedCount} of {(allDaysList || []).length} Days Completed ({progressPercent}%)
                    </span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500 rounded-full"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Quick Unit Pill Counts */}
                <div className="flex items-center gap-2 text-xs">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-center">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Units</span>
                    <div className="font-extrabold text-white">{(syllabus.units || []).length}</div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-center">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Total Days</span>
                    <div className="font-extrabold text-cyan-400">{syllabus.totalStudyDays || (allDaysList || []).length}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="no-print shrink-0 flex flex-wrap items-center justify-between gap-2.5 border-b border-slate-800/80 bg-slate-900/60 p-3 sm:px-6">
              {/* Unit Filter Selector */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar max-w-full pb-1 sm:pb-0">
                <button
                  onClick={() => setSelectedUnitFilter('all')}
                  className={`rounded-lg px-2.5 py-1 text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                    selectedUnitFilter === 'all'
                      ? 'bg-cyan-600 text-white shadow-sm'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  All Units ({(allDaysList || []).length})
                </button>
                {(syllabus.units || []).map(u => (
                  <button
                    key={u.unitNumber}
                    onClick={() => setSelectedUnitFilter(u.unitNumber)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                      selectedUnitFilter === u.unitNumber
                        ? 'bg-cyan-600 text-white shadow-sm'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    Unit {u.unitNumber} ({(u.days || []).length})
                  </button>
                ))}
              </div>

              {/* Status & Search Controls */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="flex items-center rounded-lg border border-slate-800 bg-slate-950 p-0.5 text-xs">
                  <button
                    onClick={() => setSelectedStatusFilter('all')}
                    className={`rounded px-2 py-1 font-semibold transition cursor-pointer ${
                      selectedStatusFilter === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSelectedStatusFilter('pending')}
                    className={`rounded px-2 py-1 font-semibold transition cursor-pointer ${
                      selectedStatusFilter === 'pending' ? 'bg-amber-600/80 text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => setSelectedStatusFilter('completed')}
                    className={`rounded px-2 py-1 font-semibold transition cursor-pointer ${
                      selectedStatusFilter === 'completed' ? 'bg-emerald-600/80 text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Done
                  </button>
                </div>

                <div className="relative flex-1 sm:w-56">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search day or topic..."
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Schedule List Content */}
            <div className="syllabus-scroll-area flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              {(filteredDays || []).length === 0 ? (
                <div className="py-12 text-center text-slate-500 text-xs">
                  No days found matching your search and filter criteria.
                </div>
              ) : selectedUnitFilter === 'all' && !searchQuery && selectedStatusFilter === 'all' ? (
                /* Grouped by Unit View */
                (syllabus.units || []).map(unit => {
                  const isExpanded = expandedUnits[unit.unitNumber] !== false;
                  const unitDays = unit.days || [];
                  const unitCompletedCount = unitDays.filter(d => d && completedDaysMap[d.dayNumber]).length;
                  const unitPercent = unitDays.length > 0 ? Math.round((unitCompletedCount / unitDays.length) * 100) : 0;

                  return (
                    <div key={unit.unitNumber} className="syllabus-unit-section rounded-2xl border border-slate-800 bg-slate-950/40 overflow-hidden shadow-sm">
                      {/* Unit Header Bar */}
                      <button
                        type="button"
                        onClick={() => toggleUnitAccordion(unit.unitNumber)}
                        className="w-full flex items-center justify-between p-4 bg-slate-900/80 hover:bg-slate-900 transition border-b border-slate-800/80 cursor-pointer text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-bold text-xs shrink-0">
                            U{unit.unitNumber}
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-white flex items-center gap-2">
                              <span>{unit.unitTitle}</span>
                              <span className="text-xs font-normal text-slate-400">
                                ({unitDays.length} Days)
                              </span>
                            </h3>
                            {unit.coreFocus && (
                              <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                                <span className="font-semibold text-slate-300">Core Focus:</span> {unit.coreFocus}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="hidden sm:flex items-center gap-2 text-xs">
                            <span className="text-slate-400">{unitCompletedCount}/{unitDays.length} Done</span>
                            <div className="w-16 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                              <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${unitPercent}%` }} />
                            </div>
                          </div>
                          {isExpanded ? (
                            <ChevronDown className="h-4 w-4 text-slate-400" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-slate-400" />
                          )}
                        </div>
                      </button>

                      {/* Unit Days Grid */}
                      {isExpanded && (
                        <div className="p-3 sm:p-4 grid grid-cols-1 md:grid-cols-2 gap-2.5">
                          {unitDays.map(day => renderDayCard(day))}
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                /* Flat Filtered Days Grid */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {(filteredDays || []).map(day => renderDayCard(day))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  function renderDayCard(day: SyllabusDayItem) {
    const isDone = Boolean(completedDaysMap[day.dayNumber]);

    return (
      <div
        key={day.dayNumber}
        className={`syllabus-day-card group relative flex items-start gap-3 rounded-2xl border p-3.5 transition-all ${
          isDone
            ? 'border-emerald-500/30 bg-emerald-950/20 shadow-sm'
            : 'border-slate-800 bg-slate-900/80 hover:border-slate-700 hover:bg-slate-900'
        }`}
      >
        {/* Toggle Complete Checkbox */}
        <button
          type="button"
          onClick={() => toggleDayCompletion(day.dayNumber)}
          className="mt-0.5 shrink-0 text-slate-400 hover:text-emerald-400 transition cursor-pointer"
          title={isDone ? 'Mark as incomplete' : 'Mark day topic as completed'}
        >
          {isDone ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-400 fill-emerald-400/20" />
          ) : (
            <Circle className="h-5 w-5 text-slate-600 group-hover:text-slate-400" />
          )}
        </button>

        {/* Day Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`rounded-md px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide border ${
              isDone
                ? 'border-emerald-500/40 bg-emerald-900/40 text-emerald-300'
                : 'border-cyan-500/30 bg-cyan-950/60 text-cyan-300'
            }`}>
              Day {day.dayNumber}
            </span>
            <span className="text-xs font-semibold text-slate-400">
              {day.date}
            </span>
            {day.unitTitle && (
              <span className="hidden sm:inline-block text-[10px] text-slate-500 truncate max-w-[140px]">
                • {day.unitTitle}
              </span>
            )}
          </div>

          <h4 className={`text-xs sm:text-sm font-bold leading-snug ${
            isDone ? 'text-slate-300 line-through decoration-slate-500' : 'text-white'
          }`}>
            {day.topic}
          </h4>

          {day.coreFocus && (
            <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
              {day.coreFocus}
            </p>
          )}
        </div>

        {/* Action Button: Jump to Drill Practice if callback provided */}
        {onSelectDayDrill && (
          <button
            type="button"
            onClick={() => {
              onSelectDayDrill(day.dayNumber);
              onClose();
            }}
            className="shrink-0 self-center rounded-xl border border-slate-700/80 bg-slate-800/80 p-2 text-slate-300 hover:border-cyan-500/50 hover:bg-cyan-950/40 hover:text-cyan-300 transition cursor-pointer"
            title={`Open Day ${day.dayNumber} practice drill`}
          >
            <Play className="h-3.5 w-3.5 fill-current" />
          </button>
        )}
      </div>
    );
  }
};
