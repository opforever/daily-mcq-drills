<!-- note kx70vpw31nxe96qfgy8dxk5q6585q845 | topic ms794bbdddmkc7b2mj3s0s6neh85qf54 | status published -->
# 3.1 Vector Addition and Components

## Rectangular Coordinate System in Space

In three-dimensional space, three mutually perpendicular axes (the $x$-axis, $y$-axis, and $z$-axis) intersect at a point called the **origin** $O$. Any point $P$ in space is uniquely identified by an ordered triple $(x, y, z)$:

- $x$ = perpendicular distance from the $yz$-plane
- $y$ = perpendicular distance from the $xz$-plane
- $z$ = perpendicular distance from the $xy$-plane

This extends the familiar 2D coordinate system (the $xy$-plane) into 3D space.

---

## Unit Vectors and Components

Three standard **unit vectors** are defined along the coordinate axes:

| Symbol | Direction | Magnitude |
|--------|-----------|----------|
| $\hat{i}$ | Along positive $x$-axis | 1 |
| $\hat{j}$ | Along positive $y$-axis | 1 |
| $\hat{k}$ | Along positive $z$-axis | 1 |

Any vector $\mathbf{v}$ in space can be written in **component form**:
$$\mathbf{v} = v_1\hat{i} + v_2\hat{j} + v_3\hat{k}$$
where $v_1$, $v_2$, $v_3$ are the **components** (scalar projections) along each axis.

---

## Magnitude of a Vector

The **magnitude** (length) of $\mathbf{v} = v_1\hat{i} + v_2\hat{j} + v_3\hat{k}$ is:
$$|\mathbf{v}| = \sqrt{v_1^2 + v_2^2 + v_3^2}$$

The **unit vector** in the direction of $\mathbf{v}$ is:
$$\hat{v} = \frac{\mathbf{v}}{|\mathbf{v}|}$$

> **Example:** If $\mathbf{v} = 2\hat{i} - 3\hat{j} + 6\hat{k}$, then $|\mathbf{v}| = \sqrt{4 + 9 + 36} = 7$, and $\hat{v} = \frac{1}{7}(2\hat{i} - 3\hat{j} + 6\hat{k})$.

---

## Vector Operations in Space

### Position Vector and Vector Between Two Points

The **position vector** of point $P(x, y, z)$ from the origin is $\vec{OP} = x\hat{i} + y\hat{j} + z\hat{k}$.

<CaptionedImage src="https://aware-tern-115.convex.cloud/api/storage/e2b92a3e-d6b0-4b5f-b8c7-62293f27edc8" alt="3D construction showing the position vector OP of a point P(x,y,z) decomposed into its x, y, z axis components." caption="3D construction showing the position vector OP of a point P(x,y,z) decomposed into its x, y, z axis components." />

The vector from $P(x_1, y_1, z_1)$ to $Q(x_2, y_2, z_2)$ is:

<CaptionedImage src="https://aware-tern-115.convex.cloud/api/storage/f6fb18f6-1b8b-4327-a6c2-aade3555c7c2" alt="3D diagram showing the vector PQ constructed from position vectors OP and OQ, for two general points P(x1,y1,z1) and Q(x2,y2,z2)." caption="3D diagram showing the vector PQ constructed from position vectors OP and OQ, for two general points P(x1,y1,z1) and Q(x2,y2,z2)." />
$$\overrightarrow{PQ} = (x_2 - x_1)\hat{i} + (y_2 - y_1)\hat{j} + (z_2 - z_1)\hat{k}$$

### Scalar Multiplication

For scalar $k$ and vector $\mathbf{a} = a_1\hat{i} + a_2\hat{j} + a_3\hat{k}$:
$$k\mathbf{a} = ka_1\hat{i} + ka_2\hat{j} + ka_3\hat{k}$$

A vector of magnitude $m$ in the **opposite** direction of $\mathbf{a}$ is: $-m\,\hat{a} = -m\,\dfrac{\mathbf{a}}{|\mathbf{a}|}$

### Parallel Vectors

Vectors $\mathbf{a}$ and $\mathbf{b}$ are **parallel** if $\mathbf{a} = k\mathbf{b}$ for some scalar $k$, equivalently:
$$\frac{a_1}{b_1} = \frac{a_2}{b_2} = \frac{a_3}{b_3}$$

### Collinear Points

Three points $A$, $B$, $C$ are **collinear** if $\overrightarrow{AB} = k\,\overrightarrow{BC}$ for some scalar $k$ (the vectors are parallel and share a common point).

### Parallelogram Vertices

In parallelogram $ABCD$, opposite sides are equal and parallel:
$$\overrightarrow{AB} = \overrightarrow{DC}, \quad \overrightarrow{AD} = \overrightarrow{BC}$$
This is used to find a missing fourth vertex given three vertices.

---
## Properties of Vector Addition

Let $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ be any vectors in space.

### 1. Commutative Law
$$\mathbf{a} + \mathbf{b} = \mathbf{b} + \mathbf{a}$$
*Proof:* In component form, $(a_1 + b_1)\hat{i} + \cdots = (b_1 + a_1)\hat{i} + \cdots$ since addition of real numbers is commutative.

### 2. Associative Law
$$(\mathbf{a} + \mathbf{b}) + \mathbf{c} = \mathbf{a} + (\mathbf{b} + \mathbf{c})$$
*Proof:* Follows from the associativity of real number addition applied component-wise.

### 3. Identity Element (Null Vector)

The **null vector** $\mathbf{0} = 0\hat{i} + 0\hat{j} + 0\hat{k}$ satisfies:
$$\mathbf{a} + \mathbf{0} = \mathbf{0} + \mathbf{a} = \mathbf{a}$$

### 4. Additive Inverse

For every vector $\mathbf{a}$, its **additive inverse** is $-\mathbf{a}$:
$$\mathbf{a} + (-\mathbf{a}) = \mathbf{0}$$

---

## Summary Table

| Concept | Formula |
|---------|--------|
| Component form | $\mathbf{v} = v_1\hat{i} + v_2\hat{j} + v_3\hat{k}$ |
| Magnitude | $\vert\mathbf{v}\vert = \sqrt{v_1^2 + v_2^2 + v_3^2}$ |
| Unit vector | $\hat{v} = \mathbf{v}/\vert\mathbf{v}\vert$ |
| Vector $P$ to $Q$ | $\overrightarrow{PQ} = \vec{OQ} - \vec{OP}$ |
| Parallel condition | $\mathbf{a} = k\mathbf{b}$ |
| Commutative | $\mathbf{a}+\mathbf{b}=\mathbf{b}+\mathbf{a}$ |
| Associative | $(\mathbf{a}+\mathbf{b})+\mathbf{c}=\mathbf{a}+(\mathbf{b}+\mathbf{c})$ |
| Null vector identity | $\mathbf{a}+\mathbf{0}=\mathbf{a}$ |
| Additive inverse | $\mathbf{a}+(-\mathbf{a})=\mathbf{0}$ |

---

<!-- note kx72wac0z2fpcd9tdtdzstn8m585p4yj | topic ms781h3fyesp4kr9qmqkdanzhh85qj92 | status published -->
# 3.2 Dot Product and Vector Projections

# 3.2 Dot Product and Vector Projections

## Dot (Scalar) Product — Definition

The **dot product** (scalar product) of two vectors $\vec{a}$ and $\vec{b}$ is defined as:

$$\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta$$

where $\theta$ is the angle between the two vectors ($0^\circ \leq \theta \leq 180^\circ$).

The result is a **scalar** (a real number), not a vector.

### Geometric Interpretation

$\vec{a} \cdot \vec{b}$ equals the magnitude of $\vec{a}$ multiplied by the **projection of $\vec{b}$ onto $\vec{a}$** (or vice versa).

---

## Dot Product in Component Form

If $\vec{u} = u_1\hat{i} + u_2\hat{j} + u_3\hat{k}$ and $\vec{v} = v_1\hat{i} + v_2\hat{j} + v_3\hat{k}$, then:

$$\vec{u} \cdot \vec{v} = u_1v_1 + u_2v_2 + u_3v_3$$

This follows from the orthonormality of $\hat{i}, \hat{j}, \hat{k}$:
- $\hat{i}\cdot\hat{i} = \hat{j}\cdot\hat{j} = \hat{k}\cdot\hat{k} = 1$
- $\hat{i}\cdot\hat{j} = \hat{j}\cdot\hat{k} = \hat{k}\cdot\hat{i} = 0$

---

## Angle Between Two Vectors

Rearranging the dot product definition:

$$\cos\theta = \frac{\vec{u}\cdot\vec{v}}{|\vec{u}|\,|\vec{v}|}$$

$$\theta = \cos^{-1}\!\left(\frac{\vec{u}\cdot\vec{v}}{|\vec{u}|\,|\vec{v}|}\right), \quad 0^\circ \leq \theta \leq 180^\circ$$

**Example:** Find the angle between $\vec{a} = 2\hat{i}+\hat{j}-\hat{k}$ and $\vec{b} = \hat{i}-\hat{j}+2\hat{k}$.

$$\vec{a}\cdot\vec{b} = (2)(1)+(1)(-1)+(-1)(2) = 2-1-2 = -1$$
$$|\vec{a}| = \sqrt{4+1+1} = \sqrt{6}, \quad |\vec{b}| = \sqrt{1+1+4} = \sqrt{6}$$
$$\cos\theta = \frac{-1}{\sqrt{6}\cdot\sqrt{6}} = \frac{-1}{6} \implies \theta = \cos^{-1}\!\left(-\tfrac{1}{6}\right)$$

---

## Condition for Orthogonality

Two non-zero vectors $\vec{a}$ and $\vec{b}$ are **perpendicular (orthogonal)** if and only if:

$$\vec{a}\cdot\vec{b} = 0$$

This is because $\cos 90^\circ = 0$.

**Example:** Show that $\vec{a} = 2\hat{i}-3\hat{j}+\hat{k}$ and $\vec{b} = \hat{i}+\hat{j}+\hat{k}$ are not orthogonal.

$$\vec{a}\cdot\vec{b} = 2-3+1 = 0 \implies \text{They ARE orthogonal.}$$

---

## Projection of a Vector Along Another

The **scalar projection** of $\vec{a}$ along $\vec{b}$ is:

$$\text{proj}_{\vec{b}}\vec{a} = \frac{\vec{a}\cdot\vec{b}}{|\vec{b}|}$$

The **vector projection** of $\vec{a}$ onto $\vec{b}$ is:

$$\vec{\text{proj}}_{\vec{b}}\vec{a} = \frac{\vec{a}\cdot\vec{b}}{|\vec{b}|^2}\,\vec{b}$$

**Example:** Find the projection of $\vec{a} = 3\hat{i}+4\hat{j}$ along $\vec{b} = \hat{i}+\hat{j}$.

$$\vec{a}\cdot\vec{b} = 3+4 = 7, \quad |\vec{b}| = \sqrt{2}$$
$$\text{Scalar projection} = \frac{7}{\sqrt{2}} = \frac{7\sqrt{2}}{2}$$

---

## Direction Cosines

For a vector $\mathbf{v} = v_1\hat{i}+v_2\hat{j}+v_3\hat{k}$ with magnitude $|\mathbf{v}|$, the **direction cosines** are:

$$\cos\alpha = \frac{v_1}{|\mathbf{v}|}, \quad \cos\beta = \frac{v_2}{|\mathbf{v}|}, \quad \cos\gamma = \frac{v_3}{|\mathbf{v}|}$$

They are the components of the unit vector $\hat{v} = \dfrac{\mathbf{v}}{|\mathbf{v}|}$, and satisfy:

$$\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$$

---

## Work Done by a Constant Force

If a constant force $\vec{F}$ moves an object through displacement $\vec{d}$, the **work done** is:

$$W = \vec{F}\cdot\vec{d} = |\vec{F}||\vec{d}|\cos\theta$$

where $\theta$ is the angle between $\vec{F}$ and $\vec{d}$. Work is a scalar quantity measured in joules (J).

**Example:** A force $\vec{F} = 5\hat{i}+3\hat{j}$ N displaces an object by $\vec{d} = 4\hat{i}+2\hat{j}$ m.

$$W = \vec{F}\cdot\vec{d} = (5)(4)+(3)(2) = 20+6 = 26 \text{ J}$$

---

## Key Identity: Sum of Three Vectors Equal to Zero

If $\vec{a}+\vec{b}+\vec{c} = \vec{0}$, squaring both sides:

$$|\vec{a}|^2+|\vec{b}|^2+|\vec{c}|^2+2(\vec{a}\cdot\vec{b}+\vec{b}\cdot\vec{c}+\vec{c}\cdot\vec{a}) = 0$$

$$\therefore\; \vec{a}\cdot\vec{b}+\vec{b}\cdot\vec{c}+\vec{c}\cdot\vec{a} = -\frac{|\vec{a}|^2+|\vec{b}|^2+|\vec{c}|^2}{2}$$

---

<!-- note kx70syn5j40n5ndcs6msf7qans85qst9 | topic ms7bcg9rrtz6d184mea08rwcm585p300 | status published -->
# 3.3 Cross Product and Vector Direction

# 3.3 Cross Product and Vector Direction

## Cross Product (Vector Product)

The **cross product** (or vector product) of two vectors $\mathbf{a}$ and $\mathbf{b}$ is defined as:

$$\mathbf{a} \times \mathbf{b} = |\mathbf{a}||\mathbf{b}|\sin\theta\,\hat{\mathbf{n}}$$

where $\theta$ is the angle between $\mathbf{a}$ and $\mathbf{b}$, and $\hat{\mathbf{n}}$ is the unit vector perpendicular to both, determined by the **right-hand rule**.

### Component Form

If $\mathbf{a} = a_1\hat{i} + a_2\hat{j} + a_3\hat{k}$ and $\mathbf{b} = b_1\hat{i} + b_2\hat{j} + b_3\hat{k}$, then:

$$\mathbf{a} \times \mathbf{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix}$$

$$= (a_2b_3 - a_3b_2)\hat{i} - (a_1b_3 - a_3b_1)\hat{j} + (a_1b_2 - a_2b_1)\hat{k}$$

---

## Key Properties of Cross Product

| Property | Statement |
|---|---|
| Anti-commutativity | $\mathbf{a} \times \mathbf{b} = -(\mathbf{b} \times \mathbf{a})$ |
| Distributive law | $\mathbf{a} \times (\mathbf{b} + \mathbf{c}) = \mathbf{a}\times\mathbf{b} + \mathbf{a}\times\mathbf{c}$ |
| Scalar multiplication | $(k\mathbf{a}) \times \mathbf{b} = k(\mathbf{a} \times \mathbf{b})$ |
| Parallel vectors | $\mathbf{a} \times \mathbf{b} = \mathbf{0}$ if $\mathbf{a} \parallel \mathbf{b}$ |
| Self cross product | $\hat{i}\times\hat{i} = \hat{j}\times\hat{j} = \hat{k}\times\hat{k} = \mathbf{0}$ |
| Cyclic rule | $\hat{i}\times\hat{j} = \hat{k},\quad \hat{j}\times\hat{k} = \hat{i},\quad \hat{k}\times\hat{i} = \hat{j}$ |

---

## Geometric Interpretation

- $|\mathbf{a} \times \mathbf{b}|$ = **area of the parallelogram** with sides $\mathbf{a}$ and $\mathbf{b}$
- Area of triangle with sides $\mathbf{a}$ and $\mathbf{b}$: $\displaystyle A_{\triangle} = \frac{1}{2}|\mathbf{a} \times \mathbf{b}|$

---

## Finding the Angle Between Two Vectors

From the definition of cross product:

$$\sin\theta = \frac{|\mathbf{a} \times \mathbf{b}|}{|\mathbf{a}||\mathbf{b}|}$$

### Unit Vector Perpendicular to Two Vectors

$$\hat{\mathbf{n}} = \pm\frac{\mathbf{a} \times \mathbf{b}}{|\mathbf{a} \times \mathbf{b}|}$$

---

## Lagrange Identity

$$|\mathbf{a} \times \mathbf{b}|^2 = |\mathbf{a}|^2|\mathbf{b}|^2 - (\mathbf{a} \cdot \mathbf{b})^2$$

**Proof:** Using $\sin^2\theta + \cos^2\theta = 1$:
$$|\mathbf{a}\times\mathbf{b}|^2 = |\mathbf{a}|^2|\mathbf{b}|^2\sin^2\theta = |\mathbf{a}|^2|\mathbf{b}|^2(1-\cos^2\theta) = |\mathbf{a}|^2|\mathbf{b}|^2 - (\mathbf{a}\cdot\mathbf{b})^2$$

---

## Scalar Triple Product

The **scalar triple product** of three vectors $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ is:

$$[\mathbf{a},\mathbf{b},\mathbf{c}] = \mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})$$

The result is a **scalar**.

### Determinant Form

If $\mathbf{a} = (a_1, a_2, a_3)$, $\mathbf{b} = (b_1, b_2, b_3)$, $\mathbf{c} = (c_1, c_2, c_3)$:

$$\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}$$

### Interchangeability of Dot and Cross

$$\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = (\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}$$

Dot and cross can be interchanged in the scalar triple product without changing the value.

**Proof:** Both sides equal the same $3\times3$ determinant with rows $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$.

### Cyclic Property

$$\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = \mathbf{b}\cdot(\mathbf{c}\times\mathbf{a}) = \mathbf{c}\cdot(\mathbf{a}\times\mathbf{b})$$

---

## Volume of a Parallelepiped

The **volume** of the parallelepiped determined by vectors $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ is:

$$V_{\text{parallelepiped}} = |\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})|$$

### Volume of a Tetrahedron

$$V_{\text{tetrahedron}} = \frac{1}{6}|\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})|$$

**Example:** Find the volume of the parallelepiped with edges $\mathbf{a} = \hat{i}+2\hat{j}+3\hat{k}$, $\mathbf{b} = 2\hat{i}-\hat{j}+\hat{k}$, $\mathbf{c} = \hat{i}+\hat{j}-\hat{k}$.

$$V = \left|\begin{vmatrix} 1 & 2 & 3 \\ 2 & -1 & 1 \\ 1 & 1 & -1 \end{vmatrix}\right|$$

$$= |1((-1)(-1)-(1)(1)) - 2((2)(-1)-(1)(1)) + 3((2)(1)-(-1)(1))|$$
$$= |1(1-1) - 2(-2-1) + 3(2+1)|$$
$$= |0 + 6 + 9| = 15 \text{ cubic units}$$

---

## Coplanar Vectors

Three vectors $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ are **coplanar** if they lie in the same plane.

### Condition for Coplanarity

$$\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = 0$$

Equivalently:
$$\begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix} = 0$$

**Reason:** Coplanar vectors form a parallelepiped of zero volume, so the scalar triple product must be zero.

**Example:** Show that $\mathbf{a} = \hat{i}+\hat{j}$, $\mathbf{b} = \hat{j}+\hat{k}$, $\mathbf{c} = \hat{i}+\hat{k}$ are coplanar.

$$\begin{vmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{vmatrix} = 1(1-0) - 1(0-1) + 0 = 1 + 1 = 2 \neq 0$$

These vectors are **not** coplanar.

---

## Result: Cross Products When $\mathbf{a} + \mathbf{b} + \mathbf{c} = \mathbf{0}$

If $\mathbf{a} + \mathbf{b} + \mathbf{c} = \mathbf{0}$, then:

$$\mathbf{a} \times \mathbf{b} = \mathbf{b} \times \mathbf{c} = \mathbf{c} \times \mathbf{a}$$

**Proof:** From $\mathbf{c} = -(\mathbf{a}+\mathbf{b})$, cross both sides with $\mathbf{a}$:
$$\mathbf{a} \times \mathbf{c} = \mathbf{a} \times (-(\mathbf{a}+\mathbf{b})) = -(\mathbf{a}\times\mathbf{a}) - (\mathbf{a}\times\mathbf{b}) = -\mathbf{a}\times\mathbf{b}$$
$$\therefore\; \mathbf{c}\times\mathbf{a} = \mathbf{a}\times\mathbf{b}$$

Similarly, crossing with $\mathbf{b}$ gives $\mathbf{a}\times\mathbf{b} = \mathbf{b}\times\mathbf{c}$.

---

<!-- note kx7fp6d9babjez5z7a97bf8q8h85p083 | topic ms7bm566jbvr9vzc0z49r2setd85q4m1 | status published -->
# 3.4 Scalar and Vector Triple Products

# 3.4 Scalar and Vector Triple Products

This section extends vector operations to triple products, with applications to volume, coplanarity, and real-world problems.

---

## Scalar Triple Product

The **scalar triple product** of three vectors $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$ is defined as:

$$\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})$$

The result is a **scalar** (a real number).

### Determinant Form

If $\mathbf{a} = a_1\hat{i}+a_2\hat{j}+a_3\hat{k}$, $\mathbf{b} = b_1\hat{i}+b_2\hat{j}+b_3\hat{k}$, $\mathbf{c} = c_1\hat{i}+c_2\hat{j}+c_3\hat{k}$, then:

$$\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}$$

---

## Properties of Scalar Triple Product

### 1. Cyclic Permutation (Dot and Cross are Interchangeable)

The scalar triple product is unchanged under **cyclic permutations**:

$$\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \mathbf{b} \cdot (\mathbf{c} \times \mathbf{a}) = \mathbf{c} \cdot (\mathbf{a} \times \mathbf{b})$$

This also shows that the **dot and cross can be interchanged**:

$$\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = (\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}$$

### 2. Sign Change on Swap

Swapping any two vectors **reverses the sign**:

$$\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = -\mathbf{a} \cdot (\mathbf{c} \times \mathbf{b})$$

---

## Geometric Interpretation: Volume of a Parallelepiped

If $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ are three **coterminal edges** of a parallelepiped, then:

$$V_{\text{parallelepiped}} = |\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})|$$

**Why?** The cross product $\mathbf{b} \times \mathbf{c}$ gives a vector perpendicular to the base with magnitude equal to the **base area**. The dot product with $\mathbf{a}$ then gives $|\mathbf{a}|\cos\theta$, which is the **perpendicular height**. So:

$$V = \text{Base Area} \times \text{Height} = |\mathbf{b} \times \mathbf{c}| \cdot |\mathbf{a}|\cos\theta$$

### Volume of a Tetrahedron

A tetrahedron shares the same three coterminal edges but has $\frac{1}{6}$ the volume of the parallelepiped:

$$V_{\text{tetrahedron}} = \frac{1}{6}|\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})|$$

---

## Coplanar Vectors

Three vectors $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ are **coplanar** if and only if:

$$\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = 0$$

This makes sense geometrically: if the vectors are coplanar, the parallelepiped they form has **zero volume**.

### Coplanarity of Four Points

Four points $A$, $B$, $C$, $D$ are coplanar if and only if:

$$\overrightarrow{AB} \cdot (\overrightarrow{AC} \times \overrightarrow{AD}) = 0$$

### Finding an Unknown for Coplanarity

To find an unknown scalar $d$ such that vectors are coplanar:
1. Write the $3 \times 3$ determinant of the vectors' components.
2. Set the determinant equal to zero.
3. Solve for $d$.

---

## Vector Triple Product

The **vector triple product** $\mathbf{a} \times (\mathbf{b} \times \mathbf{c})$ is a **vector** (unlike the scalar triple product). It is expanded using the **BAC-CAB rule** (Lagrange's Identity):

$$\mathbf{a} \times (\mathbf{b} \times \mathbf{c}) = (\mathbf{a} \cdot \mathbf{c})\mathbf{b} - (\mathbf{a} \cdot \mathbf{b})\mathbf{c}$$

> **Memory aid (BAC-CAB):** $\mathbf{A} \times (\mathbf{B} \times \mathbf{C}) = \mathbf{B}(\mathbf{A}\cdot\mathbf{C}) - \mathbf{C}(\mathbf{A}\cdot\mathbf{B})$

**Note:** The vector triple product is **not associative** in general:
$$\mathbf{a} \times (\mathbf{b} \times \mathbf{c}) \neq (\mathbf{a} \times \mathbf{b}) \times \mathbf{c}$$

---

## Summary Table

| Product | Type | Formula | Application |
|---|---|---|---|
| Scalar Triple Product | Scalar | $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})$ | Volume, coplanarity |
| Vector Triple Product | Vector | $(\mathbf{a}\cdot\mathbf{c})\mathbf{b} - (\mathbf{a}\cdot\mathbf{b})\mathbf{c}$ | Advanced mechanics |

---

## Worked Example

**Example:** Find the volume of the parallelepiped with coterminal edges:
$$\mathbf{a} = \hat{i} + 2\hat{j} + 3\hat{k}, \quad \mathbf{b} = 2\hat{i} - \hat{j} + \hat{k}, \quad \mathbf{c} = \hat{i} + \hat{j} - \hat{k}$$

**Solution:**
$$V = \left|\begin{vmatrix} 1 & 2 & 3 \\ 2 & -1 & 1 \\ 1 & 1 & -1 \end{vmatrix}\right|$$

Expanding along the first row:
$$= |1[(-1)(-1)-(1)(1)] - 2[(2)(-1)-(1)(1)] + 3[(2)(1)-(-1)(1)]|$$
$$= |1(1-1) - 2(-2-1) + 3(2+1)|$$
$$= |0 + 6 + 9| = 15 \text{ cubic units}$$