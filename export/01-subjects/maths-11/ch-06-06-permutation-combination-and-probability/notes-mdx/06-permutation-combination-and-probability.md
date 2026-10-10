<!-- note kx7ecqadmqtp7w749q74vcwtt985q00q | topic ms76a0bqf3kkrccjwtw2rdvdy185pe0s | status published -->
# 6.1 Factorial Notation and Properties

# 6.1 Factorial Notation and Properties

## Definition of Factorial

For any positive integer $n$, the **factorial** of $n$ (written $n!$) is defined as:

$$n! = n \times (n-1) \times (n-2) \times \cdots \times 3 \times 2 \times 1$$

By convention, $0! = 1$.

**Examples:**
- $5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$
- $3! = 6$, $\quad 1! = 1$, $\quad 0! = 1$

---

## Key Properties of Factorials

### 1. Recursive Property
$$n! = n \times (n-1)!$$

This is the most important property for simplifying factorial expressions.

**Example:** Simplify $\dfrac{n!}{(n-2)!}$

$$\frac{n!}{(n-2)!} = \frac{n \cdot (n-1) \cdot (n-2)!}{(n-2)!} = n(n-1)$$

### 2. Writing Products as Factorial Fractions

A product of consecutive integers can be written as a ratio of factorials:

$$n(n-1)(n-2)\cdots(n-r+1) = \frac{n!}{(n-r)!}$$

**Example:** Write $10 \times 9 \times 8$ in factorial form.

$$10 \times 9 \times 8 = \frac{10!}{7!}$$

because dividing $10!$ by $7!$ cancels all factors from $7$ down to $1$.

### 3. Factorial Equations (Quadratic Form)

When a factorial equation involves $(n+k)!$ and $n!$, expand the larger factorial:

$$\frac{(n+2)!}{n!} = (n+2)(n+1)$$

So an equation like $(n+2)! = 42 \cdot n!$ becomes:
$$(n+2)(n+1) = 42 \implies n^2 + 3n + 2 = 42 \implies n^2 + 3n - 40 = 0$$

Factoring: $(n+5)(n-8) = 0$, so $n = 8$ (taking the positive integer solution).

### 4. Adding Factorial Fractions

To add fractions with factorial denominators, use the **largest factorial** as the LCD.

**Example:** $\dfrac{1}{n!} + \dfrac{1}{(n+1)!}$

$$= \frac{n+1}{(n+1)!} + \frac{1}{(n+1)!} = \frac{n+2}{(n+1)!}$$

---

## Product of Odd Integers

The product of the first $n$ odd integers can be expressed using factorials:

$$1 \cdot 3 \cdot 5 \cdots (2n-1) = \frac{(2n)!}{2^n \cdot n!}$$

**Derivation:** Multiply and divide by the product of even integers $2 \cdot 4 \cdot 6 \cdots (2n)$:

$$1 \cdot 3 \cdot 5 \cdots (2n-1) = \frac{(2n)!}{2 \cdot 4 \cdot 6 \cdots (2n)}$$

Since $2 \cdot 4 \cdot 6 \cdots (2n) = 2^n \cdot n!$, we get:

$$1 \cdot 3 \cdot 5 \cdots (2n-1) = \frac{(2n)!}{2^n \cdot n!}$$

**Verification for $n = 3$:** $1 \cdot 3 \cdot 5 = 15$ and $\dfrac{6!}{2^3 \cdot 3!} = \dfrac{720}{8 \cdot 6} = \dfrac{720}{48} = 15$ ✓

---

## Connection to Permutations

The factorial ratio $\dfrac{n!}{(n-r)!}$ appears directly in the **permutation formula**:

$$P(n, r) = \frac{n!}{(n-r)!} = n(n-1)(n-2)\cdots(n-r+1)$$

This counts the number of ways to arrange $r$ objects chosen from $n$ distinct objects.

**Example:** The number of ways to arrange 3 books chosen from 7 distinct books is:
$$P(7, 3) = \frac{7!}{4!} = 7 \times 6 \times 5 = 210$$

---




---

<!-- note kx75yp1c9wweqefc8v0jg1kg2n85pk4x | topic ms74bwk7vfca700b3yen1ht7b585q4e5 | status published -->
# 6.2 Permutations of Distinct Objects

# 6.2 Permutations of Distinct Objects

A **permutation** is an ordered arrangement of objects. In a linear permutation, objects are arranged in a straight line and the order matters.

---

## Key Formulas

### 1. Permutations of $n$ Distinct Objects Taken $r$ at a Time

$$^nP_r = \frac{n!}{(n-r)!}$$

**Special cases:**
- $^nP_0 = 1$ (one way to choose nothing)
- $^nP_n = n!$ (arrange all $n$ objects)
- $^nP_n = ^nP_{n-1}$ since both equal $n!$

### 2. Permutations with Repetition Allowed

If each of $r$ positions can be filled by any of $n$ objects (repetition allowed):

$$\text{Total arrangements} = n^r$$

### 3. Permutations of Objects That Are Not All Distinct

If $n$ objects contain $p$ of one kind, $q$ of another, and $r$ of a third:

$$\text{Distinct arrangements} = \frac{n!}{p!\, q!\, r!}$$

**Example:** Arrangements of letters in STATESMAN (9 letters, S×2, T×2, A×2):
$$\frac{9!}{2!\,2!\,2!} = 45360$$

---

## Circular Permutations

When $n$ distinct objects are arranged in a **circle**, rotations of the same arrangement are considered identical. Fix one object's position and arrange the remaining $(n-1)$:

$$\text{Circular permutations} = (n-1)!$$

**Example:** 5 people seated at a round table: $(5-1)! = 4! = 24$ ways.

---

## Arrangements with Restrictions

### Fill the Most Restricted Position First

When a condition limits one position (e.g., a number must be even), **fill that position first**, then fill the remaining positions.

**Example:** 3-digit even numbers from $\{1,2,3,4,5\}$ without repetition:
1. Units place (must be even): 2 choices (2 or 4)
2. Remaining 2 places from 4 digits: $^4P_2 = 12$
3. Total $= 2 \times 12 = 24$

### Items That Must Stay Together (Bundling Method)

Treat the group of items that must stay together as a **single entity**. Then:
1. Arrange the $(n - k + 1)$ entities (where $k$ = group size)
2. Multiply by $k!$ for internal arrangements of the group

**Example:** 8 books on a shelf, 3 specific books always together:
- Entities to arrange: $5 + 1 = 6$, giving $6!$ ways
- Internal arrangements of the 3 books: $3!$
- Total $= 6! \times 3! = 720 \times 6 = 4320$

### Items That Must Never Be Adjacent (Gap Method)

To ensure certain items are **never next to each other**:
1. Arrange the unrestricted items first ($m$ items → $m!$ ways for linear, $(m-1)!$ for circular)
2. Count the gaps created (for $m$ items in a line: $m+1$ gaps; in a circle: $m$ gaps)
3. Place the restricted items in the available gaps

**Example:** 4 men and 3 women in a line, no two women adjacent:
4. Arrange 4 men: $4! = 24$ ways → creates 5 gaps
5. Choose 3 of 5 gaps for women: $^5P_3 = 60$
6. Total $= 24 \times 60 = 1440$

---

## Useful Identity

$$^nP_n = ^nP_{n-1} = n!$$

Proof: $^nP_{n-1} = \frac{n!}{(n-(n-1))!} = \frac{n!}{1!} = n!$

---

## Real-World Applications (SLO M-11-C-04)

Permutations appear in many real-world contexts:

| Application | How Permutations Apply |
|---|---|
| **Cryptography** | Number of possible ordered keys/passwords from a character set |
| **DNA sequences** | Ordered arrangements of nucleotide bases (A, T, G, C) |
| **Lottery odds** | Counting ordered draws to estimate winning probability |
| **Playlists** | Number of ways to order a set of songs for an occasion |

**Example (Password):** A 4-character password using digits 0–9 with no repetition:
$$^{10}P_4 = \frac{10!}{6!} = 10 \times 9 \times 8 \times 7 = 5040 \text{ passwords}$$

---

## MCQ Practice

---

<!-- note kx76zvhwfkxnwmvmqyrc4s2zn585ptnc | topic ms7besad4j9dch3c8zrbcrdv4s85pwr7 | status published -->
# 6.3 Combinations and Their Properties

# 6.3 Combinations and Their Properties

## What is a Combination?

A **combination** is a selection of items from a set where **order does not matter**. The number of ways to choose $r$ items from $n$ distinct items is:

$${}^{n}C_{r} = \binom{n}{r} = \frac{n!}{r!(n-r)!}$$

where $0 \leq r \leq n$.

---

## Key Properties of Combinations

### 1. Symmetry Property
$${}^{n}C_{r} = {}^{n}C_{n-r}$$

This means choosing $r$ items is equivalent to leaving out $n - r$ items.

**Consequence:** If ${}^{n}C_{p} = {}^{n}C_{q}$, then either $p = q$ or $p + q = n$.

**Example:** If ${}^{n}C_{15} = {}^{n}C_{7}$, then $n = 15 + 7 = 22$.

---

### 2. Pascal's Identity
$${}^{n}C_{r} + {}^{n}C_{r-1} = {}^{n+1}C_{r}$$

This identity shows how combinations in one row of Pascal's Triangle are built from the row above.

**Example:** ${}^{5}C_{2} + {}^{5}C_{3} = {}^{6}C_{3} = 20$.

---

### 3. Special Values
$${}^{n}C_{0} = {}^{n}C_{n} = 1 \qquad {}^{n}C_{1} = n$$

---

## Conditional Selection Problems

### Fixed Item Included
If one specific item **must** be included in every selection of $r$ items from $n$:
- Fix that item (1 way)
- Choose the remaining $r - 1$ items from the other $n - 1$ items

$$\text{Ways} = {}^{n-1}C_{r-1}$$

---

### Complementary Counting
For conditions like **"at least one"**, it is often easier to use:

$$\text{Favourable} = \text{Total} - \text{Complement}$$

**Example:** Committee of 5 from 6 men and 4 women with **at least one man**:
$$= {}^{10}C_{5} - {}^{4}C_{5} = 252 - 0 = 252$$

(Since ${}^{4}C_{5} = 0$, all committees automatically include at least one man here. For cases where the complement is non-zero, subtract the all-women count.)

---

## Real-World Application: Diagonals of a Polygon

In an $n$-sided polygon, any two vertices can be connected by a line segment. The total number of such segments is ${}^{n}C_{2}$. Subtracting the $n$ sides gives the number of **diagonals**:

$$\text{Diagonals} = {}^{n}C_{2} - n = \frac{n(n-1)}{2} - n = \frac{n(n-3)}{2}$$

**Example:** A hexagon ($n = 6$) has $\frac{6 \times 3}{2} = 9$ diagonals.

---

## Real-World Applications

| Context | How Combinations Apply |
|---|---|
| **Lottery** | Choosing 6 numbers from 49: ${}^{49}C_{6}$ possible tickets |
| **DNA sequences** | Selecting bases for a codon from available nucleotides |
| **Cryptography** | Choosing a subset of keys or characters for a cipher |
| **Playlist selection** | Choosing 5 songs from a library of 20: ${}^{20}C_{5}$ playlists |

These applications all share the property that **order does not matter** — only which items are selected.