// Logic test-suite for the rewritten calculator engine + math model.
// Run with:  npx tsx tests/logic.test.ts
import {
  evaluateExpression,
  solveForX,
  formatNumberText,
  toDMS,
  toEng,
  convertBase,
  solveQuadratic,
} from '../src/utils/mathEngine';
import {
  createInitialModel,
  insertTokenIntoModel,
  insertFractionIntoModel,
  deleteFromModel,
  deleteForwardFromModel,
  moveCursorInModel,
  mathModelToEvaluatableString,
  mathModelToDisplayString,
  modelFromString,
  clampCursor,
  MathExpressionState,
  FractionItem,
} from '../src/utils/mathModel';
import { AngleUnit, VariableStore } from '../src/types/calculator';

let passed = 0;
let failed = 0;
const failures: string[] = [];

function ok(cond: unknown, name: string, extra = '') {
  if (cond) {
    passed++;
  } else {
    failed++;
    failures.push(`${name} ${extra}`);
  }
}

function close(a: number, b: number, eps = 1e-9): boolean {
  return Math.abs(a - b) <= eps * Math.max(1, Math.abs(b));
}

const V0: VariableStore = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, X: 0, Y: 0, M: 0, Ans: 0 };
const ev = (s: string, unit: AngleUnit = 'DEG', vars: VariableStore = V0) =>
  evaluateExpression(s, unit, vars);
const num = (s: string, unit: AngleUnit = 'DEG', vars: VariableStore = V0) => ev(s, unit, vars).numValue;
const txt = (s: string, unit: AngleUnit = 'DEG', vars: VariableStore = V0) => ev(s, unit, vars).text;

// ---------------------------------------------------------------------------
console.log('--- engine: arithmetic & precedence ---');
ok(num('1+2×3') === 7, '1+2×3 = 7', `got ${num('1+2×3')}`);
ok(num('(1+2)×3') === 9, '(1+2)×3 = 9');
ok(num('2^3^2') === 512, '2^3^2 = 512 (right assoc)', `got ${num('2^3^2')}`);
ok(num('-3^2') === -9, '-3^2 = -9 (Casio unary rule)', `got ${num('-3^2')}`);
ok(num('(-3)^2') === 9, '(-3)^2 = 9');
ok(num('2^-1') === 0.5, '2^-1 = 0.5');
ok(num('10^(-2)') === 0.01, '10^(-2) = 0.01');
ok(close(num('0.1+0.2'), 0.3), '0.1+0.2 cleans to 0.3', `got ${txt('0.1+0.2')}`);
ok(txt('0.1+0.2') === '0.3', '0.1+0.2 text = 0.3', `got ${txt('0.1+0.2')}`);
ok(num('2(3)') === 6, 'implicit 2(3) = 6');
ok(num('(1+2)(3+4)') === 21, 'implicit (1+2)(3+4) = 21');
ok(num('2×10^3') === 2000, '2×10^3 = 2000');
ok(close(num('3×10^-2'), 0.03), '3×10^-2 = 0.03');
ok(num('1e3') === 1000, 'scientific 1e3 = 1000');
ok(close(num('6.62607015e-34'), 6.62607015e-34), 'Planck constant literal survives');

console.log('--- engine: the old regex-engine killers ---');
ok(close(num('sin(cos(0)+1)', 'RAD'), Math.sin(2)), 'nested sin(cos(0)+1) [was Syntax ERROR]', `got ${num('sin(cos(0)+1)', 'RAD')}`);
ok(close(num('√(sin(30))'), Math.SQRT1_2), '√(sin(30)) [was Syntax ERROR]');
ok(close(num('2π'), 2 * Math.PI), '2π = 6.283... [was 23.14!!]', `got ${num('2π')}`);
ok(num('2sin(30)') === 1, 'implicit 2sin(30) = 1');
ok(txt('sin(30)!') === 'Math ERROR', 'sin(30)! = Math ERROR (0.5!) [was Syntax ERROR]', `got ${txt('sin(30)!')}`);
ok(txt('(1+2)%') === '0.03', '(1+2)% = 0.03 [was Syntax ERROR]', `got ${txt('(1+2)%')}`);
ok(num('2×∫(X,0,1)') === 1, '2×∫(X,0,1) nested integral [was Syntax ERROR]');

console.log('--- engine: trig / hyp / logs (units) ---');
ok(close(num('sin(30)'), 0.5), 'sin(30) DEG = 0.5');
ok(close(num('sin(π/6)', 'RAD'), 0.5), 'sin(π/6) RAD = 0.5');
ok(close(num('cos(60)'), 0.5), 'cos(60) DEG = 0.5');
ok(close(num('tan(45)'), 1), 'tan(45) DEG = 1');
ok(close(num('sin⁻¹(0.5)'), 30), 'sin⁻¹(0.5) DEG = 30');
ok(close(num('cos⁻¹(0.5)'), 60), 'cos⁻¹(0.5) DEG = 60');
ok(close(num('tan⁻¹(1)'), 45), 'tan⁻¹(1) DEG = 45');
ok(close(num('sin⁻¹(0.5)', 'RAD'), Math.PI / 6), 'sin⁻¹(0.5) RAD = π/6');
ok(close(num('sin(100)', 'GRA'), Math.sin(Math.PI / 2)), 'sin(100) GRA = 1');
ok(num('sinh(0)') === 0 && num('cosh(0)') === 1, 'sinh/cosh(0)');
ok(close(num('tanh(1)', 'RAD'), Math.tanh(1)), 'tanh(1)');
ok(num('log(100)') === 2, 'log(100) = 2');
ok(num('ln(e)') === 1, 'ln(e) = 1');
ok(num('log_2(8)') === 3, 'log_2(8) = 3');
ok(close(num('e^(2)', 'RAD'), Math.exp(2)), 'e^(2)');
ok(txt('sin⁻¹(2)') === 'Math ERROR', 'sin⁻¹(2) domain -> Math ERROR');

console.log('--- engine: DMS / percent / factorial / P&C ---');
ok(close(num('30°', 'RAD'), Math.PI / 6), '30° in RAD mode = π/6');
ok(close(num('sin(30°)', 'RAD'), 0.5), 'sin(30°) unit-independent = 0.5');
ok(close(num("12°30'45\""), 12.5125), '12°30\'45" = 12.5125 deg');
ok(num('50%') === 0.5, '50% = 0.5');
ok(num('200×5%') === 10, '200×5% = 10');
ok(num('5!') === 120, '5! = 120');
ok(num('(2+3)!') === 120, '(2+3)! = 120');
ok(num('0!') === 1, '0! = 1');
ok(txt('70!') === 'Math ERROR', '70! overflow -> Math ERROR', `got ${txt('70!')}`);
ok(txt('(-3)!') === 'Math ERROR', '(-3)! -> Math ERROR');
ok(num('5P3') === 60, '5P3 = 60');
ok(num('5 P 3') === 60, '5 P 3 (spaced) = 60');
ok(num('5C2') === 10, '5C2 = 10');
ok(num('(5+1)P2') === 30, '(5+1)P2 = 30 [regex engine could not]');

console.log('--- engine: roots / abs ---');
ok(num('√(16)') === 4, '√16 = 4');
ok(close(num('√2'), Math.SQRT2), '√2');
ok(num('³√(27)') === 3, '³√27 = 3');
ok(num('³√(-8)') === -2, '³√(-8) = -2');
ok(close(num('3ⁿ√(27)'), 3, 1e-9), '3ⁿ√(27) = 3');
ok(close(num('√4^2'), 4), '√4^2 = (√4)^2 = 4');
ok(num('Abs(-5)') === 5, 'Abs(-5) = 5');
ok(num('|-3|') === 3, '|-3| = 3');
ok(num('Abs((1+2)×-3)') === 9, 'nested Abs');

console.log('--- engine: calculus templates ---');
ok(close(num('∫(X,0,10)'), 50, 1e-9), '∫(X,0,10) = 50');
ok(close(num('∫(X^2,0,1)', 'RAD'), 1 / 3, 1e-9), '∫(X²,0,1) = 1/3');
ok(close(num('∫(sin(X),0,π)', 'RAD'), 2, 1e-9), '∫sin = 2');
ok(close(num('d/dx(X^2,3)', 'RAD'), 6, 1e-6), 'd/dx(X²,3) = 6');
ok(close(num('d/dx(sin(X),0)', 'RAD'), 1, 1e-6), 'd/dx(sin X, 0) = 1');
ok(num('Σ(X,1,10)') === 55, 'Σ(X,1,10) = 55');
ok(num('Σ(X^2,1,4)') === 30, 'Σ(X²,1,4) = 30');

console.log('--- engine: variables / Ans / Pol / Rec / random ---');
ok(num('Ans+1', 'DEG', { ...V0, Ans: 5 }) === 6, 'Ans recall');
ok(num('A+B', 'DEG', { ...V0, A: 2, B: 3 }) === 5, 'A+B vars');
ok(num('2X', 'DEG', { ...V0, X: 4 }) === 8, '2X implicit var multiply');
const pol = ev('Pol(3,4)');
ok(pol.numValue === 5 && pol.text.includes('r=5') && pol.text.includes('θ=53.13010235'), 'Pol(3,4) pair result', `got ${pol.text}`);
const rec = ev('Rec(2,60)');
ok(close(rec.numValue, 1) && rec.text.includes('Y=1.732050808'), 'Rec(2,60) pair result', `got ${rec.text}`);
const ri = num('RanInt(1,6)');
ok(ri >= 1 && ri <= 6 && Number.isInteger(ri), 'RanInt(1,6) in [1,6]');
const rn = num('Ran#');
ok(rn >= 0 && rn < 1, 'Ran# in [0,1)');

console.log('--- engine: errors & formatting ---');
ok(txt('1÷0') === 'Math ERROR', '1÷0 = Math ERROR [was "Infinity" as valid result]', `got ${txt('1÷0')}`);
ok(txt('0÷0') === 'Math ERROR', '0÷0 = Math ERROR');
ok(txt('√(-1)') === 'Math ERROR', '√(-1) = Math ERROR');
ok(txt('q(3)') === 'Syntax ERROR', 'unknown identifier = Syntax ERROR');
ok(txt('1+') === 'Syntax ERROR', 'dangling operator = Syntax ERROR');
ok(txt(')') === 'Syntax ERROR', 'stray paren = Syntax ERROR');
ok(close(num('sin(30'), 0.5), 'auto-close missing paren: sin(30 = 0.5 (Casio-like)');
ok(formatNumberText(1234567890.123) === '1234567890', 'big number not mangled [was "1"!!]', `got ${formatNumberText(1234567890.123)}`);
ok(formatNumberText(1e10) === '1×10^10', '1e10 -> 1×10^10', `got ${formatNumberText(1e10)}`);
ok(formatNumberText(1e-10) === '1×10^-10', '1e-10 -> 1×10^-10', `got ${formatNumberText(1e-10)}`);
ok(formatNumberText(1 / 3) === '0.3333333333', '1/3 -> 10 sig digits', `got ${formatNumberText(1 / 3)}`);
ok(ev('((√2)/(2))+((√2)/(3))').exact === '5√2/6', 'exact radical 5√2/6', `got ${ev('((√2)/(2))+((√2)/(3))').exact}`);
ok(ev('1÷3').exact === '1/3', 'exact fraction 1/3', `got ${ev('1÷3').exact}`);
ok(toDMS(12.5) === '12°30\'0"', 'toDMS(12.5)', `got ${toDMS(12.5)}`);
ok(toDMS(12 + 59 / 60 + 59.999 / 3600) === '13°0\'0"', 'toDMS carry fix', `got ${toDMS(12 + 59 / 60 + 59.999 / 3600)}`);
ok(toEng(1234567) === '1.234567×10^6', 'toEng', `got ${toEng(1234567)}`);
ok(toEng(999999999) === '999.999999×10^6', 'toEng 999999999', `got ${toEng(999999999)}`);
ok(toEng(999999999.9999999) === '1×10^9', 'toEng mantissa rounding overflow fix', `got ${toEng(999999999.9999999)}`);
ok(convertBase(255, 'DEC', 'HEX') === 'FF', 'convertBase HEX');
ok(solveQuadratic(1, 0, -4).x1 === '2', 'solveQuadratic untouched');

console.log('--- engine: SOLVE (SHIFT+CALC) ---');
const root1 = solveForX('X^2-4', 'RAD', V0);
ok(root1 !== null && close(Math.abs(root1), 2, 1e-6), 'solve X²-4=0 -> ±2', `got ${root1}`);
const root2 = solveForX('2X+6', 'RAD', V0);
ok(root2 !== null && close(root2, -3, 1e-6), 'solve 2X+6=0 -> -3', `got ${root2}`);
const root3 = solveForX('X^2+1', 'RAD', V0);
ok(root3 === null, 'solve X²+1=0 -> null (Can\'t Solve)');

// ---------------------------------------------------------------------------
console.log('--- engine: fractions × trig deep battery ---');
ok(close(num('sin(((π)/(6)))', 'RAD'), 0.5), 'sin(π/6 fraction) RAD = 0.5');
ok(ev('sin(((π)/(6)))', 'RAD').exact === '1/2', 'sin(π/6) exact = 1/2', ev('sin(((π)/(6)))', 'RAD').exact);
ok(close(num('((sin(30))/(2))'), 0.25), 'sin(30)/2 = 0.25');
ok(ev('((sin(30))/(2))').exact === '1/4', 'sin(30)/2 exact = 1/4', ev('((sin(30))/(2))').exact);
ok(close(num('cos(((π)/(3)))', 'RAD'), 0.5), 'cos(π/3) = 0.5');
ok(close(num('tan(((45)/(1)))'), 1), 'tan(45/1) DEG = 1');
ok(close(num('sin(((50)/(1)))', 'GRA'), Math.SQRT1_2), 'sin(50/1 GRA) = √2/2');
ok(ev('sin(((50)/(1)))', 'GRA').exact === '√2/2', 'GRA exact radical √2/2', ev('sin(((50)/(1)))', 'GRA').exact);
ok(close(num('√(((1)/(4)))'), 0.5), '√(1/4) = 0.5');
ok(close(num('sin⁻¹(((1)/(2)))'), 30), 'sin⁻¹(1/2) DEG = 30');
ok(ev('((1)/(2))+((1)/(3))').exact === '5/6', '1/2+1/3 exact = 5/6', ev('((1)/(2))+((1)/(3))').exact);
ok(close(num('((2)/(3))×((9)/(4))'), 1.5), '2/3×9/4 = 1.5');
ok(ev('((2)/(3))×((9)/(4))').exact === '3/2', '... exact = 3/2', ev('((2)/(3))×((9)/(4))').exact);
ok(close(num('((1)/((2)/(3)))'), 1.5), 'nested 1/(2/3) = 1.5');
ok(ev('((1)/((2)/(3)))').exact === '3/2', 'nested exact = 3/2');
ok(num('log(((100)/(1)))') === 2, 'log(100/1) = 2');
ok(ev('sin(((π)/(2)))', 'RAD').text === '1', 'sin(π/2) RAD = 1');
ok(close(num('((sin(30))+(cos(60)))'), 1), 'sin(30)+cos(60) = 1');
ok(close(num('2×((1)/(4))'), 0.5), '2×1/4 = 0.5');
ok(ev('((π)/(2))', 'RAD').exact === 'π/2', 'π/2 exact form');
ok(close(num('((1)/(2))^(-1)'), 2), '(1/2)^(-1) = 2');
ok(num('((120)/(5!))') === 1, '120/5! = 1');
ok(close(num('d/dx(((1)/(X)),2)', 'RAD'), -0.25, 1e-6), 'd/dx(1/X) at 2 = -0.25');
ok(close(num('∫(((1)/(X)),1,e)', 'RAD'), 1, 1e-9), '∫1/X dx from 1 to e = 1');
ok(ev('Σ(((1)/(X)),1,4)', 'RAD').exact === '25/12', 'Σ 1/X (1..4) = 25/12', ev('Σ(((1)/(X)),1,4)', 'RAD').exact);
ok(close(num('sin(((30)/(1)))+((1)/(2))'), 1), 'sin(30/1)+1/2 = 1');

console.log('--- model: insertion & char-by-char cursor ---');
let s: MathExpressionState = createInitialModel();
ok(s.items.length === 0 && s.cursor.stack.length === 0 && s.cursor.offset === 0, 'boots with a CLEAN screen [was demo expression]');
s = insertTokenIntoModel(s, '12+');
ok(s.items.length === 3, 'each char is its own item (3 items for "12+")', `got ${s.items.length}`);
ok(s.cursor.offset === 3, 'cursor after insertion at end');
ok(mathModelToEvaluatableString(s.items) === '12+', 'evaluatable string');

let m = moveCursorInModel(s, 'LEFT');
ok(m && m.cursor.offset === 2, 'LEFT one char');
m = moveCursorInModel(m!, 'LEFT');
ok(m && m.cursor.offset === 1, 'LEFT twice = char-by-char [was whole-chunk jumps]');
m = moveCursorInModel(m!, 'LEFT');
ok(m && m.cursor.offset === 0, 'LEFT to start');
ok(moveCursorInModel(m!, 'LEFT') === null, 'LEFT past start returns null (no wrap/teleport)');
m = moveCursorInModel(m!, 'RIGHT');
ok(m && m.cursor.offset === 1, 'RIGHT one char');
// insert in the middle
const mid = insertTokenIntoModel(m!, '9');
ok(mathModelToEvaluatableString(mid.items) === '192+', 'mid-expression insertion works [was impossible]', `got ${mathModelToEvaluatableString(mid.items)}`);

console.log('--- model: fractions ---');
let f = createInitialModel();
f = insertTokenIntoModel(f, '12');
f = insertFractionIntoModel(f); // absorbs "12" as numerator, cursor -> denominator
ok(f.items.length === 1 && f.items[0].type === 'frac', 'FRAC absorbed preceding number into numerator');
const fr = f.items[0] as FractionItem;
ok(fr.num.length === 2 && fr.den.length === 0, 'num=12, den empty');
ok(f.cursor.stack.length === 1 && f.cursor.stack[0].field === 'den' && f.cursor.offset === 0, 'cursor parked in denominator (Casio behaviour)');
f = insertTokenIntoModel(f, '3');
ok(mathModelToEvaluatableString(f.items) === '((12)/(3))', 'fraction serializes', `got ${mathModelToEvaluatableString(f.items)}`);
ok(close(num(mathModelToEvaluatableString(f.items)), 4), '12/3 evaluates = 4');
ok(mathModelToDisplayString(f.items) === '12/3', 'display string 12/3', `got ${mathModelToDisplayString(f.items)}`);

// UP/DOWN between fields
let g = createInitialModel();
g = insertFractionIntoModel(g); // empty -> cursor in num
ok(g.cursor.stack[0]?.field === 'num', 'empty FRAC cursor in numerator');
g = insertTokenIntoModel(g, '1');
let gm = moveCursorInModel(g, 'DOWN');
ok(gm && gm.cursor.stack[0]?.field === 'den' && gm.cursor.offset === 0, 'DOWN num->den (clamped to den length)');
gm = moveCursorInModel(gm!, 'UP');
ok(gm && gm.cursor.stack[0]?.field === 'num' && gm.cursor.offset === 0, 'UP den->num (clamped to cursor column)');
gm = moveCursorInModel(gm!, 'RIGHT');
ok(gm && gm.cursor.stack[0]?.field === 'num' && gm.cursor.offset === 1, 'RIGHT moves char inside numerator');
// RIGHT at end of numerator EXITS the fraction (real Casio), does not fall into den
gm = moveCursorInModel(gm!, 'RIGHT');
ok(gm && gm.cursor.stack.length === 0 && gm.cursor.offset === 1, 'RIGHT at num end exits fraction to baseline [old bug: dropped into den]');
// LEFT steps back into the fraction denominator
gm = moveCursorInModel(gm!, 'LEFT');
ok(gm && gm.cursor.stack[0]?.field === 'den' && gm.cursor.offset === 0, 'LEFT re-enters fraction at denominator end');
// LEFT at den start -> num end
const gNumEnd = moveCursorInModel(gm!, 'LEFT');
ok(gNumEnd && gNumEnd.cursor.stack[0]?.field === 'num' && gNumEnd.cursor.offset === 1, 'LEFT at den start jumps to num end');
// LEFT at num start -> exits in front
const gNumStart = moveCursorInModel(gNumEnd!, 'LEFT');
ok(gNumStart && gNumStart.cursor.offset === 0 && gNumStart.cursor.stack[0]?.field === 'num', 'LEFT inside num moves to num start');
const gOut = moveCursorInModel(gNumStart!, 'LEFT');
ok(gOut && gOut.cursor.stack.length === 0 && gOut.cursor.offset === 0, 'LEFT at num start exits in front of fraction');

// root UP/DOWN only enter ADJACENT fractions
let h = modelFromString('1+');
h = insertFractionIntoModel(h); // "1+" then fraction; cursor inside num
h = insertTokenIntoModel(h, 'a');
h = moveCursorInModel(h, 'RIGHT')!; // exit to root after frac? num end -> exits right
// put something after: h cursor at root after frac
h = insertTokenIntoModel(h, '+2');
// walk cursor to position 1 (right after "1", far from frac at index 1.. wait "1+" = items[0],items[1]; frac = items[2]
let hc = { ...h, cursor: { stack: [], offset: 0 } };
ok(moveCursorInModel(hc, 'UP') === null, 'UP far from any fraction returns null -> history recall takes over [old bug: teleported into frac / always history]');
hc = { ...h, cursor: { stack: [], offset: 2 } }; // directly before frac
const entered = moveCursorInModel(hc, 'UP');
ok(entered && entered.cursor.stack.length === 1 && entered.cursor.stack[0].field === 'num', 'UP directly beside fraction enters its numerator');
const enteredDen = moveCursorInModel({ ...h, cursor: { stack: [], offset: 2 } }, 'DOWN');
ok(enteredDen && enteredDen.cursor.stack[0].field === 'den', 'DOWN directly beside fraction enters its denominator');

// nested fractions — the old flat-string model could NOT represent these at all
let n1 = createInitialModel();
n1 = insertFractionIntoModel(n1); // empty, cursor in num
n1 = insertTokenIntoModel(n1, '1');
n1 = moveCursorInModel(n1, 'DOWN')!; // into den
n1 = insertFractionIntoModel(n1); // NESTED fraction inside the denominator
ok(n1.cursor.stack.length === 2 && n1.cursor.stack[1].field === 'num', 'nested FRAC cursor is 2 fields deep');
n1 = insertTokenIntoModel(n1, '2');
n1 = moveCursorInModel(n1, 'DOWN')!; // nested den
n1 = insertTokenIntoModel(n1, '3');
ok(mathModelToEvaluatableString(n1.items) === '((1)/(((2)/(3))))', 'nested frac serializes ((1)/(((2)/(3))))', `got ${mathModelToEvaluatableString(n1.items)}`);
ok(close(num(mathModelToEvaluatableString(n1.items)), 1.5), '1/(2/3) evaluates = 1.5');
ok(mathModelToDisplayString(n1.items) === '1/(2/3)', 'nested display string', `got ${mathModelToDisplayString(n1.items)}`);

console.log('--- model: deletion ---');
let d1 = modelFromString('abc');
d1 = deleteFromModel(d1);
ok(mathModelToEvaluatableString(d1.items) === 'ab' && d1.cursor.offset === 2, 'backspace deletes char before cursor');
let d2 = modelFromString('a');
d2 = insertFractionIntoModel(d2); // absorbs 'a'? 'a' is a VALUE_CHAR -> yes numerator 'a'
// type denominator
d2 = insertTokenIntoModel(d2, 'b');
// cursor after 'b' in den; backspace deletes 'b'
d2 = deleteFromModel(d2);
ok(mathModelToEvaluatableString(d2.items) === '((a)/(0))', 'backspace inside den', `got ${mathModelToEvaluatableString(d2.items)}`);
// backspace at den start -> num end
d2 = deleteFromModel(d2);
ok(d2.cursor.stack[0]?.field === 'num' && d2.cursor.offset === 1, 'backspace at den start jumps to num end');
d2 = deleteFromModel(d2); // deletes 'a' from the numerator
ok(mathModelToEvaluatableString(d2.items) === '((0)/(0))' && d2.cursor.offset === 0, 'backspace empties numerator', `got ${mathModelToEvaluatableString(d2.items)}`);
d2 = deleteFromModel(d2); // both fields empty -> whole template removed
ok(d2.items.length === 0 && d2.cursor.stack.length === 0 && d2.cursor.offset === 0, 'backspace at start of EMPTY fraction removes the template');
// filled fraction, cursor at num start -> exits in front instead of deleting
let d4 = createInitialModel();
d4 = insertFractionIntoModel(d4);
d4 = moveCursorInModel(d4, 'DOWN')!; // into den
d4 = insertTokenIntoModel(d4, '5');
d4 = moveCursorInModel(d4, 'UP')!; // back to num (empty)
d4 = deleteFromModel(d4);
ok(d4.items.length === 1 && d4.cursor.stack.length === 0 && d4.cursor.offset === 0, 'backspace at num start of FILLED frac exits in front');
const before = d4; // cursor sits BEFORE the fraction now
const noop = deleteFromModel(before);
ok(noop.items.length === 1, 'backspace before a filled fraction does not nuke it');
// forward delete
let d3 = modelFromString('abc');
d3 = { ...d3, cursor: { stack: [], offset: 1 } };
d3 = deleteForwardFromModel(d3);
ok(mathModelToEvaluatableString(d3.items) === 'ac' && d3.cursor.offset === 1, 'forward delete removes char AFTER cursor [key was dead before]');

console.log('--- model: absorption rules ---');
let ab = modelFromString('sin(30)');
ab = insertFractionIntoModel(ab);
ok(mathModelToEvaluatableString(ab.items).startsWith('((sin(30))/('), 'FRAC absorbs whole sin(30) call', `got ${mathModelToEvaluatableString(ab.items)}`);
let ab2 = modelFromString('5^2');
ab2 = insertFractionIntoModel(ab2);
ok(mathModelToEvaluatableString(ab2.items).startsWith('((5^2)/('), 'FRAC absorbs 5^2 chain', `got ${mathModelToEvaluatableString(ab2.items)}`);
let ab3 = modelFromString('sin(3');
ab3 = insertFractionIntoModel(ab3);
const ab3fr = ab3.items[ab3.items.length - 1] as FractionItem;
ok(
  ab3fr.num.length === 1 && ab3fr.num[0].type === 'text' && (ab3fr.num[0] as any).value === '3' &&
  ab3.cursor.stack[0]?.field === 'den' &&
  mathModelToEvaluatableString(ab3.items) === 'sin(((3)/(0))',
  'FRAC inside an open call absorbs only the value before the cursor — sin( stays intact (Casio)',
  `got ${mathModelToEvaluatableString(ab3.items)}`
);
let ab4 = modelFromString('Ans');
ab4 = insertFractionIntoModel(ab4);
ok(mathModelToEvaluatableString(ab4.items) === '((Ans)/(0))', 'FRAC absorbs Ans', `got ${mathModelToEvaluatableString(ab4.items)}`);

console.log('--- model: clamp & serialization ---');
const stale = clampCursor(f.items, { stack: [{ fracId: 'nope', field: 'num' }], offset: 99 });
ok(stale.stack.length === 0 && stale.offset === f.items.length, 'stale cursor path clamps back to root end');
const disp = mathModelToDisplayString(modelFromString('1+2').items);
ok(disp === '1+2', 'plain display string');

// ---------------------------------------------------------------------------
console.log('');
if (failures.length) {
  console.log('FAILURES:');
  failures.forEach((f) => console.log('  ✗ ' + f));
}
console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
