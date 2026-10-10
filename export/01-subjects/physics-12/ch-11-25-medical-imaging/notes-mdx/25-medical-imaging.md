<!-- note kx79083ywf726cfsnxeex877rn85p28h | topic ms79p0pjrkh0nwb70shchmxd0d85qjcc | status published -->
# 25.1 Piezoelectric Effect and Ultrasonic Waves

## Piezoelectric Effect

The **piezoelectric effect** is the phenomenon in which certain crystalline materials generate an electric potential difference across their faces when subjected to mechanical stress (compression or tension). Conversely, when an electric voltage is applied across such a crystal, it undergoes mechanical deformation (expansion or contraction). This reverse process is called the **inverse piezoelectric effect**.

### Key Materials

| Material | Formula | Notes |
|---|---|---|
| Quartz | $\mathrm{SiO_2}$ | Natural piezoelectric crystal |
| Lead Zirconate Titanate | PZT | Synthetic, widely used in medical transducers |
| Lithium Niobate | $\mathrm{LiNbO_3}$ | High sensitivity |

### Mechanism

In a piezoelectric crystal, the positive and negative charge centres do not coincide when the crystal is deformed. This asymmetry creates an electric dipole moment, resulting in a measurable voltage across the crystal faces.

- **Direct piezoelectric effect:** Mechanical stress → Electric voltage
- **Inverse piezoelectric effect:** Applied voltage → Mechanical vibration

### Medical Application

In medical science, piezoelectric transducers serve as both **transmitters** and **receivers** of ultrasonic waves:

1. **Transmission:** A high-frequency alternating voltage (AC) is applied to the crystal. By the inverse piezoelectric effect, the crystal vibrates at the same frequency, generating ultrasonic pressure waves that travel into the body.
2. **Reception:** Reflected ultrasonic waves returning from internal structures cause the crystal to vibrate, generating a voltage signal (direct piezoelectric effect) that is processed to form an image.

---

## Ultrasonic Waves

**Ultrasonic waves** (ultrasound) are longitudinal mechanical waves with frequencies **above the upper limit of human hearing**, i.e., above $20{,}000\text{ Hz}$ ($20\text{ kHz}$). Medical ultrasound typically operates in the range of $1\text{ MHz}$ to $20\text{ MHz}$.

### Properties Relevant to Medical Imaging

- **Short wavelength:** High-frequency waves have short wavelengths ($\lambda = v/f$), allowing them to resolve fine structural details and detect small features.
- **Non-ionizing:** Unlike X-rays, ultrasound does not carry enough energy to ionize atoms, making it safe for repeated use and for imaging sensitive patients such as pregnant women.
- **Reflection at boundaries:** Ultrasound is partially reflected at interfaces between tissues of different acoustic impedance. These echoes are used to construct images.
- **Real-time imaging:** Ultrasound provides dynamic, real-time images of moving structures (e.g., a beating heart or a moving foetus).

---

## Generating Ultrasound: The Ultrasonic Transducer

An **ultrasonic transducer** exploits the inverse piezoelectric effect:

1. A high-frequency AC voltage (e.g., $5\text{ MHz}$) is applied across a piezoelectric crystal (typically PZT).
2. The crystal alternately expands and contracts at the same frequency.
3. This mechanical vibration launches longitudinal (compression) waves into the surrounding medium.

The same transducer then switches to **receive mode**: reflected echoes cause the crystal to vibrate, producing a voltage that is amplified and processed.

---

## Ultrasound Diagnostics

### Pulse-Echo Technique

In medical ultrasound imaging, short pulses of ultrasound are transmitted into the body. At each tissue boundary, a fraction of the pulse is **reflected** (echo) and the rest is **transmitted** deeper. The time delay $t$ between transmission and reception of an echo is used to calculate the depth $d$ of the reflecting surface:

$$d = \frac{v \cdot t}{2}$$

where $v$ is the speed of ultrasound in tissue (approximately $1500\text{ m s}^{-1}$) and the factor of 2 accounts for the round trip.

### A-Scan and B-Scan

| Mode | Description | Use |
|---|---|---|
| **A-scan** (Amplitude scan) | Displays echo amplitude vs. time as a 1D trace | Measuring distances (e.g., eye dimensions) |
| **B-scan** (Brightness scan) | Converts echo amplitude to brightness; builds a 2D image by sweeping the beam | Abdominal, obstetric, cardiac imaging |

### Acoustic Impedance and Coupling Gel

The fraction of ultrasound reflected at a boundary depends on the **acoustic impedance** $Z = \rho v$ of the two media (where $\rho$ is density). A large impedance mismatch (e.g., between air and skin) causes almost total reflection. To prevent this, a **coupling gel** is applied between the transducer and the skin, eliminating the air gap.

### Advantages of Ultrasound over X-rays

- **Non-ionizing**: safe for foetuses and repeated examinations.
- **Real-time**: can image moving structures dynamically.
- **Distinguishes soft tissues**: X-rays show poor contrast between soft tissues; ultrasound detects density differences well.
- **Portable and relatively inexpensive.**

---

## SONAR: An Application of Ultrasound

**SONAR** (Sound Navigation And Ranging) uses the same pulse-echo principle to measure the depth of the ocean floor or detect underwater objects:

$$d = \frac{v \cdot t}{2}$$

where $v \approx 1500\text{ m s}^{-1}$ in seawater and $t$ is the time between pulse transmission and echo reception.


---

<!-- note kx74e47x2bj90zwvgvgf5696a585qx24 | topic ms74pf28a55fpdbce790p4863d85p9bv | status published -->
# 25.2 X-rays

## What are X-rays?

X-rays are **high-energy electromagnetic waves** with wavelengths typically in the range of **0.01 nm to 10 nm** (frequencies ~$10^{17}$ to $10^{19}$ Hz). They were discovered by Wilhelm Röntgen in 1895 and are therefore also called **Röntgen rays**.

---

## Production of X-rays: The Coolidge Tube

X-rays are produced in a **Coolidge tube** (hot-cathode X-ray tube):

1. A **tungsten filament (cathode)** is heated by a low-voltage current, releasing electrons by thermionic emission.
2. A high potential difference $V$ (typically 10 kV – 150 kV) accelerates the electrons toward a heavy metal **anode (target)**, usually tungsten or molybdenum.
3. When the high-speed electrons strike the target, most of their kinetic energy is converted to heat, but a small fraction (~1%) is emitted as **X-ray photons**.

### Key Controls
| Parameter | Controlled by | Effect |
|---|---|---|
| **Intensity** (number of X-rays) | Filament current | More current → more electrons → more X-rays |
| **Energy / Hardness** (penetrating power) | Accelerating voltage $V$ | Higher $V$ → higher energy → shorter wavelength |

---

## Types of X-rays Produced

### 1. Continuous X-rays (Bremsstrahlung)
- Produced when electrons are **decelerated** by the electric field of the target nucleus.
- The electron loses kinetic energy, which is emitted as a photon: $E_{photon} = \Delta KE$.
- Because electrons lose varying amounts of energy, a **continuous spectrum** of wavelengths is produced.
- There is a **minimum wavelength** (cutoff) corresponding to an electron losing **all** its kinetic energy in a single collision.

### 2. Characteristic X-rays
- Produced when an incoming electron **knocks out an inner-shell electron** (e.g., from the K-shell) of a target atom.
- An outer-shell electron drops down to fill the vacancy, emitting a photon of a **specific energy** (characteristic of the target element).
- Transitions are labelled:
  - $K_\alpha$: L-shell → K-shell transition
  - $K_\beta$: M-shell → K-shell transition
  - $L_\alpha$: M-shell → L-shell transition

---

## Minimum Wavelength (Cutoff Wavelength)

When an electron accelerated through voltage $V$ gives up **all** its kinetic energy as a single photon:

$$eV = hf_{max} = \frac{hc}{\lambda_{min}}$$

$$\boxed{\lambda_{min} = \frac{hc}{eV}}$$

where:
- $e = 1.6 \times 10^{-19}$ C (electron charge)
- $h = 6.63 \times 10^{-34}$ J s (Planck's constant)
- $c = 3 \times 10^8$ m s$^{-1}$ (speed of light)
- $V$ = accelerating voltage (V)

**Key relationship:** $\lambda_{min} \propto \dfrac{1}{V}$: doubling the voltage **halves** the minimum wavelength.

<WorkedExample title="Worked Example">

### Worked Example

> An X-ray tube operates at 50 kV. Calculate the minimum wavelength of X-rays produced.

</WorkedExample>


$$\lambda_{min} = \frac{hc}{eV} = \frac{(6.63 \times 10^{-34})(3 \times 10^8)}{(1.6 \times 10^{-19})(50 \times 10^3)}$$

$$\lambda_{min} = \frac{1.989 \times 10^{-25}}{8 \times 10^{-15}} = 2.49 \times 10^{-11} \text{ m} \approx 0.025 \text{ nm}$$

---

## X-rays in Medical Imaging

### Principle of Contrast (Differential Absorption)

Different tissues absorb X-rays to **different degrees** depending on their density and atomic number:

| Tissue | Absorption | Appearance on film |
|---|---|---|
| Bone (calcium-rich) | High | **White** (radiopaque) |
| Muscle / soft tissue | Moderate | Grey |
| Air / lungs | Very low | **Black** (radiolucent) |

This **differential absorption** creates contrast on the X-ray image (radiograph).

### Conventional X-ray Radiograph
- X-rays pass through the patient and strike a **photographic film** or digital detector.
- Dense structures (bones) block more X-rays → less exposure → appear **white**.
- Used to detect: fractures, lung conditions (pneumonia, tuberculosis), dental problems.

### Contrast Agents
- For soft tissues with similar densities (e.g., digestive tract), a **contrast agent** (e.g., barium sulfate for GI tract, iodine compounds for blood vessels) is introduced.
- These agents absorb X-rays strongly, making the target organ visible.

### Limitations
- X-rays are **ionising radiation**: excessive exposure can damage DNA.
- Poor contrast between soft tissues of similar density (CT scanning addresses this).
- Produces a **2D projection** image (overlapping structures).

---

## Summary

| Feature | Detail |
|---|---|
| Nature of X-rays | Electromagnetic radiation, $\lambda \approx 0.01$–10 nm |
| Production | High-speed electrons striking heavy metal target |
| Minimum wavelength | $\lambda_{min} = hc/eV$ |
| Continuous spectrum | Bremsstrahlung (electron deceleration) |
| Characteristic spectrum | Inner-shell electron transitions |
| Medical use | Differential absorption creates contrast images |


---

<!-- note kx79nx33s4v2y0svwdj7nsqdbh85qscp | topic ms7049v0q688erswef2zb9jp5d85qtst | status published -->
# 25.3 Computed Tomography (CT) Scan

## What is a CT Scan?

A **CT (Computed Tomography) scan** is a medical imaging technique that uses **X-rays** and **computer processing** to produce detailed **cross-sectional images (slices)** of internal organs, bones, and soft tissues. Unlike a conventional X-ray, which produces a single 2D shadow image, a CT scan builds a full **3D picture** of the body's interior.

The technique was developed in the early 1970s and has become one of the most powerful diagnostic tools in modern medicine.

---

## How a CT Scanner Works

1. **X-ray Source and Detector Array**: The patient lies on a motorised table that moves through a large, ring-shaped machine called a **gantry**. Inside the gantry, an X-ray source and an array of detectors are mounted opposite each other.

2. **Rotation**: The X-ray source emits a **fan-shaped beam** of X-rays. The source and detector array **rotate 360° around the patient**, capturing hundreds of X-ray projections from different angles.

3. **Attenuation Data**: As X-rays pass through the body, different tissues absorb (attenuate) them to different degrees:
   - **Dense tissues** (e.g., bone) absorb more X-rays → appear bright (white).
   - **Soft tissues** (e.g., muscle, organs) absorb intermediate amounts → appear grey.
   - **Air-filled spaces** (e.g., lungs) absorb very little → appear dark (black).

4. **Computer Reconstruction**: The detectors measure the **varying intensities** of transmitted X-rays at each angle. A computer applies mathematical algorithms (such as **filtered back projection**) to reconstruct a detailed **cross-sectional (tomographic) image** from this raw data.

---

## Voxels and Hounsfield Units

The reconstructed CT image is built from tiny 3D volume elements called **voxels** (volume pixels).

- A **voxel** is the 3D equivalent of a pixel, representing a small cubic volume of tissue.
- Each voxel is assigned a numerical value called a **Hounsfield Unit (HU)**, which quantifies the **radiodensity** (X-ray attenuation coefficient) of that tissue.

| Tissue | Hounsfield Units (HU) |
|---|---|
| Air | −1000 |
| Fat | −100 to −50 |
| Water | 0 |
| Soft tissue | +20 to +80 |
| Bone | +400 to +1000 |

By mapping HU values to a grey scale, the computer produces images where different tissues are clearly distinguishable.

---

## Advantages of CT over Conventional X-ray

| Feature | Conventional X-ray | CT Scan |
|---|---|---|
| Image type | 2D shadow | 3D cross-sectional slices |
| Soft tissue contrast | Poor | Excellent |
| Overlapping structures | Yes | Eliminated |
| Depth information | No | Yes |
| Radiation dose | Low | Higher |

CT scans are particularly superior for imaging **soft tissues** because they can distinguish between tissues with very similar densities, something a conventional X-ray cannot do.

---

## Disadvantages

- **Higher radiation dose**: Because hundreds of X-ray exposures are taken from multiple angles, the total ionising radiation dose is significantly higher than a single conventional X-ray.
- **Cost and complexity**: CT scanners are expensive and require specialist operation.
- **Not suitable for all patients**: Pregnant women and children are exposed to greater risk from the higher radiation dose.

---

## Summary

> A CT scanner rotates an X-ray source and detector 360° around the patient. A computer processes the attenuation data from multiple angles using back-projection algorithms to reconstruct detailed cross-sectional images. Each image element (voxel) is assigned a Hounsfield Unit value, allowing different tissues to be identified and distinguished.
