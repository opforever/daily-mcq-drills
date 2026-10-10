<!-- note kx79pjz35ddw118jwkjmnnvbcs85qycd | topic ms7bwq2hjabhsd3jf23j91hcn585qwyn | status published -->
# 6.1 Exercise 6.1

# **Key Concepts**

This exercise focuses on the following concepts:

- Concurrency of three or more lines (intersection at a single point)
- Point of concurrency and its coordinates

- Altitudes of a triangle and the orthocenter
- Right bisectors (perpendicular bisectors) of triangle sides and the circumcenter

- Medians of a triangle and the centroid

- Area of a triangle using coordinate geometry (shoelace formula)
- Collinearity condition for three points (zero area)
- Determinant method for testing concurrency of lines

---

# **Important Formulas**

Below are the key formulas used in this exercise:

**Area of Triangle:**
$$\Delta = \frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$$

Or in determinant form:
$$\Delta = \frac{1}{2} \left| \begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix} \right|$$

**Condition for Collinearity:**
$$\begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix} = 0$$

**Condition for Concurrency of Three Lines** ($a_1x + b_1y + c_1 = 0$, etc.):
$$\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = 0$$

**Midpoint Formula** (for medians and right bisectors):
$$\left( \frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2} \right)$$

**Perpendicularity Condition** (for altitudes and right bisectors):
$$m_1 \cdot m_2 = -1$$

---

# **Summary**

This exercise covers coordinate geometry applications involving concurrency and area. The first part (Q1-Q8) examines concurrent lines in triangles, requiring you to find equations of altitudes (orthocenter), right bisectors (circumcenter), and medians (centroid), then verify their concurrency. The second part (Q9-Q14) focuses on calculating triangular areas using the determinant/shoelace method and applying the zero-area condition to prove collinearity or find unknown coordinates. Key strategies include: solving simultaneous equations for intersection points, using slope conditions for perpendicular lines, and recognizing that three points are collinear if and only if the triangle they form has zero area.

---

<!-- note kx72yynedf4fsz7sqnbaxq35hs85q8rd | topic ms74hy951ytzpsaagx2xk8537h85q5rq | status published -->
# 6.2 Exercise 6.2

# **Key Concepts**

This exercise focuses on **homogeneous second-degree equations** representing pairs of straight lines through the origin.

## Homogeneous Second-Degree Equation

A **homogeneous equation of degree 2** in $x$ and $y$ has the form:
$$ax^2 + 2hxy + by^2 = 0$$

Every such equation (with real coefficients) represents **two straight lines passing through the origin**.

## Decomposing into Separate Line Equations

To find the individual lines, treat the equation as a quadratic in $m = \frac{y}{x}$:
$$bm^2 + 2hm + a = 0$$
Solve for $m$ using the quadratic formula. Each value of $m$ gives a line $y = mx$ through the origin. Alternatively, factor the expression directly.

## Nature of the Lines

The **discriminant** $h^2 - ab$ determines the nature of the two lines:

| Condition | Nature of Lines |
| :--- | :--- |
| $h^2 > ab$ | Two distinct real lines |
| $h^2 = ab$ | Two coincident (equal) lines |
| $h^2 < ab$ | Two imaginary lines (no real slopes) |

## Angle Between the Pair of Lines

The acute angle $\theta$ between the two lines is given by:
$$\tan\theta = \left|\frac{2\sqrt{h^2 - ab}}{a + b}\right|$$

- If $a + b = 0$: the denominator is zero, so $\theta = 90^\circ$ (lines are **perpendicular**).
- If $h^2 = ab$: the numerator is zero, so $\theta = 0^\circ$ (lines are **coincident**).

## Condition for Perpendicular Lines

The two lines represented by $ax^2 + 2hxy + by^2 = 0$ are **perpendicular** if and only if:
$$a + b = 0$$

---

# **Important Formulas**

**General Form of Joint Equation:**
$$ax^2 + 2hxy + by^2 = 0$$

**Angle Between Lines:**
$$\tan \theta = \left| \frac{2\sqrt{h^2 - ab}}{a + b} \right|$$

**Conditions for Nature of Lines:**

| Condition | Nature of Lines |
| :--- | :--- |
| $h^2 > ab$ | Two distinct real lines |
| $h^2 = ab$ | Coincident lines |
| $h^2 < ab$ | Imaginary lines (no real slope) |

**Perpendicularity Condition:**
$$a + b = 0$$

**Joint Equation of Perpendicular Lines:**

If $ax^2 + 2hxy + by^2 = 0$ represents a pair of lines, the joint equation of lines through the origin **perpendicular** to them is obtained by substituting $x \to y$, $y \to -x$:
$$bx^2 - 2hxy + ay^2 = 0$$

---

# **Worked Strategy**

**Step 1 — Identify $a$, $h$, $b$:** Compare the given equation with $ax^2 + 2hxy + by^2 = 0$. Remember the coefficient of $xy$ is $2h$, not $h$.

**Step 2 — Check the discriminant $h^2 - ab$:** Determine whether the lines are real/distinct, coincident, or imaginary.

**Step 3 — Find individual lines:** Divide by $x^2$ and solve $b\left(\frac{y}{x}\right)^2 + 2h\left(\frac{y}{x}\right) + a = 0$ for $m = y/x$.

**Step 4 — Find the angle:** Apply $\tan\theta = \left|\frac{2\sqrt{h^2-ab}}{a+b}\right|$.

**Step 5 — Perpendicular joint equation:** Swap $a \leftrightarrow b$ and negate $h$ to get $bx^2 - 2hxy + ay^2 = 0$.

---

# **Summary**

This exercise explores homogeneous second-degree equations $ax^2 + 2hxy + by^2 = 0$ representing pairs of straight lines through the origin. The discriminant $h^2 - ab$ classifies the lines as real/distinct, coincident, or imaginary. The angle between the lines uses the formula involving $\sqrt{h^2-ab}$ and $a+b$. Perpendicularity is confirmed by $a+b=0$. The joint equation of perpendicular lines is found by swapping the $x^2$ and $y^2$ coefficients and reversing the sign of the $xy$ term.

---

<!-- note kx73fa8kea66rv3xbkbkmj1ba585p3vq | topic ms7383pr9z5ry65qk1sgcdsnph85prpe | status published -->
# 6.3 Exercise 6.3

# **Key Concepts**

This exercise focuses on the following concepts:

- Coordinate geometry of straight lines
- Intersection points of linear equations
- Area of triangles using vertex coordinates
- Centroid of a triangle (intersection of medians)
- Circumcenter and perpendicular bisectors
- Distance from a point to a line
- Angle between two intersecting lines
- Applications of linear geometry to engineering and design problems

---

# **Important Formulas**

Below are the key formulas used in this exercise:

**Area of Triangle (Coordinate Geometry):**
$$\text{Area} = \frac{1}{2}\left| x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2) \right|$$

**Distance from Point to Line:**
$$d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$$
where $(x_0, y_0)$ is the point and $ax + by + c = 0$ is the line.

**Centroid of Triangle:**
$$G = \left( \frac{x_1+x_2+x_3}{3}, \frac{y_1+y_2+y_3}{3} \right)$$

**Angle Between Two Lines:**
$$\tan \theta = \left| \frac{m_1 - m_2}{1 + m_1 m_2} \right|$$
where $m_1$ and $m_2$ are the slopes of the lines.

**Slope of Line:**
$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

**Concurrency of Three Lines:**
Three lines $a_1x + b_1y + c_1 = 0$, $a_2x + b_2y + c_2 = 0$, and $a_3x + b_3y + c_3 = 0$ are concurrent if the determinant of their coefficients is zero.

**Homogeneous Equations and Joint Lines:**
A homogeneous equation of degree $n$ in $x$ and $y$ always represents $n$ straight lines passing through the origin.

For the second-degree equation $ax^2 + 2hxy + by^2 = 0$:

The lines are real and distinct if $h^2 - ab > 0$.

Individual lines can be extracted by factoring or using the quadratic formula.

---

# **Summary**

This exercise applies coordinate geometry to solve practical problems involving triangular configurations and linear paths. Key strategies include using the determinant formula for triangular area, solving systems of linear equations to find intersection points (vertices), and calculating special points like the centroid (center of mass) and circumcenter (equidistant point). The problems emphasize converting real-world scenarios (flight paths, land boundaries, structural supports) into algebraic representations and using distance and angle formulas to verify geometric properties. Mastery of simultaneous equations and the point-to-line distance formula is essential for solving optimization and positioning problems.