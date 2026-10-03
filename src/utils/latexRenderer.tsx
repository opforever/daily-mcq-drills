import React from 'react';
import katex from 'katex';
import { AlertCircle, Lightbulb, Sparkles, CheckCircle2, Bookmark } from 'lucide-react';

interface LatexRendererProps {
  content: string;
  className?: string;
  inline?: boolean;
}

/**
 * Pre-processes text to fix common model output formatting anomalies:
 * - Fixes un-spaced markdown headers (e.g., "--- ### 2. Theoretical Solution")
 * - Sanitizes LaTeX unit typos like `textm/s` or `\textm/s` into `\text{ m/s}`
 * - Splits run-on numbered items into distinct lines
 */
function preprocessMarkdown(text: string): string {
  if (!text) return '';

  let cleaned = text;

  // Fix LaTeX unit typos
  cleaned = cleaned.replace(/\\textm\/s/g, '\\text{ m/s}');
  cleaned = cleaned.replace(/textm\/s/g, '\\text{ m/s}');
  cleaned = cleaned.replace(/\\textkg/g, '\\text{ kg}');
  cleaned = cleaned.replace(/\\textm/g, '\\text{ m}');

  // Separate horizontal rules stuck to headings (e.g., "--- ### 2.")
  cleaned = cleaned.replace(/---\s*(#{1,6})/g, '\n---\n\n$1');

  // Separate inline headers embedded in text (e.g. "velocity $v_b$. --- ### 2.")
  cleaned = cleaned.replace(/([^\n])\s*(#{1,6}\s+)/g, '$1\n\n$2');

  // Break up run-on numbered list items like: "1. Direction Matters: ... 2. Unit Consistency: ... 3. Energy"
  cleaned = cleaned.replace(/([.!?])\s+(\d+\.\s+[A-Z])/g, '$1\n\n$2');

  // Break up double asterisks stuck together like "* *Trap:*" -> "* **Trap:**"
  cleaned = cleaned.replace(/\*\s+\*([^*]+)\*/g, '* **$1**');

  return cleaned;
}

/**
 * Render inline LaTeX math formula ($...$) safely with KaTeX
 */
function renderInlineKaTeX(mathFormula: string, key: string | number) {
  try {
    const html = katex.renderToString(mathFormula.trim(), {
      displayMode: false,
      throwOnError: false,
    });
    return (
      <span
        key={key}
        className="inline-block px-1 font-serif text-cyan-300 align-baseline"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch {
    return <span key={key} className="font-mono text-cyan-200">${mathFormula}$</span>;
  }
}

/**
 * Render display LaTeX math formula ($$...$$) safely with KaTeX
 */
function renderDisplayKaTeX(mathFormula: string, key: string | number) {
  try {
    const html = katex.renderToString(mathFormula.trim(), {
      displayMode: true,
      throwOnError: false,
    });
    return (
      <div
        key={key}
        className="my-3 overflow-x-auto rounded-xl border border-cyan-500/20 bg-cyan-950/20 px-3 py-2 text-center font-serif text-cyan-300 shadow-inner"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch {
    return (
      <div key={key} className="my-2 block overflow-x-auto font-mono text-cyan-200">
        $${mathFormula}$$
      </div>
    );
  }
}

/**
 * Parses inline spans: LaTeX ($...$), Bold (**...**), Italics (*...*), and Code (`...`)
 */
function renderInlineElements(rawText: string): React.ReactNode[] {
  // Regex splitting by:
  // 1. Inline Math: $...$
  // 2. Bold: **...**
  // 3. Inline Code: `...`
  // 4. Italic: *...*
  const tokenRegex = /(\$[^\$]+?\$|\*\*[\s\S]*?\*\*|`[^`]+?`|\*[^\*]+?\*)/g;
  const parts = rawText.split(tokenRegex);

  return parts.map((part, index) => {
    if (!part) return null;

    // 1. Inline Math: $...$
    if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
      return renderInlineKaTeX(part.slice(1, -1), index);
    }

    // 2. Bold: **...**
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      const inner = part.slice(2, -2);
      return (
        <strong key={index} className="font-bold text-slate-100">
          {renderInlineElements(inner)}
        </strong>
      );
    }

    // 3. Inline Code: `...`
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <code
          key={index}
          className="mx-0.5 rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[11px] text-cyan-300 border border-slate-700/60"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    // 4. Italics: *...*
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2 && !part.startsWith('**')) {
      return (
        <em key={index} className="italic text-slate-300">
          {part.slice(1, -1)}
        </em>
      );
    }

    return part;
  });
}

/**
 * Complete Markdown + LaTeX Block Renderer for KIPS FBISE AI Tutor
 */
export const LatexRenderer: React.FC<LatexRendererProps> = ({
  content,
  className = '',
  inline = false
}) => {
  if (!content) return null;

  if (inline) {
    return <span className={className}>{renderInlineElements(content)}</span>;
  }

  const preprocessed = preprocessMarkdown(content);

  // Split content by display math blocks ($$...$$) first
  const displayMathRegex = /(\$\$[\s\S]*?\$\$)/g;
  const sections = preprocessed.split(displayMathRegex);

  const renderedBlocks: React.ReactNode[] = [];

  sections.forEach((section, sIndex) => {
    if (!section) return;

    // Display math block
    if (section.startsWith('$$') && section.endsWith('$$')) {
      renderedBlocks.push(renderDisplayKaTeX(section.slice(2, -2), `math_disp_${sIndex}`));
      return;
    }

    // Regular text blocks: split by lines/paragraphs
    const lines = section.split('\n');
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];
      const trimmed = line.trim();

      if (!trimmed) {
        i++;
        continue;
      }

      // Horizontal divider
      if (trimmed === '---' || trimmed === '***' || trimmed === '___') {
        renderedBlocks.push(
          <hr key={`hr_${sIndex}_${i}`} className="my-3 border-slate-800" />
        );
        i++;
        continue;
      }

      // Headings: H1, H2, H3, H4
      if (trimmed.startsWith('#')) {
        const hashMatch = trimmed.match(/^(#{1,6})\s+(.*)$/);
        if (hashMatch) {
          const level = hashMatch[1].length;
          const text = hashMatch[2];

          // Check if this is a Special FBISE Callout heading (e.g. 🚨 FBISE Exam Insight or 💡 Mnemonic)
          if (text.includes('🚨') || text.toLowerCase().includes('trap') || text.toLowerCase().includes('insight')) {
            renderedBlocks.push(
              <div 
                key={`callout_alert_${sIndex}_${i}`}
                className="my-3 rounded-xl border border-rose-500/30 bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-900 p-3 shadow-md"
              >
                <div className="flex items-center gap-2 font-bold text-rose-300 text-xs sm:text-sm">
                  <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
                  <span>{renderInlineElements(text)}</span>
                </div>
              </div>
            );
            i++;
            continue;
          }

          if (text.includes('💡') || text.toLowerCase().includes('mnemonic') || text.toLowerCase().includes('tip')) {
            renderedBlocks.push(
              <div 
                key={`callout_tip_${sIndex}_${i}`}
                className="my-3 rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-900 p-3 shadow-md"
              >
                <div className="flex items-center gap-2 font-bold text-amber-300 text-xs sm:text-sm">
                  <Lightbulb className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>{renderInlineElements(text)}</span>
                </div>
              </div>
            );
            i++;
            continue;
          }

          if (level === 1) {
            renderedBlocks.push(
              <h1 key={`h1_${sIndex}_${i}`} className="mt-4 mb-2 text-base sm:text-lg font-bold text-white border-b border-slate-800 pb-1.5">
                {renderInlineElements(text)}
              </h1>
            );
          } else if (level === 2) {
            renderedBlocks.push(
              <h2 key={`h2_${sIndex}_${i}`} className="mt-3.5 mb-1.5 text-sm sm:text-base font-bold text-cyan-300 flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>{renderInlineElements(text)}</span>
              </h2>
            );
          } else if (level === 3) {
            renderedBlocks.push(
              <h3 key={`h3_${sIndex}_${i}`} className="mt-3 mb-1 text-xs sm:text-sm font-bold text-cyan-200 flex items-center gap-1.5">
                <Bookmark className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span>{renderInlineElements(text)}</span>
              </h3>
            );
          } else {
            renderedBlocks.push(
              <h4 key={`h4_${sIndex}_${i}`} className="mt-2.5 mb-1 text-xs font-bold text-emerald-300 uppercase tracking-wide flex items-center gap-1">
                <span>{renderInlineElements(text)}</span>
              </h4>
            );
          }
          i++;
          continue;
        }
      }

      // Check for standalone callout paragraphs (e.g., "🚨 FBISE Exam Insight: ...")
      if (trimmed.startsWith('🚨') || trimmed.startsWith('💡') || trimmed.startsWith('⚠️')) {
        const isAlert = trimmed.startsWith('🚨') || trimmed.startsWith('⚠️');
        renderedBlocks.push(
          <div 
            key={`callout_p_${sIndex}_${i}`}
            className={`my-3 rounded-xl border p-3 shadow-md ${
              isAlert 
                ? 'border-rose-500/30 bg-gradient-to-br from-rose-950/30 via-slate-900 to-slate-950 text-slate-200' 
                : 'border-amber-500/30 bg-gradient-to-br from-amber-950/30 via-slate-900 to-slate-950 text-slate-200'
            }`}
          >
            <div className="flex items-start gap-2 text-xs sm:text-sm leading-relaxed">
              {isAlert ? (
                <AlertCircle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
              ) : (
                <Lightbulb className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1">
                {renderInlineElements(trimmed)}
              </div>
            </div>
          </div>
        );
        i++;
        continue;
      }

      // List Items (e.g. "* item", "- item", "1. item")
      const listMatch = trimmed.match(/^(\*|-|\d+\.)\s+(.*)$/);
      if (listMatch) {
        const bullet = listMatch[1];
        const text = listMatch[2];
        const isNumbered = /^\d+\./.test(bullet);

        renderedBlocks.push(
          <div key={`li_${sIndex}_${i}`} className="my-1 flex items-start gap-2 pl-1 sm:pl-2 text-xs sm:text-sm text-slate-200">
            {isNumbered ? (
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-950 border border-cyan-500/40 text-[10px] font-bold text-cyan-300 mt-0.5">
                {bullet.replace('.', '')}
              </span>
            ) : (
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 mt-2" />
            )}
            <div className="leading-relaxed flex-1">
              {renderInlineElements(text)}
            </div>
          </div>
        );
        i++;
        continue;
      }

      // Standard Paragraph
      renderedBlocks.push(
        <p key={`p_${sIndex}_${i}`} className="my-1.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
          {renderInlineElements(trimmed)}
        </p>
      );
      i++;
    }
  });

  return (
    <div className={`space-y-1 ${className}`}>
      {renderedBlocks}
    </div>
  );
};
