<!-- note kx7fxp9rx2vtpkxd9ta1pbsc5h85pw8v | topic ms7ev9v2558d7j5taqjb94ffrn85q586 | status published -->
# 20.1 Alternating Current and Voltage

This section introduces alternating current (AC) and voltage, defining their sinusoidal nature and key terminologies such as peak value, RMS value, frequency, and period. It also covers the calculation of power in AC circuits with resistive loads.

An AC generator produces an alternating current or voltage that varies sinusoidally with time.

## Sinusoidal Waveform

The general form for an alternating quantity (current or voltage) is:
$x = x_0 \sin(\omega t)$
where:

- $x$ is the instantaneous value at time $t$
- $x_0$ is the maximum or peak value
- $\omega$ is the angular frequency of the generator

Specifically for current and voltage:

- **Alternating current:** $I = I_0 \sin(\omega t)$
- **Alternating voltage:** $V = V_0 \sin(\omega t)$

A sinusoidal waveform has the following characteristics:

- It changes direction (polarity) at regular intervals
- Its magnitude changes continuously
- The change is smooth, being most rapid at the zero-crossing points and slowest at the peaks

<CaptionedImage src="kg23h4bqp7y6s86rypex0cxzvx8e5nqk" alt="Sinusoidal waveform" caption="Figure 20.1: Sinusoidal waveform of AC voltage or current." />

## AC Terminologies

- **Cycle:** One complete set of positive and negative values of an alternating quantity.
- **Time Period (T):** The time taken to complete one cycle.
- **Frequency (f):** The number of cycles completed in one second, measured in Hertz (Hz). In Pakistan, the standard AC frequency is 50 Hz.
- **Angular Frequency (ω):** The angular frequency is related to frequency by $\omega = 2\pi f$. The time period is $T = 1/f = 2\pi/\omega$.

- **Peak Value ($x_0$):** The maximum value (positive or negative) of the alternating quantity.
- **Peak-to-Peak Value ($p-p$):** The sum of the positive and negative peak values ($V_{p-p} = 2V_0$).
- **Average Value:** The average of all values over a period. For a sinusoidal waveform over one complete cycle, the average value is zero because the positive and negative halves cancel each other out.

$\text{Average value} = \frac{\text{Total (net) area under the curve for time T}}{\text{Time T}}$

- **Root-Mean-Square (r.m.s.) Value:** The r.m.s. value of an AC current is the equivalent steady DC current that would produce the same heating effect in a resistor. It is also known as the effective value.

<InlineNoteTag label="Root Mean Square Speed of Gas" notePath="physics-12/16.2-root-mean-square-speed-of-an-ideal-gas" />

<CaptionedImage src="kg23t2hdmsc4zza881pm01a4es8e517x" alt="RMS and Peak values" caption="Figure 20.2: Relationship between r.m.s and peak values." />

The relationship between r.m.s. and peak values is:

| Quantity | Formula |
| :--- | :--- |
| r.m.s. current | $I_{rms} = \frac{I_0}{\sqrt{2}} \approx 0.707 I_0$ |
| r.m.s. voltage | $V_{rms} = \frac{V_0}{\sqrt{2}} \approx 0.707 V_0$ |

## Mean Power and Maximum Power

[20.4.1 A.C. Through a Resistor](/physics-12/20-alternating-current/20-4-1-a-c-through-resistor) discusses this circuit in detail.

When an alternating current $I = I_0 \sin(\omega t)$ flows through a resistor $R$, the instantaneous power dissipated is:
$P = I^2 R = (I_0 \sin(\omega t))^2 R = I_0^2 R \sin^2(\omega t)$

Since the current is squared, the power is always positive. The value of $\sin^2(\omega t)$ varies between 0 and 1, with an average value of $1/2$. Therefore, the average (or mean) power delivered to the resistor is:
$\langle P \rangle = \frac{1}{2} I_0^2 R = I_{rms}^2 R$

This shows that the mean power in a resistive load is half the maximum power ($P_{max} = I_0^2 R$).

<WorkedExample title="Worked examples">

## Worked Examples

**Example 1:** An AC circuit consists of a pure resistance of $20\ \Omega$ and is connected across an AC supply of $220\ \text{V}$, $50\ \text{Hz}$. Calculate (a) the peak value of voltage, (b) the peak value of current, and (c) the equations for voltage and current.

**Given:** $R = 20\ \Omega$, $V_{rms} = 220\ \text{V}$, $f = 50\ \text{Hz}$

**(a) Peak Voltage ($V_0$):**
$V_0 = \sqrt{2}\ V_{rms} = \sqrt{2} \times 220\ \text{V} \approx 311.1\ \text{V}$

**(b) Peak Current ($I_0$):**
$I_0 = \frac{V_0}{R} = \frac{311.1\ \text{V}}{20\ \Omega} \approx 15.55\ \text{A}$

**(c) Equations for Voltage and Current:**
First, find the angular frequency: $\omega = 2\pi f = 2\pi(50\ \text{Hz}) = 314\ \text{rad/s}$
The equation for voltage is $V = V_0 \sin(\omega t) \implies V = 311.1 \sin(314t)$
The equation for current is $I = I_0 \sin(\omega t) \implies I = 15.55 \sin(314t)$

---

**Example 2:** The peak voltage of an AC supply is 320 V. What is the r.m.s. value of this voltage?

**Given:** Peak Voltage $V_0 = 320\ \text{V}$
**Formula:** $V_{rms} = V_0 / \sqrt{2}$
**Calculation:** $V_{rms} = 320\ \text{V} / \sqrt{2} \approx 226.3\ \text{V}$

</WorkedExample>

---

<!-- note kx7740vttf8yc4e77ggkg377r585pcmg | topic ms7anvb7r3qm1h5zdm2wet1tkn85q1r9 | status published -->
# 20.2 Rectification

**Rectification** is the process of converting **alternating current (AC)**, which periodically reverses direction, into **direct current (DC)**, which flows in only one direction. This is essential for powering electronic devices that require a steady DC supply from the AC mains.

A **diode** is the key component used in rectification because it allows current to flow in only one direction (forward-biased) and blocks it in the other (reverse-biased).

## Half-Wave Rectification

A single diode passes only one half-cycle of the AC input to the load, giving an average output of $V_m/\pi$ at the input frequency $f$, with a maximum theoretical efficiency of about 40.6%.

[20.2.1 Half-Wave Rectification](/physics-12/20-alternating-current/20-2-1-half-wave-rectification) covers the circuit operation, key parameters, and smoothing in detail.

## Full-Wave Rectification

A bridge of four diodes conducts on both half-cycles, so current flows through the load in the same direction throughout, giving an average output of $2V_m/\pi$ at ripple frequency $2f$, with a maximum efficiency of about 81.2%.

[20.2.2 Full Wave Rectification](/physics-12/20-alternating-current/20-2-2-full-wave-rectification) covers the bridge rectifier circuit and its own smoothing capacitor in detail.

## Comparison: Half-Wave vs Full-Wave Rectification

| Property | Half-Wave | Full-Wave (Bridge) |
|---|---|---|
| Diodes required | 1 | 4 |
| Output frequency | $f$ | $2f$ |
| $V_{dc}$ | $V_m/\pi$ | $2V_m/\pi$ |
| Efficiency | ~40.6% | ~81.2% |
| Ripple | High | Lower |

## Smoothing Capacitor

The output of a rectifier is **pulsating DC**, varying between zero and the peak voltage. A **smoothing capacitor** $C$ connected in parallel with the load resistor $R_L$ reduces this variation (**ripple**) by charging to the peak voltage and discharging slowly through $R_L$ between pulses, with time constant $\tau = CR_L$. A full-wave rectifier produces less ripple than a half-wave rectifier with the same capacitor, because the capacitor is recharged twice per cycle instead of once. Both [20.2.1 Half-Wave Rectification](/physics-12/20-alternating-current/20-2-1-half-wave-rectification) and [20.2.2 Full Wave Rectification](/physics-12/20-alternating-current/20-2-2-full-wave-rectification) work through the smoothing capacitor for their own circuit in detail.


---

<!-- note kx78k8ce6gy1kgtk9tkfq4pa3585pmtk | topic ms79fk1t2crxnmdsr2evpe813x85pnew | status published -->
# 20.2.1 Half-Wave Rectification

## What is Rectification?

**Rectification** is the process of converting **alternating current (AC)**, which periodically reverses direction, into **direct current (DC)**, which flows in only one direction.

A **diode** is the key component used for rectification because it allows current to flow in one direction only (when forward-biased) and blocks it in the reverse direction (when reverse-biased).

---

## Half-Wave Rectifier Circuit

A half-wave rectifier uses a **single diode** connected in series with a load resistor $R_L$ and an AC source (usually via a transformer).

### Circuit Operation

**Positive Half-Cycle:**
- The anode of the diode is at a higher potential than the cathode.
- The diode is **forward-biased**, offering low resistance, so current flows through $R_L$.
- Output voltage appears across $R_L$.

**Negative Half-Cycle:**
- The anode is at a lower potential than the cathode.
- The diode is **reverse-biased**, offering very high (ideally infinite) resistance, so no current flows.
- Output voltage across $R_L$ is zero.

The result is a **pulsating DC** output: only the positive half-cycles appear at the output.

---

## Key Parameters

### Average (DC) Output Voltage

For a sinusoidal input with peak voltage $V_m$, the average output voltage of a half-wave rectifier is:

$$V_{dc} = \frac{V_m}{\pi} \approx 0.318\, V_m$$

### Output Frequency

The output pulses occur once per input cycle, so the **output (ripple) frequency equals the input frequency**:

$$f_{out} = f_{in}$$

This is in contrast to full-wave rectification where $f_{out} = 2f_{in}$.

### Efficiency

The maximum theoretical efficiency of a half-wave rectifier is approximately **40.6%**, since half of the input waveform is blocked.

### Peak Inverse Voltage (PIV)

The **Peak Inverse Voltage** is the maximum reverse voltage the diode must withstand during the negative half-cycle. For a half-wave rectifier:

$$PIV = V_m$$

The diode selected must have a PIV rating greater than $V_m$ to avoid breakdown.

---

## Smoothing (Filter) Capacitor

The pulsating DC output of a rectifier contains **ripple**, periodic fluctuations in voltage. A **filter capacitor** $C$ is connected in **parallel** with the load $R_L$ to smooth this output.

### How It Works

1. **Charging phase:** When the rectified voltage rises toward its peak, the capacitor charges up to the peak voltage $V_m$.
2. **Discharging phase:** When the rectified voltage falls (or during the blocked half-cycle), the capacitor **discharges slowly through $R_L$**, maintaining the output voltage at a nearly steady level.
3. The capacitor recharges on the next pulse, topping up the voltage.

The result is a **smoother DC output** with reduced ripple.

### Ripple Voltage

The residual fluctuation is called the **ripple voltage**. A larger capacitance $C$ or a larger load resistance $R_L$ reduces the ripple:

$$V_{ripple} \approx \frac{V_m}{f \cdot C \cdot R_L}$$

where $f$ is the input frequency.

> **Key point:** A larger capacitor charges and discharges more slowly, so the voltage drop between pulses is smaller, giving a smoother output.

---

## Summary Table

| Parameter | Half-Wave Rectifier |
|---|---|
| Diodes required | 1 |
| Output frequency | $f$ (same as input) |
| Average DC voltage | $V_m / \pi$ |
| Efficiency | ~40.6% |
| PIV | $V_m$ |


---

<!-- note kx7c1k7080dmhqd2j2q3m8xjk585p32v | topic ms7brc0qjzc297v7m57d9ndbph85pcq6 | status published -->
# 20.2.2 Full Wave Rectification

## What is Full-Wave Rectification?

Full-wave rectification converts **both** the positive and negative half-cycles of an AC input into a unidirectional (DC) output. Unlike half-wave rectification, no part of the input waveform is wasted, resulting in higher efficiency and a smoother output.

## The Bridge Rectifier

The most common full-wave rectifier circuit is the **bridge rectifier**, which uses **four diodes** ($D_1$, $D_2$, $D_3$, $D_4$) arranged in a bridge configuration. It does **not** require a centre-tapped transformer.

<CaptionedImage src="kg2acmjaf19nfwerscwgfjp4j988hm12" alt="Bridge Rectifier 1" caption=" Bridge Rectifier" />

### Circuit Operation

**During the positive half-cycle** of the AC input:
- Diodes $D_1$ and $D_2$ are forward biased and conduct.
- Diodes $D_3$ and $D_4$ are reverse biased and do not conduct.
- Current flows through the load $R_L$ in a fixed direction.

**During the negative half-cycle** of the AC input:
- Diodes $D_3$ and $D_4$ are forward biased and conduct.
- Diodes $D_1$ and $D_2$ are reverse biased and do not conduct.
- Current still flows through the load $R_L$ in the **same** fixed direction.

In both half-cycles, two diodes conduct in series, so the voltage drop across the load is:
$$V_{load} = V_{in} - 2V_D$$
where $V_D \approx 0.7\text{ V}$ is the forward voltage drop of each diode.

### Output Frequency

Because both half-cycles are utilised, the output pulsates **twice** per input cycle. If the AC input frequency is $f$, the output ripple frequency is:
$$f_{out} = 2f$$
For a 50 Hz supply, the ripple frequency is 100 Hz.

### Advantages over Half-Wave Rectification

| Property | Half-Wave | Full-Wave (Bridge) |
|---|---|---|
| Diodes used | 1 | 4 |
| Output frequency | $f$ | $2f$ |
| Efficiency | ~40.6% | ~81.2% |
| Ripple | High | Lower |

## The Smoothing Capacitor

The output of a bridge rectifier is a **pulsating DC**: it rises and falls with each half-cycle. A **smoothing capacitor** $C$ is connected in **parallel** with the load $R_L$ to reduce these ripples.

### How It Works

1. **Charging phase:** When the rectified voltage rises toward its peak, the capacitor charges up to the peak voltage $V_{peak}$.
2. **Discharging phase:** When the rectified voltage falls below $V_{peak}$, the capacitor discharges through the load, maintaining the output voltage at a nearly constant level.
3. The capacitor then recharges on the next peak, and the cycle repeats.

The result is a nearly steady DC voltage with a small residual **ripple voltage** $\Delta V$.

### Factors Affecting Smoothing

- **Larger capacitance $C$:** Slower discharge, smaller ripple, smoother output.
- **Larger load resistance $R_L$:** Slower discharge, smaller ripple.
- **Higher ripple frequency** (full-wave vs half-wave): Less time between peaks, so the capacitor discharges less, giving an inherently smoother output.

The ripple voltage is approximately:
$$\Delta V \approx \frac{I}{f_{ripple} \cdot C} = \frac{V_{DC}}{f_{ripple} \cdot R_L \cdot C}$$

where $I$ is the load current and $f_{ripple}$ is the ripple frequency.


---

<!-- note kx7bsvww5ny0fy3tyve80n11dh85pd10 | topic ms73qc3cnyc6fd8fn9p7xzcggn85p3ny | status published -->
# 20.3 Mutual Inductance and Self-Inductance

## Mutual Inductance

**Mutual induction** is the phenomenon in which a changing current in one coil (the *primary* coil) induces an electromotive force (emf) in a neighbouring coil (the *secondary* coil) due to a change in magnetic flux linkage.

The induced emf in the secondary coil is given by:

$$\varepsilon_2 = -M \frac{\Delta I_1}{\Delta t}$$

where:
- $\varepsilon_2$ = induced emf in the secondary coil (V)
- $M$ = mutual inductance (H)
- $\frac{\Delta I_1}{\Delta t}$ = rate of change of current in the primary coil (A/s)

The negative sign reflects **Lenz's Law**: the induced emf opposes the change that caused it.

### Factors Affecting Mutual Inductance

The mutual inductance $M$ between two coils depends on:
1. Number of turns in each coil ($N_1$, $N_2$)
2. Cross-sectional area of the coils ($A$)
3. Distance (proximity) between the coils
4. Relative orientation of the coils
5. Magnetic permeability ($\mu$) of the core material

> **Practical Application:** The **transformer** operates on the principle of mutual induction. A changing current in the primary winding creates a changing magnetic flux that induces an emf in the secondary winding.

---

## Self-Inductance

**Self-inductance** is the property of a coil by which it opposes any change in the current flowing through itself. When the current in a coil changes, the changing magnetic flux through its own turns induces an emf in the same coil.

This self-induced emf (also called **back emf**) is given by:

$$\varepsilon_L = -L \frac{\Delta I}{\Delta t}$$

Rearranging to define $L$:

$$L = \frac{-\varepsilon_L}{\Delta I / \Delta t}$$

Alternatively, in terms of flux linkage:

$$L = \frac{N\Phi}{I}$$

where $N$ is the number of turns and $\Phi$ is the magnetic flux per turn.

### Why is it called 'Back EMF'?

By **Lenz's Law**, the self-induced emf always acts in a direction that **opposes** the change in current that produced it. This opposition is reflected by the negative sign in the formula. When current increases, the back emf opposes the increase; when current decreases, it opposes the decrease.

---

## The Henry: SI Unit of Inductance

The SI unit of both self-inductance and mutual inductance is the **henry (H)**.

From $\varepsilon_L = L(\Delta I / \Delta t)$:

$$1\text{ H} = 1\text{ V·s/A} = 1\text{ Wb/A}$$

A coil has a self-inductance of **1 henry** if a current changing at the rate of 1 A/s induces a back emf of 1 V.

---

## Inductors as Chokes in AC Circuits

An **inductor** (also called a **choke**) is a coil of wire, often wound around a soft iron core, that exploits self-inductance to oppose changes in current.

### Why Inductors Block AC but Pass DC

- **DC (steady current):** $\frac{\Delta I}{\Delta t} = 0$, so $\varepsilon_L = 0$. The inductor offers no opposition (only its small resistance matters). DC passes freely.
- **AC (alternating current):** The current is continuously changing, so the inductor continuously generates a back emf that opposes the current. The higher the frequency, the greater the opposition (inductive reactance $X_L = 2\pi f L$).

### Choke as a Filter

Because an inductor passes DC but blocks (chokes) AC, it is used as a **choke** in:
- **Power supply filters:** placed in series to block high-frequency ripple while allowing smooth DC to pass to the load.
- **Radio/audio circuits:** to separate DC bias from AC signals.
- **Fluorescent lamp ballasts:** to limit current without wasting energy as heat (unlike a resistor).

> **Key advantage of a choke over a resistor:** A choke limits AC current by reactance (no power dissipated as heat), whereas a resistor wastes energy. This makes chokes energy-efficient current limiters.


---

<!-- note kx74nw0vsypf7fx8acd3xvg5mh85p12b | topic ms72drs4c8ghbc6evx2z4bvn2185qb3v | status published -->
# 20.4 Phase of A.C.

## What is Phase?

[20.1 Alternating Current and Voltage](/physics-12/20-alternating-current/20-1-alternating-current-and-voltage)

The **phase** of a sinusoidal AC quantity is the angle $\theta = \omega t$ that appears in its mathematical expression. For an alternating voltage:

$$V = V_o \sin(\omega t)$$

The phase $\omega t$ specifies the **instantaneous state** of the quantity, both its magnitude and direction, at any given moment. The angular frequency $\omega = 2\pi f$ determines how rapidly the phase advances with time.

## Phase Difference

When two AC quantities (e.g., voltage and current) vary sinusoidally at the same frequency but do not reach their peak values at the same instant, they are said to have a **phase difference** $\phi$.

- If $V = V_o \sin(\omega t)$ and $I = I_o \sin(\omega t - \phi)$, the current **lags** the voltage by $\phi$.
- If $I = I_o \sin(\omega t + \phi)$, the current **leads** the voltage by $\phi$.

## Phasors and Phasor Diagrams

A **phasor** is a rotating vector:
- Its **length** represents the peak value ($V_o$ or $I_o$).
- Its **angular position** represents the phase at a given instant.

A **phasor diagram** shows the relative phase relationships between different AC quantities in a circuit at a glance.

<CaptionedImage src="kg2c9bhv0w3v34x7cy3h9xgy2588agpe" alt="Pasted image" caption="Phasor Diagram" />

---

## Phase Relationships in Basic AC Circuits

### A.C. Through a Resistor

For a resistor $R$ connected to $V = V_o \sin(\omega t)$:

$$I = \frac{V_o}{R} \sin(\omega t) = I_o \sin(\omega t)$$

- Voltage and current are **in phase**: $\phi = 0°$.
- They reach their maximum and minimum values simultaneously.
- Power factor $= \cos(0°) = 1$.
- Average power: $P = \frac{1}{2} I_o V_o = I_{rms} V_{rms}$.

### A.C. Through an Inductor

For a pure inductor $L$ connected to $V = V_o \sin(\omega t)$, the back-emf opposes the change in current. The result is:

$$I = I_o \sin\left(\omega t - \frac{\pi}{2}\right)$$

- The **voltage leads the current by $90°$** (or $\pi/2$ radians), equivalently the current lags the voltage by $90°$.
- Power factor $= \cos(90°) = 0$.
- Average power dissipated $= 0$ (energy is stored and returned each cycle).

### A.C. Through a Capacitor

For a pure capacitor $C$ connected to $V = V_o \sin(\omega t)$, the charge $q = CV$ must build up before the voltage rises. Differentiating:

$$I = \frac{dq}{dt} = \omega C V_o \cos(\omega t) = I_o \sin\left(\omega t + \frac{\pi}{2}\right)$$

- The **current leads the voltage by $90°$** (or $\pi/2$ radians).
- Power factor $= \cos(90°) = 0$.
- Average power dissipated $= 0$.

---

## Summary Table

| Circuit Element | Phase of $I$ relative to $V$ | Phase Difference $\phi$ | Power Factor |
|---|---|---|---|
| Resistor $R$ | In phase | $0°$ | $1$ |
| Inductor $L$ | $I$ lags $V$ | $90°$ | $0$ |
| Capacitor $C$ | $I$ leads $V$ | $90°$ | $0$ |


---

<!-- note kx75nzkm5vg3c4x0t1kxhpc1vh85q87d | topic ms74p7nfvt16ysh80wyhw92s4h85p5vv | status published -->
# A.C. Through a Resistor

When an alternating voltage is applied across a **pure resistor**, the behaviour of the circuit is the simplest of all AC circuit elements.

## Applied Voltage and Resulting Current

Let the instantaneous voltage applied across a resistor $R$ be:

$$V = V_0 \sin(\omega t)$$

By Ohm's Law, the instantaneous current is:

$$I = \frac{V}{R} = \frac{V_0}{R} \sin(\omega t) = I_0 \sin(\omega t)$$

where $I_0 = \dfrac{V_0}{R}$ is the peak current.

## Phase Relationship

Both $V$ and $I$ vary as $\sin(\omega t)$, so they are **in phase** with each other. The phase difference $\phi = 0°$. This means:
- Voltage and current reach their **maximum values at the same instant**.
- They pass through **zero at the same instant**.
- They reach their **minimum (negative peak) at the same instant**.

## Phasor Diagram

In a phasor diagram, the voltage phasor $V_0$ and the current phasor $I_0$ are drawn **parallel to each other** (in the same direction), confirming zero phase difference.

## Ohm's Law in RMS Form

Since $V_{rms} = \dfrac{V_0}{\sqrt{2}}$ and $I_{rms} = \dfrac{I_0}{\sqrt{2}}$, Ohm's Law holds in RMS form:

$$V_{rms} = I_{rms} \, R$$

This is identical in form to the DC case.

## Frequency Independence of Resistance

The resistance $R$ of a pure resistor is determined by the **material, length, and cross-sectional area** of the conductor. It does **not depend on the frequency** of the AC supply. This distinguishes a resistor from inductors and capacitors, whose opposition to AC (reactance) is frequency-dependent.

## Power Dissipation

The instantaneous power is:

$$P_{inst} = VI = V_0 I_0 \sin^2(\omega t)$$

The **average power** over a complete cycle is:

$$P_{avg} = V_{rms} \, I_{rms} = I_{rms}^2 \, R = \frac{V_{rms}^2}{R}$$

Equivalently, since $V_{rms} = V_0/\sqrt{2}$ and $I_{rms} = I_0/\sqrt{2}$:

$$P_{avg} = \frac{V_0 I_0}{2} = \frac{1}{2} V_0 I_0$$

Because $\phi = 0°$, the **power factor** $\cos(0°) = 1$, meaning **all the energy supplied by the source is dissipated as heat** in the resistor. Power is never negative in a purely resistive AC circuit.

## Summary Table

| Quantity | Value |
|---|---|
| Phase difference $\phi$ | $0°$ |
| Power factor $\cos\phi$ | $1$ |
| Average power | $V_{rms} I_{rms}$ |
| Resistance vs frequency | Independent |


---

<!-- note kx7evhrf9mntz3f5ewdgzmxfz585p41r | topic ms787wjzzhs4prwkd0xnnckc0985pfzm | status published -->
# 20.4.2 AC Through an Inductor

When an alternating current (AC) source is connected to a **pure inductor** (a coil with negligible resistance), the inductor opposes changes in current through the phenomenon of self-induction. This opposition is characterised by **inductive reactance** and produces a specific **phase relationship** between voltage and current.

## Circuit Analysis

Consider a pure inductor of self-inductance $L$ connected to an AC source:

$$V = V_o \sin(\omega t)$$

By Faraday's law, the back emf of the inductor equals the applied voltage:

$$V = L \frac{dI}{dt}$$

Solving for the current:

$$I = \frac{V_o}{\omega L} \sin\!\left(\omega t - \frac{\pi}{2}\right) = I_o \sin\!\left(\omega t - \frac{\pi}{2}\right)$$

where $I_o = \dfrac{V_o}{\omega L}$.

---

## Phase Relationship

> **In a purely inductive AC circuit, the current lags behind the voltage by $90^\circ$ ($\pi/2$ radians).**

| Quantity | Expression |
|---|---|
| Voltage | $V = V_o \sin(\omega t)$ |
| Current | $I = I_o \sin(\omega t - \pi/2)$ |
| Phase difference | $90^\circ$ (current lags) |

This can be visualised on a **phasor diagram**: the voltage phasor $\vec{V}$ leads the current phasor $\vec{I}$ by $90^\circ$.

---

## Inductive Reactance ($X_L$)

The quantity $\omega L$ plays the role of resistance in limiting the current. It is called **Inductive Reactance**:

$$\boxed{X_L = \omega L = 2\pi f L}$$

- **SI unit:** Ohm ($\Omega$)
- $X_L$ is **directly proportional** to frequency $f$ and inductance $L$.
- The peak current is: $I_o = \dfrac{V_o}{X_L}$
- In RMS terms (Ohm's Law analogy): $I_{rms} = \dfrac{V_{rms}}{X_L}$

### Variation of $X_L$ with Frequency

Since $X_L = 2\pi f L$, the graph of $X_L$ vs $f$ is a **straight line through the origin** with slope $2\pi L$.

| Frequency change | Effect on $X_L$ |
|---|---|
| Doubled | $X_L$ doubles |
| Halved | $X_L$ halves |
| $f = 0$ (DC) | $X_L = 0$ (inductor acts as short circuit) |

---

## Inductor as a Choke

An inductor used to **block or reduce AC** while allowing DC to pass is called a **choke**.

**Why it works:**
- For DC: $f = 0 \Rightarrow X_L = 0$, so the inductor offers no opposition; DC passes freely.
- For AC: $X_L = 2\pi f L$, so higher frequency means higher opposition.
- A choke does **not dissipate energy** as heat (unlike a resistor); energy is stored in the magnetic field and returned to the circuit.

**Applications of chokes:**
- Smoothing pulsating DC in power supplies (in series with the load)
- Tuning circuits in radio receivers
- Fluorescent lamp ballasts

---

## Power in a Purely Inductive Circuit

The instantaneous power is:

$$P = VI = V_o \sin(\omega t) \cdot I_o \sin\!\left(\omega t - \frac{\pi}{2}\right)$$

Using the identity $\sin(\omega t - \pi/2) = -\cos(\omega t)$:

$$P = -V_o I_o \sin(\omega t)\cos(\omega t) = -\frac{V_o I_o}{2}\sin(2\omega t)$$

The **average power over a complete cycle** is:

$$\boxed{P_{avg} = V_{rms}\, I_{rms} \cos(90^\circ) = 0}$$

The power factor $\cos\theta = \cos(90^\circ) = 0$. Energy is alternately stored in the magnetic field and returned to the source: **no net energy is dissipated**.

---

## Summary Table

| Property | Pure Inductor |
|---|---|
| Phase of current vs voltage | Current lags by $90^\circ$ |
| Opposition to AC | $X_L = 2\pi f L$ |
| Unit of $X_L$ | Ohm ($\Omega$) |
| Average power | Zero |
| Power factor | 0 |
| Behaviour at DC ($f=0$) | Short circuit ($X_L = 0$) |
| Behaviour at high $f$ | High opposition (choke action) |


---

<!-- note kx717n94qjwdtfkrp1e2enx24h85qyyy | topic ms755hjr7y48aqw7r4qt94d09585pkvq | status published -->
# AC Through a Capacitor

When an alternating voltage is applied across a **pure capacitor**, the circuit behaves very differently from a resistive circuit. Two key phenomena occur: a **phase difference** between current and voltage, and a frequency-dependent opposition called **capacitive reactance**.

## 1. Circuit Analysis

Let the applied alternating voltage be:

$$V = V_0 \sin(\omega t)$$

The charge stored on the capacitor at any instant is:

$$q = CV = CV_0 \sin(\omega t)$$

The instantaneous current is the rate of change of charge:

$$I = \frac{dq}{dt} = \omega C V_0 \cos(\omega t)$$

This can be rewritten as:

$$I = I_0 \sin\!\left(\omega t + \frac{\pi}{2}\right)$$

where $I_0 = \omega C V_0$ is the peak current.

## 2. Phase Relationship

Comparing the expressions for $V$ and $I$:

| Quantity | Expression |
|---|---|
| Voltage | $V_0 \sin(\omega t)$ |
| Current | $I_0 \sin(\omega t + \pi/2)$ |

> **The current leads the voltage by $90^\circ$ ($\pi/2$ radians) in a purely capacitive AC circuit.**

Equivalently, the voltage **lags** the current by $90^\circ$.

### Phasor Diagram

In a phasor diagram, the current phasor $I$ is drawn $90^\circ$ ahead (counter-clockwise) of the voltage phasor $V$.

<CaptionedImage src="kg24y1tzmnjken6xagkfb7rat588b1ch" alt="Pasted image" caption="Phasor Diagram" />

---

## 3. Capacitive Reactance ($X_C$)

The **capacitive reactance** is the opposition offered by a capacitor to the flow of alternating current. It is defined as:

$$X_C = \frac{V_0}{I_0} = \frac{V_{\text{rms}}}{I_{\text{rms}}}$$

Substituting $I_0 = \omega C V_0$:

$$\boxed{X_C = \frac{1}{\omega C} = \frac{1}{2\pi f C}}$$

**SI Unit:** Ohm ($\Omega$), the same as resistance.

---

## 4. Effect of Frequency on $X_C$

Since $X_C = \dfrac{1}{2\pi f C}$, capacitive reactance is **inversely proportional** to frequency:

$$X_C \propto \frac{1}{f}$$

| Frequency | $X_C$ | Effect |
|---|---|---|
| $f = 0$ (D.C.) | $X_C \to \infty$ | Capacitor blocks D.C. completely |
| Low $f$ | Large $X_C$ | Little current flows |
| High $f$ | Small $X_C$ | Current flows easily |

> **A capacitor blocks D.C. but passes A.C.**, and the higher the frequency, the more easily it passes.

---

## 5. Power in a Purely Capacitive Circuit

The instantaneous power is:

$$P = VI = V_0 \sin(\omega t) \cdot I_0 \cos(\omega t) = \frac{V_0 I_0}{2} \sin(2\omega t)$$

The average value of $\sin(2\omega t)$ over a complete cycle is **zero**, therefore:

$$\boxed{P_{\text{avg}} = 0}$$

This can also be seen from the power factor:

$$P = V_{\text{rms}}\, I_{\text{rms}} \cos\theta = V_{\text{rms}}\, I_{\text{rms}} \cos(90^\circ) = 0$$

During one quarter-cycle the capacitor **stores** energy (charges up), and during the next quarter-cycle it **returns** that energy to the source. No net energy is dissipated.

---

## Summary Table

| Property | Purely Capacitive Circuit |
|---|---|
| Phase of $I$ relative to $V$ | $I$ leads $V$ by $90^\circ$ |
| Reactance formula | $X_C = 1/(2\pi f C)$ |
| Effect of increasing $f$ | $X_C$ decreases |
| Average power | Zero |
| Power factor | $\cos 90^\circ = 0$ |


---

<!-- note kx7fd7gmpv2dkmhxxjrmw7346d85pg7b | topic ms79dgcz1dq2mq3ykf2xq9ed6d85qwh4 | status published -->
# Impedance in Series AC Circuits

When a resistor ($R$), inductor ($L$), and capacitor ($C$) are connected in **series** to an AC source, the total opposition to current flow is called **Impedance** ($Z$).

## 20.4.4.1 Reactances: A Quick Review

Before finding impedance, recall the individual reactances:

| Component | Opposition | Formula | Phase of $V$ w.r.t. $I$ |
|-----------|-----------|---------|------------------------|
| Resistor $R$ | Resistance | $R$ | In phase ($0°$) |
| Inductor $L$ | Inductive Reactance | $X_L = \omega L = 2\pi f L$ | Leads by $90°$ |
| Capacitor $C$ | Capacitive Reactance | $X_C = \dfrac{1}{\omega C} = \dfrac{1}{2\pi f C}$ | Lags by $90°$ |

All three have SI unit **Ohm ($\Omega$)**.

---

## 20.4.4.2 Phasor Diagram for a Series RLC Circuit

In a series circuit, the **current $I$** is the same through all components and is taken as the **reference phasor** (along the positive x-axis).

The voltage phasors are:
- $V_R = IR$: **in phase** with $I$ (along x-axis)
- $V_L = IX_L$: **leads** $I$ by $90°$ (along +y axis)
- $V_C = IX_C$: **lags** $I$ by $90°$ (along −y axis)

Since $V_L$ and $V_C$ are **anti-parallel** (180° apart), they partially cancel. The **resultant total voltage** is found by vector (phasor) addition:

$$V = \sqrt{V_R^2 + (V_L - V_C)^2}$$

---

## 20.4.4.3 Impedance Formula

Dividing the voltage equation by current $I$:

$$Z = \frac{V}{I} = \sqrt{R^2 + (X_L - X_C)^2}$$

**Impedance** $Z$ is the **vector sum** of resistance and net reactance. Its SI unit is **Ohm ($\Omega$)**.

> **Key Insight:** Impedance plays the same role in AC circuits as resistance does in DC circuits, relating the total voltage to the current via $V = IZ$.

---

## 20.4.4.4 Phase Angle

The angle $\phi$ between the total voltage $V$ and the current $I$ is:

$$\tan\phi = \frac{X_L - X_C}{R}$$

- If $X_L > X_C$: circuit is **inductive**, voltage **leads** current by $\phi$
- If $X_L < X_C$: circuit is **capacitive**, current **leads** voltage by $\phi$
- If $X_L = X_C$: **resonance**, $\phi = 0$, $Z = R$ (minimum impedance)

---

## 20.4.4.5 Worked Example

**Problem:** A series RLC circuit has $R = 6\,\Omega$, $L = 20\,\text{mH}$, $C = 50\,\mu\text{F}$, connected to a $100\,\text{V}$, $50\,\text{Hz}$ AC supply. Find $X_L$, $X_C$, $Z$, and the current $I$.

**Solution:**

$$X_L = 2\pi f L = 2\pi \times 50 \times 0.020 = 6.28\,\Omega$$

$$X_C = \frac{1}{2\pi f C} = \frac{1}{2\pi \times 50 \times 50 \times 10^{-6}} = 63.7\,\Omega$$

$$Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{6^2 + (6.28 - 63.7)^2} = \sqrt{36 + 3298} \approx 57.7\,\Omega$$

$$I = \frac{V}{Z} = \frac{100}{57.7} \approx 1.73\,\text{A}$$

---

## Summary

| Quantity | Formula |
|----------|--------|
| Inductive Reactance | $X_L = 2\pi f L$ |
| Capacitive Reactance | $X_C = \dfrac{1}{2\pi f C}$ |
| Impedance | $Z = \sqrt{R^2 + (X_L - X_C)^2}$ |
| Phase Angle | $\tan\phi = \dfrac{X_L - X_C}{R}$ |
| Ohm's Law (AC) | $V = IZ$ |
