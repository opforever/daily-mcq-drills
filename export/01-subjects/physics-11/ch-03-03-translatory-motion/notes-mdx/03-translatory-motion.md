<!-- note kx75hsmy3v08kv3dehqqjt8x6n85pjra | topic ms75jkyqd852a5f5bsan057pjd85pm9g | status published -->
# Acceleration

Acceleration is the measure of how quickly an object's velocity changes over time. Since velocity is a <InlineNoteTag label="Scalar And Vector Quantities" notePath="physics-11/scalar-and-vector-quantities" /> (having both magnitude and direction), acceleration occurs whenever an object speeds up, slows down, or changes its direction of motion. It is a fundamental concept in kinematics, the branch of physics that describes motion without considering its causes.
## Definition and Formula

Acceleration is defined as the rate of change of velocity with respect to time.

Mathematically, average acceleration is expressed as:

$$\vec{a}_{avg} = \frac{\Delta \vec{v}}{\Delta t} = \frac{\vec{v}_f - \vec{v}_i}{t_f - t_i}$$

Where:

- $\vec{v}_f$ is the final velocity
- $\vec{v}_i$ is the initial velocity
- $\Delta t$ is the time interval

- **Vector Quantity**: Acceleration has both magnitude and direction, making it a vector quantity.
- **SI Unit**: The standard unit for acceleration is meters per second squared ($\text{m/s}^2$). In terms of base SI units, this is expressed as $\text{m s}^{-2}$.
- **Dimensions**: The <InlineNoteTag label="Dimensions" notePath="physics-11/dimensions" /> of acceleration are $[LT^{-2}]$.

## Types of Acceleration

**Average Acceleration**: The total change in velocity divided by the total time interval. It gives the overall change in velocity over a period but does not describe motion at any specific instant.

**Instantaneous Acceleration**: The acceleration of an object at a specific instant in time. It is obtained by taking the limit of average acceleration as the time interval approaches zero:

$$\vec{a}_{inst} = \lim_{\Delta t \to 0} \frac{\Delta \vec{v}}{\Delta t}$$

**Uniform Acceleration**: An object experiences uniform (or constant) acceleration when its velocity changes by equal amounts in equal intervals of time. Under uniform acceleration, instantaneous acceleration equals average acceleration at all times.

**Variable Acceleration**: An object has variable acceleration when its velocity changes by unequal amounts in equal intervals of time.

## Direction of Acceleration

The direction of the acceleration vector determines whether an object is speeding up or slowing down.

- **Speeding Up**: If an object is speeding up, its acceleration is in the **same direction** as its velocity.
- **Slowing Down**: If an object is slowing down, its acceleration is in the **opposite direction** to its velocity. This type of acceleration is called **deceleration** or **retardation**.

## Positive and Negative Acceleration

The sign of acceleration depends on the chosen coordinate system. Negative acceleration does not always mean the object is slowing down.

| Scenario | Velocity | Acceleration | Result |
| :--- | :--- | :--- | :--- |
| Object moving in positive direction and speeding up | Positive | Positive | Speeding up |
| Object moving in positive direction and slowing down | Positive | Negative | Slowing down (Deceleration) |
| Object moving in negative direction and speeding up | Negative | Negative | Speeding up |
| Object moving in negative direction and slowing down | Negative | Positive | Slowing down (Deceleration) |

## Graphical Representation

The motion of an object can be analyzed using graphs:
- **Velocity-Time (v-t) Graph**: The slope of the velocity-time graph represents the acceleration of the object: $$a = \frac{\Delta v}{\Delta t}$$
- **Acceleration-Time (a-t) Graph**: The area under an acceleration-time graph represents the change in velocity: $$\Delta v = a \cdot \Delta t$$

## Equations of Motion for Uniform Acceleration

When acceleration is **constant (uniform)**, the following three equations of motion can be derived and applied. Here $v_i$ is initial velocity, $v_f$ is final velocity, $a$ is constant acceleration, $s$ is displacement, and $t$ is time:

$$v_f = v_i + at \quad \text{...(1)}$$

$$s = v_i t + \frac{1}{2}at^2 \quad \text{...(2)}$$

$$v_f^2 = v_i^2 + 2as \quad \text{...(3)}$$

> **Important**: These equations are valid **only** for uniform (constant) acceleration in a straight line.

<WorkedExample title="Worked examples">



</WorkedExample>


**Example 1, Zero velocity with non-zero acceleration**

*Question*: Can an object have zero velocity but non-zero acceleration?

*Answer*: Yes. At the very peak of its trajectory, a ball thrown straight upward has instantaneous velocity equal to zero, but it is still accelerating downward due to gravity (approximately $9.8 \text{ m s}^{-2}$). This demonstrates that acceleration and velocity are independent quantities.

**Example 2, Applying equations of motion**

*Question*: A car starts from rest and accelerates uniformly at $3 \text{ m s}^{-2}$. Find (a) its velocity after $4\text{ s}$, and (b) the distance covered in that time.

*Solution*:

Given: $v_i = 0$, $a = 3 \text{ m s}^{-2}$, $t = 4\text{ s}$

(a) Using equation (1):
$$v_f = v_i + at = 0 + (3)(4) = 12 \text{ m s}^{-1}$$

(b) Using equation (2):
$$s = v_i t + \frac{1}{2}at^2 = 0 + \frac{1}{2}(3)(4)^2 = 24 \text{ m}$$


---

<!-- note kx70evdjr3d00778dv5vhqv3zn85q329 | topic ms71zysvnaq7f5f94r474r2bh185p52p | status published -->
# Displacement


## What Displacement Describes

Displacement is a fundamental concept in kinematics that describes an object's change in position. It is defined as the shortest distance between the initial and final points of an object's motion, combined with the direction of that change. As a vector quantity, displacement provides a more complete picture of motion than the scalar quantity of distance.
## Definition and Vector Nature

Displacement ($\vec{d}$) is a **vector quantity** representing the overall change in an object's position. It has two key components:

- **Magnitude**: The length of the straight line connecting the starting point to the ending point.
- **Direction**: The direction of the straight line from the start point to the end point.

The **SI unit** for displacement is the **meter (m)** and its dimensions are $[L]$.

## Displacement versus Distance

This is one of the most important distinctions in kinematics.

- **Distance** is a **scalar** quantity that measures the total path length covered during a journey. It only has magnitude.
- **Displacement** is a **vector** quantity that measures the net change in position. It is independent of the path taken.

**Example**:
A person walks 4 meters East and then 3 meters North.

- **Distance traveled**: $4\ \text{m} + 3\ \text{m} = 7\ \text{meters}$
- **Displacement**: The magnitude is $\sqrt{4^2 + 3^2} = 5\ \text{meters}$. The direction is Northeast. The displacement is **5 meters, Northeast**.

<InlineNoteTag label="Scalar And Vector Quantities" notePath="physics-11/scalar-and-vector-quantities" />

## Representation using Position Vectors

Displacement can be precisely calculated as the difference between an object's final and initial position vectors. A **position vector** is a vector that represents the location of a point relative to an origin.

- Let $\vec{r}_1$ be the initial position vector (from the origin to the start point).
- Let $\vec{r}_2$ be the final position vector (from the origin to the end point).

The displacement vector $\Delta\vec{r}$ (or $\vec{d}$) is given by:

$$
\Delta\vec{r} = \vec{r}_2 - \vec{r}_1
$$

This equation finds the vector that connects the tip of the initial position vector to the tip of the final position vector.

## Zero and Negative Displacement

- **Zero Displacement**: An object can have zero displacement even if it has traveled a significant distance. This occurs when the object returns to its starting point, such as completing one lap around a circular track. Here, the initial and final positions are the same, so $\Delta\vec{r} = 0$.

- **Negative Displacement**: The sign of displacement indicates direction relative to a chosen coordinate system. Negative displacement means the object moved in the negative direction (e.g., left, down, or south) from its starting point.

## Key Questions

**Q:** Can the magnitude of displacement be greater than the distance traveled?

**A:** No. The magnitude of displacement is the shortest distance between two points, so it can only be less than or, in the case of straight-line motion in one direction, equal to the distance traveled.

**Q:** How is displacement represented graphically?

**A:** Displacement is represented by an arrow drawn from the object's initial position to its final position. The length of the arrow is proportional to the magnitude of the displacement, and the arrowhead indicates the direction.

## Summary

- **Displacement** is a **vector** quantity that describes the change in an object's position.
- It is the shortest path from the initial to the final point, including direction.
- It is calculated as the final position vector minus the initial position vector: $\Delta\vec{r} = \vec{r}_2 - \vec{r}_1$.
- Displacement is **path-independent**, unlike distance.

| Feature | Displacement | Distance |
| :--- | :--- | :--- |
| **Type** | Vector | Scalar |
| **Definition** | Change in position. | Total path length covered. |
| **Direction** | Has a specific direction. | Has no direction. |
| **Path Dependence** | Independent of the path taken. | Dependent on the path taken. |
| **Zero Value** | Can be zero if start and end points are the same. | Is only zero if there is no motion. |

Understanding displacement is crucial as it forms the basis for defining other key vector quantities in physics, such as velocity and acceleration.

---

<!-- note kx76b63qvpx97dj2n0mj8tzst985ppb9 | topic ms79j2c12ggdpgk7ppa0ax4myh85qh2w | status published -->
# Elastic and Inelastic Collisions

A **collision** is an interaction between two or more objects in which they exert forces on each other for a short time. Collisions are classified based on whether kinetic energy is conserved.
## Elastic Collision

An **elastic collision** is one in which both the total **linear momentum** and the total **kinetic energy** of the system are conserved. No kinetic energy is lost to heat, sound, or deformation.

Perfectly elastic collisions are an idealization, but collisions between billiard balls, steel ball bearings, and subatomic particles are very close to perfectly elastic.

<CaptionedImage src="kg27gk9swdbv9dyzhj5n04bh218dggvz" alt="Elastic Collision Diagram" />

### Conservation Laws for Elastic Collisions

For an elastic collision between two masses $m_1$ and $m_2$ with initial velocities $u_1$ and $u_2$ and final velocities $v_1$ and $v_2$:

**Conservation of Linear Momentum:**
$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$

**Conservation of Kinetic Energy:**
$$\frac{1}{2} m_1 u_1^2 + \frac{1}{2} m_2 u_2^2 = \frac{1}{2} m_1 v_1^2 + \frac{1}{2} m_2 v_2^2$$

### Derivation of Final Velocities

By algebraically manipulating the two conservation equations, the key intermediate result is that the **relative speed of approach equals the relative speed of separation**:

$$u_1 - u_2 = -(v_1 - v_2) = v_2 - v_1$$

Using this with the momentum equation gives the final velocities:

**Final Velocity of $m_1$:**
$$v_1 = \left(\frac{m_1 - m_2}{m_1 + m_2}\right)u_1 + \left(\frac{2m_2}{m_1 + m_2}\right)u_2$$

**Final Velocity of $m_2$:**
$$v_2 = \left(\frac{2m_1}{m_1 + m_2}\right)u_1 + \left(\frac{m_2 - m_1}{m_1 + m_2}\right)u_2$$

### Special Cases of Elastic Collisions

| **Case** | **Conditions** | **Final Velocities** | **Outcome** |
| :--- | :--- | :--- | :--- |
| Equal masses | $m_1 = m_2$ | $v_1 = u_2$, $v_2 = u_1$ | Velocities exchanged |
| Equal masses, target at rest | $m_1 = m_2$, $u_2 = 0$ | $v_1 = 0$, $v_2 = u_1$ | First stops, second moves off |
| Light hits massive (at rest) | $m_1 \ll m_2$, $u_2 = 0$ | $v_1 \approx -u_1$, $v_2 \approx 0$ | Light body bounces back |
| Massive hits light (at rest) | $m_1 \gg m_2$, $u_2 = 0$ | $v_1 \approx u_1$, $v_2 \approx 2u_1$ | Light body propelled at $2u_1$ |

---

## Inelastic Collision

An **inelastic collision** is one in which total linear momentum is conserved, but total kinetic energy is **not** conserved. Some kinetic energy is converted into other forms such as heat, sound, or deformation energy.

> **Key principle (SLO P-11-B-13):** In any closed (isolated) system, total momentum is *always* conserved regardless of the type of collision. However, kinetic energy may decrease because it can be transformed into internal energy (heat, deformation). Total energy is still conserved, it is only *kinetic* energy that changes form.

### Perfectly Inelastic Collision

A **perfectly inelastic collision** is the extreme case where the two objects **stick together** after impact and move with a **common velocity $V$**. Kinetic energy loss is maximum in this case.

Applying conservation of momentum:
$$m_1 u_1 + m_2 u_2 = (m_1 + m_2)V$$
$$V = \frac{m_1 u_1 + m_2 u_2}{m_1 + m_2}$$

**Kinetic energy lost:**
$$\Delta KE = \left(\frac{1}{2}m_1 u_1^2 + \frac{1}{2}m_2 u_2^2\right) - \frac{1}{2}(m_1 + m_2)V^2$$

This lost kinetic energy appears as heat, sound, or permanent deformation.

### Why Momentum is Always Conserved but KE May Not Be

Momentum conservation follows directly from Newton's Third Law: the internal forces between colliding objects are equal and opposite, so they cancel out and the total momentum of the system does not change. Kinetic energy, however, can be converted to other energy forms (heat, sound, deformation) through internal forces, so it is not necessarily conserved.
## Comparison: Elastic vs Inelastic Collisions

| **Property** | **Elastic** | **Inelastic** | **Perfectly Inelastic** |
| :--- | :--- | :--- | :--- |
| Momentum conserved? | ✓ Yes | ✓ Yes | ✓ Yes |
| Kinetic energy conserved? | ✓ Yes | ✗ No (partial loss) | ✗ No (maximum loss) |
| Objects stick together? | No | No | Yes |
| Example | Billiard balls | Car crash | Clay balls colliding |

---


---

<!-- note kx719t8p5p3wc0w9764nfz0xpd85q5ma | topic ms7ek7rfjmy9a48q1jm9m4r9ps85qs02 | status published -->
# Equations of Uniformly Accelerated Motion

The equations of motion are a set of fundamental formulas in kinematics that describe the relationship between displacement, velocity, acceleration, and time for an object moving with **constant acceleration** in a straight line. These equations allow us to predict the state of an object's motion at any given time, provided the acceleration is uniform.

The five variables involved are:
*   **s**: displacement
*   **vᵢ**: initial velocity
*   **vƒ**: final velocity
*   **a**: constant acceleration
*   **t**: time interval
## Derivation of the Equations

The three main equations of motion can be derived graphically from a **velocity-time (v-t) graph**. For an object with uniform acceleration, the v-t graph is a straight line.

*   The **slope** of the v-t graph represents **acceleration**.
*   The **area under** the v-t graph represents **displacement**.

Consider an object that accelerates from an initial velocity $v_i$ to a final velocity $v_f$ over a time interval $t$.

### 1. First Equation of Motion: Velocity-Time Relation

This equation relates the final velocity of an object to its initial velocity, acceleration, and the time elapsed.

**Formula**:
$$
v_f = v_i + at
$$

**Derivation**:
Acceleration (*a*) is defined as the slope of the velocity-time graph.
$$
\text{Slope} = a = \frac{\text{Change in Velocity}}{\text{Change in Time}} = \frac{v_f - v_i}{t}
$$
Rearranging this equation to solve for $v_f$, we get:
$$
at = v_f - v_i
$$
$$
v_f = v_i + at
$$

### 2. Second Equation of Motion: Displacement-Time Relation

This equation calculates the displacement of an object given its initial velocity, acceleration, and the time interval.

**Formula**:
$$
s = v_i t + \frac{1}{2} a t^2
$$

**Derivation**:
Displacement (*s*) is the total area under the v-t graph. This area can be seen as a trapezium. The area of a trapezium is given by:
$$
s = \text{Area} = \frac{1}{2} \times (\text{sum of parallel sides}) \times (\text{height})
$$
In our graph, the parallel sides are the initial velocity ($v_i$) and final velocity ($v_f$), and the height is time (*t*).
$$
s = \frac{1}{2}(v_i + v_f)t
$$
Now, we can substitute the expression for $v_f$ from the first equation of motion ($v_f = v_i + at$) into this area formula:
$$
s = \frac{1}{2}(v_i + (v_i + at))t
$$
$$
s = \frac{1}{2}(2v_i + at)t
$$
Distributing the *t* gives the final form:
$$
s = v_i t + \frac{1}{2} a t^2
$$

### 3. Third Equation of Motion: Velocity-Displacement Relation

<CaptionedImage src="kg214ckfm5gma81b5hcrb25xdx8dhjrx" alt="Velocity-Time Graph for Uniform Acceleration" />

This equation relates the final and initial velocities to acceleration and displacement, notably without requiring time.

**Formula**:
$$
2as = v_f^2 - v_i^2
$$

**Derivation**:
We start again with the formula for displacement as the area under the graph:
$$
s = \frac{1}{2}(v_i + v_f)t
$$
From the first equation of motion, we can express time as $t = \frac{v_f - v_i}{a}$. Substituting this expression for *t* into the displacement formula:
$$
s = \frac{1}{2}(v_f + v_i)\left(\frac{v_f - v_i}{a}\right)
$$
Multiplying the terms in the parentheses gives a difference of squares:
$$
s = \frac{v_f^2 - v_i^2}{2a}
$$
Rearranging this gives the final form:
$$
2as = v_f^2 - v_i^2
$$

To ensure these equations are physically valid, they must satisfy the **Principle of Homogeneity**, meaning the <InlineNoteTag label="Dimensions" notePath="physics-11/dimensions" /> on both sides of the equation must be identical.

## Summary

| **Equation Number** | **Formula** | **Variables Related** | **Variable Not Included** |
| :--- | :--- | :--- | :--- |
| **1st Equation** | $v_f = v_i + at$ | Velocity, Acceleration, Time | Displacement (s) |
| **2nd Equation** | $s = v_i t + \frac{1}{2} a t^2$ | Displacement, Velocity, Time | Final Velocity (vƒ) |
| **3rd Equation** | $2as = v_f^2 - v_i^2$ | Velocity, Acceleration, Displacement | Time (t) |

These equations form the bedrock of kinematics and are essential for solving problems involving objects moving with constant acceleration, from a falling apple to a launching rocket.


---

<!-- note kx7dwb07c66az1zqardmstpvy585pdha | topic ms7965zbz4wwjw79b4mjna7h6985qzt2 | status published -->
# Force Exerted by Water Striking a Wall

When a stream of water from a pipe strikes a surface like a wall, it exerts a continuous force. This phenomenon is a direct application of Newton's laws of motion. The force arises because the wall must change the momentum of the moving water, and according to Newton's third law, the water exerts an equal and opposite force back on the wall.
## Key Concepts and Derivation

To understand the force, we analyze the change in momentum of the water. This concept is closely related to <InlineNoteTag label="Scalar and Vector Quantities" notePath="physics-11/scalar-and-vector-quantities" /> as velocity and force are vector quantities.

### 1. Change in Momentum of the Water

Consider a small mass of water, $m$, moving with an initial velocity, $V$, that strikes a wall and comes to a complete stop.

**Initial Momentum ($p_i$)**: The momentum of the mass $m$ just before it hits the wall is:
$$p_i = mV$$

**Final Momentum ($p_f$)**: Since the water comes to rest, its final velocity is 0.
$$p_f = m(0) = 0$$

**Change in Momentum ($\Delta p$)**: The change in momentum of the water is:
$$\Delta p = p_f - p_i = 0 - mV = -mV$$

The negative sign indicates that the momentum has decreased in the direction of the initial motion.

### 2. Force Exerted by the Wall on the Water

According to Newton's Second Law of Motion, the force applied is equal to the rate of change of momentum. The force that the wall exerts on the water to stop it is:
$$F_{\text{on water}} = \frac{\Delta p}{\Delta t} = \frac{-mV}{\Delta t}$$

We can group the terms as:
$$F_{\text{on water}} = -\left(\frac{m}{\Delta t}\right)V$$

Here, the term $\left(\frac{m}{\Delta t}\right)$ represents the **mass flow rate**, the mass of water striking the wall per unit of time (e.g., in kg/s).

### 3. Force Exerted by the Water on the Wall

According to Newton's Third Law of Motion, for every action, there is an equal and opposite reaction. The force exerted by the water on the wall is the reaction force to the force exerted by the wall on the water.
$$F_{\text{on wall}} = -F_{\text{on water}}$$

Substituting the expression from the previous step:
$$F_{\text{on wall}} = -\left(-\left(\frac{m}{\Delta t}\right)V\right) = \left(\frac{m}{\Delta t}\right)V$$

**Final Formula**:

The force exerted by the water on the wall is the product of the mass flow rate and the velocity of the water.
$$\text{Force} = (\text{Mass Flow Rate}) \times (\text{Velocity})$$
## Example Calculation

**Problem**: Water flows from a fire hose at a rate of **3 kg/s** and strikes a wall with a velocity of **5 m/s**. The water comes to a complete stop upon impact. What is the force exerted on the wall?

**Solution**:

1. **Identify the given values**:
   - Mass Flow Rate $\left(\frac{m}{\Delta t}\right) = 3$ kg/s
   - Velocity ($V$) = 5 m/s

2. **Apply the formula**:
$$F = \left(\frac{m}{\Delta t}\right)V$$
$$F = (3 \text{ kg/s}) \times (5 \text{ m/s})$$
$$F = 15 \text{ kg} \cdot \text{m/s}^2 = 15 \text{ N}$$

The force exerted on the wall by the water is **15 Newtons**.

---




---

<!-- note kx73z9nzedpv16ra7vdpf6jb1585qqzy | topic ms7bf80wcpd0v7fnawmq4cdvc985qw2y | status published -->
# Impulse


## What Impulse Captures

In physics, **impulse** quantifies the overall effect of a force acting over a period of time. It is particularly useful for analyzing situations involving large forces that act for very short durations, such as a bat hitting a ball or a hammer striking a nail. Impulse is directly related to the change in an object's momentum.
## Definition and Formula

Impulse ($\vec{I}$) is defined as the product of the average force ($\vec{F}_{avg}$) acting on an object and the time interval ($\Delta t$) over which that force acts.

**Formula**:
$$
\vec{I} = \vec{F}_{avg} \times \Delta t
$$

- **Vector Quantity**: Since force is a vector, impulse is also a **vector quantity**, and its direction is the same as the direction of the average force.
- **Units**: The SI unit for impulse is the **Newton-second (N·s)**. In terms of base units, it is equivalent to $\text{kg} \cdot \text{m} \cdot \text{s}^{-1}$.
- **Dimensions**: The dimensions of impulse are $[MLT^{-1}]$, which are the same as the dimensions of momentum.

<InlineNoteTag label="Derived Units" notePath="physics-11/derived-units" />
<InlineNoteTag label="Dimensions" notePath="physics-11/dimensions" />

## The Impulse-Momentum Theorem

The most important relationship involving impulse is the **Impulse-Momentum Theorem**. This theorem states that the impulse applied to an object is equal to the change in that object's momentum ($\Delta \vec{p}$).

**Derivation**:

We start with Newton's Second Law of Motion:
$$
\vec{F} = m\vec{a}
$$

We know that acceleration ($\vec{a}$) is the rate of change of velocity:
$$
\vec{a} = \frac{\Delta \vec{v}}{\Delta t} = \frac{\vec{v}_f - \vec{v}_i}{\Delta t}
$$

Substituting this into Newton's Second Law:
$$
\vec{F} = m \left( \frac{\vec{v}_f - \vec{v}_i}{\Delta t} \right)
$$

Multiplying both sides by the time interval $\Delta t$:
$$
\vec{F} \Delta t = m(\vec{v}_f - \vec{v}_i)
$$

The left side is the definition of impulse, and the right side is the change in momentum ($m\vec{v}_f - m\vec{v}_i = \vec{p}_f - \vec{p}_i = \Delta \vec{p}$).

Therefore, we arrive at the **Impulse-Momentum Theorem**:
$$
\vec{I} = \Delta \vec{p}
$$

This confirms that the units of impulse (N·s) are equivalent to the units of momentum (kg·m/s).

## Graphical Representation

In a **Force vs. Time** graph, the **area under the curve** represents the impulse.

- For a **constant force**, this area is a simple rectangle ($F \times \Delta t$).
- For a **variable force**, the area under the curve represents the total impulse. This graphical method is very useful for visualizing the total effect of a force that changes over time, which is common in real-world collisions.

## Applications and Significance

The concept of impulse helps explain how the same change in momentum can be achieved in different ways:
$$
\vec{F}_{avg} \cdot \Delta t = \Delta \vec{p}
$$

| Scenario | Strategy | Effect |
|---|---|---|
| Karate chop breaking a board | Large $F$, short $\Delta t$ | Large impulse delivered quickly |
| Airbag in a car | Small $F$, long $\Delta t$ | Same $\Delta p$, reduced injury force |
| Bending knees on landing | Increases $\Delta t$ | Reduces average force on joints |
| Baseball glove padding | Increases $\Delta t$ | Reduces sting of catch |

- **Large Force, Short Time**: In a collision like a karate chop breaking a board, a very large force is applied for a very short time to produce the required change in momentum.
- **Small Force, Long Time**: To minimize the force of impact, the time of the collision can be extended. This is the principle behind **airbags** in cars, **bending your knees** when landing from a jump, and the **padding** in a baseball glove. In each case, $\Delta t$ is increased, which reduces $F_{avg}$ for the same change in momentum.

## Difference Between Impulse and Momentum

| Property | Momentum ($\vec{p}$) | Impulse ($\vec{I}$) |
|---|---|---|
| Definition | $\vec{p} = m\vec{v}$ | $\vec{I} = \vec{F}_{avg}\Delta t$ |
| Nature | State of a moving object at an instant | Change produced by a force over time |
| Role | The "effect" | The "cause" of change in momentum |
| Units | $\text{kg}\cdot\text{m}\cdot\text{s}^{-1}$ | N·s (equivalent) |

---

<!-- note kx76yeeb8g1xxn7fbte34mms0n85p3zp | topic ms75ahzf474zm0rszy430ntc8h85qj5n | status published -->
# The Law of Conservation of Linear Momentum


## What the Conservation Law Governs

The Law of Conservation of Linear Momentum is a fundamental principle in physics. It states that the total momentum of an isolated system remains constant. Within a system, momentum can be transferred from one object to another, but the total amount of momentum never changes. This principle is essential for analyzing the dynamics of collisions, explosions, and rocket propulsion.
## Statement of the Law

The Law of Conservation of Linear Momentum states:

> If no net external force acts on a system, the total linear momentum of that system remains constant.

## The Isolated System

This law applies only to an **isolated system**, which is a collection of objects that do not interact with anything external to the system. In practice, this means that external forces such as friction or air resistance are negligible compared to the internal forces between colliding objects.

## Mathematical Formulation

For an isolated system, the total initial momentum ($\vec{p}_{initial}$) equals the total final momentum ($\vec{p}_{final}$):

$$\vec{p}_{initial} = \vec{p}_{final}$$

This implies that the change in the system's total momentum is zero:

$$\Delta \vec{p}_{system} = 0$$

For a system of two colliding bodies with masses $m_1$ and $m_2$:

$$m_1 \vec{v}_{1} + m_2 \vec{v}_{2} = m_1 \vec{v}'_{1} + m_2 \vec{v}'_{2}$$

Where:
- $\vec{v}_{1}, \vec{v}_{2}$ represent initial velocities
- $\vec{v}'_{1}, \vec{v}'_{2}$ represent final velocities

## Derivation from Newton's Laws

The law of conservation of momentum is a direct consequence of Newton's Second and Third Laws. Consider two particles, $m_1$ and $m_2$, that collide.

1. During the collision, $m_1$ exerts a force $\vec{F}_{21}$ on $m_2$.
2. By Newton's Third Law, $m_2$ exerts an equal and opposite force $\vec{F}_{12}$ on $m_1$: $\vec{F}_{12} = -\vec{F}_{21}$.
3. From Newton's Second Law, force is the rate of change of momentum:
   $$\vec{F} = \frac{\Delta \vec{p}}{\Delta t}$$
4. Therefore: $\frac{\Delta \vec{p}_1}{\Delta t} = -\frac{\Delta \vec{p}_2}{\Delta t}$
5. This simplifies to $\Delta \vec{p}_1 + \Delta \vec{p}_2 = 0$, meaning the total change in momentum of the system is zero.

## Applications of Momentum Conservation

### 1. Collisions

In any collision (elastic or inelastic), as long as the system is isolated, the total momentum before the collision equals the total momentum after. This is the primary principle used to calculate the velocities of objects after they collide.

For elastic collisions in one dimension, the relative speed of approach before collision equals the relative speed of separation after collision. See <InlineNoteTag label="Elastic And Inelastic Collision" notePath="physics-11/elastic-and-inelastic-collision" /> for detailed treatment.

### 2. Explosions

When an object at rest explodes, its initial momentum is zero. To conserve momentum, the vector sum of the momenta of all fragments must also be zero. The fragments fly off in opposite directions.

**Example: A Bomb at Rest**
- Initial Momentum: $\vec{p}_i = 0$
- If it splits into two fragments, $A$ and $B$:
- Final Momentum: $\vec{p}_f = m_A \vec{v}_A + m_B \vec{v}_B = 0$
- This implies: $m_A \vec{v}_A = -m_B \vec{v}_B$

The fragments have equal and opposite momenta.

### 3. Recoil of a Gun

This is a classic example of momentum conservation during an explosion.
- **Before Firing**: The total momentum of the gun and bullet is zero.
- **After Firing**: The bullet moves forward with momentum $p_{bullet}$, and the gun moves backward with equal and opposite momentum ($-p_{gun}$) to keep total momentum zero:

$$m_{gun} \vec{v}_{gun} = -m_{bullet} \vec{v}_{bullet}$$

### 4. Rocket and Jet Propulsion

A rocket in space is an isolated system. To move forward, it expels hot gases backward at high velocity. The rocket gains forward momentum equal in magnitude to the backward momentum of the ejected gases, conserving total momentum of the system (rocket + fuel).




---

<!-- note kx75v2ejkr7ee7hk6r40g04x7985pmbp | topic ms7eec460bpwaxknmpkx2r1xb185qvaa | status published -->
# Momentum and Explosive Forces

Explosive forces are a dramatic example of the Law of Conservation of Momentum. An explosion is an event where a single object, initially at rest or in motion, breaks apart into multiple fragments due to strong internal forces. Even though the kinetic energy of the system increases dramatically, the total linear momentum of the system remains unchanged, provided there are no external forces acting on it.
## 1. The Principle of Momentum Conservation

For an isolated system (one with no net external forces), the total momentum before an event is equal to the total momentum after the event.

$$\vec{p}_{initial} = \vec{p}_{final}$$

In the case of an explosion, the forces involved are **internal** to the system (the object and its fragments). Therefore, the momentum of the entire system is conserved.

## 2. Explosion from a State of Rest

This is the simplest case to analyze. If an object is initially at rest, its total initial momentum is zero.

$$\vec{p}_{initial} = 0$$

After the explosion, the object breaks into multiple fragments, each with its own mass and velocity. According to the conservation of momentum, the vector sum of the momenta of all the fragments must still be zero.

$$\vec{p}_{final} = m_{1}\vec{v}_1 + m_{2}\vec{v}_2 + m_{3}\vec{v}_3 + \cdots = 0$$

**Example: A Bomb Exploding into Two Pieces**

If a stationary bomb explodes into two fragments, their momenta must be equal in magnitude and opposite in direction.

- Initial momentum: $\vec{p}_i = 0$
- Final momentum: $m_{1}\vec{v}_1 + m_{2}\vec{v}_2 = 0$
- This leads to: $m_{1}\vec{v}_1 = -m_{2}\vec{v}_2$

The lighter fragment will fly off with a much higher speed than the heavier fragment to ensure the momenta are balanced.

## 3. Recoil of a Rifle

The firing of a bullet from a rifle is a perfect example of this principle.

- **System**: The rifle and the bullet.
- **Initial State**: Before firing, both are at rest, so the total initial momentum is zero.

$$\vec{p}_i = 0$$

- **Final State**: After firing, the bullet of mass $m$ moves forward with velocity $\vec{v}$, and the rifle of mass $M$ recoils backward with velocity $\vec{V}$.

$$\vec{p}_f = m\vec{v} + M\vec{V}$$

- **Conservation of Momentum**:

$$0 = m\vec{v} + M\vec{V}$$

Solving for the recoil velocity of the rifle:

$$\vec{V} = -\frac{m}{M}\vec{v}$$

The negative sign indicates that the rifle's velocity is in the **opposite direction** to the bullet's velocity. Since the mass of the rifle ($M$) is much larger than the mass of the bullet ($m$), its recoil velocity ($\vec{V}$) is much smaller.

## 4. Explosion of a Moving Object

If an object is already moving when it explodes, its initial momentum is not zero. The total momentum of the fragments after the explosion must be equal to the momentum of the object just before it exploded.

**Example: A Shell Exploding in Mid-Air**

A shell with mass $M$ is moving with velocity $\vec{V}_{initial}$ when it explodes into two pieces, $m_{1}$ and $m_{2}$.

- **Initial Momentum**: $\vec{p}_i = M\vec{V}_{initial}$
- **Final Momentum**: $\vec{p}_f = m_{1}\vec{v}_1 + m_{2}\vec{v}_2$
- **Conservation of Momentum**:

$$M\vec{V}_{initial} = m_{1}\vec{v}_1 + m_{2}\vec{v}_2$$

The vector sum of the final momenta of the fragments must equal the initial momentum of the shell.

## 5. Kinetic Energy in an Explosion

**Q:** Is kinetic energy conserved in an explosion?

**A:** No. In fact, kinetic energy *increases* dramatically during an explosion. The initial kinetic energy might be zero, but the final kinetic energy of the flying fragments is large. This new energy comes from the chemical potential energy stored in the explosive material.

## 6. Rocket Propulsion in Space

**Q:** How does a rocket engine work in the vacuum of space?

**A:** A rocket works by the principle of conservation of momentum. It expels hot gas (fuel) at high velocity in one direction. To conserve the total momentum of the rocket-fuel system, the rocket itself must gain an equal and opposite amount of momentum, pushing it forward. It doesn't need air to "push against."

---

<!-- note kx7d37evypgdqdp1se86750vwn85p6kc | topic ms7cxc8kw62kc5bw75b38kxwf585q9c7 | status published -->
# Linear Momentum

Linear momentum is a fundamental concept in physics that describes an object's "quantity of motion." It is a measure of how difficult it is to stop or change the direction of a moving object. Often referred to simply as **momentum**, it is a vector quantity that combines an object's mass and its velocity into a single value.
## Definition and Formula

Linear momentum ($\vec{p}$) is defined as the product of an object's mass ($m$) and its velocity ($\vec{v}$).

**Formula**:
$$
\vec{p} = m\vec{v}
$$

*   **Vector Quantity**: Momentum is a vector. Its direction is the same as the direction of the object's velocity.
*   **Dependence**: The magnitude of momentum is directly proportional to both the mass and the velocity of the object. A heavy object or a fast-moving object will have a large momentum.

<InlineNoteTag label="Scalar and Vector Quantities" notePath="physics-11/scalar-and-vector-quantities" />

## Units and Dimensions

*   **SI Unit**: The standard unit for momentum is the **kilogram-meter per second (kg·m/s)**.
*   **Equivalent Unit**: It can also be expressed in **Newton-seconds (N·s)**.
    *   *Proof*: $\text{N}\cdot\text{s} = (\text{kg}\cdot\text{m}\cdot\text{s}^{-2}) \cdot \text{s} = \text{kg}\cdot\text{m}\cdot\text{s}^{-1}$
*   **Dimensions**: The dimensional formula for momentum is $[MLT^{-1}]$.

**Dimensional Homogeneity Check** for $\vec{p} = m\vec{v}$:
$$
[\vec{p}] = [m][\vec{v}] = [M][LT^{-1}] = [MLT^{-1}] \checkmark
$$
Both sides have the same dimensions, confirming the equation is dimensionally homogeneous.

<InlineNoteTag label="Derived Units" notePath="physics-11/derived-units" />
<InlineNoteTag label="Dimensions" notePath="physics-11/dimensions" />

## Momentum and Newton's Second Law of Motion

Newton's Second Law of Motion is most accurately and generally stated in terms of momentum.

**Statement**:
> **The net force acting on an object is equal to the time rate of change of its linear momentum.**

**Mathematical Form**:
$$
\vec{F}_{net} = \frac{\Delta \vec{p}}{\Delta t}
$$
Where:
*   $\Delta \vec{p}$ is the change in momentum.
*   $\Delta t$ is the time interval over which the change occurs.

**Derivation to F = ma**:
If the mass ($m$) of the object is constant, the change in momentum is:
$$
\Delta \vec{p} = \Delta (m\vec{v}) = m(\Delta \vec{v}) = m(\vec{v}_f - \vec{v}_i)
$$
Substituting this into the force equation:
$$
\vec{F}_{net} = \frac{m(\vec{v}_f - \vec{v}_i)}{\Delta t}
$$
Since acceleration is defined as $\vec{a} = \dfrac{\vec{v}_f - \vec{v}_i}{\Delta t}$, this simplifies to:
$$
\vec{F}_{net} = m\vec{a}
$$
This shows that $F = ma$ is a special case of the more fundamental momentum principle.

## Impulse

In many cases, a large force acts for a very short interval of time, such as a bat hitting a ball. The product of force and time is called **impulse**.

**Formula**:
$$
\vec{I} = \vec{F}_{avg} \times \Delta t = \Delta \vec{p} = m\vec{v}_f - m\vec{v}_i
$$

The **Impulse-Momentum Theorem** states that the impulse acting on a body equals the change in its momentum. This is why:
- Catching a cricket ball with a moving hand (increasing $\Delta t$) reduces the average force.
- Crumple zones in cars increase collision time, reducing the force on passengers.

## Law of Conservation of Linear Momentum

The total linear momentum of an **isolated system** (one on which no net external force acts) remains constant in both magnitude and direction.

**Mathematical Statement** (for two colliding bodies):
$$
m_1\vec{v}_{1} + m_2\vec{v}_{2} = m_1\vec{v}'_{1} + m_2\vec{v}'_{2}
$$
where $\vec{v}_{1}, \vec{v}_{2}$ are initial velocities and $\vec{v}'_{1}, \vec{v}'_{2}$ are final velocities.

**Basis**: This law follows from Newton's Third Law combined with Newton's Second Law. During a collision, the action-reaction forces are equal and opposite, producing equal and opposite changes in momentum, so the total remains constant.

## Summary Table

| **Concept** | **Description** |
| :--- | :--- |
| **Formula** | $\vec{p} = m\vec{v}$ |
| **Type of Quantity** | Vector |
| **SI Unit** | $\text{kg}\cdot\text{m}\cdot\text{s}^{-1}$ or $\text{N}\cdot\text{s}$ |
| **Dimensional Formula** | $[MLT^{-1}]$ |
| **Relationship to Force** | $\vec{F}_{net} = \Delta\vec{p}/\Delta t$ |
| **Impulse** | $\vec{I} = \vec{F}\Delta t = \Delta\vec{p}$ |
| **Conservation** | Total $\vec{p}$ constant in isolated system |

---

<!-- note kx70cw20j3bss0ahrg2a449we985pk35 | topic ms752v9ec1f8yk7s0mccg2zdk985q51b | status published -->
# Newton's Laws of Motion

First formulated by Sir Isaac Newton in his 1687 masterpiece *Principia Mathematica*, Newton's three laws of motion are the foundational principles of classical mechanics. These laws describe the relationship between the motion of an object and the forces acting upon it.
## 1. Newton's First Law of Motion (The Law of Inertia)

An object will remain at rest, or continue to move with a constant velocity, unless acted upon by a net external force.

This law essentially states that objects have a natural tendency to resist changes in their state of motion.

### Inertia

**Inertia** is the inherent property of an object that makes it resist any change in its state of rest or uniform motion.

The **mass** of an object is a quantitative measure of its inertia. The more massive an object is, the greater its inertia, and the harder it is to change its state of motion. For example, it is much easier to push a bicycle than a car because the car has more mass and therefore more inertia.

### Frame of Reference

Newton's laws are only valid in a specific type of coordinate system called a **frame of reference**.

**Inertial Frame of Reference**: A frame of reference that is **not accelerating** (at rest or moving with constant velocity). In an inertial frame, Newton's First Law holds true, an object with no net force will not accelerate.

**Non-Inertial Frame of Reference**: A frame of reference that **is accelerating** (e.g., an accelerating car, a spinning merry-go-round, a braking train). In a non-inertial frame, Newton's laws do not appear to hold without introducing **fictitious (pseudo) forces**.

| Feature | Inertial Frame | Non-Inertial Frame |
| :--- | :--- | :--- |
| Acceleration of frame | Zero | Non-zero |
| Newton's Laws valid? | Yes | No (without pseudo-forces) |
| Example | Ground, constant-velocity train | Accelerating car, rotating Earth |
## 2. Newton's Second Law of Motion

The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass. The direction of the acceleration is in the direction of the net force.

### Mathematical Formulation

$$\vec{a} \propto \vec{F}_{net} \quad \text{and} \quad \vec{a} \propto \frac{1}{m}$$

Combining these proportionalities and choosing the Newton as the unit of force:

$$\boxed{\vec{F}_{net} = m\vec{a}}$$

This is a **vector equation**, the net force and acceleration are always in the same direction.

### SI Unit of Force

The SI unit of force is the **Newton (N)**:

$$1\text{ N} = 1\text{ kg}\cdot\text{m}\cdot\text{s}^{-2}$$

### Newton's Second Law in Terms of Momentum

Newton originally stated his second law in terms of the rate of change of momentum:

$$\vec{F} = \frac{\Delta \vec{p}}{\Delta t}$$

For constant mass, $\Delta\vec{p} = m\Delta\vec{v} = m\vec{a}\Delta t$, which reduces to $\vec{F} = m\vec{a}$.
## 3. Newton's Third Law of Motion

For every action, there is an equal and opposite reaction.

### Key Characteristics

- **Forces occur in pairs**: If object A exerts a force on object B (action), then object B simultaneously exerts a force on object A (reaction).
- **Equal in magnitude**: $|\vec{F}_{AB}| = |\vec{F}_{BA}|$
- **Opposite in direction**: $\vec{F}_{AB} = -\vec{F}_{BA}$
- **Act on different objects**: The action and reaction forces act on *different* objects, they **do not cancel each other out**.

**Example**: When you push against a wall (action), the wall pushes back on you with an equal and opposite force (reaction). Your push acts on the wall; the wall's push acts on you.
## Mass vs. Weight

| Quantity | Definition | Type | Formula |
| :--- | :--- | :--- | :--- |
| **Mass** | Measure of inertia | Scalar | (fixed property, no formula) |
| **Weight** | Gravitational force on mass | Vector | $\vec{W} = m\vec{g}$ |

> **Note**: Action and reaction forces in Newton's Third Law do **not** cancel because they act on *different* objects. To determine if an object accelerates, consider only forces acting *on that object*.
## Summary Table

| **Law** | **Core Concept** | **Formula / Key Idea** |
| :--- | :--- | :--- |
| **First Law** | **Inertia** | Object maintains state of motion unless net force acts. |
| **Second Law** | **Force and Acceleration** | $\vec{F}_{net} = m\vec{a}$ |
| **Third Law** | **Action-Reaction** | $\vec{F}_{AB} = -\vec{F}_{BA}$ |

---

<!-- note kx7ffgc7e1rmhesh3y90ypqdd185ppwh | topic ms76qx8e02m9e1j30h9e9q65dn85qqfn | status published -->
# 3.10.1 Projectile Motion Derivations

Projectile motion refers to the curved path an object follows when launched near Earth's surface. The motion can be described by three key characteristics: the maximum height reached, the total time in the air, and the horizontal distance covered. By analyzing the vertical and horizontal components separately, we can derive simple formulas for each quantity. The following derivations assume ideal conditions where air resistance is negligible and the acceleration due to gravity ($g$) is constant.
## 1. Maximum Height of a Projectile (H)

The maximum height is the greatest vertical distance reached by the projectile from its launch point.

**Key Principle**: At the peak of its trajectory, the vertical component of the projectile's velocity is momentarily zero ($v_{fy} = 0$).

We derive the formula using the third equation of motion for the vertical journey:

$$2as = v_{f}^2 - v_{i}^2$$

**Initial vertical velocity**: $v_{iy} = V_{i} \sin\theta$

**Final vertical velocity (at peak)**: $v_{fy} = 0$

**Acceleration**: $a = -g$

**Displacement**: $s = H$

Substituting these values:

$$2(-g)H = (0)^2 - (V_{i} \sin\theta)^2$$

$$-2gH = -V_{i}^2 \sin^2\theta$$

Solving for $H$:

$$H = \frac{V_{i}^2 \sin^2\theta}{2g}$$

---

## 2. Time of Flight (T)

The time of flight is the total duration the projectile remains in the air from launch to impact.

**Key Principle**: For a projectile landing at the same vertical level it was launched from, the total vertical displacement is zero ($S_{y} = 0$).

We use the second equation of motion for the entire vertical journey:

$$S = v_{i} t + \frac{1}{2} a t^{\!2}$$

**Vertical displacement**: $S_{y} = 0$

**Initial vertical velocity**: $v_{iy} = V_{i} \sin\theta$

**Acceleration**: $a = -g$

**Time**: $t = T$

Substituting the values:

$$0 = (V_{i} \sin\theta)T + \frac{1}{2}(-g)T^{\!2}$$

$$\frac{1}{2}gT^2 = (V_{i} \sin\theta)T$$

Since $T \neq 0$, we divide both sides by $T$:

$$\frac{1}{2}gT = V_{i} \sin\theta$$

Solving for $T$:

$$T = \frac{2V_i \sin\theta}{g}$$

This is also twice the time taken to reach the maximum height.

---

## 3. Horizontal Range of a Projectile (R)

The horizontal range is the total horizontal distance covered by the projectile.

**Key Principle**: The horizontal component of velocity ($v_{x}$) is constant throughout the flight because there is no horizontal acceleration ($a_{x} = 0$).

The horizontal distance is velocity multiplied by time:

$$R = v_{x} \times T$$

**Horizontal velocity**: $v_{x} = V_{i} \cos\theta$

**Time of flight**: $T = \frac{2V_i \sin\theta}{g}$

Substituting:

$$R = (V_{i} \cos\theta) \left( \frac{2V_i \sin\theta}{g} \right)$$

$$R = \frac{V_{i}^2 (2 \sin\theta \cos\theta)}{g}$$

Using the trigonometric identity $\sin(2\theta) = 2\sin\theta\cos\theta$:

$$R = \frac{V_{i}^2 \sin(2\theta)}{g}$$

---

## Conditions for Maximum Range

For a fixed initial speed ($V_{i}$), the range $R$ depends on the launch angle $\theta$. The range is maximized when $\sin(2\theta)$ is at its maximum value, which is 1.

$$\sin(2\theta) = 1$$

$$2\theta = \sin^{-1}(1) = 90^\circ$$

$$\theta = 45^\circ$$

Therefore, the maximum range is achieved at a launch angle of $45^\circ$. The formula for maximum range is:

$$R_{max} = \frac{V_{i}^2}{g}$$

### Same Range for Complementary Angles

The range formula shows that the same range can be achieved for two different launch angles that are complementary (add up to $90^\circ$). This is because $\sin(2\theta) = \sin(180^\circ - 2\theta) = \sin(2(90^\circ - \theta))$.

For example:

- An angle of $30^\circ$ and an angle of $60^\circ$ will produce the same horizontal range.
- An angle of $15^\circ$ and an angle of $75^\circ$ will also produce the same horizontal range.

The higher angle will result in a much higher trajectory and longer time of flight, while the lower angle produces a flatter trajectory with shorter time of flight.

---

| **Characteristic** | **Formula** | **Condition for Maximum** |
| :--- | :--- | :--- |
| **Maximum Height (H)** | $H = \frac{V_{i}^2 \sin^2\theta}{2g}$ | $\theta = 90^\circ$ (launched straight up) |
| **Time of Flight (T)** | $T = \frac{2V_i \sin\theta}{g}$ | $\theta = 90^\circ$ |
| **Horizontal Range (R)** | $R = \frac{V_{i}^2 \sin(2\theta)}{g}$ | $\theta = 45^\circ$ |

---

---

<!-- note kx72yg4k9fanx3fyt6jg8zjqns85q82n | topic ms74hd50y6tc9xkvqfk0dam00s85qv2k | status published -->
# Ideal Projectile Motion

For the purpose of basic analysis, we study an **ideal projectile**. This model makes several simplifying assumptions:

* Air resistance is negligible.
* The acceleration due to gravity, **g**, is constant (approximately $9.8 \text{ ms}^{-2}$) and directed downwards.
* The rotation of the Earth does not affect the motion.

Under these conditions, the trajectory of a projectile is a **parabola**.

<CaptionedImage src="kg2dkqp8h3mb7p0wf3q6tjfnvs8dgke6" alt="Figure 1: Trajectory of a projectile showing parabolic path" caption="Figure 1: Trajectory of a projectile showing parabolic path" />
## Analysis of Motion: Separating the Components

The key to solving projectile motion problems is to analyze the horizontal and vertical components of motion **separately**. This is a practical application of <InlineNoteTag label="Rectangular Components Of A Vector" notePath="physics-11/rectangular-components-of-a-vector" />.

### Horizontal Motion

* **Acceleration ($a_x$)**: Since we ignore air resistance, there are no horizontal forces acting on the projectile. Therefore, the horizontal acceleration is zero.
  $$a_x = 0$$
* **Velocity ($v_x$)**: Because the acceleration is zero, the horizontal component of the velocity is **constant** throughout the flight.
  $$v_{fx} = v_{ix} = \text{constant}$$
* **Displacement ($x$)**: The horizontal displacement (range) is simply the constant horizontal velocity multiplied by time.
  $$x = v_{ix} t$$

### Vertical Motion

* **Acceleration ($a_y$)**: The only force acting vertically is gravity. Therefore, the vertical acceleration is constant and directed downwards.
  $$a_y = -g$$
* **Velocity ($v_y$)**: The vertical velocity changes continuously due to gravity. It can be found using the first equation of motion.
  $$v_{fy} = v_{iy} - gt$$
* **Displacement ($y$)**: The vertical displacement (height) changes over time and can be found using the second equation of motion.
  $$y = v_{iy}t - \frac{1}{2}gt^2$$

## Initial Velocity Components

If a projectile is launched with an initial velocity $v_i$ at an angle $\theta$ above the horizontal, we must first resolve this velocity into its x and y components.

* **Horizontal Initial Velocity ($v_{ix}$)**:
  $$v_{ix} = v_i \cos\theta$$
* **Vertical Initial Velocity ($v_{iy}$)**:
  $$v_{iy} = v_i \sin\theta$$

## Instantaneous Velocity at Time $t$

The overall velocity of the projectile at any instant is the vector sum of its horizontal and vertical components at that time.

* **Horizontal Component ($v_{fx}$)**: Remains unchanged.
  $$v_{fx} = v_i \cos\theta$$
* **Vertical Component ($v_{fy}$)**: Changes with time.
  $$v_{fy} = v_i \sin\theta - gt$$

The **magnitude of the final velocity** ($v_f$) can be found using the Pythagorean theorem:
$$v_f = \sqrt{v_{fx}^2 + v_{fy}^2} = \sqrt{(v_i \cos\theta)^2 + (v_i \sin\theta - gt)^2}$$

The **direction of the final velocity** (the angle $\phi$ it makes with the horizontal) is:
$$\phi = \tan^{-1}\left(\frac{v_{fy}}{v_{fx}}\right)$$

## Key Derived Quantities

### Time of Flight ($T$)

The total time the projectile remains in the air is found by setting the vertical displacement back to zero:
$$T = \frac{2v_i \sin\theta}{g}$$

### Maximum Height ($H$)

At maximum height, the vertical velocity is zero ($v_{fy} = 0$). Using $v_{fy}^2 = v_{iy}^2 - 2gH$:
$$H = \frac{v_i^2 \sin^2\theta}{2g}$$

### Horizontal Range ($R$)

The total horizontal distance covered during the flight:
$$R = \frac{v_i^2 \sin 2\theta}{g}$$

The range is **maximum** when $\theta = 45^\circ$ (since $\sin 2\theta$ is maximum at $\sin 90^\circ = 1$).

Projectiles launched at **complementary angles** (e.g., $30^\circ$ and $60^\circ$) with the same initial speed give the **same horizontal range**.

### Trajectory Equation

By eliminating time $t$ from the horizontal and vertical displacement equations, we obtain the equation of the trajectory:
$$y = x\tan\theta - \frac{gx^2}{2v_i^2 \cos^2\theta}$$

This is of the form $y = ax + bx^2$, confirming the path is a **parabola**.

## Summary Table

| **Component** | **Acceleration** | **Velocity** | **Displacement** |
|:---|:---|:---|:---|
| **Horizontal (x)** | $a_x = 0$ | $v_x = v_i \cos\theta$ | $x = (v_i \cos\theta)t$ |
| **Vertical (y)** | $a_y = -g$ | $v_y = v_i \sin\theta - gt$ | $y = (v_i \sin\theta)t - \frac{1}{2}gt^2$ |

## Conceptual Points

**Q:** What force is responsible for the curved path of a projectile?

**A:** The constant downward force of gravity is the only force acting on an ideal projectile. It continuously changes the vertical component of the projectile's velocity, causing the parabolic trajectory.

**Q:** If you drop a bullet and fire another one horizontally from the same height, which one hits the ground first (ignoring air resistance)?

**A:** They will both hit the ground at the **same time**. Their horizontal motions are independent of their vertical motions. Both start with zero initial vertical velocity and accelerate downwards at the same rate ($g$).

---

<!-- note kx7aaxg9r6rmn5x8ad6f7g77y985qrnm | topic ms77df3sg7pf7rj1sr2ckbn9w985q8fm | status published -->
# Velocity-Time Graphs


## Reading Motion from a v-t Graph

A velocity-time graph is a kinematic tool that plots an object's velocity on the vertical axis against time on the horizontal axis. This graphical representation allows one to determine the object's acceleration and displacement by analyzing specific features of the graph.
## Interpreting the Graph

### 1. Reading Velocity

**Instantaneous Velocity**: The velocity at any specific moment can be read directly from the vertical axis corresponding to that time.

**Direction of Motion**:

- A **positive velocity** (graph above the time axis) indicates motion in the positive direction.
- A **negative velocity** (graph below the time axis) indicates motion in the negative direction.
- A velocity of **zero** (graph crossing the time axis) means the object is momentarily at rest.

### 2. The Slope of the Graph: Acceleration

The slope of the line on a velocity-time graph represents the object's **acceleration**. This relationship is expressed as:

$$\text{Slope} = \frac{\Delta v}{\Delta t} = \frac{v_{f} - v_{i}}{t} = a$$

Rearranging gives the **first equation of motion**:

$$v_{f} = v_{i} + at$$

**Positive Slope**: A line sloping upwards indicates positive acceleration. The object is speeding up if its velocity is positive, or slowing down if its velocity is negative.

**Negative Slope**: A line sloping downwards indicates negative acceleration. The object is slowing down if its velocity is positive (deceleration), or speeding up if its velocity is negative.

**Zero Slope (Horizontal Line)**: A flat, horizontal line indicates zero acceleration. The object is moving at a **constant velocity**.

### 3. The Area Under the Graph: Displacement

The area between the graph line and the time axis represents the object's **displacement**. For a uniformly accelerated object starting with initial velocity $v_{i}$ and reaching final velocity $v_{f}$ in time $t$, the area of the trapezoid gives:

$$s = \frac{(v_{i} + v_{f})}{2} \cdot t$$

This is the **second equation of motion** (combined with $v_{f} = v_{i} + at$, it also yields $s = v_{i} t + \frac{1}{2}at^2$).

- **Area Above the Axis**: Represents positive displacement (movement in the positive direction).
- **Area Below the Axis**: Represents negative displacement (movement in the negative direction).
- **Total Displacement**: The net area is calculated by subtracting areas below the axis from areas above the axis.
- **Total Distance**: The sum of the absolute values of all areas (all areas treated as positive).

### 4. Instantaneous Acceleration from a Curved Graph

For a **non-linear (curved) v-t graph**, the acceleration is not constant. The instantaneous acceleration at any point is found by drawing a **tangent** to the curve at that point and calculating its slope:

$$a_{\text{inst}} = \lim_{\Delta t \to 0} \frac{\Delta v}{\Delta t} = \text{slope of tangent at that point}$$

## Relationship with Other Motion Graphs

| From Velocity-Time Graph | You can find | How |
| :--- | :--- | :--- |
| **Slope** | **Acceleration** | Calculate the gradient of the line |
| **Area** | **Displacement** | Calculate the area between the line and the time axis |
| **Y-axis Value** | **Instantaneous Velocity** | Read the y-axis value directly at a specific time |
## Speeding Up vs. Slowing Down

An object is **speeding up** if its velocity is moving *away* from the time axis (e.g., a positive velocity becoming more positive, or a negative velocity becoming more negative). It is **slowing down** if its velocity is moving *towards* the time axis (approaching zero).

## Summary

- A velocity-time graph plots **velocity** vs. **time**.
- The **slope** of the graph equals **acceleration**: $a = \frac{\Delta v}{\Delta t}$, leading to $v_{f} = v_{i} + at$.
- The **area under the graph** equals **displacement**: $s = \frac{(v_{i} + v_{f})}{2} t$.
- A **horizontal line** means **constant velocity** (zero acceleration).
- A **straight, sloped line** means **constant (uniform) acceleration**.
- A **curved line** means **non-uniform (changing) acceleration**; use the tangent to find instantaneous acceleration.

---

<!-- note kx76tbdd09gq6ww77wnr6d40m585qw9j | topic ms78qawpd16bd1b5xnpg4qpa0n85pj53 | status published -->
# Velocity

Velocity is a fundamental concept in physics that describes the rate at which an object changes its position. Unlike speed, which only tells us how fast an object is moving, velocity also tells us the direction of that motion. As a vector quantity, velocity provides a complete description of an object's motion.

<InlineNoteTag label="Scalar And Vector Quantities" notePath="physics-11/scalar-and-vector-quantities" />
## Definition and Formula

Velocity ($\vec{v}$) is defined as the rate of change of displacement.

$$
\text{Velocity} = \frac{\text{Displacement}}{\text{Time Interval}}
$$

Mathematically, the average velocity is expressed as:
$$
\vec{v}_{avg} = \frac{\Delta \vec{s}}{\Delta t} = \frac{\vec{s}_f - \vec{s}_i}{t_f - t_i}
$$

Where:
*   $\Delta \vec{s}$ is the displacement (change in position).
*   $\Delta t$ is the time interval.

-   **Vector Quantity**: Velocity has both **magnitude** and **direction**.
-   **SI Unit**: The standard unit for velocity is **meters per second (m/s)**.
-   **Dimensions**: The dimensions of velocity are $[LT^{-1}]$.

<InlineNoteTag label="Dimensions" notePath="physics-11/dimensions" />

## Velocity vs. Speed

This is a critical distinction in physics.

*   **Speed** is a **scalar** quantity that describes how fast an object is moving. It is the rate of change of *distance*.
*   **Velocity** is a **vector** quantity that describes how fast and in what direction an object is moving. It is the rate of change of *displacement*.

| **Feature** | **Speed** | **Velocity** |
| :--- | :--- | :--- |
| **Type of Quantity** | Scalar | Vector |
| **Definition** | Rate of change of distance | Rate of change of displacement |
| **Direction** | Has no direction | Has a specific direction |
| **Value** | Always non-negative (≥ 0) | Can be positive, negative, or zero |
| **Example** | A car travels at 60 km/h. | A car travels at 60 km/h **due north**. |

An object can have a constant speed while its velocity is changing. For example, a car driving in a circle at a constant 50 km/h has a constant speed, but its velocity is constantly changing because its direction is always changing.

## Types of Velocity

### Average Velocity
The total displacement of an object divided by the total time interval. It describes the overall motion over a period but does not give details about the motion at any specific moment.
$$ \vec{v}_{avg} = \frac{\text{Total Displacement}}{\text{Total Time}} $$

### Instantaneous Velocity
The velocity of an object at a single, specific instant in time. It is what a speedometer in a car reads, along with the direction of travel at that moment. Mathematically, it is the limit of the average velocity as the time interval approaches zero.
$$ \vec{v}_{inst} = \lim_{\Delta t \to 0} \frac{\Delta \vec{s}}{\Delta t} $$
The magnitude of the instantaneous velocity is the **instantaneous speed**. On a displacement-time graph, the slope of the tangent at any point gives the instantaneous velocity.

### Uniform Velocity
An object moves with uniform (or constant) velocity if it covers equal displacements in equal intervals of time. This implies that both its **speed and direction of motion are constant**. An object with uniform velocity has zero acceleration.


