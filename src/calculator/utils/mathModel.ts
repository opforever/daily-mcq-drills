// Structured Math State Model for Casio Natural-V.P.A.M. Display
// ------------------------------------------------------------------
// The expression is a recursive list of items:
//   - TextItem:      a SINGLE character ('2', '+', 's', '√', ...).
//                    Keeping items single-character guarantees that one
//                    cursor step == one character everywhere, exactly like
//                    a real calculator (the old model merged characters into
//                    multi-char strings, so arrow keys jumped whole chunks).
//   - FractionItem:  a structured fraction whose numerator/denominator are
//                    themselves recursive item lists, so fractions can nest.
//
// The cursor is a PATH: a stack of fraction-field references plus an offset
// (item index) inside the container that stack resolves to. An empty stack
// means the cursor is on the root baseline.

export interface TextItem {
  type: 'text';
  id: string;
  value: string; // invariant: exactly one character
}

export interface FractionItem {
  type: 'frac';
  id: string;
  num: MathItem[];
  den: MathItem[];
}

export type MathItem = TextItem | FractionItem;

export interface FieldRef {
  fracId: string;
  field: 'num' | 'den';
}

export interface CursorPosition {
  stack: FieldRef[]; // [] = root baseline
  offset: number; // item index inside the resolved container
}

export interface MathExpressionState {
  items: MathItem[];
  cursor: CursorPosition;
}

let nextId = 1;
export function genId(): string {
  return `m_${nextId++}_${Date.now().toString(36)}`;
}

export function createEmptyCursor(): CursorPosition {
  return { stack: [], offset: 0 };
}

/**
 * A real calculator boots with a clean screen (the old model seeded a demo
 * expression "(√2/2)+(√2/3)" plus fake history on every launch).
 */
export function createInitialModel(): MathExpressionState {
  return { items: [], cursor: createEmptyCursor() };
}

// ---------------------------------------------------------------------------
// Cloning / lookup helpers
// ---------------------------------------------------------------------------

export function cloneItems(items: MathItem[]): MathItem[] {
  return items.map((it) =>
    it.type === 'text'
      ? { ...it }
      : { type: 'frac', id: it.id, num: cloneItems(it.num), den: cloneItems(it.den) }
  );
}

export function cloneCursor(c: CursorPosition): CursorPosition {
  const stack = Array.isArray(c?.stack) ? c.stack.map((s) => ({ ...s })) : [];
  return { stack, offset: typeof c?.offset === 'number' ? c.offset : 0 };
}

/** Recursively find a fraction by id inside an item list. */
export function findFracById(items: MathItem[], id: string): FractionItem | null {
  for (const it of items) {
    if (it.type === 'frac') {
      if (it.id === id) return it;
      const inNum = findFracById(it.num, id);
      if (inNum) return inNum;
      const inDen = findFracById(it.den, id);
      if (inDen) return inDen;
    }
  }
  return null;
}

/** Resolve the container item list a cursor stack points into. */
export function getContainerItems(items: MathItem[], stack?: FieldRef[] | null): MathItem[] {
  let container = items;
  if (!Array.isArray(stack)) return items;
  for (const ref of stack) {
    if (!ref) continue;
    const frac = findFracById(container, ref.fracId);
    if (!frac) return items; // stale reference -> fall back to root
    container = ref.field === 'den' ? frac.den : frac.num;
  }
  return container;
}

/** Sanitize a cursor: drop stale stack refs and clamp the offset in range. */
export function clampCursor(items: MathItem[], cursor: CursorPosition): CursorPosition {
  const out: CursorPosition = { stack: [], offset: typeof cursor?.offset === 'number' ? cursor.offset : 0 };
  let container = items;
  const inStack = Array.isArray(cursor?.stack) ? cursor.stack : [];
  for (const ref of inStack) {
    if (!ref) continue;
    const frac = findFracById(container, ref.fracId);
    if (!frac) break;
    out.stack.push({ fracId: ref.fracId, field: ref.field });
    container = ref.field === 'den' ? frac.den : frac.num;
  }
  out.offset = Math.max(0, Math.min(out.offset, container.length));
  return out;
}

/** True when both stacks address the same fraction field (or both are root). */
export function sameStack(a?: FieldRef[] | null, b?: FieldRef[] | null): boolean {
  const sa = Array.isArray(a) ? a : [];
  const sb = Array.isArray(b) ? b : [];
  if (sa.length !== sb.length) return false;
  for (let i = 0; i < sa.length; i++) {
    if (!sa[i] || !sb[i]) return false;
    if (sa[i].fracId !== sb[i].fracId || sa[i].field !== sb[i].field) return false;
  }
  return true;
}

/** Split a raw string into single-character TextItems. */
export function charsToTextItems(str: string): TextItem[] {
  return Array.from(str).map((ch) => ({ type: 'text' as const, id: genId(), value: ch }));
}

/** Build a full model from a plain string, cursor parked at the end. */
export function modelFromString(str: string): MathExpressionState {
  const items = charsToTextItems(str);
  return { items, cursor: { stack: [], offset: items.length } };
}

// ---------------------------------------------------------------------------
// Serialization
// ---------------------------------------------------------------------------

function itemsToEvaluatable(items: MathItem[]): string {
  return items
    .map((item) => {
      if (item.type === 'text') return item.value;
      const n = itemsToEvaluatable(item.num).trim();
      const d = itemsToEvaluatable(item.den).trim();
      // An empty field behaves like Casio's blank template slot: 0 in the
      // numerator; an empty denominator evaluates to a Math ERROR (÷0).
      return `((${n || '0'})/(${d || '0'}))`;
    })
    .join('');
}

/** Converts structured math items into an evaluatable string for mathEngine. */
export function mathModelToEvaluatableString(items: MathItem[]): string {
  const s = itemsToEvaluatable(items);
  return s.length > 0 ? s : '0';
}

const BARE_RE = /^[0-9A-Za-zπ.]+$/;

function isFullyParenthesized(s: string): boolean {
  if (!s.startsWith('(') || !s.endsWith(')')) return false;
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') depth++;
    else if (s[i] === ')') {
      depth--;
      if (depth === 0 && i < s.length - 1) return false;
    }
  }
  return depth === 0;
}

function wrapIfNeeded(s: string): string {
  if (!s) return '□';
  if (BARE_RE.test(s) || isFullyParenthesized(s)) return s;
  if (s.startsWith('√') || s.startsWith('³√')) return s;
  return `(${s})`;
}

/** Pretty single-line form used by the history tape, e.g. "(√2/2)+(√2/3)". */
export function mathModelToDisplayString(items: MathItem[]): string {
  return items
    .map((item) => {
      if (item.type === 'text') return item.value;
      const n = mathModelToDisplayString(item.num);
      const d = mathModelToDisplayString(item.den);
      return `${wrapIfNeeded(n)}/${wrapIfNeeded(d)}`;
    })
    .join('');
}

// ---------------------------------------------------------------------------
// Insertion
// ---------------------------------------------------------------------------

// Characters that can be part of a "value" that a fraction template absorbs
// as its numerator (digits, identifiers, π, decimal points, radicals).
const VALUE_CHAR = /[0-9A-Za-zπ.√]/;

/**
 * Inserts the fraction template (■/□) at the cursor.
 * Like a real Casio, a value immediately before the cursor (number, Ans,
 * π, variable, balanced parenthesis group, √ group, or ^-exponent chain)
 * is absorbed into the numerator and the cursor lands in the denominator.
 * Works at root level AND nested inside another fraction field.
 */
export function insertFractionIntoModel(state: MathExpressionState): MathExpressionState {
  const items = cloneItems(state.items);
  const cursor = clampCursor(items, state.cursor);
  const container = getContainerItems(items, cursor.stack);

  // --- walk backwards collecting an absorbable numerator ---
  const absorbed: MathItem[] = [];
  let i = cursor.offset - 1;
  while (i >= 0) {
    const it = container[i];
    if (it.type === 'frac') break; // structured templates are not absorbed
    const ch = it.value;
    if (VALUE_CHAR.test(ch)) {
      absorbed.unshift(it);
      i--;
      continue;
    }
    if (ch === '^' && absorbed.length > 0) {
      // absorb exponent chains:  5^2 ▢/▢  ->  numerator "5^2"
      // (a DANGLING '^' with no exponent typed yet must NOT be absorbed)
      absorbed.unshift(it);
      i--;
      continue;
    }
    if (ch === ')') {
      // absorb the balanced parenthesis group
      let depth = 0;
      let j = i;
      let closed = false;
      for (; j >= 0; j--) {
        const jt = container[j];
        if (jt.type !== 'text') break;
        if (jt.value === ')') depth++;
        else if (jt.value === '(') {
          depth--;
          if (depth === 0) {
            closed = true;
            break;
          }
        }
      }
      if (!closed || j < 0) break;
      absorbed.unshift(...container.slice(j, i + 1));
      i = j - 1;
      continue;
    }
    break;
  }

  // Absorption stops naturally at '(' — the call itself is never consumed,
  // so "sin(30" + ▢/▢ correctly becomes sin(30▢/▢) exactly like a real Casio
  // (the fraction fills the argument slot).
  const canAbsorb = absorbed.length > 0;
  const absorbStart = canAbsorb ? cursor.offset - absorbed.length : cursor.offset;
  const numItems: MathItem[] = canAbsorb ? absorbed : [];
  const removeCount = canAbsorb ? absorbed.length : 0;

  const frac: FractionItem = { type: 'frac', id: genId(), num: numItems, den: [] };
  // remove the absorbed characters and put the fraction template in their place
  container.splice(absorbStart, removeCount, frac);

  if (numItems.length > 0) {
    // numerator pre-filled -> cursor goes to the denominator (Casio behaviour)
    return {
      items,
      cursor: { stack: [...cursor.stack, { fracId: frac.id, field: 'den' }], offset: 0 },
    };
  }
  return {
    items,
    cursor: { stack: [...cursor.stack, { fracId: frac.id, field: 'num' }], offset: 0 },
  };
}

/**
 * Inserts a token (string of one or more characters) at the cursor.
 * Every character becomes its own TextItem so the cursor can later stop
 * between any two characters. The special token 'FRAC' inserts the
 * structured fraction template instead.
 */
export function insertTokenIntoModel(
  state: MathExpressionState,
  token: string
): MathExpressionState {
  if (token === 'FRAC') return insertFractionIntoModel(state);

  const items = cloneItems(state.items);
  const cursor = clampCursor(items, state.cursor);
  const container = getContainerItems(items, cursor.stack);
  const newChars = charsToTextItems(token);
  container.splice(cursor.offset, 0, ...newChars);
  return {
    items,
    cursor: { stack: cursor.stack, offset: cursor.offset + newChars.length },
  };
}

// ---------------------------------------------------------------------------
// Deletion
// ---------------------------------------------------------------------------

/**
 * Backspace (DEL key).
 *  - character before cursor        -> delete it
 *  - filled fraction before cursor  -> step into its denominator (Casio-like)
 *  - empty fraction before cursor   -> remove the template
 *  - start of denominator           -> jump to end of numerator
 *  - start of empty numerator       -> remove the whole empty template
 *  - start of filled numerator      -> step out, in front of the fraction
 */
export function deleteFromModel(state: MathExpressionState): MathExpressionState {
  const items = cloneItems(state.items);
  const cursor = clampCursor(items, state.cursor);
  const container = getContainerItems(items, cursor.stack);

  if (cursor.offset > 0) {
    const prev = container[cursor.offset - 1];
    if (prev.type === 'text') {
      container.splice(cursor.offset - 1, 1);
      return { items, cursor: { stack: cursor.stack, offset: cursor.offset - 1 } };
    }
    if (prev.num.length === 0 && prev.den.length === 0) {
      // empty template -> deleted in one press
      container.splice(cursor.offset - 1, 1);
      return { items, cursor: { stack: cursor.stack, offset: cursor.offset - 1 } };
    }
    // filled fraction -> step inside (denominator end) so it can be edited
    return {
      items,
      cursor: {
        stack: [...cursor.stack, { fracId: prev.id, field: 'den' }],
        offset: prev.den.length,
      },
    };
  }

  // cursor.offset === 0 -> escape / clean up the enclosing fraction
  if (cursor.stack.length > 0) {
    const top = cursor.stack[cursor.stack.length - 1];
    const parentStack = cursor.stack.slice(0, -1);
    const parent = getContainerItems(items, parentStack);
    const fracIdx = parent.findIndex((it) => it.id === top.fracId);
    if (fracIdx === -1) return state;
    const frac = parent[fracIdx] as FractionItem;

    if (top.field === 'den') {
      // start of denominator -> jump up to the end of the numerator
      return {
        items,
        cursor: {
          stack: [...parentStack, { fracId: top.fracId, field: 'num' }],
          offset: frac.num.length,
        },
      };
    }
    if (frac.num.length === 0 && frac.den.length === 0) {
      // empty template -> remove it entirely
      parent.splice(fracIdx, 1);
    }
    return { items, cursor: { stack: parentStack, offset: fracIdx } };
  }

  return state; // nothing before the cursor
}

/**
 * Forward delete (physical keyboard "Delete" key): removes the character or
 * empty template AFTER the cursor; steps into filled fractions instead.
 */
export function deleteForwardFromModel(state: MathExpressionState): MathExpressionState {
  const items = cloneItems(state.items);
  const cursor = clampCursor(items, state.cursor);
  const container = getContainerItems(items, cursor.stack);

  if (cursor.offset >= container.length) return state;
  const next = container[cursor.offset];
  if (next.type === 'text' || (next.num.length === 0 && next.den.length === 0)) {
    container.splice(cursor.offset, 1);
    return { items, cursor };
  }
  return {
    items,
    cursor: { stack: [...cursor.stack, { fracId: next.id, field: 'num' }], offset: 0 },
  };
}

// ---------------------------------------------------------------------------
// Arrow-key navigation
// ---------------------------------------------------------------------------

/**
 * Moves the cursor one step. Returns `null` when the move is impossible
 * (edge of the expression), which lets the caller fall back to other
 * behaviour — e.g. UP/DOWN replaying history at root level, like Casio.
 *
 * Behaviour matches fx-991ES PLUS:
 *   LEFT   char ← / into fraction denominator-end / out to parent
 *          (from denominator start: jump to numerator end)
 *   RIGHT  char → / into fraction numerator-start / out past the fraction
 *   UP     denominator → numerator; at baseline: into the numerator of a
 *          fraction DIRECTLY beside the cursor (not any fraction far away)
 *   DOWN   numerator → denominator; at baseline: into the denominator of a
 *          fraction DIRECTLY beside the cursor
 */
export function moveCursorInModel(
  state: MathExpressionState,
  direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'
): MathExpressionState | null {
  const items = state.items;
  const cursor = clampCursor(items, state.cursor);
  const stack = cursor.stack;
  const container = getContainerItems(items, stack);
  const off = cursor.offset;

  const parentInfo = () => {
    const top = stack[stack.length - 1];
    const parentStack = stack.slice(0, -1);
    const parent = getContainerItems(items, parentStack);
    const fracIdx = parent.findIndex((it) => it.id === top.fracId);
    const frac = fracIdx !== -1 ? (parent[fracIdx] as FractionItem) : null;
    return { top, parentStack, parent, fracIdx, frac };
  };

  // Fraction directly beside the cursor in the current container, if any.
  const adjacentFrac = (): { frac: FractionItem; before: boolean } | null => {
    const prev = off > 0 ? container[off - 1] : undefined;
    if (prev && prev.type === 'frac') return { frac: prev, before: true };
    const next = off < container.length ? container[off] : undefined;
    if (next && next.type === 'frac') return { frac: next, before: false };
    return null;
  };

  if (direction === 'LEFT') {
    if (off > 0) {
      const prev = container[off - 1];
      if (prev.type === 'text') {
        return { items, cursor: { stack, offset: off - 1 } };
      }
      // step into the fraction through its denominator (reading order, backwards)
      return {
        items,
        cursor: {
          stack: [...stack, { fracId: prev.id, field: 'den' }],
          offset: prev.den.length,
        },
      };
    }
    if (stack.length === 0) return null; // beginning of the expression
    const { top, parentStack, fracIdx, frac } = parentInfo();
    if (!frac) return null;
    if (top.field === 'den') {
      // denominator start -> numerator end
      return {
        items,
        cursor: {
          stack: [...parentStack, { fracId: top.fracId, field: 'num' }],
          offset: frac.num.length,
        },
      };
    }
    // numerator start -> step out in front of the fraction
    return { items, cursor: { stack: parentStack, offset: Math.max(0, fracIdx) } };
  }

  if (direction === 'RIGHT') {
    if (off < container.length) {
      const next = container[off];
      if (next.type === 'text') {
        return { items, cursor: { stack, offset: off + 1 } };
      }
      // step into the fraction through its numerator
      return {
        items,
        cursor: { stack: [...stack, { fracId: next.id, field: 'num' }], offset: 0 },
      };
    }
    if (stack.length === 0) return null; // end of the expression
    const { parentStack, fracIdx, frac } = parentInfo();
    if (!frac) return null;
    // leaving either field with RIGHT exits to the right of the fraction
    return { items, cursor: { stack: parentStack, offset: fracIdx + 1 } };
  }

  if (direction === 'UP') {
    // A fraction sitting right beside the cursor is entered first (spatially
    // "above" the baseline cursor is that fraction's numerator).
    const adj = adjacentFrac();
    if (adj) {
      return {
        items,
        cursor: {
          stack: [...stack, { fracId: adj.frac.id, field: 'num' }],
          offset: adj.before ? adj.frac.num.length : 0,
        },
      };
    }
    if (stack.length > 0 && stack[stack.length - 1].field === 'den') {
      const { top, parentStack, frac } = parentInfo();
      if (frac) {
        return {
          items,
          cursor: {
            stack: [...parentStack, { fracId: top.fracId, field: 'num' }],
            offset: Math.min(off, frac.num.length),
          },
        };
      }
    }
    return null;
  }

  if (direction === 'DOWN') {
    const adj = adjacentFrac();
    if (adj) {
      return {
        items,
        cursor: {
          stack: [...stack, { fracId: adj.frac.id, field: 'den' }],
          offset: adj.before ? adj.frac.den.length : 0,
        },
      };
    }
    if (stack.length > 0 && stack[stack.length - 1].field === 'num') {
      const { top, parentStack, frac } = parentInfo();
      if (frac) {
        return {
          items,
          cursor: {
            stack: [...parentStack, { fracId: top.fracId, field: 'den' }],
            offset: Math.min(off, frac.den.length),
          },
        };
      }
    }
    return null;
  }

  return null;
}
