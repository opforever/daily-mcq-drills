import React, { useState } from 'react';
import { AI_STUDIO_PROMPT_GUIDES } from '../data/aiStudioPrompts';
import { Subject } from '../types';
import { Sparkles, Copy, Check, X, Atom, FlaskConical, Dna, ExternalLink, HelpCircle } from 'lucide-react';

interface AiStudioPromptsModalProps {
  initialSubject: Subject;
  onClose: () => void;
}

export const AiStudioPromptsModal: React.FC<AiStudioPromptsModalProps> = ({ initialSubject, onClose }) => {
  const [activeTab, setActiveTab] = useState<Subject>(initialSubject);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const currentGuide = AI_STUDIO_PROMPT_GUIDES[activeTab];

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-4 overflow-y-auto">
      <div className="relative my-4 w-full max-w-4xl rounded-2xl border border-purple-500/30 bg-slate-900 p-5 shadow-2xl sm:p-6 ring-1 ring-purple-500/20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-xl p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white">
              Google AI Studio • Master System Instructions
            </h2>
            <p className="text-xs text-slate-400">
              Copy and paste these exact instructions into Google AI Studio to get 100% website-compatible MCQs with LaTeX & FBISE explanations
            </p>
          </div>
        </div>

        {/* Subject Switcher Tabs */}
        <div className="mt-4 flex gap-2 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('physics')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition ${
              activeTab === 'physics'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <Atom className="h-4 w-4" />
            <span>Physics System Prompt</span>
          </button>

          <button
            onClick={() => setActiveTab('chemistry')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition ${
              activeTab === 'chemistry'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <FlaskConical className="h-4 w-4" />
            <span>Chemistry System Prompt</span>
          </button>

          <button
            onClick={() => setActiveTab('biology')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition ${
              activeTab === 'biology'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-sm'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <Dna className="h-4 w-4" />
            <span>Biology System Prompt</span>
          </button>
        </div>

        {/* 3-Step Quick Guide */}
        <div className="my-4 rounded-xl border border-purple-500/20 bg-purple-950/20 p-3.5 text-xs text-purple-200">
          <div className="flex items-center gap-2 font-bold text-purple-300">
            <HelpCircle className="h-4 w-4" />
            <span>How to use in Google AI Studio:</span>
          </div>
          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div className="rounded-lg bg-slate-900/60 p-2.5 border border-purple-500/10">
              <span className="font-extrabold text-cyan-400">Step 1:</span> Copy the <strong>System Instruction</strong> below and paste it into the "System instructions" field on the right sidebar of AI Studio.
            </div>
            <div className="rounded-lg bg-slate-900/60 p-2.5 border border-purple-500/10">
              <span className="font-extrabold text-cyan-400">Step 2:</span> In the prompt chat, tell Gemini which chapter or topic you taught today (or copy our sample prompt).
            </div>
            <div className="rounded-lg bg-slate-900/60 p-2.5 border border-purple-500/10">
              <span className="font-extrabold text-cyan-400">Step 3:</span> Copy Gemini's JSON reply, open "Post Drill" on this website, and click <strong>Publish Drill</strong>!
            </div>
          </div>
        </div>

        {/* Main Instruction Display */}
        <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
          {/* Section 1: System Instruction */}
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  1. System Instruction ({currentGuide.subjectName})
                </span>
                <p className="text-[11px] text-slate-400">Paste this in Google AI Studio → System instructions box</p>
              </div>
              <button
                onClick={() => handleCopy(currentGuide.systemInstruction, 'sys')}
                className="flex items-center gap-1.5 rounded-lg bg-purple-600 px-3 py-1.5 text-xs font-bold text-white shadow transition hover:bg-purple-500"
              >
                {copiedType === 'sys' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-300" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Instruction</span>
                  </>
                )}
              </button>
            </div>
            <pre className="mt-3 max-h-48 overflow-y-auto font-mono text-[11px] leading-relaxed text-slate-300 whitespace-pre-wrap">
              {currentGuide.systemInstruction}
            </pre>
          </div>

          {/* Section 2: Sample User Prompt */}
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  2. Sample Chat Prompt
                </span>
                <p className="text-[11px] text-slate-400">Type something like this in the user chat box</p>
              </div>
              <button
                onClick={() => handleCopy(currentGuide.sampleUserPrompt, 'prompt')}
                className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:bg-slate-700 hover:text-white"
              >
                {copiedType === 'prompt' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Prompt</span>
                  </>
                )}
              </button>
            </div>
            <p className="mt-2 text-xs font-medium text-slate-300 leading-relaxed">
              {currentGuide.sampleUserPrompt}
            </p>
          </div>

          {/* Section 3: FBISE High-Yield Curriculum Topics covered */}
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              FBISE 1st Year Syllabus Reference Chapters:
            </h4>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {currentGuide.fbiseCurriculumFocus.map((topic, i) => (
                <span
                  key={i}
                  className="rounded-md border border-slate-800 bg-slate-900 px-2 py-1 text-[11px] font-medium text-slate-400"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3">
          <a
            href="https://aistudio.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300"
          >
            <span>Open Google AI Studio</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>

          <button
            onClick={onClose}
            className="rounded-xl bg-slate-800 px-5 py-2 text-xs font-bold text-slate-200 hover:bg-slate-700 hover:text-white"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
