<!-- note kx72p1553f6zp8px9qkeknk1ps85pns2 | topic ms7800wznq3gexrmb27m2g3wk985phd5 | status published -->
# Derived Units

## Formation of Derived Units

Derived units are units of measurement formed by combining the seven base units of the International System of Units (SI). These combinations, created through multiplication or division, allow for the measurement of a vast array of physical quantities. Unlike base units, derived units are dependent on the definitions of these base units.

### Definition

Derived units are combinations of the seven fundamental SI base units. They are used to measure quantities that are not base quantities, such as velocity, force, and energy.

### Formation

Derived units are created by mathematically manipulating base units through multiplication and division. For instance, the unit for speed, metres per second ($\text{m}\cdot\text{s}^{-1}$), is derived from the base unit for length (metre) and time (second).

### Coherent vs. Non-Coherent Units

**Coherent derived units** are products of powers of base units without any numerical factor other than one. An example is the unit of velocity, metres per second ($\text{m}\cdot\text{s}^{-1}$).

**Non-coherent units** are formed when prefixes are used with coherent units, introducing a numerical factor. For example, kilometres per hour ($\text{km}\cdot\text{h}^{-1}$) introduces a factor of $\frac{1000}{3600}$.

## Examples of Derived Units

Many derived units have been given special names and symbols. The table below details some common examples:

| Derived Quantity | Special Name | Symbol | Formula | Expression in SI Base Units |
| :--- | :--- | :--- | :--- | :--- |
| Frequency | Hertz | Hz | $1/\text{s}$ | $\text{s}^{-1}$ |
| Force | Newton | N | mass $\times$ acceleration | $\text{kg}\cdot\text{m}\cdot\text{s}^{-2}$ |
| Pressure | Pascal | Pa | force/area | $\text{kg}\cdot\text{m}^{-1}\cdot\text{s}^{-2}$ |
| Energy, Work | Joule | J | force $\times$ distance | $\text{kg}\cdot\text{m}^{2}\cdot\text{s}^{-2}$ |
| Power | Watt | W | energy/time | $\text{kg}\cdot\text{m}^{2}\cdot\text{s}^{-3}$ |
| Electric Charge | Coulomb | C | current $\times$ time | $\text{s}\cdot\text{A}$ |
| Electric Potential | Volt | V | power/current | $\text{kg}\cdot\text{m}^{2}\cdot\text{s}^{-3}\cdot\text{A}^{-1}$ |
| Electric Resistance | Ohm | $\Omega$ | voltage/current | $\text{kg}\cdot\text{m}^{2}\cdot\text{s}^{-3}\cdot\text{A}^{-2}$ |

<WorkedExample title="Worked example">



</WorkedExample>


**Q:** How is the unit of force (newton) derived from SI base units?

**A:** According to Newton's second law, $F = ma$. The SI unit of mass is the kilogram (kg) and the unit of acceleration is metres per second squared ($\text{m}\cdot\text{s}^{-2}$). Therefore:
$$1\,\text{N} = 1\,\text{kg}\cdot\text{m}\cdot\text{s}^{-2}$$

<WorkedExample title="Worked example">



</WorkedExample>


**Q:** How is the unit of pressure (pascal) expressed in SI base units?

**A:** Pressure = Force / Area. Force has units $\text{kg}\cdot\text{m}\cdot\text{s}^{-2}$ and area has units $\text{m}^{2}$. Therefore:
$$1\,\text{Pa} = \frac{\text{kg}\cdot\text{m}\cdot\text{s}^{-2}}{\text{m}^{2}} = \text{kg}\cdot\text{m}^{-1}\cdot\text{s}^{-2}$$

<WorkedExample title="Worked example">



</WorkedExample>


**Q:** Express the joule (J) in terms of SI base units.

**A:** Work = Force $\times$ Distance. Force = $\text{kg}\cdot\text{m}\cdot\text{s}^{-2}$; Distance = m. Therefore:
$$1\,\text{J} = \text{kg}\cdot\text{m}\cdot\text{s}^{-2} \times \text{m} = \text{kg}\cdot\text{m}^{2}\cdot\text{s}^{-2}$$

## Key Points

- Derived units are created by combining the seven SI base units through multiplication or division.
- They are essential for measuring a wide range of physical quantities like force, energy, and pressure.
- Many derived units have special names, such as the newton (N) for force and the joule (J) for energy.
- Understanding derived units is fundamental to applying physical principles and ensuring consistency in scientific measurements.
- Derived units can be expressed in terms of <InlineNoteTag label="Dimensions" notePath="physics-11/dimensions" /> of base quantities.

---

<!-- note kx7ag2x44779vpqqkm4bbe5mgn85q5rg | topic ms7192nfwc7retd7jf5qnh8hxd85p3mx | status published -->
# Dimensions of Physical Quantities

## Meaning of Dimension

**Dimension** refers to the fundamental nature of a physical quantity, independent of the specific units used to measure it. For example, physical quantities like length, width, and radius all share the same dimension of **length**, represented as $[L]$. Dimensional analysis is a tool in physics used to check the validity of equations and understand the relationships between different physical quantities.
## Base Quantities and Their Dimensions

The International System of Units (SI) defines seven base quantities. A **dimension symbol** describes the physical nature of a quantity, whereas a **unit symbol** identifies the agreed unit used to measure it. They must not be interchanged.

| **Base Quantity** | **Dimension Symbol** | **SI Base Unit** | **Unit Symbol** |
| :--- | :--- | :--- | :--- |
| Mass | $[M]$ | kilogram | kg |
| Length | $[L]$ | metre | m |
| Time | $[T]$ | second | s |
| Electric current | $[I]$ | ampere | A |
| Thermodynamic temperature | $[\Theta]$ | kelvin | K |
| Luminous intensity | $[J]$ | candela | cd |
| Amount of substance | $[N]$ | mole | mol |

<InlineNoteTag label="Supplementary Units" notePath="physics-11/supplementary-units" />
## Derived Quantities and Their Dimensions

Derived quantities are formed by combining base quantities through multiplication or division. Their dimensions are expressed as products of the base dimensions raised to certain powers.

<InlineNoteTag label="Derived Units" notePath="physics-11/derived-units" />

| **Derived Quantity** | **Formula** | **Dimensional Formula** |
| :--- | :--- | :--- |
| Area | Length × Width | $[L^2]$ |
| Volume | Length × Width × Height | $[L^3]$ |
| Velocity | Displacement / Time | $[LT^{-1}]$ |
| Acceleration | Velocity / Time | $[LT^{-2}]$ |
| Force | Mass × Acceleration | $[MLT^{-2}]$ |
| Work/Energy | Force × Displacement | $[ML^2T^{-2}]$ |
| Power | Work / Time | $[ML^2T^{-3}]$ |
| Pressure | Force / Area | $[ML^{-1}T^{-2}]$ |

## Types of Physical Quantities

Based on their dimensional properties, physical quantities are categorized into four types:

- **Dimensional Variables**: Quantities that possess dimensions and have variable magnitudes, such as velocity, force, and acceleration.
- **Dimensional Constants**: Quantities with dimensions but a constant value, such as the Gravitational constant ($G$), Planck's constant ($h$), and the speed of light in a vacuum ($c$).
- **Dimensionless Variables**: Quantities that lack dimensions but have variable values, such as angle, strain, and the coefficient of friction.
- **Dimensionless Constants**: Quantities that have no dimensions and a fixed value, such as pure numbers (1, 2, 3) and mathematical constants like $\pi$ and $e$.

## Applications of Dimensional Analysis

### Checking the Homogeneity of an Equation

The **Principle of Homogeneity** states that for an equation to be physically correct, the dimensions of all the terms on both sides must be the same.

**Example**: Consider the equation of motion, $s = v_i t + \frac{1}{2}at^2$.

- Dimensions of displacement ($s$): $[L]$
- Dimensions of initial velocity × time ($v_i t$): $[LT^{-1}] \times [T] = [L]$
- Dimensions of $\frac{1}{2} \times$ acceleration $\times$ time$^2$ ($\frac{1}{2}at^2$): $[LT^{-2}] \times [T^2] = [L]$

Since all terms have the dimension of length $[L]$, the equation is dimensionally consistent.

### Deriving Relationships Between Physical Quantities

Dimensional analysis can be used to deduce the relationship between different physical quantities.

**Example**: To derive the formula for the period ($T$) of a simple pendulum, assume it depends on its mass ($m$), length ($l$), and the acceleration due to gravity ($g$). Let the relationship be:

$$T \propto m^a l^b g^c$$

Substituting the dimensions:

$$[T] = [M]^a [L]^b [LT^{-2}]^c$$

Equating the powers of M, L, and T:

- For M: $0 = a$
- For L: $0 = b + c$
- For T: $1 = -2c$

Solving gives: $a = 0$, $c = -\frac{1}{2}$, $b = \frac{1}{2}$

Therefore:

$$T \propto \sqrt{\frac{l}{g}}$$

This result shows that the period of a simple pendulum is **independent of its mass** ($a = 0$).

## Limitations of Dimensional Analysis

1. Dimensional analysis cannot determine the value of dimensionless constants (such as 1, 2, $\pi$, or the constant $k$ in the pendulum formula).
2. It cannot derive formulas that involve trigonometric or exponential functions.
3. It cannot distinguish between physical quantities that share the same dimensions, such as work and torque (both have dimensions $[ML^2T^{-2}]$).

---

<!-- note kx7ba7fcms2e9b0b4g3yw1hbgn85qag5 | topic ms79j96jaqjgz1765sb53j26c585p9e0 | status published -->
# Errors and Uncertainties in Measurement

## Sources of Measurement Uncertainty

Every physical measurement in science contains some degree of uncertainty. It is practically impossible to obtain a perfect measurement because errors can arise from various sources, including instrumental limitations, environmental fluctuations, and human procedural inconsistencies. Understanding the nature of these errors is fundamental to achieving reliable and accurate scientific results.

## Errors in Measurement

Errors in measurement are broadly categorized into two main types, each with distinct causes and characteristics.

### 1. Random Error

**Definition**: Random error causes repeated measurements of the same quantity to be slightly different from one another. These errors are unpredictable and result in a scattering of results around a central value.

**Causes**:
- Unpredictable fluctuations in experimental conditions such as temperature and pressure.
- Inherent limitations in the precision of the measuring instrument.
- Minor inconsistencies in the observer's judgment when reading a scale.

**Characteristics**:
- They are inconsistent and unpredictable.
- They can cause measurements to be either higher or lower than the true value.
- The effect of random errors can be minimized by taking multiple readings and calculating their average.

***Example***: Measuring the time for a pendulum to complete one swing multiple times might yield slightly different results such as 2.1 s, 2.3 s, and 2.2 s. These variations are due to random errors.

### 2. Systematic Error

**Definition**: Systematic error is a consistent, repeatable error that affects every measurement in the same way, causing all readings to be shifted in one direction from the true value.

**Causes**:
- **Instrumental errors**: A poorly calibrated instrument or a zero error (when an instrument does not read zero at the starting point).
- **Procedural errors**: An incorrect method or experimental technique being used consistently.
- **Personal errors**: A consistent bias in the observer's reading of the instrument.

**Characteristics**:
- They are predictable and consistent.
- They always shift the measurement in the same direction, either always higher or always lower.
- They cannot be reduced by averaging multiple readings but can be corrected if the error is identified and quantified.

***Example***: If a weighing scale is incorrectly calibrated and always reads 0.1 kg heavier than the actual mass, every measurement taken with it will have a systematic error of +0.1 kg.

### Comparison of Error Types

| **Feature** | **Random Error** | **Systematic Error** |
| :--- | :--- | :--- |
| **Nature** | Unpredictable and fluctuating | Consistent and repeatable |
| **Direction** | Can be positive or negative | Always in one direction (positive or negative) |
| **Cause** | Uncontrolled variables, precision limits | Faulty equipment, flawed procedure |
| **Reduction** | Averaging multiple measurements | Instrument calibration, procedural correction |

## Uncertainties in Final Result

When calculations use measured values, their uncertainties must be combined in a form appropriate to the operation.

- **Absolute uncertainty:** If $x=x_0\pm\Delta x$, then $\Delta x$ is the absolute uncertainty and has the same unit as $x$.
- **Fractional uncertainty:** $\Delta x/x$.
- **Percentage uncertainty:** $(\Delta x/x)\times100\%$.

<InlineNoteTag label="Assessment of Total Uncertainty in the Final Result" notePath="physics-11/uncertainties-in-final-result" />

### Addition and Subtraction

For sums or differences, add the **absolute uncertainties**:

$$Q=A\pm B \quad\Rightarrow\quad \Delta Q=\Delta A+\Delta B$$

### Multiplication and Division

For products or quotients, add the **fractional uncertainties**. Equivalently, add their percentage uncertainties:

$$\frac{\Delta Q}{Q}=\frac{\Delta A}{A}+\frac{\Delta B}{B}$$

$$\%\text{ uncertainty in }Q=\%\text{ uncertainty in }A+\%\text{ uncertainty in }B$$

### Powers

If $Q=x^n$, multiply the fractional or percentage uncertainty in $x$ by the magnitude of the power:

$$\frac{\Delta Q}{Q}=|n|\frac{\Delta x}{x}$$

$$\%\text{ uncertainty in }Q=|n|\times\%\text{ uncertainty in }x$$


---

<!-- note kx76fgs24kdxez99veevc0q9f985qwsv | topic ms7ehfj65g23wggwvgx1z0fnms85qa3c | status published -->
# Estimation of Physical Quantities

## Purpose of Physical Estimation

Estimation is the process of making a reasoned, approximate calculation of a physical quantity. It is not about finding the exact answer but rather a "good enough" value based on logical reasoning, prior knowledge, and simplified assumptions. This skill is crucial in both everyday life and scientific research for quickly assessing the feasibility or scale of a problem.
## Breaking Down Large Problems

This strategy involves dividing a large, complex quantity into smaller, more easily estimable units.

**Example: Estimating the Height of a Building**

1. Count the number of floors in the building.
2. Estimate the height of a single floor (for example, approximately 3 metres).
3. Multiply the number of floors by the estimated height per floor.

**Example: Estimating the Thickness of a Sheet of Paper**

1. Measure the total thickness of a ream of paper, such as 500 sheets.
2. Divide the total thickness by the number of sheets.
## Using Geometric Models for Areas and Volumes

Complex shapes can be approximated by simpler geometric forms (like spheres, cubes, or cylinders) to estimate their area or volume.

**Example: Estimating the Volume of a Room**

1. Approximate the room as a rectangular box.
2. Estimate its length, width, and height.
3. Calculate the volume using the formula: $V = L \times W \times H$

## Estimating Mass from Volume and Density

Once the volume of an object is estimated, its mass can be approximated using the relationship:

$$\text{Mass} = \text{Density} \times \text{Volume}$$

<InlineNoteTag label="Derived Units" notePath="physics-11/derived-units" />

It is helpful to remember the approximate densities of common substances:

| Substance | Approximate Density (kg/m³) |
| :--- | :--- |
| Air | 1 |
| Water | 1,000 ($10^3$) |
| Common Solids (Rock, Metal) | 2,000 – 8,000 (up to $10^4$) |

## Order of Magnitude Estimation

Estimation often involves thinking in terms of powers of 10, or "orders of magnitude."

The following table shows the vast range of scales for fundamental quantities in the universe.

| Scale | Length (m) | Mass (kg) | Time (s) |
| :--- | :--- | :--- | :--- |
| **Microscopic** | Diameter of proton: $10^{-15}$ | Mass of electron: $10^{-30}$ | Lifetime of unstable nucleus: $10^{-22}$ |
| | Diameter of H atom: $10^{-10}$ | Mass of bacterium: $10^{-15}$ | Period of visible light: $10^{-15}$ |
| **Human Scale** | Fingernail width: $10^{-2}$ | Mass of hummingbird: $10^{-2}$ | Nerve impulse period: $10^{-3}$ |
| | Child's height: $10^{0}$ | Mass of 1 liter water: $10^{0}$ | One heartbeat: $10^{0}$ |
| **Macroscopic** | Football field length: $10^{2}$ | Mass of a motorcycle: $10^{2}$ | One day: $10^{5}$ |
| | Earth's diameter: $10^{7}$ | Mass of the Moon: $10^{22}$ | One year: $10^{7}$ |
| **Astronomical** | Milky Way diameter: $10^{21}$ | Mass of the Sun: $10^{30}$ | Age of the universe: $10^{18}$ |

<InlineNoteTag label="Significant Figures" notePath="physics-11/significant-figures" />

---

<!-- note kx7ftdabrkfat51e81e4xpyv2h85pppm | topic ms7ccf71d4fk9nxsafnky7c6wd85qme4 | status published -->
# Precision vs. Accuracy in Measurement

## Understanding Accuracy and Precision

In the context of scientific measurement, **precision** and **accuracy** are two fundamental concepts that describe the quality of data. While often used interchangeably in everyday language, they have distinct meanings. Understanding this difference is crucial for interpreting experimental results and minimizing errors.

## Precision

* **Definition**: Precision refers to the **consistency and reproducibility** of a measurement. It describes how close a series of measurements of the same quantity are to one another.
* **Indicator of Random Error**: High precision indicates low random error. If repeated measurements are tightly clustered, the random error is small.
* **Relationship to Instrument**: Precision is often determined by the limitations of the measuring instrument, specifically its **least count** (the smallest value it can measure).
  * *A smaller least count leads to higher precision.* For example, a ruler with millimeter markings (least count = 1 mm) is more precise than one with only centimeter markings (least count = 1 cm).

* **Significant Figures**: The number of <InlineNoteTag label="Significant Figures" notePath="physics-11/significant-figures" /> in a measurement reflects its precision. More significant figures imply a more precise measurement (e.g., 5.432 g is more precise than 5.4 g).

**Example of Precision**:
An archer shoots three arrows that all land very close to each other, but far from the bullseye. This is a display of high precision but low accuracy. In measurements, values like 15.81 g, 15.82 g, and 15.81 g are highly precise.

## Accuracy

* **Definition**: Accuracy refers to how close a measured value is to the **true or accepted value**.
* **Indicator of Systematic Error**: High accuracy indicates low systematic error. If a measurement is accurate, it means there is no significant consistent bias pulling the result away from the true value.
* **Verification**: Accuracy can only be determined if the true value is known or accepted.

**Example of Accuracy**:
An archer shoots an arrow that lands directly in the center of the bullseye. This is an accurate shot. If the true mass of an object is 20.00 g, a measurement of 20.01 g is highly accurate.

## Visualizing the Difference

The classic analogy of a target helps illustrate the distinction:

| | **High Accuracy** | **Low Accuracy** |
| :--- | :--- | :--- |
| **High Precision** | *All shots are tightly clustered on the bullseye.* | *All shots are tightly clustered but off-center.* |
| **Low Precision** | *Shots are scattered, but their average is on the bullseye.* | *Shots are scattered and not centered on the bullseye.* |

## Precision vs. Accuracy: Error Types

| **Aspect** | **Precision** | **Accuracy** |
| :--- | :--- | :--- |
| **Definition** | How closely repeated measurements agree with one another. | How close a measured result is to the accepted or true value. |
| **Main error relationship** | Reduced by controlling random error and using adequate resolution. | Reduced by identifying and correcting systematic error. |
| **How it is assessed** | Repeatability, spread, instrument resolution, and stated absolute or relative uncertainty. | Comparison with a reliable accepted value or calibrated standard. |

A small uncertainty does **not** by itself prove accuracy. An instrument with a zero or calibration error can give tightly clustered results with small stated uncertainty that are all displaced from the accepted value.
## Quantifying Uncertainty

All measurements contain **some degree of uncertainty**, an unavoidable feature of measurement rather than a sign of poor technique. Sources include the finite resolution of an instrument, random environmental and observational variation, and possible disturbance of the quantity during measurement.

- **Absolute uncertainty** has the same unit as the measured quantity. In $x=(25.5\pm0.1)\,\text{cm}$, the absolute uncertainty is $0.1\,\text{cm}$.
- **Fractional or relative uncertainty** is the ratio $\Delta x/x$.
- **Percentage uncertainty** is the relative uncertainty expressed as a percentage:

$$\text{Percentage uncertainty}=\frac{\text{absolute uncertainty}}{\text{measured value}}\times100\%$$

For $25.5\pm0.1\,\text{cm}$, the percentage uncertainty is

$$\frac{0.1}{25.5}\times100\%\approx0.39\%$$

Smaller absolute or percentage uncertainty means the result is stated with greater precision. It does **not** by itself establish accuracy, because a systematic calibration or zero error can shift every reading away from the accepted value without increasing the stated uncertainty. Accuracy must be judged by comparison with a reliable accepted value or standard.

For propagation rules, see <InlineNoteTag label="Assessment of Total Uncertainty in the Final Result" notePath="physics-11/uncertainties-in-final-result" />.


---

<!-- note kx703rqn5z53gzvpm9jxngpq8d85pmt8 | topic ms781cx68qsfztfvtq2g5662cd85qtv1 | status published -->
# Significant Figures

## Meaning of Significant Figures

In scientific measurements, **significant figures** are the digits that carry meaningful information about the precision of the measurement. They include all the digits that are known with certainty, plus the first digit that is estimated or uncertain. Using the correct number of significant figures is crucial for honestly representing the precision of data.
## Rules for Identifying Significant Figures

Determining which digits in a number are significant follows a set of established rules:

| Rule | Explanation | Example | Significant Figures |
| :--- | :--- | :--- | :--- |
| **1. Non-zero digits** | All non-zero digits are significant. | 12.34 | 4 |
| **2. Captive zeros** | Zeros between non-zero digits are significant. | 506 | 3 |
| **3. Leading zeros** | Zeros before the first non-zero digit are placeholders and are not significant. | 0.00578 | 3 |
| **4. Trailing zeros with a decimal point** | Trailing zeros in a decimal number are significant because they state the measurement's precision. | 9.100 | 4 |
| **5. Trailing zeros without a decimal point** | Trailing zeros in a whole number without a decimal point are ambiguous. Use scientific notation to state the intended precision. | 3500 | Ambiguous: 2, 3, or 4 |
| **6. Scientific notation** | Every digit in the coefficient is significant. | $3.50\times10^3$ | 3 |

> **Tip:** Scientific notation removes ambiguity. $3.5\times10^3$ has two significant figures, while $3.500\times10^3$ has four.
## Significant Figures in Calculations

The precision of a calculated result is limited by the least precise measurement used. Different rules apply for different mathematical operations. See also <InlineNoteTag label="Uncertainties In Final Result" notePath="physics-11/uncertainties-in-final-result" /> for how uncertainty propagates in calculations.

### A) Multiplication and Division

**Rule**: The result should be rounded to the same number of **significant figures** as the measurement with the *least* number of significant figures.

**Example**:

Calculate the area of a rectangle with a length of 21.3 cm and a width of 9.8 cm.

$$21.3 \text{ cm} \; (3 \text{ sig figs}) \times 9.8 \text{ cm} \; (2 \text{ sig figs}) = 208.74 \text{ cm}^2$$

Since the least precise measurement (9.8 cm) has only **two** significant figures, the answer must be rounded to two significant figures.

**Final Answer**: $2.1 \times 10^2 \text{ cm}^2$ (or 210 cm²)

### B) Addition and Subtraction

**Rule**: The result should be rounded to the same number of **decimal places** as the measurement with the *least* number of decimal places.

**Example**:

Add the following masses: 12.11 g, 3.6 g, and 0.254 g.

```
  12.11   (2 decimal places)
+  3.6    (1 decimal place)
+  0.254  (3 decimal places)
-------
  15.964 g
```

The least precise measurement (3.6 g) has only **one** decimal place. Therefore, the answer must be rounded to one decimal place.

**Final Answer**: 16.0 g

## Special Cases

### Exact Numbers
Exact numbers (counting numbers or defined constants, e.g., 1 dozen = 12, or the 2 in $2\pi r$) are considered to have an **infinite** number of significant figures. They do **not** limit the significant figures in a calculated result.

### Why Leading Zeros Are Not Significant
Leading zeros are placeholders that indicate the magnitude of the number (i.e., where the decimal point is). They do not add to the precision of the measurement. For example, $0.005$ m is the same as $5$ mm, and both have **one** significant figure.
## Summary

- Significant figures are the meaningful digits in a measurement that indicate its **precision**.
- Following the rules for identifying and using significant figures in calculations ensures that the precision of a result is not misrepresented.

| Operation | Rule |
| :--- | :--- |
| **Multiplication / Division** | Result is limited by the measurement with the **least number of significant figures**. |
| **Addition / Subtraction** | Result is limited by the measurement with the **least number of decimal places**. |

Proper use of significant figures is a fundamental aspect of scientific integrity, as it reflects a commitment to accurate and honest reporting of data. See also <InlineNoteTag label="Precision And Accuracy" notePath="physics-11/precision-and-accuracy" /> for related concepts on measurement quality.

---

<!-- note kx71a1m9wbacgarv0gfht4jd3s85qfdh | topic ms79z5r4trgny7d8n5hk12jpx985qyj4 | status published -->
# Supplementary Units in the SI System

## Role of Supplementary Units

In the International System of Units (SI), physical quantities are described using a set of fundamental (or base) units and derived units. Historically, a third category known as "supplementary units" existed to define geometrical quantities, specifically plane and solid angles. While this classification has been officially updated, the units themselves remain essential in science and engineering.
## Prerequisites

- An understanding of fundamental units (e.g., meter, kilogram, second).
- Familiarity with derived units, which are combinations of base units (e.g., newton, joule). For more on derived units, see <InlineNoteTag label="Derived Units" notePath="physics-11/derived-units" />.

## Definition and Current Status

The radian and steradian were formerly placed in a distinct SI class called **supplementary units**. In 1995, Resolution 8 of the 20th **General Conference on Weights and Measures (CGPM)** eliminated that separate class and interpreted the radian and steradian as **dimensionless derived units**.

They are dimensionless because each is a ratio of like geometrical quantities: arc length divided by radius for a radian, and surface area divided by radius squared for a steradian. Their special names and symbols, rad and sr, remain useful and should be retained when stating angular quantities. For more on dimensional analysis, see <InlineNoteTag label="Dimensions" notePath="physics-11/dimensions" />.
## The SI Supplementary Units

Despite their reclassification, the radian and steradian are unique and crucial for measuring angles.

### 1. Radian (rad)

**Physical Quantity**: Plane Angle

**Definition**: One radian is the angle at the center of a circle subtended by an arc that is equal in length to the radius of the circle.

**Relationship to Degrees**: A full circle contains $2\pi$ radians, which is equivalent to 360 degrees. Therefore, 1 radian is approximately 57.3 degrees.

**Formula**: The angle in radians ($\theta$) is the ratio of the arc length ($s$) to the radius ($r$):
$$
\theta = \frac{s}{r}
$$

### 2. Steradian (sr)

**Physical Quantity**: Solid Angle (three-dimensional angle)

**Definition**: One steradian is the solid angle subtended at the center of a sphere by a portion of the surface that has an area equal to the square of the sphere's radius.

**Relationship to a Full Sphere**: A complete sphere subtends a solid angle of $4\pi$ steradians at its center.

**Formula**: The solid angle in steradians ($\Omega$) is the ratio of the subtended surface area ($A$) to the square of the radius ($r^2$):
$$
\Omega = \frac{A}{r^2}
$$

## Examples

1. **Radian Example**: In a circle with a radius of 5 meters, an arc with a length of 5 meters will subtend an angle of exactly 1 radian at the center.

2. **Steradian Example**: On a sphere with a radius of 3 meters, a patch of the surface with an area of 9 m² (which is $3^2$ m²) will subtend a solid angle of 1 steradian at the sphere's center.

| **Unit** | **Symbol** | **Measures** | **Definition** |
| :--- | :--- | :--- | :--- |
| Radian | rad | Plane Angle | The angle where arc length equals radius ($s/r$). |
| Steradian | sr | Solid Angle | The solid angle where surface area equals radius squared ($A/r^2$). |

---

<!-- note kx71zn6vkvbdhf0hkrdkw8jfv585qg46 | topic ms7csq1hz3th69rp0qzq3qge7185pkjn | status published -->
# Assessment of Total Uncertainty in the Final Result

When physical measurements are used in calculations, their individual uncertainties combine and carry through to the final result. Understanding how to calculate this "propagated" uncertainty is essential for determining the reliability of any calculated quantity. The rules for propagating uncertainty depend on the mathematical operations being performed.

<InlineNoteTag label="Precision And Accuracy" notePath="physics-11/precision-and-accuracy" />

## 1. Uncertainty in Sums and Differences

**Rule**: For addition and subtraction, the **absolute uncertainties** are always added.

### Formula for Sums and Differences
If $x = A \pm B$, then the absolute uncertainty $\Delta x$ is:
$$\Delta x = \Delta A + \Delta B$$
The final result is expressed as $x \pm (\Delta A + \Delta B)$.

**Explanation**: Whether you are adding or subtracting the measurements, the potential for error from each measurement contributes to the total uncertainty. You add the uncertainties because the error from one measurement could be in the opposite direction to the error in the other, creating the maximum possible error in the final result.

### Example: Subtraction
Let the initial length be $L_1 = 15.5 \pm 0.2$ cm and the final length be $L_2 = 12.0 \pm 0.3$ cm. The change in length is:
$$\Delta L = L_1 - L_2 = (15.5 - 12.0) \text{ cm} = 3.5 \text{ cm}$$
The uncertainty is the sum of the absolute uncertainties:
$$\text{Uncertainty} = 0.2 \text{ cm} + 0.3 \text{ cm} = 0.5 \text{ cm}$$
**Result**: The change in length is **3.5 ± 0.5 cm**.

### Example: Addition
Two masses, $m_1 = 5.0 \pm 0.1$ kg and $m_2 = 2.5 \pm 0.1$ kg, are added together. The total mass is:
$$M = m_1 + m_2 = (5.0 + 2.5) \text{ kg} = 7.5 \text{ kg}$$
The uncertainty is the sum of the absolute uncertainties:
$$\text{Uncertainty} = 0.1 \text{ kg} + 0.1 \text{ kg} = 0.2 \text{ kg}$$
**Result**: The total mass is **7.5 ± 0.2 kg**.

## 2. Uncertainty in Products and Quotients

**Rule**: For multiplication and division, the **percentage (or fractional) uncertainties** are added.

### Formula for Products and Quotients
If $x = A \times B$ or $x = A / B$, then the percentage uncertainty in $x$ is:
$$\% \text{ Uncertainty in } x = \% \text{ Uncertainty in } A + \% \text{ Uncertainty in } B$$
Where the percentage uncertainty for a quantity is calculated as:
$$\% \text{ Uncertainty} = \frac{\text{Absolute Uncertainty}}{\text{Measured Value}} \times 100\%$$

### Example: Multiplication
Let's find the area of a rectangle with length $L = 5.0 \pm 0.1$ cm and width $W = 2.0 \pm 0.1$ cm.
1. **Calculate the Area**:
   $$A = L \times W = 5.0 \text{ cm} \times 2.0 \text{ cm} = 10.0 \text{ cm}^2$$
2. **Calculate Percentage Uncertainties**:
   $$\% \text{ Uncertainty in } L = \frac{0.1}{5.0} \times 100\% = 2\%$$
   $$\% \text{ Uncertainty in } W = \frac{0.1}{2.0} \times 100\% = 5\%$$
3. **Add Percentage Uncertainties**:
   $$\% \text{ Uncertainty in } A = 2\% + 5\% = 7\%$$
4. **Calculate Absolute Uncertainty in Area**:
   $$\Delta A = 7\% \text{ of } 10.0 \text{ cm}^2 = 0.07 \times 10.0 = 0.7 \text{ cm}^2$$
**Result**: The area is **10.0 ± 0.7 cm²**.

## 3. Uncertainty in a Power

**Rule:** If a measured quantity is raised to a power, multiply its fractional or percentage uncertainty by the **magnitude** of that power.

If $Q=A^n$, then

$$\frac{\Delta Q}{Q}=|n|\frac{\Delta A}{A}$$

$$\%\text{ uncertainty in }Q=|n|\times\%\text{ uncertainty in }A$$

### Example: Volume of a Sphere

For $V=\frac{4}{3}\pi r^3$, the exact factors $4/3$ and $\pi$ introduce no uncertainty. Let $r=(2.25\pm0.01)\,\text{cm}$.

1. $V=\frac{4}{3}\pi(2.25)^3\approx47.7\,\text{cm}^3$.
2. $\%\Delta r=(0.01/2.25)\times100\%\approx0.44\%$.
3. $\%\Delta V=3\times0.44\%=1.32\%$.
4. $\Delta V=0.0132\times47.7\approx0.63\,\text{cm}^3$.

Report the uncertainty to a sensible precision: $V=(47.7\pm0.6)\,\text{cm}^3$.
## 4. Uncertainty in Average Value

To find the uncertainty in the average value of several measurements:
1. Find the average value.
2. Find the deviation of each value from the average.
3. The mean deviation is the uncertainty.

## 5. Uncertainty in Timing Experiments

Instead of timing one rapid oscillation, measure the total time $t$ for an exact count of $N$ oscillations and calculate

$$T=\frac{t}{N}$$

If the uncertainty in the total timed interval is $\Delta t$, then

$$\Delta T=\frac{\Delta t}{N}$$

When instrument resolution is the dominant limitation, $\Delta t$ may be estimated from the stopwatch least count. In a manually operated experiment, reaction time or the spread in repeated total-time readings can be larger and must be included in $\Delta t$. Timing many oscillations reduces the uncertainty per period.
## Summary

| **Operation** | **Rule for Propagating Uncertainty** |
| :--- | :--- |
| **Addition / Subtraction** | Add the **absolute uncertainties**. |
| **Multiplication / Division** | Add the **percentage uncertainties**. |
| **Power ($A^n$)** | Multiply the **percentage uncertainty** by the power $n$. |
| **Average Value** | Use the **mean deviation** from the average. |
| **Timing Experiment** | Divide **least count** by number of vibrations. |

These rules are fundamental for correctly stating the results of experiments, ensuring that the final calculated value reflects the precision of the original measurements.
