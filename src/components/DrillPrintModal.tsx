import React, { useState } from 'react';
import { Drill } from '../types';
import { LatexRenderer } from '../utils/latexRenderer';
import { downloadDrillPdf, downloadDrillHtmlFile, downloadDrillTextFile } from '../utils/drillExporter';
import { 
  Printer, 
  X, 
  Columns, 
  AlignLeft, 
  CheckSquare, 
  FileText, 
  Layers,
  Eye,
  BookOpen,
  Download,
  CheckCircle2,
  FileDown,
  Loader2
} from 'lucide-react';

interface DrillPrintModalProps {
  drill: Drill;
  onClose: () => void;
}

export const DrillPrintModal: React.FC<DrillPrintModalProps> = ({ drill, onClose }) => {
  // Printing & Export options
  const [columns, setColumns] = useState<'2-col' | '1-col'>('2-col');
  const [density, setDensity] = useState<'compact' | 'normal'>('compact');
  const [viewSection, setViewSection] = useState<'both' | 'paper' | 'answers'>('both');
  const [includeExplanations, setIncludeExplanations] = useState<boolean>(true);
  const [includeStudentBlanks, setIncludeStudentBlanks] = useState<boolean>(true);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);
  const [pdfProgress, setPdfProgress] = useState<string>('');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    setPdfProgress('Generating PDF document...');
    try {
      await downloadDrillPdf(
        drill,
        {
          columns,
          density,
          viewSection,
          includeExplanations,
          includeStudentBlanks
        },
        (status) => setPdfProgress(status)
      );
      setDownloadSuccess('PDF downloaded successfully!');
      setTimeout(() => setDownloadSuccess(null), 3500);
    } catch (err: any) {
      console.error('PDF generation error:', err);
      setDownloadSuccess('Error generating PDF. Please try again.');
      setTimeout(() => setDownloadSuccess(null), 3500);
    } finally {
      setIsGeneratingPdf(false);
      setPdfProgress('');
    }
  };

  const handleDownloadHtml = () => {
    downloadDrillHtmlFile(drill, {
      columns,
      density,
      viewSection,
      includeExplanations,
      includeStudentBlanks
    });
    setDownloadSuccess('Downloaded .html paper!');
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  const handleDownloadText = () => {
    downloadDrillTextFile(drill);
    setDownloadSuccess('Downloaded .txt paper!');
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  const handleDirectPrint = () => {
    window.print();
  };

  const subjectTitle = drill.subject.toUpperCase();
  const totalQuestions = drill.questions.length;
  const totalMarks = drill.totalMarks || totalQuestions;
  const timeAllowed = Math.round(totalQuestions * 1.2); // ~1.2 mins per MCQ

  const showQuestionPaper = viewSection === 'both' || viewSection === 'paper';
  const showAnswerKey = viewSection === 'both' || viewSection === 'answers';

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-950/95 backdrop-blur-md overflow-hidden">
      {/* ======================= CONTROL TOOLBAR (HIDDEN IN PRINT) ======================= */}
      <div className="no-print flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-900/95 px-4 py-3 sm:px-6 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/20">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span>Export &amp; Download PDF</span>
              <span className="rounded-md border border-cyan-500/30 bg-cyan-950/60 px-2 py-0.5 text-[11px] font-semibold text-cyan-300">
                FBISE Format
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              {drill.title} • {drill.questions.length} MCQs
            </p>
          </div>
        </div>

        {/* Options controls */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Section Selector: Full Exam vs Paper Only vs Answers Only */}
          <div className="flex items-center rounded-lg border border-slate-800 bg-slate-950 p-1 text-xs">
            <button
              onClick={() => setViewSection('both')}
              className={`rounded-md px-2.5 py-1 font-semibold transition cursor-pointer ${
                viewSection === 'both' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Question Paper + Detachable Answer Key"
            >
              Paper + Key
            </button>
            <button
              onClick={() => setViewSection('paper')}
              className={`rounded-md px-2.5 py-1 font-semibold transition cursor-pointer ${
                viewSection === 'paper' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Question Paper Only (for students)"
            >
              Paper Only
            </button>
            <button
              onClick={() => setViewSection('answers')}
              className={`rounded-md px-2.5 py-1 font-semibold transition cursor-pointer ${
                viewSection === 'answers' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Answer Key Only (for teachers/scoring)"
            >
              Key Only
            </button>
          </div>

          {/* Layout Column Toggle */}
          {showQuestionPaper && (
            <div className="flex items-center rounded-lg border border-slate-800 bg-slate-950 p-1 text-xs">
              <button
                onClick={() => setColumns('2-col')}
                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium transition cursor-pointer ${
                  columns === '2-col' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                }`}
                title="2-column newspaper / board exam layout (saves paper)"
              >
                <Columns className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">2 Columns</span>
              </button>
              <button
                onClick={() => setColumns('1-col')}
                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium transition cursor-pointer ${
                  columns === '1-col' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                }`}
                title="1-column layout"
              >
                <AlignLeft className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">1 Column</span>
              </button>
            </div>
          )}

          {/* Density Toggle */}
          {showQuestionPaper && (
            <button
              onClick={() => setDensity(d => d === 'compact' ? 'normal' : 'compact')}
              className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                density === 'compact'
                  ? 'border-cyan-500/40 bg-cyan-950/60 text-cyan-300'
                  : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700'
              }`}
              title="Toggle board examination density"
            >
              <Layers className="h-3.5 w-3.5" />
              <span>{density === 'compact' ? 'Compact' : 'Relaxed'}</span>
            </button>
          )}

          {/* Explanations Toggle */}
          {showAnswerKey && (
            <button
              onClick={() => setIncludeExplanations(!includeExplanations)}
              className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                includeExplanations
                  ? 'border-purple-500/40 bg-purple-950/60 text-purple-300'
                  : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
              }`}
              title="Include detailed solution explanations in key"
            >
              <FileText className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Solutions</span>
            </button>
          )}

          {/* PRIMARY BUTTON: Download PDF */}
          <button
            onClick={handleDownloadPdf}
            disabled={isGeneratingPdf}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-red-500/25 transition hover:scale-105 hover:from-rose-500 hover:to-amber-500 disabled:opacity-60 cursor-pointer"
            title="Download formatted A4 PDF test paper to your device"
          >
            {isGeneratingPdf ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Download className="h-4 w-4" />
            )}
            <span>{isGeneratingPdf ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>

          {/* Secondary: Download HTML / Text */}
          <button
            onClick={handleDownloadHtml}
            className="hidden sm:flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-2.5 py-2 text-xs font-semibold text-slate-300 transition hover:bg-slate-700 hover:text-white cursor-pointer"
            title="Download standalone HTML test paper file"
          >
            <FileDown className="h-3.5 w-3.5" />
            <span>.html</span>
          </button>

          <button
            onClick={handleDownloadText}
            className="hidden sm:flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-2.5 py-2 text-xs font-semibold text-slate-300 transition hover:bg-slate-700 hover:text-white cursor-pointer"
            title="Download raw questions & answers as a .txt file"
          >
            <FileDown className="h-3.5 w-3.5" />
            <span>.txt</span>
          </button>

          {/* Direct Print fallback button */}
          <button
            onClick={handleDirectPrint}
            className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-2.5 py-2 text-xs font-semibold text-slate-300 transition hover:bg-slate-700 hover:text-white cursor-pointer"
            title="Open browser print dialog"
          >
            <Printer className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Print</span>
          </button>

          {/* Close Modal */}
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-400 transition hover:bg-slate-800 hover:text-white cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Generating Progress Toast */}
      {isGeneratingPdf && pdfProgress && (
        <div className="fixed top-18 right-6 z-50 flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-slate-900/95 px-4 py-2.5 text-xs font-bold text-cyan-200 shadow-2xl backdrop-blur-md animate-fade-in">
          <Loader2 className="h-4 w-4 animate-spin text-cyan-400" />
          <span>{pdfProgress}</span>
        </div>
      )}

      {/* Download Toast Notification */}
      {downloadSuccess && (
        <div className="fixed top-18 right-6 z-50 flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/90 px-4 py-2.5 text-xs font-bold text-emerald-200 shadow-xl backdrop-blur-md animate-fade-in">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span>{downloadSuccess}</span>
        </div>
      )}

      {/* ======================= SCROLLABLE VIEWPORT ======================= */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950/60 print:bg-white print:p-0 print:overflow-visible">
        <div className="mx-auto max-w-[850px] space-y-8 print:space-y-0 print:max-w-none">
          
          {/* ================================================================
              SHEET 1: OFFICIAL QUESTION PAPER (WHITE A4 SHEET)
             ================================================================ */}
          {showQuestionPaper && (
            <div 
              id="kips-question-paper-sheet"
              className={`print-sheet w-full bg-white text-slate-950 rounded-xl shadow-2xl p-6 sm:p-10 border border-slate-300 transition-all print:border-none print:shadow-none print:rounded-none print:p-0 print:m-0 ${
                density === 'compact' ? 'text-[11.5px]' : 'text-[13px]'
              }`}
              style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif' }}
            >
              {/* Paper Header */}
              <div className="border-b-2 border-slate-900 pb-3 mb-4">
                <div className="text-center">
                  <h1 className="font-black text-xl sm:text-2xl tracking-tight text-slate-950 uppercase">
                    KIPS COLLEGE &amp; PREP NETWORK
                  </h1>
                  <div className="text-xs sm:text-sm font-bold tracking-widest text-slate-700 uppercase mt-0.5">
                    FEDERAL BOARD (FBISE) ANNUAL TEST SERIES • HSSC-I
                  </div>
                  <div className="mt-1 font-extrabold text-sm sm:text-base text-cyan-900 uppercase tracking-wide">
                    SUBJECT: {subjectTitle} • {drill.title.toUpperCase()}
                  </div>
                </div>

                {/* Test Metadata Grid */}
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-semibold bg-slate-100 p-2.5 rounded border border-slate-300">
                  <div>
                    <span className="text-slate-500 uppercase">Chapter:</span>{' '}
                    <span className="text-slate-900 font-bold">{drill.chapter}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase">Time Allowed:</span>{' '}
                    <span className="text-slate-900 font-bold">{timeAllowed} Minutes</span>
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase">Total Marks:</span>{' '}
                    <span className="text-slate-900 font-bold">{totalMarks}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase">Drill:</span>{' '}
                    <span className="text-slate-900 font-bold">Day #{drill.dayNumber} ({drill.questions.length} MCQs)</span>
                  </div>
                </div>

                {/* Student Blanks */}
                {includeStudentBlanks && (
                  <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] border border-slate-300 p-2 rounded bg-white">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-slate-800 shrink-0">Roll No:</span>
                      <div className="border-b border-dotted border-slate-600 flex-1 h-3.5"></div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-slate-800 shrink-0">Student Name:</span>
                      <div className="border-b border-dotted border-slate-600 flex-1 h-3.5"></div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-slate-800 shrink-0">Date / Section:</span>
                      <div className="border-b border-dotted border-slate-600 flex-1 h-3.5"></div>
                    </div>
                  </div>
                )}

                {/* Instructions Notice */}
                <div className="mt-2 text-[10px] text-slate-600 leading-snug">
                  <strong>Instructions:</strong> Each question below is followed by four possible options (A, B, C, D). Choose the correct answer and fill the corresponding bubble on your answer sheet. No negative marking.
                </div>
              </div>

              {/* MCQs Section */}
              <div className={columns === '2-col' ? 'exam-columns-2' : 'space-y-4'}>
                {drill.questions.map((q, idx) => (
                  <div 
                    key={q.id} 
                    className="mcq-question-unit mb-3 pb-2.5 border-b border-slate-200 last:border-b-0 break-inside-avoid"
                  >
                    {/* Question Statement */}
                    <div className="flex items-start gap-1 leading-snug">
                      <span className="font-black text-slate-950 shrink-0">
                        Q{idx + 1}.
                      </span>
                      <div className="font-semibold text-slate-900 flex-1 leading-snug">
                        <LatexRenderer content={q.question} inline color="text-slate-950 font-bold" />
                      </div>
                    </div>

                    {/* Options Grid: Clean inline bubbles */}
                    <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1 pl-3.5 text-slate-900">
                      {(['A', 'B', 'C', 'D'] as const).map((key) => (
                        <div key={key} className="flex items-start gap-1.5 leading-tight">
                          <span className="font-bold text-slate-900 shrink-0">
                            ({key})
                          </span>
                          <span className="text-slate-400 select-none text-[10px]">○</span>
                          <div className="text-slate-900 flex-1">
                            <LatexRenderer content={q.options[key]} inline color="text-slate-950 font-bold" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Question Paper Footer */}
              <div className="mt-6 pt-3 border-t border-slate-300 text-center text-[10px] text-slate-500 flex items-center justify-between">
                <span>KIPS Academy FBISE Islamabad • Entry Test Series</span>
                <span>End of Question Paper</span>
              </div>
            </div>
          )}

          {/* ================================================================
              SHEET 2: DETACHABLE ANSWER KEY & DETAILED SOLUTIONS
             ================================================================ */}
          {showAnswerKey && (
            <div 
              id="kips-answer-key-sheet"
              className={`print-sheet w-full bg-white text-slate-950 rounded-xl shadow-2xl p-6 sm:p-10 border border-slate-300 transition-all print:border-none print:shadow-none print:rounded-none print:p-0 print:m-0 print:break-before-page ${
                density === 'compact' ? 'text-[11.5px]' : 'text-[13px]'
              }`}
              style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif' }}
            >
              {/* Answer Key Header */}
              <div className="border-b-2 border-slate-900 pb-3 mb-4">
                <div className="text-center">
                  <h2 className="font-black text-lg sm:text-xl tracking-tight text-slate-950 uppercase">
                    ANSWER KEY &amp; STEP-BY-STEP SOLUTIONS
                  </h2>
                  <div className="text-xs font-bold tracking-widest text-slate-700 uppercase mt-0.5">
                    {drill.title.toUpperCase()} • CHAPTER: {drill.chapter.toUpperCase()}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-1">
                    Subject: {subjectTitle} • Total Questions: {drill.questions.length} • Maximum Marks: {totalMarks}
                  </div>
                </div>
              </div>

              {/* Compact 10-Column Answer Grid */}
              <div className="mb-6">
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-2.5">
                  Answer Key Grid:
                </h3>
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 text-center font-bold text-xs">
                  {drill.questions.map((q, idx) => (
                    <div key={q.id} className="border border-slate-300 rounded p-1 bg-slate-50">
                      <div className="text-[9px] text-slate-500 font-semibold">Q{idx + 1}</div>
                      <div className="text-sm font-black text-slate-950">{q.correctAnswer}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Explanations Section */}
              {includeExplanations && (
                <div className="mt-6">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-3">
                    Detailed Explanations &amp; Solutions:
                  </h3>
                  <div className="space-y-2.5">
                    {drill.questions.map((q, idx) => (
                      <div 
                        key={q.id} 
                        className="text-[11px] p-2.5 rounded bg-slate-50 border border-slate-200 break-inside-avoid"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-black text-slate-950">Q{idx + 1}.</span>
                          <span className="rounded bg-emerald-100 text-emerald-900 border border-emerald-300 px-1.5 py-0.2 text-[10px] font-bold">
                            Correct: ({q.correctAnswer})
                          </span>
                        </div>
                        <div className="text-slate-800 leading-relaxed pl-1">
                          <LatexRenderer content={q.explanation || 'Refer to textbook concept definition.'} inline color="text-slate-900 font-medium" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Answer Key Footer */}
              <div className="mt-8 pt-3 border-t border-slate-300 text-center text-[10px] text-slate-500 flex items-center justify-between">
                <span>KIPS Academy • Answer Key &amp; Solutions Detachable Sheet</span>
                <span>End of Solutions</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Embedded CSS for flawless Print / PDF rendering */}
      <style>{`
        @media print {
          /* Hide all app navigation, dark backdrops, and modal buttons */
          body * {
            visibility: hidden;
          }
          .no-print, nav, header, aside, button {
            display: none !important;
          }

          /* Render the white print sheets exclusively */
          .print-sheet, .print-sheet * {
            visibility: visible;
          }
          .print-sheet {
            position: relative !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 auto !important;
            padding: 8mm 10mm !important;
            box-shadow: none !important;
            border: none !important;
            background: #ffffff !important;
            color: #000000 !important;
          }
          .print:break-before-page,
          #kips-answer-key-sheet {
            page-break-before: always !important;
            break-before: page !important;
          }
          .mcq-question-unit {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          @page {
            size: A4;
            margin: 8mm 10mm;
          }
        }

        /* 2-Column Board Examination Styling with Vertical Separator Rule */
        .exam-columns-2 {
          column-count: 2;
          column-gap: 2rem;
          column-rule: 1px solid #cbd5e1;
        }
        @media (max-width: 640px) {
          .exam-columns-2 {
            column-count: 1;
            column-rule: none;
          }
        }
      `}</style>
    </div>
  );
};
