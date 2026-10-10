# Calculator Overhaul — Complete Change Log

**Scope:** everything below is confined to the `calculator/` folder. No other part of the
repo (`src/`, `calculater/`, `api/`, `public/`, …) was read, touched, or affected — the
calculator is a standalone Vite app and nothing outside imports its modules (verified by grep).

**Verification (all green):**
- `npx tsc --noEmit` → 0 errors
- `npm run build` (vite) → builds clean, bundle serves over HTTP 200
- `npm test` → **144/144** logic assertions + **35/35** jsdom component assertions
  (new suites — see *Testing* at the bottom)

Files changed:

| File | Extent |
|---|---|
| `src/utils/mathModel.ts` | full rewrite (expression model + cursor) |
| `src/utils/mathEngine.ts` | evaluation core rewritten (tokenizer/parser/AST), helpers fixed |
| `src/components/CasioCalculator.tsx` | full rewiring (keys, history, memory, keyboard) |
| `src/components/NaturalDisplay.tsx` | expression-line renderer rewritten |
| `src/components/NaturalMathView.tsx` | result-renderer bug fixes |
| `src/components/HistoryDrawer.tsx` | pretty tape text |
| `src/components/GuideModal.tsx` | docs synced to real key bindings |
| `src/components/Keypad.tsx` | one lying shift-label fixed |
| `src/types/calculator.ts` | additive fields on `HistoryItem` |
| `package.json` | `test` script + `jsdom`/`@types/jsdom` devDeps |
| `tests/logic.test.ts`, `tests/component.test.tsx` | new test suites |

---

## 1. Arrow keys & cursor (`src/utils/mathModel.ts` — full rewrite)

The old model was structurally incapable of behaving like a calculator cursor:
typed characters were merged into multi-character `TextItem`s while the root cursor was an
**item index**, so arrow keys hopped over whole expression chunks and you could never place
the cursor between two typed digits. Every issue below was fixed by re-designing the model.

1. **One character = one item.** `TextItem.value` is now a single character (invariant), so
   one cursor step = one character everywhere — ←/→ walk digit-by-digit through `sin(`,
   `Ans`, `×10^`, numbers, everything, like the real device.
2. **Cursor is now a path** (`{ stack: FieldRef[], offset }`) instead of the old
   `{ fracId?, field?, offset }` whose `offset` silently meant *item index* at root level but
   *character index* inside fractions. The new cursor works identically at any nesting depth.
3. **Recursive fractions.** `FractionItem.num/den` changed from flat strings to `MathItem[]`,
   so fractions nest (`1/(2/3)`), and ÷/▢⁄▢ **inside** a fraction creates a nested fraction.
   Previously pressing ÷ inside a numerator silently *teleported the cursor to the
   denominator* and inside a denominator silently *exited the fraction* — the division you
   typed simply vanished.
4. **→ at the end of a numerator now exits the fraction to the right** (real Casio
   behaviour). Previously it dropped you into the denominator, making → navigation
   unpredictable.
5. **← at the start of a denominator jumps to the end of the numerator; ← at the start of a
   numerator exits in front of the fraction** — kept from the old intent but now works at any
   nesting depth and never corrupts the path.
6. **↑/↓ only enter fractions that are *directly beside* the cursor.** Previously ↑ grabbed
   *any* fraction anywhere to the left and ↓ *any* fraction anywhere to the right — the cursor
   teleported across the screen. ↑ = numerator, ↓ = denominator, matching fx-991ES spatial
   navigation; ↑/↓ also move between num/den of the fraction you're inside, and between
   fields of *nested* fractions.
7. **`moveCursorInModel` returns `null` when a move is impossible**, letting the component
   cleanly fall back (e.g. ↑ at root with no adjacent fraction → history recall). The old
   version returned the unchanged state, so "moved" vs "blocked" was indistinguishable.
8. **Cursor never disappears anymore.** (Old renderer only drew the root cursor before the
   first or after the last item — mid-expression it was invisible; see §4.)
9. **New: forward delete** (`deleteForwardFromModel`) for the physical `Delete` key — removes
   the character/empty template *after* the cursor, steps into filled fractions. The key was
   completely dead before.
10. **Backspace semantics completed & made depth-aware:**
    - character before cursor → deleted;
    - filled fraction before cursor → step into its denominator (Casio-like);
    - **empty** fraction template before cursor → removed in one press;
    - backspace at denominator start → jump to numerator end;
    - at numerator start of an **empty** template → template removed;
    - at numerator start of a **filled** fraction → step out in front (previously you could
      then never delete the fraction itself without emptying both fields by hand).
11. **Fraction template absorption rewritten** (`insertFractionIntoModel`). Typing a value
    then ▢⁄▢ / ÷ absorbs that value as the numerator and parks the cursor in the
    denominator, now correctly handling: digit/decimal runs, identifiers (`Ans`, `π`, `e`,
    variables), **balanced parenthesis groups including whole function calls** (`sin(30)▢⁄▢`
    absorbs `sin(30)` — the old regex-run absorption could rip `sin` out of `sin(3|` leaving
    a dangling `(`), `√` groups, and `^`-exponent chains (`5^2▢⁄▢` absorbs `5^2`). Absorption
    is *refused* when the boundary is an unmatched `(` so a call is never torn apart.
12. **`/` is no longer a magic token inside the model.** Only the `FRAC` action creates a
    template; literal `/` characters (from history replay, constants, solver output) pass
    through as text and still evaluate. Previously any inserted `/` re-triggered template
    logic even mid-replay, mangling restored expressions.
13. **New helpers:** `modelFromString`, `charsToTextItems`, structural `cloneItems` /
    `cloneCursor` (replacing `JSON.parse(JSON.stringify())`), recursive `findFracById`,
    `getContainerItems`, `sameStack`, and **`clampCursor`** which sanitizes stale fraction
    references (e.g. after history replay or click-placement) and clamps offsets — the old
    code could carry a cursor pointing at a fraction id that no longer existed.
14. **`createInitialModel` now returns a clean screen.** The old model booted a hard-coded
    demo `(√2/2)+(√2/3)` with the cursor buried in the second denominator, result
    `1.178511302`, `Ans = 1.178511302`, and two fake seeded history entries — every launch.
15. **New `mathModelToDisplayString`** — pretty one-line form for the history tape
    (`(√2/2)+(√2/3)`, `1/(2/3)`, `□` for empty slots) with smart parenthesization.
16. **`mathModelToEvaluatableString` made recursive** for nested fractions; empty numerator →
    `0`, empty denominator → `÷0` → `Math ERROR` (Casio-like); returns `'0'` for an empty
    screen (old contract preserved).

## 2. Math engine (`src/utils/mathEngine.ts` — evaluation core rewritten)

The old engine rewrote the expression with ~25 chained regexes and executed it via
`new Function(...)`. That was broken by design — any parenthesis nesting defeated the
`[^)]+` captures. It has been replaced with a **hand-written tokenizer → recursive-descent
parser → AST tree-walking evaluator**. Concretely fixed:

17. **Nested calls evaluate now** (all were `Syntax ERROR` before): `sin(cos(0)+1)`,
    `√(sin(30))`, `Abs(ln(e))`, `log(2×3)`, `sin(π/6)+cos(π/3)`, …
18. **`2π` no longer equals `23.14159…`.** The old engine string-substituted `π` →
    `3.141592653589793` and concatenated it against a preceding digit (`2π` → `23.14…`).
    Constants and variables are now real tokens with implicit multiplication: `2π ≈ 6.283`.
19. **Factorial binds correctly as a postfix operator:** `sin(30)!` → `Math ERROR` (0.5! is
    invalid) instead of `Syntax ERROR`; `(2+3)!` = 120; `5!+1` = 121; `70!` → `Math ERROR`
    (Casio overflow) instead of `Infinity`.
20. **Percent works on any operand:** `(1+2)%` = 0.03 (old regex required literal digits →
    `Syntax ERROR`); `200×5%` = 10.
21. **nPr/nCr are real infix operators:** `5P3` = 60 (old tokenizer swallowed `P3` as one
    identifier), `(5+1)P2` = 30 (old regex was digits-only), spaced `5 P 3` works, and a bare
    `C`/`A`–`F` still resolves as a memory variable when not used as an operator.
22. **√ accepts any operand:** `√π`, `√Ans`, `√(1+2)` (old regex: digits or one paren level
    only).
23. **∫ / Σ / d∕dx are first-class expressions**, parseable anywhere — `2×∫(X,0,1)` = 1
    (previously they only matched when they were the *entire* expression).
24. **No more `new Function` on user input** — the arbitrary-JS evaluation path is gone
    (security hardening as a side effect).
25. **Correct precedence & associativity**, Casio rules: `2^3^2` = 512 (right-assoc),
    `-3^2` = -9 (unary minus below power), `2^-3` = 0.125, `1+2×3` = 7, `(1+2)×3` = 9;
    implicit multiplication generalized: `2(3)`, `(1+2)(3+4)`, `2sin(30)`, `2Ans`, `2X`,
    `)√(…` (old engine had four narrow regex cases).
26. **Auto-close of missing parens at `=`** (Casio behaviour): `sin(30` evaluates to 0.5.
27. **÷0 and overflow → `Math ERROR`.** Previously `1÷0` produced a *valid* result
    `Infinity` that was stored into `Ans` and pushed to the history tape, poisoning every
    later calculation.
28. **Scientific-notation literals tokenize** (`6.62607015e-34`): every small value inserted
    from the CONST catalog was previously mangled because the `e` was replaced with Euler's
    number mid-literal.
29. **Result formatting no longer mangles numbers.** `toPrecision(10).replace(/\.?0+$/,'')`
    stripped significant zeros: **`1234567890.123` displayed as `1`**. Now
    `String(Number(toPrecision(10)))` → `1234567890`; exponential form engages at Casio's
    display limits (≥ 1e10 or < 1e-9) as `1×10^10` / `6.62607×10^-34`.
30. **Float-dust cleanup kept** (`0.1+0.2` → `0.3`, `sin(180°)` → 0) and integer snapping
    guarded to |x| < 1e15.
31. **Full DMS support:** `12°30'45"` parses to 12.5125; `30°` converts into the *current*
    angle unit so `sin(30°)` = 0.5 in DEG, RAD and GRA alike. `toDMS` display carry fixed
    (59.999″ used to render as `12°59'60"`).
32. **Angle conversion moved into the evaluator** (DEG/RAD/GRA for trig & inverse trig;
    hyperbolics never convert) instead of fragile string substitution that broke on nesting.
33. **`Pol`/`Rec` produce Casio pair results** (`r=5, θ=53.1301024`, `X=1, Y=1.732050808`)
    from *evaluated* arguments — previously an anchored regex required the entire expression
    to be literal digits, so `Pol(1+2,4)` was `Syntax ERROR`.
34. **Calculus numerics improved:** ∫ composite Simpson n=200 (was 120) with non-finite /
    huge-range guards (`Math ERROR` / `Time Out ERROR`); Σ iteration guard raised to 100 000
    with `Time Out ERROR`; d/dx central difference with scaled step `h = 1e-5·max(1,|x|)`
    (fixed 1e-6 was noisy for large x).
35. **Randoms:** `Ran#` returns a 3-decimal value in [0,1) as a typed number; `RanInt(a,b)`
    validates `b ≥ a` (→ `Math ERROR`) and uses ceil/floor for a correct inclusive range.
36. **Odd roots of negatives are real:** `³√(-8)` = -2, `3ⁿ√(-27)` = -3; `0ⁿ√x` → error.
37. **Unknown identifiers** (e.g. `i` in COMP mode) → clean `Syntax ERROR` instead of a raw
    `ReferenceError` leaking from `new Function`.
38. **`toFraction` hardened:** 64-iteration cap + degenerate-denominator break (the continued
    fraction loop could spin on pathological inputs); **`getExactRadicalForm` zero-numerator
    guard** (tiny values like 1e-8 could be "formatted" as `0√2`).
39. **`toEng` fixed:** mantissa rounding overflow (999 999 999.9999999 → was `1000×10^6`,
    now `1×10^9`); non-finite input → `Math ERROR` instead of `NaN×10^NaN`.
40. **New export `solveForX()`** — sign-change scan over [-50, 50] (400 samples) → 100-iteration
    bisection → Newton-Raphson polish from 6 seeds. Powers the new SHIFT+CALC **SOLVE** (§3).
41. **New export `formatNumberText()`** shared by the result line and SOLVE output.
42. **Dead code removed:** `preprocessCasio()` (never called anywhere; contained the same π
    concatenation bug).
43. **All previously exported APIs preserved** so `TableGenerator`, `EquationSolver`,
    `MatrixSolver` keep working untouched: `gcd`, `toRadians`, `fromRadians`, `factorial`,
    `nPr`, `nCr`, `toFraction`, `getExactRadicalForm`, `parseDMS`, `evalComplex`,
    `convertBase`, `solveQuadratic`, `solveCubic`, `solveLinear2`, `matrixDet2x2/3x3`,
    `evalDerivative/evalIntegral/evalSummation` (string wrappers kept).

## 3. Calculator behaviour (`src/components/CasioCalculator.tsx`)

44. **Post-`=` behaviour now matches a real Casio:** after a result, typing a
    digit/function/template **starts a fresh expression**; typing an operator
    (`+ − × ÷ ^ ! % ° , P C`) **continues from `Ans`** (`5+3= ×2=` → 16); ÷ after `=` yields
    `Ans▢/▢` with Ans absorbed as the numerator; moving the cursor with an arrow resumes
    editing the shown expression in place. Previously everything just appended to the stale
    expression forever.
45. **`=` on an empty screen recalls `Ans`** (dead no-op before).
46. **Errors keep the expression editable** and no longer touch `Ans`, the result flags or
    the history tape (previously an `Infinity` "result" polluted all three).
47. **History recall rebuilt (▲/▼):**
    - ▲ recalls older, ▼ newer, and recall **stops at the oldest entry** — the old code
      *wrapped around* to the newest.
    - **Your unsaved input is preserved:** first ▲ snapshots the work-in-progress as a draft
      and ▼ past the newest entry restores it. Previously ▲ instantly destroyed whatever you
      were typing with no way back.
    - ▲ no longer fires merely because history exists — a fraction adjacent to the cursor
      takes priority (the old code, with its always-seeded fake history, made ↑ *never* able
      to enter a fraction from the baseline).
    - Recalled entries **restore the original structured expression** (real stacked
      fractions via the new `modelJson` snapshot) instead of flat
      `((√2)/(2))+((√2)/(3))` text.
    - While browsing, ▲▼ scroll the tape even if the expression contains fractions; ◀▶ exit
      browsing but keep the recalled expression editable (Casio behaviour). ▼ below a
      recalled entry previously fell through into fraction-entry logic — now consistent.
    - The tape **starts empty** — the two fake demo entries are gone.
48. **SHIFT+CALC is now a real SOLVE:** solves `f(X)=0` numerically (via `solveForX`), shows
    `X=…`, stores the root into variable `X`, and reports `Can't Solve` when there is no
    root; falls back to plain `=` when the expression has no `X`. Before, the key labelled
    SOLVE did exactly the same thing as CALC.
49. **STO actually stores now:** SHIFT→RCL arms store mode (STO annunciator lights), then
    ALPHA+letter (A B C D E F X Y M via their labelled keys) writes `Ans` into that variable;
    any other key cancels the pending store. Previously it only lit the indicator and did
    nothing, ever.
50. **ALPHA+S⇔D inserts variable `Y`** — the label was printed on the keypad but the branch
    didn't exist.
51. **M+ / M− use `Ans` (the real computed value)** instead of `parseFloat(result)` — which
    silently returned `5` for an exact result like `5√2/6`, `1.23` for `1.23×10^5`, and
    `NaN` for error text.
52. **ENG and SHIFT+0 (Rnd) likewise use `Ans`** instead of parsing the displayed text; both
    skip when the result is an ERROR; ENG output no longer fights exact-display mode.
53. **°'\" key semantics matched to their labels:** plain press now *types* `°` (it used to
    hijack the press to DMS-convert the result); SHIFT performs the ← DMS conversion of the
    current value.
54. **SHIFT+(−) inserts `°`** as its (corrected) label promises — previously identical to a
    plain (−) press.
55. **Template keys insert minimal editable skeletons** instead of pre-solved examples:
    ∫dx → `∫(X,0,1)`, SHIFT+∫dx → `d/dx(X,0)` (was the pre-answered `d/dx(X^2, 3)`),
    SHIFT+log□□ → `Σ(X,1,5)` (was `Σ(X, 1, 10)`), log□□ → `log_2(` (was the pre-answered
    `log_2(8)`), ALPHA+. → `RanInt(1,6)`.
56. **ON vs AC differentiated:** AC clears the current entry only (real AC); ON performs a
    full power-on reset — additionally clearing memory variables and the history tape. Both
    were the same partial clear before; neither cleared `justEvaluated`/recall state (which
    didn't exist).
57. **Keyboard handling rebuilt** (physical computer keyboard):
    - **No key leaks into the calculator while any dialog is open** — previously `c` cleared
      the screen, arrows scrolled history, etc. *behind* open modals; **Escape now closes the
      top-most dialog** instead of AC-ing the calculator underneath.
    - Input guard extended to `SELECT` and `contentEditable` targets.
    - New bindings: `Delete` (forward delete), `,`, `!`, `%`, `a`→Ans, `e`→e, `h`→sinh(,
      `l`→log(, `L`→ln(, `r`→√(, `R`→³√(, `P`→nPr, `S/C/T`→sin⁻¹/cos⁻¹/tan⁻¹ (Shift+letter),
      letters→variables (`A B D E F x y m`), `p`→π, `s/c/t`→trig kept.
    - Removed the `c`/`C`→AC hijack (Escape covers AC; `c` is cos now).
    - **Every keyboard press now plays the matching key-click sound** (`num`/`func`/`dpad`/
      `ac` timbres) — previously only mouse clicks made sound.
58. **Stale-closure hazard removed:** the old UP/DOWN branches read `mathState` without
    declaring it in the callback deps (it only worked by accident through another callback's
    identity). All callbacks now carry complete, verified dependency arrays.
59. **Click-to-place cursor is validated** through `clampCursor` (a click can never install a
    cursor pointing at a nonexistent fraction), exits history browsing and clears the
    post-`=` flag — clicking means "I want to edit here".
60. **Tape-drawer replay** restores the structured expression, the result *and* exact result,
    and enters the same post-calculation state as `=` (digit → fresh, operator → Ans-continue).
61. **▲/▼ annunciators reflect reality:** ▲ lights only while older entries remain (was: lit
    whenever any history existed); ▼ lights while browsing back down.
62. **Defaults that a real calculator ships with:** angle unit **DEG** (was RAD), `Ans` = 0
    (was 1.178511302), result line `0` (was `1.178511302` / exact `5√2/6`).
63. **Clearing the tape resets recall state** (index + draft) so ▲▼ can't point into a
    deleted list.

## 4. LCD rendering (`src/components/NaturalDisplay.tsx` — expression line rewritten)

64. **The cursor can no longer vanish.** The old renderer drew the root cursor *only* before
    the first or after the last item — anywhere mid-expression it was invisible, so editing
    felt broken. Exactly one cursor now renders at every position: between items, *inside* a
    text run at any character offset, inside any fraction field at any nesting depth, inside
    empty fields (blinking block), and at start/end.
65. **Character-precise click placement:** every character is individually clickable and the
    click's left/right half decides whether the cursor lands before or after it. Previously a
    click anywhere on a text chunk threw the cursor to the end of the *whole* chunk.
66. **Recursive fraction rendering** with per-depth font scaling — nested fractions display
    properly stacked (previously unrepresentable).
67. **Radical vinculum on the input line re-implemented** as a per-character state machine
    (√ glyph + overline through the matching paren) that coexists with per-character cursors
    and click targets — the old `formatSegment` split the string on √ and could not render a
    cursor inside the radicand at all.
68. **Auto-scroll keeps the cursor visible:** the expression line scrolls to re-center the
    cursor on every state change. Previously long expressions silently pushed the cursor
    off-screen — it *looked* like typing had stopped working.
69. **Clicking empty LCD space parks the cursor at the end** — now also works when the click
    lands on the inner content wrapper (event-target check fixed).
70. Active fraction field keeps its highlight ring; the S⇔D hint is suppressed for ERROR
    strings; result line got overflow handling (scrolls instead of breaking the LCD layout).
71. Removed the dead demo-specific helpers (`renderTextWithCursor`, old `formatSegment`) and
    the invalid Tailwind class `py-0.2` on the D/R/G badge.
72. Added `data-testid="expression-line"` / `"result-line"` hooks used by the new component
    test suite (no behavioural effect).

## 5. Result renderer (`src/components/NaturalMathView.tsx`)

73. **Fixed ×/÷ associativity:** the splitter now takes the *rightmost* × **or** ÷ (one
    precedence level). Previously it always preferred × even when ÷ came later, so a result
    like `6×2/3` rendered as 6×(2⁄3) — a visibly wrong stacked fraction.
74. **Inline radicals in raw segments render properly:** exact results like `5√2/6`, `2√3`,
    `-7√10/3` now show a real radical glyph with vinculum (the numerator `5√2` used to render
    as flat text); cube roots supported; radicands parsed recursively.
75. Cursor-token raw rendering passes through the same radical formatting.

## 6. Supporting components & types

76. **`HistoryDrawer`:** tape rows and "Copy All Tape" now show the readable display form
    (`(√2/2)+(√2/3)`) instead of the raw evaluatable string (`((√2)/(2))+((√2)/(3))`).
77. **`GuideModal`:** shortcut documentation rewritten to match the *actual* bindings —
    added Delete, `,` `!` `%`, arrow-key semantics (fraction entry vs history scroll with
    draft restore), Shift-letter inverse trig, `l/L`, `r/R`, `a`, variable letters, Escape
    closing dialogs; feature docs updated for SHIFT+CALC SOLVE, post-`=` continuation, and
    the STO flow (SHIFT→RCL then ALPHA+letter).
78. **`Keypad`:** SHIFT label above `(−)` corrected from `∡` to `°` (it now inserts what it
    shows). All 45+ key actions were audited against the dispatcher — every action the keypad
    can emit has a handler.
79. **`types/calculator.ts`:** `HistoryItem` gained optional `display` (readable tape text)
    and `modelJson` (structured-expression snapshot for faithful replay) — purely additive,
    backward compatible.

## 7. Intentional behaviour decisions (documented, not bugs)

- **Default angle unit is DEG** (was RAD) — matches the physical fx-991ES default.
- **÷ in Math mode opens the fraction template** and absorbs the preceding value (Casio
  MathIO behaviour). Literal `/` characters entering through replay/constants/solver output
  still evaluate as division.
- **SHIFT+DEL (INS)** remains a no-op that cancels SHIFT — insert-overwrite mode is out of
  scope; the physical `Delete` key now provides forward deletion instead.
- `tan(90°)` returns the large finite float (1.633…×10^16) rather than a hard error —
  consistent with the ClassWiz family.

## 8. Testing & tooling (new)

80. **`tests/logic.test.ts` — 144 assertions** covering: precedence/associativity, implicit
    multiplication, the old regex-engine killers (nesting, `2π`, postfix factorial, `(1+2)%`,
    `(5+1)P2`, nested ∫), trig/hyp/log in DEG/RAD/GRA, inverse trig domains, DMS parse &
    format (incl. carry), percent, roots (incl. odd roots of negatives, ⁿ√), |x| & Abs,
    ∫/Σ/d∕dx values, Ans/variables, Pol/Rec pair output, Ran#/RanInt bounds, ÷0 & overflow &
    syntax errors, paren auto-close, 10-digit formatting (incl. the `1234567890` regression),
    exact radical/fraction forms, `solveForX` (found & not-found cases), `toEng` overflow,
    `convertBase`, plus the full model surface: char-by-char movement, null-at-edges,
    fraction entry/exit rules (→ exits numerator, ← den-start→num-end, ↑↓ adjacency-only),
    absorption (incl. `sin(30)`, `5^2`, refusal inside an open call, `Ans`), nesting &
    serialization, backspace/forward-delete matrices, cursor clamping, display strings.
81. **`tests/component.test.tsx` — 35 assertions** rendering the *real* `CasioCalculator` in
    jsdom and driving it with *real* `KeyboardEvent`s: clean boot, `2+3=5`, post-`=`
    operator-continuation (`Ans×2`) vs digit-fresh-start, char-by-char arrow editing
    (`123` → ←← → `9` → `1923`), Delete key, Backspace, ÷-absorption fraction flow, ▲ into a
    numerator + backspace proving it, exact-fraction result structure, full ▲▼ history walk
    with structured recall, no wraparound at the oldest entry, draft restore, `=`-on-empty
    Ans recall, error resilience (expression stays editable, single cursor), `s30` + Enter
    auto-close → exact 1/2.
82. **`package.json`:** added `"test": "tsx tests/logic.test.ts && tsx tests/component.test.tsx"`;
    devDependencies `jsdom` + `@types/jsdom`. No production dependencies changed.

---

# Round 2 — Deep Debugging Pass (arrows × fractions × trigonometry)

Trigger: "check that in fractions the arrow keys work correctly or are they breaking /
sometimes just going out of place." Instead of eyeballing, this round built **adversarial
test harnesses first**, ran them against the live code, confirmed every failure, then fixed
the code and re-ran everything.

## New deep-debug harnesses

83. **`tests/arrows.test.ts` — model-level torture suite (398 assertions).** For six
    expression shapes (plain text with `sin(`, single fraction, fraction inside a trig call,
    nested fraction, two fractions joined by operators, **doubly-nested** fraction) it
    verifies at *every* legal cursor position:
    - **P1/P2 no cycles & termination:** the full →-walk from the start and ←-walk from the
      end never revisit a position and always terminate (catches "stuck/looping" cursors);
    - **P3 completeness:** union of both walks == *every* legal position in the tree
      (root slots + every field slot at every depth) — nothing is unreachable, nothing
      strands the cursor;
    - **P4 exact placement:** inserting a marker `Z` at any walked position lands in that
      exact container slot (checked against an independent reconstruction);
    - **P5 ↑/↓ semantics:** den→num / num→den with offset clamping; from the baseline ↑/↓
      may only enter a fraction **directly adjacent** to the cursor (no cross-screen
      teleporting); inside a numerator with nothing nested beside the cursor, ↑ is a
      guaranteed **no-op** — it can never escape or explode the fraction; ↑↓ round-trips
      return to the baseline;
    - **P6 deletion safety:** backspace and forward-delete at every position keep the tree
      consistent and remove at most one character;
    - **P7 fuzz:** 3 × 4000 seeded random operations (digits, operators, `sin(`, `π`, `Ans`,
      `√(`, `^`, parens, commas, `!`, `°`, FRAC, both deletes, all four arrows) — after every
      single op the cursor stack must still resolve, the offset must be in range, and both
      serializers must not throw.
84. **`tests/component-arrows.test.tsx` — UI-level marker-probe suite (52 assertions).**
    Drives the real rendered calculator with real `KeyboardEvent`s and *proves* cursor
    position by typing a `9` marker after k arrow presses, reading numerator/denominator
    separately via new `data-field` / `data-frac` / `data-depth` attributes:
    - full ←-walk probe (8 stops: den-end → den-start → num-end → num-middle → num-start →
      root-start → no-op) and →-walk probe (6 stops, incl. proof that → never dips into the
      denominator — the Casio rule);
    - ↑/↓ between fields with offset clamping;
    - backspace ladder through a fraction (den char → jump to num → eat num → template
      removal), including the inactive-empty-field `□` placeholder;
    - char-by-char walk **inside** the 4-char `sin(` token;
    - **doubly-nested** `((1/2)/3)` built entirely by arrow keys, evaluated to exact `1/6`,
      then ↑↑ from the baseline walking root → outer numerator → **nested** numerator;
    - `sin(π/6)` built through the fraction template in RAD mode → exact stacked `1/2`;
    - `sin(30/1)` in DEG via numerator absorption inside an open call → `1/2`;
    - click placement on individual character spans (left/right half → before/after) and on
      fraction fields (parks at field end);
    - single-cursor invariant asserted after every probe.
85. `NaturalDisplay` fraction boxes/fields tagged with `data-frac`, `data-field`,
    `data-depth` (test observability, zero behavioural effect).
86. `npm test` now runs all four suites: **655 assertions, all passing**; `tsc --noEmit`
    clean; production build clean.

## Real bugs found by the harnesses (confirmed failing first, then fixed)

87. **▲ inside a fraction numerator hijacked the expression into history recall.**
    `moveCursorInModel('UP')` correctly returns `null` when the cursor is already topmost
    inside a numerator, but the component treated *every* `null` as "not near a fraction →
    recall history" — so pressing ▲ while editing a numerator **replaced the whole
    expression with an old history entry** (the exact "goes out of place" symptom).
    Fix: history recall now only triggers when the cursor is on the **root baseline**
    (`cursor.stack.length === 0`); inside any fraction field ▲ is a no-op, like the device.
88. **After a ▲-recall, operator keys silently swapped the expression for `Ans+`.**
    Recall set the same `justEvaluated` flag as `=`, so pressing `+` on a recalled `4+4`
    threw it away and produced `Ans+`. On a real Casio, a recalled expression is immediately
    editable: operators **append** to it, only value keys replace it. Fix: separate
    `justRecalled` state — after recall, `+ − × ÷ ^ ! % ° , P C` append at the cursor and
    digits/functions/templates start fresh; after `=`, the Ans-continuation rule still
    applies. All exits (arrows, DEL, AC/ON, clicks, new `=`) clear the flag consistently.
89. **▢⁄▢ / ÷ refused to absorb the value before the cursor inside an open call.**
    `sin(30` + ÷ produced `sin(30▢/▢` **with an empty numerator** (a leftover guard from
    round 1 that was stricter than the hardware): on a real Casio the `30` becomes the
    numerator — `sin(30▢/▢)` — because absorption already stops at the unmatched `(` and
    can't rip the call apart. Fix: removed the over-cautious refusal; the harness pins
    `sin(((30)/(0))` serialization and denominator cursor placement.
90. **A dangling `^` was absorbed into a numerator.** `2^` + ▢⁄▢ created the untypeable
    template `((2^)/(□))` ( Syntax ERROR on `=`). Fix: `^` is only absorbed when it chains
    onto an already-absorbed value run — `2^3▢⁄▢ → (2^3)/□` still works, `2^▢⁄▢ → 2^(□/□)`
    now matches the device.
91. Removed the now-dead `isText` helper left over from the absorption guard.

## Verified-correct behaviours the harnesses pinned down (no change needed)

- → at numerator end exits the fraction (does **not** fall into the denominator); ← after a
  fraction enters the denominator end; ← at denominator start jumps to numerator end;
  ← at numerator start exits in front — all exactly once, no revisits, at every depth.
- ↑/↓ only enter fractions *directly beside* the cursor; adjacent-beats-recall at the
  baseline; ↑ at the baseline next to a fraction enters its numerator even when history
  exists (recall only happens when nothing is adjacent).
- Marker probes confirm character-exact insertion at all 8 ←-walk and 6 →-walk stops of a
  populated fraction, including mid-numerator and mid-denominator slots.
- Backspace into an empty template deletes the whole fraction; into a filled one it steps
  inside instead of nuking content; forward-delete mirrors it.
- Trig × fraction evaluation battery (26 new engine assertions): `sin(π/6)`→`1/2`,
  `sin(30)/2`→`1/4`, `cos(π/3)`, `tan(45/1)`, GRA `sin(50/1)`→`√2/2`, `√(1/4)`,
  `sin⁻¹(1/2)`→30, `1/2+1/3`→`5/6`, `2/3×9/4`→`3/2`, nested `1/(2/3)`→`3/2`, `log(100/1)`,
  `sin(π/2)`, `π/2` exact form, `(1/2)^(-1)`, `120/5!`, `d/dx(1/X, 2)`→`-0.25`,
  `∫(1/X, 1, e)`→1, `Σ(1/X, 1..4)`→`25/12`.
92. `GuideModal` ▲▼ documentation refined to describe the corrected semantics (field
    stepping, adjacency entry, baseline history, post-recall editing rules).

## Round-2 file touch list

| File | Change |
|---|---|
| `src/components/CasioCalculator.tsx` | bugs 87 (root-only UP recall) & 88 (`justRecalled` mode + flag lifecycle across every action path) |
| `src/utils/mathModel.ts` | bugs 89 & 90 (absorption inside calls; dangling-`^` rule), dead helper removed |
| `src/components/NaturalDisplay.tsx` | `data-frac` / `data-field` / `data-depth` test attributes |
| `src/components/GuideModal.tsx` | arrow-key documentation corrected |
| `tests/arrows.test.ts` | new — 398 model-level property/fuzz assertions |
| `tests/component-arrows.test.tsx` | new — 52 UI-level marker-probe assertions |
| `tests/logic.test.ts` | +26 trig×fraction engine assertions; absorption expectation updated to Casio behaviour |
| `package.json` | `test` script runs all four suites |

**Final state: 655/655 assertions passing · `tsc --noEmit` clean · `vite build` clean.**

---

# Round 3 — Visible empty fraction slots (final fix)

Reported symptom (with screenshots): after pressing the fraction key, the **lower
(denominator) slot is barely visible** until you arrow down into it — only the active field
was discernible (via its highlight), while an inactive empty field rendered as a tiny 9px
`□` glyph at 40% opacity on the green LCD.

93. **`NaturalDisplay`: empty numerator/denominator slots now always render as proper
    Casio-style template boxes** — a dashed-outlined slot (`min-w-[16px]`, `h-[1.2em]`,
    dashed 1.5px border at 50–70% ink, faint fill) instead of the near-invisible `□` glyph.
    The blinking cursor sits *inside* the slot box when that slot is the active field, so a
    fresh `▢/▢` shows both slots clearly the instant it is created, and an absorbed
    `12▢/▢` shows the waiting denominator slot without needing any arrow keys. Slot boxes
    scale down with nested-fraction font size (em-based).
94. `tests/component-arrows.test.tsx`: new section N pins the fix through the real UI —
    fresh fraction shows **both** slot boxes immediately, absorbed-numerator fraction shows
    the denominator slot box, empty slots contribute no stray text, single cursor inside the
    active slot; the backspace-ladder probe now asserts the slot box instead of the `□`
    glyph.

**Final state: 659/659 assertions passing across four suites · `tsc --noEmit` clean ·
`vite build` clean.**
