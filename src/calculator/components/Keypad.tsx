import React from 'react';
import { playKeyClick } from '../utils/audio';

interface KeypadProps {
  onKeyPress: (action: string, label?: string) => void;
  isShift: boolean;
  isAlpha: boolean;
  soundEnabled: boolean;
}

export const Keypad: React.FC<KeypadProps> = ({
  onKeyPress,
  isShift,
  isAlpha,
  soundEnabled,
}) => {
  const handlePress = (action: string, label?: string, type: 'num' | 'func' | 'dpad' | 'ac' = 'func') => {
    playKeyClick(type, soundEnabled);
    onKeyPress(action, label);
  };

  return (
    <div className="w-full flex flex-col gap-2 select-none pt-1">
      {/* ----------------- TOP ROW (SHIFT, ALPHA, REPLAY D-PAD, MODE, ON) ----------------- */}
      <div className="grid grid-cols-12 gap-1.5 items-center px-1">
        {/* SHIFT & ALPHA */}
        <div className="col-span-3 flex gap-2">
          {/* SHIFT */}
          <div className="flex-1 flex flex-col items-center">
            <span className="text-[9px] font-bold text-[#e5a93c] tracking-tight mb-0.5 leading-none">SHIFT</span>
            <button
              type="button"
              onClick={() => handlePress('SHIFT', 'SHIFT', 'func')}
              aria-label="Shift key"
              className={`w-full h-8 rounded-md font-bold text-[11px] transition-all shadow-[0_2px_0_#1a1f26,0_3px_5px_rgba(0,0,0,0.6)] active:translate-y-0.5 active:shadow-[0_0_0_#1a1f26] ${
                isShift
                  ? 'bg-[#e5a93c] text-black shadow-inner ring-1 ring-[#e5a93c]'
                  : 'bg-gradient-to-b from-[#3a414e] to-[#252a33] text-[#e5a93c] hover:brightness-110 border-t border-white/20'
              }`}
            >
              SHIFT
            </button>
          </div>

          {/* ALPHA */}
          <div className="flex-1 flex flex-col items-center">
            <span className="text-[9px] font-bold text-[#e05068] tracking-tight mb-0.5 leading-none">ALPHA</span>
            <button
              type="button"
              onClick={() => handlePress('ALPHA', 'ALPHA', 'func')}
              aria-label="Alpha key"
              className={`w-full h-8 rounded-md font-bold text-[11px] transition-all shadow-[0_2px_0_#1a1f26,0_3px_5px_rgba(0,0,0,0.6)] active:translate-y-0.5 active:shadow-[0_0_0_#1a1f26] ${
                isAlpha
                  ? 'bg-[#e05068] text-white shadow-inner ring-1 ring-[#e05068]'
                  : 'bg-gradient-to-b from-[#3a414e] to-[#252a33] text-[#e05068] hover:brightness-110 border-t border-white/20'
              }`}
            >
              ALPHA
            </button>
          </div>
        </div>

        {/* METALLIC SILVER D-PAD / REPLAY CLUSTER */}
        <div className="col-span-6 flex justify-center">
          <div className="relative w-28 h-12 bg-gradient-to-b from-[#c0c7d0] via-[#8e97a3] to-[#596270] rounded-full p-0.5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_2px_4px_rgba(0,0,0,0.6)] border border-[#3e4450] flex items-center justify-center">
            <span className="absolute text-[7px] font-black tracking-widest text-[#2f3542] uppercase pointer-events-none z-10 opacity-70">
              REPLAY
            </span>
            {/* UP */}
            <button
              type="button"
              onClick={() => handlePress('UP', '▲', 'dpad')}
              aria-label="Replay Up"
              className="absolute top-0 inset-x-8 h-4 flex items-center justify-center text-slate-800 hover:text-black active:translate-y-[-1px] text-[10px] font-bold"
            >
              ▲
            </button>
            {/* DOWN */}
            <button
              type="button"
              onClick={() => handlePress('DOWN', '▼', 'dpad')}
              aria-label="Replay Down"
              className="absolute bottom-0 inset-x-8 h-4 flex items-center justify-center text-slate-800 hover:text-black active:translate-y-[1px] text-[10px] font-bold"
            >
              ▼
            </button>
            {/* LEFT */}
            <button
              type="button"
              onClick={() => handlePress('LEFT', '◀', 'dpad')}
              aria-label="Replay Left"
              className="absolute left-0 inset-y-1 w-6 flex items-center justify-center text-slate-800 hover:text-black active:translate-x-[-1px] text-[10px] font-bold"
            >
              ◀
            </button>
            {/* RIGHT */}
            <button
              type="button"
              onClick={() => handlePress('RIGHT', '▶', 'dpad')}
              aria-label="Replay Right"
              className="absolute right-0 inset-y-1 w-6 flex items-center justify-center text-slate-800 hover:text-black active:translate-x-[1px] text-[10px] font-bold"
            >
              ▶
            </button>
          </div>
        </div>

        {/* MODE & ON */}
        <div className="col-span-3 flex gap-2">
          {/* MODE / SETUP */}
          <div className="flex-1 flex flex-col items-center">
            <span className="text-[9px] font-bold text-[#e5a93c] tracking-tight mb-0.5 leading-none">SETUP</span>
            <button
              type="button"
              onClick={() => handlePress('MODE', 'MODE', 'func')}
              aria-label="Mode key"
              className="w-full h-8 rounded-md font-bold text-[10px] bg-gradient-to-b from-[#3a414e] to-[#252a33] text-slate-200 hover:brightness-110 shadow-[0_2px_0_#1a1f26,0_3px_5px_rgba(0,0,0,0.6)] active:translate-y-0.5 active:shadow-[0_0_0_#1a1f26] border-t border-white/20"
            >
              MODE
            </button>
          </div>

          {/* ON */}
          <div className="flex-1 flex flex-col items-center">
            <span className="text-[9px] opacity-0 mb-0.5 leading-none">.</span>
            <button
              type="button"
              onClick={() => handlePress('ON', 'ON', 'func')}
              aria-label="On key"
              className="w-full h-8 rounded-md font-bold text-[10px] bg-gradient-to-b from-[#3a414e] to-[#252a33] text-slate-200 hover:brightness-110 shadow-[0_2px_0_#1a1f26,0_3px_5px_rgba(0,0,0,0.6)] active:translate-y-0.5 active:shadow-[0_0_0_#1a1f26] border-t border-white/20"
            >
              ON
            </button>
          </div>
        </div>
      </div>

      {/* ----------------- FUNCTION ROW 1: CALC, d/dx / ∫, x^-1 / x!, log_a(b) / Σ ----------------- */}
      <div className="grid grid-cols-4 gap-2 px-1">
        {/* CALC */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full px-1 text-[8.5px] font-bold leading-none mb-0.5">
            <span className="text-[#e5a93c]">SOLVE</span>
            <span className="text-[#e05068]">=</span>
          </div>
          <button
            type="button"
            onClick={() => handlePress('CALC', 'CALC', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 font-semibold text-[10.5px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15"
          >
            CALC
          </button>
        </div>

        {/* INTEGRAL / DERIVATIVE */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full px-1 text-[8.5px] font-bold leading-none mb-0.5">
            <span className="text-[#e5a93c]">d/dx</span>
            <span className="text-[#e05068]">:</span>
          </div>
          <button
            type="button"
            onClick={() => handlePress('INTEGRAL', '∫dx', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 font-serif text-[11px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15"
          >
            ∫dx
          </button>
        </div>

        {/* x^-1 / x! */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center w-full text-[8.5px] font-bold text-[#e5a93c] leading-none mb-0.5">
            x!
          </div>
          <button
            type="button"
            onClick={() => handlePress('INV', 'x⁻¹', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 font-medium text-[11px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15"
          >
            x⁻¹
          </button>
        </div>

        {/* log_a(b) / Σ */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center w-full text-[8.5px] font-bold text-[#e5a93c] leading-none mb-0.5">
            Σ
          </div>
          <button
            type="button"
            onClick={() => handlePress('LOG_AB', 'log_a', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 font-sans text-[10px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15 flex items-center justify-center gap-0.5"
          >
            <span>log</span><span className="text-[8px] opacity-70">□</span><span className="text-[8px] opacity-70">□</span>
          </button>
        </div>
      </div>

      {/* ----------------- FUNCTION ROW 2: Fraction, sqrt, x^2, x^y, log, ln ----------------- */}
      <div className="grid grid-cols-6 gap-1 px-1">
        {/* Fraction */}
        <div className="flex flex-col items-center">
          <span className="text-[7.5px] font-bold text-[#e5a93c] h-3 leading-none truncate">■ ■/□</span>
          <button
            type="button"
            onClick={() => handlePress('FRAC', '■/□', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 text-[10px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15 flex flex-col items-center justify-center leading-none"
          >
            <span className="border-b border-slate-300 px-1 text-[8px]">■</span>
            <span className="text-[8px]">□</span>
          </button>
        </div>

        {/* Square root */}
        <div className="flex flex-col items-center">
          <span className="text-[7.5px] font-bold text-[#e5a93c] h-3 leading-none">³√■</span>
          <button
            type="button"
            onClick={() => handlePress('SQRT', '√', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 text-[12px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15 flex items-center justify-center"
          >
            √■
          </button>
        </div>

        {/* x^2 / DEC */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full text-[7.5px] font-bold h-3 leading-none px-0.5">
            <span className="text-[#e5a93c]">x³</span>
            <span className="text-[#e05068]">DEC</span>
          </div>
          <button
            type="button"
            onClick={() => handlePress('SQR', 'x²', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 text-[11px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15"
          >
            x²
          </button>
        </div>

        {/* x^y / HEX */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full text-[7.5px] font-bold h-3 leading-none px-0.5">
            <span className="text-[#e5a93c]">ⁿ√■</span>
            <span className="text-[#e05068]">HEX</span>
          </div>
          <button
            type="button"
            onClick={() => handlePress('POW', 'x^■', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 text-[11px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15"
          >
            x<sup>■</sup>
          </button>
        </div>

        {/* log / BIN */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full text-[7.5px] font-bold h-3 leading-none px-0.5">
            <span className="text-[#e5a93c]">10^x</span>
            <span className="text-[#e05068]">BIN</span>
          </div>
          <button
            type="button"
            onClick={() => handlePress('LOG', 'log', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 text-[10px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15"
          >
            log
          </button>
        </div>

        {/* ln / OCT */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full text-[7.5px] font-bold h-3 leading-none px-0.5">
            <span className="text-[#e5a93c]">e^x</span>
            <span className="text-[#e05068]">OCT</span>
          </div>
          <button
            type="button"
            onClick={() => handlePress('LN', 'ln', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 text-[10px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15"
          >
            ln
          </button>
        </div>
      </div>

      {/* ----------------- FUNCTION ROW 3: (-), °''', hyp, sin, cos, tan ----------------- */}
      <div className="grid grid-cols-6 gap-1 px-1">
        {/* (-) / A */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full text-[7.5px] font-bold h-3 leading-none px-0.5">
            <span className="text-[#e5a93c]">°</span>
            <span className="text-[#e05068]">A</span>
          </div>
          <button
            type="button"
            onClick={() => handlePress('NEG', '(-)', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 text-[11px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15"
          >
            (-)
          </button>
        </div>

        {/* DMS °''' / B */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full text-[7.5px] font-bold h-3 leading-none px-0.5">
            <span className="text-[#e5a93c]">←</span>
            <span className="text-[#e05068]">B</span>
          </div>
          <button
            type="button"
            onClick={() => handlePress('DMS', '° \' "', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 text-[10px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15"
          >
            ° ' ''
          </button>
        </div>

        {/* hyp / C (Abs) */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full text-[7.5px] font-bold h-3 leading-none px-0.5">
            <span className="text-[#e5a93c]">Abs</span>
            <span className="text-[#e05068]">C</span>
          </div>
          <button
            type="button"
            onClick={() => handlePress('HYP', 'hyp', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 text-[10px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15"
          >
            hyp
          </button>
        </div>

        {/* sin / sin^-1 / D */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full text-[7.5px] font-bold h-3 leading-none px-0.5">
            <span className="text-[#e5a93c]">sin⁻¹</span>
            <span className="text-[#e05068]">D</span>
          </div>
          <button
            type="button"
            onClick={() => handlePress('SIN', 'sin', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 text-[10px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15"
          >
            sin
          </button>
        </div>

        {/* cos / cos^-1 / E */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full text-[7.5px] font-bold h-3 leading-none px-0.5">
            <span className="text-[#e5a93c]">cos⁻¹</span>
            <span className="text-[#e05068]">E</span>
          </div>
          <button
            type="button"
            onClick={() => handlePress('COS', 'cos', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 text-[10px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15"
          >
            cos
          </button>
        </div>

        {/* tan / tan^-1 / F */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full text-[7.5px] font-bold h-3 leading-none px-0.5">
            <span className="text-[#e5a93c]">tan⁻¹</span>
            <span className="text-[#e05068]">F</span>
          </div>
          <button
            type="button"
            onClick={() => handlePress('TAN', 'tan', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 text-[10px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15"
          >
            tan
          </button>
        </div>
      </div>

      {/* ----------------- FUNCTION ROW 4: RCL, ENG, (, ), S<=>D, M+ ----------------- */}
      <div className="grid grid-cols-6 gap-1 px-1">
        {/* RCL / STO */}
        <div className="flex flex-col items-center">
          <span className="text-[7.5px] font-bold text-[#e5a93c] h-3 leading-none">STO</span>
          <button
            type="button"
            onClick={() => handlePress('RCL', 'RCL', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 text-[9.5px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15"
          >
            RCL
          </button>
        </div>

        {/* ENG / i */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full text-[7.5px] font-bold h-3 leading-none px-0.5">
            <span className="text-[#e5a93c]">←</span>
            <span className="text-[#e05068] italic font-serif">i</span>
          </div>
          <button
            type="button"
            onClick={() => handlePress('ENG', 'ENG', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 text-[9.5px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15"
          >
            ENG
          </button>
        </div>

        {/* ( / % */}
        <div className="flex flex-col items-center">
          <span className="text-[7.5px] font-bold text-[#e5a93c] h-3 leading-none">%</span>
          <button
            type="button"
            onClick={() => handlePress('OPEN_PAREN', '(', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 text-[11px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15"
          >
            (
          </button>
        </div>

        {/* ) / , / X */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full text-[7.5px] font-bold h-3 leading-none px-0.5">
            <span className="text-[#e5a93c]">,</span>
            <span className="text-[#e05068]">X</span>
          </div>
          <button
            type="button"
            onClick={() => handlePress('CLOSE_PAREN', ')', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 text-[11px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15"
          >
            )
          </button>
        </div>

        {/* S<=>D / Y */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full text-[7.5px] font-bold h-3 leading-none px-0.5">
            <span className="text-[#e5a93c] truncate text-[6.5px]">a⇄b/c</span>
            <span className="text-[#e05068]">Y</span>
          </div>
          <button
            type="button"
            onClick={() => handlePress('S_D', 'S⇔D', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 text-[9px] font-bold shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15 tracking-tighter"
          >
            S⇔D
          </button>
        </div>

        {/* M+ / M- / M */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full text-[7.5px] font-bold h-3 leading-none px-0.5">
            <span className="text-[#e5a93c]">M-</span>
            <span className="text-[#e05068]">M</span>
          </div>
          <button
            type="button"
            onClick={() => handlePress('M_PLUS', 'M+', 'func')}
            className="w-full h-7 rounded bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 text-[10px] shadow-[0_2px_0_#16191f] active:translate-y-0.5 border-t border-white/15"
          >
            M+
          </button>
        </div>
      </div>

      {/* ----------------- NUMBER PAD ROW 1: 7, 8, 9, DEL (GREEN), AC (GREEN) ----------------- */}
      <div className="grid grid-cols-5 gap-1.5 px-1 pt-1">
        {/* 7 / CONST */}
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-[#e5a93c] h-3 leading-none">CONST</span>
          <button
            type="button"
            onClick={() => handlePress('7', '7', 'num')}
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#404958] to-[#2c333f] text-white font-bold text-base shadow-[0_2.5px_0_#191e25,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-white/20"
          >
            7
          </button>
        </div>

        {/* 8 / CONV */}
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-[#e5a93c] h-3 leading-none">CONV</span>
          <button
            type="button"
            onClick={() => handlePress('8', '8', 'num')}
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#404958] to-[#2c333f] text-white font-bold text-base shadow-[0_2.5px_0_#191e25,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-white/20"
          >
            8
          </button>
        </div>

        {/* 9 / CLR */}
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-[#e5a93c] h-3 leading-none">CLR</span>
          <button
            type="button"
            onClick={() => handlePress('9', '9', 'num')}
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#404958] to-[#2c333f] text-white font-bold text-base shadow-[0_2.5px_0_#191e25,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-white/20"
          >
            9
          </button>
        </div>

        {/* DEL (CASIO LIME GREEN KEYCAP) */}
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-[#e5a93c] h-3 leading-none">INS</span>
          <button
            type="button"
            onClick={() => handlePress('DEL', 'DEL', 'ac')}
            aria-label="Delete"
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#94c973] to-[#72a853] text-[#1a3809] font-black text-sm tracking-tight shadow-[0_2.5px_0_#43672d,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-[#c6f0ab]/60 hover:brightness-105"
          >
            DEL
          </button>
        </div>

        {/* AC (CASIO LIME GREEN KEYCAP) */}
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-[#e5a93c] h-3 leading-none">OFF</span>
          <button
            type="button"
            onClick={() => handlePress('AC', 'AC', 'ac')}
            aria-label="All Clear"
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#94c973] to-[#72a853] text-[#1a3809] font-black text-sm tracking-tight shadow-[0_2.5px_0_#43672d,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-[#c6f0ab]/60 hover:brightness-105"
          >
            AC
          </button>
        </div>
      </div>

      {/* ----------------- NUMBER PAD ROW 2: 4, 5, 6, × (nPr), ÷ (nCr) ----------------- */}
      <div className="grid grid-cols-5 gap-1.5 px-1">
        {/* 4 / MATRIX */}
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-[#e5a93c] h-3 leading-none">MATRIX</span>
          <button
            type="button"
            onClick={() => handlePress('4', '4', 'num')}
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#404958] to-[#2c333f] text-white font-bold text-base shadow-[0_2.5px_0_#191e25,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-white/20"
          >
            4
          </button>
        </div>

        {/* 5 / VECTOR */}
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-[#e5a93c] h-3 leading-none">VECTOR</span>
          <button
            type="button"
            onClick={() => handlePress('5', '5', 'num')}
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#404958] to-[#2c333f] text-white font-bold text-base shadow-[0_2.5px_0_#191e25,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-white/20"
          >
            5
          </button>
        </div>

        {/* 6 */}
        <div className="flex flex-col items-center">
          <span className="text-[8px] opacity-0 h-3 leading-none">.</span>
          <button
            type="button"
            onClick={() => handlePress('6', '6', 'num')}
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#404958] to-[#2c333f] text-white font-bold text-base shadow-[0_2.5px_0_#191e25,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-white/20"
          >
            6
          </button>
        </div>

        {/* × / nPr */}
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-[#e5a93c] h-3 leading-none">nPr</span>
          <button
            type="button"
            onClick={() => handlePress('MUL', '×', 'func')}
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 font-bold text-lg shadow-[0_2.5px_0_#16191f,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-white/20"
          >
            ×
          </button>
        </div>

        {/* ÷ / nCr */}
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-[#e5a93c] h-3 leading-none">nCr</span>
          <button
            type="button"
            onClick={() => handlePress('DIV', '÷', 'func')}
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 font-bold text-lg shadow-[0_2.5px_0_#16191f,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-white/20"
          >
            ÷
          </button>
        </div>
      </div>

      {/* ----------------- NUMBER PAD ROW 3: 1, 2, 3, + (Pol), - (Rec) ----------------- */}
      <div className="grid grid-cols-5 gap-1.5 px-1">
        {/* 1 / STAT */}
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-[#e5a93c] h-3 leading-none">STAT</span>
          <button
            type="button"
            onClick={() => handlePress('1', '1', 'num')}
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#404958] to-[#2c333f] text-white font-bold text-base shadow-[0_2.5px_0_#191e25,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-white/20"
          >
            1
          </button>
        </div>

        {/* 2 / CMPLX */}
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-[#e5a93c] h-3 leading-none">CMPLX</span>
          <button
            type="button"
            onClick={() => handlePress('2', '2', 'num')}
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#404958] to-[#2c333f] text-white font-bold text-base shadow-[0_2.5px_0_#191e25,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-white/20"
          >
            2
          </button>
        </div>

        {/* 3 / BASE */}
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-[#e5a93c] h-3 leading-none">BASE</span>
          <button
            type="button"
            onClick={() => handlePress('3', '3', 'num')}
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#404958] to-[#2c333f] text-white font-bold text-base shadow-[0_2.5px_0_#191e25,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-white/20"
          >
            3
          </button>
        </div>

        {/* + / Pol */}
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-[#e5a93c] h-3 leading-none">Pol</span>
          <button
            type="button"
            onClick={() => handlePress('ADD', '+', 'func')}
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 font-bold text-lg shadow-[0_2.5px_0_#16191f,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-white/20"
          >
            +
          </button>
        </div>

        {/* - / Rec */}
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-[#e5a93c] h-3 leading-none">Rec</span>
          <button
            type="button"
            onClick={() => handlePress('SUB', '-', 'func')}
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 font-bold text-lg shadow-[0_2.5px_0_#16191f,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-white/20"
          >
            −
          </button>
        </div>
      </div>

      {/* ----------------- NUMBER PAD ROW 4: 0, ., ×10^x, Ans, = ----------------- */}
      <div className="grid grid-cols-5 gap-1.5 px-1 pb-1">
        {/* 0 / Rnd */}
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-[#e5a93c] h-3 leading-none">Rnd</span>
          <button
            type="button"
            onClick={() => handlePress('0', '0', 'num')}
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#404958] to-[#2c333f] text-white font-bold text-base shadow-[0_2.5px_0_#191e25,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-white/20"
          >
            0
          </button>
        </div>

        {/* . / Ran# / RanInt */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full text-[7px] font-bold h-3 leading-none px-0.5">
            <span className="text-[#e5a93c]">Ran#</span>
            <span className="text-[#e05068]">RanInt</span>
          </div>
          <button
            type="button"
            onClick={() => handlePress('DOT', '.', 'num')}
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#404958] to-[#2c333f] text-white font-bold text-base shadow-[0_2.5px_0_#191e25,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-white/20"
          >
            •
          </button>
        </div>

        {/* ×10^x / π / e */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full text-[7.5px] font-bold h-3 leading-none px-0.5">
            <span className="text-[#e5a93c]">π</span>
            <span className="text-[#e05068]">e</span>
          </div>
          <button
            type="button"
            onClick={() => handlePress('EXP', '×10^x', 'func')}
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 font-semibold text-[10.5px] shadow-[0_2.5px_0_#16191f,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-white/20"
          >
            ×10<sup>x</sup>
          </button>
        </div>

        {/* Ans / DRG▶ */}
        <div className="flex flex-col items-center">
          <span className="text-[7.5px] font-bold text-[#e5a93c] h-3 leading-none">DRG▶</span>
          <button
            type="button"
            onClick={() => handlePress('ANS', 'Ans', 'func')}
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 font-bold text-[11px] shadow-[0_2.5px_0_#16191f,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-white/20"
          >
            Ans
          </button>
        </div>

        {/* = */}
        <div className="flex flex-col items-center">
          <span className="text-[8px] opacity-0 h-3 leading-none">.</span>
          <button
            type="button"
            onClick={() => handlePress('EQUALS', '=', 'func')}
            aria-label="Equals"
            className="w-full h-9 rounded-md bg-gradient-to-b from-[#343b46] to-[#222730] text-slate-100 font-black text-xl shadow-[0_2.5px_0_#16191f,0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 border-t border-white/20 hover:brightness-110"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};
