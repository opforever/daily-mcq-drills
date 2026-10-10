// DEEP-DEBUG at the UI layer: drives the REAL CasioCalculator in jsdom with
// real KeyboardEvents/MouseEvents and proves cursor placement by inserting a
// marker digit after k arrow presses (the marker lands exactly where the
// cursor is). Also reproduces the "cursor goes out of place" complaints:
//   R1: ▲ pressed inside a fraction numerator must be a NO-OP — it must NOT
//       fall through to history recall and replace the expression
//   R2: after a ▲-recall, an operator key must APPEND to the recalled
//       expression (Casio), not silently swap in "Ans+"
//   R3: ▲ at the baseline NEXT TO a fraction enters the fraction (beats recall)
// Run: npx tsx tests/component-arrows.test.tsx
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
  pretendToBeVisual: true,
  url: 'http://localhost/',
});
const g = globalThis as any;
g.window = dom.window;
g.document = dom.window.document;
try { Object.defineProperty(g, 'navigator', { value: dom.window.navigator, configurable: true }); } catch { g.navigator = dom.window.navigator; }
g.HTMLElement = dom.window.HTMLElement;
g.Element = dom.window.Element;
g.Node = dom.window.Node;
g.Event = dom.window.Event;
g.KeyboardEvent = dom.window.KeyboardEvent;
g.MouseEvent = dom.window.MouseEvent;
g.MessageChannel = dom.window.MessageChannel ?? MessageChannel;
g.getComputedStyle = dom.window.getComputedStyle;
g.requestAnimationFrame = (cb: FrameRequestCallback) => setTimeout(() => cb(Date.now()), 0);
g.cancelAnimationFrame = (id: number) => clearTimeout(id);
g.IS_REACT_ACT_ENVIRONMENT = true;

let passed = 0;
let failed = 0;
const failures: string[] = [];
function ok(cond: unknown, name: string, extra = '') {
  if (cond) passed++;
  else { failed++; failures.push(`${name} ${extra}`); }
}

const React = await import('react');
const { act } = React;
const { createRoot } = await import('react-dom/client');
const { CasioCalculator } = await import('../src/components/CasioCalculator');
const root = createRoot(dom.window.document.getElementById('root')! as any);
await act(async () => { root.render(React.createElement(CasioCalculator)); });

const doc = dom.window.document;
const exprText = () => (doc.querySelector('[data-testid="expression-line"]')?.textContent || '');
const resText = () => (doc.querySelector('[data-testid="result-line"]')?.textContent || '').trim();
const fracCount = () => doc.querySelectorAll('[data-testid="expression-line"] [data-frac]').length;
const fieldText = (field: 'num' | 'den', idx = 0) =>
  (doc.querySelectorAll(`[data-testid="expression-line"] [data-field="${field}"]`)[idx]?.textContent || '');
const fracBoxesInResult = () => doc.querySelectorAll('[data-testid="result-line"] .flex-col').length;
const cursorCount = () => doc.querySelectorAll('.calc-cursor').length;
// empty fraction slots render as visible dashed template boxes (no glyph text)
const slotBoxes = (field: 'num' | 'den', idx = 0) =>
  doc.querySelectorAll(`[data-testid="expression-line"] [data-field="${field}"]`)[idx]
    ?.querySelectorAll('.border-dashed').length ?? 0;

function key(k: string) {
  act(() => {
    dom.window.dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: k, bubbles: true, cancelable: true }));
  });
}
function type(...ks: string[]) { ks.forEach(key); }
function ac() { key('Escape'); }
function lefts(n: number) { for (let i = 0; i < n; i++) key('ArrowLeft'); }
function rights(n: number) { for (let i = 0; i < n; i++) key('ArrowRight'); }
function build123() { type('1', '2'); fracKey(); type('3'); } // frac(num "12", den "3"), cursor at den end
// press the physical ▢/▢ fraction key (the only remaining template source)
function fracKey() {
  const btn = Array.from(doc.querySelectorAll('button')).find(
    (b) => (b.textContent || '').trim() === '■□'
  );
  if (!btn) throw new Error('fraction key not found');
  act(() => { btn.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true })); });
}
function clickUnit() {
  const btn = Array.from(doc.querySelectorAll('button')).find((b) => (b.textContent || '').includes('Unit:'));
  act(() => { btn!.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true })); });
}

// ---------------------------------------------------------------------------
console.log('--- A: LEFT-walk marker probes on 12/3 ---');
// pos: root-end, den-end, den-start, num-end, num-mid, num-start, root-start, (no-op)
const leftExpect: [number, string, string, string][] = [
  [0, '1239', '12', '39'], // cursor starts at den-end after typing "3"
  [1, '1293', '12', '93'], // den start
  [2, '1293', '129', '3'], // jumped to num end
  [3, '1923', '192', '3'], // num middle
  [4, '9123', '912', '3'], // num start
  [5, '9123', '12', '3'],  // exited in front of the fraction
  [6, '9123', '12', '3'],  // LEFT at the very start is a no-op
  [7, '9123', '12', '3'],
];
for (const [k, e, n, d] of leftExpect) {
  ac(); build123(); lefts(k); type('9');
  ok(exprText() === e && fieldText('num') === n && fieldText('den') === d,
     `LEFT×${k} + marker`, `expr="${exprText()}" num="${fieldText('num')}" den="${fieldText('den')}" want ${e}/${n}/${d}`);
  ok(cursorCount() === 1, `LEFT×${k}: exactly one cursor`, `${cursorCount()}`);
}

console.log('--- B: RIGHT-walk marker probes on 12/3 (den only reachable by ↓/←, Casio rule) ---');
const rightExpect: [number, string, string, string][] = [
  [0, '9123', '12', '3'],
  [1, '9123', '912', '3'],
  [2, '1923', '192', '3'],
  [3, '1293', '129', '3'],
  [4, '1239', '12', '3'], // exited past the fraction — denominator never entered by →
  [5, '1239', '12', '3'], // RIGHT at end is a no-op
];
for (const [k, e, n, d] of rightExpect) {
  ac(); build123(); lefts(5); rights(k); type('9');
  ok(exprText() === e && fieldText('num') === n && fieldText('den') === d,
     `start + RIGHT×${k} + marker`, `expr="${exprText()}" num="${fieldText('num')}" den="${fieldText('den')}" want ${e}/${n}/${d}`);
}

console.log('--- C: ↑/↓ between fields with offset clamping ---');
ac(); build123();            // cursor: den offset 1
key('ArrowUp');              // -> num offset min(1,2)=1
type('9');
ok(fieldText('num') === '192' && fieldText('den') === '3', '↑ from den(1) lands between num chars (clamped)', `num="${fieldText('num')}"`);
ac(); build123(); key('ArrowUp'); key('ArrowDown'); // num(1) -> den min(1,1)=1
type('9');
ok(fieldText('den') === '39', '↓ from num returns to den (clamped to den end)', `den="${fieldText('den')}"`);

console.log('--- D: ▲ inside a numerator must NOT blow the expression away (R1) ---');
ac(); type('5'); key('Enter');           // history now has "5"
ac();                                     // result 0, expression empty
type('1'); fracKey(); type('2');           // frac(1,2), cursor in den end
key('ArrowUp');                           // -> num
key('ArrowUp');                           // inside num, nothing nested: NO-OP
ok(fracCount() === 1 && fieldText('num') === '1' && fieldText('den') === '2',
   'R1: second ▲ inside numerator keeps the fraction (no history hijack)',
   `fracs=${fracCount()} num="${fieldText('num')}" den="${fieldText('den')}" expr="${exprText()}"`);
ok(resText() === '0', 'R1: result line untouched (no recall happened)', `res="${resText()}"`);

console.log('--- E: operator after ▲-recall APPENDS to the recalled expression (R2) ---');
ac(); type('2', '+', '3'); key('Enter');  // 5
type('4', '+', '4'); key('Enter');        // 8
ac();                                     // clear
key('ArrowUp');                           // recall "4+4"
ok(exprText() === '4+4' && resText() === '8', 'recall shows 4+4 = 8', `"${exprText()}" / "${resText()}"`);
key('+');
ok(exprText() === '4+4+', 'R2: + appends to the RECALLED expression (not Ans+)', `"${exprText()}"`);
type('1'); key('Enter');
ok(resText() === '9', 'R2: 4+4+1 = 9', `"${resText()}"`);
key('ArrowUp');
ok(exprText() === '4+4+1', '▲ recalls 4+4+1', `"${exprText()}"`);
key('7');
ok(exprText() === '7', 'digit after recall starts fresh (Casio)', `"${exprText()}"`);

console.log('--- F: post-= continuation still runs through Ans ---');
ac(); type('2', '+', '3'); key('Enter');
key('+');
ok(exprText() === 'Ans+', 'operator after = continues from Ans', `"${exprText()}"`);
ac();

console.log('--- G: ▲ at baseline next to a fraction ENTERS it (beats recall) (R3) ---');
ac(); type('5'); key('Enter'); ac();
type('1'); fracKey(); type('2');           // frac(1,2) cursor in den
key('ArrowRight');                         // exit to root AFTER the frac
key('ArrowUp');                            // adjacent -> enters num (NOT recall of "5")
type('9');
ok(fracCount() === 1 && fieldText('num') === '19' && resText() === '0',
   'R3: ▲ next to fraction enters numerator instead of recalling',
   `fracs=${fracCount()} num="${fieldText('num')}" res="${resText()}"`);

console.log('--- H: backspace semantics through a fraction ---');
ac(); build123();
key('Backspace');
ok(fieldText('den') === '' && fieldText('num') === '12', 'DEL removes last den char', `den="${fieldText('den')}"`);
key('Backspace');
ok(fieldText('den') === '' && slotBoxes('den') === 1 && fieldText('num') === '12', 'DEL at den start only jumps to num end (empty den shows a visible slot box)', `den="${fieldText('den')}" boxes=${slotBoxes('den')} num="${fieldText('num')}"`);
key('Backspace');
ok(fieldText('num') === '1', 'DEL now eats the numerator', `num="${fieldText('num')}"`);
key('Backspace');
ok(fieldText('num') === '', 'DEL empties numerator', `num="${fieldText('num')}"`);
key('Backspace');
ok(fracCount() === 0 && exprText() === '', 'DEL on the empty template removes the whole fraction', `fracs=${fracCount()} expr="${exprText()}"`);

console.log('--- I: char-by-char walk inside the sin( token ---');
ac(); type('s');                           // 'sin('
lefts(1); type('9');
ok(exprText() === 'sin9(', 'LEFT×1 inserts before the ( ', `"${exprText()}"`);
ac(); type('s');
lefts(2); type('9');
ok(exprText() === 'si9n(', 'LEFT×2 walks INSIDE the 4-char sin( token', `"${exprText()}"`);

console.log('--- J: deep nesting — ((1/2)/3) built & navigated by arrows ---');
ac();
fracKey();                                 // outer frac, cursor in outer num
fracKey();                                 // nested frac inside outer num
type('1');
key('ArrowDown'); type('2');               // nested den
key('ArrowRight');                         // exit nested -> outer num
key('ArrowRight');                         // exit outer -> root
key('ArrowDown');                          // enter outer den (adjacent)
type('3');
ok(fieldText('num', 0) === '12' && fieldText('den', 0) === '2' && fieldText('den', 1) === '3',
   'nested structure built via arrows', `outerNum="${fieldText('num', 0)}" nestedDen="${fieldText('den', 0)}" outerDen="${fieldText('den', 1)}"`);
key('Enter');
ok(resText() === '16' && fracBoxesInResult() === 1, '(1/2)/3 = 1/6 exact stacked result', `"${resText()}"`);
key('ArrowUp');                            // root end, adjacent -> outer num (end)
key('ArrowUp');                            // inside outer num, nested frac adjacent -> nested num
type('9');
ok(fieldText('num', 1) === '19', '▲▲ from baseline walks root -> outer num -> nested num', `nestedNum="${fieldText('num', 1)}"`);
ok(cursorCount() === 1, 'single cursor in deeply nested state', `${cursorCount()}`);

console.log('--- K: sin(π/6) in RAD built through the fraction template ---');
ac(); clickUnit();                         // DEG -> RAD
type('s');                                 // sin(
type('p');                                 // π
fracKey();                                 // ▢/▢ absorbs π into numerator
type('6');                                 // denominator
key('ArrowRight');                         // exit fraction
type(')');
ok(fieldText('num') === 'π' && fieldText('den') === '6', 'sin(π▢/▢6) structure', `num="${fieldText('num')}" den="${fieldText('den')}"`);
key('Enter');
ok(resText() === '12' && fracBoxesInResult() === 1, 'sin(π/6) RAD = 1/2 exact stacked', `"${resText()}"`);
clickUnit(); clickUnit();                  // RAD -> GRA -> DEG (restore)

console.log('--- L: sin(30/1) DEG — absorption inside an open call via UI ---');
ac();
type('s', '3', '0');                       // sin(30
fracKey();                                 // absorbs "30" (call stays intact)
ok(fieldText('num') === '30', 'numerator absorbed inside sin(', `num="${fieldText('num')}"`);
type('1');
key('ArrowRight');
type(')');
key('Enter');
ok(resText() === '12' && fracBoxesInResult() === 1, 'sin(30/1) DEG = 1/2', `"${resText()}"`);

console.log('--- M: click placement (char spans + fraction fields) ---');
ac(); type('1', '2', '3');
const charSpans = doc.querySelectorAll('[data-testid="expression-line"] .cursor-text');
ok(charSpans.length === 3, 'flat text renders 3 clickable char spans', `${charSpans.length}`);
act(() => { charSpans[1].dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, clientX: 0 })); });
type('9');
ok(exprText() === '1923', 'clicking a char places the cursor at that char (left half)', `"${exprText()}"`);
ac(); build123();
const numField = doc.querySelectorAll('[data-testid="expression-line"] [data-field="num"]')[0];
act(() => { numField.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true })); });
type('9');
ok(fieldText('num') === '129' && fieldText('den') === '3', 'clicking the numerator parks cursor at its end', `num="${fieldText('num')}"`);
ok(cursorCount() === 1, 'single cursor after clicks', `${cursorCount()}`);

console.log('--- N: empty fraction slots stay visible without arrow keys (reported bug) ---');
ac(); fracKey();                              // fresh ▢/▢, cursor in numerator
ok(slotBoxes('num') === 1 && slotBoxes('den') === 1,
   'fresh fraction shows BOTH slot boxes (denominator visible immediately)',
   `num=${slotBoxes('num')} den=${slotBoxes('den')}`);
ok(fieldText('den') === '' && fieldText('num') === '', 'empty slots contribute no stray glyph text');
ok(cursorCount() === 1, 'cursor sits inside the active slot box');
ac(); type('1', '2'); fracKey();              // absorbed numerator, cursor in den
ok(slotBoxes('den') === 1 && fieldText('num') === '12',
   '12▢/▢ shows the denominator slot box while typing',
   `boxes=${slotBoxes('den')} num="${fieldText('num')}"`);
ac();

console.log('--- O: ÷ never creates fraction boxes anymore ---');
ac(); type('8', '/', '4');
ok(exprText() === '8÷4' && fracCount() === 0, '÷ inserts inline division (keyboard / too)', `"${exprText()}" fracs=${fracCount()}`);
key('Enter');
ok(resText() === '2', '8÷4 = 2', `"${resText()}"`);
ac();

console.log('');
if (failures.length) {
  console.log('FAILURES:');
  failures.forEach((f) => console.log('  ✗ ' + f));
}
console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
