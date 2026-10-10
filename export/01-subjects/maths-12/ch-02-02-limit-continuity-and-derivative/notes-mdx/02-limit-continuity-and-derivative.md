<!-- note kx74b10f9dwg40z8j6g5njht5985qpk8 | topic ms790m7z6r7g2hvbet2d2hq5j985qzjq | status published -->
# 2.1 Exercise 2.1

# **Key Concepts**

This exercise focuses on the following concepts:

- **Graphical Interpretation of Limits:**
    - Observing the behavior of $f(x)$ as $x$ approaches a value $c$ from both the left ($c^-$) and the right ($c^+$).

- **One-Sided Limits and Existence:**
    - A limit $\lim_{x \rightarrow c} f(x)$ exists if and only if $\lim_{x \rightarrow c^-} f(x) = \lim_{x \rightarrow c^+} f(x)$.

- **Algebraic Limit Techniques:**
    - **Direct Substitution:** The first step for continuous functions.

    - **Factoring:** Used to eliminate indeterminate forms like $0/0$ (e.g., $x^2-a^2$ or $x^3 \pm a^3$).

    - **Rationalization:** Multiplying by the conjugate to simplify expressions with radicals.

- **Special Trigonometric Limits:**
    - Understanding the fundamental theorem $\lim_{x \rightarrow 0} \frac{\sin x}{x} = 1$.

---

# **Important Formulas**

Below are the key formulas used in this exercise:

| Description | Formula |
| :--- | :--- |
| **Sum of Cubes** | $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$ |
| **Difference of Cubes** | $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$ |

| **Difference of Squares** | $a^2 - b^2 = (a - b)(a + b)$ |
| **Trigonometric Identity** | $\lim_{x \rightarrow 0} \frac{\sin x}{x} = 1$ |

| **Tangent Identity** | $\lim_{x \rightarrow 0} \frac{\tan x}{x} = 1$ |

| **Limit of Sine (General)** | $\lim_{x \rightarrow 0} \frac{\sin ax}{ax} = 1$ |

---

# **Summary**

This exercise covers the foundational methods for evaluating limits. It begins with **graphical analysis**, highlighting that for a limit to exist, the function must approach the same value from both directions—crucial for piecewise and absolute value functions ($|x|/x$).

**Key Learnings:**
- If direct substitution leads to $0/0$, use **algebraic manipulation** (factoring or rationalizing) to find the "hidden" value.
- Trigonometric limits often require rewriting $\tan x$ as $\frac{\sin x}{\cos x}$ or adjusting the argument to match the fundamental limit $\frac{\sin \theta}{\theta}$.
- A denominator approaching zero while the numerator is non-zero results in a limit that **does not exist** ($\infty$).

---

<!-- note kx76w7evjdssrtsa1yxdm29tnn85qj71 | topic ms72esb9ay8yqkytejgfmc63k185qacy | status published -->
# 2.2 Exercise 2.2

# **Key Concepts**

This exercise focuses on the following concepts:

- Continuity at a point: $\lim_{x \to c} f(x) = f(c)$

- Types of discontinuities: removable, jump, infinite, and oscillating

- Continuity of polynomials and rational functions

- Domain restrictions and vertical asymptotes

- Continuity of trigonometric functions and special limits

- Piecewise functions and continuity at boundary points

- Intermediate Value Theorem (IVT) and existence of roots

- Solving for unknown parameters to ensure continuity

---

# **Important Formulas**

Below are the key formulas used in this exercise:

**Continuity Condition:**
$$\lim_{x \to c} f(x) = f(c)$$

**Piecewise Continuity at Boundary $c$:**
$$\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = f(c)$$

**Special Trigonometric Limit:**
$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

**Intermediate Value Theorem:**
If $f$ is continuous on $[a,b]$ and $k$ is between $f(a)$ and $f(b)$, then $\exists c \in (a,b)$ such that $f(c) = k$.

---

# **Summary**

This exercise develops proficiency in analyzing function continuity across algebraic, transcendental, and piecewise functions. Problems 1-14 emphasize identifying discontinuities by examining domain restrictions, singularities (where denominators vanish), and behavior at critical points—particularly distinguishing between removable discontinuities (holes) and infinite discontinuities (asymptotes).

Problems 15-18 require solving for unknown parameters ($m$, $n$) to enforce continuity, demanding careful calculation of one-sided limits and function values at boundary points. Problem 19 applies the Intermediate Value Theorem to prove existence of solutions within intervals, while Problem 20 examines the theoretical construct of a function discontinuous everywhere. Key strategies include algebraic factorization to simplify rational expressions, evaluating limits of indeterminate forms, and systematic verification of the three continuity conditions.

---

<!-- note kx733p5v8nzkxxc2dqjp41dwvx85pa99 | topic ms76sgnnw3hdzwrbqzh26w1d3h85q7kq | status published -->
# 2.3 Exercise 2.3

# **Key Concepts**

This exercise focuses on finding derivatives **by first principles** (the limit definition). Key topics include:

- Slope of the tangent line to a curve at a point

- Derivative as the instantaneous rate of change

- Power Rule for differentiation
- Differentiation of trigonometric functions (cosine)
- Chain Rule and Quotient Rule for composite and rational functions

- Mean Value Theorem for functions on closed intervals
- Applications of derivatives to physics: position, velocity, and acceleration

- Projectile motion and free-fall problems

---

# **Important Formulas**

Below are the key formulas used in this exercise:

**Derivative by First Principle (Definition):**
$$f'(x) = \lim_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x}$$

**Slope of Tangent Line:**
$$m_{\text{tangent}} = f'(x)$$

**Power Rule:**
$$\frac{d}{dx}\left[x^n\right] = nx^{n-1}$$

**Derivative of Cosine:**
$$\frac{d}{dx}\left[\cos x\right] = -\sin x$$

**Chain Rule:**
$$\frac{d}{dx}\left[f(g(x))\right] = f'(g(x)) \cdot g'(x)$$

**Quotient Rule:**
$$\frac{d}{dx}\left[\frac{u(x)}{v(x)}\right] = \frac{u'(x)v(x) - u(x)v'(x)}{[v(x)]^2}$$

**Velocity from Position Function:**
$$v(t) = s'(t) = \frac{d}{dt}[s(t)]$$

**Mean Value Theorem:**
$$f'(c) = \frac{f(b) - f(a)}{b - a}, \quad c \in (a, b)$$

---

# **Worked Example: Derivative by First Principle**

Find $f'(x)$ for $f(x) = x^2$ using the first principle.

**Step 1:** Write the difference quotient:
$$\frac{f(x+\Delta x) - f(x)}{\Delta x} = \frac{(x+\Delta x)^2 - x^2}{\Delta x}$$

**Step 2:** Expand the numerator:
$$= \frac{x^2 + 2x\Delta x + (\Delta x)^2 - x^2}{\Delta x} = \frac{2x\Delta x + (\Delta x)^2}{\Delta x}$$

**Step 3:** Cancel $\Delta x$:
$$= 2x + \Delta x$$

**Step 4:** Take the limit:
$$f'(x) = \lim_{\Delta x \to 0}(2x + \Delta x) = 2x$$

---

# **Summary**

This exercise develops the fundamental concept of the derivative as the slope of the tangent line, progressing from basic linear and polynomial functions to rational, trigonometric, and composite functions. Problems 1–6 establish the geometric interpretation of the derivative using the first principle, while Problems 7–8 introduce the Mean Value Theorem for analyzing average and instantaneous rates of change over intervals.

Problems 9–12 apply these techniques to physical contexts, connecting mathematical derivatives to the concepts of velocity and acceleration in motion problems. Mastery of the first principle, Power Rule, Chain Rule, and basic trigonometric derivatives is essential for success.

---

<!-- note kx75cafdcetrevdtzr1z7qfb6185qdkm | topic ms7046a5x8p50jgn5ey94vvjrn85qrtz | status published -->
# 2.4 Exercise 2.4

# **Key Concepts**

This exercise focuses on the following concepts:

- Differentiation using the power rule

- Derivative notation ($f'(x)$ and $\frac{dy}{dx}$)
- Basic differentiation rules (constant, constant multiple, sum)

- Finding slopes of tangent lines

- Evaluating derivatives at specific points

---

# **Important Formulas**

Below are the key formulas used in this exercise:

| Rule | Formula |
| :--- | :--- |
| Power Rule | $\frac{d}{dx}(x^n) = nx^{n-1}$ |

| Constant Rule | $\frac{d}{dx}(c) = 0$ |

| Constant Multiple Rule | $\frac{d}{dx}[cf(x)] = cf'(x)$ |

| Sum/Difference Rule | $\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)$ |
| Tangent Slope at $x=a$ | $m = f'(a) = \left.\frac{dy}{dx}\right\|_{x=a}$ |

---

# **Summary**

This exercise covers fundamental differentiation techniques for computing derivatives of algebraic functions. Key learnings include applying the power rule to determine $f'(x)$ and $\frac{dy}{dx}$, combining basic differentiation rules for polynomial expressions, and evaluating derivatives at specific points to calculate the slope of tangent lines. Common strategies involve simplifying expressions before applying differentiation rules and carefully handling negative and fractional exponents.

---

<!-- note kx72wjd7fmmvmbdnsgsbxtqfa985qqvr | topic ms7a028rd5m7qnfnkwp05r43x985q43v | status published -->
# 2.5 Exercise 2.5 — Differentiation Rules for Algebraic Functions

# **Exercise 2.5 — Differentiation Rules for Algebraic Functions**

---

# **Key Concepts**

This exercise focuses on applying the following differentiation rules to algebraic (polynomial and rational) functions:

- **Power Rule** — differentiating $x^n$ and terms with negative exponents
- **Product Rule** — differentiating products of two functions

- **Quotient Rule** — differentiating rational functions

- **Chain Rule** — differentiating composite functions

- **Evaluating derivatives at specific points**

- **Simplification strategies** — expanding or splitting fractions before differentiating

---

# **Important Formulas**

## Power Rule
$$\frac{d}{dx}(x^n) = nx^{n-1}$$

Also applies to negative exponents: $\frac{d}{dx}(x^{-n}) = -nx^{-n-1}$

## Product Rule
$$\frac{d}{dx}[u(x)\,v(x)] = u'(x)\,v(x) + u(x)\,v'(x)$$

## Quotient Rule
$$\frac{d}{dx}\left[\frac{u(x)}{v(x)}\right] = \frac{u'(x)\,v(x) - u(x)\,v'(x)}{[v(x)]^2}$$

## Chain Rule
$$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$

For the special case $y = \frac{k}{g(x)} = k[g(x)]^{-1}$:
$$\frac{dy}{dx} = -k[g(x)]^{-2} \cdot g'(x) = -\frac{k\,g'(x)}{[g(x)]^2}$$

---

# **Key Strategies**

### Strategy 1: Simplify Before Differentiating
When the denominator is a monomial (e.g., $x^2$), split the fraction first:
$$y = \frac{x^4 + 2x^3 - 1}{x^2} = x^2 + 2x - x^{-2}$$
Then apply the Power Rule term-by-term. This is often simpler than the Quotient Rule.

### Strategy 2: Expand Products Before Differentiating
For products of polynomials, expanding first and using the Power Rule can be faster than the Product Rule:
$$y = (x+3)(x-3) = x^2 - 9 \implies \frac{dy}{dx} = 2x$$

### Strategy 3: Evaluating at a Point
To find $f'(a)$: first find the general derivative $f'(x)$, then substitute $x = a$.

**Example:** If $y = x^3 - 5x + 2$, find $\frac{dy}{dx}$ at $x = 2$.
$$\frac{dy}{dx} = 3x^2 - 5 \implies \left.\frac{dy}{dx}\right|_{x=2} = 3(4) - 5 = 7$$

---

# **Summary**

This exercise covers fundamental differentiation techniques for algebraic functions:

- **Questions 1–10**: Apply the Power, Product, and Quotient Rules to polynomials and rational functions.
- **Questions 11–13**: Use the Chain Rule for composite functions in denominators and squared terms.
- **Questions 14–17**: Combine differentiation with evaluation at specific points.

Key strategies: simplify expressions before differentiating when possible (e.g., Q10, Q14), and carefully track signs and exponents when applying the Quotient Rule. Watch for opportunities to expand products before differentiating as an alternative to the Product Rule.

---

<!-- note kx7bsgs3s2a5zx8gqwk3dc6nah85qvp3 | topic ms7cf55v2hzk6tmr52a3kmt22d85q6pj | status published -->
# 2.6 Exercise 2.6

# **Key Concepts**

This exercise focuses on the following concepts:

- Derivatives of basic trigonometric functions ($\sin x$, $\cos x$, $\tan x$, $\cot x$, $\sec x$)
- Derivatives of inverse trigonometric functions ($\sin^{-1}x$, $\cos^{-1}x$, $\tan^{-1}x$, $\cot^{-1}x$, $\sec^{-1}x$)
- Product rule for differentiation

- Quotient rule for differentiation

- Chain rule for composite functions

- Algebraic manipulation and simplification of trigonometric expressions

---

# **Important Formulas**

Below are the key formulas used in this exercise:

**Basic Trigonometric Derivatives:**
$$\frac{d}{dx}(\sin x) = \cos x, \quad \frac{d}{dx}(\cos x) = -\sin x$$
$$\frac{d}{dx}(\tan x) = \sec^2 x, \quad \frac{d}{dx}(\cot x) = -\csc^2 x$$

$$\frac{d}{dx}(\sec x) = \sec x \tan x$$

**Inverse Trigonometric Derivatives:**
$$\frac{d}{dx}(\sin^{-1}x) = \frac{1}{\sqrt{1-x^2}}, \quad \frac{d}{dx}(\cos^{-1}x) = -\frac{1}{\sqrt{1-x^2}}$$

$$\frac{d}{dx}(\tan^{-1}x) = \frac{1}{1+x^2}, \quad \frac{d}{dx}(\cot^{-1}x) = -\frac{1}{1+x^2}$$
$$\frac{d}{dx}(\sec^{-1}x) = \frac{1}{|x|\sqrt{x^2-1}}$$

**Differentiation Rules:**
$$\text{Product Rule: } \frac{d}{dx}(uv) = u\frac{dv}{dx} + v\frac{du}{dx}$$

$$\text{Quotient Rule: } \frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}$$

$$\text{Chain Rule: } \frac{d}{dx}f(g(x)) = f'(g(x)) \cdot g'(x)$$

---

# **Summary**

This exercise covers the differentiation of trigonometric and inverse trigonometric functions in various combinations. It progresses from basic polynomial-trig combinations to products and quotients requiring the product and quotient rules, then advances to inverse trigonometric functions requiring the chain rule. Key strategies include recognizing the appropriate differentiation rule based on function structure (sums, products, quotients, compositions), applying the chain rule carefully for composite inverse trig functions, and simplifying results using identities where applicable (notably $\sin^{-1}x + \cos^{-1}x = \frac{\pi}{2}$ in Q15).

---

<!-- note kx73pz6aars26bjxbqfhh0ccws85q5mq | topic ms78ez5snj0q6qz58b2wdm5a3s85q92c | status published -->
# 2.7 Exercise 2.7

# **Key Concepts**

This exercise focuses on the following concepts:

- **Advanced Differentiation Rules:** Application of the Product Rule, Quotient Rule, and Chain Rule to complex functions.

- **Implicit Differentiation:** Finding the derivative $\frac{dy}{dx}$ when $y$ is not explicitly isolated.

- **Parametric Differentiation:** Calculating $\frac{dy}{dx}$ for curves defined by parametric equations $x=f(t)$ and $y=g(t)$.
- **Differentials:** Understanding the differential $dy = f'(x)dx$ as an approximation of the change in $y$.

- **Linear Approximation:** Using differentials to estimate numerical values of roots, powers, and trigonometric functions.

---

# **Important Formulas**

Below are the key formulas used in this exercise:

| Rule/Concept | Formula |
| :--- | :--- |
| **Product Rule** | $\frac{d}{dx}[uv] = u\frac{dv}{dx} + v\frac{du}{dx}$ |

| **Quotient Rule** | $\frac{d}{dx}[\frac{u}{v}] = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}$ |

| **Chain Rule** | $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$ |

| **Implicit Derivative** | $\frac{d}{dx}[f(y)] = f'(y)\frac{dy}{dx}$ |

| **Parametric Derivative** | $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$ |
| **Differential** | $dy = f'(x)dx$ |
| **Linear Approximation** | $f(x + \Delta x) \approx f(x) + f'(x)\Delta x$ |

---

# **Summary**

This exercise provides a comprehensive review of differentiation techniques beyond basic power rules. It transitions from **explicit differentiation** (where $y$ is a function of $x$) to **implicit differentiation** (where $x$ and $y$ are intertwined) and **parametric differentiation** (where both depend on a third variable $t$).

A significant portion of the exercise is dedicated to the practical application of **differentials**, teaching how to use the derivative at a known point to approximate values of functions at nearby points.

The core strategy across all problems is to correctly identify the outer and inner functions to apply the Chain Rule effectively.

---

<!-- note kx70b0m3j4vk0d2wx8rvq19sf185pdn2 | topic ms7a3dwd4cnp805q6bz3yz6nps85prxr | status published -->
# 2.8 Exercise 2.8

# **Key Concepts**

This exercise focuses on the following concepts:

- Second derivatives and higher-order derivatives ($\frac{d^n y}{dx^n}$)

- Power Rule for differentiation: $\frac{d}{dx}(x^n) = nx^{n-1}$

- Chain Rule for composite functions

- Product Rule for differentiation of products

- Derivatives of trigonometric functions ($\sin$, $\cos$, $\tan$)

- Derivatives of exponential functions ($e^{ax}$)

- Derivatives of logarithmic functions ($\ln$)

- Leibniz Rule (generalized product rule for second derivatives)

---

# **Important Formulas**

Below are the key formulas used in this exercise:

**Basic Differentiation Rules:**
$$\frac{d}{dx}(x^n) = nx^{n-1}$$

**Higher-Order Derivative Notation:**
$$f''(x) = \frac{d^2y}{dx^2}, \quad f^{(n)}(x) = \frac{d^n y}{dx^n}$$

**Chain Rule:**
$$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$

**Product Rule:**
$$\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$$

**Leibniz Rule (Second Derivative of Product):**
$$\frac{d^{2}}{dx^{2}}(fg) = f''g + 2f'g' + fg''$$

**Trigonometric Derivatives:**
$$\frac{d}{dx}(\sin x) = \cos x, \quad \frac{d}{dx}(\cos x) = -\sin x, \quad \frac{d}{dx}(\tan x) = \sec^2 x$$

**Exponential and Logarithmic Derivatives:**
$$\frac{d}{dx}(e^{ax}) = ae^{ax}, \quad \frac{d}{dx}(\ln x) = \frac{1}{x}$$

---

# **Summary**

This exercise covers the computation of second and higher-order derivatives for a variety of function types including polynomials, rational functions, trigonometric, exponential, and logarithmic functions. The key strategy involves sequential application of differentiation rules—particularly the chain rule and product rule—to find successive derivatives.

Questions 15–18 extend to third, fourth, and fifth derivatives, requiring careful pattern recognition in repeated differentiation. Question 20 establishes the Leibniz rule, a generalization of the product rule for second derivatives that resembles the binomial expansion pattern.

---

<!-- note kx76ba42b5sm0kw820wat83jch85qxec | topic ms7c3assxkm1kb9atppxzz1xg985p91p | status published -->
# 2.9 Exercise 2.9

# **Key Concepts**

This exercise focuses on the following concepts:

* **Critical Values:** Identifying points where the first derivative is zero or undefined.

* **Absolute Extrema:** Finding the highest and lowest values of a function on a closed interval.

* **Concavity:** Using the second derivative to determine if a graph is concave upward or downward.

* **Points of Inflection:** Identifying points where the concavity of a function changes.

* **Second Derivative Test:** A method for classifying relative extrema using the sign of the second derivative at critical points.

---

# **Important Formulas**

Below are the key formulas used in this exercise:

| Concept | Condition |
| :--- | :--- |
| **Critical Value** | $f'(c) = 0$ or $f'(c)$ is undefined |
| **Concave Upward** | $f''(x) > 0$ |
| **Concave Downward** | $f''(x) < 0$ |
| **Inflection Point** | $f''(x) = 0$ or undefined (and concavity changes) |
| **Relative Minimum** | $f'(c) = 0$ and $f''(c) > 0$ |
| **Relative Maximum** | $f'(c) = 0$ and $f''(c) < 0$ |

---

# **Summary**

This exercise covers the fundamental applications of the first and second derivatives in curve sketching and optimization. Key learnings include the systematic identification of critical points and the use of the second derivative to determine the shape of a graph (concavity) and the nature of its extrema. Strategies involve evaluating functions at endpoints for absolute extrema and applying the Second Derivative Test as an efficient alternative to the First Derivative Test for classifying relative maxima and minima.

---

<!-- note kx7azjxqkf6wawx060qy4jtydh85pqw6 | topic ms7dfdrn50kj7eh5wn9gx4x48185pm02 | status published -->
# 2.10 Exercise 2.10

# **Key Concepts**

This exercise focuses on the following concepts:

* **Continuity:** Determining parameters to ensure a function is continuous at a point.

* **Related Rates:** Calculating the rate of change of one quantity based on the rates of change of related variables.

* **Differentials:** Using $dy \approx f'(x)dx$ to estimate changes and propagate errors in measurements.

* **Optimization:** Finding maximum or minimum values of functions (area, volume, product) under given constraints.

* **Applications in Physics:** Kinematics (velocity/acceleration) and Einstein's theory of relativity.

* **Applications in Economics:** Revenue, cost functions, and continuous compounding of inflation.

---

# **Important Formulas**

Below are the key formulas used in this exercise:

| Application | Formula |
| :--- | :--- |
| **Differentials** | $dy = f'(x) dx$ |
| **Sphere Geometry** | $V = \frac{4}{3}\pi r^3$, $S = 4\pi r^2$ |

| **Pythagorean Theorem** | $x^2 + y^2 = z^2 \implies 2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 2z\frac{dz}{dt}$ |

| **Equilateral Triangle Area** | $A = \frac{\sqrt{3}}{4}s^2$ |

| **Cube Diagonal** | $D = \sqrt{3}s$ |

| **Continuous Compounding** | $A = Pe^{rt}$ |
| **Optimization** | Set $f'(x) = 0$ and check boundaries or second derivative |

---

# **Summary**

This exercise provides a comprehensive review of the practical applications of derivatives. Key learnings include the use of **Related Rates** to solve geometric problems involving moving objects, the application of **Optimization** to find efficient dimensions in construction and mathematics, and the use of **Differentials** for error analysis.

Strategies involve identifying the primary equation relating variables, differentiating with respect to time or a specific variable, and substituting known values to find the desired rate or extremum.