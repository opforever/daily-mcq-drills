<!-- note kx76jncnbgq0rxxmwsm1v4v2s185qn6f | topic ms739166ywgc4de28zx770kfqn85pks7 | status published -->
# 5.1 Exercise 5.1

# **Key Concepts**

This exercise focuses on the following concepts:

- Displacement-time graphs and their interpretation

- Velocity-time graphs and their interpretation

- Distance, speed, and time relationships
- Acceleration and deceleration in linear motion

- Constant velocity and periods of rest
- Calculating displacement from velocity-time graphs (area under curve)

- Determining velocity from displacement-time graphs (gradient)

---

# **Important Formulas**

Below are the key formulas used in this exercise:

**Distance, Speed, and Time:**
$$v = \frac{d}{t} \quad \text{or} \quad d = v \times t \quad \text{or} \quad t = \frac{d}{v}$$

**Average Speed:**
$$\text{Average Speed} = \frac{\text{Total Distance}}{\text{Total Time}}$$

**Acceleration:**
$$a = \frac{v - u}{t}$$

Where $u$ = initial velocity, $v$ = final velocity, $t$ = time interval

**Graphical Relationships:**

| Graph Type | Gradient Represents | Area Under Curve Represents |
| :--- | :--- | :--- |
| Displacement-Time | Velocity | — |
| Velocity-Time | Acceleration | Displacement |

---

# **Summary**

This exercise covers linear motion analysis using both algebraic methods and graphical interpretation. Key skills include constructing and interpreting displacement-time and velocity-time graphs, calculating distance, speed, and acceleration for objects with constant velocity or uniform acceleration, and analyzing multi-stage journeys involving periods of motion, rest, and return trips. Emphasis is placed on understanding the relationships between graphical features (gradients and areas) and physical quantities: velocity equals the gradient of a displacement-time graph, while displacement equals the area under a velocity-time graph.

---

<!-- note kx7d1qh2d05axx7bgwy4aa3jj185q6fm | topic ms7a158vd1fnrx8ydqbyfmrry985qbb2 | status published -->
# 5.2 Exercise 5.2

# **Key Concepts**

This exercise focuses on the following concepts:

- Rectilinear motion (motion along a straight line)
- Projectile motion under gravity
- Relationships between position $s(t)$, velocity $v(t)$, and acceleration $a(t)$
- Differentiation of position to find velocity and acceleration
- Integration of acceleration to find velocity and position

- Finding when a particle is at rest ($v=0$)
- Determining maximum height or extreme positions

- Calculating displacement vs. total distance traveled
- Constant acceleration kinematic equations (SUVAT equations)

---

# **Important Formulas**

Below are the key formulas used in this exercise:

**Kinematics Relationships:**
$$v = \frac{ds}{dt} \quad \text{(Velocity is the derivative of position)}$$
$$a = \frac{dv}{dt} = \frac{d^2s}{dt^2} \quad \text{(Acceleration is the derivative of velocity)}$$

**Integration Formulas:**
$$v = \int a \, dt \quad \text{(Velocity from acceleration)}$$

$$s = \int v \, dt \quad \text{(Position from velocity)}$$

**Distance and Displacement:**
$$\text{Displacement} = \int_{t_1}^{t_2} v(t) \, dt$$
$$\text{Total Distance} = \int_{t_1}^{t_2} |v(t)| \, dt$$

**Constant Acceleration Equations:**
$$v = u + at$$
$$s = ut + \frac{1}{2}at^2$$
$$v^2 = u^2 + 2as$$

**Projectile Motion:**
$$h(t) = h_0 + v_0t - \frac{1}{2}gt^2 \quad \text{(where $g \approx 32$ ft/s$^2$ or $9.8$ m/s$^2$)}$$

---

# **Summary**

This exercise covers the application of calculus to kinematics problems involving particles moving along a straight line and projectile motion. The key strategy involves understanding the fundamental relationships: differentiation connects position $\to$ velocity $\to$ acceleration, while integration reverses this process. Common problem types include finding when objects are at rest (solve $v=0$), determining maximum height or position (find critical points of $s(t)$ or when $v=0$), calculating total distance traveled (integrate $|v|$ between direction changes), and distinguishing between displacement and total distance. For constant acceleration problems, standard kinematic equations apply, while variable acceleration requires integration techniques.

---

<!-- note kx79fwstmnqdzj0h4a0fk2w8f585pkjz | topic ms7bn3922te0ztsk0kn6xsrk7s85pyt3 | status published -->
# 5.3 Exercise 5.3 — Vector-Valued Functions: Velocity, Acceleration & Speed

# **Exercise 5.3 — Vector-Valued Functions: Velocity, Acceleration & Speed**

---

# **Key Concepts**

This exercise focuses on the following concepts:

- **Vector-valued position functions** $\mathbf{r}(t)$

- **Domain and range of vector functions** (intersection of component domains)

- **Velocity** as the derivative of position: $\mathbf{v}(t) = \mathbf{r}'(t)$

- **Acceleration** as the derivative of velocity: $\mathbf{a}(t) = \mathbf{v}'(t) = \mathbf{r}''(t)$

- **Speed** as a scalar-valued magnitude function $|\mathbf{v}(t)|$

- **Differentiation of vector functions** (component-wise)

---

# **Important Formulas**

## Kinematic Vectors

$$\mathbf{v}(t) = \mathbf{r}'(t) = \frac{d\mathbf{r}}{dt}$$

$$\mathbf{a}(t) = \mathbf{v}'(t) = \mathbf{r}''(t) = \frac{d^2\mathbf{r}}{dt^2}$$

## Speed (Scalar Magnitude of Velocity)

$$|\mathbf{v}(t)| = \sqrt{[x'(t)]^2 + [y'(t)]^2 + [z'(t)]^2}$$

*(For 2D motion, omit the $z$-component.)*

---

# **Worked Example**

Let $\mathbf{r}(t) = t^3\hat{i} + e^{-2t}\hat{j} + \sin 2t\,\hat{k}$.

**Step 1 — Velocity vector:**
$$\mathbf{v}(t) = \mathbf{r}'(t) = 3t^2\hat{i} - 2e^{-2t}\hat{j} + 2\cos 2t\,\hat{k}$$

**Step 2 — Acceleration vector:**
$$\mathbf{a}(t) = \mathbf{v}'(t) = 6t\,\hat{i} + 4e^{-2t}\hat{j} - 4\sin 2t\,\hat{k}$$

**Step 3 — Speed at any time $t$:**
$$|\mathbf{v}(t)| = \sqrt{(3t^2)^2 + (-2e^{-2t})^2 + (2\cos 2t)^2} = \sqrt{9t^4 + 4e^{-4t} + 4\cos^2 2t}$$

---

# **Summary**

This exercise covers the analysis of particle motion using vector-valued functions:

1. **Domain** of $\mathbf{r}(t)$ = intersection of domains of all component functions.
2. **Velocity**: differentiate each component of $\mathbf{r}(t)$ once.
3. **Acceleration**: differentiate each component of $\mathbf{r}(t)$ twice.
4. **Speed**: take the magnitude of the velocity vector using the Pythagorean formula.