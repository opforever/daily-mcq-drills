import { AngleUnit, ComplexNumber, VariableStore } from '../types/calculator';

// ===========================================================================
//  Basic math helpers
// ===========================================================================

// Greatest common divisor
export function gcd(a: number, b: number): number {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  while (b > 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

// Convert angle according to current unit to radians
export function toRadians(angle: number, unit: AngleUnit): number {
  if (unit === 'DEG') return (angle * Math.PI) / 180;
  if (unit === 'GRA') return (angle * Math.PI) / 200;
  return angle;
}

// Convert radians back to current unit
export function fromRadians(rad: number, unit: AngleUnit): number {
  if (unit === 'DEG') return (rad * 180) / Math.PI;
  if (unit === 'GRA') return (rad * 200) / Math.PI;
  return rad;
}

// Factorial
export function factorial(n: number): number {
  if (n < 0 || !Number.isInteger(n)) throw new Error('Math ERROR');
  if (n > 69) return Infinity; // Casio overflow -> Math ERROR at top level
  if (n === 0 || n === 1) return 1;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

// Permutation nPr
export function nPr(n: number, r: number): number {
  if (n < 0 || r < 0 || r > n || !Number.isInteger(n) || !Number.isInteger(r)) {
    throw new Error('Math ERROR');
  }
  return factorial(n) / factorial(n - r);
}

// Combination nCr
export function nCr(n: number, r: number): number {
  if (n < 0 || r < 0 || r > n || !Number.isInteger(n) || !Number.isInteger(r)) {
    throw new Error('Math ERROR');
  }
  return factorial(n) / (factorial(r) * factorial(n - r));
}

// Convert decimal float into fraction [num, den]
export function toFraction(val: number, maxDenom = 1000000): { num: number; den: number } | null {
  if (!Number.isFinite(val)) return null;
  const sign = val < 0 ? -1 : 1;
  val = Math.abs(val);

  // If already whole number
  if (Math.abs(val - Math.round(val)) < 1e-11) {
    return { num: sign * Math.round(val), den: 1 };
  }

  // Continued fraction expansion (iteration-guarded: pathological inputs
  // could otherwise spin forever)
  let h1 = 1, h2 = 0;
  let k1 = 0, k2 = 1;
  let b = val;
  let iter = 0;
  do {
    const a = Math.floor(b);
    let aux = h1;
    h1 = a * h1 + h2;
    h2 = aux;
    aux = k1;
    k1 = a * k1 + k2;
    k2 = aux;
    const fracPart = b - a;
    if (Math.abs(fracPart) < 1e-14) break;
    b = 1 / fracPart;
    iter++;
  } while (Math.abs(val - h1 / k1) > val * 1e-10 && k1 < maxDenom && iter < 64 && Number.isFinite(b));

  if (k1 > 0 && k1 <= maxDenom && Math.abs(val - h1 / k1) < 1e-6) {
    return { num: sign * h1, den: k1 };
  }
  return null;
}

// Formats number into exact radical form like Casio fx-991ES Plus (e.g., 5√2 / 6, 2√3, 3/4)
export function getExactRadicalForm(val: number): string | null {
  if (!Number.isFinite(val)) return null;
  const eps = 1e-7;

  // Check if it's a multiple of sqrt(k) where k in [2, 3, 5, 6, 7, 10]
  const roots = [2, 3, 5, 6, 7, 10];
  for (const r of roots) {
    const sqrtVal = Math.sqrt(r);
    const quotient = val / sqrtVal;
    const frac = toFraction(quotient, 1000);
    // num === 0 would render as "0√2" for tiny values — never a useful form
    if (frac && frac.num !== 0 && Math.abs(val - (frac.num * sqrtVal) / frac.den) < eps) {
      const { num, den } = frac;
      const numPrefix = Math.abs(num) === 1 ? (num < 0 ? '-' : '') : `${num}`;
      const radicalStr = `${numPrefix}√${r}`;
      if (den === 1) return radicalStr;
      return `${radicalStr}/${den}`;
    }
  }

  // Check if it's a multiple of Pi
  const piQuotient = val / Math.PI;
  const piFrac = toFraction(piQuotient, 1000);
  if (piFrac && piFrac.num !== 0 && Math.abs(val - (piFrac.num * Math.PI) / piFrac.den) < eps) {
    const { num, den } = piFrac;
    const numPrefix = Math.abs(num) === 1 ? (num < 0 ? '-' : '') : `${num}`;
    const piStr = `${numPrefix}π`;
    if (den === 1) return piStr;
    return `${piStr}/${den}`;
  }

  // Check standard rational fraction
  const standardFrac = toFraction(val, 10000);
  if (standardFrac && standardFrac.den > 1) {
    return `${standardFrac.num}/${standardFrac.den}`;
  }

  return null;
}

// Convert number to Degrees, Minutes, Seconds format: 12°34'56.7"
export function toDMS(val: number): string {
  if (!Number.isFinite(val)) return 'Math ERROR';
  const sign = val < 0 ? '-' : '';
  const abs = Math.abs(val);
  let deg = Math.floor(abs);
  let min = Math.floor((abs - deg) * 60);
  let sec = Math.round(((abs - deg) * 60 - min) * 60 * 100) / 100;
  // carry rounding overflow (e.g. 59.999" -> 60")
  if (sec >= 60) {
    sec -= 60;
    min += 1;
  }
  if (min >= 60) {
    min -= 60;
    deg += 1;
  }
  return `${sign}${deg}°${min}'${sec}"`;
}

// Convert DMS expression like 12°30'45" to decimal degrees
export function parseDMS(deg: number, min = 0, sec = 0): number {
  return deg + min / 60 + sec / 3600;
}

// Engineering notation formatting
export function toEng(val: number, shift = 0): string {
  if (!Number.isFinite(val)) return 'Math ERROR';
  if (val === 0) return '0';
  const sign = val < 0 ? '-' : '';
  const abs = Math.abs(val);
  const exp = Math.floor(Math.log10(abs));
  let engExp = Math.floor(exp / 3) * 3 + shift * 3;
  let mantissa = Math.abs(val) / Math.pow(10, engExp);
  // rounding can push the mantissa to 1000 (e.g. 999999999.9999999 -> 1000.000000)
  if (mantissa.toFixed(6).startsWith('1000')) {
    engExp += 3;
    mantissa = Math.abs(val) / Math.pow(10, engExp);
  }
  return `${sign}${mantissa.toFixed(6).replace(/\.?0+$/, '')}×10^${engExp}`;
}

// ===========================================================================
//  Number formatting (Casio-like 10 significant digits)
// ===========================================================================

function cleanNumber(num: number): number {
  let c = num;
  if (Math.abs(c) < 1e-13) c = 0; // kill floating point dust (sin(π) etc.)
  if (c !== 0 && Math.abs(c) < 1e15 && Math.abs(c - Math.round(c)) < 1e-12) {
    c = Math.round(c);
  }
  return c;
}

/**
 * Formats a number for the result line. The old implementation ran
 * `.replace(/\.?0+$/, '')` over `toPrecision(10)` output, which mangled
 * large integers (1234567890.123 displayed as "1"). This version rounds
 * via Number(toPrecision(10)) and only switches to scientific notation
 * at the Casio display limits (>= 1e10 or < 1e-9).
 */
export function formatNumberText(num: number): string {
  const c = cleanNumber(num);
  const abs = Math.abs(c);
  if (c !== 0 && (abs >= 1e10 || abs < 1e-9)) {
    return c
      .toExponential(6)
      .replace(/\.?0+e/, 'e')
      .replace('e+', '×10^')
      .replace('e-', '×10^-');
  }
  return String(Number(c.toPrecision(10)));
}

// ===========================================================================
//  Tokenizer
// ===========================================================================

type Tok =
  | { t: 'num'; v: number }
  | { t: 'op'; v: '+' | '-' | '×' | '÷' | '^' | '!' | '%' | '(' | ')' | ',' }
  | { t: 'id'; v: string }
  | { t: 'rad'; v: '√' | '³√' }
  | { t: 'nroot' } // ⁿ√
  | { t: 'bar' } // |
  | { t: 'deg' } // °
  | { t: 'min' } // '
  | { t: 'sec' } // "
  | { t: 'integral' } // ∫
  | { t: 'sigma' } // Σ
  | { t: 'ddx' } // d/dx
  | { t: 'ran' }; // Ran#

function tokenize(input: string): Tok[] {
  const src = input
    .replace(/−/g, '-') // unicode minus -> ascii
    .replace(/\*/g, '×')
    .replace(/\//g, '÷');
  // NOTE: '/' -> '÷' breaks the literal "d/dx"; it is re-detected below from
  // the original source via the 'd÷dx' sequence the tokenizer sees.
  const toks: Tok[] = [];
  let i = 0;

  while (i < src.length) {
    const ch = src[i];

    if (/\s/.test(ch)) {
      i++;
      continue;
    }

    // numbers (incl. scientific notation like 6.62607015e-34)
    const numMatch = /^(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/.exec(src.slice(i));
    if (numMatch) {
      const v = parseFloat(numMatch[0]);
      if (Number.isNaN(v)) throw new Error('Syntax ERROR');
      toks.push({ t: 'num', v });
      i += numMatch[0].length;
      continue;
    }

    // d/dx (after '/' normalization it reads "d÷dx")
    if (src.startsWith('d÷dx', i)) {
      toks.push({ t: 'ddx' });
      i += 4;
      continue;
    }

    // Ran#
    if (src.startsWith('Ran#', i)) {
      toks.push({ t: 'ran' });
      i += 4;
      continue;
    }

    // radicals (multi-char first)
    if (src.startsWith('³√', i)) {
      toks.push({ t: 'rad', v: '³√' });
      i += 2;
      continue;
    }
    if (src.startsWith('ⁿ√', i)) {
      toks.push({ t: 'nroot' });
      i += 2;
      continue;
    }
    if (ch === '√') {
      toks.push({ t: 'rad', v: '√' });
      i++;
      continue;
    }

    // special single characters
    if (ch === '∫') { toks.push({ t: 'integral' }); i++; continue; }
    if (ch === 'Σ') { toks.push({ t: 'sigma' }); i++; continue; }
    if (ch === '|') { toks.push({ t: 'bar' }); i++; continue; }
    if (ch === '°' || ch === '∡') { toks.push({ t: 'deg' }); i++; continue; }
    if (ch === "'") { toks.push({ t: 'min' }); i++; continue; }
    if (ch === '"' || ch === '″') { toks.push({ t: 'sec' }); i++; continue; }
    if (ch === 'π') { toks.push({ t: 'id', v: 'π' }); i++; continue; }

    if ('+-×÷^!%(),'.includes(ch)) {
      toks.push({ t: 'op', v: ch as '+' | '-' | '×' | '÷' | '^' | '!' | '%' | '(' | ')' | ',' });
      i++;
      continue;
    }

    // identifiers: sin, sin⁻¹, log_2, Ans, RanInt, A, X, e, ...
    // NOTE: digits are only part of an identifier after '_' (log_2). Without
    // that rule "5P3" tokenized as 5 + "P3" and nPr/nCr never matched.
    const idMatch = /^[A-Za-z][A-Za-z⁻¹]*(?:_[0-9]+)?/.exec(src.slice(i));
    if (idMatch) {
      toks.push({ t: 'id', v: idMatch[0] });
      i += idMatch[0].length;
      continue;
    }

    throw new Error('Syntax ERROR');
  }

  return toks;
}

// ===========================================================================
//  AST
// ===========================================================================

export type Ast =
  | { k: 'num'; v: number }
  | { k: 'var'; name: string }
  | { k: 'neg'; a: Ast }
  | { k: 'bin'; op: '+' | '-' | '×' | '÷' | '^' | 'P' | 'C'; a: Ast; b: Ast }
  | { k: 'fact'; a: Ast }
  | { k: 'pct'; a: Ast }
  | { k: 'dms'; deg: Ast; min: Ast | null; sec: Ast | null }
  | { k: 'call'; fn: string; args: Ast[]; base?: number }
  | { k: 'sqrt'; a: Ast }
  | { k: 'cbrt'; a: Ast }
  | { k: 'nroot'; n: Ast; a: Ast }
  | { k: 'abs'; a: Ast }
  | { k: 'ran' }
  | { k: 'integral'; f: Ast; a: Ast; b: Ast }
  | { k: 'summation'; f: Ast; a: Ast; b: Ast }
  | { k: 'deriv'; f: Ast; at: Ast };

const FN1 = new Set([
  'sin', 'cos', 'tan',
  'sinh', 'cosh', 'tanh',
  'sin⁻¹', 'cos⁻¹', 'tan⁻¹',
  'sinh⁻¹', 'cosh⁻¹', 'tanh⁻¹',
  'log', 'ln', 'Abs',
]);
const FN2 = new Set(['Pol', 'Rec', 'RanInt']);
const VAR_NAMES = new Set(['A', 'B', 'C', 'D', 'E', 'F', 'X', 'Y', 'M', 'Ans', 'e', 'π']);

// ===========================================================================
//  Recursive-descent parser
// ===========================================================================

class Parser {
  private toks: Tok[];
  private pos = 0;

  constructor(toks: Tok[]) {
    this.toks = toks;
  }

  private peek(at = 0): Tok | undefined {
    return this.toks[this.pos + at];
  }

  private next(): Tok {
    const t = this.toks[this.pos];
    if (!t) throw new Error('Syntax ERROR');
    this.pos++;
    return t;
  }

  private isOp(t: Tok | undefined, v: string): boolean {
    return !!t && t.t === 'op' && t.v === v;
  }

  /** Consume ')' if present; tolerate a missing one at end of input (Casio
   *  auto-closes parentheses when you press "="). */
  private expectCloseParen(): void {
    if (this.isOp(this.peek(), ')')) {
      this.pos++;
      return;
    }
    if (this.pos >= this.toks.length) return; // auto-close at EOF
    throw new Error('Syntax ERROR');
  }

  private expectOpenParen(): void {
    if (!this.isOp(this.peek(), '(')) throw new Error('Syntax ERROR');
    this.pos++;
  }

  parseAll(): Ast {
    const ast = this.parseExpr();
    if (this.pos < this.toks.length) throw new Error('Syntax ERROR');
    return ast;
  }

  // expr := term (('+' | '-') term)*
  private parseExpr(): Ast {
    let left = this.parseTerm();
    for (;;) {
      const t = this.peek();
      if (this.isOp(t, '+') || this.isOp(t, '-')) {
        this.pos++;
        const right = this.parseTerm();
        left = { k: 'bin', op: this.isOp(t, '+') ? '+' : '-', a: left, b: right };
      } else break;
    }
    return left;
  }

  private startsPrimary(t: Tok | undefined): boolean {
    if (!t) return false;
    switch (t.t) {
      case 'num':
      case 'id':
      case 'rad':
      case 'integral':
      case 'sigma':
      case 'ddx':
      case 'ran':
        return true;
      case 'op':
        return t.v === '(';
      default:
        return false;
    }
  }

  // term := unary (('×'|'÷') unary | P unary | C unary | <implicit ×> unary)*
  private parseTerm(): Ast {
    let left = this.parseUnary();
    for (;;) {
      const t = this.peek();
      if (!t) break;
      if (this.isOp(t, '×') || this.isOp(t, '÷')) {
        this.pos++;
        const right = this.parseUnary();
        left = { k: 'bin', op: this.isOp(t, '×') ? '×' : '÷', a: left, b: right };
        continue;
      }
      // nPr / nCr written as infix "5P2" / "5C2" (keypad inserts " P "/" C ")
      if (t.t === 'id' && (t.v === 'P' || t.v === 'C') && this.startsPrimary(this.peek(1))) {
        this.pos++;
        const right = this.parseUnary();
        left = { k: 'bin', op: t.v as 'P' | 'C', a: left, b: right };
        continue;
      }
      // implicit multiplication: 2(3), 2π, (1+2)(3+4), 2sin(30), Ans(2) ...
      if (this.startsPrimary(t)) {
        const right = this.parseUnary();
        left = { k: 'bin', op: '×', a: left, b: right };
        continue;
      }
      break;
    }
    return left;
  }

  // unary := ('-' | '+') unary | power
  private parseUnary(): Ast {
    const t = this.peek();
    if (this.isOp(t, '-')) {
      this.pos++;
      return { k: 'neg', a: this.parseUnary() };
    }
    if (this.isOp(t, '+')) {
      this.pos++;
      return this.parseUnary();
    }
    return this.parsePower();
  }

  // power := postfix ('^' unary)?   (right associative; 2^-3 allowed)
  private parsePower(): Ast {
    const base = this.parsePostfix();
    if (this.isOp(this.peek(), '^')) {
      this.pos++;
      return { k: 'bin', op: '^', a: base, b: this.parseUnary() };
    }
    return base;
  }

  // postfix := primary ('!' | '%' | °DMS-chain | ⁿ√(x))*
  private parsePostfix(): Ast {
    let a = this.parsePrimary();
    for (;;) {
      const t = this.peek();
      if (!t) break;
      if (this.isOp(t, '!')) {
        this.pos++;
        a = { k: 'fact', a };
        continue;
      }
      if (this.isOp(t, '%')) {
        this.pos++;
        a = { k: 'pct', a };
        continue;
      }
      if (t.t === 'deg') {
        this.pos++;
        let min: Ast | null = null;
        let sec: Ast | null = null;
        // 12°30'45" chain
        const n1 = this.peek();
        const n2 = this.peek(1);
        if (n1 && n1.t === 'num' && n2 && n2.t === 'min') {
          this.pos += 2;
          min = { k: 'num', v: n1.v };
          const n3 = this.peek();
          const n4 = this.peek(1);
          if (n3 && n3.t === 'num' && n4 && n4.t === 'sec') {
            this.pos += 2;
            sec = { k: 'num', v: n3.v };
          }
        }
        a = { k: 'dms', deg: a, min, sec };
        continue;
      }
      if (t.t === 'nroot') {
        // <base> ⁿ√(x)  — e.g. 3ⁿ√(27)
        this.pos++;
        this.expectOpenParen();
        const inner = this.parseExpr();
        this.expectCloseParen();
        a = { k: 'nroot', n: a, a: inner };
        continue;
      }
      break;
    }
    return a;
  }

  private parseArgList(count: number): Ast[] {
    this.expectOpenParen();
    const args: Ast[] = [];
    args.push(this.parseExpr());
    while (this.isOp(this.peek(), ',')) {
      this.pos++;
      args.push(this.parseExpr());
    }
    this.expectCloseParen();
    if (args.length !== count) throw new Error('Syntax ERROR');
    return args;
  }

  private parsePrimary(): Ast {
    const t = this.next();

    if (t.t === 'num') return { k: 'num', v: t.v };

    if (t.t === 'op' && t.v === '(') {
      const inner = this.parseExpr();
      this.expectCloseParen();
      return inner;
    }

    if (t.t === 'bar') {
      const inner = this.parseExpr();
      if (this.peek()?.t === 'bar') this.pos++;
      else if (this.pos < this.toks.length) throw new Error('Syntax ERROR');
      return { k: 'abs', a: inner };
    }

    if (t.t === 'rad') {
      const operand = this.parsePrimary();
      return t.v === '√' ? { k: 'sqrt', a: operand } : { k: 'cbrt', a: operand };
    }

    if (t.t === 'integral' || t.t === 'sigma' || t.t === 'ddx') {
      this.expectOpenParen();
      const f = this.parseExpr();
      if (!this.isOp(this.peek(), ',')) throw new Error('Syntax ERROR');
      this.pos++;
      const a = this.parseExpr();
      if (t.t === 'ddx') {
        this.expectCloseParen();
        return { k: 'deriv', f, at: a };
      }
      if (!this.isOp(this.peek(), ',')) throw new Error('Syntax ERROR');
      this.pos++;
      const b = this.parseExpr();
      this.expectCloseParen();
      return t.t === 'integral'
        ? { k: 'integral', f, a, b }
        : { k: 'summation', f, a, b };
    }

    if (t.t === 'ran') return { k: 'ran' };

    if (t.t === 'id') {
      const name = t.v;
      if (FN1.has(name)) {
        const args = this.parseArgList(1);
        return { k: 'call', fn: name, args };
      }
      if (FN2.has(name)) {
        const args = this.parseArgList(2);
        return { k: 'call', fn: name, args };
      }
      if (name.startsWith('log_')) {
        const base = Number(name.slice(4));
        if (!Number.isFinite(base) || base <= 0 || base === 1) throw new Error('Syntax ERROR');
        const args = this.parseArgList(1);
        return { k: 'call', fn: 'logb', args, base };
      }
      if (VAR_NAMES.has(name)) return { k: 'var', name };
      throw new Error('Syntax ERROR'); // unknown identifier (incl. 'i' in COMP mode)
    }

    throw new Error('Syntax ERROR');
  }
}

export function parseExpression(raw: string): Ast {
  return new Parser(tokenize(raw)).parseAll();
}

// ===========================================================================
//  AST evaluator
// ===========================================================================

function simpson(f: (x: number) => number, a: number, b: number): number {
  const n = 200; // even number of intervals
  const h = (b - a) / n;
  let sum = f(a) + f(b);
  for (let i = 1; i < n; i++) {
    const v = f(a + i * h);
    if (Number.isNaN(v)) return NaN;
    sum += v * (i % 2 === 0 ? 2 : 4);
  }
  return (sum * h) / 3;
}

function evalAst(node: Ast, unit: AngleUnit, vars: VariableStore): number {
  switch (node.k) {
    case 'num':
      return node.v;

    case 'var': {
      switch (node.name) {
        case 'π': return Math.PI;
        case 'e': return Math.E;
        case 'Ans': return vars.Ans;
        default: {
          if (node.name in vars) return vars[node.name as keyof VariableStore];
          throw new Error('Syntax ERROR');
        }
      }
    }

    case 'neg':
      return -evalAst(node.a, unit, vars);

    case 'bin': {
      const a = evalAst(node.a, unit, vars);
      const b = evalAst(node.b, unit, vars);
      switch (node.op) {
        case '+': return a + b;
        case '-': return a - b;
        case '×': return a * b;
        case '÷': return a / b; // ÷0 -> ±Infinity -> Math ERROR at top level
        case '^': return Math.pow(a, b);
        case 'P': return nPr(a, b);
        case 'C': return nCr(a, b);
      }
      break;
    }

    case 'fact':
      return factorial(evalAst(node.a, unit, vars));

    case 'pct':
      return evalAst(node.a, unit, vars) / 100;

    case 'dms': {
      const deg =
        evalAst(node.deg, unit, vars) +
        (node.min ? evalAst(node.min, unit, vars) : 0) / 60 +
        (node.sec ? evalAst(node.sec, unit, vars) : 0) / 3600;
      // degree-tagged value converted into the CURRENT angle unit
      return fromRadians(toRadians(deg, 'DEG'), unit);
    }

    case 'sqrt':
      return Math.sqrt(evalAst(node.a, unit, vars));

    case 'cbrt':
      return Math.cbrt(evalAst(node.a, unit, vars));

    case 'nroot': {
      const n = evalAst(node.n, unit, vars);
      const x = evalAst(node.a, unit, vars);
      if (n === 0) return NaN;
      // odd roots of negative numbers are real (³√-8 = -2)
      if (x < 0 && Number.isInteger(n) && Math.abs(n % 2) === 1) {
        return -Math.pow(-x, 1 / n);
      }
      return Math.pow(x, 1 / n);
    }

    case 'abs':
      return Math.abs(evalAst(node.a, unit, vars));

    case 'ran':
      // Casio Ran#: uniform 3-decimal value in [0, 1)
      return Math.floor(Math.random() * 1000) / 1000;

    case 'call': {
      const a = node.args.map((arg) => evalAst(arg, unit, vars));
      switch (node.fn) {
        case 'sin': return Math.sin(toRadians(a[0], unit));
        case 'cos': return Math.cos(toRadians(a[0], unit));
        case 'tan': return Math.tan(toRadians(a[0], unit));
        case 'sin⁻¹': return fromRadians(Math.asin(a[0]), unit);
        case 'cos⁻¹': return fromRadians(Math.acos(a[0]), unit);
        case 'tan⁻¹': return fromRadians(Math.atan(a[0]), unit);
        case 'sinh': return Math.sinh(a[0]);
        case 'cosh': return Math.cosh(a[0]);
        case 'tanh': return Math.tanh(a[0]);
        case 'sinh⁻¹': return Math.asinh(a[0]);
        case 'cosh⁻¹': return Math.acosh(a[0]);
        case 'tanh⁻¹': return Math.atanh(a[0]);
        case 'log': return Math.log10(a[0]);
        case 'ln': return Math.log(a[0]);
        case 'logb': return Math.log(a[0]) / Math.log(node.base as number);
        case 'Abs': return Math.abs(a[0]);
        case 'RanInt': {
          const lo = Math.ceil(a[0]);
          const hi = Math.floor(a[1]);
          if (hi < lo) throw new Error('Math ERROR');
          return lo + Math.floor(Math.random() * (hi - lo + 1));
        }
        case 'Pol': return Math.hypot(a[0], a[1]); // θ reported at top level
        case 'Rec': return a[0] * Math.cos(toRadians(a[1], unit)); // Y at top level
        default: throw new Error('Syntax ERROR');
      }
    }

    case 'integral': {
      const lo = evalAst(node.a, unit, vars);
      const hi = evalAst(node.b, unit, vars);
      if (!Number.isFinite(lo) || !Number.isFinite(hi)) throw new Error('Math ERROR');
      if (Math.abs(hi - lo) > 1e7) throw new Error('Time Out ERROR');
      return simpson((x) => evalAst(node.f, unit, { ...vars, X: x }), lo, hi);
    }

    case 'summation': {
      const start = Math.round(evalAst(node.a, unit, vars));
      const end = Math.round(evalAst(node.b, unit, vars));
      if (!Number.isFinite(start) || !Number.isFinite(end)) throw new Error('Math ERROR');
      if (end < start) return 0;
      if (end - start > 100000) throw new Error('Time Out ERROR');
      let sum = 0;
      for (let i = start; i <= end; i++) {
        sum += evalAst(node.f, unit, { ...vars, X: i });
      }
      return sum;
    }

    case 'deriv': {
      const at = evalAst(node.at, unit, vars);
      if (!Number.isFinite(at)) throw new Error('Math ERROR');
      const h = 1e-5 * Math.max(1, Math.abs(at));
      const f = (x: number) => evalAst(node.f, unit, { ...vars, X: x });
      return (f(at + h) - f(at - h)) / (2 * h);
    }
  }

  throw new Error('Syntax ERROR');
}

// String-based numeric helpers (kept for API compatibility) ------------------

// Evaluate numerical derivative d/dx(f(x)) at x = a
export function evalDerivative(exprStr: string, a: number, unit: AngleUnit, vars: VariableStore): number {
  const h = 1e-5 * Math.max(1, Math.abs(a));
  const fPlus = evaluateExpression(exprStr, unit, { ...vars, X: a + h }).numValue;
  const fMinus = evaluateExpression(exprStr, unit, { ...vars, X: a - h }).numValue;
  return (fPlus - fMinus) / (2 * h);
}

// Evaluate definite numerical integral ∫ f(x) dx from a to b (composite Simpson)
export function evalIntegral(exprStr: string, a: number, b: number, unit: AngleUnit, vars: VariableStore): number {
  const n = 200;
  const h = (b - a) / n;
  const f = (x: number) => evaluateExpression(exprStr, unit, { ...vars, X: x }).numValue;
  let sum = f(a) + f(b);
  for (let i = 1; i < n; i++) {
    sum += f(a + i * h) * (i % 2 === 0 ? 2 : 4);
  }
  return (sum * h) / 3;
}

// Evaluate Sigma summation Σ f(x) from x = a to b
export function evalSummation(exprStr: string, a: number, b: number, unit: AngleUnit, vars: VariableStore): number {
  const start = Math.round(a);
  const end = Math.round(b);
  if (end < start) return 0;
  if (end - start > 100000) throw new Error('Time Out ERROR');
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += evaluateExpression(exprStr, unit, { ...vars, X: i }).numValue;
  }
  return sum;
}

// ===========================================================================
//  Public evaluation entry point
// ===========================================================================

export interface EvalResult {
  text: string;
  exact: string;
  numValue: number;
  isFraction?: boolean;
  isRadical?: boolean;
  isError?: boolean;
}

function errorResult(message: string): EvalResult {
  return { text: message, exact: message, numValue: NaN, isError: true };
}

/**
 * Main evaluation function for calculator expressions.
 *
 * Fully rewritten: the previous implementation rewrote the expression with a
 * pile of regexes and ran it through `new Function(...)`. That broke on any
 * nested call (sin(cos(0)+1) -> Syntax ERROR), mangled "2π" into "23.14...",
 * silently mis-scoped factorials, and even allowed arbitrary JS evaluation.
 * The new implementation is a hand-written tokenizer + recursive descent
 * parser + tree-walking evaluator with real operator precedence:
 *   unary − < ^ (right assoc) < postfix ! % ° < implicit × < × ÷ P C < + −
 */
export function evaluateExpression(rawExpr: string, unit: AngleUnit, vars: VariableStore): EvalResult {
  if (!rawExpr || !rawExpr.trim()) {
    return { text: '0', exact: '0', numValue: 0 };
  }

  try {
    const ast = parseExpression(rawExpr.trim());

    // Pol(x, y) / Rec(r, θ) report a PAIR of values like the real fx-991ES
    if (ast.k === 'call' && (ast.fn === 'Pol' || ast.fn === 'Rec')) {
      const p = evalAst(ast.args[0], unit, vars);
      const q = evalAst(ast.args[1], unit, vars);
      if (!Number.isFinite(p) || !Number.isFinite(q)) return errorResult('Math ERROR');
      if (ast.fn === 'Pol') {
        const r = Math.hypot(p, q);
        const theta = fromRadians(Math.atan2(q, p), unit);
        const text = `r=${formatNumberText(r)}, θ=${formatNumberText(theta)}`;
        return { text, exact: text, numValue: r };
      }
      const x = p * Math.cos(toRadians(q, unit));
      const y = p * Math.sin(toRadians(q, unit));
      const text = `X=${formatNumberText(x)}, Y=${formatNumberText(y)}`;
      return { text, exact: text, numValue: x };
    }

    const num = evalAst(ast, unit, vars);

    if (typeof num !== 'number' || Number.isNaN(num)) {
      return errorResult('Math ERROR');
    }
    if (!Number.isFinite(num)) {
      // Casio shows Math ERROR for ÷0 / overflow (not "Infinity")
      return errorResult('Math ERROR');
    }

    const cleaned = cleanNumber(num);
    const text = formatNumberText(cleaned);

    // Try exact radical or fraction formatting (Casio Natural Display!)
    const exact = getExactRadicalForm(cleaned) || text;

    return {
      text,
      exact,
      numValue: cleaned,
      isFraction: exact.includes('/'),
      isRadical: exact.includes('√'),
    };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg === 'Math ERROR' || msg === 'Time Out ERROR') return errorResult(msg);
    return errorResult('Syntax ERROR');
  }
}

/**
 * SHIFT+CALC ("SOLVE"): numerically solves f(X) = 0 for the variable X via
 * sign-change scan + bisection, polished with Newton-Raphson. Returns null
 * when no root is found (calculator shows "Can't Solve").
 */
export function solveForX(expr: string, unit: AngleUnit, vars: VariableStore): number | null {
  const f = (x: number): number => {
    const r = evaluateExpression(expr, unit, { ...vars, X: x });
    return r.isError ? NaN : r.numValue;
  };

  // coarse scan for a sign change, then bisect
  const N = 400;
  const lo = -50;
  const hi = 50;
  let prevX = lo;
  let prev = f(lo);
  for (let i = 1; i <= N; i++) {
    const x = lo + ((hi - lo) * i) / N;
    const v = f(x);
    if (Number.isFinite(prev)) {
      if (Math.abs(prev) < 1e-12) return prevX;
      if (Number.isFinite(v) && prev * v < 0) {
        let a = prevX;
        let b = x;
        let fa = prev;
        for (let k = 0; k < 100; k++) {
          const m = (a + b) / 2;
          const fm = f(m);
          if (!Number.isFinite(fm)) break;
          if (fa * fm <= 0) {
            b = m;
          } else {
            a = m;
            fa = fm;
          }
        }
        return (a + b) / 2;
      }
    }
    prevX = x;
    prev = v;
  }
  if (Number.isFinite(prev) && Math.abs(prev) < 1e-12) return prevX;

  // Newton-Raphson from a few sensible seeds
  for (const seed of [0, 1, -1, 5, -5, 0.5]) {
    let x = seed;
    for (let k = 0; k < 80; k++) {
      const fx = f(x);
      if (!Number.isFinite(fx)) break;
      if (Math.abs(fx) < 1e-11) return x;
      const h = 1e-6 * Math.max(1, Math.abs(x));
      const d = (f(x + h) - f(x - h)) / (2 * h);
      if (!Number.isFinite(d) || d === 0) break;
      const nx = x - fx / d;
      if (!Number.isFinite(nx)) break;
      if (Math.abs(nx - x) < 1e-13) {
        x = nx;
        break;
      }
      x = nx;
      if (Math.abs(x) > 1e8) break;
    }
    const check = f(x);
    if (Number.isFinite(check) && Math.abs(check) < 1e-7) return x;
  }

  return null;
}

// ===========================================================================
//  Complex numbers / Base-N / Equation & matrix helpers (unchanged API)
// ===========================================================================

// Complex number arithmetic (CMPLX mode)
export function evalComplex(expr: string): { re: number; im: number; text: string } {
  try {
    const clean = expr.replace(/\s+/g, '');
    let re = 0;
    let im = 0;

    if (clean === 'i') return { re: 0, im: 1, text: 'i' };
    if (clean === '-i') return { re: 0, im: -1, text: '-i' };

    if (!clean.includes('i')) {
      re = parseFloat(clean);
      return { re, im: 0, text: `${re}` };
    }

    const m = clean.match(/^([+-]?\d*(\.\d+)?)\s*([+-])\s*(\d*(\.\d+)?)?i$/);
    if (m) {
      re = m[1] ? parseFloat(m[1]) : 0;
      const sign = m[3] === '-' ? -1 : 1;
      im = sign * (m[4] ? parseFloat(m[4]) : 1);
      return { re, im, text: `${re}${im >= 0 ? '+' : ''}${im}i` };
    }

    return { re: 0, im: 0, text: 'Math ERROR' };
  } catch {
    return { re: 0, im: 0, text: 'Math ERROR' };
  }
}

// Base-N conversions (DEC, HEX, BIN, OCT)
export function convertBase(val: number, from: string, to: string): string {
  try {
    let intVal = Math.round(val);
    if (Number.isNaN(intVal)) return 'Math ERROR';

    // 32-bit integer conversion standard on fx-991ES Plus
    intVal = intVal | 0;

    switch (to) {
      case 'HEX':
        return (intVal >>> 0).toString(16).toUpperCase();
      case 'BIN':
        return (intVal >>> 0).toString(2);
      case 'OCT':
        return (intVal >>> 0).toString(8);
      case 'DEC':
      default:
        return intVal.toString(10);
    }
  } catch {
    return 'Math ERROR';
  }
}

// Equation Solver: Quadratic ax² + bx + c = 0
export function solveQuadratic(a: number, b: number, c: number): { x1: string; x2: string } {
  if (a === 0) {
    if (b === 0) return { x1: 'No Solution', x2: 'No Solution' };
    const res = -c / b;
    return { x1: `${res}`, x2: `${res}` };
  }
  const disc = b * b - 4 * a * c;
  if (disc >= 0) {
    const s = Math.sqrt(disc);
    const x1 = (-b + s) / (2 * a);
    const x2 = (-b - s) / (2 * a);
    return {
      x1: getExactRadicalForm(x1) || `${Number(x1.toFixed(8))}`,
      x2: getExactRadicalForm(x2) || `${Number(x2.toFixed(8))}`,
    };
  } else {
    const re = -b / (2 * a);
    const im = Math.sqrt(-disc) / (2 * a);
    return {
      x1: `${Number(re.toFixed(4))} + ${Number(Math.abs(im).toFixed(4))}i`,
      x2: `${Number(re.toFixed(4))} - ${Number(Math.abs(im).toFixed(4))}i`,
    };
  }
}

export function solveCubic(a: number, b: number, c: number, d: number): { x1: string; x2: string; x3: string } {
  if (a === 0) {
    const quad = solveQuadratic(b, c, d);
    return { x1: quad.x1, x2: quad.x2, x3: 'N/A' };
  }
  // Newton-Raphson to find one real root
  const f = (x: number) => a * x * x * x + b * x * x + c * x + d;
  const df = (x: number) => 3 * a * x * x + 2 * b * x + c;
  let root1 = 0;
  for (let i = 0; i < 50; i++) {
    const val = f(root1);
    const dval = df(root1);
    if (Math.abs(dval) < 1e-9) break;
    const next = root1 - val / dval;
    if (Math.abs(next - root1) < 1e-10) {
      root1 = next;
      break;
    }
    root1 = next;
  }

  // Deflate polynomial: (ax³ + bx² + cx + d) / (x - root1)
  const A = a;
  const B = b + a * root1;
  const C = c + B * root1;
  const remaining = solveQuadratic(A, B, C);

  return {
    x1: `${Number(root1.toFixed(8))}`,
    x2: remaining.x1,
    x3: remaining.x2,
  };
}

// 2 Unknowns linear solver:
// a1*x + b1*y = c1
// a2*x + b2*y = c2
export function solveLinear2(a1: number, b1: number, c1: number, a2: number, b2: number, c2: number): { x: string; y: string } {
  const det = a1 * b2 - a2 * b1;
  if (Math.abs(det) < 1e-12) {
    return { x: 'Infinite / No Sol', y: 'Infinite / No Sol' };
  }
  const x = (c1 * b2 - c2 * b1) / det;
  const y = (a1 * c2 - a2 * c1) / det;
  return {
    x: getExactRadicalForm(x) || `${Number(x.toFixed(8))}`,
    y: getExactRadicalForm(y) || `${Number(y.toFixed(8))}`,
  };
}

// Matrix determinant helpers
export function matrixDet2x2(m: number[][]): number {
  return m[0][0] * m[1][1] - m[0][1] * m[1][0];
}

export function matrixDet3x3(m: number[][]): number {
  return (
    m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) -
    m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) +
    m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0])
  );
}

// keep ComplexNumber type re-exported for consumers of this module
export type { ComplexNumber };
