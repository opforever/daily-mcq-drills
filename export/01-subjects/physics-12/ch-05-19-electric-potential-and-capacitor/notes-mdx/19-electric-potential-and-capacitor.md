<!-- note kx7ecez5zbm403gcaypwn8280x85q5w0 | topic ms76wc8szjf96q0qjmdsmkrr2185qe7t | status published -->
# 19.1 Electric Potential Energy and Electric Potential

## Electric Potential Energy ($U$)

**Electric potential energy** is the energy a charge possesses by virtue of its position in an electric field. It is defined as the work done by an external agent in bringing a positive test charge $q_0$ from infinity (the reference point of zero potential energy) to a given point in the field, without any acceleration:

$$U = W_{\text{external}} = -W_{\text{field}}$$

The SI unit of electric potential energy is the **Joule (J)**.

### Key Points
- When a positive charge moves **against** the electric field (from lower to higher potential), an external agent does **positive work**, and the electric potential energy **increases**.
- When a positive charge moves **along** the electric field (from higher to lower potential), the field does positive work, and the electric potential energy **decreases**.

---

## Electric Potential ($V$)

**Electric potential** at a point in an electric field is defined as the electric potential energy per unit positive test charge placed at that point:

$$V = \frac{U}{q_0} = \frac{W}{q_0}$$

where $W$ is the work done in bringing charge $q_0$ from infinity to that point.

### SI Unit: Volt (V)

One **Volt** is defined as the potential at a point if **one Joule** of work is done in bringing a positive charge of **one Coulomb** from infinity to that point:

$$1\text{ V} = 1\text{ J C}^{-1} = 1\text{ N m C}^{-1}$$

### Potential Difference

The **potential difference** $\Delta V$ between two points A and B is:

$$\Delta V = V_A - V_B = \frac{W_{A \to B}}{q_0}$$

This represents the work done per unit charge in moving a positive test charge from B to A.

---

## Direction of Motion of Charges

- A **positive charge** naturally moves from a region of **higher potential** to **lower potential** (in the direction of the electric field).
- A **negative charge** naturally moves from a region of **lower potential** to **higher potential** (opposite to the electric field).
- Moving a positive charge **against** the field requires work by an external agent, increasing its potential energy.

---

## Relationship Between Electric Field and Potential Gradient

The electric field intensity $E$ is related to the electric potential $V$ by:

$$E = -\frac{\Delta V}{\Delta r}$$

The quantity $\frac{\Delta V}{\Delta r}$ is called the **potential gradient**. The **negative sign** indicates that the electric field points in the direction of **decreasing potential** (from high $V$ to low $V$).

The SI unit of electric field can therefore also be expressed as **V m⁻¹** (equivalent to N C⁻¹).

---

## Electron-Volt (eV)

A convenient unit of energy in atomic and nuclear physics is the **electron-volt (eV)**:

> One electron-volt is the kinetic energy gained by an electron when it is accelerated through a potential difference of **1 Volt**.

$$1\text{ eV} = 1.6 \times 10^{-19}\text{ J}$$

In general, a charge $q$ accelerated through potential difference $V$ gains kinetic energy:

$$\Delta KE = qV$$

For an electron accelerated through $1000\text{ V}$: $\Delta KE = 1000\text{ eV}$.

---

## Summary Table

| Quantity | Symbol | Formula | SI Unit |
|---|---|---|---|
| Electric Potential Energy | $U$ | $U = q_0 V$ | Joule (J) |
| Electric Potential | $V$ | $V = W/q_0$ | Volt (V) = J C⁻¹ |
| Potential Gradient | $\Delta V/\Delta r$ | (rate of change of V with distance) | V m⁻¹ |
| Electric Field | $E$ | $E = -\Delta V/\Delta r$ | V m⁻¹ or N C⁻¹ |

---

<!-- note kx7fyjyy3ryaa2adzgay305z1585pkww | topic ms7dw2kqsgv43aenc4hjqawmax85p11y | status published -->
# 19.2 Electric Potential Due to a Point Charge

## Electric Potential at a Point

The **absolute electric potential** $V$ at a distance $r$ from an isolated point charge $q$ is defined as the work done per unit positive charge in bringing a test charge from infinity to that point:

$$V = \frac{1}{4\pi\epsilon_0} \frac{q}{r}$$

where $\epsilon_0 = 8.85 \times 10^{-12}\text{ C}^2\text{ N}^{-1}\text{ m}^{-2}$ is the permittivity of free space, and $k = \frac{1}{4\pi\epsilon_0} \approx 9 \times 10^9\text{ N m}^2\text{ C}^{-2}$.

### Key Properties

- **Scalar quantity**: Electric potential has magnitude but no direction. The total potential due to multiple charges is found by simple algebraic (not vector) addition.
- **Sign**: Positive charges produce positive potential; negative charges produce negative potential.
- **Reference point**: The potential is defined to be zero at infinity ($r \to \infty$).
- **Variation with distance**: $V \propto \dfrac{1}{r}$ (inverse relationship), whereas electric field $E \propto \dfrac{1}{r^2}$.

### Negative Electric Potential

A negative potential (produced by a negative point charge) means that work must be done **by an external agent** to move a positive test charge from that point to infinity (against the attractive force).

---

---

## Electric Field as Negative Potential Gradient

The electric field $E$ at a point is related to the rate of change of electric potential with distance:

$$E = -\frac{\Delta V}{\Delta r}$$

The **negative sign** indicates that the electric field points in the direction of **decreasing potential**, from high potential to low potential. The quantity $\dfrac{\Delta V}{\Delta r}$ is called the **potential gradient**.

**Units**: The potential gradient has units of $\text{V m}^{-1}$, which is equivalent to $\text{N C}^{-1}$.

<WorkedExample title="Worked Example">

A point charge $q = +2\text{ μC}$ is located at the origin. Find the electric potential and electric field at $r = 0.3\text{ m}$.

$$V = \frac{kq}{r} = \frac{(9\times10^9)(2\times10^{-6})}{0.3} = 60{,}000\text{ V} = 60\text{ kV}$$

$$E = \frac{kq}{r^2} = \frac{(9\times10^9)(2\times10^{-6})}{(0.3)^2} = 200{,}000\text{ V m}^{-1} = 200\text{ kV m}^{-1}$$

<Callout type="note">$E = V/r$ holds here only because this is a point charge: $V = kq/r$ and $E = kq/r^2$.</Callout>

</WorkedExample>
---

---

## Electric Potential Energy of Two Point Charges

The **electric potential energy** $U$ of a system of two point charges $q_1$ and $q_2$ separated by a distance $r$ is:

$$U = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_2}{r} = k\frac{q_1 q_2}{r}$$

This represents the work done in assembling the two charges from infinity to a separation $r$.

- If $q_1$ and $q_2$ have the **same sign**: $U > 0$ (repulsive system, energy must be supplied to bring them together).
- If $q_1$ and $q_2$ have **opposite signs**: $U < 0$ (attractive system, energy is released as they come together).

### Relationship to Potential

The potential energy can also be written as:

$$U = q_2 V_1$$

where $V_1 = \dfrac{kq_1}{r}$ is the potential due to charge $q_1$ at the location of $q_2$.

---

---

## Superposition of Potentials

For a system of $n$ point charges, the total electric potential at a point $P$ is the algebraic sum:

$$V_{\text{total}} = \sum_{i=1}^{n} \frac{kq_i}{r_i}$$

Because potential is a **scalar**, this sum is straightforward, unlike the vector addition required for electric fields.

### Example: Square Arrangement

- **Four identical positive charges** at corners of a square: At the centre, $E = 0$ (fields cancel by symmetry) but $V = 4kq/r \neq 0$ (potentials add).
- **Alternating $+Q, -Q, +Q, -Q$** at corners: At the centre, $E = 0$ (by symmetry) and $V = 0$ (positive and negative contributions cancel).

---

<!-- note kx756v9wq7sn8z96xfw7s0xy3s85qxdr | topic ms7bzk7306s44m80cnmxgsveyd85qg9k | status published -->
# 19.3 Capacitors

## What is a Capacitor?

A **capacitor** is a device that stores electric charge and energy. It consists of two conducting plates (or surfaces) separated by an insulating material called a **dielectric** (or vacuum/air).

---

---

## Capacitance

**Capacitance** ($C$) is the ability of a capacitor to store charge. It is defined as the ratio of the magnitude of charge $Q$ stored on either plate to the potential difference $V$ between the plates:

$$C = \frac{Q}{V}$$

- **SI Unit:** Farad (F)
- 1 Farad = 1 Coulomb per Volt (C/V)
- In practice, capacitors are rated in microfarads ($\mu$F) or picofarads (pF) since 1 F is very large.

---

---

## Parallel Plate Capacitor

The simplest capacitor consists of two parallel conducting plates, each of area $A$, separated by a distance $d$.

<CaptionedImage src="kg2277baff8zwgprcd8tzbygdx89cs93" alt="Parallel-Plate Capacitor" caption="Parallel-Plate Capacitor" />
### Capacitance with Vacuum Between Plates

For a parallel plate capacitor with vacuum (or air) between the plates:

$$C_{\text{vac}} = \frac{\epsilon_0 A}{d}$$

where:
- $\epsilon_0 = 8.85 \times 10^{-12}\text{ F m}^{-1}$ is the permittivity of free space
- $A$ = area of each plate (m²)
- $d$ = separation between plates (m)

**Key relationships:**
- $C \propto A$, larger plates store more charge
- $C \propto \frac{1}{d}$, closer plates increase capacitance

<WorkedExample title="Worked Example">

A parallel plate capacitor has plates of area $0.02\text{ m}^2$ separated by $1\text{ mm} = 1 \times 10^{-3}\text{ m}$. Find its capacitance.

$$C = \frac{\epsilon_0 A}{d} = \frac{(8.85 \times 10^{-12})(0.02)}{1 \times 10^{-3}} = 1.77 \times 10^{-10}\text{ F} = 177\text{ pF}$$

</WorkedExample>
---

---

## Effect of a Dielectric

A **dielectric** is an insulating material (e.g., glass, mica, paper) placed between the plates of a capacitor.

### Electric Polarization

When a dielectric is placed in an electric field, its molecules align or distort, positive charges shift slightly in the direction of the field and negative charges shift opposite. This is called **electric polarization**. It creates induced surface charges on the dielectric that produce an internal electric field opposing the external field.

### How Dielectric Increases Capacitance

The induced internal field reduces the net electric field between the plates, which lowers the potential difference $V$ for the same stored charge $Q$. Since $C = Q/V$, a lower $V$ means a **higher capacitance**.

With a dielectric of relative permittivity $\epsilon_r$ (also called dielectric constant):

$$C = \epsilon_r C_{\text{vac}} = \frac{\epsilon_r \epsilon_0 A}{d}$$

Since $\epsilon_r > 1$ for all dielectrics, inserting a dielectric always **increases** capacitance by a factor of $\epsilon_r$.

---

---

## Effect of Changing Plate Separation (Connected to Battery)

If a capacitor remains connected to a battery (constant voltage $V$) and the plate separation $d$ is changed:

- Since $C = \frac{\epsilon_0 A}{d}$, doubling $d$ **halves** $C$.
- Energy stored: $U = \frac{1}{2}CV^2$, so halving $C$ **halves** the energy stored.
- Charge stored: $Q = CV$, so halving $C$ also **halves** $Q$.

---

---

## Summary Table

| Quantity | Formula | Effect of increasing $A$ | Effect of increasing $d$ | Effect of dielectric |
|---|---|---|---|---|
| Capacitance $C$ | $\frac{\epsilon_r \epsilon_0 A}{d}$ | Increases | Decreases | Increases |
| Charge $Q$ (const. $V$) | $CV$ | Increases | Decreases | Increases |
| Voltage $V$ (const. $Q$) | $Q/C$ | Decreases | Increases | Decreases |

---

<!-- note kx78adf6kwkfhvca3xhaph0z3x85p6pa | topic ms7bx30gsgfdb2zr4ht6qj8p8n85prnw | status published -->
# 19.4 Combinations of Capacitors

Capacitors can be connected in two fundamental ways: **series** and **parallel**. Each arrangement produces a different equivalent capacitance and has distinct practical applications.

## Series Combination

When capacitors are connected end-to-end so that the same current path passes through each one, they are said to be in **series**.

### Key Property (Series)
The **charge** $Q$ on every capacitor in a series combination is identical:
$$Q_1 = Q_2 = Q_3 = \cdots = Q$$

This occurs because of electrostatic induction: the charge displaced from one plate must reside on the adjacent plate of the next capacitor.

### Voltage Distribution
The total voltage $V$ supplied by the source equals the sum of the individual voltages:
$$V = V_1 + V_2 + V_3 + \cdots$$

Since $V = Q/C$ for each capacitor:
$$\frac{Q}{C_{eq}} = \frac{Q}{C_1} + \frac{Q}{C_2} + \frac{Q}{C_3} + \cdots$$

Dividing through by $Q$:

$$\boxed{\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3} + \cdots}$$

### Important Result (Series)
The equivalent capacitance $C_{eq}$ in series is **always less than the smallest individual capacitance**. Physically, series connection increases the effective plate separation, reducing capacitance.

<WorkedExample title="Worked Example (Series)">

### Worked Example (Series)

Find $C_{eq}$ for $C_1 = 3\,\mu F$ and $C_2 = 6\,\mu F$ in series:

</WorkedExample>

$$\frac{1}{C_{eq}} = \frac{1}{3} + \frac{1}{6} = \frac{2}{6} + \frac{1}{6} = \frac{3}{6} = \frac{1}{2}$$
$$C_{eq} = 2\,\mu F$$

---

## Parallel Combination

When capacitors are connected so that both plates of each capacitor are connected to the same two nodes, they are in **parallel**.

### Key Property (Parallel)
The **potential difference** $V$ across every capacitor in a parallel combination is identical and equal to the source voltage:
$$V_1 = V_2 = V_3 = \cdots = V$$

Physically, parallel connection increases the total plate area available for storing charge while keeping the plate separation constant.

### Charge Distribution
The total charge supplied by the source is shared among the capacitors:
$$Q = Q_1 + Q_2 + Q_3 + \cdots$$

Since $Q = CV$ for each capacitor:
$$C_{eq}\,V = C_1 V + C_2 V + C_3 V + \cdots$$

Dividing through by $V$:

$$\boxed{C_{eq} = C_1 + C_2 + C_3 + \cdots}$$

### Important Result (Parallel)
The equivalent capacitance in parallel is **always greater than the largest individual capacitance**.

### Worked Example (Parallel)
Find $C_{eq}$ for $C_1 = 3\,\mu F$ and $C_2 = 6\,\mu F$ in parallel:
$$C_{eq} = 3 + 6 = 9\,\mu F$$

---

## Comparison: Series vs Parallel

| Property | Series | Parallel |
|---|---|---|
| Charge | Same on all ($Q$) | Divides ($Q = Q_1 + Q_2 + \cdots$) |
| Voltage | Divides ($V = V_1 + V_2 + \cdots$) | Same on all ($V$) |
| $C_{eq}$ | Less than smallest $C$ | Greater than largest $C$ |
| Effective plate separation | Increases | Unchanged |
| Effective plate area | Unchanged | Increases |

### Energy Comparison
Since $U = \frac{1}{2}C_{eq}V^2$, for the same source voltage $V$, the **parallel combination stores more energy** because $C_{eq}$ is larger.

For $n$ identical capacitors each of capacitance $C$:
- $C_{parallel} = nC$
- $C_{series} = C/n$
- Ratio of energies: $\dfrac{U_{parallel}}{U_{series}} = \dfrac{nC}{C/n} = n^2$


---

<!-- note kx7csa8ekc7njfn5d4vb107f3h85qpyk | topic ms7e7ggx116s3n897r0f7gg81x85pbwm | status published -->
# Series Combination of Capacitors

When capacitors are connected **end-to-end** in a single path, they are said to be in **series**. The key characteristic of a series circuit is that there is only one path for charge to flow.

## Key Property: Same Charge on Each Capacitor

When a battery is connected to a series combination, it pushes charge $Q$ onto the outer plates. Due to **electrostatic induction**, the inner plates acquire equal and opposite charges. Because the inner plates are isolated (not connected to the battery), the charge redistributed on each capacitor must be equal:

$$Q_1 = Q_2 = Q_3 = \cdots = Q_n = Q$$

This is the defining property of a series combination.

## Voltage Distribution

The total voltage $V$ supplied by the battery is shared among the capacitors. Using $V = Q/C$ for each:

$$V = V_1 + V_2 + V_3 + \cdots + V_n$$

$$V = \frac{Q}{C_1} + \frac{Q}{C_2} + \frac{Q}{C_3} + \cdots + \frac{Q}{C_n}$$

## Derivation of Equivalent Capacitance

The **equivalent capacitance** $C_{eq}$ is defined as the single capacitor that stores the same charge $Q$ under the same total voltage $V$:

$$V = \frac{Q}{C_{eq}}$$

Substituting:

$$\frac{Q}{C_{eq}} = \frac{Q}{C_1} + \frac{Q}{C_2} + \frac{Q}{C_3} + \cdots + \frac{Q}{C_n}$$

Dividing both sides by $Q$:

$$\boxed{\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3} + \cdots + \frac{1}{C_n}}$$

## Important Consequence

The equivalent capacitance of a series combination is **always less than the smallest individual capacitance**. This is because series connection effectively increases the total plate separation, reducing capacitance.

**Physical interpretation:** Connecting capacitors in series is equivalent to increasing the distance $d$ between the outermost plates, since $C = \varepsilon_0 A / d$ and a larger $d$ gives a smaller $C$.

<WorkedExample title="Worked Example">

**Problem:** Three capacitors $C_1 = 2\,\mu F$, $C_2 = 4\,\mu F$, and $C_3 = 6\,\mu F$ are connected in series to a $12\,\text{V}$ battery. Find (a) the equivalent capacitance, (b) the charge on each capacitor, and (c) the voltage across each.

**Solution:**

**(a) Equivalent Capacitance:**

$$\frac{1}{C_{eq}} = \frac{1}{2} + \frac{1}{4} + \frac{1}{6} = \frac{6}{12} + \frac{3}{12} + \frac{2}{12} = \frac{11}{12}$$

$$C_{eq} = \frac{12}{11} \approx 1.09\,\mu F$$

**(b) Charge on each capacitor:**

$$Q = C_{eq} \times V = \frac{12}{11} \times 12 \approx 13.1\,\mu C$$

All three capacitors carry the same charge $Q \approx 13.1\,\mu C$.

**(c) Voltage across each:**

$$V_1 = \frac{Q}{C_1} = \frac{13.1}{2} \approx 6.5\,\text{V}, \quad V_2 = \frac{13.1}{4} \approx 3.3\,\text{V}, \quad V_3 = \frac{13.1}{6} \approx 2.2\,\text{V}$$

Check: $V_1 + V_2 + V_3 \approx 6.5 + 3.3 + 2.2 = 12\,\text{V}$ ✓

</WorkedExample>
## Special Case: Two Capacitors in Series

For two capacitors, the formula simplifies to:

$$C_{eq} = \frac{C_1 C_2}{C_1 + C_2}$$

The voltage divides **inversely** with capacitance:

$$V_1 = V \cdot \frac{C_2}{C_1 + C_2}, \qquad V_2 = V \cdot \frac{C_1}{C_1 + C_2}$$

## Summary Table

| Property | Series Combination |
|---|---|
| Charge | Same on all: $Q_1 = Q_2 = \cdots = Q$ |
| Voltage | Divides: $V = V_1 + V_2 + \cdots$ |
| Equivalent capacitance | $\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots$ |
| $C_{eq}$ vs individuals | Always smaller than smallest $C$ |


---

<!-- note kx73er6nbrstqc41rnf4wc0pds85q5gs | topic ms786hkv7xwq4k9nryajtfrd0n85ptam | status published -->
# 19.4.2 Parallel Combination of Capacitors

When capacitors are connected in **parallel**, both terminals of each capacitor are connected directly to the same two nodes of the circuit. This means every capacitor shares the **same potential difference** as the source.

---

## Key Characteristics

| Quantity | Behaviour in Parallel |
|---|---|
| Potential difference ($V$) | **Same** across each capacitor |
| Charge ($Q$) | **Distributed**, each capacitor stores a different charge |
| Equivalent capacitance ($C_{eq}$) | **Sum** of all individual capacitances |

---

## Derivation of Equivalent Capacitance

Consider three capacitors $C_1$, $C_2$, and $C_3$ connected in parallel across a voltage source $V$.

**Step 1, Voltage is the same across each capacitor:**
$$V_1 = V_2 = V_3 = V$$

**Step 2, Charge on each capacitor:**
$$Q_1 = C_1 V, \quad Q_2 = C_2 V, \quad Q_3 = C_3 V$$

**Step 3, Total charge drawn from the source:**
$$Q = Q_1 + Q_2 + Q_3$$
$$Q = C_1 V + C_2 V + C_3 V$$
$$Q = (C_1 + C_2 + C_3)\,V$$

**Step 4, Define equivalent capacitance** $C_{eq}$ such that $Q = C_{eq}\,V$:
$$\boxed{C_{eq} = C_1 + C_2 + C_3}$$

For $n$ capacitors in parallel:
$$C_{eq} = C_1 + C_2 + C_3 + \cdots + C_n$$

> **Key result:** The equivalent capacitance in a parallel combination is always **greater** than the largest individual capacitance.

---

## Physical Interpretation

Connecting capacitors in parallel effectively **increases the total plate area** $A$ available for storing charge while keeping the plate separation $d$ constant. Since $C = \varepsilon_0 A / d$, a larger effective area means a larger capacitance.

---

## Charge Distribution

Because $V$ is the same for all capacitors, the charge stored on each is proportional to its capacitance:
$$\frac{Q_1}{Q_2} = \frac{C_1}{C_2}$$

A larger capacitor stores more charge at the same voltage.

---

<WorkedExample title="Worked Example">

**Problem:** Three capacitors of $2\,\mu F$, $3\,\mu F$, and $5\,\mu F$ are connected in parallel to a $10\,\text{V}$ battery. Find (a) the equivalent capacitance, (b) the total charge, and (c) the charge on each capacitor.

**Solution:**

(a) Equivalent capacitance:
$$C_{eq} = 2 + 3 + 5 = 10\,\mu F$$

(b) Total charge:
$$Q = C_{eq}\,V = 10\,\mu F \times 10\,\text{V} = 100\,\mu C$$

(c) Charge on each capacitor (all at $V = 10\,\text{V}$):
$$Q_1 = 2\,\mu F \times 10\,\text{V} = 20\,\mu C$$
$$Q_2 = 3\,\mu F \times 10\,\text{V} = 30\,\mu C$$
$$Q_3 = 5\,\mu F \times 10\,\text{V} = 50\,\mu C$$

Check: $20 + 30 + 50 = 100\,\mu C$ ✓

</WorkedExample>
---

## Comparison: Series vs Parallel

| Property | Series | Parallel |
|---|---|---|
| Same quantity | Charge $Q$ | Voltage $V$ |
| $C_{eq}$ vs individual | Smaller than smallest | Larger than largest |
| Use case | High voltage distribution | Large charge storage |

---

<!-- note kx7014j1arpmxa780tgrdgs69x85pc8e | topic ms78mv7vxs3na6kmveanewybsn85pykk | status published -->
# 19.5 Energy Stored in a Capacitor

## Why Work is Required to Charge a Capacitor

When a capacitor is being charged, positive charges are transferred from the negative plate to the positive plate. Each successive charge element must be pushed against the repulsion of charges already accumulated on the plates. As more charge builds up, the potential difference $V$ between the plates increases, so progressively **more work** is needed to transfer each additional charge. This work is stored as **electric potential energy** in the capacitor.

---

## Derivation of Energy Stored

At any instant during charging, if the charge on the capacitor is $q$ and the potential difference is $v = q/C$, the small amount of work done to transfer an additional charge $dq$ is:

$$dW = v\, dq = \frac{q}{C}\, dq$$

Integrating from $q = 0$ to $q = Q$ (the final charge):

$$U = \int_0^Q \frac{q}{C}\, dq = \frac{1}{C} \cdot \frac{Q^2}{2} = \frac{Q^2}{2C}$$

Using $Q = CV$, this can be written in three equivalent forms:

$$\boxed{U = \frac{1}{2}QV = \frac{1}{2}CV^2 = \frac{Q^2}{2C}}$$

The factor of $\frac{1}{2}$ arises because the **average** potential difference during charging is $\frac{0 + V}{2} = \frac{V}{2}$.

---

## Graphical Interpretation

If we plot charge $Q$ against potential difference $V$, we get a straight line through the origin (since $Q = CV$). The **area under the $Q$-$V$ graph** (a triangle) equals:

$$\text{Area} = \frac{1}{2} \times Q \times V = U$$

This confirms that the energy stored equals $\frac{1}{2}QV$.

---

## Energy Stored in the Electric Field

The energy stored in a capacitor resides in the **electric field** between the plates. For a parallel plate capacitor with plate area $A$ and separation $d$:

- Volume of field region: $\text{Vol} = A \cdot d$
- Electric field: $E = V/d$, so $V = Ed$
- Capacitance: $C = \epsilon_0 A/d$

Substituting into $U = \frac{1}{2}CV^2$:

$$U = \frac{1}{2} \cdot \frac{\epsilon_0 A}{d} \cdot (Ed)^2 = \frac{1}{2} \epsilon_0 E^2 \cdot (Ad)$$

The **energy density** $u$ (energy per unit volume) is therefore:

$$\boxed{u = \frac{U}{\text{Vol}} = \frac{1}{2} \epsilon_0 E^2}$$

With a dielectric of relative permittivity $\epsilon_r$:

$$u = \frac{1}{2} \epsilon_0 \epsilon_r E^2$$

---

<WorkedExample title="Worked Example">

**Problem:** A $10\,\mu\text{F}$ capacitor is charged to $100\,\text{V}$. Find the energy stored.

**Solution:**
$$U = \frac{1}{2}CV^2 = \frac{1}{2} \times (10 \times 10^{-6}) \times (100)^2$$
$$U = \frac{1}{2} \times 10^{-5} \times 10^4 = 0.05\,\text{J}$$

</WorkedExample>
---

## Uses of Capacitors in Household Appliances

Capacitors are found in many everyday devices. Key examples include:

| Appliance | Role of Capacitor |
|---|---|
| **Ceiling fans / AC motors** | Provides phase shift to start and run single-phase induction motors |
| **Microwave ovens** | High-voltage capacitor stores energy for the magnetron |
| **Camera flash / defibrillators** | Stores energy and releases it rapidly as a pulse |
| **Power supplies (TVs, computers)** | Smoothing capacitor reduces voltage ripple in rectified DC |
| **Air conditioners** | Run capacitors maintain motor efficiency |
| **Fluorescent tube starters** | Capacitors suppress radio-frequency interference |

> **Key point:** Capacitors are used wherever **rapid energy storage and release**, **phase shifting**, or **signal filtering** is required.

---

## Summary of Formulas

| Quantity | Formula |
|---|---|
| Energy stored | $U = \frac{1}{2}QV = \frac{1}{2}CV^2 = \frac{Q^2}{2C}$ |
| Energy density (vacuum) | $u = \frac{1}{2}\epsilon_0 E^2$ |
| Energy density (dielectric) | $u = \frac{1}{2}\epsilon_0 \epsilon_r E^2$ |

---

<!-- note kx7b1xgd2n8khey9v1dvcxdz4x85qcap | topic ms7ak2aanmxrkrbsapahn799vx85q3ww | status published -->
# 19.6 Charging and Discharging of a Capacitor

When a capacitor is connected to a DC source through a resistor, it does not charge instantaneously. Similarly, when it is disconnected and allowed to discharge through a resistor, it does not lose its charge instantly. Both processes follow **exponential** behaviour governed by the product $RC$.

---

## The Time Constant ($\tau$)

The **time constant** of an RC circuit is defined as:

$$\tau = RC$$

where $R$ is resistance in ohms ($\Omega$) and $C$ is capacitance in farads (F).

**Unit of $RC$:**

$$[RC] = [\Omega][F] = \left[\frac{V}{A}\right]\left[\frac{C}{V}\right] = \left[\frac{C}{A}\right] = \left[\frac{C}{C/s}\right] = [s]$$

So $RC$ has the SI unit of **seconds**.

---

## Charging of a Capacitor

When a capacitor $C$ is connected in series with a resistor $R$ and a battery of EMF $\mathcal{E}$, charge builds up on the capacitor. The charge $q$ at any time $t$ is:

$$q = q_0\left(1 - e^{-t/RC}\right)$$

where $q_0 = C\mathcal{E}$ is the maximum (equilibrium) charge.

The voltage across the capacitor during charging:

$$V = V_0\left(1 - e^{-t/RC}\right)$$

**Key values:**
- At $t = 0$: $q = 0$ (uncharged)
- At $t = RC$: $q = q_0(1 - e^{-1}) \approx 0.632\, q_0$ (63.2% of maximum)
- At $t = 5RC$: $q \approx 0.993\, q_0$ (practically fully charged)

---

## Discharging of a Capacitor

When a fully charged capacitor (initial charge $q_0$, initial voltage $V_0$) is discharged through a resistor $R$, the charge, voltage, and current all decay exponentially:

$$q = q_0\, e^{-t/RC}$$

$$V = V_0\, e^{-t/RC}$$

$$I = I_0\, e^{-t/RC} \quad \text{where } I_0 = \frac{V_0}{R}$$

**Key values during discharge:**
- At $t = 0$: $q = q_0$, $V = V_0$, $I = I_0$
- At $t = RC$: $q = q_0 e^{-1} \approx 0.368\, q_0$ (36.8% of initial)
- At $t = 2RC$: $q \approx 0.135\, q_0$ (13.5% of initial)
- At $t = 5RC$: $q \approx 0.007\, q_0$ (practically fully discharged)

---

## Graphs of V, Q, and I vs Time

**During Charging:**
- $Q$–$t$ and $V$–$t$: exponential **rise**, starting at zero and asymptotically approaching $q_0$ or $V_0$.
- $I$–$t$: exponential **decay** from $I_0 = V_0/R$ toward zero (as the capacitor opposes further charging).

**During Discharging:**
- $Q$–$t$, $V$–$t$, and $I$–$t$: all show exponential **decay** from their initial values toward zero.

All curves have the **same time constant** $\tau = RC$.

**Effect of $RC$ on graph shape:**
- **Small $RC$**: steep curve, rapid charging/discharging.
- **Large $RC$**: flat curve, slow charging/discharging.

---

---

<!-- note kx77jzwhmwmmbz9v0svhehxv0d85p1zc | topic ms777ajb1mt9zm5bpbya9e9c7585qmka | status published -->
# 19.7 Bioelectricity

## What is Bioelectricity?

**Bioelectricity** refers to the electrical potentials and currents produced by (or) occurring within living organisms. Unlike metallic conductors where electrons carry current, bioelectric signals arise from the movement of **ions** (such as $\mathrm{Na}^{+}$, $\mathrm{K}^{+}$, $\mathrm{Ca}^{2+}$, and $\mathrm{Cl}^{-}$) across semi-permeable cell membranes through specialised protein channels.

---

## The Cell Membrane as a Biological Capacitor

The **cell membrane** has a structure analogous to a parallel-plate capacitor:

| Capacitor Component | Biological Equivalent |
|---|---|
| Conducting plates | Intracellular and extracellular ionic solutions |
| Insulating dielectric | Lipid bilayer (~7-10 nm thick) |

Because the lipid bilayer is a thin insulator separating two conducting ionic media, the membrane stores separated charge, exactly as a capacitor does. The typical membrane capacitance is approximately $1\,\mu\mathrm{F\,cm}^{-2}$.

The **capacitance** of the membrane is defined as:

$$C = \frac{Q}{V}$$

where $Q$ is the charge stored and $V$ is the potential difference (membrane potential) across it.

---

## Resting Membrane Potential

In the **resting state**, a neuron maintains a stable potential difference across its membrane called the **resting membrane potential**, approximately:

$$V_{\text{rest}} \approx -70\,\mathrm{mV}$$

The negative sign indicates the **inside of the cell is negative** relative to the outside. This potential arises because:

1. $\mathrm{K}^{+}$ ions diffuse outward through leak channels (the membrane is more permeable to $\mathrm{K}^{+}$ at rest).
2. Large negatively charged proteins remain trapped inside the cell.
3. The **Sodium-Potassium pump** ($\mathrm{Na}^{+}$-$\mathrm{K}^{+}$ ATPase) actively maintains the gradient by pumping **3 Na+ out** and **2 K+ in** per cycle, consuming ATP.

---

## Action Potential

When a neuron is stimulated beyond a **threshold**, a rapid, transient reversal of membrane potential occurs, this is the **action potential** (nerve impulse).

### Stages of an Action Potential

| Stage | Event | Potential |
|---|---|---|
| Resting | $\mathrm{K}^{+}$ leak maintains gradient | $-70\,\mathrm{mV}$ |
| Depolarisation | Rapid $\mathrm{Na}^{+}$ influx through voltage-gated channels | rises to $\approx +40\,\mathrm{mV}$ |
| Repolarisation | $\mathrm{Na}^{+}$ channels close; $\mathrm{K}^{+}$ efflux | returns toward $-70\,\mathrm{mV}$ |
| Hyperpolarisation | Slight overshoot below resting potential | briefly $< -70\,\mathrm{mV}$ |
| Recovery | Na+-K+ pump restores ion gradients | $-70\,\mathrm{mV}$ |

The total change in potential:
$$\Delta V = (+40) - (-70) = 110\,\mathrm{mV}$$

---

## Medical Applications of Bioelectricity

The bioelectric signals generated by organs can be detected by electrodes placed on the skin and recorded as diagnostic traces:

### Electrocardiogram (ECG)
- Records the **electrical activity of the heart**.
- Detects depolarisation and repolarisation waves of cardiac muscle.
- Used to diagnose arrhythmias, heart attacks, and other cardiac conditions.

### Electroencephalogram (EEG)
- Records the **electrical activity of the brain**.
- Detects collective bioelectric potentials from neurons.
- Used to diagnose epilepsy, sleep disorders, and brain injuries.

---

## Summary Table

| Quantity | Value |
|---|---|
| Resting membrane potential | $\approx -70\,\mathrm{mV}$ |
| Peak action potential | $\approx +40\,\mathrm{mV}$ |
| Membrane capacitance | $\approx 1\,\mu\mathrm{F\,cm}^{-2}$ |
| Na+-K+ pump ratio | 3 Na+ out : 2 K+ in |