<!-- note kx7bbdwras5347wfyc72g4kzax85pb9e | topic ms77v648zy8zr0ct4xrhfz8vr985qv40 | status published -->
# 2.1 Data Structures

A **data structure** is a specialized format for organizing, processing, retrieving, and storing data in a computer so that it can be used efficiently. Choosing the right data structure is critical for writing efficient algorithms.

---

## Classification of Data Structures

Data structures are broadly classified as follows:

```
Data Structures
├── Primitive
│   └── int, float, char, boolean
└── Non-Primitive
    ├── Linear
    │   ├── Static  → Arrays
    │   └── Dynamic → Linked Lists, Stacks, Queues
    └── Non-Linear
        └── Trees, Graphs
```

### 1. Primitive Data Structures
These are the basic data types built into a programming language. They hold a **single value** and are the building blocks for all other structures.

| Type | Example values |
|------|----------------|
| $int$ | $0, -5, 42$ |
| $float$ | $3.14, -0.5$ |
| $char$ | `'A'`, `'z'` |
| $boolean$ | `True`, `False` |

### 2. Non-Primitive Data Structures
These are derived from primitive types and can store **multiple values** or complex relationships.

#### Linear Data Structures
Elements are arranged in a **sequential** order, each element has a unique predecessor and successor (except the first and last).

| Structure | Type | Description |
|-----------|------|-------------|
| Array | Static | Fixed-size, indexed collection of same-type elements |
| Linked List | Dynamic | Nodes connected by pointers; size changes at run-time |
| Stack | Dynamic | LIFO (Last In, First Out), push/pop operations |
| Queue | Dynamic | FIFO (First In, First Out), enqueue/dequeue operations |

#### Non-Linear Data Structures
Elements are **not** arranged sequentially. One element can connect to multiple others.

| Structure | Description |
|-----------|-------------|
| Tree | Hierarchical structure with a root node and child nodes |
| Graph | Network of nodes (vertices) connected by edges |

---

## Static vs. Dynamic Data Structures

| Feature | Static (e.g., Array) | Dynamic (e.g., Linked List) |
|---------|----------------------|-----------------------------|
| Size | Fixed at **compile-time** | Changes at **run-time** |
| Memory | Stack memory | Heap memory |
| Flexibility | Low | High |
| Access speed | Fast (direct index) | Slower (traversal needed) |

---

## Abstract Data Type (ADT)

An **Abstract Data Type (ADT)** is a mathematical model for a data type defined by its **behavior** (operations) from the user's perspective, independent of any specific implementation.

> An ADT answers **"what"** operations are supported, not **"how"** they are implemented.

**Example, Stack ADT:**
- `push(item)`, add item to top
- `pop()`, remove item from top
- `peek()`, view top item without removing
- `isEmpty()`, check if stack is empty

The Stack ADT can be implemented using an array or a linked list, the ADT definition remains the same.

---

## Data Structures in Python

Python provides built-in data structures that map to the concepts above:

| Python Structure | Category | Key Operations |
|-----------------|----------|----------------|
| `list` | Linear, Dynamic | `append()`, `remove()`, `insert()`, indexing |
| `tuple` | Linear, Static | Immutable sequence, indexing |
| `dict` | Non-linear (hash map) | Key-value pairs, `get()`, `update()` |
| `set` | Non-linear | Unique elements, union, intersection |

### Python List as a Dynamic Array

```python
# Creating and manipulating a list
numbers = [10, 20, 30, 40, 50]

# Access by index
print(numbers[0])   # Output: 10

# Append (dynamic growth)
numbers.append(60)
print(numbers)      # [10, 20, 30, 40, 50, 60]

# Insert at position
numbers.insert(2, 25)
print(numbers)      # [10, 20, 25, 30, 40, 50, 60]

# Remove element
numbers.remove(25)
print(numbers)      # [10, 20, 30, 40, 50, 60]

# Traverse
for num in numbers:
    print(num)
```

### Python List as a Stack (LIFO)

```python
stack = []

# Push
stack.append('A')
stack.append('B')
stack.append('C')
print(stack)        # ['A', 'B', 'C']

# Pop
stack.pop()         # Removes 'C'
print(stack)        # ['A', 'B']
```

### Python List as a Queue (FIFO)

```python
from collections import deque

queue = deque()

# Enqueue
queue.append('First')
queue.append('Second')
queue.append('Third')

# Dequeue
queue.popleft()     # Removes 'First'
print(queue)        # deque(['Second', 'Third'])
```

---

## Why Data Structures Matter

The choice of data structure directly affects:
- **Time complexity**, how fast an algorithm runs
- **Space complexity**, how much memory is used
- **Code clarity**, how readable and maintainable the code is

For example, searching for an element in an unsorted array takes $O(n)$ time, but a Binary Search Tree (BST) can reduce this to $O(\log n)$.

---

---

<!-- note kx7dy52k010a0c6g931480v7d985qr0w | topic ms7czt46baymr97zc9g84pnnvn85q4nb | status published -->
# 2.2 Evaluating Computational Solutions

When a computational solution is developed, it must be evaluated against a set of criteria to ensure it is fit for purpose. The key evaluation metrics are **efficiency**, **clarity**, **correctness**, **scalability**, **robustness**, and the processes of **verification** and **validation**.

---

## 1. Efficiency

Efficiency refers to how well a solution utilises available resources, primarily **CPU time** and **memory (RAM)**, to complete a task.

- **Time Complexity** measures how execution time grows with input size, expressed using Big-O notation (e.g., $O(n)$, $O(n^2)$, $O(\log n)$).
- **Space Complexity** measures how memory usage grows with input size.

| Complexity | Description | Example |
|---|---|---|
| $O(1)$ | Constant, does not grow with input | Array index lookup |
| $O(\log n)$ | Logarithmic, very efficient | Binary search |
| $O(n)$ | Linear, grows proportionally | Linear search |
| $O(n^2)$ | Quadratic, grows rapidly | Bubble sort |

An algorithm with $O(n)$ time complexity is generally more efficient than one with $O(n^2)$.

---

## 2. Clarity

Clarity (also called **readability** or **maintainability**) refers to how easy it is for a programmer to read, understand, and modify the code.

A clear solution:
- Uses meaningful variable and function names
- Includes appropriate comments
- Follows consistent indentation and formatting
- Is logically structured with modular functions

Clarity is critical for long-term maintenance and team collaboration.

---

## 3. Correctness

Correctness means the solution produces the **right output for all valid inputs** and handles edge cases appropriately.

A solution is correct if:
- It satisfies all specified requirements
- It handles boundary conditions (e.g., empty input, maximum values)
- It passes all test cases, including edge cases

Correctness is verified through **testing** and **formal verification**.

---

## 4. Scalability

Scalability is the ability of a solution to handle an **increasing workload** (more users, more data) without a significant drop in performance.

- A web application designed for 100 users should ideally scale to handle 10,000 users.
- Scalable solutions often use efficient data structures and distributed architectures.

---

## 5. Robustness

Robustness is the ability of a system to **cope with errors during execution** and handle **erroneous or unexpected input** gracefully, without crashing.

Examples of robust behaviour:
- Displaying an error message when a user enters a string where a number is expected
- Handling network timeouts without crashing the application
- Recovering from file-not-found errors

---

## 6. Verification vs. Validation

These two processes are often confused but serve distinct purposes:

| | Verification | Validation |
|---|---|---|
| **Question asked** | Are we building the product *right*? | Are we building the *right* product? |
| **Focus** | Meets technical specifications | Meets user/client needs |
| **Method** | Code reviews, walkthroughs, static analysis | User testing, acceptance testing |
| **When** | During development | At the end of development |

> **Example:** A calculator app that correctly implements all specified formulas passes *verification*. If the client actually needed a currency converter, it fails *validation*.

---

## Summary Table

| Metric | Key Question |
|---|---|
| Efficiency | Does it use minimal time and memory? |
| Clarity | Is the code readable and maintainable? |
| Correctness | Does it produce the right output? |
| Scalability | Can it handle growth? |
| Robustness | Does it handle errors gracefully? |
| Verification | Is it built according to specifications? |
| Validation | Does it solve the right problem? |