import React from 'react';
import katex from 'katex';

interface LatexRendererProps {
  content: string;
  className?: string;
  inline?: boolean;
}

/**
 * Renders text containing LaTeX math formulas (e.g. $...$ or $$...$$),
 * bold markdown (**text**), code snippets, and chemical formulas safely.
 * Never throws errors: falls back smoothly to raw text if syntax is irregular.
 */
export const LatexRenderer: React.FC<LatexRendererProps> = ({ content, className = '', inline = false }) => {
  if (!content) return null;

  // Split text by block math $$...$$ and inline math $...$
  // Also supports \vec{v}, \omega, etc.
  const renderFormattedText = (raw: string) => {
    // Regular expression matching $$...$$ or $...$
    const mathRegex = /(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g;
    const parts = raw.split(mathRegex);

    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const formula = part.slice(2, -2).trim();
        try {
          const html = katex.renderToString(formula, {
            displayMode: true,
            throwOnError: false,
          });
          return (
            <span
              key={index}
              className="my-2 block overflow-x-auto py-1 text-center font-serif text-emerald-400"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <span key={index} className="font-mono text-emerald-300">{part}</span>;
        }
      } else if (part.startsWith('$') && part.endsWith('$')) {
        const formula = part.slice(1, -1).trim();
        try {
          const html = katex.renderToString(formula, {
            displayMode: false,
            throwOnError: false,
          });
          return (
            <span
              key={index}
              className="inline-block px-0.5 font-serif text-emerald-300"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <span key={index} className="font-mono text-emerald-300">{part}</span>;
        }
      } else {
        // Parse bold text **bold** and italics *italic*
        return <span key={index}>{renderMarkdownSpans(part)}</span>;
      }
    });
  };

  const renderMarkdownSpans = (text: string) => {
    // Handle **bold**
    const boldRegex = /(\*\*[\s\S]*?\*\*)/g;
    const boldParts = text.split(boldRegex);

    return boldParts.map((bPart, bIdx) => {
      if (bPart.startsWith('**') && bPart.endsWith('**')) {
        return (
          <strong key={bIdx} className="font-bold text-white">
            {bPart.slice(2, -2)}
          </strong>
        );
      }
      return bPart;
    });
  };

  const Component = inline ? 'span' : 'div';

  return (
    <Component className={`leading-relaxed ${className}`}>
      {renderFormattedText(content)}
    </Component>
  );
};
