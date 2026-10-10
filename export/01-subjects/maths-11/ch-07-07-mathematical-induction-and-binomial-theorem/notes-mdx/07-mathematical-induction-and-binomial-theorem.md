<!-- note kx7emay91m2kfwaq62kh0t7ta985q8mc | topic ms7agypm85hh418pe6ec8ssmr185q4hs | status published -->
# 7.1 Principle of Mathematical Induction

# 7.1 Principle of Mathematical Induction

## What is Mathematical Induction?

The **Principle of Mathematical Induction (PMI)** is a proof technique used to establish that a statement $P(n)$ is true for all natural numbers $n$ (or for all integers $n \geq n_0$).

It is conceptually similar to a chain of falling dominoes: if the first domino falls, and each domino knocks down the next one, then all dominoes will eventually fall.

---

## Structure of an Induction Proof

A complete proof by induction has three parts:

### 1. Basis Step (Base Case)
Prove that $P(n_0)$ is true, where $n_0$ is the smallest value in the domain (usually $n_0 = 1$, but sometimes $n_0 = 2, 3, 4, \dots$ depending on the statement).

> **Example:** If proving $n! > 2^n$, the statement only holds for $n \geq 4$, so the basis step is checked at $n = 4$.

### 2. Inductive Hypothesis
Assume that $P(k)$ is true for some arbitrary natural number $k \geq n_0$. This assumption is called the **Inductive Hypothesis**.

### 3. Inductive Step
Using the inductive hypothesis, prove that $P(k+1)$ is also true. That is, show:
$$P(k) \implies P(k+1)$$

Once both steps are complete, by the Principle of Mathematical Induction, $P(n)$ is true for all $n \geq n_0$.

---

## Types of Statements Proved by Induction

### A. Summation Formulae

To prove $\displaystyle\sum_{i=1}^n a_i = S_n$:
- **Basis:** Verify $S_1$ (or $S_{n_0}$) is true.
- **Inductive Step:** Assume $\displaystyle\sum_{i=1}^k a_i = S_k$. Add $a_{k+1}$ to both sides and show the result equals $S_{k+1}$.

**Example:** Prove $1 + 2 + 3 + \cdots + n = \dfrac{n(n+1)}{2}$

**Basis ($n=1$):** LHS $= 1$, RHS $= \dfrac{1 \cdot 2}{2} = 1$. ✓

**Inductive Hypothesis:** Assume $1 + 2 + \cdots + k = \dfrac{k(k+1)}{2}$.

**Inductive Step:** Show it holds for $n = k+1$:
$$1 + 2 + \cdots + k + (k+1) = \frac{k(k+1)}{2} + (k+1) = \frac{k(k+1) + 2(k+1)}{2} = \frac{(k+1)(k+2)}{2}$$
This is exactly $S_{k+1}$. ✓

---

### B. Product Series

To prove $\displaystyle\prod_{i=2}^n f(i) = P_n$:
- **Inductive Step:** Multiply both sides of the inductive hypothesis by the $(k+1)^{\text{th}}$ factor $f(k+1)$, then simplify to obtain $P_{k+1}$.

---

### C. Divisibility Statements

To prove that an expression $f(n)$ is divisible by some integer $d$:
- **Basis:** Show $d \mid f(n_0)$.
- **Inductive Step:** Assume $d \mid f(k)$. Write $f(k+1)$ in terms of $f(k)$ and show $d \mid f(k+1)$.

**Example:** Prove $5^n - 1$ is divisible by $4$ for all $n \in \mathbb{N}$.

**Basis ($n=1$):** $5^1 - 1 = 4$, which is divisible by $4$. ✓

**Inductive Hypothesis:** Assume $4 \mid (5^k - 1)$, i.e., $5^k - 1 = 4m$ for some integer $m$.

**Inductive Step:**
$$5^{k+1} - 1 = 5 \cdot 5^k - 1 = 5(5^k - 1) + 4 = 5(4m) + 4 = 4(5m + 1)$$
Since $5m+1$ is an integer, $4 \mid (5^{k+1}-1)$. ✓

---

### D. Inequalities

To prove $f(n) > g(n)$ or $f(n) \geq g(n)$:
- Use the inductive hypothesis to bound or estimate $f(k+1)$ in terms of $f(k)$.

---

## Key Algebraic Technique

In the inductive step for summation proofs, the key move is:
$$S_{k+1} = S_k + a_{k+1}$$
Substitute the inductive hypothesis for $S_k$, then factor or simplify to match the formula with $n$ replaced by $k+1$.

---

## Summary Table

| Step | What to Do |
|------|------------|
| Basis Step | Verify $P(n_0)$ directly |
| Inductive Hypothesis | Assume $P(k)$ is true |
| Inductive Step | Prove $P(k) \implies P(k+1)$ |
| Conclusion | $P(n)$ is true for all $n \geq n_0$ |

---

<!-- note kx79kj3msx0xczg93tr3acqbbs85pp5k | topic ms734qf11n5wbk6vq60wganbq185prna | status published -->
# 7.2 Binomial Theorem and Pascal's Triangle

# 7.2 Binomial Theorem and Pascal's Triangle

## The Binomial Theorem

The **Binomial Theorem** gives a formula for expanding any power of a binomial $(a+b)^n$ where $n$ is a positive integer (natural number):

$$
(a+b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{n-r} b^r
$$

$$
= \binom{n}{0}a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \cdots + \binom{n}{n}b^n
$$

The theorem is **restricted to natural numbers** $n \in \mathbb{N}$ in this form (SLO M-11-A-35).

---

## Pascal's Triangle and Binomial Coefficients

The **binomial coefficients** $\binom{n}{r} = \frac{n!}{r!(n-r)!}$ can be read directly from **Pascal's Triangle**:

```
n=0:          1
n=1:        1   1
n=2:      1   2   1
n=3:    1   3   3   1
n=4:  1   4   6   4   1
n=5: 1  5  10  10   5  1
```

Each entry is the sum of the two entries directly above it. The $(n+1)^{th}$ row gives the coefficients of $(a+b)^n$.

---

## General Term (The $r^{th}$ Term)

The **general term** (also called the $(r+1)^{th}$ term) is:

$$
T_{r+1} = \binom{n}{r} a^{n-r} b^r, \quad r = 0, 1, 2, \ldots, n
$$

> **Note:** $r$ is a zero-based index. The first term has $r=0$, the second has $r=1$, etc.

### Expansion of $(a - b)^n$

Replace $b$ with $-b$:

$$
T_{r+1} = \binom{n}{r} a^{n-r}(-b)^r = (-1)^r \binom{n}{r} a^{n-r} b^r
$$

Terms with **odd** $r$ are **negative**; terms with **even** $r$ are **positive**.

---

## Middle Terms

The expansion of $(a+b)^n$ has $n+1$ terms.

| $n$ | Number of middle terms | Position(s) |
|-----|----------------------|-------------|
| Even | 1 | $T_{\frac{n}{2}+1}$ |
| Odd | 2 | $T_{\frac{n+1}{2}}$ and $T_{\frac{n+3}{2}}$ |

---

## Term from the End

The **$r^{th}$ term from the end** of $(a+b)^n$ is the same as the **$r^{th}$ term from the beginning** of $(b+a)^n$, which equals the $(n-r+2)^{th}$ term from the start of $(a+b)^n$.

---

## Term Independent of $x$

To find the **constant term** (term independent of $x$):
1. Write the general term $T_{r+1}$.
2. Collect all powers of $x$ into $x^{f(r)}$.
3. Solve $f(r) = 0$ for $r$.
4. Substitute back to find the term.

**Example:** Find the term independent of $x$ in $\left(x^2 + \dfrac{1}{x}\right)^9$.

$$
T_{r+1} = \binom{9}{r}(x^2)^{9-r}\left(\frac{1}{x}\right)^r = \binom{9}{r} x^{18-2r-r} = \binom{9}{r} x^{18-3r}
$$

Set $18 - 3r = 0 \Rightarrow r = 6$.

$$
T_7 = \binom{9}{6} = 84
$$

---

## Coefficient of a Specific Power

When the expansion is multiplied by another polynomial, find the coefficient of $x^k$ by:
1. Expanding each factor.
2. Identifying all pairs of terms whose powers of $x$ sum to $k$.
3. Summing the products of their coefficients.

---

## Expanding Trinomials

To expand $(a+b+c)^n$, group two terms:

$$
[(a+b)+c]^n = \sum_{r=0}^{n} \binom{n}{r}(a+b)^{n-r} c^r
$$

Then expand each $(a+b)^{n-r}$ using the Binomial Theorem again.

---

## Important Binomial Coefficient Identities

### Sum of All Coefficients

Substitute $a=1,\, b=1$ into $(a+b)^n$:

$$
\sum_{r=0}^{n} \binom{n}{r} = 2^n
$$

### Sum of Even- and Odd-Indexed Coefficients

Substitute $a=1,\, b=-1$:

$$
\binom{n}{0} - \binom{n}{1} + \binom{n}{2} - \cdots = 0 \implies S_e = S_o
$$

Since $S_e + S_o = 2^n$:

$$
S_e = S_o = 2^{n-1}
$$

---

## Approximate Values Using the Binomial Theorem

For small $x$, higher powers become negligible. Write the number as $(1 \pm x)^n$ and keep the first few terms.

**Example:** Approximate $(1.02)^{10}$.

$$
(1+0.02)^{10} \approx 1 + 10(0.02) + \binom{10}{2}(0.02)^2 + \binom{10}{3}(0.02)^3
$$
$$
= 1 + 0.2 + 45(0.0004) + 120(0.000008)
= 1 + 0.2 + 0.018 + 0.00096 \approx 1.219
$$

---

## Remainder Using the Binomial Theorem

To find the remainder when $N^m$ is divided by $d$, write $N = (d \pm k)$ so that $N^m = (d \pm k)^m$. Expand; all terms with $d$ as a factor vanish modulo $d$, leaving only the constant term.

**Example:** Find the remainder when $7^{100}$ is divided by 6.

$$
7^{100} = (6+1)^{100} = \sum_{r=0}^{100}\binom{100}{r}6^r
$$

All terms with $r \geq 1$ are divisible by 6. The $r=0$ term is $1$.

$$
\therefore\; 7^{100} \equiv 1 \pmod{6}
$$

---

## Last Digit and Divisibility

To find the **last digit** of $N^m$, find $N^m \pmod{10}$. Express $N^m$ as $(10k \pm c)^m$ and expand.

**Example:** Find the last digit of $3^{100}$.

$$
3^{100} = (3^2)^{50} = 9^{50} = (10-1)^{50} = \sum_{r=0}^{50}\binom{50}{r}10^r(-1)^{50-r}
$$

All terms with $r \geq 1$ are divisible by 10. The $r=0$ term is $(-1)^{50} = 1$.

$$
\therefore\; \text{Last digit of } 3^{100} = \mathbf{1}
$$

---

## Real-World Applications

The Binomial Theorem and Pascal's Triangle appear in many real-world contexts (SLO M-11-A-41):

- **Probability** — The binomial distribution uses $\binom{n}{r}p^r(1-p)^{n-r}$ to model outcomes of repeated trials.
- **Economic Forecasting** — Compound growth $(1+r)^n$ is approximated using the first few terms of the Binomial expansion.
- **Pascal's Triangle Patterns** — Rows encode combinatorial identities, Fibonacci numbers appear as diagonal sums, and powers of 11 are read directly from rows.
- **Domino Effects and Rankings** — Counting arrangements and cascading outcomes use binomial coefficients.
- **Variable Substitution** — Complex algebraic expressions are simplified by substituting grouped terms as a single binomial.
- **Puzzles** — Problems involving large powers, last digits, and divisibility are solved elegantly using the Binomial Theorem.

---

<!-- note kx7e8gv83adzq10e2t3nw89tth85q4yq | topic ms770sfvgv9e8a4hjj4pwh69an85pmfz | status published -->
# 7.3 Binomial Series and Convergence

# 7.3 Binomial Series and Convergence

## Overview

Exercise 7.3 extends the Binomial Theorem beyond positive integer exponents. When the exponent $n$ is a **fraction or a negative integer**, the expansion becomes an **infinite series** called the **Binomial Series**, and convergence must be checked.

---

## The Binomial Series

For any real number $n$ (including fractions and negative integers):

$$
(1+x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots
$$

**Convergence condition:** The series is valid (converges) only when $|x| < 1$.

### General Term

$$
T_{r+1} = \frac{n(n-1)(n-2)\cdots(n-r+1)}{r!}\, x^r
$$

---

## Convergence Condition

For the binomial series to converge, the variable term inside the bracket must satisfy $|x| < 1$.

---

## Expanding $(a + x)^n$

When the expression is not in the form $(1 + x)^n$, factor out the constant first:

$$
(a+x)^n = a^n\left(1 + \frac{x}{a}\right)^n, \quad \text{valid when } \left|\frac{x}{a}\right| < 1
$$

**Example:** Expand $(2+3x)^{-1}$ for $|x| < \frac{2}{3}$:

$$
(2+3x)^{-1} = 2^{-1}\left(1+\frac{3x}{2}\right)^{-1} = \frac{1}{2}\left[1 - \frac{3x}{2} + \frac{9x^2}{4} - \cdots\right]
$$

---

## Approximations Using the Binomial Series

### First-Order Approximation (small $x$)

When $x$ is so small that $x^2$ and higher powers are negligible:

$$
(1+x)^n \approx 1 + nx
$$

### Second-Order Approximation

When $x^3$ and higher powers are negligible:

$$
(1+x)^n \approx 1 + nx + \frac{n(n-1)}{2!}x^2
$$

### Approximation When $x$ is Large

When $x$ is very large, factor out the highest power of $x$:

$$
(x+a)^n = x^n\left(1+\frac{a}{x}\right)^n, \quad \text{valid when } \left|\frac{a}{x}\right| < 1
$$

---

## Sign Pattern in Expansions with Negative Exponents

For negative exponents, successive terms alternate in sign:

$$
(1+x)^{-3} = 1 - 3x + 6x^2 - 10x^3 + \cdots
$$

---

## Finding Remainders Using the Binomial Theorem

To find the remainder when a large power is divided by a number, rewrite the base as $(1 + k)^n$ or $(m + 1)^n$ where $m$ is the divisor.

**Example:** Find the remainder when $7^{100}$ is divided by $6$.

$$
7^{100} = (6+1)^{100} = \binom{100}{0}6^0 + \binom{100}{1}6^1 + \binom{100}{2}6^2 + \cdots
$$

All terms with $6^1$ or higher are divisible by $6$. The only term not divisible by $6$ is $\binom{100}{0} \cdot 1 = 1$.

$$
\therefore \quad 7^{100} \equiv 1 \pmod{6}
$$

---

## Finding the Last Digit of a Large Power

To find the units digit of $N^k$, find $N^k \pmod{10}$. Use the Binomial Theorem by writing $N = (10 + d)$ where $d$ is the units digit of $N$.

**Example:** Find the last digit of $3^{100}$.

The units digits of powers of $3$ cycle: $3, 9, 7, 1, 3, 9, 7, 1, \ldots$ (period 4).

$100 = 4 \times 25$, so $3^{100} = (3^4)^{25} = 81^{25}$.

The last digit of $81^{25}$ is the last digit of $1^{25} = 1$.

$$
\therefore \text{ Last digit of } 3^{100} = 1
$$

---

## Summary Table

| Situation | Action |
|---|---|
| Expression is $(a+x)^n$ | Factor out $a^n$ first |
| $x$ is very small | Use $(1+x)^n \approx 1 + nx$ |
| $x$ is very large | Factor out highest power of $x$ |
| Finding remainder $N^k \div m$ | Write $N = (m \pm 1)^k$ and expand |
| Finding last digit | Find $N^k \pmod{10}$ using cycle of units digits |

---

<!-- note kx7aajm5xa4psf7e6d2rcf9sbd85ps5g | topic ms76z0d9c6gpr0g43cgbxj5rz585p7p6 | status published -->
# 7.4 Applications of Binomial Theorem: Cyclicity, Remainders, and Divisibility

# 7.4 Applications of Binomial Theorem: Cyclicity, Remainders, and Divisibility

This section covers powerful applications of the Binomial Theorem to solve problems involving:
- The **last digit** (unit digit) of large powers
- **Remainders** when large powers are divided by a number
- **Divisibility** proofs
- **Comparing** large numbers without full computation

---

## 1. Cyclicity of Unit Digits

The unit digit of $a^n$ follows a **repeating cycle** as $n$ increases. This cycle is called the **cyclicity** of $a$.

### Cycles for Common Bases

| Base | Cycle of Unit Digits | Cycle Length |
|------|----------------------|--------------|
| 2 | 2, 4, 8, 6 | 4 |
| 3 | 3, 9, 7, 1 | 4 |
| 4 | 4, 6 | 2 |
| 7 | 7, 9, 3, 1 | 4 |
| 8 | 8, 4, 2, 6 | 4 |
| 9 | 9, 1 | 2 |
| 0, 1, 5, 6 | constant | 1 |

### Method
1. Identify the cycle length $c$ for the base.
2. Compute $r = n \mod c$.
3. If $r = 0$, the unit digit is the **last** in the cycle; otherwise it is the $r$-th element.

### Example
Find the unit digit of $7^{102}$.

Cycle of 7: $7, 9, 3, 1$ (length 4).
$$102 = 4 \times 25 + 2 \implies r = 2$$
Unit digit of $7^{102}$ = unit digit of $7^2 = 9$.

---

## 2. Finding Remainders Using the Binomial Theorem

### Key Principle
For $(a + b)^n$ divided by $a$:
$$
(a+b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{n-r} b^r
$$
Every term **except** the last term $b^n$ contains at least one factor of $a$. Therefore:
$$
(a+b)^n \equiv b^n \pmod{a}
$$

### Strategy: Rewrite the Base
To find the remainder of $x^n \div d$, rewrite $x$ as $(kd \pm 1)$ or $(kd \pm r)$ so the expansion simplifies.

### Example 1
Find the remainder when $7^{100}$ is divided by 6.

$$7^{100} = (6+1)^{100} = \sum_{r=0}^{100} \binom{100}{r} 6^{100-r} \cdot 1^r$$

All terms except the last contain a factor of 6, so:
$$7^{100} \equiv 1^{100} = 1 \pmod{6}$$

Remainder $= 1$.

### Example 2
Find the remainder when $5^{103}$ is divided by 13.

Note $5^2 = 25 = 2(13) - 1$, so:
$$5^{103} = 5 \cdot (5^2)^{51} = 5 \cdot (2 \cdot 13 - 1)^{51}$$

By the Binomial Theorem:
$$(2 \cdot 13 - 1)^{51} \equiv (-1)^{51} = -1 \pmod{13}$$

Therefore:
$$5^{103} \equiv 5 \times (-1) = -5 \equiv 8 \pmod{13}$$

Remainder $= 8$.

---

## 3. Finding Last Two Digits

To find the **last two digits** of $x^n$, we need $x^n \pmod{100}$.

### Strategy
Write $x = 10k \pm r$ and expand. Terms with $(10k)^2$ or higher are multiples of 100 and do not affect the last two digits. Only the last two terms of the expansion matter.

### Example
Find the last two digits of $3^{100}$.

$$3^{100} = (3^4)^{25} = 81^{25} = (80+1)^{25}$$

Expanding:
$$(80+1)^{25} = 1 + 25(80) + \binom{25}{2}(80)^2 + \dots$$

Since $(80)^2 = 6400$ is a multiple of 100, only the first two terms matter:
$$\equiv 1 + 2000 \equiv 2001 \equiv 01 \pmod{100}$$

Last two digits: **01**.

---

## 4. Divisibility Proofs

### Proving $a^n - b^n$ is Divisible by $(a-b)$

Substitute $a = (a-b) + b$:
$$a^n = ((a-b)+b)^n = \sum_{r=0}^{n} \binom{n}{r}(a-b)^{n-r} b^r$$

Every term except $b^n$ contains $(a-b)$ as a factor. Therefore:
$$a^n - b^n = (a-b) \cdot Q$$
for some integer $Q$, proving $(a-b) \mid (a^n - b^n)$.

### Example: Prove $9^{n+1} - 8n - 9$ is divisible by 64

Write $9^{n+1} = 9 \cdot 9^n = 9(1+8)^n$.

Expand $(1+8)^n$:
$$(1+8)^n = 1 + 8n + \binom{n}{2}8^2 + \binom{n}{3}8^3 + \dots$$

Multiply by 9:
$$9^{n+1} = 9 + 72n + 9\binom{n}{2}(64) + \dots$$

Now subtract $8n + 9$:
$$9^{n+1} - 8n - 9 = 72n - 8n + 9\binom{n}{2}(64) + \dots = 64n + 64 \cdot 9\binom{n}{2} + \dots$$

Every term contains 64 as a factor, so $64 \mid (9^{n+1} - 8n - 9)$. $\blacksquare$

---

## 5. Comparing Large Numbers Using the Binomial Theorem

The Binomial Theorem allows us to **compare** or **bound** large expressions without computing them exactly.

### Key Idea
For $x > 0$:
$$(1+x)^n = 1 + nx + \frac{n(n-1)}{2}x^2 + \dots > 1 + nx$$

If $1 + nx > K$, then $(1+x)^n > K$.

### Example
Show that $(1.1)^{10000} > 1000$.

$$(1.1)^{10000} = (1 + 0.1)^{10000}$$

The second term alone is:
$$\binom{10000}{1}(0.1)^1 = 10000 \times 0.1 = 1000$$

Since all terms are positive:
$$(1.1)^{10000} = 1 + 1000 + (\text{positive terms}) > 1001 > 1000 \checkmark$$

---

## Summary Table

| Application | Key Technique |
|-------------|---------------|
| Last digit of $a^n$ | Cyclicity: find $n \mod c$ |
| Remainder of $x^n \div d$ | Write $x = kd \pm r$, expand, last term gives remainder |
| Last two digits | Write $x = 10k \pm r$, terms with $(10k)^2$ vanish mod 100 |
| Divisibility | Substitute $a = (a-b)+b$ or $x = (kd+1)$, factor out |
| Comparing large numbers | Use $1 + nx$ as a lower bound for $(1+x)^n$ |