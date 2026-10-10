<!-- note kx7bfcs5b3d78gphxxccxt3tdx85qhjm | topic ms7bs23ec0rja2m0d76qhs76b585prg2 | status published -->
# 4.1 Exercise 4.1

# **Key Concepts**

This exercise focuses on the following concepts:

* **Order of a Differential Equation**: The highest order derivative present in the equation.
* **Degree of a Differential Equation**: The power of the highest order derivative, provided the equation is a polynomial in its derivatives.
* **Elimination of Arbitrary Constants**: The process of forming a differential equation by differentiating a general solution and substituting constants.
* **Verification of Solutions**: Checking if a given function satisfies a differential equation by calculating its derivatives and substituting them back into the equation.

---

# **Important Formulas**

Below are the key formulas used in this exercise:

| Concept | Definition / Formula |
| :--- | :--- |
| **Order** | Highest $n$ in $\frac{d^n y}{dx^n}$ |
| **Degree** | Power $k$ in $\left(\frac{d^n y}{dx^n}\right)^k$ (after removing radicals) |
| **Solution Verification** | Substitute $y, y', y'', \dots$ into $F(x, y, y', \dots) = 0$ |

---

# **Summary**

This exercise introduces the foundational properties of differential equations. Key learnings include identifying the **order** (highest derivative) and **degree** (power of the highest derivative) of an equation. It also covers the relationship between general solutions and differential equations, specifically how to eliminate arbitrary constants through differentiation and how to verify if a specific function is a valid solution to a given differential equation.

---

<!-- note kx7dd50m0qkmv4anxnz6zp6fy185q9hy | topic ms7bdfj01g53mt1se5c0f6x6ph85p2af | status published -->
# 4.2 Exercise 4.2

# **Key Concepts**

This exercise focuses on the following concepts:

*   **Separation of Variables**: The primary technique for solving first-order differential equations by grouping all $y$ terms with $dy$ and all $x$ terms with $dx$.
*   **First-Order Ordinary Differential Equations (ODEs)**: Equations involving the first derivative of a function.
*   **General vs. Particular Solutions**: Finding the family of solutions (including constant $C$) versus finding a specific solution using initial conditions.
*   **Initial Value Problems (IVP)**: Using a given point $(x_0, y_0)$ to solve for the constant of integration.
*   **Integration Techniques**: Application of power rules, exponential integration, trigonometric integration, and integration by parts.

---

# **Important Formulas**

Below are the key formulas used in this exercise:

| Concept | Formula |
| :--- | :--- |
| **Separable Form** | $\frac{dy}{dx} = f(x)g(y) \implies \frac{1}{g(y)} dy = f(x) dx$ |
| **General Solution** | $\int \frac{1}{g(y)} dy = \int f(x) dx + C$ |
| **Exponent Laws** | $e^{A+B} = e^A \cdot e^B$ |
| **Trig Identity** | $\cot y = \frac{\cos y}{\sin y}$ |

---

# **Summary**

This exercise covers the fundamental method of **Separation of Variables** for solving first-order differential equations. The general strategy involves algebraic manipulation to isolate variables, followed by integration of both sides. A significant portion of the exercise focuses on **Initial Value Problems (IVPs)**, where students must first find the general solution and then substitute the given initial values to determine the specific value of the integration constant $C$. Key challenges include identifying the correct integration technique (such as $u$-substitution or integration by parts) once the variables are separated.

---

<!-- note kx75rc64n7nkvzqf84hv3ngqj985pemd | topic ms7bzfyjh7f8mj0ne3dse6swb185qkpg | status published -->
# 4.3 Exercise 4.3

# **Key Concepts**

This exercise focuses on the following concepts:

- Homogeneous functions and their definition via scaling property
- Degree of homogeneity ($n$ where $f(tx,ty) = t^n f(x,y)$)
- Homogeneous differential equations (first-order)
- Substitution method for solving homogeneous ODEs ($v = \frac{y}{x}$ or $v = \frac{x}{y}$)
- Transformation of homogeneous ODEs into separable form
- Initial value problems (IVP) involving homogeneous differential equations
- Integration techniques after variable substitution

---

# **Important Formulas**

Below are the key formulas used in this exercise:

**Homogeneous Function Definition:**
$$f(tx, ty) = t^n f(x, y)$$
where $n$ is the degree of homogeneity.

**Substitution for Homogeneous ODEs:**
When $y = vx$ (where $v = \frac{y}{x}$):
$$\frac{dy}{dx} = v + x\frac{dv}{dx}$$

When $x = vy$ (where $v = \frac{x}{y}$):
$$\frac{dx}{dy} = v + y\frac{dv}{dy}$$

**General Form of Homogeneous ODE:**
$$\frac{dy}{dx} = \frac{f_1(x,y)}{f_2(x,y)}$$
where $f_1$ and $f_2$ are homogeneous functions of the same degree.

---

# **Summary**

This exercise covers the identification of homogeneous functions using the scaling property $f(tx, ty) = t^n f(x, y)$ to determine the degree $n$. It progresses to solving homogeneous differential equations through the substitution $y = vx$ (or $x = vy$), which reduces the equation to separable variables. The exercise emphasizes algebraic manipulation to recognize homogeneous forms, proper application of substitutions, and handling initial value problems by determining constants of integration from given conditions. Common patterns include rational functions of $\frac{y}{x}$ and terms involving $\sqrt{xy}$ or $e^{y/x}$.

---

<!-- note kx7fqmx7hfd42m3bhgxn837cm585p8hz | topic ms760p19m743mpsccb168zva1185p8th | status published -->
# 4.4 Exercise 4.4

# **Key Concepts**

This exercise focuses on the following concepts:

*   **Malthusian Growth Model:** Modeling population increases where the rate of change is proportional to the current population.
*   **Newton's Law of Cooling:** Describing the rate of change of temperature of an object relative to its surroundings.
*   **Exponential Growth and Decay:** General applications of first-order differential equations to biology and physics.
*   **Radioactive Disintegration:** Modeling the decay of substances over time.
*   **Kinematics:** Using differential equations to describe the velocity and position of an object under the influence of gravity.

---

# **Important Formulas**

Below are the key formulas used in this exercise:

**Exponential Growth and Decay**
$$\frac{dy}{dt} = ky \implies y(t) = y_0 e^{kt}$$

**Newton's Law of Cooling**
$$\frac{dT}{dt} = k(T - T_s)$$
*(Where $T$ is the object temperature and $T_s$ is the surrounding temperature)*

**Radioactive Decay**
$$\frac{dA}{dt} = -kA$$

**Equations of Motion**
$$\frac{dv}{dt} = -g$$
$$\frac{ds}{dt} = v$$

---

# **Summary**

This exercise focuses on the practical application of first-order differential equations to model real-world scenarios. The primary strategy involves translating verbal descriptions of rates—such as "proportional to the amount present"—into mathematical equations. Key learnings include solving initial value problems to find constants of proportionality and using those models to predict future states in population dynamics, thermodynamics, and physics.