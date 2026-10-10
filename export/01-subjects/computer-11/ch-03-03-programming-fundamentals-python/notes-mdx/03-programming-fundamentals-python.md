<!-- note kx79rby7f8yg2yd0qn4vj6dnw585ptay | topic ms7cm61xb8g3fv1zevtrbvwveh85q205 | status published -->
# 3.1 Computer Program

## What is a Computer Program?

A **computer program** is a set of instructions written in a programming language that directs a computer to perform a specific task or solve a particular problem. When a program is run, the computer follows these instructions step by step to produce the desired output.

**Examples of computer programs:**
- A calculator application that performs arithmetic
- A word processor that formats text
- A game that responds to player input

---

## Program vs. Software

| Term | Definition |
|---|---|
| **Program** | A single set of instructions written to perform a specific task |
| **Software** | A broader term that includes one or more programs, along with documentation and configuration data |

In simple terms, all programs are software, but not all software is a single program. For example, Microsoft Office is *software* that contains multiple *programs* (Word, Excel, PowerPoint).

---

## Role of a Programmer

A **programmer** (also called a developer or coder) is a person who:
- Writes the **source code** of a program using a programming language
- **Tests** the program to find errors
- **Maintains** and updates the program over time

Programmers use languages such as Python, C++, Java, and others to communicate instructions to the computer.

---

## How a Computer Understands a Program

Computers only understand **machine language**, which consists of binary code, sequences of **0s and 1s**. Every instruction a programmer writes in a high-level language (like Python) must eventually be translated into binary for the CPU to execute.

**Levels of programming languages:**
1. **Machine Language**, Binary (0s and 1s); directly understood by the CPU
2. **Assembly Language**, Uses mnemonics (e.g., `MOV`, `ADD`); translated by an assembler
3. **High-Level Language**, Human-readable (e.g., Python, C++); translated by a compiler or interpreter

---

## How the CPU Executes a Program

When a program runs, the CPU follows the **Fetch-Decode-Execute cycle**:

1. **Fetch**, The CPU retrieves the next instruction from memory (RAM)
2. **Decode**, The CPU interprets what the instruction means
3. **Execute**, The CPU carries out the instruction

Programs must be loaded into **RAM (main memory)** before the CPU can execute them. The program stored on disk is copied into RAM at runtime.

---

## Importance of Computer Programming

Computer programming is important because it:
- **Automates** repetitive tasks, saving time and reducing human error
- **Solves complex problems** that would be impractical to solve manually
- **Powers technology**, from smartphones and websites to medical equipment and space exploration
- **Enables creativity**, programmers can build new tools, games, and applications
- **Drives the economy**, software development is one of the fastest-growing industries worldwide

---

## Planning a Program: Pseudocode and Algorithms

Before writing actual code, a good programmer **plans** the solution. This is a key skill in computational thinking.

### Algorithm
An **algorithm** is a step-by-step procedure for solving a problem. It must be:
- **Clear**, each step is unambiguous
- **Finite**, it must end after a certain number of steps
- **Effective**, each step must be achievable

### Pseudocode
**Pseudocode** is an informal, plain-language description of an algorithm. It is not actual code, it has no strict syntax rules, but it describes the logic clearly.

**Example:** Write pseudocode to find the larger of two numbers.

```
START
  INPUT number1
  INPUT number2
  IF number1 > number2 THEN
    PRINT number1, "is larger"
  ELSE
    PRINT number2, "is larger"
  END IF
END
```

### Why Use Pseudocode?
- Helps **plan** the program before coding
- Makes it easier to **spot logical errors** early
- Language-independent, can be converted to any programming language
- Useful for **communicating** ideas to other programmers

### The Program Development Cycle

1. **Define the problem**, Understand what needs to be solved
2. **Plan the solution**, Write pseudocode or draw a flowchart
3. **Write the code**, Translate the plan into a programming language
4. **Test the program**, Run it with different inputs to check correctness
5. **Debug and refine**, Fix errors and improve the program
6. **Document**, Add comments and write user documentation

---

## Summary

- A **computer program** is a set of instructions for the computer to follow.
- **Software** is a broader term that includes programs, documentation, and data.
- A **programmer** writes, tests, and maintains programs.
- Computers understand only **binary (machine language)**; high-level code must be translated.
- The CPU uses the **Fetch-Decode-Execute cycle** to run programs.
- **Pseudocode** and **algorithms** are essential planning tools before writing code.
- Programming is important because it automates tasks, solves problems, and drives technology.

---

<!-- note kx7190mhc5f95kyytsezwdg9fx85qb40 | topic ms7chq383bwqp7x3gpryqq5as185ptqe | status published -->
# 3.2 Python: An Overview

## What is Python?

Python is a **high-level, interpreted, and general-purpose programming language** designed with an emphasis on code readability and simplicity. It was created by **Guido van Rossum** and first released in **1991**.

Python is widely used in:
- Web development
- Data science and machine learning
- Automation and scripting
- Scientific computing
- Education

---

## Key Characteristics of Python

### 1. High-Level Language
Python code is written in a form close to human language (English-like syntax), making it easy to read and write. The interpreter handles the conversion to machine-level instructions.

### 2. Interpreted Language
Python is an **interpreted** language. This means the Python interpreter reads and executes the source code **line-by-line** at runtime, rather than compiling the entire program into machine code before execution.

**Advantage:** Errors are reported immediately at the line where they occur, making debugging easier.

### 3. General-Purpose
Python can be used to build almost any type of application, from simple scripts to complex web applications and AI systems.

### 4. Platform Independent (Portable)
Python programs can run on **any operating system** (Windows, macOS, Linux) as long as the Python interpreter is installed. This makes Python highly portable.

### 5. "Batteries Included"
Python comes with a **large standard library** of pre-built modules and functions that allow programmers to perform many tasks (file handling, math, networking, etc.) without installing external packages.

---

## Python Syntax Rules

### Case Sensitivity
Python is **case-sensitive**. This means uppercase and lowercase letters are treated as different characters.

**Example:**
```python
Variable = 10
variable = 20
print(Variable)  # Output: 10
print(variable)  # Output: 20
```

Here, `Variable` and `variable` are **two different identifiers**.

### Indentation
Unlike many programming languages that use curly braces `{}` to define blocks of code, Python uses **indentation** (spaces or tabs at the beginning of a line).

**Example:**
```python
if 5 > 3:
    print("Five is greater")  # This line is indented, it belongs to the if block
print("This is outside the if block")
```

Incorrect indentation will cause an **IndentationError**.

### Comments
Comments are lines in the code that are **not executed** by the interpreter. They are used to explain the code.

```python
# This is a single-line comment
print("Hello, World!")  # This prints a greeting
```

---

## Why Learn Python?

| Feature | Benefit |
|---|---|
| Simple syntax | Easy to learn for beginners |
| Interpreted | Immediate error feedback |
| Large library | Less code to write |
| Portable | Runs on any OS |
| Community | Huge support and resources |

Python's simplicity and power make it one of the most popular programming languages in the world, used by beginners and professionals alike.

---

<!-- note kx75jjjqma94wc6yvyy7kwhmz185pn3x | topic ms7b9jzdcr8hfjx220knsg9wxx85q1e2 | status published -->
# 3.3 Python IDEs — Integrated Development Environments

An **Integrated Development Environment (IDE)** is a software application that provides a complete set of tools for writing, running, and debugging programs in one place.

## Core Components of an IDE

| Component | Purpose |
|---|---|
| **Source Code Editor** | Write and edit code with syntax highlighting and code completion |
| **Compiler / Interpreter Interface** | Translate and execute the source code |
| **Debugger** | Step through code, set breakpoints, and inspect variables to find bugs |
| **Output / Console Window** | Display program results and error messages |
| **Project Explorer** | Manage files and folders in a project |

### Key IDE Features

- **Syntax Highlighting**, displays keywords, variables, strings, and comments in different colours to improve readability and catch errors quickly.
- **Code Completion (IntelliSense)**, predicts and suggests function names, variables, and code snippets as you type, speeding up development.
- **Error Detection**, underlines or flags syntax errors before the program is even run.

---

## Python IDLE

**IDLE** (Integrated Development and Learning Environment) is the default IDE bundled with every standard Python installation from [python.org](https://www.python.org). It is lightweight and ideal for beginners.

### Two Modes of IDLE

#### 1. Interactive Mode (Python Shell)
- Statements are typed and executed **immediately**, one at a time.
- Useful for quick calculations and testing small snippets.
- Prompt appears as `>>>`.

```python
>>> print("Hello, World!")
Hello, World!
```

#### 2. Script Mode (Editor)
- Open via **File → New File** in IDLE.
- Write a complete, multi-line program and **save it** with a `.py` extension.
- Run the entire script at once using **Run → Run Module** or pressing **F5**.

```python
# hello.py
name = input("Enter your name: ")
print("Hello,", name)
```

---

## Popular Python IDEs

| IDE | Description |
|---|---|
| **IDLE** | Built-in, lightweight, beginner-friendly |
| **PyCharm** | Full-featured professional IDE by JetBrains |
| **Visual Studio Code (VS Code)** | Lightweight, highly extensible with extensions |
| **Spyder** | Scientific/data-science focused IDE |
| **Jupyter Notebook** | Interactive, cell-based environment popular in data science |

---

## Debugger in an IDE

A **debugger** is a tool that helps programmers find and fix errors (bugs) in their code. Key debugger features include:

- **Breakpoints**, pause execution at a specific line so you can inspect the program state.
- **Step Over / Step Into**, execute code one line at a time.
- **Variable Inspection**, view the current value of variables at any point during execution.
- **Call Stack**, see the sequence of function calls that led to the current point.

Using the debugger is a core skill for **CS-11-C-07**, determining ways to debug Python code.

---

---

<!-- note kx7d3jkd2eqgde5qrh30mt6cz185p5x5 | topic ms7fwpt6axy6tayhwryyvcbss985pzqf | status published -->
# 3.4 Turtle Graphics

Turtle Graphics is a beginner-friendly module in Python used to draw shapes and patterns by controlling a virtual cursor called the **turtle**.

---

## What is Turtle Graphics?

Turtle Graphics provides a virtual drawing canvas. A **turtle** (cursor) moves around the screen based on commands you give it. As it moves, it draws lines, just like a pen on paper.

It is widely used to teach programming concepts such as loops, functions, and coordinates in a visual way.

---

## Importing the Module

Before using Turtle Graphics, you must import the `turtle` module:

```python
import turtle
```

After importing, all turtle functions are accessed using the `turtle.` prefix.

---

## Key Turtle Graphics Functions

### Movement Functions

| Function | Description |
|---|---|
| `turtle.forward(d)` | Move the turtle forward by `d` pixels in the current direction |
| `turtle.backward(d)` | Move the turtle backward by `d` pixels (heading unchanged) |
| `turtle.goto(x, y)` | Move the turtle directly to coordinates $(x, y)$ |

### Turning Functions

| Function | Description |
|---|---|
| `turtle.right(angle)` | Turn the turtle clockwise by `angle` degrees |
| `turtle.left(angle)` | Turn the turtle counter-clockwise by `angle` degrees |

### Pen Control Functions

| Function | Description |
|---|---|
| `turtle.penup()` | Lift the pen, turtle moves without drawing |
| `turtle.pendown()` | Lower the pen, turtle draws as it moves |
| `turtle.pensize(width)` | Set the thickness of the drawing line |

### Color Functions

| Function | Description |
|---|---|
| `turtle.color('color')` | Set both pen and fill color |
| `turtle.pencolor('color')` | Set only the pen (trail) color |
| `turtle.fillcolor('color')` | Set only the fill color |

### Screen & Reset Functions

| Function | Description |
|---|---|
| `turtle.reset()` | Clear the drawing and return turtle to $(0, 0)$ with default settings |
| `turtle.clear()` | Clear the drawing but keep the turtle's current position |
| `turtle.done()` | Keep the window open after drawing is complete |

---

## Default Starting Position

When a Turtle Graphics window opens, the turtle starts at the **center of the screen**, which is the origin $(0, 0)$ in the Cartesian coordinate system. The turtle initially faces **right** (east, $0°$).

---

## Drawing Shapes with Loops

Using a `for` loop makes it easy to draw regular shapes.

### Example: Drawing a Square

```python
import turtle

for i in range(4):
    turtle.forward(100)
    turtle.right(90)

turtle.done()
```

**Explanation:** A square has 4 sides. At each corner, the turtle turns $90°$ clockwise. After 4 iterations, the square is complete.

### Example: Drawing a Triangle

```python
import turtle

for i in range(3):
    turtle.forward(100)
    turtle.right(120)

turtle.done()
```

**Explanation:** An equilateral triangle has 3 sides. The exterior angle at each corner is $120°$.

### General Rule for Regular Polygons

For a regular polygon with $n$ sides, the turtle turns:

$$\text{angle} = \frac{360°}{n}$$

| Shape | Sides ($n$) | Turn Angle |
|---|---|---|
| Triangle | 3 | $120°$ |
| Square | 4 | $90°$ |
| Pentagon | 5 | $72°$ |
| Hexagon | 6 | $60°$ |

---

## Example: Drawing with Pen Control

```python
import turtle

turtle.forward(100)   # Draw first line
turtle.penup()        # Lift pen
turtle.forward(50)    # Move without drawing
turtle.pendown()      # Lower pen
turtle.forward(100)   # Draw second line

turtle.done()
```

This draws two separate lines with a gap between them.

---

## Example: Coloured Square

```python
import turtle

turtle.pencolor('blue')
turtle.pensize(3)

for i in range(4):
    turtle.forward(100)
    turtle.right(90)

turtle.done()
```

---

---

<!-- note kx7b39rva1g1n16thz2zfmwxp185q7kj | topic ms7fe7f28d43sdbmpjntry1b6n85pt6d | status published -->
# 3.5 Libraries in Python

## What is a Library?

A **library** in Python is a collection of pre-written modules and functions that programmers can use to perform specific tasks without writing the code from scratch. Libraries save time, reduce errors, and allow programmers to build on existing, tested code.

> **Why do we need libraries?**
> Writing every function from scratch (e.g., calculating square roots or generating random numbers) would be time-consuming and error-prone. Libraries provide ready-made, reliable solutions.

---

## Importing a Library

To use a library in Python, you must first **import** it using the `import` keyword.

### Syntax

```python
import library_name
```

Once imported, you access its functions using dot notation:

```python
import math
result = math.sqrt(25)
print(result)  # Output: 5.0
```

### Importing Specific Functions

You can import only a specific function from a library:

```python
from math import sqrt
print(sqrt(49))  # Output: 7.0
```

This allows you to call `sqrt()` directly without the `math.` prefix.

---

## Common Python Libraries

### 1. The `math` Module

The `math` module provides mathematical functions and constants.

| Function / Constant | Description | Example |
|---|---|---|
| `math.sqrt(x)` | Square root of x | `math.sqrt(16)` → `4.0` |
| `math.pow(x, y)` | x raised to the power y | `math.pow(2, 3)` → `8.0` |
| `math.floor(x)` | Rounds down to nearest integer | `math.floor(4.7)` → `4` |
| `math.ceil(x)` | Rounds up to nearest integer | `math.ceil(4.2)` → `5` |
| `math.pi` | Value of π | `3.141592653589793` |
| `math.factorial(n)` | Factorial of n | `math.factorial(5)` → `120` |

**Example:**

```python
import math

radius = 7
area = math.pi * math.pow(radius, 2)
print("Area of circle:", area)
# Output: Area of circle: 153.93804002589985
```

---

### 2. The `random` Module

The `random` module is used to generate pseudo-random numbers.

| Function | Description | Example |
|---|---|---|
| `random.random()` | Random float between 0.0 and 1.0 | `0.573...` |
| `random.randint(a, b)` | Random integer between a and b (inclusive) | `random.randint(1, 6)` → dice roll |
| `random.choice(list)` | Random element from a list | `random.choice(['a','b','c'])` |
| `random.shuffle(list)` | Shuffles a list in place | Randomises order |

**Example:**

```python
import random

# Simulate a dice roll
dice = random.randint(1, 6)
print("You rolled:", dice)

# Pick a random colour
colours = ["red", "green", "blue", "yellow"]
print("Random colour:", random.choice(colours))
```

---

### 3. The `turtle` Module

The `turtle` module is a built-in Python library used for drawing graphics. It is covered in detail in the Turtle Graphics topic.

```python
import turtle
turtle.forward(100)
turtle.right(90)
```

---

## `import` vs `from... import`

| Method | Syntax | How to call function |
|---|---|---|
| Import whole module | `import math` | `math.sqrt(4)` |
| Import specific function | `from math import sqrt` | `sqrt(4)` |
| Import with alias | `import math as m` | `m.sqrt(4)` |

---

## Worked Example

**Problem:** Write a program that asks the user for a number and prints its square root rounded to 2 decimal places.

```python
import math

num = float(input("Enter a number: "))
result = math.sqrt(num)
print("Square root:", round(result, 2))
```

**Output (if user enters 2):**
```
Enter a number: 2
Square root: 1.41
```

---

## Key Points

- A **library** is a collection of pre-written code (modules and functions).
- Use the `import` keyword to include a library.
- The `math` module provides mathematical functions like `sqrt()`, `pow()`, and the constant `pi`.
- The `random` module generates random numbers using functions like `randint()` and `choice()`.
- Use `from module import function` to import a specific function directly.

---

<!-- note kx7bwda0q1zn6t0f41z7jnzwp585qst4 | topic ms78sbnc1hnb4n26yyhth73n8n85qqzk | status published -->
# 3.6 Python Variables

## What is a Variable?

A **variable** is a named location in memory used to store data. Think of it as a labelled container that holds a value. In Python, a variable is created the moment you **first assign a value** to it, no separate declaration is needed.

```python
name = "Ali"      # string variable
age  = 17         # integer variable
gpa  = 3.85       # float variable
```

---

## The Assignment Operator `=`

The `=` symbol is the **assignment operator**. It takes the value on the **right-hand side** and stores it in the variable on the **left-hand side**.

```python
x = 10      # assigns integer 10 to x
y = x + 5   # evaluates x+5 (=15) and assigns to y
```

> **Note:** `=` (assignment) is different from `==` (equality comparison).

---

## Rules for Naming Variables (Identifiers)

A variable name is also called an **identifier**. The following rules apply:

| Rule | Valid Example | Invalid Example |
|------|--------------|----------------|
| Must start with a letter or `_` | `_score`, `total` | `2score` |
| Can contain letters, digits, `_` | `my_var2` | `my-var` |
| Cannot be a Python keyword | `value` | `if`, `for` |
| Case-sensitive | `Age` ≠ `age` |, |
| No spaces allowed | `first_name` | `first name` |

```python
# Valid names
student_name = "Sara"
_count = 0
totalMarks2 = 95

# Invalid names (will cause SyntaxError)
# 2fast = True
# my-var = 10
# class = "A"   (keyword)
```

---

## Dynamic Typing

Python is a **dynamically typed** language. This means:
- You do **not** need to declare the data type of a variable.
- The interpreter automatically determines the type based on the assigned value.
- A variable can be **reassigned** to a value of a completely different type.

```python
x = 5          # x is an int
print(type(x)) # <class 'int'>

x = "Hello"    # x is now a str
print(type(x)) # <class 'str'>

x = 3.14       # x is now a float
print(type(x)) # <class 'float'>
```

---

## Multiple Assignment

Python allows assigning values to multiple variables in a single line:

```python
# Assign different values
a, b, c = 1, 2, 3

# Assign the same value to multiple variables
x = y = z = 0
```

---

## Checking a Variable's Type

Use the built-in `type()` function to check what data type a variable currently holds:

```python
marks = 85
print(type(marks))   # <class 'int'>

price = 99.9
print(type(price))   # <class 'float'>
```

---

## Common Variable Errors and Debugging

Variable-related bugs are among the most common in Python programs:

| Error Type | Example | Cause |
|-----------|---------|-------|
| `NameError` | `print(scroe)` | Variable name misspelled or not yet assigned |
| `TypeError` | `"Age: " + 17` | Mixing incompatible types |
| `SyntaxError` | `2x = 5` | Invalid variable name |

To debug these, read the error message carefully, Python tells you the **line number** and **type of error**.

```python
# NameError example
# print(scroe)   # NameError: name 'scroe' is not defined
score = 90
print(score)     # Correct
```

---

<!-- note kx7bsnxva430zjzr0aegr9wdj185qzq4 | topic ms72cxcd4ywwz8wby67ep704gn85qcxa | status published -->
# 3.7 Python Input/Output (I/O)

In Python, **Input/Output (I/O)** refers to how a program receives data from the user and displays results back to the screen. The two primary built-in functions for this are `input()` and `print()`.

---

## The `input()` Function

The `input()` function is used to **receive data from the user** via the keyboard.

### Syntax
```python
variable = input(prompt)
```
- `prompt`, an optional string displayed to the user before they type.
- The function **always returns a string**, regardless of what the user types.

### Example
```python
name = input("Enter your name: ")
print("Hello,", name)
```

> **Important:** Even if the user types a number, `input()` returns it as a string.

---

## Type Casting Input

Since `input()` always returns a string, you must **convert (cast)** it to the appropriate data type before performing calculations.

| Function | Converts To | Example |
|----------|-------------|------------------------------------------|
| `int()` | Integer | `age = int(input("Enter age: "))` |
| `float()` | Decimal | `price = float(input("Enter price: "))` |
| `str()` | String | `s = str(input("Enter text: "))` |

### Example 2
```python
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
print("Sum =", num1 + num2)
```

---

## The `print()` Function

The `print()` function is used to **display output** on the screen.

### Syntax 2
```python
print(object1, object2,..., sep=' ', end='\n')
```

### Basic Examples
```python
print("Hello, World!")        # Output: Hello, World!
print("Age:", 17)             # Output: Age: 17
print(10 + 5)                 # Output: 15
```

---

## Parameters of `print()`

### `sep` Parameter
Specifies the **separator** between multiple objects. Default is a single space `' '`.

```python
print("Python", "is", "fun", sep="-")
# Output: Python-is-fun

print(1, 2, 3, sep=", ")
# Output: 1, 2, 3
```

### `end` Parameter
Specifies what is printed **at the end** of the output. Default is a newline `'\n'`.

```python
print("Hello", end=" ")
print("World")
# Output: Hello World  (on the same line)
```

---

## Escape Sequences

Escape sequences are special characters that begin with a backslash (`\`) and are used to **format output**.

| Escape Sequence | Meaning | Example Output |
|-----------------|---------|----------------|
| `\n` | New line | Moves to next line |
| `\t` | Horizontal tab | Adds a tab space |
| `\\` | Backslash | Prints `\` |
| `\'` | Single quote | Prints `'` |
| `\"` | Double quote | Prints `"` |

### Example 3
```python
print("Name:\tAli")
# Output: Name:    Ali

print("Line 1\nLine 2")
# Output:
# Line 1
# Line 2
```

---

## String Formatting with `print()`

You can combine variables and strings in output using:

### Comma Separation
```python
name = "Sara"
age = 16
print("Name:", name, "Age:", age)
# Output: Name: Sara Age: 16
```

### f-Strings (Formatted String Literals)
```python
name = "Sara"
age = 16
print(f"Name: {name}, Age: {age}")
# Output: Name: Sara, Age: 16
```

---

## Worked Example: Simple Calculator

```python
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
sum = num1 + num2
print(f"The sum of {num1} and {num2} is {sum}")
```

**Sample Run:**
```
Enter first number: 5.5
Enter second number: 4.5
The sum of 5.5 and 4.5 is 10.0
```

---

---

<!-- note kx7aqrh3xmtrc31qjzhmp8338s85qgca | topic ms7dspdf0s4zwwy1hq1r08a35185qr5f | status published -->
# 3.8 Operators in Python

An **operator** is a symbol that tells Python to perform a specific operation on one or more values (called **operands**). Python provides several categories of operators.

---

## 1. Arithmetic Operators

Used to perform mathematical calculations.

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `5 - 3` | `2` |
| `*` | Multiplication | `5 * 3` | `15` |
| `/` | Division (float) | `5 / 2` | `2.5` |
| `//` | Floor Division | `5 // 2` | `2` |
| `%` | Modulus | `7 % 3` | `1` |
| `**` | Exponentiation | `2 ** 3` | `8` |

### Key Notes
- `/` always returns a **float**: $5 / 2 = 2.5$
- `//` returns the **largest integer ≤ result**: $5 // 2 = 2$
- `%` returns the **remainder**: $7 \% 3 = 1$
- `**` is **right-associative**: $2 ** 3 ** 2 = 2 ** (3 ** 2) = 2 ** 9 = 512$

```python
print(10 / 3)   # 3.3333...
print(10 // 3)  # 3
print(10 % 3)   # 1
print(2 ** 8)   # 256
```

---

## 2. Comparison (Relational) Operators

Used to compare two values. They return `True` or `False`.

| Operator | Meaning | Example |
|----------|---------|---------|
| `==` | Equal to | `5 == 5` → `True` |
| `!=` | Not equal to | `5 != 3` → `True` |
| `>` | Greater than | `5 > 3` → `True` |
| `<` | Less than | `3 < 5` → `True` |
| `>=` | Greater than or equal | `5 >= 5` → `True` |
| `<=` | Less than or equal | `3 <= 5` → `True` |

---

## 3. Assignment Operators

Used to assign values to variables.

| Operator | Example | Equivalent |
|----------|---------|------------|
| `=` | `x = 5` | Assign 5 to x |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 3` | `x = x * 3` |
| `/=` | `x /= 3` | `x = x / 3` |
| `//=` | `x //= 3` | `x = x // 3` |
| `%=` | `x %= 3` | `x = x % 3` |
| `**=` | `x **= 3` | `x = x ** 3` |

> **Note:** `==` is a **comparison** operator, NOT an assignment operator.

---

## 4. Logical Operators

Used to combine conditional (Boolean) expressions.

| Operator | Description | Example |
|----------|-------------|---------|
| `and` | True if **both** operands are True | `True and False` → `False` |
| `or` | True if **at least one** operand is True | `True or False` → `True` |
| `not` | Reverses the logical state | `not True` → `False` |

```python
x = 10
print(x > 5 and x < 20)  # True
print(x > 5 or x > 20)   # True
print(not(x > 5))         # False
```

---

## 5. Bitwise Operators

Bitwise operators act on operands as **binary strings**, performing operations **bit by bit**.

| Operator | Name | Example ($5$ & $3$) |
|----------|------|---------------------|
| `&` | AND | `101 & 011 = 001` → `1` |
| `\|` | OR | `101 \| 011 = 111` → `7` |
| `^` | XOR | `101 ^ 011 = 110` → `6` |
| `~` | NOT | `~5 = -6` |
| `<<` | Left Shift | `5 << 1 = 10` |
| `>>` | Right Shift | `5 >> 1 = 2` |

```python
x = 5   # binary: 101
y = 3   # binary: 011
print(x & y)   # 1
print(x | y)   # 7
print(x ^ y)   # 6
```

---

## Operator Precedence (PEMDAS/BODMAS in Python)

Python evaluates operators in this order (highest to lowest):
1. `**` (Exponentiation)
2. `~`, `+`, `-` (Unary)
3. `*`, `/`, `//`, `%`
4. `+`, `-`
5. `<<`, `>>`
6. `&`
7. `^`
8. `|`
9. Comparison operators
10. `not`
11. `and`
12. `or`

---

<!-- note kx7a8fkedz8zsqmk13w96c07fx85qqjt | topic ms77p0jvj6je17qk4sbgtkwk1x85q674 | status published -->
# 3.9 Iteration and Loop

Iteration means **repeating a block of code** multiple times. In Python, this is done using **loops**. Loops are used to implement the **repetition** construct in algorithms.

---

## Why Use Loops?

Without loops, you would have to write the same statement many times. Loops allow you to:
- Repeat a task a fixed number of times
- Repeat a task until a condition becomes false
- Process each item in a sequence (like a list or string)

---

## The `for` Loop

A `for` loop is used to **iterate over a sequence** (such as a range of numbers, a list, or a string) a **fixed number of times**.

### Syntax

```python
for variable in sequence:
    # body of loop
```

### Using `range()`

The `range()` function generates a sequence of numbers.

| Function Call | Sequence Generated |
|---|---|
| `range(5)` | 0, 1, 2, 3, 4 |
| `range(1, 6)` | 1, 2, 3, 4, 5 |
| `range(0, 10, 2)` | 0, 2, 4, 6, 8 |

### Example 1, Print numbers 1 to 5

```python
for i in range(1, 6):
    print(i)
```

**Output:**
```
1
2
3
4
5
```

### Example 2, Sum of first 10 natural numbers

```python
total = 0
for i in range(1, 11):
    total = total + i
print("Sum =", total)
```

**Output:** `Sum = 55`

---

## The `while` Loop

A `while` loop repeats a block of code **as long as a condition remains True**. It is used when the number of repetitions is **not known in advance**.

### Syntax 2

```python
while condition:
    # body of loop
```

### Example 3, Count from 1 to 5

```python
count = 1
while count <= 5:
    print(count)
    count = count + 1
```

**Output:**
```
1
2
3
4
5
```

> ⚠️ **Infinite Loop Warning:** If the condition never becomes False, the loop runs forever. Always make sure the loop variable is updated inside the loop body.

---

## `break` and `continue` Statements

### `break`
Exits the loop immediately, even if the condition is still True.

```python
for i in range(1, 10):
    if i == 5:
        break
    print(i)
# Output: 1 2 3 4
```

### `continue`
Skips the **current iteration** and moves to the next one.

```python
for i in range(1, 6):
    if i == 3:
        continue
    print(i)
# Output: 1 2 4 5
```

---

## Nested Loops

A loop inside another loop is called a **nested loop**. The inner loop completes all its iterations for each single iteration of the outer loop.

### Example 4, Multiplication table

```python
for i in range(1, 4):
    for j in range(1, 4):
        print(i * j, end="  ")
    print()
```

**Output:**
```
1  2  3
2  4  6
3  6  9
```

---

## Comparison: `for` vs `while`

| Feature | `for` Loop | `while` Loop |
|---|---|---|
| Use when | Number of iterations is known | Condition-based repetition |
| Iterates over | Sequences, ranges | Any boolean condition |
| Risk of infinite loop | Low | High if condition not updated |

---

## Translating an Algorithm to Python

Algorithm: Find the sum of all even numbers from 1 to 20.

**Pseudocode:**
```
sum ← 0
FOR i FROM 1 TO 20
    IF i MOD 2 = 0 THEN
        sum ← sum + i
PRINT sum
```

**Python Code:**
```python
sum = 0
for i in range(1, 21):
    if i % 2 == 0:
        sum = sum + i
print("Sum of even numbers:", sum)
```

**Output:** `Sum of even numbers: 110`

---

## Key Terms

| Term | Meaning |
|---|---|
| Iteration | Repeating a block of code |
| Loop | A control structure that repeats code |
| `range()` | Built-in function to generate a number sequence |
| Infinite loop | A loop that never terminates |
| Nested loop | A loop inside another loop |
| `break` | Exits the loop immediately |
| `continue` | Skips current iteration and goes to next |

---

<!-- note kx7b5zm2fvamz058fgf0cj25vd85q707 | topic ms704ntrrjnmeyvhtcnrg3ngbn85q4xw | status published -->
# 3.10 Lists in Python

A **list** is one of the most versatile and commonly used data structures in Python. It is an **ordered**, **mutable** collection of items that can store elements of **different data types**.

## Creating a List

Lists are defined using **square brackets `[]`** with elements separated by commas.

```python
# Empty list
empty_list = []

# List of integers
numbers = [10, 20, 30, 40]

# List of mixed data types
mixed = [1, 'hello', 3.14, True]

# List of strings
fruits = ['apple', 'banana', 'cherry']
```

## Key Properties of Lists

| Property | Description |
|---|---|
| **Ordered** | Elements maintain their insertion order |
| **Mutable** | Elements can be changed after creation |
| **Indexed** | Each element has a numeric index |
| **Heterogeneous** | Can store different data types |

## Indexing

Python uses **zero-based indexing**, the first element is at index `0`.

```python
fruits = ['apple', 'banana', 'cherry']
print(fruits[0])   # Output: apple
print(fruits[1])   # Output: banana
print(fruits[2])   # Output: cherry
```

### Negative Indexing

Negative indices count from the **end** of the list. Index `-1` is the last element.

```python
fruits = ['apple', 'banana', 'cherry']
print(fruits[-1])  # Output: cherry
print(fruits[-2])  # Output: banana
```

## Mutability, Modifying a List

Because lists are **mutable**, you can change any element by assigning a new value to its index.

```python
L = [1, 2, 3]
L[1] = 5
print(L)  # Output: [1, 5, 3]
```

## List Slicing

Slicing extracts a **sub-list** using the syntax:

```
list[start:stop:step]
```

- `start`, index to begin (inclusive)
- `stop`, index to end (exclusive)
- `step`, interval between elements (default is 1)

```python
L = [0, 1, 2, 3, 4, 5]
print(L[1:4])    # Output: [1, 2, 3]
print(L[0:6:2])  # Output: [0, 2, 4]
print(L[:3])     # Output: [0, 1, 2]
print(L[3:])     # Output: [3, 4, 5]
```

## Common List Methods

### `append()`, Add to End

```python
L = [1, 2, 3]
L.append(4)
print(L)  # Output: [1, 2, 3, 4]
```

### `insert()`, Add at Specific Index

```python
L = [1, 2, 3]
L.insert(1, 10)  # Insert 10 at index 1
print(L)  # Output: [1, 10, 2, 3]
```

### `pop()`, Remove by Index

```python
L = [1, 2, 3, 4]
L.pop(2)         # Removes element at index 2
print(L)  # Output: [1, 2, 4]
```

### `remove()`, Remove by Value

```python
L = [1, 2, 3, 2]
L.remove(2)      # Removes first occurrence of 2
print(L)  # Output: [1, 3, 2]
```

### `len()`, Length of List

```python
A = [10, 20, 30, 40]
print(len(A))  # Output: 4
```

### `sort()`, Sort the List

```python
L = [3, 1, 4, 1, 5]
L.sort()
print(L)  # Output: [1, 1, 3, 4, 5]
```

## Iterating Over a List

Lists are commonly used with **loops** to process each element, this directly supports translating repetition algorithms into Python.

```python
fruits = ['apple', 'banana', 'cherry']
for fruit in fruits:
    print(fruit)
```

**Output:**
```
apple
banana
cherry
```

### Using `range()` with Lists

```python
numbers = [10, 20, 30, 40, 50]
for i in range(len(numbers)):
    print(f"Index {i}: {numbers[i]}")
```

## Building a List with a Loop

A common algorithmic pattern is to build a list by appending elements inside a loop:

```python
squares = []
for i in range(1, 6):
    squares.append(i ** 2)
print(squares)  # Output: [1, 4, 9, 16, 25]
```

---

<!-- note kx7cm2ypd9nwgt0zq0181qxk9x85q0jq | topic ms7bajmg5pbm18wm60sph3y83n85qa51 | status published -->
# 3.11 Functions in Python

## What is a Function?

A **function** is a named block of reusable code that performs a specific task. Instead of writing the same code repeatedly, you define it once in a function and call it whenever needed.

Functions help in:
- **Code reusability**, write once, use many times
- **Problem decomposition**, break a large problem into smaller sub-problems
- **Readability**, makes programs easier to understand
- **Maintainability**, easier to fix or update code in one place

---

## Types of Functions in Python

| Type | Description |
|---|---|
| **Built-in Functions** | Pre-defined in Python, e.g. `print()`, `input()`, `len()`, `range()` |
| **User-defined Functions** | Created by the programmer using the `def` keyword |

---

## Defining a Function

Use the `def` keyword followed by the function name and parentheses:

```python
def function_name(parameters):
    # body of the function
    statement(s)
```

**Example:**
```python
def greet():
    print("Hello, World!")

greet()   # calling the function
```
**Output:**
```
Hello, World!
```

---

## Function Parameters and Arguments

- **Parameter**, a variable listed inside the parentheses in the function definition.
- **Argument**, the actual value passed to the function when it is called.

```python
def greet(name):        # 'name' is a parameter
    print("Hello,", name)

greet("Ali")            # 'Ali' is an argument
greet("Sara")
```
**Output:**
```
Hello, Ali
Hello, Sara
```

### Multiple Parameters

```python
def add(a, b):
    print(a + b)

add(3, 5)   # Output: 8
```

---

## The `return` Statement

A function can **return** a value to the caller using the `return` statement.

```python
def square(n):
    return n * n

result = square(4)
print(result)   # Output: 16
```

- Once `return` is executed, the function ends.
- A function without a `return` statement returns `None` by default.

---

## Default Parameters

You can assign a **default value** to a parameter. If no argument is passed, the default is used.

```python
def greet(name="Guest"):
    print("Hello,", name)

greet()          # Output: Hello, Guest
greet("Ahmed")   # Output: Hello, Ahmed
```

---

## Scope of Variables

- **Local variable**, defined inside a function; accessible only within that function.
- **Global variable**, defined outside all functions; accessible throughout the program.

```python
x = 10          # global variable

def show():
    y = 5       # local variable
    print(x)    # can access global x
    print(y)

show()
# print(y)    # Error! y is not accessible here
```

---

## Problem Decomposition Using Functions

Functions allow you to **decompose** (break down) a complex problem into smaller, manageable sub-problems.

**Example, Calculate area and perimeter of a rectangle:**

```python
def area(length, width):
    return length * width

def perimeter(length, width):
    return 2 * (length + width)

l = 5
w = 3
print("Area:", area(l, w))           # Output: Area: 15
print("Perimeter:", perimeter(l, w)) # Output: Perimeter: 16
```

Each sub-problem (area, perimeter) is solved independently in its own function.

---

## Summary

| Concept | Key Point |
|---|---|
| `def` keyword | Used to define a function |
| Parameter | Variable in function definition |
| Argument | Value passed during function call |
| `return` | Sends a value back to the caller |
| Default parameter | Used when no argument is provided |
| Local variable | Exists only inside the function |
| Global variable | Accessible throughout the program |

---

<!-- note kx77t7ggrdnbqxzr454924390h85q4bn | topic ms74maek0b4btara2d3523zn7x85q3jb | status published -->
# 3.12 Debugging

Debugging is the systematic process of **locating, analyzing, and fixing errors (bugs)** in a program so that it functions as intended. Every programmer encounters bugs, learning to debug efficiently is a core programming skill.

---

## Types of Errors (Bugs)

### 1. Syntax Error
A **syntax error** occurs when code violates the grammatical rules of Python. The interpreter catches these errors **before** the program runs.

**Common causes:**
- Missing colon (`:`) after `if`, `for`, `while`, or `def`
- Misspelled keywords
- Unmatched parentheses or brackets

**Example:**
```python
if x > 5   # SyntaxError: expected ':'
    print(x)
```

---

### 2. Runtime Error
A **runtime error** occurs **during** program execution, often causing the program to crash. Python raises a specific exception for each type.

**Common Python runtime errors:**

| Exception | Cause |
|---|---|
| `ZeroDivisionError` | Dividing by zero |
| `IndexError` | Accessing a list index that does not exist |
| `NameError` | Using a variable that has not been defined |
| `TypeError` | Performing an operation on incompatible types |

**Example:**
```python
x = 10 / 0   # ZeroDivisionError: division by zero
```

---

### 3. Logical Error
A **logical error** occurs when the program runs without crashing but produces **incorrect results** due to a flaw in the programmer's reasoning.

- These are the **hardest to detect** because Python cannot flag them.
- Only careful testing and checking of output reveals them.

**Example:**
```python
# Intended to calculate area of rectangle
area = length + width   # Bug: should be length * width
```

---

## Ways of Debugging in Python

### 1. Reading Error Messages
When Python raises an exception, it prints a **traceback** showing:
- The type of error (e.g., `ZeroDivisionError`)
- The line number where the error occurred
- A description of the problem

Always read the traceback carefully, it points directly to the bug.

---

### 2. Print Statement Debugging
Insert `print()` statements at key points to display variable values and track program flow.

```python
def calculate_area(l, w):
    print("l =", l, "w =", w)   # Debug print
    area = l * w
    print("area =", area)        # Debug print
    return area
```

Remove or comment out debug prints once the bug is fixed.

---

### 3. Using the Python IDLE Debugger
Python's IDLE includes a built-in **debugger** accessible via **Debug → Debugger** in the menu.

Key debugger features:

| Feature | Description |
|---|---|
| **Breakpoint** | Pauses execution at a specific line so you can inspect the program state |
| **Step** | Executes one line at a time |
| **Step Over** | Executes a function call without stepping into it |
| **Watch Variables** | Displays current values of variables at each step |

---

### 4. Using `try` / `except` to Handle Runtime Errors
Wrap code that may cause a runtime error in a `try`/`except` block to catch and handle the error gracefully.

```python
try:
    x = int(input("Enter a number: "))
    result = 100 / x
    print(result)
except ZeroDivisionError:
    print("Error: Cannot divide by zero.")
except ValueError:
    print("Error: Please enter a valid integer.")
```

---

## Summary Table

| Error Type | When Detected | Example |
|---|---|---|
| Syntax Error | Before execution | Missing `:` after `if` |
| Runtime Error | During execution | `ZeroDivisionError` |
| Logical Error | After execution (wrong output) | Using `+` instead of `*` |