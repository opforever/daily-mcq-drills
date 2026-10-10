<!-- note kx766g9mbghxk47ht7tbqwejnd85pdvy | topic ms7933b2g56r1t1h2c2p9cvc5585pjnk | status published -->
# 23.1 Blackbody Radiation

## What is a Black Body?

A **black body** is an idealised object that:
- **Absorbs** all electromagnetic radiation incident upon it, regardless of frequency or angle, so its absorptivity is **1** (unity).
- **Emits** radiation at the maximum possible rate for any object at the same temperature.

Real objects approximate black bodies; for example, a small hole in a hollow cavity behaves like a black body because radiation entering the hole undergoes multiple reflections and is almost entirely absorbed.

---

## Blackbody Radiation Spectrum

When a black body is heated, it emits a continuous spectrum of electromagnetic radiation. The intensity–wavelength graph has a characteristic shape:

- There is a **peak wavelength** $\lambda_{\max}$ at which maximum energy is emitted.
- At wavelengths shorter or longer than $\lambda_{\max}$, the intensity falls off.
- As temperature increases, the **peak shifts to shorter wavelengths** and the **total area under the curve increases** (more total energy emitted).

---

## Wien's Displacement Law (SLO P-12-F-46)

The peak wavelength $\lambda_{\max}$ of the emitted spectrum is **inversely proportional** to the absolute temperature $T$ of the black body:

$$\lambda_{\max} T = b$$

where the **Wien's displacement constant** $b \approx 2.9 \times 10^{-3}\ \text{m K}$.

**Implication:** A hotter object emits peak radiation at a shorter (bluer) wavelength.

### Example: Peak Wavelength of the Sun
The Sun's surface temperature is approximately $5800\ \text{K}$. Find the peak wavelength of solar radiation.

$$\lambda_{\max} = \frac{b}{T} = \frac{2.9 \times 10^{-3}}{5800} \approx 5.0 \times 10^{-7}\ \text{m} = 500\ \text{nm}$$

This lies in the **visible green** region, consistent with the Sun appearing white/yellow.

---

## The Ultraviolet Catastrophe

Classical physics (the **Rayleigh–Jeans law**) predicted that the intensity of blackbody radiation should increase without limit as wavelength decreases, implying **infinite energy** emitted at ultraviolet and shorter wavelengths. This catastrophic failure of classical theory is called the **ultraviolet catastrophe**.

Experimental data showed the intensity actually *falls* at short wavelengths, completely contradicting the classical prediction.

---

## Planck's Quantum Hypothesis

In 1900, **Max Planck** resolved the ultraviolet catastrophe by proposing that energy is not emitted or absorbed continuously, but in discrete packets called **quanta**.

The energy of a single quantum is:

$$E = hf$$

where:
- $h = 6.63 \times 10^{-34}\ \text{J s}$ is **Planck's constant**
- $f$ is the frequency of the radiation

This assumption correctly predicted the observed blackbody spectrum and marked the birth of **quantum physics**.

---

## Stefan-Boltzmann Law (SLO P-12-F-47)

The **total power radiated per unit surface area** $E$ (also called radiant emittance) by a perfect black body is proportional to the **fourth power** of its absolute temperature:

$$E = \sigma T^4$$

where:
- $E$ = power radiated per unit area $[\text{W m}^{-2}]$
- $\sigma = 5.67 \times 10^{-8}\ \text{W m}^{-2}\text{K}^{-4}$ is the **Stefan-Boltzmann constant**
- $T$ = absolute temperature in Kelvin $[\text{K}]$

For a star (or any spherical black body) of radius $R$, the **total luminosity** is:

$$L = \sigma A T^4 = 4\pi R^2 \sigma T^4$$

### Example: Radiated Power at 300 K
A black body at $T = 300\ \text{K}$ radiates how much power per unit area?

$$E = \sigma T^4 = 5.67 \times 10^{-8} \times (300)^4 = 5.67 \times 10^{-8} \times 8.1 \times 10^{9} \approx 459\ \text{W m}^{-2}$$

### Key Consequence of the Fourth-Power Law
If the temperature of a black body **doubles**, the total radiated power increases by a factor of $2^4 = 16$.

---

## Summary Table

| Law | Formula | Key Relationship |
|---|---|---|
| Wien's Displacement Law | $\lambda_{\max} T = 2.9 \times 10^{-3}\ \text{m K}$ | $\lambda_{\max} \propto 1/T$ |
| Stefan-Boltzmann Law | $E = \sigma T^4$ | $E \propto T^4$ |
| Planck's Quantum Hypothesis | $E = hf$ | Energy is quantised |


---

<!-- note kx7es1v340ad5rjtcn5kfjm8jn85pzje | topic ms7dyz4nb94rp6fe7d8s9m2m3x85p9y2 | status published -->
# 23.2 Luminosity and Radiant Flux Intensity

## Luminosity

**Luminosity** ($L$) is the total electromagnetic energy emitted by a star per unit time: it is the star's total power output.

$$L = \text{total power radiated by the star}$$

**SI unit:** Watts ($\mathrm{W}$) or $\mathrm{J\,s^{-1}}$

Luminosity is an **intrinsic** property of a star: it does not depend on how far away the observer is. It depends on the star's surface temperature and surface area.

---

## Stefan-Boltzmann Law and Luminosity

The **Stefan-Boltzmann Law** states that the total power radiated per unit surface area of a black body is proportional to the fourth power of its absolute temperature:

$$E = \sigma T^4$$

where $\sigma = 5.67 \times 10^{-8}\,\mathrm{W\,m^{-2}\,K^{-4}}$ is the Stefan-Boltzmann constant.

For a spherical star of radius $r$ and surface temperature $T$, the total surface area is $4\pi r^2$, so the **luminosity** is:

$$\boxed{L = 4\pi r^2 \sigma T^4}$$

This shows that luminosity depends on **two factors**:
1. The **surface area** of the star (related to its radius $r$)
2. The **surface temperature** $T$ (raised to the fourth power)

> A star twice as hot but the same size will be $2^4 = 16$ times more luminous.

---

## Radiant Flux Intensity

**Radiant Flux Intensity** ($F$), also called **apparent brightness**, is the power received per unit area at a distance $d$ from a star of luminosity $L$.

The star radiates energy equally in all directions. At distance $d$, this energy is spread over a sphere of surface area $4\pi d^2$:

$$\boxed{F = \frac{L}{4\pi d^2}}$$

**SI unit:** Watts per square metre ($\mathrm{W\,m^{-2}}$)

---

## Inverse Square Law

From the formula $F = \dfrac{L}{4\pi d^2}$, it is clear that:

$$F \propto \frac{1}{d^2}$$

This is the **Inverse Square Law** for radiant flux intensity: if the distance to a star is doubled, the radiant flux intensity decreases by a factor of **4**.

| Distance multiplied by | $F$ changes by |
|---|---|
| $\times 2$ | $\div 4$ |
| $\times 3$ | $\div 9$ |
| $\times \frac{1}{2}$ | $\times 4$ |

---

<WorkedExample title="Worked Example">

**Problem:** The Sun has luminosity $L_\odot = 3.85 \times 10^{26}\,\mathrm{W}$ and is at a distance of $1.5 \times 10^{11}\,\mathrm{m}$ from Earth. Calculate the radiant flux intensity at Earth's surface.

**Solution:**

$$F = \frac{L}{4\pi d^2} = \frac{3.85 \times 10^{26}}{4\pi (1.5 \times 10^{11})^2}$$

$$F = \frac{3.85 \times 10^{26}}{4\pi \times 2.25 \times 10^{22}} = \frac{3.85 \times 10^{26}}{2.83 \times 10^{23}}$$

$$F \approx 1360\,\mathrm{W\,m^{-2}}$$

This value (~$1360\,\mathrm{W\,m^{-2}}$) is known as the **solar constant**.

</WorkedExample>
---

## Summary Table

| Quantity | Symbol | Formula | SI Unit |
|---|---|---|---|
| Luminosity | $L$ | $L = 4\pi r^2 \sigma T^4$ | $\mathrm{W}$ |
| Radiant Flux Intensity | $F$ | $F = \dfrac{L}{4\pi d^2}$ | $\mathrm{W\,m^{-2}}$ |
| Stefan-Boltzmann constant | $\sigma$ | N/A | $\mathrm{W\,m^{-2}\,K^{-4}}$ |


---

<!-- note kx752w6rbh6q4dpyvtjz3v4ybd85qe8x | topic ms75hz71553q9swzescn5xhy2h85q9vp | status published -->
# 23.3 Standard Candles as Distance Indicators

## Standard Candles

A **standard candle** is an astronomical object whose **absolute luminosity (intrinsic brightness)** is known. Because we know how bright the object truly is, we can compare this to how bright it *appears* from Earth and calculate its distance using the **inverse square law**:

$$b = \frac{L}{4\pi d^2}$$

where:
- $b$ = apparent brightness (W m⁻²)
- $L$ = absolute luminosity (W)
- $d$ = distance to the object (m)

Rearranging to find distance:

$$d = \sqrt{\frac{L}{4\pi b}}$$

### Examples of Standard Candles

| Standard Candle | Basis | Range |
|---|---|---|
| **Cepheid Variables** | Period–Luminosity relationship | Up to ~100 Mpc |
| **Type Ia Supernovae** | Consistent peak luminosity | Billions of light-years |

#### Cepheid Variables
Cepheid variables are pulsating stars whose **period of pulsation is directly related to their average luminosity** (the Period–Luminosity relationship, discovered by Henrietta Leavitt). By measuring the period, astronomers determine $L$; by measuring $b$, they calculate $d$. Edwin Hubble used Cepheids in the Andromeda galaxy to prove it was a separate galaxy far beyond the Milky Way.

#### Type Ia Supernovae
A Type Ia supernova occurs when a **white dwarf** accretes mass from a companion star until it reaches the **Chandrasekhar limit** (~1.4 solar masses) and explodes. Because the triggering mass is always the same, all Type Ia supernovae reach nearly the **same peak luminosity** (~$10^{43}$ W). This makes them visible across billions of light-years, far beyond the reach of individual Cepheids.

---

## Blackbody Radiation and Wien's Displacement Law

Stars behave approximately as **black bodies**: objects that absorb all incident radiation and emit a characteristic spectrum that depends only on temperature.

### Wien's Displacement Law

The wavelength $\lambda_{max}$ at which a black body emits maximum power is **inversely proportional** to its absolute temperature $T$:

$$\lambda_{max} T = b_W \approx 2.9 \times 10^{-3} \text{ m K}$$

where $b_W$ is Wien's displacement constant.

**Application:** By measuring the peak wavelength of a star's spectrum, we can determine its surface temperature:

$$T = \frac{2.9 \times 10^{-3}}{\lambda_{max}}$$

**Example:** The Sun's peak emission is at $\lambda_{max} \approx 500$ nm:
$$T_{\odot} = \frac{2.9 \times 10^{-3}}{500 \times 10^{-9}} \approx 5800 \text{ K}$$

> **Key insight:** Hotter stars appear blue (shorter $\lambda_{max}$); cooler stars appear red (longer $\lambda_{max}$).

---

## Stefan-Boltzmann Law

The **total power radiated per unit surface area** of a black body is proportional to the **fourth power** of its absolute temperature:

$$E = \sigma T^4$$

where:
- $E$ = power radiated per unit area (W m⁻²)
- $\sigma = 5.67 \times 10^{-8}$ W m⁻² K⁻⁴ (Stefan-Boltzmann constant)
- $T$ = absolute temperature (K)

For a star of radius $R$, the total luminosity is:

$$L = 4\pi R^2 \sigma T^4$$

**Example:** If the temperature of a star doubles, its luminosity increases by a factor of $2^4 = 16$.

---

## Estimating the Radius of a Star

By combining Wien's displacement law (to find $T$) and the Stefan-Boltzmann law (relating $L$, $R$, and $T$), we can estimate a star's radius:

**Step 1:** Measure $\lambda_{max}$ from the star's spectrum to find $T$ using Wien's law.

**Step 2:** Measure apparent brightness $b$ and distance $d$ to find luminosity $L = 4\pi d^2 b$.

**Step 3:** Rearrange the Stefan-Boltzmann luminosity formula:

$$R = \sqrt{\frac{L}{4\pi \sigma T^4}}$$

<WorkedExample title="Worked Example">

A star has $\lambda_{max} = 290$ nm and luminosity $L = 3.9 \times 10^{26}$ W. Estimate its radius.

**Step 1:** $T = \frac{2.9 \times 10^{-3}}{290 \times 10^{-9}} = 10{,}000$ K

**Step 2:** $R = \sqrt{\frac{3.9 \times 10^{26}}{4\pi \times 5.67 \times 10^{-8} \times (10^4)^4}}$

$R = \sqrt{\frac{3.9 \times 10^{26}}{4\pi \times 5.67 \times 10^{-8} \times 10^{16}}} \approx \sqrt{\frac{3.9 \times 10^{26}}{7.12 \times 10^{9}}} \approx \sqrt{5.48 \times 10^{16}} \approx 2.3 \times 10^{8} \text{ m}$

</WorkedExample>

---

<!-- note kx716862dg0hqmse617w772fv585p74y | topic ms72j06dy7t6gw7ajgh85hw53585qp9p | status published -->
# 23.4 Spectra of Light

## Types of Spectra

When light from a source is passed through a prism or diffraction grating, the resulting pattern of wavelengths is called a **spectrum**. There are three main types:

### 1. Continuous Spectrum
A continuous spectrum contains all wavelengths of visible light (like a rainbow). It is produced by hot, dense objects such as the filament of an incandescent bulb or the interior of a star.

### 2. Emission Line Spectrum
An **emission line spectrum** consists of discrete bright lines on a dark background. It is produced when atoms of a hot, low-pressure gas are excited (e.g., by an electric discharge). Electrons in the excited atoms jump from higher energy levels to lower ones, emitting photons of specific wavelengths:

$$E = hf = \frac{hc}{\lambda}$$

Because energy levels are **quantised**, only specific wavelengths are emitted, giving a unique spectral "fingerprint" for each element.

### 3. Absorption Line Spectrum
An **absorption line spectrum** consists of dark lines on a continuous (rainbow) background. It is produced when white light passes through a cool, low-pressure gas. The gas atoms absorb photons whose energies exactly match the energy differences between their quantised levels, removing those wavelengths from the continuous spectrum.

> **Key fact:** The dark lines in an absorption spectrum appear at exactly the same wavelengths as the bright lines in the emission spectrum of the same element.

---

## Hydrogen Spectral Series

Hydrogen produces several series of spectral lines, each corresponding to electron transitions ending at a particular energy level $n_f$:

| Series | Final level ($n_f$) | Region | Transitions from |
|--------|-------------------|--------|------------------|
| Lyman | $n_f = 1$ | Ultraviolet (UV) | $n = 2, 3, 4, \ldots$ |
| Balmer | $n_f = 2$ | Visible | $n = 3, 4, 5, \ldots$ |
| Paschen | $n_f = 3$ | Infrared (IR) | $n = 4, 5, 6, \ldots$ |
| Brackett | $n_f = 4$ | Infrared (IR) | $n = 5, 6, 7, \ldots$ |
| Pfund | $n_f = 5$ | Infrared (IR) | $n = 6, 7, 8, \ldots$ |

The **Balmer series** is the only series visible to the naked eye and is the most important for astronomical observations.

---

## Redshift

**Redshift** is the observed increase in the wavelength (shift toward the red end of the spectrum) of light received from a distant astronomical object compared to the wavelength emitted by the same element in a laboratory.

If a galaxy is moving **away** from Earth, the light waves are stretched, increasing their wavelength. This is the **Doppler effect** applied to light.

The fractional redshift $z$ is defined as:

$$z = \frac{\Delta \lambda}{\lambda_0} = \frac{\lambda_{\text{observed}} - \lambda_{\text{emitted}}}{\lambda_{\text{emitted}}}$$

For recession speeds $v \ll c$, the Doppler formula gives:

$$z \approx \frac{v}{c}$$

So the recession velocity of a galaxy can be calculated from its redshift:

$$v = z \cdot c = \frac{\Delta \lambda}{\lambda_0} \cdot c$$

<WorkedExample title="Worked Example">

### Worked Example

A hydrogen absorption line normally at $\lambda_0 = 486\text{ nm}$ is observed at $\lambda = 491\text{ nm}$ in a distant galaxy's spectrum.

</WorkedExample>


$$z = \frac{491 - 486}{486} = \frac{5}{486} \approx 0.0103$$

$$v = zc = 0.0103 \times 3 \times 10^8 \approx 3.1 \times 10^6 \text{ m s}^{-1}$$

The galaxy is receding at approximately $3.1 \times 10^6 \text{ m s}^{-1}$.

---

## Redshift and the Expanding Universe

Edwin Hubble observed that **virtually all distant galaxies show redshift**: they are all moving away from us. Furthermore, the more distant the galaxy, the greater its redshift (and hence recession speed). This is summarised in **Hubble's Law**.

The universal observation of redshift leads to the conclusion that the **universe is expanding**, not that Earth is at the centre, but that space itself is stretching, carrying galaxies apart from one another.

This expanding universe, traced back in time, implies that all matter originated from a single point in an event known as the **Big Bang**.

### Key Points:
- Redshift of spectral lines in distant galaxies → galaxies are receding
- Greater distance → greater redshift → faster recession
- Expansion is uniform in all directions
- Running the expansion backwards → Big Bang origin


---

<!-- note kx7crtx2nvqkcyyvc54j00sv1185qaqf | topic ms736rff4za1sj8fahygpmtytn85pws9 | status published -->
# 23.5 Hubble's Law

## The Expanding Universe

In the 1920s, Edwin Hubble made a landmark discovery by measuring the distances to distant galaxies and analysing the spectra of their light. He found that the light from almost all galaxies was **redshifted**: the spectral lines were shifted toward longer (redder) wavelengths compared to laboratory sources.

This redshift arises from the **Doppler effect**: as a galaxy moves away from Earth, the light waves it emits are stretched, increasing their wavelength. The greater the recessional speed, the larger the redshift.

---

## Hubble's Law

By plotting recessional velocity against distance for many galaxies, Hubble discovered a linear relationship now known as **Hubble's Law**:

$$v = H_0 \, d$$

where:
- $v$ = recessional velocity of the galaxy (km s$^{-1}$)
- $d$ = distance of the galaxy from Earth (Mpc)
- $H_0$ = **Hubble Constant** (the slope of the graph)

### The Hubble Constant ($H_0$)

The Hubble Constant represents the **rate of expansion of the universe**. Its accepted value is approximately:

$$H_0 \approx 70 \ \mathrm{km \ s^{-1} \ Mpc^{-1}}$$

The SI unit of $H_0$ is $\mathrm{s^{-1}}$, but it is conventionally quoted in $\mathrm{km \ s^{-1} \ Mpc^{-1}}$.

### Estimating the Age of the Universe

If the universe has been expanding at a constant rate since the Big Bang, then the time elapsed (the **Hubble Time**) is:

$$t \approx \frac{1}{H_0}$$

This gives an upper estimate for the age of the universe of approximately **14 billion years**.

<WorkedExample title="Worked Example">

A galaxy is at a distance of $20 \ \mathrm{Mpc}$ from Earth. Using $H_0 = 70 \ \mathrm{km \ s^{-1} \ Mpc^{-1}}$, calculate its recessional velocity.

$$v = H_0 \times d = 70 \times 20 = 1400 \ \mathrm{km \ s^{-1}}$$

</WorkedExample>
---

## Hubble's Law and the Big Bang Theory

Hubble's Law implies that **all galaxies are moving away from each other**: the universe is expanding. Running this expansion backward in time leads to the conclusion that all matter in the universe was once concentrated at a single point of infinite density. This initial event is called the **Big Bang**.

Key evidence supporting the Big Bang theory:

| Evidence | Description |
|---|---|
| **Hubble's Law / Redshift** | Galaxies recede at speeds proportional to their distance, implying an expanding universe originating from a single point. |
| **Cosmic Microwave Background (CMB)** | Uniform microwave radiation filling all of space, interpreted as the afterglow of the Big Bang. |
| **Abundance of light elements** | The observed ratio of hydrogen to helium (~75%:25%) matches predictions from Big Bang nucleosynthesis. |

---

## Summary

- **Hubble's Law**: $v = H_0 d$, recessional velocity is directly proportional to distance.
- **Hubble Constant** $H_0$: rate of expansion; its reciprocal estimates the age of the universe.
- **Redshift** of galaxy spectra is the observational evidence for the expanding universe.
- The expanding universe, traced back in time, implies the **Big Bang** as the origin of the universe.
