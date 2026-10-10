// DEEP-DEBUG harness for cursor navigation (arrow keys) in/around fractions.
//
// Properties verified for several expression shapes:
//  P1  RIGHT-walk from the very start terminates, never revisits a position (no cycles)
//  P2  LEFT-walk from the very end terminates at the absolute start, no cycles
//  P3  COVERAGE: union of both walks == every legal cursor position in the tree
//      (root slots + every fraction field slot at every depth)
//  P4  inserting a marker at any walked position lands EXACTLY there
//      (checked against an independent splice-the-container reconstruction)
//  P5  UP/DOWN: den->num / num->den with offset clamping; root/baseline UP/DOWN
//      only ever enter a fraction DIRECTLY adjacent to the cursor; from inside a
//      numerator with nothing nested beside the cursor, UP must be a no-op (null)
//      — it must never "fall out" of the fraction
//  P6  backspace/forward-delete never corrupt the tree and never throw
//  P7  4000-op randomized fuzz (seeded): invariants hold after every single op
// Run: npx tsx tests/arrows.test.ts
import {
  MathExpressionState,
  MathItem,
  FractionItem,
  CursorPosition,
  FieldRef,
  createInitialModel,
  insertTokenIntoModel,
  insertFractionIntoModel,
  deleteFromModel,
  deleteForwardFromModel,
  moveCursorInModel,
  mathModelToEvaluatableString,
  mathModelToDisplayString,
  getContainerItems,
  findFracById,
  cloneItems,
  modelFromString,
} from '../src/utils/mathModel';

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

const posKey = (c: CursorPosition) =>
  JSON.stringify({ stack: c.stack.map((s) => `${s.fracId}:${s.field}`), offset: c.offset });

// ---- invariant: stack resolves, offset in range, serializers never throw ----
function invariants(s: MathExpressionState, ctx: string): string | null {
  let container = s.items;
  for (const ref of s.cursor.stack) {
    const frac = findFracById(container, ref.fracId);
    if (!frac) return `${ctx}: cursor stack references a fraction that no longer exists`;
    container = ref.field === 'den' ? frac.den : frac.num;
  }
  if (s.cursor.offset < 0 || s.cursor.offset > container.length) {
    return `${ctx}: offset ${s.cursor.offset} out of range [0,${container.length}]`;
  }
  try {
    mathModelToEvaluatableString(s.items);
    mathModelToDisplayString(s.items);
  } catch (e) {
    return `${ctx}: serializer threw ${(e as Error).message}`;
  }
  return null;
}

// ---- enumerate EVERY legal cursor position in the tree ----
function allPositions(items: MathItem[]): CursorPosition[] {
  const out: CursorPosition[] = [];
  const rec = (list: MathItem[], stack: FieldRef[]) => {
    for (let off = 0; off <= list.length; off++) out.push({ stack, offset: off });
    for (const it of list) {
      if (it.type === 'frac') {
        rec(it.num, [...stack, { fracId: it.id, field: 'num' }]);
        rec(it.den, [...stack, { fracId: it.id, field: 'den' }]);
      }
    }
  };
  rec(items, []);
  return out;
}

function withCursor(s: MathExpressionState, c: CursorPosition): MathExpressionState {
  return { items: s.items, cursor: c };
}

// independent reconstruction of "insert Z at position c"
function expectedAfterInsert(s: MathExpressionState, c: CursorPosition): string {
  const items = cloneItems(s.items);
  const container = getContainerItems(items, c.stack);
  container.splice(Math.min(c.offset, container.length), 0, { type: 'text', id: 'Z', value: 'Z' });
  return mathModelToEvaluatableString(items);
}

function walkCoverage(build: () => MathExpressionState, name: string) {
  const base = build();
  // --- forward (RIGHT) walk from absolute start ---
  let s = withCursor(base, { stack: [], offset: 0 });
  const fwd: string[] = [];
  const fwdStates: MathExpressionState[] = [];
  let guard = 0;
  while (guard++ < 1000) {
    fwd.push(posKey(s.cursor));
    fwdStates.push(s);
    const n = moveCursorInModel(s, 'RIGHT');
    if (!n) break;
    s = n;
    const inv = invariants(s, `${name}/RIGHT`);
    if (inv) { ok(false, inv); return; }
  }
  ok(guard < 1000, `${name}: RIGHT walk terminates`);
  ok(new Set(fwd).size === fwd.length, `${name}: RIGHT walk never revisits a position (no cycles)`,
     `visited ${fwd.length}, unique ${new Set(fwd).size}`);
  const endState = s;

  // --- backward (LEFT) walk from absolute end ---
  let b = endState;
  const back: string[] = [];
  guard = 0;
  while (guard++ < 1000) {
    back.push(posKey(b.cursor));
    const n = moveCursorInModel(b, 'LEFT');
    if (!n) break;
    b = n;
    const inv = invariants(b, `${name}/LEFT`);
    if (inv) { ok(false, inv); return; }
  }
  ok(guard < 1000, `${name}: LEFT walk terminates`);
  ok(new Set(back).size === back.length, `${name}: LEFT walk never revisits (no cycles)`);
  ok(
    b.cursor.stack.length === 0 && b.cursor.offset === 0,
    `${name}: LEFT walk ends at the absolute start`,
    `ended at ${posKey(b.cursor)}`
  );

  // --- P3 coverage: fwd ∪ back == all legal positions ---
  const union = new Set([...fwd, ...back]);
  const every = allPositions(base.items);
  const everyKeys = every.map(posKey);
  ok(
    union.size === new Set(everyKeys).size && everyKeys.every((k) => union.has(k)),
    `${name}: walk coverage == every legal position`,
    `walked ${union.size}, expected ${new Set(everyKeys).size}; missing: ${everyKeys.filter((k) => !union.has(k)).slice(0, 5).join(' | ')}`
  );

  // --- P4 marker-insert at every walked position is exact ---
  let insertOk = true;
  let insertMsg = '';
  for (const st of fwdStates) {
    const got = mathModelToEvaluatableString(insertTokenIntoModel(st, 'Z').items);
    const exp = expectedAfterInsert(st, st.cursor);
    if (got !== exp) {
      insertOk = false;
      insertMsg = `at ${posKey(st.cursor)}: got ${got}, expected ${exp}`;
      break;
    }
  }
  ok(insertOk, `${name}: marker insertion lands exactly at the walked position`, insertMsg);

  // --- P5 UP/DOWN semantics at every position ---
  for (const c of every) {
    const st = withCursor(base, c);
    const container = getContainerItems(base.items, c.stack);
    const prevIsFrac = c.offset > 0 && container[c.offset - 1].type === 'frac';
    const nextIsFrac = c.offset < container.length && container[c.offset].type === 'frac';
    const top = c.stack.length ? c.stack[c.stack.length - 1] : null;

    const up = moveCursorInModel(st, 'UP');
    const down = moveCursorInModel(st, 'DOWN');

    if (top) {
      const frac = findFracById(getContainerItems(base.items, c.stack.slice(0, -1)), top.fracId) as FractionItem;
      if (top.field === 'den' && !prevIsFrac && !nextIsFrac) {
        ok(
          !!up && up.cursor.stack.length === c.stack.length &&
          up.cursor.stack[up.cursor.stack.length - 1].field === 'num' &&
          up.cursor.stack.slice(0, -1).every((r, i) => r.fracId === c.stack[i].fracId) &&
          up.cursor.offset === Math.min(c.offset, frac.num.length),
          `${name}: UP from den -> num clamped @${posKey(c)}`,
          up ? `got ${posKey(up.cursor)}` : 'got null'
        );
      }
      if (top.field === 'num' && !prevIsFrac && !nextIsFrac) {
        ok(up === null, `${name}: UP inside num (nothing nested beside cursor) must be a NO-OP, not an escape @${posKey(c)}`,
           up ? `went to ${posKey(up.cursor)}` : '');
        ok(down === null || down.cursor.stack[down.cursor.stack.length - 1]?.field === 'den',
           `${name}: DOWN inside num goes to den or null @${posKey(c)}`);
      }
      if (top.field === 'den' && !prevIsFrac && !nextIsFrac) {
        ok(down === null, `${name}: DOWN inside den (nothing nested) must be a NO-OP @${posKey(c)}`,
           down ? `went to ${posKey(down.cursor)}` : '');
      }
    } else {
      // root baseline: UP/DOWN may ONLY enter a directly adjacent fraction
      if (up !== null) {
        ok(prevIsFrac || nextIsFrac, `${name}: root UP entered a NON-adjacent fraction (teleport!) @${posKey(c)}`);
        ok(up.cursor.stack.length === 1 && up.cursor.stack[0].field === 'num', `${name}: root UP enters a numerator`);
      }
      if (down !== null) {
        ok(prevIsFrac || nextIsFrac, `${name}: root DOWN entered a NON-adjacent fraction (teleport!) @${posKey(c)}`);
        ok(down.cursor.stack.length === 1 && down.cursor.stack[0].field === 'den', `${name}: root DOWN enters a denominator`);
      }
      if (!prevIsFrac && !nextIsFrac) {
        ok(up === null && down === null, `${name}: root UP/DOWN far from any fraction must be null (caller -> history) @${posKey(c)}`);
      }
    }

    // UP then DOWN round-trip: must never strand the cursor deeper than before
    if (up) {
      const rt = moveCursorInModel(up, 'DOWN');
      if (rt && !prevIsFrac && !nextIsFrac && top === null) {
        ok(rt.cursor.stack.length === 0, `${name}: root UP->DOWN returns to baseline @${posKey(c)}`);
      }
    }
  }

  // --- P6 deletion at every position keeps invariants ---
  for (const c of every) {
    const st = withCursor(base, c);
    const d1 = deleteFromModel(st);
    const inv1 = invariants(d1, `${name}/DEL@${posKey(c)}`);
    ok(inv1 === null, `${name}: backspace invariant @${posKey(c)}`, inv1 || '');
    const d2 = deleteForwardFromModel(st);
    const inv2 = invariants(d2, `${name}/DELFWD@${posKey(c)}`);
    ok(inv2 === null, `${name}: forward-delete invariant @${posKey(c)}`, inv2 || '');
    // deleting a character never changes characters elsewhere:
    const flat = (items: MathItem[]): string =>
      items.map((i) => (i.type === 'text' ? i.value : `(${flat(i.num)})/(${flat(i.den)})`)).join('');
    const before = flat(st.items);
    const after = flat(d1.items);
    ok(
      after.length === before.length || after.length === before.length - 1 ||
      // backspace at a field start / before a filled frac only MOVES the cursor
      (after.length === before.length),
      `${name}: backspace removes at most one char @${posKey(c)}`,
      `${before.length} -> ${after.length}`
    );
  }
}

// ---------------------------------------------------------------------------
// Expression shapes
// ---------------------------------------------------------------------------
const shapes: { name: string; build: () => MathExpressionState }[] = [];

shapes.push({
  name: 'plain-text',
  build: () => modelFromString('12+sin(30)×5'),
});

shapes.push({
  name: 'single-fraction',
  build: () => {
    let s = modelFromString('12');
    s = insertFractionIntoModel(s); // absorbs 12, cursor in den
    s = insertTokenIntoModel(s, '3');
    return s;
  },
});

shapes.push({
  name: 'frac-with-trig-around',
  build: () => {
    let s = modelFromString('sin(');
    s = insertFractionIntoModel(s); // inside the call: empty numerator
    s = insertTokenIntoModel(s, 'π');
    const dn = moveCursorInModel(s, 'DOWN'); // num -> den
    s = dn!;
    s = insertTokenIntoModel(s, '6');
    s = moveCursorInModel(s, 'RIGHT')!; // exit fraction
    s = insertTokenIntoModel(s, ')+1');
    return s;
  },
});

shapes.push({
  name: 'nested-fraction',
  build: () => {
    let s = createInitialModel();
    s = insertFractionIntoModel(s); // outer, cursor in num
    s = insertFractionIntoModel(s); // nested inside num
    s = insertTokenIntoModel(s, '1');
    s = moveCursorInModel(s, 'DOWN')!; // nested den
    s = insertTokenIntoModel(s, '2');
    s = moveCursorInModel(s, 'RIGHT')!; // exit nested -> outer num
    s = moveCursorInModel(s, 'RIGHT')!; // exit outer -> root
    s = moveCursorInModel(s, 'DOWN')!; // enter outer den
    s = insertTokenIntoModel(s, '3');
    return s;
  },
});

shapes.push({
  name: 'two-fractions-and-text',
  build: () => {
    let s = modelFromString('1+');
    s = insertFractionIntoModel(s); // absorbs nothing ('+' boundary), empty frac
    s = insertTokenIntoModel(s, '2');
    s = moveCursorInModel(s, 'DOWN')!;
    s = insertTokenIntoModel(s, '3');
    s = moveCursorInModel(s, 'RIGHT')!; // exit to root
    s = insertTokenIntoModel(s, '×');
    s = insertFractionIntoModel(s);
    s = insertTokenIntoModel(s, '4');
    s = moveCursorInModel(s, 'DOWN')!;
    s = insertTokenIntoModel(s, '5');
    s = moveCursorInModel(s, 'RIGHT')!;
    s = insertTokenIntoModel(s, '!');
    return s;
  },
});

shapes.push({
  name: 'doubly-nested-fraction',
  build: () => {
    let s = createInitialModel();
    s = insertFractionIntoModel(s); // A num
    s = insertFractionIntoModel(s); // B inside A.num
    s = insertFractionIntoModel(s); // C inside B.num
    s = insertTokenIntoModel(s, '7');
    s = moveCursorInModel(s, 'DOWN')!; // C.den
    s = insertTokenIntoModel(s, '8');
    s = moveCursorInModel(s, 'RIGHT')!; // exit C -> B.num
    s = moveCursorInModel(s, 'RIGHT')!; // exit B -> A.num
    s = moveCursorInModel(s, 'DOWN')!; // A.den
    s = insertTokenIntoModel(s, '9');
    return s;
  },
});

for (const { name, build } of shapes) {
  walkCoverage(build, name);
}

// ---------------------------------------------------------------------------
// P5-extra: UP inside a numerator must NOT escape (regression guard for the
// "cursor goes out of place" complaint)
// ---------------------------------------------------------------------------
{
  let s = modelFromString('12');
  s = insertFractionIntoModel(s);
  s = insertTokenIntoModel(s, '3'); // cursor in den
  const up1 = moveCursorInModel(s, 'UP')!; // -> num
  ok(up1.cursor.stack[0].field === 'num', 'UP from den lands in num');
  const up2 = moveCursorInModel(up1, 'UP');
  ok(up2 === null, 'second UP inside num is a NO-OP (must not jump to root/history)', up2 ? posKey(up2.cursor) : '');
  const up3 = moveCursorInModel(up1, 'DOWN');
  ok(up3 !== null && up3.cursor.stack[0].field === 'den', 'DOWN from num returns to den');
}

// ---------------------------------------------------------------------------
// Absorption: Casio absorbs the value before the cursor EVEN inside a call
// ---------------------------------------------------------------------------
{
  let s = modelFromString('sin(30');
  s = insertFractionIntoModel(s);
  const flat = mathModelToEvaluatableString(s.items);
  ok(
    flat === 'sin(((30)/(0))',
    'FRAC inside sin( absorbs the number before the cursor (Casio behaviour)',
    `got ${flat}`
  );
  ok(s.cursor.stack[0]?.field === 'den', 'cursor parked in denominator after absorption');
}
{
  let s = modelFromString('sin(');
  s = insertFractionIntoModel(s);
  ok(
    mathModelToEvaluatableString(s.items) === 'sin(((0)/(0))',
    'FRAC right after sin( inserts an empty template (nothing to absorb)',
    mathModelToEvaluatableString(s.items)
  );
  ok(s.cursor.stack[0]?.field === 'num', 'cursor in numerator of empty template');
}
{
  let s = modelFromString('2^');
  s = insertFractionIntoModel(s);
  ok(
    mathModelToEvaluatableString(s.items) === '2^((0)/(0))',
    'FRAC after a dangling ^ does NOT absorb the operator',
    mathModelToEvaluatableString(s.items)
  );
}
{
  let s = modelFromString('2^3');
  s = insertFractionIntoModel(s);
  ok(
    mathModelToEvaluatableString(s.items) === '((2^3)/(0))',
    'FRAC after 2^3 absorbs the whole power chain',
    mathModelToEvaluatableString(s.items)
  );
}

// ---------------------------------------------------------------------------
// P7: seeded fuzz — random ops, invariants after every single op
// ---------------------------------------------------------------------------
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const OPS = [
  (s: MathExpressionState) => insertTokenIntoModel(s, '1'),
  (s: MathExpressionState) => insertTokenIntoModel(s, '+'),
  (s: MathExpressionState) => insertTokenIntoModel(s, '×'),
  (s: MathExpressionState) => insertTokenIntoModel(s, 'sin('),
  (s: MathExpressionState) => insertTokenIntoModel(s, 'π'),
  (s: MathExpressionState) => insertTokenIntoModel(s, 'Ans'),
  (s: MathExpressionState) => insertTokenIntoModel(s, '√('),
  (s: MathExpressionState) => insertTokenIntoModel(s, '^'),
  (s: MathExpressionState) => insertTokenIntoModel(s, '('),
  (s: MathExpressionState) => insertTokenIntoModel(s, ')'),
  (s: MathExpressionState) => insertTokenIntoModel(s, ','),
  (s: MathExpressionState) => insertTokenIntoModel(s, '.'),
  (s: MathExpressionState) => insertTokenIntoModel(s, '!'),
  (s: MathExpressionState) => insertTokenIntoModel(s, '°'),
  (s: MathExpressionState) => insertFractionIntoModel(s),
  (s: MathExpressionState) => insertTokenIntoModel(s, 'FRAC'),
  (s: MathExpressionState) => deleteFromModel(s),
  (s: MathExpressionState) => deleteForwardFromModel(s),
  (s: MathExpressionState) => moveCursorInModel(s, 'LEFT') ?? s,
  (s: MathExpressionState) => moveCursorInModel(s, 'RIGHT') ?? s,
  (s: MathExpressionState) => moveCursorInModel(s, 'UP') ?? s,
  (s: MathExpressionState) => moveCursorInModel(s, 'DOWN') ?? s,
];

for (const seed of [1, 42, 1337]) {
  const rnd = mulberry32(seed);
  let s: MathExpressionState = createInitialModel();
  let fuzzFail: string | null = null;
  for (let i = 0; i < 4000; i++) {
    const op = OPS[Math.floor(rnd() * OPS.length)];
    try {
      s = op(s);
    } catch (e) {
      fuzzFail = `seed ${seed} op ${i} THREW: ${(e as Error).message}`;
      break;
    }
    const inv = invariants(s, `seed ${seed} op ${i}`);
    if (inv) {
      fuzzFail = inv;
      break;
    }
  }
  ok(fuzzFail === null, `fuzz seed ${seed}: 4000 random ops keep every invariant`, fuzzFail || '');
}

console.log('');
if (failures.length) {
  console.log('FAILURES:');
  failures.slice(0, 40).forEach((f) => console.log('  ✗ ' + f));
  if (failures.length > 40) console.log(`  ... and ${failures.length - 40} more`);
}
console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
