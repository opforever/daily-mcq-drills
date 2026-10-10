import { AngleUnit, ComplexNumber, VariableStore } from '../types/calculator';

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
  if (n > 69) return Infinity; // Casio overflow
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

  // Continued fraction expansion
  let h1 = 1, h2 = 0;
  let k1 = 0, k2 = 1;
  let b = val;
  do {
    const a = Math.floor(b);
    let aux = h1;
    h1 = a * h1 + h2;
    h2 = aux;
    aux = k1;
    k1 = a * k1 + k2;
    k2 = aux;
    b = 1 / (b - a);
  } while (Math.abs(val - h1 / k1) > val * 1e-10 && k1 < maxDenom);

  if (k1 <= maxDenom && Math.abs(val - h1 / k1) < 1e-6) {
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
    if (frac && Math.abs(val - (frac.num * sqrtVal) / frac.den) < eps) {
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
  if (piFrac && Math.abs(val - (piFrac.num * Math.PI) / piFrac.den) < eps) {
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
  const sign = val < 0 ? '-' : '';
  const abs = Math.abs(val);
  const deg = Math.floor(abs);
  const minRem = (abs - deg) * 60;
  const min = Math.floor(minRem);
  const sec = Math.round((minRem - min) * 60 * 100) / 100;
  return `${sign}${deg}°${min}'${sec}"`;
}

// Convert DMS expression like 12°30°45 to decimal
export function parseDMS(deg: number, min = 0, sec = 0): number {
  return deg + min / 60 + sec / 3600;
}

// Engineering notation formatting
export function toEng(val: number, shift = 0): string {
  if (val === 0) return '0';
  const sign = val < 0 ? '-' : '';
  const abs = Math.abs(val);
  const exp = Math.floor(Math.log10(abs));
  let engExp = Math.floor(exp / 3) * 3 + shift * 3;
  const mantissa = val / Math.pow(10, engExp);
  return `${sign}${Math.abs(mantissa).toFixed(6).replace(/\.?0+$/, '')}×10^${engExp}`;
}

// Evaluate numerical derivative d/dx(f(x)) at x = a
export function evalDerivative(exprStr: string, a: number, unit: AngleUnit, vars: VariableStore): number {
  const h = 1e-6;
  const varsPlus = { ...vars, X: a + h };
  const varsMinus = { ...vars, X: a - h };
  const fPlus = evaluateExpression(exprStr, unit, varsPlus).numValue;
  const fMinus = evaluateExpression(exprStr, unit, varsMinus).numValue;
  return (fPlus - fMinus) / (2 * h);
}

// Evaluate definite numerical integral ∫ f(x) dx from a to b using adaptive Simpson's 3/8
export function evalIntegral(exprStr: string, a: number, b: number, unit: AngleUnit, vars: VariableStore): number {
  const n = 120; // steps
  const h = (b - a) / n;
  let sum = evaluateExpression(exprStr, unit, { ...vars, X: a }).numValue + 
            evaluateExpression(exprStr, unit, { ...vars, X: b }).numValue;

  for (let i = 1; i < n; i++) {
    const x = a + i * h;
    const fx = evaluateExpression(exprStr, unit, { ...vars, X: x }).numValue;
    sum += fx * (i % 2 === 0 ? 2 : 4);
  }
  return (sum * h) / 3;
}

// Evaluate Sigma summation Σ f(x) from x = a to b
export function evalSummation(exprStr: string, a: number, b: number, unit: AngleUnit, vars: VariableStore): number {
  const start = Math.round(a);
  const end = Math.round(b);
  if (end < start) return 0;
  if (end - start > 10000) throw new Error('Time Out ERROR');
  let sum = 0;
  for (let i = start; i <= end; i++) {
    const val = evaluateExpression(exprStr, unit, { ...vars, X: i }).numValue;
    sum += val;
  }
  return sum;
}

export interface EvalResult {
  text: string;
  exact: string;
  numValue: number;
  isFraction?: boolean;
  isRadical?: boolean;
  isError?: boolean;
}

// Pre-process Casio natural expression string into evaluatable JavaScript math expression
export function preprocessCasio(raw: string, unit: AngleUnit, vars: VariableStore): string {
  let expr = raw;

  // Replace multiplication and division symbols
  expr = expr.replace(/×/g, '*').replace(/÷/g, '/');

  // Replace constants
  expr = expr.replace(/π/g, `${Math.PI}`);
  expr = expr.replace(/\be\b/g, `${Math.E}`);

  // Replace variable identifiers (A, B, C, D, E, F, X, Y, M, Ans) when used as standalone identifiers
  expr = expr.replace(/\bAns\b/g, `(${vars.Ans})`);
  expr = expr.replace(/\bA\b/g, `(${vars.A})`);
  expr = expr.replace(/\bB\b/g, `(${vars.B})`);
  expr = expr.replace(/\bC\b/g, `(${vars.C})`);
  expr = expr.replace(/\bD\b/g, `(${vars.D})`);
  expr = expr.replace(/\bE\b/g, `(${vars.E})`);
  expr = expr.replace(/\bF\b/g, `(${vars.F})`);
  expr = expr.replace(/\bM\b/g, `(${vars.M})`);
  // Note: X is reserved if inside integral/derivative, handled separately

  return expr;
}

/**
 * Main evaluation function for calculator expressions.
 * Handles trig, hyp, powers, logs, fractions, roots, etc.
 */
export function evaluateExpression(rawExpr: string, unit: AngleUnit, vars: VariableStore): EvalResult {
  if (!rawExpr || !rawExpr.trim()) {
    return { text: '0', exact: '0', numValue: 0 };
  }

  try {
    let clean = rawExpr.trim();

    // Check for special functions first:
    // 1. ∫(f, a, b)
    const intMatch = clean.match(/^∫\((.+),([-\d.]+),([-\d.]+)\)$/);
    if (intMatch) {
      const fExpr = intMatch[1];
      const a = parseFloat(intMatch[2]);
      const b = parseFloat(intMatch[3]);
      const res = evalIntegral(fExpr, a, b, unit, vars);
      return { text: `${res}`, exact: `${res}`, numValue: res };
    }

    // 2. d/dx(f, a)
    const derivMatch = clean.match(/^d\/dx\((.+),([-\d.]+)\)$/);
    if (derivMatch) {
      const fExpr = derivMatch[1];
      const a = parseFloat(derivMatch[2]);
      const res = evalDerivative(fExpr, a, unit, vars);
      return { text: `${res}`, exact: `${res}`, numValue: res };
    }

    // 3. Σ(f, a, b)
    const sumMatch = clean.match(/^Σ\((.+),([-\d.]+),([-\d.]+)\)$/);
    if (sumMatch) {
      const fExpr = sumMatch[1];
      const a = parseFloat(sumMatch[2]);
      const b = parseFloat(sumMatch[3]);
      const res = evalSummation(fExpr, a, b, unit, vars);
      return { text: `${res}`, exact: `${res}`, numValue: res };
    }

    // 4. Pol(x, y)
    const polMatch = clean.match(/^Pol\(([-\d.]+),([-\d.]+)\)$/);
    if (polMatch) {
      const x = parseFloat(polMatch[1]);
      const y = parseFloat(polMatch[2]);
      const r = Math.sqrt(x * x + y * y);
      const thetaRad = Math.atan2(y, x);
      const theta = fromRadians(thetaRad, unit);
      return {
        text: `r=${Number(r.toFixed(9))}, θ=${Number(theta.toFixed(9))}`,
        exact: `r=${Number(r.toFixed(9))}, θ=${Number(theta.toFixed(9))}`,
        numValue: r,
      };
    }

    // 5. Rec(r, θ)
    const recMatch = clean.match(/^Rec\(([-\d.]+),([-\d.]+)\)$/);
    if (recMatch) {
      const r = parseFloat(recMatch[1]);
      const theta = parseFloat(recMatch[2]);
      const rad = toRadians(theta, unit);
      const x = r * Math.cos(rad);
      const y = r * Math.sin(rad);
      return {
        text: `X=${Number(x.toFixed(9))}, Y=${Number(y.toFixed(9))}`,
        exact: `X=${Number(x.toFixed(9))}, Y=${Number(y.toFixed(9))}`,
        numValue: x,
      };
    }

    // Build JavaScript evaluatable string with robust replacements
    let js = clean;

    // Normalizations:
    // Multiplication / Division
    js = js.replace(/×/g, '*').replace(/÷/g, '/');

    // Casio x10^ power notation: 3×10^(2) or 3*10^2 -> (3*10**(2))
    js = js.replace(/(\d+(\.\d+)?)×10\^([+-]?\d+)/g, '($1 * 10**($3))');

    // Sqrt with radical symbol √
    // Handle √(x) or √num
    js = js.replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)');
    js = js.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');

    // Cube root ³√(x)
    js = js.replace(/³√\(([^)]+)\)/g, 'Math.cbrt($1)');
    js = js.replace(/³√(\d+(\.\d+)?)/g, 'Math.cbrt($1)');

    // Custom root root(n, x) or ⁿ√(x)
    js = js.replace(/(\d+(\.\d+)?)\s*ⁿ√\(([^)]+)\)/g, 'Math.pow($3, 1/($1))');

    // Trig inverse functions:
    // sin⁻¹(x), cos⁻¹(x), tan⁻¹(x)
    const wrapInvTrig = (func: string) => {
      const regex = new RegExp(`${func}⁻¹\\(([^)]+)\\)`, 'g');
      js = js.replace(regex, (_m, arg) => {
        if (unit === 'DEG') return `((Math.a${func}(${arg}) * 180) / Math.PI)`;
        if (unit === 'GRA') return `((Math.a${func}(${arg}) * 200) / Math.PI)`;
        return `Math.a${func}(${arg})`;
      });
    };
    wrapInvTrig('sin');
    wrapInvTrig('cos');
    wrapInvTrig('tan');

    // Hyperbolic inverse: sinh⁻¹, cosh⁻¹, tanh⁻¹
    js = js.replace(/sinh⁻¹\(([^)]+)\)/g, 'Math.asinh($1)');
    js = js.replace(/cosh⁻¹\(([^)]+)\)/g, 'Math.acosh($1)');
    js = js.replace(/tanh⁻¹\(([^)]+)\)/g, 'Math.atanh($1)');

    // Hyperbolic functions: sinh, cosh, tanh
    js = js.replace(/sinh\(([^)]+)\)/g, 'Math.sinh($1)');
    js = js.replace(/cosh\(([^)]+)\)/g, 'Math.cosh($1)');
    js = js.replace(/tanh\(([^)]+)\)/g, 'Math.tanh($1)');

    // Standard Trig functions with angle unit conversion:
    // sin(arg) -> Math.sin(toRadians(arg, unit))
    const wrapTrig = (func: string) => {
      const regex = new RegExp(`\\b${func}\\(([^)]+)\\)`, 'g');
      js = js.replace(regex, (_m, arg) => {
        if (unit === 'DEG') return `Math.${func}((${arg}) * Math.PI / 180)`;
        if (unit === 'GRA') return `Math.${func}((${arg}) * Math.PI / 200)`;
        return `Math.${func}(${arg})`;
      });
    };
    wrapTrig('sin');
    wrapTrig('cos');
    wrapTrig('tan');

    // Logarithms
    // log_a(b) or log(a, b) -> Math.log(b) / Math.log(a)
    js = js.replace(/log_([0-9.]+)\(([^)]+)\)/g, '(Math.log($2) / Math.log($1))');
    // Standard log(x) is base 10 on Casio
    js = js.replace(/log\(([^)]+)\)/g, 'Math.log10($1)');
    // ln(x) is natural log
    js = js.replace(/ln\(([^)]+)\)/g, 'Math.log($1)');

    // Absolute value: Abs(x) or |x|
    js = js.replace(/Abs\(([^)]+)\)/g, 'Math.abs($1)');
    js = js.replace(/\|([^|]+)\|/g, 'Math.abs($1)');

    // Factorials: (n)! or n!
    js = js.replace(/(\d+)!/g, 'fact($1)');
    js = js.replace(/\(([^)]+)\)!/g, 'fact($1)');

    // Permutation nPr and Combination nCr: e.g. 5P2 -> nPr(5, 2), 5C2 -> nCr(5, 2)
    js = js.replace(/(\d+)\s*P\s*(\d+)/g, 'nPr($1, $2)');
    js = js.replace(/(\d+)\s*C\s*(\d+)/g, 'nCr($1, $2)');

    // Exponents: a^b -> a**(b)
    js = js.replace(/\^/g, '**');

    // Percent: 50% -> (50 * 0.01)
    js = js.replace(/(\d+(\.\d+)?)%/g, '($1 * 0.01)');

    // Ans and Variables
    js = js.replace(/\bAns\b/g, `(${vars.Ans})`);
    js = js.replace(/\bA\b/g, `(${vars.A})`);
    js = js.replace(/\bB\b/g, `(${vars.B})`);
    js = js.replace(/\bC\b/g, `(${vars.C})`);
    js = js.replace(/\bD\b/g, `(${vars.D})`);
    js = js.replace(/\bE\b/g, `(${vars.E})`);
    js = js.replace(/\bF\b/g, `(${vars.F})`);
    js = js.replace(/\bM\b/g, `(${vars.M})`);
    js = js.replace(/\bX\b/g, `(${vars.X})`);
    js = js.replace(/\bY\b/g, `(${vars.Y})`);

    // Pi and e
    js = js.replace(/π/g, `${Math.PI}`);
    js = js.replace(/\be\b/g, `${Math.E}`);

    // Ran# and RanInt(a, b)
    js = js.replace(/Ran#/g, `${Math.random().toFixed(3)}`);
    js = js.replace(/RanInt\(([^,]+),([^)]+)\)/g, 'Math.floor(Math.random() * (($2) - ($1) + 1) + ($1))');

    // Implicit multiplication:
    // e.g. 2(3) -> 2*(3), (2)(3) -> (2)*(3), 2Math -> 2*Math
    js = js.replace(/(\d)\s*\(/g, '$1*(');
    js = js.replace(/\)\s*(\d)/g, ')*$1');
    js = js.replace(/\)\s*\(/g, ')*(');
    js = js.replace(/(\d)\s*(Math)/g, '$1*$2');

    // Create execution scope
    const scopeFn = new Function('Math', 'fact', 'nPr', 'nCr', `"use strict"; return (${js});`);
    const num = scopeFn(Math, factorial, nPr, nCr);

    if (typeof num !== 'number' || Number.isNaN(num)) {
      return { text: 'Math ERROR', exact: 'Math ERROR', numValue: NaN, isError: true };
    }

    if (!Number.isFinite(num)) {
      return { text: num > 0 ? 'Infinity' : '-Infinity', exact: num > 0 ? 'Infinity' : '-Infinity', numValue: num };
    }

    // Clean rounding for floating point issues (e.g. 0.1 + 0.2, sin(180) -> 0)
    let cleanedNum = num;
    if (Math.abs(cleanedNum) < 1e-13) cleanedNum = 0;
    if (Math.abs(cleanedNum - Math.round(cleanedNum)) < 1e-12) {
      cleanedNum = Math.round(cleanedNum);
    }

    // Format standard decimal text
    let text = cleanedNum.toString();
    if (text.length > 12) {
      // Casio displays up to 10-12 digits or scientific notation
      if (Math.abs(cleanedNum) >= 1e10 || (Math.abs(cleanedNum) < 1e-3 && cleanedNum !== 0)) {
        text = cleanedNum.toExponential(6).replace('e+', '×10^').replace('e-', '×10^-');
      } else {
        text = cleanedNum.toPrecision(10).replace(/\.?0+$/, '');
      }
    }

    // Try exact radical or fraction formatting (Casio Natural Display!)
    const exact = getExactRadicalForm(cleanedNum) || text;

    return {
      text,
      exact,
      numValue: cleanedNum,
      isFraction: exact.includes('/'),
      isRadical: exact.includes('√'),
    };
  } catch (_e) {
    return { text: 'Syntax ERROR', exact: 'Syntax ERROR', numValue: NaN, isError: true };
  }
}

// Complex number arithmetic (CMPLX mode)
export function evalComplex(expr: string): { re: number; im: number; text: string } {
  try {
    // Basic complex parser for a + bi form
    const clean = expr.replace(/\s+/g, '');
    let re = 0;
    let im = 0;

    // Matches standard real and imaginary parts
    if (clean === 'i') return { re: 0, im: 1, text: 'i' };
    if (clean === '-i') return { re: 0, im: -1, text: '-i' };

    // Simple single term
    if (!clean.includes('i')) {
      re = parseFloat(clean);
      return { re, im: 0, text: `${re}` };
    }

    // Parse (a)+(b)i
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

// Equation Solver: 2x2, 3x3 linear and Quadratic ax² + bx + c = 0
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
  // Numerical root finding for cubic
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

// Matrix determinant and multiplication
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
