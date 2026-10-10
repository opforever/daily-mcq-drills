<!-- note kx75pgwthq1p1qa595v6qj26cx85pg8n | topic ms797qs0y0w2d0ehc7vcscrh5h85qs3w | status published -->
# 2.1 Matrix Order and Types

A **matrix** is a rectangular array of numbers (real or complex) arranged in rows and columns, enclosed in brackets.

---

## Order of a Matrix

The **order** (or size) of a matrix is written as $m \times n$, where:
- $m$ = number of **rows**
- $n$ = number of **columns**

**Example:** A matrix with 3 rows and 4 columns has order $3 \times 4$.

$$A = \begin{bmatrix} 1 & 2 & 3 & 4 \\ 5 & 6 & 7 & 8 \\ 9 & 10 & 11 & 12 \end{bmatrix}_{3 \times 4}$$

The element in row $i$ and column $j$ is denoted $a_{ij}$.

---

## Types of Matrices

### 1. Row Matrix
A matrix with exactly **one row**: order $1 \times n$.
$$R = \begin{bmatrix} 3 & -1 & 7 \end{bmatrix}_{1 \times 3}$$

### 2. Column Matrix
A matrix with exactly **one column**: order $m \times 1$.
$$C = \begin{bmatrix} 2 \\ -5 \\ 0 \end{bmatrix}_{3 \times 1}$$

### 3. Square Matrix
A matrix where the number of rows equals the number of columns: $m = n$.
$$S = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}_{2 \times 2}$$

### 4. Rectangular Matrix
A matrix where $m \neq n$.

### 5. Zero (Null) Matrix
All entries are zero, denoted $O$.
$$O = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$$

### 6. Diagonal Matrix
A **square** matrix where all entries **off** the main diagonal are zero.
$$D = \begin{bmatrix} 3 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 5 \end{bmatrix}$$

### 7. Scalar Matrix
A diagonal matrix where **all main diagonal entries are equal** to the same constant $k$.
$$S = \begin{bmatrix} k & 0 & 0 \\ 0 & k & 0 \\ 0 & 0 & k \end{bmatrix}$$

### 8. Identity (Unit) Matrix
A scalar matrix where $k = 1$, denoted $I$.
$$I_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

> **Hierarchy:** Identity $\subset$ Scalar $\subset$ Diagonal $\subset$ Square

### 9. Upper Triangular Matrix
All entries **below** the main diagonal are zero ($a_{ij} = 0$ for $i > j$).
$$U = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 0 & 6 \end{bmatrix}$$

### 10. Lower Triangular Matrix
All entries **above** the main diagonal are zero ($a_{ij} = 0$ for $i < j$).
$$L = \begin{bmatrix} 1 & 0 & 0 \\ 2 & 3 & 0 \\ 4 & 5 & 6 \end{bmatrix}$$

> **Note:** A matrix that is both upper and lower triangular must be a **diagonal matrix**.

### 11. Transpose of a Matrix
The **transpose** of $A$ (denoted $A^T$) is obtained by interchanging rows and columns: $(A^T)_{ij} = a_{ji}$.

$$A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix} \implies A^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix}$$

### 12. Symmetric Matrix
A square matrix where $A^T = A$ (i.e., $a_{ij} = a_{ji}$ for all $i, j$).
$$A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 5 & 4 \\ 3 & 4 & 6 \end{bmatrix}$$

### 13. Skew-Symmetric Matrix
A square matrix where $A^T = -A$ (i.e., $a_{ij} = -a_{ji}$).

**Key property:** All diagonal entries must be zero, since $a_{ii} = -a_{ii} \Rightarrow a_{ii} = 0$.

$$A = \begin{bmatrix} 0 & -2 & 3 \\ 2 & 0 & -1 \\ -3 & 1 & 0 \end{bmatrix}$$

---

## Summary Table

| Type | Condition |
|---|---|
| Row matrix | $m = 1$ |
| Column matrix | $n = 1$ |
| Square matrix | $m = n$ |
| Diagonal matrix | Square; $a_{ij} = 0$ for $i \neq j$ |
| Scalar matrix | Diagonal; all $a_{ii} = k$ |
| Identity matrix | Scalar; $k = 1$ |
| Upper triangular | $a_{ij} = 0$ for $i > j$ |
| Lower triangular | $a_{ij} = 0$ for $i < j$ |
| Symmetric | $A^T = A$ |
| Skew-symmetric | $A^T = -A$ |

---

---

<!-- note kx79sgd6km4rxat9grnzdmhfc185qjtf | topic ms721ktdww5ng9abnej8382zyd85pnwq | status published -->
# 2.2 Matrix Construction and Operations

This section covers constructing matrices from formulas, performing matrix operations, and proving matrix identities , all core skills for FBISE Grade 11 Mathematics.

---

## 1. Constructing a Matrix from a Formula

A matrix $A = [a_{ij}]$ of order $m \times n$ can be defined by giving a formula for each element $a_{ij}$, where:
- $i$ = **row number** ($1 \le i \le m$)
- $j$ = **column number** ($1 \le j \le n$)

### Example
Construct a $2 \times 3$ matrix $B = [b_{ij}]$ where $b_{ij} = \dfrac{i^2 - j}{3}$.

Calculate each element by substituting the appropriate $i$ and $j$:

$$b_{11} = \frac{1-1}{3} = 0, \quad b_{12} = \frac{1-2}{3} = -\frac{1}{3}, \quad b_{13} = \frac{1-3}{3} = -\frac{2}{3}$$

$$b_{21} = \frac{4-1}{3} = 1, \quad b_{22} = \frac{4-2}{3} = \frac{2}{3}, \quad b_{23} = \frac{4-3}{3} = \frac{1}{3}$$

$$B = \begin{bmatrix} 0 & -\dfrac{1}{3} & -\dfrac{2}{3} \\ 1 & \dfrac{2}{3} & \dfrac{1}{3} \end{bmatrix}$$

---

## 2. Matrix Multiplication

For matrices $A$ (of order $m \times n$) and $B$ (of order $n \times p$), the product $AB$ is an $m \times p$ matrix where:

$$(AB)_{ij} = \sum_{k=1}^{n} a_{ik}\, b_{kj}$$

**Key properties:**
- Matrix multiplication is **not commutative** in general: $AB \ne BA$
- It is **associative**: $(AB)C = A(BC)$
- It is **distributive**: $A(B+C) = AB + AC$

### Solving Matrix Equations

To solve $AXB = C$ for unknown matrix $X$ (where $A$ and $B$ are invertible):
1. Pre-multiply both sides by $A^{-1}$: $\quad XB = A^{-1}C$
2. Post-multiply both sides by $B^{-1}$: $\quad X = A^{-1}CB^{-1}$

> ⚠️ Order matters! $A^{-1}CB^{-1} \ne A^{-1}B^{-1}C$ in general.

---

## 3. Transpose Properties

The **transpose** of a matrix $A$, written $A^T$, is obtained by swapping rows and columns.

**Key properties:**

| Property | Rule |
|---|---|
| Double transpose | $(A^T)^T = A$ |
| Sum | $(A + B)^T = A^T + B^T$ |
| Scalar multiple | $(kA)^T = kA^T$ |
| Product (reverse order) | $(AB)^T = B^T A^T$ |

The product rule extends: $(ABC)^T = C^T B^T A^T$.

---

## 4. Proving Matrix Identities

### Idempotent-type Identities

Given conditions like $AB = B$ and $BA = A$, we can simplify powers of matrices:

**Simplifying $A^2$:**
$$A^2 = A \cdot A = A(BA) = (AB)A = B \cdot A = A$$

**Simplifying $B^2$:**
$$B^2 = B \cdot B = B(AB) = (BA)B = A \cdot B = B$$

Therefore: $A^2 + B^2 = A + B$

### Polynomial Identities in Matrices

To verify an identity like $X^2 - 4X - 5I = O$ for a given matrix $X$:
1. Compute $X^2$ by matrix multiplication.
2. Compute $4X$ by scalar multiplication.
3. Note: the constant $5$ must be written as $5I$ (where $I$ is the identity matrix of the same order as $X$) to allow matrix subtraction.
4. Substitute and simplify to show the result is the zero matrix $O$.

---

## 5. Proving $A^n$ by Mathematical Induction

To prove a formula for $A^n$ for all positive integers $n$:

1. **Base case** ($n = 1$): Verify the formula holds for $A^1 = A$.
2. **Inductive hypothesis**: Assume the formula holds for $n = k$, i.e., assume $A^k = \text{[formula]}$.
3. **Inductive step**: Show it holds for $n = k+1$ by computing $A^{k+1} = A^k \cdot A$ and using the hypothesis.

---

## Summary of Key Rules

| Operation | Rule |
|---|---|
| Matrix element | $a_{ij}$: row $i$, column $j$ |
| Product transpose | $(AB)^T = B^T A^T$ |
| Solving $AXB = C$ | $X = A^{-1}CB^{-1}$ |
| Scalar in matrix equation | Replace constant $c$ with $cI$ |
| Proving $A^n$ | Use Mathematical Induction |

---

<!-- note kx7et8hyjma6g69tfkfedz7sy985pw42 | topic ms7c3pd94ng9j54znypntrrh8185p841 | status published -->
# 2.3 Determinants and Cofactor Expansion

## Minor of an Element

For a $3 \times 3$ matrix $A$, the **minor** $M_{ij}$ of element $a_{ij}$ is the determinant of the $2 \times 2$ submatrix obtained by **deleting row $i$ and column $j$**.

**Example:** For matrix
$$A = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}$$

The minor of $a_{11}$ is:
$$M_{11} = \begin{vmatrix} a_{22} & a_{23} \\ a_{32} & a_{33} \end{vmatrix} = a_{22}a_{33} - a_{23}a_{32}$$

---

## Cofactor of an Element

The **cofactor** $A_{ij}$ of element $a_{ij}$ is defined as:
$$A_{ij} = (-1)^{i+j} M_{ij}$$

The sign pattern $(-1)^{i+j}$ for a $3 \times 3$ matrix is:
$$\begin{pmatrix} + & - & + \\ - & + & - \\ + & - & + \end{pmatrix}$$

---

## Cofactor Expansion (Laplace Expansion)

The determinant of a $3 \times 3$ matrix can be evaluated by expanding along **any row or column**.

### Expansion along Row 1:
$$|A| = a_{11}A_{11} + a_{12}A_{12} + a_{13}A_{13}$$

Substituting the cofactor formula:
$$|A| = a_{11}M_{11} - a_{12}M_{12} + a_{13}M_{13}$$

### Worked Example

Evaluate $|A|$ for:
$$A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}$$

**Expanding along Row 1:**

$$M_{11} = \begin{vmatrix} 5 & 6 \\ 8 & 9 \end{vmatrix} = 45 - 48 = -3$$

$$M_{12} = \begin{vmatrix} 4 & 6 \\ 7 & 9 \end{vmatrix} = 36 - 42 = -6$$

$$M_{13} = \begin{vmatrix} 4 & 5 \\ 7 & 8 \end{vmatrix} = 32 - 35 = -3$$

$$|A| = 1(+1)(-3) + 2(-1)(-6) + 3(+1)(-3) = -3 + 12 - 9 = 0$$

> **Note:** Since $|A| = 0$, this matrix is **singular**.

---

## Properties of Determinants

These properties simplify determinant evaluation:

| Property | Statement |
|---|---|
| **Identical Rows/Columns** | If two rows (or columns) are identical, $\vert A\vert  = 0$ |
| **Row/Column of Zeros** | If any row or column is all zeros, $\vert A\vert  = 0$ |
| **Scalar Multiple** | Multiplying one row by scalar $k$ multiplies $\vert A\vert $ by $k$ |
| **Row Interchange** | Swapping two rows changes the sign of $\vert A\vert $ |
| **Multiplicative Property** | $\vert AB\vert  = \vert A\vert \vert B\vert $ |
| **Transpose** | $\vert A^T\vert  = \vert A\vert $ |
| **Expansion Invariance** | Cofactor expansion along any row or column gives the same value |

---

## Singular and Non-Singular Matrices

- A matrix $A$ is **singular** if $|A| = 0$ (no inverse exists).
- A matrix $A$ is **non-singular** if $|A| \neq 0$ (inverse exists).

**Finding $\lambda$ for singularity:** Set $|A| = 0$ and solve for $\lambda$.

---

## Adjoint and Inverse of a Matrix

The **cofactor matrix** of $A$ is the matrix whose $(i,j)$ entry is $A_{ij}$.

The **Adjoint** (or adjugate) is the transpose of the cofactor matrix:
$$\text{Adj}(A) = [A_{ij}]^T$$

The **inverse** of a non-singular matrix is:
$$A^{-1} = \frac{1}{|A|} \text{Adj}(A), \quad |A| \neq 0$$

---

## MCQ Practice

---

<!-- note kx7cjmndtw9617p4t9wz4sf85985qfy0 | topic ms7ec9z5exgs5se4wdq2p0vybn85qzqh | status published -->
# 2.4 Determinants and Special Matrices

## Properties of Determinants

Determinants have several key properties that allow simplification without full expansion.

### 1. Identical Rows or Columns
If any two rows (or columns) of a matrix are identical, its determinant is **zero**.

**Reason:** Swapping the two identical rows changes the sign of the determinant but leaves it unchanged, so $|A| = -|A|$, giving $|A| = 0$.

### 2. Scalar Multiple of a Row/Column
If one row (or column) is a scalar multiple of another, the determinant is **zero** (the rows/columns are linearly dependent).

**Example:**
$$\left|\begin{array}{ccc} 9 & 27 & 36 \\ 18 & 54 & 24 \\ 27 & 81 & 28 \end{array}\right| = 0$$
because $C_2 = 3C_1$.

### 3. Scalar Factor
If every element of one row (or column) is multiplied by scalar $k$, the determinant is multiplied by $k$:
$$|kR_i| = k|A|$$
Conversely, a common factor from any single row or column can be taken outside the determinant.

### 4. Linearity (Splitting a Row/Column)
If the elements of a row or column are sums, e.g., $c_i = p_i + q_i$, the determinant splits:
$$\left|\cdots\, (p_i+q_i)\, \cdots\right| = \left|\cdots\, p_i\, \cdots\right| + \left|\cdots\, q_i\, \cdots\right|$$

**Example:**
$$\left|\begin{array}{ccc} x & x^2 & 1+ax^3 \\ y & y^2 & 1+ay^3 \\ z & z^2 & 1+az^3 \end{array}\right| = \left|\begin{array}{ccc} x & x^2 & 1 \\ y & y^2 & 1 \\ z & z^2 & 1 \end{array}\right| + a\left|\begin{array}{ccc} x & x^2 & x^3 \\ y & y^2 & y^3 \\ z & z^2 & z^3 \end{array}\right|$$

### 5. Row/Column Operations for Factoring
To factor out $(a+b+c)$ from a determinant, apply $R_1 \to R_1 + R_2 + R_3$. This makes every element of $R_1$ equal to $(a+b+c)$, which is then taken out as a scalar.

**Example:** To prove
$$\left|\begin{array}{ccc} x & y & x+y \\ y & x+y & x \\ x+y & x & y \end{array}\right| = -2(x^3+y^3)$$
Apply $R_1 \to R_1 + R_2 + R_3$: the first row becomes $[2(x+y),\; 2(x+y),\; 2(x+y)]$, so $2(x+y)$ factors out.

---

## Special Matrices and Their Determinants

### Skew-Symmetric Matrix
A matrix $A$ is **skew-symmetric** if $A^T = -A$, i.e., $a_{ij} = -a_{ji}$ and all diagonal elements are zero.

**Example:**
$$A = \begin{pmatrix} 0 & -a & -b \\ a & 0 & -c \\ b & c & 0 \end{pmatrix}$$

**Key Property:** The determinant of every skew-symmetric matrix of **odd order** is zero.

**Proof:** Since $A^T = -A$:
$$|A^T| = |-A| = (-1)^n|A|$$
For odd $n$: $(-1)^n = -1$, so $|A| = -|A|$, giving $|A| = 0$.

---

## Consistent and Inconsistent Systems

A **system of linear equations** $AX = B$ is:
- **Consistent** , has at least one solution (unique or infinitely many).
  - Unique solution: $\text{rank}(A) = \text{rank}([A|B]) = n$ (number of unknowns)
  - Infinitely many: $\text{rank}(A) = \text{rank}([A|B]) < n$
- **Inconsistent** , has **no solution**: $\text{rank}(A) \neq \text{rank}([A|B])$

---

## Solving Non-Homogeneous Systems ($AX = B$)

### Matrix Inversion Method
If $|A| \neq 0$, the unique solution is:
$$X = A^{-1}B, \quad \text{where } A^{-1} = \frac{1}{|A|}\,\text{adj}(A)$$

### Cramer's Rule
For $AX = B$ with $|A| \neq 0$, the solution is:
$$x = \frac{|A_x|}{|A|}, \quad y = \frac{|A_y|}{|A|}, \quad z = \frac{|A_z|}{|A|}$$
where $A_x$, $A_y$, $A_z$ are obtained by replacing the respective column of $A$ with $B$.

**Example:** Solve
$$x + y + z = 6,\quad 2x - y + z = 3,\quad x + 2y - z = 2$$

Compute $|A|$, then $|A_x|$, $|A_y|$, $|A_z|$ by substituting column $B$ in place of each variable's column.

---

## Solving Homogeneous Systems ($AX = 0$)

A homogeneous system always has the **trivial solution** $X = 0$.

**Non-trivial solutions** exist if and only if $|A| = 0$.

### Gaussian Elimination Method
1. Write the augmented matrix $[A|0]$.
2. Apply row operations to reach **row echelon form**.
3. If a free variable appears (rank $< n$), express other variables in terms of it.
4. Write the general solution.

**Example:** For
$$x + y - z = 0,\quad 2x - y + z = 0,\quad x - 2y + 2z = 0$$
Form $[A|0]$ and row-reduce. If $|A| = 0$, a non-trivial solution exists.

---

<!-- note kx794rnvaekqeds68kq83t9h4x85p2c1 | topic ms7dcz4g1vkahras5zwyj0yh9585q1f5 | status published -->
# 2.5 Echelon Form and Solving Linear Systems

This section covers the Echelon Form of a matrix, the rank of a matrix, and methods for solving systems of linear equations including Gaussian elimination and the matrix inversion method.

---

## Echelon Form of a Matrix

A matrix is in **Echelon Form** (Row Echelon Form) if:
1. All non-zero rows are above any rows of all zeros.
2. The **leading entry** (first non-zero entry) of each non-zero row is $1$ (called a **pivot**).
3. Each pivot is to the **right** of the pivot in the row above it.
4. All entries **below** each pivot are $0$.

### Reduced Echelon Form (RREF)

A matrix is in **Reduced Echelon Form** if it satisfies all Echelon Form conditions **plus**:
- All entries **above and below** each pivot are $0$.

**Example:**

$$\text{Echelon Form:} \quad \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 0 & 0 & 1 \end{pmatrix} \qquad \text{RREF:} \quad \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

---

## Rank of a Matrix

The **rank** of a matrix $A$, denoted $\rho(A)$ or $\text{rank}(A)$, is the number of **non-zero rows** in its Echelon Form.

**Key facts:**
- For an $n \times n$ matrix: $0 \leq \text{rank}(A) \leq n$
- If $\text{rank}(A) = n$, the matrix is **non-singular** (invertible) and $\det(A) \neq 0$.
- If $\text{rank}(A) < n$, the matrix is **singular** and has no inverse.

**Example:** If a $3 \times 3$ matrix reduces to:
$$\begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 3 \\ 0 & 0 & 0 \end{pmatrix}$$
then $\text{rank}(A) = 2$ (two non-zero rows).

---

## Finding the Inverse Using Row Operations (Gauss-Jordan Method)

To find $A^{-1}$ for an $n \times n$ matrix $A$:

**Step 1:** Form the augmented matrix $[A \mid I]$.

**Step 2:** Apply elementary row operations to reduce the left block to $I$.

**Step 3:** The right block becomes $A^{-1}$:
$$[A \mid I] \xrightarrow{\text{row ops}} [I \mid A^{-1}]$$

**Failure condition:** If a row of all zeros appears on the left side during reduction, then $\text{rank}(A) < n$, the matrix is **singular**, and $A^{-1}$ **does not exist**.

---

## Solving Non-Homogeneous Systems: $AX = B$

A **non-homogeneous** system has the form $AX = B$ where $B \neq \mathbf{0}$.

### Method 1: Matrix Inversion Method

If $\det(A) \neq 0$, the unique solution is:
$$X = A^{-1}B$$

**Example:** Solve the system:
$$x + y + z = 6, \quad 2x - y + z = 3, \quad x + 2y - z = 2$$

Write as $AX = B$:
$$A = \begin{pmatrix} 1 & 1 & 1 \\ 2 & -1 & 1 \\ 1 & 2 & -1 \end{pmatrix}, \quad X = \begin{pmatrix} x \\ y \\ z \end{pmatrix}, \quad B = \begin{pmatrix} 6 \\ 3 \\ 2 \end{pmatrix}$$

Find $A^{-1}$ using the Gauss-Jordan method, then compute $X = A^{-1}B$.

### Method 2: Cramer's Rule

For a $3 \times 3$ system $AX = B$ with $\det(A) \neq 0$:
$$x = \frac{\det(A_1)}{\det(A)}, \quad y = \frac{\det(A_2)}{\det(A)}, \quad z = \frac{\det(A_3)}{\det(A)}$$

where $A_1$, $A_2$, $A_3$ are obtained by replacing the 1st, 2nd, 3rd column of $A$ with $B$ respectively.

### Gaussian Elimination (Augmented Matrix Method)

**Step 1:** Write the augmented matrix $[A \mid B]$.

**Step 2:** Apply row operations to reduce to Echelon Form.

**Step 3:** Use **back-substitution** to find $x$, $y$, $z$.

**Consistency check:**
- If a row $[0\ 0\ 0 \mid c]$ with $c \neq 0$ appears → system is **inconsistent** (no solution).
- If a row $[0\ 0\ 0 \mid 0]$ appears → system has **infinitely many solutions**.

---

## Solving Homogeneous Systems: $AX = 0$

A **homogeneous** system has the form $AX = \mathbf{0}$. It **always** has the **trivial solution** $X = \mathbf{0}$.

### Non-Trivial Solutions

The system $AX = \mathbf{0}$ has **non-trivial solutions** if and only if:
$$\det(A) = 0 \quad \Leftrightarrow \quad \text{rank}(A) < n$$

### Gaussian Elimination for Homogeneous Systems

**Step 1:** Write the augmented matrix $[A \mid \mathbf{0}]$.

**Step 2:** Reduce $A$ to Echelon Form using row operations.

**Step 3:**
- If $\text{rank}(A) = n$: only the trivial solution $X = \mathbf{0}$ exists.
- If $\text{rank}(A) < n$: infinitely many non-trivial solutions exist.

**Example:** Solve $AX = \mathbf{0}$ where:
$$A = \begin{pmatrix} 1 & 1 & -1 \\ 2 & -1 & 1 \\ 3 & 0 & 0 \end{pmatrix}$$

If $\det(A) = 0$, reduce $[A \mid \mathbf{0}]$ to Echelon Form and express the free variables in terms of a parameter $t$.

---

## Summary Table

| Method | System Type | Condition | Solution |
|---|---|---|---|
| Matrix Inversion | $AX = B$ | $\det(A) \neq 0$ | $X = A^{-1}B$ |
| Cramer's Rule | $AX = B$ | $\det(A) \neq 0$ | $x = \det(A_i)/\det(A)$ |
| Gaussian Elimination | $AX = B$ or $AX = 0$ | Any | Back-substitution |
| Homogeneous | $AX = 0$ | $\det(A) = 0$ | Non-trivial solutions exist |

---

<!-- note kx7dwt77qdqwrx0e6317n8ghwh85pg1j | topic ms77xhxssmsam1s8n1mfpr3kdh85qfs3 | status published -->
# 2.6 Homogeneous Systems of Linear Equations

A **homogeneous system** of linear equations has the form $AX = 0$, where all constant terms on the right-hand side are zero.

## General Form

A system of three homogeneous equations in three unknowns:

$$a_1x + b_1y + c_1z = 0$$
$$a_2x + b_2y + c_2z = 0$$
$$a_3x + b_3y + c_3z = 0$$

In matrix form: $AX = 0$, where $A$ is the $3 \times 3$ coefficient matrix and $X = [x, y, z]^T$.

## Trivial and Non-Trivial Solutions

| Condition | Type of Solution |
|-----------|------------------|
| $\vert A\vert  \neq 0$ (rank = 3) | Only **trivial solution**: $x = y = z = 0$ |
| $\vert A\vert  = 0$ (rank < 3) | **Non-trivial solutions** exist (infinitely many) |

> **Key fact:** A homogeneous system is **always consistent** , the trivial solution always satisfies it.

## Solving by Gaussian Elimination (SLO M-11-A-20)

Gaussian elimination reduces the augmented matrix $[A|0]$ to **row echelon form** using elementary row operations.

### Steps:
1. Write the augmented matrix $[A|0]$.
2. Apply row operations ($R_i \leftrightarrow R_j$, $kR_i$, $R_i + kR_j$) to get an upper triangular form.
3. Determine the rank of $A$:
   - If $\text{rank}(A) = n$ → only trivial solution.
   - If $\text{rank}(A) < n$ → free variables exist → infinitely many non-trivial solutions.
4. Express leading variables in terms of free variables.

### Example

Solve the homogeneous system:
$$x + y - z = 0, \quad 2x - y + z = 0, \quad x - 2y + 2z = 0$$

**Augmented matrix:**
$$\begin{bmatrix} 1 & 1 & -1 & | & 0 \\ 2 & -1 & 1 & | & 0 \\ 1 & -2 & 2 & | & 0 \end{bmatrix}$$

$R_2 \to R_2 - 2R_1$, $R_3 \to R_3 - R_1$:
$$\begin{bmatrix} 1 & 1 & -1 & | & 0 \\ 0 & -3 & 3 & | & 0 \\ 0 & -3 & 3 & | & 0 \end{bmatrix}$$

$R_3 \to R_3 - R_2$:
$$\begin{bmatrix} 1 & 1 & -1 & | & 0 \\ 0 & -3 & 3 & | & 0 \\ 0 & 0 & 0 & | & 0 \end{bmatrix}$$

Rank = 2 < 3 unknowns → one free variable. Let $z = t$:
- From $R_2$: $-3y + 3t = 0 \Rightarrow y = t$
- From $R_1$: $x + t - t = 0 \Rightarrow x = 0$

**Solution:** $x = 0,\ y = t,\ z = t$ for any $t \in \mathbb{R}$.

## Non-Homogeneous Systems: Matrix Inversion Method (SLO M-11-A-19)

For $AX = B$ with $|A| \neq 0$:

$$X = A^{-1}B = \frac{1}{|A|}\text{adj}(A) \cdot B$$

- **Condition:** $|A| \neq 0$ (matrix must be non-singular).
- If $|A| = 0$, the inverse does not exist and this method cannot be applied.

## Non-Homogeneous Systems: Cramer's Rule (SLO M-11-A-19)

For $AX = B$ with $|A| \neq 0$, each variable is found by:

$$x_i = \frac{|A_i|}{|A|}$$

where $A_i$ is the matrix obtained by replacing the $i$-th column of $A$ with the column vector $B$.

### Cases in Cramer's Rule:

| $\vert A\vert $ | $\vert A_i\vert $ | Interpretation |
|-------|---------|----------------|
| $\neq 0$ | any | Unique solution |
| $= 0$ | all $= 0$ | Infinitely many solutions or no solution |
| $= 0$ | some $\neq 0$ | **Inconsistent** (no solution) |

## Consistent and Inconsistent Systems (SLO M-11-A-18)

Using the **rank** of the coefficient matrix $A$ and augmented matrix $[A|B]$:

| Condition | System Type |
|-----------|-------------|
| $\text{rank}(A) < \text{rank}([A\vert B])$ | **Inconsistent** (no solution) |
| $\text{rank}(A) = \text{rank}([A\vert B]) = n$ | **Consistent, unique solution** |
| $\text{rank}(A) = \text{rank}([A\vert B]) < n$ | **Consistent, infinitely many solutions** |