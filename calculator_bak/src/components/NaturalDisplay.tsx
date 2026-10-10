import React from 'react';
import { AngleUnit, CalcMode } from '../types/calculator';
import { MathExpressionState, CursorPosition, MathItem } from '../utils/mathModel';
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

// Renders an editable text segment with cursor inside it if active
function renderTextWithCursor(text: string, isActive: boolean, cursorOffset: number) {
  if (!text) {
    if (isActive) {
      return (
        <span className="inline-flex items-center justify-center min-w-[12px] h-4">
          <span className="inline-block w-1.5 h-3.5 bg-slate-900 animate-pulse" />
        </span>
      );
    }
    return <span className="opacity-40 text-[9px]">□</span>;
  }

  // Format radicals or powers inside text
  // Insert cursor at exact cursorOffset
  if (isActive) {
    const safeOff = Math.max(0, Math.min(cursorOffset, text.length));
    const before = text.slice(0, safeOff);
    const after = text.slice(safeOff);
    return (
      <span className="inline-flex items-center">
        {formatSegment(before)}
        <span className="inline-block w-1.5 h-4 bg-slate-900 mx-[0.5px] animate-pulse align-middle" />
        {formatSegment(after)}
      </span>
    );
  }

  return formatSegment(text);
}

// Formats radicals and powers nicely
function formatSegment(str: string): React.ReactNode {
  if (!str) return null;

  // Sqrt formatting: √x or √(x)
  if (str.includes('√')) {
    const parts = str.split('√');
    return (
      <span className="inline-flex items-center">
        {parts.map((part, idx) => {
          if (idx === 0) return <span key={idx}>{part}</span>;
          return (
            <span key={idx} className="inline-flex items-center mx-0.5">
              <span className="text-[1.25em] font-serif font-bold text-slate-950 -mr-[1px] leading-none">√</span>
              <span className="border-t-[2px] border-slate-950 pt-[1.5px] px-1 text-[0.92em] inline-block leading-none">
                {part}
              </span>
            </span>
          );
        })}
      </span>
    );
  }

  return <span>{str}</span>;
}

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
          <div className="flex items-center border border-black/30 rounded px-1 py-0.2 bg-black/5 text-[9px]">
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
        onClick={(e) => {
          // If clicked on whitespace, place cursor at root end
          if (e.target === e.currentTarget) {
            onSelectCursor({ offset: items.length });
          }
        }}
        className="relative z-10 flex-1 overflow-x-auto overflow-y-hidden flex items-center py-2 text-base tracking-normal text-slate-900 scrollbar-none min-h-[58px] cursor-text"
      >
        <div className="whitespace-nowrap flex items-center">
          {/* Root cursor at start */}
          {!cursor.fracId && cursor.offset === 0 && items.length === 0 && (
            <span className="inline-block w-1.5 h-4 bg-slate-900 animate-pulse align-middle" />
          )}

          {items.map((item: MathItem, index: number) => {
            const isCursorBefore = !cursor.fracId && cursor.offset === index && items.length > 0;
            const isCursorAfter = !cursor.fracId && cursor.offset === index + 1;

            if (item.type === 'text') {
              return (
                <React.Fragment key={item.id}>
                  {isCursorBefore && (
                    <span className="inline-block w-1.5 h-4 bg-slate-900 animate-pulse align-middle mx-0.5" />
                  )}
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCursor({ offset: index + 1 });
                    }}
                    className="inline-flex items-center cursor-pointer hover:bg-black/5 rounded px-0.5"
                  >
                    {formatSegment(item.value)}
                  </span>
                  {isCursorAfter && index === items.length - 1 && (
                    <span className="inline-block w-1.5 h-4 bg-slate-900 animate-pulse align-middle mx-0.5" />
                  )}
                </React.Fragment>
              );
            }

            if (item.type === 'frac') {
              const isNumActive = cursor.fracId === item.id && cursor.field === 'num';
              const isDenActive = cursor.fracId === item.id && cursor.field === 'den';

              return (
                <React.Fragment key={item.id}>
                  {isCursorBefore && (
                    <span className="inline-block w-1.5 h-4 bg-slate-900 animate-pulse align-middle mx-0.5" />
                  )}

                  {/* STRUCTURED FRACTION */}
                  <div className="inline-flex flex-col items-center justify-center align-middle mx-1.5 my-0.5 leading-none select-none">
                    {/* NUMERATOR (Upper fraction) */}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCursor({
                          fracId: item.id,
                          field: 'num',
                          offset: item.num.length,
                        });
                      }}
                      className={`px-1.5 border-b-[2px] border-slate-900 pb-[1.5px] text-center w-full min-w-[16px] flex items-center justify-center cursor-pointer rounded-t ${
                        isNumActive ? 'bg-black/10 ring-1 ring-black/30' : 'hover:bg-black/5'
                      }`}
                    >
                      {renderTextWithCursor(item.num, isNumActive, cursor.offset)}
                    </div>

                    {/* DENOMINATOR (Lower fraction) */}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCursor({
                          fracId: item.id,
                          field: 'den',
                          offset: item.den.length,
                        });
                      }}
                      className={`px-1.5 pt-[1.5px] text-center w-full min-w-[16px] flex items-center justify-center cursor-pointer rounded-b ${
                        isDenActive ? 'bg-black/10 ring-1 ring-black/30' : 'hover:bg-black/5'
                      }`}
                    >
                      {renderTextWithCursor(item.den, isDenActive, cursor.offset)}
                    </div>
                  </div>

                  {isCursorAfter && (
                    <span className="inline-block w-1.5 h-4 bg-slate-900 animate-pulse align-middle mx-0.5" />
                  )}
                </React.Fragment>
              );
            }

            return null;
          })}
        </div>
      </div>

      {/* RESULT LINE */}
      <div className="relative z-10 flex items-end justify-between min-h-[42px] pt-1 border-t border-black/10">
        <div className="text-[9px] text-slate-700/80 font-sans tracking-tight">
          {exactResult && exactResult !== result ? (
            <span className="cursor-pointer hover:underline" title="Press S⇔D to toggle exact / decimal">
              {isExactMode ? '◀ Exact (S⇔D)' : '◀ Dec (S⇔D)'}
            </span>
          ) : null}
        </div>

        <div className="text-right text-lg sm:text-xl font-bold tracking-tight text-slate-950 flex items-center justify-end leading-none">
          <NaturalMathView expression={currentResult} isResult={true} />
        </div>
      </div>
    </div>
  );
};
