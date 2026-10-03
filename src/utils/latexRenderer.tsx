import React from 'react';
import katex from 'katex';
import { AlertCircle, Lightbulb, Sparkles, Bookmark, Table as TableIcon } from 'lucide-react';

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
 * Universal Subscript & Scientific Normalizer for Physics, Chemistry & Biology.
 * 
 * Guarantees that numbers and descriptive labels appear BELOW the letter as subscripts:
 * 1. Chemistry & Biology formulas:
 *    - C6H12O6 -> \text{C}_6\text{H}_{12}\text{O}_6
 *    - 6O2 -> 6\text{O}_2
 *    - 6CO2 -> 6\text{CO}_2
 *    - 6H2O -> 6\text{H}_2\text{O}
 *    - H2SO4, CaCO3, NH3, CH4, N2, Cl2, FADH2, etc.
 * 
 * 2. Physics & Chemistry variables:
 *    - mbullet, vbullet, mgun, vgun, vrecoil -> m_{\text{bullet}}, v_{\text{gun}}, etc.
 *    - v1, v2, m1, m2, t1, t2, r1, r2, p1, p2, F1, F2 -> v_1, v_2, m_1, m_2, etc.
 *    - Kc, Kp, Ksp, Kw, Ka, Kb -> K_c, K_p, K_{\text{sp}}, etc.
 * 
 * 3. Units & Reaction arrows:
 *    - textm/s, textkg -> \text{ m/s}, \text{ kg}
 *    - -> or --> -> \rightarrow
 */
function normalizeMathFormula(rawFormula: string): string {
  let f = rawFormula;

  // 1. Fix JSON-escaped tab characters in LaTeX math commands
  f = f.replace(/\t(imes|heta|an|au)/g, '\\t$1');

  // 2. Fix unescaped backslashes in math like \times or $times$
  f = f.replace(/\\?times\b/g, '\\times ');

  // 3. Fix reaction arrows
  f = f.replace(/\s*(-->|->)\s*/g, ' \\rightarrow ');

  // 4. Common chemical words inside equations (Energy, ATP, ADP, Glucose) -> \text{...}
  f = f.replace(/\bEnergy\s*\(ATP\)/gi, '\\text{Energy (ATP)}');
  f = f.replace(/\bATP\b/g, '\\text{ATP}');
  f = f.replace(/\bADP\b/g, '\\text{ADP}');
  f = f.replace(/\bGlucose\b/gi, '\\text{Glucose}');

  // 5. Physics variables with multi-letter subscripts
  const commonPhysicsSubscripts = [
    'bullet', 'gun', 'recoil', 'initial', 'final', 'target', 
    'total', 'sys', 'net', 'max', 'min', 'avg', 'lost', 'gain',
    'eff', 'ext', 'int', 'in', 'out'
  ];

  for (const sub of commonPhysicsSubscripts) {
    const pattern = new RegExp(`\\b([m|v|P|F|E|a|k|W|T])(?:_\\{?|_?|\\{)?(${sub})\\}?\\b`, 'g');
    f = f.replace(pattern, `$1_{\\text{${sub}}}`);
  }

  // Generic single letter + underscore + multi-letter word (e.g. v_something -> v_{\text{something}})
  f = f.replace(/\b([a-zA-Z])_([a-zA-Z]{2,})\b/g, '$1_{\\text{$2}}');

  // 6. Numbered physics variables: v1 -> v_1, m2 -> m_2, t1 -> t_1, r2 -> r_2, F1 -> F_1
  f = f.replace(/\b([v|m|p|r|t|F|a|k|q|I|s])(\d+)\b/g, '$1_{$2}');

  // 7. Equilibrium constants: Kc -> K_c, Kp -> K_p, Ksp -> K_{\text{sp}}, etc.
  f = f.replace(/\bK(c|p|w|a|b)\b/g, 'K_$1');
  f = f.replace(/\bKsp\b/gi, 'K_{\\text{sp}}');

  // 8. Chemistry & Biology Molecular Formula Subscript Normalization:
  // Matches element symbols followed by numbers: C6, H12, O6, O2, N2, H2, Cl2, Fe2, Ca1, etc.
  // E.g. C6H12O6 -> \text{C}_6\text{H}_{12}\text{O}_6, 6CO2 -> 6\text{CO}_2, 6H2O -> 6\text{H}_2\text{O}
  f = f.replace(/\b(C|H|O|N|P|S|Cl|Fe|Ca|Na|K|Mg|Cu|Zn|Br|Ba|Al|Ag|Pb|I)(\d+)\b/g, '\\text{$1}_{$2}');
  
  // Handles combinations like CO2, H2O, CH4, NH3, CaCO3, H2SO4, HNO3, KMnO4
  f = f.replace(/([A-Z][a-z]?)(\d+)/g, (match, element, count) => {
    // If it's already part of \text{...}_{...} or subscript, skip
    if (element.startsWith('\\')) return match;
    return `${element}_{${count}}`;
  });

  // 9. Normalize common scientific units inside LaTeX
  f = f.replace(/\\?text\{\s*(m\/s|kg|m|s|ft\/s|J|N|W|Hz|mol|kPa|atm|cm|mm)\s*\}/gi, '\\text{ $1}');
  f = f.replace(/\\?text(m\/s|kg|ft\/s|J|N|mol|kPa|atm)\b/gi, '\\text{ $1}');

  return f;
}

/**
 * Tokenizes all LaTeX math expressions ($$...$$ and $...$) into safe placeholders
 * BEFORE any Markdown, Table, or italic parsing occurs.
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
          className="my-3 overflow-x-auto py-1 text-center font-serif text-cyan-300 text-sm sm:text-base leading-normal select-text"
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
 * Parses inline spans: Math Tokens, Bold, Italics, Code
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
 * Parses a markdown table row into trimmed cell strings
 */
function parseTableRow(line: string): string[] {
  const trimmed = line.trim();
  const rawCells = trimmed.split('|');
  // Strip outer empty strings from leading/trailing pipes
  if (rawCells.length > 0 && rawCells[0].trim() === '') rawCells.shift();
  if (rawCells.length > 0 && rawCells[rawCells.length - 1].trim() === '') rawCells.pop();
  return rawCells.map(c => c.trim());
}

/**
 * Checks if a line is a markdown table separator (e.g. |:---|:---|:---| or |---|---|)
 */
function isTableSeparator(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed.includes('-')) return false;
  const cells = parseTableRow(trimmed);
  return cells.length > 0 && cells.every(c => /^:?-+:?$/.test(c));
}

/**
 * Renders a complete Markdown table with responsive horizontal scroll and Tailwind styling
 */
function renderMarkdownTable(
  headerLine: string,
  bodyLines: string[],
  keyPrefix: string,
  tokens: Map<string, MathToken>
): React.ReactNode {
  const headers = parseTableRow(headerLine);
  const rows = bodyLines.map(parseTableRow);

  return (
    <div key={keyPrefix} className="my-3 overflow-x-auto rounded-xl border border-slate-700/80 bg-slate-900/90 shadow-md no-scrollbar">
      <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[360px]">
        <thead>
          <tr className="bg-slate-800/90 text-cyan-300 font-semibold border-b border-slate-700/80">
            {headers.map((h, hIdx) => (
              <th key={hIdx} className="px-3.5 py-2.5 font-bold tracking-wide text-cyan-200">
                {parseInlineSpans(h, tokens)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/80">
          {rows.map((rowCells, rIdx) => (
            <tr
              key={rIdx}
              className={rIdx % 2 === 0 ? 'bg-slate-900/40 hover:bg-slate-800/40 transition-colors' : 'bg-slate-800/20 hover:bg-slate-800/40 transition-colors'}
            >
              {rowCells.map((cell, cIdx) => (
                <td key={cIdx} className="px-3.5 py-2 text-slate-200 leading-relaxed">
                  {parseInlineSpans(cell, tokens)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
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
 * Renders an array of content lines into React blocks (Tables, Headings, Callouts, Lists, Paragraphs)
 */
function renderContentLines(
  lines: string[],
  keyPrefix: string,
  tokens: Map<string, MathToken>,
  insideCallout = false
): React.ReactNode[] {
  const blocks: React.ReactNode[] = [];
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
      blocks.push(renderMathToken(tokens.get(trimmed)!, `${keyPrefix}_math_${i}`));
      i++;
      continue;
    }

    // 2. Horizontal divider
    if (trimmed === '---' || trimmed === '***' || trimmed === '___') {
      blocks.push(
        <hr key={`${keyPrefix}_hr_${i}`} className="my-3 border-slate-800" />
      );
      i++;
      continue;
    }

    // 3. Markdown Table Detection
    // A table begins when line has '|', next line exists and is a valid table separator (e.g. |:---|:---|)
    if (trimmed.startsWith('|') && trimmed.endsWith('|') && i + 1 < lines.length) {
      const nextLine = lines[i + 1].trim();
      if (isTableSeparator(nextLine)) {
        const headerLine = trimmed;
        const tableBodyLines: string[] = [];
        i += 2; // skip header and separator
        while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
          tableBodyLines.push(lines[i].trim());
          i++;
        }
        blocks.push(renderMarkdownTable(headerLine, tableBodyLines, `${keyPrefix}_tbl_${i}`, tokens));
        continue;
      }
    }

    // 4. Callout Section Detection (Only top-level, prevent infinite recursion)
    if (!insideCallout) {
      const isCalloutHeader = 
        /^(#{1,6}\s*)?[🚨💡⚠️📌]\s*(.*)$/.test(trimmed) ||
        /^(#{1,6}\s*)?\*\*[🚨💡⚠️📌]/.test(trimmed) ||
        /^(#{1,6}\s*)?(Mnemonic|FBISE Exam Insight|Exam Insight|Comparison:|Crucial Tip|Common Trap)/i.test(trimmed);

      if (isCalloutHeader) {
        const isAlert = /🚨|⚠️|Exam Insight|Trap|Caution/i.test(trimmed);
        
        let title = trimmed
          .replace(/^(#{1,6}\s*)/, '')
          .replace(/[🚨💡⚠️📌❖◆]/g, '')
          .replace(/\*\*/g, '')
          .replace(/:+$/, '')
          .trim();

        if (!title) {
          title = isAlert ? 'FBISE Exam Insight' : 'Mnemonic & Summary';
        }

        // Collect body lines until next heading or divider
        const calloutBodyLines: string[] = [];
        i++;
        while (i < lines.length) {
          const nextTrimmed = lines[i].trim();
          if (
            nextTrimmed.startsWith('#') || 
            nextTrimmed === '---' || 
            /^[🚨💡⚠️📌]/.test(nextTrimmed)
          ) {
            break;
          }
          if (nextTrimmed) {
            calloutBodyLines.push(nextTrimmed);
          }
          i++;
        }

        blocks.push(
          <div
            key={`${keyPrefix}_callout_${i}`}
            className={`my-3 rounded-xl border p-3.5 shadow-lg ${
              isAlert
                ? 'border-rose-500/40 bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-950 text-slate-200'
                : 'border-amber-500/40 bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 text-slate-200'
            }`}
          >
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

            <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
              {renderContentLines(calloutBodyLines, `${keyPrefix}_callout_inner_${i}`, tokens, true)}
            </div>
          </div>
        );
        continue;
      }
    }

    // 5. Headings: H1, H2, H3, H4
    if (trimmed.startsWith('#')) {
      const hashMatch = trimmed.match(/^(#{1,6})\s+(.*)$/);
      if (hashMatch) {
        const level = hashMatch[1].length;
        const text = hashMatch[2];

        if (level === 1) {
          blocks.push(
            <h1 key={`${keyPrefix}_h1_${i}`} className="mt-4 mb-2 text-base sm:text-lg font-bold text-white border-b border-slate-800 pb-1.5">
              {parseInlineSpans(text, tokens)}
            </h1>
          );
        } else if (level === 2) {
          blocks.push(
            <h2 key={`${keyPrefix}_h2_${i}`} className="mt-3.5 mb-1.5 text-sm sm:text-base font-bold text-cyan-300 flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>{parseInlineSpans(text, tokens)}</span>
            </h2>
          );
        } else if (level === 3) {
          blocks.push(
            <h3 key={`${keyPrefix}_h3_${i}`} className="mt-3 mb-1 text-xs sm:text-sm font-bold text-cyan-200 flex items-center gap-1.5">
              <Bookmark className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
              <span>{parseInlineSpans(text, tokens)}</span>
            </h3>
          );
        } else {
          blocks.push(
            <h4 key={`${keyPrefix}_h4_${i}`} className="mt-2.5 mb-1 text-xs font-bold text-emerald-300 uppercase tracking-wide flex items-center gap-1">
              <span>{parseInlineSpans(text, tokens)}</span>
            </h4>
          );
        }
        i++;
        continue;
      }
    }

    // 6. Numbered step or bullet items (e.g. "1.", "2.", "•", "*", "-")
    const listMatch = trimmed.match(/^(\*|-|•|\d+[\.\)])\s+(.*)$/);
    if (listMatch) {
      const marker = listMatch[1];
      const text = listMatch[2];
      const isNumbered = /^\d+/.test(marker);

      blocks.push(
        <div key={`${keyPrefix}_li_${i}`} className="my-1 flex items-start gap-2 pl-1 sm:pl-2 text-xs sm:text-sm text-slate-200">
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

    // 7. Standard Paragraph
    blocks.push(
      <p key={`${keyPrefix}_p_${i}`} className="my-1 text-xs sm:text-sm text-slate-200 leading-relaxed">
        {parseInlineSpans(trimmed, tokens)}
      </p>
    );
    i++;
  }

  return blocks;
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

  // Step 3: Block level parsing (Tables, Callouts, Headings, Lists, Paragraphs)
  const lines = cleanedText.split('\n');
  const renderedBlocks = renderContentLines(lines, 'root', tokens, false);

  return (
    <div className={`space-y-0.5 ${className}`}>
      {renderedBlocks}
    </div>
  );
};
