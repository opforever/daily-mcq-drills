<!-- note kx78jk5h5ft1b25rspppb55f998btr5r | topic ms7ab12f00eesw68c3kfxagvdn8bvbxm | status published -->
# 3.1 After studying this unit students will be able to:


## Matrices And Determinants

## After studying this unit students will be able to:

- Display information in the form of matrices of order 2 .
- Calculate product of scalar quantity and a matrix.
- Solve situations involving sum, difference and product of two matrices.
- Evaluate the determinant and inverse of a matrix of order 2 by 2 .
- Solve the simultaneous linear equations in two variables using matrix inversion method and Cramer's rule.
- Explain with examples, how mathematics plays a key role in the development of new scientific theories and technologies.
- Apply concepts of matrices to real world problems.

Matrices are used for solving system of linear equations by several methods. These methods are used in computer programs, in traffic flow, schedule air line flights, engineering, accounting, economics etc

## Introduction of Matrices

In a mathematical quiz between girls and boys, Class 8 (girls) scored 95 points, class 8 (boys) scored 97 points, Class 9 (girls) scored 93 points, class 9 (boys) scored 90 points, class 10 (girls) scored 96 points and class 10 (boys) scored 94 points. This information can be displayed as under:

$$
\mathrm{Q}=\left[\begin{array}{ccc}
\mathbf{8}^{\text {th }} & \mathbf{9}^{\text {th }} & \mathbf{1 0}^{\text {th }} \\
95 & 93 & 96 \\
97 & 90 & 94
\end{array}\right]^{\text {girls }}
$$

This method is no doubt easy to write and manipulate. In 1850, Sylvester introduced such rectangular arrangement and he named it 'Matrix'. Later Hamilton and Cayley made further significant contributions to the Matrix Algebra. Today matrices are being used in almost every academic discipline in building models, organizing data and solving real world problems.

## Matrix (plural Matrices)

A Matrix is a rectangular arrangement of numbers.
e.g. $\left[\begin{array}{l}1 \\ 2\end{array}\right],\left[\begin{array}{ll}3 & 4 \\ 5 & 6\end{array}\right],\left[\begin{array}{ll}5 & 6\end{array}\right],[0]$

## A Model Matrix


## Key Fact: Matrix Terminology

- The numbers used in a matrix are called 'elements' or 'entries' of the matrix.
- Elements of a matrix are written within the square brackets in a definite order, in rows and columns.
- Capital alphabets are used to name a matrix while elements of a matrix are usually represented by small alphabets and numbers.

Row: Horizontal arrangement of elements in a matrix is called a row.

$$
\left[\begin{array}{lll}
5 & 2 & 6 \\
3 & 1 & 7
\end{array}\right]
$$

First row and second row of a matrix are represented by $\mathrm{R}_{1}$ and $\mathrm{R}_{2}$ respectively.
Column: Vertical arrangement of elements is in a matrix called a column.

$$
\left[\begin{array}{lll}
5 & 2 & 6 \\
3 & 1 & 7
\end{array}\right]
$$

First column, second column and third column of a matrix are represented by $C_{1}, C_{2}, C_{3}$ respectively.

The number of rows and columns may be equal or unequal in any matrix, however the number of elements in different rows and in different columns remains the same. In $\left[\begin{array}{lll}5 & 2 & 6 \\ 3 & 1 & 7\end{array}\right]$, there are 2 rows and 3 columns. There are 3 elements in each row and 2 elements in each column.

## Order of Matrix

If ' $A$ ' is a matrix with ' $m$ ' number of rows and ' $n$ ' number of columns, then order of the matrix is m-by-n.
Order of $\left[\begin{array}{l}5 \\ 3\end{array}\right]$ is 2-by-1 i.e. 2 rows and 1 column.

## Equal Matrices

## Key Fact: Matrix Equality

Two matrices are equivalent if and only if they have same rank.

Two matrices are said to be equal if and only if their:
(i) order is same
(ii) corresponding elements are same.

## Example: Row and Column Classification

Check whether the following pairs of matrices are equal or not. Mention the reason in each case.
(i) $\left[\begin{array}{l}\sqrt{4} \\ (-5)^{2}\end{array}\right]=\left[\begin{array}{l}2 \\ 25\end{array}\right]$

- Matrices on both sides of equality are of order 2-by-1
- Corresponding elements of the matrices on both sides of equality are also equal. Hence both matrices are equal.
(ii) $A=\left[\begin{array}{l}13 \\ 17\end{array}\right], B=\left[\begin{array}{ll}13 & 17\end{array}\right]$

Order of matrix $A$ is 2-by-1. Order of matrix $B$ is 1-by-2. Order is different, we can say $A \neq B$.
(iii) $\mathrm{E}=\left[\begin{array}{ll}5 & 2 \\ 3 & 6\end{array}\right], \quad \mathrm{F}=\left[\begin{array}{ll}5 & 2 \\ 3 & 3\end{array}\right]$

Since the corresponding elements are not equal. $\therefore \mathrm{E} \neq \mathrm{F}$.

## Example: Matrix Equality

Find unknowns from the following if possible.
$\left[\begin{array}{cc}x+2 & 5 \\ 3 & y-4\end{array}\right]=\left[\begin{array}{cc}9 & 5 \\ 3 & .7\end{array}\right]$

## Check Point: Matrix Equality

Can you find the value of $x$ from $\left[\begin{array}{ll}x & 0 \\ 0 & 3\end{array}\right]=\left[\begin{array}{ll}0 & 3 \\ 3 & 0\end{array}\right]$.
Mention the reason, if your answer is no.

Comparing the corresponding elements of two equal matrices, we get

$$
x+2=9,5=5,3=3, y-4=7
$$

Now from $x+2=9$, we have $x=7$ and from $y-4=7$, we have $y=11$.

## Types of Matrices

## Row and Column Matrices

A matrix having only one row is called a row matrix while a matrix having only one column is called a column matrix.
Row matrices: $\left[\begin{array}{ll}5 & 3\end{array}\right],[a+s+d],\left[\begin{array}{ll}\frac{5}{3} & \frac{6}{7}\end{array}\right]$
Column matrices: $\left[\begin{array}{l}5 \\ 6\end{array}\right],\left[\begin{array}{l}a+s \\ s+d\end{array}\right],\left[\frac{5}{6}\right]$.

## Rectangular Matrix

A matrix with unequal number of rows and columns is called a rectangular matrix.

$$
\left[\begin{array}{ll}
a+b & c \\
d+e & f \\
g+h & i
\end{array}\right],\left[\begin{array}{ccc}
\frac{1}{3} & \frac{4}{3} & \frac{7}{3} \\
\frac{2}{3} & \frac{5}{3} & \frac{8}{3}
\end{array}\right] \text { and }\left[\begin{array}{l}
5 \\
6
\end{array}\right] \text { are all rectangular matrices. }
$$

## Square Matrix

A matrix with equal number of rows and columns is called a square matrix.

$$
\left[\begin{array}{ll}
5 & 3 \\
1 & 2
\end{array}\right],\left[\begin{array}{ccc}
1 & 9 & 5 \\
0 & 8 & 2 \\
2 & 5 & -1
\end{array}\right] \text { and [5] are all square matrices. }
$$

## Null Matrix (Zero Matrix, Additive Identity Matrix)

A matrix of any order, having all the elements equal to zero, is called a null matrix.
A null matrix is represented by capital English alphabet 'O', while its elements are all zeros.
Null matrices may have any order.

$$
O_{2}=\left[\begin{array}{ll}
0 & 0 \\
0 & 0
\end{array}\right], O_{1}=[0], O_{12}=\left[\begin{array}{ll}
0 & 0
\end{array}\right] \text { are all null matrices. }
$$

## Diagonal Matrix

A square matrix in which every element except the primary (principal) diagonal elements is zero is called a diagonal matrix.
$\mathrm{A}=\left[\begin{array}{cc}\sqrt{3} & 0 \\ 0 & 15\end{array}\right], \mathrm{B}=\left[\begin{array}{ll}0 & 0 \\ 0 & 5\end{array}\right], \mathrm{C}=\left[\begin{array}{lll}1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 5\end{array}\right]$ are diagonal matrices but $\mathrm{D}=\left[\begin{array}{ll}0 & 5 \\ 3 & 0\end{array}\right]$ is not a diagonal matrix.

## Scalar Matrix

A diagonal matrix in which all the elements of primary diagonal are equal and non-zero is called a scalar matrix.
$\mathrm{P}=\left[\begin{array}{ll}5 & 0 \\ 0 & 5\end{array}\right]$, is a scalar matrix of order 2, but $\mathrm{Q}=\left[\begin{array}{ll}0 & 5 \\ 5 & 0\end{array}\right]$ is not a scalar matrix, since its primary diagonal elements are zeros and secondary diagonal elements are nonzero.
Some more examples of scalar matrices are:

$$
\left[\begin{array}{cc}
3 & 0 \\
0 & \sqrt{9}
\end{array}\right],\left[\begin{array}{cc}
2 & 0 \\
3-3 & 4 \div 2
\end{array}\right],\left[\begin{array}{ccc}
3+7 & 0 & 0 \\
0 & \frac{20}{2} & 0 \\
0 & 0 & 2 \times 5
\end{array}\right]
$$

## Unit Matrix (Multiplicative Identity Matrix)

A scalar matrix in which all the primary diagonal elements are equal to 1 , is called a unit matrix. Unit matrix is represented by I.

$$
\mathrm{I}_{1}=[1], \mathrm{I}_{2}=\left[\begin{array}{ll}
1 & 0 \\
0 & 1
\end{array}\right], \mathrm{I}_{3}=\left[\begin{array}{lll}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{array}\right]
$$

## Check Point: Matrix Types

Write the most appropriate type of following matrices.

$$
A=\left[\begin{array}{cc}
15 & 0 \\
0 & \frac{45}{3}
\end{array}\right], \quad B=\left[\begin{array}{ll}
0 & 3 \\
3 & 0
\end{array}\right], \quad C=\left[\begin{array}{lc}
\frac{\sqrt{9}}{3} & 5-5 \\
\frac{5}{5}-1 & \frac{15}{5 \times 3}
\end{array}\right]
$$

## Transpose of a Matrix

If rows (columns) of a matrix P are changed into columns (rows) then the resulting matrix is called transpose of the matrix P . It is represented by $\mathrm{P}^{\mathrm{t}}$.

## Example: Transpose

If a matrix G represents number of gold medals and silver medals won by three friends, as under:
Gold Silver
medals medals

$$
\mathrm{G}=\left[\begin{array}{ll}
5 & 3 \\
2 & 6 \\
1 & 7
\end{array}\right] \begin{gathered}
\text { Azka } \\
\text { Aemen } \\
\text { Khansa }
\end{gathered} \quad \text { then find } \mathrm{G}^{\mathrm{t}}
$$

Solution:
Azka Aemen Khansa

$$
G^{t}=\left[\begin{array}{lll}
5 & 2 & 1 \\
3 & 6 & 7
\end{array}\right] \begin{aligned}
& \text { Gold medals } \\
& \text { Silver medals }
\end{aligned}
$$

## Key Fact: Symmetric Matrix

If order of a matrix P is $m-b y-n$, then order of $p^{\prime}$ is n-by-m.

## Symmetric Matrices and Skew Symmetric Matrices


## Example: Symmetric Matrix

From the following, check for symmetric and skew symmetric matrices.

$$
\text { If } S=\left[\begin{array}{ll}
5 & 3 \\
3 & 5
\end{array}\right] \text { then, } S^{t}=\left[\begin{array}{ll}
5 & 3 \\
3 & 5
\end{array}\right]
$$

As $\mathrm{S}=\mathrm{S}^{\mathrm{t}}$, therefore S is a symmetric matrix.
If $\quad T=\left[\begin{array}{cc}5 & 2 \\ 6 & 11\end{array}\right]$ then, $T^{t}=\left[\begin{array}{cc}5 & 6 \\ 2 & 11\end{array}\right]$
As $\mathrm{T} \neq \mathrm{T}^{\mathrm{t}}$, therefore T is a not a symmetric matrix.

> Check Point:
> $\left.\begin{array}{cc}-3 & x \\ 4 & 2\end{array}\right]^{t}=\left[\begin{array}{cc}-3 & 4 \\ 2 & 2\end{array}\right]$

then find $x=$ ?

If $\quad V=\left[\begin{array}{cc}0 & 2 \\ -2 & 0\end{array}\right]$
then, $\quad \mathrm{V}^{\mathrm{t}}=\left[\begin{array}{cc}0 & -2 \\ 2 & 0\end{array}\right]=-\left[\begin{array}{rr}0 & 2 \\ -2 & 0\end{array}\right]=-\mathrm{V}^{\mathrm{t}}$
As $\quad \mathrm{V}=-\mathrm{V}^{t}$, therefore V is a skew symmetric matrix.

- All the square matrices of order 1 are symmetric e.g. [9].
- $\left(A^{t}\right)^{t}=A$.
- All the symmetric matrices are square but every square matrix is not necessarily symmetric.


---

<!-- note kx73k7zd6den446bys9xwqjdhx8bvqdc | topic ms7eesdvszwgrptn7hb4hw45218bvtz8 | status published -->
# 3.2 Addition, Subtraction and Scalar Multiplication of Matrices


## Exercise 3.1

1. Write the number of rows, columns and order of the given matrices.
(a) $\left[\begin{array}{ll}1+2 & 4+5\end{array}\right]$
(b) $\left[\begin{array}{cc}a+s & 0 \\ 0 & d+s\end{array}\right]$
(c) $\left[\frac{5}{7}\right]$
(d) $[4+2 \times 1+5]$
2. Check whether the following pairs of matrices are equal or not.
(a) $\left[\begin{array}{ll}1 & 0 \\ 0 & 1\end{array}\right],\left[\begin{array}{cc}\sqrt{25}-\sqrt{25} & \frac{\sqrt{25}}{5} \\ \frac{\sqrt{16}}{4} & \sqrt{16-16}\end{array}\right]$
(b) $\left[\begin{array}{lll}1 & 2 & 3\end{array}\right],[1+2+3]$
(c) $\left[\frac{1}{2}\right],\left[\begin{array}{l}1 \\ 2\end{array}\right]$
(d) $\left[\begin{array}{l}1+0 \\ 0 \times 0\end{array}\right.$
$\left.\begin{array}{l}0+0 \\ 1-0\end{array}\right],\left[\begin{array}{cc}\frac{5 \times 5}{25} & \frac{3 \times 0}{7} \\ 2-17+15 & 17 \times \frac{1}{17}\end{array}\right]$
3. Hyder, Hassan and Ahmed scored 7 points, 11 points and 10 points respectively in a mathematical quiz. Display the data in a row matrix $(\mathrm{R})$ and a column matrix $(\mathrm{C})$.
4. Write the most appropriate type of the following matrices.
(a) $\quad\left[\begin{array}{ll}5 & 0 \\ 0 & 5\end{array}\right]$
(b) $\quad\left[\begin{array}{cc}0 & 0 \\ 0 & 3+0\end{array}\right]$
(c) $\left[\frac{15 \times 3}{9 \times 5}\right]$
(d) $\left[\begin{array}{c}\frac{\sqrt{625}}{25} \\ 18-19+1\end{array}\right.$
$\left.\begin{array}{c}17+15-32 \\ \frac{3}{\sqrt{9}}\end{array}\right]$
(e) $\left[\begin{array}{rr}6+2 & 0 \\ -3+3 & 8\end{array}\right]$
5. Check for symmetric and skew symmetric matrices from the following.
(a) $\quad\left[\begin{array}{lll}5 & 2 & 3 \\ 2 & 9 & 6 \\ 3 & 6 & 3\end{array}\right]$
(b) $\quad\left[\begin{array}{cc}0 & 9 \\ -9 & 0\end{array}\right]$
(c) $\left[\begin{array}{ccc}0 & -2 & -4 \\ 2 & 0 & -2 \\ 4 & 2 & 0\end{array}\right]$
(d) $\left[\begin{array}{cc}0 & -7 \\ 7 & 0\end{array}\right]$
(e) $\left[\begin{array}{cc}0 & -5 \\ -5 & 0\end{array}\right]$
6. Write a symmetric and a skew symmetric matrix of order 3 .

## Addition, Subtraction and Scalar Multiplication of Matrices

## Addition and Subtraction of Matrices

Two matrices can be added or subtracted only if their order is same.
Consider $\mathrm{A}=\left[\begin{array}{l}5 \\ 3\end{array}\right], \mathrm{B}=\left[\begin{array}{ll}5 & 3\end{array}\right], \mathrm{C}=\left[\begin{array}{l}6 \\ 3\end{array}\right]$. Here addition and subtraction of A and B is impossible because their order is not same.
However, addition and subtraction of A and C is possible as their order is same.

## Key Fact: Addition

- In the process of addition or subtraction of matrices, only corresponding elements are added or subtracted.
- Matrices of same order are conformable for addition and subtraction.

Example : If $A=\left[\begin{array}{c}2-3 \\ 65\end{array}\right]$ and $B=\left[\begin{array}{c}78 \\ 9-2\end{array}\right]$ then find $\mathrm{A}+\mathrm{B}, A-\mathrm{B}, \mathrm{B}+\mathrm{A}, B-\mathrm{A}$.
Solution: $A+B=\left[\begin{array}{c}2-3 \\ 65\end{array}\right]+\left[\begin{array}{c}78 \\ 9-2\end{array}\right]=\left[\begin{array}{c}2-3+78 \\ 65+9-2\end{array}\right]=\left[\begin{array}{l}77 \\ 72\end{array}\right]$

$$
A-B=\left[\begin{array}{c}
2-3 \\
65
\end{array}\right]-\left[\begin{array}{c}
78 \\
9-2
\end{array}\right]=\left[\begin{array}{c}
2-3-78 \\
65-9+2
\end{array}\right]=\left[\begin{array}{r}
-79 \\
58
\end{array}\right]
$$

Similarly, $B+A=\left[\begin{array}{c}78+2-3 \\ 9-2+65\end{array}\right]=\left[\begin{array}{l}77 \\ 72\end{array}\right]$,

$$
B-A=\left[\begin{array}{l}
78-2+3 \\
9-2-65
\end{array}\right]=\left[\begin{array}{r}
79 \\
-58
\end{array}\right]
$$

Can you add $\left[\begin{array}{ll}0 & 0 \\ 0 & 0\end{array}\right]$ and $\left[\begin{array}{l}1 \\ 2\end{array}\right]$ ?

## Scalar Multiplication of a Matrix

Scalar multiplication of a matrix means multiplication of a matrix with a constant.
If a matrix ' $C$ ' is multiplied by 2 , then each of its element is doubled.

$$
\text { If } C=\left[\begin{array}{ll}
2 & 0 \\
6 & 0
\end{array}\right] \text { then, } 2 C=2 \times\left[\begin{array}{ll}
2 & 0 \\
6 & 0
\end{array}\right]=\left[\begin{array}{ll}
2 \times 2 & 2 \times 0 \\
2 \times 6 & 2 \times 0
\end{array}\right]=\left[\begin{array}{cc}
4 & 0 \\
12 & 0
\end{array}\right]
$$

## Commutative Property of Matrix Addition

If A and B are two matrices of same order, then $\mathrm{A}+\mathrm{B}=\mathrm{B}+\mathrm{A}$, is called commutative property of matrix addition.

## Example: Scalar Addition

If $P=\left[\begin{array}{ll}5 & 3 \\ 2 & 9\end{array}\right]$ and $Q=\left[\begin{array}{ll}7 & 2 \\ 3 & 9\end{array}\right]$, then verify the commutative property of matrix addition.

## Scalar Addition Solution

Commutative property of addition for above matrices is $\mathrm{P}+\mathrm{Q}=\mathrm{Q}+\mathrm{P}$.
L.H.S : $P+Q=\left[\begin{array}{ll}5 & 3 \\ 2 & 9\end{array}\right]+\left[\begin{array}{ll}7 & 2 \\ 3 & 9\end{array}\right]=\left[\begin{array}{ll}5+7 & 3+2 \\ 2+3 & 9+9\end{array}\right]=\left[\begin{array}{cc}12 & 5 \\ 5 & 18\end{array}\right]$
R.H.S: $Q+P=\left[\begin{array}{ll}7 & 2 \\ 3 & 9\end{array}\right]+\left[\begin{array}{ll}5 & 3 \\ 2 & 9\end{array}\right]=\left[\begin{array}{ll}7+5 & 2+3 \\ 3+2 & 9+9\end{array}\right]=\left[\begin{array}{cc}12 & 5 \\ 5 & 18\end{array}\right]$

As, $\mathrm{P}+\mathrm{Q}=\mathrm{Q}+\mathrm{P}$, therefore commutative property of matrix addition is verified.

## Check Point: Addition

Can you verify the commutative property of matrix addition for:

$$
\mathrm{A}=[x] \text { and } \mathrm{B}=\left[\begin{array}{ll}
x & y
\end{array}\right] ?
$$

## Associative Property of Matrix Addition

If $\mathrm{A}, \mathrm{B}$ and C are three matrices of same order, then $(\mathrm{A}+\mathrm{B})+\mathrm{C}=\mathrm{A}+(\mathrm{B}+\mathrm{C})$, is called associative property of matrix addition.

Example: If $\mathrm{R}=\left[\begin{array}{ll}9 & 7 \\ 5 & 3 \\ 8 & 6\end{array}\right], \mathrm{S}=\left[\begin{array}{cc}10 & 12 \\ 13 & 7 \\ 5 & 2\end{array}\right]$ and $\mathrm{T}=\left[\begin{array}{cc}1 & 5 \\ 6 & 7 \\ 5 & -4\end{array}\right]$, then verify associative property of matrix addition.
Solution: Associative property of addition for matrices is $(\mathrm{R}+\mathrm{S})+\mathrm{T}=\mathrm{R}+(\mathrm{S}+\mathrm{T})$.

$$
\begin{aligned}
\text { L.H.S: }(R+S)+T & =\left(\left[\begin{array}{ll}
9 & 7 \\
5 & 3 \\
8 & 6
\end{array}\right]+\left[\begin{array}{cc}
10 & 12 \\
13 & 7 \\
5 & 2
\end{array}\right]\right)+\left[\begin{array}{cc}
1 & 5 \\
6 & 7 \\
5 & -4
\end{array}\right]=\left[\begin{array}{cc}
9+10 & 7+12 \\
5+13 & 3+7 \\
8+5 & 6+2
\end{array}\right]+\left[\begin{array}{cc}
1 & 5 \\
6 & 7 \\
5 & -4
\end{array}\right] \\
& =\left[\begin{array}{cc}
19 & 19 \\
18 & 10 \\
13 & 8
\end{array}\right]+\left[\begin{array}{cc}
1 & 5 \\
6 & 7 \\
5 & -4
\end{array}\right]=\left[\begin{array}{cc}
19+1 & 19+5 \\
18+6 & 10+7 \\
13+5 & 8+(-4)
\end{array}\right]=\left[\begin{array}{cc}
20 & 24 \\
24 & 17 \\
18 & 4
\end{array}\right] \\
\text { R.H.S: R + }(S+T) & =\left[\begin{array}{ll}
9 & 7 \\
5 & 3 \\
8 & 6
\end{array}\right]+\left(\left[\begin{array}{cc}
10 & 12 \\
13 & 7 \\
5 & 2
\end{array}\right]+\left[\begin{array}{cc}
1 & 5 \\
6 & 7 \\
5 & -4
\end{array}\right]\right) \\
& =\left[\begin{array}{ll}
9 & 7 \\
5 & 3 \\
8 & 6
\end{array}\right]+\left(\left[\begin{array}{cc}
10+1 & 12+5 \\
13+6 & 7+7 \\
5+5 & 2+(-4)
\end{array}\right]\right) \\
& =\left[\begin{array}{ll}
9 & 7 \\
5 & 3 \\
8 & 6
\end{array}\right]+\left[\begin{array}{cc}
11 & 17 \\
19 & 14 \\
10 & -2
\end{array}\right]=\left[\begin{array}{cc}
9+11 & 7+17 \\
5+19 & 3+14 \\
8+10 & 6-2
\end{array}\right]=\left[\begin{array}{cc}
20 & 24 \\
24 & 17 \\
18 & 4
\end{array}\right] .
\end{aligned}
$$

As, L.H.S = R.H.S, therefore associative property of matrix addition is verified.

## Additive Identity in Matrices

Additive identity is such a matrix which causes no change in any matrix A while 'adding to' or 'subtracting from' it. Any matrix and its additive identity matrix have the same order.

If $\mathrm{A}=\left[\begin{array}{l}3 \\ 7 \\ 2\end{array}\right]$, then $\mathrm{O}=\left[\begin{array}{l}0 \\ 0 \\ 0\end{array}\right]$ is the additive identity of A .
It is observed that: $\mathrm{A}+\mathrm{O}=\mathrm{O}+\mathrm{A}=\mathrm{A}$
If $B=[\sqrt{7}]$, then the associated additive identity matrix will be $\mathrm{O}_{1}=[0]$.

## Check Point: Multiplication

Taking matrices A and B of same order, verify that:
(i) $\mathrm{k}(\mathrm{A}+\mathrm{B})=\mathrm{kA}+\mathrm{kB}$
(ii) $(\mathrm{h}+\mathrm{k}) \mathrm{A}=\mathrm{hA}+\mathrm{kA}$
(iii) $(\mathrm{hk}) \mathrm{B}=\mathrm{h}(\mathrm{kB})$
where $h$ and $k$ are constants.

## Additive Inverse of a Matrix

Additive inverse of a matrix ' $A$ ' is such a matrix which when added to $A$, gives additive identity matrix of the same order.
Example (a): If $X=\left[\begin{array}{cc}5 & 0 \\ -9 & 4\end{array}\right]$ then find ' $-X$ '.
(b) Find $T$ from $5 \times\left[\begin{array}{ll}3 & 2 \\ 1 & 0\end{array}\right]-2 . T=\left[\begin{array}{ll}5 & 4 \\ 3 & 2\end{array}\right]$

Solution (a): If $\mathrm{X}=\left[\begin{array}{cc}5 & 0 \\ -9 & 4\end{array}\right]$ then $-\mathrm{X}=\left[\begin{array}{cc}-5 & 0 \\ 9 & -4\end{array}\right]$
(b) $5 \times\left[\begin{array}{ll}3 & 2 \\ 1 & 0\end{array}\right]-2 \mathrm{~T}=\left[\begin{array}{ll}5 & 4 \\ 3 & 2\end{array}\right]$

## Key Fact: Additive Inverse

- Matrices A and B are called additive inverses (negative) of each other if $\mathrm{A}+\mathrm{B}=\mathrm{O}$.
- Additive inverse of a matrix has the same order as that of the matrix.

$$
\Rightarrow\left[\begin{array}{ll}
5 \times 3 & 5 \times 2 \\
5 \times 1 & 5 \times 0
\end{array}\right]-2 \mathrm{~T}=\left[\begin{array}{ll}
5 & 4 \\
3 & 2
\end{array}\right]
$$

$$
\begin{aligned}
& \Rightarrow\left[\begin{array}{cc}
15 & 10 \\
5 & 0
\end{array}\right]-2 \mathrm{~T}=\left[\begin{array}{ll}
5 & 4 \\
3 & 2
\end{array}\right] \Rightarrow-2 \mathrm{~T}=\left[\begin{array}{ll}
5 & 4 \\
3 & 2
\end{array}\right]-\left[\begin{array}{cc}
15 & 10 \\
5 & 0
\end{array}\right] \\
& \Rightarrow-2 \mathrm{~T}=\left[\begin{array}{cc}
5-15 & 4-10 \\
3-5 & 2-0
\end{array}\right]=\left[\begin{array}{cc}
-10 & -6 \\
-2 & 2
\end{array}\right] \\
& \Rightarrow \mathrm{T}=\frac{-1}{2}\left[\begin{array}{cc}
-10 & -6 \\
-2 & 2
\end{array}\right]=\left[\begin{array}{cc}
\frac{-10}{-2} & \frac{-6}{-2} \\
\frac{-2}{-2} & \frac{2}{-2}
\end{array}\right]=\left[\begin{array}{cc}
5 & 3 \\
1 & -1
\end{array}\right]
\end{aligned}
$$

## Multiplication of Matrices

Two matrices A and B are conformable for product AB , if: number of columns in $\mathrm{A}=$ number of rows in B

## Example: Matrix Product

If $A=\left[\begin{array}{rr}5 & 3 \\ 1 & -2\end{array}\right]$ and $B=\left[\begin{array}{l}6 \\ 4\end{array}\right]$, then find $A B$ and $B A$, if possible.

## Matrix Product Solution

Finding AB
As number of columns in $\mathrm{A}=2=$ number of rows in B . So, product AB is possible.
$\mathrm{AB}=\left[\begin{array}{cc}5 & 3 \\ 1 & -2\end{array}\right]\left[\begin{array}{l}6 \\ 4\end{array}\right]=\left[\begin{array}{l}5 \times 6+3 \times 4 \\ 1 \times 6+(-2) \times 4\end{array}\right]=\left[\begin{array}{c}30+12 \\ 6-8\end{array}\right]=\left[\begin{array}{c}42 \\ -2\end{array}\right]$.
Here

Finding the sum of products of corresponding elements of $R_{1}$ of $A$ and $C_{1}$ of $B$.

Finding the sum of products of corresponding elements of $R_{2}$ of $A$ and $C_{1}$ of $B$.
Finding BA
Since number of columns of $\mathrm{B}=1$, but number of rows in $\mathrm{A}=2$.
So, product BA is not possible.

## Key Fact: Matrix Multiplication

- In multiplication, the first matrix contributes its number of rows and the second matrix contributes its number of columns, in the resultant matrix. i.e. If order of matrix $A$ is m-by-n and order of matrix B is n-by-p, then order of AB is m-by-p.
- If A and B are two matrices which are conformable for product AB then B and A are not necessarily confirmable for product BA .


## Example: Matrix Multiplication

Check whether the following pairs of matrices are conformable for multiplication or not? Mention order of product if possible.
(i) $\quad \mathrm{A}=\left[\begin{array}{l}5 \\ 3\end{array}\right]$ and $\mathrm{B}=\left[\begin{array}{l}9 \\ 3\end{array}\right]$
(ii) $\mathrm{E}=\left[\begin{array}{l}6 \\ 3\end{array}\right]^{t}$ and $\mathrm{F}=\left[\begin{array}{l}6 \\ 3\end{array}\right]$

## Matrix Multiplication Solution

(i) $\mathrm{A}=\left[\begin{array}{l}5 \\ 3\end{array}\right]$ and $\mathrm{B}=\left[\begin{array}{l}9 \\ 3\end{array}\right]$

Here, number of columns in $\mathrm{B} \neq$ number of rows in A , so product AB is not possible.
(ii) $\mathrm{E}=\left[\begin{array}{l}6 \\ 3\end{array}\right]^{t}=\left[\begin{array}{ll}6 & 3\end{array}\right]$ and $\mathrm{F}=\left[\begin{array}{l}6 \\ 3\end{array}\right]$

Here, number of columns of $\mathrm{E}=$ number of rows of F . So, product EF is possible.
Order of $E$ is 1-by-2 and order of $F$ is 2-by-1, so order of $E F$ is 1-by-1.
Example: If $\mathrm{A}=\left[\begin{array}{ll}5 & 3 \\ 2 & 6\end{array}\right]$ and $\mathrm{B}=\left[\begin{array}{ll}7 & 2 \\ 4 & 9\end{array}\right]$ then find AB and BA . Also check whether $\mathrm{AB}=\mathrm{BA}$ or not. What is concluded from the result?
Solution: $\mathrm{AB}=\left[\begin{array}{ll}5 & 3 \\ 2 & 6\end{array}\right] \times\left[\begin{array}{ll}7 & 2 \\ 4 & 9\end{array}\right]$

$$
\begin{aligned}
& =\left[\begin{array}{ll}
(5 \times 7)+(3 \times 4) & (5 \times 2)+(3 \times 9) \\
(2 \times 7)+(6 \times 4) & (2 \times 2)+(6 \times 9)
\end{array}\right] \\
& =\left[\begin{array}{ll}
35+12 & 10+27 \\
14+24 & 4+54
\end{array}\right]=\left[\begin{array}{ll}
47 & 37 \\
38 & 58
\end{array}\right] \\
\mathrm{BA} & =\left[\begin{array}{ll}
7 & 2 \\
4 & 9
\end{array}\right] \times\left[\begin{array}{ll}
5 & 3 \\
2 & 6
\end{array}\right] \\
& =\left[\begin{array}{ll}
7 \times 5+2 \times 2 & 7 \times 3+2 \times 6 \\
4 \times 5+9 \times 2 & 4 \times 3+9 \times 6
\end{array}\right] \\
& =\left[\begin{array}{ll}
35+4 & 21+12 \\
20+18 & 12+54
\end{array}\right]=\left[\begin{array}{ll}
39 & 33 \\
38 & 66
\end{array}\right]
\end{aligned}
$$

## Key Fact: Noncommutativity

If $A$ and $B$ are diagonal matrices, then $C=A B$ is diagonal.

We see that $\mathrm{AB} \neq \mathrm{BA}$.
From this result it is concluded that:

## Commutative property does not hold in matrix multiplication, in general.

## Associative Property of Matrix Multiplication

Associative property of multiplication holds in matrices. If $\mathrm{A}, \mathrm{B}$, and C are matrices and products AB and BC are possible, then:

$$
(\mathrm{AB}) \mathrm{C}=\mathrm{A}(\mathrm{BC})
$$

Example: Verify Associative property of matrix multiplication for:

$$
X=\left[\begin{array}{ll}
5 & 3 \\
2 & 6
\end{array}\right], \quad Y=\left[\begin{array}{cc}
1 & -7 \\
5 & 4
\end{array}\right], \quad Z=\left[\begin{array}{l}
6 \\
4
\end{array}\right]
$$

Solution: Associative property of matrix multiplication is: $(\mathrm{XY}) \mathrm{Z}=\mathrm{X}(\mathrm{YZ})$
L.H.S: $(X Y) Z=\left(\left[\begin{array}{ll}5 & 3 \\ 2 & 6\end{array}\right] \times\left[\begin{array}{cc}1 & -7 \\ 5 & 4\end{array}\right]\right) \times\left[\begin{array}{l}6 \\ 4\end{array}\right]=\left[\begin{array}{ll}5 \times 1+3 \times 5 & 5 \times(-7)+3 \times 4 \\ 2 \times 1+6 \times 5 & 2 \times(-7)+6 \times 4\end{array}\right]\left[\begin{array}{l}6 \\ 4\end{array}\right]$

$$
=\left[\begin{array}{cc}
20 & -23 \\
32 & 10
\end{array}\right]\left[\begin{array}{l}
6 \\
4
\end{array}\right]=\left[\begin{array}{l}
20 \times 6-23 \times 4 \\
32 \times 6+10 \times 4
\end{array}\right]=\left[\begin{array}{l}
120-92 \\
192+40
\end{array}\right]=\left[\begin{array}{c}
28 \\
232
\end{array}\right]
$$

R.H.S: $\mathrm{X}(\mathrm{YZ})=\left[\begin{array}{ll}5 & 3 \\ 2 & 6\end{array}\right] \times\left(\left[\begin{array}{cc}1 & -7 \\ 5 & 4\end{array}\right] \times\left[\begin{array}{l}6 \\ 4\end{array}\right]\right)=\left[\begin{array}{ll}5 & 3 \\ 2 & 6\end{array}\right]\left[\begin{array}{l}1 \times 6+(-7) \times 4 \\ 5 \times 6+4 \times 4\end{array}\right]$

$$
=\left[\begin{array}{ll}
5 & 3 \\
2 & 6
\end{array}\right] \times\left[\begin{array}{c}
6-28 \\
30+16
\end{array}\right]=\left[\begin{array}{ll}
5 & 3 \\
2 & 6
\end{array}\right] \times\left[\begin{array}{c}
-22 \\
46
\end{array}\right]=\left[\begin{array}{l}
5 \times(-22)+3 \times 46 \\
2 \times(-22)+6 \times 46
\end{array}\right]=\left[\begin{array}{c}
28 \\
232
\end{array}\right]
$$

As L.H.S = R.H.S, so associative property of matrix multiplication is verified.

## Distributive Property of Multiplication over Addition / Subtraction

- $\mathrm{A}(\mathrm{B}+\mathrm{C})=\mathrm{AB}+\mathrm{AC}$ (left distributive property of multiplication over addition)
- $\mathrm{A}(\mathrm{B}-\mathrm{C})=\mathrm{AB}-\mathrm{AC}$ (left distributive property of multiplication over subtraction)

Example (a): Verify $\mathrm{A}(\mathrm{B}+\mathrm{C})=\mathrm{AB}+\mathrm{AC}$

$$
A=\left[\begin{array}{ll}
5 & 2
\end{array}\right], B=\left[\begin{array}{l}
6 \\
4
\end{array}\right] \text { and } C=\left[\begin{array}{l}
1 \\
2
\end{array}\right] \text {. }
$$

(b): Verify $A(B-C)=A B-A C$ if $A=\left[\begin{array}{l}4 \\ 8\end{array}\right], B=[5], C=[7]$.

## Matrix Distributivity Solution

(a) L.H.S: $A(B+C)=\left[\begin{array}{ll}5 & 2\end{array}\right]\left(\left[\begin{array}{l}6 \\ 4\end{array}\right]+\left[\begin{array}{l}1 \\ 2\end{array}\right]\right)=\left[\begin{array}{ll}5 & 2\end{array}\right]\left[\begin{array}{l}6+1 \\ 4+2\end{array}\right]=\left[\begin{array}{ll}5 & 2\end{array}\right]\left[\begin{array}{l}7 \\ 6\end{array}\right]$

$$
=[5 \times 7+2 \times 6]=[35+12]=[47]
$$

R.H.S: $\mathrm{AB}+\mathrm{AC}=\left[\begin{array}{ll}5 & 2\end{array}\right]\left[\begin{array}{l}6 \\ 4\end{array}\right]+\left[\begin{array}{ll}5 & 2\end{array}\right]\left[\begin{array}{l}1 \\ 2\end{array}\right]=[5 \times 6+2 \times 4]+[5 \times 1+2 \times 2]$

$$
=[30+8]+[5+4]=[38+9]=[47]
$$

Comparing both the results, it is concluded that L.H.S $=$ R.H.S
∴ Left distributive property of multiplication over addition is verified.
(b) L.H.S: $\mathrm{A}(\mathrm{B}-\mathrm{C})=\left[\begin{array}{l}4 \\ 8\end{array}\right]([5]-[7])=\left[\begin{array}{l}4 \\ 8\end{array}\right][5-7]=\left[\begin{array}{l}4 \\ 8\end{array}\right][-2]$

$$
=\left[\begin{array}{l}
4 \times(-2) \\
8 \times(-2)
\end{array}\right]=\left[\begin{array}{c}
-8 \\
-16
\end{array}\right]
$$

R.H.S: $\mathrm{AB}-\mathrm{AC}=\left[\begin{array}{l}4 \\ 8\end{array}\right][5]-\left[\begin{array}{l}4 \\ 8\end{array}\right][7]=\left[\begin{array}{l}4 \times 5 \\ 8 \times 5\end{array}\right]-\left[\begin{array}{l}4 \times 7 \\ 8 \times 7\end{array}\right]$

$$
=\left[\begin{array}{l}
20 \\
40
\end{array}\right]-\left[\begin{array}{l}
28 \\
56
\end{array}\right]=\left[\begin{array}{c}
-8 \\
-16
\end{array}\right]
$$

From both the results, it is concluded that L.H.S = R.H.S
∴ Left distributive property of multiplication over subtraction is verified.

## Key Fact: Matrix Distributivity

$(\mathrm{A}+\mathrm{B}) \mathrm{C}=\mathrm{AC}+\mathrm{BC}$ (Right distributive property of multiplication over addition)
$(\mathrm{A}-\mathrm{B}) \mathrm{C}=\mathrm{AC}-\mathrm{BC}$ (Right distributive property of multiplication over subtraction)

## Multiplicative Identity in Matrices

Multiplicative identity is such a matrix which causes no change in any matrix A when multiplied with A.

## Key Fact: Multiplicative Identity

- Multiplicative identity matrices of orders $1,2,3, \ldots n$ are represented by $\mathrm{I}_{1}, \mathrm{I}_{2}, \mathrm{I}_{3}, \ldots \mathrm{I}_{n}$. or simply by I.
- If I is multiplicative identity matrix of square matrix ' $S$ ', then IS $=S I=S$.
- $\left[\begin{array}{ll}1 & 1 \\ 1 & 1\end{array}\right],\left[\begin{array}{l}1 \\ 1\end{array}\right],\left[\begin{array}{ll}1 & 1\end{array}\right]$ etc. are not multiplicative identities.
- Since multiplicative identity matrix can never be a rectangular matrix, so multiplicative identity matrices are only possible for square matrices.
- Commutative property of matrix multiplication can hold in particular cases:
(i) $\quad \mathrm{A} \times \mathrm{I}=\mathrm{I} \times \mathrm{A}=\mathrm{A}$ (if A and I are conformable for either multiplication.)
(ii) $\mathrm{B} \times \mathrm{O}=\mathrm{O} \times \mathrm{B}=\mathrm{O}$ (if O and B are conformable for either multiplication.)


---

<!-- note kx7a59zyaac95v8cnn1yw7ye658bvcqv | topic ms743cdde84s5b749rae60dht58bt1ey | status published -->
# 3.3 Multiplicative Inverse of a Matrix


## Exercise 3.2

1. Find $x, y, z$, from the followings, if possible. Mention the reason if not possible.
(a) $\left[\begin{array}{ll}x & 9\end{array}\right]=\left[\begin{array}{ll}2 & y\end{array}\right]$
(b) $\left[\begin{array}{ll}6 & 3 \\ 4 & x\end{array}\right]=\left[\begin{array}{ll}7 & 3 \\ 4 & 0\end{array}\right]$
(c) $\left[\begin{array}{l}5 x \\ 2 y\end{array}\right]=\left[\begin{array}{ll}-10 & 20\end{array}\right]$
(d) $-\left[\begin{array}{ll}2 x & 3 y \\ 4 z & 10\end{array}\right]=\left[\begin{array}{cc}8 & 6 \\ 32 & -10\end{array}\right]$
(e) $\left[\begin{array}{cc}x & -2 y \\ 6 & x+y\end{array}\right]=\left[\begin{array}{cc}3 & -6 \\ 6 & z\end{array}\right]$
(f) $\left[\begin{array}{l}5 \\ 6 \\ 7\end{array}\right]=\left[\begin{array}{ll}5 & 0 \\ x & 0 \\ 7 & 0\end{array}\right]$
(g) $\left[\begin{array}{l}x+y \\ x-y\end{array}\right]=\left[\begin{array}{c}11 \\ 1\end{array}\right]$
(h) $\left[\begin{array}{cc}5 & 10 \\ 15 & x\end{array}\right]+\left[\begin{array}{cc}5 & y \\ 15 & 5\end{array}\right]=\left[\begin{array}{cc}z & 15 \\ 30 & 7\end{array}\right]$
(i) $5\left[\begin{array}{c}x \\ 3 y\end{array}\right]-\left[\begin{array}{l}36 \\ 26\end{array}\right]=2\left[\begin{array}{c}-2 x \\ y\end{array}\right]$
(j) $\left[\begin{array}{ccc}x & y & z \\ -2 & -4 & 5\end{array}\right]+2 \times\left[\begin{array}{lll}5 & 3 & 2 \\ 1 & 6 & 3\end{array}\right]=\left[\begin{array}{ccc}0 & 0 & 0 \\ 0 & 8 & 11\end{array}\right]$
2. Find the additive inverses of the following.

$$
R=\left[\begin{array}{ccc}
5 & 0 & 3 \\
7 & -9 & -1 \\
-8 & 5 & 6
\end{array}\right], S=\left[\begin{array}{cc}
-5 & 2 \\
3 & -6 \\
-9 & 4
\end{array}\right], T=\left[\begin{array}{lll}
5 & -6 & 1
\end{array}\right]
$$

3. If $A=\left[\begin{array}{cc}5 & 3 \\ -2 & 6\end{array}\right], B=\left[\begin{array}{cc}10 & 8 \\ -8 & 6\end{array}\right], C=\left[\begin{array}{cc}15 & 6 \\ 0 & -12\end{array}\right]$, then find
(i) $2 \mathrm{~A}+\frac{1}{2} B-\frac{1}{3} C$
(ii) $\mathrm{A}-\frac{1}{2} B$
4. If $A=\left[\begin{array}{cc}1 & 2 \\ 3 & -3\end{array}\right], B=\left[\begin{array}{cc}1 & -2 \\ 3 & 3\end{array}\right], C=\left[\begin{array}{ll}2 & 0 \\ 6 & 0\end{array}\right], D=\left[\begin{array}{l}2 \\ 6\end{array}\right], E=\left[\begin{array}{ll}2 & 2 \\ 6 & 6\end{array}\right]$ Then check whether: (i) $\mathrm{A}+\mathrm{B}=\mathrm{C}$ (ii) $\mathrm{C}+\mathrm{D}=\mathrm{E} \quad$ (iii) $\mathrm{D}+\mathrm{D}=\mathrm{E}$ (iv) $\mathrm{E}-\mathrm{D}=\mathrm{C}$
5. Taking matrices A and B from Q .3, verify commutative property of matrix addition.
6. Taking matrices $\mathrm{A}, \mathrm{B}$ and C from Q . 3, verify associative property of matrix addition.
7. Taking matrices $A$ and $B$ from $Q .4$, verify that $A^{t}+B^{t}=(A+B)^{t}$.
8. Find the matrix ' $Z$ ' from these equations.
(i) $4\left[\begin{array}{c}5 \\ 10\end{array}\right]-5 Z=\sqrt{5}\left[\begin{array}{c}\sqrt{45} \\ \sqrt{5}\end{array}\right]$
(ii) $Z+\left[\begin{array}{c}5 \\ -7\end{array}\right]=3 Z-\left[\begin{array}{l}5 \\ 3\end{array}\right]$.
9. (a) Mention the order of the indicated products where possible.
(i) $\left[\begin{array}{ll}1 & 0 \\ 0 & 1\end{array}\right] \times\left[\begin{array}{ll}5 & 3\end{array}\right]$
(ii) $\left[\begin{array}{ll}5 & 3\end{array}\right] \times\left[\begin{array}{ll}1 & 0 \\ 1 & 0\end{array}\right]$
(iii) $\left[\begin{array}{ll}1 & 1 \\ 0 & 0\end{array}\right] \times\left[\begin{array}{l}5 \\ 3\end{array}\right]$
(iv) $\left[\begin{array}{l}5 \\ 3\end{array}\right] \times\left[\begin{array}{ll}0 & 0 \\ 1 & 0\end{array}\right]$
(v) $[5] \times\left[\begin{array}{ll}1 & 0 \\ 1 & 0\end{array}\right]$
(vi) $\left[\begin{array}{cc}1 & -2 \\ 3 & 4\end{array}\right] \times[5]$
(vii) $\left[\begin{array}{l}1 \\ 3\end{array}\right] \times[5]$
(viii) $[5] \times\left[\begin{array}{l}1 \\ 3\end{array}\right]$
(ix) $[5] \times[9,3]$
(x) $[9-3] \times[5]$
(xi) $[5] \times[10]$
(xii) $\left[\begin{array}{ll}5 & 10\end{array}\right] \times\left[\begin{array}{c}-2 \\ 3\end{array}\right]$
(xiii) $\left[\begin{array}{l}2 \\ 3\end{array}\right] \times\left[\begin{array}{ll}5 & 10\end{array}\right]$
(xiv) $\left[\begin{array}{ll}5 & 2 \\ 3 & 4\end{array}\right] \times\left[\begin{array}{ll}0 & 1 \\ 1 & 0\end{array}\right]$
(xv) $\left[\begin{array}{ll}5 & 3 \\ 2 & 6\end{array}\right] \times\left[\begin{array}{ll}5 & -2\end{array}\right]^{t}$
(b) Perform the indicated products in part (a) where possible.
10. If $\mathrm{A}=\left[\begin{array}{ll}1 & 0 \\ 2 & 3\end{array}\right], \mathrm{B}=\left[\begin{array}{cc}2 & 1 \\ 0 & -3\end{array}\right]$ and $\mathrm{C}=\left[\begin{array}{cc}3 & 0 \\ -2 & 1\end{array}\right]$ then
(i) Find AB and BA , check whether $\mathrm{AB}=\mathrm{BA}$ or not?
(ii) Find AC and CA , check whether $\mathrm{AC}=\mathrm{CA}$ or not?
(iii) Verify $\mathrm{A}(\mathrm{B}+\mathrm{C})=\mathrm{AB}+\mathrm{AC}$
(iv) Verify (A-B) $\mathrm{C}=\mathrm{AC}-\mathrm{BC}$
(v) Verify the associative property of matrix multiplication.
(vi) Find $\mathrm{A}^{2}, \mathrm{~B}^{2}, \mathrm{~A}+\mathrm{B}, \mathrm{A}-\mathrm{B},(\mathrm{A}+\mathrm{B})(\mathrm{A}-\mathrm{B}), \mathrm{A}^{2}-\mathrm{B}^{2}$.
(vii) Check, whether $(A+B) \times(A-B)=A^{2}-B^{2}$ or not?
(viii) Check whether $(A-B) \times(A+B)=A^{2}-B^{2}$ or not?
(ix) Check whether $(\mathrm{A}+\mathrm{B}) \times(\mathrm{A}-\mathrm{B})=(\mathrm{A}-\mathrm{B}) \times(\mathrm{A}+\mathrm{B})$ or not?.
(x) Verify that $(A B)^{t}=B^{t} A^{t}$ and $\left(A^{t}\right)^{t}=A$

## Multiplicative Inverse of a Matrix

Before we discuss inverse of a matrix, we need to examine the determinant of a matrix.

## Determinant of a Matrix

When a matrix has $m$ rows and $n$ columns, it is called an " $m$-by-n" matrix and is also called dimensions of a matrix. If a matrix has the same number of rows and columns, it is called a square matrix. With every square matrix is associated a number called its determinant, defined as follows for 2-by-2 matrices:
The determinant of its matrix $\left[\begin{array}{ll}a & c \\ b & d\end{array}\right]$ is denoted $\left|\begin{array}{ll}a & c \\ b & d\end{array}\right|$ and is defined as follows: $\left|\begin{array}{ll}a & c \\ b & d\end{array}\right|=a d-b c$.

## Example: Determinant

Find $|A|$, when $A=\left[\begin{array}{ll}5 & 6 \\ 2 & 3\end{array}\right]$.
$\operatorname{Det} A=|A|=\left|\begin{array}{ll}5 & 6 \\ 2 & 3\end{array}\right|$

$$
\begin{aligned}
& =(5 \times 3)-(6 \times 2) \\
& =15-12=3
\end{aligned}
$$

## History:

The theory of determinants is attributed to a German, Gotttfried Wilhelm Leibiz. His work expanded upon the earlier work of Japanese mathematician Seki Kowa.

## Key Fact: Determinant

- Every square matrix has a determinant either zero or nonzero.
- Determinants can be represented by $\mathbf{D}_{1}, \mathbf{D}_{2}, \mathbf{D}_{3}, \ldots$
- The determinant of a matrix is not a matrix rather it is a number.
- While writing determinant of a matrix, the elements of the matrix should bewritten inside the vertical bars instead of brackets used for matrices.

Example: Evaluate the determinants

$$
\begin{array}{r}
D_{1}=\left|\begin{array}{cc}
-4 & 8 \\
1 & -2
\end{array}\right|=(-4 \times-2)-(8 \times 1)=8-8=0 \\
D_{2}=\left|\begin{array}{cc}
\sqrt{5} & \sqrt{4} \\
\sqrt{1} & -\sqrt{5}
\end{array}\right|=(\sqrt{5} \times-\sqrt{5})-(\sqrt{1} \times \sqrt{4})=-(\sqrt{5})^{2}-\sqrt{4}=-5-2=-7
\end{array}
$$

## Singular and Non-singular Matrices


## Example: Singular Matrix

From the followings, check for the singular and non-singular matrices.
$A=\left[\begin{array}{cc}5 & 10 \\ 3 & 6\end{array}\right], B=\left[\begin{array}{cc}5 & 5 \\ 3 & \sqrt{5}\end{array}\right]$
Solution: $|A|=\left|\begin{array}{cc}5 & 10 \\ 3 & 6\end{array}\right|=5 \times 6-3 \times 10=30-30=0$
As $|A|=0$, therefore $A$ is a singular matrix.

$$
|B|=\left|\begin{array}{cc}
7 & 5 \\
3 & \sqrt{5}
\end{array}\right|=7 \sqrt{5}-15 \neq 0 .
$$


Can you find determinant of a rectangular matrix?

As $|B| \neq 0$, therefore $B$ is non-singular matrix.

## Adjoint of a Matrix

Adjoint of a square matrix A (of order 2) is a square matrix obtained by:
(i) interchanging the positions of primary diagonal elements of A .
(ii) changing the signs of secondary diagonal elements of $A$.

Adjoint of matrix $A$ is represented by $\operatorname{adj} A$.
If $\mathrm{A}=\left[\begin{array}{ll}5 & -3 \\ 4 & -2\end{array}\right] \begin{aligned} & \text { Interchange the position } \\ & \text { of primary diagonal } \\ & \text { elements }\end{aligned} \quad\left[\begin{array}{rr}-2 & -3 \\ 4 & 5\end{array}\right] \begin{aligned} & \text { Change the signs of } \\ & \text { secondary diagonal } \\ & \text { elements }\end{aligned} \quad\left[\begin{array}{ll}-2 & 3 \\ -4 & 5\end{array}\right]=\operatorname{adjA}$

## Finding Multiplicative Inverse of a Matrix

Any matrix $\mathrm{A}=\left[\begin{array}{ll}a & b \\ c & d\end{array}\right]$, will have an inverse $\mathrm{A}^{-1}$ if and only $\left|\begin{array}{ll}a & c \\ b & d\end{array}\right| \neq 0$ mean A is non singular.
Then $\mathrm{A}^{-1}=\frac{1}{a d-b c}\left[\begin{array}{cc}d & -b \\ -c & a\end{array}\right]$. We can also write: $\mathrm{A}^{-1}=\frac{1}{a d-b c}$ Adjoint of A .
Example: If $A=\left[\begin{array}{ll}5 & 4 \\ 2 & 6\end{array}\right]$, find $A^{-1}$.
Solution: $\mathrm{A}=\left[\begin{array}{ll}5 & 4 \\ 2 & 6\end{array}\right]$, Compute the value of the determinant A .

$$
|A|=\left|\begin{array}{cc}
5 & 4 \\
2 & 6
\end{array}\right|=5 \times 6-4 \times 2=30-8=22
$$

Since the determinant does not equal 0 , therefore $A^{-1}$ exists.

$$
\mathrm{A}^{-1}=\frac{1}{22}\left[\begin{array}{rr}
6 & -4 \\
-2 & 5
\end{array}\right] \text {, use formula: } \mathrm{A}^{-1}=\frac{1}{a d-b c} \text { Adjoint of } \mathrm{A} \text {. }
$$

This can be written as: $A^{-1}=\left[\begin{array}{cc}\frac{6}{22} & \frac{-4}{22} \\ \frac{-2}{22} & \frac{5}{22}\end{array}\right]=\left[\begin{array}{cc}\frac{3}{11} & \frac{-2}{11} \\ \frac{-1}{11} & \frac{5}{22}\end{array}\right]$

## Key Fact: Adjoint

- Inverse of a square matrix, if exists, is unique and $\left(\mathrm{A}^{-1}\right)^{-1}=\mathrm{A}$.
- A matrix A is invertible if its inverse exists.
- $\mathrm{A}^{-1} \mathrm{~A}=\mathrm{I}, \mathrm{I}$ is identity matrix.

Example: If $\mathrm{B}=\left[\begin{array}{ll}5 & 2 \\ 6 & 3\end{array}\right]$, find $\mathrm{B}^{-1}$ also verify that $\mathrm{BB}^{-1}=\mathrm{B}^{-1} \mathrm{~B}=\mathrm{I}$.
Solution: If $\mathrm{B}=\left[\begin{array}{ll}5 & 2 \\ 6 & 3\end{array}\right]$, then $|\mathrm{B}|=5 \times 3-2 \times 6=15-12=3 \neq 0, \mathrm{~B}^{-1}$ exists.
Adjoint of $B=\left[\begin{array}{cr}3 & -2 \\ -6 & 5\end{array}\right]$, apply formula: $\quad B^{-1}=\frac{1}{|B|}$ Adjoint of $B$
$\mathrm{B}^{-1}=\frac{1}{3}\left[\begin{array}{cc}3 & -2 \\ -6 & 5\end{array}\right]=\left[\begin{array}{cc}\frac{3}{3} & \frac{-2}{3} \\ \frac{-6}{3} & \frac{5}{3}\end{array}\right]=\left[\begin{array}{cc}1 & \frac{-2}{3} \\ -2 & \frac{5}{3}\end{array}\right]$

If A and B are square matrices, then $|A B|=|A| \times|B|$.

Check: $\mathrm{B}^{-1} \mathrm{~B}=\frac{1}{3}\left[\begin{array}{cr}3 & -2 \\ -6 & 5\end{array}\right]\left[\begin{array}{cc}5 & 2 \\ 6 & 3\end{array}\right]=\frac{1}{3}\left[\begin{array}{cc}15-12 & 6-6 \\ -30+30 & -12+15\end{array}\right]=\frac{1}{3}\left[\begin{array}{ll}3 & 0 \\ 0 & 3\end{array}\right]=\left[\begin{array}{ll}1 & 0 \\ 0 & 1\end{array}\right]=\mathrm{I}$
Similarly $=\mathrm{BB}^{-1}=\frac{1}{3}\left[\begin{array}{cc}5 & 2 \\ 6 & 3\end{array}\right]\left[\begin{array}{cc}3 & -2 \\ -6 & 5\end{array}\right]=\frac{1}{3}\left[\begin{array}{cc}15-12 & 6-6 \\ -30+30 & -12+15\end{array}\right]=\frac{1}{3}\left[\begin{array}{ll}3 & 0 \\ 0 & 3\end{array}\right]=\left[\begin{array}{ll}1 & 0 \\ 0 & 1\end{array}\right]=\mathrm{I}$

## Check Points: Inverse

Verify: $(A B)^{-1}=B^{-1} A^{-1}$, by taking $A$ and $B$ non singular matrix.

## Solution of Simultaneous Linear Equations

A large-scale use of matrices in almost every field is in the form of solution of simultaneous linear equations, While studying Economics, Statistics, Medical Sciences, Engineering etc, one has to find the solution of linear equations in two or more variables. However, our study at this level is confined to the solution of simultaneous linear equations only in two variables.

## Conversion of Matrix Equation into System of Linear Equations

A matrix equation $\left[\begin{array}{ll}5 & 2 \\ 3 & 10\end{array}\right] \times\left[\begin{array}{l}x \\ y\end{array}\right]=\left[\begin{array}{l}9 \\ 23\end{array}\right]$, can be written as $\left[\begin{array}{l}5 x+2 y \\ 3 x+10 y\end{array}\right]=\left[\begin{array}{l}9 \\ 23\end{array}\right]$.
Now comparing the corresponding elements of equal matrices

$$
5 x+2 y=9,3 x+10 y=23
$$

Which is a system of two linear equations in two variables $x$ and $y$.

## Conversion of System of Linear Equations into Matrix Equations

By the converse process mentioned above, the system of linear equations can be rewritten in matrix equation:
i.e. $5 x+2 y=9,3 x+10 y=23$
writing in matric form, we have

Is $\mathrm{AB}=\mathrm{I}=\mathrm{BA}$ always true?

$$
\left[\begin{array}{ll}
5 x & +2 y \\
3 x & +10 y
\end{array}\right]=\left[\begin{array}{l}
9 \\
23
\end{array}\right]
$$

or $\left[\begin{array}{cc}5 & 2 \\ 3 & 10\end{array}\right]\left[\begin{array}{l}x \\ y\end{array}\right]=\left[\begin{array}{l}9 \\ 23\end{array}\right]$ or $\mathrm{AX}=\mathrm{B}$ is the required matrix equation.

## Solution of System of two Linear Equations in Two Variables

We discuss here two methods for finding solution of liner equations in two variables.
(a) Matrix inversion method
(b) Cramer's rule

## (a) Matrix Inversion Method

Let us find the solution of:

$$
5 x+4 y=14 ; \quad 3 x+7 y=13
$$

This system of equations can be rewritten in matrix equation as follows:

$$
\left[\begin{array}{ll}
5 & 4  \tag{i}\\
3 & 7
\end{array}\right]\left[\begin{array}{l}
x \\
y
\end{array}\right]=\left[\begin{array}{l}
14 \\
13
\end{array}\right]
$$

where $\mathrm{A}=\left[\begin{array}{ll}5 & 4 \\ 3 & 7\end{array}\right]$ is a matrix of coefficients, $\mathrm{X}=\left[\begin{array}{l}x \\ y\end{array}\right]$ is a matrix of variables and $B=\left[\begin{array}{l}14 \\ 13\end{array}\right]$ is a matrix of constants.
Now equation (i) can also be written as:

$$
\begin{array}{ll}
A X=B & \\
\\mathrm{A}^{-1} A X=\\mathrm{A}^{-1} B & \text { (Pre multiplying with } \\mathrm{A}^{-1} \text { if it exists.) } \\
I X=\\mathrm{A}^{-1} B & \left(\\mathrm{A}^{-1} A=I\right) \\
X=\\mathrm{A}^{-1} B & \ldots \ldots \ldots(\text { ii }) \tag{ii}
\end{array}
$$

This equation indicates that the values of the variables in the matrix $X$ are equal to the corresponding elements in the matrix $\mathrm{A}^{-1} \mathrm{~B}$. To find $\mathrm{A}^{-1} \mathrm{~B}$, we need $\mathrm{A}^{-1}$.
As, $|\mathrm{A}|=\left|\begin{array}{ll}5 & 4 \\ 3 & 7\end{array}\right|=35-12=23 \neq 0$, so inverse is possible.
Also, adj $A=\left[\begin{array}{rc}7 & -4 \\ -3 & 5\end{array}\right]$
Now, $A^{-1}=\frac{1}{|A|} \times \operatorname{adj} A=\frac{1}{23} \times\left[\begin{array}{cc}7 & -4 \\ -3 & 5\end{array}\right]$
Substituting the values in equation (ii), we get:

$$
\begin{aligned}
& {\left[\begin{array}{l}
x \\
y
\end{array}\right]=\frac{1}{23} \times\left[\begin{array}{cc}
7 & -4 \\
-3 & 5
\end{array}\right]\left[\begin{array}{l}
14 \\
13
\end{array}\right]=\frac{1}{23} \times\left[\begin{array}{c}
98-52 \\
-42+65
\end{array}\right]=\left[\begin{array}{c}
\frac{1}{23} \times 46 \\
\frac{1}{23} \times 23
\end{array}\right]} \\
& {\left[\begin{array}{l}
x \\
y
\end{array}\right]=\left[\begin{array}{l}
2 \\
1
\end{array}\right]}
\end{aligned}
$$

Comparing the elements of both matrices, we see that $x=2$ and $y=1$ solution set $=\{(2,1)\}$

## Example: Simultaneous Equations

Solve system of linear equation $3 y=24-9 x, 2 y+6 x=10$ (if possible) by matrix inversion method.
Solution: Writing the given system of linear equations in arranged form. i.e.
$9 x+3 y=24,6 x+2 y=10$.
Which can be written in matrix equation as:

$$
\left[\begin{array}{ll}
9 & 3 \\
6 & 2
\end{array}\right]\left[\begin{array}{l}
x \\
y
\end{array}\right]=\left[\begin{array}{l}
24 \\
10
\end{array}\right]
$$

or

$$
A X=B \Rightarrow X=\\mathrm{A}^{-1} B
$$

Now

$$
|A|=\left|\begin{array}{ll}
9 & 3 \\
6 & 2
\end{array}\right|=9 \times 2-6 \times 3=18-18=0
$$

As the matrix A is a singular, so its multiplicative inverse does not exist and solution of given system of equation is not possible.

## (b) Cramer's Rule

This method is named after Gabriel Cramer (1704-1752). This rule uses determinants to find the solution of system of linear equations.
Consider a system of linear equations as $x+2 y=6,4 x-2 y=4$.
Writing it in matrix equation, we get:

$$
\left[\begin{array}{rr}
1 & 2 \\
4 & -2
\end{array}\right] \quad\left[\begin{array}{l}
x \\
y
\end{array}\right]=\left[\begin{array}{l}
6 \\
4
\end{array}\right] \quad \text { or } \quad \mathrm{A} \mathrm{X}=\mathrm{B}
$$

The special formulae used in this method are: $x=\frac{D_{x}}{D}$ and $y=\frac{D_{y}}{D}$
Where, $D=|A|=\left|\begin{array}{rr}1 & 2 \\ 4 & -2\end{array}\right|=-2-8=-10 \neq 0$. (non singular)

Now

Using

$$
\begin{aligned}
& x=\frac{D_{x}}{D} \\
& x=\frac{-20}{-10} \\
& x=2
\end{aligned}
$$

and

$$
\begin{aligned}
& y=\frac{D_{y}}{D} \\
& y=\frac{-20}{-10} \\
& y=2 \text { and solution set }=\{(2,2)\}
\end{aligned}
$$


---

<!-- note kx7bgpdjf066djretdsayh6bas8bvpfm | topic ms782rc9fpd8qhqwgay3kmhbt18bt52p | status published -->
# 3.4 Applications of Matrices


## Exercise 3.3

1. (a) Mention singular and nonsingular matrices from the followings.

$$
\begin{array}{ll}
A=\left[\begin{array}{ll}
6 & 4 \\
2 & 3
\end{array}\right] & B=\left[\begin{array}{ll}
-5 & 7 \\
-9 & 4
\end{array}\right], \quad C=\left[\begin{array}{ll}
9 & 18 \\
2 & 4
\end{array}\right] \\
D=\left[\begin{array}{cc}
a & b+1 / a \\
a & b
\end{array}\right] & E=\left[\begin{array}{ll}
a & b+c \\
a & d+c
\end{array}\right] \quad(\text { where } a \neq 0 \text { but } b=d)
\end{array}
$$

(b) If $|P|=9$ and $P=\left[\begin{array}{ll}3 & 3 \\ 1 & 4 \mathrm{k}\end{array}\right]$, then find k .
(c) If $|\mathrm{T}|=3$ and $\operatorname{adj} \mathrm{T}=\left[\begin{array}{ll}5 & x \\ 3 & 2\end{array}\right]$,then find $x$.
2. (a) Find the multiplicative inverses of these matrices if possible.

$$
R=\left[\begin{array}{cc}
4 & -1 \\
-6 & 2
\end{array}\right], \quad \mathrm{S}=\left[\begin{array}{l}
5 \\
3
\end{array}\right], \quad T=\left[\begin{array}{ll}
25 & 2 \\
50 & 4
\end{array}\right], \quad U=\left[\begin{array}{ll}
x & x+1 \\
y & y+1
\end{array}\right], \text { if } x=y .
$$

(b) If $R=\left[\begin{array}{ll}4 & 1 \\ -6 & 2\end{array}\right]$ then verify that $R R^{-1}=R^{-1} R=I$.
3. If $Y=\left[\begin{array}{ll}1 & 2 \\ 2 & 3\end{array}\right]$ and $Z=\left[\begin{array}{ll}2 & 3 \\ 1 & 2\end{array}\right]$, then verify that $(Y Z)^{-1}=Z^{-1} Y^{-1}$.
4. What is relation among $|\mathrm{A}|,\left|\mathrm{A}^{-1}\right|$ and $|\operatorname{adj} \mathrm{A}|$ if $A=\left[\begin{array}{ll}5 & 7 \\ 2 & 3\end{array}\right]$ ?
5. Write these matrix equations into system of linear equations if possible.
(i) $\left[\begin{array}{ll}4 & 2 \\ 3 & 1\end{array}\right]\left[\begin{array}{l}x \\ y\end{array}\right]=\left[\begin{array}{l}6 \\ 4\end{array}\right]$
(ii) $\left[\begin{array}{ll}5 & 0 \\ 0 & 4\end{array}\right]\left[\begin{array}{l}x \\ y\end{array}\right]=\left[\begin{array}{l}10 \\ 20\end{array}\right]$
(iii) $\left[\begin{array}{l}0 \\ 3\end{array}\right] \times\left[\begin{array}{l}x \\ y\end{array}\right]=\left[\begin{array}{l}12 \\ 24\end{array}\right]$
(iv) $\left[\begin{array}{ll}x & y\end{array}\right]\left[\begin{array}{l}5 \\ 3\end{array}\right]=[2]$
6. (a) Write the systems of linear equations in matrix form.
(i) $x+y=2$
(ii) $2 x+y=90$
(iii) $y=3$
$x-y=4$
$5 y-x=10$
$x=4$
(iv) $\frac{5}{2} x-3 y=1, \quad \frac{1}{2} y-4 x=2$
(b) If matrix of coefficients of $5 x-4 y=30,10 x-\mathrm{k} y=60$ is singular then find k .
7. (a) Use Matrix Inversion Method to solve the following systems of linear equations if possible.
(i) $4 x+3 y=-6$
(ii) $-x+2 y=1.5$
$x+2 y=1$
$5 x+4 y=3$
(iii) $2 y=10-16 x$
(iv) $9-x=7 y$
$24 x=15-3 y$
$14 y+2 x=18$
(b) Use Cramer's rule to solve following systems of linear equations if possible.
(i) $2 x+3 y=5$
(ii) $x=\frac{2}{3}-2 y$
$5 x+10 y=10$
$4 y=3-3 x$
(iii) $\frac{6}{10} x+\frac{8}{10} y=20$
(iv) $16 x-10+2 y=0$
$\frac{8}{10} x-\frac{6}{10} y=10$
$15-3 y-24 x=0$

## Applications of Matrices

The most difficult part of solving a problem in algebra is almost always translating the problem situation to mathematical language. Once an equation is translated, the rest is usually straightforward. In this section, we study systems of equations and how to solve them using matrices. We can use matrices to help us solve problems that involve systems of equations. Using matrices often simplifies the process of solving these systems.

## Example: Cost System

Anas bought 3 cream puffs and 5 pringle packs paying Rs. 650 . Abid bought 4 cream puffs and 2 pringle packs paying Rs. 400 . Find how much each item costs? (Hint: Either matrix inversion method or Cramer's rule can be used).

## Cost System Solution

Let $x$ be the cost of a cream puff and $y$ be the cost of a pringle pack, then Anas's shopping is represented by $3 x+5 y=650$ and Abid's shopping is represented by equation $4 x+2 y=400$
Writing in matrix equation

$$
\left[\begin{array}{ll}
3 & 5 \\
4 & 2
\end{array}\right]\left[\begin{array}{l}
x \\
y
\end{array}\right]=\left[\begin{array}{l}
650 \\
400
\end{array}\right] \quad \text { or } \quad \mathrm{AX}=\mathrm{B}
$$

Now by using Cramer's rule

$$
\begin{aligned}
D=|A|=\left|\begin{array}{ll}
3 & 5 \\
4 & 2
\end{array}\right|=6-20=-14 \\
D_{x}=\left|\begin{array}{ll}
650 & 5 \\
400 & 2
\end{array}\right|=1300-2000=-700, \quad D_{y}=\left|\begin{array}{ll}
3 & 650 \\
4 & 400
\end{array}\right|=1200-2600=-1400
\end{aligned}
$$

Now, $x=\frac{D_{x}}{D} \quad$ and $\quad y=\frac{D_{y}}{D}$

$$
x=\frac{-700}{-14} \text { and } y=\frac{-1400}{-14} \Rightarrow x=50 \text { and } y=100
$$

So, each cream puff costs Rs. 50 and each pringle pack costs Rs. 100.

## Example: Matrix Application

Naveed is a chemist who is preparing an acid solution to be used as a cleaner for machine parts.
The machine shops need several batches of 200 ml of solution at a $48 \%$ concentration. He only has $60 \%$ and $40 \%$ concentration solutions. The two solutions can be combined to make the $48 \%$ solution. How much of each solution should Naveed use to make 200 ml of solution?

## Matrix Application Solution

Let $x$ represent the amount of $60 \%$ solution and let $y$ represent the amount of $40 \%$ solution.

$$
x+y=200 \quad \text { The total of two amount must be } 200 \mathrm{ml} .
$$

Now write an equation that represents the proportions of each solution needed.

$$
\begin{aligned}
60 \%+40 \% & =48 \% & & \\
60 \%(x)+40 \%(y) & =48 \%(x+y) & & \text { Each part contribute to the total } \\
0.60(x)+0.40(y) & =0.48(x+y) & & \text { Multiply } 100 \text { to remove the decimals } \\
12 x-8 y & =0 & & \text { Write the equation in standard form }
\end{aligned}
$$

Step 1: Write a system of equations. Then write the system as a matrix equation.

$$
\begin{aligned}
& x+y=200,12 x-8 y=0 \text { in matrix form : } A \mathrm{X}=\mathrm{B}, \text { and } \mathrm{X} \doteq \mathrm{~A}^{-1} \mathrm{~B} \\
& {\left[\begin{array}{rr}
1 & 1 \\
12 & -8
\end{array}\right]\left[\begin{array}{l}
x \\
y
\end{array}\right]=\left[\begin{array}{c}
800 \\
0
\end{array}\right], \text { where } \mathrm{A}=\left[\begin{array}{rr}
1 & 1 \\
12 & -8
\end{array}\right], \mathrm{X}=\left[\begin{array}{l}
x \\
y
\end{array}\right] \text { and } \mathrm{B}=\left[\begin{array}{c}
200 \\
0
\end{array}\right]}
\end{aligned}
$$

Step 2: To solve the matrix equation, first find the inverse of the matrix $A$.

$$
\begin{aligned}
& \\mathrm{A}^{-1}=\frac{1}{-20}\left[\begin{array}{lr}
-8 & -1 \\
-12 & 1
\end{array}\right], \text { where }|A|=-8-12=-20 \text { and Adjoint of } A=\left[\begin{array}{lr}
-8 & -1 \\
-12 & 1
\end{array}\right] \\
& X=\frac{1}{-20}\left[\begin{array}{lr}
-8 & -1 \\
-12 & 1
\end{array}\right]\left[\begin{array}{l}
200 \\
0
\end{array}\right], \text { where } X=\\mathrm{A}^{-1} B \\
& {\left[\begin{array}{l}
x \\
y
\end{array}\right]=\frac{1}{-20}\left[\begin{array}{l}
-1600 \\
-2400
\end{array}\right]=\left[\begin{array}{c}
80 \\
120
\end{array}\right]}
\end{aligned}
$$

We have $x=80$ and $y=120$.
This means that 80 ml of the $60 \%$ solution is added to 120 ml of the $40 \%$ solution to make 200 ml of the 48\% solution.
