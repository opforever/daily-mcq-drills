<!-- note kx70xqk8hs816ypjjz9dx2skh585qdwy | topic ms75j8hrty7wwvm6xcnajba4sx85py60 | status published -->
# 1.1 Powers of $i$ and Complex Representation

## What is a Complex Number?

A **complex number** $z$ is any number of the form:

$$z = a + bi$$

where:
- $a, b \in \mathbb{R}$ (real numbers)
- $i = \sqrt{-1}$ is the **imaginary unit**

Alternatively, $z$ can be written in **ordered pair notation** as $z = (a, b)$.

### Real and Imaginary Parts

| Symbol | Name | Value |
|--------|------|-------|
| $\text{Re}(z)$ | Real part | $a$ |
| $\text{Im}(z)$ | Imaginary part | $b$ |

**Example:** For $z = -7 + 4i$: $\text{Re}(z) = -7$ and $\text{Im}(z) = 4$.

> **Note:** $b$ is the imaginary part, NOT $bi$. The imaginary part is always a real number.

---

## Powers of $i$

Since $i = \sqrt{-1}$, successive powers of $i$ cycle with **period 4**:

| Power | Value |
|-------|-------|
| $i^0$ | $1$ |
| $i^1$ | $i$ |
| $i^2$ | $-1$ |
| $i^3$ | $-i$ |
| $i^4$ | $1$ |
| $i^5$ | $i$ |
| $\vdots$ | $\vdots$ |

### Rule for Large Powers

To evaluate $i^n$ for any large positive integer $n$:

1. Divide $n$ by $4$ and find the **remainder** $r$.
2. Then $i^n = i^r$.

**Example:** $i^{23}$: $23 = 4 \times 5 + 3$, so $r = 3$ and $i^{23} = i^3 = -i$.

**Example:** $i^{4k+2} = (i^4)^k \cdot i^2 = 1^k \cdot (-1) = -1$.

---

## Equality of Complex Numbers

Two complex numbers $z_1 = a + bi$ and $z_2 = c + di$ are **equal** if and only if:

$$a = c \quad \text{AND} \quad b = d$$

That is, their real parts are equal **and** their imaginary parts are equal.

**Example:** If $(2x - 1) + (y + 3)i = 5 + 7i$, then:
- $2x - 1 = 5 \Rightarrow x = 3$
- $y + 3 = 7 \Rightarrow y = 4$

---

## Basic Operations on Complex Numbers

Let $z_1 = a + bi$ and $z_2 = c + di$.

### Addition and Subtraction
$$z_1 \pm z_2 = (a \pm c) + (b \pm d)i$$

### Multiplication
$$z_1 \cdot z_2 = (ac - bd) + (ad + bc)i$$

*Use $i^2 = -1$ when expanding.*

**Example:** $(3 + 2i)(1 - 4i) = 3 - 12i + 2i - 8i^2 = 3 - 10i + 8 = 11 - 10i$

### Division

To divide $\dfrac{a + bi}{c + di}$, multiply numerator and denominator by the **conjugate of the denominator** $(c - di)$:

$$\frac{a+bi}{c+di} = \frac{(a+bi)(c-di)}{(c+di)(c-di)} = \frac{(ac+bd) + (bc-ad)i}{c^2+d^2}$$

The denominator becomes real because $(c+di)(c-di) = c^2 + d^2$.

**Example:** $\dfrac{2+3i}{1-2i} = \dfrac{(2+3i)(1+2i)}{(1-2i)(1+2i)} = \dfrac{2+4i+3i+6i^2}{1+4} = \dfrac{2+7i-6}{5} = \dfrac{-4+7i}{5} = -\dfrac{4}{5} + \dfrac{7}{5}i$

---

## Complex Conjugate

The **complex conjugate** of $z = a + bi$ is defined as:

$$\bar{z} = a - bi$$

Only the sign of the imaginary part is changed.

**Key property:** $z \cdot \bar{z} = (a+bi)(a-bi) = a^2 + b^2$

**Examples:**
- $z = 3 + 5i \Rightarrow \bar{z} = 3 - 5i$
- $z = -x - iy \Rightarrow \bar{z} = -x + iy$

---

## Modulus (Absolute Value) of a Complex Number

The **modulus** (or absolute value) of $z = a + bi$ is defined as:

$$|z| = \sqrt{a^2 + b^2}$$

Geometrically, $|z|$ is the distance from the origin to the point $(a, b)$ in the complex plane.

**Example:** $z = 3 + 4i \Rightarrow |z| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$

**Note:** $|z|^2 = z \cdot \bar{z} = a^2 + b^2$

---

## Summary Table

| Concept | Definition |
|---------|------------|
| Complex number | $z = a + bi$, also $(a, b)$ |
| Real part | $\text{Re}(z) = a$ |
| Imaginary part | $\text{Im}(z) = b$ |
| Equality | $a+bi = c+di \Leftrightarrow a=c,\ b=d$ |
| Conjugate | $\bar{z} = a - bi$ |
| Modulus | $\vert z\vert  = \sqrt{a^2+b^2}$ |
| Powers of $i$ | Cycle: $1, i, -1, -i$ (period 4) |

---

<!-- note kx7c3ddrjgsfzt77rvg25j4dzs85pxa4 | topic ms72h1vpwzm5hweh16a2z117wd85p1rz | status published -->
# 1.2 Real and Imaginary Parts - Operations, Conjugate, Modulus

## Equality of Complex Numbers

Two complex numbers $z_1 = a + bi$ and $z_2 = c + di$ are **equal** if and only if:
$$a = c \quad \text{and} \quad b = d$$
That is, their real parts are equal **and** their imaginary parts are equal.

**Example:** If $z_1 = (x + 2) + (y - 1)i = 5 + 3i = z_2$, then $x + 2 = 5 \Rightarrow x = 3$ and $y - 1 = 3 \Rightarrow y = 4$.

---

## Basic Operations on Complex Numbers

Let $z_1 = a + bi$ and $z_2 = c + di$.

| Operation | Result |
|-----------|--------|
| Addition | $(a+c) + (b+d)i$ |
| Subtraction | $(a-c) + (b-d)i$ |
| Multiplication | $(ac - bd) + (ad + bc)i$ |
| Division | $\dfrac{z_1}{z_2} = \dfrac{(a+bi)(c-di)}{c^2+d^2}$ |

**Effect of multiplying by $i$:**
$$iz = i(a + bi) = ai + bi^2 = -b + ai$$
So $\operatorname{Re}(iz) = -\operatorname{Im}(z)$ and $\operatorname{Im}(iz) = \operatorname{Re}(z)$.

**Reciprocal of a complex number:**
$$\frac{1}{a+bi} = \frac{1}{a+bi} \cdot \frac{a-bi}{a-bi} = \frac{a-bi}{a^2+b^2}$$
So $\operatorname{Re}\!\left(\dfrac{1}{z}\right) = \dfrac{a}{a^2+b^2}$ and $\operatorname{Im}\!\left(\dfrac{1}{z}\right) = \dfrac{-b}{a^2+b^2}$.

---

## Complex Conjugate

The **complex conjugate** of $z = a + bi$ is defined as:
$$\bar{z} = a - bi$$

**Key properties:**
- $z + \bar{z} = 2a = 2\operatorname{Re}(z)$ (always real)
- $z - \bar{z} = 2bi = 2i\operatorname{Im}(z)$ (always imaginary)
- $z \cdot \bar{z} = a^2 + b^2 = |z|^2$ (always a non-negative real)
- $z$ is **purely real** $\iff z = \bar{z}$ (i.e., $b = 0$)
- $z$ is **purely imaginary** $\iff z = -\bar{z}$ (i.e., $a = 0$)

---

## Modulus (Absolute Value) of a Complex Number

The **modulus** of $z = a + bi$ is defined as:
$$|z| = \sqrt{a^2 + b^2}$$

This represents the distance of the point $(a, b)$ from the origin in the Argand plane.

**Key properties of modulus:**
- $|z|^2 = z\bar{z}$
- $|z_1 z_2| = |z_1| \cdot |z_2|$
- $\left|\dfrac{z_1}{z_2}\right| = \dfrac{|z_1|}{|z_2|}$, $z_2 \neq 0$
- **Triangle Inequality:** $|z_1 + z_2| \leq |z_1| + |z_2|$

**Example:** If $|z_1 z_2| = 10$ and $z_1 = 2 + i$, find $|z_2|$.
$$|z_1| = \sqrt{4+1} = \sqrt{5}, \quad |z_2| = \frac{10}{\sqrt{5}} = 2\sqrt{5}$$

---

## Simultaneous Linear Equations with Complex Coefficients

To solve a system of linear equations where coefficients are complex numbers, apply the **equality condition**: equate real and imaginary parts separately after simplification.

**Method:**
1. Write the system with complex unknowns (or separate into real/imaginary unknowns).
2. Use elimination or substitution to reduce to one unknown.
3. Multiply through by conjugates where needed to simplify.
4. Equate real and imaginary parts to extract the solution.

**Example:** Solve for $z$ and $w$:
$$z + iw = 2 + 3i$$
$$iz - w = 1 - i$$

From equation 1: $z = 2 + 3i - iw$. Substitute into equation 2:
$$i(2 + 3i - iw) - w = 1 - i$$
$$2i + 3i^2 - i^2w - w = 1 - i$$
$$2i - 3 + w - w = 1 - i$$

Solve step by step equating real and imaginary parts to find $z$ and $w$.

---

> **FBISE Tip:** In Exercise 1.2, most questions require you to (i) apply the equality condition, (ii) use conjugates to simplify division, or (iii) use modulus properties. Always rationalize denominators by multiplying by the conjugate.

---

<!-- note kx71mgf0gf12ewn2tbt5yshvqx85qp1n | topic ms7evxvfg9anrprmf5t6zn0yv585qexh | status published -->
# 1.3 Factorization and Completing the Square

This exercise covers three key skills for working with polynomials and equations over $\mathbb{C}$:
1. Factorizing polynomials into linear factors over $\mathbb{C}$
2. Solving quadratic equations by completing the square
3. Solving simultaneous linear equations with complex coefficients

---

## 1. Factorization into Linear Factors over $\mathbb{C}$

Every polynomial can be factorized into linear factors over $\mathbb{C}$ (Fundamental Theorem of Algebra).

### Sum of Squares

Using $i^2 = -1$, a sum of squares becomes a **difference of squares**:

$$z^2 + a^2 = z^2 - (ai)^2 = (z + ai)(z - ai)$$

**Example:** Factorize $3z^2 + 363$

$$3z^2 + 363 = 3(z^2 + 121) = 3(z^2 - (11i)^2) = 3(z + 11i)(z - 11i)$$

### Cubic Polynomials

To factorize a cubic $P(z) = z^3 + bz^2 + cz + d$:

1. Use the **Factor Theorem**: test divisors of the constant term $d$ to find $z = k$ such that $P(k) = 0$. Then $(z - k)$ is a factor.
2. Perform **synthetic division** to reduce to a quadratic.
3. Factorize the quadratic (using the quadratic formula if needed).

**Example:** Factorize $z^3 - 7z + 6$

- Test $z = 1$: $1 - 7 + 6 = 0$ ✓ → $(z - 1)$ is a factor
- Synthetic division gives: $z^3 - 7z + 6 = (z-1)(z^2 + z - 6)$
- Factorize quadratic: $z^2 + z - 6 = (z+3)(z-2)$
- **Result:** $(z-1)(z+3)(z-2)$

---

## 2. Solving Quadratic Equations by Completing the Square

For $pz^2 + qz + r = 0$ where $p, q, r \in \mathbb{R}$:

**Method:**
1. Divide through by $p$ (if $p \neq 1$)
2. Move the constant to the right side
3. Add $\left(\frac{q}{2p}\right)^2$ to both sides
4. Write the left side as a perfect square
5. Take square roots (both $\pm$), allowing complex values

**Example:** Solve $z^2 - 6z + 2 = 0$

$$z^2 - 6z = -2$$
$$z^2 - 6z + 9 = -2 + 9$$
$$(z - 3)^2 = 7$$
$$z - 3 = \pm\sqrt{7}$$
$$z = 3 \pm \sqrt{7}$$

**Example:** Solve $z^2 + 4z + 13 = 0$

$$z^2 + 4z = -13$$
$$(z+2)^2 = -13 + 4 = -9$$
$$z + 2 = \pm\sqrt{-9} = \pm 3i$$
$$z = -2 \pm 3i$$

> **Key insight:** When the discriminant $b^2 - 4ac < 0$, the roots are **complex conjugates** of each other.

---

## 3. Solving Simultaneous Linear Equations with Complex Coefficients

The standard methods (substitution, elimination) apply, but we must handle complex arithmetic carefully.

### Key Technique: Removing $i$ from Denominators

If a term has $i$ in the denominator, multiply numerator and denominator by $i$:

$$\frac{3}{i} = \frac{3 \cdot i}{i \cdot i} = \frac{3i}{-1} = -3i$$

More generally, to divide by a complex number $a + bi$, multiply by its conjugate $a - bi$:

$$\frac{1}{a+bi} = \frac{a-bi}{a^2+b^2}$$

### Example: Solve the system

$$z + iw = 2 \quad (1)$$
$$iz - w = 3 \quad (2)$$

**Step 1:** From equation (1): $z = 2 - iw$

**Step 2:** Substitute into (2):
$$i(2 - iw) - w = 3$$
$$2i - i^2 w - w = 3$$
$$2i + w - w = 3 \quad \text{(since } i^2 = -1\text{)}$$

Wait, let's redo carefully:
$$2i - i^2 w - w = 3 \Rightarrow 2i + w - w = 3$$

Actually: $-i^2 w - w = w - w = 0$... Let's use elimination instead.

**Elimination method:**

Multiply (1) by $i$: $iz + i^2 w = 2i \Rightarrow iz - w = 2i$

Subtract from (2): $(iz - w) - (iz - w) = 3 - 2i$...

Multiply equation (1) by $i$:
$$iz - w = 2i \quad (1')$$

Equation (2) is: $iz - w = 3$

Subtracting (1') from (2): $0 = 3 - 2i$, contradiction, so let's use the original correctly.

**Correct approach, substitution:**

From (2): $w = iz - 3$

Substitute into (1): $z + i(iz - 3) = 2$
$$z + i^2 z - 3i = 2$$
$$z - z - 3i = 2$$
$$-3i = 2$$

This system is inconsistent for these specific values. For a consistent example:

**Example:** Solve $(1-i)z + (1+i)w = 3$ and $(1+i)z + (1-i)w = 1+2i$

Add the two equations:
$$[(1-i)+(1+i)]z + [(1+i)+(1-i)]w = 4+2i$$
$$2z + 2w = 4+2i$$
$$z + w = 2+i \quad (*)$$

Subtract equation 2 from equation 1:
$$[(1-i)-(1+i)]z + [(1+i)-(1-i)]w = 2-2i$$
$$-2iz + 2iw = 2-2i$$
$$-z + w = \frac{2-2i}{2i} = \frac{(2-2i)(-i)}{2} = \frac{-2i+2i^2}{2} = \frac{-2-2i}{2} = -1-i$$
$$-z + w = -1-i \quad (**)$$

From (*) and (**): Adding: $2w = 1$, so $w = \frac{1}{2}$; then $z = 2+i - \frac{1}{2} = \frac{3}{2}+i$.

> **Strategy:** Use elimination to reduce to one variable, then back-substitute. Always verify by substituting back into both original equations.

---

<!-- note kx7c7ryycqeb46h0bgmzh4ygkn85qhqr | topic ms7brnsmv7n5tye6pfajxqcxv985pkr4 | status published -->
# 1.4 Complex Numbers in Different Forms

## Polar Coordinate System

The **polar coordinate system** represents a point $P$ in the plane using an ordered pair $(r, \theta)$, where:
- $r$ = radial distance from the **pole** (origin)
- $\theta$ = angle measured **counterclockwise** from the **polar axis** (positive x-axis)

**Conversion between Polar and Cartesian coordinates:**
$$x = r\cos\theta, \quad y = r\sin\theta$$
$$r = \sqrt{x^2 + y^2}, \quad \theta = \tan^{-1}\!\left(\frac{y}{x}\right) \text{ (adjusted for quadrant)}$$

---

## Polar Form of a Complex Number

A complex number $z = x + iy$ can be written in **polar form** as:
$$z = r(\cos\theta + i\sin\theta)$$

where:
- $r = |z| = \sqrt{x^2 + y^2}$ is the **modulus**
- $\theta = \arg(z)$ is the **argument**

Using **Euler's formula**: $e^{i\theta} = \cos\theta + i\sin\theta$, the polar form becomes:
$$z = re^{i\theta}$$

### Quadrant Adjustment for Argument

| Quadrant | Condition | $\theta$ |
|----------|-----------|----------|
| I | $x>0, y>0$ | $\tan^{-1}\!\left(\frac{y}{x}\right)$ |
| II | $x<0, y>0$ | $\pi - \tan^{-1}\!\left(\frac{\vert y\vert }{\vert x\vert }\right)$ |
| III | $x<0, y<0$ | $-\pi + \tan^{-1}\!\left(\frac{\vert y\vert }{\vert x\vert }\right)$ |
| IV | $x>0, y<0$ | $-\tan^{-1}\!\left(\frac{\vert y\vert }{x}\right)$ |

**Example:** Convert $z = -2 - 2i$ to polar form.
- $r = \sqrt{(-2)^2 + (-2)^2} = \sqrt{8} = 2\sqrt{2}$
- Reference angle: $\alpha = \tan^{-1}(1) = \frac{\pi}{4}$
- Since $z$ is in Quadrant III: $\theta = -\pi + \frac{\pi}{4} = -\frac{3\pi}{4}$
- Polar form: $z = 2\sqrt{2}\left(\cos\!\left(-\frac{3\pi}{4}\right) + i\sin\!\left(-\frac{3\pi}{4}\right)\right)$

---

## Operations with Complex Numbers in Polar Form

### Multiplication
If $z_1 = r_1 e^{i\theta_1}$ and $z_2 = r_2 e^{i\theta_2}$:
$$z_1 z_2 = r_1 r_2\, e^{i(\theta_1+\theta_2)}$$
$$|z_1 z_2| = |z_1||z_2|, \quad \arg(z_1 z_2) = \arg(z_1) + \arg(z_2)$$

### Division
$$\frac{z_1}{z_2} = \frac{r_1}{r_2}\, e^{i(\theta_1-\theta_2)}$$
$$\left|\frac{z_1}{z_2}\right| = \frac{|z_1|}{|z_2|}, \quad \arg\!\left(\frac{z_1}{z_2}\right) = \arg(z_1) - \arg(z_2)$$

### De Moivre's Theorem
$$z^n = r^n(\cos n\theta + i\sin n\theta) = r^n e^{in\theta}$$

### Modulus of a Product (Key Identity)
If $(x_1+iy_1)(x_2+iy_2)\cdots(x_n+iy_n) = a+ib$, then:
$$(x_1^2+y_1^2)(x_2^2+y_2^2)\cdots(x_n^2+y_n^2) = a^2+b^2$$

**Proof:** Take modulus of both sides and square: $|z_1||z_2|\cdots|z_n| = |a+ib|$, so $|z_1|^2|z_2|^2\cdots|z_n|^2 = |a+ib|^2$.

---

## Equations and Identities in Polar Form

### Using $a + b + c = 0$ to Prove Trigonometric Identities

If $\cos\alpha + \cos\beta + \cos\gamma = 0$ and $\sin\alpha + \sin\beta + \sin\gamma = 0$, then:

Let $a = e^{i\alpha}$, $b = e^{i\beta}$, $c = e^{i\gamma}$. The conditions imply $a + b + c = 0$.

Using the algebraic identity:
$$a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca)$$

Since $a+b+c = 0$:
$$a^3 + b^3 + c^3 = 3abc$$

Substituting back: $e^{i3\alpha} + e^{i3\beta} + e^{i3\gamma} = 3e^{i(\alpha+\beta+\gamma)}$

Taking real parts: $\cos 3\alpha + \cos 3\beta + \cos 3\gamma = 3\cos(\alpha+\beta+\gamma)$

---

## Real-World Application: Complex Impedance

In AC circuit analysis, **complex impedance** $Z$ relates voltage $E$ and current $I$:
$$Z = \frac{E}{I}$$

To simplify division of complex numbers, multiply by the conjugate of the denominator:
$$Z = \frac{E}{I} = \frac{E \cdot \bar{I}}{I \cdot \bar{I}} = \frac{E\bar{I}}{|I|^2}$$