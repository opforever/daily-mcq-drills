import React from 'react';
import katex from 'katex';
import { AlertCircle, Lightbulb, Sparkles, Bookmark } from 'lucide-react';

interface LatexRendererProps {
  content: string;
  className?: string;
  inline?: boolean;
}

interface MathToken {
  id: string;
  formula: string;
  displayMode: boolean;
}

/**
 * Normalizes physics variables inside LaTeX to guarantee proper subscripting.
 * For example:
 * - `mbullet` or `m_bullet` or `m{bullet}` -> `m_{\text{bullet}}` (renders subscript below the letter)
 * - `vbullet` or `v_bullet` or `v{bullet}` -> `v_{\text{bullet}}`
 * - `mgun` or `m_gun` -> `m_{\text{gun}}`
 * - `vgun` or `v_gun` -> `v_{\text{gun}}`
 * - `vrecoil` or `v_recoil` -> `v_{\text{recoil}}`
 * - `Pinitial` -> `P_{\text{initial}}`
 * - `Pfinal` -> `P_{\text{final}}`
 */
function normalizeMathFormula(rawFormula: string): string {
  let f = rawFormula;

  // 1. Fix JSON-escaped tab characters in LaTeX math commands: \times, \theta, \tau, \tan
  f = f.replace(/\t(imes|heta|an|au)/g, '\\t$1');

  // 2. Fix unescaped backslashes in math like $\times$ or $	imes$
  f = f.replace(/\\?times\b/g, '\\times ');

  // 3. Normalize common FBISE multi-letter physics variable subscripts
  // Handles mbullet, vbullet, mgun, vgun, vrecoil, Pinitial, Pfinal, etc.
  const commonPhysicsSubscripts = [
    'bullet', 'gun', 'recoil', 'initial', 'final', 'target', 
    'total', 'sys', 'net', 'max', 'min', 'avg', 'lost', 'gain'
  ];

  for (const sub of commonPhysicsSubscripts) {
    // Matches e.g. mbullet, vbullet, Pinitial (with or without underscore / braces)
    const pattern = new RegExp(`\\b([m|v|P|F|E|a|k|W|T])(?:_\\{?|_?|\\{)?(${sub})\\}?\\b`, 'g');
    f = f.replace(pattern, `$1_{\\text{${sub}}}`);
  }

  // Also convert any generic single letter + underscore + multi-letter word (e.g. v_something -> v_{\text{something}})
  f = f.replace(/\b([a-zA-Z])_([a-zA-Z]{2,})\b/g, '$1_{\\text{$2}}');

  // 4. Normalize common units inside LaTeX
  f = f.replace(/\\?text\{\s*(m\/s|kg|m|s|ft\/s|J|N|W|Hz)\s*\}/gi, '\\text{ $1}');
  f = f.replace(/\\?text(m\/s|kg|ft\/s|J|N)\b/gi, '\\text{ $1}');

  return f;
}

/**
 * Tokenizes all LaTeX math expressions ($$...$$ and $...$) into safe placeholders
 * BEFORE any Markdown or italic parsing occurs.
 * This guarantees that math inside italics, bold, or lists will NEVER be corrupted.
 */
function extractMathTokens(text: string): { processedText: string; tokens: Map<string, MathToken> } {
  const tokens = new Map<string, MathToken>();
  let tokenCounter = 0;

  // Step 1: Extract block math $$...$$
  let processedText = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, formula) => {
    const tokenId = `%%%MATH_BLOCK_${tokenCounter++}%%%`;
    tokens.set(tokenId, {
      id: tokenId,
      formula: normalizeMathFormula(formula),
      displayMode: true
    });
    return `\n\n${tokenId}\n\n`;
  });

  // Step 2: Extract inline math $...$
  // Avoid matching currency or single dollar signs followed immediately by whitespace
  processedText = processedText.replace(/\$([^\$\n\r]+?)\$/g, (_, formula) => {
    const tokenId = `%%%MATH_INLINE_${tokenCounter++}%%%`;
    tokens.set(tokenId, {
      id: tokenId,
      formula: normalizeMathFormula(formula),
      displayMode: false
    });
    return tokenId;
  });

  return { processedText, tokens };
}

/**
 * Render a KaTeX math token safely to React Node
 */
function renderMathToken(token: MathToken, key: string | number): React.ReactNode {
  try {
    const html = katex.renderToString(token.formula.trim(), {
      displayMode: token.displayMode,
      throwOnError: false,
    });

    if (token.displayMode) {
      return (
        <div
          key={key}
          className="my-2.5 overflow-x-auto py-1 text-center font-serif text-cyan-300 text-sm sm:text-base leading-normal select-text"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }

    return (
      <span
        key={key}
        className="inline-block px-0.5 font-serif text-cyan-300 align-baseline select-text"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch {
    return (
      <span key={key} className="font-mono text-cyan-200">
        {token.displayMode ? `$$${token.formula}$$` : `$${token.formula}$`}
      </span>
    );
  }
}

/**
 * Recursively parses inline formatting (Bold, Italic, Code, Math Tokens)
 */
function parseInlineSpans(text: string, tokens: Map<string, MathToken>): React.ReactNode[] {
  if (!text) return [];

  // Match:
  // 1. Math Tokens: %%%MATH_(BLOCK|INLINE)_\d+%%%
  // 2. Bold: **...**
  // 3. Inline Code: `...`
  // 4. Italic: *...*
  const tokenRegex = /(%%%MATH_(?:BLOCK|INLINE)_\d+%%%|\*\*[\s\S]*?\*\*|`[^`]+?`|\*[^\*]+?\*)/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, index) => {
    if (!part) return null;

    // Check if it's a math token
    if (tokens.has(part)) {
      return renderMathToken(tokens.get(part)!, `math_${index}`);
    }

    // Bold: **...**
    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      const inner = part.slice(2, -2);
      return (
        <strong key={`b_${index}`} className="font-bold text-white">
          {parseInlineSpans(inner, tokens)}
        </strong>
      );
    }

    // Inline Code: `...`
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <code
          key={`code_${index}`}
          className="mx-0.5 rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[11px] text-cyan-300 border border-slate-700/60"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    // Italic: *...*
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2 && !part.startsWith('**')) {
      const inner = part.slice(1, -1);
      return (
        <em key={`em_${index}`} className="italic text-slate-300">
          {parseInlineSpans(inner, tokens)}
        </em>
      );
    }

    // Standalone times or multiplication symbol
    if (part.trim() === '\\times') {
      return ' × ';
    }

    return part;
  });
}

/**
 * Cleans markdown anomalies like dangling asterisks, clumped headers, etc.
 */
function cleanMarkdownText(text: string): string {
  let cleaned = text;

  // 1. Separate horizontal rules stuck to headings (e.g. "--- ### 2.")
  cleaned = cleaned.replace(/---\s*(#{1,6})/g, '\n---\n\n$1');

  // 2. Separate inline headings clumped into text (e.g. "bullet. --- ### 2.")
  cleaned = cleaned.replace(/([^\n])\s*(#{1,6}\s+)/g, '$1\n\n$2');

  // 3. Clean trailing or broken asterisks like "40 kg **." or "platform mass of 40 kg **"
  cleaned = cleaned.replace(/\s+\*\*\s*([.,;!?]|$)/gm, '$1');

  // 4. Clean broken word bolding like "M*over" -> "**M**over"
  cleaned = cleaned.replace(/M\*over/g, '**M**over');

  // 5. Break up run-on numbered items like: "1. Direction Matters: ... 2. Unit Consistency:"
  cleaned = cleaned.replace(/([.!?])\s+(\d+\.\s+[A-Z])/g, '$1\n\n$2');

  return cleaned;
}

/**
 * Universal, Bulletproof Markdown + LaTeX Renderer
 */
export const LatexRenderer: React.FC<LatexRendererProps> = ({
  content,
  className = '',
  inline = false
}) => {
  if (!content) return null;

  // Step 1: Tokenize all math formulas FIRST
  const { processedText: textWithTokens, tokens } = extractMathTokens(content);

  // If inline rendering requested, parse inline directly
  if (inline) {
    return <span className={className}>{parseInlineSpans(textWithTokens, tokens)}</span>;
  }

  // Step 2: Clean markdown text while preserving math tokens
  const cleanedText = cleanMarkdownText(textWithTokens);

  // Step 3: Block level parsing
  const lines = cleanedText.split('\n');
  const renderedBlocks: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // 1. Standalone Math Block Token
    if (tokens.has(trimmed) && tokens.get(trimmed)!.displayMode) {
      renderedBlocks.push(renderMathToken(tokens.get(trimmed)!, `math_block_${i}`));
      i++;
      continue;
    }

    // 2. Horizontal divider
    if (trimmed === '---' || trimmed === '***' || trimmed === '___') {
      renderedBlocks.push(
        <hr key={`hr_${i}`} className="my-3 border-slate-800" />
      );
      i++;
      continue;
    }

    // 3. Check for Callout Sections (e.g. 💡 Mnemonic or 🚨 FBISE Exam Insight / Trap)
    const isCalloutHeader = 
      /^(#{1,6}\s*)?[🚨💡⚠️📌]\s*(.*)$/.test(trimmed) ||
      /^(#{1,6}\s*)?\*\*[🚨💡⚠️📌]/.test(trimmed) ||
      /^(#{1,6}\s*)?(Mnemonic|FBISE Exam Insight|Exam Insight|Crucial Tip|Common Trap)/i.test(trimmed);

    if (isCalloutHeader) {
      const isAlert = /🚨|⚠️|Exam Insight|Trap|Caution/i.test(trimmed);
      
      // Clean header text: strip '#', '*', ':', emoji, leading/trailing whitespace
      let title = trimmed
        .replace(/^(#{1,6}\s*)/, '')
        .replace(/[🚨💡⚠️📌]/g, '')
        .replace(/\*\*/g, '')
        .replace(/:+$/, '')
        .trim();

      if (!title) {
        title = isAlert ? 'FBISE Exam Insight' : 'Mnemonic & Tip';
      }

      // Collect callout body lines until the next heading or divider
      const bodyLines: string[] = [];
      i++;
      while (i < lines.length) {
        const nextLine = lines[i];
        const nextTrimmed = nextLine.trim();
        // Stop if we hit a new heading, divider, or another callout
        if (
          nextTrimmed.startsWith('#') || 
          nextTrimmed === '---' || 
          /^[🚨💡⚠️📌]/.test(nextTrimmed)
        ) {
          break;
        }
        if (nextTrimmed) {
          bodyLines.push(nextTrimmed);
        }
        i++;
      }

      renderedBlocks.push(
        <div
          key={`callout_${i}`}
          className={`my-3 rounded-xl border p-3.5 shadow-lg ${
            isAlert
              ? 'border-rose-500/40 bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-950 text-slate-200'
              : 'border-amber-500/40 bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 text-slate-200'
          }`}
        >
          {/* Callout Header Badge */}
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm mb-2">
            {isAlert ? (
              <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
            ) : (
              <Lightbulb className="h-4 w-4 text-amber-400 shrink-0" />
            )}
            <span className={isAlert ? 'text-rose-300' : 'text-amber-300'}>
              {title}
            </span>
          </div>

          {/* Callout Body Content */}
          <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
            {bodyLines.map((bLine, bIdx) => {
              const bListMatch = bLine.match(/^(\*|-|•|\d+[\.\)])\s+(.*)$/);
              if (bListMatch) {
                const marker = bListMatch[1];
                const itemText = bListMatch[2];
                return (
                  <div key={bIdx} className="flex items-start gap-2 pl-1">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400 mt-2" />
                    <div className="flex-1">{parseInlineSpans(itemText, tokens)}</div>
                  </div>
                );
              }
              return (
                <p key={bIdx} className="my-1">
                  {parseInlineSpans(bLine, tokens)}
                </p>
              );
            })}
          </div>
        </div>
      );
      continue;
    }

    // 4. Regular Headings: H1, H2, H3, H4
    if (trimmed.startsWith('#')) {
      const hashMatch = trimmed.match(/^(#{1,6})\s+(.*)$/);
      if (hashMatch) {
        const level = hashMatch[1].length;
        const text = hashMatch[2];

        if (level === 1) {
          renderedBlocks.push(
            <h1 key={`h1_${i}`} className="mt-4 mb-2 text-base sm:text-lg font-bold text-white border-b border-slate-800 pb-1.5">
              {parseInlineSpans(text, tokens)}
            </h1>
          );
        } else if (level === 2) {
          renderedBlocks.push(
            <h2 key={`h2_${i}`} className="mt-3.5 mb-1.5 text-sm sm:text-base font-bold text-cyan-300 flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>{parseInlineSpans(text, tokens)}</span>
            </h2>
          );
        } else if (level === 3) {
          renderedBlocks.push(
            <h3 key={`h3_${i}`} className="mt-3 mb-1 text-xs sm:text-sm font-bold text-cyan-200 flex items-center gap-1.5">
              <Bookmark className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
              <span>{parseInlineSpans(text, tokens)}</span>
            </h3>
          );
        } else {
          renderedBlocks.push(
            <h4 key={`h4_${i}`} className="mt-2.5 mb-1 text-xs font-bold text-emerald-300 uppercase tracking-wide flex items-center gap-1">
              <span>{parseInlineSpans(text, tokens)}</span>
            </h4>
          );
        }
        i++;
        continue;
      }
    }

    // 5. Numbered step or bullet items (e.g. "1.", "2.", "•", "*", "-")
    const listMatch = trimmed.match(/^(\*|-|•|\d+[\.\)])\s+(.*)$/);
    if (listMatch) {
      const marker = listMatch[1];
      const text = listMatch[2];
      const isNumbered = /^\d+/.test(marker);

      renderedBlocks.push(
        <div key={`li_${i}`} className="my-1 flex items-start gap-2 pl-1 sm:pl-2 text-xs sm:text-sm text-slate-200">
          {isNumbered ? (
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-950 border border-cyan-500/40 text-[10px] font-bold text-cyan-300 mt-0.5">
              {marker.replace(/[\.\)]/, '')}
            </span>
          ) : (
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 mt-2" />
          )}
          <div className="leading-relaxed flex-1">
            {parseInlineSpans(text, tokens)}
          </div>
        </div>
      );
      i++;
      continue;
    }

    // 6. Standard Paragraph
    renderedBlocks.push(
      <p key={`p_${i}`} className="my-1 text-xs sm:text-sm text-slate-200 leading-relaxed">
        {parseInlineSpans(trimmed, tokens)}
      </p>
    );
    i++;
  }

  return (
    <div className={`space-y-0.5 ${className}`}>
      {renderedBlocks}
    </div>
  );
};
