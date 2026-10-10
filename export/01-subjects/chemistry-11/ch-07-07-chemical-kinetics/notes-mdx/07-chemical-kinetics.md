<!-- note kx7aj76yf0ccq3jyztsy1t2b1d85pmb4 | topic ms752d7esdeym648gfycdm78yx85qe4v | status published -->
# 7.1 Rates of Reactions

The rate of a chemical reaction is defined as the change in the concentration of reactants or products per unit of time. It measures how quickly a reaction proceeds.

### Mathematical Definition

The rate of reaction can be expressed mathematically as:

$$
\text{Rate} = \frac{\text{Change in concentration of a substance}}{\text{Time taken for change}}
$$

- The concentration of **reactants** decreases over time.
- The concentration of **products** increases over time.

Therefore, the rate of a reaction can be defined in two ways:

1. The decrease in the concentration of reactants per unit time.
2. The increase in the concentration of products per unit time.

The standard unit for reaction rate is mole per cubic decimeter per second ($mol \cdot dm^{-3} \cdot s^{-1}$).

### Graphical Representation

For a general reaction where a reactant **A** is converted into a product **B**:

$$A \rightarrow B$$

The change in concentration of reactants and products over time can be visualized graphically.

<CaptionedImage src="/content/assets/class-11/chemistry/Pasted image 20251010202410.webp" alt="Concentration vs Time Graph" caption="Figure 7.1: Change in concentration of reactants and products with the passage of time." />

### Instantaneous Rate of Reaction

For very small changes in concentration ($dx$) over a very small time interval ($dt$), the instantaneous rate of reaction is expressed as:

$$
\text{Rate of reaction} = \frac{dx}{dt}
$$

Considering the reaction $A \rightarrow B$:

- The rate can be expressed as the rate of disappearance of reactant A.
- The rate can also be expressed as the rate of appearance of product B.

$$
\frac{dx}{dt} = -\frac{d[A]}{dt}
$$

$$
\frac{dx}{dt} = +\frac{d[B]}{dt}
$$

- Where $d[A]$ and $d[B]$ are the changes in the concentration of A and B.
- The negative sign indicates a decrease in the concentration of the reactant A.
- The positive sign indicates an increase in the concentration of the product B.

This rate expression is fundamental to the study of chemical kinetics and the determination of reaction orders.

### Worked Example 7.1

**Problem:** Determine the average rate of the following reaction, $A + B \rightarrow C$, using the experimental data provided.

The concentration of product C was measured at different time intervals as follows:

| Sr. No. | Time (s) | Concentration of C ($mol \cdot dm^{-3}$) |
|:-------:|:--------:|:---------------------------------------:|
|    1    |    0.0   |                   0.0                   |
|    2    |    10    |                   0.20                  |
|    3    |    20    |                   0.38                  |
|    4    |    30    |                   0.45                  |
|    5    |    40    |                   0.60                  |

**Solution:** Calculate the rate of reaction between the time intervals of **0.0 seconds** and **20 seconds**.

1. **Calculate the change in time ($dt$):**
$$dt = \text{Final time} - \text{Initial time}$$
$$dt = 20\,s - 0.0\,s = 20\,s$$

2. **Calculate the change in concentration of C ($d[C]$):**
$$d[C] = \text{Final concentration} - \text{Initial concentration}$$
$$d[C] = 0.38\,mol \cdot dm^{-3} - 0.0\,mol \cdot dm^{-3} = 0.38\,mol \cdot dm^{-3}$$

3. **Apply the rate formula:**
$$\text{Rate} = \frac{dx}{dt} = +\frac{d[C]}{dt}$$
$$\text{Rate} = \frac{0.38\,mol \cdot dm^{-3}}{20\,s}$$
$$\text{Rate} = 0.019\,mol \cdot dm^{-3} \cdot s^{-1}$$

*Note: This calculation gives the average rate of reaction over the specified time interval.*

### Summary

- **Rate of Reaction:** The speed at which reactants are converted into products, measured as the change in concentration per unit time.
- **Mathematical Expression:**
$$\text{Rate} = -\frac{d[\text{Reactant}]}{dt} = +\frac{d[\text{Product}]}{dt}$$
- **Units:** The standard unit for the rate of reaction is $mol \cdot dm^{-3} \cdot s^{-1}$.
- **Graphical Interpretation:** The slope of a concentration-time graph represents the reaction rate.
  - Reactant curve has a negative slope.
  - Product curve has a positive slope.
- **Average vs. Instantaneous Rate:** The rate calculated over a finite time interval is an average rate, while the rate at a specific moment is the instantaneous rate.

---

<!-- note kx7097hq7bhhxn4k49m4cns6gn85qscm | topic ms7fv6zhkdbczmhrkrc4kw02hd85pvm7 | status published -->
# 7.2 Rate Law

# 7.2 Rate Law

The rate of a chemical reaction is defined as the instantaneous change in the concentration of a reactant or product at a given time. Experimental studies show that the rate of a reaction is proportional to the molar concentration of reactants, with each concentration term raised to a specific power. This relationship is known as the **rate law**.

For a general reaction:
$$ \mathrm{A} \rightarrow \text{Product} $$

The rate can be expressed as:
$$ \text{Rate} \propto [A]^x $$
$$ \text{Rate} = k[A]^x $$

*   $k$ is the **rate constant**, a proportionality constant specific to a particular reaction at a given temperature.
*   The expression $\text{Rate} = k[A]^x$ is the **rate law** or **rate equation**.
*   The exponent $x$ is the **order of reaction** with respect to reactant A, and it must be determined experimentally.

The **rate constant (k)** can be defined as the rate of reaction when the molar concentration of each reactant is unity (1 M).
$$ \text{When } [A] = 1\,\text{M}, \quad \text{Rate} = k $$
The value of $k$ is independent of concentration and time but changes with temperature.

### 7.2.1 Order of Reaction and Rate Equation

The **order of reaction** is the sum of the exponents to which the molar concentration terms in the rate equation are raised. It reflects how the concentration of reactants affects the reaction rate and helps in determining the reaction mechanism.

<InlineNoteTag label="The Mechanism of a Chemical Reaction" notePath="chemistry-11/74-the-mechanism-of-a-chemical-reaction" />

Consider a general reaction:
$$ aA + bB \rightarrow cC + dD $$

The experimentally determined rate equation is:
$$ \text{Rate} = k[A]^x[B]^y $$

*   $x$ is the order of reaction with respect to reactant **A**.
*   $y$ is the order of reaction with respect to reactant **B**.
*   The **overall order of the reaction** is the sum $x + y$.

**Important Note:** The exponents $x$ and $y$ are determined experimentally and may not be the same as the stoichiometric coefficients $a$ and $b$ from the balanced chemical equation.

For example, for the reaction:
$$ 2\mathrm{NO}_{2} + \mathrm{O}_{3} \rightarrow \mathrm{N}_{2}\mathrm{O}_{5} + \mathrm{O}_{2} $$

The experimentally determined rate law is:
$$ \text{Rate} = k[\mathrm{NO}_{2}][\mathrm{O}_{3}] $$
In this case, the order with respect to $\mathrm{NO}_{2}$ is 1, even though its stoichiometric coefficient is 2. The overall order of the reaction is $1 + 1 = 2$.

### Types of Order of Reactions

The order of a reaction can be a whole number, zero, or a fraction.

**a) Zero-Order Reaction**
A reaction whose rate is independent of the concentration of the reactant(s).
*   **Rate Law:** $\text{Rate} = k[\text{Reactant}]^0 = k$
*   **Example:** Decomposition of ammonia on a heated tungsten surface.
    $$ 2\mathrm{NH}_{3(g)} \xrightarrow{\text{W}} \mathrm{N}_{2(g)} + 3\mathrm{H}_{2(g)} $$
    $$ \text{Rate} = k[\mathrm{NH}_{3}]^0 = k $$

**b) First-Order Reaction**
A reaction whose rate is directly proportional to the first power of the concentration of a single reactant.
*   **Rate Law:** $\text{Rate} = k[A]^1$
*   **Example 1:** Thermal decomposition of dinitrogen pentoxide.
    $$ 2\mathrm{N}_{2}\mathrm{O}_{5(g)} \rightarrow 2\mathrm{N}_{2}\mathrm{O}_{4(g)} + \mathrm{O}_{2(g)} $$
    $$ \text{Rate} = k[\mathrm{N}_{2}\mathrm{O}_{5}] $$
*   **Example 2:** Decomposition of ammonium nitrite.
    $$ \mathrm{NH}_{4}\mathrm{NO}_{2} \rightarrow \mathrm{N}_{2} + 2\mathrm{H}_{2}\mathrm{O} $$
    $$ \text{Rate} = k[\mathrm{NH}_{4}\mathrm{NO}_{2}] $$

**c) Second-Order Reaction**
A reaction for which the sum of the exponents in the rate law is two.
*   **Rate Laws:** $\text{Rate} = k[A]^2$ or $\text{Rate} = k[A][B]$
*   **Example 1:** Decomposition of nitrogen dioxide.
    $$ 2\mathrm{NO}_{2(g)} \rightarrow 2\mathrm{NO}_{(g)} + \mathrm{O}_{2(g)} $$
    $$ \text{Rate} = k[\mathrm{NO}_{2}]^2 $$
*   **Example 2:** Reaction between nitrogen monoxide and ozone.
    $$ \mathrm{NO}_{(g)} + \mathrm{O}_{3(g)} \rightarrow \mathrm{NO}_{2(g)} + \mathrm{O}_{2(g)} $$
    $$ \text{Rate} = k[\mathrm{NO}][\mathrm{O}_{3}] \quad (\text{Overall order} = 1+1=2) $$

**d) Third-Order Reaction**
A reaction for which the sum of the exponents in the rate law is three.
*   **Rate Laws:** $\text{Rate} = k[A]^3$, $\text{Rate} = k[A]^2[B]$, etc.
*   **Example:** Oxidation of nitrogen monoxide by oxygen.
    $$ 2\mathrm{NO}_{(g)} + \mathrm{O}_{2(g)} \rightarrow 2\mathrm{NO}_{2(g)} $$
    $$ \text{Rate} = k[\mathrm{NO}]^2[\mathrm{O}_{2}] \quad (\text{Overall order} = 2+1=3) $$

**e) Fractional-Order Reaction**
A reaction where the overall order is a fraction.
*   **Example:** Formation of hydrogen bromide.
    $$ \mathrm{H}_{2(g)} + \mathrm{Br}_{2(g)} \rightarrow 2\mathrm{HBr}_{(g)} $$
    $$ \text{Rate} = k[\mathrm{H}_{2}][\mathrm{Br}_{2}]^{1/2} \quad (\text{Overall order} = 1 + 0.5 = 1.5) $$

**f) Pseudo First-Order Reaction**
A bimolecular reaction where one reactant (often the solvent) is present in such large excess that its concentration remains effectively constant. The reaction rate then appears to depend only on the concentration of the other reactant.
*   **Example:** Hydrolysis of tert-butyl bromide in excess water.
    $$ (\mathrm{CH}_{3})_{3}\mathrm{C\text{-}Br}_{(l)} + \mathrm{H}_{2}\mathrm{O}_{(\text{Excess})} \rightarrow (\mathrm{CH}_{3})_{3}\mathrm{C\text{-}OH}_{(l)} + \mathrm{HBr}_{(l)} $$
    $$ \text{Rate} = k'[(\mathrm{CH}_{3})_{3}\mathrm{C\text{-}Br}] $$
    Where $k' = k[\mathrm{H}_{2}\mathrm{O}]$ is the pseudo first-order rate constant.

### 7.2.2 Determination of Reaction Order, Rate Law, and Rate Constant

The order of a reaction and the rate law are determined experimentally, not from the balanced equation. The most common method is the **initial rates method**.

**Initial Rates Method:**
The initial rate of reaction is measured for several experiments in which the concentration of one reactant is varied while all others are kept constant.

**Steps:**
1. Measure the initial rate of reaction at different initial concentrations of each reactant.
2. Compare two experiments where only one reactant concentration changes.
3. Use the ratio of rates to find the order with respect to that reactant.
4. Repeat for each reactant to find the overall order.
5. Substitute known values of rate, concentrations, and orders into the rate law to calculate $k$.

**Worked Example:**

For the reaction $A + B \rightarrow \text{Products}$, the following data were collected:

| Experiment | $[A]$ / mol dm$^{-3}$ | $[B]$ / mol dm$^{-3}$ | Initial Rate / mol dm$^{-3}$ s$^{-1}$ |
|:---:|:---:|:---:|:---:|
| 1 | 0.10 | 0.10 | $2.0 \times 10^{-3}$ |
| 2 | 0.20 | 0.10 | $4.0 \times 10^{-3}$ |
| 3 | 0.10 | 0.20 | $8.0 \times 10^{-3}$ |

**Finding order w.r.t. A** (compare Exp 1 and 2, $[B]$ constant):
$$\frac{\text{Rate}_2}{\text{Rate}_1} = \frac{k[0.20]^x[0.10]^y}{k[0.10]^x[0.10]^y} = 2^x = \frac{4.0 \times 10^{-3}}{2.0 \times 10^{-3}} = 2$$
$$\therefore x = 1 \quad (\text{first order w.r.t. A})$$

**Finding order w.r.t. B** (compare Exp 1 and 3, $[A]$ constant):
$$\frac{\text{Rate}_3}{\text{Rate}_1} = 2^y = \frac{8.0 \times 10^{-3}}{2.0 \times 10^{-3}} = 4$$
$$\therefore y = 2 \quad (\text{second order w.r.t. B})$$

**Rate Law:** $\text{Rate} = k[A][B]^2$ — **Overall order = 3**

**Calculating k** (using Experiment 1):
$$k = \frac{\text{Rate}}{[A][B]^2} = \frac{2.0 \times 10^{-3}}{(0.10)(0.10)^2} = 2.0\,\text{dm}^6\,\text{mol}^{-2}\,\text{s}^{-1}$$

---

<!-- note kx7c2ep3e9b6tejp2ajgccp3zd85qj3g | topic ms7c4acr3arhgj8e58b7b44kyn85paad | status published -->
# 7.3 Effect of Temperature on the Rate of Reactions

The rate of a chemical reaction is highly dependent on temperature. Generally, an increase in temperature leads to an increase in the reaction rate.

## Collision Theory and Temperature

According to **collision theory**, a reaction occurs when reactant molecules collide with sufficient energy and in the correct orientation. The effect of temperature can be explained by this theory:

- **Increased Kinetic Energy**: An increase in temperature raises the average kinetic energy of the molecules.
- **Increased Molecular Speed**: As molecules gain kinetic energy, their average speed increases.
- **Increased Collision Frequency**: Faster-moving molecules collide more frequently.

However, not all collisions result in a reaction. For a collision to be *effective*, two conditions must be met:

1. The colliding molecules must possess a minimum amount of energy, known as the **activation energy ($E_a$)**.
2. The molecules must be in the **correct spatial orientation** at the moment of impact.

> **Key insight:** Collision frequency increases by only about $1$–$2\%$ for a $10\,K$ rise in temperature. The dominant reason for the sharp increase in reaction rate is the exponential increase in the fraction of molecules possessing energy $\geq E_a$.

## The Maxwell-Boltzmann Distribution

At any given temperature, the reactant molecules do not all have the same kinetic energy. The **Maxwell-Boltzmann distribution curve** illustrates how kinetic energy is distributed among a population of molecules at a constant temperature.

<CaptionedImage src="/content/assets/class-11/chemistry/Pasted image 20251010202644.webp" alt="Maxwell-Boltzmann curve of kinetic energy distribution" caption="Figure 7.2a: Maxwell-Boltzmann curve of kinetic energy distribution." />

- The peak of the curve represents the **most probable kinetic energy**.
- The **activation energy ($E_a$)** is a threshold on this curve. Only molecules with kinetic energy equal to or greater than $E_a$ can react upon collision.
- The **shaded area** under the curve to the right of $E_a$ represents the fraction of molecules with sufficient energy to react.

### Effect of Increasing Temperature

When the temperature is increased (e.g., from $T_1$ to $T_2$, where $T_2 > T_1$):

- The distribution curve **flattens and shifts to the right**.
- The fraction of molecules possessing the required activation energy ($E_a$) **increases significantly**.
- This leads to a higher number of effective collisions per unit time, thereby increasing the reaction rate.

## Temperature Coefficient ($Q_{10}$)

A general rule of thumb is that for many reactions, the rate **doubles or triples for every 10 K (or 10°C) increase in temperature**. This is quantified by the **Temperature Coefficient ($Q_{10}$)**:

$$Q_{10} = \frac{\text{Rate at } (T + 10\,K)}{\text{Rate at } T}$$

For most reactions, $Q_{10} \approx 2$–$3$.

## The Arrhenius Equation

In 1889, Svante Arrhenius quantitatively described the relationship between temperature, activation energy, and the rate constant ($k$) with the **Arrhenius equation**:

$$k = A e^{-E_a / RT}$$

Where:

| Symbol | Meaning |
|--------|---------|
| $k$ | Rate constant |
| $A$ | Pre-exponential factor (related to collision frequency and orientation probability) |
| $E_a$ | Activation energy (J/mol) |
| $R$ | Universal gas constant ($8.314\,J\cdot K^{-1}\cdot mol^{-1}$) |
| $T$ | Absolute temperature (Kelvin) |

This equation shows that $k$ increases **exponentially** as $T$ increases. Since reaction rate is directly proportional to $k$, the reaction rate also increases with temperature.

### Linearised Form

Taking the natural logarithm of the Arrhenius equation:

$$\ln k = \ln A - \frac{E_a}{R} \cdot \frac{1}{T}$$

A plot of $\ln k$ vs $\dfrac{1}{T}$ gives a straight line with:
- **Slope** $= -\dfrac{E_a}{R}$
- **Intercept** $= \ln A$

This allows experimental determination of $E_a$ from kinetic data.

---

<!-- note kx7ej9xfg1ddb4n4j77xv2j9jh85qr0a | topic ms7bkfvh7w8ngkysf2bfvcwtbh85p305 | status published -->
# 7.4 The Mechanism of a Chemical Reaction

# 7.4 The Mechanism of a Chemical Reaction

The path that reactants take to form products in a chemical reaction is called the **reaction mechanism**. A reaction's rate equation is highly informative as it provides crucial details about its mechanism. A reaction can occur in a single step or, more commonly, in several elementary steps.

When a reaction proceeds in two or more steps, one of them is inevitably the slowest. The rate of this slowest step dictates the overall reaction rate because it establishes a speed limit for the entire process. No reaction can proceed faster than its rate-determining step.

> *"The slowest step in the reaction mechanism, which determines the overall rate of the reaction, is called the **rate-determining step**.*"

## Understanding the Rate-Determining Step

The rate law for an overall reaction is determined by the stoichiometry of its rate-determining step. The concentration terms in the rate equation correspond to the reactants involved in this slow step.

- **Multi-step Reactions:** Complex reactions often occur through a sequence of simpler, elementary steps.
- **Slowest Step Dominates:** The overall rate is limited by the slowest step, much like traffic flow is limited by the slowest car in a single lane.
- **Fast Steps:** All other steps in the mechanism are usually much faster and do not limit the overall rate.
- **Reaction Intermediate:** A species that is formed in one step of the mechanism and consumed in a subsequent step is called a **reaction intermediate**. It does not appear in the overall balanced chemical equation.

*Important Note:* A balanced chemical equation often provides no information about the reaction mechanism. The mechanism must be determined experimentally.

## Worked Examples

### Example 7.4: Deducing Mechanism from Rate Law

For the reaction:
$$\mathrm{NO}_{2(g)} + \mathrm{CO}_{(g)} \longrightarrow \mathrm{NO}_{(g)} + \mathrm{CO}_{2(g)}$$
The experimentally determined rate law is:
$$\text{Rate} = k[\mathrm{NO}_{2}]^{2}$$
What information does this provide about the rate-determining step?

**Solution:**

1. The reaction is **second order** with respect to $\mathrm{NO_2}$ and **zero order** with respect to $\mathrm{CO}$. The rate is independent of $[\mathrm{CO}]$.
2. Two molecules of $\mathrm{NO_2}$ must be involved in the rate-determining step.
3. Because the overall stoichiometry (1 $\mathrm{NO_2}$) does not match the rate law (2 $\mathrm{NO_2}$), the reaction must proceed in more than one step.

A proposed mechanism consistent with this rate law:

- **Step I (Slow — Rate-Determining):**
$$\mathrm{NO}_{2(g)} + \mathrm{NO}_{2(g)} \xrightarrow{\text{slow}} \mathrm{NO}_{3(g)} + \mathrm{NO}_{(g)}$$
- **Step II (Fast):**
$$\mathrm{NO}_{3(g)} + \mathrm{CO}_{(g)} \xrightarrow{\text{fast}} \mathrm{NO}_{2(g)} + \mathrm{CO}_{2(g)}$$

Step I involves two $\mathrm{NO_2}$ molecules, matching the rate law. The species $\mathrm{NO_3}$ is a **reaction intermediate** — produced in Step I and consumed in Step II.

### Example 7.5: Decomposition of Hypochlorite Ion

The hypochlorite ion ($\mathrm{ClO^-}$) decomposes in aqueous solution:
$$3\mathrm{ClO}^-_{(aq)} \longrightarrow \mathrm{ClO}^-_{3(aq)} + 2\mathrm{Cl}^-_{(aq)}$$
The rate law is:
$$\text{Rate} = k[\mathrm{ClO}^-]^{2}$$
The proposed two-step mechanism is:
- **Step I:** $\mathrm{ClO}^-_{(aq)} + \mathrm{ClO}^-_{(aq)} \longrightarrow \mathrm{ClO}^-_{2(aq)} + \mathrm{Cl}^-_{(aq)}$
- **Step II:** $\mathrm{ClO}^-_{2(aq)} + \mathrm{ClO}^-_{(aq)} \longrightarrow \mathrm{ClO}^-_{3(aq)} + \mathrm{Cl}^-_{(aq)}$

**Solution:**

The rate law indicates two $\mathrm{ClO^-}$ ions participate in the rate-determining step. Step I involves the collision of two $\mathrm{ClO^-}$ ions. Therefore, **Step I is the rate-determining step**. The species $\mathrm{ClO_2^-}$ is a reaction intermediate.

### Example 7.6: Reactants in the Rate-Determining Step

For the reaction:
$$2\mathrm{NO}_{2(g)} + \mathrm{O}_{3(g)} \longrightarrow \mathrm{N_2O}_{5(g)} + \mathrm{O}_{2(g)}$$
The rate law is:
$$\text{Rate} = k[\mathrm{NO_2}][\mathrm{O_3}]$$

This rate law indicates that **one molecule of $\mathrm{NO_2}$ and one molecule of $\mathrm{O_3}$** participate in the rate-determining step. The rate law directly reflects the reactants and their coefficients in the slow step.

### Example 7.7: Writing the Rate Law from a Mechanism

Nitric oxide reacts with hydrogen according to the equation:
$$2\mathrm{NO}_{(g)} + 2\mathrm{H}_{2(g)} \longrightarrow \mathrm{N}_{2(g)} + 2\mathrm{H_2O}_{(g)}$$
The proposed mechanism is:
- **Step I (slow):** $2\mathrm{NO} + \mathrm{H_2} \longrightarrow \mathrm{N_2} + \mathrm{H_2O_2}$
- **Step II (fast):** $\mathrm{H_2O_2} + \mathrm{H_2} \longrightarrow 2\mathrm{H_2O}$

Write the experimental rate law for this reaction.

**Solution:**

The rate law is determined by the slow (rate-determining) step. Step I is the slow step and involves **two molecules of NO** and **one molecule of $\mathrm{H_2}$**. Therefore, the rate law is:

$$\text{Rate} = k[\mathrm{NO}]^{2}[\mathrm{H_2}]$$

The species $\mathrm{H_2O_2}$ is a **reaction intermediate** — it is produced in Step I and consumed in Step II, and does not appear in the overall balanced equation.

---

<!-- note kx75h39sesg58m0yvecvkv219d85qwty | topic ms751d6pdyte1cmrcrdd0xbxgs85q3n9 | status published -->
# 7.5 Activation Energy

This section explores the energy requirements for chemical reactions, focusing on collision theory and the activated complex.

### Collision Theory

For a chemical reaction to occur, reactant particles must collide. However, not all collisions result in a reaction. Collision theory explains the factors that determine whether a collision will be successful.

A collision is considered **effective** (leads to a reaction) only if two conditions are met:

1. **Sufficient Energy:** The colliding particles must possess a minimum amount of energy to overcome the repulsive forces between their electron clouds.
2. **Proper Orientation:** The particles must be oriented correctly at the moment of collision so that the atoms required to form new bonds come into direct contact.

Collisions that do not meet these two criteria are **ineffective**, and the particles simply bounce off each other chemically unchanged.

### Activation Energy ($E_a$)

**Activation Energy ($E_a$)** is defined as the minimum amount of energy, in addition to the average kinetic energy, that colliding particles must possess for an effective collision to occur.

- It acts as an energy barrier that must be overcome for reactants to be converted into products.
- If the energy of the colliding particles is less than the activation energy, no reaction will take place.

<CaptionedImage src="/content/assets/class-11/chemistry/Pasted image 20251010203145.webp" alt="Figure 7.5: Energy barrier diagram showing activation energy" caption="Figure 7.5: Energy barrier diagram showing activation energy" />

**Relationship with Reaction Rate:**

- **High Activation Energy:** A higher energy barrier means that only a small fraction of molecules will have sufficient energy to react upon collision. This results in a slower reaction rate.
- **Low Activation Energy:** A lower energy barrier allows a larger fraction of molecules to undergo effective collisions, leading to a faster reaction rate.

> **Do You Know?**
> Gas explosions in homes can be caused by switching on a light. If gas has been leaking, then a tiny spark from turning on a light can provide the activation energy to start the explosive reaction between the methane and the oxygen.

### The Activated Complex (Transition State)

When reactants with sufficient energy and proper orientation collide, they form a temporary, unstable, high-energy species called the **activated complex** or **transition state**.

- **Formation:** During an effective collision, the kinetic energy of the reactants decreases as they slow down, and this energy is converted into potential energy, leading to the formation of the activated complex.
- **Characteristics:** The activated complex is highly unstable and short-lived.
- **Breakdown:** It quickly breaks down to form the more stable products of the reaction.

For example, in the reaction between $\mathrm{A_2}$ and $\mathrm{B_2}$:

$$A_2 + B_2 \rightarrow [A_2B_2]^{\ddagger} \rightarrow 2AB$$

Here, $[A_2B_2]^{\ddagger}$ represents the activated complex.

<CaptionedImage src="/content/assets/class-11/chemistry/Pasted image 20251010203254.webp" alt="Figure 7.5: Activated complex formation between reactant molecules" caption="Figure 7.5: Activated complex formation between reactant molecules" />

### Potential Energy Diagrams

A potential energy diagram illustrates the energy changes that occur during a chemical reaction. The activation energy ($E_a$) is represented as an energy hill that reactants must "climb" to become products.

<CaptionedImage src="/content/assets/class-11/chemistry/Pasted image 20251010203353.webp" alt="Figure 7.6: (a) Endothermic reaction (b) Exothermic reaction" caption="Figure 7.6: (a) Endothermic reaction (b) Exothermic reaction" />

**1. Exothermic Reactions**

- The products are at a lower potential energy level than the reactants.
- Energy is released into the surroundings.
- The enthalpy change ($\Delta H$) is negative.
- The activation energy for the reverse reaction is higher than for the forward reaction ($E_{a(rev)} = E_{a(fwd)} + |\Delta H|$).

**2. Endothermic Reactions**

- The products are at a higher potential energy level than the reactants.
- Energy is absorbed from the surroundings.
- The enthalpy change ($\Delta H$) is positive.
- These reactions often require a continuous supply of energy to proceed.

In both cases, the activation energy ($E_a$) is the energy difference between the reactants and the peak of the energy barrier (the activated complex). Adding a catalyst provides an alternative pathway with a lower activation energy.

---

<!-- note kx707nmk7q7ypnt31mm6kwmbp985prnm | topic ms72k4d81z60ajzvq0mx9v757985qsrm | status published -->
# 7.6 Catalysis

Many industrial reactions require high temperatures to achieve a fast reaction rate, which is necessary to maximize product yield in a given time. However, high-temperature processes can pose safety risks and are not suitable for chemical species that are unstable at high temperatures. An alternative method to increase reaction rates is therefore highly valuable.

This alternative is **catalysis**. By introducing a **catalyst**, we can change the reaction mechanism to one that has a lower activation energy, thereby increasing the reaction rate.

**Catalyst:** A substance that accelerates a chemical reaction but remains chemically unchanged at the end of the reaction.

**Catalysis:** The process of increasing the rate of a chemical reaction by adding a catalyst.

A catalyst provides a new, alternative pathway for the reaction with a lower **activation energy** ($E_a$). As shown in the energy profile diagram, this lower energy barrier allows more reactant molecules to have sufficient energy to overcome it, leading to a faster reaction rate.

<CaptionedImage src="content/assets/class-11/chemistry/Pasted image 20251010203451.webp" alt="Figure 7.7: Effect of a Catalyst on Activation Energy" caption="Figure 7.7: Effect of a Catalyst on Activation Energy. The catalyzed path has a lower activation energy compared to the uncatalyzed path, but the overall enthalpy change remains the same." />

**Key Points:**

- A catalyst **increases the rate of reaction** by decreasing its activation energy.
- A catalyst has **no effect** on the overall thermodynamics or enthalpy ($\Delta H$) of the reaction. It does not change the energy of the reactants or products.
- A catalyst **cannot initiate a reaction** that is not thermodynamically favorable.

### Types of Catalysis

In the FSc curriculum, catalysis is generally classified based on the physical state of the reactants and the catalyst:

1.  **Homogeneous Catalysis:** If the catalyst and the reactants are in the same phase (e.g., all gases or all in solution).
2.  **Heterogeneous Catalysis:** If the catalyst and the reactants are in different phases (e.g., a solid catalyst with gaseous reactants).

### Autocatalysis and Catalytic Poisoning

Sometimes, a product formed during the reaction acts as a catalyst for that same reaction. This phenomenon is known as **Autocatalysis**.

Conversely, certain substances can decrease or destroy the activity of a catalyst. This is known as **Catalytic Poisoning**.

### Example: Catalytic Destruction of Ozone in the Stratosphere

The conversion of ozone ($\mathrm{O_3}$) to molecular oxygen ($\mathrm{O_2}$) by an oxygen atom ($\mathrm{O}$) in the stratosphere is a naturally occurring process. However, this direct reaction has a relatively high activation energy.

**Uncatalyzed Reaction:**
The direct reaction between ozone and an oxygen atom is slow due to its high activation energy.
$$O_3 + O \rightarrow 2O_2 \quad (E_a = 17.1 \, \text{kJ mol}^{-1})$$

**Catalyzed Reaction:**
Chlorofluorocarbons (CFCs) from human activities can diffuse into the stratosphere. There, they absorb high-energy ultraviolet (UV) light, which breaks the carbon-chlorine bonds and releases highly reactive chlorine atoms ($\mathrm{Cl}$). These chlorine atoms act as catalysts for ozone destruction.

The chlorine atom provides a new, two-step mechanism with a much lower overall activation energy:

1.  **Step 1:** A chlorine atom reacts with an ozone molecule.
    $$O_3 + Cl \rightarrow O_2 + ClO \quad (E_a = 2.1 \, \text{kJ mol}^{-1})$$
2.  **Step 2:** The chlorine monoxide ($\mathrm{ClO}$) intermediate reacts with an oxygen atom, regenerating the chlorine atom.
    $$O + ClO \rightarrow O_2 + Cl \quad (E_a = 0.4 \, \text{kJ mol}^{-1})$$

**Net Reaction:**
By adding the two steps, we see that the chlorine atom is regenerated and does not appear in the overall equation. The net result is the same as the uncatalyzed reaction, but the pathway is different and much faster.
$$O_3 + O \rightarrow 2O_2 \quad (\text{Overall } E_a \approx 2.5 \, \text{kJ mol}^{-1})$$

The chlorine-catalyzed reaction has a substantially lower activation energy ($2.5 \, \text{kJ mol}^{-1}$) than the direct reaction ($17.1 \, \text{kJ mol}^{-1}$), which is why a small amount of chlorine can destroy a large amount of ozone.

### Enzyme Catalysis

Enzymes are biological catalysts. They are complex protein molecules with high molecular weights and are extremely specific in their action.

---

<!-- note kx73cbqta6w12s4rbvtftjnf6185q10n | topic ms7dcx73apdhs4pmnknqq4ezxn85qb93 | status published -->
# 7.7 Gibbs Free Energy and Reaction Feasibility

# 7.7 Gibbs Free Energy and Reaction Feasibility

This section explores Gibbs Free Energy, a thermodynamic quantity used to predict the spontaneity or feasibility of a chemical reaction under constant temperature and pressure.

### What is Gibbs Free Energy?

Gibbs free energy ($G$) is a measure of the amount of useable energy (or work-potential) in a system at constant temperature and pressure. It is also known as "Available Energy." It was conceptualized by the American scientist Josiah Willard Gibbs in 1876.

The Gibbs free energy of a system is defined by the equation:
$$G = H - TS$$

Where:

- $G$ = Gibbs Free Energy
- $H$ = Enthalpy of the system
- $T$ = Absolute temperature (in Kelvin)
- $S$ = Entropy of the system

Gibbs free energy is a **state function**, meaning its value depends only on the current state of the system, not on the path taken to reach that state.

### Gibbs Free Energy Change ($\Delta G$)

For a chemical process, we are interested in the *change* in Gibbs free energy ($\Delta G$). The change is given by the **Gibbs-Helmholtz equation** for a process at constant temperature:
$$\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$$

Where:

- $\Delta G^\circ$ = Standard Gibbs free energy change
- $\Delta H^\circ$ = Standard enthalpy change
- $\Delta S^\circ$ = Standard entropy change
- $T$ = Absolute temperature

### Predicting Reaction Spontaneity and Feasibility

The sign and magnitude of $\Delta G$ determine whether a reaction is spontaneous (feasible), non-spontaneous, or at equilibrium. A **feasible reaction** is one that, once started, will proceed to completion without a continuous supply of external energy.

The three possible conditions are:

| Value of $\Delta G^\circ$ | Description | Characteristics |
| :--- | :--- | :--- |
| $\Delta G^\circ < 0$ (negative) | **Spontaneous / Feasible** | The reaction proceeds in the forward direction. The system releases free energy. |
| $\Delta G^\circ > 0$ (positive) | **Non-spontaneous / Not Feasible** | The reaction does not proceed in the forward direction. Energy must be supplied for it to occur. The reverse reaction is spontaneous. |
| $\Delta G^\circ = 0$ | **At Equilibrium** | The rates of the forward and reverse reactions are equal. There is no net change in the system. |

#### Temperature Dependence of Spontaneity

The feasibility of a reaction depends on the balance between enthalpy ($\Delta H$) and entropy ($T\Delta S$).

1.  **Exothermic reactions with increasing entropy ($\Delta H < 0, \Delta S > 0$):** $\Delta G$ is always negative. Spontaneous at all temperatures.
2.  **Endothermic reactions with decreasing entropy ($\Delta H > 0, \Delta S < 0$):** $\Delta G$ is always positive. Non-spontaneous at all temperatures.
3.  **Endothermic reactions with increasing entropy ($\Delta H > 0, \Delta S > 0$):** Spontaneous only at high temperatures where $T\Delta S > \Delta H$.
4.  **Exothermic reactions with decreasing entropy ($\Delta H < 0, \Delta S < 0$):** Spontaneous only at low temperatures where $|T\Delta S| < |\Delta H|$.

### Gibbs Free Energy and Phase Transitions

$\Delta G$ is also useful for understanding phase transitions, such as the melting of ice into liquid water.

**Reaction:**
$$\mathrm{H_2O_{(s)}} \rightarrow \mathrm{H_2O_{(l)}}$$

- **At the melting point (0°C or 273.15 K):** The solid and liquid phases are in equilibrium. The rate of melting equals the rate of freezing. Here, $\Delta G = 0$.
- **Above the melting point (> 0°C):** Melting is a spontaneous process. The liquid phase is more stable. Here, $\Delta G < 0$.
- **Below the melting point (< 0°C):** Melting is a non-spontaneous process. The solid phase is more stable, and the reverse reaction (freezing) is spontaneous. Here, $\Delta G > 0$.

### Relation between $\Delta G^\circ$ and Equilibrium Constant ($K$)

The standard free energy change is related to the equilibrium constant of a reaction by the following expression:
$$\Delta G^\circ = -RT \ln K$$
Or in terms of base 10 logarithm:
$$\Delta G^\circ = -2.303 RT \log K$$