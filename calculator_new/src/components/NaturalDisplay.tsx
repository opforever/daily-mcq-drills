import React, { useEffect, useRef } from 'react';
import { AngleUnit, CalcMode } from '../types/calculator';
import {
  MathExpressionState,
  CursorPosition,
  MathItem,
  TextItem,
  FractionItem,
  FieldRef,
  sameStack,
} from '../utils/mathModel';
import { NaturalMathView } from './NaturalMathView';

interface NaturalDisplayProps {
  mathState: MathExpressionState;
  result: string;
  exactResult?: string;
  isExactMode: boolean;
  angleUnit: AngleUnit;
  mode: CalcMode;
  isShift: boolean;
  isAlpha: boolean;
  isMemorySet: boolean;
  isStoreMode: boolean;
  hasHistoryPrev: boolean;
  hasHistoryNext: boolean;
  onSelectCursor: (cursor: CursorPosition) => void;
}

// ---------------------------------------------------------------------------
// Cursor block (single instance on screen; also used as scroll anchor)
// ---------------------------------------------------------------------------
const CursorBlock: React.FC = () => (
  <span className="calc-cursor inline-block w-[2px] h-[1.05em] bg-slate-900 mx-[0.5px] align-middle animate-pulse rounded-[1px]" />
);

// ---------------------------------------------------------------------------
// Radical-aware per-character renderer for a run of text items.
// '√' gets its glyph; characters inside its radicand get an overline so the
// input line looks like the natural display of a real fx-991ES.
// ---------------------------------------------------------------------------
type CharMode = 'plain' | 'glyph' | 'over';

function planRun(chars: string[]): { ch: string; mode: CharMode }[] {
  const out: { ch: string; mode: CharMode }[] = [];
  let i = 0;
  while (i < chars.length) {
    const ch = chars[i];
    if (ch === '√') {
      out.push({ ch, mode: 'glyph' });
      i++;
      const next = chars[i];
      if (next === '(') {
        // overline until the matching ')'
        let depth = 0;
        while (i < chars.length) {
          const c = chars[i];
          if (c === '(') depth++;
          else if (c === ')') {
            depth--;
            out.push({ ch: c, mode: 'over' });
            i++;
            if (depth === 0) break;
            continue;
          }
          out.push({ ch: c, mode: 'over' });
          i++;
        }
      } else if (next !== undefined) {
        // √2 style: single character radicand
        out.push({ ch: next, mode: 'over' });
        i++;
      }
      continue;
    }
    out.push({ ch, mode: 'plain' });
    i++;
  }
  return out;
}

// ---------------------------------------------------------------------------
// The expression line
// ---------------------------------------------------------------------------
interface ExpressionLineProps {
  items: MathItem[];
  stack: FieldRef[];
  cursor: CursorPosition;
  depth: number;
  onSelectCursor: (cursor: CursorPosition) => void;
}

const ItemList: React.FC<ExpressionLineProps> = ({ items, stack, cursor, depth, onSelectCursor }) => {
  const here = sameStack(cursor.stack, stack);
  const nodes: React.ReactNode[] = [];

  const renderTextRun = (run: TextItem[], startIdx: number, key: string) => {
    const chars = run.map((t) => t.value);
    const planned = planRun(chars);
    // cursor strictly inside this run?
    const inside = here && cursor.offset > startIdx && cursor.offset < startIdx + run.length;
    const splitAt = inside ? cursor.offset - startIdx : -1;

    const cell = (p: { ch: string; mode: CharMode }, runPos: number) => {
      const absoluteIdx = startIdx + runPos;
      const base = 'inline-block cursor-text hover:bg-black/10 rounded-[1px]';
      const cls =
        p.mode === 'glyph'
          ? `${base} font-serif font-bold text-[1.18em] leading-none px-[0.5px]`
          : p.mode === 'over'
          ? `${base} border-t-[1.5px] border-slate-900 px-[0.5px] leading-tight`
          : `${base} px-[0.5px]`;
      return (
        <span
          key={`c${absoluteIdx}`}
          className={cls}
          onClick={(e) => {
            e.stopPropagation();
            const r = e.currentTarget.getBoundingClientRect();
            const rightHalf = e.clientX > r.left + r.width / 2;
            onSelectCursor({ stack, offset: absoluteIdx + (rightHalf ? 1 : 0) });
          }}
        >
          {p.ch}
        </span>
      );
    };

    return (
      <span key={key} className="inline-flex items-center align-middle">
        {planned.map((p, runPos) => (
          <React.Fragment key={runPos}>
            {runPos === splitAt && <CursorBlock />}
            {cell(p, runPos)}
          </React.Fragment>
        ))}
      </span>
    );
  };

  const renderFrac = (frac: FractionItem, index: number) => {
    const numStack = [...stack, { fracId: frac.id, field: 'num' as const }];
    const denStack = [...stack, { fracId: frac.id, field: 'den' as const }];
    const numActive = sameStack(cursor.stack, numStack);
    const denActive = sameStack(cursor.stack, denStack);

    const field = (fieldItems: MathItem[], fieldStack: FieldRef[], active: boolean, pos: 'num' | 'den') => (
      <div
        data-field={pos}
        onClick={(e) => {
          e.stopPropagation();
          onSelectCursor({ stack: fieldStack, offset: fieldItems.length });
        }}
        className={`px-1 min-w-[18px] flex items-center justify-center cursor-pointer ${
          pos === 'num' ? 'border-b-[1.5px] border-slate-900 pb-[1px] rounded-t' : 'pt-[1px] rounded-b'
        } ${active ? 'bg-black/10 ring-1 ring-black/30' : 'hover:bg-black/5'}`}
        style={{ fontSize: '0.92em' }}
      >
        {fieldItems.length === 0 ? (
          // Empty template slot: always render a visible Casio-style slot box
          // (the old 9px "□" glyph was nearly invisible on the LCD), with the
          // blinking cursor inside it when the slot is the active field.
          <span
            className={`inline-flex items-center justify-center min-w-[16px] h-[1.2em] px-[3px] border-[1.5px] border-dashed rounded-[2px] align-middle ${
              active ? 'border-slate-900/70 bg-black/[0.07]' : 'border-slate-900/50 bg-black/[0.04]'
            }`}
          >
            {active ? <CursorBlock /> : null}
          </span>
        ) : (
          <ItemList
            items={fieldItems}
            stack={fieldStack}
            cursor={cursor}
            depth={depth + 1}
            onSelectCursor={onSelectCursor}
          />
        )}
      </div>
    );

    return (
      <span
        key={frac.id}
        data-frac={frac.id}
        data-depth={depth}
        className="inline-flex flex-col items-center justify-center align-middle mx-[3px] my-[2px] leading-none select-none"
      >
        {field(frac.num, numStack, numActive, 'num')}
        {field(frac.den, denStack, denActive, 'den')}
      </span>
    );
  };

  let i = 0;
  while (i < items.length) {
    // boundary cursor exactly before item i
    if (here && cursor.offset === i) nodes.push(<CursorBlock key={`bc${i}`} />);

    const it = items[i];
    if (it.type === 'text') {
      // group consecutive text items into one rendered run
      let j = i;
      while (j < items.length && items[j].type === 'text') j++;
      nodes.push(renderTextRun(items.slice(i, j) as TextItem[], i, `run${i}`));
      i = j;
    } else {
      nodes.push(renderFrac(it, i));
      i++;
    }
  }
  // trailing cursor at the end of this container
  if (here && cursor.offset >= items.length) nodes.push(<CursorBlock key="bce" />);

  return <span className="inline-flex items-center align-middle whitespace-nowrap">{nodes}</span>;
};

// ---------------------------------------------------------------------------
// Full LCD panel
// ---------------------------------------------------------------------------
export const NaturalDisplay: React.FC<NaturalDisplayProps> = ({
  mathState,
  result,
  exactResult,
  isExactMode,
  angleUnit,
  mode,
  isShift,
  isAlpha,
  isMemorySet,
  isStoreMode,
  hasHistoryPrev,
  hasHistoryNext,
  onSelectCursor,
}) => {
  const currentResult = isExactMode && exactResult ? exactResult : result;
  const { items, cursor } = mathState;
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keep the cursor in view when the expression grows / cursor moves
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const cursorEl = container.querySelector<HTMLElement>('.calc-cursor');
    if (!cursorEl) return;
    const cRect = cursorEl.getBoundingClientRect();
    const sRect = container.getBoundingClientRect();
    const delta = cRect.left - sRect.left - sRect.width / 2 + cRect.width / 2;
    const target = container.scrollLeft + delta;
    const max = container.scrollWidth - container.clientWidth;
    container.scrollLeft = Math.max(0, Math.min(target, Math.max(0, max)));
  }, [mathState]);

  return (
    <div className="relative w-full rounded-lg bg-[#b4c8a8] border-[3px] border-[#384234] shadow-[inset_0_3px_8px_rgba(0,0,0,0.55),0_1px_0_rgba(255,255,255,0.2)] p-2.5 select-none overflow-hidden text-slate-900 font-mono flex flex-col justify-between min-h-[142px]">
      {/* Subtle Dot Matrix & Glass overlay texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(#101010_1px,transparent_1px)] [background-size:4px_4px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/20 to-transparent"
        aria-hidden="true"
      />

      {/* TOP ANNUNCIATOR STATUS BAR */}
      <div className="relative z-10 flex items-center justify-between text-[10px] tracking-wider font-bold leading-none border-b border-black/15 pb-1">
        <div className="flex items-center gap-1.5">
          <span className={`px-0.5 rounded-[1px] transition-opacity ${isShift ? 'bg-black text-[#b4c8a8]' : 'opacity-10'}`}>
            S
          </span>
          <span className={`px-0.5 rounded-[1px] transition-opacity ${isAlpha ? 'bg-black text-[#b4c8a8]' : 'opacity-10'}`}>
            A
          </span>
          <span className={`transition-opacity ${isMemorySet ? 'opacity-100 font-black' : 'opacity-10'}`}>
            M
          </span>
          <span className={`transition-opacity ${isStoreMode ? 'opacity-100' : 'opacity-10'}`}>
            STO
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Angle Unit: D / R / G */}
          <div className="flex items-center border border-black/30 rounded px-1 bg-black/5 text-[9px]">
            <span className={angleUnit === 'DEG' ? 'font-black underline' : 'opacity-25'}>D</span>
            <span className="mx-0.5 opacity-30">/</span>
            <span className={angleUnit === 'RAD' ? 'font-black underline' : 'opacity-25'}>R</span>
            <span className="mx-0.5 opacity-30">/</span>
            <span className={angleUnit === 'GRA' ? 'font-black underline' : 'opacity-25'}>G</span>
          </div>

          {mode !== 'COMP' && (
            <span className="bg-black text-[#b4c8a8] px-1 rounded-[1px] text-[8px] uppercase">
              {mode}
            </span>
          )}

          <span className="font-bold tracking-tight text-[9px] px-0.5 bg-black/10 rounded">
            Math
          </span>

          <div className="flex items-center gap-0.5 text-[8px]">
            <span className={hasHistoryPrev ? 'opacity-100 font-bold' : 'opacity-15'}>▲</span>
            <span className={hasHistoryNext ? 'opacity-100 font-bold' : 'opacity-15'}>▼</span>
          </div>
        </div>
      </div>

      {/* NATURAL EXPRESSION (UPPER LINE WITH STRUCTURED FRACTIONS) */}
      <div
        ref={scrollRef}
        onClick={(e) => {
          // clicking the empty area parks the cursor at the end
          if (e.target === e.currentTarget) {
            onSelectCursor({ stack: [], offset: items.length });
          }
        }}
        data-testid="expression-line"
        className="relative z-10 flex-1 overflow-x-auto overflow-y-hidden flex items-center py-2 text-base tracking-normal text-slate-900 scrollbar-none min-h-[58px] cursor-text"
      >
        <div
          className="whitespace-nowrap flex items-center min-w-full"
          onClick={(e) => {
            // clicking empty space inside the wrapper also parks the cursor at the end
            if (e.target === e.currentTarget) {
              onSelectCursor({ stack: [], offset: items.length });
            }
          }}
        >
          <ItemList
            items={items}
            stack={[]}
            cursor={cursor}
            depth={0}
            onSelectCursor={onSelectCursor}
          />
        </div>
      </div>

      {/* RESULT LINE */}
      <div className="relative z-10 flex items-end justify-between min-h-[42px] pt-1 border-t border-black/10">
        <div className="text-[9px] text-slate-700/80 font-sans tracking-tight">
          {exactResult && exactResult !== result && !exactResult.includes('ERROR') ? (
            <span className="cursor-pointer hover:underline" title="Press S⇔D to toggle exact / decimal">
              {isExactMode ? '◀ Exact (S⇔D)' : '◀ Dec (S⇔D)'}
            </span>
          ) : null}
        </div>

        <div data-testid="result-line" className="text-right text-lg sm:text-xl font-bold tracking-tight text-slate-950 flex items-center justify-end leading-none overflow-x-auto scrollbar-none max-w-[75%]">
          <NaturalMathView expression={currentResult} isResult={true} />
        </div>
      </div>
    </div>
  );
};
