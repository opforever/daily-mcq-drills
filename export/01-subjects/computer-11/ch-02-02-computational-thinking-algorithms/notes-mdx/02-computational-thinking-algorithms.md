<!-- note kx733s3hj1fv8bbcn9ywhnhcks85qt92 | topic ms716bn2bdd1zrge1d73xyw2yd85pke7 | status published -->
# 2.1 Computational Artifacts

## What is a Computational Artifact?

A **computational artifact** is anything created by a human using a computer. It is a product of computational thinking and problem-solving. Computational artifacts can be:

- **Programs / Software**, desktop apps, mobile apps, games
- **Digital Media**, images, audio files, videos, animations
- **Documents & Presentations**, spreadsheets, slide decks, web pages
- **Databases**, structured collections of data
- **Algorithms**, step-by-step procedures encoded in software (e.g., AI models)

> A computational artifact is distinct from the computer hardware itself, it is the *output* of human creativity enabled by computing tools.

---

## Why Create Computational Artifacts?

Creating artifacts allows individuals to:

1. **Solve real-world problems**, e.g., a budgeting app that automates calculations.
2. **Express creativity**, e.g., digital art, music production software.
3. **Communicate ideas**, e.g., a website or social media platform.
4. **Collaborate**, e.g., shared documents, version-controlled codebases.

---

## The Development Process

Creating a quality computational artifact is rarely a one-step process. It follows a structured cycle:

### 1. Analysis
Identify the problem or need. Define requirements: *What should the artifact do? Who will use it?*

### 2. Design
Plan the solution using tools such as:
- **Pseudocode**, plain-language description of the algorithm
- **Flowcharts**, visual representation of logic and flow
- **Wireframes**, layout sketches for user interfaces

### 3. Development (Coding)
Translate the design into a working artifact using a programming language or digital tool.

### 4. Testing
Verify that the artifact works correctly. Types of testing include:
- **Unit testing**, testing individual components
- **Integration testing**, testing how components work together
- **User testing**, real users interact with the artifact

### 5. Iteration
**Iteration** is the process of repeatedly refining and improving the artifact based on testing results and user feedback. Each cycle produces a better version until the artifact meets its goals.

```
Analyse → Design → Develop → Test → Refine → (repeat)
```

---

## Complexity of Artifacts

| Simple Artifacts | Complex Artifacts |
|---|---|
| A text document | A mobile banking application |
| A static web page | A large-scale relational database |
| A basic image | A 3D animated film |
| A short script | An AI recommendation algorithm |

Complex artifacts are typically built by **teams**, use **modular design** (breaking the problem into sub-problems), and go through many iterations.

---

## Computational Thinking Connection

Creating artifacts requires the four pillars of computational thinking:

- **Decomposition**, break the artifact into smaller, manageable parts
- **Pattern Recognition**, identify reusable solutions
- **Abstraction**, focus on essential features, hide unnecessary detail
- **Algorithm Design**, define the step-by-step logic the artifact will follow

---

<!-- note kx78d65f9a8mxzrst3hyhnfg2585p5sh | topic ms75jjwbx749f7dchz89xnhbp585p3gd | status published -->
# 2.2 Common Computing Algorithms

An **algorithm** is a step-by-step procedure for solving a problem. Two fundamental categories of algorithms studied in computing are **searching algorithms** and **sorting algorithms**.

---

## Searching Algorithms

Searching algorithms locate a specific element (the **target**) within a data structure.

### Linear Search

Linear Search (also called Sequential Search) examines each element one by one from the beginning until the target is found or the list ends.

**How it works:**
1. Start at the first element.
2. Compare the current element with the target.
3. If they match, return the position.
4. If not, move to the next element.
5. If the end of the list is reached without a match, report "not found".

**Key properties:**
- Works on **unsorted** and sorted lists.
- Simple to implement.
- Worst-case time: $O(n)$, must check every element.

**Example:** Finding the number 7 in the list `[3, 9, 1, 7, 5]`:
- Check 3 → no
- Check 9 → no
- Check 1 → no
- Check 7 → **found at index 3**

---

### Binary Search

Binary Search uses a **divide-and-conquer** strategy. It repeatedly halves the search interval.

**Prerequisite:** The list **must be sorted**.

**How it works:**
1. Set `low = 0`, `high = n - 1`.
2. Calculate `mid = (low + high) / 2`.
3. If `list[mid] == target` → found.
4. If `target < list[mid]` → search the **lower half**: set `high = mid - 1`.
5. If `target > list[mid]` → search the **upper half**: set `low = mid + 1`.
6. Repeat until found or `low > high` (not found).

**Key properties:**
- Requires a **sorted** list.
- Much faster than Linear Search for large datasets.
- Worst-case time: $O(\log n)$.

**Example:** Finding 7 in the sorted list `[1, 3, 5, 7, 9]`:
- `low=0`, `high=4`, `mid=2` → `list[2]=5` → 7 > 5, so `low=3`
- `low=3`, `high=4`, `mid=3` → `list[3]=7` → **found at index 3**

---

## Sorting Algorithms

Sorting algorithms arrange elements of a list in a specific order (usually ascending or descending).

### Bubble Sort

Bubble Sort repeatedly compares **adjacent** elements and swaps them if they are in the wrong order.

**How it works:**
1. Start at the beginning of the list.
2. Compare element at position $i$ with element at position $i+1$.
3. If they are in the wrong order, swap them.
4. Move to the next pair.
5. After one full pass, the **largest element** is at the end.
6. Repeat for the remaining unsorted portion.

**Key property:** After each pass, the next largest element is placed in its correct final position.

**Example:** Sorting `[5, 3, 8, 1]`:
- Pass 1: `[3, 5, 1, 8]` → 8 is in place
- Pass 2: `[3, 1, 5, 8]` → 5 is in place
- Pass 3: `[1, 3, 5, 8]` → sorted!

---

### Selection Sort

Selection Sort divides the list into a **sorted** and an **unsorted** part. It repeatedly selects the minimum element from the unsorted part and moves it to the end of the sorted part.

**How it works:**
1. Find the minimum element in the unsorted portion.
2. Swap it with the first element of the unsorted portion.
3. The sorted portion grows by one element.
4. Repeat until the entire list is sorted.

**Example:** Sorting `[64, 25, 12, 22]`:
- Pass 1: min=12 → swap with 64 → `[12, 25, 64, 22]`
- Pass 2: min=22 → swap with 25 → `[12, 22, 64, 25]`
- Pass 3: min=25 → swap with 64 → `[12, 22, 25, 64]` → sorted!

---

### Insertion Sort

Insertion Sort builds the sorted array **one element at a time**, similar to how you sort playing cards in your hand.

**How it works:**
1. Start with the second element (the first element is trivially sorted).
2. Pick the current element (the **key**).
3. Compare the key with elements in the sorted portion (to its left).
4. Shift all elements greater than the key one position to the right.
5. Insert the key into its correct position.
6. Repeat for all remaining elements.

**Example:** Sorting `[4, 2, 7, 1]`:
- Step 1: key=2 → shift 4 right → `[2, 4, 7, 1]`
- Step 2: key=7 → 7 > 4, no shift → `[2, 4, 7, 1]`
- Step 3: key=1 → shift 7, 4, 2 right → `[1, 2, 4, 7]` → sorted!

---

## Comparison Summary

| Algorithm | Type | Requires Sorted? | Best For |
|---|---|---|---|
| Linear Search | Searching | No | Small or unsorted lists |
| Binary Search | Searching | **Yes** | Large sorted lists |
| Bubble Sort | Sorting |, | Simple/educational use |
| Selection Sort | Sorting |, | Small lists |
| Insertion Sort | Sorting |, | Nearly sorted lists |