// Component-level smoke tests: renders the REAL CasioCalculator in jsdom and
// drives it with real KeyboardEvents — verifying arrow keys, history recall,
// post-"=" continuation, fractions, etc. end-to-end.
// Run with:  npx tsx tests/component.test.tsx
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
  pretendToBeVisual: true,
  url: 'http://localhost/',
});

const g = globalThis as any;
g.window = dom.window;
g.document = dom.window.document;
try {
  Object.defineProperty(g, 'navigator', { value: dom.window.navigator, configurable: true });
} catch {
  g.navigator = dom.window.navigator;
}
g.HTMLElement = dom.window.HTMLElement;
g.Element = dom.window.Element;
g.Node = dom.window.Node;
g.Event = dom.window.Event;
g.KeyboardEvent = dom.window.KeyboardEvent;
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
  else {
    failed++;
    failures.push(`${name} ${extra}`);
  }
}

const React = await import('react');
const { act } = React;
const { createRoot } = await import('react-dom/client');
const { CasioCalculator } = await import('../src/components/CasioCalculator');

const rootEl = dom.window.document.getElementById('root')!;
const root = createRoot(rootEl as any);
await act(async () => {
  root.render(React.createElement(CasioCalculator));
});

const $expr = () => dom.window.document.querySelector('[data-testid="expression-line"]');
const $res = () => dom.window.document.querySelector('[data-testid="result-line"]');
const exprText = () => ($expr()?.textContent || '').replace(/▌/g, '');
const resText = () => ($res()?.textContent || '').trim();
const cursorCount = () => dom.window.document.querySelectorAll('.calc-cursor').length;
// fraction boxes render stacked num/den — their textContent concatenates ("2/3" -> "23"),
// so assertions must also check the STRUCTURE, not just text.
const fracBoxes = (testid: string) =>
  dom.window.document.querySelectorAll(`[data-testid="${testid}"] .flex-col`).length;

function key(k: string) {
  act(() => {
    dom.window.dispatchEvent(
      new dom.window.KeyboardEvent('keydown', { key: k, bubbles: true, cancelable: true })
    );
  });
}
function type(...keys: string[]) {
  keys.forEach(key);
}
// press the physical ▢/▢ fraction key on the keypad (the ONLY template source now)
function fracKey() {
  const btn = Array.from(dom.window.document.querySelectorAll('button')).find(
    (b) => (b.textContent || '').trim() === '■□'
  );
  if (!btn) throw new Error('fraction key not found');
  act(() => { btn.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true })); });
}

// ---------------------------------------------------------------------------
console.log('--- component: initial render ---');
ok(exprText() === '', 'boots with an EMPTY expression (no demo)', `got "${exprText()}"`);
ok(resText() === '0', 'boots with result 0', `got "${resText()}"`);
ok(cursorCount() === 1, 'exactly one cursor visible on boot', `got ${cursorCount()}`);

console.log('--- component: basic calc + post-= behaviour ---');
type('2', '+', '3');
ok(exprText() === '2+3', 'typed 2+3', `got "${exprText()}"`);
key('Enter');
ok(resText() === '5', '2+3 = 5', `got "${resText()}"`);
ok(exprText() === '2+3', 'expression stays visible after = (Casio)', `got "${exprText()}"`);

type('×', '2');
ok(exprText() === 'Ans×2', 'operator after = continues from Ans', `got "${exprText()}"`);
key('Enter');
ok(resText() === '10', 'Ans×2 = 10', `got "${resText()}"`);

key('9');
ok(exprText() === '9', 'digit after = starts a FRESH expression', `got "${exprText()}"`);
key('Escape');
ok(exprText() === '' && resText() === '0', 'Escape = AC clears entry + result', `got "${exprText()}" / "${resText()}"`);

console.log('--- component: char-by-char arrow editing ---');
type('1', '2', '3');
key('ArrowLeft');
key('ArrowLeft');
type('9');
ok(exprText() === '1923', 'ArrowLeft×2 + digit inserts mid-expression char-by-char', `got "${exprText()}"`);
ok(cursorCount() === 1, 'still exactly one cursor mid-expression', `got ${cursorCount()}`);
key('Delete');
ok(exprText() === '193', 'Delete key removes char AFTER cursor', `got "${exprText()}"`);
key('Escape');

type('1', '2');
key('Backspace');
ok(exprText() === '1', 'Backspace deletes char before cursor', `got "${exprText()}"`);
key('Backspace');
ok(exprText() === '', 'Backspace to empty', `got "${exprText()}"`);

console.log('--- component: ÷ is a plain division sign; ▢/▢ makes the template ---');
type('6', '/', '2');
ok(exprText() === '6÷2' && fracBoxes('expression-line') === 0, '÷ inserts an inline division sign (no fraction boxes)', `got "${exprText()}" boxes=${fracBoxes('expression-line')}`);
key('Enter');
ok(resText() === '3', '6÷2 = 3', `got "${resText()}"`);
key('+');
ok(exprText() === 'Ans+', '÷ counts as an operator for post-= continuation', `got "${exprText()}"`);
key('Escape');

console.log('--- component: fractions via the ▢/▢ key ---');
type('1', '2');
fracKey();
ok(exprText() === '12' && fracBoxes('expression-line') === 1, '▢/▢ absorbs preceding number as numerator and opens a fraction box', `got "${exprText()}" boxes=${fracBoxes('expression-line')}`);
type('3');
ok(exprText() === '123' && fracBoxes('expression-line') === 1, 'denominator typed inside the fraction', `got "${exprText()}"`);
key('Enter');
ok(resText() === '4', '12/3 = 4', `got "${resText()}"`);
ok(cursorCount() === 1, 'one cursor after fraction calc', `got ${cursorCount()}`);
key('Escape');

console.log('--- component: ArrowUp enters fraction numerator ---');
type('1', '2');
fracKey();
type('3'); // cursor in den end
key('ArrowUp'); // -> numerator, offset clamped to 1 (between '1' and '2')
key('Backspace'); // deletes the char before the cursor in the NUMERATOR: '1'
key('Enter');
// result is the exact fraction 2/3 -> stacked textContent reads "23"
ok(resText() === '23' && fracBoxes('result-line') === 1, 'ArrowUp reached the numerator (2/3 exact fraction rendered stacked)', `got "${resText()}" boxes=${fracBoxes('result-line')}`);
key('Escape');

console.log('--- component: history recall with draft restore & no wrap ---');
// history now (newest first): [1/3, 12/3, Ans×2, 2+3]
key('ArrowUp');
ok(resText() === '23' && fracBoxes('result-line') === 1 && fracBoxes('expression-line') === 1, '▲ recalls newest entry — 2/3 restored as a STRUCTURED fraction', `got "${exprText()}" / "${resText()}"`);
key('ArrowUp');
ok(resText() === '4' && exprText() === '123', '▲▲ recalls 12/3 = 4', `got "${resText()}"`);
key('ArrowUp');
ok(resText() === '3' && exprText() === '6÷2', '▲▲▲ recalls 6÷2 = 3 (inline division in the tape)', `got "${exprText()}" / "${resText()}"`);
key('ArrowUp');
ok(resText() === '10' && exprText() === 'Ans×2', '▲▲▲▲ recalls Ans×2 = 10', `got "${exprText()}" / "${resText()}"`);
key('ArrowUp');
ok(resText() === '5' && exprText() === '2+3', '▲▲▲▲▲ recalls 2+3 = 5', `got "${resText()}"`);
key('ArrowUp');
ok(resText() === '5', '▲ at OLDEST entry stays put (no wraparound)', `got "${resText()}"`);
key('ArrowDown');
ok(resText() === '10', '▼ back to Ans×2', `got "${resText()}"`);
key('ArrowDown');
ok(resText() === '3', '▼ back to 6÷2', `got "${resText()}"`);
key('ArrowDown');
ok(resText() === '4', '▼ back to 12/3', `got "${resText()}"`);
key('ArrowDown');
ok(resText() === '23' && fracBoxes('result-line') === 1, '▼ back to 2/3', `got "${resText()}"`);
key('ArrowDown');
ok(exprText() === '' && resText() === '0', '▼ past newest restores the saved draft (empty screen)', `got "${exprText()}" / "${resText()}"`);
type('7');
ok(exprText() === '7', 'typing after history browsing works normally', `got "${exprText()}"`);
key('Escape');

console.log('--- component: = on empty screen recalls Ans ---');
key('Enter');
ok(exprText() === 'Ans' && resText() === '23' && fracBoxes('result-line') === 1, 'empty = recalls Ans (2/3)', `got "${exprText()}" / "${resText()}"`);
key('Escape');

console.log('--- component: errors keep the expression editable ---');
type('1', '÷', '0');
// '÷' opens a fraction template: "1÷0" -> frac(num=1) then 0 typed in den
key('Enter');
ok(resText() === 'Math ERROR', '1/0 shows Math ERROR [was "Infinity"]', `got "${resText()}"`);
key('Backspace'); // expression must still be editable after an error
ok(cursorCount() === 1, 'cursor alive after error', `got ${cursorCount()}`);
key('Escape');

console.log('--- component: DEG default + keyboard letters ---');
type('s', '3', '0');
ok(exprText() === 'sin(30', 'letter s types sin(', `got "${exprText()}"`);
key('Enter');
ok(resText() === '12' && fracBoxes('result-line') === 1, 'sin(30) = 0.5 -> exact 1/2 in default DEG mode (auto-close paren)', `got "${resText()}"`);
key('Escape');

console.log('');
if (failures.length) {
  console.log('FAILURES:');
  failures.forEach((f) => console.log('  ✗ ' + f));
}
console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
