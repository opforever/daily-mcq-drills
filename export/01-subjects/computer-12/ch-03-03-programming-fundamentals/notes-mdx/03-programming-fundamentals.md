<!-- note kx7f1cs7ca6nfj53f5xa425xp985p7zg | topic ms7fyavmc701jsk0kbsg30xgbd85ppes | status published -->
# 3.1 The Programming Paradigm

A **programming paradigm** is a fundamental style or approach to computer programming. It defines how tasks are structured, how data is managed, and how the computer executes instructions. Different paradigms offer different ways of thinking about and solving problems.

---

## Why Paradigms Matter

Choosing the right paradigm affects:
- **Code readability and maintainability**
- **Ease of debugging and testing**
- **Suitability for the problem domain** (e.g., scientific computing vs. web development)

---

## Major Programming Paradigms

### 1. Imperative Paradigm

The **imperative paradigm** focuses on *how* to achieve a result. Programs consist of explicit step-by-step commands that change the program's **state**.

- The programmer specifies the exact sequence of operations.
- Uses variables, assignments, loops, and conditionals.
- **Examples:** C, Pascal, early BASIC.

> *Think of it as a recipe: do step 1, then step 2, then step 3.*

---

### 2. Declarative Paradigm

The **declarative paradigm** focuses on *what* the result should be, without describing the control flow.

- The programmer states the desired outcome; the system figures out how to achieve it.
- **Examples:** SQL (database queries), HTML (web structure).

| Feature | Imperative | Declarative |
|---|---|---|
| Focus | *How* to do it | *What* to do |
| Control flow | Explicit | Hidden/abstracted |
| Example | C, Python loops | SQL, HTML |

---

### 3. Procedural Paradigm

The **procedural paradigm** is a sub-type of the imperative paradigm. It organises code into reusable **procedures** (also called functions or subroutines).

**Key characteristics:**
- **Top-down approach:** The program is broken into smaller, manageable procedures.
- **Sequence:** Instructions execute in order.
- **Modularity:** Each procedure performs a specific task.
- **Examples:** C, Pascal, FORTRAN.

```c
// Example: Procedural approach in C
void greet() {
    printf("Hello, World!\n");
}
int main() {
    greet();  // calling a procedure
    return 0;
}
```

---

### 4. Object-Oriented Paradigm (OOP)

The **Object-Oriented paradigm** organises programs around **objects**, entities that bundle data (attributes) and behaviour (methods) together.

**Core concepts:**

| Concept | Description |
|---|---|
| **Class** | A blueprint/template for creating objects |
| **Object** | An instance of a class |
| **Encapsulation** | Hiding internal data; exposing only what is needed |
| **Inheritance** | A new class (derived) acquires properties of an existing class (base) |
| **Polymorphism** | The same interface can be used for different underlying data types |
| **Abstraction** | Hiding complex implementation details |

**Examples:** Python, Java, C++.

```python
# Example: OOP in Python
class Animal:
    def __init__(self, name):
        self.name = name  # attribute
    def speak(self):      # method
        pass

class Dog(Animal):        # Inheritance
    def speak(self):
        return "Woof!"

dog = Dog("Rex")
print(dog.speak())  # Output: Woof!
```

---

### 5. Functional Paradigm

The **functional paradigm** treats computation as the evaluation of **mathematical functions**. It emphasises:

- **Pure functions:** Output depends only on input; no side effects.
- **Immutability:** Data is not changed after creation.
- **No shared state:** Functions do not modify external variables.

**Examples:** Haskell, Lisp, Erlang. Python also supports functional features (`map`, `filter`, `lambda`).

```python
# Functional style in Python
numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x**2, numbers))
print(squares)  # Output: [1, 4, 9, 16, 25]
```

---

### 6. Logic Paradigm

The **logic paradigm** expresses programs as a set of **logical rules and facts**. The system uses inference to derive conclusions.

- The programmer defines *what is true*, not *how to compute* it.
- **Example:** Prolog.

```prolog
% Prolog example
parent(tom, bob).
parent(bob, ann).
grandparent(X, Z) :- parent(X, Y), parent(Y, Z).
```

---

## Summary Comparison

| Paradigm | Focus | Key Feature | Example Languages |
|---|---|---|---|
| Imperative | How | State changes | C, Pascal |
| Declarative | What | Abstracted control | SQL, HTML |
| Procedural | How (modular) | Procedures/functions | C, FORTRAN |
| Object-Oriented | Objects | Encapsulation, Inheritance | Python, Java, C++ |
| Functional | Functions | Pure functions, immutability | Haskell, Lisp |
| Logic | Rules/Facts | Inference engine | Prolog |

---

---

<!-- note kx7ewq8kmy9nzx4vgsxyg98t6x85pzf6 | topic ms78p90xtnph5gaqvnrd73hzms85pth1 | status published -->
# 3.2 Programming Constructs in Python

This note covers advanced programming constructs in Python as required by the FBISE Grade 12 curriculum, including data structures (lists), file handling (disk I/O), and an introduction to using databases in Python.

---

## 1. Fundamental Programming Constructs

All Python programs are built from three fundamental constructs:

| Construct | Description | Example Keyword |
|---|---|---|
| **Sequence** | Statements execute top-to-bottom in order | (default) |
| **Selection** | Decisions based on conditions | `if`, `elif`, `else` |
| **Iteration** | Repeating a block of code | `for`, `while` |

### 1.1 Sequence
The default mode, Python executes each line one after another.

```python
name = "Ali"
age = 17
print(name, "is", age, "years old")
```

### 1.2 Selection (if / elif / else)
Python uses **indentation** (4 spaces) to define code blocks, no curly braces needed.

```python
marks = 75

if marks >= 80:
    print("A Grade")
elif marks >= 60:
    print("B Grade")
else:
    print("C Grade")
```

### 1.3 Iteration

**for loop**, collection-controlled; iterates over a sequence:
```python
for i in range(1, 6):   # prints 1 to 5
    print(i)
```

**while loop**, condition-controlled; repeats while a condition is True:
```python
count = 0
while count < 5:
    print(count)
    count += 1
```

**Loop control statements:**
- `break`, exits the loop entirely
- `continue`, skips the current iteration and moves to the next
- `pass`, does nothing (no operation).

---

## 2. Data Structures, Lists

A **list** is a mutable, ordered collection that can store mixed data types.

```python
students = ["Ali", "Sara", "Ahmed"]
scores   = [85, 92, 78]
```

### Common List Operations

| Operation | Syntax | Result |
|---|---|---|
| Access element | `students[0]` | `"Ali"` |
| Slice | `students[1:3]` | `["Sara", "Ahmed"]` |
| Append | `students.append("Zara")` | adds to end |
| Remove | `students.remove("Ali")` | removes first match |
| Length | `len(students)` | `3` |
| Sort | `scores.sort()` | sorts in place |

### Iterating Over a List
```python
for name in students:
    print(name)
```

### List Comprehension (Advanced)
```python
squares = [x**2 for x in range(1, 6)]
# Result: [1, 4, 9, 16, 25]
```

---

## 3. File Handling (Disk I/O)

File handling allows a program to **persist data** to storage (hard disk) so it survives after the program ends.

### File Opening Modes

| Mode | Description |
|---|---|
| `'r'` | Read (default). File must exist. |
| `'w'` | Write. Creates file or **overwrites** existing. |
| `'a'` | Append. Creates file or adds to end. |
| `'x'` | Create. Fails if file already exists. |
| `'rb'` / `'wb'` | Read/Write in **binary** mode. |

### Writing to a File
```python
with open('students.txt', 'w') as f:
    f.write("Ali\n")
    f.write("Sara\n")
```
> The `with` statement automatically closes the file even if an error occurs.

### Reading from a File
```python
# Read entire file
with open('students.txt', 'r') as f:
    content = f.read()
    print(content)

# Read line by line
with open('students.txt', 'r') as f:
    for line in f:
        print(line.strip())
```

### Appending to a File
```python
with open('students.txt', 'a') as f:
    f.write("Ahmed\n")
```

### Worked Example, Save a List to File
```python
scores = [85, 92, 78, 90]

with open('scores.txt', 'w') as f:
    for score in scores:
        f.write(str(score) + '\n')

print("Scores saved successfully.")
```

---

## 4. Databases in Python

Python can interact with databases using the built-in **`sqlite3`** module (no installation needed).

### Basic SQLite Workflow
```python
import sqlite3

# 1. Connect (creates DB file if not exists)
conn = sqlite3.connect('school.db')

# 2. Create a cursor
cursor = conn.cursor()

# 3. Create a table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS students (
        id   INTEGER PRIMARY KEY,
        name TEXT,
        marks INTEGER
    )
''')

# 4. Insert data
cursor.execute("INSERT INTO students VALUES (1, 'Ali', 85)")

# 5. Query data
cursor.execute("SELECT * FROM students")
rows = cursor.fetchall()
for row in rows:
    print(row)

# 6. Commit and close
conn.commit()
conn.close()
```

### Key Database Concepts
- **`connect()`**, opens/creates a database file
- **`cursor()`**, object used to execute SQL commands
- **`execute()`**, runs an SQL statement
- **`fetchall()`**, retrieves all results as a list of tuples
- **`commit()`**, saves changes permanently
- **`close()`**, closes the connection

---

## Summary

| Topic | Key Concept |
|---|---|
| Lists | Mutable ordered sequences; support indexing, slicing, append, remove |
| File Handling | `open()` with modes `'r'`, `'w'`, `'a'`; use `with` block |
| Databases | `sqlite3` module; connect → cursor → execute → commit → close |
| Selection | `if / elif / else` with indentation |
| Iteration | `for` (collection) and `while` (condition) loops |

---

<!-- note kx725qkj8r3ajaa85byvyew7an85pvf7 | topic ms7930sxyhrenfrcrwz0c6d3xs85qfjx | status published -->
# 3.3 Techniques for Testing and Debugging

Testing and debugging are essential phases in the software development lifecycle. **Testing** verifies that a program produces correct results, while **debugging** is the process of finding and fixing errors (bugs) once they are detected.

---

## What is Debugging?

**Debugging** is the systematic process of locating, analyzing, and correcting errors (bugs) in a program so that it functions as intended. Bugs can be:

- **Syntax Errors**, Violations of the language's grammar rules (caught at compile/parse time).
- **Runtime Errors**, Errors that occur during execution (e.g., division by zero, index out of range).
- **Logical Errors**, The program runs without crashing but produces incorrect results.

---

## Manual Testing Techniques

### Dry Running
Dry running involves **manually tracing** the execution of a program using sample data on paper, without using a computer. The programmer follows the logic step by step to detect **logical errors** before running the code.

**Example:** Tracing a loop iteration by iteration, writing down variable values at each step.

### Desk Checking
Desk checking is a **broader, informal review** of the source code, typically done by the programmer or a colleague. It checks for:
- Syntax mistakes
- Obvious logical flaws
- Missing or incorrect conditions

**Key Difference:** Dry running traces execution with data; desk checking is a general code review.

---

## Testing Strategies

### Black Box Testing
In **Black Box Testing**, the tester has **no knowledge** of the internal code structure. Tests are designed based solely on:
- **Inputs** provided to the program
- **Expected outputs** based on requirements

This technique verifies that the software meets its functional specifications.

### White Box Testing
**White Box Testing** (also called *structural testing* or *glass box testing*) requires the tester to have **full knowledge of the source code**. It tests:
- Internal logic and control flow
- All branches and loops
- Specific code paths

---

## Advanced Debugging Tools in Python

### Breakpoints
A **breakpoint** is an intentional stopping point set in the code (using an IDE like PyCharm or VS Code, or Python's built-in `pdb` module). When execution reaches a breakpoint, the program **pauses**, allowing the developer to:
- Inspect current variable values
- Step through code line by line
- Identify exactly where an error occurs

```python
# Using Python's built-in debugger
import pdb

def calculate(a, b):
    pdb.set_trace()  # Breakpoint set here
    result = a / b
    return result

calculate(10, 0)
```

### Watch Window (Watches)
A **Watch** (or Watch Window) is a debugger feature that lets a developer **monitor the value of a specific variable or expression** continuously as the program runs. Unlike a breakpoint that pauses execution, a watch tracks how a variable's value changes over time.

- Available in IDEs such as PyCharm, VS Code, and IDLE
- Useful for detecting when a variable takes an unexpected value

### Unit Tests
A **unit test** is an automated test that verifies a **single, isolated function or method** produces the correct output for given inputs. Python provides the built-in `unittest` module for this purpose.

**Why use unit tests?**
- Catch bugs early, before they affect other parts of the program
- Make it safe to refactor code (tests confirm nothing broke)
- Serve as documentation for expected behavior

**Example using `unittest`:**

```python
import unittest

def add(a, b):
    return a + b

class TestAddFunction(unittest.TestCase):
    def test_positive_numbers(self):
        self.assertEqual(add(3, 4), 7)

    def test_negative_numbers(self):
        self.assertEqual(add(-1, -1), -2)

if __name__ == '__main__':
    unittest.main()
```

In this example:
- `TestAddFunction` is a **test case class** inheriting from `unittest.TestCase`
- Each method starting with `test_` is an individual test
- `assertEqual` checks that the function returns the expected value

---

## Summary Table

| Technique | Type | Requires Code Knowledge? | Uses Computer? |
|---|---|---|---|
| Dry Running | Manual | Yes | No |
| Desk Checking | Manual | Yes | No |
| Black Box Testing | Testing | No | Yes |
| White Box Testing | Testing | Yes | Yes |
| Breakpoints | Debugging Tool | Yes | Yes |
| Watch Window | Debugging Tool | Yes | Yes |
| Unit Tests | Automated Testing | Yes | Yes |