<!-- note kx7fw6b17nbtaa35f6jcjqd44s85qrsa | topic ms7avp8r5098f68d076pp07a2985qpeb | status published -->
# 3.1 Exercise 3.1

# **Key Concepts**

This exercise focuses on the foundational techniques of **indefinite integration** (antidifferentiation).

## Antiderivatives and Notation

A function $F(x)$ is called an **antiderivative** of $f(x)$ on an interval if $F'(x) = f(x)$ for all $x$ in that interval.

The **indefinite integral** represents the entire family of antiderivatives:
$$\int f(x) \, dx = F(x) + C$$
where $C$ is the **constant of integration** (always required for indefinite integrals).

**Notation:** $\int$ is the integral sign, $f(x)$ is the **integrand**, $dx$ is the **variable of integration**, and $F(x)+C$ is the **general antiderivative**.

## Power Rule for Integration

$$\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$$

**Special case:** When $n = -1$, the power rule fails (division by zero). Instead:
$$\int x^{-1} \, dx = \int \frac{1}{x} \, dx = \ln|x| + C$$

**Applying to radicals and fractions:** Convert to fractional/negative exponents first:
- $\sqrt{x} = x^{1/2}$, so $\int \sqrt{x}\,dx = \frac{x^{3/2}}{3/2} + C = \frac{2}{3}x^{3/2} + C$
- $\frac{1}{x^3} = x^{-3}$, so $\int \frac{1}{x^3}\,dx = \frac{x^{-2}}{-2} + C = -\frac{1}{2x^2} + C$

## Exponential Integration (Base $a$)

$$\int a^x \, dx = \frac{a^x}{\ln a} + C \quad (a > 0,\, a \neq 1)$$

For a linear exponent $\int a^{kx}\,dx = \frac{a^{kx}}{k\ln a} + C$.

**Special case** (base $e$): $\int e^x\,dx = e^x + C$ and $\int e^{kx}\,dx = \frac{1}{k}e^{kx} + C$.

## Linearity of Integrals

| Rule | Formula |
|:---|:---|
| **Constant Multiple** | $\int k\,f(x)\,dx = k\int f(x)\,dx$ |
| **Sum/Difference** | $\int [f(x) \pm g(x)]\,dx = \int f(x)\,dx \pm \int g(x)\,dx$ |

---

# **Important Formulas**

| Rule Name | Formula |
|:--- |:--- |
| **Power Rule** | $\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$ |
| **Special Case** | $\int \frac{1}{x} \, dx = \ln\vert x\vert  + C$ |
| **Exponential Rule (Base $e$)** | $\int e^{kx} \, dx = \frac{1}{k}e^{kx} + C$ |
| **Exponential Rule (Base $a$)** | $\int a^x \, dx = \frac{a^x}{\ln a} + C$ |
| **Constant Multiple Rule** | $\int k f(x) \, dx = k \int f(x) \, dx$ |
| **Sum/Difference Rule** | $\int [f(x) \pm g(x)] \, dx = \int f(x) \, dx \pm \int g(x) \, dx$ |

---

# **Problem-Solving Strategies**

## Strategy 1: Algebraic Simplification First

Before integrating, simplify the integrand algebraically:
- **Expand products:** $\int (1+x)(1-x^2)\,dx$ → expand to $\int (1 + x - x^2 - x^3)\,dx$
- **Distribute fractions:** $\int \frac{x^2+8}{x^2}\,dx = \int\left(1 + 8x^{-2}\right)dx$
- **Convert radicals:** $\int \sqrt[3]{x^2}\,dx = \int x^{2/3}\,dx$

## Strategy 2: U-Substitution for Composite Functions

When the integrand contains a composite function $f(g(x))\cdot g'(x)$, substitute $u = g(x)$:

**Example:** $\int x e^{x^2}\,dx$
- Let $u = x^2$, then $du = 2x\,dx$, so $x\,dx = \frac{du}{2}$
- $\int x e^{x^2}\,dx = \frac{1}{2}\int e^u\,du = \frac{1}{2}e^{x^2} + C$

---

# **Summary**

Exercise 3.1 covers the fundamental techniques of indefinite integration:
1. **Power Rule**, the primary tool for integrating $x^n$ ($n \neq -1$)
2. **Exponential Rule**, for $e^{kx}$ and $a^x$
3. **Linearity**, sum, difference, and constant multiple rules
4. **Algebraic simplification**, always simplify before integrating
5. **U-substitution**, for composite exponential forms

Always include the **constant of integration $C$** for every indefinite integral.

---

<!-- note kx71y5hdp8bry67rrzbgzk5vdh85p0mh | topic ms71eaw39z990mr9z4pcbgfq2n85pa08 | status published -->
# 3.2 Exercise 3.2

# **Key Concepts**

This exercise focuses on the following concepts:

- Integration of basic trigonometric functions (sine, cosine, tangent, cotangent, secant, cosecant)
- Standard integral formulas and their application with linear arguments ($ax+b$)

- Trigonometric identities for simplification ($1+\tan^2 x = \sec^2 x$, $\cos^2 x$ half-angle, etc.)

- Integration by substitution (u-substitution) for composite functions

- Algebraic simplification of integrands before integration (e.g., $\csc x \tan x = \sec x$)

- Linearity properties of integrals (sum rule and constant multiple rule)

- Verification of integration results by differentiation

---

# **Important Formulas**

Below are the key formulas used in this exercise:

**Standard Trigonometric Integrals:**
$$\int \sin(ax) \, dx = -\frac{\cos(ax)}{a} + C$$
$$\int \cos(ax) \, dx = \frac{\sin(ax)}{a} + C$$
$$\int \sec^2(ax+b) \, dx = \frac{\tan(ax+b)}{a} + C$$
$$\int \csc^2(ax+b) \, dx = -\frac{\cot(ax+b)}{a} + C$$
$$\int \sec(ax)\tan(ax) \, dx = \frac{\sec(ax)}{a} + C$$

**Logarithmic Forms:**
$$\int \tan(ax) \, dx = -\frac{1}{a}\ln|\cos(ax)| + C = \frac{1}{a}\ln|\sec(ax)| + C$$

$$\int \cot(ax) \, dx = \frac{1}{a}\ln|\sin(ax)| + C$$

$$\int \csc(ax) \, dx = -\frac{1}{a}\ln|\csc(ax) + \cot(ax)| + C$$

**Trigonometric Identities:**
$$1 + \tan^2 x = \sec^2 x \quad \Rightarrow \quad \tan^2 x = \sec^2 x - 1$$

$$1 + \cot^2 x = \csc^2 x \quad \Rightarrow \quad \cot^2 x = \csc^2 x - 1$$
$$\cos^2 x = \frac{1 + \cos(2x)}{2}$$

**Substitution Rule:**
$$\int f(g(x))g'(x) \, dx = \int f(u) \, du \quad \text{where } u = g(x)$$

---

# **Summary**

This exercise covers the fundamental techniques of integrating trigonometric functions and their combinations. The primary strategies involve:

1. **Applying standard integral formulas directly** — especially for $\sin(ax+b)$, $\cos(ax+b)$, $\sec^2(ax+b)$, $\csc^2(ax+b)$, and $\sec(ax)\tan(ax)$, each introducing a factor of $\frac{1}{a}$.
2. **Using trigonometric identities** to rewrite integrands into integrable forms — such as converting $\tan^2 x$ to $\sec^2 x - 1$, or $\cos^2 x$ to $\frac{1+\cos 2x}{2}$.
3. **Simplifying products** of trig functions — e.g., $\csc x \tan x = \sec x$ — before integrating.
4. **Employing u-substitution** for composite functions, where the inner function's derivative appears as a factor.

Particular attention is required for linear transformations inside trigonometric functions ($ax+b$), which introduce scaling factors of $\frac{1}{a}$ in the result. Always verify solutions by differentiating the result to recover the original integrand.

---

<!-- note kx72rcsayds4hatwhg5h6whnjd85qefq | topic ms7fe30txqvh65vcrxmeyqt2rn85qek1 | status published -->
# 3.3 Exercise 3.3

# **Key Concepts**

This exercise focuses on **integration by substitution** (change of variables) — the reverse of the chain rule.

- Integration by substitution (change of variables)

- Standard integral forms involving inverse trigonometric functions
- Completing the square for quadratic expressions

- Integration of composite functions (chain rule in reverse)
- Logarithmic integration (derivative-over-function pattern)

---

# **Important Formulas**

Below are the key formulas used in this exercise:

$$\int \frac{dx}{x^2+a^2} = \frac{1}{a}\tan^{-1}\left(\frac{x}{a}\right) + C$$

$$\int \frac{dx}{\sqrt{a^2-x^2}} = \sin^{-1}\left(\frac{x}{a}\right) + C$$

$$\int \frac{f'(x)}{f(x)}\,dx = \ln|f(x)| + C$$

$$\int [f(x)]^n f'(x)\,dx = \frac{[f(x)]^{n+1}}{n+1} + C \quad (n \neq -1)$$

**Substitution rule:** If $u = g(x)$, then
$$\int f(g(x))\,g'(x)\,dx = \int f(u)\,du$$

---

# **Method: Integration by Substitution**

The substitution method transforms a complex integral into a standard form by introducing a new variable $u$.

**Steps:**
1. Identify a function $u = g(x)$ whose derivative $g'(x)$ (or a constant multiple) appears in the integrand.
2. Compute $du = g'(x)\,dx$ and express $dx$ in terms of $du$.
3. Rewrite the entire integral in terms of $u$.
4. Integrate with respect to $u$.
5. Substitute back $u = g(x)$ to express the answer in terms of $x$.

**Worked Example 1 — Power substitution:**

Evaluate $\int \frac{x^2}{x^3+1}\,dx$.

Let $u = x^3+1$, so $du = 3x^2\,dx \Rightarrow x^2\,dx = \dfrac{du}{3}$.

$$\int \frac{x^2}{x^3+1}\,dx = \frac{1}{3}\int \frac{du}{u} = \frac{1}{3}\ln|u|+C = \frac{1}{3}\ln|x^3+1|+C$$

**Worked Example 2 — Inverse trig form:**

Evaluate $\int \frac{dy}{y^2+8y+20}$.

Complete the square: $y^2+8y+20 = (y+4)^2+4$.

Let $u = y+4$, $a = 2$:

$$\int \frac{du}{u^2+4} = \frac{1}{2}\tan^{-1}\left(\frac{u}{2}\right)+C = \frac{1}{2}\tan^{-1}\left(\frac{y+4}{2}\right)+C$$

**Worked Example 3 — $\sin^{-1}$ form:**

Evaluate $\int \frac{dx}{\sqrt{20-x^2-4x}}$.

Complete the square: $20-x^2-4x = 24-(x+2)^2$.

Let $u = x+2$, $a = \sqrt{24} = 2\sqrt{6}$:

$$\int \frac{du}{\sqrt{24-u^2}} = \sin^{-1}\left(\frac{u}{2\sqrt{6}}\right)+C = \sin^{-1}\left(\frac{x+2}{2\sqrt{6}}\right)+C$$

---

# **Summary**

This exercise demonstrates the method of substitution for evaluating indefinite integrals. The key strategy involves identifying a substitution $u = g(x)$ such that $g'(x)$ (or a constant multiple) appears in the integrand, transforming the integral into a standard form. Special attention is given to:

- **Trigonometric substitutions** for quadratic forms ($\tan^{-1}$ for $x^2+a^2$, $\sin^{-1}$ for $\sqrt{a^2-x^2}$)
- **Algebraic substitutions** for composite power functions and rational functions
- **Completing the square** to reduce general quadratics to standard forms

- **Recognizing the pattern** $\int \frac{f'(x)}{f(x)}dx = \ln|f(x)|$ for logarithmic integration

---

<!-- note kx72qak63vrr1ss97ed152pfxx85q8cf | topic ms722m80t5ja8mb1v9xp3zjpts85pz6k | status published -->
# 3.4 Exercise 3.4 — Integration by Parts

# **Exercise 3.4 — Integration by Parts**

---

# **Key Concepts**

This exercise focuses on **integration by parts**, a technique used when the integrand is a product of two functions.

## Integration by Parts Formula

$$\int u \, dv = uv - \int v \, du$$

## LIATE Rule

The **LIATE rule** guides the selection of $u$ and $dv$:

| Priority | Function Type |
|----------|---------------|
| 1st | **L**ogarithmic |
| 2nd | **I**nverse Trigonometric |
| 3rd | **A**lgebraic (polynomial) |
| 4th | **T**rigonometric |
| 5th | **E**xponential |

Choose the function **highest** on this list as $u$; assign the remaining factor to $dv$.

## Repeated Integration by Parts (Tabular Method)

When the integrand contains a polynomial factor $x^n$ multiplied by an exponential or trigonometric function, apply integration by parts **repeatedly** until the polynomial reduces to a constant.

**Example:** $\int x^2 e^x \, dx$

| Differentiate ($u$) | Integrate ($dv$) |
|---------------------|------------------|
| $x^2$ | $e^x$ |
| $2x$ | $e^x$ |
| $2$ | $e^x$ |
| $0$ | $e^x$ |

Result: $\int x^2 e^x \, dx = e^x(x^2 - 2x + 2) + C$

## Cyclic Integrals

For integrals like $\int e^x \cos x \, dx$ or $\int e^x \sin x \, dx$, applying integration by parts **twice** returns the original integral $I$ on the right-hand side. Solve algebraically:

$$I = e^x \sin x + e^x \cos x - I \implies 2I = e^x(\sin x + \cos x) \implies I = \frac{e^x(\sin x + \cos x)}{2} + C$$

## Integration of Inverse Trigonometric Functions

For integrals like $\int \sin^{-1} x \, dx$, $\int \cos^{-1} x \, dx$, $\int \tan^{-1} x \, dx$: set $u$ = the inverse trig function and $dv = dx$.

## Combining Substitution with Integration by Parts

Some integrals require a substitution first to simplify the integrand before applying integration by parts.

**Example:** $\int \sin(\ln x) \, dx$ — substitute $t = \ln x$ first, then apply cyclic IBP.

---

# **Important Formulas**

**Integration by Parts:**
$$\int u \, dv = uv - \int v \, du$$

**Cyclic Integral Result** (for $\int e^{ax}\cos(bx)\,dx$):
$$\int e^{ax}\cos(bx)\,dx = \frac{e^{ax}}{a^2+b^2}(a\cos(bx) + b\sin(bx)) + C$$

**Standard Logarithmic Integral:**
$$\int \ln x \, dx = x\ln x - x + C$$

---

# **Summary**

This exercise develops proficiency in integration by parts across diverse function types. The key strategy involves selecting $u$ using the LIATE priority rule: logarithmic and inverse trig functions are typically chosen as $u$, while exponentials and trig functions are assigned to $dv$. For integrands with polynomial factors, repeated integration by parts (tabular method) is efficient until the polynomial reduces to a constant. Some questions require combining substitution with integration by parts. The cyclic pattern arises when integration by parts twice yields an equation solvable for the original integral. Inverse trig integrals are handled by setting $u$ as the inverse function and $dv = dx$.

---

<!-- note kx79ygmzscqydpefqny1cm85x185pb9e | topic ms7b9t79j2bcjv70q49x7c4yh985qnj3 | status published -->
# 3.5 Exercise 3.5 — Integration by Partial Fractions

# **Exercise 3.5 — Integration by Partial Fractions**

---

# **Key Concepts**

This exercise focuses on integrating **rational functions** using the method of **partial fraction decomposition**.

*   Recognising proper vs. improper rational functions
*   Polynomial long division for improper fractions
*   Decomposing into partial fractions based on denominator type
*   Integrating each partial fraction term using logarithmic and power rules

*   Algebraic simplification and factoring of denominators

*   Integration of rational functions after decomposition

---

# **Important Formulas and Rules**

## Standard Integration Results Used

$$\int \frac{1}{x} \, dx = \ln|x| + C$$

$$\int \frac{A}{x+a} \, dx = A\ln|x+a| + C$$

$$\int \frac{A}{(x+a)^n} \, dx = \frac{A(x+a)^{-n+1}}{-n+1} + C \quad (n \neq 1)$$

$$\int \frac{1}{x^2+a^2} \, dx = \frac{1}{a}\tan^{-1}\!\left(\frac{x}{a}\right) + C$$

## Partial Fraction Decomposition Rules

| Denominator Factor | Partial Fraction Form |
|---|---|
| Distinct linear: $(x+a)$ | $\dfrac{A}{x+a}$ |
| Repeated linear: $(x+a)^n$ | $\dfrac{A_1}{x+a} + \dfrac{A_2}{(x+a)^2} + \cdots + \dfrac{A_n}{(x+a)^n}$ |
| Irreducible quadratic: $(ax^2+bx+c)$ | $\dfrac{Ax+B}{ax^2+bx+c}$ |

---

# **Method: Step-by-Step Partial Fractions**

**Step 1 — Check if proper:** If $\deg(\text{numerator}) \geq \deg(\text{denominator})$, perform **polynomial long division** first.

**Step 2 — Factor the denominator** completely into linear and/or irreducible quadratic factors.

**Step 3 — Write the partial fraction form** according to the table above.

**Step 4 — Find the constants** by multiplying both sides by the denominator and substituting convenient values of $x$ (or equating coefficients).

**Step 5 — Integrate** each term separately.

### Worked Example

Evaluate $\displaystyle\int \frac{2x-1}{x^3 - x^2 - 2x} \, dx$.

**Step 1:** Degree of numerator (1) $<$ degree of denominator (3) — already proper.

**Step 2:** Factor: $x^3 - x^2 - 2x = x(x^2 - x - 2) = x(x-2)(x+1)$.

**Step 3:** Write:
$$\frac{2x-1}{x(x-2)(x+1)} = \frac{A}{x} + \frac{B}{x-2} + \frac{C}{x+1}$$

**Step 4:** Multiply through by $x(x-2)(x+1)$:
$$2x - 1 = A(x-2)(x+1) + Bx(x+1) + Cx(x-2)$$

- $x=0$: $-1 = A(-2)(1) \Rightarrow A = \tfrac{1}{2}$
- $x=2$: $3 = B(2)(3) \Rightarrow B = \tfrac{1}{2}$
- $x=-1$: $-3 = C(-1)(-3) \Rightarrow C = -1$

**Step 5:** Integrate:
$$\int \frac{2x-1}{x(x-2)(x+1)} \, dx = \frac{1}{2}\ln|x| + \frac{1}{2}\ln|x-2| - \ln|x+1| + C$$

---

# **Summary**

This exercise covers integration of rational functions via partial fractions. The key skill is recognising the type of denominator factor and writing the correct decomposition form before integrating.

In partial fraction decomposition, the structure of the numerator depends on the nature of the factor in the denominator.

---

<!-- note kx706adtrs8r0e6f9fkw4jekb985q1q7 | topic ms7a6bfkqfywwa1pc5w22fz29h85qbat | status published -->
# 3.6 Exercise 3.6

# **Key Concepts**

This exercise focuses on the following concepts:

- Definite integrals as signed area under curves

- Geometric interpretation of definite integrals (rectangles, triangles, circles)

- Properties of definite integrals (linearity and additivity)

- Integration of piecewise-defined functions

- Evaluating integrals using geometric area formulas
- Interval additivity property: $\int_a^c f(x)\,dx = \int_a^b f(x)\,dx + \int_b^c f(x)\,dx$

---

# **Important Formulas**

## Signed Area and the Definite Integral

The definite integral $\int_{a}^{b} f(x)\,dx$ represents the **net signed area** between the curve $y = f(x)$ and the $x$-axis over $[a, b]$:

- Regions **above** the $x$-axis contribute **positive** area.
- Regions **below** the $x$-axis contribute **negative** area.

When $f(x) \geq 0$ on $[a,b]$, the definite integral equals the actual geometric area of the region bounded by $y = f(x)$, the $x$-axis, and the lines $x = a$ and $x = b$.

## Properties of Definite Integrals

**Zero-width interval:**
$$\int_{a}^{a} f(x)\,dx = 0$$

**Reversing limits:**
$$\int_{b}^{a} f(x)\,dx = -\int_{a}^{b} f(x)\,dx$$

**Linearity Property:**
$$\int_{a}^{b} \left[ c_1 f(x) + c_2 g(x) \right] dx = c_1 \int_{a}^{b} f(x)\,dx + c_2 \int_{a}^{b} g(x)\,dx$$

**Interval Additivity:**
$$\int_{a}^{c} f(x)\,dx = \int_{a}^{b} f(x)\,dx + \int_{b}^{c} f(x)\,dx$$

## Geometric Area Formulas

When the integrand defines a standard geometric shape, the integral can be evaluated directly using the corresponding area formula:

| Shape | Formula |
| :--- | :--- |
| Rectangle | $A = \text{base} \times \text{height}$ |
| Triangle | $A = \dfrac{1}{2} \times \text{base} \times \text{height}$ |
| Semicircle | $A = \dfrac{1}{2}\pi r^2$ |
| Quarter-circle | $A = \dfrac{1}{4}\pi r^2$ |

**Example:** $\int_{0}^{r} \sqrt{r^2 - x^2}\,dx = \dfrac{1}{4}\pi r^2$ because the integrand $y = \sqrt{r^2 - x^2}$ over $[0, r]$ traces a quarter-circle of radius $r$.

## Piecewise Functions

For a piecewise function $f(x)$ whose definition changes at $x = k$ within $[a, b]$, use interval additivity to split the integral:

$$\int_{a}^{b} f(x)\,dx = \int_{a}^{k} f_1(x)\,dx + \int_{k}^{b} f_2(x)\,dx$$

where $f_1$ and $f_2$ are the respective pieces. Each sub-integral is then evaluated using the appropriate formula for that piece.

---

# **Summary**

This exercise develops geometric and algebraic techniques for evaluating definite integrals without using antiderivatives. Key strategies include:

1. **Visualizing signed area** — recognizing whether regions lie above or below the $x$-axis.
2. **Geometric shortcuts** — identifying triangles, rectangles, and semicircles within integral bounds and applying their area formulas directly.
3. **Linearity** — splitting sums/differences of integrands and factoring out constants.
4. **Interval additivity** — splitting integrals at boundary points, especially for piecewise functions.
5. **Limit reversal** — understanding that swapping limits negates the integral value.

---

<!-- note kx7139j4hbdq02akapz9hqe7ex85q2kg | topic ms781xa41b81wxrctexamzbz1h85p4p1 | status published -->
# 3.7 Exercise 3.7

# **Key Concepts**

This exercise focuses on the following integration concepts:

- Definite integration using the Fundamental Theorem of Calculus

- Integration of polynomial and power functions

- Integration of trigonometric functions ($\sin x$, $\cos x$, $\sec^2 x$)

- Integration by substitution ($u$-substitution) for composite functions

- Integration by parts for logarithmic and inverse trigonometric functions

- Partial fraction decomposition for rational functions

- Integration of exponential functions

- Algebraic simplification of integrands before integration

- **Volume of Revolution** (Disk Method)
- **Trapezium Rule** for numerical estimation of definite integrals

---

# **Important Formulas**

## Fundamental Theorem of Calculus
$$\int_a^b f(x) \, dx = F(b) - F(a) \quad \text{where } F'(x) = f(x)$$

## Power Rule for Integration
$$\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$$

## Basic Trigonometric Integrals
$$\int \cos x \, dx = \sin x + C$$

$$\int \sec^2 x \, dx = \tan x + C$$

$$\int \sin x \, dx = -\cos x + C$$

## Integration by Parts
$$\int u \, dv = uv - \int v \, du$$

## Power Reduction Formula
$$\cos^2 x = \frac{1 + \cos(2x)}{2}$$

## Partial Fractions (distinct linear factors)
$$\frac{1}{(x+a)(x+b)} = \frac{1}{b-a}\left(\frac{1}{x+a} - \frac{1}{x+b}\right)$$

---

# **Volume of Revolution — Disk Method**

When a region bounded by $y = f(x)$, the $x$-axis, and the vertical lines $x = a$ and $x = b$ is rotated about the **$x$-axis**, the volume of the resulting solid is:

$$V = \pi \int_{a}^{b} [f(x)]^2 \, dx$$

Each thin slice perpendicular to the $x$-axis is a **disk** of:
- Radius $= f(x)$
- Area $= \pi [f(x)]^2$
- Thickness $= dx$

**Similarly**, rotating about the **$y$-axis** with $x = g(y)$:
$$V = \pi \int_{c}^{d} [g(y)]^2 \, dy$$

**Worked Example:** Find the volume when $y = \sqrt{x}$ from $x = 0$ to $x = 4$ is rotated about the $x$-axis.

$$V = \pi \int_{0}^{4} (\sqrt{x})^2 \, dx = \pi \int_{0}^{4} x \, dx = \pi \left[\frac{x^2}{2}\right]_0^4 = \pi \cdot 8 = 8\pi \text{ cubic units}$$

---

# **Trapezium Rule**

The **Trapezium Rule** estimates $\int_{a}^{b} f(x) \, dx$ by dividing $[a, b]$ into $n$ equal strips of width $h = \dfrac{b-a}{n}$:

$$\int_{a}^{b} f(x) \, dx \approx \frac{h}{2}\left[f(x_0) + 2f(x_1) + 2f(x_2) + \cdots + 2f(x_{n-1}) + f(x_n)\right]$$

where $x_i = a + ih$ for $i = 0, 1, 2, \ldots, n$.

**Key points:**
- The **first** and **last** ordinates have coefficient **1**.
- All **interior** ordinates have coefficient **2**.
- The result is multiplied by $\dfrac{h}{2}$.

**Worked Example:** Estimate $\int_{0}^{4} x^2 \, dx$ using the Trapezium Rule with $n = 4$.

$h = 1$; ordinates at $x = 0, 1, 2, 3, 4$: $f = 0, 1, 4, 9, 16$.

$$\approx \frac{1}{2}[0 + 2(1) + 2(4) + 2(9) + 16] = \frac{1}{2}[0 + 2 + 8 + 18 + 16] = \frac{44}{2} = 22$$

(Exact value: $\frac{64}{3} \approx 21.33$)

---

# **Summary**

This exercise provides comprehensive practice in evaluating definite integrals using various techniques. Key topics include:

- **FTC**: $\int_a^b f(x)\,dx = F(b) - F(a)$
- **Substitution**: Change limits when substituting in definite integrals
- **Integration by Parts**: $\int u\,dv = uv - \int v\,du$ (use LIATE rule for choosing $u$)
- **Partial Fractions**: Decompose rational functions before integrating
- **Volume of Revolution**: $V = \pi\int_a^b [f(x)]^2\,dx$ (Disk Method)
- **Trapezium Rule**: Numerical estimation with coefficients $1, 2, 2, \ldots, 2, 1$

Key strategies: recognize when algebraic simplification is needed, apply even/odd function properties over symmetric intervals, and select the appropriate technique based on the integrand's structure.

---

<!-- note kx7b6ephjnzbhbqpxwnc29rxks85q0b3 | topic ms73pkt8jbb2zgdac8ecdmk0rx85qc3r | status published -->
# 3.8 Exercise 3.8

# **Key Concepts**

This exercise focuses on the following concepts:

- Definite integrals for calculating areas under curves and between curves
- Integration with respect to both $x$ and $y$ (horizontal and vertical slices)

- Volumes of solids of revolution (Disk and Washer methods)
- Applications to physics: Work, force, and Hooke's Law for springs
- Applications to economics: Consumer surplus and producer surplus
- Total accumulation from rate of change (revenue, motion)
- Position functions and rectilinear motion

---

# **Important Formulas**

Below are the key formulas used in this exercise:

## Area Formulas

$$A = \int_a^b f(x) \, dx \quad \text{(Area under curve, } f(x) \geq 0\text{)}$$

$$A = -\int_a^b f(x) \, dx \quad \text{(Area under curve, } f(x) \leq 0\text{)}$$

$$A = \int_a^b [f(x) - g(x)] \, dx \quad \text{(Area between curves, vertical slices)}$$

$$A = \int_c^d [f(y) - g(y)] \, dy \quad \text{(Area between curves, horizontal slices)}$$

**Key strategy:** To find limits of integration when not given, set the two curve equations equal and solve for the intersection points.

## Volume Formulas (Solids of Revolution)

$$V = \pi \int_a^b [f(x)]^2 \, dx \quad \text{(Disk Method — rotation about } x\text{-axis)}$$

$$V = \pi \int_a^b \left([R(x)]^2 - [r(x)]^2\right) \, dx \quad \text{(Washer Method)}$$

where $R(x)$ is the outer radius and $r(x)$ is the inner radius.

## Physics Applications

**Hooke's Law:** $F = kx$, where $k$ is the spring constant and $x$ is the displacement from natural length.

$$W = \int_a^b F(x) \, dx \quad \text{(Work done by a variable force)}$$

$$W = \frac{1}{2}kx^2 \quad \text{(Work to stretch/compress a spring by distance } x\text{)}$$

**Procedure:** Given that a force $F_0$ stretches a spring by $x_0$, find $k = F_0/x_0$, then integrate $F = kx$ over the required interval.

## Economic Applications

$$\text{Consumer Surplus: } CS = \int_0^{q^*} D(q) \, dq - p^* q^*$$

$$\text{Producer Surplus: } PS = p^* q^* - \int_0^{q^*} S(q) \, dq$$

where $D(q)$ is the demand function, $S(q)$ is the supply function, $p^*$ is the equilibrium price, and $q^*$ is the equilibrium quantity.

## Accumulation from Rate of Change

$$\text{Total quantity} = \int_a^b r(t) \, dt$$

This applies to: total revenue from marginal revenue, total distance from velocity, total population change from growth rate, etc.

---

# **Summary**

This exercise comprehensively covers applications of definite integration across geometry, physics, and economics.

- **Geometry:** Calculate areas between curves using vertical slices ($dx$) or horizontal slices ($dy$); find volumes of solids of revolution using the Disk Method and Washer Method.
- **Physics:** Calculate work done by variable forces, particularly spring problems using Hooke's Law ($F = kx$).
- **Economics:** Compute consumer surplus and producer surplus from demand and supply functions.
- **Accumulation:** Determine total quantities (revenue, displacement, population change) by integrating rate functions.

**Key strategies:**
1. Find limits of integration from intersection points of curves.
2. Choose the variable of integration ($x$ or $y$) that simplifies the setup.
3. Correctly identify outer and inner radii for the Washer Method.
4. Always verify that the integrand represents the correct quantity (e.g., upper curve minus lower curve for area).