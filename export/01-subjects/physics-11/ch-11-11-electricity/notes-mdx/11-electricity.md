<!-- note kx7fe3976kxy0x4h6gqnznwq5985pcc5 | topic ms7f2fnhm5z45hsqbry2k7kjbn85p3jm | status published -->
# Drift Velocity

## What Is Drift Velocity?

**Drift velocity** is the average velocity attained by charge carriers, such as electrons, in a material due to an electric field. While electrons in a conductor are in constant, high-speed random motion, the application of an electric field superimposes a slow, directional drift on this random movement, resulting in a net flow of charge, which is called electric current.
## Random Motion vs. Drift Motion

- **Without an Electric Field:** In a conductor, free electrons move randomly at very high speeds (the Fermi velocity, on the order of $10^6$ m/s). Their motion is chaotic, and they frequently collide with the atoms of the conductor's lattice. Because the motion is random, there is no net movement of charge in any particular direction, so there is no current.

- **With an Electric Field:** When an external electric field is applied (e.g., by connecting a battery), a force is exerted on the electrons, causing them to accelerate in the direction opposite to the field. However, their path is constantly interrupted by collisions with the lattice. The result is not a continuous acceleration but a slow, average drift velocity in a specific direction.

<CaptionedImage src="kg2c8wnjt0jwq8hzdce653zk5d8dhsve" alt="Figure 1: Diagram showing random electron motion and the superimposed drift due to an electric field." caption="Figure 1: Diagram showing random electron motion and the superimposed drift due to an electric field." />

## Magnitude of Drift Velocity

The drift velocity of electrons is surprisingly slow, typically on the order of millimeters per second ($10^{-4}$ to $10^{-5}$ m/s). This is in stark contrast to their high-speed random motion.

## Relationship with Electric Current

Drift velocity is directly responsible for electric current. The current ($I$) flowing through a conductor can be expressed by the formula:

$$I = n A v_{d} e$$

Where:

- $I$ = Electric current (in Amperes)
- $n$ = Number of free charge carriers per unit volume (charge carrier density)
- $A$ = Cross-sectional area of the conductor
- $v_{d}$ = Drift velocity of the charge carriers
- $e$ = Charge of a single carrier (for electrons, $e \approx 1.6 \times 10^{-19}$ C)

This equation shows that for a given wire, the current is directly proportional to the drift velocity.

## Mobility ($\mu$)

**Mobility** is a property of a charge carrier that measures how quickly it can move through a material in response to an electric field. It is the ratio of the drift velocity to the electric field strength ($E$).

- **Formula:** $\mu = \frac{v_{d}}{E}$
- **Unit:** m²/(V·s)

| Property | Drift Velocity ($v_{d}$) | Mobility ($\mu$) |
| :--- | :--- | :--- |
| **Definition** | Average velocity of charge carriers under an electric field. | Ratio of drift velocity to electric field strength. |
| **Formula** | $v_{d} = \frac{I}{nAe}$ or $v_{d} = \mu E$| $\mu = \frac{v_{d}}{E}$ |
| **Unit** | m/s | m²/(V·s) |

## Example Calculation

**Problem:** A copper wire has a diameter of 2.05 mm and carries a current of 10 A. Copper has $8.5 \times 10^{28}$ free electrons per cubic meter. What is the drift velocity of the electrons?

**Solution:**

1. **Find the cross-sectional area (A):**
   - Radius $r = \frac{2.05 \text{ mm}}{2} = 1.025 \times 10^{-3} \text{ m}$
   - Area $A = \pi r^{\!2} = \pi (1.025 \times 10^{-3})^2 \approx 3.3 \times 10^{-6} \text{ m}^2$

2. **Use the current formula to solve for $v_{d}$:**
   $$v_{d} = \frac{I}{nAe}$$

3. **Substitute the values:**
   - $I = 10 \text{ A}$
   - $n = 8.5 \times 10^{28} \text{ m}^{-3}$
   - $A \approx 3.3 \times 10^{-6} \text{ m}^2$
   - $e = 1.6 \times 10^{-19} \text{ C}$
   $$v_{d} = \frac{10}{(8.5 \times 10^{28}) (3.3 \times 10^{-6}) (1.6 \times 10^{-19})}$$
   $$v_{d} \approx 2.23 \times 10^{-4} \, \text{m/s} \quad \text{(or 0.223 mm/s)}$$

The drift velocity is extremely slow, at only about 0.223 millimeters per second.




---

<!-- note kx7158a19fvskp7my6csvqka7n85qqw8 | topic ms78xkz878nfvxvjvr6qq41e1d85qqed | status published -->
# Electric Potential

## What Is Electric Potential?

**Electric potential** (often called potential) is a fundamental concept in electrostatics that describes the amount of work energy needed to move a unit of positive charge from a reference point to a specific point in an electric field. It is a scalar quantity that provides a way to characterize the energy of a location within an electric field, independent of the charge being placed there.
## Electric Potential Energy vs. Electric Potential

These two concepts are closely related but distinct.

- **Electric Potential Energy ($U_E$):** This is the potential energy a specific charge has due to its position in an electric field. It is the work done to move that charge from a reference point to its current location.
- **Electric Potential ($V$):** This is a property of a location in an electric field. It is the electric potential energy per unit charge.

**Relationship:**

$$
V = \frac{U_E}{q}
$$

By definition, it is also the work done ($W$) per unit charge:

$$
V = \frac{W}{q}
$$

## Units of Electric Potential

- The SI unit for electric potential is the **Volt (V)**.
- One Volt is defined as one Joule of work per Coulomb of charge:

$$
1 \, \text{V} = 1 \, \text{J/C}
$$

## Calculation of Electric Potential

### a) For a Single Point Charge

The electric potential ($V$) at a distance ($r$) from a single point source charge ($Q$) is given by:

$$
V = k \frac{Q}{r}
$$

- $k$ is Coulomb's constant ($k \approx 9 \times 10^9 \, \mathrm{N \cdot m^2 / C^2}$).
- $Q$ is the source charge.
- $r$ is the distance from the source charge.
<Callout type="note">

Unlike the electric field (a vector), potential is a **scalar**. The sign of the charge $Q$ is included in the calculation. A positive charge creates a positive potential, and a negative charge creates a negative potential.

</Callout>

<InlineNoteTag label="Derived Units" notePath="physics-11/derived-units" />

### b) For Multiple Charges

The total electric potential at a point due to a collection of charges is simply the **algebraic sum** of the potentials created by each individual charge.

$$
V_{\text{total}} = k \sum_{i} \frac{q_i}{r_i} = k \left( \frac{q_1}{r_1} + \frac{q_2}{r_2} + \ldots \right)
$$

## Potential Difference ($\Delta V$)

In practice, we are often more interested in the **potential difference** (or voltage) between two points, as this is what drives the flow of charge (current).

$$
\Delta V = V_B - V_A = \frac{W_{AB}}{q}
$$

This is the work required per unit charge to move a charge from point A to point B.

<CaptionedImage src="kg27qq5m82whgkfhs8erz5tnzd8dgzsw" alt="Work done moving a charge in an electric field." caption="Work done moving a charge in an electric field." />

## Relationship Between Electric Field and Potential Gradient

The electric field intensity ($E$) at any point is related to the rate of change of electric potential with distance (the **potential gradient**):

$$
E = -\frac{\Delta V}{\Delta r}
$$

The **negative sign** indicates that the electric field points in the direction of **decreasing potential** (from high to low potential). This also gives an alternative unit for electric field: **V/m**, which is equivalent to **N/C**.

For uniform fields (e.g., between parallel plates separated by distance $d$):

$$
E = \frac{\Delta V}{d}
$$

## Equipotential Surfaces

An **equipotential surface** is a surface on which the electric potential is the same at every point. No work is done in moving a charge between two points on an equipotential surface, since $W = q\Delta V = q \times 0 = 0$.

**Key properties:**
- Electric field lines are always **perpendicular** to equipotential surfaces.
- For a point charge, equipotential surfaces are concentric spheres.
- For a uniform field (parallel plates), equipotential surfaces are parallel planes.

## The Electron-Volt (eV)

In atomic and nuclear physics, a more convenient unit of energy is the **electron-volt (eV)**.

- **Definition:** One electron-volt is the amount of energy gained or lost by a single electron when it moves across a potential difference of one volt.
- **Conversion:** $1 \, \text{eV} = (1.602 \times 10^{-19} \, \text{C}) \times (1 \, \text{V}) = 1.602 \times 10^{-19} \, \text{J}$.
- For a particle with charge $q = ne$ accelerated through potential difference $\Delta V$: $\text{KE} = n \times \Delta V \text{ eV}$.

<WorkedExample title="Worked examples">

**Example 1:** What is the electric potential at a distance of 3 m from a point charge of $5 \, \mu C$?

$
V = k \frac{Q}{r} = (9 \times 10^9) \frac{5 \times 10^{-6}}{3} = 15 \times 10^3 \, \text{V} = 15 \, \text{kV}
$

**Example 2:** What is the potential difference if it takes 600 J of work to move a 2 C charge between two points?

$
\Delta V = \frac{W}{q} = \frac{600 \, \text{J}}{2 \, \text{C}} = 300 \, \text{V}
$

**Example 3:** Two parallel plates are separated by 2 cm and have a potential difference of 2 V. Find the electric field between them.

$
E = \frac{\Delta V}{d} = \frac{2 \, \text{V}}{0.02 \, \text{m}} = 100 \, \text{V/m}
$

</WorkedExample>

---

<!-- note kx7236xdam1br52dd3pdpm3kdh85qmv2 | topic ms7ehex677z228e2ztbqjaa40x85q9cb | status published -->
# Electromotive Force (emf)

## Electromotive Force (emf)

The **electromotive force (emf)**, denoted by the symbol $\varepsilon$, is the energy provided by a source (such as a battery or generator) per unit of charge that passes through it. Despite its name, emf is **not a force**; it is an energy-related quantity that represents the work done to create a potential difference, which drives an electric current.

$$\varepsilon = \frac{W}{q}$$

where $W$ is the work done and $q$ is the charge. The SI unit of emf is the **Volt (V)**.

### 1. EMF vs. Terminal Potential Difference

It is essential to distinguish between the emf of a source and the actual potential difference (voltage) it supplies to an external circuit.

- **EMF ($\varepsilon$):** The ideal or total potential difference a source can provide. It is the voltage across the terminals when **no current is being drawn** ($I = 0$).
- **Terminal Potential Difference ($V_T$):** The actual voltage measured across the terminals of the source when it is connected to a circuit and current ($I$) is flowing.
- **Internal Resistance ($r$):** All real-world sources of emf possess some internal resistance, which opposes the flow of current within the source itself.

When current ($I$) flows from a source, some potential is dropped across this internal resistance. The relationship is:

$$V_T = \varepsilon - Ir$$

This equation shows that the terminal voltage is always **less than** the emf when the source is supplying current. When the source is being **charged** (current forced in reverse), $V_T = \varepsilon + Ir$.

### 2. Current in a Simple Circuit

For a simple circuit with an emf source ($\varepsilon$), an internal resistance ($r$), and an external load resistance ($R$), the total resistance is $R + r$. By Ohm's Law:

$$I = \frac{\varepsilon}{R + r}$$

**Worked Example:** A battery of emf $\varepsilon = 9\text{ V}$ and internal resistance $r = 1\,\Omega$ is connected to a $R = 8\,\Omega$ resistor. Find the current and terminal voltage.

$$I = \frac{9}{8 + 1} = 1\text{ A}$$
$$V_T = \varepsilon - Ir = 9 - (1)(1) = 8\text{ V}$$

### 3. Power and Efficiency

The total power supplied by the emf source is split between the power usefully delivered to the external load and the power lost as heat in the source's own internal resistance.

#### Power Dissipation

The total power supplied by the emf source is split between the external load and the internal resistance:

| Quantity | Formula |
| :--- | :--- |
| Total power from source | $P_{total} = \varepsilon I$ |
| Power delivered to load | $P_R = I^2R = V_T I$ |
| Power lost in source | $P_r = I^2r$ |

By conservation of energy:
$$\varepsilon I = I^2R + I^2r$$

#### Efficiency

The efficiency of an emf source is the ratio of useful power delivered to the load to the total power supplied:

$$\text{Efficiency} = \frac{P_R}{P_{total}} = \frac{V_T I}{\varepsilon I} = \frac{V_T}{\varepsilon} = \frac{R}{R + r}$$

#### Maximum Power Output

The power delivered to the external load $P_R = I^2R$ is maximised when the **load resistance ($R$) equals the internal resistance ($r$)**:

$$R = r \quad \text{(condition for maximum power transfer)}$$

At this condition, the current is $I = \frac{\varepsilon}{2r}$ and the maximum power delivered to the load is:

$$P_{max} = I^2 R = \left(\frac{\varepsilon}{2r}\right)^2 r = \frac{\varepsilon^2}{4r}$$

<Callout type="note">

At maximum power transfer, the efficiency is only **50%**, since equal power is dissipated in the internal resistance.

</Callout>
## Summary

| Term | Formula / Value |
| :--- | :--- |
| EMF ($\varepsilon$) | $\varepsilon = W/q$, unit: Volt (V) |
| Terminal voltage (discharging) | $V_T = \varepsilon - Ir$ |
| Terminal voltage (charging) | $V_T = \varepsilon + Ir$ |
| Circuit current | $I = \varepsilon / (R + r)$ |
| Efficiency | $\eta = R / (R + r)$ |
| Max power condition | $R = r$ |
| Maximum power | $P_{max} = \varepsilon^2 / (4r)$ |
| Efficiency at max power | 50% |

<SideActivity kind="info" title="For Your Information">
<p>A fresh Energizer E91 AA alkaline primary battery drops from about $0.9 \Omega$ at $-40{ }^{\circ} \mathrm{C}$, when the low temperature reduces ion mobility, to about $0.15 \Omega$ at room temperature and about $0.1 \Omega$ at $40{ }^{\circ} \mathrm{C}$.</p>
</SideActivity>

---

<!-- note kx7esf1k67f1ndx1g2y8wxrqcx85qcrk | topic ms76ht6dhstq4v6rw89ze3ya1585pgvr | status published -->
# Variation of Resistance with Temperature

## How Temperature Affects Resistance

The **resistance** of a material is a measure of its opposition to the flow of electric current. This property is not constant; it is significantly influenced by the material's temperature. Understanding this relationship is crucial for designing and operating electrical and electronic components in various thermal environments.

<CaptionedImage src="kg29jwdqb7p0b4a5q68ampn3dx8dg20q" alt="Graph showing resistance increasing with temperature for a metal." caption="Graph showing resistance increasing with temperature for a metal." />
## Temperature Coefficient of Resistance

For many materials, especially metals, the change in resistance with temperature is approximately linear over a certain range. This relationship is described by the **temperature coefficient of resistance ($\alpha$)**.

**Definition:** The temperature coefficient of resistance is the fractional change in resistance per unit change in temperature:
$$\alpha = \frac{R_{T} - R_{0}}{R_{0} \, \Delta T}$$

The formula to calculate the resistance ($R_{T}$) at a certain temperature ($T$) is:
$$R_{T} = R_{0}[1 + \alpha(T - T_{0})]$$

Where:
- $R_{T}$ is the resistance at the final temperature $T$.
- $R_{0}$ is the resistance at a reference temperature $T_{0}$ (often $0^\circ C$ or $20^\circ C$).
- $\alpha$ is the temperature coefficient of resistance.
- **SI unit of $\alpha$:** per Kelvin ($K^{\!-1}$), also written as $^\circ C^{\!-1}$.

## Behavior of Different Material Types

The effect of temperature on resistance varies greatly depending on the type of material.

| Material Type | Resistance Behavior with Increasing Temperature | Reason |
| :--- | :--- | :--- |
| **Metals (Conductors)** | **Increases** (Positive $\alpha$) | Increased thermal vibrations of lattice atoms cause more frequent collisions with free electrons, impeding their flow. |
| **Semiconductors** | **Decreases** (Negative $\alpha$) | Higher temperature frees more charge carriers (electrons and holes), increasing conductivity. |
| **Insulators** | Very high; decreases slightly | Similar mechanism to semiconductors but requires much more energy to free charge carriers. |
| **Electrolytes** | **Decreases** | Higher temperature increases ion mobility in solution, allowing easier current flow. |
| **Alloys** | Increases very slightly | Designed to have a very low $\alpha$, making them stable for precision resistors. |

## Resistance and Resistivity

The resistance ($R$) of a specific conductor depends on both its material and its physical dimensions.

$$R = \rho \frac{L}{A}$$

Where:
- $L$ = length of the conductor (resistance is **directly proportional** to $L$)
- $A$ = cross-sectional area (resistance is **inversely proportional** to $A$)
- $\rho$ = **resistivity** of the material

### Resistivity ($\rho$)
- An **intrinsic property** of a material quantifying how strongly it resists current flow.
- **Unit:** Ohm-metre ($\Omega \cdot m$)
- Resistivity itself varies with temperature, similar to resistance.

### Conductivity ($\sigma$)
- The **reciprocal of resistivity**: $\sigma = \dfrac{1}{\rho}$
- Measures how well a material conducts electricity.
- **Unit:** Siemens per metre (S/m)

**Example Resistivity Values at 20°C:**

| Material | Resistivity ($\rho$) ($\Omega \cdot m$) | Classification |
| :--- | :--- | :--- |
| Copper | $1.7 \times 10^{-8}$ | Conductor |
| Silicon | $\approx 2.3 \times 10^{3}$ | Semiconductor |
| Quartz (Fused) | $\approx 5 \times 10^{16}$ | Insulator |

## Special Cases

**Superconductors:** Materials whose resistance drops to **exactly zero** below a critical temperature. In this state, they conduct electricity with no energy loss.

**Thermistors:** Semiconductor-based resistors with a large and predictable change in resistance with temperature, used in temperature sensors and control circuits.

---

<!-- note kx738gsrj6qgsrv4fcx6swzt7x85p9v5 | topic ms70cx0w972h44m35zyw68gbp985qe3g | status published -->
# Light-Dependent Resistor (LDR)

## What Is an LDR?

A **Light-Dependent Resistor (LDR)**, also known as a photoresistor, is an electronic component whose resistance changes in response to the intensity of light falling on it. This property allows LDRs to be used as light sensors in applications such as automatic streetlights and security systems.

The fundamental working principle of an LDR is **photoconductivity**. In a photoconductive material, the absorption of light photons frees charge carriers (electrons and holes), which increases the material's electrical conductivity and therefore decreases its resistance.

<CaptionedImage src="kg288s0j9xhm46nzgqfbpj34px8dg45x" alt="LDR component illustration" />
## Resistance vs Light Intensity

LDRs exhibit an **inverse relationship** between resistance and light intensity.

- **In Darkness:** An LDR has a very high resistance, often in the mega-ohm ($M\Omega$) range. This is known as the **Dark Resistance**.
- **In Bright Light:** An LDR's resistance drops significantly, often to just a few hundred ohms ($\Omega$).

This relationship is represented by a declining curve on a resistance vs. light intensity graph.

<CaptionedImage src="kg223xs5jexykepv4ddwqabvh18dhhn0" alt="Graph showing LDR resistance decreasing as light intensity increases" caption="Graph showing LDR resistance decreasing as light intensity increases" />

## Types of LDRs

1. **Intrinsic LDRs:** Made from pure semiconductor materials such as Silicon (Si) or Germanium (Ge). They are sensitive to visible light.
2. **Extrinsic LDRs:** Made from semiconductor materials doped with impurities (e.g., Cadmium Sulfide, CdS). Doping makes them sensitive to specific, often longer, wavelengths such as infrared. CdS is the most common material for visible-light LDRs because its spectral response closely matches the human eye.

## Mechanism of Photoconductivity

When photons with sufficient energy strike the semiconductor material:
1. Photon energy is absorbed by electrons in the valence band.
2. Electrons are promoted to the conduction band, leaving behind **holes**.
3. Both electrons and holes act as charge carriers.
4. More carriers → higher conductivity → **lower resistance**.

The greater the light intensity, the more photons are absorbed, and the more charge carriers are generated.

## Characteristics of LDRs

| Property | Detail |
|---|---|
| Resistance Range | $M\Omega$ (dark) to a few hundred $\Omega$ (bright light) |
| Wavelength Sensitivity | Varies with wavelength (colour) of light |
| Temperature Sensitivity | Higher sensitivity at lower temperatures |
| Response Speed | Relatively slow compared to photodiodes |

## Use in a Potential Divider Circuit

A common application of an LDR is in a **potential divider circuit**. The LDR is connected in series with a fixed resistor $R_{fixed}$. As light level changes, the LDR's resistance changes, altering the voltage distribution:

$$V_{out} = V_{in} \times \frac{R_{fixed}}{R_{LDR} + R_{fixed}}$$

- **More light** → $R_{LDR}$ decreases → $V_{out}$ across $R_{fixed}$ **increases**
- **Less light** → $R_{LDR}$ increases → $V_{out}$ across $R_{fixed}$ **decreases**

This output voltage can trigger a transistor or relay to switch a circuit on or off.

<CaptionedImage src="kg2bnhs3mwxmsj1q5xhw5gt0y18dhr41" alt="Circuit diagram showing an LDR in a potential divider" caption="Circuit diagram showing an LDR in a potential divider" />

## Applications

LDRs are widely used in devices that need to react to the presence or absence of light:

- **Automatic Street Lighting:** Turns lights on at dusk and off at dawn.
- **Security Systems:** Burglar alarms that detect when a light beam is broken.
- **Cameras:** Controls automatic shutter speed and aperture based on ambient light.
- **Robotics:** Line-following robots and light-source detection.
- **Industrial Automation:** Counting items on a conveyor belt as they interrupt a light beam.

---

<!-- note kx75p0t970t85ncfp7dbbrebc585qqps | topic ms72nmrnmzk13hx4y4pn57cht985paqt | status published -->
# Electric Power

## What Is Electric Power?

**Electric power** is the rate at which electrical energy is transferred by an electric circuit: the amount of energy consumed or produced per unit time.

<CaptionedImage src="kg2bahc71rc0wm7qcy8ddg6hfx8dh8ax" alt="AC and DC waveforms" caption="AC and DC waveforms showing the difference between alternating and direct current." />
## Electric Power Formulas

The fundamental definition of electric power is:
$
P = \frac{\text{Energy}}{\text{Time}} = \frac{E}{t}
$

Since the energy transferred to a charge $Q$ by a potential difference $V$ is $E = VQ$, and current $I = Q/t$:
$
P = \frac{VQ}{t} = VI
$

Using Ohm's Law ($V = IR$), two further equivalent forms are derived:

1. **In terms of current and resistance:**
   $P = I^2R$

2. **In terms of voltage and resistance:**
   $P = \frac{V^{\!2}}{R}$

## Energy Dissipation in a Resistor (Joule Heating)

When current flows through a resistor, electrical energy is converted into heat. This is called **Joule heating** or **power dissipation**. The electrical energy dissipated over time $t$ is:
$
E = P \times t = VIt = I^2Rt = \frac{V^{\!2}}{R}t
$

## Units of Electric Power and Energy

**SI Unit of Power:** The **Watt (W)**. It is a <InlineNoteTag label="Derived Unit" notePath="physics-11/derived units" />.
$
1\,\text{W} = 1\,\text{J/s} = 1\,\text{V} \times 1\,\text{A}
$

**Commercial Unit of Energy:** Electrical energy is commercially sold in **Kilowatt-hours (kWh)**. One kWh is the energy consumed by a 1 kW device operating for one hour.
$
1\,\text{kWh} = 1000\,\text{W} \times 3600\,\text{s} = 3.6 \times 10^6\,\text{J}
$

## Summary Table

| Concept | Formula(s) | SI Unit |
| :--- | :--- | :--- |
| **Power** | $P = VI = I^2R = V^{\!2}/R$ | Watt (W) |
| **Energy** | $E = P \times t$ | Joule (J) or kWh |

<WorkedExample title="Worked example">



</WorkedExample>


**Problem:** Calculate the monthly cost of using a 50 W light bulb for 8 hours daily, if electricity costs Rs. 20 per kWh. Assume a 30-day month.

**Solution:**

1. Total operating time:
   $\text{Time} = 8\,\text{h/day} \times 30\,\text{days} = 240\,\text{h}$

2. Total energy consumed:
   $\text{Energy} = \frac{50\,\text{W} \times 240\,\text{h}}{1000} = 12\,\text{kWh}$

3. Total cost:
   $\text{Cost} = 12 \times 20 = \text{Rs. }240$

---

<!-- note kx76fq1cv710mwr7nmp0dqt8mn85qmc5 | topic ms77r7dc8r4ndarz86akdvfq3s85praq | status published -->
# Kirchhoff's Laws

## Why We Need Kirchhoff's Laws

**Kirchhoff's Laws** are two fundamental principles that provide a systematic way to analyze complex electrical circuits. They are essential for circuits that contain multiple loops, junctions, or sources of electromotive force (emf), where simple series and parallel resistor rules are insufficient.
## Kirchhoff's First Law (The Current Law or KCL)

This law is a statement of the **conservation of electric charge**. It applies to any **junction** (or node) in a circuit, which is a point where three or more wires meet.

**Statement:** *The algebraic sum of the currents entering a junction is equal to the algebraic sum of the currents leaving that junction.*

$$
\sum I_{in} = \sum I_{out}
$$

**Sign Convention:** Currents flowing *into* a junction are positive (+), and currents flowing *out of* the junction are negative (−). Therefore, the algebraic sum of all currents at a junction is zero:

$$
\sum I = 0
$$

**Example:** For a junction where $I_1$, $I_2$, and $I_3$ flow in, and $I_4$ and $I_5$ flow out:

$$
I_1 + I_2 + I_3 - I_4 - I_5 = 0
$$

<CaptionedImage src="kg2b80qtpp35mmnff6paw6dsz58dhb2c" alt="A junction showing currents flowing in and out." caption="A junction showing currents flowing in and out." />

## Kirchhoff's Second Law (The Voltage Law or KVL)

This law is a statement of the **conservation of energy**. It applies to any **closed loop** in a circuit.

**Statement:** *The algebraic sum of all the potential differences (voltages) around any closed loop in a circuit must be zero.*

$$
\sum \Delta V = 0
$$

**Explanation:** If you start at any point in a closed loop and travel around it, by the time you return to the starting point, your electric potential must be the same. The sum of all potential rises (from EMF sources) must equal the sum of all potential drops (across resistors).

### Sign Conventions for KVL

| Situation | Potential Change |
| :--- | :--- |
| Traverse a resistor **in the direction of current** | $-IR$ (drop) |
| Traverse a resistor **opposite to the current** | $+IR$ (rise) |
| Traverse an EMF source from **− to + terminal** | $+\varepsilon$ (rise) |
| Traverse an EMF source from **+ to − terminal** | $-\varepsilon$ (drop) |

<CaptionedImage src="kg257a2y6t7bhyrgna4vvmfb118dgq72" alt="A single loop circuit used to illustrate KVL." caption="A single loop circuit used to illustrate KVL." />

## Application to Series and Parallel Resistors

Kirchhoff's laws can be used to derive the familiar rules for combining resistors.

- **Resistors in Series:** KCL implies the current is the same through all components. KVL shows that the total voltage is the sum of the individual voltage drops:
$$V = V_1 + V_2 + \ldots \implies R_{eq} = R_1 + R_2 + \ldots$$

- **Resistors in Parallel:** KVL implies the voltage is the same across all parallel branches. KCL shows that the total current is the sum of the branch currents:
$$I = I_1 + I_2 + \ldots \implies \frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \ldots$$

## Summary

| Law | Based on Conservation of... | Applies to... | Formula |
| :--- | :--- | :--- | :--- |
| **Current Law (KCL)** | Charge | Junctions (Nodes) | $\sum I = 0$ |
| **Voltage Law (KVL)** | Energy | Closed Loops | $\sum \Delta V = 0$ |

---

<!-- note kx7cvtvevtmwm6ancm76c8fd2d85pxt7 | topic ms745ep5y73esm1de4r3g0ctnx85p8x1 | status published -->
# The Null Method of Measurement

## What Is the Null Method?

The **Null Method** is a high-accuracy measurement technique used to determine an unknown quantity by comparing it against a known standard. Instead of measuring the unknown value directly, the method involves adjusting a variable component until a sensitive indicator device reads zero, or "null." This null condition signifies that the unknown quantity is perfectly balanced against the known standard.

Two classic electrical circuits that utilize this principle are the **Wheatstone Bridge** and the **Potentiometer**.
## 1. The Wheatstone Bridge

The **Wheatstone Bridge** is a circuit designed to precisely measure an unknown electrical resistance. It consists of a diamond-shaped network of four resistors and a sensitive current detector called a galvanometer.

### Working Principle

- The circuit has two parallel branches. Three of the resistors ($P$, $Q$, $S$) have known values, and one ($R$) is the unknown resistance.
- A galvanometer is connected between points **b** and **d**.
- The value of one of the known resistors (often a variable resistor, $S$) is adjusted until the **galvanometer shows zero current flow**.
- This "null" reading indicates that points **b** and **d** are at the same electric potential, and the bridge is said to be **balanced**.

<CaptionedImage src="kg2bnvv1pxkh6wq1mg1332p4cd8dhqhf" alt="Figure 1: Circuit diagram of a Wheatstone Bridge." caption="Figure 1: Circuit diagram of a Wheatstone Bridge." />

### Balance Condition Equation

When the bridge is balanced, the ratio of resistances in one branch is equal to the ratio in the other branch:
$$
\frac{P}{Q} = \frac{R}{S}
$$

From this, the unknown resistance ($R$) can be calculated with high precision:
$$
R = S \left( \frac{P}{Q} \right)
$$

## 2. The Potentiometer

A **potentiometer** is a versatile instrument used for the precise measurement of potential differences (voltages) without drawing any current from the circuit being measured.

<InlineNoteTag label="Precision and Accuracy" notePath="physics-11/precision-and-accuracy" />

### Principle and Construction

- **Principle:** It operates on the principle that for a wire of uniform cross-section and composition, the potential drop across any length of the wire is directly proportional to that length.
- **Construction:** It consists of a long, uniform resistance wire stretched between two terminals, a standard driving cell, a galvanometer, and a movable contact called a jockey.

<CaptionedImage src="kg264d4fgwem7xer4sk1w9ad518dhs87" alt="Figure 2: Circuit diagram of a potentiometer." caption="Figure 2: Circuit diagram of a potentiometer." />

### Applications of the Potentiometer

#### a) Comparing EMFs of Two Cells

- The potentiometer can compare the electromotive forces (EMFs) of two cells, $\varepsilon_1$ and $\varepsilon_2$.
- The jockey is moved along the wire for each cell until the galvanometer reads zero. The lengths at which this null point is found ($l_1$ and $l_2$) are recorded.
- The ratio of the EMFs is equal to the ratio of the balancing lengths:
$$
\frac{\varepsilon_1}{\varepsilon_2} = \frac{l_1}{l_2}
$$

#### b) Measuring the Internal Resistance of a Cell

- The potentiometer can also be used to find the internal resistance ($r$) of a cell.
- First, the balancing length ($l_1$) is found for the cell's EMF ($\varepsilon$).
- Then, a known external resistance ($R$) is connected across the cell, and a new, shorter balancing length ($l_2$) is found for its terminal potential difference ($V$).
- The internal resistance is calculated using the formula:
$$
r = R \left( \frac{l_1 - l_2}{l_2} \right)
$$

## Why the Null Method Is More Accurate

Null methods are more accurate than direct-deflection methods because they do not depend on the calibration or precision of the measurement device itself, like a voltmeter or ammeter. The accuracy depends only on the precision of the known standard components, such as the standard resistors in a Wheatstone Bridge. Furthermore, at the null point, no current is drawn from the circuit being measured, so the measurement does not disturb the circuit's original state.


---

<!-- note kx76se88g5v06bhmanq7gapc1s85pr6t | topic ms72d7y92a3593pnkph6ytdat185p3bg | status published -->
# Thermistor

## What Is a Thermistor?

A **thermistor** is a type of resistor whose resistance is highly dependent on temperature. The name is a portmanteau of "thermal" and "resistor." These passive electronic components are widely used as temperature sensors and for temperature control in a vast range of applications.

<CaptionedImage src="kg27vzg7yqzdhs9d8c44ym50yn8dh9g9" alt="Image of various types of thermistors" caption="Various types of thermistors used in electronic circuits." />
## Types of Thermistors

Thermistors are primarily classified into two types based on how their resistance responds to changes in temperature.

1. **NTC (Negative Temperature Coefficient) Thermistor:**
   - Resistance **decreases** as temperature **increases**.
   - Most common type; used for temperature sensing and measurement.
   - Behaviour is due to increased charge carrier liberation in the semiconductor at higher temperatures.

2. **PTC (Positive Temperature Coefficient) Thermistor:**
   - Resistance **increases** as temperature **increases**.
   - Used as self-regulating heating elements or resettable fuses for overcurrent protection.

## Materials and Construction

Thermistors are made from **semiconductor materials**, specifically sintered metallic oxides of manganese, nickel, cobalt, or iron. The powders are compressed and heated (sintered) into ceramic-like shapes: **beads, discs, or rods**, then fitted with connecting leads.
## Non-Linearity of Thermistors

The resistance–temperature relationship of a thermistor is highly **non-linear**. This means the change in resistance is not constant for each degree of temperature change. In practice, this requires:
- **Calibration** of the thermistor for the specific temperature range.
- Use of mathematical models such as the **Steinhart-Hart equation** to convert resistance readings into accurate temperatures.

## Why Thermistors Are Preferred for Temperature Sensing

Thermistors have a very high **temperature coefficient of resistance** because they are made from semiconducting oxides. A small temperature change produces a large, easily measurable resistance change. By contrast, metallic resistors have a much smaller, nearly linear response and far lower sensitivity.

## Applications of Thermistors

### 1. Temperature Sensing and Measurement
- **Digital Thermometers:** Used in medical and industrial thermometers for accurate temperature readings.
- **Home Appliances:** Found in ovens, refrigerators, and air conditioners to monitor and regulate temperature.
- **Automotive:** Used to measure engine coolant and oil temperature.

### 2. Temperature Control and Compensation
- **Circuit Protection:** A PTC thermistor acts as a fuse: if current gets too high, the thermistor heats up, resistance increases sharply, and current is effectively cut off.
- **Temperature Compensation:** Thermistors counteract temperature-dependent behaviour in electronic circuits, ensuring consistent performance over a wide temperature range.

### 3. Use in a Potential Divider Circuit

A common application of an NTC thermistor is in a **potential divider circuit**:
- **Setup:** The thermistor is connected in series with a fixed resistor $R$.
- **Function:** As temperature changes, the thermistor resistance changes, altering the voltage ratio across the divider. The output voltage $V_{out}$ changes predictably with temperature.
- This changing voltage can be read by a microcontroller or used to trigger a component such as a fan or warning light.

<CaptionedImage src="kg2dc9tk9he72n7xwfx41heh8x8dgz3v" alt="Circuit diagram of a thermistor in a potential divider" caption="Circuit diagram of a thermistor in a potential divider." />

<InlineNoteTag label="Precision and Accuracy" notePath="physics-11/precision-and-accuracy" />


<SideActivity kind="info" title="For Your Information">
<p>Metals (e.g. copper, aluminum) have positive temperature coefficient of resistance because the resistance of metals increases with the rise in temperature. Electrolytes, insulators (e.g. glass, mica, rubber etc.) and semiconductors (e.g. germanium, silicon etc.) have negative temperature co-efficient of resistance because their resistance decreases with the rise in temperature.</p>
</SideActivity>

---

<!-- note kx77rcfyj0sbqdz5d1g9p0hreh85pvc6 | topic ms7b8ny1w1dw8skm0j8z4t8gf585qfaq | status published -->
# 11.8 Carbon Fibre in Concrete Bridge

## What Is Carbon Fibre-Reinforced Concrete?

Carbon fibre-reinforced concrete is an advanced composite material that significantly enhances the performance of traditional concrete. By embedding short carbon fibres into the concrete mix, the resulting material gains superior strength, durability, and other beneficial properties, making it particularly valuable for reinforcing structures like bridges.
## Benefits of Carbon Fibre in Concrete

The addition of carbon fibres provides a wide range of advantages over standard concrete. Mechanically, it increases **compressive strength** (the ability to withstand crushing forces), greatly improves **tensile strength** (resistance to pulling or stretching forces), and enhances **elasticity**, the material's ability to deform under load and return to its original shape. Durability is also improved: the material has better **chemical stability** against degradation, greater **abrasion resistance** to surface wear and tear, and, unlike steel rebar, carbon fibres do not rust, giving strong **corrosion resistance** that makes the concrete ideal for corrosive environments.

Structurally, carbon fibres help control and reduce shrinkage cracks that form as concrete cures, and make the concrete tougher and less prone to shattering (reduced brittleness). Other advantages include being lighter than traditional concrete, which can reduce structural load and ease transportation, and good thermal conductivity, which improves the transfer of heat through the material.

## Application in Concrete Bridges

Carbon fibres are especially effective in the construction and reinforcement of bridges.

- **Primary Goals:** The main objectives are to improve **flexural strength** (resistance to bending) and **reduce the width of cracks** that may form under stress.
- **Optimal Amount:** The ideal quantity of carbon fibre is approximately **0.3% by volume** of the concrete. This concentration provides a significant boost in performance without being excessive.

In physics, the properties of these materials are often analyzed using <InlineNoteTag label="Dimensions" notePath="physics-11/dimensions" /> and <InlineNoteTag label="Derived Units" notePath="physics-11/derived units" />. For example, the stress applied to these bridges is measured in Pascals.

## Inspection and Reliability

A unique advantage of carbon fibre reinforcement is the ability to monitor the structural health of the bridge.

- **Electrical Sensing:** Since carbon fibres are electrically conductive, sensors can be used to measure the electrical resistance of the concrete.
- **Crack Detection:** If cracks begin to form, some carbon fibres will break or separate. This causes an **increase in the electrical resistance**, which can be detected by the sensor. This method allows engineers to identify internal damage long before it becomes visible, ensuring the long-term reliability and safety of the structure.

<CaptionedImage src="kg26exa0amce6dfretkz145mtx8e54wb" alt="Figure 11,18: Carbon fibre-reinforced concrete." caption="Figure 11,18: Carbon fibre-reinforced concrete." />

| Benefit | Description |
| :--- | :--- |
| **Strength** | Increased compressive, tensile, and flexural strength. |
| **Durability** | High resistance to corrosion, chemicals, and abrasion. |
| **Safety** | Reduces brittleness and allows for non-destructive inspection via electrical sensors. |
| **Practicality** | Lighter weight than traditional reinforced concrete. |
