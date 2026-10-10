<!-- note kx7cjw2eeas8zy7a1w5hfyrrts85qkg4 | topic ms7a8ys1dpzwxaj19tybv5vd5985qec3 | status published -->
# 10.1 Exercise 10.1

# **Key Concepts**

This exercise focuses on the following concepts:

- **Bisection Method** (Interval Halving): Iterative numerical method for finding roots by repeatedly dividing the interval in half

- **Intermediate Value Theorem (IVT)**: Ensures existence of a root when $f(a)$ and $f(b)$ have opposite signs

- **Root Finding**: Locating values $x$ where $f(x) = 0$ for polynomial and transcendental equations

- **Convergence Criteria**: Determining when the approximation is accurate to two decimal places
- **Error Bounds**: Understanding maximum possible error after $n$ iterations
- **Transcendental Equations**: Solving equations involving exponential, logarithmic, and trigonometric functions
- **Bracketing Methods**: Maintaining an interval that contains the root throughout iterations

---

# **Important Formulas**

Below are the key formulas used in this exercise:

**Midpoint Calculation:**
$$c = \frac{a+b}{2}$$

**Error Bound after $n$ iterations:**
$$|x_n - x^*| \leq \frac{b-a}{2^n}$$

**Stopping Criterion (for 2 decimal places accuracy):**
$$|b-a| < 0.01 \quad \text{or} \quad |f(c)| < 0.005$$

**Number of iterations needed for error $\epsilon$:**
$$n \geq \frac{\ln(b-a) - \ln(\epsilon)}{\ln(2)}$$

---

# **Step-by-Step Procedure**

1. **Verify bracketing**: Check that $f(a) \cdot f(b) < 0$ (IVT guarantees a root exists in $[a,b]$).
2. **Compute midpoint**: $c = \dfrac{a+b}{2}$.
3. **Evaluate $f(c)$**:
   - If $f(c) = 0$: $c$ is the exact root. Stop.
   - If $f(a) \cdot f(c) < 0$: root is in $[a, c]$; set $b = c$.
   - If $f(c) \cdot f(b) < 0$: root is in $[c, b]$; set $a = c$.
4. **Check stopping criterion**: If $|b - a| < 0.005$ (for 2 d.p. accuracy), stop. Otherwise repeat from step 2.

---

# **Summary**

This exercise provides comprehensive practice in applying the **bisection method** to locate roots of various equations with an accuracy of two decimal places. The problems span polynomial equations (cubic and quartic), transcendental equations involving trigonometric and exponential functions, and practical application problems.

Key strategies include: verifying the initial interval $[a,b]$ satisfies $f(a) \cdot f(b) < 0$, systematically computing midpoints, determining which subinterval contains the root based on sign changes, and iterating until the desired precision is achieved. Common patterns involve recognizing that transcendental equations often require the method due to lack of algebraic solutions, while polynomial equations may have multiple roots requiring careful interval selection.

---

<!-- note kx7bc1rbxrp43k3kgrbq61h20d85pdf0 | topic ms76rm8s6bbw4208bbydrt9fj185qamk | status published -->
# 10.2 Exercise 10.2

# **Key Concepts**

This exercise focuses on the following concepts:

- Numerical integration methods
- Trapezoidal rule for approximating definite integrals
- Simpson's $\frac{1}{3}$ rule for approximating definite integrals

- Step size calculation and interval subdivision

- Definite integrals of algebraic, rational, and trigonometric functions
- Composite numerical integration techniques

---

# **Important Formulas**

Below are the key formulas used in this exercise:

**Trapezoidal Rule:**
$$\int_a^b f(x) \, dx \approx \frac{h}{2}\left[(y_0 + y_n) + 2\sum_{i=1}^{n-1} y_i\right]$$

where $h = \frac{b-a}{n}$ is the step size, $n$ is the number of subintervals, and $y_i = f(x_i)$

**Simpson's $\frac{1}{3}$ Rule:**
$$\int_a^b f(x) \, dx \approx \frac{h}{3}\left[(y_0 + y_n) + 4(y_1 + y_3 + \cdots + y_{n-1}) + 2(y_2 + y_4 + \cdots + y_{n-2})\right]$$

where $n$ is even and $h = \frac{b-a}{n}$

---

# **Summary**

This exercise covers numerical approximation of definite integrals using the Trapezoidal and Simpson's $\frac{1}{3}$ rules. The Trapezoidal rule approximates the region under curves using trapezoids (linear approximations), while Simpson's rule uses parabolic arcs for higher accuracy.

Key strategies include: determining the correct step size $h = \frac{b-a}{n}$, evaluating functions at equally spaced nodes, and applying proper weighting coefficients (1-2-2-...-2-1 for Trapezoidal; 1-4-2-4-...-2-4-1 for Simpson's). The exercise demonstrates these methods on various integrands including polynomials, rational functions, and trigonometric functions, highlighting the trade-off between computational complexity and approximation accuracy.