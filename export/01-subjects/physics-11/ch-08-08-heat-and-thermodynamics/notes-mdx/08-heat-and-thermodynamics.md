<!-- note kx7dt77hqx25zj5cr2f7n13cnd85qjt0 | topic ms7a0zqk9ef9wz579t0nbetnkh85paqx | status published -->
# First Law of Thermodynamics

## The First Law as Conservation of Energy

The **First Law of Thermodynamics** expresses the **law of conservation of energy**. Energy cannot be created or destroyed; it can only be transferred or transformed from one form to another. In a thermodynamic system, the law relates the change in internal energy to the heat added to the system and the work done by the system.

## Heat and Internal Energy

When heat ($Q$) is supplied to a system, it can produce two effects: it can increase the system's **internal energy** ($\Delta U$), which is the sum of all microscopic kinetic and potential energies of its particles, and it can cause the system to perform **work** ($W$) on its surroundings.

For an ideal gas, internal energy depends only on temperature. Therefore, internal energy is directly proportional to temperature.

## Equation of the First Law

The relationship is expressed mathematically as:

$$
Q = \Delta U + W
$$

Where:

- $Q$ is the net heat added to the system.
- $\Delta U$ is the change in the system's internal energy.
- $W$ is the net work done *by* the system.

**Sign Conventions**:

- $Q$ is positive when heat is added to the system.
- $W$ is positive when work is done *by* the system (expansion).
- $\Delta U$ is positive when the internal energy increases.

## Examples of the First Law

- **Melting Ice:** Heat energy is transferred from the surroundings to an ice cube, increasing its internal energy to break the bonds of its solid structure and change its state to liquid water.
- **Sweating:** Your body transfers heat to sweat. This heat provides the energy for the sweat to evaporate, thus removing heat from your body and lowering your temperature.
- **Human Metabolism:** The chemical energy in food is converted through metabolic processes. This energy is used to do work and to maintain the body's internal energy, with the excess released as heat.

See <InlineNoteTag label="Applications Of 1st Law Of Thermodynamics" notePath="physics-11/applications-of-1st-law-of-thermodynamics" /> for further applications of this law.
## Thermodynamic Processes

### 1. Isothermal Process

An **isothermal process** occurs at **constant temperature**. For an ideal gas, internal energy depends only on temperature, so if temperature is constant, the change in internal energy is zero.

- **Condition**: $\Delta U = 0$
- **First Law Equation**: Since $\Delta U = 0$, the first law simplifies to:

$$
Q = W
$$

Any heat added to the system is entirely converted into work done by the system.

- **Governing Law**: For a gas, this process follows **Boyle's Law** ($PV = \text{constant}$).
- **Example**: The very slow expansion or compression of a gas in a container in thermal contact with a large heat reservoir, or the melting of ice at 0°C.

<CaptionedImage src="kg27xj4sw4ph4m37825eahtvrn8dh57t" alt="Figure 1: Isothermal process" caption="Figure 1: Isothermal process showing constant temperature with PV diagram following Boyle's Law." />

---

### 2. Adiabatic Process

An **adiabatic process** is one where **no heat is transferred** into or out of the system. This occurs when the system is perfectly insulated or when the process happens very rapidly.

- **Condition**: $Q = 0$
- **First Law Equation**: Since $Q = 0$, the first law becomes:

$$
0 = \Delta U + W \quad \Rightarrow \quad W = -\Delta U
$$

Any work done by the system comes at the expense of its own internal energy, typically causing its temperature to change.

- **Example**: The rapid compression of air in a bicycle pump or the expansion of gas in the cylinder of an engine.

See <InlineNoteTag label="Adiabatic Equation" notePath="physics-11/adiabatic-equation" /> for the equation governing this process.

<CaptionedImage src="kg2baqh9hxtxyfyf3gytmwpte58dhdah" alt="Figure 2: Adiabatic process" caption="Figure 2: Adiabatic process showing no heat transfer with PV curve steeper than isothermal." />

---

### 3. Isochoric Process

An **isochoric process** occurs at **constant volume**. Since volume does not change, the system does no work on its surroundings.

- **Condition**: $\Delta V = 0$, which means $W = 0$
- **First Law Equation**: Since $W = 0$, the first law simplifies to:

$$
Q = \Delta U
$$

All heat added to the system goes into increasing its internal energy.

- **Example**: Heating a gas in a sealed, rigid container.

---

### 4. Isobaric Process

An **isobaric process** occurs at **constant pressure**. In this process, heat can be exchanged, work can be done, and internal energy can change.

- **Condition**: Pressure ($P$) is constant.
- **Work Done**: The work done by the system during an expansion is given by:

$$
W = P \Delta V
$$

- **First Law Equation**: The full form applies: $Q = \Delta U + P \Delta V$.

- **Example**: Boiling water in an open container where pressure remains constant at atmospheric pressure.

<CaptionedImage src="kg2e48kjzr0qygbwzz51bzjgd18dg3e5" alt="Figure 4: Isobaric process" caption="Figure 4: Isobaric process showing constant pressure with horizontal line on PV diagram." />

---

| Process | Key Characteristic | First Law Expression | Example |
| :--- | :--- | :--- | :--- |
| **Isothermal** | Constant temperature | $Q = W \quad (\Delta U = 0)$ | Melting of ice at 0°C |
| **Adiabatic** | No heat transfer | $W = -\Delta U \quad (Q = 0)$ | Compression of air in a piston |
| **Isochoric** | Constant volume | $Q = \Delta U \quad (W = 0)$ | Heating gas in a sealed container |
| **Isobaric** | Constant pressure | $Q = \Delta U + P \Delta V$ | Heating water in an open pot |

---

The <InlineNoteTag label="2nd Law Of Thermodynamics" notePath="physics-11/2nd-law-of-thermodynamics" /> builds upon the first law by introducing the concept of entropy and the direction of natural processes.

---

<!-- note kx7dbw5s7rfkbq8jnpvdrjgszx85pe2q | topic ms7bp39dxke110apa7dv8zz8x185pwjt | status published -->
# Second Law of Thermodynamics

## The Direction of Thermodynamic Processes

While the First Law of Thermodynamics confirms that energy is conserved, it does not describe the *direction* in which thermodynamic processes occur or their efficiency. The **Second Law of Thermodynamics** addresses these crucial aspects, establishing the fundamental limits on the conversion of heat into work and defining the natural direction of heat flow.
## Working Principle of a Heat Engine

A **heat engine** is a device that converts heat energy into mechanical work by operating in a cycle between a hot source and a cold sink.

- It absorbs heat $Q_H$ from a **high-temperature source** (hot reservoir).
- It converts part of this heat into **useful work** $W$.
- It rejects the remaining heat $Q_C$ to a **low-temperature sink** (cold reservoir).
- The working substance returns to its initial state to complete the cycle.

The net work done per cycle: $W = Q_H - Q_C$

The efficiency of a heat engine:
$$\eta = \frac{W}{Q_H} = 1 - \frac{Q_C}{Q_H}$$

## The Kelvin-Planck Statement (The Heat Engine Statement)

This statement describes the limitations of converting heat into work.

**Statement:** *"It is impossible to construct a device that operates in a cycle and produces no other effect than the transfer of heat from a single body in order to produce work."*

**In simpler terms:**

- You cannot build a heat engine that is 100% efficient.
- To produce continuous work, a heat engine must draw heat ($Q_H$) from a high-temperature source, convert *some* of it into work ($W$), and reject the remaining energy as waste heat ($Q_C$) to a lower-temperature sink.
- It is impossible to convert all the absorbed heat into useful work ($W < Q_H$).

**Key Takeaway:** Perfect efficiency in converting heat to work is impossible. There will always be waste heat. This principle governs all heat engines, from power plants to car engines.

## The Clausius Statement (The Refrigerator Statement)

This statement describes the natural direction of heat flow.

**Statement:** *"It is impossible to construct a device that operates in a cycle and produces no other effect than the transfer of heat from a colder body to a hotter body."*

**In simpler terms:**

- Heat will not spontaneously flow from a cold object to a hot object.
- To move heat "uphill" (from a cold region to a hot region), external **work** must be done on the system.
- A **refrigerator** is a heat engine operating in reverse: it uses electrical work to pump heat from the cold interior to the warmer room outside.

**Key Takeaway:** This explains why refrigerators and air conditioners require energy (electricity) to operate. They are heat pumps that use work to move heat from a cold interior to a warmer exterior.

## Reversible and Irreversible Processes

The Second Law introduces the concept of **directionality**: natural processes have a preferred direction.

- A **reversible process** is one that can be reversed by an infinitesimally small change in conditions, leaving no net change in the system or surroundings. It proceeds through a series of equilibrium states. Example: a perfectly slow (quasi-static) isothermal expansion.
- An **irreversible process** is one that cannot be reversed without leaving a permanent change in the system or surroundings. All real natural processes are irreversible. Examples: heat flowing from hot to cold, gas expanding into a vacuum, friction.

**Conditions for reversibility:**
1. The process must be quasi-static (infinitely slow).
2. There must be no dissipative forces (no friction, no turbulence).

The First Law allows a process to happen in reverse (e.g., work turning entirely into heat), but the Second Law forbids the reverse of many natural processes (e.g., heat turning entirely into work in a cycle).
## Entropy: The Measure of Disorder

**Entropy ($S$)** is a thermodynamic state quantity that measures the degree of **disorder or randomness** in a system.

- The greater the disorder of a system, the higher its entropy.
- For a reversible process, the change in entropy is defined as:
$$\Delta S = \frac{Q}{T}$$
where $Q$ is the heat absorbed and $T$ is the absolute temperature (in Kelvin).
- SI unit of entropy: **J K⁻¹** (joules per kelvin).

### Temperature and Disorder

An increase in temperature increases the kinetic energy of molecules, causing them to move faster and more randomly. This greater molecular motion **increases the disorder (entropy)** of the system:
$$\text{Higher } T \Rightarrow \text{Greater molecular motion} \Rightarrow \text{Higher entropy}$$

### The Second Law in Terms of Entropy

- In any **natural (irreversible) process**, the total entropy of the universe always **increases**: $\Delta S_{total} > 0$
- For a **reversible process**: $\Delta S_{total} = 0$
- Entropy of an isolated system **never decreases**.

### Systems Tend Toward Disorder

Natural systems spontaneously evolve toward states of **greater disorder** (higher entropy). This is because there are vastly more possible disordered states than ordered ones: disorder is statistically overwhelmingly more probable.

Example: A drop of ink in water spreads out spontaneously (increasing disorder) but never spontaneously collects back into a drop.
## Energy Degradation and Entropy

An increase in entropy represents the **degradation of energy**: the conversion of high-quality, useful energy into low-quality, less useful energy (waste heat).

- **High-quality energy** (e.g., mechanical work, electrical energy) can be fully converted to other forms.
- **Low-quality energy** (e.g., low-temperature waste heat) has limited ability to do useful work.
- During every natural process, some high-quality energy is irreversibly degraded into low-quality heat, increasing the entropy of the universe.

This is why the "energy crisis" is not about the *quantity* of energy (which is conserved by the First Law) but about the *quality* of energy: we are running out of high-quality, easily usable energy sources.

| Law | Description |
| :--- | :--- |
| **First Law** | Deals with the **quantity** of energy (Conservation). Energy cannot be created or destroyed. |
| **Second Law** | Deals with the **quality** and **direction** of energy. Processes occur in a certain direction; energy quality degrades. |
## Real-Life Examples

1. **Heat Engines (Kelvin-Planck):**
   - A **car's internal combustion engine** burns fuel to create heat. This heat expands gases that push pistons to do work. However, a significant amount of heat is expelled through the exhaust and radiator as waste heat. Typical efficiency is only 20–30%.

2. **Refrigerators and Air Conditioners (Clausius):**
   - A **refrigerator** uses an electric motor (work) to run a compressor, pumping heat from the cold compartment inside to the warmer room outside. Without the motor doing work, heat would naturally flow *into* the fridge, not out of it.

3. **Entropy in everyday life:**
   - A broken egg never spontaneously reassembles.
   - A hot cup of coffee cools down; it never spontaneously heats up from room temperature.
   - These are all manifestations of the universe's tendency toward greater disorder.

---

<!-- note kx7f215xdc5q3f2sam5rabzpbx85qbsk | topic ms794bmrr8xr0sc3dhj89jz00d85pqjp | status published -->
# Adiabatic Process and Equation

An **adiabatic process** is a thermodynamic process in which there is **no heat transfer** into or out of the system ($Q = 0$). This condition is achieved if the system is perfectly insulated from its surroundings or if the process occurs so rapidly that there is no time for significant heat exchange.

For an adiabatic process, the relationship between the pressure ($P$) and volume ($V$) of an ideal gas is described by the **adiabatic equation**:

$$
PV^\gamma = \text{constant}
$$

<CaptionedImage src="kg26jvvq3x73vr24vyke2pyabh89h36g" alt="Adiabatic-process" caption="Adiabatic-process" />

## No Heat Transfer: The Adiabatic Condition

An **adiabatic process** is a thermodynamic process in which there is **no heat transfer** into or out of the system ($Q = 0$). This condition is achieved if the system is perfectly insulated from its surroundings or if the process occurs so rapidly that there is no time for significant heat exchange.

For an adiabatic process, the relationship between the pressure ($P$) and volume ($V$) of an ideal gas is described by the **adiabatic equation**:

$$
PV^\gamma = \text{constant}
$$
## 1. The First Law of Thermodynamics in an Adiabatic Process

The First Law of Thermodynamics is given by $Q = \Delta U + W$. In an adiabatic process, the heat transfer ($Q$) is zero.

- **Condition:** $Q = 0$
- **First Law Equation:** The law simplifies to:
  $$
  0 = \Delta U + W \quad \implies \quad \Delta U = -W
  $$
- **Implication:** This expresses the **conservation of energy**: any work done by the system comes entirely at the expense of its own internal energy.
  - If the system **expands** (does work on surroundings, $W > 0$): internal energy decreases ($\Delta U < 0$) and temperature **drops**.
  - If the system is **compressed** (work done on it, $W < 0$): internal energy increases ($\Delta U > 0$) and temperature **rises**.
## 2. The Adiabatic Index ($\gamma$)

The exponent $\gamma$ (gamma) in the adiabatic equation is known as the **adiabatic index** or the **heat capacity ratio**.

- **Definition:**
  $$
  \gamma = \frac{C_{p}}{C_{v}}
  $$
  where $C_{p}$ is the molar specific heat at constant pressure and $C_{v}$ is the molar specific heat at constant volume.
- **Significance:** Since $C_{p} > C_{v}$ always (by Mayer's relation, $C_{p} - C_{v} = R$), we have $\gamma > 1$.
  - Monatomic ideal gas: $\gamma \approx 1.67$
  - Diatomic ideal gas (e.g., air): $\gamma \approx 1.4$

## 3. Mathematical Derivation of the Adiabatic Equation

The equation $PV^\gamma = \text{constant}$ is derived by combining the First Law of Thermodynamics with the Ideal Gas Law.

### Step 1: Start with the First Law

For an infinitesimal adiabatic process, $dQ = 0$. The First Law gives:
$$
dU = -dW
$$

### Step 2: Substitute expressions for $dU$ and $dW$

- Change in internal energy: $dU = nC_{v}\, dT$
- Work done by the gas: $dW = P\, dV$

Substituting:
$$
nC_{v}\, dT = -P\, dV
$$

### Step 3: Use the Ideal Gas Law

From $PV = nRT$, differentiating:
$$
P\, dV + V\, dP = nR\, dT \implies dT = \frac{P\, dV + V\, dP}{nR}
$$

### Step 4: Combine the Equations

Substitute $dT$ into the equation from Step 2:
$$
nC_{v} \left(\frac{P\, dV + V\, dP}{nR}\right) = -P\, dV
$$

Simplify (cancel $n$, multiply through by $R$):
$$
C_{v}(P\, dV + V\, dP) = -R(P\, dV)
$$

### Step 5: Apply Mayer's Relation

Using $R = C_{p} - C_{v}$:
$$
C_{v}(P\, dV + V\, dP) = -(C_{p} - C_{v})(P\, dV)
$$

Expanding:
$$
C_{v} P\, dV + C_{v} V\, dP = -C_{p} P\, dV + C_{v} P\, dV
$$
$$
C_{v} V\, dP = -C_{p} P\, dV
$$

### Step 6: Separate Variables and Integrate

$$
\frac{dP}{P} = -\frac{C_{p}}{C_{v}}\frac{dV}{V} = -\gamma\frac{dV}{V}
$$

Integrating both sides:
$$
\ln P = -\gamma \ln V + \text{constant}
$$
$$
\ln P + \gamma \ln V = \text{constant} \implies \ln(PV^\gamma) = \text{constant}
$$

Therefore:
$$
\boxed{PV^\gamma = \text{constant}}
$$

## 4. Temperature-Volume and Temperature-Pressure Relations

Using the Ideal Gas Law $PV = nRT$ alongside $PV^\gamma = \text{constant}$, two additional adiabatic relations can be derived:

**Temperature-Volume:**
$$
TV^{\gamma-1} = \text{constant}
$$

**Temperature-Pressure:**
$P^{1-\gamma}T^\gamma = \text{constant}$

These confirm that in an adiabatic process, temperature, pressure, and volume all change simultaneously.
## 5. Adiabatic vs. Isothermal Process

| Feature | Adiabatic | Isothermal |
|---|---|---|
| Heat exchange | $Q = 0$ | $Q \neq 0$ |
| Temperature | Changes | Constant |
| $P$-$V$ relation | $PV^\gamma = C$ | $PV = C$ |
| $P$-$V$ slope | $-\gamma P/V$ | $-P/V$ |

The adiabatic curve is **steeper** than the isothermal curve on a $P$-$V$ diagram because $\gamma > 1$.

## Real-World Example

**Why does pumping a bicycle tire make the pump feel hot?**

When you pump the tire, you rapidly compress the air inside the pump. This compression is nearly adiabatic (too fast for heat to escape). By the First Law for an adiabatic process ($\Delta U = -W$), the work done *on* the gas increases its internal energy, raising its temperature significantly.

---

<!-- note kx7dske6wp703k1hrjwytwfwyn85ph5m | topic ms7e7rrbhxwkjqfm2shfb0rfcn85psmt | status published -->
# Applications of the First Law of Thermodynamics

## One Law, Four Special-Case Processes

The **First Law of Thermodynamics** ($Q = \Delta U + W$) is a universal principle of energy conservation. Its application becomes clearer when we examine specific thermodynamic processes where one variable such as volume, pressure, temperature, or heat is held constant.
## 1. Isochoric Process (Constant Volume)

An isochoric process is one where the volume of the system does not change.

**Condition:** $\Delta V = 0$

**Work Done:** Since work is defined as $W = P\Delta V$, no work is done by or on the system.

$$W = 0$$

**First Law Application:** With $W = 0$, the First Law simplifies to:

$$Q = \Delta U$$

This means that **all heat added to the system goes directly into increasing its internal energy**, which typically results in an increase in its temperature and pressure.

**PV Graph:** An isochoric process is represented by a **vertical line** on a pressure-volume (PV) diagram.

## 2. Isobaric Process (Constant Pressure)

An isobaric process is one where the pressure of the system remains constant.

**Condition:** Pressure $P$ is constant.

**Work Done:** As the volume changes from $V_1$ to $V_2$, the work done is:

$$W = P \Delta V = P(V_2 - V_1)$$

**First Law Application:** The First Law remains in its full form:

$$Q = \Delta U + P\Delta V$$

This means the heat added to the system is used for both **increasing the internal energy** and **doing work** on the surroundings (if it expands).

**PV Graph:** An isobaric process is represented by a **horizontal line** on a PV diagram.

## 3. Isothermal Process (Constant Temperature)

An isothermal process is one where the temperature of the system remains constant. For an ideal gas, the internal energy depends only on temperature.

**Condition:** $\Delta T = 0$

**Internal Energy:** For an ideal gas, the internal energy is a function of temperature only. Therefore, the change in internal energy is zero.

$$\Delta U = 0$$

**First Law Application:** With $\Delta U = 0$, the First Law simplifies to:

$$Q = W$$

This means **all heat added to the system is converted into work done by the system**. To keep the temperature constant during an expansion, heat must be supplied to the system.

**PV Graph:** An isothermal process is represented by a **hyperbolic curve** on a PV diagram, following Boyle's Law ($PV = \text{constant}$).

## 4. Adiabatic Process (No Heat Exchange)

An adiabatic process is one where no heat enters or leaves the system.

**Condition:** $Q = 0$

**First Law Application:** With $Q = 0$, the First Law becomes:

$$0 = \Delta U + W \quad \implies \quad \Delta U = -W$$

This means **any work done by the system comes at the expense of its internal energy**. During an adiabatic expansion, the system does work, its internal energy decreases, and its temperature drops.

**PV Graph:** An adiabatic process is also a curve, but it is **steeper than an isothermal curve** because the temperature drops during expansion, causing the pressure to fall more rapidly.

### Comparison: Adiabatic vs. Isothermal Expansion

Starting from the same point, an adiabatic expansion results in a lower final pressure and temperature compared to an isothermal expansion to the same final volume. This is because, in the adiabatic case, the internal energy drops, while in the isothermal case, heat is added to keep the temperature (and thus internal energy) constant.

## Summary Table

| Process | Condition | First Law Equation | Key Characteristic |
| --- | --- | --- | --- |
| **Isochoric** | Constant Volume ($\Delta V = 0$) | $Q = \Delta U$ | No work is done ($W = 0$). |
| **Isobaric** | Constant Pressure | $Q = \Delta U + P\Delta V$ | Heat is used to change internal energy and do work. |
| **Isothermal** | Constant Temperature ($\Delta T = 0$) | $Q = W$ | No change in internal energy ($\Delta U = 0$). |
| **Adiabatic** | No Heat Exchange ($Q = 0$) | $\Delta U = -W$ | Work is done at the expense of internal energy. |


---

<!-- note kx7ap4g7x9wsxgws9f12tt4dks85q1mr | topic ms7evqr0h307n4jdk5z5ke07hx85qjqp | status published -->
# Carnot Heat Engine and Carnot Cycle

## The Ideal Heat Engine

The **Carnot Heat Engine** is a theoretical, idealized thermodynamic engine proposed by Sadi Carnot in 1824. It is not a practical engine but a conceptual model that operates on a reversible cycle known as the **Carnot Cycle**. Its importance lies in setting the maximum possible efficiency that any heat engine can achieve when operating between two given temperatures.
## Construction of the Ideal Engine

The theoretical engine consists of:

- A cylinder with a frictionless, movable piston.
- The walls of the cylinder and the piston are perfect insulators, preventing heat transfer.
- The base of the cylinder is a perfect conductor, allowing heat to be exchanged with external reservoirs.
- The working substance is typically an ideal gas.

## The Carnot Cycle

The Carnot Cycle is a sequence of four reversible processes that return the working substance to its original state. The cycle involves interaction with a high-temperature hot reservoir ($T_1$) and a low-temperature cold reservoir ($T_2$).

The four steps are:

1. **Isothermal Expansion (A → B):** The cylinder is placed on the hot reservoir at temperature $T_1$. The gas expands slowly, doing work on the piston while absorbing heat ($Q_1$) from the reservoir to keep its temperature constant.

2. **Adiabatic Expansion (B → C):** The cylinder is placed on an insulating stand. The gas continues to expand and do work, but with no heat exchange. As a result, its internal energy decreases, and its temperature drops from $T_1$ to $T_2$.

3. **Isothermal Compression (C → D):** The cylinder is placed on the cold reservoir at temperature $T_2$. An external force compresses the gas, and as work is done on it, the gas rejects heat ($Q_2$) to the cold reservoir to keep its temperature constant.

4. **Adiabatic Compression (D → A):** The cylinder is returned to the insulating stand. The gas is further compressed with no heat exchange. Work is done on the gas, which increases its internal energy and raises its temperature from $T_2$ back to the initial temperature $T_1$.

## The PV Diagram for the Carnot Cycle

On a Pressure-Volume (PV) diagram, the Carnot cycle forms a closed loop. The area enclosed by this loop represents the **net work done ($W$) by the engine** in one cycle.

<CaptionedImage src="kg22zhx25dcg56d7nkt5svtg0x8dgt57" alt="PV Diagram of the Carnot Cycle" caption="Figure 8.18: PV diagram of Carnot cycle." />

| Stage | Process | Heat Transfer | Temperature |
| :--- | :--- | :--- | :--- |
| **A → B** | Isothermal Expansion | Absorbs heat $Q_1$ | Constant at $T_1$ |
| **B → C** | Adiabatic Expansion | None ($Q=0$) | Drops from $T_1$ to $T_2$ |
| **C → D** | Isothermal Compression | Rejects heat $Q_2$ | Constant at $T_2$ |
| **D → A** | Adiabatic Compression | None ($Q=0$) | Rises from $T_2$ to $T_1$ |

<CaptionedImage src="kg26w60c33gr2fsf6pp1aajpwn8dh7e3" alt="Heat flow in a Carnot Engine" caption="Figure 8.19: Heat flow in Carnot engine." />

## Efficiency of the Carnot Engine

The thermal efficiency ($E$) of any heat engine is the ratio of the net work done ($W$) to the heat absorbed from the hot reservoir ($Q_1$).
$$E = \frac{\text{Work Output}}{\text{Heat Input}} = \frac{W}{Q_1}$$

From the First Law of Thermodynamics for a cycle, the net work done is the difference between the heat absorbed and the heat rejected: $W = Q_1 - Q_2$.
$$E = \frac{Q_1 - Q_2}{Q_1} = 1 - \frac{Q_2}{Q_1}$$

For the ideal, reversible Carnot cycle, it can be shown that the ratio of heat exchanged is equal to the ratio of the absolute temperatures of the reservoirs.
$$\frac{Q_2}{Q_1} = \frac{T_2}{T_1}$$

This gives the famous formula for the efficiency of a Carnot engine:
$$E = 1 - \frac{T_2}{T_1}$$

## Carnot's Theorem

This theorem establishes the significance of the Carnot engine. It states:

1. No heat engine operating between two given temperature reservoirs can be more efficient than a reversible Carnot engine operating between the same two reservoirs.
2. All reversible heat engines operating between the same two temperature reservoirs have the same efficiency.

## Why the Carnot Engine Remains Theoretical

A Carnot engine can never reach 100% efficiency. According to the formula $E = 1 - T_2/T_1$, 100% efficiency ($E = 1$) would only be possible if the cold reservoir temperature ($T_2$) were at absolute zero (0 Kelvin), which is physically unattainable.

The Carnot engine is only a theoretical model because its cycle requires processes that are perfectly reversible and infinitely slow to maintain thermal equilibrium (isothermal steps) and perfectly insulated (adiabatic steps). These ideal conditions, such as frictionless pistons, perfect insulators, and infinitely slow processes, cannot be achieved in the real world.


---

<!-- note kx7a71b6m9wjky1fm193sj41cs85pvna | topic ms717fm01xsdd4xkm4434wfmv985q9vw | status published -->
# Entropy

## What Entropy Measures

**Entropy** is a fundamental concept in thermodynamics that serves as a measure of the amount of **disorder, randomness, or uncertainty** in a system. It also quantifies the amount of thermal energy in a system that is not available to do useful work. The concept is central to the Second Law of Thermodynamics, which defines the "arrow of time" and explains why natural processes are irreversible.
## Definition of Entropy

In classical thermodynamics, the change in entropy ($\Delta S$) of a system undergoing a **reversible process** is defined as the amount of heat ($\Delta Q_{rev}$) added to or removed from the system, divided by the absolute temperature ($T$) at which the transfer occurs.

**Mathematical Formulation:**

$$\Delta S = \frac{\Delta Q_{rev}}{T}$$

- $\Delta S$: Change in entropy (Unit: Joules per Kelvin, J/K)
- $\Delta Q_{rev}$: Heat transferred during a reversible process
- $T$: Absolute temperature in Kelvin (K)

Entropy is a **state function**, meaning its value depends only on the current state of the system, not on the path taken to reach that state.

## Entropy and Disorder

Entropy is often described as a measure of disorder. A system with a high degree of randomness and many possible microscopic arrangements has high entropy.

- **Low Entropy (High Order):** A crystalline solid, where atoms are fixed in an orderly lattice.
- **High Entropy (High Disorder):** A gas, where molecules move randomly and chaotically throughout their container.

The natural tendency of systems is to move from states of lower probability (order) to states of higher probability (disorder), which corresponds to an increase in entropy.


<CaptionedImage src="kg26ta9f0ms7g57bp0q0kvzw1189xpxt" alt="Transition from low entropy (ordered state) to high entropy (disordered state)" caption="Transition from low entropy (ordered state) to high entropy (disordered state)" />
## Effect of Temperature on Disorder

An increase in temperature increases the average kinetic energy of the molecules, causing them to move more rapidly and randomly. This greater molecular agitation increases the **disorder** of the system and therefore increases its entropy. Conversely, cooling a substance reduces molecular motion and decreases entropy (e.g., liquid water freezing into ice becomes more ordered).

> **Key point (SLO P-11-C-18):** Higher temperature → greater molecular motion → greater disorder → higher entropy.

## Entropy and the Second Law of Thermodynamics

The Second Law of Thermodynamics can be stated in terms of entropy:

**Statement:** *The total entropy of an isolated system can never decrease over time; it either stays constant or increases.*

This can be expressed mathematically as:

$$\Delta S_{total} \geq 0$$

- **For a reversible process:** The total change in entropy of the universe (system + surroundings) is zero ($\Delta S_{total} = 0$). This is an idealized process where the system is always in equilibrium.
- **For an irreversible process:** The total entropy of the universe always increases ($\Delta S_{total} > 0$). All real-world, spontaneous processes are irreversible.

This law dictates the direction of natural events. Heat spontaneously flows from hot to cold because this process increases the total entropy of the universe.

## Systems Tend Toward Disorder Over Time

All isolated systems naturally evolve toward states of greater disorder. This is because disordered (high-entropy) states are statistically far more probable than ordered (low-entropy) states. For example:

- A drop of ink disperses throughout water: it never spontaneously reconcentrates.
- A broken glass does not spontaneously reassemble.
- Heat flows from hot to cold, never the reverse on its own.

This tendency is captured by the inequality $\Delta S_{total} \geq 0$.
## Degradation of Energy

As entropy increases, energy becomes **less available to do useful work**. This is called the **degradation of energy**.

- In every natural (irreversible) process, some energy is converted into a less organised form (thermal energy spread over the surroundings) that cannot be recovered as useful work.
- This is why no real heat engine can be 100% efficient: some energy is always degraded.
## Applications

- **Heat Engines:** Entropy limits the efficiency of any heat engine. Because heat must be rejected to a cold reservoir to complete a cycle, some energy is inevitably lost as waste heat. This process of dumping heat increases the entropy of the surroundings, ensuring the total entropy of the universe increases, in compliance with the Second Law.
- **Degradation of Energy:** As entropy increases, the energy becomes less available to do work. This is often referred to as the degradation of energy.

- **Ideal Gas:** The change in entropy for an ideal gas undergoing a process from an initial state ($T_1, V_1$) to a final state ($T_2, V_2$) can be calculated with the formula:

$$\Delta S = n C_v \ln\left(\frac{T_2}{T_1}\right) + n R \ln\left(\frac{V_2}{V_1}\right)$$

## The Heat Death of the Universe and Local Entropy Decreases

The "heat death" of the universe is a hypothetical end-state where the universe has reached maximum entropy. In this state, all energy would be uniformly distributed and there would be no temperature differences. Consequently, heat could no longer flow, no work could be done, and all thermodynamic processes would cease.

The entropy of a *system* can decrease, but only if the entropy of its *surroundings* increases by an equal or greater amount. For example, when water freezes into ice, the water itself becomes more ordered (entropy decreases), but this process releases heat into the surroundings, increasing the surroundings' disorder. The total entropy of the universe still increases.


---

<!-- note kx7cc6af8vbhg91d3j2068kh7n85qfyt | topic ms7f7wj58swp6b1hktbd87d65585pf4b | status published -->
# Heat Engine

## Converting Heat Into Work

A **heat engine** is a device designed to convert thermal energy (heat) into mechanical work. It operates by absorbing heat from a high-temperature source, converting a portion of that heat into useful work, and rejecting the remaining energy as waste heat to a lower-temperature sink. This process is fundamental to many technologies, from power plants to vehicle engines.

### 1. Components of a Heat Engine

Every heat engine, regardless of its specific design, consists of three essential components:

| Component | Role | Description |
| :--- | :--- | :--- |
| **Hot Reservoir** | Heat Source | A body at a high temperature ($T_h$) that supplies heat energy ($Q_h$) to the engine. |
| **Working Substance** | Conversion Medium | A fluid (like a gas or steam) that absorbs heat, expands, and does mechanical work. |
| **Cold Reservoir** | Heat Sink | A body at a lower temperature ($T_c$) that absorbs the waste heat ($Q_c$) rejected by the engine. |

#### Figure 1: Heat Engine Components

<CaptionedImage src="kg20a9vgns1s4t8fs308fpwxd18dgkqb" alt="Heat engine showing a hot source, engine, work output, and cold sink." caption="Figure 8.14: Heat engine." />

### 2. Working Principle and Efficiency

A heat engine operates in a continuous cycle. In each cycle:

1. Heat ($Q_h$) is absorbed from the hot reservoir.
2. The working substance expands, performing mechanical work ($W$).
3. Waste heat ($Q_c$) is expelled to the cold reservoir.

The **thermal efficiency** ($\eta$) of a heat engine is the ratio of the useful work done to the heat energy supplied.

$$\text{Efficiency} (\eta) = \frac{\text{Work Output}}{\text{Heat Input}} = \frac{W}{Q_h}$$

According to the First Law of Thermodynamics, the work done is the difference between the heat absorbed and the heat rejected ($W = Q_h - Q_c$). Therefore, the efficiency is:

$$\eta = \frac{Q_h - Q_c}{Q_h} = 1 - \frac{Q_c}{Q_h}$$

The Kelvin-Planck statement of the Second Law of Thermodynamics dictates that no heat engine can be 100% efficient; some waste heat ($Q_c$) must always be rejected.
## Application: The Petrol Engine

The **petrol engine** (or gasoline engine) is a common type of **internal combustion engine** used in most cars. It is a prime example of a heat engine.

- **Function:** It burns a mixture of petrol and air inside its cylinders to create high-temperature, high-pressure gas. This gas expands and pushes pistons, generating mechanical work.
- **Efficiency:** Petrol engines are not very efficient. Typically, only **25% to 30%** of the chemical energy in the fuel is converted into useful work. The rest is lost as heat through the exhaust and cooling system.

### The Four-Stroke Cycle

Most petrol engines operate on a four-stroke cycle:

| Stroke | Piston Movement | Valves | Action |
| :--- | :--- | :--- | :--- |
| **1. Intake** | Down | Inlet open, Outlet closed | The piston moves down, drawing a fuel-air mixture into the cylinder. |
| **2. Compression** | Up | Both closed | The piston moves up, compressing the fuel-air mixture adiabatically. |
| **3. Power** | Down | Both closed | A spark plug ignites the mixture, causing a rapid expansion that pushes the piston down, doing work. |
| **4. Exhaust** | Up | Inlet closed, Outlet open | The piston moves up, pushing the burnt gases out of the cylinder. |

#### Figure 2: Petrol Engine Strokes

<CaptionedImage src="kg29y15jhmq5m3dm46an90eyms8dg0n3" alt="Four strokes of a petrol engine cycle." caption="Figure 8.15: Petrol engine cycles." />

## Carnot Engine

A **Carnot engine** is a theoretical, ideal heat engine that operates on the **Carnot cycle**: a reversible cycle consisting of four processes:

1. **Isothermal expansion** at temperature $T_H$ (heat $Q_H$ absorbed from hot reservoir)
2. **Adiabatic expansion** (temperature drops from $T_H$ to $T_C$)
3. **Isothermal compression** at temperature $T_C$ (heat $Q_C$ rejected to cold reservoir)
4. **Adiabatic compression** (temperature rises from $T_C$ back to $T_H$)

### Carnot Efficiency

The efficiency of a Carnot engine depends **only on the absolute temperatures** of the hot source ($T_H$) and cold sink ($T_C$):

$$\eta_{Carnot} = 1 - \frac{T_C}{T_H} = \frac{T_H - T_C}{T_H}$$

where temperatures are in **Kelvin**.

### Carnot's Theorem (Efficiency Limit)

**Carnot's Theorem** states that:
- No heat engine operating between two given temperatures can be more efficient than a Carnot engine operating between the same temperatures.
- All reversible engines operating between the same two temperatures have the same efficiency.
- The Carnot efficiency sets the **upper limit** for the efficiency of any real heat engine.

This is a direct consequence of the Second Law of Thermodynamics. Since $T_C > 0\text{ K}$ always, the Carnot efficiency is always less than 1 (i.e., less than 100%).

**Example:** A Carnot engine operating between $T_H = 500\text{ K}$ and $T_C = 300\text{ K}$ has efficiency:
$$\eta = 1 - \frac{300}{500} = 1 - 0.6 = 0.4 = 40\%$$
## Internal vs. External Combustion, and Why 100% Efficiency Is Impossible

A heat engine can never be 100% efficient. This is a consequence of the Second Law of Thermodynamics: to operate in a continuous cycle, an engine must return to its initial state, and to do this it must expel waste heat to a cold reservoir. It is fundamentally impossible to convert all the absorbed heat into work without rejecting some of it. The Carnot efficiency formula, $\eta = 1 - \frac{T_C}{T_H}$, shows this directly: reaching $\eta = 1$ would require $T_C = 0\text{ K}$ (absolute zero), which is unattainable.

Heat engines are also classified by where their fuel burns. In an **internal combustion engine** (like a petrol engine), the fuel is burned *inside* the engine's cylinders, and the hot gases produced are the working substance. In an **external combustion engine** (like a steam engine), the fuel is burned *outside* the engine to heat a separate working substance (like water/steam), which then does the work.


<SideActivity kind="tidbit" title="Do You Know?">
<p>How thermodynamics plays a role in the human bodies, in terms of work and energy? Thermodynamics also applies to the living bodies like human. This forms the basis of the biological thermodynamics. As in the cover picture of this chapter, a boy is eating an apple and also riding a bicycle. When he rides a bicycle, heat ( Q ) is transferred out of the body and work (W) is done by him which removes the internal energy (U). Do you know from where human gets the energy for all this process? Human and other living things get energy from the food intake which may be considered as work done on the body (system).</p>
</SideActivity>

---

<!-- note kx77dq6z50t6cq7yshez2rvy3s85qzqz | topic ms72g8m6js5mcateh41xe2rbws85pvnk | status published -->
# Kinetic Theory of Gases

## Explaining Gas Behavior from Molecular Motion

The **Kinetic Theory of Gases** is a scientific model that explains the macroscopic properties of a gas, such as pressure, volume, and temperature, by considering the motion of its constituent molecules. Developed in the 19th century by scientists like Maxwell and Clausius, the theory describes a gas as a large number of submicroscopic particles (atoms or molecules) that are in constant, rapid, random motion.
## The Microscopic Model of a Gas

The core idea of the kinetic theory is that a gas is composed of a vast number of tiny, hard spheres (molecules) that are in continuous, chaotic motion. These molecules collide with each other and with the walls of their container.

<CaptionedImage src="kg298ahpcth1stermbwjgqrgg58dgn3q" alt="Figure 8.2: Gas molecules in a container." caption="Gas molecules in a container." />

## Assumptions of the Kinetic Theory for an Ideal Gas

To simplify the model, the theory makes several key assumptions:

1. **Large Number of Molecules:** The gas consists of a very large number of identical molecules.
2. **Negligible Molecular Volume:** The size of the molecules is negligible compared to the average distance between them.
3. **Random Motion:** The molecules are in constant, random motion, following Newton's laws.
4. **Elastic Collisions:** All collisions between molecules and with the container walls are perfectly elastic, meaning kinetic energy is conserved.
5. **No Intermolecular Forces:** Molecules do not exert any long-range forces on each other; they only interact during collisions.
6. **Negligible Collision Time:** The time spent during a collision is negligible compared to the time between collisions.

## Linking Microscopic and Macroscopic Properties

The power of the kinetic theory is its ability to connect the macroscopic properties we can measure with the microscopic behavior of molecules.

- **Pressure ($P$):** The pressure of a gas is the result of the countless collisions of its molecules with the walls of the container. From kinetic theory:
$$P = \frac{1}{3}\rho\langle v^{\!2} \rangle$$
where $\rho$ is the gas density and $\langle v^{\!2} \rangle$ is the mean square speed.

- **Temperature ($T$):** The absolute temperature of a gas is directly proportional to the **average translational kinetic energy** of its molecules:
$$\langle K.E. \rangle = \frac{3}{2}k_{BT}$$
where $k_{B} = 1.38 \times 10^{-23}$ J/K is the Boltzmann constant. Higher temperature means higher average molecular speed.

- **Volume ($V$):** At constant temperature and pressure, increasing the number of molecules increases the volume. At constant volume, increasing temperature increases pressure (more frequent, harder collisions).

### Root Mean Square (RMS) Speed

The **RMS speed** is a useful measure of the typical molecular speed:
$$v_{rms} = \sqrt{\frac{3RT}{M}}$$
where $R = 8.314$ J mol$^{-1}$ K$^{-1}$ is the universal gas constant, $T$ is absolute temperature, and $M$ is the molar mass. Heavier gases have lower RMS speeds at the same temperature.

## The Ideal Gas Law

The relationship between pressure, volume, temperature, and the amount of gas is described by the **Ideal Gas Law**:

$$PV = nRT$$

Where:
- $P$ = Pressure of the gas (Pa)
- $V$ = Volume of the gas (m³)
- $n$ = Number of moles of the gas
- $R$ = Universal gas constant ($8.314\ \text{J mol}^{-1}\text{K}^{-1}$)
- $T$ = Absolute temperature (K)

An equivalent form using the number of molecules $N$ and Boltzmann constant $k_{B}$:
$$PV = Nk_{BT}$$

An **ideal gas** is a theoretical gas that perfectly follows these assumptions. A **real gas** behaves most like an ideal gas at **low pressure and high temperature**, where molecules are far apart and intermolecular forces are negligible.

> **Why do real gases deviate?** At **high pressure**, molecular volume is no longer negligible. At **low temperature**, intermolecular attractive forces become significant.

### Density of an Ideal Gas

From $PV = nRT$ and $n = m/M$:
$$\rho = \frac{PM}{RT}$$
Density is directly proportional to pressure and molar mass, and inversely proportional to temperature.

## Work in Thermodynamics

In thermodynamics, **work** is a form of energy transfer. For a gas in a cylinder with a movable piston, work is done when the gas expands or is compressed.

### Work Done at Constant Pressure

When a gas expands or contracts at **constant pressure** $P$, the work done is:

$$W = P\Delta V$$

where $\Delta V = V_{f} - V_{i}$ is the change in volume.

### Work Done by the Gas vs. Work Done on the Gas

| Situation | $\Delta V$ | Work | Sign |
|-----------|-----------|------|------|
| Gas **expands** (pushes piston out) | $> 0$ | Done **by** the gas on surroundings | Positive ($W > 0$) |
| Gas **compressed** (piston pushed in) | $< 0$ | Done **on** the gas by surroundings | Negative ($W < 0$) |

**Sign Convention:**
- Work done **by** the gas (expansion): **positive** ($W > 0$)
- Work done **on** the gas (compression): **negative** ($W < 0$)

## The Pressure-Volume (P-V) Graph

The work done during a thermodynamic process can be represented graphically as the **area under the curve on a P-V diagram**.

<ImageGroup>
<CaptionedImage src="kg2e0m3s32j9z3cdqkqqb91pfn8dgqf0" alt="Figure 8.3: Work done by the gas." caption="Work done by the gas during expansion." />

<CaptionedImage src="kg274s2jv7xnkxjg06ak8d0s058dgyzj" alt="Figure 8.4: Area of P-V graph equals Work done." caption="Area under P-V curve represents work done." />
</ImageGroup>

---

<!-- note kx75q5zy9pxp9wjzbwvchebt3185qvbq | topic ms767bhqb1k8zmej94x6me9txd85p8ja | status published -->
# Molar Specific Heats $C_p$ and $C_v$

## Why Two Different Molar Specific Heats?

For a gas, the amount of heat needed to raise its temperature by a given amount depends on whether the process happens at constant volume or constant pressure. This is why gases (unlike solids and liquids) need two distinct molar specific heats, $C_v$ and $C_p$, rather than just one.
## Heat Capacity and Specific Heat: Quick Review

**Heat capacity** ($C$) is the heat required to raise the temperature of an object by 1 K:
$$C = \frac{\Delta Q}{\Delta T} \quad \text{(unit: J/K)}$$

**Specific heat capacity** ($c$) accounts for mass:
$$\Delta Q = cm\Delta T \quad \implies \quad c = \frac{\Delta Q}{m\Delta T} \quad \text{(unit: J\u00b7kg}^{-1}\text{\u00b7K}^{-1}\text{)}$$

**Molar specific heat capacity** ($C_m$) uses moles instead of mass:
$$\Delta Q = C_m n\Delta T \quad \implies \quad C_m = \frac{\Delta Q}{n\Delta T} \quad \text{(unit: J\u00b7mol}^{-1}\text{\u00b7K}^{-1}\text{)}$$
## Molar Specific Heats of Gases: $C_p$ and $C_v$

For gases, the heat required for a given temperature change depends on whether the process occurs at **constant volume** or **constant pressure**.

### Molar Specific Heat at Constant Volume ($C_v$)

$C_v$ is the heat required to raise the temperature of **one mole of a gas by 1 K** at **constant volume**.

**First Law Application:** At constant volume, $\Delta V = 0$, so $W = P\Delta V = 0$. The first law $Q = \Delta U + W$ simplifies to:
$$\Delta Q_v = \Delta U \quad \implies \quad nC_v\Delta T = \Delta U$$

All heat supplied goes entirely into increasing the internal energy of the gas.

### Molar Specific Heat at Constant Pressure ($C_p$)

$C_p$ is the heat required to raise the temperature of **one mole of a gas by 1 K** at **constant pressure**.

**First Law Application:** At constant pressure, the gas expands and does work $W = P\Delta V$. The first law gives:
$$\Delta Q_p = \Delta U + W = \Delta U + P\Delta V \quad \implies \quad nC_p\Delta T = \Delta U + P\Delta V$$

Heat is used for **two purposes**: increasing internal energy AND doing expansion work.

### Why is $C_p > C_v$?

| Process | $\Delta Q$ | $\Delta U$ | $W$ |
| :--- | :--- | :--- | :--- |
| **Constant Volume** | $nC_v\Delta T$ | $\Delta U$ | $0$ |
| **Constant Pressure** | $nC_p\Delta T$ | $\Delta U$ (same) | $P\Delta V > 0$ |

- At constant volume: all heat → internal energy only.
- At constant pressure: heat → internal energy **plus** expansion work.
- Therefore, **more heat is needed at constant pressure** for the same $\Delta T$, so $C_p > C_v$.

---

## Mayer's Relation: Cp - Cv = R

For an ideal gas, the difference between molar specific heats equals the **Universal Gas Constant** $R$.

**Derivation:**

1. First law at constant pressure: $\Delta Q_p = \Delta U + W$
2. Substitute: $nC_p\Delta T = nC_v\Delta T + P\Delta V$
3. From the ideal gas law at constant pressure: $P\Delta V = nR\Delta T$
4. Substitute: $nC_p\Delta T = nC_v\Delta T + nR\Delta T$
5. Divide by $n\Delta T$:
$$\boxed{C_p - C_v = R}$$

where $R \approx 8.314\, J\cdot mol^{-1}\cdot K^{-1}$.

**Physical meaning:** The extra heat $R$ per mole per kelvin at constant pressure is exactly the work done by the gas expanding against constant pressure. This is a direct expression of the **conservation of energy** (First Law).
## Extending Mayer's Relation Beyond Gases

The extra heat needed to raise 1 mole of an ideal gas by 1 K at constant pressure (compared to constant volume) equals the work done by the gas expanding: $W = P\Delta V = nR\Delta T$. Per mole per kelvin, this is exactly $R$.

$C_p > C_v$ also holds for solids and liquids, but the difference is negligible. Solids and liquids expand very little when heated, so $P\Delta V \approx 0$ and $C_p \approx C_v$. We therefore use a single specific heat for solids and liquids.


---

<!-- note kx74jtssw3cdwnaxnz1debn65985p4xq | topic ms74ptz06z5xqprna3rmmyrkpn85qm5j | status published -->
# The Carnot Refrigerator

## Using Work to Move Heat Uphill

A **Carnot Refrigerator** is a theoretical thermodynamic device that operates on a reversed Carnot cycle. It is an idealized model for a refrigerator or heat pump. Unlike a heat engine that uses a temperature difference to produce work, a refrigerator uses **work input** to transfer heat from a low-temperature reservoir to a high-temperature reservoir.
## Working Principle

The Carnot Refrigerator is essentially a Carnot heat engine running in reverse. It follows the **Clausius statement** of the Second Law of Thermodynamics, which states that heat will not spontaneously flow from a cold body to a hot body; external work must be done.

- **Heat Absorption:** It absorbs heat ($Q_L$ or $Q_2$) from a cold reservoir at a low temperature ($T_L$ or $T_2$).
- **Work Input:** An external agent (like a compressor) performs work ($W$) on the system.
- **Heat Rejection:** It rejects a larger amount of heat ($Q_H$ or $Q_1$) to a hot reservoir at a high temperature ($T_H$ or $T_1$).

From the First Law of Thermodynamics, the heat rejected is the sum of the heat absorbed and the work done:

$$Q_H = Q_L + W$$

$$W = Q_H - Q_L$$

## The Reversed Carnot Cycle

The refrigerator operates on a four-stage, reversible cycle, which is the exact reverse of the Carnot heat engine cycle.

1. **Adiabatic Expansion:** The working substance (gas) expands without heat exchange. It does work on its surroundings, and its temperature drops from $T_H$ to $T_L$.
2. **Isothermal Expansion:** The gas is placed in thermal contact with the cold reservoir ($T_L$). It expands at constant temperature, absorbing heat ($Q_L$) from the cold reservoir. This is the **cooling step**.
3. **Adiabatic Compression:** The gas is compressed without heat exchange. Work is done on the gas, raising its temperature from $T_L$ back to $T_H$.
4. **Isothermal Compression:** The gas is placed in contact with the hot reservoir ($T_H$). It is compressed at constant temperature, rejecting heat ($Q_H$) to the hot reservoir. The cycle is complete.

## PV Diagram for the Carnot Refrigerator

On a Pressure-Volume (PV) diagram, the Carnot refrigeration cycle traces the same path as the engine cycle but in the **counter-clockwise direction**. The area enclosed by the loop represents the **net work done on the system ($W$)** per cycle.

## Coefficient of Performance (COP)

The efficiency of a refrigerator is measured by its **Coefficient of Performance (COP)**. The COP is the ratio of the desired effect (heat removed from the cold reservoir) to the required input (work done on the system).

$$\text{COP} = \frac{\text{Desired Heat Removed}}{\text{Work Input}} = \frac{Q_L}{W}$$

Since $W = Q_H - Q_L$:

$$\text{COP} = \frac{Q_L}{Q_H - Q_L}$$

For an ideal Carnot refrigerator, since $Q_H/Q_L = T_H/T_L$, the COP in terms of absolute temperatures (in Kelvin) is:

$$\text{COP} = \frac{T_L}{T_H - T_L}$$

A higher COP indicates a more efficient refrigerator: it removes more heat for a given work input.
## Key Points

**Can the COP of a refrigerator be greater than 1?**
Yes. For most practical refrigerators, COP > 1. This means the heat removed from the cold space is greater than the work used. This does not violate energy conservation: energy is being *moved*, not created. The total energy rejected to the hot reservoir is always $Q_H = Q_L + W$.

**Refrigerator vs. Heat Pump:**
They are physically the same device but differ in purpose. A **refrigerator** aims to cool the cold reservoir (desired effect = $Q_L$). A **heat pump** aims to heat the hot reservoir (desired effect = $Q_H$).

| Formula | Description |
| :--- | :--- |
| $\text{COP} = \dfrac{Q_L}{W}$ | General definition of COP for a refrigerator. |
| $\text{COP} = \dfrac{Q_L}{Q_H - Q_L}$ | COP in terms of heat quantities. |
| $\text{COP} = \dfrac{T_L}{T_H - T_L}$ | COP of an ideal Carnot refrigerator (temperatures in Kelvin). |


---

<!-- note kx7axpzjen6hjwzq6sqqgewecx85q99j | topic ms73dsqa1vanxez1wjva5znp7s85qc6w | status published -->
# Thermodynamic Processes: Reversible, Irreversible, and Cyclic

## Processes and Their Direction in Time

In thermodynamics, a **process** describes the path a system takes as it transitions from one equilibrium state to another, typically involving an exchange of energy. Understanding the nature of these processes, whether they are idealized and can be reversed, or real-world and unidirectional, is fundamental to applying the laws of thermodynamics.
## 1. Reversible Process

A **reversible process** is an idealized process that can be reversed to return both the system and its surroundings to their exact original states. It is a theoretical concept used as a benchmark for analyzing thermodynamic efficiency.

**Conditions for Reversibility:**

1. The process must occur **infinitely slowly** (quasi-statically), so the system is always in thermal and mechanical equilibrium.
2. There must be **no dissipative forces**, such as friction, viscosity, or electrical resistance, that would convert useful energy into heat.

**Characteristics:**

- It is a theoretical ideal that cannot be perfectly achieved in practice.
- It represents the most efficient possible path for a process.
- The net change in the entropy of the universe (system + surroundings) is zero.

**Examples:**

- The extremely slow, frictionless compression or expansion of a gas.
- The gradual melting of ice into water, or freezing of water into ice, where the temperature difference is infinitesimally small.

## 2. Irreversible Process

An **irreversible process** is any process that is not reversible. Once it has occurred, it is impossible to return both the system and its surroundings to their original states. All real-world, spontaneous processes are irreversible.

**Causes of Irreversibility:**

1. **Dissipative Forces:** Friction, viscosity, and other forms of energy dissipation convert work into heat that cannot be fully recovered.
2. **Sudden Changes:** Processes that happen quickly (for example, a rapid expansion of gas into a vacuum, an explosion) are inherently irreversible.
3. **Heat Transfer across a Finite Temperature Difference:** Heat flowing from a hot object to a cold one is a spontaneous, irreversible process.

**Characteristics:**

- All natural processes are irreversible.
- They are less efficient than their corresponding reversible counterparts.
- The total entropy of the universe always increases during an irreversible process.

**Examples:**

- Burning a piece of wood.
- Mixing sugar into coffee.
- Heat flowing from a hot stove to a cold pot (conduction).
- Any process involving friction.

| Feature | Reversible Process | Irreversible Process |
| :--- | :--- | :--- |
| **Nature** | Idealized, theoretical | Real-world, natural |
| **Speed** | Infinitely slow | Occurs at a finite speed |
| **Dissipation** | No friction or other dissipative forces | Dissipative forces are present |
| **Entropy** | Total entropy of the universe is constant | Total entropy of the universe increases |
| **Path** | Can be exactly retraced in reverse | Cannot be exactly retraced |

## 3. Cyclic Process

A **cyclic process** is a series of thermodynamic processes that returns a system to its initial state. After completing the cycle, all of the system's state properties (pressure, volume, temperature, internal energy) are the same as they were at the beginning.

**Key Property:** Since the initial and final states are identical, the **net change in internal energy ($\Delta U$) over one complete cycle is always zero**.
$$\Delta U_{cycle} = 0$$

**First Law Application:** Applying the <InlineNoteTag label="1st Law of Thermodynamics" notePath="physics-11/1st-law-of-thermodynamics" /> ($Q = \Delta U + W$) to a cyclic process:
$$Q = 0 + W \quad \implies \quad Q = W$$

This means the **net heat absorbed by the system in a cycle is equal to the net work done by the system** during that cycle. Work and heat are measured in Joules.

**Relevance:** Cyclic processes are the basis for all Heat Engines and Refrigerators, which are designed to operate continuously.

<CaptionedImage src="kg2a5eqv69y10sb9nwfazk2nm58dhtdr" alt="A cyclic process where event A takes the system from state 1 to 2, and event B returns it from 2 to 1." caption="A cyclic process where event A takes the system from state 1 to 2, and event B returns it from 2 to 1." />

## Why Reversible Processes Still Matter

Reversible processes are important as a theoretical tool, even though they never actually happen in reality. They define the maximum possible efficiency for any thermodynamic process, such as in a heat engine (the Carnot Cycle). By comparing a real, irreversible process to its ideal, reversible counterpart, engineers can measure and improve the efficiency of real-world devices.

For a heat engine operating in a cycle, the net work output comes from the conversion of heat energy, even though the internal energy of the working substance doesn't change over a full cycle. The engine absorbs a certain amount of heat from a high-temperature source, converts part of it into work, and rejects the rest to a low-temperature sink. The net heat absorbed ($Q_{in} - Q_{out}$) is equal to the net work done.


---

<!-- note kx7fkjwd9t3t5tm092ag3pvh0n85qyes | topic ms75mexrzrwvc05p1beb3b9efx85q06m | status published -->
# The Gas Laws

## The Three Experimental Gas Laws

The **gas laws** are a set of fundamental principles that describe the relationship between the macroscopic properties of a gas: **pressure ($P$)**, **volume ($V$)**, and **temperature ($T$)**, for a given amount of gas ($n$). These laws were developed through experimental observations and form the basis of our understanding of gas behavior. They are combined in the **Ideal Gas Law**.

Pressure is a <InlineNoteTag label="Derived Unit" notePath="physics-11/derived-units" /> measured in Pascals (Pa).
## Boyle's Law (Constant Temperature)

Boyle's Law describes the relationship between pressure and volume when the temperature and the amount of gas are held constant.

**Statement:** *For a fixed mass of gas at constant temperature, the volume is inversely proportional to the pressure.*

This means that if you increase the pressure on a gas, its volume will decrease proportionally, and vice versa.

**Mathematical Formulation:**
$$
V \propto \frac{1}{P} \quad \text{or} \quad PV = \text{constant}
$$
For a gas changing from an initial state (1) to a final state (2):
$$
P_{1V}_{1} = P_{2V}_{2}
$$

**Graphical Representation:**
The graph of pressure versus volume for an isothermal (constant temperature) process is a **hyperbola**. The graph of $P$ vs $\frac{1}{V}$ is a straight line through the origin.

<CaptionedImage src="kg2c73svsz7cxsmpcvn1yax5wh8dgqsd" alt="Graph of Boyle's Law showing an inverse relationship between pressure and volume." caption="Graph of Boyle's Law showing an inverse relationship between pressure and volume." />

## Charles's Law (Constant Pressure)

Charles's Law describes the relationship between volume and temperature when the pressure and the amount of gas are held constant.

**Statement:** *For a fixed mass of gas at constant pressure, the volume is directly proportional to its absolute temperature (in Kelvin).*

This means that heating a gas will cause it to expand, and cooling it will cause it to contract.

**Mathematical Formulation:**
$$
V \propto T \quad \text{or} \quad \frac{V}{T} = \text{constant}
$$
For a gas changing from an initial state (1) to a final state (2):
$$
\frac{V_{1}}{T_{1}} = \frac{V_{2}}{T_{2}}
$$

> **Important:** Temperature must always be in **Kelvin** (K) for gas law calculations. Convert using $T(\text{K}) = T(°\text{C}) + 273$.

**Graphical Representation:**
The graph of volume versus absolute temperature is a **straight line passing through the origin**, confirming the direct proportionality $V \propto T$.

<CaptionedImage src="kg22s5f9q82nfhxrcv79hm0xfh8dgf7g" alt="Graph of Charles's Law showing a direct linear relationship between volume and temperature." caption="Graph of Charles's Law showing a direct linear relationship between volume and temperature." />

## Gay-Lussac's Law (Constant Volume)

Gay-Lussac's Law (also known as Amontons's Law) describes the relationship between pressure and temperature when the volume and the amount of gas are held constant.

**Statement:** *For a fixed mass of gas at constant volume, the pressure is directly proportional to its absolute temperature (in Kelvin).*

This explains why the pressure inside a sealed container of gas increases when it is heated.

**Mathematical Formulation:**
$$
P \propto T \quad \text{or} \quad \frac{P}{T} = \text{constant}
$$
For a gas changing from an initial state (1) to a final state (2):
$$
\frac{P_{1}}{T_{1}} = \frac{P_{2}}{T_{2}}
$$

## Ideal Gas Equation

By combining Boyle's Law, Charles's Law, and Avogadro's Law, we derive the **General Gas Equation** (Equation of State for an Ideal Gas):

$$PV = nRT$$

Where:
- $P$ = pressure (Pa)
- $V$ = volume (m³)
- $n$ = number of moles (mol)
- $R$ = Universal Gas Constant $= 8.314\text{ J mol}^{-1}\text{ K}^{-1}$
- $T$ = absolute temperature (K)

An equivalent form using the number of molecules $N$ and the Boltzmann constant $k_{B} = \frac{R}{N_{A}} = 1.38 \times 10^{-23}\text{ J K}^{-1}$:

$$PV = Nk_{BT}$$

For an ideal gas, the **internal energy depends solely on temperature**.

**Worked Example:** A gas occupies $2.0\text{ m}^3$ at a pressure of $1.0 \times 10^5\text{ Pa}$ and temperature $300\text{ K}$. Find the number of moles.

$$n = \frac{PV}{RT} = \frac{(1.0 \times 10^5)(2.0)}{(8.314)(300)} = \frac{2.0 \times 10^5}{2494.2} \approx 80.2\text{ mol}$$

## Summary Table

| Law | Constant Variable | Relationship | Formula |
| :--- | :--- | :--- | :--- |
| **Boyle's Law** | Temperature | $P \propto 1/V$ | $P_{1V}_{1} = P_{2V}_{2}$ |
| **Charles's Law** | Pressure | $V \propto T$ | $V_{1}/T_{1} = V_{2}/T_{2}$ |
| **Gay-Lussac's Law** | Volume | $P \propto T$ | $P_{1}/T_{1} = P_{2}/T_{2}$ |

---

<!-- note kx7c5qt0kgq69j2a7pedr7wvj985qeq3 | topic ms7fb516emfhbxzskn1jxmxtf585qyyv | status published -->
# Thermal Equilibrium and Internal Energy

## The Zeroth Law and Thermal Equilibrium

The **Zeroth Law of Thermodynamics** states that if two systems are each in thermal equilibrium with a third system, then they are also in thermal equilibrium with each other. This law establishes temperature as a measurable, comparable property and is the basic principle that makes thermometers work: a thermometer reaches thermal equilibrium with whatever it measures, and its reading then tells us that object's temperature.
## Thermal Equilibrium

**Thermal equilibrium** is a fundamental concept in thermodynamics that describes the state of a system in which there is no net flow of thermal energy. When two or more objects are in thermal contact, heat flows naturally from the hotter object to the colder object. This process continues until they reach the same temperature, at which point they are said to be in thermal equilibrium.

**Key Concept:** Two systems are in thermal equilibrium if and only if they are at the same temperature.

- **Diathermic Substances:** Materials that allow heat to pass through them are called diathermic. Thermal equilibrium is established when objects are connected by a diathermic substance.

<CaptionedImage src="kg2ccgtje07jjfwdvwatk437298dgf9j" alt="Figure 8.1: Two bodies at different temperatures reaching thermal equilibrium." caption="Figure 8.1: Two bodies at different temperatures reaching thermal equilibrium." />

---

## Internal Energy (U)

**Internal energy** is the total energy contained within a thermodynamic system. It is the sum of all the microscopic kinetic and potential energies of the particles (atoms and molecules) that make up the system.

- **Kinetic Energy:** This includes the translational (straight-line motion), rotational, and vibrational energy of the molecules.
- **Potential Energy:** This is the energy associated with the intermolecular forces (bonds) between the particles.

<InlineNoteTag label="Equilibrium" notePath="physics-11/equilibrium" />

### Internal Energy of an Ideal Gas

For an **ideal gas**, the intermolecular forces are assumed to be negligible. Therefore, the internal energy of an ideal gas consists almost entirely of the **translational kinetic energy** of its molecules.

- **Kinetic Theory of Gases:** This theory states that the average kinetic energy of the gas molecules is directly proportional to the absolute temperature ($T$) of the gas.

$$
\text{Average KE per molecule} = \frac{1}{2} m \langle v^{\!2} \rangle = \frac{3}{2} k T
$$

Where:
- $k$ is the **Boltzmann constant** ($1.38 \times 10^{-23}$ J/K).

- **Internal Energy and Temperature:** Because the internal energy of an ideal gas is the sum of the kinetic energies of its molecules, the **internal energy of an ideal gas depends only on its temperature**.

### Changing Internal Energy

The internal energy of a system can be changed in two ways:

1. **Heat Transfer ($Q$):** Adding heat to a system increases its internal energy.
2. **Work Done ($W$):** Doing work on a system (e.g., compressing a gas) increases its internal energy.

**Key Point:** Internal energy is a **state function**, meaning its value depends only on the current state of the system (e.g., its temperature and pressure), not on how it got to that state.

This concept is further developed in the <InlineNoteTag label="1st Law of Thermodynamics" notePath="physics-11/1st-law-of-thermodynamics" />.

### Sign Conventions for Internal Energy ($\Delta U$)

- If the temperature of a system **increases**, its internal energy increases ($\Delta U > 0$).
- If the temperature **decreases**, its internal energy decreases ($\Delta U < 0$).
- If the temperature remains **constant** (an isothermal process), the change in internal energy for an ideal gas is zero ($\Delta U = 0$).

---

## The Ideal Gas Law

The **Ideal Gas Law** is an equation of state that describes the relationship between the pressure ($P$), volume ($V$), temperature ($T$), and the amount of an ideal gas ($n$).

**Equation:**

$$
PV = nRT
$$

Where:
- $P$ = Absolute pressure of the gas
- $V$ = Volume of the gas
- $n$ = Number of moles of the gas
- $R$ = The **universal gas constant** (8.314 J/mol·K)
- $T$ = Absolute temperature of the gas (in Kelvin)

An ideal gas is a theoretical gas that perfectly follows this law. Real gases approximate this behavior at low pressures and high temperatures.

<InlineNoteTag label="Derived Units" notePath="physics-11/derived-units" />

### The Ideal Gas Law with Boltzmann's Constant

The law can also be written in terms of the total number of molecules ($N$) in the gas and the **Boltzmann constant ($k$)**.

$$
PV = NkT
$$

The Boltzmann constant ($k$) is a fundamental constant that relates the average kinetic energy of particles in a gas with the temperature of the gas. It connects the macroscopic world (described by $R$) and the microscopic world (described by $N_{A}$, Avogadro's number).

$$
k = \frac{R}{N_{A}} = 1.38 \times 10^{-23} \, \text{J/K}
$$

<InlineNoteTag label="Dimensions" notePath="physics-11/dimensions" />

---

## Heat vs. Internal Energy, and Melting Without a Temperature Rise

Internal energy is the total energy *contained within* a system. Heat is the energy that is *transferred* between a system and its surroundings due to a temperature difference; heat is energy in transit, not a property that a system "has."

When a substance melts, its temperature stays constant even though heat is being added. The added energy is used to increase the **potential energy** of the molecules by breaking the bonds that hold them in a fixed solid structure. Since the kinetic energy of the molecules does not increase (as temperature is constant), the internal energy of the substance still increases, but it is due to a change in potential energy, not kinetic energy.


<SideActivity kind="tidbit" title="Do You Know?">
<p>Diathermic substances are those substances that allow heat to pass through them and the process is called a diathermic process.</p>
</SideActivity>

<SideActivity kind="info" title="For Your Information">
<p>System: The matter or space region that is being studied is called a "system." For example, a gas in a cylinder, etc.</p>
<p>Surroundings of the system: The term "surroundings" refers to everything outside the system.</p>
<p>Boundary of the system: A system is separated from the surroundings by its boundary. All energy changes, caused by the work done or heat exchange between the system and its surroundings, take place through this boundary.</p>
<p>Types of the systems:</p>
<p>Closed system: It is a system in which heat energy can enter or leave the system but mass cannot do either. An example of a closed system is a container sealed on all sides.</p>
<p>Open system: A system in which both heat energy and mass can enter or leave it, is called open system. An example of open system is a glass beaker with an open top which allows matter (i.e., water) to be added or removed, as well as, heat to be added or removed.</p>
<p>Isolated system: A system in which there is no transfer of mass and heat energy across its boundary is called an isolated system. An example of it is a thermos flask filled with hot water.</p>
</SideActivity>