<!-- note kx71bqfxr01d20jmgvd92vbg4585pqrv | topic ms7cr0qy0bjmpsnghd7y8e5rxn85pkka | status published -->
# 11.1 Biostatistics and Its Uses

Biostatistics is the application of statistical principles and techniques to collect, analyze, interpret, and present research findings in the fields of biology, medicine, and health sciences. It primarily deals with data from living organisms to support effective plans or solutions.

**Data**: In a biological context, data refers to facts, measurements, or observations related to living organisms. Examples include heights, weights, enzyme activity levels, population counts, or disease rates.

**Data Set**: A structured collection of related data values organized for analysis, typically in a table. Each row represents a subject or experimental unit (e.g., an individual plant). Each column represents a variable or characteristic being measured (e.g., height, weight).

## Components of Biostatistical Studies

A biostatistical study follows a systematic process to solve biological problems:

1. **Identification of a problem**: Defining the biological or health-related issue to be investigated.
2. **Designing experiments**: Planning biological experiments, including defining requirements and duration, to collect relevant data.
3. **Collecting and analyzing data**: Gathering data before and after an experiment and analyzing it thoroughly using statistical methods.
4. **Interpreting results**: Using the analysis to understand the reasons behind the observations and estimate potential future effects.
5. **Developing new tools**: Using the interpretations to create predictive models or plans to effectively manage the problem (e.g., public health policies).

## Uses of Biostatistics

Biostatistics is a crucial tool in various fields:

## Need Assessments for Agriculture and Farming

Assesses the demands of agriculture and dairy farming based on population growth rates. Helps governments plan for the import or export of food items.

## Evaluation of Medical Efficacy

Designs clinical trials to test the efficacy and safety of new drugs, medical instruments, and treatment plans. Helps determine optimal drug dosages and identifies potential side effects.

## Epidemiological Studies and Policy Development

Monitors and analyzes data on the spread of epidemic diseases (e.g., COVID-19, Polio, Hepatitis). Identifies risk factors, patterns, and rates of disease, which helps in preventing future outbreaks. Provides evidence for governments to make decisions on healthcare plans and funding.

## Management of Public Health and Population Growth

Estimates health trends by analyzing birth rates, death rates, and disease prevalence. Guides governments in allocating resources and planning public health initiatives. Monitors hospital performance by tracking patient numbers, resource availability, and treatment effectiveness.

## Genetic Diseases

Analyzes data on the inheritance patterns of genetic diseases like thalassemia and muscular dystrophy. Helps in understanding risk factors and the behavior of genetic disorders within a population.

## Environmental Protection

Analyzes pollution levels and their impact on public health. Monitors environmental hazards and helps design policies to reduce associated health risks (e.g., addressing smog in Lahore through plantation drives).

## Survival Analysis

Predicts and tracks the survival rate of patients following a specific treatment for a disease (e.g., cancer). Helps estimate life expectancy and evaluate the success of medical interventions. A five-year survival rate after cancer treatment is often considered a benchmark for success.

---

<!-- note kx773mcnqfs5syhye5rcb3wamd85p4mv | topic ms79pbma5v0a8e2wvgnbdxfrfh85pffr | status published -->
# 11.2 Mean, Median, Mode, SD, Range and Percentile

The main biological concepts covered are the fundamental statistical tools used in biostatistics to summarize, analyze, and interpret biological data. These include measures of central tendency (mean, median, mode) which describe the "average" or central value of a dataset, and measures of dispersion (standard deviation, range, percentile) which describe the spread or variability of the data.

## Introduction to Averages (Measures of Central Tendency)

In biology and other fields, data often varies. An *average* is a single value that represents the central point of a whole dataset. These are crucial for summarizing findings from experiments, population studies, and health monitoring.

- **Examples in Biology:** Average heart rate, death rate from a disease, crop yield, daily food consumption.
- These values are often approximate but provide a crucial reference point for comparison and analysis.
- The three main types are the **Mean**, **Median**, and **Mode**.

## Arithmetic Mean (Mean)

The *mean* is the most common type of average. It is calculated by summing all the values in a dataset and dividing by the total number of values.

- **Symbol:** $\bar{x}$ (read as "x-bar")
- **General Formula:** Mean ($\bar{x}$) = (Sum of all values) / (Total number of values) = $\frac{\sum X}{n}$

### Types of Data

- ***Ungrouped Data:*** Raw, individual data points that have not been organized into categories. *Example: The specific heights of 10 individual plants.*
- ***Grouped Data:*** Data organized into classes or intervals, with a frequency count for each class. *Example: A table showing how many plants fall into height ranges like 10-15 cm, 16-20 cm, etc.*

### Mean Calculation Formulas

| Data Type | Formula | Explanation |
| :--- | :--- | :--- |
| **Ungrouped Data** | $\bar{X}=\frac{\sum x}{n}$ | `x` = Each individual value<br />`n` = Total number of values |
| **Grouped Data** | $\bar{X}=\frac{\sum fx}{\sum f}$ | `f` = Frequency of each class<br />`x` = Midpoint of each class (`[lower limit + upper limit] / 2`)<br />`Σf` = Total number of values (sum of frequencies) |

## Median

The *median* is the middle value in a dataset that has been arranged in ascending or descending order. It divides the dataset into two equal halves.

- **Symbol:** $\tilde{x}$ (read as "x-tilde")
- It is less affected by extreme values (outliers) than the mean.

### Median Calculation for Ungrouped Data

1. **Arrange Data:** Sort all values from lowest to highest.
2. **Calculate:**
   - If the number of values (*n*) is **odd**: The median is the single middle value. Position = $(\frac{n+1}{2})^{th}$ item.
   - If the number of values (*n*) is **even**: The median is the average of the two middle values. Position = Average of the $(\frac{n}{2})^{th}$ and $(\frac{n}{2}+1)^{th}$ items.

### Median Calculation for Grouped Data

For grouped data, the median is found by first calculating the cumulative frequency and then identifying the class interval that contains the middle value.

### Advantages and Disadvantages of Median

- **Advantages:** Easy to calculate, not affected by extreme outliers.
- **Disadvantages:** Cannot be combined across different datasets, may not represent a central data point if there are large gaps.

## Mode

The *mode* is the value that appears most frequently in a dataset.

- **Symbol:** $\hat{X}$ (read as "x-hat")
- A dataset can be:
  - **Unimodal:** One mode.
  - **Bimodal/Multimodal:** Two or more modes.
  - **Amodal:** No mode (all values appear with the same frequency).

### Mode for Grouped Data

The *modal group* (or modal class) is the class interval with the highest frequency. The specific mode value is then calculated using a formula that considers the frequencies of the modal group and its adjacent groups.

- **Formula:** Mode $(\hat{X})=l+\left[\frac{(f_m-f_1) \times h}{(f_m-f_1)+(f_m-f_2)}\right]$
  - `l` = Lower boundary of the modal group
  - `f_m` = Frequency of the modal group
  - `f_1` = Frequency of the group before the modal group
  - `f_2` = Frequency of the group after the modal group
  - `h` = Class interval width

## Standard Deviation (SD)

*Standard Deviation (SD)* is a measure of **dispersion** or **spread**. It quantifies how much the individual data points in a set deviate from the mean.

- **Low SD:** Data points are clustered tightly around the mean.
- **High SD:** Data points are spread out over a wider range.
- **Symbol:** **σ** (sigma) for a population; **s** for a sample.
- It is the square root of the *variance* ($\sigma^2$).

<CaptionedImage src="kg27h4tz3qbdqek47xpyp8gnkh8dh27w" alt="Normal Distribution Curve" caption="Figure 11.1: A normal curve showing the mean at the center, with standard deviations marking the spread of the data." />

### Formulas for Standard Deviation

| Data Type | Formula | Explanation |
| :--- | :--- | :--- |
| **Population** | $\sigma=\sqrt{\frac{\Sigma(X-\mu)^{2}}{N}}$ | `μ` = Population mean<br />`N` = Total population size |
| **Sample** | $s=\sqrt{\frac{\sum(x-\bar{x})^{2}}{n-1}}$ | `x̄` = Sample mean<br />`n` = Sample size |

## Range

The *range* is the simplest measure of variability. It is the difference between the highest and lowest values in a dataset.

- **Formula:** Range = Maximum Value - Minimum Value
- **Importance in Biology:** Helps understand the extent of variation within a population (e.g., the difference in height between the shortest and tallest plants in an experiment).
- **Limitation:** The range is highly sensitive to outliers, as it only considers the two extreme values.

## Percentile

A *percentile* is a value below which a certain percentage of the data falls. It is used to understand an individual value's rank within a larger dataset.

- *Example:* If a student's height is at the 89th percentile, it means 89% of students in that population are of the same height or shorter.

<CaptionedImage src="kg23w3742ct1yt7knvqkbr6srh8dg1jy" alt="Percentiles and Quartiles" caption="Figure 11.2: A normal distribution curve showing how percentiles and quartiles divide the data." />

### Quartiles

*Quartiles* are specific percentiles that divide a dataset into four equal parts.

- **First Quartile (Q1):** The 25th percentile. 25% of the data is below this value.
- **Second Quartile (Q2):** The 50th percentile. This is also the **median**.
- **Third Quartile (Q3):** The 75th percentile. 75% of the data is below this value.
- **Interquartile Range (IQR):** The difference between Q3 and Q1 (IQR = Q3 - Q1). It represents the spread of the middle 50% of the data and is less affected by outliers than the range.

## Possible Questions and Answers

- **Q:** What is the difference between measures of central tendency and measures of dispersion?
  **A:** Measures of central tendency (mean, median, mode) identify the center or typical value of a dataset. Measures of dispersion (range, standard deviation) describe how spread out the data is.

- **Q:** Why is the median sometimes a better measure of central tendency than the mean?
  **A:** The median is not affected by extreme outliers (abnormally high or low values), whereas the mean can be significantly skewed by them.

- **Q:** What does a standard deviation of zero indicate?
  **A:** A standard deviation of zero means that all values in the dataset are identical; there is no variation or spread.

- **Q:** What is the difference between ungrouped and grouped data?
  **A:** Ungrouped data consists of raw, individual values. Grouped data is organized into class intervals with a frequency count for each interval, which is useful for summarizing large datasets.

## Summary

- Biostatistics uses numerical tools to analyze biological data.
- **Measures of Central Tendency** describe the "average" value:

| Measure | Description | Sensitivity to Outliers |
| :--- | :--- | :--- |
| **Mean** | The arithmetic average (sum of values / count of values). | High |
| **Median** | The middle value in an ordered dataset. | Low |
| **Mode** | The most frequently occurring value. | Low |

- **Measures of Dispersion** describe the "spread" or variability of data:

| Measure | Description | Key Feature |
| :--- | :--- | :--- |
| **Range** | Difference between the highest and lowest value. | Simple but highly sensitive to outliers. |
| **Standard Deviation** | Average amount of deviation from the mean. | The most common measure of spread; low SD means data is close to the mean. |
| **Percentile/Quartile** | Indicates the rank of a value relative to the rest of the data. | Divides data into 100 (percentiles) or 4 (quartiles) parts. |

- **Biological Significance:** These statistical measures are essential for interpreting experimental results, understanding population genetics, analyzing disease prevalence, and making data-driven conclusions in all fields of biology.

---

<!-- note kx71z9kknpy2ydbqbrydyb6hqd85pha9 | topic ms78vp5pa6t2207ry3h7q7typn85qnsk | status published -->
# 11.3 Sketching a Bar Chart for Biological Data

This section outlines the importance and methods for presenting biological data graphically, focusing on the construction of bar charts and pie charts.

## Importance of Graphic Presentation

*Raw biostatistical data* is often recorded in tables, which can be difficult to interpret, especially with large datasets. Graphical representations like diagrams, charts, and graphs are more visually appealing and make it easier to understand the data at a glance. Visual data leaves a more lasting impression and helps to clearly communicate the complete picture and trends within the data. Common methods include *bar charts*, *rectangles*, and *pie charts*.

## Simple Bar Chart

A **simple bar chart** is used to represent a single set of data where each characteristic is shown by a separate bar. It consists of rectangular bars of *equal width*, and the *length (or height)* of each bar is proportional to the magnitude or value it represents. Bars can be drawn vertically (most common) or horizontally, and a simple bar chart represents only one characteristic of the data (e.g., yield per variety, cases per year).

To construct a bar chart, first set up axes by drawing two perpendicular lines on graph paper, a horizontal **X-axis** and a vertical **Y-axis**, intersecting at zero. Next, label the axes: the **X-axis** is labeled with the categories or independent variable (e.g., Cotton Varieties, Years), and the **Y-axis** is labeled with the measured values or dependent variable (e.g., Production in Kgs, Number of Polio Cases), including the units. Then choose a suitable and uniform scale for the Y-axis to represent the range of data values, and plan the bars by deciding on a uniform width for the bars and a uniform gap between them along the X-axis. Calculate and mark the height of each bar according to the chosen scale and draw the rectangles. Finally, give the chart a clear and descriptive title.

A **trend line** is a line (often dotted) drawn across the tops of the bars to show the overall pattern or direction in the data. It helps to quickly identify if there is an *increasing*, *decreasing*, or *constant* trend.

### Example 1: Cotton Production

This bar chart compares the yield of different Bt cotton varieties.

| Cotton Varieties | IR-NIBGE370 | RH-647 | MNH-886 | FH-142 | IUB-2013 | FH-Lalazar |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Production per acre (Kgs) | 800 | 750 | 700 | 650 | 600 | 500 |

<CaptionedImage src="kg28cst0kkyf536g4kpzf1nnfx8ds8ez" alt="Bar chart: Cotton Production of Bt-cotton Varieties per Acre (Kgs) in 2023" caption="Bar chart: Cotton Production of Bt-cotton Varieties per Acre (Kgs) in 2023" />

## Pie Chart

A **pie chart** is a circular graph used to represent data as proportions or percentages of a whole. The entire circle represents the total value (100%), and the circle is divided into sectors (slices) whose angle is proportional to the percentage of the category it represents.

To construct a pie chart, first gather the data by listing the categories and their corresponding values. Calculate the total by summing all values, and for each category, calculate its percentage of the total: `(Category Value / Total Value) × 100`. Convert each percentage into degrees for the circle's sectors: since a full circle is 360°, multiply each percentage by 3.6, `Percentage × 3.6 = Angle in Degrees`. Then draw a circle using a compass, and use a protractor to measure and draw each angle from the center of the circle to divide it into sectors. Finally, label each sector with its category name and percentage, coloring each sector differently to improve clarity.

### Example 2: Polio Prevalence

This pie chart shows the proportion of total polio cases that occurred in each of the last five years.

| Years | 2019 | 2020 | 2021 | 2022 | 2023 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| No. of polio cases | 550 | 350 | 450 | 700 | 600 |
| % of polio cases | 20.76% | 13.21% | 16.98% | 26.42% | 22.64% |

**Pie Chart of Polio Prevalence**
*This chart clearly shows that 2022 had the highest proportion of polio cases in this five-year period.*

## Possible Questions/Answers

- **Q:** Why are graphs and charts preferred over tables for presenting biological data?
    **A:** They are more visually attractive, make large datasets easier to understand, highlight trends and patterns clearly, and leave a more lasting impression on the observer.

- **Q:** What does the length of a bar in a simple bar chart represent?
    **A:** The length or height of the bar represents the magnitude or quantity of the value for the specific category it corresponds to on the X-axis.

- **Q:** How do you calculate the angle for a segment in a pie chart?
    **A:** First, calculate the percentage for the category relative to the total. Then, multiply that percentage by 3.6 to find the corresponding angle in degrees (since 100% = 360°).

- **Q:** What is the purpose of a trend line on a bar chart?
    **A:** A trend line shows the overall direction or pattern in the data, making it easy to see if values are generally increasing, decreasing, or remaining constant across categories.


---

<!-- note kx70h6c6aar6trm0kgzqcjr8xh85q827 | topic ms71k41pp9zdzr2w926yxpft1d85ptj1 | status published -->
# 11.5 Error Bars on Bar Charts

This section outlines the principles of representing data variability using error bars and the fundamental components of designing a valid scientific experiment, including groups and variables.

## 1. Sketching Error Bars on Bar Charts

Error bars are graphical representations of the variability of data and are used on graphs to indicate the error or uncertainty in a reported measurement.

**Purpose:** To show the spread or variability (range or standard deviation) of data points around the mean.

**Procedure:**

1.  **Calculate error values:** Determine the range or standard deviation for each data set.
2.  **Draw bar chart:** Create a bar chart showing the mean value for each category.
3.  **Add error bars:** Draw a vertical line centered on each bar, extending up and down by the calculated error value. Caps are often added to the ends.

**Range-Based Error Bars:**

*   The error bar length is half the range.
*   Formula: $\text{Error bar length} = \frac{\text{Max value} - \text{Min value}}{2}$

**Standard Deviation (SD) Error Bars:**

*   The error bar length is equal to one standard deviation.
*   They extend from the mean by $\pm 1 \text{ SD}$.

**Example Calculation:**

| Category | Data Points          | Mean | Range | Standard Deviation (SD) | Length of Error Bars (±SD) |
| :------- | :------------------- | :--- | :---- | :---------------------- | :------------------------- |
| A        | (10, 12, 15, 11, 13) | 12.2 | 5     | 1.92                    | ±1.92                      |
| B        | (20, 21, 22, 19, 18) | 20.0 | 4     | 1.58                    | ±1.58                      |
| C        | (30, 33, 32, 31, 29) | 31.0 | 4     | 1.58                    | ±1.58                      |

---

## 2. Experimental Design

Designing a valid experiment requires carefully structured groups and clearly defined variables to ensure that the results are reliable and the conclusions are sound.

For drawing the bar chart itself, refer to <InlineNoteTag label="Sketching a Bar Chart" notePath="biology-12/11.3-sketching-a-bar-chart-for-a-given-set-of-biological-data" />.

### Experimental Groups

**Experimental Group:** Also known as the treatment group, this group is exposed to the change or treatment being tested (the independent variable) to observe its effects.
*   Example: In a fertilizer study, the plants that receive the fertilizer are the experimental group.

**Control Group:** This group is kept under normal, unchanged conditions and does not receive the experimental treatment. It serves as a baseline or standard for comparison.
*   Example: In a fertilizer study, the plants that do not receive fertilizer are the control group.

### Variables in Experiments

**Independent Variable:** The factor that the experimenter intentionally changes or manipulates to observe its effect. It is the presumed cause.
*   An experiment should only have one independent variable to ensure that any observed changes in the dependent variable are due to this factor alone.
*   Example: The presence or absence of fertilizer.

**Dependent Variable:** The factor that is measured or observed in response to changes in the independent variable. It is the effect or outcome.
*   Dependent variables should be quantitatively measurable.
*   Example: Plant height, number of leaves, or rate of photosynthesis.

**Controlled Variables:** All other factors that are kept constant for both the experimental and control groups. This ensures a fair test by eliminating other potential influences on the outcome.
*   Also known as constant variables.
*   Example: Amount of sunlight, water, temperature, soil type, and plant species.

---

## 3. Examples of Experimental Design

### Experiment 1: Effect of Light Intensity on Plant Growth

**Objective:** To investigate how different light intensities affect the growth of bean plants.
**Hypothesis:** Plants exposed to higher light intensities will grow more than plants under lower light intensities.
**Variables:**
*   **Independent Variable:** Light intensity (e.g., 100%, 75%, 50%, 25%, 10%).
*   **Dependent Variable:** Plant growth (measured by height in cm and number of leaves).
*   **Controlled Variables:** Type of plant, soil type, amount of water, temperature, pot size.

**Control Group:** The group of plants grown under normal (100%) light intensity.

**Diagram of Setup:**

<CaptionedImage src="kg2abwm4phpcmnmeecqqzzk0j98dhgnd" alt="Light intensity experiment" caption="Figure 1: Setup for testing effect of light intensity on plant growth." />

### Experiment 2: Effect of Water Amount on Plant Growth

**Objective:** To investigate how the amount of water affects the growth of potato plants.
**Hypothesis:** Plants given more water will grow more than plants given less water.
**Variables:**
*   **Independent Variable:** Amount of water per week (e.g., 1000 ml, 800 ml, 600 ml, 400 ml, 200 ml).
*   **Dependent Variable:** Plant growth (measured by height in cm and number of leaves).
*   **Controlled Variables:** Type of plant, soil type, light intensity, temperature, pot size.

**Control Group:** The group of plants receiving 1000 ml of water per week.

### Experiment 3: Effect of pH on Enzyme Activity

**Objective:** To examine how pH affects the activity of the enzyme catalase.
**Hypothesis:** Catalase activity will be highest at a neutral pH (pH 7).
**Variables:**
*   **Independent Variable:** pH level (e.g., pH 4, pH 7, pH 10).
*   **Dependent Variable:** Enzyme activity (measured by the rate of gas production).
*   **Controlled Variables:** Amount of catalase, amount of hydrogen peroxide, temperature.

**Control Group:** The reaction conducted at a neutral pH of 7.