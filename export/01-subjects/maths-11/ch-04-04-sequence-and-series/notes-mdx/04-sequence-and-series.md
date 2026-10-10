<!-- note kx73g5ee3fyv5hrrmsay7q7p9d85pnxf | topic ms7ed5tc45k6qhv23y6pg54x8n85q3b6 | status published -->
# 4.1 Sequences and Their Terms

# 4.1 Sequences and Their Terms

A **sequence** is a function whose domain is the set of positive integers $\{1, 2, 3, \ldots\}$. Each value $a_n$ is called the **$n^{th}$ term** or **general term** of the sequence.

$$a_1, a_2, a_3, \ldots, a_n, \ldots$$

---

## Finding Terms from a General Formula

To find the $k^{th}$ term, **substitute $n = k$** into the formula $a_n$.

**Example:** If $a_n = \dfrac{n^2 - 1}{n^2 + 1}$, find $a_1, a_2, a_3$.

$$a_1 = \frac{1-1}{1+1} = 0, \quad a_2 = \frac{4-1}{4+1} = \frac{3}{5}, \quad a_3 = \frac{9-1}{9+1} = \frac{8}{10} = \frac{4}{5}$$

---

## Arithmetic Sequences

A sequence $a_1, a_2, a_3, \ldots$ is **arithmetic** if there is a constant **common difference** $d$ such that:

$$a_{n+1} - a_n = d \quad \text{for all } n$$

The **general term** of an arithmetic sequence is:

$$a_n = a_1 + (n-1)d$$

**Example:** The sequence $5, 8, 11, 14, \ldots$ has $a_1 = 5$ and $d = 3$.
$$a_n = 5 + (n-1)(3) = 3n + 2$$

---

## Geometric Sequences

A sequence is **geometric** if there is a constant **common ratio** $r$ such that:

$$\frac{a_{n+1}}{a_n} = r \quad \text{for all } n$$

The **general term** of a geometric sequence is:

$$a_n = a_1 \cdot r^{n-1}$$

**Example:** The sequence $3, 9, 27, 81, \ldots$ has $a_1 = 3$ and $r = 3$.
$$a_n = 3 \cdot 3^{n-1} = 3^n$$

---

## Identifying Arithmetic vs Geometric Sequences

| Property | Arithmetic | Geometric |
|---|---|---|
| Test | $a_{n+1} - a_n = \text{const}$ | $\dfrac{a_{n+1}}{a_n} = \text{const}$ |
| General term | $a_1 + (n-1)d$ | $a_1 \cdot r^{n-1}$ |
| Example | $2, 5, 8, 11, \ldots$ | $2, 6, 18, 54, \ldots$ |

---

## Alternating Sequences

An **alternating sequence** changes sign between consecutive terms. This is achieved using $(-1)^n$ or $(-1)^{n+1}$:

- $(-1)^n$: first term is **negative** (since $(-1)^1 = -1$)
- $(-1)^{n+1}$: first term is **positive** (since $(-1)^2 = +1$)

**Example:** $a_n = (-1)^{n+1} \cdot n$ gives $1, -2, 3, -4, 5, \ldots$

---

## Finding the General Term from a Pattern

When given the first few terms, identify the pattern and express it as a function of $n$.

**Example 1:** $1\cdot2,\ 2\cdot3,\ 3\cdot4,\ \ldots$
- First factor: $1, 2, 3, \ldots = n$
- Second factor: $2, 3, 4, \ldots = n+1$
- General term: $a_n = n(n+1)$

**Example 2:** $\sqrt{2},\ \sqrt{4},\ \sqrt{6},\ \sqrt{8},\ \ldots$
- Numbers under root: $2, 4, 6, 8, \ldots = 2n$
- General term: $a_n = \sqrt{2n}$

---

<!-- note kx75dmvkydredfscxetggdcp3985qx83 | topic ms70f43qcwkwyp7n7m98w8bkmn85pvaj | status published -->
# 4.2 Arithmetic Sequence and General Term

# 4.2 Arithmetic Sequence and General Term

## Definition

An **arithmetic sequence** (or arithmetic progression, A.P.) is a sequence in which each term after the first is obtained by adding a fixed constant called the **common difference** $d$ to the preceding term.

$$a_1,\ a_1+d,\ a_1+2d,\ a_1+3d,\ \ldots$$

The common difference is found by:
$$d = a_{n+1} - a_n \quad \text{(constant for all } n\text{)}$$

---

## General Term (nth Term)

The **general term** (or $n$th term) of an arithmetic sequence is:

$$a_n = a_1 + (n-1)d$$

where:
- $a_1$ = first term
- $d$ = common difference
- $n$ = position of the term

**Example:** Find the 15th term of $4, 9, 14, 19, \ldots$

$$a_1 = 4,\quad d = 9 - 4 = 5$$
$$a_{15} = 4 + (15-1)(5) = 4 + 70 = 74$$

---

## Finding $a_1$ and $d$ from Two Non-Consecutive Terms

If two terms $a_m$ and $a_n$ are known, set up a system of equations:

$$a_m = a_1 + (m-1)d$$
$$a_n = a_1 + (n-1)d$$

Subtract one equation from the other to find $d$, then substitute back to find $a_1$.

**Example:** If $a_3 = 7$ and $a_9 = 25$, find $a_1$ and $d$.

$$a_3 = a_1 + 2d = 7 \quad \cdots (1)$$
$$a_9 = a_1 + 8d = 25 \quad \cdots (2)$$

Subtracting (1) from (2): $6d = 18 \Rightarrow d = 3$

Substituting into (1): $a_1 = 7 - 2(3) = 1$

---

## Three Consecutive Terms in A.P.

If $x$, $y$, $z$ are three consecutive terms of an A.P., then:

$$y - x = z - y \implies 2y = x + z$$

This means the **middle term is the arithmetic mean** of the outer two terms.

**Tip:** When three numbers in A.P. are unknown, let them be $a-d$, $a$, $a+d$ to simplify calculations.

---

## Arithmetic Mean

The **arithmetic mean** $A$ between two numbers $a$ and $b$ is:

$$A = \frac{a + b}{2}$$

This works because $a$, $A$, $b$ must form an A.P., so $A - a = b - A$, giving $2A = a + b$.

**Example:** The arithmetic mean between $\sqrt{2}$ and $3\sqrt{2}$ is:
$$A = \frac{\sqrt{2} + 3\sqrt{2}}{2} = \frac{4\sqrt{2}}{2} = 2\sqrt{2}$$

---

## Finding the Position of a Term

To find which position $n$ a value $X$ occupies in an A.P.:

1. Set $a_n = X$: $\quad a_1 + (n-1)d = X$
2. Solve for $n$
3. **Check:** $n$ must be a **positive integer**; if not, $X$ is not a term of the sequence.

**Example:** Is $101$ a term of $5, 8, 11, 14, \ldots$?

$$5 + (n-1)(3) = 101 \implies 3(n-1) = 96 \implies n-1 = 32 \implies n = 33$$

Since $n = 33$ is a positive integer, $101$ is the **33rd term**.

---

## Key Formulas Summary

| Formula | Description |
|---|---|
| $a_n = a_1 + (n-1)d$ | General (nth) term |
| $d = a_{n+1} - a_n$ | Common difference |
| $A = \dfrac{a+b}{2}$ | Arithmetic mean |
| $2y = x + z$ | Condition for $x, y, z$ in A.P. |

---

---

<!-- note kx79z41997snq1y4gffzwthe8185p2pg | topic ms7abjvwmq02jpp67hkzs2tfrs85py2e | status published -->
# 4.3 Arithmetic Series and Sum

# 4.3 Arithmetic Series and Sum

An **arithmetic series** is the sum of the terms of an arithmetic sequence. If the sequence is $a_1, a_2, a_3, \dots, a_n$ with common difference $d$, the corresponding series is:

$$a_1 + a_2 + a_3 + \dots + a_n$$

---

## Key Formulas

### Formula 1 — When $a_1$, $a_n$, and $n$ are known:

$$S_n = \frac{n}{2}(a_1 + a_n)$$

This is the most efficient formula when the first and last terms are both known.

### Formula 2 — When $a_1$, $d$, and $n$ are known:

$$S_n = \frac{n}{2}[2a_1 + (n-1)d]$$

This is derived by substituting $a_n = a_1 + (n-1)d$ into Formula 1.

---

## Derivation of the Sum Formula

Write the sum forwards and backwards:

$$S_n = a_1 + (a_1+d) + (a_1+2d) + \dots + a_n$$
$$S_n = a_n + (a_n-d) + (a_n-2d) + \dots + a_1$$

Adding both rows term by term:

$$2S_n = n(a_1 + a_n) \implies S_n = \frac{n}{2}(a_1 + a_n)$$

---

## Finding $n$ When It Is Unknown

If the first term $a_1$, last term $a_n$, and common difference $d$ are known but $n$ is not, use:

$$n = \frac{a_n - a_1}{d} + 1$$

**Example:** Find the number of terms in $5 + 8 + 11 + \dots + 50$.

$$n = \frac{50 - 5}{3} + 1 = 15 + 1 = 16$$

---

## Finding $n$ When $S_n$, $a_1$, and $d$ Are Given

Substitute into $S_n = \frac{n}{2}[2a_1 + (n-1)d]$ and solve the resulting **quadratic equation** in $n$:

$$dn^2 + (2a_1 - d)n - 2S_n = 0$$

---

## Finding the First Three Terms Given $n$, $a_n$, and $S_n$

**Step 1:** Use $S_n = \frac{n}{2}(a_1 + a_n)$ to find $a_1$.

**Step 2:** Use $a_n = a_1 + (n-1)d$ to find $d$.

**Step 3:** The first three terms are $a_1,\ a_1 + d,\ a_1 + 2d$.

**Example:** Given $n = 10$, $a_{10} = 30$, $S_{10} = 165$, find the first three terms.

- $165 = \frac{10}{2}(a_1 + 30) \Rightarrow 33 = a_1 + 30 \Rightarrow a_1 = 3$
- $30 = 3 + 9d \Rightarrow d = 3$
- First three terms: $3, 6, 9$

---

## Sum of Multiples Between Two Bounds

To find the sum of all multiples of $k$ between $L$ and $U$:

1. Find $a_1$ = smallest multiple of $k$ that is $\geq L$.
2. Find $a_n$ = largest multiple of $k$ that is $\leq U$.
3. Find $n = \frac{a_n - a_1}{k} + 1$.
4. Apply $S_n = \frac{n}{2}(a_1 + a_n)$.

**Example:** Sum of multiples of 4 between 14 and 523.

- $a_1 = 16$, $a_n = 520$, $d = 4$
- $n = \frac{520 - 16}{4} + 1 = 127$
- $S_{127} = \frac{127}{2}(16 + 520) = \frac{127 \times 536}{2} = 34036$

---

## Real-World Applications

In word problems where a quantity **increases by a fixed amount** each period (e.g., daily savings, monthly salary increments):

- The **total number of periods** = $n$ (number of terms)
- The **fixed increase per period** = $d$ (common difference)
- The **initial value** = $a_1$ (first term)

**Example:** A person saves Rs. 100 on day 1 and increases savings by Rs. 20 each day. Total savings in 30 days:

$$S_{30} = \frac{30}{2}[2(100) + (30-1)(20)] = 15[200 + 580] = 15 \times 780 = 11700$$

---

---

<!-- note kx7236hc5j8e4smbrkvy69b5qs85qx10 | topic ms72kg74wpre4ff6fea9r49dch85pmzd | status published -->
# 4.4 Geometric Sequence and Common Ratio

# 4.4 Geometric Sequence and Common Ratio

## Geometric Sequence

A **geometric sequence** (also called a geometric progression, G.P.) is a sequence in which each term after the first is obtained by multiplying the preceding term by a fixed non-zero number called the **common ratio** $r$.

### Definition

A sequence $a_1, a_2, a_3, \ldots, a_n$ is geometric if:
$$\frac{a_{n+1}}{a_n} = r \quad \text{(constant for all } n \geq 1\text{)}$$

### General Term

The $n$-th term of a geometric sequence is:
$$a_n = a_1 \cdot r^{n-1}$$
where $a_1$ is the first term and $r$ is the common ratio.

**Example:** Find the 6th term of the geometric sequence $2, 6, 18, 54, \ldots$

- $a_1 = 2$, $r = \frac{6}{2} = 3$
- $a_6 = 2 \cdot 3^{6-1} = 2 \cdot 243 = 486$

---

## Finding the Common Ratio

For any geometric sequence, the common ratio is found by dividing any term by its preceding term:
$$r = \frac{a_2}{a_1} = \frac{a_3}{a_2} = \cdots = \frac{a_n}{a_{n-1}}$$

**Example:** Find the common ratio of $5, 15, 45, 135, \ldots$
$$r = \frac{15}{5} = 3$$

---

## Harmonic Sequence

A **harmonic sequence** is a sequence whose reciprocals form an arithmetic sequence.

If $a_1, a_2, a_3, \ldots$ is an arithmetic sequence with common difference $d$, then:
$$\frac{1}{a_1},\ \frac{1}{a_2},\ \frac{1}{a_3},\ \ldots$$
is a harmonic sequence.

### General Term of a Harmonic Sequence

The $n$-th term of a harmonic sequence is:
$$H_n = \frac{1}{a_1 + (n-1)d}$$
where $a_1$ is the first term of the corresponding arithmetic sequence and $d$ is the common difference.

**Example:** Find the 5th term of the harmonic sequence $1,\ \frac{1}{3},\ \frac{1}{5},\ \frac{1}{7},\ \ldots$

- Corresponding A.P.: $1, 3, 5, 7, \ldots$ with $a_1 = 1$, $d = 2$
- $H_5 = \frac{1}{1 + (5-1)(2)} = \frac{1}{1 + 8} = \frac{1}{9}$

---

## Harmonic Mean

The **harmonic mean** $H$ between two numbers $a$ and $b$ is:
$$H = \frac{2ab}{a + b}$$

This is the middle term of a harmonic sequence with $a$ and $b$ as the first and third terms.

**Example:** Find the harmonic mean between $3$ and $6$.
$$H = \frac{2(3)(6)}{3 + 6} = \frac{36}{9} = 4$$

---

## Harmonic Series

The **harmonic series** is the sum of terms of a harmonic sequence:
$$\sum_{n=1}^{N} \frac{1}{a_1 + (n-1)d}$$

Unlike geometric series, the harmonic series does **not** have a simple closed-form sum formula. Problems involving harmonic series are typically solved by converting to the corresponding arithmetic sequence.

**Example:** Find the sum of the first 4 terms of the harmonic sequence $\frac{1}{2},\ \frac{1}{5},\ \frac{1}{8},\ \frac{1}{11},\ \ldots$

$$S_4 = \frac{1}{2} + \frac{1}{5} + \frac{1}{8} + \frac{1}{11}$$
$$= \frac{220 + 88 + 55 + 40}{440} = \frac{403}{440}$$

---

## Relationship Between A.M., G.M., and H.M.

For two positive numbers $a$ and $b$:
- **Arithmetic Mean:** $A = \frac{a+b}{2}$
- **Geometric Mean:** $G = \sqrt{ab}$
- **Harmonic Mean:** $H = \frac{2ab}{a+b}$

Important inequality:
$$A \geq G \geq H$$

Also: $G^2 = A \cdot H$, i.e., the geometric mean is the geometric mean of the arithmetic and harmonic means.

**Example:** For $a = 4$ and $b = 9$:
- $A = \frac{4+9}{2} = 6.5$
- $G = \sqrt{36} = 6$
- $H = \frac{2(4)(9)}{13} = \frac{72}{13} \approx 5.54$
- Check: $G^2 = 36 = A \cdot H = 6.5 \times \frac{72}{13} = 36$ ✓

---

<!-- note kx78x5t0r1k7mfnn6f05ny6fhh85pc6b | topic ms76x8wxydfj09rf8gab11t67985p125 | status published -->
# 4.5 Finite and Infinite Series

A **geometric series** is the sum of the terms of a geometric sequence. This section covers the sum of a finite geometric series, the conditions for an infinite geometric series to converge, and real-world applications.

---

## 4.5.1 Sum of a Finite Geometric Series

For a geometric sequence with first term $a_1$, common ratio $r$, and $n$ terms, the sum is:

$$S_n = \frac{a_1(1 - r^n)}{1 - r}, \quad r \neq 1$$

An equivalent form (useful when $r > 1$) is:

$$S_n = \frac{a_1(r^n - 1)}{r - 1}, \quad r \neq 1$$

When $r = 1$, all terms are equal to $a_1$, so $S_n = n \cdot a_1$.

### Useful Variant

If the **last term** $a_n$ is known, the sum can be written as:

$$S_n = \frac{a_1 - r\,a_n}{1 - r}$$

This avoids computing $r^n$ when $a_n$ is already given.

### Example 1
Find the sum of the first 6 terms of the geometric series $2 + 6 + 18 + \dots$

**Solution:** $a_1 = 2$, $r = 3$, $n = 6$

$$S_6 = \frac{2(3^6 - 1)}{3 - 1} = \frac{2(729 - 1)}{2} = 728$$

---

## 4.5.2 Infinite Geometric Series

An **infinite geometric series** is $a_1 + a_1 r + a_1 r^2 + \dots$

### Convergence Condition

The series converges to a finite sum **if and only if** $|r| < 1$.

If $|r| \geq 1$, the terms do not approach zero and the series **diverges** (no finite sum).

### Formula for Infinite Sum

$$S_\infty = \frac{a_1}{1 - r}, \quad |r| < 1$$

### Example 2
Find $S_\infty$ for the series $12 + 4 + \frac{4}{3} + \dots$

**Solution:** $a_1 = 12$, $r = \frac{1}{3}$, $|r| < 1$ ✓

$$S_\infty = \frac{12}{1 - \frac{1}{3}} = \frac{12}{\frac{2}{3}} = 18$$

---

## 4.5.3 Repeating Decimals as Infinite Geometric Series

Every repeating decimal can be expressed as an infinite geometric series and converted to a fraction.

### Example 3
Convert $0.\overline{15} = 0.151515\dots$ to a fraction.

**Solution:**
$$0.151515\dots = 0.15 + 0.0015 + 0.000015 + \dots$$

Here $a_1 = 0.15$ and $r = 0.01$, so $|r| < 1$ ✓

$$S_\infty = \frac{0.15}{1 - 0.01} = \frac{0.15}{0.99} = \frac{15}{99} = \frac{5}{33}$$

### Example 4
Convert $0.\overline{4} = 0.444\dots$ to a fraction.

$$0.444\dots = 0.4 + 0.04 + 0.004 + \dots, \quad a_1 = 0.4,\; r = 0.1$$

$$S_\infty = \frac{0.4}{1 - 0.1} = \frac{0.4}{0.9} = \frac{4}{9}$$

---

## 4.5.4 Real-World Applications

### Bouncing Ball Problem

A ball is dropped from height $H$ and rebounds to a fraction $r$ of its previous height each time ($0 < r < 1$).

- **Initial drop:** $H$ (downward only)
- **Each subsequent bounce:** the ball travels the rebound height **twice** (up then down)

$$\text{Total distance} = H + 2(rH + r^2H + r^3H + \dots) = H + \frac{2rH}{1-r} = H\cdot\frac{1+r}{1-r}$$

> **Common mistake:** Using $\frac{H}{1-r}$ ignores the fact that each rebound (except the first drop) is traveled twice.

### Example 5
A ball is dropped from $10$ m and rebounds to $60\%$ of its previous height. Find the total distance.

**Solution:** $H = 10$, $r = 0.6$

$$\text{Total distance} = 10 \cdot \frac{1 + 0.6}{1 - 0.6} = 10 \cdot \frac{1.6}{0.4} = 40 \text{ m}$$

### Rising Balloon / Investment Growth

When a quantity increases by a fixed fraction each period, the total accumulation over infinite periods is modeled by $S_\infty = \frac{a_1}{1-r}$, provided $|r| < 1$.

---

## Summary of Key Formulas

| Series | Formula | Condition |
|--------|---------|----------|
| Finite geometric sum | $S_n = \dfrac{a_1(1-r^n)}{1-r}$ | $r \neq 1$ |
| Finite sum (last term known) | $S_n = \dfrac{a_1 - r\,a_n}{1-r}$ | $r \neq 1$ |
| Infinite geometric sum | $S_\infty = \dfrac{a_1}{1-r}$ | $\vert r\vert  < 1$ |
| Bouncing ball total distance | $H\cdot\dfrac{1+r}{1-r}$ | $0 < r < 1$ |

---

---

<!-- note kx78w5c989cckq0r58ffx8kq4985q77z | topic ms70v1ebj3eapv0hvwea2t9gjn85ppk2 | status published -->
# 4.6 Harmonic Progression

# 4.6 Harmonic Progression

## Definition

A **Harmonic Progression (HP)** is a sequence of numbers whose **reciprocals form an Arithmetic Progression (AP)**.

If $a_1, a_2, a_3, \ldots, a_n$ is a harmonic progression, then $\dfrac{1}{a_1}, \dfrac{1}{a_2}, \dfrac{1}{a_3}, \ldots, \dfrac{1}{a_n}$ is an arithmetic progression.

**Example:** $1, \dfrac{1}{2}, \dfrac{1}{3}, \dfrac{1}{4}, \ldots$ is an HP because $1, 2, 3, 4, \ldots$ is an AP.

---

## General Term (nth Term) of an HP

Since the reciprocals of an HP form an AP, let the corresponding AP have first term $a$ and common difference $d$.

The $n$th term of the AP is:
$$T_n^{\text{AP}} = a + (n-1)d$$

Therefore, the $n$th term of the HP is:
$$T_n = \frac{1}{a + (n-1)d}$$

**Example:** Find the 8th term of the HP $1, \dfrac{1}{3}, \dfrac{1}{5}, \ldots$

The reciprocals form the AP: $1, 3, 5, \ldots$ with $a = 1$, $d = 2$.

$$T_8^{\text{AP}} = 1 + (8-1)(2) = 1 + 14 = 15$$

$$T_8^{\text{HP}} = \frac{1}{15}$$

---

## Harmonic Mean

The **Harmonic Mean (HM)** of two numbers $a$ and $b$ is:
$$H = \frac{2ab}{a + b}$$

This is derived from the condition that $a, H, b$ are in HP, which means $\dfrac{1}{a}, \dfrac{1}{H}, \dfrac{1}{b}$ are in AP:
$$\frac{1}{H} - \frac{1}{a} = \frac{1}{b} - \frac{1}{H} \implies \frac{2}{H} = \frac{1}{a} + \frac{1}{b} = \frac{a+b}{ab}$$
$$\therefore H = \frac{2ab}{a+b}$$

**Example:** Find the harmonic mean between $3$ and $6$.
$$H = \frac{2(3)(6)}{3 + 6} = \frac{36}{9} = 4$$

---

## Inserting $n$ Harmonic Means Between Two Numbers

To insert $n$ harmonic means between $a$ and $b$:

1. Take reciprocals: insert $n$ arithmetic means between $\dfrac{1}{a}$ and $\dfrac{1}{b}$.
2. The common difference of the resulting AP is:
$$d = \frac{\frac{1}{b} - \frac{1}{a}}{n + 1} = \frac{a - b}{ab(n+1)}$$
3. The $k$th harmonic mean ($k = 1, 2, \ldots, n$) is:
$$H_k = \frac{1}{\frac{1}{a} + k \cdot d}$$

**Example:** Insert 2 harmonic means between $\dfrac{1}{2}$ and $\dfrac{1}{8}$.

Reciprocals: insert 2 arithmetic means between $2$ and $8$.
$$d = \frac{8 - 2}{2 + 1} = \frac{6}{3} = 2$$
AP: $2, 4, 6, 8$ → HP: $\dfrac{1}{2}, \dfrac{1}{4}, \dfrac{1}{6}, \dfrac{1}{8}$

The two harmonic means are $\dfrac{1}{4}$ and $\dfrac{1}{6}$.

---

## Relationship Between AM, GM, and HM

For two positive numbers $a$ and $b$:
- **Arithmetic Mean:** $A = \dfrac{a+b}{2}$
- **Geometric Mean:** $G = \sqrt{ab}$
- **Harmonic Mean:** $H = \dfrac{2ab}{a+b}$

**Key relationship:**
$$A \geq G \geq H \quad \text{(for positive } a, b\text{)}$$

Also: $G^2 = A \cdot H$, i.e., $G$ is the geometric mean of $A$ and $H$.

**Proof:** $A \cdot H = \dfrac{a+b}{2} \cdot \dfrac{2ab}{a+b} = ab = G^2$ ✓

---

## Key Points to Remember

| Property | Formula |
|---|---|
| $n$th term of HP | $T_n = \dfrac{1}{a+(n-1)d}$ |
| Harmonic Mean of $a, b$ | $H = \dfrac{2ab}{a+b}$ |
| Relation AM, GM, HM | $G^2 = A \cdot H$ |
| Condition for HP | Reciprocals form an AP |

---

<!-- note kx7em9tv6c119x1g29vfb4h9k585pgpe | topic ms7dcbshhg663g3vgxyxw3zg5185p4n8 | status published -->
# 4.7 Sigma Notation and Summation

# 4.7 Sigma Notation and Summation

## Sigma Notation

Sigma notation (summation notation) provides a compact way to write the sum of a sequence of terms. The Greek capital letter $\Sigma$ (sigma) is used:

$$\sum_{k=1}^{n} a_k = a_1 + a_2 + a_3 + \cdots + a_n$$

Here:
- $k$ is the **index of summation** (dummy variable)
- $1$ is the **lower limit**
- $n$ is the **upper limit**
- $a_k$ is the **general term**

### Examples of Sigma Notation

| Expanded Form | Sigma Form |
|---|---|
| $1 + 2 + 3 + \cdots + n$ | $\displaystyle\sum_{k=1}^{n} k$ |
| $1^2 + 2^2 + 3^2 + \cdots + n^2$ | $\displaystyle\sum_{k=1}^{n} k^2$ |
| $a + ar + ar^2 + \cdots + ar^{n-1}$ | $\displaystyle\sum_{k=0}^{n-1} ar^k$ |

---

## Arithmetic-Geometric Sequence (AGS)

An **arithmetic-geometric sequence** is formed by multiplying corresponding terms of an arithmetic sequence and a geometric sequence.

If $\{a_k\}$ is an arithmetic sequence with first term $a$ and common difference $d$, and $\{r^{k-1}\}$ is a geometric sequence with common ratio $r$, then the arithmetic-geometric sequence is:

$$a,\; (a+d)r,\; (a+2d)r^2,\; (a+3d)r^3,\; \ldots$$

### General Term

The $n$-th term (general term) of an arithmetic-geometric sequence is:

$$T_n = [a + (n-1)d]\, r^{n-1}$$

where:
- $a$ = first term of the arithmetic part
- $d$ = common difference
- $r$ = common ratio of the geometric part

---

## Sum to $n$ Terms

Let $S_n = \displaystyle\sum_{k=1}^{n} [a + (k-1)d]\, r^{k-1}$.

Using the **multiply-and-subtract method**:

$$S_n = a + (a+d)r + (a+2d)r^2 + \cdots + [a+(n-1)d]r^{n-1}$$

Multiply both sides by $r$:

$$rS_n = ar + (a+d)r^2 + (a+2d)r^3 + \cdots + [a+(n-1)d]r^{n}$$

Subtracting:

$$(1-r)S_n = a + d\,r + d\,r^2 + \cdots + d\,r^{n-1} - [a+(n-1)d]\,r^n$$

$$(1-r)S_n = a + d\cdot\frac{r(1-r^{n-1})}{1-r} - [a+(n-1)d]\,r^n$$

$$\boxed{S_n = \frac{a}{1-r} + \frac{dr(1-r^{n-1})}{(1-r)^2} - \frac{[a+(n-1)d]\,r^n}{1-r}}, \quad r \neq 1$$

---

## Sum to Infinity

When $|r| < 1$, as $n \to \infty$, the terms $r^n \to 0$ and $r^{n-1} \to 0$, so:

$$S_\infty = \frac{a}{1-r} + \frac{dr}{(1-r)^2}, \quad |r| < 1$$

> **Note:** If $|r| \geq 1$, the series diverges and has no finite sum.

---

## Worked Example

**Find the sum to infinity of the arithmetic-geometric series:**
$$1 + 2\cdot\tfrac{1}{2} + 3\cdot\left(\tfrac{1}{2}\right)^2 + 4\cdot\left(\tfrac{1}{2}\right)^3 + \cdots$$

Here $a = 1$, $d = 1$, $r = \dfrac{1}{2}$.

Since $|r| = \dfrac{1}{2} < 1$:

$$S_\infty = \frac{1}{1 - \frac{1}{2}} + \frac{1 \cdot \frac{1}{2}}{\left(1 - \frac{1}{2}\right)^2} = \frac{1}{\frac{1}{2}} + \frac{\frac{1}{2}}{\frac{1}{4}} = 2 + 2 = 4$$

---

## Standard Summation Formulas (Sigma)

$$\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$$

$$\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$$

$$\sum_{k=1}^{n} k^3 = \left[\frac{n(n+1)}{2}\right]^2$$

$$\sum_{k=1}^{n} c = cn \quad (c \text{ is a constant})$$

---

<!-- note kx7e5nre60qrrsh8bv8nq7zsjx85q4bd | topic ms7bzvq1a7gxwzb9mt6f9sgb1x85pjay | status published -->
# 4.8 Arithmetic Progression

# 4.8 Arithmetic Progression

## Arithmetic Sequence

A sequence $a_1, a_2, a_3, \ldots$ is called an **arithmetic sequence** (or arithmetic progression, AP) if the difference between any two consecutive terms is constant.

This constant difference is called the **common difference** $d$:
$$d = a_{n+1} - a_n \quad \text{for all } n \geq 1$$

### General Term (nth Term)

The general term of an arithmetic sequence is:
$$a_n = a_1 + (n-1)d$$

where:
- $a_1$ = first term
- $d$ = common difference
- $n$ = term number

**Example:** Find the 10th term of the AP: $3, 7, 11, 15, \ldots$

Here $a_1 = 3$, $d = 4$.
$$a_{10} = 3 + (10-1)(4) = 3 + 36 = 39$$

## Sum to n Terms of an Arithmetic Series

The sum of the first $n$ terms of an arithmetic series is:
$$S_n = \frac{n}{2}\bigl[2a_1 + (n-1)d\bigr]$$

Alternatively, if the last term $a_n = l$ is known:
$$S_n = \frac{n}{2}(a_1 + l)$$

**Example:** Find the sum of the first 20 terms of $2 + 5 + 8 + 11 + \cdots$

Here $a_1 = 2$, $d = 3$, $n = 20$.
$$S_{20} = \frac{20}{2}\bigl[2(2) + (20-1)(3)\bigr] = 10\bigl[4 + 57\bigr] = 10 \times 61 = 610$$

## Sigma Notation

Sigma notation $\displaystyle\sum$ is used to write series compactly.

$$\sum_{k=1}^{n} a_k = a_1 + a_2 + a_3 + \cdots + a_n$$

For an arithmetic series with first term $a_1$ and common difference $d$:
$$\sum_{k=1}^{n} \bigl[a_1 + (k-1)d\bigr] = \frac{n}{2}\bigl[2a_1 + (n-1)d\bigr]$$

**Example:** Evaluate $\displaystyle\sum_{k=1}^{5}(3k - 1)$

$$= 2 + 5 + 8 + 11 + 14 = 40$$

Using the formula: $a_1 = 2$, $d = 3$, $n = 5$:
$$S_5 = \frac{5}{2}[2(2) + 4(3)] = \frac{5}{2}[4 + 12] = \frac{5}{2}(16) = 40 \checkmark$$

## Standard Summation Formulas

These are essential formulas for evaluating series using sigma notation.

### Sum of First n Natural Numbers
$$\sum_{k=1}^{n} k = 1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}$$

**Example:** $\displaystyle\sum_{k=1}^{10} k = \frac{10 \times 11}{2} = 55$

### Sum of Squares of First n Natural Numbers
$$\sum_{k=1}^{n} k^2 = 1^2 + 2^2 + 3^2 + \cdots + n^2 = \frac{n(n+1)(2n+1)}{6}$$

**Example:** $\displaystyle\sum_{k=1}^{5} k^2 = \frac{5 \times 6 \times 11}{6} = 55$

### Sum of Cubes of First n Natural Numbers
$$\sum_{k=1}^{n} k^3 = 1^3 + 2^3 + 3^3 + \cdots + n^3 = \left[\frac{n(n+1)}{2}\right]^2$$

**Example:** $\displaystyle\sum_{k=1}^{4} k^3 = \left[\frac{4 \times 5}{2}\right]^2 = 10^2 = 100$

> **Note:** Observe that $\displaystyle\sum_{k=1}^{n} k^3 = \left(\sum_{k=1}^{n} k\right)^2$, a beautiful identity!

## Useful Properties of Sigma Notation

$$\sum_{k=1}^{n} c = nc \quad (c \text{ is a constant})$$

$$\sum_{k=1}^{n} c\,a_k = c\sum_{k=1}^{n} a_k$$

$$\sum_{k=1}^{n} (a_k \pm b_k) = \sum_{k=1}^{n} a_k \pm \sum_{k=1}^{n} b_k$$

**Example:** Evaluate $\displaystyle\sum_{k=1}^{n}(2k^2 + 3k + 1)$

$$= 2\sum_{k=1}^{n}k^2 + 3\sum_{k=1}^{n}k + \sum_{k=1}^{n}1$$

$$= 2 \cdot \frac{n(n+1)(2n+1)}{6} + 3 \cdot \frac{n(n+1)}{2} + n$$

$$= \frac{n(n+1)(2n+1)}{3} + \frac{3n(n+1)}{2} + n$$