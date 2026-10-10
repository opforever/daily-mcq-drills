<!-- note kx7a6yw0v742q706g50yac18ah85qxr1 | topic ms7db1htgqc6ayst0gz7xk8a1185pjj2 | status published -->
# 7.1 Exercise 7.1

# **Key Concepts**

This exercise focuses on the following concepts:

## Standard and General Equations of a Circle

A circle is the locus of all points equidistant from a fixed point called the **centre**.

**Standard Form:**
$$(x-h)^2 + (y-k)^2 = r^2$$
where $(h,k)$ is the centre and $r > 0$ is the radius.

**General Form:**
$$x^2 + y^2 + 2gx + 2fy + c = 0$$
- Centre: $(-g,\,-f)$
- Radius: $r = \sqrt{g^2 + f^2 - c}$ (real circle requires $g^2 + f^2 - c > 0$)

Convert between forms by **completing the square**:
$$(x+g)^2 + (y+f)^2 = g^2 + f^2 - c$$

---

## Centre and Radius Determination

- **From standard form:** read off $(h,k)$ and $r$ directly.
- **From two diameters:** the centre is the intersection of the two diameter lines, solve the linear system simultaneously.
- **From general form:** centre $= (-g,-f)$, radius $= \sqrt{g^2+f^2-c}$.

---

## Circle Passing Through Points

**Three non-collinear points:** The centre is equidistant from all three points. Set
$$(h-x_1)^2+(k-y_1)^2 = (h-x_2)^2+(k-y_2)^2 = (h-x_3)^2+(k-y_3)^2$$
and solve the resulting linear system for $(h,k)$, then find $r$.

**Two points with centre on a given line $L$:** Equate the distances from the centre to both points (both equal $r$), and substitute the centre into the equation of $L$. Solve the system.

---

## Tangency Conditions

A line $ax + by + c = 0$ is **tangent** to a circle with centre $(h,k)$ and radius $r$ if and only if:
$$d = \frac{|ah + bk + c|}{\sqrt{a^2 + b^2}} = r$$

Additionally, the radius drawn to the point of tangency is **perpendicular** to the tangent line (product of slopes $= -1$). These two conditions together determine unknown parameters.

---

## Circles Touching Coordinate Axes

If a circle of radius $r$ touches **both** coordinate axes, then $|h| = |k| = r$:
- First quadrant: centre $(r, r)$
- Second quadrant: centre $(-r, r)$
- Third quadrant: centre $(-r, -r)$
- Fourth quadrant: centre $(r, -r)$

---

## Diameters of a Circle

A **diameter** is a chord passing through the centre. Given two diameter equations, the centre is their point of intersection.

---

## Family of Circles Through Intersection of Two Circles

If $S_1 = 0$ and $S_2 = 0$ are two circles, then
$$S_1 + \lambda S_2 = 0 \quad (\lambda \neq -1)$$
represents a family of circles passing through their points of intersection.

---

# **Important Formulas Summary**

| Formula | Expression |
|---|---|
| Standard form | $(x-h)^2+(y-k)^2=r^2$ |
| General form centre | $(-g,\,-f)$ |
| General form radius | $\sqrt{g^2+f^2-c}$ |
| Distance point to line | $d = \dfrac{\vert ax_1+by_1+c\vert }{\sqrt{a^2+b^2}}$ |
| Tangency condition | $d = r$ |

---

# **Summary**

This exercise covers methods for determining the equation of a circle under various geometric constraints. Key strategies include: using standard form when centre and radius are known; converting between general and standard forms by completing the square; applying the tangency condition ($d = r$) for problems involving tangent lines; solving systems of equations to find unknown parameters using given points, tangent conditions, or diameter equations. Special cases include circles touching both axes ($|h|=|k|=r$) and the family of circles through the intersection of two given circles.

---

<!-- note kx76dygw4msbds1q700x3pd7tx85q7ej | topic ms7bjbk6tt96wmaxptsed5p5jn85qbhx | status published -->
# 7.2 Exercise 7.2

# **Key Concepts**

This exercise focuses on the following concepts:

- Intersection of lines and circles

- Tangents to circles (equations and conditions)
- Normals to circles

- Condition for tangency: distance from center equals radius
- Perpendicularity of tangent and radius
- Chords and diameters of circles
- Condition for two circles to touch (internally or externally)

---

# **Important Formulas**

Below are the key formulas used in this exercise:

**Standard Circle Equation:**
$$(x-h)^2 + (y-k)^2 = r^2$$

**General Circle Equation:**
$$x^2 + y^2 + 2gx + 2fy + c = 0$$
with center $(-g, -f)$ and radius $\sqrt{g^2 + f^2 - c}$

**Condition for Line to be Tangent to Circle:**
$$d = r$$
where $d$ is perpendicular distance from center to line

**Equation of Tangent to Circle $x^2 + y^2 = a^2$ at $(x_1, y_1)$:**
$$xx_1 + yy_1 = a^2$$

**Equation of Normal to Circle at $(x_1, y_1)$:**
$$y - y_1 = \frac{y_1}{x_1}(x - x_1)$$

**Condition for Two Circles to Touch:**
$$|C_1C_2| = r_1 \pm r_2$$
(external: $+$ , internal: $-$)

---

# **Summary**

This exercise covers fundamental properties of circles and their interactions with lines. Key strategies include: converting general form to standard form to identify center and radius; using the distance formula to establish tangency conditions; applying the geometric property that tangent is perpendicular to radius; and using the fact that the normal passes through the center. For intersection problems, simultaneous equations are essential.

When circles touch, comparing the distance between centers with sum/difference of radii determines the nature of contact.

---

<!-- note kx7cp9xcr2qkn0bacm091zn97185q7nr | topic ms79v8smg9qzzj4bkt1b6rmygn85qbh1 | status published -->
# 7.3 Exercise 7.3

# **Key Concepts**

This exercise focuses on the following concepts:

- Position of a point relative to a circle (inside, outside, or on)

- Length of tangent from an external point to a circle

- Equation of tangent lines from external points
- Properties of tangential quadrilaterals (Pitot's theorem)
- Power of a point (tangent-secant theorem)
- Algebraic conditions for tangency ($S_1$ criterion)

---

# **Important Formulas**

Below are the key formulas used in this exercise:

| Concept | Formula |
| :--- | :--- |
| **Position of point** $(x_1, y_1)$ relative to circle $S=0$ | $S_1 = x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c$ <br /> $S_1 > 0 \Rightarrow$ outside, $S_1 = 0 \Rightarrow$ on, $S_1 < 0 \Rightarrow$ inside |
| **Length of tangent** from $(x_1, y_1)$ to circle | $L = \sqrt{\vert S_1\vert} = \sqrt{\vert x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c\vert}$ |
| **Equation of tangent** at point $(x_1, y_1)$ on circle | $xx_1 + yy_1 + g(x+x_1) + f(y+y_1) + c = 0$ |
| **Pair of tangents** from external point | $SS_1 = T^2$ where $T = xx_1 + yy_1 + g(x+x_1) + f(y+y_1) + c$ |
| **Tangential quadrilateral** property | $AB + CD = BC + DA$ (sum of opposite sides equal) |
| **Tangent-secant theorem** | $PT^2 = PA \cdot PB$ where $PT$ is tangent length and $PAB$ is secant |

---

# **Summary**

This exercise covers fundamental properties of circles and tangents. Key skills include: determining point positions using the $S_1$ algebraic criterion; calculating tangent lengths via the power-of-a-point formula $L = \sqrt{S_1}$;

finding equations of tangents from external points using the $SS_1 = T^2$ condition; proving geometric properties of quadrilaterals circumscribing circles (Pitot's theorem); and applying the tangent-secant theorem relating tangent and secant segments from an external point. Common strategies involve converting general circle equations to standard form $(x-h)^2 + (y-k)^2 = r^2$ and recognizing when to apply geometric theorems versus algebraic coordinate geometry.

---

<!-- note kx7eyq50mp79104mt7bcws25b185qm0y | topic ms76mj8bn1vp9x3k7ch7mq04hn85p2vp | status published -->
# 7.4 Exercise 7.4

# **Key Concepts**

This exercise focuses on the following concepts:

- Standard properties of parabolas (focus, vertex, axis of symmetry, directrix)
- Latus rectum dimensions and endpoint coordinates
- Deriving parabola equations from the focus-directrix definition

- Parametric and trigonometric coordinate representations
- Calculus approach to finding vertices (differentiation and extrema)

---

# **Important Formulas**

Below are the key formulas used in this exercise:

Standard equations of parabolas:
$$y^2 = 4ax \quad \text{(opens right)}, \quad x^2 = 4ay \quad \text{(opens up)}$$

$$(y-k)^2 = 4a(x-h) \quad \text{(vertex at }(h,k)\text{)}$$

Focus-directrix property:
$$\text{Distance to focus} = \text{Distance to directrix}$$
$$\sqrt{(x-x_0)^2 + (y-y_0)^2} = \frac{|ax + by + c|}{\sqrt{a^2+b^2}}$$

Latus rectum:
$$\text{Length} = 4a$$
$$\text{Endpoints: } (a, \pm 2a) \text{ for } y^2=4ax$$

Vertex via differentiation:
$$\frac{dy}{dx} = 0 \quad \text{or} \quad \frac{dx}{dy} = 0 \text{ at vertex}$$

---

# **Summary**

This exercise covers parabolas through both geometric and algebraic lenses. It begins with identifying key features (focus, directrix, latus rectum) from equations, then progresses to constructing equations from geometric constraints—including parametric cases with trigonometric coordinates.

The final question bridges algebra and calculus, demonstrating that the vertex represents the extremum point found via differentiation. Key strategies include applying the focus-directrix distance equality and recognizing standard forms.

---

<!-- note kx79ga594d30nnz76k3x97tnch85pp8k | topic ms7b0sazz9y33erjnrj84tjnsd85psdy | status published -->
# 7.5 Exercise 7.5

# **Key Concepts**

This exercise focuses on the following concepts:

*   **Intersection of Lines and Parabolas:** Solving simultaneous linear and quadratic equations to find points of contact or intersection.

*   **Condition of Tangency:** Determining the mathematical criteria for a line to touch a parabola at exactly one point.

*   **Tangent and Normal Equations:** Deriving and applying formulas for lines tangent and normal to a parabola at specific points.

*   **Geometric Properties:** Exploring relationships between tangents, focal chords, the directrix, and the latus rectum.

*   **Harmonic Mean in Parabolas:** Understanding the relationship between segments of a focal chord and the semi latus rectum.

---

# **Important Formulas**

Below are the key formulas used in this exercise:

| Description | Formula |
| :--- | :--- |
| Tangent to $y^2 = 4ax$ at $(x_1, y_1)$ | $yy_1 = 2a(x + x_1)$ |
| Normal to $y^2 = 4ax$ at $(x_1, y_1)$ | $y - y_1 = -\frac{y_1}{2a}(x - x_1)$ |

| Condition of tangency ($y = mx + c$) | $c = \frac{a}{m}$ |

| Point of contact for $y = mx + c$ | $(\frac{a}{m^2}, \frac{2a}{m})$ |
| Harmonic mean of focal segments | $\frac{1}{SP} + \frac{1}{SQ} = \frac{1}{a}$ |

---

# **Summary**

This exercise covers the coordinate geometry of the parabola, specifically focusing on its interaction with straight lines. Key learnings include the method of finding intersection points, applying the condition of tangency to find unknown parameters, and constructing equations for tangents and normals.

A significant portion of the exercise is dedicated to proving geometric theorems, such as the harmonic mean property of focal chords and angular properties of tangents, which are fundamental to understanding the reflective and structural nature of parabolic curves.

---

<!-- note kx765b7fw66x0t0e7h8rk90kx585qzxc | topic ms7ff64f7xeyarhe8vp927jk5585pasy | status published -->
# 7.6 Exercise 7.6

# **Exercise Questions**

<ExerciseQuestionList questions="[{&quot;num&quot;:1,&quot;path&quot;:&quot;exercises/class-12/maths/07_Conic Section/7.6 Q&A/7.6 Q-1.md&quot;,&quot;statement&quot;:&quot;Find the centre, vertices, co-vertices, foci, eccentricity, length and equation of major axis, length and equation of minor axis, directrices, and length of latus rectums for the following equations of ellipse. Also draw the ellipse in each case:&quot;},{&quot;num&quot;:2,&quot;path&quot;:&quot;exercises/class-12/maths/07_Conic Section/7.6 Q&A/7.6 Q-2.md&quot;,&quot;statement&quot;:&quot;From the given information, find the equation of the ellipse in each of the following cases:&quot;},{&quot;num&quot;:3,&quot;path&quot;:&quot;exercises/class-12/maths/07_Conic Section/7.6 Q&A/7.6 Q-3.md&quot;,&quot;statement&quot;:&quot;Find the coordinates of the vertices and co-vertices of the following ellipses by differentiating the equation on both sides and solving for horizontal and vertical tangent lines:&quot;}]"></ExerciseQuestionList>

---
---

# **Key Concepts**

This exercise focuses on the following concepts:

*   **Standard and General Equations of Ellipses**: Understanding the algebraic representation of ellipses centered at $(h, k)$.

*   **Geometric Properties**: Identifying the centre, vertices, co-vertices, and foci.

*   **Eccentricity**: Calculating the ratio $e = \frac{c}{a}$ which defines the "flatness" of the ellipse.

*   **Axes Analysis**: Determining the length and equations of the major and minor axes.

*   **Calculus Applications**: Using differentiation to locate extrema (vertices) on a closed curve.

---

# **Important Formulas**

Below are the key formulas used in this exercise:

| Feature | Horizontal Major Axis ($a > b$) | Vertical Major Axis ($b > a$) |
| :--- | :--- | :--- |
| **Standard Equation** | $\frac{(x-h)^2}{a^2} + \frac{(y-k)^2}{b^2} = 1$ | $\frac{(x-h)^2}{a^2} + \frac{(y-k)^2}{b^2} = 1$ |
| **Relationship** | $c^2 = a^2 - b^2$ | $c^2 = b^2 - a^2$ |
| **Eccentricity** | $e = \frac{c}{a}$ | $e = \frac{c}{b}$ |
| **Foci** | $(h \pm c, k)$ | $(h, k \pm c)$ |
| **Vertices** | $(h \pm a, k)$ | $(h, k \pm b)$ |

---

# **Summary**

This exercise provides a comprehensive review of the ellipse. It transitions from basic identification of properties (centre, foci, eccentricity) to the synthesis of equations from specific data points. A unique aspect of this exercise is the application of differentiation to find vertices, bridging the gap between coordinate geometry and calculus. Key strategies include completing the square to reach standard form and using the relationship $c^2 = a^2 - b^2$ to link the axes lengths to the focal distance.

---

<!-- note kx72zdwfhkwx5sg5q7c3jkmn8985pfkf | topic ms79hc2k2fw4bvdpzgph5ybygs85psak | status published -->
# 7.7 Exercise 7.7

# **Key Concepts**

This exercise focuses on the following concepts:

*   **Intersection of Lines and Ellipses:** Calculating the points where a linear equation meets an elliptical curve and determining the resulting chord length.

*   **Condition of Tangency:** Applying the algebraic condition $c^2 = a^2m^2 + b^2$ for a line to be tangent to an ellipse.

*   **Tangent Equations:** Constructing tangent lines using both the point form $(x_1, y_1)$ and the slope form ($m$).

*   **Normal Equations:** Deriving the equation of the normal line perpendicular to the tangent at a specific point.
*   **General Second-Degree Ellipses:** Handling tangent and normal calculations for shifted or non-standard ellipse equations.

*   **Reflection Property:** Understanding the geometric relationship between tangents and the lines connecting the point of tangency to the foci.

---

# **Important Formulas**

Below are the key formulas used in this exercise:

| Description | Formula |
| :--- | :--- |
| Standard Ellipse Equation | $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ |
| Condition of Tangency ($y = mx + c$) | $c^2 = a^2m^2 + b^2$ |

| Tangent at $(x_1, y_1)$ (Standard) | $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$ |
| Normal at $(x_1, y_1)$ (Standard) | $\frac{a^2x}{x_1} - \frac{b^2y}{y_1} = a^2 - b^2$ |

| Tangent in Slope Form | $y = mx \pm \sqrt{a^2m^2 + b^2}$ |
| General Tangent Substitution | $x^2 \to xx_1, \quad y^2 \to yy_1, \quad x \to \frac{x+x_1}{2}, \quad y \to \frac{y+y_1}{2}$ |

---

# **Summary**

This exercise covers the analytical geometry of the ellipse, specifically focusing on its linear interactions. Key strategies include using the **method of substitution** to find intersection points and chord lengths, applying the **tangency condition** to solve for unknown coefficients, and utilizing **point-form transformations** ($T=0$) to find tangents and normals for both standard and general second-degree equations.

A significant takeaway is the **reflection property**, which states that the tangent at any point on an ellipse bisects the external angle between the focal radii.

---

<!-- note kx73n0p8zd9v2z6cpmvj4gn36x85q39q | topic ms7a8pssbccdzab6snwv69cns585qd2x | status published -->
# 7.8 Exercise 7.8

# **Key Concepts**

This exercise focuses on the following concepts:

* **Hyperbola Fundamentals**: Understanding the geometric definition and standard forms of hyperbola equations.
* **Key Components**: Identifying the centre, vertices, co-vertices, and foci.

* **Transverse and Conjugate Axes**: Determining the equations and lengths of the principal axes.

* **Eccentricity**: Calculating the ratio $e = \frac{c}{a}$ and its relationship to the shape of the hyperbola.

* **Asymptotes**: Finding the equations of the asymptotes from the standard form.
* **Equation Derivation**: Constructing equations based on given foci, vertices, or asymptotes.
* **Calculus in Conics**: Using differentiation to locate vertices or the centre of a conic section.

---

# **Important Formulas**

Below are the key formulas used in this exercise:

| Property | Horizontal Transverse Axis | Vertical Transverse Axis |
| :--- | :--- | :--- |
| **Standard Equation** | $\frac{(x-h)^2}{a^2} - \frac{(y-k)^2}{b^2} = 1$ | $\frac{(y-k)^2}{a^2} - \frac{(x-h)^2}{b^2} = 1$ |

| **Foci-Vertex Relation** | $c^2 = a^2 + b^2$ | $c^2 = a^2 + b^2$ |

| **Eccentricity ($e$)** | $e = \frac{c}{a} = \frac{\sqrt{a^2+b^2}}{a} > 1$ | $e = \frac{c}{a} = \frac{\sqrt{a^2+b^2}}{a} > 1$ |

| **Vertices** | $(h \pm a,\, k)$ | $(h,\, k \pm a)$ |
| **Foci** | $(h \pm c,\, k)$ | $(h,\, k \pm c)$ |
| **Length of Transverse Axis** | $2a$ | $2a$ |
| **Length of Conjugate Axis** | $2b$ | $2b$ |
| **Asymptotes** | $y - k = \pm\dfrac{b}{a}(x - h)$ | $y - k = \pm\dfrac{a}{b}(x - h)$ |

---

# **Worked Example**

**Given:** $\dfrac{x^2}{9} - \dfrac{y^2}{4} = 1$

Identify: $a^2 = 9 \Rightarrow a = 3$, $b^2 = 4 \Rightarrow b = 2$, $c = \sqrt{9+4} = \sqrt{13}$.

| Element | Value |
| :--- | :--- |
| Centre | $(0, 0)$ |
| Vertices | $(\pm 3,\, 0)$ |
| Foci | $(\pm\sqrt{13},\, 0)$ |
| Eccentricity | $e = \dfrac{\sqrt{13}}{3}$ |
| Asymptotes | $y = \pm\dfrac{2}{3}x$ |

---

# **Summary**

This exercise provides a comprehensive review of hyperbolas. It transitions from basic identification of properties from standard equations to the more complex task of deriving equations from specific geometric constraints. A notable strategy included is the use of differentiation to find vertices, which is particularly useful for hyperbolas not centered at the origin or those expressed in general second-degree forms.

Key mastery involves understanding the relationship between the parameters $a$, $b$, and $c$, and being able to write asymptote equations directly from the standard form.

---

<!-- note kx7cn4w0qyabcz718hdqxtvw2985pw8r | topic ms7644rzs3a2xsa0rrbehg86y985q7zn | status published -->
# 7.9 Exercise 7.9

# **Key Concepts**

This exercise focuses on the following concepts:

*   **Intersection of Lines and Hyperbolas:** Calculating chord length using the distance formula and substitution.

*   **Condition of Tangency:** Applying the condition $c^2 = a^2m^2 - b^2$ for a line $y = mx + c$ to be tangent to a hyperbola.

*   **Tangent Equations:** Determining equations of tangents based on slope (parallel or perpendicular to given lines).

*   **Point Form Equations:** Using the $T=0$ method to find tangents and normals at specific points $(x_1, y_1)$.

*   **Shifted Conics:** Handling hyperbolas with translated centers $(h, k)$.

*   **Geometric Properties:** Understanding the reflective property of the hyperbola involving focal radii.

*   **Point of Contact:** Identifying the specific coordinate where a tangent touches the curve.

---

# **Important Formulas**

Below are the key formulas used in this exercise:

| Description | Formula |
| :--- | :--- |
| Standard Hyperbola | $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ |
| Condition of Tangency | $c^2 = a^2m^2 - b^2$ |
| Equation of Tangent (Slope $m$) | $y = mx \pm \sqrt{a^2m^2 - b^2}$ |
| Equation of Tangent at $(x_1, y_1)$ | $\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1$ |
| Equation of Normal at $(x_1, y_1)$ | $\frac{a^2x}{x_1} + \frac{b^2y}{y_1} = a^2 + b^2$ |
| Point of Contact | $(\pm \frac{a^2m}{c}, \pm \frac{b^2}{c})$ |

---

# **Summary**

This exercise focuses on the linear properties of hyperbolas, specifically tangents and normals. The primary strategy involves converting general second-degree equations into standard or shifted forms to identify $a^2$ and $b^2$. For slope-related problems, the condition $c^2 = a^2m^2 - b^2$ is the most efficient tool. For problems involving specific points, the substitution method ($x^2 \to xx_1$, $y^2 \to yy_1$, etc.) provides the tangent equation directly. A key learning is the geometric property that the tangent at any point bisects the angle between the focal radii.

---

<!-- note kx7cje5cs69zxn2wwnmzt4q0w185qv4d | topic ms78v2ynfbhykybghjmpewjxax85qz8f | status published -->
# 7.10 Exercise 7.10

# **Key Concepts**

This exercise focuses on **real-world applications** of conic sections:

- **Circle** — signal range, locus of equidistant points
- **Parabola** — reflective dishes, projectile trajectories
- **Ellipse** — planetary orbits, whispering galleries
- **Hyperbola** — navigation systems (LORAN), cooling tower cross-sections
- Geometric properties: foci, directrices, vertices, and eccentricity
- Locus problems and coordinate geometry

---

# **Important Formulas**

## Circle
$$( x - h )^2 + ( y - k )^2 = r^2$$

A point $(x_1, y_1)$ is within signal range $r$ of a tower at $(h, k)$ if:
$$\sqrt{(x_1 - h)^2 + (y_1 - k)^2} \leq r$$

## Parabola (Standard Forms)
$$y^2 = 4ax \quad \text{(opens right)} \qquad x^2 = 4ay \quad \text{(opens up)}$$

For a parabolic dish with vertex at the origin, depth $c$, and half-diameter $d/2$, the focus (microphone position) is found by substituting $(c,\, d/2)$ into $y^2 = 4ax$ and solving for $a$.

## Ellipse
$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \quad \text{where} \quad c^2 = a^2 - b^2, \quad e = \frac{c}{a} < 1$$

**Orbital distances** (Sun at one focus):
- Perihelion (minimum distance) $= a - c$
- Aphelion (maximum distance) $= a + c$

## Hyperbola
$$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 \quad \text{where} \quad c^2 = a^2 + b^2, \quad e = \frac{c}{a} > 1$$

**Navigation (LORAN):** The constant difference in signal arrival times gives:
$$2a = v \times \Delta t$$
where $v$ is signal speed and $\Delta t$ is the time delay.

**Hyperbolic cross-section width:** For a pillar with equation $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$ and total height $H$, substitute $y = H/2$ and solve for $x$; the width at the top is $2x$.

**Circumference and Linear Speed:**
$$C = 2\pi r$$
$$\text{Linear speed} = \frac{2\pi r \times n}{t}$$
where $n$ = number of revolutions and $t$ = time.

---

# **Summary**

This exercise demonstrates practical applications of conic sections across physics, engineering, and architecture:

| Conic | Application |
|-------|-------------|
| Circle | Signal tower coverage area |
| Parabola | Reflective dish (microphone at focus), projectile path |
| Ellipse | Planetary orbits, whispering galleries |
| Hyperbola | LORAN navigation, cooling tower cross-sections |

Key skills: translating physical constraints into standard conic equations, using eccentricity to relate parameters, and applying geometric properties (foci, directrices) to solve for unknown distances and positions.