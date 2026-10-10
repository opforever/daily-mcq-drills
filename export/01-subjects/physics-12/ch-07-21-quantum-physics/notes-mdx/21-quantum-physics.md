<!-- note kx727df4cj75s9m5czfaaa08s585qc6y | topic ms7aq50c0qh1wpj5r82svz8t0185p297 | status published -->
# 21.1 Electromagnetic Waves

## Classical Picture of Electromagnetic Waves

Electromagnetic (EM) waves are produced by **accelerating electric charges**. When a charge oscillates (e.g., electrons in a transmitting antenna), it creates time-varying electric and magnetic fields that propagate outward as an EM wave.

### Structure of an EM Wave

In an EM wave:
- The **electric field** $\vec{E}$ and **magnetic field** $\vec{B}$ oscillate **perpendicular to each other**.
- Both fields are **perpendicular to the direction of propagation**, making EM waves **transverse** waves.
- The direction of propagation is given by $\vec{E} \times \vec{B}$.


<CaptionedImage src="kg2871smzwh8zj3ajsb2gzbm758a9wmh" alt="EM-Wave" caption="EM-Wave" />

### Speed of EM Waves

All EM waves travel through vacuum at the **speed of light**:

$$c = 3 \times 10^8 \text{ m/s}$$

This speed is **independent of frequency**: radio waves, visible light, X-rays, and gamma rays all travel at $c$ in vacuum.

---

## Particulate Nature of Electromagnetic Radiation

Classical wave theory successfully explains interference, diffraction, and polarisation of light. However, several phenomena, most notably the **photoelectric effect** and **Compton scattering**, cannot be explained by treating light purely as a wave.

These observations led to the conclusion that **electromagnetic radiation has a particulate (quantum) nature**: it is emitted, absorbed, and travels in discrete packets of energy called **photons**.

> **P-12-F-01:** Electromagnetic radiation has a particulate nature: it consists of photons.

---

## The Photonic Model of Light (Planck–Einstein Relation)

Max Planck (1900) proposed that energy is **quantised**, emitted or absorbed only in discrete packets called **quanta**. Albert Einstein extended this to light itself, proposing that a photon carries energy:

$$\boxed{E = hf}$$

where:
- $E$ = energy of one photon (in joules, J)
- $h = 6.626 \times 10^{-34}$ J·s = **Planck's constant**
- $f$ = frequency of the radiation (Hz)

Since $c = f\lambda$, this can also be written as:

$$E = \frac{hc}{\lambda}$$

where $\lambda$ is the wavelength.

### Key Points
- Higher frequency, higher photon energy.
- Energy is **quantised**: only whole-number multiples of $hf$ can be exchanged.
- A photon has **zero rest mass** but carries energy and momentum.

---

## The Electronvolt (eV)

Because photon energies are extremely small in joules, a more convenient unit is the **electronvolt**:

$$1 \text{ eV} = 1.6 \times 10^{-19} \text{ J}$$

One electronvolt is the kinetic energy gained by an electron accelerated through a potential difference of 1 volt.

### Useful shortcut for photon energy

Using $hc = 1240 \text{ eV·nm}$:

$$E = \frac{1240 \text{ eV·nm}}{\lambda \text{ (nm)}}$$

**Example:** Find the energy of a photon of wavelength $500 \text{ nm}$.

$$E = \frac{1240}{500} = 2.48 \text{ eV}$$

---

## Summary Table

| Quantity | Symbol | Value / Formula |
|---|---|---|
| Planck's constant | $h$ | $6.626 \times 10^{-34}$ J·s |
| Speed of light | $c$ | $3 \times 10^8$ m/s |
| Photon energy | $E$ | $hf = hc/\lambda$ |
| Electronvolt | eV | $1.6 \times 10^{-19}$ J |
| Useful product | $hc$ | $1240$ eV·nm |


---

<!-- note kx7153br06ph1sqp8epfxq2gx585pjyc | topic ms7e6sxd0awcsednr0z54n03ax85q27c | status published -->
# 21.2 Photoelectric Effect

## What is the Photoelectric Effect?

The **photoelectric effect** is the phenomenon in which electrons are emitted from the surface of a metal when electromagnetic radiation of sufficiently high frequency is incident upon it. The emitted electrons are called **photoelectrons**.

This effect was first observed by Heinrich Hertz in 1887 and later explained by Albert Einstein in 1905 using the concept of photons, for which he received the Nobel Prize in Physics.

## Experimental Observations

Key experimental observations that classical wave theory **failed** to explain:

1. **Threshold Frequency**: Photoelectrons are only emitted if the frequency of incident light is above a minimum value called the threshold frequency $f_0$. Below $f_0$, no electrons are emitted regardless of how intense the light is.
2. **Instantaneous Emission**: Electrons are emitted almost instantaneously (within $10^{-9}$ s) once light above $f_0$ strikes the surface, with no time delay.
3. **Independence of K.E. from Intensity**: The maximum kinetic energy of emitted photoelectrons depends on the **frequency** of incident light, not its intensity.
4. **Photocurrent and Intensity**: The number of photoelectrons emitted per second (photocurrent) is proportional to the **intensity** of incident light.

## Threshold Frequency and Threshold Wavelength

The **threshold frequency** $f_0$ is the minimum frequency of incident radiation required to eject an electron from a metal surface.

$$f_0 = \frac{\Phi}{h}$$

The corresponding **threshold wavelength** $\lambda_0$ is the maximum wavelength that can cause photoelectric emission:

$$\lambda_0 = \frac{c}{f_0} = \frac{hc}{\Phi}$$

For $f < f_0$ (or $\lambda > \lambda_0$): **no emission**, regardless of intensity.

## Work Function ($\Phi$)

The **work function** $\Phi$ is the minimum energy required to liberate an electron from the surface of a metal.

$$\Phi = hf_0$$

where $h = 6.63 \times 10^{-34}$ J s is Planck's constant.

Different metals have different work functions. Metals with lower work functions (e.g., caesium) are more sensitive to light.

| Metal | Work Function (eV) |
|-------|-------------------|
| Caesium | 2.0 |
| Sodium | 2.3 |
| Zinc | 4.3 |
| Platinum | 5.7 |

## Einstein's Photoelectric Equation

Einstein proposed that light consists of discrete packets of energy called **photons**, each carrying energy $E = hf$.

When a photon strikes a metal surface, it transfers all its energy to a single electron. Part of this energy is used to overcome the work function, and the remainder becomes the kinetic energy of the emitted electron.

By conservation of energy:

$$hf = \Phi + K.E_{\max}$$

$$hf = hf_0 + \frac{1}{2}mv_{\max}^2$$

where:
- $h$ = Planck's constant ($6.63 \times 10^{-34}$ J s)
- $f$ = frequency of incident light
- $\Phi = hf_0$ = work function of the metal
- $K.E_{\max} = \frac{1}{2}mv_{\max}^2$ = maximum kinetic energy of emitted electron

### Graphical Representation

Rearranging: $K.E_{\max} = hf - \Phi$

This is of the form $y = mx + c$, so a graph of $K.E_{\max}$ vs $f$ is a straight line with:

- **Slope** = $h$ (Planck's constant)
- **x-intercept** = $f_0$ (threshold frequency)
- **y-intercept** = $-\Phi$ (negative of work function)

<CaptionedImage src="kg26z7kmma20wdatgnw9htgyb5899fjf" alt="Photoelectric Effect" caption="Photoelectric Effect" />

## Stopping Potential ($V_0$)

The **stopping potential** $V_0$ is the minimum negative potential applied to the anode that just prevents even the most energetic photoelectrons from reaching it, reducing the photocurrent to zero.

$$K.E_{\max} = eV_0$$

where $e = 1.6 \times 10^{-19}$ C is the charge of an electron.

Combining with Einstein's equation:

$$eV_0 = hf - \Phi$$

The stopping potential depends only on the **frequency** of incident light, not on its intensity.

## Why Maximum K.E. is Independent of Intensity

In the photon model, **intensity** determines the **number of photons** per second hitting the surface, not the energy of each photon. Since each photoelectron absorbs exactly **one photon**, the maximum kinetic energy of each electron depends only on the energy of that single photon, i.e., on frequency $f$.

- **Increasing intensity**: more photons per second, more photoelectrons per second, **greater photocurrent**
- **Increasing intensity**: energy per photon unchanged, so $K.E_{\max}$ **unchanged**
- **Increasing frequency**: each photon has more energy, so **greater $K.E_{\max}$**

This is a fundamental failure of classical wave theory, which predicted that higher intensity should give electrons more energy.

<WorkedExample title="Worked Example">

**Problem:** Light of frequency $8.0 \times 10^{14}$ Hz is incident on a metal with work function $\Phi = 2.0$ eV. Find the maximum kinetic energy of the emitted photoelectrons.

**Solution:**

Photon energy: $E = hf = (6.63 \times 10^{-34})(8.0 \times 10^{14}) = 5.30 \times 10^{-19}$ J $= 3.31$ eV

Using Einstein's equation:
$$K.E_{\max} = hf - \Phi = 3.31 - 2.0 = 1.31 \text{ eV}$$

</WorkedExample>

---

<!-- note kx7csvakg89cbk1h59bgf68fad85pz9b | topic ms781n15mq1ev917vvzn6088ax85qhxv | status published -->
# 21.3 Compton's Effect

## Photon Momentum

Although a photon has zero rest mass, it carries **momentum**. According to Einstein's theory and Planck's relation, the momentum $p$ of a photon is:

$$p = \frac{E}{c} = \frac{hf}{c} = \frac{h}{\lambda}$$

where $h$ is Planck's constant, $f$ is the frequency, $c$ is the speed of light, and $\lambda$ is the wavelength. This shows that a photon's momentum is **inversely proportional to its wavelength**.

> This result is crucial: it means light can exert a **radiation pressure** and can transfer momentum to matter, a purely particle-like behaviour.

---

## The Compton Effect

In **1923**, Arthur H. Compton directed a beam of **X-rays** at a graphite (carbon) target and analysed the scattered X-rays. He found that the scattered X-rays had a **longer wavelength** (lower energy) than the incident X-rays. This phenomenon is called the **Compton Effect**.

## Explanation

Compton explained this by treating the X-ray photon as a **particle** that collides elastically with a **free (loosely bound) electron** in the target, similar to a billiard-ball collision:

1. The photon transfers some of its energy and momentum to the electron.
2. The electron recoils (the **Compton electron**).
3. The scattered photon has **less energy** → **longer wavelength**.

This experiment provided direct evidence that **photons carry momentum** and behave as particles.

## Compton Shift Formula

Applying conservation of energy and conservation of momentum to the photon–electron collision, Compton derived:

$$\Delta\lambda = \lambda' - \lambda = \frac{h}{m_0 c}(1 - \cos\theta)$$

| Symbol | Meaning |
|---|---|
| $\lambda'$ | Wavelength of scattered photon |
| $\lambda$ | Wavelength of incident photon |
| $\Delta\lambda$ | Compton shift (always $\geq 0$) |
| $h$ | Planck's constant ($6.63 \times 10^{-34}$ J·s) |
| $m_0$ | Rest mass of electron ($9.11 \times 10^{-31}$ kg) |
| $c$ | Speed of light ($3 \times 10^8$ m/s) |
| $\theta$ | Angle of scattering |

## Compton Wavelength

The constant $\dfrac{h}{m_0 c}$ is called the **Compton wavelength** of the electron:

$$\frac{h}{m_0 c} = 2.43 \times 10^{-12} \text{ m} = 0.00243 \text{ nm}$$

## Special Cases

| Scattering Angle $\theta$ | $\cos\theta$ | $\Delta\lambda$ |
|---|---|---|
| $0^\circ$ (forward) | $1$ | $0$ (no shift) |
| $90^\circ$ | $0$ | $\frac{h}{m_0 c} = 0.00243$ nm |
| $180^\circ$ (backscatter) | $-1$ | $\frac{2h}{m_0 c} = 0.00486$ nm (maximum) |

## Why Compton Effect is Not Observed with Visible Light

The Compton shift $\Delta\lambda \approx 0.00243$ nm is **fixed** regardless of the incident wavelength. For visible light ($\lambda \approx 400$–$700$ nm), the fractional change:

$$\frac{\Delta\lambda}{\lambda} \approx \frac{0.00243}{500} \approx 5 \times 10^{-6}$$

This is negligibly small and **undetectable**. For X-rays ($\lambda \approx 0.1$ nm), the fractional shift is significant (~2%), making it observable.

---

## Pair Production and Annihilation

### Pair Production

**Pair production** is the process in which a high-energy **gamma-ray photon** ($\gamma$) is converted into an **electron–positron pair** in the vicinity of a nucleus:

$$\gamma \rightarrow e^- + e^+$$

- The photon must have energy **at least equal to the rest-mass energy of both particles**:
  $$E_{\text{min}} = 2m_0 c^2 = 2 \times (9.11 \times 10^{-31})(3 \times 10^8)^2 \approx 1.02 \text{ MeV}$$
- A nearby nucleus is required to **conserve momentum**.
- This is a direct demonstration of **mass–energy equivalence** ($E = mc^2$): energy is converted into matter.

### Pair Annihilation

**Pair annihilation** is the **reverse** of pair production. When an electron ($e^-$) meets a positron ($e^+$), they annihilate each other and produce **two gamma-ray photons**:

$$e^- + e^+ \rightarrow 2\gamma$$

- Two photons are produced (not one) to **conserve momentum**, travelling in **opposite directions**.
- Each photon has energy equal to the rest-mass energy of one particle:
  $$E_\gamma = m_0 c^2 = 0.511 \text{ MeV}$$
- This demonstrates conversion of **matter into energy**.

| Process | Reactant | Product | Energy Condition |
|---|---|---|---|
| Pair Production | $\gamma$ photon | $e^- + e^+$ | $E_\gamma \geq 1.02$ MeV |
| Pair Annihilation | $e^- + e^+$ | $2\gamma$ | Each $\gamma = 0.511$ MeV |


---

<!-- note kx7aj5d8v7xv8xe8x24eczehqx85p9nz | topic ms78vygcvkm8fzajqy1hfmpd6d85qxwe | status published -->
# 21.5 Pair Annihilation

## Definition

**Pair annihilation** is the process in which a particle and its antiparticle collide and completely convert their combined mass-energy into electromagnetic radiation (gamma-ray photons). The most common example is the annihilation of an **electron** ($e^-$) and a **positron** ($e^+$):

$$e^- + e^+ \rightarrow \gamma + \gamma$$

Pair annihilation is the **reverse process of pair production**: in pair production, a photon creates a particle–antiparticle pair (energy → matter), while in annihilation, a particle–antiparticle pair converts into photons (matter → energy).

---

## Why Two Photons Are Produced

For a free electron-positron pair annihilating in its centre-of-momentum frame, the common two-photon channel conserves energy and momentum. A single photon cannot carry away zero total momentum. In that two-photon case, the photons have equal and opposite momenta; if the pair is at rest, each has 0.511 MeV.

Two photons are not produced in every possible annihilation event: higher-photon channels and other final states can occur when conservation laws allow them. The simple two-opposite-photon picture is the relevant one for electron-positron annihilation at rest and PET coincidence detection.
## Energy of the Gamma-Ray Photons

The energy released comes from the **rest mass energy** of both particles, as given by Einstein's mass-energy equivalence:

$$E = \Delta m c^2$$

The rest mass energy of one electron (or positron) is:

$$m_0 c^2 = (9.11 \times 10^{-31})(3 \times 10^8)^2 \approx 8.19 \times 10^{-14} \text{ J} = 0.511 \text{ MeV}$$

When both particles are **at rest**, the total energy available is:

$$E_{\text{total}} = 2m_0c^2 = 2 \times 0.511 = 1.022 \text{ MeV}$$

This energy is shared **equally** between the two photons, so each photon carries:

$$E_{\gamma} = 0.511 \text{ MeV}$$

> **Note:** If the electron and positron have kinetic energy before annihilation, the photon energies will be **greater than** $0.511\text{ MeV}$ each.

---

## Conservation Laws in Pair Annihilation

| Conservation Law | Before Annihilation | After Annihilation |
|---|---|---|
| **Energy** | Rest mass energy + KE of $e^-$ and $e^+$ | Total energy of two photons |
| **Momentum** | ~0 (particles at rest) | Two photons travel in opposite directions (net = 0) |
| **Charge** | $-e + e = 0$ | Photons carry no charge (net = 0) |

---

## Mass-Energy Equivalence

Pair annihilation is a direct demonstration of Einstein's equation:

$$E = \Delta m c^2$$

The **entire rest mass** of the electron-positron pair is converted into photon energy. This is one of the most complete conversions of mass into energy known in physics.

---

## Application: PET Scanning

Pair annihilation is the physical basis of **Positron Emission Tomography (PET)**:
- A radioactive tracer emitting positrons is introduced into the body.
- Each positron quickly annihilates with a nearby electron, producing two $0.511\text{ MeV}$ gamma-ray photons travelling in opposite directions.
- Detectors surrounding the patient detect these coincident photons to reconstruct a 3D image of metabolic activity.


---

<!-- note kx7dpvn5vzf9gsx4z511y4hkxx85px6f | topic ms7d0wrqf8fnhbf3w8r6tffrg185qbky | status published -->
# 21.6 Wave-Particle Duality

## Wave Nature of Light

Classical physics established that light exhibits wave behaviour through phenomena such as **interference** and **diffraction**. These experiments showed that light travels as a transverse electromagnetic wave with a wavelength $\lambda$ and frequency $f$.

## Particle Nature of Light

However, several experiments demonstrated that light also behaves as a stream of discrete energy packets called **photons**:

| Phenomenon | Evidence for Particle Nature |
|---|---|
| **Photoelectric Effect** | Light ejects electrons only above a threshold frequency; intensity affects number of electrons, not their energy. |
| **Compton Effect** | X-ray photons collide with electrons and transfer momentum, just like billiard balls. |
| **Pair Production** | A single photon can materialise into an electron–positron pair, behaving as a localised particle. |

This dual behaviour, wave **and** particle, is called **wave-particle duality**.

## de Broglie Hypothesis

In 1924, Louis de Broglie proposed that **matter also has a wave nature**. Any particle with momentum $p$ has an associated wavelength:

$$\lambda = \frac{h}{p} = \frac{h}{mv}$$

where:
- $h = 6.63 \times 10^{-34}$ J s (Planck's constant)
- $m$ = mass of the particle
- $v$ = speed of the particle

This is called the **de Broglie wavelength**.

### Why Macroscopic Objects Show No Wave Behaviour

For a cricket ball of mass $0.15$ kg moving at $30$ m/s:

$$\lambda = \frac{6.63 \times 10^{-34}}{0.15 \times 30} \approx 1.5 \times 10^{-34} \text{ m}$$

This is far smaller than any physical aperture, so diffraction is completely undetectable. Wave behaviour is only observable for **subatomic particles** such as electrons.

## Experimental Evidence: Davisson–Germer Experiment

In 1927, **Davisson and Germer** fired a beam of electrons at a nickel crystal and observed a **diffraction pattern**, the same pattern produced by X-rays of comparable wavelength. This was the first direct experimental proof that **electrons have wave properties**.

Key points:
- The spacing between nickel atoms acted as a diffraction grating.
- The observed diffraction angles matched the de Broglie wavelength of the electrons.
- This confirmed wave-particle duality for matter.

## Electron Microscope

The **electron microscope** exploits the wave nature of electrons to achieve very high resolution imaging.

### Why Electrons Give Better Resolution Than Light

Resolution is limited by the wavelength of the probe used: a smaller wavelength means less diffraction and finer detail can be resolved.

- Visible light has wavelengths of $400$–$700$ nm.
- Fast electrons (accelerated through tens of kilovolts) have de Broglie wavelengths of the order of **0.001 nm**, thousands of times smaller than visible light.

$$\lambda = \frac{h}{mv}$$

Increasing the accelerating voltage increases the electron speed $v$, which **decreases** $\lambda$ and **increases** resolution.

### Applications

- Imaging **viruses** (diameter $\sim 20$–$300$ nm)
- Imaging **bacteria** and cell organelles
- Resolving atomic-scale structures in materials science


---

<!-- note kx76yq83msjakx5yfsfbd59eh985qaw0 | topic ms7d0acsw55qmrqe23q5rz9v5185prft | status published -->
# Heisenberg's Uncertainty Principle

Heisenberg's Uncertainty Principle is one of the most profound results of quantum mechanics. It states that there are fundamental limits to how precisely certain pairs of physical quantities can be known simultaneously, not because of instrument limitations, but because of the wave-particle nature of matter itself.

## 21.8.1 Position–Momentum Uncertainty

**Statement:** It is impossible to simultaneously measure both the position ($x$) and the linear momentum ($p$) of a particle with perfect precision. The product of their uncertainties satisfies:

$$\Delta x \cdot \Delta p \geq \hbar$$

where $\hbar = \dfrac{h}{2\pi} \approx 1.054 \times 10^{-34}$ J s is the reduced Planck's constant.

- $\Delta x$ = uncertainty in position
- $\Delta p$ = uncertainty in momentum

If $\Delta x$ is made smaller (position measured more precisely), then $\Delta p$ must become larger (momentum becomes less certain), and vice versa.

---

## 21.8.2 Energy–Time Uncertainty

A second form of the uncertainty principle relates energy and time:

$$\Delta E \cdot \Delta t \geq \hbar$$

where:
- $\Delta E$ = uncertainty in the energy of a quantum state
- $\Delta t$ = lifetime of that state

**Interpretation:** A quantum state that exists for a very short time ($\Delta t$ small) has a large uncertainty in its energy ($\Delta E$ large). Conversely, a long-lived state has a very well-defined energy.

**Example:** An electron in an excited state with lifetime $\Delta t = 10^{-8}$ s has a minimum energy uncertainty:
$$\Delta E \geq \frac{\hbar}{\Delta t} = \frac{1.054 \times 10^{-34}}{10^{-8}} \approx 1.05 \times 10^{-26} \text{ J}$$

---

## 21.8.3 Physical Origin: Wave-Particle Duality

The uncertainty principle is not a result of clumsy measurement, it is a fundamental consequence of **wave-particle duality**.

A particle is described by a **wave packet**, a superposition of many waves of different wavelengths. The spatial extent of the wave packet determines $\Delta x$, while the spread in wavelengths determines $\Delta p$ (since $p = h/\lambda$):

- To **localize** a particle (small $\Delta x$): many different wavelengths must be superposed → large spread in $\lambda$ → large $\Delta p$.
- A **single wavelength** (precise $p$, small $\Delta p$): gives a wave spread over all space → large $\Delta x$.

This trade-off is mathematically unavoidable.

---

## 21.8.4 Why the Principle is Not Noticeable in Everyday Life

For macroscopic objects, $\hbar \approx 1.054 \times 10^{-34}$ J s is so incredibly small that the resulting uncertainties in position and momentum are far below the sensitivity of any measuring instrument. For example, a 1 kg ball moving at 1 m/s has a momentum of 1 kg m/s; the corresponding position uncertainty is of order $10^{-34}$ m, completely undetectable.

The principle only becomes significant at the **atomic and subatomic scale**, where masses and momenta are of order $10^{-30}$ to $10^{-27}$ kg m/s.

---

## 21.8.5 Using the Uncertainty Principle to Explain Measurement Uncertainty

The uncertainty principle has direct consequences for **measurement**:

1. **Perfect position measurement** ($\Delta x \to 0$) implies $\Delta p \to \infty$: the momentum becomes completely undefined.
2. **Perfect momentum measurement** ($\Delta p \to 0$) implies $\Delta x \to \infty$: the particle's location is completely unknown.
3. These are not technological limitations: they are **inherent properties of quantum systems**.

This principle also explains the **natural linewidth** of spectral lines: because an excited atomic state has a finite lifetime $\Delta t$, its energy has an inherent spread $\Delta E \geq \hbar / \Delta t$, causing the emitted photon to have a small range of frequencies rather than a perfectly sharp line.

---

## Summary Table

| Conjugate Pair | Uncertainty Relation | Key Insight |
|---|---|---|
| Position & Momentum | $\Delta x \cdot \Delta p \geq \hbar$ | More precise position → less precise momentum |
| Energy & Time | $\Delta E \cdot \Delta t \geq \hbar$ | Short-lived states have broad energy spread |

> **Key Point:** Heisenberg's Uncertainty Principle is a fundamental law of nature arising from wave-particle duality, not a limitation of technology or experimental skill.


---

<!-- note kx76gdzakbnd3abpsxrvqxtk7585p4rw | topic ms7145psmeghmgyn8y6w92e5k185q52x | status published -->
# 21.9 Discrete Energy Levels and Atomic Spectra

## Discrete Electron Energy Levels

Experiments show that electrons in an atom can only occupy **specific, fixed energy states**: they cannot have arbitrary energies. These are called **discrete energy levels**.

- Each energy level is labelled by a **principal quantum number** $n = 1, 2, 3, \ldots$
- The **ground state** ($n = 1$) is the lowest energy state; the electron is most tightly bound.
- Higher levels ($n = 2, 3, \ldots$) are called **excited states**.
- For hydrogen, the energy of level $n$ is:

$$E_n = -\frac{13.6}{n^2} \text{ eV}$$

The negative sign indicates the electron is bound to the nucleus.

| Level ($n$) | Energy (eV) |
|:-----------:|:-----------:|
| 1 (ground)  | −13.6       |
| 2           | −3.4        |
| 3           | −1.51       |
| 4           | −0.85       |
| ∞ (ionised) | 0           |

### Excitation and Ionisation

- **Excitation:** An atom absorbs energy and an electron jumps to a higher level. The minimum energy needed to move from the ground state to a specific higher level is supplied by the **excitation potential** (the accelerating p.d. required).
- **Ionisation:** The electron is completely removed from the atom. For hydrogen from the ground state, the **ionisation energy** is $13.6\text{ eV}$.

---

## The Photon Energy Equation: $hf = \Delta E$

When an electron transitions between energy levels, a **photon** is emitted or absorbed whose energy exactly equals the energy difference:

$$hf = E_{\text{higher}} - E_{\text{lower}} = \Delta E$$

where $h = 6.63 \times 10^{-34}\text{ J s}$ is Planck's constant and $f$ is the photon frequency.

Equivalently, using wavelength:

$$\frac{hc}{\lambda} = \Delta E$$

<WorkedExample title="Worked Example">

An electron in hydrogen falls from $n = 3$ to $n = 2$.

$$\Delta E = E_3 - E_2 = (-1.51) - (-3.4) = 1.89\text{ eV} = 1.89 \times 1.6 \times 10^{-19}\text{ J}$$

$$f = \frac{\Delta E}{h} = \frac{3.02 \times 10^{-19}}{6.63 \times 10^{-34}} \approx 4.56 \times 10^{14}\text{ Hz}$$

This lies in the **visible** (red) region, part of the Balmer series.

</WorkedExample>
---

## Emission and Absorption Line Spectra

### Emission Spectrum

- A **hot, low-pressure gas** is excited (by heat or electrical discharge).
- Electrons jump to higher levels, then **de-excite**, emitting photons of specific frequencies.
- Observed as **bright coloured lines on a dark background**.
- Each element has a unique set of lines, an atomic fingerprint.

### Absorption Spectrum

- **White (continuous) light** passes through a cool gas.
- Atoms absorb photons whose energies match allowed transitions, exciting electrons to higher levels.
- Observed as **dark lines on a continuous coloured background**.
- The dark lines appear at exactly the same frequencies as the emission lines of the same element.

### Why Does Hydrogen Produce Many Lines?

Although each hydrogen atom has only one electron, a sample contains vast numbers of atoms. When excited, different electrons transition between **different pairs** of energy levels, producing photons of many distinct frequencies.

---

## Spectral Series of Hydrogen

Transitions ending at the same lower level form a **series**:

| Series   | Lower Level ($n$) | Region of EM Spectrum |
|:--------:|:-----------------:|:---------------------:|
| Lyman    | $n = 1$           | Ultraviolet           |
| Balmer   | $n = 2$           | Visible               |
| Paschen  | $n = 3$           | Infrared              |
| Brackett | $n = 4$           | Infrared              |
| Pfund    | $n = 5$           | Infrared              |

The **Balmer series** is the only one partially in the visible range, producing the characteristic red, blue-green, and violet lines of hydrogen.
