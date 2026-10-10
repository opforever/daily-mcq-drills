import React, { useState } from 'react';
import { CasioCalculator } from './components/CasioCalculator';

export default function App() {
  const [scale, setScale] = useState<number>(1);
  const [isDetachedMode, setIsDetachedMode] = useState(false);
  const [showEmbedModal, setShowEmbedModal] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const embedCode = `<iframe 
  src="${window.location.origin}" 
  width="420" 
  height="760" 
  style="border:none; border-radius: 36px; overflow: hidden;"
  title="fx-991ES PLUS Scientific Calculator"
></iframe>`;

  const handleCopyEmbed = () => {
    navigator.clipboard.writeText(embedCode);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0c0f14] text-slate-100 flex flex-col font-sans selection:bg-[#e5a93c] selection:text-black">
      {/* ---------------- MINIMAL TOP BAR ---------------- */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800/80 bg-[#12161f]/90 backdrop-blur-md sticky top-0 z-40">
        {/* Brand / Model mark */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#e5a93c] shadow-[0_0_8px_#e5a93c]" />
          <span className="text-sm sm:text-base font-bold tracking-tight text-white font-mono">
            CASIO fx-991ES PLUS
          </span>
          <span className="text-[10px] font-mono text-slate-400 border border-slate-700/80 rounded px-1.5 py-0.5 hidden sm:inline-block">
            NATURAL-V.P.A.M.
          </span>
        </div>

        {/* Quick Toolbar: Scaling, Detached Mode, and Embed Helper */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono">
          {/* Scale options */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
            <button
              onClick={() => setScale(1)}
              className={`px-2 py-1 rounded text-[11px] transition-colors ${
                scale === 1 ? 'bg-[#e5a93c] text-black font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              100%
            </button>
            <button
              onClick={() => setScale(0.85)}
              className={`px-2 py-1 rounded text-[11px] transition-colors ${
                scale === 0.85 ? 'bg-[#e5a93c] text-black font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              85%
            </button>
            <button
              onClick={() => setScale(0.75)}
              className={`px-2 py-1 rounded text-[11px] transition-colors ${
                scale === 0.75 ? 'bg-[#e5a93c] text-black font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              75%
            </button>
          </div>

          {/* Detached Widget Mode toggle */}
          <button
            onClick={() => setIsDetachedMode(!isDetachedMode)}
            className={`px-2.5 py-1.5 rounded-lg border text-[11px] transition-colors flex items-center gap-1.5 ${
              isDetachedMode
                ? 'border-[#94c973] bg-[#94c973]/15 text-[#94c973] font-bold'
                : 'border-slate-700 hover:border-slate-500 bg-slate-800/80 text-slate-300'
            }`}
            title="Toggle detached widget view for embedding"
          >
            <span>{isDetachedMode ? '🗗 Detached' : '🗖 Detachable Mode'}</span>
          </button>

          {/* Embed snippet button */}
          <button
            onClick={() => setShowEmbedModal(true)}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] border border-slate-700 transition-colors"
          >
            &lt;/&gt; Embed Code
          </button>
        </div>
      </header>

      {/* ---------------- MAIN CALCULATOR VIEW ---------------- */}
      <main className="flex-1 w-full flex flex-col items-center justify-center p-3 sm:p-6 overflow-hidden">
        {isDetachedMode ? (
          /* DETACHED COMPACT WIDGET CONTAINER */
          <div className="relative border border-slate-700/80 rounded-[42px] bg-[#141820]/95 p-3 shadow-2xl backdrop-blur-xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-4 pb-2 mb-1 border-b border-slate-800 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#94c973]" />
                Detached Calculator Widget
              </span>
              <button
                onClick={() => setIsDetachedMode(false)}
                className="text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800"
              >
                ✕ Close
              </button>
            </div>
            <div
              style={{
                transform: `scale(${scale})`,
                transformOrigin: 'top center',
              }}
              className="transition-transform duration-150"
            >
              <CasioCalculator />
            </div>
          </div>
        ) : (
          /* STANDARD CLEAN VIEW */
          <div
            style={{
              transform: scale < 1 ? `scale(${scale})` : undefined,
              transformOrigin: 'top center',
            }}
            className="w-full flex justify-center transition-transform duration-150 my-auto"
          >
            <CasioCalculator />
          </div>
        )}
      </main>

      {/* ---------------- EMBED CODE MODAL ---------------- */}
      {showEmbedModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#1a1f29] border border-slate-700 rounded-2xl w-full max-w-lg p-5 shadow-2xl text-slate-100 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e5a93c]" />
                <h3 className="font-bold text-sm tracking-wide text-white">
                  Embed In Your Other Website
                </h3>
              </div>
              <button
                onClick={() => setShowEmbedModal(false)}
                className="text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800"
              >
                ESC
              </button>
            </div>

            <div className="space-y-4 py-4 text-slate-300 font-sans text-xs">
              <div>
                <p className="font-bold text-slate-100 mb-1">Option 1: Quick iframe Embed</p>
                <p className="text-slate-400 text-[11px] mb-2">
                  Drop this snippet directly into any HTML page or CMS:
                </p>
                <div className="relative bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-[11px] overflow-x-auto">
                  <pre className="text-emerald-400 whitespace-pre">{embedCode}</pre>
                  <button
                    onClick={handleCopyEmbed}
                    className="absolute top-2 right-2 px-2 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded text-[10px] font-sans"
                  >
                    {copiedSnippet ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div>
                <p className="font-bold text-slate-100 mb-1">Option 2: React Component Usage</p>
                <p className="text-slate-400 text-[11px] mb-2">
                  Import the component directly into your React / Next.js codebase:
                </p>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-[11px] overflow-x-auto text-cyan-300">
                  <pre>{`import { CasioCalculator } from './components/CasioCalculator';

export default function MyPage() {
  return (
    <div className="flex justify-center p-4">
      <CasioCalculator />
    </div>
  );
}`}</pre>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-700/80 flex justify-end font-sans">
              <button
                onClick={() => setShowEmbedModal(false)}
                className="px-4 py-1.5 bg-[#e5a93c] text-black font-bold text-xs rounded hover:brightness-105"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- CLEAN MINIMAL FOOTER ---------------- */}
      <footer className="border-t border-slate-800/80 bg-[#10131a] py-2 px-4 text-center text-[11px] text-slate-500 font-mono">
        CASIO fx-991ES PLUS · NATURAL-V.P.A.M. 2nd edition
      </footer>
    </div>
  );
}
