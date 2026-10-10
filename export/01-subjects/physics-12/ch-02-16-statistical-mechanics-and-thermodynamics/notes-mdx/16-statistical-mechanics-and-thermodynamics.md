<!-- note kx7fh2vzbb9wtn9yt5kcd4dq7985q9g8 | topic ms760sj2qv6bqjm7emr8ajdxzx85pv61 | status published -->
# 16.1 Pressure Exerted by Gas Molecules

The pressure a gas exerts on the walls of its container is a **macroscopic** consequence of **microscopic** molecular motion. Kinetic Molecular Theory (KMT) provides a quantitative link between molecular behaviour and measurable gas pressure.

---

## Assumptions of the Kinetic Theory (Ideal Gas)

The derivation rests on the following idealising assumptions:

1. A gas consists of a very large number $N$ of identical molecules, each of mass $m$.
2. Molecules are in **continuous, random motion**.
3. The volume of the molecules themselves is negligible compared with the volume of the container.
4. Intermolecular forces are negligible except during collisions.
5. All collisions (molecule–molecule and molecule–wall) are **perfectly elastic**.
6. The duration of a collision is negligible compared with the time between collisions.
7. Molecular motion is **isotropic**: no preferred direction.

---

## How Molecular Motion Causes Pressure

When a molecule strikes a wall and rebounds elastically, it undergoes a **change in momentum**. By Newton's second law:

$$F = \frac{\Delta p}{\Delta t}$$

The continuous bombardment of the wall by a vast number of molecules produces a steady average force. **Pressure** is this average force per unit area:

$$P = \frac{F}{A}$$

Key points:
- A single collision transfers momentum $2mv_x$ to the wall (for a molecule moving with speed $v_x$ perpendicular to the wall).
- The rate of such collisions per unit area determines the pressure.
- Higher molecular speeds → greater momentum transfer → higher pressure.

---

## Derivation of $pV = \frac{1}{3}Nm\langle v^2 \rangle$

### Step 1: Force from one molecule

Consider a cubic box of side $L$ containing $N$ molecules. For a single molecule moving with velocity component $v_x$ along the x-axis:

- Momentum change per collision with the right wall: $\Delta p = 2mv_x$
- Time between successive collisions with the same wall: $\Delta t = \dfrac{2L}{v_x}$
- Force on wall from this molecule: $f = \dfrac{2mv_x}{2L/v_x} = \dfrac{mv_x^2}{L}$

### Step 2: Total force from all molecules

Summing over all $N$ molecules:

$$F_x = \frac{m}{L}\sum_{i=1}^{N} v_{xi}^2 = \frac{mN}{L}\langle v_x^2 \rangle$$

### Step 3: Isotropy gives the factor $\frac{1}{3}$

Because molecular motion is **isotropic** (random, no preferred direction):

$$\langle v_x^2 \rangle = \langle v_y^2 \rangle = \langle v_z^2 \rangle = \frac{\langle v^2 \rangle}{3}$$

where $\langle v^2 \rangle = \langle v_x^2 \rangle + \langle v_y^2 \rangle + \langle v_z^2 \rangle$ is the **mean square speed**.

### Step 4: Pressure

Pressure on the wall of area $A = L^2$:

$$P = \frac{F_x}{L^2} = \frac{mN\langle v_x^2 \rangle}{L^3} = \frac{mN}{V} \cdot \frac{\langle v^2 \rangle}{3}$$

$$\boxed{P = \frac{1}{3}\frac{Nm}{V}\langle v^2 \rangle}$$

Multiplying both sides by $V$:

$$\boxed{PV = \frac{1}{3}Nm\langle v^2 \rangle}$$

---

## Alternative Forms

### In terms of density

Since mass density $\rho = \dfrac{Nm}{V}$:

$$\boxed{P = \frac{1}{3}\rho\langle v^2 \rangle}$$

### In terms of average translational kinetic energy

Rewriting $\frac{1}{2}m\langle v^2 \rangle$ as the average KE per molecule:

$$P = \frac{2}{3}\frac{N}{V}\left\langle \frac{1}{2}mv^2 \right\rangle = \frac{2}{3}N_0\langle KE \rangle$$

where $N_0 = N/V$ is the **number density**.

---

## Linking Pressure to Temperature

Comparing $PV = \frac{1}{3}Nm\langle v^2 \rangle$ with the ideal gas equation $PV = NkT$:

$$NkT = \frac{2N}{3}\left\langle \frac{1}{2}mv^2 \right\rangle$$

$$\boxed{\left\langle \frac{1}{2}mv^2 \right\rangle = \frac{3}{2}kT}$$

where $k = 1.38 \times 10^{-23}\text{ J K}^{-1}$ is the **Boltzmann constant**.

This is the fundamental result of kinetic theory: **absolute temperature is directly proportional to the average translational kinetic energy per molecule**.

---

## Summary Table

| Quantity | Symbol | Expression |
|---|---|---|
| Pressure (general) | $P$ | $\dfrac{1}{3}\dfrac{Nm}{V}\langle v^2 \rangle$ |
| Pressure (density form) | $P$ | $\dfrac{1}{3}\rho\langle v^2 \rangle$ |
| Pressure (KE form) | $P$ | $\dfrac{2}{3}N_0\langle KE \rangle$ |
| Avg. translational KE | $\langle KE \rangle$ | $\dfrac{3}{2}kT$ |

---

<!-- note kx7dcasaeh538pkcj752bn5s8s85qkhp | topic ms77jjrssvavk8g3vdara3j98185qjbf | status published -->
# 16.2 Root Mean Square Speed of an Ideal Gas

## Why Not Use Average Velocity?

The molecules of an ideal gas move randomly in all directions. Because velocity is a **vector**, the average velocity of all molecules is **zero**: positive and negative components cancel. To get a meaningful measure of molecular speed, we use the **Root Mean Square (RMS) speed**.

$v_{rms} = \sqrt{\langle v^2 \rangle}$

where $\langle v^2 \rangle$ is the **mean square speed**: the average of the squares of all individual molecular speeds.

---

## Derivation of RMS Speed Formulas

### From Kinetic Theory Pressure

From the kinetic theory of gases, the pressure exerted by an ideal gas is:

$P = \frac{1}{3}\rho\langle v^2 \rangle$

where $\rho$ is the density of the gas. Rearranging:

$\langle v^2 \rangle = \frac{3P}{\rho}$

$\boxed{v_{rms} = \sqrt{\frac{3P}{\rho}}}$

### In Terms of Temperature (Boltzmann Constant)

Using the ideal gas law $PV = NkT$ (where $N$ is the number of molecules and $k$ is the Boltzmann constant), and substituting $\rho = Nm/V$:

$v_{rms} = \sqrt{\frac{3kT}{m}}$

where $m$ is the mass of one molecule and $T$ is the absolute temperature.

**Key result:** $v_{rms} \propto \sqrt{T}$

### In Terms of Molar Mass

Substituting $k = R/N_A$ and $mN_A = M$ (molar mass):

$\boxed{v_{rms} = \sqrt{\frac{3RT}{M}}}$

where $R = 8.314\ \text{J mol}^{-1}\text{K}^{-1}$ is the universal gas constant and $M$ is the molar mass in kg/mol.

---

## Average Translational Kinetic Energy

The average translational kinetic energy of a single gas molecule is:

$\langle KE \rangle = \frac{1}{2}m\langle v^2 \rangle = \frac{1}{2}mv_{rms}^2$

Substituting $v_{rms}^2 = \frac{3kT}{m}$:

$\boxed{\langle KE \rangle = \frac{3}{2}kT}$

This is one of the most important results of kinetic theory:

> **The average translational kinetic energy of an ideal gas molecule depends only on the absolute temperature $T$, and is independent of the type of gas.**

For one mole of gas (containing $N_A$ molecules), the total translational kinetic energy is:

$KE_{molar} = N_A \cdot \frac{3}{2}kT = \frac{3}{2}RT$

---

## Summary Table

| Quantity | Formula |
|---|---|
| RMS speed (density form) | $v_{rms} = \sqrt{3P/\rho}$ |
| RMS speed (temperature form) | $v_{rms} = \sqrt{3kT/m}$ |
| RMS speed (molar mass form) | $v_{rms} = \sqrt{3RT/M}$ |
| Avg. translational KE (per molecule) | $\langle KE \rangle = \frac{3}{2}kT$ |
| Avg. translational KE (per mole) | $KE_{molar} = \frac{3}{2}RT$ |

---

<WorkedExample title="Worked Example">

**Calculate the rms speed of nitrogen molecules ($M = 28 \times 10^{-3}$ kg/mol) at $T = 300$ K.**

$v_{rms} = \sqrt{\frac{3RT}{M}} = \sqrt{\frac{3 \times 8.314 \times 300}{28 \times 10^{-3}}}$

$v_{rms} = \sqrt{\frac{7482.6}{0.028}} = \sqrt{267236} \approx 517\ \text{m/s}$

</WorkedExample>

---

<!-- note kx73sfdty01dczjsg8kqsaebnd85pbk0 | topic ms76p8m7hfm0aqx09v4hbjq4h185q378 | status published -->
# 16.3 Non-Ideal Gas Behaviour: Modification of the Ideal Gas Model

## Limitations of the Ideal Gas Model

The **Ideal Gas Law** ($PV = nRT$) is derived from the **Kinetic Molecular Theory (KMT)**, which rests on two key assumptions that are not perfectly satisfied by real gases:

1. **Negligible molecular volume**: Gas molecules are treated as point masses with zero volume compared to the container volume.
2. **No intermolecular forces**: There are no attractive or repulsive forces between gas molecules.

These assumptions work well at **high temperatures** and **low pressures**, where molecules are far apart and moving fast. However, at **low temperatures** and **high pressures**, real gases deviate significantly from ideal behaviour because:

- Molecules are close enough that their **finite volume** becomes significant.
- **Intermolecular attractive forces** (van der Waals forces) become important.

---

## The Van der Waals Equation

In 1873, Johannes Diderik van der Waals proposed a modified equation of state to account for these two corrections:

$\left(P + \frac{an^2}{V^2}\right)(V - nb) = nRT$

where:
- $P$ = measured (observed) pressure
- $V$ = volume of the gas
- $n$ = number of moles
- $R$ = universal gas constant
- $T$ = absolute temperature
- $a$ = van der Waals constant for **intermolecular attractive forces** (units: Pa·m⁶·mol⁻²)
- $b$ = van der Waals constant for **excluded volume** per mole (units: m³·mol⁻¹)

---

## Understanding the Two Corrections

### 1. Volume Correction: $(V - nb)$

In an ideal gas, the full volume $V$ is available for molecular motion. In a real gas, the molecules themselves occupy space. The term $nb$ represents the **excluded volume**: the total volume unavailable due to the finite size of $n$ moles of molecules.

The corrected (available) volume is:
$V_{\text{available}} = V - nb$

A larger value of $b$ means the molecules are physically larger.

### 2. Pressure Correction: $\left(P + \frac{an^2}{V^2}\right)$

In a real gas, molecules near the container wall experience a **net inward attractive force** from neighbouring molecules. This reduces the speed and force with which they strike the wall, resulting in a **lower observed pressure** than an ideal gas would exert.

The ideal pressure would be higher than the measured pressure by $\frac{an^2}{V^2}$:
$P_{\text{ideal}} = P_{\text{observed}} + \frac{an^2}{V^2}$

The term $\frac{an^2}{V^2}$ is proportional to the **square of the molar concentration** ($n/V$)², because both the molecule hitting the wall and its neighbours pulling it back depend on density. A larger value of $a$ means stronger intermolecular attractions.

---

## When Do Real Gases Behave Ideally?

Real gases approach ideal behaviour under conditions where the two corrections become negligible:

| Condition | Reason |
|-----------|--------|
| **High temperature** | High kinetic energy overcomes intermolecular attractions |
| **Low pressure** | Molecules are far apart; their volume is negligible compared to container volume |

Conversely, deviations are largest at **low temperature** and **high pressure**.

---

## Van der Waals Constants for Common Gases

| Gas | $a$ (Pa·m⁶·mol⁻²) | $b$ (m³·mol⁻¹) |
|-----|-------------------|----------------|
| He | 0.003 | 2.37 × 10⁻⁵ |
| H₂ | 0.025 | 2.66 × 10⁻⁵ |
| N₂ | 0.137 | 3.87 × 10⁻⁵ |
| CO₂ | 0.364 | 4.27 × 10⁻⁵ |

Gases with stronger intermolecular forces (e.g., CO₂) have larger $a$ values. Larger molecules have larger $b$ values.

---

## Connection to Statistical Mechanics

The ideal gas model is the **foundation of statistical mechanics**. Statistical mechanics connects the microscopic behaviour of individual particles (their positions, momenta, and interactions) to macroscopic thermodynamic quantities (pressure, temperature, volume, entropy).

The van der Waals equation represents the **first step beyond the ideal model**: it introduces molecular interactions and finite size, making it a more realistic statistical mechanical model. More advanced treatments (virial equations, partition functions) build further on this foundation.

---

<!-- note kx75etfcj5vmh1wjc65n8m3ye185pazc | topic ms76nrm77bhgcxm4c32akkqbsn85qrmr | status published -->
# 16.4 Gravitational Effects on the Ideal Gas Model

The standard Ideal Gas Model assumes that gas molecules interact only through brief elastic collisions and that all other forces: including gravity: are negligible. This assumption holds well at laboratory scales but breaks down over large vertical distances, such as in planetary atmospheres or stellar interiors.

---

## Why Gravity is Neglected at Laboratory Scale

For a typical laboratory container (height $h \sim 0.1\text{ m}$), the gravitational potential energy change for a single molecule of mass $m$ is:

$\Delta U = mgh$

For a nitrogen molecule ($m \approx 4.65 \times 10^{-26}\text{ kg}$) at room temperature:

$\Delta U \approx (4.65 \times 10^{-26})(9.8)(0.1) \approx 4.6 \times 10^{-26}\text{ J}$

The average thermal kinetic energy at $T = 300\text{ K}$ is:

$\langle KE \rangle = \frac{3}{2}k_BT \approx \frac{3}{2}(1.38 \times 10^{-23})(300) \approx 6.2 \times 10^{-21}\text{ J}$

Since $\langle KE \rangle \gg \Delta U$ by a factor of $\sim 10^5$, gravity is completely negligible at laboratory scale. The Ideal Gas Model remains valid.

---

## Gravitational Effects at Large Scale: The Atmosphere

Over large vertical distances: such as Earth's atmosphere: gravity produces a measurable **pressure gradient**. As altitude increases:

- The weight of the gas column above decreases
- Both **pressure** and **molecular number density** decrease
- The distribution of molecules becomes non-uniform

This is the physical basis for why the air is "thinner" at high altitudes.

### The Barometric Formula

For an ideal gas in hydrostatic equilibrium at constant temperature $T$, the pressure at height $h$ is given by the **Barometric Formula**:

$P(h) = P_0 \, e^{-mgh / k_B T}$

where:
- $P_0$ = pressure at $h = 0$ (sea level)
- $m$ = mass of one gas molecule
- $g$ = gravitational acceleration
- $k_B$ = Boltzmann constant
- $T$ = absolute temperature (assumed constant)

This exponential decrease arises because the ideal gas model, extended to include gravity, predicts that the probability of finding a molecule at height $h$ follows a Boltzmann distribution $e^{-U/k_BT}$ where $U = mgh$.

---

## Gravitational Effects in Stellar Interiors

Inside a star, the gas is subject to enormous gravitational forces due to the star's large mass. The ideal gas model must be extended to account for:

1. **Pressure gradient**: Pressure increases with depth toward the core
2. **Hydrostatic equilibrium**: The star is stable when the inward gravitational force is exactly balanced by the outward pressure (thermal pressure from nuclear fusion, radiation pressure, and: in compact objects: degeneracy pressure)

### Hydrostatic Equilibrium

For a thin shell of gas at radius $r$ inside a star, the condition for hydrostatic equilibrium is:

$\frac{dP}{dr} = -\rho(r)\, g(r)$

where $\rho(r)$ is the local density and $g(r)$ is the local gravitational acceleration. This equation shows that the pressure must decrease outward to support the weight of the overlying layers.

### Dependence on Mass and Radius

The strength of the inward gravitational pull on a celestial body depends on:
- Its **total mass** $M$ (greater mass → stronger gravity)
- Its **radius** $R$ (smaller radius → stronger surface gravity, since $g = GM/R^2$)

---

## Ideal Gas Model as a Foundation for Statistical Mechanics

The treatment of gravitational effects on an ideal gas illustrates a key principle: the **Ideal Gas Model** is not merely a simplified approximation: it is the **foundation of statistical mechanics**. By applying statistical distributions (such as the Boltzmann distribution) to the ideal gas, physicists can:

- Derive the Barometric Formula from first principles
- Understand pressure gradients in atmospheres and stars
- Extend the model to more complex systems (real gases, degenerate matter)

The ideal gas model thus serves as the starting point from which statistical mechanics builds toward understanding matter under all conditions: from everyday gases to extreme astrophysical environments.

---

## Summary

| Scale | Gravitational Effect | Result |
|---|---|---|
| Laboratory ($h \sim 0.1$ m) | Negligible ($\Delta U \ll k_BT$) | Uniform gas, ideal model valid |
| Atmosphere ($h \sim$ km) | Significant | Exponential pressure decrease (Barometric Formula) |
| Stellar interior | Dominant | Hydrostatic equilibrium required |

---

<!-- note kx76e3fbysr8jg8pf865qfrwh585q0k1 | topic ms77570vv2swf7hrm0j2hd01yd85q17d | status published -->
# 16.5 Behaviour of Matter Under Extreme Physical Conditions

Under extreme conditions of density, pressure, and temperature, matter behaves in ways that classical physics cannot explain. Quantum mechanical effects, normally confined to the atomic scale, become the dominant force shaping entire stars or laboratory samples. This section is an overview of five such regimes; each has its own dedicated topic below.

## Degenerate Matter

Quantum mechanical pressure from the Pauli Exclusion Principle, not thermal motion, supports collapsed stars such as white dwarfs against gravity.

[16.5.1 Degenerate Matter](/physics-12/16-statistical-mechanics-and-thermodynamics/16-5-1-degenerate-matter)

## Neutron Stars

When a massive star's core collapses past the white-dwarf stage, neutron degeneracy pressure can support an even denser remnant, provided its mass stays below the Tolman-Oppenheimer-Volkoff limit.

[16.5.2 Neutron Stars](/physics-12/16-statistical-mechanics-and-thermodynamics/16-5-2-neutron-stars)

## Bose-Einstein Condensation

Cooled close enough to absolute zero, bosons can collapse into a single shared quantum state, forming a Bose-Einstein Condensate: a macroscopic quantum phenomenon.

[16.5.3 Bose-Einstein Condensation](/physics-12/16-statistical-mechanics-and-thermodynamics/16-5-3-bose-einstein-condensation)

## Superfluidity

Below a critical temperature, helium-4 has a superfluid component with effectively zero viscosity. Bose-Einstein condensation is a useful model for this quantum behaviour, but liquid helium-4 is a strongly interacting fluid, so it should not be presented as a simple direct copy of an ideal-gas condensate. Superfluidity is also observed in helium-3 at much lower temperatures, through paired fermions.
## Superconductivity

Below a critical temperature, paired electrons (Cooper pairs) condense into a single quantum state and conduct electricity with exactly zero resistance.

[16.5.5 Superconductivity](/physics-12/16-statistical-mechanics-and-thermodynamics/16-5-5-superconductivity)

## Summary

Degenerate matter, Bose-Einstein condensation, superfluidity, and superconductivity are all manifestations of the same underlying idea: under extreme conditions of density or temperature, quantum mechanical effects that are normally confined to the atomic scale become visible in the bulk behaviour of matter. Read each linked topic for the full derivations, formulas, and worked examples.


---

<!-- note kx7akwf8m269nra44s1gxtzspx85p5sb | topic ms711rcmx02csxh1r1sszrzkms85pgd9 | status published -->
# 16.5.1 Degenerate Matter

## What is Degenerate Matter?

Under extreme conditions of pressure and density, matter behaves in ways that cannot be described by classical physics. **Degenerate matter** is a state of matter in which quantum mechanical effects: specifically the **Pauli Exclusion Principle**: dominate over thermal effects in determining the pressure and structure of the material.

In ordinary matter, pressure arises from thermal motion of particles. In degenerate matter, pressure arises from quantum mechanical constraints on particle states, and is largely **independent of temperature**.

## The Pauli Exclusion Principle and Degeneracy Pressure

The **Pauli Exclusion Principle** states that no two identical fermions (particles with half-integer spin, such as electrons or neutrons) can occupy the same quantum state simultaneously.

When matter is compressed to extreme densities:
- All low-energy quantum states become filled.
- Additional particles are forced into progressively higher energy states.
- This creates an outward **degeneracy pressure** that resists further compression, even at absolute zero temperature.

## Electron Degeneracy Pressure and White Dwarfs

In a **white dwarf**: the remnant of a low-to-medium mass star after it exhausts its nuclear fuel: the inward pull of gravity is balanced by **electron degeneracy pressure**.

- Electrons are fermions and obey the Pauli Exclusion Principle.
- When compressed, electrons resist occupying the same quantum state, generating an outward pressure.
- This pressure is **independent of temperature**: it persists even as the star cools.

### The Chandrasekhar Limit

The maximum mass a white dwarf can have while being supported by electron degeneracy pressure is approximately:

$$M_{\text{Ch}} \approx 1.44\, M_{\odot}$$

where $M_{\odot}$ is the solar mass. This is called the **Chandrasekhar Limit**.

- If a white dwarf's mass exceeds $1.44\, M_{\odot}$, electron degeneracy pressure is insufficient to halt gravitational collapse.
- The star collapses further, and electrons and protons merge via **inverse beta decay** to form neutrons.

### Mass–Radius Relationship

Uniquely, for degenerate matter: **as mass increases, radius decreases**. Adding mass increases gravitational compression, forcing the degenerate gas into a smaller volume.

## Neutron Degeneracy Pressure and Neutron Stars

If the collapsing core's mass is below the **Tolman–Oppenheimer–Volkoff (TOV) limit** (~2–3 $M_{\odot}$), the collapse is halted by **neutron degeneracy pressure**: the same quantum mechanical effect but now applied to neutrons.

The result is a **neutron star**: an incredibly dense stellar remnant composed almost entirely of neutrons.

## Connection to Heisenberg's Uncertainty Principle

Degeneracy pressure has a deep connection to **Heisenberg's Uncertainty Principle**, which states:

$$\Delta x \cdot \Delta p \geq \frac{h}{4\pi}$$

where $\Delta x$ is the uncertainty in position and $\Delta p$ is the uncertainty in momentum.

- When matter is compressed to extreme densities, the **position of each particle becomes very well defined** (small $\Delta x$).
- By the uncertainty principle, the **momentum uncertainty $\Delta p$ must become very large**.
- This means particles must have large momenta: they cannot be at rest: generating a **quantum pressure** even at zero temperature.
- This is the fundamental quantum mechanical origin of degeneracy pressure.

Thus, Heisenberg's Uncertainty Principle provides the underlying explanation for why degenerate matter resists compression: confining particles to a small space forces them to have large momenta, creating pressure.

## Summary Table

| Object | Supporting Pressure | Condition |
|---|---|---|
| White Dwarf | Electron degeneracy pressure | Mass $< 1.44\, M_{\odot}$ |
| Neutron Star | Neutron degeneracy pressure | Mass $< $ TOV limit |
| Black Hole | None: collapse continues | Mass $>$ TOV limit |

---

<!-- note kx73k64z6p9a6hhekm7r8t27bh85p886 | topic ms7b19xgybn81s9431djn27ag185q6hz | status published -->
# 16.5.2 Neutron Stars

## Formation

A **neutron star** is the extremely dense stellar remnant left after a massive star (typically **10–25 solar masses**, $M_{\odot}$) exhausts its nuclear fuel and undergoes a catastrophic **supernova explosion**. During the collapse, the core is compressed so intensely that electrons and protons combine via **inverse beta decay**:

$p^+ + e^- \rightarrow n + \nu_e$

The result is an object composed almost entirely of **neutrons**, with a radius of only ~10–15 km but a mass of 1–3 $M_{\odot}$.

## Extreme Density

Neutron stars are the densest known stable objects in the universe. Their density is of the order of:

$\rho \approx 10^{17}\ \mathrm{kg\ m^{-3}}$

This is comparable to the density of an **atomic nucleus**. A teaspoon of neutron star material would have a mass of approximately 5 billion tonnes.

## Neutron Degeneracy Pressure

Once nuclear fusion ceases, there is no thermal pressure to counteract gravity. In a neutron star, gravitational collapse is halted by **neutron degeneracy pressure**: a quantum mechanical effect arising from the **Pauli Exclusion Principle**, which forbids two neutrons from occupying the same quantum state.

This is analogous to electron degeneracy pressure in white dwarfs, but operates at far greater densities (after electrons and protons have merged). If the neutron star's mass exceeds the **Tolman–Oppenheimer–Volkoff (TOV) limit** (~2–3 $M_{\odot}$), even neutron degeneracy pressure cannot prevent collapse into a **black hole**.

## Heisenberg's Uncertainty Principle and Neutron Stars

The **Heisenberg Uncertainty Principle** provides a deeper quantum mechanical basis for degeneracy pressure. It states:

$\Delta x \cdot \Delta p \geq \frac{h}{4\pi}$

When neutrons are confined to the extremely small volume of a neutron star, their positional uncertainty $\Delta x$ is very small. By the uncertainty principle, their momentum uncertainty $\Delta p$ must therefore be very large. This means the neutrons must have large momenta: they cannot all be at rest: and this **zero-point motion** generates the degeneracy pressure that resists gravitational collapse.

## Pulsars

Many neutron stars are observed as **pulsars**: highly magnetized, rapidly rotating neutron stars that emit beams of electromagnetic radiation from their magnetic poles. Because the magnetic axis is misaligned with the rotation axis, the beam sweeps through space like a lighthouse. When this beam periodically crosses Earth, we detect regular pulses of radiation.

- Rotation periods range from milliseconds to several seconds.
- The regularity of pulsar timing makes them among the most precise natural clocks known.

## Summary Table

| Property | Value |
|---|---|
| Progenitor mass | 10–25 $M_{\odot}$ |
| Typical radius | ~10–15 km |
| Typical mass | 1–3 $M_{\odot}$ |
| Density | ~$10^{17}$ kg m$^{-3}$ |
| Supporting force | Neutron degeneracy pressure |

---

<!-- note kx7e3z33pfkewmshv6c3zf1r6d85qehm | topic ms7b94b99wqfxmbeytjgnc9vnd85pgt0 | status published -->
# 16.5.3 Bose-Einstein Condensation

Bose-Einstein Condensation (BEC) is one of the most striking examples of quantum mechanics operating at a macroscopic scale. It represents a fifth state of matter, distinct from solid, liquid, gas, and plasma, and occurs only under extreme conditions of ultra-low temperature.

---

## What is a Bose-Einstein Condensate?

A **Bose-Einstein Condensate** is a state of matter formed when a collection of **bosons** (particles with integer spin) is cooled to temperatures extremely close to **absolute zero** ($T \approx 0\text{ K}$). At this point, a large fraction of the particles simultaneously occupy the **lowest possible quantum energy state** (the ground state), causing them to lose their individual identities and behave as a single coherent quantum entity: sometimes called a **"super-atom"**.

> **Historical Note:** BEC was theoretically predicted by **Satyendra Nath Bose** and **Albert Einstein** in 1924–25. The first experimental realisation in a dilute gas was achieved in **1995** by Eric Cornell and Carl Wieman using **Rubidium-87** ($^{87}\text{Rb}$) atoms.

---

## Which Particles Can Form a BEC?

Only **bosons** can undergo BEC. Bosons are particles with **integer spin** (0, 1, 2, …) and do **not** obey the Pauli Exclusion Principle, meaning multiple bosons can occupy the same quantum state simultaneously.

| Particle Type | Spin | Can form BEC? |
|---|---|---|
| Photons | 1 | Yes |
| $^{4}\text{He}$ atoms | 0 (integer total) | Yes |
| $^{87}\text{Rb}$ atoms | Integer total | Yes |
| Electrons | 1/2 (fermion) | No |
| Protons | 1/2 (fermion) | No |
| Neutrons | 1/2 (fermion) | No |

**Fermions** (half-integer spin) obey the Pauli Exclusion Principle and cannot share a quantum state, so they cannot form a BEC.

---

## Role of the de Broglie Wavelength

The formation of BEC is intimately connected to the **de Broglie wavelength**:

$$\lambda = \frac{h}{p} = \frac{h}{mv}$$

where $h$ is Planck's constant, $p$ is momentum, $m$ is mass, and $v$ is speed.

**Key reasoning:**

1. As temperature $T$ decreases, the average speed $v$ of atoms decreases.
2. Since $p = mv$ decreases, the de Broglie wavelength $\lambda = h/p$ **increases**.
3. When $\lambda$ becomes **comparable to the inter-atomic spacing**, the quantum wave packets of neighbouring atoms begin to **overlap**.
4. The atoms become **indistinguishable** from one another and collectively condense into the ground state: forming the BEC.

$$T \downarrow \implies v \downarrow \implies p \downarrow \implies \lambda = \frac{h}{p} \uparrow \implies \text{wave packets overlap} \implies \text{BEC}$$

---

## BEC as a Macroscopic Quantum Phenomenon

Normally, quantum effects are only observable at the atomic or subatomic scale. BEC is remarkable because quantum behaviour: such as:

- A **shared wave function** across all atoms
- **Wave interference** between atoms
- All atoms occupying the **same quantum state**

…becomes observable at a **macroscopic (large, visible) scale**. The entire condensate behaves as a single coherent quantum object.

This is why BEC is classified under **extreme conditions** in which matter behaves in ways that cannot be explained by classical physics alone.

---

## Summary

| Property | Detail |
|---|---|
| Particles involved | Bosons (integer spin) |
| Required condition | Temperature near absolute zero ($\approx 0\text{ K}$) |
| Key mechanism | de Broglie wavelength $\geq$ inter-atomic spacing |
| Behaviour | All atoms share one quantum state; act as single entity |
| First experimental BEC | 1995, Cornell & Wieman, using $^{87}\text{Rb}$ |
| Classification | Macroscopic quantum phenomenon / extreme matter |

---

<!-- note kx776ctdfyjqrsrv8tfrkza3w985pfcr | topic ms71satnxysc9hwgrjef0gmndh85p2q3 | status published -->
# 16.5.4 Superfluidity

## What is a Superfluid?

A superfluid is a state of matter in which a fluid behaves as if it has **zero viscosity**, allowing it to flow indefinitely without losing kinetic energy. This occurs when bosonic particles (particles with integer spin) undergo **Bose-Einstein Condensation (BEC)**: they all collapse into the same quantum ground state and behave as a single quantum entity.

## Liquid Helium and the Lambda Point

The most well-studied superfluid is **Liquid Helium-4**. When cooled, helium-4 undergoes a phase transition at a critical temperature known as the **Lambda Point ($\lambda$-point)**:

$$T_\lambda = 2.17 \text{ K}$$

The transition is named the lambda point because the shape of the heat capacity curve near this temperature resembles the Greek letter $\lambda$.

| Phase | Temperature | Properties |
|-------|-------------|------------|
| **Helium I** | Above $2.17\text{ K}$ | Normal liquid; has viscosity |
| **Helium II** | Below $2.17\text{ K}$ | Superfluid; zero viscosity, infinite thermal conductivity |

## Properties of Superfluids

### 1. Zero Viscosity
Helium II flows through the narrowest capillaries and microscopic pores without any resistance. A normal fluid would be stopped by friction, but a superfluid passes through effortlessly.

### 2. The Rollin Film Effect
Because of zero viscosity, Helium II spontaneously forms an extremely thin film (approximately **30 nm** thick) called the **Rollin film**. This film:
- Creeps up the walls of any container
- Flows over the rim
- Drips down the outside

This means a superfluid will **escape any open container** by climbing the walls: a dramatic demonstration of zero viscosity.

### 3. Infinite Thermal Conductivity
Helium II conducts heat with effectively **infinite thermal conductivity**. In a normal liquid, heat is transferred by slow molecular collisions. In Helium II, heat propagates as a wave called **second sound**: an internal convection wave that distributes heat almost instantaneously throughout the fluid.

A visible consequence: when Helium II is heated, it does **not boil**. Instead of forming bubbles (which require localized hot spots), the heat is distributed so rapidly that the liquid becomes **perfectly still** as it passes the lambda point.

## Connection to Bose-Einstein Condensation

Superfluidity in Helium-4 is understood as a consequence of **Bose-Einstein Condensation**. Helium-4 atoms are bosons (integer spin). Below the lambda point, a macroscopic fraction of the atoms condense into the lowest quantum energy state, forming a single coherent quantum state. This collective quantum behaviour eliminates viscosity and gives rise to all the exotic properties of Helium II.

Helium-3 (a fermion) can also become superfluid, but only at much lower temperatures (~$2.5 \times 10^{-3}\text{ K}$), where pairs of helium-3 atoms form bosonic Cooper-like pairs.

## Summary

| Property | Helium I (Normal) | Helium II (Superfluid) |
|----------|-------------------|------------------------|
| Temperature | $> 2.17\text{ K}$ | $< 2.17\text{ K}$ |
| Viscosity | Normal | Zero |
| Thermal conductivity | Normal | Effectively infinite |
| Boiling behaviour | Bubbles form | Perfectly still |
| Film creep | No | Yes (Rollin film) |

---

<!-- note kx7ctd29m7kkqzmcanhb8vnyfh85pgnk | topic ms73fhgycpc1ycv562rx657ych85q63n | status published -->
# 16.5.5 Superconductivity

## Critical Temperature ($T_c$)

Every superconducting material has a **Critical Temperature** ($T_c$), also called the transition temperature. Above $T_c$, the material behaves as a normal (resistive) conductor. Below $T_c$, its resistivity vanishes completely:

$$\rho = 0 \quad \text{for } T < T_c$$

This is not merely very low resistance: it is **exactly zero**.

## Discovery

Superconductivity was first discovered in **1911** by Dutch physicist **Heike Kamerlingh Onnes**, who observed that mercury (Hg) lost all electrical resistance at $T_c = 4.2\ \mathrm{K}$. This discovery was made possible by his earlier success in liquefying helium.

## Microscopic Explanation: Cooper Pairs

The quantum mechanical explanation of superconductivity (BCS Theory, 1957) involves **Cooper pairs**: pairs of electrons that bind together at low temperatures through interactions with the crystal lattice (phonon-mediated attraction). Key points:

- Normally, electrons (fermions) obey the Pauli Exclusion Principle and cannot occupy the same quantum state.
- When paired, Cooper pairs behave as **bosons** and can all condense into the same lowest-energy quantum state.
- This condensate flows through the material **without scattering**, resulting in zero electrical resistance.

This is closely related to **Bose-Einstein Condensation**: Cooper pairs form a macroscopic quantum condensate.

## High-Temperature Superconductors (HTS)

Conventional superconductors require cooling to near absolute zero (typically below 30 K). **High-Temperature Superconductors (HTS)** exhibit superconductivity at significantly higher temperatures:

| Material | $T_c$ |
|---|---|
| Mercury (Hg) | 4.2 K |
| Lead (Pb) | 7.2 K |
| YBCO ($\mathrm{YBa_2Cu_3O_7}$) | 92 K |
| Lanthanum superhydride ($\mathrm{LaH_{10}}$) | ~250 K (at ~170 GPa) |

YBCO and similar **ceramic copper-oxide (cuprate)** materials superconduct above **77 K** (liquid nitrogen temperature), making them far more practical. The highest confirmed $T_c$ of **250 K** was achieved in $\mathrm{LaH_{10}}$ under extreme pressure (~170 GPa).

## Applications of Superconductors

Zero resistance allows superconductors to carry enormous currents without energy loss, enabling:

1. **MRI Machines**: Superconducting electromagnets produce the powerful, stable magnetic fields required for high-resolution medical imaging.
2. **Maglev Trains**: Magnetic levitation using superconducting coils allows frictionless, high-speed transport.
3. **Lossless Power Transmission**: Superconducting cables can transmit electrical energy with zero resistive losses.
4. **Particle Accelerators**: Superconducting magnets steer and focus particle beams (e.g., LHC at CERN).
5. **SQUID Devices**: Superconducting Quantum Interference Devices detect extremely weak magnetic fields.

## Connection to Extreme Matter

Superconductivity, like Bose-Einstein Condensation and superfluidity, is a manifestation of **quantum behaviour at the macroscopic scale**: a state of matter that only emerges under extreme conditions (very low temperature, or very high pressure for HTS). It demonstrates that under extreme conditions, the normal rules governing matter break down and quantum effects dominate.