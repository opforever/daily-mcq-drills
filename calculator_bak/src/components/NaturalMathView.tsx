import React from 'react';

export const CURSOR_TOKEN = '▌';

// Strips redundant outer parentheses if the entire string is wrapped in matching parens (ignoring cursor token)
function stripOuterParens(str: string): string {
  const withoutCursor = str.replace(new RegExp(CURSOR_TOKEN, 'g'), '').trim();
  if (!withoutCursor.startsWith('(') || !withoutCursor.endsWith(')')) {
    return str.trim();
  }

  // Check if outer parens match each other
  let depth = 0;
  const trimmed = str.trim();
  let firstParenIdx = -1;
  let lastParenIdx = -1;

  for (let i = 0; i < trimmed.length; i++) {
    const char = trimmed[i];
    if (char === '(') {
      if (firstParenIdx === -1) firstParenIdx = i;
      depth++;
    } else if (char === ')') {
      depth--;
      if (depth === 0) {
        lastParenIdx = i;
        // If it closed before the end (ignoring cursor token at end), don't strip
        const rem = trimmed.slice(i + 1).replace(new RegExp(CURSOR_TOKEN, 'g'), '').trim();
        if (rem.length > 0) {
          return trimmed;
        }
      }
    }
  }

  if (firstParenIdx !== -1 && lastParenIdx !== -1 && depth === 0) {
    // Preserve any cursor token before '(' or after ')'
    const before = trimmed.substring(0, firstParenIdx);
    const inside = trimmed.substring(firstParenIdx + 1, lastParenIdx);
    const after = trimmed.substring(lastParenIdx + 1);
    return stripOuterParens(before + inside + after);
  }

  return str.trim();
}

// Find split position for lowest-precedence operators outside parentheses (ignoring cursor token)
function findLowestPrecedenceOperator(expr: string): { index: number; op: string } | null {
  const trimmed = expr.trim();
  let depth = 0;

  let lastAddSubIndex = -1;
  let lastAddSubOp = '';
  let lastMulIndex = -1;
  let lastMulOp = '';
  let lastDivIndex = -1;
  let lastPowIndex = -1;

  for (let i = 0; i < trimmed.length; i++) {
    const char = trimmed[i];

    if (char === CURSOR_TOKEN) {
      continue; // Skip cursor token in AST parsing
    }

    if (char === '(') {
      depth++;
    } else if (char === ')') {
      depth--;
    } else if (depth === 0) {
      // Check for + or binary -
      if (char === '+') {
        lastAddSubIndex = i;
        lastAddSubOp = '+';
      } else if (char === '-' || char === '−') {
        // Binary minus: preceding non-cursor char is not an operator
        let prevIdx = i - 1;
        while (prevIdx >= 0 && trimmed[prevIdx] === CURSOR_TOKEN) prevIdx--;
        if (prevIdx >= 0 && !'+-−×*÷/(^'.includes(trimmed[prevIdx])) {
          lastAddSubIndex = i;
          lastAddSubOp = '−';
        }
      } else if (char === '×' || char === '*') {
        lastMulIndex = i;
        lastMulOp = '×';
      } else if (char === '/' || char === '÷') {
        lastDivIndex = i;
      } else if (char === '^') {
        if (lastPowIndex === -1) lastPowIndex = i;
      }
    }
  }

  // Precedence order: + and - are lowest (split first)
  if (lastAddSubIndex !== -1) {
    return { index: lastAddSubIndex, op: lastAddSubOp };
  }
  if (lastMulIndex !== -1) {
    return { index: lastMulIndex, op: lastMulOp };
  }
  if (lastDivIndex !== -1) {
    return { index: lastDivIndex, op: '/' };
  }
  if (lastPowIndex !== -1) {
    return { index: lastPowIndex, op: '^' };
  }

  return null;
}

interface NaturalMathViewProps {
  expression: string;
  isResult?: boolean;
  onSelectPosition?: (pos: 'num' | 'den') => void;
}

export const NaturalMathView: React.FC<NaturalMathViewProps> = ({
  expression,
  isResult = false,
  onSelectPosition,
}) => {
  if (!expression || !expression.trim()) {
    return isResult ? <span>0</span> : <span className="opacity-0">0</span>;
  }

  return <>{renderNode(expression.trim(), isResult, 'root', onSelectPosition)}</>;
};

// Recursive natural rendering function
function renderNode(
  expr: string,
  isResult: boolean,
  keyPrefix = 'node',
  onSelectPosition?: (pos: 'num' | 'den') => void
): React.ReactNode {
  let clean = stripOuterParens(expr);

  // If it's just the cursor token
  if (clean === CURSOR_TOKEN) {
    return (
      <span
        key={`${keyPrefix}-cursor`}
        className="inline-block w-1.5 h-4 bg-slate-900 mx-[1px] animate-pulse align-middle"
      />
    );
  }

  // If completely empty
  if (!clean || clean.replace(new RegExp(CURSOR_TOKEN, 'g'), '').trim() === '') {
    const hasCursor = clean.includes(CURSOR_TOKEN);
    return (
      <span
        key={`${keyPrefix}-empty`}
        className={`inline-flex items-center justify-center min-w-[14px] min-h-[14px] px-0.5 border border-dashed rounded-[1px] mx-0.5 align-middle ${
          hasCursor ? 'border-slate-900 bg-black/10' : 'border-slate-700 bg-black/5 opacity-60'
        }`}
      >
        {hasCursor ? (
          <span className="inline-block w-1.5 h-3.5 bg-slate-900 animate-pulse" />
        ) : (
          <span className="text-[9px] opacity-40">□</span>
        )}
      </span>
    );
  }

  // 1. Check for lowest precedence operators at depth 0
  const split = findLowestPrecedenceOperator(clean);

  if (split) {
    const left = clean.substring(0, split.index);
    const right = clean.substring(split.index + 1);

    // ADDITION or SUBTRACTION
    if (split.op === '+' || split.op === '−') {
      return (
        <span key={`${keyPrefix}-addsub-${split.index}`} className="inline-flex items-center align-middle">
          {renderNode(left, isResult, `${keyPrefix}-l`, onSelectPosition)}
          <span className="mx-1.5 font-bold text-slate-800 text-[0.95em]">
            {split.op === '+' ? '+' : '−'}
          </span>
          {renderNode(right, isResult, `${keyPrefix}-r`, onSelectPosition)}
        </span>
      );
    }

    // MULTIPLICATION
    if (split.op === '×') {
      return (
        <span key={`${keyPrefix}-mul-${split.index}`} className="inline-flex items-center align-middle">
          {renderNode(left, isResult, `${keyPrefix}-l`, onSelectPosition)}
          <span className="mx-1 text-slate-800 text-[0.9em]">×</span>
          {renderNode(right, isResult, `${keyPrefix}-r`, onSelectPosition)}
        </span>
      );
    }

    // TRUE HORIZONTAL DIVISION LINE (FRACTION)
    if (split.op === '/') {
      return (
        <span
          key={`${keyPrefix}-frac-${split.index}`}
          className="inline-flex flex-col items-center justify-center align-middle mx-1 my-0.5 leading-none select-none"
        >
          {/* NUMERATOR (Upper fraction) */}
          <span
            onClick={() => onSelectPosition && onSelectPosition('num')}
            className={`px-1 border-b-[2px] border-slate-900 pb-[1.5px] text-center w-full min-w-[14px] flex items-center justify-center ${
              onSelectPosition ? 'cursor-pointer hover:bg-black/5 rounded-t' : ''
            }`}
          >
            {renderNode(left, isResult, `${keyPrefix}-num`, onSelectPosition)}
          </span>

          {/* DENOMINATOR (Lower fraction) */}
          <span
            onClick={() => onSelectPosition && onSelectPosition('den')}
            className={`px-1 pt-[1.5px] text-center w-full min-w-[14px] flex items-center justify-center ${
              onSelectPosition ? 'cursor-pointer hover:bg-black/5 rounded-b' : ''
            }`}
          >
            {renderNode(right, isResult, `${keyPrefix}-den`, onSelectPosition)}
          </span>
        </span>
      );
    }

    // POWER ^
    if (split.op === '^') {
      return (
        <span key={`${keyPrefix}-pow-${split.index}`} className="inline-flex items-baseline align-middle">
          {renderNode(left, isResult, `${keyPrefix}-base`, onSelectPosition)}
          <sup className="text-[0.72em] font-bold -top-2 relative px-0.5 text-slate-900">
            {renderNode(right, isResult, `${keyPrefix}-exp`, onSelectPosition)}
          </sup>
        </span>
      );
    }
  }

  // 2. Radicals: √2, √(x), ³√(x)
  if (clean.startsWith('√')) {
    const inside = clean.substring(1);
    return (
      <span key={`${keyPrefix}-sqrt`} className="inline-flex items-center align-middle mx-0.5">
        <span className="text-[1.25em] font-serif -mr-[1px] leading-none text-slate-950 font-bold">
          √
        </span>
        <span className="border-t-[2px] border-slate-950 pt-[1.5px] px-1 text-[0.94em] inline-flex items-center leading-none">
          {renderNode(inside, isResult, `${keyPrefix}-rad`, onSelectPosition)}
        </span>
      </span>
    );
  }

  if (clean.startsWith('³√')) {
    const inside = clean.substring(2);
    return (
      <span key={`${keyPrefix}-cbrt`} className="inline-flex items-center align-middle mx-0.5">
        <sup className="text-[0.65em] font-bold -mr-1">3</sup>
        <span className="text-[1.25em] font-serif -mr-[1px] leading-none text-slate-950 font-bold">
          √
        </span>
        <span className="border-t-[2px] border-slate-950 pt-[1.5px] px-1 text-[0.94em] inline-flex items-center leading-none">
          {renderNode(inside, isResult, `${keyPrefix}-cbrad`, onSelectPosition)}
        </span>
      </span>
    );
  }

  // 3. Known function calls like sin(arg), cos(arg), tan(arg), ln(arg), log(arg), Abs(arg)
  const fnMatch = clean.match(/^([a-zA-Z⁻¹0-9_]+)\((.*)\)$/);
  if (fnMatch) {
    const fnName = fnMatch[1];
    const innerArg = fnMatch[2];
    return (
      <span key={`${keyPrefix}-fn`} className="inline-flex items-center align-middle">
        <span className="font-semibold">{fnName}</span>
        <span className="text-slate-700 font-light mx-[1px] text-[1.1em]">(</span>
        {renderNode(innerArg, isResult, `${keyPrefix}-arg`, onSelectPosition)}
        <span className="text-slate-700 font-light mx-[1px] text-[1.1em]">)</span>
      </span>
    );
  }

  // 4. Render raw string with inline cursor token if present
  if (clean.includes(CURSOR_TOKEN)) {
    const parts = clean.split(CURSOR_TOKEN);
    return (
      <span key={`${keyPrefix}-cursor-raw`} className="tracking-tight text-slate-950 inline-flex items-center">
        {parts.map((p, idx) => (
          <React.Fragment key={idx}>
            <span>{p}</span>
            {idx < parts.length - 1 && (
              <span className="inline-block w-1.5 h-4 bg-slate-900 mx-[0.5px] animate-pulse align-middle" />
            )}
          </React.Fragment>
        ))}
      </span>
    );
  }

  return (
    <span key={`${keyPrefix}-raw`} className="tracking-tight text-slate-950">
      {clean}
    </span>
  );
}
