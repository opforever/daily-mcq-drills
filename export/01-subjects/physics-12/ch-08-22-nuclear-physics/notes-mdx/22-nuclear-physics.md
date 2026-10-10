<!-- note kx7fh3e9kteq43dnphw8scn6ed85qp6t | topic ms76mk18b3r4dfds46wpddjhn185pw7v | status published -->
# 22.1 Mass Defect



## Mass-Energy Equivalence

Albert Einstein's special theory of relativity established that **mass and energy are interconvertible**. The relationship is given by:

$$E = mc^2$$

where $c = 3 \times 10^8\text{ m s}^{-1}$ is the speed of light in vacuum. This means that a small amount of mass corresponds to an enormous amount of energy. In nuclear physics, this equivalence is used to explain the energy released when nuclei are formed or when they undergo reactions.

$$E = \Delta m \cdot c^2$$

where $\Delta m$ is the change in mass (mass defect).

---

## The Unified Atomic Mass Unit (u)

Because nuclear masses are extremely small, a convenient unit called the **unified atomic mass unit (u)** is used:

> One unified atomic mass unit (u) is defined as exactly $\dfrac{1}{12}$ of the mass of a carbon-12 ($^{12}_{6}\text{C}$) atom.

$$1\text{ u} = 1.6605 \times 10^{-27}\text{ kg}$$

Using $E = mc^2$, the energy equivalent of 1 u is:

$$E = (1.6605 \times 10^{-27})(3 \times 10^8)^2 \approx 931.5\text{ MeV}$$

This conversion factor is extremely useful:

$$\boxed{1\text{ u} \equiv 931.5\text{ MeV}}$$

---

## Mass Defect ($\Delta m$)

When protons and neutrons (collectively called **nucleons**) combine to form a nucleus, the **actual mass of the nucleus is always less than the sum of the masses of its individual nucleons**.

This difference in mass is called the **mass defect**:

$$\boxed{\Delta m = \left[Z\,m_p + (A - Z)\,m_n\right] - M_{\text{nucleus}}}$$

where:
- $Z$ = atomic number (number of protons)
- $A$ = mass number (total nucleons)
- $m_p = 1.007276\text{ u}$ = mass of a proton
- $m_n = 1.008665\text{ u}$ = mass of a neutron
- $M_{\text{nucleus}}$ = measured mass of the nucleus

### Why Does Mass Defect Occur?

When nucleons bind together, energy is **released** to the surroundings. By mass-energy equivalence, this released energy corresponds to a reduction in mass. The "missing" mass has been converted into the **binding energy** that holds the nucleus together.

$$E_b = \Delta m \cdot c^2$$

---

## Binding Energy

**Binding energy** ($E_b$) is the energy required to completely separate a nucleus into its individual free nucleons. It is also the energy released when the nucleus is assembled from free nucleons.

$$E_b = \Delta m \cdot c^2$$

Using the convenient conversion:

$$E_b\text{ (in MeV)} = \Delta m\text{ (in u)} \times 931.5\text{ MeV/u}$$

---

<WorkedExample title="Worked Example">

**Calculate the mass defect and binding energy of a Deuterium nucleus ($^2_1\text{H}$).**

Given:
- $m_p = 1.007276\text{ u}$
- $m_n = 1.008665\text{ u}$
- $M_{\text{nucleus}} = 2.014102\text{ u}$
- $Z = 1$, $A = 2$

**Step 1: Sum of individual nucleon masses:**
$$m_p + m_n = 1.007276 + 1.008665 = 2.015941\text{ u}$$

**Step 2: Mass defect:**
$$\Delta m = 2.015941 - 2.014102 = 0.001839\text{ u}$$

**Step 3: Binding energy:**
$$E_b = 0.001839 \times 931.5 \approx 1.71\text{ MeV}$$

</WorkedExample>
---

## Key Points

| Quantity | Symbol | Formula |
|---|---|---|
| Mass defect | $\Delta m$ | $[Zm_p + (A-Z)m_n] - M_{\text{nucleus}}$ |
| Binding energy | $E_b$ | $\Delta m \cdot c^2$ |
| Energy of 1 u | N/A | $931.5\text{ MeV}$ |

- The nucleus is **always lighter** than the sum of its free nucleons.
- A **larger mass defect** means **more binding energy** and a more tightly bound nucleus.
- Mass-energy equivalence ($E = \Delta mc^2$) is the fundamental principle connecting mass defect to binding energy.

---

<!-- note kx7dwbjs5hpv1epdfxchbc1nyh85q4sd | topic ms79061me2jfdsnffyz7678gks85q5dh | status published -->
# 22.2 Binding Energy

Nuclear binding energy per nucleon reveals which nuclei are the most tightly bound and stable, and why fusion and fission both release energy. For the definitions of mass-energy equivalence, mass defect, and binding energy themselves, see [22.1 Mass Defect](/physics-12/22-nuclear-physics/22-1-mass-defect).

## Binding Energy Per Nucleon

To compare the stability of different nuclei, we use **binding energy per nucleon**:

$$\frac{B.E.}{A} = \frac{E_b}{A}$$

A higher value means the nucleus is more tightly bound and more stable.

---

## The B.E./A vs. Nucleon Number Graph

The graph of binding energy per nucleon ($B.E./A$) against mass number ($A$) has a broad maximum in the iron-nickel region:

| Region | Description |
|---|---|
| Very light nuclei ($A < 10$) | Low B.E./A; rises steeply |
| $^4_2\text{He}$ | Anomalously high value (~7.1 MeV) for its mass number |
| Iron-nickel region ($A \approx 56$–62) | Broad maximum near 8.8 MeV/nucleon; $^{56}_{26}\text{Fe}$ is the standard textbook representative, while $^{62}_{28}\text{Ni}$ has the slightly higher measured B.E./A |
| Heavy nuclei ($A > 60$) | Gradually decreases (for example, $^{235}_{92}\text{U}$ is about 7.6 MeV/nucleon) |

> **Key principle:** Moving nuclei toward the iron-nickel region can release energy. Binding energy per nucleon is a useful stability indicator, but it is not the only criterion for nuclear stability.
## Relevance to Fission and Fusion

### Nuclear Fusion
Light nuclei (low $A$, low B.E./A) combine to form a heavier nucleus closer to the peak:

$$^2_1\text{H} + ^3_1\text{H} \rightarrow ^4_2\text{He} + ^1_0n + 17.6\text{ MeV}$$

The product has higher B.E./A, so energy is released.

### Nuclear Fission
Heavy nuclei (high $A$, lower B.E./A) split into medium-mass fragments closer to the peak:

$$^{235}_{92}\text{U} + ^1_0n \rightarrow ^{141}_{56}\text{Ba} + ^{92}_{36}\text{Kr} + 3^1_0n + \sim 200\text{ MeV}$$

The fragments have higher B.E./A than uranium, so energy is released.

**In both cases, energy is released because the total binding energy of the products is greater than that of the reactants.** The difference in binding energy appears as kinetic energy of the products.


---

<!-- note kx71r14cjkwn63mzvwjbg1tjm985q1vm | topic ms775ftfc10byjsep4bc6spd8x85qyym | status published -->
# 22.3 Radioactivity

## What is Radioactivity?

**Radioactivity** is the spontaneous disintegration of unstable atomic nuclei, accompanied by the emission of ionizing radiation. The three main types of radiation emitted are:

| Radiation | Symbol | Nature | Charge | Mass |
|-----------|--------|--------|--------|------|
| Alpha | $\alpha$ | Helium nucleus ($^4_2\text{He}$) | $+2e$ | $4\text{ u}$ |
| Beta | $\beta$ | Electron or positron | $-e$ or $+e$ | $\approx 0$ |
| Gamma | $\gamma$ | Electromagnetic photon | $0$ | $0$ |

---

## Spontaneous, Random, and Statistical Nature of Decay

Radioactive decay is **spontaneous** (it happens without any external trigger and is unaffected by temperature, pressure, or chemical state), **random** (it is impossible to predict which nucleus decays or exactly when, only the probability per unit time, the decay constant $\lambda$, is known), and **statistical** (the exponential decay law only holds accurately for a large number of nuclei; a Geiger counter's count rate fluctuates randomly around a mean even for a constant source).

[22.3.4 Spontaneous and Random Nature of Nuclear Decay](/physics-12/22-nuclear-physics/22-3-4-spontaneous-and-random-nature-of-nuclear-decay) covers all three properties, the exponential decay law derivation, and Poisson-distributed count-rate fluctuations in detail.


---

<!-- note kx7e97vfeex8pwghste8pwc5ed85p8s7 | topic ms75c3r8esk0bqmf34t1371swx85px3n | status published -->
# Alpha Decay

Alpha decay is a type of radioactive decay in which an unstable nucleus spontaneously emits an **alpha particle** ($^4_2\text{He}$) to become a more stable daughter nucleus.

## The Alpha Particle

An alpha particle is identical to a helium-4 nucleus:
- Composed of **2 protons and 2 neutrons**
- Charge: $+2e$
- Mass: $\approx 4\text{ u}$
- **High ionizing power** (due to large charge and mass)
- **Low penetrating power** (stopped by a few centimetres of air or a sheet of paper)

## General Equation for Alpha Decay

When a parent nucleus $^A_Z X$ undergoes alpha decay:

$$^A_Z X \rightarrow ^{A-4}_{Z-2} Y + ^4_2\text{He} + Q$$

where:
- $Y$ is the **daughter nucleus**
- The **mass number** $A$ decreases by **4**
- The **atomic number** $Z$ decreases by **2** (the element moves two places to the left in the periodic table)
- $Q$ is the **energy released** (Q-value)

**Example: Uranium-238 decay:**

$$^{238}_{92}\text{U} \rightarrow ^{234}_{90}\text{Th} + ^4_2\text{He} + Q$$

## Q-Value and Energy Released

The Q-value is the energy released during alpha decay, calculated from the **mass defect**:

$$Q = [m(X) - m(Y) - m(\alpha)]c^2$$

- If $Q > 0$: decay is **spontaneous** (exothermic), since the parent is heavier than the products.
- If $Q < 0$: decay cannot occur spontaneously.

The Q-value is shared as kinetic energy between the alpha particle and the recoiling daughter nucleus. By **conservation of linear momentum**, the daughter nucleus recoils in the opposite direction, so the alpha particle receives slightly less than the full Q-value:

$$Q = KE_{\alpha} + KE_{\text{daughter}}$$

Since $m_{\text{daughter}} \gg m_{\alpha}$, the alpha particle carries away most of the kinetic energy.

## Why Heavy Nuclei Undergo Alpha Decay

In heavy nuclei (large $Z$):
- The **long-range electrostatic (Coulomb) repulsion** between the many protons is very large.
- The **short-range strong nuclear force** cannot fully overcome this repulsion across the large nuclear volume.
- Emitting an alpha particle reduces both $Z$ and $A$, decreasing Coulomb repulsion and moving the nucleus toward greater stability.

This is why alpha decay is predominantly observed in **heavy nuclei** with $Z > 82$ (beyond lead in the periodic table).

## Spontaneous and Random Nature

Alpha decay is:
- **Spontaneous**: it occurs without any external trigger; the rate is unaffected by temperature, pressure, or chemical state.
- **Random**: it is impossible to predict which specific nucleus will decay next; only the probability (decay constant $\lambda$) can be stated.


---

<!-- note kx7fe2d27phcp789xrr0tvvvsh85qtwg | topic ms72qk883xmskd3bhe1apmrbdn85prpf | status published -->
# 22.3.2 Beta Decay

Beta decay is a type of radioactive decay in which a nucleus emits a **beta particle**: either an electron ($e^-$) or a positron ($e^+$), along with a neutrino or antineutrino. It is governed by the **Weak Nuclear Force** and occurs spontaneously and randomly in unstable nuclei.

## Types of Beta Decay

### Beta-Minus ($\beta^-$) Decay

In $\beta^-$ decay, a **neutron** inside the nucleus transforms into a **proton**, emitting an **electron** and an **antineutrino** ($\bar{\nu}$):

$$n \rightarrow p + e^- + \bar{\nu}$$

The general nuclear equation is:

$$^{A}_{Z}X \rightarrow ^{A}_{Z+1}Y + e^- + \bar{\nu}$$

**Changes in nuclear numbers:**
- Mass number $A$: **unchanged** (total nucleons conserved)
- Atomic number $Z$: **increases by 1** (one more proton)

**Example:** Carbon-14 undergoes $\beta^-$ decay:
$$^{14}_{6}\text{C} \rightarrow ^{14}_{7}\text{N} + e^- + \bar{\nu}$$

---

### Beta-Plus ($\beta^+$) Decay

In $\beta^+$ decay, a **proton** inside the nucleus transforms into a **neutron**, emitting a **positron** ($e^+$) and a **neutrino** ($\nu$):

$$p \rightarrow n + e^+ + \nu$$

The general nuclear equation is:

$$^{A}_{Z}X \rightarrow ^{A}_{Z-1}Y + e^+ + \nu$$

**Changes in nuclear numbers:**
- Mass number $A$: **unchanged**
- Atomic number $Z$: **decreases by 1** (one fewer proton)

**Example:** Sodium-22 undergoes $\beta^+$ decay:
$$^{22}_{11}\text{Na} \rightarrow ^{22}_{10}\text{Ne} + e^+ + \nu$$

---

## Beta Decay at the Quark Level

Beta decay is explained at the fundamental level by the **Weak Nuclear Force** acting on quarks:

| Decay Type | Quark Change | Result |
|---|---|---|
| $\beta^-$ | $d \rightarrow u$ | Neutron ($udd$) → Proton ($uud$) |
| $\beta^+$ | $u \rightarrow d$ | Proton ($uud$) → Neutron ($udd$) |

A **down quark** ($d$, charge $-\frac{1}{3}e$) changes into an **up quark** ($u$, charge $+\frac{2}{3}e$) in $\beta^-$ decay, with the charge difference carried away by the emitted electron.

---

## The Role of the Neutrino

Before the neutrino was discovered, beta decay appeared to violate conservation of energy and momentum: beta particles were observed with a **continuous range of energies** rather than a single discrete value (as in alpha decay).

In 1930, **Wolfgang Pauli** postulated the existence of a new particle, the **neutrino**, to account for the missing energy and momentum. The neutrino:
- Has negligible (near-zero) mass
- Is electrically neutral
- Carries away the remaining energy and momentum
- Conserves angular momentum (spin)

### Continuous Energy Spectrum

The total decay energy (Q-value) is shared between the beta particle and the neutrino/antineutrino in **varying proportions** for each decay event. Therefore:
- The beta particle can have any kinetic energy from **zero** up to a **maximum value** $E_{max}$
- $E_{max}$ equals the total Q-value (when the neutrino carries negligible energy)

$$E_{\beta} + E_{\nu} = Q$$

---

## Conservation Laws in Beta Decay

Beta decay conserves:

| Quantity | Conserved? | Notes |
|---|---|---|
| Mass number ($A$) | ✓ Yes | Nucleon number unchanged |
| Charge | ✓ Yes | Total charge before = total charge after |
| Energy | ✓ Yes | Shared between $\beta$ particle and neutrino |
| Linear momentum | ✓ Yes | Neutrino carries missing momentum |
| Angular momentum | ✓ Yes | Neutrino has spin $\frac{1}{2}$ |
| Lepton number | ✓ Yes | $e^-$ and $\bar{\nu}$ in $\beta^-$; $e^+$ and $\nu$ in $\beta^+$ |

---

## Spontaneous and Random Nature of Beta Decay

Like all radioactive decay, beta decay is:
- **Spontaneous**: It occurs without any external trigger. No change in temperature, pressure, or chemical state can initiate or prevent it.
- **Random**: It is impossible to predict which specific nucleus in a sample will decay next, or exactly when it will decay. Only statistical predictions about large numbers of nuclei are possible.

This spontaneous and random nature is a fundamental property of the weak nuclear force acting within the nucleus.

---

## Summary

| Property | $\beta^-$ Decay | $\beta^+$ Decay |
|---|---|---|
| Particle emitted | Electron ($e^-$) | Positron ($e^+$) |
| Also emitted | Antineutrino ($\bar{\nu}$) | Neutrino ($\nu$) |
| Change in $Z$ | $+1$ | $-1$ |
| Change in $A$ | $0$ | $0$ |
| Quark change | $d \rightarrow u$ | $u \rightarrow d$ |
| Force responsible | Weak Nuclear Force | Weak Nuclear Force |


---

<!-- note kx7ecs215zx50r86z9xghdcbvs85q7jr | topic ms7ft5wkcpdk60q1hj52x05g6h85p15h | status published -->
# 22.3.3 Gamma Decay

## What is Gamma Decay?

**Gamma ($\gamma$) decay** is the emission of high-energy electromagnetic radiation (gamma photons) from an **excited nucleus** as it transitions to a lower energy state. Unlike alpha and beta decay, gamma decay involves **no change** in the atomic number ($Z$) or mass number ($A$) of the nucleus.

### General Nuclear Equation

$$^{A}_{Z}X^* \rightarrow ^{A}_{Z}X + \gamma$$

where the asterisk ($^*$) denotes the nucleus in an **excited (metastable) state**.

---

## Why Does Gamma Decay Occur?

After **alpha ($\alpha$) or beta ($\beta$) decay**, the daughter nucleus is often left in an excited state with excess energy above its ground state. The nucleus releases this excess energy by emitting a gamma photon:

$$E_\gamma = hf = E_{excited} - E_{ground}$$

The nucleus does not change its identity: it is the same nuclide, simply moving from a higher to a lower energy level (analogous to electron transitions in atoms, but at much higher energies).

---

## Properties of Gamma Radiation

| Property | Value |
|---|---|
| Nature | Electromagnetic radiation (photons) |
| Charge | 0 (neutral) |
| Rest mass | 0 |
| Speed | $c \approx 3 \times 10^8 \text{ m/s}$ |
| Penetrating power | Very high (requires thick lead or concrete to absorb) |
| Ionising ability | Low (compared to $\alpha$ and $\beta$) |

---

## Change in Atomic Number and Mass Number

Since gamma photons carry **no charge** and **no mass**, the parent and daughter nuclei are the **same nuclide**:

- $\Delta Z = 0$
- $\Delta A = 0$

**Example:** Cobalt-60 after beta decay is left in an excited state and undergoes gamma decay:

$$^{60}_{27}\text{Co}^* \rightarrow ^{60}_{27}\text{Co} + \gamma$$

The emitted gamma photons have energies of **1.17 MeV** and **1.33 MeV**, and these are used in **radiotherapy** to treat cancer.

---

## Energy Calculation in Gamma Decay

The energy of the emitted gamma photon equals the energy difference between the excited and ground states:

$$E_\gamma = hf = E^* - E_0$$

**Worked Example:**

A nucleus de-excites from a state 2.50 MeV above the ground state. Find the frequency of the emitted gamma photon.

$$E_\gamma = 2.50 \text{ MeV} = 2.50 \times 10^6 \times 1.6 \times 10^{-19} \text{ J} = 4.0 \times 10^{-13} \text{ J}$$

$$f = \frac{E_\gamma}{h} = \frac{4.0 \times 10^{-13}}{6.63 \times 10^{-34}} \approx 6.03 \times 10^{20} \text{ Hz}$$

---

## Spontaneous and Random Nature

Gamma decay, like all radioactive decay, is:

- **Spontaneous**: it occurs without any external trigger; no external conditions (temperature, pressure, chemical state) can initiate or prevent it.
- **Random**: it is impossible to predict which specific excited nucleus will decay at any given moment; only the probability of decay per unit time (the decay constant $\lambda$) can be stated.

This means gamma emission following alpha or beta decay is also spontaneous and random: we cannot predict when the excited daughter nucleus will emit its gamma photon.


---

<!-- note kx72fhmvfqqpkmf9wbj62t3d0185qawm | topic ms7ft914yjaf12f436n7xj013x85qwk6 | status published -->
# 22.3.4 Spontaneous and Random Nature of Nuclear Decay



## Core Characteristics

Radioactive decay has two fundamental characteristics that distinguish it from ordinary chemical or physical processes: it is **spontaneous** and it is **random**.

---

## Spontaneous Nature of Decay

Nuclear decay is said to be **spontaneous** because it occurs entirely on its own, without any external trigger or influence. The decay of a nucleus is an **internal nuclear event**: it depends only on the internal structure of the nucleus itself.

### Why External Conditions Don't Matter
The rate of decay is **not affected** by external physical or chemical conditions such as:
- Temperature
- Pressure
- Chemical bonding or environment
- Electric or magnetic fields
- Physical state (solid, liquid, gas)

This is because nuclear forces operate at a scale ($\sim 10^{-15}$ m) far smaller than atomic or molecular interactions. Heating a sample, for example, only adds energy to the electron shells; it cannot penetrate the nucleus to alter its stability.

> **Example:** The half-life of Radium-226 is the same whether the sample is at room temperature or inside a furnace at 1000°C.

---

## Random Nature of Decay

Nuclear decay is also **random**: it is **impossible to predict** which specific nucleus in a sample will decay at any given moment, or exactly when a particular nucleus will decay.

### Only a Probability Can Be Stated
For any single nucleus, we can only state a **probability of decay per unit time**: this probability is characterised by the **decay constant** $\lambda$.

$$\text{Probability of decay per unit time} = \lambda$$

The decay constant $\lambda$ is a fixed property of the isotope. It does **not** change as the sample ages, and it does **not** depend on how many nuclei have already decayed.

> **Analogy:** Rolling a die: you cannot predict which face will appear on any single roll, but over many rolls the statistics are predictable.

---

## Decay as a Statistical Process

Although individual decays are unpredictable, a **large collection** of nuclei follows a well-defined **exponential decay law**:

$$\frac{dN}{dt} = -\lambda N$$

This equation is derived from the assumption that each nucleus has the same constant probability $\lambda$ of decaying per unit time, independent of all others. The result is the exponential decay equation:

$$N = N_0 \, e^{-\lambda t}$$

This statistical predictability emerges from the **law of large numbers**: with millions of nuclei, the average behaviour is highly regular even though each individual decay is random.

---

## Fluctuations in Count Rate

Because decay is random, the **count rate** measured by a Geiger-Müller (GM) tube or similar detector will **fluctuate** from moment to moment, even for a source with a constant average activity.

- If you measure the count rate repeatedly over equal time intervals, you will get slightly different values each time.
- These fluctuations are **not due to instrument error**; they are a direct consequence of the random nature of decay.
- The fluctuations follow a **Poisson distribution**. For a mean count of $\bar{N}$, the standard deviation is $\sqrt{\bar{N}}$.

> **Practical note:** To reduce the effect of fluctuations, measurements are taken over longer time intervals or repeated and averaged.

---

## Summary Table

| Property | Meaning | Consequence |
|---|---|---|
| **Spontaneous** | Decay is independent of external conditions | Temperature, pressure, chemistry have no effect on decay rate |
| **Random** | Cannot predict which nucleus decays next | Only probability ($\lambda$) can be stated for individual nuclei |
| **Statistical** | Large numbers follow exponential law | Count rate is predictable on average but fluctuates moment to moment |

---

<!-- note kx74mabxw5nqqbjrj2b7mjym3185pb2q | topic ms7fbmb4sbdzff2q2w58z0nrh985qv66 | status published -->
# 22.4 Half-Life and Rate of Decay

**Radioactive decay** is a spontaneous, random nuclear process. Its **rate of decay**, called the **activity** ($A$), is $A = \lambda N$, where $\lambda$ is the decay constant (the probability a nucleus decays per unit time) and $N$ is the number of undecayed nuclei. Solving $\dfrac{dN}{dt} = -\lambda N$ gives the exponential Law of Radioactive Decay, $N = N_0 e^{-\lambda t}$, so activity also decays exponentially: $A = A_0 e^{-\lambda t}$.

[22.4.1 Exponential Nature of Nuclear Decay](/physics-12/22-nuclear-physics/22-4-1-exponential-nature-of-nuclear-decay) derives this law and the activity formula in full, with its own worked example.

## Half-Life ($T_{1/2}$)

The **half-life** $T_{1/2}$ is the time interval during which **half** of the unstable nuclei in a radioactive sample undergo decay:

$$\boxed{T_{1/2} = \frac{\ln 2}{\lambda} \approx \frac{0.693}{\lambda}}$$

| Property | Detail |
|---|---|
| Relationship to $\lambda$ | $T_{1/2} \propto \frac{1}{\lambda}$ (inversely proportional) |
| Large $\lambda$ | Short $T_{1/2}$ → highly unstable |
| Small $\lambda$ | Long $T_{1/2}$ → more stable |
| Independence | $T_{1/2}$ does not change with time or sample size |

[22.4.2 Relation Between Decay Constant and Half-Life](/physics-12/22-nuclear-physics/22-4-2-relation-between-decay-constant-and-half-life) derives this relationship step by step, with its own worked examples.

---

## Decay After $n$ Half-Lives

After $n$ half-lives, the number of undecayed nuclei is:

$$\boxed{N = N_0 \left(\frac{1}{2}\right)^n}$$

where $n = \dfrac{t}{T_{1/2}}$.

<WorkedExample title="Worked Example">

**Problem:** A sample of uranium has an initial mass of $400\text{ g}$. How much remains after 3 half-lives?

**Solution:**
$$N = 400 \times \left(\frac{1}{2}\right)^3 = 400 \times \frac{1}{8} = 50\text{ g}$$

**Problem:** A radioactive sample has $T_{1/2} = 10$ minutes. What percentage has **decayed** after 20 minutes?

**Solution:** $n = \frac{20}{10} = 2$ half-lives.
$$\text{Fraction remaining} = \left(\frac{1}{2}\right)^2 = \frac{1}{4} = 25\%$$
$$\text{Fraction decayed} = 100\% - 25\% = 75\%$$

</WorkedExample>
---

## Summary of Key Equations

| Quantity | Formula |
|---|---|
| Decay law | $N = N_0 e^{-\lambda t}$ |
| Activity | $A = \lambda N$ |
| Half-life | $T_{1/2} = \dfrac{0.693}{\lambda}$ |
| After $n$ half-lives | $N = N_0 \left(\dfrac{1}{2}\right)^n$ |


---

<!-- note kx7akt92hybt1d1j1h0atnyv7x85prkn | topic ms74y8tcvra2zzs70vmpypy8hn85qcj1 | status published -->
# 22.4.1 Exponential Nature of Nuclear Decay

## Law of Radioactive Decay

Experiment shows that the **rate of decay** of a radioactive sample is directly proportional to the number of undecayed nuclei $N$ present at that instant:

$$-\frac{\Delta N}{\Delta t} \propto N$$

Introducing the **decay constant** $\lambda$ as the constant of proportionality:

$$-\frac{\Delta N}{\Delta t} = \lambda N$$

The negative sign indicates that $N$ is decreasing with time.

## The Decay Constant ($\lambda$)

The decay constant $\lambda$ is defined as the **fraction of the total number of atoms that decay per unit time**. It represents the probability that a given nucleus will decay in one second.

- **SI unit:** $\text{s}^{-1}$ (per second)
- A **large** $\lambda$ means rapid decay (short-lived isotope).
- A **small** $\lambda$ means slow decay (long-lived isotope).
- $\lambda$ is a constant for a given nuclide: it does **not** change with temperature, pressure, or chemical state.

## Activity ($A$)

The **activity** $A$ of a radioactive source is the number of disintegrations (decays) per second:

$$A = \lambda N$$

- **SI unit:** Becquerel (Bq), where $1\text{ Bq} = 1\text{ decay per second}$.
- Activity decreases over time as $N$ decreases.
- An older unit is the **Curie (Ci)**: $1\text{ Ci} = 3.7 \times 10^{10}\text{ Bq}$.

## Exponential Nature of Decay

Solving the differential equation $\frac{dN}{dt} = -\lambda N$ gives the **exponential decay equation**:

$$\boxed{N = N_0\, e^{-\lambda t}}$$

where:
- $N_0$ = initial number of undecayed nuclei at $t = 0$
- $N$ = number of undecayed nuclei at time $t$
- $\lambda$ = decay constant
- $e$ = base of natural logarithm ($\approx 2.718$)

The term $e^{-\lambda t}$ represents the **fraction of nuclei remaining** undecayed at time $t$.

Since $A = \lambda N$, the activity also decays exponentially:

$$A = A_0\, e^{-\lambda t}$$

where $A_0 = \lambda N_0$ is the initial activity.

### Key Feature

As time increases, $N$ decreases exponentially: the rate of decay slows down because there are fewer undecayed nuclei remaining. This is the **exponential nature** of radioactive decay.

<WorkedExample title="Worked Example">

**Problem:** A radioactive sample initially contains $N_0 = 8.0 \times 10^{20}$ nuclei and has a decay constant $\lambda = 2.0 \times 10^{-3}\text{ s}^{-1}$. Find:

(a) The initial activity $A_0$.

(b) The number of undecayed nuclei after $t = 500\text{ s}$.

**Solution:**

(a) $A_0 = \lambda N_0 = (2.0 \times 10^{-3})(8.0 \times 10^{20}) = 1.6 \times 10^{18}\text{ Bq}$

(b) $N = N_0\, e^{-\lambda t} = 8.0 \times 10^{20} \times e^{-(2.0 \times 10^{-3})(500)}$

$N = 8.0 \times 10^{20} \times e^{-1.0} = 8.0 \times 10^{20} \times 0.368 \approx 2.94 \times 10^{20}$

</WorkedExample>
## Summary Table

| Quantity | Symbol | Formula | SI Unit |
|---|---|---|---|
| Decay constant | $\lambda$ | N/A | $\text{s}^{-1}$ |
| Activity | $A$ | $A = \lambda N$ | Becquerel (Bq) |
| Undecayed nuclei | $N$ | $N = N_0 e^{-\lambda t}$ | N/A |
| Activity at time $t$ | $A$ | $A = A_0 e^{-\lambda t}$ | Bq |


---

<!-- note kx77ay80w0q54qbf1fmmfnkz5n85pvv7 | topic ms72d4fwstxgk1045bfgst96q185pj33 | status published -->
# Decay Constant and Half-Life Relation

This topic builds on the exponential nature of radioactive decay to establish the precise mathematical relationship between the **decay constant** ($\lambda$) and the **half-life** ($T_{1/2}$), and to apply the exponential decay equation quantitatively.

## 1. Activity and Decay Constant

The **activity** ($A$) of a radioactive source is defined as the number of nuclear disintegrations per second:

$$A = \lambda N$$

where:
- $A$ = activity (SI unit: **Becquerel, Bq** = 1 decay per second)
- $\lambda$ = decay constant (SI unit: $\text{s}^{-1}$)
- $N$ = number of undecayed nuclei present at that instant

The **decay constant** $\lambda$ represents the probability of decay of a single nucleus per unit time, or equivalently, the fraction of the total number of atoms that decay per unit time.

> A larger $\lambda$ means a higher probability of decay per unit time: the substance is more radioactive and less stable.

---

## 2. Half-Life ($T_{1/2}$)

The **half-life** of a radioactive substance is the time interval during which half of the unstable nuclei in a sample undergo decay.

After each successive half-life, the number of undecayed nuclei is halved:

| Time elapsed | Fraction remaining |
|---|---|
| $0$ | $1$ |
| $T_{1/2}$ | $\dfrac{1}{2}$ |
| $2T_{1/2}$ | $\dfrac{1}{4}$ |
| $3T_{1/2}$ | $\dfrac{1}{8}$ |
| $n \cdot T_{1/2}$ | $\left(\dfrac{1}{2}\right)^n$ |

The number of undecayed nuclei after $n$ half-lives is:

$$N = N_0 \left(\frac{1}{2}\right)^n \quad \text{where } n = \frac{t}{T_{1/2}}$$

---

## 3. Deriving the Relationship Between $T_{1/2}$ and $\lambda$

From the **Law of Radioactive Decay**, the number of undecayed nuclei at time $t$ is:

$$N = N_0 \, e^{-\lambda t}$$

At $t = T_{1/2}$, by definition $N = \dfrac{N_0}{2}$. Substituting:

$$\frac{N_0}{2} = N_0 \, e^{-\lambda T_{1/2}}$$

$$\frac{1}{2} = e^{-\lambda T_{1/2}}$$

Taking the natural logarithm of both sides:

$$\ln\left(\frac{1}{2}\right) = -\lambda T_{1/2}$$

$$-\ln 2 = -\lambda T_{1/2}$$

$$\boxed{T_{1/2} = \frac{\ln 2}{\lambda} = \frac{0.693}{\lambda}}$$

This is the fundamental relationship between half-life and decay constant.

**Key implications:**
- $T_{1/2}$ and $\lambda$ are **inversely proportional**.
- A large $\lambda$ → short $T_{1/2}$ → highly unstable, rapidly decaying nucleus.
- A small $\lambda$ → long $T_{1/2}$ → more stable nucleus.
- The product $\lambda \times T_{1/2} = \ln 2 \approx 0.693$ (always).

---

## 4. The Exponential Decay Equation

The number of undecayed nuclei at any time $t$ is given by:

$$N = N_0 \, e^{-\lambda t}$$

Since activity $A = \lambda N$, the activity also decays exponentially:

$$A = A_0 \, e^{-\lambda t}$$

where $A_0 = \lambda N_0$ is the initial activity.

The term $e^{-\lambda t}$ represents the **fraction of nuclei remaining undecayed** at time $t$.

---

## 5. Worked Examples

### Example 1: Finding half-life from decay constant

A radioactive isotope has a decay constant $\lambda = 0.0231 \text{ s}^{-1}$. Find its half-life.

$$T_{1/2} = \frac{0.693}{\lambda} = \frac{0.693}{0.0231} \approx 30 \text{ s}$$

---

### Example 2: Amount remaining after multiple half-lives

A $400\text{ g}$ sample of uranium has a half-life of 4.5 billion years. How much remains after 3 half-lives?

$$N = N_0 \left(\frac{1}{2}\right)^3 = 400 \times \frac{1}{8} = 50 \text{ g}$$

---

### Example 3: Using the exponential equation

A sample initially contains $N_0 = 8.0 \times 10^{20}$ nuclei with $\lambda = 1.5 \times 10^{-3} \text{ s}^{-1}$. How many nuclei remain after $t = 200\text{ s}$?

$$N = N_0 \, e^{-\lambda t} = 8.0 \times 10^{20} \times e^{-(1.5 \times 10^{-3})(200)}$$
$$N = 8.0 \times 10^{20} \times e^{-0.30} \approx 8.0 \times 10^{20} \times 0.741 \approx 5.9 \times 10^{20} \text{ nuclei}$$

---

## Summary Table

| Quantity | Symbol | Formula | SI Unit |
|---|---|---|---|
| Activity | $A$ | $A = \lambda N$ | Becquerel (Bq) |
| Decay constant | $\lambda$ | N/A | $\text{s}^{-1}$ |
| Half-life | $T_{1/2}$ | $T_{1/2} = 0.693/\lambda$ | s |
| Undecayed nuclei | $N$ | $N = N_0 e^{-\lambda t}$ | N/A |
| After $n$ half-lives | $N$ | $N = N_0(1/2)^n$ | N/A |


---

<!-- note kx743zbn9x0sd1fdmnrx28mn3d85q70w | topic ms7ehywfrventcvyaaxf185zt185qvc3 | status published -->
# 22.5 Nuclear Reactions

A **nuclear reaction** is a process in which two nuclei, or a nucleus and a subatomic particle, collide to produce one or more new nuclides. Nuclear reactions must obey four conservation laws:

1. **Conservation of charge number** ($Z$): total proton number is conserved.
2. **Conservation of mass number** ($A$): total nucleon number is conserved.
3. **Conservation of mass-energy**: total rest-mass energy plus kinetic energy is conserved.
4. **Conservation of momentum**: total linear momentum is conserved.

A general nuclear reaction is written as:

$$a + X \rightarrow Y + b$$

where $a$ is the projectile, $X$ is the target nucleus, $Y$ is the product nucleus, and $b$ is the ejected particle.

## Transmutation

**Transmutation** is the conversion of one element or isotope into another through a nuclear reaction. It is typically achieved by bombarding a target nucleus with particles such as protons, alpha particles, or neutrons.

**Example: Rutherford's first artificial transmutation (1919):**

$$^{14}_{7}\text{N} + ^{4}_{2}\text{He} \rightarrow ^{17}_{8}\text{O} + ^{1}_{1}\text{H}$$

### Why are neutrons effective projectiles?

Neutrons carry **no electric charge**, so they experience no Coulomb (electrostatic) repulsion from the positively charged nucleus. This allows neutrons to penetrate the nucleus even at very low kinetic energies, making them highly effective for inducing nuclear reactions.

---

## Q-Value of a Nuclear Reaction

The **Q-value** is the energy released (or absorbed) in a nuclear reaction. It equals the difference in rest-mass energy between reactants and products:

$$Q = (m_{\text{reactants}} - m_{\text{products}})c^2$$

Using atomic mass units, since $1\,\text{u} = 931.5\,\text{MeV}/c^2$:

$$Q = \Delta m \times 931.5\,\text{MeV}$$

| Condition | Type | Meaning |
|-----------|------|---------|
| $Q > 0$ | **Exothermic (exoergic)** | Energy is released; products are more stable |
| $Q < 0$ | **Endothermic (endoergic)** | Energy must be supplied; products are less stable |

---

## Binding Energy and Nuclear Reactions

The **binding energy per nucleon (B.E./A)** curve peaks near iron-56 ($^{56}_{26}\text{Fe}$) at approximately $8.8\,\text{MeV/nucleon}$.

- **Heavy nuclei** (large $A$) have a lower B.E./A than iron.
- **Light nuclei** (small $A$) also have a lower B.E./A than iron.

Energy is released in a nuclear reaction whenever the **B.E./A of the products is greater than the B.E./A of the reactants**, meaning the products are more tightly bound (more stable).

---

## Nuclear Fission

**Nuclear fission** is the process in which a heavy nucleus (such as $^{235}_{92}\text{U}$) splits into two smaller nuclei of roughly equal mass upon absorbing a slow neutron, releasing about 200 MeV and typically 2-3 neutrons that can sustain a chain reaction.

[22.5.3 Nuclear Fission](/physics-12/22-nuclear-physics/22-5-3-nuclear-fission) covers the mechanism, chain reaction, critical mass, and fission products in detail.

---

## Nuclear Fusion

**Nuclear fusion** is the process in which two or more light nuclei (such as deuterium and tritium) combine under extreme temperature and pressure to form a heavier, more stable nucleus, releasing more energy per nucleon than fission.

[22.5.1 Nuclear Fusion](/physics-12/22-nuclear-physics/22-5-1-nuclear-fusion) covers the D-T reaction, the conditions required, and why fusion releases energy in detail.

---

## Calculating Energy Released in Nuclear Reactions

**Steps:**
1. Write the balanced nuclear equation.
2. Find the mass defect: $\Delta m = m_{\text{reactants}} - m_{\text{products}}$ (in u).
3. Convert to energy: $Q = \Delta m \times 931.5\,\text{MeV}$.

**Worked Example: D-T Fusion:**

Given:
- $m(^{2}_{1}\text{H}) = 2.014102\,\text{u}$
- $m(^{3}_{1}\text{H}) = 3.016049\,\text{u}$
- $m(^{4}_{2}\text{He}) = 4.002602\,\text{u}$
- $m(^{1}_{0}n) = 1.008665\,\text{u}$

$$\Delta m = (2.014102 + 3.016049) - (4.002602 + 1.008665) = 0.018884\,\text{u}$$

$$Q = 0.018884 \times 931.5 = 17.59\,\text{MeV} \approx 17.6\,\text{MeV}$$

---

## Summary Table

| Feature | Fission | Fusion |
|---------|---------|--------|
| Nuclei involved | Heavy (e.g., U-235) | Light (e.g., H-2, H-3) |
| Trigger | Slow neutron | Extreme temperature |
| Energy released | ~200 MeV/reaction | ~17.6 MeV/reaction |
| Energy per nucleon | ~0.85 MeV | ~3.5 MeV |
| Products | Medium-mass fragments + neutrons | He-4 + neutron |
| B.E./A change | Increases toward Fe-56 peak | Increases toward Fe-56 peak |


---

<!-- note kx73f9jwes5yrz9fp53qx1pcv585qjvy | topic ms76dgpg0yknfv4axzqvrxd02185qmak | status published -->
# 22.5.1 Nuclear Fusion

## What is Nuclear Fusion?

**Nuclear fusion** is the process in which two or more light nuclei combine to form a single, heavier, and more stable nucleus. This process releases a tremendous amount of energy.

$${}_{1}^{2}\text{H} + {}_{1}^{3}\text{H} \rightarrow {}_{2}^{4}\text{He} + {}_{0}^{1}\text{n} + 17.6\ \text{MeV}$$

Fusion is the energy source of **stars**, including our Sun, where hydrogen nuclei fuse into helium through the proton-proton chain.

---

## Why Does Fusion Release Energy?

The mass of the product nucleus is **less** than the sum of the masses of the reacting nuclei. This difference is called the **mass defect** ($\Delta m$).

According to Einstein's mass-energy equivalence:

$$E = \Delta m \cdot c^2$$

This "missing" mass is converted into kinetic energy of the products, which manifests as heat and radiation.

---

## Binding Energy and Fusion

The **binding energy per nucleon (B.E./A)** curve explains why fusion releases energy:

- The curve **peaks near iron-56** (~8.8 MeV/nucleon).
- **Light nuclei** (low mass number $A$) have a **lower** B.E./A than nuclei near the peak.
- When light nuclei fuse, the product has a **higher** B.E./A, meaning the nucleons are more tightly bound.
- The system moves to a **more stable** configuration, releasing energy equal to the difference in total binding energies.

> **Key insight:** Both fission (splitting heavy nuclei) and fusion (combining light nuclei) release energy because both processes move products **toward the peak** of the B.E./A curve.

### Fusion vs. Fission: Energy per Nucleon

| Process | Nuclei involved | Energy per nucleon |
|---------|----------------|--------------------|
| Fusion  | Light (e.g., H, He) | **Higher** change in B.E./A |
| Fission | Heavy (e.g., U-235) | Lower change in B.E./A |

Fusion typically releases **more energy per nucleon** than fission.

---

## Conditions Required for Fusion

For two positively charged nuclei to fuse, they must overcome the **Coulomb (electrostatic) repulsion** between them. This requires:

1. **Extremely high temperature**: approximately $10^7$ K (tens of millions of kelvin). At these temperatures, nuclei have sufficient kinetic energy to approach each other close enough for the **strong nuclear force** to take over.
2. **High pressure/density**: to ensure frequent collisions between nuclei.

Because fusion requires such extreme heat, it is called a **thermonuclear reaction**.

---

## The Deuterium–Tritium (D-T) Reaction

The most studied fusion reaction uses isotopes of hydrogen:

- **Deuterium** (${}_{1}^{2}\text{H}$): hydrogen with 1 neutron
- **Tritium** (${}_{1}^{3}\text{H}$): hydrogen with 2 neutrons

$${}_{1}^{2}\text{H} + {}_{1}^{3}\text{H} \rightarrow {}_{2}^{4}\text{He} + {}_{0}^{1}\text{n} + 17.6\ \text{MeV}$$

**Conservation checks:**
- Mass number: $2 + 3 = 4 + 1$ ✓
- Atomic number: $1 + 1 = 2 + 0$ ✓

The 17.6 MeV of energy is released primarily as kinetic energy of the helium nucleus and neutron.

---

## Calculating Energy Released

To calculate the energy released in a fusion reaction:

1. Find the **mass defect**: $\Delta m = m_{\text{reactants}} - m_{\text{products}}$
2. Convert to energy: $E = \Delta m \cdot c^2$
3. If $\Delta m$ is in atomic mass units (u): use $1\ \text{u} = 931.5\ \text{MeV}/c^2$

$$E\ (\text{MeV}) = \Delta m\ (\text{u}) \times 931.5\ \text{MeV/u}$$

<WorkedExample title="Worked Example">

For the D-T reaction, given:
- $m({}^{2}_{1}\text{H}) = 2.01410\ \text{u}$
- $m({}^{3}_{1}\text{H}) = 3.01605\ \text{u}$
- $m({}^{4}_{2}\text{He}) = 4.00260\ \text{u}$
- $m({}^{1}_{0}\text{n}) = 1.00867\ \text{u}$

$$\Delta m = (2.01410 + 3.01605) - (4.00260 + 1.00867) = 0.01888\ \text{u}$$

$$E = 0.01888 \times 931.5 \approx 17.6\ \text{MeV}$$

</WorkedExample>
---

## Fusion vs. Fission: Summary

| Feature | Fusion | Fission |
|---------|--------|---------|
| Nuclei involved | Light (H, He) | Heavy (U, Pu) |
| Energy source | Stars, H-bomb | Nuclear reactors, A-bomb |
| Conditions | $\sim 10^7$ K | Thermal neutrons + critical mass |
| Waste products | Helium (non-radioactive) | Radioactive fragments |
| Energy per nucleon | Higher | Lower |


---

<!-- note kx7bb3qhw9byq0e8xpp1bn9gj185pz0k | topic ms7b4s9k28wtg1qned5jnrcrm985qpmx | status published -->
# 22.5.3 Nuclear Fission

## Definition

**Nuclear fission** is the process in which a heavy nucleus (such as $^{235}_{92}\text{U}$) absorbs a slow (thermal) neutron and splits into two smaller nuclei of roughly equal mass, releasing a large amount of energy and typically 2–3 neutrons.

$$^{235}_{92}\text{U} + ^{1}_{0}n \rightarrow ^{236}_{92}\text{U}^* \rightarrow ^{141}_{56}\text{Ba} + ^{92}_{36}\text{Kr} + 3\,^{1}_{0}n + Q$$

The intermediate nucleus $^{236}_{92}\text{U}^*$ is highly unstable and splits almost immediately.

---

## Why Slow (Thermal) Neutrons?

Fast neutrons are less likely to be captured by $^{235}_{92}\text{U}$. Slow (thermal) neutrons have a much higher **capture cross-section**, meaning they are far more likely to be absorbed and trigger fission. This is why nuclear reactors use a **moderator** (e.g., water or graphite) to slow neutrons down.

---

## Binding Energy and Fission

The **binding energy per nucleon (B.E./A)** curve peaks near iron-56 (~8.8 MeV/nucleon). Heavy nuclei like $^{235}_{92}\text{U}$ have a lower B.E./A (~7.6 MeV/nucleon). When they split into medium-mass fragments (e.g., Ba and Kr), the products have a **higher B.E./A**, meaning the nucleons are more tightly bound. The difference in total binding energy is released as kinetic energy of the fragments.

$$\text{Energy released} = \text{B.E.}_{\text{products}} - \text{B.E.}_{\text{reactants}}$$

---

## Energy Released in Fission

The **Q-value** of a nuclear reaction is the energy released, calculated from the mass difference between reactants and products:

$$Q = (m_{\text{reactants}} - m_{\text{products}})\,c^2$$

For the fission of $^{235}_{92}\text{U}$, the Q-value is approximately **200 MeV** per fission event. This energy appears primarily (~80%) as the **kinetic energy of the fission fragments**, with the remainder as kinetic energy of neutrons, gamma radiation, and energy from subsequent beta decays.

---

## Fission Energy vs. Chemical Energy

A single fission event releases ~$200\text{ MeV}$. A typical chemical reaction (e.g., burning one molecule of fuel) releases only ~$10\text{ eV}$. This means:

$$\frac{200\text{ MeV}}{10\text{ eV}} = \frac{200 \times 10^6\text{ eV}}{10\text{ eV}} = 2 \times 10^7$$

Nuclear fission releases approximately **20 million times** more energy per event than a chemical reaction. This is because fission converts a small amount of mass directly into energy via $E = \Delta m c^2$, whereas chemical reactions only rearrange electrons.

---

## Chain Reaction

Each fission event releases on average **2–3 neutrons**. These neutrons can trigger further fission events in neighbouring $^{235}_{92}\text{U}$ nuclei, leading to a **chain reaction**: a self-sustaining series of fission events.

- **Uncontrolled chain reaction** → exponential energy release → nuclear weapon
- **Controlled chain reaction** → steady power output → nuclear reactor

---

## Critical Mass

For a chain reaction to be self-sustaining, the fissile material must exceed a minimum amount called the **critical mass**. Below this mass, too many neutrons escape the material without causing further fission, and the reaction dies out (**sub-critical**). Above critical mass, the reaction grows exponentially (**super-critical**).

---

## Fission Products

The fission of $^{235}_{92}\text{U}$ does not always produce the same fragments. Common products include:

| Fragment 1 | Fragment 2 | Neutrons |
|---|---|---|
| $^{141}_{56}\text{Ba}$ | $^{92}_{36}\text{Kr}$ | 3 |
| $^{140}_{54}\text{Xe}$ | $^{94}_{38}\text{Sr}$ | 2 |


---

<!-- note kx7cnz5y657fgg9q26ky8bvex585pb9m | topic ms71v0jermkrnhvzjbrkdgwx0s85pst7 | status published -->
# 22.6 Nuclear Reactors

A **nuclear reactor** is a device in which a controlled, self-sustaining nuclear chain reaction is maintained to produce energy. The most common type is the **water-moderated (thermal) reactor**.

## Fuel Rods
The fuel consists of enriched uranium (see Uranium Enrichment below), typically in the form of uranium dioxide ($\text{UO}_2$) pellets sealed inside metal tubes called **fuel rods**. The fissile isotope $^{235}_{92}\text{U}$ undergoes fission when struck by a slow (thermal) neutron:

$$^{235}_{92}\text{U} + ^{1}_{0}n \rightarrow \text{fission fragments} + 2\text{–}3\, ^{1}_{0}n + \text{energy (~200 MeV)}$$

## Moderator
Fission neutrons are released at high speeds. Fast neutrons are much less likely to cause further fission in $^{235}_{92}\text{U}$. The **moderator** slows these fast neutrons down to **thermal speeds** (~0.025 eV) through elastic collisions.

- In a **water-moderated reactor**, ordinary water ($\text{H}_2\text{O}$) or **heavy water** ($\text{D}_2\text{O}$) acts as the moderator.
- **Graphite** is another common moderator.
- Heavy water is preferred because it has a low neutron-absorption cross-section, meaning it slows neutrons without absorbing too many of them.

## Control Rods
**Control rods** are made of neutron-absorbing materials such as **Cadmium (Cd)** or **Boron (B)**. They regulate the chain reaction:

- **Inserting** control rods deeper into the core absorbs more neutrons → reaction rate decreases.
- **Withdrawing** control rods allows more neutrons to cause fission → reaction rate increases.
- For steady power output, the **multiplication factor** $k = 1$ (critical state).
- To **shut down** the reactor (SCRAM), rods are fully inserted → $k < 1$.

## Coolant
The **coolant** (usually pressurised water) flows through the reactor core and absorbs the thermal energy produced by fission. It carries this heat to a **heat exchanger (steam generator)**, where it converts water in a secondary circuit into steam. The steam drives a **turbine** connected to an **electrical generator**.

## Pressure Vessel
The reactor core (fuel rods, moderator, control rods, and coolant) is enclosed in a thick steel **pressure vessel** that withstands the high pressures of the coolant.

## Biological Shielding
Surrounding the pressure vessel is several metres of **high-density concrete** (biological shielding). Its purpose is to absorb and block:
- Intense **gamma radiation**
- **Neutron flux**

This protects workers and the surrounding environment from harmful radiation.

---

## Uranium Enrichment

Natural uranium has the following isotopic composition:

| Isotope | Abundance | Fissile? |
|---|---|---|
| $^{238}_{92}\text{U}$ | ~99.3% | No (fertile) |
| $^{235}_{92}\text{U}$ | ~0.7% | **Yes** |

Only $^{235}_{92}\text{U}$ undergoes fission with thermal neutrons. At 0.7% concentration, a sustained chain reaction is difficult to achieve in most reactor designs.

**Uranium enrichment** is the industrial process of **increasing the proportion of $^{235}_{92}\text{U}$** relative to $^{238}_{92}\text{U}$:

- **Reactor-grade enrichment**: 3-5% $^{235}_{92}\text{U}$, used in power reactors.
- **Weapons-grade enrichment**: >90% $^{235}_{92}\text{U}$, used in nuclear weapons.

### How Enrichment Works
The most common method is **gas centrifuge separation**. Uranium is converted to uranium hexafluoride gas ($\text{UF}_6$). Because $^{235}\text{UF}_6$ is very slightly lighter than $^{238}\text{UF}_6$, high-speed centrifuges can separate them. Many stages (a **cascade**) are needed to achieve the desired enrichment level.

---

## Energy Flow in a Nuclear Power Plant

$$\text{Fission (nuclear energy)} \rightarrow \text{Thermal energy (coolant)} \rightarrow \text{Steam (turbine)} \rightarrow \text{Electrical energy (generator)}$$


---

<!-- note kx7bbwvv9ax53zrj15412agk8s85p1p1 | topic ms7f7h83pw9zzjp1skd1yk06j985pnz5 | status published -->
# 22.7 Energy in Annihilation Reactions

## What is Annihilation?

**Annihilation** is the process in which a particle and its corresponding **antiparticle** collide and their entire mass is converted into energy in the form of **gamma-ray photons**, in accordance with Einstein's mass-energy equivalence:

$$E = mc^2$$

The most common example studied at this level is **electron–positron annihilation**.

---

## The Positron

A **positron** ($e^+$) is the antiparticle of the electron. It has:
- The **same mass** as an electron ($m_0 = 9.11 \times 10^{-31}\text{ kg}$)
- A **positive charge** of $+e = +1.6 \times 10^{-19}\text{ C}$

Positrons are produced in **pair production** (the reverse of annihilation) and in $\beta^+$ decay.

---

## Electron–Positron Annihilation

When an electron and a positron meet, they annihilate and produce **two gamma-ray photons**:

$$e^- + e^+ \rightarrow \gamma + \gamma$$

### Why Two Photons?

A single photon cannot be produced because it would violate the **Law of Conservation of Momentum**. In the centre-of-mass frame, the total momentum of the electron–positron pair is **zero**. A single photon always carries momentum ($p = hf/c$), so it cannot conserve zero net momentum. Two photons emitted in **exactly opposite directions** have momenta that cancel, satisfying conservation of momentum.

---

## Conservation Laws in Annihilation

Annihilation must satisfy:

| Conservation Law | How it is satisfied |
|---|---|
| **Mass-Energy** | Total rest-mass energy + kinetic energy of both particles = total energy of both photons |
| **Linear Momentum** | Two photons travel in opposite directions; their momenta are equal and opposite |
| **Charge** | $e^-$ has charge $-e$, $e^+$ has charge $+e$; total charge = 0; photons carry no charge |

---

## Calculating the Energy of the Gamma Photons

### Case 1: Both particles at rest

If the electron and positron are both at rest, all energy comes from rest mass:

$$E_{\text{total}} = 2m_0c^2 = 2 \times 0.511\text{ MeV} = 1.022\text{ MeV}$$

This energy is shared **equally** between the two photons, so each photon has energy:

$$\boxed{E_\gamma = 0.511\text{ MeV}}$$

This is the **minimum** energy each photon can have.

### Case 2: Both particles have kinetic energy

If the electron has kinetic energy $KE_{e^-}$ and the positron has kinetic energy $KE_{e^+}$, the energy conservation equation becomes:

$$KE_{e^-} + KE_{e^+} + 2m_0c^2 = 2hf$$

where $hf$ is the energy of each photon (assuming equal sharing).

**Worked Example:**

An electron and positron, each with kinetic energy $0.25\text{ MeV}$, annihilate. Find the energy of each photon.

$$2hf = 0.25 + 0.25 + 2(0.511) = 0.5 + 1.022 = 1.522\text{ MeV}$$
$$hf = 0.761\text{ MeV}$$

---

## Summary

- Annihilation converts **all mass** of a particle–antiparticle pair into **electromagnetic energy**.
- Electron–positron annihilation produces **two gamma photons** of at least $0.511\text{ MeV}$ each.
- The two photons travel in **opposite directions** to conserve momentum.
- This process is the physical basis of **PET (Positron Emission Tomography)** scanning.


---

<!-- note kx79s6xx6w6cp0p0q7j80mts8h85pt9x | topic ms77ga2k8d2gtzm7g5gwvmn6jh85qszz | status published -->
# 22.8 Medical Uses of Radiations

Radioactive isotopes and radiation have two broad categories of medical application: **diagnostic** (using tracers and imaging) and **therapeutic** (using radiation to destroy diseased tissue).

## Medical Tracers

A **medical tracer** is a radioactive isotope (ideally a gamma emitter with a short half-life, chemically bindable and non-toxic) introduced into the body, where external detectors track it to map organ function or locate abnormalities. Common tracers include Technetium-99m, Iodine-131, and Sodium-24.

[22.8.1 Medical Tracer](/physics-12/22-nuclear-physics/22-8-1-medical-tracer) covers the properties of an ideal tracer and specific tracers in detail.

---

## PET Scanner (Positron Emission Tomography)

A **PET scanner** exploits electron-positron annihilation: a positron-emitting tracer (e.g. Fluorine-18) accumulates in metabolically active tissue, its positrons annihilate with nearby electrons to produce two gamma photons travelling in exactly opposite directions, and a ring of detectors uses coincidence detection to reconstruct a 3-D image of metabolic activity.

[22.8.2 PET Scanner](/physics-12/22-nuclear-physics/22-8-2-pet-scanner) covers the full PET scanning process and its key radioisotopes in detail.

---

## Energy of Gamma Photons in Annihilation (P-12-F-41)

The rest-mass energy of an electron (or positron) is:
$$E = m_e c^2 = (9.11 \times 10^{-31})(3 \times 10^8)^2 = 8.19 \times 10^{-14}\ \text{J} = 0.511\ \text{MeV}$$

When an electron and positron at rest annihilate, the **total energy** released is:
$$E_{\text{total}} = 2m_e c^2 = 2 \times 0.511 = 1.022\ \text{MeV}$$

This energy is shared equally between the two photons, so **each photon carries**:
$$E_\gamma = 0.511\ \text{MeV}$$

This specific energy is the **signature** used by PET scanner detectors to confirm that a detected photon came from an annihilation event.

---

## Detection of Gamma Rays Outside the Body (P-12-F-42)

Gamma rays are the preferred radiation for external detection because of their high penetrating power. Several medical applications rely on detecting gamma rays emitted from within or directed at the body.

## Gamma Camera (Scintigraphy)
Used with tracers like $^{99m}\text{Tc}$. A **collimator** (lead grid) allows only gamma rays travelling in a specific direction to reach a **scintillation detector** (sodium iodide crystal). The crystal converts gamma photons into visible light, which is then converted to an electrical signal by a photomultiplier tube, building up a 2-D image of the organ.

## Teletherapy (External Beam Radiotherapy)
- **Cobalt-60 ($^{60}\text{Co}$)** is a high-energy gamma emitter used to treat **deep-seated tumours**.
- The source is rotated around the patient so that the beam always passes through the tumour, concentrating the lethal dose at the tumour while minimising damage to surrounding healthy tissue.

## Brachytherapy (Internal Radiotherapy)
- A sealed radioactive source is placed **inside or adjacent** to the tumour (e.g., tiny radioactive 'seeds' implanted in a prostate tumour).
- Delivers a high local dose to the tumour with minimal exposure to surrounding tissue.

## Beta Therapy
- **Phosphorus-32 ($^{32}\text{P}$)** emits beta particles used to treat **superficial (skin) tumours**.
- Beta particles have limited penetration depth, making them ideal for surface-level treatment without damaging deeper healthy tissue.

## Sterilisation of Medical Instruments
- Gamma radiation from $^{60}\text{Co}$ is used to sterilise surgical instruments and disposable medical equipment.
- Gamma rays destroy the **DNA of bacteria and microorganisms**, killing them without heat or chemicals, and without making the instruments radioactive.


---

<!-- note kx7d6j6xs4xsj99xefypjqddkn85p3td | topic ms7858j7gfwqwsq030j658kfq985qcra | status published -->
# 22.8.1 Medical Tracer

## What is a Medical Tracer?

A **medical tracer** (or radiotracer) is a radioactive isotope (radioisotope) that is introduced into the body, either by injection, ingestion, or inhalation, to monitor the function of specific organs, track blood flow, or locate blockages and abnormalities. The emitted radiation is detected by instruments placed **outside** the body, allowing doctors to obtain diagnostic information without surgery.

---

## Properties Required of a Good Medical Tracer

For a radioisotope to be suitable as a medical tracer, it must satisfy the following conditions:

1. **Gamma emitter**: The tracer must emit gamma ($\gamma$) rays, which are highly penetrating and can pass through body tissues to reach external detectors. Alpha ($\alpha$) and beta ($\beta$) particles are absorbed by surrounding tissue, causing unnecessary radiation damage and cannot be detected externally.

2. **Short half-life**: The half-life must be long enough for the diagnostic procedure to be completed, but short enough that the tracer decays quickly after use, minimising the long-term radiation dose to the patient. Typical half-lives range from a few hours to a few days.

3. **Chemically compatible**: The tracer must be attachable to a biological molecule that is naturally taken up by the target organ, so it concentrates where imaging is needed.

4. **Low toxicity**: The chemical form of the tracer must be non-toxic to the patient.

---

## Common Medical Tracers

### Technetium-99m ($^{99m}\text{Tc}$)

Technetium-99m is the **most widely used** radioisotope in nuclear medicine. The 'm' stands for **metastable**, meaning the nucleus exists in an excited energy state and releases a gamma photon to reach a lower energy state.

| Property | Value |
|---|---|
| Half-life | 6 hours |
| Radiation emitted | Low-energy gamma rays (140 keV) |
| Applications | Brain, liver, kidney, bone, thyroid imaging |

Its 6-hour half-life is ideal: long enough for imaging procedures, short enough to minimise patient dose. It can be chemically bound to many different biological molecules to target specific organs.

### Iodine-131 ($^{131}\text{I}$)

The thyroid gland naturally absorbs iodine from the bloodstream. When $^{131}\text{I}$ is ingested, it concentrates in the thyroid. By measuring the **rate and distribution** of iodine uptake, doctors can diagnose:
- **Hyperthyroidism** (overactive thyroid: absorbs iodine too rapidly)
- **Hypothyroidism** (underactive thyroid: absorbs iodine too slowly)
- Thyroid cancer

### Sodium-24 ($^{24}\text{Na}$)

Sodium-24 is injected into the bloodstream to act as a tracer for **blood flow**. It can locate obstructions, blockages, or leaks in the circulatory system by detecting where the tracer fails to flow normally.

---

## Detection of Gamma Rays Outside the Body (SLO P-12-F-42)

Once the tracer is inside the body and emitting gamma rays, the radiation must be detected externally. This is achieved using a **gamma camera** (also called a scintillation camera):

### How a Gamma Camera Works

1. The patient is injected with the gamma-emitting tracer, which concentrates in the target organ.
2. Gamma rays emitted from inside the body pass through the tissues (due to their high penetrating power).
3. The gamma rays strike a **scintillator crystal** (typically sodium iodide, NaI) in the gamma camera.
4. Each gamma photon causes the crystal to emit a tiny flash of **visible light** (scintillation).
5. **Photomultiplier tubes (PMTs)** behind the crystal detect these light flashes and convert them into electrical signals.
6. A computer processes the signals to produce a **2D image** (scintigram) showing the distribution of the tracer within the organ.

Areas of high tracer concentration appear as **'hot spots'** (indicating high metabolic activity or blood flow), while areas of low concentration appear as **'cold spots'** (indicating blockage or reduced function).

### Why Gamma Rays Are Ideal for External Detection

- **High penetrating power**: Gamma rays pass through several centimetres of tissue without significant absorption.
- **Externally detectable**: Unlike alpha or beta particles, gamma rays reach the detector outside the body.
- **Minimal tissue damage**: Low-energy gamma rays (as used in tracers) cause less ionisation damage than alpha or beta radiation.

---

## Tracer vs. Radiotherapy

| Feature | Medical Tracer | Radiotherapy |
|---|---|---|
| Purpose | Diagnosis (imaging) | Treatment (destroy cancer cells) |
| Radiation dose | Very low | High |
| Isotope half-life | Short (hours–days) | Longer |
| Radiation type | Gamma (low energy) | Gamma (high energy, e.g., $^{60}\text{Co}$) |
| Tissue damage | Minimised | Intentional (to kill tumour) |


---

<!-- note kx774qqn997g92dxzcw0yy7trx85qetf | topic ms70wy6k7th6n2w8sx99zpvw2h85q05c | status published -->
# 22.8.2 PET Scanner

## What is a PET Scanner?

**PET** stands for **Positron Emission Tomography**. It is a nuclear medicine imaging technique that produces three-dimensional images of functional processes in the body, particularly metabolic activity, rather than just anatomical structure.

---

## Step 1: Radiotracer Injection

A **positron-emitting radioisotope** (radiotracer) is introduced into the body, usually by injection. The most common tracer is **Fluorine-18** ($^{18}_{9}\text{F}$), which is attached to a glucose molecule to form **FDG (Fluorodeoxyglucose)**.

Because metabolically active tissues (e.g., brain cells, cancer cells) consume more glucose, the FDG accumulates preferentially in those regions.

## Step 2: Positron Emission (β⁺ Decay)

The radioisotope undergoes **beta-plus (β⁺) decay**, emitting a **positron** ($e^+$):

$$^{18}_{9}\text{F} \rightarrow ^{18}_{8}\text{O} + e^+ + \nu_e$$

The emitted positron travels only a very short distance (a few millimetres) through tissue before it encounters an electron.

## Step 3: Electron-Positron Annihilation

When the positron meets an electron in the surrounding tissue, **annihilation** occurs:

$$e^+ + e^- \rightarrow \gamma + \gamma$$

The entire rest-mass energy of both particles is converted into **two gamma-ray photons** emitted in **exactly opposite directions** (180° apart). This back-to-back emission is required by the **Law of Conservation of Momentum**: since the total momentum of the nearly-at-rest pair is approximately zero, the two photons must have equal and opposite momenta.

## Step 4: Energy of the Gamma Photons

Each photon carries the rest-mass energy of one electron (or positron):

$$E = m_0 c^2 = 0.511 \text{ MeV}$$

The total energy released per annihilation event is:

$$E_{\text{total}} = 2 m_0 c^2 = 2 \times 0.511 = 1.022 \text{ MeV}$$

This is consistent with **conservation of mass-energy** ($E = mc^2$).

> **If the particles have kinetic energy** $KE_{e^-}$ and $KE_{e^+}$, the total energy of each photon is:
> $$hf = m_0c^2 + \frac{KE_{e^-} + KE_{e^+}}{2}$$

## Step 5: Coincidence Detection

The patient lies inside a **ring of scintillation detectors**. The two 0.511 MeV gamma photons travel outward and strike detectors on **opposite sides of the ring** at virtually the **same instant**.

The scanner uses **coincidence detection**: it only records an event when two detectors fire **simultaneously** (within a nanosecond window). This allows the scanner to determine that the annihilation occurred somewhere along the **line of response (LOR)** connecting the two triggered detectors.

By collecting millions of such coincidence events from all angles, a computer reconstructs a **3D cross-sectional image** (tomogram) of the metabolic activity inside the body.

---

## Detection of Gamma Rays Outside the Body

Gamma rays are used in PET scanning because:

- They are **highly penetrating**: they pass through body tissue and reach the external detectors without significant absorption.
- Alpha and beta particles are **stopped within the body** and cannot be detected externally.
- The **511 keV energy** is specific and characteristic, allowing the detectors to distinguish true annihilation photons from background radiation.

The detectors are typically made of **scintillator crystals** (e.g., BGO or LSO) coupled to **photomultiplier tubes** or silicon photomultipliers, which convert the gamma-ray energy into an electrical signal.

---

## Summary Table

| Step | Process | Key Physics |
|------|---------|-------------|
| 1 | Tracer injection | β⁺ emitter attached to glucose |
| 2 | β⁺ decay | Positron emitted from nucleus |
| 3 | Annihilation | $e^+ + e^- \rightarrow 2\gamma$ |
| 4 | Photon energy | Each photon = 0.511 MeV |
| 5 | Coincidence detection | Ring detectors, simultaneous hits |
| 6 | Image reconstruction | 3D tomographic map of metabolism |

---

## Key Radioisotopes Used in PET

| Isotope | Half-life | Application |
|---------|-----------|-------------|
| Fluorine-18 ($^{18}\text{F}$) | 110 min | Brain, cancer (FDG) |
| Carbon-11 ($^{11}\text{C}$) | 20 min | Neurology |
| Oxygen-15 ($^{15}\text{O}$) | 2 min | Blood flow |
