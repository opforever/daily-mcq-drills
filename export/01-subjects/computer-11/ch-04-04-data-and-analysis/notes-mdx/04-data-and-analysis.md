<!-- note kx70jy7bhgktaed6z3cj84byy985qcca | topic ms74jpnqnzv167e2t532vz6b9n85qt2w | status published -->
# 4.1 Statistical Modeling

## What is Statistical Modeling?

Statistical modeling is a **mathematical framework** used to represent the generation of sample data, identify patterns, and make predictions about real-world phenomena using probabilistic and statistical methods.

A **statistical model** describes the relationship between variables in a dataset using mathematical equations. It allows us to:
- Summarize complex data
- Make predictions about future outcomes
- Understand cause-and-effect relationships

---

## Why is Model Building Important?

Model building plays a central role in data science and computer science because it bridges raw data and actionable decisions.

| Benefit | Description |
|---|---|
| Prediction | Forecast future values (e.g., stock prices, weather) |
| Pattern Recognition | Discover hidden structures in data |
| Decision Making | Support business and scientific decisions |
| Automation | Power machine learning and AI systems |

### Real-World Applications
- **Healthcare**: Predicting disease outbreaks or patient diagnosis
- **Finance**: Forecasting stock prices or credit risk
- **E-commerce**: Recommending products to users
- **Climate Science**: Modeling temperature and rainfall trends
- **Social Media**: Detecting spam or fake accounts

---

## Types of Statistical Models

### 1. Supervised Learning Models
The algorithm is trained on **labeled data**, both input and correct output are provided.

- **Regression**: Predicts a continuous numerical output (e.g., predicting house prices based on size and location).
- **Classification**: Predicts a category label (e.g., spam vs. not spam).

### 2. Unsupervised Learning Models
The algorithm finds **hidden patterns** in **unlabeled data**, no correct output is provided.

- **Clustering (e.g., K-means)**: Groups data points into clusters based on similarity.
- **Dimensionality Reduction**: Reduces the number of variables while preserving information.

---

## Key Concepts in Statistical Modeling

### Regression
Regression is a supervised learning technique used to predict a **continuous numerical output** based on the relationship between dependent and independent variables.

**Example**: Predicting a student's exam score based on hours studied.

### K-Means Clustering
K-means is an unsupervised algorithm that groups $n$ data points into $K$ clusters. Each data point is assigned to the cluster whose **centroid** (mean) is nearest.

**Example**: Grouping customers by purchasing behavior.

### Correlation Coefficient
The correlation coefficient ($r$) measures the **strength and direction** of a linear relationship between two variables.

$$-1 \leq r \leq +1$$

| Value of $r$ | Interpretation |
|---|---|
| $r = +1$ | Perfect positive relationship |
| $r = 0$ | No linear relationship |
| $r = -1$ | Perfect negative relationship |
| $r = -0.9$ | Strong negative relationship |

---

## Summary

- Statistical models use mathematics and probability to represent real-world data.
- Model building is essential for prediction, pattern recognition, and decision-making.
- Supervised learning uses labeled data; unsupervised learning finds patterns in unlabeled data.
- Regression predicts continuous values; clustering groups similar data points.
- The correlation coefficient quantifies the linear relationship between two variables.

---

<!-- note kx73nyztb10pyajev724gzejmn85p83z | topic ms7a7e49v8wmh6gc3tzfhee01985qpsy | status published -->
# 4.2 Experimental Design in Data Science

## What is Experimental Design?

Experimental Design is a **structured approach** to planning and conducting experiments in order to:
- Test hypotheses
- Identify **causal relationships** between variables
- Optimize processes by systematically manipulating variables

Unlike observational studies, experimental design allows researchers to **control conditions** and draw cause-and-effect conclusions.

---

## Key Components of Experimental Design

### 1. Independent Variable
The factor that the researcher **manipulates or changes**. It is the presumed *cause*.

> **Example:** In testing a new website layout, the layout design is the independent variable.

### 2. Dependent Variable
The outcome that is **measured** to see if it changed. It is the presumed *effect*.

> **Example:** The number of user clicks is the dependent variable.

### 3. Control Group
A group that does **not receive** the experimental treatment. It provides a **baseline** for comparison, allowing researchers to isolate the effect of the independent variable.

### 4. Experimental Group
The group that **receives** the treatment or intervention being tested.

### 5. Controlled Variables
All other factors that are **kept constant** to ensure that only the independent variable affects the dependent variable.

---

## Randomization

**Randomization** is the process of assigning subjects to groups **by chance**. This:
- Minimizes **selection bias**
- Ensures groups are statistically comparable before the experiment begins
- Increases the validity of results

---

## A/B Testing

**A/B Testing** is a common experimental design used in data science and technology:
- Two versions are created: **Version A** (control) and **Version B** (treatment)
- Users are randomly assigned to each version
- Performance is compared on a specific metric (e.g., click-through rate, conversion rate)

> **Example:** A company tests two email subject lines to see which generates more opens.

---

## Data Collection Approaches (SLO CS-11-G-01)

In data science, original data can be gathered through several approaches:

| Method | Description | Example |
|---|---|---|
| **Survey** | Structured questionnaire given to a sample population | Likert-scale satisfaction survey |
| **Qualitative Interview** | In-depth conversation to gather detailed opinions | User experience interview |
| **Prototype Testing** | Testing a working model to collect performance data | Testing a new app feature |
| **Simulation** | Using software to model real-world scenarios | Simulating traffic flow |
| **Advanced Search** | Using search operators and databases to locate existing data | Boolean searches in academic databases |

### Designing a Data Collection Approach
When designing a data collection plan:
1. **Define the research question** clearly
2. **Choose the appropriate method** (survey, interview, simulation, etc.)
3. **Identify the target population** and sample size
4. **Pilot test** the instrument before full deployment
5. **Collect, clean, and analyze** the data

---

## Steps in Experimental Design

1. **Formulate a hypothesis**, a testable prediction
2. **Identify variables**, independent, dependent, and controlled
3. **Design the experiment**, choose control/experimental groups
4. **Apply randomization**, assign subjects randomly
5. **Collect data**, using appropriate tools and methods
6. **Analyze results**, use statistical methods
7. **Draw conclusions**, accept or reject the hypothesis

---

<!-- note kx72awassw6bd0en77qewdewdn85p09e | topic ms75pk36wb4h9ygs001bfet4md85qpfc | status published -->
# 4.3 Data Visualization and Summary Statistics

Data analysis involves two key activities: computing **summary statistics** to numerically describe a dataset, and creating **data visualizations** to communicate patterns and trends effectively.

---

## Summary Statistics

Summary statistics are numerical values that describe the key characteristics of a dataset. They help analysts quickly understand the distribution, center, and spread of data.

### Measures of Central Tendency

| Measure | Definition | Example (dataset: 2, 4, 4, 6, 8) |
|---------|-----------|-----------------------------------|
| **Mean** | Sum of all values divided by the count | $(2+4+4+6+8) \div 5 = 4.8$ |
| **Median** | Middle value when data is sorted | $4$ (3rd value) |
| **Mode** | Most frequently occurring value | $4$ (appears twice) |

### Measures of Spread

- **Range**: Difference between the maximum and minimum values. $Range = Max - Min$
- **Variance**: Average of squared differences from the mean.
- **Standard Deviation**: Square root of variance; shows how spread out values are from the mean.

### Parameter vs. Statistic

- A **Parameter** is a numerical value describing a characteristic of an **entire population** (e.g., average height of all students in Pakistan).
- A **Statistic** is a numerical value describing a characteristic of a **sample** taken from that population (e.g., average height of 100 students surveyed).

---

## Data Visualization

Data visualization converts raw data into graphical formats, making it easier to identify patterns, trends, and outliers.

### Bar Chart

- **Purpose**: Comparing discrete categories or groups.
- **Structure**: Rectangular bars where the length/height represents the value of each category.
- **Best used when**: Comparing sales across different products, population across cities, or scores across subjects.
- **Example**: Comparing the number of students enrolled in five different courses.

### Pie Chart

- **Purpose**: Showing the proportion of parts relative to a whole.
- **Structure**: A circle divided into slices; each slice represents a category's percentage of the total.
- **Sector Angle Formula**: $$\text{Angle} = \frac{\text{Category Value}}{\text{Total}} \times 360^\circ$$
- **Example**: If a category is 25% of the total, its sector angle = $0.25 \times 360^\circ = 90^\circ$.
- **Best used when**: Showing market share, budget allocation, or survey response distribution.

### Line Graph

- **Purpose**: Showing trends and changes over time (time-series data).
- **Structure**: Data points connected by lines along a horizontal time axis.
- **Best used when**: Tracking temperature over a month, stock prices over a year, or website traffic over weeks.
- **Example**: Plotting daily maximum temperatures for a city over 30 days.

### Choosing the Right Chart

| Scenario | Best Chart |
|----------|------------|
| Comparing categories | Bar Chart |
| Showing parts of a whole | Pie Chart |
| Tracking trends over time | Line Graph |
| Showing frequency distribution | Histogram |
| Showing relationship between two variables | Scatter Plot |

---

## Using Python Libraries for Data Visualization

Python provides powerful libraries to create visualizations and compute summary statistics from pre-existing datasets.

### Key Libraries

- **`matplotlib`**: The foundational plotting library for creating bar charts, line graphs, pie charts, and more.
- **`pandas`**: Used for loading and manipulating datasets; provides built-in `.describe()` for summary statistics.
- **`numpy`**: Provides mathematical functions for computing mean, median, standard deviation, etc.

### Example: Summary Statistics with pandas

```python
import pandas as pd

# Load a dataset
data = pd.read_csv('students.csv')

# Display summary statistics
print(data.describe())

# Individual statistics
print("Mean:", data['score'].mean())
print("Median:", data['score'].median())
print("Mode:", data['score'].mode()[0])
```

### Example: Bar Chart with matplotlib

```python
import matplotlib.pyplot as plt

categories = ['Math', 'Science', 'English', 'History', 'Art']
students = [45, 60, 55, 30, 40]

plt.bar(categories, students, color='steelblue')
plt.title('Student Enrollment by Subject')
plt.xlabel('Subject')
plt.ylabel('Number of Students')
plt.show()
```

### Example: Pie Chart with matplotlib

```python
import matplotlib.pyplot as plt

labels = ['Math', 'Science', 'English', 'History']
sizes = [30, 25, 25, 20]

plt.pie(sizes, labels=labels, autopct='%1.1f%%')
plt.title('Subject Distribution')
plt.show()
```

### Example: Line Graph with matplotlib

```python
import matplotlib.pyplot as plt

days = list(range(1, 8))
temperature = [22, 25, 23, 28, 30, 27, 24]

plt.plot(days, temperature, marker='o', color='tomato')
plt.title('Daily Temperature Over a Week')
plt.xlabel('Day')
plt.ylabel('Temperature (°C)')
plt.show()
```

---

## Key Takeaways

- **Summary statistics** (mean, median, mode, range) describe a dataset numerically.
- **Bar charts** compare categories; **pie charts** show proportions; **line graphs** show trends over time.
- Python libraries like `matplotlib`, `pandas`, and `numpy` are essential tools for data analysis and visualization.
- A **statistic** describes a sample; a **parameter** describes a population.