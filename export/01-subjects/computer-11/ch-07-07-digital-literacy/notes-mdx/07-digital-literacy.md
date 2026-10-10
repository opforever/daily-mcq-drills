<!-- note kx71zgbckbyd6z32djbkp54apx85qfgf | topic ms7a7p16tzxp01y6yawb8y4ag185p7ww | status published -->
# 7.1 Data Collection Strategies

Data collection is the **systematic process of gathering information** from various sources to build an accurate and complete picture of an area of interest. In the context of database development and digital research, effective data collection ensures that the system or study is built on real, relevant, and trustworthy information.

---

## Why Data Collection Matters

Before designing a database or conducting research, analysts must understand:
- What data already exists
- What new data needs to be gathered
- Who the stakeholders are and what they need

Poor data collection leads to incomplete databases, flawed research conclusions, and wasted resources.

---

## Primary vs Secondary Data

| Type | Definition | Examples |
|------|-----------|----------|
| **Primary Data** | Collected first-hand for a specific purpose | Interviews, surveys, direct observation |
| **Secondary Data** | Pre-existing data collected by others | Reports, previous databases, published research |

Primary data is more tailored but time-consuming. Secondary data is quicker to obtain but may be outdated or not perfectly suited to your needs.

---

## Main Data Collection Methods

### 1. Interviews
- Face-to-face or remote conversations with stakeholders
- Best for **deep, qualitative insights** from individuals
- Allows follow-up questions and clarification
- **Limitation:** Time-consuming; only reaches one person at a time

### 2. Questionnaires / Surveys
- Standardized sets of questions distributed to many respondents
- Best for **large, geographically dispersed groups**
- Efficient and cost-effective (especially digital surveys)
- **Limitation:** Cannot probe deeper if an answer is unclear

### 3. Observation
- Watching how users interact with the current system in real time
- Reveals **actual workflows and bottlenecks** that users may forget to mention
- **Limitation:** The *Hawthorne Effect*, people may behave differently when they know they are being watched

### 4. Document Analysis
- Reviewing existing records such as invoices, reports, forms, and organizational charts
- Helps understand current data flows and business rules
- This is a form of **secondary data collection**
- **Limitation:** Documents may be outdated or incomplete

---

## Choosing the Right Strategy

The choice of data collection method depends on:
- **Number of respondents**, questionnaires for large groups; interviews for small groups
- **Depth of information needed**, interviews for qualitative detail; questionnaires for quantitative breadth
- **Available time and budget**, document analysis is low-cost; interviews are high-cost
- **Nature of the data**, observation for process data; surveys for opinions

---

## Reliable vs Unreliable Information Sources

When collecting data, it is critical to evaluate the **quality and trustworthiness** of your sources.

### Characteristics of Reliable Sources
- Written by a named, qualified author or organization
- Peer-reviewed or fact-checked
- Cites evidence and references
- Up-to-date and regularly maintained
- Examples: peer-reviewed journals, government websites, established news agencies, academic textbooks

### Characteristics of Unreliable Sources
- Anonymous or unknown authorship
- No citations or evidence provided
- Contains obvious bias or emotional language
- Not reviewed or verified by experts
- Examples: anonymous blogs, unverified social media posts, sites with excessive advertising

> **Safe & Responsible Use:** Always cross-check information across multiple reliable sources. Cite your sources properly and respect copyright and intellectual property rights when using others' data.

---

## Summary Table

| Method | Data Type | Best For | Key Limitation |
|--------|-----------|----------|----------------|
| Interviews | Primary | Deep qualitative insights | Time-consuming |
| Questionnaires | Primary | Large dispersed groups | Cannot probe deeper |
| Observation | Primary | Real workflow analysis | Hawthorne Effect |
| Document Analysis | Secondary | Understanding existing systems | May be outdated |

---

<!-- note kx77qwjyam8pq11frg9qatcd7d85ps1k | topic ms727wc4dsdm4edecgr6vszfex85pxr6 | status published -->
# 7.2 Data Presentation for Research Questions

Once data has been collected, it must be **presented effectively** so that it can answer the original research question. Good data presentation transforms raw numbers into meaningful insights using summary statistics and visual tools.

---

## What is Data Presentation?

Data presentation is the process of organizing and displaying data in a structured format, using tables, charts, graphs, or statistics, so that patterns, trends, and conclusions become clear.

> **Key principle:** Data must be presented in a **clear, accurate, and unbiased** manner to support valid research conclusions.

---

## Summary Statistics

Summary statistics are numerical values that describe the main features of a data set. They allow a researcher to quickly understand the data without examining every individual value.

| Statistic | Description | Example (data: 3, 5, 5, 7, 10) |
|-----------|-------------|----------------------------------|
| **Mean** | Sum of all values ÷ number of values | (3+5+5+7+10) ÷ 5 = **6** |
| **Median** | Middle value when data is sorted | **5** |
| **Mode** | Most frequently occurring value | **5** |
| **Range** | Maximum value − Minimum value | 10 − 3 = **7** |

---

## Data Visualization

Data visualization is the **graphical representation** of data using visual elements such as charts, graphs, and maps. It makes it easier to identify trends, outliers, and patterns that are not obvious in raw data.

### Features of Effective Data Visualization

1. **Clarity**, Easy to read and understand at a glance.
2. **Accuracy**, Scales, proportions, and values are represented truthfully.
3. **Efficiency**, Conveys complex information quickly without unnecessary clutter.

---

## Types of Data Visuals

### 1. Bar Chart
- Used to **compare quantities** across different categories.
- The height (or length) of each bar represents the value for that category.
- **Example:** Comparing the number of students who scored in each grade range.

### 2. Pie Chart
- Used to show **proportions or percentages** of a whole.
- Each slice represents a category's share of the total.
- **Example:** Showing the percentage of students preferring different subjects.
- ⚠️ Best used when there are **fewer than 6 categories**.

### 3. Line Graph
- Used to show **trends over time** (continuous data).
- Points are connected by a line to show direction of change.
- **Example:** Tracking a student's test scores over five months.

### Choosing the Right Chart

| Situation | Best Chart |
|-----------|------------|
| Comparing categories | Bar Chart |
| Showing parts of a whole | Pie Chart |
| Showing change over time | Line Graph |

---

## Experimental Design in Data Science

Before collecting and presenting data, a researcher must plan the **experimental design**, the structured approach to answering a research question.

### Key Components of Experimental Design

| Component | Description | Example |
|-----------|-------------|----------|
| **Research Question** | The question the study aims to answer | Does study time affect exam scores? |
| **Hypothesis** | A testable prediction | More study hours → higher scores |
| **Independent Variable** | The variable that is deliberately changed | Number of study hours |
| **Dependent Variable** | The variable that is measured | Exam scores |
| **Control Variables** | Variables kept constant to ensure fairness | Same subject, same difficulty level |
| **Data Collection Method** | How data will be gathered | Survey, observation, experiment |

### Why Experimental Design Matters

A well-designed experiment ensures that:
- Results are **reliable** and can be repeated.
- Conclusions are **valid** and not due to uncontrolled factors.
- Data presentation accurately **reflects the research question**.

---

## Connecting Data Presentation to Research Questions

The choice of how to present data should always be guided by the research question:

- If the question asks **"How many?"** → use a bar chart or table.
- If the question asks **"What proportion?"** → use a pie chart.
- If the question asks **"How has this changed over time?"** → use a line graph.
- If the question asks **"What is the average?"** → calculate and report the mean.