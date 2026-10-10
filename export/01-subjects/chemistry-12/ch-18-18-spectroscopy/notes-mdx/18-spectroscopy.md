<!-- note kx75mzhsscfw1496f00zerm5xd85pk6a | topic ms721ebznvzb0hd4sr615mrse985q1kb | status published -->
# 18.1 Spectroscopic Techniques

Spectroscopy is the study of how matter interacts with electromagnetic radiation. In organic chemistry, three key techniques are used together to **identify compounds and determine their molecular structure**:

1. **Mass Spectrometry (MS)**
2. **Infrared Spectroscopy (IR)**
3. **Proton Nuclear Magnetic Resonance Spectroscopy ($^1$H NMR)**

---

## Mass Spectrometry (MS)

In MS, a sample is vaporised and bombarded with high-energy electrons, causing molecules to lose an electron and form a **molecular ion (M⁺)**. The molecular ion and its fragments are separated by mass-to-charge ratio ($m/z$).

### Key Information from MS

| Feature | Information Provided |
|---|---|
| **Molecular ion peak (M⁺)** | Relative molecular mass of the compound |
| **Fragmentation pattern** | Carbon skeleton and functional groups |
| **M+1 / M+2 peaks** | Presence of isotopes (e.g. $^{35}$Cl / $^{37}$Cl gives M+2 peak of ~1/3 height of M) |

**Example:** Ethanol ($\text{CH}_3\text{CH}_2\text{OH}$, $M_r = 46$) shows M⁺ at $m/z = 46$ and a fragment at $m/z = 29$ ($\text{CHO}^+$ or $\text{C}_2\text{H}_5^+$).

---

## Infrared Spectroscopy (IR)

IR radiation causes **vibrational transitions** in covalent bonds (stretching and bending). Different functional groups absorb at characteristic wavenumbers, allowing identification.

### Key IR Absorptions

| Functional Group | Wavenumber ($\text{cm}^{-1}$) | Appearance |
|---|---|---|
| $\text{O–H}$ (alcohol) | 3200–3550 | Broad |
| $\text{O–H}$ (carboxylic acid) | 2500–3300 | Very broad |
| $\text{N–H}$ | 3300–3500 | Medium |
| $\text{C=O}$ (carbonyl) | 1680–1750 | Strong, sharp |
| $\text{C–O}$ | 1000–1300 | Medium |

The region **below $1500\ \text{cm}^{-1}$** is the **fingerprint region**, unique to each molecule and used for definitive identification by comparison with a reference spectrum.

---

## Proton NMR Spectroscopy ($^1$H NMR)

$^1$H NMR exploits the magnetic properties of hydrogen nuclei. In a strong magnetic field, protons in different chemical environments absorb radiofrequency radiation at different **chemical shifts ($\delta$)**, measured in **ppm** relative to **TMS (tetramethylsilane)** at $\delta = 0$.

### Four Key Features of a $^1$H NMR Spectrum

| Feature | Information Provided |
|---|---|
| **Number of signals** | Number of different proton environments |
| **Chemical shift ($\delta$)** | Type of proton environment (functional group) |
| **Integration (peak area)** | Relative number of protons in each environment |
| **Splitting pattern** | Number of adjacent protons ($(n+1)$ rule) |

**Common chemical shifts:**
- $\text{CH}_3$ (alkyl): $\delta$ 0.7–1.6 ppm
- $\text{CH}_2$ next to $\text{C=O}$: $\delta$ 2.0–2.5 ppm
- $\text{O–CH}$: $\delta$ 3.3–4.5 ppm
- Aromatic $\text{Ar–H}$: $\delta$ 6.5–8.0 ppm
- Aldehyde $\text{CHO}$: $\delta$ 9.4–10.0 ppm
- Carboxylic acid $\text{COOH}$: $\delta$ 10–12 ppm

---

## Using MS, IR, and $^1$H NMR Together

In practice, these three techniques are used in combination:
- **MS** → establishes the molecular formula and $M_r$
- **IR** → identifies functional groups present
- **$^1$H NMR** → reveals the carbon–hydrogen framework and connectivity

Together they allow unambiguous structural determination of organic compounds.

---

## Azo Compounds

Azo compounds are an important class of organic compounds containing the **azo group** $-\text{N}=\text{N}-$ linking two aryl (aromatic) groups.

### The Azo Group

The azo group $-\text{N}=\text{N}-$ acts as a **chromophore**, it absorbs visible light, giving azo compounds their characteristic intense colours (typically orange, red, or yellow).

### Formation of Azo Dyes: Coupling Reaction

Azo dyes are formed by **coupling** a **diazonium salt** with an **aromatic coupling component** (such as phenol or a naphthol).

**Example: Coupling of benzenediazonium chloride with phenol**

**Conditions:** NaOH(aq), 0–5°C

$\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{C}_6\text{H}_5\text{OH} \xrightarrow{\text{NaOH(aq)}} \text{C}_6\text{H}_5-\text{N}=\text{N}-\text{C}_6\text{H}_4\text{OH} + \text{HCl}$

The product is an **orange-red azo dye**.

**Why NaOH is needed:** NaOH converts phenol to the **phenoxide ion** ($\text{C}_6\text{H}_5\text{O}^-$), which is a stronger activating group, making the ring more reactive towards the weakly electrophilic diazonium ion.

**Mechanism:** This is an **electrophilic aromatic substitution** where the diazonium ion ($\text{ArN}_2^+$) acts as the electrophile, attacking the **para position** of the phenoxide ring.

### Uses of Azo Compounds

Azo compounds are **widely used as dyes** because:
- They produce intense, stable colours
- They can be made in a wide range of colours by varying the aryl groups
- They bond strongly to textile fibres

**Applications include:** textile dyes (e.g. Congo Red, Methyl Orange), food colorants, pH indicators, and biological stains.

### Other Azo Dyes

Other azo dyes can be formed via a similar route, by coupling different diazonium salts with different aromatic amines or phenols. For example, coupling with **naphthalen-2-ol** (β-naphthol) produces a bright red dye.


---

<!-- note kx7bhw6zc5p44ft64wajekktw985qg51 | topic ms71ybm5d3sphc0nezkd2wva0585p1ag | status published -->
# 18.2 Index of Hydrogen Deficiency or Unsaturation

The **Index of Hydrogen Deficiency (IHD)**, also known as the **degree of unsaturation**, is a calculation used in organic chemistry to determine the total number of rings and pi ($\pi$) bonds within a molecule from its molecular formula. It works by comparing the number of hydrogen atoms in the given compound to the number of hydrogen atoms in its corresponding saturated, acyclic counterpart.

---

### Concept of Unsaturation

In a fully saturated, acyclic hydrocarbon (an alkane with no rings), the number of hydrogen atoms is related to the number of carbon atoms by the formula:

$ \text{Number of hydrogens} = (2 \times \text{number of carbons}) + 2 $

This is the maximum number of hydrogens a given carbon skeleton can hold.

Each multiple bond (a double or triple bond) or ring structure present in a molecule reduces the hydrogen count by two. Each of these structural features is referred to as a **degree of unsaturation**.

---

### Calculating the Index of Hydrogen Deficiency (IHD)

The IHD for a molecule can be calculated directly from its molecular formula using the following general equation:

$ \text{IHD} = \frac{(2C + 2 + N) - (H + X)}{2} $

Where:

- **$C$** = number of carbon atoms
- **$N$** = number of nitrogen atoms
- **$H$** = number of hydrogen atoms
- **$X$** = number of halogen atoms (F, Cl, Br, I)

Oxygen and sulfur atoms do not affect the calculation and can be ignored.

This calculation provides the *sum* of multiple bonds and rings. It does not distinguish between them. For example, an IHD of 1 could mean one double bond or one ring. An IHD of 2 could mean two double bonds, one triple bond, two rings, or one ring and one double bond. This simple calculation is a crucial first step when determining the structure of an unknown molecule.

---

## Worked Examples

### Example 18.1: Ethene ($\mathrm{C_2H_4}$)

Calculate the degree of unsaturation in ethene ($\mathrm{C_2H_4}$).

1. **Write the given values:**
   - Number of Carbons ($C$) = 2
   - Number of Hydrogens ($H$) = 4
   - Number of Nitrogens ($N$) = 0
   - Number of Halogens ($X$) = 0

2. **Apply the formula:**
   $ \text{IHD} = \frac{(2C + 2 + N) - (H + X)}{2} $

3. **Show the calculation:**
   $ \text{IHD} = \frac{(2 \times 2 + 2 + 0) - (4 + 0)}{2} $
   $ \text{IHD} = \frac{(4 + 2) - 4}{2} = \frac{6 - 4}{2} = \frac{2}{2} $
   $ \text{IHD} = 1 $

The degree of unsaturation for ethene is **1**. This corresponds to the one double bond ($C=C$) in its structure.

---

## Possible Questions/Answers

This section is based on **CONCEPT ASSESSMENT EXERCISE 18.1**.

- **Q:** Calculate the degree of unsaturation in **benzene** ($\mathrm{C_6H_6}$).

  **A:**
  - Given: $C = 6$, $H = 6$
  - Calculation:
    $ \text{IHD} = \frac{(2 \times 6 + 2) - 6}{2} = \frac{14 - 6}{2} = \frac{8}{2} = 4 $
  - The IHD of benzene is **4**. This accounts for its structure, which contains **one ring** and **three double bonds**.

- **Q:** Calculate the degree of unsaturation in **ethyne** ($\mathrm{C_2H_2}$).

  **A:**
  - Given: $C = 2$, $H = 2$
  - Calculation:
    $ \text{IHD} = \frac{(2 \times 2 + 2) - 2}{2} = \frac{6 - 2}{2} = \frac{4}{2} = 2 $
  - The IHD of ethyne is **2**. This corresponds to the one triple bond ($C \equiv C$) in its structure.

---

## Summary

- The **Index of Hydrogen Deficiency (IHD)** or **degree of unsaturation** quantifies the number of $\pi$ bonds and rings in a molecule.
- A saturated, acyclic alkane has an IHD of 0 and follows the formula $C_nH_{2n+2}$.
- Each ring or double bond contributes 1 to the IHD.
- Each triple bond contributes 2 to the IHD.
- The general formula for calculation is:
  $ \text{IHD} = \frac{(2C + 2 + N) - (H + X)}{2} $
- **Significance:** IHD is a fundamental tool in analytical chemistry, particularly in combination with spectroscopic methods like <InlineNoteTag label="IR Spectroscopy" notePath="chemistry-12/18.3-ir-spectroscopy" /> and Mass Spectrometry, to quickly narrow down possible structures for an unknown compound.

---


---

<!-- note kx718n5zwe86mczcnmd9jt03ts85pq2y | topic ms7a8jx4tt0z2n2nsfshapyzn185qp5j | status published -->
# 18.3 IR Spectroscopy

Infrared (IR) spectroscopy is an analytical technique that utilizes the interaction of infrared radiation with organic molecules. It is primarily used to identify the functional groups present in a compound. The typical range of wavenumbers for IR spectroscopy is from **$4000 \text{ cm}^{-1}$ to $625 \text{ cm}^{-1}$**.

This technique is widely applied to both organic and inorganic compounds for the identification of molecular structures. Its high scan speed, resolution, and sensitivity make it an invaluable analytical tool.

IR spectroscopy is complementary to other spectroscopic techniques and helps in determining the index of hydrogen deficiency or unsaturation of organic molecules.

### 18.3.1 Principle of IR Spectroscopy

The fundamental principle of IR spectroscopy involves the interaction between the electric field of infrared radiation and the dipole moment of a molecule.

- When a molecule is exposed to IR radiation, it can absorb energy if the frequency of the radiation matches the natural vibrational frequency of one of its chemical bonds.
- This absorption of energy causes the bond to vibrate with a greater amplitude.
- For a bond to absorb IR radiation, its vibration must cause a **change in the bond's dipole moment**.
- The intensity of the absorption is proportional to the polarity of the bond; more polar bonds produce stronger absorptions.

The resulting IR spectrum shows the frequencies of absorbed radiation, which are characteristic of the molecular structure and the specific functional groups present in the sample.

**Major Components of an IR Spectrophotometer:**

1. Source of IR radiations
2. Monochromator (to select specific frequencies)
3. Sample chamber
4. Detector
5. Data collection and processing system

### 18.3.2 Reading an IR Spectrum

Interpreting an IR spectrum involves analyzing the various absorption bands (peaks) to identify functional groups.

- Each peak in the spectrum corresponds to the vibration of a specific bond. This creates a unique fingerprint for each compound.
- The analysis begins by correlating the absorption frequencies of the unknown compound with reference charts that list characteristic wavenumbers for different types of bonds.
- Key functional groups like **O-H**, **N-H**, **C-H**, and **C=O** have very distinct and strong absorption peaks, making them easy to identify.
- The **fingerprint region**, located below $1500 \text{ cm}^{-1}$, contains a complex pattern of peaks that is unique to each molecule, aiding in the definitive identification of a compound by comparison to a known spectrum.

### 18.3.3 Common Functional Groups and Their Characteristic IR Absorption Ranges

The following table summarizes the characteristic absorption ranges for common functional groups.

**Table 18.1: Functional Groups with Wavenumber and Intensity**

| Functional Group | Bond Type | Wavenumber ($\text{cm}^{-1}$) | Intensity |
|:--- |:--- |:--- |:--- |
| **Alkyl** | C-H | 2853-2962 | medium-strong |
| **Alkenyl** | =C-H | 3010-3095 | medium |
| | C=C | 1620-1680 | variable |
| **Alkynyl** | ≡C-H | ~3300 | strong |
| | C≡C | 2100-2260 | variable |
| **Aromatic** | Ar-H | ~3030 | variable |
| | C=C (ring) | 1400-1600 | variable |
| **Alcohols, Phenols** | O-H | 3200-3500 | strong, broad |
| | C-O | 1025-1060 | strong |
| **Carboxylic Acids** | O-H | 2500-3000 | very broad, variable |
| | C=O | 1710-1780 | strong |
| **Aldehydes** | C=O | 1690-1740 | strong |
| **Ketones** | C=O | 1680-1750 | strong |
| **Esters** | C=O | 1735-1750 | strong |
| **Amides** | C=O | 1630-1690 | strong |
| **Amines** | N-H | 3300-3500 | medium |

## Worked Examples

### Example 18.2: Interpret the IR spectrum of ethanol ($\mathrm{C_2H_5OH}$)

**Problem Solving Strategy:**

1. Identify the significant peaks in the provided spectrum.
2. Compare the wavenumbers of these peaks to the known ranges for various functional groups (from the reference table).
3. Deduce the presence of specific functional groups based on the matches.
4. Confirm the structure of the molecule.

<CaptionedImage src="/content/assets/class-12/chemistry/Pasted image 20250925041504.webp" alt="IR spectrum of ethanol" caption="Figure 18.2: IR spectrum of ethanol" />

**Observed Peaks in Ethanol Spectrum:**

- A very broad peak around $3300 \text{ cm}^{-1}$
- Peaks in the range of $2850-2960 \text{ cm}^{-1}$
- A strong peak around $1050-1150 \text{ cm}^{-1}$

**Solution (Matching Peaks to Functional Groups):**

5. **Broad Peak at $3300 \text{ cm}^{-1}$**: This characteristic broad absorption strongly suggests the presence of an **O-H** bond from an alcohol functional group. The broadness is due to hydrogen bonding.
6. **Peaks at $2850-2960 \text{ cm}^{-1}$**: These peaks are characteristic of **C-H** single bond stretching vibrations from an alkyl group (the ethyl group, $\mathrm{C_2H_5}$).
7. **Peak at $1050-1150 \text{ cm}^{-1}$**: This absorption corresponds to the **C-O** single bond stretching vibration, further confirming the presence of an alcohol group.

### IR Spectrum of Acetone ($\mathrm{CH_3COCH_3}$)

<CaptionedImage src="/content/assets/class-12/chemistry/Pasted image 20250925041523.webp" alt="IR spectrum of acetone" caption="Figure 18.3: IR spectrum of acetone" />

- **Strong peak at $1700-1725 \text{ cm}^{-1}$**: This is a very strong, sharp peak characteristic of the **C=O** (carbonyl) functional group in a ketone. This peak is also found in aldehydes, carboxylic acids, and their derivatives, though the exact wavenumber varies slightly.
- **Peaks near $3000 \text{ cm}^{-1}$**: These are the **C-H** stretching vibrations from the methyl groups ($\mathrm{CH_3}$).
- **Vibrations at $1215-1435 \text{ cm}^{-1}$**: These correspond to $\mathrm{CH_3}$ bending vibrations.

### IR Spectrum of Phenol ($\mathrm{C_6H_5OH}$)

<CaptionedImage src="/content/assets/class-12/chemistry/Pasted image 20250925041611.webp" alt="IR spectrum of phenol" caption="Figure 18.4: IR spectrum of phenol" />

- **Broad, strong peak around $3200-3500 \text{ cm}^{-1}$**: This represents the **O-H** functional group. As in ethanol, the peak is broadened by hydrogen bonding.
- **Peaks around $1500 \text{ cm}^{-1}$**: These absorptions are due to the **C=C** double bonds within the conjugated aromatic ring.
- **Peaks above $3000 \text{ cm}^{-1}$**: These correspond to the **Ar-H** (aromatic C-H) bond stretching vibrations.


---

<!-- note kx77xxedk0gkvp4j29tt7bqwen85q0c7 | topic ms75dbw6vn1943qrmh6spfffys85q3th | status published -->
# UV-Visible Spectroscopy

### 1. Introduction to UV-Visible Spectroscopy

*UV-Visible (UV-Vis) Spectroscopy* is an analytical technique that measures the absorption of ultraviolet (UV) and visible light by a substance.

- **Wavelength Range:** The typical range is from **200 nm to 800 nm**.
- **Principle:** The technique is based on the *excitation of electrons* to higher energy levels when a molecule absorbs photons of UV or visible light. The amount of light absorbed is directly proportional to the concentration of the absorbing species in the sample.
- **Applications:** It is widely used in material sciences and biochemistry for both qualitative and quantitative analysis. It can be applied to liquids, solids, and gases and is particularly useful for identifying conjugation in unsaturated organic compounds.

### 2. Electronic Transitions

The absorption of specific wavelengths of light causes electrons to transition between energy levels. The main types of electronic transitions are:

- **$\sigma \rightarrow \sigma^{*}$ (sigma to sigma star):** High-energy transition, typically occurs in the far UV region (< 200 nm).
- **$n \rightarrow \sigma^{*}$ (n to sigma star):** Transition of a non-bonding electron to an anti-bonding sigma orbital.
- **$\pi \rightarrow \pi^{*}$ (pi to pi star):** Excitation of an electron from a bonding $\pi$ orbital to an anti-bonding $\pi^{*}$ orbital. Common in compounds with double/triple bonds and aromatic rings.
- **$n \rightarrow \pi^{*}$ (n to pi star):** Transition of a non-bonding electron to an anti-bonding $\pi^{*}$ orbital. Occurs in molecules with lone pairs on atoms adjacent to a $\pi$-system (e.g., carbonyls).

These transitions provide valuable information about a molecule's structure.

### 3. Color and Wavelength Absorption

Colored compounds absorb light in the visible region of the electromagnetic spectrum (**400 nm - 800 nm**). The color we perceive is not the color that is absorbed, but rather its *complementary color*, which is the light that is transmitted or reflected.

- **Energy and Wavelength:** The energy required for an electronic transition is related to the wavelength of light absorbed. Shorter wavelengths (e.g., violet, blue) correspond to higher energy transitions, while longer wavelengths (e.g., orange, red) correspond to lower energy transitions.

The relationship between absorbed and observed color is shown below.

| Wavelength Absorbed (nm) | Color Absorbed | Color Observed |
|:--- |:--- |:--- |
| 400 - 435 | Violet | Yellow-Green |
| 435 - 480 | Blue | Yellow |
| 480 - 490 | Green-Blue | Orange |
| 490 - 500 | Blue-Green | Red |
| 500 - 560 | Green | Purple |
| 560 - 580 | Yellow-Green | Violet |
| 580 - 595 | Yellow | Blue |
| 595 - 605 | Orange | Green-Blue |
| 605 - 700 | Red | Blue-Green |

### 4. Predicting UV-Visible Absorption

A compound will likely absorb in the UV-visible region if its electronic structure allows for $\pi \rightarrow \pi^{*}$ or $n \rightarrow \pi^{*}$ transitions. Key structural features include:

- **Chromophore:** A functional group that absorbs UV or visible radiation (e.g., C=C, C=O, aromatic rings).
- **Auxochrome:** A functional group that does not absorb radiation itself but increases the absorption of a chromophore and shifts the absorption to a longer wavelength (e.g., -OH, -NH₂).
- **Conjugated double bonds** (alternating single and double bonds).

#### Examples

| Compound | Chromophore | Transition | Absorption |
| :--- | :--- | :--- | :--- |
| Benzene ($\mathrm{C_6H_6}$) | Conjugated aromatic $\pi$ system | $\pi \rightarrow \pi^{*}$ | around **254 nm** |
| 1,3-Butadiene ($\mathrm{C_4H_6}$) | Conjugated system of two double bonds ($\mathrm{C=C-C=C}$) | $\pi \rightarrow \pi^{*}$ | around **217 nm** |
| Acetone ($\mathrm{CH_3COCH_3}$) | Carbonyl group ($\mathrm{C=O}$), with both a $\pi$-bond and lone pairs on the oxygen atom | $n \rightarrow \pi^{*}$ | around **279 nm** |

<InlineNoteTag label="IR Spectroscopy" notePath="chemistry-12/18.3-ir-spectroscopy" />

### 5. Beer-Lambert Law

The quantitative aspect of UV-Vis spectroscopy is governed by the **Beer-Lambert Law**, which states that the absorbance ($A$) of a solution is directly proportional to its concentration ($c$) and the path length ($l$).

$A = \epsilon cl$

Where $\epsilon$ is the molar absorptivity.

### Example 1: The Color of Hexaaqua Titanium(III)

The complex ion **hexaaqua Titanium(III)**, $\left[\mathrm{Ti}\left(\mathrm{H}_{2}\mathrm{O}\right)_{6}\right]^{3+}$, is violet. This is because the complex absorbs light in the yellow-green region of the visible spectrum. The color we see (violet) is the complementary color of the light absorbed.

<CaptionedImage src="/content/assets/class-12/chemistry/Pasted image 20250925041657.webp" alt="UV visible spectrum of Ti complex" caption="Figure 18.5: UV visible spectrum of [Ti(H2O)6]3+" />

### Example 2: Quantitative Analysis

UV-Visible Spectroscopy can be used to determine the concentration of an unknown solution.

1. **Create a Standard Curve:** Prepare several solutions of a substance with known concentrations (standards). Measure the absorbance of each standard at a specific wavelength. Plot absorbance vs. concentration to create a calibration or standard curve.
2. **Measure the Unknown:** Measure the absorbance of the solution with the unknown concentration at the same wavelength.
3. **Determine Concentration:** Use the standard curve to find the concentration that corresponds to the absorbance of the unknown sample.

### Possible Questions/Answers

- **Q:** A compound absorbs light with a wavelength of **500 nm - 560 nm**. What colour do you expect for this compound?
  **A:** According to the complementary color table, absorption in the 500-560 nm range (green light) means the compound will appear **Purple**.

- **Q:** What wavelength do you suggest about the absorption of light by the components of air?
  **A:** The main components of air ($\mathrm{N_2}$, $\mathrm{O_2}$, Ar) are colorless. This means they do not absorb light in the visible region (400-800 nm). They absorb high-energy radiation in the far-UV region, at wavelengths below 200 nm.


---

<!-- note kx74amrmg8wd79rwznsfzjq8g185pd3v | topic ms74wdywfh3t7q0j80qj3bj6a585paah | status published -->
# 18.5 Atomic Emission Spectroscopy

Atomic Emission Spectroscopy (AES) is an analytical technique used to identify and quantify the elements present in a sample by measuring the specific wavelengths of light emitted from atoms after excitation. Unlike <InlineNoteTag label="IR Spectroscopy" notePath="chemistry-12/18.3-ir-spectroscopy" /> which deals with molecular vibrations, AES focuses on electronic transitions in individual atoms.

### Principle of Atomic Emission Spectroscopy

The fundamental principle of AES is based on the quantum behavior of electrons within an atom. When a sample is subjected to a high-energy source, its constituent atoms absorb this energy, leading to the emission of light.

The process involves the following steps:

1.  **Excitation:** The sample is introduced to a high-energy source such as a flame, plasma, arc, or spark. This energy is absorbed by the atoms, causing their electrons to jump from the ground state to higher, unstable energy levels. Inductively Coupled Plasma (ICP) is currently the most common high-temperature source used.

2.  **De-excitation and Emission:** The excited electrons are unstable and cannot remain at the higher energy level for long. They spontaneously fall back to a lower energy level or the original ground state. During this transition, the excess energy is released in the form of a photon of light.

3.  **Characteristic Wavelength:** The energy of the emitted photon is exactly equal to the energy difference between the higher and lower energy levels. Since the energy levels are unique to each element, the wavelength of the emitted light is also unique and characteristic of that element.

4.  **Detection:** The emitted light is passed through a dispersion device such as a prism or diffraction grating, which separates the light into its component wavelengths. A detector then measures the intensity and wavelength of this light. The resulting pattern of discrete lines is known as an emission spectrum.

### The "Fingerprint" of an Element

Each element has a unique set of allowed energy levels for its electrons. Consequently, each element produces a unique emission spectrum with a distinct pattern of spectral lines. This uniqueness allows the emission spectrum to serve as a "fingerprint" for identifying the element, even in a complex mixture.

One of the primary advantages of AES is its ability to perform multi-element analysis simultaneously, as the detector can record multiple characteristic wavelengths at once.


---

<!-- note kx7frnb5fzw3384rr8rpxvaybs85pe4c | topic ms7fm943y6e36k52pc5xc0en6585q2fr | status published -->
# 18.6 Atomic Absorption Spectrum

An **atomic absorption spectrum** is produced when free, gaseous atoms in their *ground state* absorb light of specific wavelengths. This absorption of energy causes the atoms' electrons to get excited and jump to higher energy levels. The spectrum shows dark lines at the exact wavelengths where the light was absorbed.

### Process

1. A light source containing a wide range of wavelengths is passed through a sample of free atoms (e.g., in a flame or furnace).
2. Atoms in the sample absorb photons of very specific energies (wavelengths) that correspond to the energy differences between their electronic states.
3. This absorption excites the electrons from the *ground state* to a *higher energy state*.
4. A detector on the other side of the sample records the transmitted light, revealing a spectrum with dark lines where absorption occurred.

**Characteristic:** Atomic absorption spectra are always **line spectra**, meaning they consist of discrete lines rather than a continuous band of colors.

### Comparison with Atomic Emission Spectrum (AES)

Atomic emission and absorption spectra for a given element provide the same information about its electronic structure, as the wavelengths of light absorbed (in AAS) are the same as those emitted (in AES).

For more details on atomic emission, see <InlineNoteTag label="18.5 Atomic Emission Spectroscopy" notePath="chemistry-12/18.5-atomic-emission-spectroscopy" />.

<CaptionedImage src="kg22j7jm0mrm5mfy5evnfxdyms8dgf1f" alt="Atomic absorption and emission spectra of potassium" caption="Figure 18.6: Atomic absorption and emission spectra of potassium. Note that the lines appear at the same wavelengths." />

The primary difference between the two is their appearance, as summarized in the table below:

| Feature | Atomic Absorption Spectrum (AAS) | Atomic Emission Spectrum (AES) |
|:--- |:--- |:--- |
| **Process** | Atoms absorb energy (photons). | Excited atoms release energy (photons). |
| **Appearance** | **Dark lines** on a bright, continuous background. | **Bright lines** on a dark background. |
| **Information** | Reveals the wavelengths of light an element can absorb. | Reveals the wavelengths of light an element can emit. |
| **Relationship** | It is the complementary spectrum to the emission spectrum. | It is the complementary spectrum to the absorption spectrum. |

### Possible Questions/Answers

**Q:** What causes the dark lines in an atomic absorption spectrum?

**A:** The dark lines are caused by atoms in their ground state absorbing light of specific wavelengths to become excited. These wavelengths are thus missing from the light that passes through the sample.

**Q:** Why do the lines in the absorption and emission spectra for potassium appear at the same wavelengths?

**A:** Because the energy transitions of electrons are quantized and specific for each element. The energy absorbed for an electron to jump from a lower to a higher level is exactly the same as the energy released when it falls back down between those same two levels.

### Significance

Atomic absorption spectroscopy is a powerful analytical technique used to determine the concentration of a specific element in a sample, with applications in environmental testing, clinical analysis, and industry. It follows the Beer-Lambert Law, where absorbance is directly proportional to the concentration of the analyte.


---

<!-- note kx7e7wrsey8a033mwy609mesnd85pyqq | topic ms737hn8qj9qb3qwexp02a8k2x85qhdy | status published -->
# 18.7 Nuclear Magnetic Resonance Spectroscopy (NMR)

Nuclear magnetic resonance (NMR) spectroscopy, also known as magnetic resonance spectroscopy (MRS), is a powerful analytical technique used to determine the structure of molecules. It relies on the interaction between atomic nuclei with non-zero nuclear spins and an external magnetic field. When these nuclei absorb electromagnetic radiation in the radio frequency range (approximately 4 to 900 MHz), they re-orient themselves within the magnetic field.

The exact frequency at which a nucleus resonates is highly dependent on its specific chemical environment. This sensitivity allows NMR spectra to provide detailed information about:

- Individual functional groups within a molecule.
- The connectivity and spatial relationship between nearby atoms.

Because NMR spectra are unique and characteristic for individual compounds, it is one of the most important methods for identifying molecular structures, especially for organic compounds. Similar to <InlineNoteTag label="IR Spectroscopy" notePath="chemistry-12/18.3-ir-spectroscopy" />, NMR is a non-destructive technique.

### 18.7.1 Principle of NMR

The fundamental principle of NMR involves the magnetic properties of atomic nuclei.

1. **Nuclear Spin:** Certain atomic nuclei possess a quantum mechanical property called spin. Since nuclei are charged, this spinning motion generates a small magnetic field, causing the nucleus to act like a tiny bar magnet (a magnetic dipole).

2. **Random Orientation:** In the absence of an external magnetic field, the magnetic dipoles of these nuclei are oriented randomly.

3. **Applying an External Magnetic Field ($B^{\circ}$):** When a sample is placed in a strong external magnetic field ($B^{\circ}$), the nuclei align themselves in one of two possible spin states:
- **Low Energy State:** Aligned with the applied magnetic field (parallel).
- **High Energy State:** Aligned against the applied magnetic field (anti-parallel).

4. **Resonance:** The energy difference between these two states corresponds to a specific frequency in the radio wave portion of the electromagnetic spectrum. When the sample is irradiated with radio waves of this exact frequency, the nuclei in the low energy state can absorb the energy and "flip" to the high energy state. This absorption of energy is called resonance.

5. **Signal Detection:** When the nucleus returns to its lower energy ground state, it emits the absorbed energy at the same radio frequency. This emitted signal is detected and processed to generate the NMR spectrum for the compound.

### 18.7.2 NMR Active Nuclei

Not all nuclei can be studied by NMR. A nucleus must be "NMR-active" to produce a signal.

- **Condition for Activity:** To be NMR-active, a nucleus must have a non-zero nuclear spin quantum number ($I \neq 0$). This property is what allows the nucleus to interact with an external magnetic field.

- **Determining Nuclear Spin:** The value of the nuclear spin quantum number ($I$) depends on the number of protons and neutrons in the nucleus. Nuclei with an odd number of protons, an odd number of neutrons, or both, will have a non-zero spin. These typically have half-integer spin values ($I = \frac{1}{2}, \frac{3}{2}, \frac{5}{2}, \dots$).

- **Common NMR-Active Nuclei:**
  - Hydrogen-1 ($^1\mathrm{H}$)
  - Carbon-13 ($^{13}\mathrm{C}$)
  - Fluorine-19 ($^{19}\mathrm{F}$)
  - Phosphorus-31 ($^{31}\mathrm{P}$)

For organic chemists, the most important and commonly used nuclei are $^1\mathrm{H}$ and $^{13}\mathrm{C}$.

### 18.7.3 Chemical Shift and Reference Standards

In NMR, the position of a signal is measured relative to a reference standard, most commonly **Tetramethylsilane (TMS)**, $(CH_3)_4Si$. TMS is chosen because it is chemically inert, volatile, and its 12 protons are equivalent and highly shielded, giving a single sharp peak at a lower frequency than most organic protons.

The difference between the resonance frequency of the nucleus and the reference (TMS) is called the **Chemical Shift ($\delta$)**, expressed in parts per million (ppm).

- **Shielding:** Electrons around a nucleus create a local magnetic field that opposes the external field.
- **Deshielding:** Electronegative atoms (like O, N, or halogens) pull electron density away from protons, "deshielding" them and causing them to resonate at higher frequencies (downfield).

### 18.7.4 Interpreting NMR Spectra

An NMR spectrum provides three main types of information:
1. **Number of Signals:** Indicates how many different sets of equivalent protons are in the molecule.
2. **Position of Signals (Chemical Shift):** Indicates the chemical environment of the protons.
3. **Integration (Area under peaks):** The area is proportional to the number of protons contributing to that signal.

[See also: 18.1 Spectroscopic Techniques](/chemistry-12/18-spectroscopy/18-1-spectroscopic-techniques)


---

<!-- note kx78vrfvje7pzdaja7nk5bc1bd85q44b | topic ms726f18mces8p3by6c4hee1dh85qx1g | status published -->
# 18.8 ¹H NMR (Proton NMR)

## What is ¹H NMR Spectroscopy?

**Proton NMR (¹H NMR)** is the most widely used form of Nuclear Magnetic Resonance spectroscopy. It exploits the magnetic properties of hydrogen nuclei (protons) to provide detailed information about the structure of organic molecules, specifically the **number**, **type**, and **environment** of hydrogen atoms present.

When placed in a strong external magnetic field and irradiated with radiofrequency radiation, protons absorb energy and resonate at frequencies that depend on their **chemical environment**. This produces a spectrum that can be used to identify and determine the structure of unknown compounds.

---

## Key Features of a ¹H NMR Spectrum

A ¹H NMR spectrum provides four types of information:

| Feature | What it tells you |
|---|---|
| **Number of signals** | Number of sets of chemically non-equivalent protons |
| **Chemical shift ($\delta$)** | Electronic environment of each proton |
| **Integration (peak area)** | Relative number of protons in each environment |
| **Splitting pattern** | Number of equivalent protons on adjacent carbons |

---

## 1. Number of Signals

Each **distinct chemical environment** produces a separate signal. Protons that are **chemically equivalent** (same environment by symmetry) give one combined signal.

**Example, Ethanol ($CH_3CH_2OH$):**

Ethanol has **three** signals:
- $-CH_3$ (3 equivalent protons)
- $-CH_2-$ (2 equivalent protons)
- $-OH$ (1 proton)

**Example, Acetone ($(CH_3)_2C=O$):**

Acetone has **one** signal, both methyl groups are equivalent by symmetry, giving a single peak.

> This directly answers the FBISE past-paper question: ethanol shows 3 signals (3 environments) while acetone shows 1 signal (all 6 protons equivalent).

---

## 2. Chemical Shift ($\delta$)

**Chemical shift** is the position of a signal on the NMR spectrum, measured in **parts per million (ppm)** relative to the reference compound **TMS** (tetramethylsilane, $(CH_3)_4Si$) at $\delta = 0$ ppm.

$\delta = \frac{\text{frequency of signal} - \text{frequency of TMS}}{\text{operating frequency of spectrometer}} \times 10^6 \text{ ppm}$

### Why TMS is used as the reference:
- Chemically **inert**, does not react with the sample
- All 12 protons are **equivalent** → single sharp peak
- Highly **shielded** → resonates at $\delta = 0$ ppm, well away from most organic signals
- **Volatile** (low boiling point) → easily removed after measurement

### Shielding and Deshielding

- **Shielded protons** (high electron density) resonate at **lower $\delta$** (upfield, e.g. alkyl $-CH_3$ at ~0.9 ppm)
- **Deshielded protons** (low electron density, near electronegative groups) resonate at **higher $\delta$** (downfield, e.g. aldehyde $-CHO$ at ~9–10 ppm)

**Typical chemical shift values:**

| Proton type | $\delta$ (ppm) |
|---|---|
| $R-CH_3$ (alkyl) | 0.7–1.3 |
| $R-CH_2-R$ | 1.2–1.4 |
| $R-O-CH_3$ (ether) | 3.3–3.5 |
| $R-OH$ (alcohol) | 1–5 (variable) |
| Aromatic $Ar-H$ | 6.5–8.0 |
| $R-CHO$ (aldehyde) | 9–10 |
| $R-COOH$ (carboxylic acid) | 10–12 |

---

## 3. Integration (Peak Area)

The **area under each peak** (integration) is **directly proportional** to the number of protons producing that signal.

**Example, Ethyl ethanoate ($CH_3COOCH_2CH_3$):**

The three signals have integration ratios of **3: 2: 3**, corresponding to $CH_3CO-$ (3H), $-OCH_2-$ (2H), and $-CH_3$ (3H).

Integration does **not** give absolute numbers, only **relative** ratios.

---

## 4. Spin-Spin Splitting and the $(n+1)$ Rule

Protons on **adjacent carbon atoms** interact magnetically with each other, causing **splitting** of signals into multiplets.

> **The $(n+1)$ Rule:** A proton with $n$ equivalent neighbouring protons on adjacent carbon(s) will have its signal split into $(n+1)$ peaks.

| $n$ (neighbouring protons) | Splitting pattern | Name |
|---|---|---|
| 0 | 1 peak | Singlet |
| 1 | 2 peaks | Doublet |
| 2 | 3 peaks | Triplet |
| 3 | 4 peaks | Quartet |

**Example, Ethanol ($CH_3CH_2OH$):**

- The $-CH_3$ protons (3H) are adjacent to $-CH_2-$ (2H): split into a **triplet** ($n=2$, $n+1=3$)
- The $-CH_2-$ protons (2H) are adjacent to $-CH_3$ (3H): split into a **quartet** ($n=3$, $n+1=4$)
- The $-OH$ proton appears as a **singlet** (no adjacent C–H splitting under normal conditions)

**Example, Ethane ($CH_3CH_3$):**

All 6 protons are equivalent. Equivalent protons do **not** split each other → single **singlet**.

---

## Worked Example: Interpreting a ¹H NMR Spectrum

**Compound:** Propan-2-ol, $(CH_3)_2CHOH$

| Signal | $\delta$ (ppm) | Integration ratio | Splitting | Assignment |
|---|---|---|---|---|
| A | ~1.2 | 6 | Doublet | $(CH_3)_2-$ (6H, adjacent to 1H) |
| B | ~3.9 | 1 | Septet | $-CH-$ (1H, adjacent to 6H) |
| C | ~2.5 | 1 | Singlet | $-OH$ (1H) |

The $-CH-$ proton has 6 equivalent neighbouring protons → split into $6+1 = 7$ peaks (septet).

---

## Summary

¹H NMR spectroscopy is a powerful tool for structural identification:

1. **Number of signals** → number of distinct proton environments
2. **Chemical shift** → electronic environment (shielding/deshielding)
3. **Integration** → relative number of protons in each environment
4. **Splitting pattern** → number of equivalent protons on adjacent carbons (n+1 rule)


---

<!-- note kx737qsaj8gmz1y5ctygz9vqms85p61r | topic ms70a3phhqnyz570ndf6zcqz8n85qk28 | status published -->
# Carbon-13 NMR Spectroscopy

Carbon-13 Nuclear Magnetic Resonance ($^{13}$C-NMR) is a spectroscopic technique used to determine the structure of organic molecules by identifying the carbon framework. About 1% of all carbon atoms are the $^{13}\text{C}$ isotope, which is NMR active. The most abundant isotope, $^{12}\text{C}$, is not NMR active.

The principle of $^{13}$C-NMR is based on the magnetic properties of the $^{13}\text{C}$ nucleus. Like a small magnet, a $^{13}\text{C}$ nucleus can align with an external magnetic field ($B_0$) in a low-energy state, or oppose it in a higher-energy state. By supplying energy in the form of radio waves of a specific frequency, the nucleus can be made to "flip" from the more stable to the less stable alignment. This absorption of energy is known as the **resonance condition** and is detected as a peak in the NMR spectrum.

### 1. Chemical Shift in $^{13}$C-NMR

The **chemical shift ($\delta$)** is the position of a signal on the NMR spectrum, measured in parts per million (ppm). It is measured relative to a reference standard, typically Tetramethylsilane (TMS), which is assigned a value of 0 ppm.

- A peak that appears to the left of TMS is described as being **downfield**.
- The chemical shifts for $^{13}$C-NMR have a much larger range than for proton NMR ($^1$H-NMR), typically from **0 to 220 ppm**.
- The chemical shift of a carbon atom depends on its electronic environment. Electronegative atoms (like O, N, halogens) or groups attached to or near a carbon atom will "deshield" it, causing its signal to appear further downfield (at a higher ppm value).

### 2. Deduction of Molecular Structure

Each chemically unique carbon atom in a molecule produces a distinct peak in the $^{13}$C-NMR spectrum. By analyzing the number and position of these peaks, we can deduce key information about the molecule's structure.

- **Number of Peaks:** The number of signals in the spectrum corresponds to the number of non-equivalent carbon environments.
- **Symmetry:** Symmetrical molecules will have fewer peaks because multiple carbon atoms are in identical chemical environments. For example, in a molecule with a plane of symmetry, carbons that are mirror images of each other are equivalent and will produce a single peak.
- **Chemical Shift Values:** The position (ppm value) of a peak indicates the type of carbon atom. Standard chemical shift ranges help identify functional groups.

**Table: Approximate Chemical Shift Values for $^{13}$C-NMR**

| Type of Carbon Atom | Chemical Shift ($\delta$, ppm) |
|:------------------ |:----------------------------- |
| Alkane ($R-CH_3$, $R_2CH_2$, $R_3CH$) | 5 - 45 |
| Alkyne ($–C \equiv C–$) | 65 - 90 |
| C-Halogen ($C-X$) | 10 - 70 |
| C-Oxygen ($C-O$, alcohol/ether) | 50 - 90 |
| C-Nitrogen ($C-N$) | 40 - 80 |
| Alkene ($C=C$) | 100 - 150 |
| Aromatic ($C_6H_6$) | 110 - 160 |
| Carboxylic Acid/Ester ($–COO–$) | 155 - 185 |
| Ketone/Aldehyde ($–C=O$) | 190 - 220 |

*Note: Combined information from different spectroscopic techniques (like Mass Spectrometry, <InlineNoteTag label="IR Spectroscopy" notePath="chemistry-12/18.3-ir-spectroscopy" />, and $^1$H-NMR) is often necessary for complete structural elucidation.*

### 3. Steps to Predict the Number of Peaks

1. **Draw the molecule's structure.**
2. **Look for elements of symmetry**, such as planes of symmetry or rotational symmetry.
3. **Identify equivalent carbons.** Carbons that can be interchanged by a symmetry operation are chemically equivalent and will produce only one signal.
4. **Count the number of unique carbon environments.** This count is the predicted number of peaks in the $^{13}$C-NMR spectrum.

### Worked Examples

**Ethanol ($C_2H_5OH$), structure $CH_3–CH_2–OH$:** the carbon in the methyl group ($-CH_3$) is bonded to three hydrogens and the $-CH_2$ group, while the carbon in the methylene group ($-CH_2$) is bonded to two hydrogens, the $-CH_3$ group, and the highly electronegative oxygen atom, so these two carbons sit in different chemical environments. This gives 2 unique carbons and 2 expected peaks: the $-CH_3$ carbon is relatively shielded and appears upfield at ~18 ppm, while the $-CH_2$ carbon is deshielded by the adjacent oxygen atom and appears downfield at ~58 ppm.

<CaptionedImage src="/content/assets/class-12/chemistry/Pasted image 20250925042200.webp" alt="13C-NMR of ethanol" caption="Fig 18.10: 13C-NMR of ethanol" />

**Acetone ($CH_3COCH_3$), structure $(CH_3)_2C=O$:** the two methyl ($-CH_3$) groups are chemically equivalent due to the molecule's symmetry, both bonded to the same carbonyl carbon, while the carbonyl ($-C=O$) carbon is in a unique environment, double-bonded to an electronegative oxygen atom. This gives 2 unique carbons and 2 expected peaks: the two equivalent $-CH_3$ carbons appear as a single peak at ~30.8 ppm, and the carbonyl carbon is highly deshielded and appears far downfield at ~206 ppm.

<CaptionedImage src="/content/assets/class-12/chemistry/Pasted image 20250925042232.webp" alt="NMR spectrum of acetone" caption="Fig 18.11: NMR spectrum of acetone" />

**Butane ($C_4H_{10}$), structure $CH_3–CH_2–CH_2–CH_3$:** the molecule has a plane of symmetry in the middle, so the two terminal methyl ($-CH_3$) groups are equivalent and the two internal methylene ($-CH_2$) groups are equivalent. This gives 2 unique carbons and 2 expected peaks: the methyl carbons appear around 10-20 ppm, and the methylene carbons appear around 20-40 ppm.

**Benzene ($C_6H_6$), a six-membered aromatic ring:** due to the high degree of symmetry in the benzene ring, all six carbon atoms are chemically equivalent, giving 1 unique carbon and 1 expected peak. The single peak for the aromatic carbons appears around 120-140 ppm (specifically at 128 ppm).

### Q1: How many types of C atoms are present in ethoxyethane (diethyl ether), $CH_3CH_2OCH_2CH_3$? Draw an approximate $^{13}$C-NMR spectrum of this molecule.

**A:** The molecule is symmetrical around the central oxygen atom, $CH_3–CH_2–O–CH_2–CH_3$. The two methyl ($-CH_3$) carbons are equivalent, and the two methylene ($-CH_2$) carbons attached to the oxygen are also equivalent, so there are 2 unique types of carbon atoms. The spectrum will therefore show 2 peaks: the methyl ($-CH_3$) carbons will appear upfield, around 15 ppm, and the methylene ($-CH_2-$) carbons, attached to the electronegative oxygen, will be deshielded and appear downfield, around 65 ppm.

*(Conceptual drawing: A simple spectrum would show two vertical lines on a ppm scale, one at ~15 and a second at ~65.)*

### Q2: Why are the chemical shifts in $^{13}$C-NMR much greater than in $^{1}$H-NMR?

**A:** The range of chemical shifts is larger in $^{13}$C-NMR (0-220 ppm) compared to $^1$H-NMR (0-12 ppm) primarily because:
1. **Greater Electronic Variation:** Carbon atoms form the backbone of molecules and are directly involved in a wider variety of bonding environments (single, double, triple bonds; bonding to highly electronegative atoms). This creates a much larger range of electronic shielding and deshielding effects compared to protons, which are typically on the periphery of a molecule.
2. **Polarizability:** The electron clouds around carbon are more polarizable than those around hydrogen, leading to larger induced magnetic fields and thus a wider spread of resonance frequencies.
