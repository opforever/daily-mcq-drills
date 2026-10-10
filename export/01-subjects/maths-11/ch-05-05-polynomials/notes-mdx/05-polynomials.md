<!-- note kx74ggvn3vy01f3fcg1cqvvczx85pt07 | topic ms75ddkjpdn28bfnzm1b4e3mxd85qj70 | status published -->
# 5.1 Remainder and Factor Theorem

# 5.1 Remainder and Factor Theorem

## Polynomial Division

When a polynomial $P(x)$ of degree $n$ is divided by a divisor $D(x)$ of degree less than or equal to $n$, we obtain:

$$P(x) = D(x) \cdot q(x) + r(x)$$

where $q(x)$ is the **quotient** and $r(x)$ is the **remainder**, with $\deg(r) < \deg(D)$.

### Division by a Linear Polynomial

When dividing by a linear polynomial $(x - a)$, the remainder $r$ is a **constant** (degree 0):

$$P(x) = (x - a)\,q(x) + r$$

**Example:** Divide $P(x) = 2x^3 - 3x^2 + x - 5$ by $(x - 2)$.

Using synthetic division with $a = 2$:

| 2 | 2 | −3 | 1 | −5 |
|---|---|----|----|
|   |   | 4  | 2  | 6  |
|   | 2 | 1  | 3  | **1** |

So $q(x) = 2x^2 + x + 3$ and $r = 1$.

Verification: $P(2) = 2(8) - 3(4) + 2 - 5 = 16 - 12 + 2 - 5 = 1$ ✓

### Division by a Quadratic Polynomial

When dividing by a quadratic $D(x) = x^2 + bx + c$, the remainder is at most linear: $r(x) = Ax + B$.

**Example:** Divide $P(x) = x^4 - 2x^3 + 3x - 1$ by $x^2 - x + 1$ using long division.

$$x^4 - 2x^3 + 3x - 1 = (x^2 - x + 1)(x^2 - x - 1) + (3x - 2)$$

Quotient: $x^2 - x - 1$, Remainder: $3x - 2$.

---

## Remainder Theorem

> **Remainder Theorem:** If a polynomial $P(x)$ is divided by $(x - a)$, the remainder is $P(a)$.

**Proof:** From the division algorithm:
$$P(x) = (x - a)\,q(x) + r$$
Substituting $x = a$:
$$P(a) = (a - a)\,q(a) + r = 0 + r = r$$
Therefore $r = P(a)$. $\blacksquare$

**Key Point:** For divisor $(x + a) = (x - (-a))$, substitute $x = -a$.

### Worked Example

Find the remainder when $P(x) = 3x^3 - 4x^2 + 2x - 1$ is divided by $(x + 2)$.

**Solution:** Here $a = -2$.
$$P(-2) = 3(-8) - 4(4) + 2(-2) - 1 = -24 - 16 - 4 - 1 = -45$$

Remainder $= -45$.

---

## Factor Theorem

> **Factor Theorem:** $(x - a)$ is a factor of $P(x)$ **if and only if** $P(a) = 0$.

The Factor Theorem is a special case of the Remainder Theorem: if the remainder $P(a) = 0$, then $(x - a)$ divides $P(x)$ exactly.

**Converse:** If $(x - a)$ is a factor of $P(x)$, then $P(a) = 0$.

### Factorizing a Cubic Polynomial

**Steps:**
1. Find a value $a$ such that $P(a) = 0$ (try $\pm 1, \pm 2, \pm 3, \ldots$, factors of the constant term).
2. Divide $P(x)$ by $(x - a)$ to get a quadratic quotient $q(x)$.
3. Factorize $q(x)$ by inspection or the quadratic formula.

**Example:** Factorize $P(x) = x^3 - 6x^2 + 11x - 6$.

**Step 1:** Test $x = 1$: $P(1) = 1 - 6 + 11 - 6 = 0$ ✓ So $(x - 1)$ is a factor.

**Step 2:** Divide by $(x - 1)$:
$$x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6)$$

**Step 3:** Factorize $x^2 - 5x + 6 = (x - 2)(x - 3)$.

$$\therefore P(x) = (x-1)(x-2)(x-3)$$

Zeros: $x = 1, 2, 3$.

---

## Real-World Applications

### 1. Geometry — Volume and Dimensions

If the volume of a rectangular box is given by a polynomial $V(x)$ and one dimension (height) is a linear factor $H(x) = (x - a)$, then the floor area is:

$$\text{Area} = Q(x) = \frac{V(x)}{H(x)}$$

This requires $H(x)$ to be a factor of $V(x)$, verified using the Factor Theorem: $V(a) = 0$.

**Example:** $V(x) = x^3 - 6x^2 + 11x - 6$, height $= (x - 1)$.

Since $V(1) = 0$, divide: $\text{Area} = x^2 - 5x + 6 = (x-2)(x-3)$.

### 2. Polynomial Regression

In data science, polynomial regression fits a polynomial $P(x)$ to data. The Remainder Theorem helps evaluate $P(x)$ at specific data points efficiently.

### 3. Signal Processing

Polynomials model signals. Factorization using the Factor Theorem identifies frequencies (zeros) where the signal vanishes.

### 4. Coding Theory

Error-detecting codes use polynomial division. The remainder when a message polynomial is divided by a generator polynomial is appended as a checksum.

---

## Summary Table

| Theorem | Condition | Conclusion |
|---------|-----------|------------|
| **Remainder Theorem** | Divide $P(x)$ by $(x-a)$ | Remainder $= P(a)$ |
| **Factor Theorem** | $P(a) = 0$ | $(x-a)$ is a factor of $P(x)$ |
| **Factor Theorem (converse)** | $(x-a)$ is a factor | $P(a) = 0$ |

---

<!-- note kx78h259f7w8aryf8byrrtr8t185q1wr | topic ms71r71zd4eh0qvn7c8t4486jh85p693 | status published -->
# 5.2 Factorization and Remainder Theorem

# 5.2 Factorization and Remainder Theorem

## Polynomial Division

A **polynomial** $P(x)$ of degree $n$ can be divided by another polynomial $D(x)$ of degree $m \leq n$ to give a **quotient** $Q(x)$ and a **remainder** $R(x)$:

$$P(x) = D(x) \cdot Q(x) + R(x)$$

where the degree of $R(x)$ is less than the degree of $D(x)$.

### Long Division

For dividing by a **quadratic** or higher-degree polynomial, use polynomial long division — the same algorithm as numerical long division.

**Example:** Divide $2x^3 - 3x^2 + x - 5$ by $x^2 - 1$.

$$2x^3 - 3x^2 + x - 5 = (x^2 - 1)(2x - 3) + (3x - 8)$$

Quotient: $2x - 3$, Remainder: $3x - 8$.

### Synthetic Division

For dividing by a **linear** factor $(x - k)$, synthetic division is faster:

1. Write the coefficients of $P(x)$ in a row (use $0$ for missing terms).
2. Write $k$ to the left.
3. Bring down the leading coefficient.
4. Multiply by $k$, write under the next coefficient, add.
5. Repeat until done. The last number is the **remainder**; the rest are coefficients of the **quotient**.

**Example:** Divide $2x^3 - 15x^2 + 16x + 12$ by $(x - 2)$:

$$\begin{array}{r|rrrr} 2 & 2 & -15 & 16 & 12 \\ & & 4 & -22 & -12 \\ \hline & 2 & -11 & -6 & 0 \end{array}$$

Quotient: $2x^2 - 11x - 6$, Remainder: $0$.

---

## Remainder Theorem

> **Remainder Theorem:** When a polynomial $P(x)$ is divided by $(x - a)$, the remainder is $P(a)$.

This means you can find the remainder **without performing division** — just evaluate $P(a)$.

**Example:** Find the remainder when $P(x) = x^3 - 4x^2 + 3x + 2$ is divided by $(x - 3)$.

$$P(3) = 27 - 36 + 9 + 2 = 2$$

Remainder $= 2$.

---

## Factor Theorem

> **Factor Theorem:** $(x - a)$ is a factor of $P(x)$ **if and only if** $P(a) = 0$.

This is a special case of the Remainder Theorem: if the remainder $P(a) = 0$, then $(x - a)$ divides $P(x)$ exactly.

For a zero at $x = \frac{p}{q}$, the corresponding integer-coefficient factor is $(qx - p)$.

---

## Factorizing a Cubic Polynomial

To fully factorize a cubic $P(x) = ax^3 + bx^2 + cx + d$:

### Step 1 — Hit and Trial

Test factors of $d$ (and $\frac{p}{q}$ where $q$ divides $a$) as potential zeros. By the **Rational Root Theorem**, any rational zero $\frac{p}{q}$ must satisfy:
- $p$ divides the constant term $d$
- $q$ divides the leading coefficient $a$

### Step 2 — Synthetic Division

Once a zero $x = a$ is found, divide $P(x)$ by $(x - a)$ using synthetic division to obtain a quadratic $Q(x)$.

### Step 3 — Factor the Quadratic

Factor $Q(x)$ by mid-term breaking or the quadratic formula:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**Example:** Factorize $P(x) = x^3 - 6x^2 + 11x - 6$.

- Test $x = 1$: $P(1) = 1 - 6 + 11 - 6 = 0$ ✓
- Divide by $(x - 1)$: quotient is $x^2 - 5x + 6$
- Factor: $x^2 - 5x + 6 = (x - 2)(x - 3)$
- **Result:** $P(x) = (x-1)(x-2)(x-3)$

---

## Real-World Applications

The Remainder and Factor Theorems have important applications:

| Application | How it's used |
|---|---|
| **Polynomial Regression** | Evaluating and simplifying polynomial models for data fitting |
| **Signal Processing** | Factorizing characteristic polynomials of filters and systems |
| **Coding Theory** | Constructing and decoding cyclic error-correcting codes using polynomial factors |
| **Computer Algebra** | Efficient evaluation of polynomials (Horner's method is based on synthetic division) |

---

## Summary

| Theorem | Statement | Use |
|---|---|---|
| **Remainder Theorem** | Remainder of $P(x) \div (x-a)$ is $P(a)$ | Find remainder without division |
| **Factor Theorem** | $(x-a)$ is a factor $\iff$ $P(a)=0$ | Test and find factors |

---

<!-- note kx75ah7xav91jyr279ap5avb3985p3b2 | topic ms79evh6r6papj9fcy2y8rdkb185q5ke | status published -->
# 5.3 Factorization and Polynomial Division

# 5.3 Factorization and Polynomial Division

## Polynomial Division

A polynomial $P(x)$ of degree $n$ can be divided by a divisor $D(x)$ of degree less than or equal to $n$ to produce a **quotient** $Q(x)$ and a **remainder** $R(x)$:

$$P(x) = D(x) \cdot Q(x) + R(x)$$

where the degree of $R(x)$ is strictly less than the degree of $D(x)$.

### Long Division of Polynomials

To divide $P(x)$ by a linear factor $(x - a)$ or a quadratic factor:
1. Arrange both polynomials in descending powers of $x$, inserting $0$ for missing terms.
2. Divide the leading term of the dividend by the leading term of the divisor.
3. Multiply the result by the entire divisor and subtract.
4. Repeat until the degree of the remainder is less than the degree of the divisor.

**Example:** Divide $P(x) = 2x^3 - 3x^2 + x - 5$ by $(x - 2)$.

$$2x^3 - 3x^2 + x - 5 = (x-2)(2x^2 + x + 3) + 1$$

So the quotient is $2x^2 + x + 3$ and the remainder is $1$.

### Synthetic Division

Synthetic division is a shorthand method for dividing a polynomial by a **linear** factor $(x - a)$:
- Write only the coefficients of $P(x)$.
- Use $a$ (the root of the divisor) as the synthetic divisor.
- Bring down, multiply, add — repeat.

**Example:** Divide $x^3 - 6x^2 + 11x - 6$ by $(x - 1)$ using synthetic division:

| 1 | 1 | -6 | 11 | -6 |
|---|---|----|----|----|
|   |   |  1 | -5 |  6 |
|   | 1 | -5 |  6 |  0 |

Quotient: $x^2 - 5x + 6$, Remainder: $0$.

---

## Remainder Theorem

> **Remainder Theorem:** If a polynomial $P(x)$ is divided by $(x - a)$, the remainder is $P(a)$.

$$P(x) = (x - a) \cdot Q(x) + P(a)$$

**Example:** Find the remainder when $P(x) = x^3 - 4x + 6$ is divided by $(x - 2)$.

$$P(2) = (2)^3 - 4(2) + 6 = 8 - 8 + 6 = 6$$

The remainder is $6$.

**Extension:** When dividing by $(ax - b)$, the remainder is $P\!\left(\dfrac{b}{a}\right)$.

---

## Factor Theorem

> **Factor Theorem:** $(x - a)$ is a factor of $P(x)$ if and only if $P(a) = 0$.

This is a special case of the Remainder Theorem where the remainder equals zero.

### Factorizing a Cubic Polynomial

To factorize $P(x) = ax^3 + bx^2 + cx + d$:
1. **Find a root** by testing factors of $\dfrac{d}{a}$ (Rational Root Theorem).
2. **Divide** $P(x)$ by $(x - a)$ to get a quadratic quotient $Q(x)$.
3. **Factor** $Q(x)$ by inspection, completing the square, or the quadratic formula.

**Example:** Factorize $P(x) = x^3 - 6x^2 + 11x - 6$.

- Test $x = 1$: $P(1) = 1 - 6 + 11 - 6 = 0$ ✓ → $(x-1)$ is a factor.
- Divide: $P(x) = (x-1)(x^2 - 5x + 6)$.
- Factor the quadratic: $x^2 - 5x + 6 = (x-2)(x-3)$.
- **Result:** $P(x) = (x-1)(x-2)(x-3)$.

---

## Real-World Applications

### Finding Dimensions from Volume

If the volume of a rectangular solid is given as a polynomial $V(x)$ and one dimension is a known factor $(x - a)$, divide $V(x)$ by $(x - a)$ to find the product of the remaining two dimensions, then factor the resulting quadratic.

**Example:** $V(y) = y^3 - 2y^2 - y + 2$ with one side $(y - 2)$.
- $P(2) = 8 - 8 - 2 + 2 = 0$ → $(y-2)$ is a factor.
- Divide: $V(y) = (y-2)(y^2 - 1) = (y-2)(y-1)(y+1)$.
- Dimensions: $(y-2)$, $(y-1)$, $(y+1)$.

### Finding Area and Length

If the area of a rectangle is $A(x)$ and the width is $W(x)$, then:
$$L(x) = \frac{A(x)}{W(x)}$$
found by polynomial division.

### Other Applications
- **Polynomial regression:** Remainder and Factor Theorems help evaluate and simplify regression polynomials.
- **Signal processing:** Polynomial factorization is used in filter design.
- **Coding theory:** Cyclic codes use polynomial division over finite fields.

---