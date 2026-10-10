<!-- note kx7bcj3wt1vb4jg6m3sztafk4d85pa94 | topic ms7deqegt38drkkh138m8a8kns85qsck | status published -->
# 4.1 Data Types in C++

A **data type** is a classification that tells the compiler:
1. What kind of value a variable can hold
2. How much memory to allocate
3. What operations can be performed on it

C++ provides several **fundamental (primitive) data types** built into the language.

---

## 1. Integer Types (`int`)

Used to store **whole numbers** (no decimal part).

| Modifier | Size | Range |
|---|---|---|
| `short int` | 2 bytes | -32,768 to 32,767 |
| `int` | 4 bytes | -2,147,483,648 to 2,147,483,647 |
| `long int` | 4–8 bytes | Platform dependent |
| `long long int` | 8 bytes | Very large range |

### Signed vs Unsigned
- **`signed`** (default): stores both positive and negative values
- **`unsigned`**: stores only non-negative values (0 and above), doubling the positive range

```cpp
int a = -10;           // signed (default)
unsigned int b = 200;  // unsigned, range: 0 to 4,294,967,295
```

---

## 2. Floating-Point Types

Used to store **real numbers** (numbers with fractional/decimal parts).

| Type | Size | Precision |
|---|---|---|
| `float` | 4 bytes | ~7 decimal digits |
| `double` | 8 bytes | ~15 decimal digits |
| `long double` | 10–16 bytes | Extended precision |

```cpp
float pi = 3.14f;
double precise_pi = 3.14159265358979;
```

> Use `double` when higher precision is needed (e.g., scientific calculations).

---

## 3. Character Type (`char`)

Used to store a **single character** using its ASCII code.

- Size: **1 byte** (8 bits)
- Range: 0–255 (unsigned) or -128 to 127 (signed)
- Stores 256 possible values representing ASCII characters

```cpp
char grade = 'A';   // stored as ASCII value 65
char newline = '\n'; // escape character
```

**ASCII Examples:**
- `'A'` = 65, `'a'` = 97, `'0'` = 48

---

## 4. Boolean Type (`bool`)

Used to store **logical values**.

- Size: **1 byte**
- Values: `true` (stored as 1) or `false` (stored as 0)

```cpp
bool isLoggedIn = true;
bool hasError = false;

if (isLoggedIn) {
    cout << "Welcome!";
}
```

---

## 5. Void Type (`void`)

`void` means **no type** or **no value**. It is used:
- As a return type for functions that return nothing
- For generic pointers (`void*`) that can point to any data type

```cpp
void printMessage() {      // returns nothing
    cout << "Hello";
}

void *ptr1;    // generic pointer, can point to any type
int  *ptr2;    // typed pointer, can only point to int
```

### `void*` vs `int*`
| Feature | `void *ptr1` | `int *ptr2` |
|---|---|---|
| Points to | Any data type | Only `int` variables |
| Dereferencing | Requires explicit cast | Direct dereferencing allowed |
| Type safety | Less type-safe | Type-safe |
| Use case | Generic functions, malloc | Integer-specific operations |

---

## Summary Table

| Data Type | Size | Example Values |
|---|---|---|
| `int` | 4 bytes | -100, 0, 42 |
| `unsigned int` | 4 bytes | 0, 200, 65535 |
| `float` | 4 bytes | 3.14, -0.5 |
| `double` | 8 bytes | 3.14159265 |
| `char` | 1 byte | 'A', 'z', '5' |
| `bool` | 1 byte | true, false |
| `void` |, | (no value) |

---

<!-- note kx7dn56qk5q6x47nk3rkmtbphd85p142 | topic ms72ew62mvdzj4v2kac5fcn1yd85qdpz | status published -->
# 4.2 Data Visualization

Data visualization is the **graphical representation of information and data** using visual elements such as charts, graphs, maps, and dashboards. It transforms raw data into an accessible format that helps identify trends, outliers, and patterns quickly.

Tools used for data visualization include **SQL**, **Python** (matplotlib, seaborn, plotly), and **R** (ggplot2).

---

## Why Data Visualization Matters

- The human brain processes visual information faster than raw numbers.
- Helps communicate findings to both technical and non-technical audiences.
- Supports hypothesis testing by visually confirming or challenging assumptions.
- Enables real-time monitoring through dashboards.

---

## Common Chart Types

| Chart Type | Best Used For | Example Tool (Python) |
|---|---|---|
| **Bar Chart** | Comparing discrete categories | `plt.bar()` |
| **Histogram** | Distribution of continuous data | `plt.hist()` |
| **Line Graph** | Trends over time | `plt.plot()` |
| **Scatter Plot** | Relationship between two numeric variables | `plt.scatter()` |
| **Pie Chart** | Proportions of a whole | `plt.pie()` |
| **Heat Map** | Magnitude across a matrix or geography | `sns.heatmap()` |
| **Box Plot** | Distribution, median, and outliers | `sns.boxplot()` |

### Bar Chart vs. Histogram
- A **Bar Chart** compares **discrete categories** (e.g., sales per product).
- A **Histogram** shows the **frequency distribution** of **continuous numerical data** over intervals (bins).

---

## Creating Visualizations in Python

### Using Matplotlib

```python
import matplotlib.pyplot as plt

# Bar Chart
categories = ['Math', 'Science', 'English']
scores = [85, 92, 78]
plt.bar(categories, scores, color='steelblue')
plt.title('Student Scores by Subject')
plt.xlabel('Subject')
plt.ylabel('Score')
plt.show()
```

```python
# Scatter Plot
import matplotlib.pyplot as plt

height = [150, 160, 170, 180, 190]
weight = [50, 60, 70, 80, 90]
plt.scatter(height, weight, color='red')
plt.title('Height vs Weight')
plt.xlabel('Height (cm)')
plt.ylabel('Weight (kg)')
plt.show()
```

### Using Seaborn

```python
import seaborn as sns
import pandas as pd

# Heat Map (Correlation Matrix)
df = pd.DataFrame({'A': [1,2,3], 'B': [4,5,6], 'C': [7,8,9]})
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
```

---

## Creating Visualizations in SQL

SQL itself does not render charts, but query results can be exported to visualization tools. Some database environments (e.g., MySQL Workbench, PostgreSQL with Grafana) support basic chart generation.

```sql
-- Example: Aggregate data for visualization
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department
ORDER BY employee_count DESC;
```
This result can then be fed into Python or R to create a bar chart.

---

## Creating Visualizations in R

```r
# Using ggplot2
library(ggplot2)

df <- data.frame(subject = c('Math','Science','English'), score = c(85,92,78))
ggplot(df, aes(x=subject, y=score, fill=subject)) +
  geom_bar(stat='identity') +
  ggtitle('Student Scores by Subject')
```

---

## Heat Maps

A **Heat Map** uses **color intensity** to represent values across a data matrix or geographical area.
- Darker or warmer colors indicate higher values.
- Useful for spotting correlations in large datasets.
- Common in bioinformatics, web analytics, and financial analysis.

---

## Dashboards

A **Dashboard** is an interactive information management tool that:
- Visually tracks and displays **Key Performance Indicators (KPIs)**.
- Allows users to **filter and drill down** into specific data subsets.
- Provides real-time monitoring of business or system health.

Popular dashboard tools include **Tableau**, **Power BI**, and Python's **Dash** library.

---

## Data Visualization and Hypothesis Testing

Visualizations play a key role in communicating hypothesis testing results:
- **Before testing**: Use exploratory plots (histograms, scatter plots) to understand data distribution.
- **After testing**: Use visualizations to present findings clearly, e.g., a bar chart comparing means of two groups, or a scatter plot showing a regression line.
- Advanced visuals such as **confidence interval plots** and **residual plots** help tie findings back to the original hypothesis.

---

## Key Principles of Effective Visualization

1. **Clarity**, Choose the right chart type for the data.
2. **Accuracy**, Do not distort scales or omit data points.
3. **Simplicity**, Avoid information overload; include only relevant data.
4. **Labeling**, Always label axes, add titles, and include legends.
5. **Color**, Use color meaningfully, not decoratively.

---

---

<!-- note kx736nysby4ff9qhc72qwd7yqd85p0ef | topic ms743em6nbs81f09k796gce0px85pz2j | status published -->
# 4.3 Hypothesis Formulation and Hypothesis Testing

In data analysis and research, a **hypothesis** is a testable prediction about the relationship between variables. Hypothesis testing is the statistical process used to determine whether the evidence supports or refutes that prediction.

---

## What is a Hypothesis?

A hypothesis is a **specific, measurable, and falsifiable statement** that predicts a relationship between two or more variables.

**Example:**
> *"A simplified menu layout reduces the average time users take to complete a task."*

A good hypothesis must be:
- **Specific**, clearly defines the variables involved
- **Testable**, data can be collected to support or refute it
- **Falsifiable**, it is possible for the hypothesis to be proven wrong

---

## Types of Hypotheses

### Null Hypothesis ($H_0$)
The Null Hypothesis states that there is **no significant difference or effect** between the variables being studied. It is the default assumption.

> **Example:** *"Changing the button color does not affect the click rate."

### Alternative Hypothesis ($H_1$)
The Alternative Hypothesis is the statement the researcher **aims to support**. It claims that a significant relationship or difference **does exist**.

> **Example:** *"Changing the button color increases the click rate."

---

## Variables in a Hypothesis

| Variable | Definition | Example |
|---|---|---|
| **Independent Variable** | The factor deliberately **changed/manipulated** | Font size, menu layout |
| **Dependent Variable** | The factor **measured** as an outcome | Readability score, task time |

---

## Hypothesis Testing Process

Hypothesis testing follows a structured process:

1. **Formulate** $H_0$ and $H_1$
2. **Collect data** through experiments or observations (e.g., A/B Testing)
3. **Analyze data** using statistical methods
4. **Calculate the P-value**
5. **Make a decision**, reject or fail to reject $H_0$
6. **Communicate findings** using data visualizations

---

## The P-Value

The **P-value** is a statistical measure that indicates the probability that the observed results occurred by chance.

$$p < \alpha \Rightarrow \text{Reject } H_0$$

- The standard **significance level** is $\alpha = 0.05$
- If $p < 0.05$: the result is **statistically significant** → reject $H_0$, support $H_1$
- If $p \geq 0.05$: insufficient evidence to reject $H_0$

**Example:** A P-value of $0.03$ means there is only a 3% chance the result is due to random chance. Since $0.03 < 0.05$, we reject $H_0$.

---

## A/B Testing

**A/B Testing** (split testing) is one of the most common methods used to validate hypotheses about user interfaces and system designs.

- **Version A** = the original/control design
- **Version B** = the modified/experimental design
- Users are randomly assigned to each version
- Data is collected and compared statistically

> **Example Hypothesis:** *"Users who see Version B (larger buttons) will complete checkout faster than users who see Version A."

---

## Communicating Findings with Data Visualizations

After hypothesis testing, results must be communicated clearly. **Advanced data visualizations** are used to:

- Show the **distribution** of results (box plots, histograms)
- Highlight **statistically significant differences** (bar charts with error bars)
- Display **relationships between variables** (scatter plots)
- Tie observed patterns back to the original hypothesis

### Choosing the Right Visual

| Visualization | Best Used For |
|---|---|
| **Scatter Plot** | Showing correlation between two continuous variables |
| **Box Plot** | Comparing distributions across groups |
| **Bar Chart with Error Bars** | Comparing means with confidence intervals |
| **Line Graph** | Showing trends over time |

---

## Worked Example

**Research Question:** Does increasing font size improve readability for elderly users?

| Element | Value |
|---|---|
| $H_0$ | Font size has no effect on readability scores |
| $H_1$ | Larger font size improves readability scores |
| Independent Variable | Font size |
| Dependent Variable | Readability score (measured) |
| Method | A/B Test with two font sizes |
| Result | $p = 0.02 < 0.05$ → Reject $H_0$ |
| Conclusion | Larger font size significantly improves readability |