<!-- note kx7czjx3k1cx9c74sfeh5nm0nd85qtfr | topic ms79svsa77hb39y7rprgj1zjv585qqsa | status published -->
# Angular Displacement


## What Angular Displacement Describes

In the study of motion, while linear displacement describes an object's change in position along a straight line, **angular displacement** describes its change in orientation as it rotates around a central point or axis. It is the rotational analog of linear displacement and is a fundamental quantity for analyzing the kinematics of spinning or orbiting objects.

<InlineNoteTag label="Scalar and Vector Quantities" notePath="physics-11/scalar-and-vector-quantities" />
## Definition

Angular displacement ($\theta$) is defined as the angle through which a point or line has been rotated in a specified direction about a specified axis. It measures the change in the angular position of an object.

- **For a point on a spinning object**: It is the angle swept out by the line connecting the point to the center of rotation.

## Formula Relating Arc Length and Angular Displacement

Angular displacement provides the link between the linear distance traveled along a circular path (the arc length) and the radius of that path.

The formula is:
$$
\theta = \frac{S}{r}
$$

Where:
- **$\theta$** is the angular displacement in **radians**.
- **$S$** is the **arc length**, the linear distance traveled along the circular path.
- **$r$** is the **radius** of the circular path.

Rearranging: $S = r\theta$

This formula shows that for a given radius, angular displacement is directly proportional to arc length.

**Worked Example:** A particle moves along a circular arc of radius $0.5\text{ m}$ and covers an arc length of $1.5\text{ m}$. Find its angular displacement.
$$
\theta = \frac{S}{r} = \frac{1.5}{0.5} = 3 \text{ rad}
$$
## Units of Angular Displacement

Angular displacement can be measured in several units, but the standard SI unit is the **radian**.

- **Radians (rad)**: The SI unit. **One radian** is the angle subtended at the center of a circle by an arc whose length equals the radius ($S = r$). Since the circumference of a circle is $2\pi r$, a full circle contains $2\pi$ radians.
- **Degrees ($^\circ$)**: A full circle is divided into $360^\circ$.
- **Revolutions (rev)**: One full revolution equals one complete circle.

<InlineNoteTag label="Supplementary Units" notePath="physics-11/supplementary-units" />

## Unit Conversions

The relationships between these units are crucial for calculations:
$$
1 \text{ revolution} = 360^\circ = 2\pi \text{ radians}
$$

Key conversion factors:
- Degrees → Radians: $\theta_{\text{rad}} = \theta_{\text{deg}} \times \dfrac{\pi}{180^\circ}$
- Radians → Degrees: $\theta_{\text{deg}} = \theta_{\text{rad}} \times \dfrac{180^\circ}{\pi}$

A useful value:
$$
1 \text{ rad} = \frac{180^\circ}{\pi} \approx 57.3^\circ
$$

**Worked Example:** Convert $270^\circ$ to radians.
$$
\theta = 270 \times \frac{\pi}{180} = \frac{3\pi}{2} \text{ rad}
$$

## Dimensions of Angular Displacement

Since $\theta = \dfrac{S}{r}$ is a ratio of two lengths:
$$
[\theta] = \frac{[L]}{[L]} = [M^{\!0} L^{\!0} T^{\!0}]
$$

Angular displacement is therefore a **dimensionless quantity**.

## Vector Nature

Angular displacement is a **vector quantity** under certain conditions.

- **Magnitude**: The size of the angle of rotation.
- **Direction**: Determined by the **right-hand rule**, curl the fingers of your right hand in the direction of rotation; your thumb points in the direction of the angular displacement vector.
- By convention, **counter-clockwise** rotation is positive and **clockwise** is negative.

<Callout type="important">

For *infinitesimally small* angular displacements, the quantity behaves as a true vector and obeys the commutative law of addition. For *large* finite rotations, the order of rotations matters (non-commutative), so large angular displacements are not true vectors. In introductory physics, we treat angular displacement as a vector for simplicity.

</Callout>
## Summary Table

| **Concept** | **Formula / Relationship** |
| :--- | :--- |
| **Definition** | $\theta = \dfrac{S}{r}$ |
| **Units** | Radians (SI), Degrees, Revolutions |
| **Key Conversion** | $2\pi \text{ rad} = 360^\circ = 1 \text{ rev}$ |
| **1 Radian** | $\approx 57.3^\circ$ |
| **Dimensions** | $[M^{\!0} L^{\!0} T^{\!0}]$ (dimensionless) |

---

<!-- note kx7cscdqp20rsvkr9ygzttxwbd85pqq1 | topic ms77yx1snf7t4xasnyw913jjxs85pykk | status published -->
# Angular Velocity


## Angular Velocity as the Rotational Analog of Linear Velocity

Angular velocity is the rotational analog of linear velocity. While linear velocity describes the rate of change of an object's position, angular velocity describes the rate of change of its angular displacement. It quantifies how fast an object is spinning or revolving around an axis and in what direction.
## Definition and Formula

Angular velocity ($\omega$) is defined as the rate at which angular displacement ($\theta$) changes with respect to time ($t$).

**Average Angular Velocity ($\omega_{avg}$)**: The total angular displacement divided by the total time interval.
$$
\omega_{avg} = \frac{\Delta \theta}{\Delta t} = \frac{\theta_f - \theta_i}{t_{f} - t_{i}}
$$

**Instantaneous Angular Velocity ($\omega_{inst}$)**: The angular velocity at a specific moment in time. It is the limit of the average angular velocity as the time interval approaches zero.
$$
\omega_{inst} = \lim_{\Delta t \to 0} \frac{\Delta \theta}{\Delta t}
$$

In most introductory physics problems, if the rotation is steady, the average and instantaneous angular velocities are the same.

## Vector Nature and Direction

Angular velocity is a vector quantity.

*   **Magnitude**: The magnitude of the angular velocity is the object's angular speed.
*   **Direction**: The direction of the angular velocity vector is along the axis of rotation and is determined by the right-hand rule:

1.  Curl the fingers of your right hand in the direction of the object's rotation.
2.  Your thumb will point in the direction of the angular velocity vector ($\vec{\omega}$).

By convention, counter-clockwise rotation in the xy-plane is often considered positive (pointing in the +z direction), and clockwise rotation is negative (pointing in the -z direction).

## Units of Angular Velocity

Several units are used to measure angular velocity, and it is important to know how to convert between them.

| Unit | Symbol | Description |
| :--- | :--- | :--- |
| Radians per second | rad/s | The SI unit. Used in most physics formulas. |
| Revolutions per minute | RPM | The number of full rotations completed in one minute. |
| Degrees per second | °/s | The number of degrees rotated through per second. |

Key conversion: $1 \text{ rev} = 360^\circ = 2\pi \text{ rad}$

### Dimensions of Angular Velocity
Since radian is a dimensionless unit (ratio of length to length), the dimensions of angular velocity are:
$$[\omega] = [T^{\!-1}]$$

## Relationship to Linear (Tangential) Velocity

Every point on a rotating object also has a linear velocity, called tangential velocity ($v$), which is directed tangent to its circular path. The magnitude of the tangential velocity is related to the angular velocity by:
$$
v = r\omega
$$
Where:
*   $v$ is the tangential velocity
*   $r$ is the distance of the point from the axis of rotation (the radius)
*   $\omega$ is the angular velocity in radians per second

This formula shows that for a given angular velocity, points farther from the center move with a greater linear speed. This relationship is a fundamental part of <InlineNoteTag label="Scalar And Vector Quantities" notePath="physics-11/scalar-and-vector-quantities" /> and circular motion.

## Relationship to Frequency and Period

**Frequency (f)**: The number of revolutions per second (measured in Hertz, Hz).
$$
\omega = 2\pi f
$$

**Period (T)**: The time taken for one complete revolution (measured in seconds).
$$
\omega = \frac{2\pi}{T}
$$




---

<!-- note kx71m9d4hv209xzgybhkbkk9t985qjz5 | topic ms76024wbzxs7jdm9nx51vvncd85qtsh | status published -->
# 4.4 Angular Acceleration


## What Angular Acceleration Describes

Just as linear acceleration describes the rate at which an object's linear velocity changes, angular acceleration describes the rate at which an object's angular velocity changes. It is the measure of how quickly a spinning or rotating object speeds up its rotation, slows it down, or changes its axis of rotation. Angular acceleration is a fundamental concept in rotational kinematics.
## Definition and Formula

Angular acceleration ($\alpha$) is defined as the rate of change of angular velocity ($\omega$) with respect to time ($t$).

**Average Angular Acceleration**: The average rate of change over a time interval $\Delta t$ is given by:
$$
\alpha_{avg} = \frac{\Delta \omega}{\Delta t} = \frac{\omega_f - \omega_i}{t_f - t_i}
$$
Where:

- $\omega_f$ is the final angular velocity.
- $\omega_i$ is the initial angular velocity.

**Instantaneous Angular Acceleration**: The acceleration at a specific moment in time is the limit of the average acceleration as the time interval approaches zero.
$$
\alpha_{inst} = \lim_{\Delta t \to 0} \frac{\Delta \omega}{\Delta t}
$$

## Units of Angular Acceleration

The standard SI unit for angular acceleration is **radians per second squared (rad/s²)**. This unit signifies the change in angular velocity (in radians per second) that occurs every second.

The dimensions of angular acceleration are $[T^{-2}]$.

<InlineNoteTag label="Derived Units" notePath="physics-11/derived-units" />
<InlineNoteTag label="Dimensions" notePath="physics-11/dimensions" />

## Vector Nature and Direction

Angular acceleration is a **vector quantity**, meaning it has both magnitude and direction. The direction of the angular acceleration vector is along the axis of rotation and is determined by how the angular velocity is changing.

- **Speeding Up**: If the object's rotation is speeding up, the angular acceleration vector points in the **same direction** as the angular velocity vector.
- **Slowing Down**: If the object's rotation is slowing down, the angular acceleration vector points in the **opposite direction** to the angular velocity vector.

The direction of these vectors can be visualized using the **right-hand rule**.

## Relationship Between Angular and Linear Acceleration

For any point at a distance $r$ from the axis of rotation, its **tangential linear acceleration** ($a_t$) is directly related to the angular acceleration ($\alpha$).

**Formula**:
$$
a_t = r\alpha
$$
This means that the farther a point is from the center of rotation, the greater its tangential acceleration will be for the same angular acceleration.




---

<!-- note kx740kfxjd578f9cjyknfhx29x85pa9m | topic ms75m43ess7k8xv0xwpwp8g1y985q6ye | status published -->
# 4.5 Relation Between Linear and Angular Quantities


## Why Linear and Angular Quantities Connect

When a rigid body rotates about a fixed axis, the body as a whole undergoes angular motion, described by variables such as angular displacement, angular velocity, and angular acceleration. However, each individual point on the body moves along a circular path and possesses its own linear motion. There exists a direct mathematical relationship between the angular variables of the rotating body and the linear variables of a point at a specific distance from the axis of rotation.
## Relationship Between Linear and Angular Displacement

**Linear Displacement ($S$)**: The distance a point travels along its circular path, also known as the **arc length**.

**Angular Displacement ($\theta$)**: The angle through which the rotating object has turned. For these relationships to hold, $\theta$ must be measured in <InlineNoteTag label="Supplementary Units" notePath="physics-11/supplementary-units" /> (radians).

**Derivation and Formula**

By the definition of an angle in radians, angular displacement equals the ratio of arc length to the radius of the circular path:

$$
\theta = \frac{S}{R}
$$

Rearranging this equation gives:

$$
S = R\theta
$$

This equation states that the linear distance traveled by a point on a rotating body equals the radius multiplied by the angular displacement (in radians).

## Relationship Between Linear and Angular Velocity

**Linear Velocity ($V$)**: The instantaneous speed of a point along its circular path. Since the path is circular, this velocity is always tangent to the circle and is termed **tangential velocity**.

**Angular Velocity ($\omega$)**: The rate at which the angular displacement of the object changes.

**Derivation and Formula**

Consider the change in displacement over a small time interval $\Delta t$:

$$
\Delta S = R \Delta \theta
$$

Dividing both sides by $\Delta t$:

$$
\frac{\Delta S}{\Delta t} = R \frac{\Delta \theta}{\Delta t}
$$

As $\Delta t$ approaches zero, these ratios become the instantaneous linear and angular velocities:

$$
V = R\omega
$$

In vector form, the relationship is expressed as:
$$
\vec{v} = \vec{\omega} \times \vec{r}
$$

This result indicates that the tangential speed of a point on a rotating object is directly proportional to its distance ($R$) from the axis of rotation.

## Relationship Between Linear and Angular Acceleration

**Linear Acceleration ($a$)**: The rate at which the linear velocity of a point changes. In circular motion, we specifically consider **tangential acceleration ($a_t$)**, which is responsible for changes in the speed of the point.

**Angular Acceleration ($\alpha$)**: The rate at which the angular velocity of the object changes.

**Derivation and Formula**

Differentiating the velocity equation with respect to time:

$$
\Delta V = R \Delta \omega
$$

Dividing both sides by $\Delta t$:

$$
\frac{\Delta V}{\Delta t} = R \frac{\Delta \omega}{\Delta t}
$$

As $\Delta t$ approaches zero, these ratios become the instantaneous tangential and angular accelerations:

$$
a_t = R\alpha
$$

In vector form:
$$
\vec{a_t} = \vec{\alpha} \times \vec{r}
$$

This relationship shows that the tangential acceleration of a point equals its distance from the axis multiplied by the angular acceleration of the rotating body.

## Summary

The linear and angular quantities describing rotational motion are fundamentally linked through the radius of the circular path. The three essential relationships are:

| Physical Quantity | Relationship | Notes |
|---|---|---|
| Displacement | $S = R\theta$ | $\theta$ must be in radians |
| Velocity | $V = R\omega$ | $V$ is tangential velocity; $\omega$ must be in rad/s |
| Acceleration | $a_t = R\alpha$ | $a_t$ is tangential acceleration; $\alpha$ must be in rad/s² |

These equations enable the conversion between linear and rotational frames of reference.

## Frequently Asked Questions

**Q: Why must angular quantities be in radians for these formulas to work?**

A: The fundamental definition linking arc length and angle, $S = R\theta$, is based on the definition of a radian. If degrees were used, a conversion factor of ($\pi/180$) would be required in all three equations.

**Q: Do all points on a spinning wheel have the same angular velocity?**

A: Yes. For a rigid body, every point completes a full circle in the same time and rotates through the same angle in any given interval. Therefore, their angular velocity ($\omega$) is identical. However, their linear velocities ($V = R\omega$) differ because their distances from the axis ($R$) are different.

<WorkedExample title="Worked examples">



</WorkedExample>


**Example 1:** A wheel of radius $0.5\ \mathrm{m}$ rotates with an angular acceleration of $2\ \mathrm{rad/s^2}$. Find the tangential acceleration of a point on the rim.

**Solution:**
Using $a_t = R\alpha$:
$$
a_t = (0.5\ \mathrm{m})(2\ \mathrm{rad/s^2}) = 1\ \mathrm{m/s^2}
$$

**Example 2:** A point on a rotating turntable travels an arc length of $2\ \mathrm{m}$ during an angular displacement of $4\ \mathrm{rad}$. Find the radius of the circular path.

**Solution:**
Using $S = R\theta$:
$$
R = \frac{S}{\theta} = \frac{2\ \mathrm{m}}{4\ \mathrm{rad}} = 0.5\ \mathrm{m}
$$

**Example 3:** A point on a rotating object has a tangential acceleration of $5\ \mathrm{m/s^2}$ and is located at a distance of $0.2\ \mathrm{m}$ from the axis. Find the angular acceleration.

**Solution:**
Using $a_t = R\alpha$:
$$
\alpha = \frac{a_t}{R} = \frac{5\ \mathrm{m/s^2}}{0.2\ \mathrm{m}} = 25\ \mathrm{rad/s^2}
$$

---

<!-- note kx72v8pspjjf21ct7j996h2fb185px1p | topic ms7bbq9f39yysqgtgdsndqkmvs85pnwk | status published -->
# Centripetal Force and Acceleration


## Why Circular Motion Always Involves Acceleration

When an object moves in a circular path, even at a constant speed, its velocity is continuously changing because its **direction** is continuously changing. According to Newton's First Law, a change in velocity (i.e., acceleration) requires a net force. In the case of circular motion, this net force is called the **centripetal force**, and the acceleration it produces is the **centripetal acceleration**. Both are directed towards the center of the circular path.
## Centripetal Acceleration ($a_c$)

**Definition**: Centripetal acceleration is the acceleration experienced by an object moving in a circular path. It is always directed radially inward, towards the center of the circle.

This acceleration is solely responsible for changing the *direction* of the velocity vector, not its *magnitude* (speed). It is a vector that is always perpendicular to the object's tangential velocity vector.

<InlineNoteTag label="Dimensions" notePath="physics-11/dimensions" />

**Derivation and Formulas**

Consider an object moving at a constant speed $v$ in a circle of radius $r$. By analyzing the change in the velocity vector over a small time interval, we can derive the formula for the magnitude of centripetal acceleration.

The magnitude of the centripetal acceleration is given by:

$$
a_c = \frac{v^2}{r}
$$

It can also be expressed in terms of the object's angular velocity ($\omega$). Since the tangential velocity $v = r\omega$, we can substitute this into the first formula:

$$
a_c = \frac{(r\omega)^2}{r} = \frac{r^2\omega^2}{r}
$$

This gives the alternative formula:

$$
a_c = r\omega^2
$$

## Centripetal Force ($F_c$)

**Definition**: Centripetal force is the net force that causes centripetal acceleration. It is not a new, fundamental force of nature; rather, it is the **net result** of other forces (like tension, gravity, or friction) that are acting on the object to keep it in a circular path.

The centripetal force is always directed towards the center of the circular path, in the same direction as the centripetal acceleration.

**Formula**

According to Newton's Second Law of Motion ($F_{net} = ma$), the centripetal force is:

$$
F_c = ma_c
$$

Substituting the expressions for centripetal acceleration, we get the two common formulas for the magnitude of centripetal force:

$$
F_c = \frac{mv^2}{r}
$$

and

$$
F_c = mr\omega^2
$$

### Examples of Centripetal Force in Action

The force providing the centripetal action can come from various sources:

| **Scenario** | **Object in Circular Motion** | **Source of Centripetal Force** |
| :--- | :--- | :--- |
| **Swinging a ball on a string** | The ball | **Tension** in the string |
| **A planet orbiting the Sun** | The planet | **Gravitational Force** from the Sun |
| **A car turning a corner** | The car | **Friction** between the tires and the road |
| **Riding a roller coaster loop** | The passenger | **Normal Force** from the seat |




---

<!-- note kx74wrfw9h3v35pzvjt0r3ktxn85p39n | topic ms75n3deefe50fxta03bexsm4185q92a | status published -->
# Circular Motion

## Circular Motion in the Physical World

Circular motion is the movement of an object along the circumference of a circle or rotation along a circular path. It is a fundamental type of motion that appears everywhere in the universe, from the orbits of planets and stars to the spinning of a wheel on a car and the motion of electrons in an atom. Understanding the principles of circular motion is key to analyzing a vast range of physical systems.
## Definition

Circular motion describes a body's movement where its distance from a fixed central point remains constant. This constant distance is the **radius** of the circular path. A key feature of circular motion is that even if the object's speed is constant, its **velocity** is continuously changing because its direction of motion is always changing.

## Types of Circular Motion

*   **Uniform Circular Motion**: This occurs when an object moves along a circular path at a **constant speed**. While the magnitude of the velocity vector (the speed) is constant, the direction of the vector is always changing, meaning the object is continuously accelerating.

*   **Non-Uniform Circular Motion**: This occurs when an object's speed changes as it moves along a circular path. In this case, the object has both a change in the direction of its velocity and a change in the magnitude of its velocity.

| **Type** | **Speed** | **Velocity** | **Acceleration** |
| :--- | :--- | :--- | :--- |
| **Uniform** | Constant | Changing (direction only) | Centripetal acceleration only |
| **Non-Uniform**| Changing | Changing (magnitude & direction)| Centripetal and Tangential acceleration |

## Important Parameters in Circular Motion

### Angular Displacement ($\theta$)
The angle through which an object moves around a central axis. It is the rotational equivalent of linear displacement and is typically measured in **radians**.

$$\theta = \frac{s}{r}$$

where $s$ is the arc length and $r$ is the radius.

### Angular Velocity ($\omega$)
The rate of change of angular displacement. It describes how quickly the object is rotating and is measured in radians per second (rad/s).

$$\omega = \frac{\Delta\theta}{\Delta t}$$

### Angular Acceleration ($\alpha$)
The rate of change of angular velocity. It is measured in radians per second squared (rad/s²).

$$\alpha = \frac{\Delta\omega}{\Delta t}$$

Angular acceleration is positive when the rotation is speeding up and negative (deceleration) when it is slowing down.

### Tangential Velocity ($v_t$)
The instantaneous linear velocity of an object in circular motion. It is always directed tangent to the circular path and is perpendicular to the radius. Its magnitude is related to angular velocity by:

$$v = r\omega$$

### Centripetal Acceleration ($a_c$)
Since the direction of the velocity vector is always changing in circular motion, there must be an acceleration. This acceleration is called centripetal ("center-seeking") acceleration because it is always directed radially inward, towards the center of the circle. Its magnitude is given by:

$$a_c = \frac{v^2}{r} = r\omega^2$$

### Centripetal Force ($F_c$)
According to Newton's Second Law, an acceleration must be caused by a net force. The **centripetal force** is the net force that produces the centripetal acceleration, keeping the object in its circular path. This force is also always directed towards the center of the circle.

$$F_c = ma_c = \frac{mv^2}{r} = mr\omega^2$$

<Callout type="note">

Centripetal force is not a new kind of force. It is the net result of other forces (like tension, gravity, or friction) that are causing the circular motion.

</Callout>

### Centrifugal Force
This is an **apparent** or **fictitious** force that an object seems to experience, pushing it outward from the center of rotation. It is **not a real force** in an inertial (non-accelerating) frame of reference. Instead, it is a consequence of inertia, the object's tendency to continue moving in a straight line. An observer in a rotating (non-inertial) reference frame perceives this outward push as a pseudo-force.

## Summary

-   **Circular Motion** is the movement of an object in a circular path at a constant distance from a center point.
-   It is characterized by a continuously changing **velocity vector**, which means there is always an **acceleration**.
-   This **centripetal acceleration** is caused by a **centripetal force**, both of which are directed towards the center of the circle.
-   The motion can be **uniform** (constant speed) or **non-uniform** (changing speed).

| **Parameter** | **Formula** | **Description** |
| :--- | :--- | :--- |
| **Angular Displacement ($\theta$)** | $\theta = s/r$ | Angle rotated through (rad). |
| **Angular Velocity ($\omega$)** | $\omega = \Delta\theta/\Delta t$ | Rate of rotation (rad/s). |
| **Angular Acceleration ($\alpha$)** | $\alpha = \Delta\omega/\Delta t$ | Rate of change of $\omega$ (rad/s²). |
| **Tangential Velocity ($v_t$)**| $v = r\omega$ | Linear speed along the tangent. |
| **Centripetal Acceleration ($a_c$)**| $a_c = v^2/r = r\omega^2$ | Acceleration towards the center. |
| **Centripetal Force ($F_c$)** | $F_c = mv^2/r$ | Net force towards the center. |

The principles of circular motion are fundamental to understanding orbital mechanics, the design of rotating machinery, and many other areas of physics and engineering.

---

<!-- note kx75q0m0emhj4rf92rdsm5xgt185pptq | topic ms74eg0scr0c62m7vn2sq34dfn85pk79 | status published -->
# Torque and Moment of Inertia


## Mass vs. Moment of Inertia: Why Rotation Needs a New Concept

In linear motion, **mass** is the measure of an object's resistance to a change in its state of motion. In rotational motion, the equivalent concept is the **moment of inertia ($I$)**. It is a measure of an object's resistance to a change in its state of rotation. Just as it is harder to push a more massive object, it is harder to start or stop the rotation of an object with a larger moment of inertia.
## Inertia vs. Moment of Inertia

| **Concept** | **Inertia (Linear)** | **Moment of Inertia (Rotational)** |
| :--- | :--- | :--- |
| **Definition** | Resistance to change in **linear** motion. | Resistance to change in **rotational** motion. |
| **Depends on** | Mass only. | Mass **and** the distribution of that mass relative to the axis of rotation. |
| **Formula** | Not a calculated quantity; it *is* mass ($m$). | For a point mass: $I = mr^2$. For a rigid body, it is the sum of $mr^2$ for all particles. |

## Formula for a Point Mass

The moment of inertia ($I$) for a single point mass ($m$) rotating at a distance ($r$) from an axis is:

$$
I = mr^2
$$

This formula shows that the moment of inertia increases with both mass and, more significantly, the square of the distance from the axis. Distributing mass farther from the axis of rotation dramatically increases the moment of inertia.

## Moment of Inertia for a Rigid Body

A rigid body is a collection of many particles. The total moment of inertia of the body is the sum of the moments of inertia of all its individual particles.

$$
I = \sum_{i} m_i r_i^2
$$

For continuous objects, this sum becomes an integral over the entire body:

$$
I = \int r^2 \, dm
$$

In practice, pre-calculated formulas for common shapes are used:

| **Object** | **Axis of Rotation** | **Moment of Inertia ($I$)** |
| :--- | :--- | :--- |
| **Thin Hoop or Ring** | Through center, perpendicular to plane | $MR^2$ |
| **Solid Cylinder or Disc** | Through center, along axis | $\frac{1}{2}MR^2$ |
| **Solid Sphere** | Through center | $\frac{2}{5}MR^2$ |
| **Thin Rod** | Through center, perpendicular to rod | $\frac{1}{12}ML^2$ |

### Radius of Gyration

The radius of gyration ($k$) is the distance from the axis of rotation to a point where the entire mass of the body could be concentrated without changing its moment of inertia. It is given by:

$$I = Mk^2 \implies k = \sqrt{\frac{I}{M}}$$

## Analogy Between Linear and Rotational Quantities

The moment of inertia plays the same role in rotational mechanics that mass plays in linear mechanics.

| **Linear Quantity** | **Angular Quantity** | **Relationship** |
| --- | --- | --- |
| Displacement ($s$) | Angular Displacement ($\theta$) | $s = r\theta$ |
| Velocity ($v$) | Angular Velocity ($\omega$) | $v = r\omega$ |
| Acceleration ($a$) | Angular Acceleration ($\alpha$) | $a = r\alpha$ |
| **Mass (**$m$**)** | **Moment of Inertia (**$I$**)** | $I = mR^2$ |
| Force ($F$) | Torque ($\tau$) | $\tau = rF$ |
## Torque (Moment of Force)

Torque is the rotational equivalent of force, it is the turning effect of a force about an axis of rotation. For a force $\vec{F}$ applied at position vector $\vec{r}$ from the axis:

$$\vec{\tau} = \vec{r} \times \vec{F}$$

The magnitude is:

$$\tau = rF\sin\theta$$

where $\theta$ is the angle between $\vec{r}$ and $\vec{F}$. Torque is maximum when $\theta = 90^\circ$ (force perpendicular to the moment arm).

**SI unit:** N·m (Newton-metre), same dimensions as energy $[ML^2T^{-2}]$ but physically distinct.
## Newton's Second Law for Rotation

The rotational equivalent of Newton's Second Law ($F_{net} = ma$) directly involves the moment of inertia.

**Formula:**

$$
\tau_{net} = I\alpha
$$

**Derivation:**

1. Start with Newton's Second Law for a point mass: $F = ma$.
2. The tangential acceleration is related to angular acceleration by $a_t = r\alpha$. So, $F = m(r\alpha)$.
3. Torque is defined as $\tau = rF$. Substitute the expression for $F$:
   $$ \tau = r(mr\alpha) = (mr^2)\alpha $$
4. Since $I = mr^2$ for a point mass, we get:
   $$ \tau = I\alpha $$

This law states that the net torque on an object is directly proportional to its angular acceleration, and the constant of proportionality is the moment of inertia. A larger moment of inertia means a smaller angular acceleration for the same applied torque.

## Practical Examples

- **Truck Tires and Steering Wheels**: Large, heavy truck tires have a high moment of inertia, which contributes to their stability once they are rotating. The large steering wheel is a practical application of torque ($\tau = rF$); its large radius ($r$) allows the driver to apply the necessary torque to turn the wheels with less force ($F$).

- **Ice Skater Spin**: An ice skater controls their spin speed by changing their moment of inertia. With arms outstretched, $I$ is large and the spin is slow. Pulling their arms in concentrates their mass closer to the axis of rotation, decreasing $I$ and, by conservation of angular momentum, increasing their rotational speed.




---

<!-- note kx706cc1x70kkjqy97ahrx02wx85q3ty | topic ms79bn6xtjxk9dw4vp0jtjs99n85pbxm | status published -->
# Angular Momentum

Angular momentum is the rotational equivalent of linear momentum. Just as linear momentum describes an object's quantity of motion in a straight line, angular momentum describes an object's quantity of rotational motion. It is a fundamental conserved quantity in physics, crucial for understanding the dynamics of everything from spinning ice skaters and planetary orbits to the behaviour of subatomic particles.
## Definition in Terms of Linear Momentum

The angular momentum ($\vec{L}$) of a particle about a certain origin is defined as the **cross product** of its position vector ($\vec{r}$) relative to the origin and its linear momentum vector ($\vec{p}$).

**Vector Formula**:
$$
\vec{L} = \vec{r} \times \vec{p}
$$

Where:
- $\vec{r}$ is the position vector from the axis of rotation to the particle.
- $\vec{p} = m\vec{v}$ is the linear momentum of the particle.

**Magnitude**: The magnitude of the angular momentum is given by:
$$
L = rp\sin\theta = rmv\sin\theta
$$
where $\theta$ is the angle between the position vector $\vec{r}$ and the linear momentum vector $\vec{p}$.

**For Circular Motion**: When an object moves in a circle, the velocity is perpendicular to the radius ($\theta = 90^\circ$, $\sin 90^\circ = 1$), so:
$$
L = rmv
$$

## Definition for a Rigid Body

For a rigid body rotating about a fixed axis, angular momentum is expressed in terms of moment of inertia ($I$) and angular velocity ($\omega$):

$$
L = I\omega
$$

Where:
- $I$ is the **moment of inertia**, a measure of an object's resistance to changes in rotational motion (analogous to mass in linear motion).
- $\omega$ is the **angular velocity**, the rate of rotation.
## Direction of Angular Momentum

Angular momentum is a **vector quantity**. Its direction is perpendicular to the plane of rotation and is determined by the **right-hand rule**:

1. Curl the fingers of your right hand in the direction of the object's rotation.
2. Your extended thumb points in the direction of $\vec{L}$.

## Units and Dimensions of Angular Momentum

The SI unit of angular momentum is $\text{kg} \cdot \text{m}^2 \cdot \text{s}^{-1}$, which is equivalent to Joule-second ($\text{J} \cdot \text{s}$).

Dimensions: Since $L = rp$,
$$
[L] = [r][p] = \text{m} \cdot \text{kg} \cdot \text{m} \cdot \text{s}^{-1} = [ML^2T^{-1}]
$$

## Relating the Two Formulas

The two definitions $L = rmv$ and $L = I\omega$ are directly related. For a point mass $m$ rotating in a circle of radius $r$:

1. Start with: $L = rmv$
2. Use $v = r\omega$: $L = rm(r\omega)$
3. Rearrange: $L = (mr^2)\omega$
4. Since $I = mr^2$ for a point mass: $L = I\omega$

## Law of Conservation of Angular Momentum

The **Law of Conservation of Angular Momentum** states:

> If no net external torque acts on a system, the total angular momentum of the system remains constant.

$$
I_{1}\omega_1 = I_{2}\omega_2
$$

**Examples:**
- **Ice skater**: Pulling arms inward decreases $I$, so $\omega$ increases, the skater spins faster.
- **Gyroscope**: Maintains its orientation because $L$ is conserved in the absence of external torque.
- **Flywheel**: Stores rotational energy; resists changes in $\omega$ due to large $I$.
## Relationship Between Torque and Angular Momentum

Analogous to Newton's second law ($F = \Delta p / \Delta t$), the rotational equivalent is:
$$
\tau = \frac{\Delta L}{\Delta t}
$$
The net external torque equals the rate of change of angular momentum. When $\tau = 0$, $\Delta L = 0$ and angular momentum is conserved.

## Linear vs Rotational Motion: Analogy Table

| **Linear Motion** | **Rotational Motion** |
| :--- | :--- |
| Linear Momentum $p = mv$ | Angular Momentum $L = I\omega$ |
| Mass $m$ | Moment of Inertia $I$ |
| Linear Velocity $v$ | Angular Velocity $\omega$ |
| Force $F = \Delta p / \Delta t$ | Torque $\tau = \Delta L / \Delta t$ |


---

<!-- note kx739xgfjgx2vjaqyyvyb91fvs85pc48 | topic ms72svak1xr0n9sjb2rmkt6qrh85pghr | status published -->
# The Law of Conservation of Angular Momentum


## A Fundamental Rotational Conservation Law

The Law of Conservation of Angular Momentum is a fundamental principle in physics that governs the rotational motion of objects. It states that the total angular momentum of an isolated system remains constant over time. This principle is analogous to the conservation of linear momentum and is essential for understanding the behaviour of rotating systems, from spinning ice skaters to orbiting planets.
## System and Isolated System

A **system** is any collection of objects that we choose to analyse.

A system is considered **isolated with respect to rotation** if there is no net external torque acting on it. Internal torques (forces between objects within the system) always occur in equal and opposite pairs and do not change the total angular momentum of the system.

## Statement of the Law

> If the net external torque acting on a system is zero, then the total angular momentum of that system remains constant (is conserved).

## Mathematical Basis

The relationship between net external torque ($\vec{\tau}_{net}$) and the rate of change of angular momentum ($\vec{L}$) is the rotational analogue of Newton's Second Law:

$$\vec{\tau}_{net} = \frac{\Delta \vec{L}}{\Delta t}$$

This equation states that the net external torque on a system equals the rate at which its angular momentum changes.

If the system is isolated, the net external torque is zero:

$$\vec{\tau}_{net} = 0 \implies \frac{\Delta \vec{L}}{\Delta t} = 0$$

Therefore the angular momentum is constant:

$$\vec{L} = \text{constant}$$

Both the magnitude and direction of the angular momentum vector are conserved:

$$L_{i} = L_{f}$$

## The Implication: $L = I\omega = \text{constant}$

The angular momentum of a rigid body is given by:

$$L = I\omega$$

where $I$ is the moment of inertia and $\omega$ is the angular velocity.

If angular momentum is conserved, the product $I\omega$ must remain constant:

$$I_{i} \omega_i = I_{f} \omega_f$$

This has a profound consequence:
- If $I$ **decreases** (mass moves closer to the axis), $\omega$ must **increase**.
- If $I$ **increases** (mass moves away from the axis), $\omega$ must **decrease**.

## Applications and Examples

### 1. Spinning Ice Skater

An ice skater begins spinning with arms and legs extended, large $I$, slow $\omega$. When the skater pulls arms and legs in close to the body, $I$ decreases. To conserve $L = I\omega$, the angular velocity $\omega$ increases and the skater spins much faster.

### 2. Divers and Gymnasts

A diver leaves the board with a certain angular momentum. Pulling the body into a tight tuck position minimises $I$, causing $\omega$ to increase dramatically (fast rotation). Extending the body again before entry increases $I$ and slows the rotation for a controlled entry.

### 3. Formation of Stars and Planets

A large, slowly rotating cloud of interstellar gas (nebula) collapses under gravity. As the radius decreases, $I$ decreases significantly. To conserve $L$, $\omega$ increases, the cloud spins faster and faster, forming a flattened protoplanetary disk from which stars and planets form.
## Key Comparison: Linear vs Angular Momentum Conservation

| Quantity | Conserved when |
|---|---|
| Linear momentum $p = mv$ | Net external **force** = 0 |
| Angular momentum $L = I\omega$ | Net external **torque** = 0 |

A force can be applied through the centre of mass (zero torque), in that case angular momentum is conserved but linear momentum changes.
## Effect of Internal Forces

Internal forces (and the torques they create) within a system always occur in equal and opposite pairs (Newton's Third Law) and cancel out. They cannot change the total angular momentum of the system.

<SideActivity kind="activity" title="Activity: Conservation of Angular Momentum">
<p>Hold pair of dumbbells in your hand and find a turntable to rotate at full speed by holding dumbbells close to your body. As soon as you extend your arms your rotation speed (angular velocity) will decrease. Again, upon drawing your hands nearer towards your chest the angular velocity will increase.</p>
<p>Can you explain why does this happens?</p>
<p>In recent years, there has been growing interest in using flywheels as a form of energy storage for renewable energy sources, such as wind and solar power. By storing excess energy generated during peak production times, flywheels can help balance the supply and demand of electricity on the grid.</p>
</SideActivity>

---

<!-- note kx7307ynmfhsp582ttm4vyj6xx85qvh3 | topic ms70fdw8edmb3d5bw0c46r10es85p0e7 | status published -->
# Rotational Kinetic Energy


## Energy of a Spinning Object

Rotational kinetic energy is the energy an object possesses due to its rotation. Just as an object moving in a straight line has translational kinetic energy ($K.E._{trans} = \frac{1}{2}mv^2$), an object spinning about an axis has rotational kinetic energy. This form of energy is crucial for analyzing the motion of any rotating system, from a spinning planet to a rolling ball. It is measured in Joules (J), which is a derived unit.
## Definition and Formula

The rotational kinetic energy ($K.E._{rot}$) of a rigid body is defined by its moment of inertia ($I$) and its angular velocity ($\omega$).

**Formula**:
$$
K.E._{rot} = \frac{1}{2}I\omega^2
$$

This formula is the rotational analog of the translational kinetic energy formula, with:

- **Moment of Inertia ($I$)** being the rotational equivalent of mass ($m$)
- **Angular Velocity ($\omega$)** being the rotational equivalent of linear velocity ($v$)

## Derivation for a Rigid Body

A rigid body can be considered as a collection of many small particles of mass $m_i$ at a distance $r_i$ from the axis of rotation. All particles in the rigid body rotate with the same angular velocity, $\omega$.

1. The translational kinetic energy of a single particle $i$ is $K.E._i = \frac{1}{2}m_i v_i^2$.
2. The tangential velocity of this particle is related to the angular velocity by $v_i = r_i\omega$.
3. Substituting for $v_i$, the kinetic energy of the particle is $K.E._i = \frac{1}{2}m_i(r_i\omega)^2 = \frac{1}{2}m_i r_i^2 \omega^2$.
4. The total rotational kinetic energy of the entire body is the sum of the kinetic energies of all its particles:
$$
K.E._{rot} = \sum K.E._i = \sum \left(\frac{1}{2}m_i r_i^2 \omega^2\right)
$$
5. Since $\frac{1}{2}$ and $\omega^2$ are constant for all particles, we can factor them out:
$$
K.E._{rot} = \frac{1}{2} \left( \sum m_i r_i^2 \right) \omega^2
$$
6. The term in the parentheses is the definition of the **moment of inertia**, $I = \sum m_i r_i^2$.
7. This gives us the final formula:
$$
K.E._{rot} = \frac{1}{2}I\omega^2
$$

## Application: Rolling Objects on an Inclined Plane

When an object rolls without slipping down an incline, its initial potential energy ($P.E. = mgh$) is converted into both **translational** and **rotational** kinetic energy.

**Total Kinetic Energy of a Rolling Object**:
$$
K.E._{total} = K.E._{trans} + K.E._{rot} = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2
$$

By the conservation of energy, the initial potential energy equals the final total kinetic energy:
$$
mgh = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2
$$

For a rolling object, we also know that $v = r\omega$, so $\omega = v/r$.

### Case 1: A Rolling Solid Disc

- **Moment of Inertia of a Disc**: $I_{disc} = \frac{1}{2}mr^2$
- **Energy Conservation**:
$$
mgh = \frac{1}{2}mv^2 + \frac{1}{2}\left(\frac{1}{2}mr^2\right)\left(\frac{v}{r}\right)^2
$$
$$
mgh = \frac{1}{2}mv^2 + \frac{1}{4}mv^2 = \frac{3}{4}mv^2
$$
- **Final Velocity of the Disc**:
$$
v_{disc} = \sqrt{\frac{4}{3}gh} \approx 1.15\sqrt{gh}
$$

### Case 2: A Rolling Hoop (or Ring)

- **Moment of Inertia of a Hoop**: $I_{hoop} = mr^2$
- **Energy Conservation**:
$$
mgh = \frac{1}{2}mv^2 + \frac{1}{2}(mr^2)\left(\frac{v}{r}\right)^2
$$
$$
mgh = \frac{1}{2}mv^2 + \frac{1}{2}mv^2 = mv^2
$$
- **Final Velocity of the Hoop**:
$$
v_{hoop} = \sqrt{gh}
$$

### Comparison

By comparing the final velocities, we see that **$v_{disc} > v_{hoop}$**.

- **Conclusion**: The solid disc will reach the bottom of the incline before the hoop.
- **Reason**: The hoop has a larger moment of inertia (its mass is distributed farther from the center), so more of the initial potential energy is converted into rotational kinetic energy and less is converted into translational kinetic energy. The disc, with a smaller moment of inertia, "invests" less energy into rotating and more into moving forward, so it travels faster.




---

<!-- note kx774jd8xzmk9yxeg4nxkn0j0585p76z | topic ms71nvvvmmwktfv21ab3q8dsf985q3g7 | status published -->
# 4.7 Banking of Roads


## What Banking a Road Actually Does

The **banking of a road** is the design technique where the outer edge of a curved road is raised higher than the inner edge. This intentional tilting or inclination is crucial for vehicle safety, especially at higher speeds. The purpose of banking is to use the vehicle's own normal force to help provide the necessary centripetal force required to navigate the turn, thereby reducing the reliance on friction between the tires and the road surface.
## The Need for Centripetal Force in a Turn

Whenever an object moves in a circular path, it experiences a centripetal ("center-seeking") acceleration. According to Newton's Second Law, this acceleration must be caused by a net force, known as the **centripetal force ($F_c$)**, which is always directed towards the center of the circle.

$$F_c = \frac{mv^2}{r}$$

On a flat, unbanked road, this entire force must be supplied by the static friction between the tires and the road. If the required centripetal force exceeds the maximum possible friction, the vehicle will skid.

<InlineNoteTag label="Scalar and Vector Quantities" notePath="physics-11/scalar-and-vector-quantities" />

## Forces on a Banked Curve (Ideal Case)

In the ideal case, a road is banked at a specific angle, $\theta$, for a designated speed, $v$, such that no friction is required to make the turn. The two forces acting on the vehicle are:

1.  **Weight ($\vec{W} = m\vec{g}$)**: Acting vertically downward.
2.  **Normal Force ($\vec{N}$)**: Acting perpendicular to the banked road surface.

## Resolving the Normal Force

Since the centripetal force must be horizontal (pointing towards the center of the curve), we resolve the angled Normal Force into its vertical and horizontal components using <InlineNoteTag label="Rectangular Components Of A Vector" notePath="physics-11/rectangular-components-of-a-vector" />.

*   **Vertical Component ($N \cos\theta$)**: This component must balance the vehicle's weight to prevent it from moving up or down.

    $$N \cos\theta = mg \quad \text{(Equation 1)}$$

*   **Horizontal Component ($N \sin\theta$)**: This component is directed towards the center of the curve and provides the necessary centripetal force.

    $$N \sin\theta = \frac{mv^2}{r} \quad \text{(Equation 2)}$$

## Deriving the Ideal Banking Angle

To find the ideal banking angle, we combine the two equations above. By dividing Equation 2 by Equation 1, we eliminate the normal force ($N$) and the mass ($m$):

$$\frac{N \sin\theta}{N \cos\theta} = \frac{mv^2/r}{mg}$$

Using the identity $\tan\theta = \frac{\sin\theta}{\cos\theta}$, the equation simplifies to:

$$\tan\theta = \frac{v^2}{rg}$$

This gives the formula for the ideal banking angle for a specific speed and curve radius. The angle can be found using:

$$\theta = \tan^{-1}\left(\frac{v^2}{rg}\right)$$

**Key Insight**: The ideal banking angle does not depend on the mass of the vehicle. Therefore, a curve designed for a certain speed is equally effective for a small car and a large truck traveling at that same speed.


## Summary

-   **Banking of Roads** is the tilting of a curved road to assist vehicles in turning safely.
-   The primary purpose is to use a component of the **Normal Force** to provide the required **centripetal force**.
-   This reduces the reliance on **friction**, making turns safer, especially in slippery conditions or at high speeds.
-   The ideal banking angle for a given speed and radius is determined by the following relationship:

| **Concept** | **Formula** |
| :--- | :--- |
| **Ideal Banking Angle** | $\tan\theta = \frac{v^2}{rg}$ |

This engineering principle is a critical application of circular motion dynamics, ensuring the stability and safety of transportation infrastructure.

---

<!-- note kx7700tdgyd1bm32t49gd0z8yn85p2m5 | topic ms713ed968amncpc4e6h8w78xd85pa6a | status published -->
# Artificial Satellites


## Natural vs. Artificial Satellites

A **satellite** is an object that orbits a larger celestial body, held in its path by the force of gravity. Satellites can be categorized as either **natural** or **artificial**.

- **Natural satellites** are celestial bodies that formed naturally (e.g., the Moon orbiting Earth, or Jupiter's moons: Io, Europa, Ganymede, and Callisto).
- **Artificial satellites** are human-made objects intentionally placed into orbit. Since the launch of **Sputnik 1 in 1957**, thousands have been launched for communication, navigation, weather monitoring, and scientific research.
## Orbital Mechanics

For a satellite in circular orbit, the **gravitational force provides the centripetal force**:

$$\frac{GMm}{r^{\!2}} = \frac{mv^2}{r}$$

Solving for orbital velocity:

$$v_{o} = \sqrt{\frac{GM}{r}}$$

For a satellite orbiting **close to Earth's surface** ($r \approx R$), using $g = \frac{GM}{R^{\!2}}$:

$$v_{o} = \sqrt{gR} \approx 7.9 \text{ km/s}$$

Note that orbital velocity is **independent of the satellite's mass**, only the central body's mass $M$ and orbital radius $r$ matter.
## Types and Applications of Artificial Satellites

### Communication Satellites

Communication satellites relay telephone, television, radio, and internet signals between locations on Earth.

**Geostationary Orbit (GEO):** Many communication satellites are placed in a **geostationary orbit** at an altitude of approximately **35,786 km** above the equator (orbital radius $\approx 4.22 \times 10^7$ m from Earth's center). In this orbit:
- The satellite's orbital period equals Earth's rotation period (**24 hours**).
- The satellite appears **stationary** over a fixed point on the equator.
- A fixed ground antenna can always point at the satellite.
- A minimum of **3 geostationary satellites** can provide near-global coverage.

**INTELSAT** (International Telecommunications Satellite Organization, founded 1964) was one of the first providers of global satellite coverage.

### Navigation Satellites

Navigation satellites provide precise geo-spatial positioning. A receiver picks up signals from **at least 4 satellites** and uses **trilateration** to determine its 3D position (latitude, longitude, altitude).

**GPS (Global Positioning System):** Developed by the US Department of Defense, it consists of ~30 satellites in Medium Earth Orbit (MEO) and is used for personal navigation, military operations, and precision agriculture.

| **Satellite Type** | **Primary Function** | **Key Example(s)** | **Common Orbit** |
| :--- | :--- | :--- | :--- |
| **Communication** | Relay telecom signals (TV, internet, phone) | INTELSAT, Starlink | GEO / LEO |
| **Navigation** | Precise location and time information | GPS, GLONASS, Galileo | MEO |
| **Earth Observation** | Monitor surface for weather, climate, mapping | Landsat, GOES | Polar / LEO |
| **Scientific** | Research and astronomical observation | Hubble, ISS | Varies |

## Weightlessness in Orbiting Satellites

Astronauts in an orbiting satellite experience **weightlessness**. This is **not** because gravity is absent, gravity still acts on the satellite (it provides the centripetal force). Instead, weightlessness occurs because:

> Both the satellite and the astronauts are in **continuous free fall** toward Earth with the same gravitational acceleration $g$. There is no relative acceleration between them, so no contact (normal) force acts, the **apparent weight is zero**.

$$W_{apparent} = m(g - g) = 0$$
## Artificial Gravity

Prolonged weightlessness causes muscle atrophy, bone density loss, and cardiovascular problems. To counter these effects during long-duration missions, **artificial gravity** can be created by **rotating the spacecraft** around its axis.

The centripetal acceleration experienced by occupants acts as a substitute for gravity:

$$a_{c} = \omega^2 R = (2\pi f)^2 R$$

To simulate Earth's gravity, set $a_{c} = g$:

$$g = (2\pi f)^2 R \implies f = \frac{1}{2\pi}\sqrt{\frac{g}{R}}$$

where $R$ is the radius of the rotating section and $f$ is the rotation frequency. A **larger radius** requires a **smaller rotation frequency** to produce the same artificial gravity.

---

<!-- note kx712fekt38yq3cjccwxs100p985p4gp | topic ms748wmwf31ney6pd4mfpztyx185p8k7 | status published -->
# 4.17 Geostationary Orbits

## What Makes an Orbit Geostationary

A **geostationary orbit**, also known as a geosynchronous equatorial orbit (GEO), is a specific type of orbit that is crucial for modern telecommunications, broadcasting, and weather monitoring. It is a circular orbit located directly above the Earth's equator. The defining characteristic of a geostationary orbit is that a satellite placed in it revolves around the Earth at the same rate as the Earth rotates on its axis. This synchronization causes the satellite to appear stationary in the sky from the perspective of a ground observer.
## Conditions for a Geostationary Orbit

For a satellite to be in a geostationary orbit, three conditions must be met:
1.  **Orbital Period**: The satellite's orbital period must be exactly one sidereal day (approximately 23 hours, 56 minutes, and 4 seconds, or about 86,164 seconds), which is the time it takes for the Earth to complete one rotation relative to the stars. For practical purposes, this is often rounded to 24 hours (86,400 seconds).
2.  **Orbital Plane**: The orbit must be in the equatorial plane, meaning it has an inclination of 0 degrees with respect to the equator.
3.  **Orbital Direction**: The satellite must orbit in the same direction as the Earth's rotation (from west to east).

## Deriving the Orbital Radius

The specific altitude of a geostationary orbit is determined by the balance between the Earth's gravitational force and the centripetal force required to keep the satellite in a circular path.

*   **Gravitational Force ($F_g$)**: According to Newton's Law of Universal Gravitation,
    $$ F_g = \frac{G M_e m}{r^2} $$
*   **Centripetal Force ($F_c$)**: The force needed for circular motion is,
    $$ F_c = m r \omega^2 $$
    where $\omega$ is the angular velocity.

For a stable orbit, $F_g = F_c$:
$$
\frac{G M_e m}{r^2} = m r \omega^2
$$
The mass of the satellite, *m*, cancels out. We can now solve for the orbital radius, *r*.
$$
r^3 = \frac{G M_e}{\omega^2}
$$
We know that angular velocity $\omega$ is related to the orbital period *T* by $\omega = \frac{2\pi}{T}$. Substituting this in:
$$
r^3 = \frac{G M_e}{(2\pi/T)^2} = \frac{G M_e T^2}{4\pi^2}
$$
Taking the cube root gives the formula for the orbital radius:
$$
r = \left(\frac{G M_e T^2}{4\pi^2}\right)^{1/3}
$$

## Calculation of the Geostationary Altitude

Using the known constants:
*   Gravitational constant ($G$) $\approx 6.674 \times 10^{-11} \text{ N m}^2/\text{kg}^2$
*   Mass of the Earth ($M_e$) $\approx 5.972 \times 10^{24} \text{ kg}$
*   Orbital Period ($T$) $\approx 86,164 \text{ s}$

Plugging these values into the formula:
$$
r = \left(\frac{(6.674 \times 10^{-11})(5.972 \times 10^{24})(86164)^2}{4\pi^2}\right)^{1/3}
$$
$$
r \approx 4.22 \times 10^7 \text{ m} = 42,200 \text{ km}
$$

This radius *r* is the distance from the **center of the Earth**. To find the altitude *h* above the Earth's surface, we subtract the Earth's radius ($R_e \approx 6,371$ km):
$$
h = r - R_e \approx 42,200 \text{ km} - 6,371 \text{ km} \approx 35,829 \text{ km}
$$
So, a geostationary satellite must be at an altitude of approximately **35,800 km** (or about 22,236 miles) above the equator.

## Orbital Velocity

The orbital velocity ($v_o$) of a geostationary satellite can be calculated as:
$$
v_o = \frac{\text{Circumference}}{\text{Period}} = \frac{2\pi r}{T}
$$
$$
v_o = \frac{2\pi (4.22 \times 10^7 \text{ m})}{86164 \text{ s}} \approx 3070 \text{ m/s} \approx 3.07 \text{ km/s}
$$
This is the precise speed a satellite must maintain to stay in its geostationary position.




---

<!-- note kx70bgwmed2dm8pveg0gg8xghx85prcb | topic ms73tb9m2c4de89wbr9s6z3y6985qf7v | status published -->
# Orbital Velocity


## Orbital Velocity and the Balance of Forces

Orbital velocity is the precise speed that an object, such as a satellite or a planet, must maintain to stay in a stable orbit around a larger celestial body. This velocity represents a perfect balance: the gravitational pull of the central body provides the exact amount of centripetal force required to keep the orbiting object continuously turning in its circular path. If an object moves too slowly, it will fall back to the central body; if it moves too fast, it will fly off into a higher orbit or escape the gravitational pull altogether.

### 1. The Balance of Forces in an Orbit

For an object of mass $m$ (e.g., a satellite) to maintain a stable circular orbit around a much larger body of mass $M$ (e.g., a planet), the two forces acting on it must be balanced:

- **Gravitational Force ($F_g$)**: This is the attractive force pulling the satellite towards the center of the planet. According to Newton's Law of Universal Gravitation, it is given by:
$$F_g = \frac{G M m}{r^2}$$

- **Centripetal Force ($F_c$)**: This is the net force required to keep the satellite moving in a circle. It is not a separate force but the resultant force directed towards the center of the orbit. Its magnitude is:
$$F_c = \frac{m v^2}{r}$$

For a stable orbit, the gravitational force **is** the centripetal force.

### 2. Derivation of the Orbital Velocity Formula

By setting the gravitational force equal to the required centripetal force, we can derive the formula for orbital velocity ($v$).

$$F_g = F_c$$
$$\frac{G M m}{r^2} = \frac{m v^2}{r}$$

We can simplify this equation:

1. Cancel the satellite's mass ($m$) from both sides.
2. Cancel one factor of the radius ($r$) from both sides.

This leaves us with:
$$\frac{G M}{r} = v^2$$

Solving for the orbital velocity $v$:
$$\boxed{v = \sqrt{\frac{G M}{r}}}$$

### 3. Key Insights from the Formula

The formula for orbital velocity reveals two crucial points:

- **Independence from Satellite's Mass**: The mass of the orbiting object ($m$) does not appear in the final equation. This means that a small satellite and a large space station will have the exact same orbital velocity if they are at the same orbital radius.

- **Dependence on Central Body and Radius**: The required orbital speed depends only on:
  - The mass of the central body ($M$).
  - The radius of the orbit ($r$), which is the distance from the center of the central body.

- **Inverse Relationship with Radius**: As the orbital radius ($r$) increases, the required orbital velocity ($v$) decreases. Satellites in higher orbits move more slowly than satellites in lower orbits.

For a satellite orbiting very close to the Earth's surface, where $r \approx R$ (radius of Earth) and $g = \frac{GM}{R^2}$, the formula simplifies to:
$$v_o = \sqrt{gR} \approx 7.9 \text{ km/s}$$

### 4. Weightlessness in Orbiting Satellites

Astronauts inside an orbiting satellite experience **apparent weightlessness**. This is not because gravity is absent, gravity is very much present and is, in fact, the force keeping the satellite in orbit.

The reason for weightlessness is that **both the satellite and the astronauts inside it are in continuous free fall** toward Earth at exactly the same rate. Since there is no relative acceleration between the astronaut and the satellite floor, the floor exerts **no normal (contact) force** on the astronaut. It is this normal force that we perceive as weight, so when it vanishes, the astronaut feels weightless.

> **Key point:** Weightlessness in orbit is a state of **free fall**, not an absence of gravity.

This is analogous to a person in a freely falling lift: as the lift accelerates downward at $g$, the person inside feels weightless because the floor no longer pushes up on them.
## Summary Table

| **Concept** | **Formula** |
| :--- | :--- |
| **Orbital Velocity** | $v = \sqrt{\dfrac{G M}{r}}$ |
| **Near Earth Surface** | $v_o = \sqrt{gR} \approx 7.9 \text{ km/s}$ |
| **Weightlessness condition** | Normal force $= 0$ (free fall) |




---

<!-- note kx7fpy5r4rtpa9tbwdrkfq37k985pq9r | topic ms7a4r28pzd2vkmrpdgnvsx38n85pkd6 | status published -->
# Communication Satellites and Weightlessness in Orbit

## Satellites as Relay Stations in the Sky

Satellite communication is the use of artificial satellites to provide communication links between various points on Earth. These relay stations in the sky have revolutionized global telecommunications by overcoming the limitations of ground-based communication, such as the Earth's curvature and physical obstacles.
## Why Objects in Orbiting Satellites Appear Weightless

This is the key concept for this topic (SLO P-11-B-16).

### Apparent Weight vs. Real Weight

- **Real Weight** ($W = mg$): The gravitational force acting on an object due to Earth's gravity. This force is always present.
- **Apparent Weight**: The force that an object exerts on a supporting surface (or the normal force the surface exerts on the object). This is what a weighing scale measures.

Weightlessness occurs when **apparent weight = 0**, i.e., when there is no contact/normal force between the object and its support.

### The Satellite as a Free-Falling System

A satellite in circular orbit is in a state of **continuous free fall**. Gravity provides the centripetal force that keeps it in orbit:

$$F_{g} = \frac{mv^2}{r} \quad \Rightarrow \quad \frac{GMm}{r^{\!2}} = \frac{mv^2}{r}$$

Because the satellite is falling freely toward Earth (while simultaneously moving forward fast enough to keep missing it), **every object inside the satellite is also falling at exactly the same rate**.

### Why There Is No Normal Force

Consider an astronaut of mass $m$ standing on the floor of an orbiting satellite:

- The floor of the satellite accelerates downward (toward Earth's center) at the same rate as the astronaut.
- There is **no relative acceleration** between the astronaut and the floor.
- Therefore, the floor exerts **no normal force** on the astronaut.
- Since apparent weight = normal force = 0, the astronaut is **weightless**.

> **Key Point**: Gravity is NOT absent in orbit. At an altitude of ~400 km (ISS orbit), $g \approx 8.7 \text{ m/s}^2$, about 89% of surface gravity. Weightlessness is caused by free fall, not by the absence of gravity.

### Analogy: Freely Falling Lift

If a lift cable breaks and the lift falls freely under gravity, a person inside feels weightless for the same reason: both the person and the lift accelerate downward at $g$, so the floor exerts no normal force. The satellite is simply a "lift" that never hits the ground because it moves forward fast enough.
## Geostationary Satellites: The Cornerstone of Communication

The vast majority of communication satellites are placed in a **geostationary orbit** (also called a geosynchronous equatorial orbit).

- **Orbit Characteristics**: This is a specific circular orbit approximately **35,786 km** directly above the Earth's equator (orbital radius $r \approx 4.23 \times 10^4$ km from Earth's center).
- **Key Feature**: In this orbit, a satellite's orbital period is exactly 24 hours, matching the rotational period of the Earth. As a result, the satellite appears to be fixed in the same spot in the sky from the perspective of an observer on the ground.
- **Advantage**: This stationary position allows ground-based antennas (satellite dishes) to be permanently pointed at the satellite, ensuring a continuous and reliable communication link without the need for tracking.

## Global Coverage

A single geostationary satellite can see and provide coverage to a vast area of the Earth's surface.

- Each satellite can cover approximately **120° of longitude**.
- By strategically placing **three geostationary satellites** spaced 120° apart, it is possible to achieve communication coverage for almost the entire populated surface of the Earth.

## How Communication Works

The process involves a simple uplink/downlink system:

1. **Uplink**: An Earth station (a ground-based transmitter) sends a signal up to the satellite.
2. **Transponder**: The satellite receives the signal, amplifies it, possibly changes its frequency, and retransmits it back to Earth.
3. **Downlink**: The retransmitted signal is received by other Earth stations within the satellite's coverage area.

## Microwaves: The Chosen Frequency

Communication satellites operate using **microwaves** because:

- **Line-of-Sight Travel**: Microwaves travel in straight lines, ideal for point-to-point satellite communication.
- **Atmospheric Penetration**: They pass through the Earth's atmosphere with minimal interference.
- **High Bandwidth**: They can carry large amounts of information simultaneously.

## Powering the Satellites

Satellites are powered by large **solar panels** that convert sunlight into electricity, stored in rechargeable batteries for use during Earth's shadow (eclipse).

## INTELSAT: A Pioneer in Global Communication

The **International Telecommunications Satellite Organization (INTELSAT)**, formed in 1964, operates a large fleet of satellites providing television broadcasting, corporate networks, and mobile communications worldwide. Modern INTELSAT satellites operate at microwave frequencies (4, 6, 11, and 14 GHz) and can handle tens of thousands of two-way telephone circuits and multiple TV channels simultaneously.

## Summary: Weightlessness in Orbit

| Condition | Normal Force | Apparent Weight |
|---|---|---|
| Stationary on Earth | $N = mg$ | $mg$ |
| Lift accelerating upward | $N = m(g+a)$ | $> mg$ |
| Lift accelerating downward | $N = m(g-a)$ | $< mg$ |
| Free fall / Orbit | $N = 0$ | $0$ (weightless) |

---

<!-- note kx750cm23jc2rrdxpgavpq3j3s85p2p3 | topic ms76gaa9mfnty38t8vrry5y5kx85p7kv | status published -->
# Weightlessness in Orbit

## The Weightlessness Misconception

Weightlessness is the sensation of having no weight, experienced by objects and people in a state of free fall. It is a common misconception that there is no gravity in space. At the altitude of a typical orbiting spacecraft such as the International Space Station (ISS), Earth's gravity is still about 90% as strong as it is on the surface. The feeling of weightlessness occurs because the spacecraft, and everything inside it, are continuously falling towards the Earth.
## Mass vs. Weight

- **Mass (m)** is an intrinsic property of an object, measuring its inertia. It is a scalar quantity and remains constant everywhere.
- **Weight (W)** is the force of gravity acting on an object's mass ($W = mg$). It is a vector quantity.

## Apparent Weight and Free Fall

What we perceive as our "weight" is not the force of gravity itself, but the normal contact force exerted on us by a surface pushing back against gravity. This contact force is called **apparent weight**.

Free fall is the motion of an object where gravity is the only force acting on it. In this state, there are no contact forces, and the apparent weight becomes zero.

## Weightlessness in a Falling Elevator

A classic thought experiment to understand weightlessness is an elevator whose cable has snapped. The elevator and the person inside are both in free fall, accelerating downwards at the same rate $g$. Because the person is falling at the same rate as the elevator floor, the floor cannot push up on them. The normal contact force becomes zero, and the person experiences the sensation of weightlessness, floating inside the elevator.

Mathematically, the apparent weight ($T$ or Normal Force) in an accelerating elevator is:

$$
T = W - F_{net} = mg - ma
$$

When the elevator is in free fall, its acceleration $a$ is equal to $g$:

$$
T = mg - mg = 0
$$

## Weightlessness in an Orbiting Spacecraft

An orbiting spacecraft is in a perpetual state of free fall. It is constantly falling towards the Earth, but it also has a very high sideways velocity. This high tangential speed means that as it falls, the Earth's surface curves away from it at the same rate. The spacecraft "misses" the ground and continuously falls "around" the Earth.

Since the spacecraft and the astronauts inside are falling together at the same rate, there is no contact force between them. The astronauts float relative to the spacecraft, creating the experience of weightlessness.

## Orbital Velocity (Critical Velocity)

For a satellite or spacecraft to maintain a stable orbit, it must travel at a specific horizontal speed, known as **orbital velocity** or critical velocity. At this speed, the force of gravity provides the exact amount of centripetal force needed to keep the satellite in its circular path.

For more details on circular motion and centripetal force, refer to <InlineNoteTag label="Centripetal Force and Acceleration" notePath="physics-11/centripetal-force-and-acceleration" />.

### Derivation

For a satellite of mass $m$ orbiting at a radius $r$ from the center of the Earth:

- **Gravitational Force ($F_g$)**: $F_g = mg$ (where $g$ is the acceleration due to gravity at that altitude)
- **Centripetal Force ($F_c$)**: $F_c = \frac{mv^2}{r}$

For a stable orbit, these two forces must be equal:

$$
F_g = F_c
$$

$$
mg = \frac{mv^2}{r}
$$

The mass of the satellite ($m$) cancels out on both sides:

$$
g = \frac{v^2}{r}
$$

Solving for the orbital velocity $v$:

$$
v^2 = gr
$$

$$
v = \sqrt{gr}
$$

The radius of the orbit $r$ is the sum of the Earth's radius ($R$) and the satellite's altitude ($h$): $r = R + h$.

$$
v = \sqrt{g(R+h)}
$$

### Example: Near-Earth Orbit

For a satellite in a low Earth orbit, the altitude $h$ is small compared to the Earth's radius $R$, so we can approximate $r \approx R$.

- $g \approx 9.8 \text{ m/s}^2$
- $R \approx 6.4 \times 10^6 \text{ m}$

$$
v = \sqrt{(9.8 \text{ m/s}^2)(6.4 \times 10^6 \text{ m})} \approx \sqrt{62.72 \times 10^6 \text{ m}^2/\text{s}^2}
$$

$$
v \approx 7920 \text{ m/s} \approx 7.9 \text{ km/s}
$$

This is the critical velocity required to maintain a stable orbit close to the Earth's surface.

## Artificial Gravity

Prolonged weightlessness causes serious health problems including muscle atrophy, bone density loss, and cardiovascular deconditioning. To counter these effects during long-duration space missions, **artificial gravity** can be created.

### How Artificial Gravity Works

Artificial gravity is produced by **rotating the spacecraft or space station**. When a cylindrical or ring-shaped station rotates, the outer rim (floor) pushes inward on the inhabitants, providing a centripetal force. The inhabitants perceive this inward push as a "weight" directed outward toward the floor, simulating the sensation of gravity.

The centripetal acceleration experienced by an inhabitant at radius $R$ from the axis of rotation is:

$$
a_c = \omega^2 R
$$

To simulate Earth's gravity, this is set equal to $g$:

$$
\omega^2 R = g \implies \omega = \sqrt{\frac{g}{R}}
$$

In terms of rotation frequency $f$ (where $\omega = 2\pi f$):

$$
4\pi^2 f^2 R = g \implies f = \frac{1}{2\pi}\sqrt{\frac{g}{R}}
$$

**Key point:** The direction of artificial gravity is **outward** (away from the axis of rotation), so inhabitants stand with their heads toward the center and feet toward the outer rim.
## Summary Table

| **Term** | **Description** |
| :--- | :--- |
| **Real Weight (W)** | The force of gravity on an object ($mg$). |
| **Apparent Weight** | The contact force supporting an object. This is what we feel as "weight." |
| **Free Fall** | Motion under the influence of gravity alone. |
| **Weightlessness** | The state of having zero apparent weight, experienced during free fall. |
| **Artificial Gravity** | Simulated gravity produced by rotating a spacecraft so that $a_c = \omega^2 R = g$. |




---

<!-- note kx76493fbs7bnktjsb8b16zxy585qszq | topic ms784mf72rezjcxjx8h1vnk1jd85pq8t | status published -->
# 4.16 Artificial Gravity


## Simulating Gravity in a Weightless Environment

Artificial gravity is the simulation of a gravitational force in a weightless environment, such as a spacecraft in orbit or deep space. For long-duration space missions, the prolonged absence of gravity (microgravity) has been shown to cause significant health problems for astronauts, including muscle atrophy, bone density loss, and cardiovascular issues. Generating artificial gravity is considered a critical technology for enabling future human exploration of the solar system. The most practical method for creating artificial gravity is by using the **centripetal force** produced by the rotation of a spacecraft.
## The Principle: Centripetal Force as Gravity

The sensation of weight we feel on Earth is due to the normal force that the ground exerts on us, counteracting the force of gravity. In a rotating spacecraft, a similar pushing force is created. As the spacecraft spins, the inner floor constantly pushes on the inhabitants to keep them moving in a circle. This inward-directed force, the **centripetal force**, creates an artificial sense of down towards the floor, mimicking the effects of gravity.

The acceleration experienced by an object in this rotating system is the **centripetal acceleration ($a_c$)**. To simulate Earth's gravity, this acceleration is set to be equal to $g$ (approximately 9.8 m/s$^2$).

## Relationship Between Rotation and Gravity

The required centripetal acceleration depends on two key factors: the **radius of rotation ($r$)** and the **speed of rotation**. The speed can be described by either the tangential velocity ($v$) or, more conveniently, the **angular velocity ($\omega$)**.

**Formula for Centripetal Acceleration:**

$$a_c = \frac{v^2}{r} = \omega^2 r$$

**To Simulate Earth's Gravity:** We set $a_c = g$.

$$g = \omega^2 r$$

## Calculating the Required Angular Velocity ($\omega$)

From the equation above, we can solve for the angular velocity needed to produce an artificial gravity of $1g$.

$$\omega = \sqrt{\frac{g}{r}}$$

This formula shows that for a larger radius ($r$), a smaller angular velocity ($\omega$) is needed to achieve the same gravitational effect. This is important because high rotation speeds can cause disorientation and motion sickness in astronauts.

## Calculating the Required Frequency ($f$)

It is often useful to express the rotation rate in terms of frequency ($f$), the number of revolutions per second (Hz), or revolutions per minute (RPM). The relationship between angular velocity and frequency is:

$$\omega = 2\pi f$$

Substituting this into the gravity equation ($g = \omega^2 r$):

$$g = (2\pi f)^2 r = 4\pi^2 f^2 r$$

Solving for the frequency $f$:

$$f = \frac{1}{2\pi} \sqrt{\frac{g}{r}}$$

## Challenges and Design Considerations

While the principle is straightforward, designing a practical artificial gravity system presents challenges:

- **Size vs. Speed:** As shown by the formulas, a small-radius spacecraft would need to spin very rapidly to generate $1g$. For example, a 10-meter radius centrifuge would need to rotate at about 9.5 RPM, a speed likely to cause severe motion sickness. To keep the rotation rate comfortable (e.g., 1-2 RPM), the radius of the habitat must be very large (hundreds of meters). This has led to designs featuring large rotating rings or two spacecraft modules connected by a long tether.

- **Coriolis Effect:** In a rotating frame of reference, moving objects appear to be deflected by a Coriolis force. This can make simple tasks like throwing a ball or even moving one's head feel unnatural and disorienting. The effect is less pronounced at slower rotation speeds and larger radii.

- **Gravity Gradient:** In a small rotating habitat, the centripetal acceleration at a person's head will be noticeably less than at their feet, creating an uncomfortable tidal effect. A larger radius minimizes this gradient.




---

<!-- note kx70kfyaa465sejn0g1w92bj1985qgk6 | topic ms78qvxsv55r6cxkd89q3d8ajh85q87z | status published -->
# Apparent Weight in an Elevator


## Real Weight vs. What a Scale Actually Measures

An object's **real weight** is the gravitational force acting on it, given by $W = mg$. However, the weight we *feel* or measure with a scale is actually the contact force, such as a normal force or tension, that supports us. This measured force is called **apparent weight**. In an accelerating frame of reference, such as an elevator, the apparent weight can differ from the real weight. This phenomenon provides a clear application of Newton's Second Law of Motion.

<CaptionedImage src="kg2eqan2aq1bb86tw514kewhgd8dh02g" alt="Figure 1: Free body diagram of a person in an elevator" caption="Figure 1: Free body diagram of a person in an elevator" />
## Analyzing the Forces

Consider a person of mass $m$ standing on a weighing scale inside an elevator. The scale measures the normal force $N$. The same analysis applies if the person is hanging from a spring balance, which measures tension $T$. We examine four scenarios to determine the apparent weight in each case.

### Case 1: Elevator at Rest or Moving with Constant Velocity

**Condition**: The elevator's acceleration is zero ($a = 0$).

**Analysis**: Since there is no acceleration, the net force on the person is zero. The upward normal force $N$ must balance the downward force of gravity $W = mg$.

**Applying Newton's Second Law**:
$$N - mg = ma = m(0) = 0$$

**Result**:
$$N = mg$$

In this case, the apparent weight equals the real weight.

### Case 2: Elevator Accelerating Upwards

**Condition**: The elevator accelerates upwards with acceleration $a$.

**Analysis**: To accelerate the person upwards, there must be a net upward force. The upward normal force from the scale must be greater than the downward force of gravity.

**Applying Newton's Second Law**:
$$N - mg = ma$$

**Result**:
$$N = mg + ma = m(g + a)$$

The apparent weight is greater than the real weight. The person feels "heavier."

### Case 3: Elevator Accelerating Downwards

**Condition**: The elevator accelerates downwards with acceleration $a$.

**Analysis**: To accelerate the person downwards, the net force must be directed downward. The downward force of gravity exceeds the upward normal force from the scale.

**Applying Newton's Second Law**:
$$mg - N = ma$$

**Result**:
$$N = mg - ma = m(g - a)$$

The apparent weight is less than the real weight. The person feels "lighter."

### Case 4: Elevator in Free Fall

**Condition**: The elevator cable snaps, and it falls freely. The downward acceleration equals the acceleration due to gravity ($a = g$).

**Analysis**: This is a special case of downward acceleration. The person and the scale fall at the same rate.

**Applying the formula from Case 3**:
$$N = m(g - a)$$

Substitute $a = g$:
$$N = m(g - g)$$

**Result**:
$$N = 0$$

The apparent weight is zero. The scale reads zero, and the person experiences the sensation of **weightlessness**.

## Summary of Cases

| Scenario | Acceleration ($a$) | Apparent Weight ($N$) | Sensation |
|----------|-------------------|----------------------|------------|
| At Rest or Constant Velocity | $a = 0$ | $N = mg$ | Normal Weight |
| Accelerating Upwards | Upward ($+$) | $N = m(g+a)$ | Heavier |
| Accelerating Downwards | Downward ($-$) | $N = m(g-a)$ | Lighter |
| Free Fall | $a = g$ (Downward) | $N = 0$ | Weightless |




---

<!-- note kx7e2ez7bfsgf5pqxcvzr2mbrs85qnna | topic ms7cep3zadp8radr9qjmnw91h985q0ft | status published -->
# Newton's vs. Einstein's View on Gravitation

## Two Competing Pictures of Gravity

Gravitation is the fundamental force of attraction that governs the motion of celestial bodies and objects on Earth. For over two centuries, **Isaac Newton's** description of gravity as a universal force was the accepted scientific truth. However, in the early 20th century, **Albert Einstein's** General Theory of Relativity presented a revolutionary new perspective, describing gravity not as a force, but as a consequence of the geometry of spacetime itself.
## Newton's View on Gravitation

Newton's Law of Universal Gravitation, published in 1687, describes gravity as an intrinsic property of matter.

*   **Gravity as a Force**: Newton proposed that gravity is an instantaneous force of attraction that exists between any two objects with mass.
*   **Mathematical Law**: The strength of this force is directly proportional to the product of the two masses and inversely proportional to the square of the distance between their centers.
    $$
    F = G \frac{m_{1} m_{2}}{r^{\!2}}
    $$
*   **Mechanism**: Newton's theory describes *how* gravity behaves but does not explain the underlying mechanism or *why* this force exists.

## Einstein's View on Gravitation

Einstein's General Theory of Relativity (1915) redefined gravity as a manifestation of the curvature of spacetime.

*   **Spacetime Fabric**: Einstein unified the three dimensions of space and the one dimension of time into a single four-dimensional continuum called **spacetime**.
*   **Curvature of Spacetime**: He theorized that mass and energy warp or curve this spacetime fabric. The more massive an object, the greater the curvature it creates.
*   **Motion along Geodesics**: Objects moving through spacetime follow the straightest possible path, known as a **geodesic**. What we perceive as the "force" of gravity is simply an object following a geodesic through the curved spacetime created by another massive object.

**Analogy**: A common analogy is placing a heavy bowling ball on a stretched rubber sheet. The ball creates a dip (a curve) in the sheet. If a smaller marble is rolled nearby, it will follow the curvature and spiral inward towards the bowling ball, not because of a direct "pulling force," but because the shape of the sheet dictates its path.

### Comparison of the Two Views

| **Aspect** | **Newton's View** | **Einstein's View** |
| :--- | :--- | :--- |
| **Nature of Gravity** | An attractive **force** between two masses. | A consequence of the **curvature of spacetime**. |
| **Mechanism** | Acts instantaneously over any distance. | Propagates at the speed of light. |
| **Effect on Light** | Did not originally predict an effect on light. | Gravity bends the path of light (gravitational lensing).|
| **Source of Gravity**| Mass only. | Mass and all other forms of energy. |
| **Applicability** | Highly accurate in weak gravitational fields (most everyday situations). | Universally applicable, especially accurate in strong gravitational fields. |

## Key Evidence for Einstein's Theory

Einstein's theory made several predictions that differed from Newton's, which have since been experimentally verified.

*   **Bending of Starlight**: During a solar eclipse in 1919, astronomers observed that the light from distant stars was bent as it passed by the Sun. The amount of deflection was exactly what Einstein's theory predicted, twice the amount that a Newtonian interpretation would suggest.
*   **Orbit of Mercury**: General relativity perfectly explained a small, long-standing anomaly in the orbit of Mercury (its "precession") that could not be accounted for by Newton's laws.
*   **Equivalence Principle**: Einstein noted that the effects of gravity are locally indistinguishable from the effects of acceleration. An observer in a closed elevator cannot tell if they are being pulled down by gravity or accelerated upward.
## Weightlessness in Orbiting Satellites

Understanding gravity, whether through Newton's or Einstein's framework, helps explain one of the most striking phenomena of space travel: **apparent weightlessness**.

### Why Astronauts Feel Weightless

An orbiting satellite (and everything inside it) is in a state of **continuous free fall** toward Earth. The satellite moves forward fast enough that as it falls, Earth's surface curves away beneath it at the same rate, so it never actually hits the ground. This is what an orbit is.

*   **Newton's explanation**: The gravitational force provides the centripetal force for circular motion. Both the satellite and the astronaut inside are accelerating toward Earth at the same rate ($a = g$ at that altitude). Since there is no contact force (normal force) between the astronaut and the floor of the satellite, the astronaut's **apparent weight is zero**.

    $$W_{apparent} = m(g - a) = m(g - g) = 0$$

*   **Einstein's explanation**: The satellite follows a geodesic through curved spacetime. Inside the satellite, there is no local curvature, the astronaut is in a locally flat (inertial) region of spacetime. There is no "force" to feel, hence weightlessness.

### Key Point

> Weightlessness does **not** mean there is no gravity. At typical orbital altitudes (~400 km for the ISS), gravitational acceleration is still about $8.7\ \text{m/s}^2$, roughly 89% of surface gravity. The astronaut feels weightless because they and their surroundings are all falling together at the same rate.
## Summary

-   **Newton** described gravity as a **universal force of attraction** between masses, governed by the inverse-square law ($F = G m_{1} m_{2} / r^{\!2}$).
-   **Einstein** redefined gravity as the **curvature of spacetime**. Massive objects warp spacetime, and other objects simply follow the straightest possible paths (geodesics) through this curved geometry.
-   Einstein's theory is more accurate, especially in strong gravitational fields, and correctly predicted phenomena like the **bending of light** and the full orbit of Mercury.
-   For most practical, everyday applications where gravity is weak, Newton's laws remain an excellent and much simpler approximation.
-   **Weightlessness in orbiting satellites** occurs because both the satellite and its occupants are in continuous free fall, accelerating toward Earth at the same rate, so no contact (normal) force acts between them, making apparent weight zero.
