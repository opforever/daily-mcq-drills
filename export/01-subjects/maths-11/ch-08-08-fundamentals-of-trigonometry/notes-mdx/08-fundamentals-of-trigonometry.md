<!-- note kx7cmg7vzrcd2y315syd2q0xmn85qxkm | topic ms73xcsj9spe9pwfeqmkp3dv5n85pp3j | status published -->
# 8.1 Allied Angles and Sum/Difference Formulas

# 8.1 Allied Angles and Sum/Difference Formulas

## Angle Measures and Allied Angles

Two angles are called **allied angles** if their sum or difference is a multiple of $90^\circ$ (or $\frac{\pi}{2}$). The trigonometric ratios of allied angles can be expressed in terms of the ratios of the original angle.

| Allied Angle | sin | cos | tan |
|---|---|---|---|
| $-\theta$ | $-\sin\theta$ | $\cos\theta$ | $-\tan\theta$ |
| $90^\circ - \theta$ | $\cos\theta$ | $\sin\theta$ | $\cot\theta$ |
| $90^\circ + \theta$ | $\cos\theta$ | $-\sin\theta$ | $-\cot\theta$ |
| $180^\circ - \theta$ | $\sin\theta$ | $-\cos\theta$ | $-\tan\theta$ |
| $180^\circ + \theta$ | $-\sin\theta$ | $-\cos\theta$ | $\tan\theta$ |
| $270^\circ - \theta$ | $-\cos\theta$ | $-\sin\theta$ | $\cot\theta$ |
| $270^\circ + \theta$ | $-\cos\theta$ | $\sin\theta$ | $-\cot\theta$ |
| $360^\circ - \theta$ | $-\sin\theta$ | $\cos\theta$ | $-\tan\theta$ |

> **Memory Aid:** For multiples of $90^\circ$, the function name changes (sin ↔ cos, tan ↔ cot). For multiples of $180^\circ$, the function name stays the same. The sign is determined by the CAST rule for the quadrant.

---

## Fundamental Law of Trigonometry (Sum/Difference Formulas)

These are the core identities derived from the fundamental law:

### Sine Formulas
$$\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$$
$$\sin(\alpha - \beta) = \sin\alpha\cos\beta - \cos\alpha\sin\beta$$

### Cosine Formulas
$$\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta$$
$$\cos(\alpha - \beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta$$

> **Key observation:** In the cosine formulas, the sign is **opposite** to the operator between the angles.

### Tangent Formulas
$$\tan(\alpha + \beta) = \frac{\tan\alpha + \tan\beta}{1 - \tan\alpha\tan\beta}$$
$$\tan(\alpha - \beta) = \frac{\tan\alpha - \tan\beta}{1 + \tan\alpha\tan\beta}$$

---

## Finding Missing Ratios Using Quadrant Information

When applying sum/difference formulas, you often need to find a missing ratio (e.g., $\cos\alpha$ when $\sin\alpha$ is given).

**Method:**
1. Use the Pythagorean identity: $\sin^2\alpha + \cos^2\alpha = 1$
2. Solve: $\cos\alpha = \pm\sqrt{1 - \sin^2\alpha}$
3. Determine the correct sign from the **quadrant** of $\alpha$:
   - Quadrant I: all ratios positive
   - Quadrant II: sin positive, cos and tan negative
   - Quadrant III: tan positive, sin and cos negative
   - Quadrant IV: cos positive, sin and tan negative

**Example:** If $\sin\alpha = \frac{3}{5}$ and $\alpha$ is in Quadrant II, find $\cos\alpha$.
$$\cos\alpha = -\sqrt{1 - \left(\frac{3}{5}\right)^2} = -\sqrt{1 - \frac{9}{25}} = -\sqrt{\frac{16}{25}} = -\frac{4}{5}$$

---

## Finding Exact Values of Trigonometric Functions

Sum/difference formulas allow us to find exact values for non-standard angles by expressing them as sums or differences of standard angles ($30^\circ, 45^\circ, 60^\circ$, etc.).

**Example:** Find the exact value of $\cos 15^\circ$.
$$\cos 15^\circ = \cos(45^\circ - 30^\circ)$$
$$= \cos 45^\circ \cos 30^\circ + \sin 45^\circ \sin 30^\circ$$
$$= \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2} \cdot \frac{1}{2}$$
$$= \frac{\sqrt{6}}{4} + \frac{\sqrt{2}}{4} = \frac{\sqrt{6} + \sqrt{2}}{4}$$

---

## Simplifying Trigonometric Expressions

Recognising the pattern of sum/difference formulas allows complex expressions to be collapsed into a single function.

**Example:** Simplify $\frac{\cos\gamma + \sin\gamma}{\cos\gamma - \sin\gamma}$.

Divide numerator and denominator by $\cos\gamma$:
$$= \frac{1 + \tan\gamma}{1 - \tan\gamma} = \frac{\tan\frac{\pi}{4} + \tan\gamma}{1 - \tan\frac{\pi}{4}\tan\gamma} = \tan\!\left(\frac{\pi}{4} + \gamma\right)$$

---

<!-- note kx7ejhbz4evtfmt8x3ywd1ygmn85q26k | topic ms7ejy21ea6y98nsabp9fndsh585ptsr | status published -->
# 8.2 Double, Triple and Half Angle Identities

# 8.2 Double, Triple and Half Angle Identities

## Double Angle Identities

These identities express trigonometric functions of $2\theta$ in terms of functions of $\theta$. They are derived from the sum formulas by setting $\alpha = \beta = \theta$.

### Sine Double Angle
$$\sin 2\theta = 2\sin\theta\cos\theta$$

Alternate form in terms of $\tan\theta$:
$$\sin 2\theta = \frac{2\tan\theta}{1 + \tan^2\theta}$$

### Cosine Double Angle
The cosine double angle identity has **three equivalent forms**:
$$\cos 2\theta = \cos^2\theta - \sin^2\theta$$
$$\cos 2\theta = 2\cos^2\theta - 1$$
$$\cos 2\theta = 1 - 2\sin^2\theta$$

Alternate form in terms of $\tan\theta$:
$$\cos 2\theta = \frac{1 - \tan^2\theta}{1 + \tan^2\theta}$$

### Tangent Double Angle
$$\tan 2\theta = \frac{2\tan\theta}{1 - \tan^2\theta}$$

---

## Triple Angle Identities

These are derived by writing $3\theta = 2\theta + \theta$ and applying sum and double angle formulas.

$$\sin 3\theta = 3\sin\theta - 4\sin^3\theta$$
$$\cos 3\theta = 4\cos^3\theta - 3\cos\theta$$
$$\tan 3\theta = \frac{3\tan\theta - \tan^3\theta}{1 - 3\tan^2\theta}$$

---

## Half Angle Identities

Rearranging the cosine double angle formulas gives the **power-reduction** and **half-angle** identities.

### Power-Reduction Identities
$$\sin^2\theta = \frac{1 - \cos 2\theta}{2}$$
$$\cos^2\theta = \frac{1 + \cos 2\theta}{2}$$

### Half-Angle Formulas
Replace $\theta$ with $\frac{\theta}{2}$:
$$\sin\frac{\theta}{2} = \pm\sqrt{\frac{1 - \cos\theta}{2}}$$
$$\cos\frac{\theta}{2} = \pm\sqrt{\frac{1 + \cos\theta}{2}}$$
$$\tan\frac{\theta}{2} = \pm\sqrt{\frac{1 - \cos\theta}{1 + \cos\theta}} = \frac{\sin\theta}{1 + \cos\theta} = \frac{1 - \cos\theta}{\sin\theta}$$

> **Sign Rule:** The $\pm$ sign is determined by the **quadrant in which $\frac{\theta}{2}$ lies**, not the quadrant of $\theta$.

---

## Power Reduction Strategy

To reduce higher powers of trig functions (e.g., $\sin^4\alpha$, $\cos^4\alpha$) to first-power cosines:

1. Apply $\sin^2\theta = \frac{1 - \cos 2\theta}{2}$ and $\cos^2\theta = \frac{1 + \cos 2\theta}{2}$.
2. Square the result if needed, then apply the identities again.

**Example:** Reduce $\sin^4\alpha$
$$\sin^4\alpha = (\sin^2\alpha)^2 = \left(\frac{1 - \cos 2\alpha}{2}\right)^2 = \frac{1 - 2\cos 2\alpha + \cos^2 2\alpha}{4}$$
$$= \frac{1 - 2\cos 2\alpha + \frac{1 + \cos 4\alpha}{2}}{4} = \frac{3 - 4\cos 2\alpha + \cos 4\alpha}{8}$$

---

## Key Identity Verification Technique

To verify $\cos^4 x - \sin^4 x = \cos 2x$:
$$\cos^4 x - \sin^4 x = (\cos^2 x - \sin^2 x)(\cos^2 x + \sin^2 x) = (\cos^2 x - \sin^2 x)(1) = \cos 2x \checkmark$$

---

<!-- note kx795gdeh0g446gm54des6ane585pfva | topic ms798r5mn0ez3t57afyey06n9x85qvgj | status published -->
# 8.3 Product-to-Sum and Sum-to-Product Identities

# 8.3 Product-to-Sum and Sum-to-Product Identities

## Product-to-Sum Identities

These identities allow us to express a **product** of trigonometric functions as a **sum or difference**. They are derived from the addition and subtraction formulas.

$$2\sin A\cos B = \sin(A+B) + \sin(A-B)$$

$$2\cos A\sin B = \sin(A+B) - \sin(A-B)$$

$$2\cos A\cos B = \cos(A-B) + \cos(A+B)$$

$$2\sin A\sin B = \cos(A-B) - \cos(A+B)$$

### Derivation

Using the addition formulas:
$$\sin(A+B) = \sin A\cos B + \cos A\sin B$$
$$\sin(A-B) = \sin A\cos B - \cos A\sin B$$

Adding: $\sin(A+B) + \sin(A-B) = 2\sin A\cos B$

Subtracting: $\sin(A+B) - \sin(A-B) = 2\cos A\sin B$

Similarly from cosine formulas:
$$\cos(A-B) = \cos A\cos B + \sin A\sin B$$
$$\cos(A+B) = \cos A\cos B - \sin A\sin B$$

Adding: $\cos(A-B) + \cos(A+B) = 2\cos A\cos B$

Subtracting: $\cos(A-B) - \cos(A+B) = 2\sin A\sin B$

---

## Sum-to-Product Identities

These identities convert a **sum or difference** of trigonometric functions into a **product**. Let $A = \frac{C+D}{2}$ and $B = \frac{C-D}{2}$:

$$\sin C + \sin D = 2\sin\left(\frac{C+D}{2}\right)\cos\left(\frac{C-D}{2}\right)$$

$$\sin C - \sin D = 2\cos\left(\frac{C+D}{2}\right)\sin\left(\frac{C-D}{2}\right)$$

$$\cos C + \cos D = 2\cos\left(\frac{C+D}{2}\right)\cos\left(\frac{C-D}{2}\right)$$

$$\cos C - \cos D = -2\sin\left(\frac{C+D}{2}\right)\sin\left(\frac{C-D}{2}\right)$$

---

## Worked Examples

### Example 1: Product to Sum
Express $2\cos 75°\sin 15°$ as a sum or difference.

**Solution:** Using $2\cos A\sin B = \sin(A+B) - \sin(A-B)$:
$$2\cos 75°\sin 15° = \sin(75°+15°) - \sin(75°-15°) = \sin 90° - \sin 60° = 1 - \frac{\sqrt{3}}{2}$$

### Example 2: Sum to Product
Simplify $\dfrac{\sin 3\theta + \sin\theta}{\cos 3\theta + \cos\theta}$.

**Solution:**
$$\text{Numerator: } 2\sin\left(\frac{3\theta+\theta}{2}\right)\cos\left(\frac{3\theta-\theta}{2}\right) = 2\sin 2\theta\cos\theta$$
$$\text{Denominator: } 2\cos\left(\frac{3\theta+\theta}{2}\right)\cos\left(\frac{3\theta-\theta}{2}\right) = 2\cos 2\theta\cos\theta$$
$$\therefore \frac{2\sin 2\theta\cos\theta}{2\cos 2\theta\cos\theta} = \frac{\sin 2\theta}{\cos 2\theta} = \tan 2\theta$$

### Example 3: Multiple Product Identity
Prove that $\cos 20°\cos 40°\cos 80° = \dfrac{1}{8}$.

**Solution:** Multiply and divide by $2\sin 20°$:
$$\cos 20°\cos 40°\cos 80° = \frac{2\sin 20°\cos 20°\cos 40°\cos 80°}{2\sin 20°}$$
$$= \frac{\sin 40°\cos 40°\cos 80°}{2\sin 20°} = \frac{\sin 80°\cos 80°}{4\sin 20°} = \frac{\sin 160°}{8\sin 20°}$$
$$= \frac{\sin(180°-20°)}{8\sin 20°} = \frac{\sin 20°}{8\sin 20°} = \frac{1}{8}$$

---

## Key Identities Summary

| Product Form | Sum/Difference Form |
|---|---|
| $2\sin A\cos B$ | $\sin(A+B) + \sin(A-B)$ |
| $2\cos A\sin B$ | $\sin(A+B) - \sin(A-B)$ |
| $2\cos A\cos B$ | $\cos(A-B) + \cos(A+B)$ |
| $2\sin A\sin B$ | $\cos(A-B) - \cos(A+B)$ |