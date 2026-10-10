<!-- note kx732kgn3zjecjxajq5rf6d4jh85qgpm | topic ms733yh4kj2sepecdqb4k7tbs185p2b5 | status published -->
# Equilibrium

In physics, **equilibrium** is the state of an object in which all the forces and torques acting upon it are balanced. This results in no change in the object's motion: it will either remain at rest or continue to move at a constant velocity.
## Types of Equilibrium

There are two primary types of mechanical equilibrium:

*   **Static Equilibrium**: An object is in static equilibrium when it is completely at rest ($v = 0$, $\omega = 0$). Both conditions of equilibrium are satisfied. For example, a book resting on a table is in static equilibrium because the downward gravitational force is perfectly balanced by the upward normal force.

*   **Dynamic Equilibrium**: An object is in dynamic equilibrium when it moves at a constant velocity (zero acceleration, $a = 0$, $\alpha = 0$). A classic example is a parachutist who has reached terminal velocity, the upward air resistance equals the downward gravitational force, so they fall at a constant speed.

| **Type** | **State of Motion** | **Net Force** | **Example** |
| :--- | :--- | :--- | :--- |
| **Static** | At Rest ($v = 0$) | $\sum \vec{F} = 0$ | A book lying on a table |
| **Dynamic** | Constant Velocity ($a = 0$) | $\sum \vec{F} = 0$ | A car at steady speed on a straight road |
## Conditions for Equilibrium

For an object to be in **complete equilibrium**, two conditions must be satisfied simultaneously.

### First Condition of Equilibrium (Translational Equilibrium)

The vector sum of all external forces acting on the object must be zero. This ensures the object has no linear acceleration.

$$\sum \vec{F} = 0$$

In component form:

$$\sum F_{x} = 0 \qquad \sum F_{y} = 0$$

Meeting this condition prevents linear acceleration but does **not** prevent rotation. See also <InlineNoteTag label="Rectangular Components Of A Vector" notePath="physics-11/rectangular-components-of-a-vector" /> for resolving forces into components.

### Second Condition of Equilibrium (Rotational Equilibrium)

The net external torque acting on the object about **any** pivot point must be zero. This ensures the object has no angular acceleration.

> **Torque** ($\vec{\tau}$) is the rotational equivalent of force, it represents the turning effect of a force about an axis: $\vec{\tau} = \vec{r} \times \vec{F}$.

$$\sum \vec{\tau} = 0$$

**Sign Convention:** Counter-clockwise (CCW) torques are **positive**; clockwise (CW) torques are **negative**.

When $\sum \vec{\tau} = 0$, the total clockwise torque equals the total counter-clockwise torque, and the object does not change its rate of rotation.

### Couple

A **couple** consists of two forces that are:
- Equal in magnitude
- Opposite in direction
- Parallel but with **different lines of action**

A couple produces a **pure torque** (rotation) without any net translational force:
$$\sum \vec{F} = 0 \quad \text{but} \quad \sum \vec{\tau} \neq 0$$

### Complete Equilibrium

An object is in **complete equilibrium** only when **both** conditions are satisfied simultaneously:

| Condition | Expression | Effect |
| :--- | :--- | :--- |
| First (Translational) | $\sum \vec{F} = 0$ | No linear acceleration |
| Second (Rotational) | $\sum \vec{\tau} = 0$ | No angular acceleration |


---

<!-- note kx78gmg8d6jffzhwtvkbnfr57h85pbmr | topic ms72z9h7ejb4jha7n4ssmjs8s185paws | status published -->
# Finding a Vector from its Components (Vector Composition)

## Reconstructing a Vector from Its Components

Vector composition is the process of determining a single vector from its perpendicular components. This is the reverse of vector resolution, which is covered in <InlineNoteTag label="Rectangular Components of a Vector" notePath="physics-11/rectangular-components-of-a-vector" />. Vector composition allows us to combine horizontal (x-component) and vertical (y-component) influences to find the true magnitude and direction of the resultant vector. This skill is essential for analyzing forces, velocities, and displacements in two dimensions.

<CaptionedImage src="kg28es69hmm62t6p061s41cs818dhh0e" alt="Figure 1: Vector composition showing components and resultant vector" caption="Figure 1: Vector composition showing components and resultant vector" />

Given the perpendicular components of a vector, typically $A_x$ (the x-component) and $A_y$ (the y-component), we can find the original vector $\vec{A}$ by determining its magnitude and direction.
## Visualizing the Vector

The components $A_x$ and $A_y$ can be visualized as the legs of a right-angled triangle.

- The x-component, $A_x$, is the base of the triangle.
- The y-component, $A_y$, is the height of the triangle.
- The resultant vector, $\vec{A}$, is the hypotenuse, connecting the starting point of $A_x$ to the endpoint of $A_y$.

## Calculating the Magnitude of the Vector

The magnitude of a vector is its length. Since the components form a right-angled triangle, we can use the Pythagorean theorem to find the magnitude ($A$).

**Formula**:
$$
A = \sqrt{A_x^2 + A_y^2}
$$

- **Explanation**: The square of the magnitude of the resultant vector (the hypotenuse) equals the sum of the squares of its components (the two legs).

**Example**:
A force has a horizontal component $F_x = 3.0\,\text{N}$ and a vertical component $F_y = 4.0\,\text{N}$. Find its magnitude.
$$
F = \sqrt{(3.0)^2 + (4.0)^2} = \sqrt{9.0 + 16.0} = \sqrt{25.0} = 5.0\,\text{N}
$$

In three dimensions, the vector is represented as:
$$
\vec{A} = A_x\hat{i} + A_y\hat{j} + A_z\hat{k}
$$
and its magnitude extends to:
$$
A = \sqrt{A_x^2 + A_y^2 + A_z^2}
$$

## Determining the Direction of the Vector

The direction of a vector is the angle it makes with a reference axis, typically the positive x-axis. We can find this angle using the inverse tangent.

**Formula**:
$$
\theta = \tan^{-1}\left(\frac{A_y}{A_x}\right)
$$

- **Explanation**: The tangent of angle $\theta$ in a right-angled triangle is the ratio of the opposite side ($A_y$) to the adjacent side ($A_x$).

**Important Note on Quadrants**: The standard $\tan^{-1}$ function returns an angle only between $-90^\circ$ and $+90^\circ$. To find the correct angle in the full $360^\circ$ system, you must consider the signs of $A_x$ and $A_y$.

Let $\phi = \tan^{-1}\left|\dfrac{A_y}{A_x}\right|$ be the **reference angle**.

| Quadrant | Sign of $A_x$ | Sign of $A_y$ | Direction Angle ($\theta$) |
| :--- | :--- | :--- | :--- |
| **I** | + | + | $\theta = \phi$ |
| **II** | - | + | $\theta = 180^\circ - \phi$ |
| **III** | - | - | $\theta = 180^\circ + \phi$ |
| **IV** | + | - | $\theta = 360^\circ - \phi$ |

**Example (Quadrant II)**:
A displacement vector has components $D_x = -3.0\,\text{m}$ and $D_y = 4.0\,\text{m}$. Find its direction.

1. **Find the reference angle $\phi$**:
   $$
   \phi = \tan^{-1}\left(\left|\frac{4.0}{-3.0}\right|\right) = \tan^{-1}(1.33) \approx 53.1^\circ
   $$

2. **Determine the correct angle $\theta$**:
   Since $A_x < 0$ and $A_y > 0$, the vector is in Quadrant II.
   $$
   \theta = 180^\circ - 53.1^\circ = 126.9^\circ
   $$

The direction is $126.9^\circ$ counter-clockwise from the positive x-axis.

## Special Case: Equal Components

When $A_x = A_y$ (both positive), the vector makes an angle of $45^\circ$ with the x-axis.

---

<!-- note kx78e1ftthm77akeddcbwb5y6985q0kk | topic ms7fwpgwdkyf7qva0zd8568k9x85p590 | status published -->
# Resolution of Vectors into Rectangular Components

Vector resolution is the process of splitting a single vector into two or more components that, when added together, produce the original vector. The most common and useful method is to break a vector down into its **rectangular components**: two perpendicular vectors aligned with the x and y-axes of a Cartesian coordinate system. This technique is fundamental in physics for simplifying the analysis of forces, velocities, and other vector quantities.

## Visualizing the Components

Imagine a vector $\vec{A}$ in a 2D plane, starting from the origin. This vector has a magnitude (length) $A$ and makes an angle $\theta$ with the positive x-axis. We can project the "shadow" of this vector onto the x-axis and the y-axis. These projections are the rectangular components of $\vec{A}$.

*   **x-component ($\vec{A_x}$)**: The projection of $\vec{A}$ onto the x-axis.
*   **y-component ($\vec{A_y}$)**: The projection of $\vec{A}$ onto the y-axis.

Together, $\vec{A_x}$, $\vec{A_y}$, and the original vector $\vec{A}$ form a right-angled triangle, with $\vec{A}$ as the hypotenuse. For more details on vector properties, refer to <InlineNoteTag label="Scalar And Vector Quantities" notePath="physics-11/scalar and vector quantities" />.

<InteractiveFigure componentKey="vectorResolutionInteractive" props="{&quot;initialMagnitude&quot;:5,&quot;initialAngleDeg&quot;:40,&quot;maxMagnitude&quot;:10,&quot;unitLabel&quot;:&quot;N&quot;,&quot;vectorLabel&quot;:&quot;A&quot;}" caption="Drag the tip of A, or type its magnitude and angle directly, to see both rectangular components update live." />
## Calculating the Magnitudes of the Components

Using trigonometry on this right-angled triangle, we can find the magnitudes of the components, $A_x$ and $A_y$:

*   **x-component (Adjacent side)**: The magnitude of the x-component is found using the cosine function.

$$
A_x = A \cos(\theta)
$$

*   **y-component (Opposite side)**: The magnitude of the y-component is found using the sine function.

$$
A_y = A \sin(\theta)
$$

**Important Note**: These formulas assume the angle $\theta$ is measured from the positive x-axis. If the angle is given with respect to the y-axis, the roles of sine and cosine will be reversed.

## Representing a Vector in Component Form

Once we have the components, we can express the original vector as the sum of its component vectors. Using the unit vectors $\hat{i}$ (for the x-direction) and $\hat{j}$ (for the y-direction), the vector $\vec{A}$ can be written as:

$$
\vec{A} = \vec{A_x} + \vec{A_y} = A_x \hat{i} + A_y \hat{j}
$$

Substituting the trigonometric forms, we get:

$$
\vec{A} = (A \cos\theta) \hat{i} + (A \sin\theta) \hat{j}
$$

This representation is particularly useful when performing vector operations. See also <InlineNoteTag label="Scalar Product" notePath="physics-11/scalar product" />.

## Reconstructing the Original Vector (Vector Composition)

The process can be reversed. If you know the components $A_x$ and $A_y$, you can find the magnitude and direction of the original vector $\vec{A}$.

*   **Magnitude (using Pythagorean Theorem)**:

$$
A = \sqrt{A_x^2 + A_y^2}
$$

*   **Direction (using Inverse Tangent)**:

$$
\theta = \tan^{-1}\left(\frac{A_y}{A_x}\right)
$$

(Care must be taken to place the angle in the correct quadrant based on the signs of $A_x$ and $A_y$.)

For a step-by-step process of finding a vector from its components, see <InlineNoteTag label="Finding Vector From Its Components" notePath="physics-11/finding-vector-from-its-components" />.

## Summary

-   **Vector Resolution** is the process of splitting a vector into its perpendicular (rectangular) components.
-   The components are typically aligned with the **x and y-axes**.
-   The magnitudes of the components are found using trigonometry:
    -   $A_x = A \cos\theta$
    -   $A_y = A \sin\theta$
-   This technique simplifies complex vector problems, particularly vector addition, by allowing us to work with simple scalar quantities (the component magnitudes) along each axis independently.
-   The rectangular component method is extensively used in analyzing <InlineNoteTag label="Equilibrium" notePath="physics-11/equilibrium" /> of forces.

| **Concept** | **Formula** |
| :--- | :--- |
| **x-component** | $A_x = A \cos\theta$ |
| **y-component** | $A_y = A \sin\theta$ |
| **Vector Magnitude** | $A = \sqrt{A_x^2 + A_y^2}$ |
| **Vector Direction** | $\theta = \tan^{-1}\left(\frac{A_y}{A_x}\right)$ |

---

<!-- note kx7bnxszt6vswwwwfm197h5vrx85p5am | topic ms72a4zr15fjvv649qvhss825n85q24z | status published -->
# Scalar Product (Dot Product) of Two Vectors

The scalar product, commonly known as the **dot product**, is one of the fundamental ways to multiply two vectors. This operation takes two vectors and returns a single **scalar** number. The dot product has important physical interpretations, most notably in the calculation of mechanical work and the projection of one vector onto another.

<InlineNoteTag label="Scalar and Vector Quantities" notePath="physics-11/scalar-and-vector-quantities" />
## Definition

The dot product of two vectors, $\vec{A}$ and $\vec{B}$, is a scalar quantity equal to the product of their magnitudes and the cosine of the angle ($\theta$) between them.

**Formula**:
$$
\vec{A} \cdot \vec{B} = |\vec{A}| |\vec{B}| \cos(\theta)
$$

Where:

- $|\vec{A}|$ (or simply $A$) is the magnitude of vector $\vec{A}$.
- $|\vec{B}|$ (or simply $B$) is the magnitude of vector $\vec{B}$.
- $\theta$ is the angle between the two vectors when they are placed tail to tail.

## Geometric Interpretation

The dot product can be geometrically interpreted as the magnitude of one vector multiplied by the projection of the second vector onto the first.
$$
\vec{A} \cdot \vec{B} = |\vec{A}| \times (|\vec{B}| \cos\theta)
$$

Here, $(|\vec{B}| \cos\theta)$ is the scalar projection of vector $\vec{B}$ onto vector $\vec{A}$. This tells us how much of vector $\vec{B}$ points in the same direction as vector $\vec{A}$.

## Dot Product using Rectangular Components

If two vectors are expressed in terms of their rectangular components, their dot product can be calculated by multiplying their corresponding components and summing the results.

<InlineNoteTag label="Rectangular Components Of A Vector" notePath="physics-11/rectangular-components-of-a-vector" />

Given:
$$
\vec{A} = A_{x} \hat{i} + A_{y} \hat{j} + A_{z} \hat{k}
$$
$$
\vec{B} = B_{x} \hat{i} + B_{y} \hat{j} + B_{z} \hat{k}
$$

The dot product is:
$$
\vec{A} \cdot \vec{B} = A_{x} B_{x} + A_{y} B_{y} + A_{z} B_{z}
$$

This formula is derived from the properties of the unit vectors:

- $\hat{i} \cdot \hat{i} = \hat{j} \cdot \hat{j} = \hat{k} \cdot \hat{k} = 1$
- $\hat{i} \cdot \hat{j} = \hat{j} \cdot \hat{k} = \hat{k} \cdot \hat{i} = 0$

## Characteristics and Properties

| Property | Description | Mathematical Expression |
| :--- | :--- | :--- |
| **Commutative** | The order of the vectors does not matter. | $\vec{A} \cdot \vec{B} = \vec{B} \cdot \vec{A}$ |
| **Parallel Vectors** | If two vectors are parallel ($\theta = 0^\circ$), their dot product is the product of their magnitudes. | $\vec{A} \cdot \vec{B} = AB$ |
| **Orthogonal Vectors** | If two vectors are perpendicular ($\theta = 90^\circ$), their dot product is zero. | $\vec{A} \cdot \vec{B} = 0$ |
| **Anti-Parallel Vectors** | If two vectors are in opposite directions ($\theta = 180^\circ$), their dot product is the negative product of their magnitudes. | $\vec{A} \cdot \vec{B} = -AB$ |
| **Self-Dot Product** | The dot product of a vector with itself gives the square of its magnitude. | $\vec{A} \cdot \vec{A} = A^2$ |

## Applications

### 1. Calculating Work Done

The dot product is the standard way to calculate the mechanical work done by a constant force.
$$
W = \vec{F} \cdot \vec{d} = Fd \cos(\theta)
$$

This formula correctly captures that only the component of the force parallel to the displacement does work.

### 2. Finding the Angle Between Two Vectors

The dot product formula can be rearranged to find the angle between two vectors:
$$
\theta = \cos^{-1}\left(\frac{\vec{A} \cdot \vec{B}}{AB}\right)
$$

### 3. Power as a Scalar Product

Power can be expressed as the dot product of force and velocity.
$$
P = \vec{F} \cdot \vec{v}
$$

---

<!-- note kx7chsr0kym1pb896wt4bhg57n85q5zt | topic ms7bxd7cxxx1x6tk5wgqqfm1ws85prqm | status published -->
# Scalar vs. Vector Quantities

In physics, all measurable quantities are classified as either **scalar** or **vector**. The fundamental difference between them lies in whether the quantity has a direction associated with it.
## Scalar Quantities

A **scalar quantity** is a physical quantity that is fully described by its **magnitude** (numerical value with unit) alone. Scalars obey the rules of ordinary arithmetic.

**Examples of Scalar Quantities**

| Scalar Quantity | Example | Common Units |
| :--- | :--- | :--- |
| **Mass** | 2 kg | kg, g |
| **Speed** | 60 km/h | m/s, km/h |
| **Distance** | 5 m | m, km |
| **Time** | 10 s | s, h |
| **Energy** | 500 J | J, cal |
| **Temperature** | 25 °C | °C, K |
| **Volume** | 1.5 L | L, m³ |

## Vector Quantities

A **vector quantity** requires both **magnitude** and **direction** for a complete description. Vectors are represented graphically by arrows, the length indicates magnitude and the arrowhead indicates direction. Vector algebra (not ordinary arithmetic) is used to manipulate them.

**Examples of Vector Quantities**

| Vector Quantity | Example | Common Units |
|:--- |:--- |:--- |
| **Velocity** | 60 km/h *north* | m/s |
| **Displacement** | 5 m *to the right* | m |
| **Force** | 20 N *downwards* | N |
| **Acceleration** | 9.8 m/s² *downwards* | m/s² |
| **Momentum** | 100 kg·m/s *forwards* | kg·m/s |
## Distinguishing Key Pairs

| Scalar | Vector | Key Difference |
| :--- | :--- | :--- |
| **Distance** | **Displacement** | Distance = total path length; Displacement = straight-line change in position (has direction). |
| **Speed** | **Velocity** | Speed = magnitude of velocity; Velocity specifies direction too. |
| **Mass** | **Weight** | Mass = amount of matter (scalar); Weight = gravitational force on mass (vector, directed toward Earth's center). |

**Example:** If you walk 5 m east then 5 m west, your *distance* = 10 m but your *displacement* = 0 m.

<InlineNoteTag label="Rectangular Components Of A Vector" notePath="physics-11/rectangular-components-of-a-vector" />

## Representing Vectors in 2-D: Rectangular Components

Any 2-D vector $\vec{A}$ can be resolved into two **perpendicular components** along the x- and y-axes:

$$A_{x} = A\cos\theta, \quad A_{y} = A\sin\theta$$

where $A = |\vec{A}|$ is the magnitude and $\theta$ is the angle with the positive x-axis. In component form:

$$\vec{A} = A_{x}\hat{i} + A_{y}\hat{j}$$

The unit vectors $\hat{i}$ and $\hat{j}$ point along the positive x- and y-axes respectively, each with magnitude 1.

**Worked Example:** A force of 10 N acts at 30° above the positive x-axis. Find its components.

$$F_{x} = 10\cos 30° = 10 \times \frac{\sqrt{3}}{2} \approx 8.66\text{ N}$$

$$F_{y} = 10\sin 30° = 10 \times \frac{1}{2} = 5\text{ N}$$

So $\vec{F} = 8.66\hat{i} + 5\hat{j}$ N.

## Special Types of Vectors

In the FSc curriculum, several specific types of vectors are essential:

### Unit Vector
A vector having a magnitude of **unity (1)** used to specify direction. Denoted by a hat symbol, e.g., $\hat{a}$. The standard unit vectors $\hat{i}$, $\hat{j}$, $\hat{k}$ point along the positive x, y, and z axes respectively.

### Null Vector (Zero Vector)
A vector with **zero magnitude** and an arbitrary (undefined) direction. It results from operations such as $\vec{A} - \vec{A} = \vec{0}$.

### Position Vector
A vector that describes the **location of a point** relative to the origin $O$. In 3-D:

$$\vec{r} = x\hat{i} + y\hat{j} + z\hat{k}$$

where $x$, $y$, $z$ are the Cartesian coordinates of the point.

## Comparison Table

| Basis | Scalar Quantity | Vector Quantity |
| :--- | :--- | :--- |
| **Definition** | Magnitude only | Magnitude + Direction |
| **Direction** | No | Yes |
| **Representation** | Single number with unit | Arrow or number with unit and direction |
| **Algebra** | Ordinary arithmetic | Vector algebra |
| **Examples** | Speed, Mass, Time, Distance, Energy | Velocity, Force, Displacement, Momentum |

---

<!-- note kx7e70a8pbv3tzqy3krpgj0zfn85qzjk | topic ms7c8b4p8pe1hyrc37wg0kf4s185pc7g | status published -->
# Torque (Moment of Force)

In mechanics, while force causes an object to accelerate linearly, **torque** (or **moment of force**) is what causes an object to acquire angular acceleration. It is the rotational equivalent of a linear force. Torque is a vector quantity that measures the tendency of a force to rotate an object around an axis or pivot point.

<InlineNoteTag label="Scalar And Vector Quantities" notePath="physics-11/scalar-and-vector-quantities" />

<CaptionedImage src="kg24387mz7t5tkytmsyb0x4p7s8dgajt" alt="Torque diagram" />
## Definition of Torque

Torque is the measure of the effectiveness of a force in causing or changing the rotation of an object. It depends on three factors:
1. The **magnitude** of the applied force.
2. The **distance** from the axis of rotation to the point where the force is applied (the lever arm).
3. The **angle** at which the force is applied relative to the lever arm.

## Formula for the Magnitude of Torque

The magnitude of torque ($\tau$) is given by:

$$\tau = rF\sin\theta$$

Where:
- $\tau$ = magnitude of torque (N·m)
- $r$ = distance from the axis of rotation to the point of force application
- $F$ = magnitude of the applied force
- $\theta$ = angle between the position vector $\vec{r}$ and the force vector $\vec{F}$

**SI Unit:** Newton-metre (N·m)
**Dimensions:** $[ML^2T^{-2}]$, same as work/energy, though torque and work are physically distinct quantities.

Expressed entirely in SI base units:
$$
1\,\text{N·m} = 1\,\text{kg·m}^2\text{·s}^{-2}
$$
## Vector Nature of Torque (Cross Product)

Torque is formally defined by the **cross product** of the position vector $\vec{r}$ and the force vector $\vec{F}$:

$$\vec{\tau} = \vec{r} \times \vec{F}$$

The direction of the torque vector indicates the axis of rotation and the sense of rotation (clockwise or counter-clockwise).

## The Right-Hand Rule

The direction of $\vec{\tau}$ is determined by the **right-hand rule**:
1. Point the fingers of your right hand along $\vec{r}$ (from pivot to point of force application).
2. Curl your fingers toward $\vec{F}$.
3. Your thumb points in the direction of $\vec{\tau}$.

**Sign Convention (2D):**
- **Counter-clockwise (CCW)** rotation → torque is **positive** (vector points out of the page)
- **Clockwise (CW)** rotation → torque is **negative** (vector points into the page)

## Characteristics of Torque

### 1. Dependence on Angle

From $\tau = rF\sin\theta$:
- **Maximum torque**: when $\theta = 90^\circ$ (force perpendicular to lever arm), since $\sin 90^\circ = 1$
- **Zero torque**: when $\theta = 0^\circ$ or $180^\circ$ (force parallel or anti-parallel to lever arm), since $\sin 0^\circ = \sin 180^\circ = 0$

### 2. The Lever Arm (Moment Arm)

The **lever arm** (or moment arm) is the perpendicular distance from the axis of rotation to the **line of action** of the force, equal to $r\sin\theta$. A longer lever arm produces a larger torque for the same applied force.

## Torque in Rotational Dynamics

### Rotational Equilibrium

For an object to be in **rotational equilibrium**, the net torque about any axis must be zero:

$$\sum \vec{\tau} = 0$$

This means the sum of clockwise torques equals the sum of counter-clockwise torques, resulting in zero angular acceleration.

<InlineNoteTag label="Equilibrium" notePath="physics-11/equilibrium" />

### Newton's Second Law for Rotation: $\tau = I\alpha$

Just as a net force causes linear acceleration ($F = ma$), a net torque causes **angular acceleration** ($\alpha$):

$$\tau_{net} = I\alpha$$

Where:
- $I$ = **moment of inertia** (rotational analogue of mass, units: kg·m²)
- $\alpha$ = **angular acceleration** (rad/s²)

This is the rotational analogue of Newton's second law. A larger torque or smaller moment of inertia produces greater angular acceleration.

---

<!-- note kx7f9y84g7jp2nys56jejs6xq985pcdh | topic ms704n92kbh7vzhyjga21a337d85pps0 | status published -->
# Vector Product (Cross Product) of Two Vectors


## Cross Product vs. Dot Product

The **vector product**, also known as the **cross product**, is a binary operation performed on two vectors in three-dimensional space. Unlike the <InlineNoteTag label="Scalar And Vector Quantities" notePath="physics-11/scalar-and-vector-quantities" /> which describes the scalar (dot) product yielding a scalar result, the cross product produces a new **vector**. This resultant vector is perpendicular to the plane containing the original two vectors, making the cross product an essential tool for describing rotational motion, torque, angular momentum, and magnetic forces.
## Definition and Formula

The cross product of two vectors, $\vec{A}$ and $\vec{B}$, is denoted as $\vec{A} \times \vec{B}$. The result is a vector, $\vec{C}$, defined as:

$$
\vec{A} \times \vec{B} = |\vec{A}| |\vec{B}| \sin(\theta) \hat{n}
$$

Where:

- $|\vec{A}|$ and $|\vec{B}|$ are the magnitudes of vectors $\vec{A}$ and $\vec{B}$.
- $\theta$ is the smaller angle between the two vectors ($0^{\circ} \leq \theta \leq 180^{\circ}$).
- $\hat{n}$ is a **unit vector** perpendicular to the plane formed by $\vec{A}$ and $\vec{B}$. Its direction is determined by the right-hand rule.

### Magnitude of the Cross Product

The magnitude of the resultant vector is given by:

$$
|\vec{A} \times \vec{B}| = AB \sin(\theta)
$$

Geometrically, this magnitude represents the **area of the parallelogram** formed by the two vectors $\vec{A}$ and $\vec{B}$ when placed tail-to-tail.

### Direction: The Right-Hand Rule

The direction of the resultant vector $\vec{C} = \vec{A} \times \vec{B}$ is perpendicular to both $\vec{A}$ and $\vec{B}$ and is found using the **right-hand rule**:

1. Point the fingers of your right hand in the direction of the first vector ($\vec{A}$).
2. Curl your fingers towards the direction of the second vector ($\vec{B}$) through the smaller angle.
3. Your thumb will point in the direction of the resultant vector ($\vec{C} = \vec{A} \times \vec{B}$).

---

## Characteristics and Properties

| **Property** | **Description** | **Mathematical Expression** |
| :--- | :--- | :--- |
| **Anti-Commutative** | Reversing the order of the vectors negates the resultant vector. | $\vec{A} \times \vec{B} = -(\vec{B} \times \vec{A})$ |
| **Parallel Vectors** | The cross product of parallel or anti-parallel vectors is the zero vector ($\theta = 0^{\circ}$ or $180^{\circ}$). | $\vec{A} \times \vec{B} = \vec{0}$ |
| **Self-Cross Product** | The cross product of any vector with itself is the zero vector. | $\vec{A} \times \vec{A} = \vec{0}$ |
| **Perpendicular Vectors** | The magnitude is maximized when vectors are perpendicular ($\theta = 90^{\circ}$). | $\|\vec{A} \times \vec{B}\| = AB$ |
| **Distributive** | The cross product is distributive over vector addition. | $\vec{A} \times (\vec{B} + \vec{C}) = (\vec{A} \times \vec{B}) + (\vec{A} \times \vec{C})$ |

### Cross Product of Unit Vectors

For the orthogonal unit vectors $\hat{i}, \hat{j}, \hat{k}$:
- $\hat{i} \times \hat{i} = \hat{j} \times \hat{j} = \hat{k} \times \hat{k} = 0$
- $\hat{i} \times \hat{j} = \hat{k}$
- $\hat{j} \times \hat{k} = \hat{i}$
- $\hat{k} \times \hat{i} = \hat{j}$
- $\hat{j} \times \hat{i} = -\hat{k}$

---

## Vector Product using Rectangular Components

For practical calculations, the cross product is most easily computed using the components of the vectors in a right-handed coordinate system. Refer to <InlineNoteTag label="Rectangular Components Of A Vector" notePath="physics-11/rectangular-components-of-a-vector" /> for more on components.

Given:

$$
\vec{A} = A_{x} \hat{i} + A_{y} \hat{j} + A_{z} \hat{k}
$$

$$
\vec{B} = B_{x} \hat{i} + B_{y} \hat{j} + B_{z} \hat{k}
$$

The cross product can be calculated using the determinant of a $3 \times 3$ matrix:

$$
\vec{A} \times \vec{B} =
\begin{vmatrix}
\hat{i} & \hat{j} & \hat{k} \\
A_{x} & A_{y} & A_{z} \\
B_{x} & B_{y} & B_{z}
\end{vmatrix}
$$

Expanding the determinant gives the resultant vector:

$$
\vec{A} \times \vec{B} = (A_{y} B_{z} - A_{z} B_{y})\hat{i} - (A_{x} B_{z} - A_{z} B_{x})\hat{j} + (A_{x} B_{y} - A_{y} B_{x})\hat{k}
$$

---

## Applications in Physics

- **Torque**: Torque ($\vec{\tau}$), the rotational equivalent of force, is defined as the cross product of the position vector ($\vec{r}$) and the applied force ($\vec{F}$).
  $$ \vec{\tau} = \vec{r} \times \vec{F} $$

- **Angular Momentum**: The angular momentum ($\vec{L}$) of a particle is the cross product of its position vector ($\vec{r}$) and its linear momentum ($\vec{p}$).
  $$ \vec{L} = \vec{r} \times \vec{p} $$

- **Magnetic Force**: The force ($\vec{F}_B$) on a charge $q$ moving with velocity $\vec{v}$ through a magnetic field $\vec{B}$ is given by:
  $$ \vec{F}_B = q(\vec{v} \times \vec{B}) $$

---

<!-- note kx7f9knc12gb1za3r0bgbq0sbh85qjt9 | topic ms76hs8h2hg3b7z0sqt4f5eej185p80y | status published -->
# Vectors in the Cartesian Coordinate System

A **vector** is a mathematical object used to represent physical quantities that have both a **magnitude** (size) and a **direction**. To analyze and perform calculations with vectors, we need a reference framework. The most common framework is the **Cartesian coordinate system**, which provides a structured way to describe a vector's orientation and length in space.

<InlineNoteTag label="Scalar And Vector Quantities" notePath="physics-11/scalar-and-vector-quantities" />
## The Cartesian Coordinate System

The Cartesian coordinate system (also known as the rectangular coordinate system) uses perpendicular axes to specify the location of points in space.

*   **Two-Dimensional (2D) System**: Two perpendicular axes, the horizontal **x-axis** and the vertical **y-axis**, intersect at the **origin** (0, 0). Any point in this plane is described by an ordered pair (x, y).
*   **Three-Dimensional (3D) System**: A third **z-axis**, perpendicular to both x and y, is added. Any point in space is described by an ordered triple (x, y, z).
## Representing Vectors with Components

In the Cartesian system, a vector is broken down (resolved) into components along each axis.

<InlineNoteTag label="Rectangular Components Of A Vector" notePath="physics-11/rectangular-components-of-a-vector" />

A vector $\vec{A}$ is written as the sum of its components:
*   **In 2D**: $\vec{A} = A_x \hat{i} + A_y \hat{j}$
*   **In 3D**: $\vec{A} = A_x \hat{i} + A_y \hat{j} + A_z \hat{k}$

Where:
*   $A_x,\, A_y,\, A_z$ are the **scalar magnitudes** of the components along the x, y, and z axes.
*   $\hat{i},\, \hat{j},\, \hat{k}$ are **unit vectors**, vectors of magnitude 1 pointing along the positive x, y, and z axes. They indicate direction only.

If a vector $\vec{A}$ of magnitude $A$ makes an angle $\theta$ with the positive x-axis:
$$A_x = A\cos\theta \qquad A_y = A\sin\theta$$

**Worked Example:** A force $\vec{F}$ of magnitude 10 N acts at 30° above the positive x-axis.
$$F_x = 10\cos 30° = 10 \times \frac{\sqrt{3}}{2} \approx 8.66 \text{ N}$$
$$F_y = 10\sin 30° = 10 \times \frac{1}{2} = 5 \text{ N}$$
So $\vec{F} = 8.66\hat{i} + 5\hat{j}$ N.
## Calculating the Magnitude of a Vector

The magnitude of a vector is its length, a scalar quantity calculated using the Pythagorean theorem.

*   **Magnitude in 2D**:
    $$ |\vec{A}| = \sqrt{A_x^2 + A_y^2} $$
*   **Magnitude in 3D**:
    $$ |\vec{A}| = \sqrt{A_x^2 + A_y^2 + A_z^2} $$
## Determining the Direction of a Vector

The direction of a vector is described by the angles it makes with the coordinate axes.

*   **Direction in 2D**: The angle $\theta$ measured counter-clockwise from the positive x-axis:
    $$ \theta = \tan^{-1}\left(\frac{A_y}{A_x}\right) $$
    *(The signs of $A_x$ and $A_y$ determine the correct quadrant.)*

<InlineNoteTag label="Finding Vector From Its Components" notePath="physics-11/finding-vector-from-its-components" />

*   **Direction in 3D, Direction Cosines**: The angles the vector makes with each positive axis:
    *   Angle $\alpha$ with x-axis: $\cos\alpha = \dfrac{A_x}{|\vec{A}|}$
    *   Angle $\beta$ with y-axis: $\cos\beta = \dfrac{A_y}{|\vec{A}|}$
    *   Angle $\gamma$ with z-axis: $\cos\gamma = \dfrac{A_z}{|\vec{A}|}$
## Special Vectors

*   **Null Vector ($\vec{0}$)**: A vector with zero magnitude and arbitrary direction. Results from operations such as $\vec{A} - \vec{A} = \vec{0}$.
*   **Resultant Vector**: A single vector that produces the same combined effect as two or more vectors acting together.

## Summary Table

| **Concept**               | **2D Formula**                                   | **3D Formula**                                      |
| :------------------------ | :----------------------------------------------- | :-------------------------------------------------- |
| **Vector Representation** | $\vec{A} = A_x \hat{i} + A_y \hat{j}$            | $\vec{A} = A_x \hat{i} + A_y \hat{j} + A_z \hat{k}$ |
| **Magnitude**             | $\vert \vec{A}\vert = \sqrt{A_x^2 + A_y^2}$                  | $\vert \vec{A}\vert = \sqrt{A_x^2 + A_y^2 + A_z^2}$             |
| **Direction**             | $\theta = \tan^{-1}\left(\dfrac{A_y}{A_x}\right)$ | Direction Cosines ($\alpha, \beta, \gamma$)         |