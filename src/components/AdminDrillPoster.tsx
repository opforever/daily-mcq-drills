import React, { useState } from 'react';
import { Drill, Subject, MCQ } from '../types';
import { parseDailyDrillInput } from '../utils/parser';
import { LatexRenderer } from '../utils/latexRenderer';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Eye, 
  Save, 
  X, 
  Atom, 
  FlaskConical, 
  Dna, 
  Clipboard,
  FileCode2,
  HelpCircle
} from 'lucide-react';

interface AdminDrillPosterProps {
  initialSubject: Subject;
  existingDrills: Drill[];
  onSaveDrill: (drill: Drill) => void;
  onClose: () => void;
  drillToEdit?: Drill | null;
}

export const AdminDrillPoster: React.FC<AdminDrillPosterProps> = ({
  initialSubject,
  existingDrills,
  onSaveDrill,
  onClose,
  drillToEdit
}) => {
  const isEditing = Boolean(drillToEdit);
  const [subject, setSubject] = useState<Subject>(drillToEdit ? drillToEdit.subject : initialSubject);
  
  // Calculate next day and drill number
  const subjectDrills = existingDrills.filter(d => d.subject === subject);
  const highestDay = subjectDrills.reduce((max, d) => Math.max(max, d.dayNumber), 0);
  const nextDay = highestDay > 0 ? highestDay + 1 : 1;

  const [dayNumber, setDayNumber] = useState<number>(drillToEdit ? drillToEdit.dayNumber : nextDay);
  const [drillNumber, setDrillNumber] = useState<number>(drillToEdit ? drillToEdit.drillNumber : nextDay);
  const [title, setTitle] = useState<string>(drillToEdit ? drillToEdit.title : '');
  const [chapter, setChapter] = useState<string>(drillToEdit ? drillToEdit.chapter : '');
  const [rawInput, setRawInput] = useState<string>(
    drillToEdit
      ? JSON.stringify(
          {
            dayNumber: drillToEdit.dayNumber,
            drillNumber: drillToEdit.drillNumber,
            title: drillToEdit.title,
            chapter: drillToEdit.chapter,
            subject: drillToEdit.subject,
            questions: drillToEdit.questions
          },
          null,
          2
        )
      : ''
  );
  const [previewTab, setPreviewTab] = useState<'editor' | 'preview'>('editor');
  const [validationError, setValidationError] = useState<string | null>(null);
  const [parsedQuestions, setParsedQuestions] = useState<MCQ[]>(drillToEdit ? drillToEdit.questions : []);

  // Trigger parsing whenever input changes
  const handleInputChange = (text: string) => {
    setRawInput(text);
    if (!text.trim()) {
      setValidationError(null);
      setParsedQuestions([]);
      return;
    }

    const res = parseDailyDrillInput(text, subject);
    if (res.success && res.drillData) {
      setValidationError(null);
      setParsedQuestions(res.drillData.questions);
      if (res.drillData.title) setTitle(res.drillData.title);
      if (res.drillData.chapter) setChapter(res.drillData.chapter);
      if (res.drillData.dayNumber) setDayNumber(res.drillData.dayNumber);
      if (res.drillData.drillNumber) setDrillNumber(res.drillData.drillNumber);
      if (res.drillData.subject) setSubject(res.drillData.subject);
    } else {
      setValidationError(res.error || 'Invalid format');
      setParsedQuestions([]);
    }
  };

  const handlePasteClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        handleInputChange(text);
      }
    } catch {
      // clipboard access denied, user can paste normally
    }
  };

  const handleLoadSample = () => {
    let sampleQuestions: any[] = [];
    if (subject === 'physics') {
      sampleQuestions = [
        {
          id: `q-phy-1`,
          question: 'The relationship between linear velocity $\\vec{v}$ and angular velocity $\\vec{\\omega}$ for radius $r$ is:',
          options: {
            A: '$\\vec{v} = \\vec{r} \\times \\vec{\\omega}$',
            B: '$\\vec{v} = \\vec{\\omega} \\times \\vec{r}$',
            C: '$\\vec{v} = \\vec{\\omega} \\cdot \\vec{r}$',
            D: '$\\vec{v} = \\frac{\\vec{\\omega}}{\\vec{r}}$'
          },
          correctAnswer: 'B',
          explanation: 'Linear velocity is orthogonal to both $\\vec{\\omega}$ and $\\vec{r}$ given by $\\vec{v} = \\vec{\\omega} \\times \\vec{r}$ according to the right-hand screw rule.'
        },
        {
          id: `q-phy-2`,
          question: 'When an object rotates with uniform speed, its tangential acceleration is:',
          options: {
            A: '$r\\omega^2$',
            B: '$\\frac{v^2}{r}$',
            C: 'Zero',
            D: 'Infinite'
          },
          correctAnswer: 'C',
          explanation: 'Tangential acceleration is $a_t = r\\alpha$. In uniform circular rotation, angular acceleration $\\alpha = 0$, so $a_t = 0$.'
        }
      ];
    } else if (subject === 'chemistry') {
      sampleQuestions = [
        {
          id: `q-chm-1`,
          question: 'Which of the following molecules has a dipole moment of zero despite polar bonds?',
          options: {
            A: '$\\text{H}_2\\text{O}$',
            B: '$\\text{NH}_3$',
            C: '$\\text{CCl}_4$',
            D: '$\\text{SO}_2$'
          },
          correctAnswer: 'C',
          explanation: 'In $\\text{CCl}_4$, the tetrahedral geometry is symmetrical; individual $\\text{C}-\\text{Cl}$ bond dipoles cancel out completely ($\\mu = 0$).'
        },
        {
          id: `q-chm-2`,
          question: 'The hybridization of the central boron atom in boron trifluoride ($\\text{BF}_3$) is:',
          options: {
            A: '$sp$',
            B: '$sp^2$',
            C: '$sp^3$',
            D: '$dsp^2$'
          },
          correctAnswer: 'B',
          explanation: 'Boron forms 3 sigma bonds with no lone pairs (Steric Number = 3), yielding trigonal planar $sp^2$ hybridization.'
        }
      ];
    } else {
      sampleQuestions = [
        {
          id: `q-bio-1`,
          question: 'Nucleoproteins are primarily composed of nucleic acids complexed with:',
          options: {
            A: 'Acidic albumin proteins',
            B: 'Basic histone proteins',
            C: 'Branched glycogen',
            D: 'Fibrous keratins'
          },
          correctAnswer: 'B',
          explanation: 'According to FBISE Chapter 2, nucleoproteins are conjugated molecules composed of DNA/RNA complexed with basic proteins (such as histones and protamines).'
        },
        {
          id: `q-bio-2`,
          question: 'In mature tRNA, the amino acid always covalently attaches to which specific region?',
          options: {
            A: 'The anticodon loop',
            B: 'The D-loop',
            C: 'The $3\'$ CCA-OH terminus',
            D: 'The variable arm'
          },
          correctAnswer: 'C',
          explanation: 'The amino acid attaches via an ester linkage to the $3\'$-OH group of the conserved $5\'-CCA-3\'$ terminus on the tRNA acceptor arm.'
        }
      ];
    }

    const sample = {
      dayNumber: nextDay,
      drillNumber: nextDay,
      title: subject === 'physics' ? 'Rotational Dynamics & Angular Momentum' : subject === 'chemistry' ? 'VSEPR Theory & Dipole Moments' : 'Nucleic Acids & Conjugated Molecules',
      chapter: subject === 'physics' ? 'Chapter 5: Circular Motion' : subject === 'chemistry' ? 'Chapter 3: Chemical Bonding' : 'Chapter 2: Biological Molecules',
      subject: subject,
      questions: sampleQuestions
    };
    handleInputChange(JSON.stringify(sample, null, 2));
  };

  const handleSave = () => {
    if (parsedQuestions.length === 0) {
      setValidationError('Please paste valid MCQs before saving.');
      return;
    }
    if (!title.trim()) {
      setValidationError('Please enter a Title/Topic for this drill.');
      return;
    }

    const updatedDrill: Drill = {
      id: drillToEdit ? drillToEdit.id : `drill-${subject}-day${dayNumber}-${Date.now()}`,
      subject,
      dayNumber: Number(dayNumber) || (drillToEdit ? drillToEdit.dayNumber : nextDay),
      drillNumber: Number(drillNumber) || (drillToEdit ? drillToEdit.drillNumber : nextDay),
      title: title.trim(),
      chapter: chapter.trim() || 'General Topics',
      date: drillToEdit ? drillToEdit.date : new Date().toISOString().split('T')[0],
      totalMarks: parsedQuestions.length,
      questions: parsedQuestions,
      createdAt: drillToEdit ? drillToEdit.createdAt : Date.now()
    };

    onSaveDrill(updatedDrill);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-4 overflow-y-auto">
      <div className="relative my-4 w-full max-w-4xl rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-2xl sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white shadow-md">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white sm:text-xl">
                {isEditing ? `Edit Drill: Day ${drillToEdit?.dayNumber} • ${drillToEdit?.title}` : 'Post New Daily MCQ Drill'}
              </h2>
              <p className="text-xs text-slate-400">
                {isEditing
                  ? 'Update questions, correct options, or explanations — automatically syncs to Firebase Cloud'
                  : 'Paste JSON or formatted questions directly from Google AI Studio'}
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

        {/* Configuration Row */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-4">
          {/* Subject Switcher */}
          <div>
            <label className="text-xs font-semibold text-slate-300">Subject</label>
            <div className="mt-1 flex gap-1 rounded-xl border border-slate-800 bg-slate-950 p-1">
              <button
                type="button"
                onClick={() => setSubject('physics')}
                className={`flex-1 rounded-lg py-1.5 text-xs font-bold transition ${
                  subject === 'physics' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Physics
              </button>
              <button
                type="button"
                onClick={() => setSubject('chemistry')}
                className={`flex-1 rounded-lg py-1.5 text-xs font-bold transition ${
                  subject === 'chemistry' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Chem
              </button>
              <button
                type="button"
                onClick={() => setSubject('biology')}
                className={`flex-1 rounded-lg py-1.5 text-xs font-bold transition ${
                  subject === 'biology' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Bio
              </button>
            </div>
          </div>

          {/* Day & Drill Number */}
          <div>
            <label className="text-xs font-semibold text-slate-300">Day / Drill #</label>
            <div className="mt-1 flex gap-2">
              <input
                type="number"
                min="1"
                value={dayNumber}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 1;
                  setDayNumber(val);
                  setDrillNumber(val);
                }}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-bold text-white focus:border-cyan-500 focus:outline-none"
                placeholder="Day #"
              />
            </div>
          </div>

          {/* Topic Title */}
          <div>
            <label className="text-xs font-semibold text-slate-300">Topic Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Linear-Angular Relations"
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white focus:border-cyan-500 focus:outline-none"
            />
          </div>

          {/* Chapter */}
          <div>
            <label className="text-xs font-semibold text-slate-300">Chapter</label>
            <input
              type="text"
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
              placeholder="e.g. Chapter 5: Circular Motion"
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white focus:border-cyan-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Toolbar: Paste Helpers & Tab Selector */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-2">
            <button
              onClick={() => setPreviewTab('editor')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                previewTab === 'editor'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <FileCode2 className="h-3.5 w-3.5" />
              <span>Input Box</span>
            </button>
            <button
              onClick={() => setPreviewTab('preview')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                previewTab === 'preview'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              <span>Live KaTeX Preview ({parsedQuestions.length})</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePasteClipboard}
              className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              <Clipboard className="h-3.5 w-3.5" />
              <span>Paste Clipboard</span>
            </button>

            <button
              type="button"
              onClick={handleLoadSample}
              className="rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              Load Template
            </button>
          </div>
        </div>

        {/* Validation Status Indicator */}
        <div className="mt-2.5">
          {parsedQuestions.length > 0 ? (
            <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/40 px-3 py-2 text-xs font-medium text-emerald-300">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
              <span>
                Ready to Publish: <strong>{parsedQuestions.length} MCQs</strong> detected with options and FBISE explanations.
              </span>
            </div>
          ) : validationError ? (
            <div className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-950/40 px-3 py-2 text-xs font-medium text-rose-300">
              <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
              <span>{validationError}</span>
            </div>
          ) : null}
        </div>

        {/* Main Content Area: Editor or Preview */}
        <div className="mt-3">
          {previewTab === 'editor' ? (
            <div>
              <textarea
                value={rawInput}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={`Paste your JSON output or raw numbered MCQs from Google AI Studio here...
Example format:
{
  "dayNumber": 16,
  "title": "Angular Momentum",
  "chapter": "Chapter 5: Circular Motion",
  "questions": [
    {
      "question": "The linear velocity \\\\vec{v} is given by:",
      "options": { "A": "...", "B": "...", "C": "...", "D": "..." },
      "correctAnswer": "B",
      "explanation": "..."
    }
  ]
}

Or simply plain text:
1. Question text...
A) Option A
B) Option B
C) Option C
D) Option D
Answer: B
Explanation: ...`}
                className="h-64 w-full font-mono text-xs leading-relaxed rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-200 placeholder-slate-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
          ) : (
            <div className="h-64 overflow-y-auto rounded-xl border border-slate-800 bg-slate-950 p-4">
              {parsedQuestions.length === 0 ? (
                <div className="flex h-full items-center justify-center text-xs text-slate-500">
                  No questions parsed yet. Paste JSON or text in the Input Box tab.
                </div>
              ) : (
                <div className="space-y-4">
                  {parsedQuestions.map((q, idx) => (
                    <div key={q.id} className="rounded-lg border border-slate-800/80 bg-slate-900/60 p-3 text-xs">
                      <div className="font-semibold text-slate-200">
                        <span className="text-cyan-400 font-bold mr-2">Q{idx + 1}.</span>
                        <LatexRenderer content={q.question} inline />
                      </div>

                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {(['A', 'B', 'C', 'D'] as const).map(k => (
                          <button
                            type="button"
                            key={k}
                            onClick={() => {
                              const updated = [...parsedQuestions];
                              updated[idx] = { ...updated[idx], correctAnswer: k };
                              setParsedQuestions(updated);
                            }}
                            title={`Click to set Option ${k} as the correct answer`}
                            className={`rounded px-2.5 py-1 text-left transition cursor-pointer flex items-center justify-between ${
                              k === q.correctAnswer
                                ? 'bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 font-bold ring-1 ring-emerald-500/30'
                                : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                            }`}
                          >
                            <div className="flex-1">
                              <span className="mr-1.5 font-bold">{k})</span>
                              <LatexRenderer content={q.options[k]} inline />
                            </div>
                            {k === q.correctAnswer && (
                              <span className="ml-1 shrink-0 rounded bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-bold text-emerald-400">
                                Correct ✓
                              </span>
                            )}
                          </button>
                        ))}
                      </div>

                      {q.explanation && (
                        <div className="mt-2 text-[11px] text-slate-400 italic">
                          <span className="font-semibold text-slate-300">Exp: </span>
                          <LatexRenderer content={q.explanation} inline />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">
          <div className="text-xs text-slate-400">
            {parsedQuestions.length > 0 && (
              <span>Subject: <strong className="capitalize text-white">{subject}</strong> • Total marks: <strong>{parsedQuestions.length}</strong></span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              Cancel
            </button>

            <button
              disabled={parsedQuestions.length === 0}
              onClick={handleSave}
              className={`flex items-center gap-1.5 rounded-xl px-5 py-2 text-xs font-bold text-white shadow-lg transition ${
                parsedQuestions.length > 0
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 cursor-pointer'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-50'
              }`}
            >
              <Save className="h-4 w-4" />
              <span>{isEditing ? 'Update & Sync to Cloud' : 'Publish Drill to Students'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
