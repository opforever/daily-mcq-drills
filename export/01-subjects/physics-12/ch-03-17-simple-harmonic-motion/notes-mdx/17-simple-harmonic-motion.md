<!-- note kx79navdg723p9fpe0mhdwjvj985pwtf | topic ms7cgqdr1t1k00dsk4t776arm985qjkp | status published -->
# 17.1 Oscillations

## What is Oscillatory Motion?

**Oscillatory (vibratory) motion** is the to-and-fro motion of a body about a fixed **mean (equilibrium) position**. The body repeatedly moves back and forth, passing through the mean position. Examples include:

- A simple pendulum swinging
- A mass attached to a spring
- A vibrating guitar string
- The prongs of a tuning fork

---

## Key Terms

### Displacement ($x$)
The instantaneous distance of the oscillating body from its mean (equilibrium) position. It is a vector quantity, measured in metres (m). Displacement can be positive or negative depending on the direction from the mean position.

### Amplitude ($x_0$ or $A$)
The **maximum displacement** of the body from its mean position. It is always positive and measured in metres (m). The amplitude determines the energy of the oscillation.

### Time Period ($T$)
The time taken for **one complete oscillation** (one full back-and-forth cycle). It is measured in seconds (s).

$$T = \frac{1}{f}$$

### Frequency ($f$)
The **number of complete oscillations per second**. It is measured in **Hertz (Hz)**, where 1 Hz = 1 oscillation per second.

$$f = \frac{1}{T}$$

### Angular Frequency ($\omega$)
Also called angular velocity, it relates frequency to the angle swept per unit time:

$$\omega = 2\pi f = \frac{2\pi}{T}$$

Angular frequency is measured in radians per second (rad/s).

### Phase ($\theta$)
The **phase** of an oscillating body at any instant $t$ is the angle:

$$\theta = \omega t$$

Phase specifies both the **displacement** and the **direction of motion** of the oscillating body at that instant. It describes the complete state of the oscillator. Phase is measured in radians.

---

## Simple Harmonic Motion (SHM)

**Simple Harmonic Motion** is a special type of oscillatory motion in which the **acceleration of the body is directly proportional to its displacement from the mean position and is always directed towards the mean position**:

$$a \propto -x \quad \Longrightarrow \quad a = -\omega^2 x$$

The negative sign indicates that acceleration always acts **opposite** to the direction of displacement: i.e., it is always a **restoring** acceleration directed towards the equilibrium position.

### Condition for SHM
A body executes SHM if and only if:
1. Its acceleration is proportional to its displacement from the mean position.
2. Its acceleration is always directed towards the mean position.

### Velocity and Acceleration in SHM

| Position | Displacement | Velocity | Acceleration |
|---|---|---|---|
| Mean position | $x = 0$ | Maximum: $v_{max} = \omega x_0$ | Zero |
| Extreme position | $x = \pm x_0$ | Zero | Maximum: $a_{max} = \omega^2 x_0$ |

At the mean position, $a = -\omega^2(0) = 0$ and velocity is maximum. At the extreme positions, velocity is zero and acceleration is maximum.

---

## Time Period of SHM

### Mass-Spring System
For a mass $m$ attached to a spring of spring constant $k$, the restoring force is $F = -kx$. Applying Newton's second law:

$$ma = -kx \quad \Rightarrow \quad a = -\frac{k}{m}x$$

Comparing with $a = -\omega^2 x$, we get $\omega^2 = \frac{k}{m}$, so:

$$T = 2\pi\sqrt{\frac{m}{k}}$$

- Increasing mass $m$ **increases** the time period.
- Increasing spring constant $k$ (stiffer spring) **decreases** the time period.
- The time period is **independent of amplitude** (for ideal SHM).

---

<!-- note kx7481sw3872chx9rpnmrnyrps85qzkd | topic ms716crma0whvn48a5q2va8f8n85qs0n | status published -->
# 17.2 Simple Harmonic Motion

## What is Simple Harmonic Motion?

**Simple Harmonic Motion (SHM)** is a special type of periodic (oscillatory) motion in which the acceleration of the body is:

1. **Directly proportional** to its displacement from the mean (equilibrium) position, and
2. **Always directed towards** the mean position (opposite to displacement).

Mathematically:

$$a \propto -x$$

The negative sign indicates that acceleration always acts in the direction opposite to displacement: it is a **restoring** acceleration.

---

## Restoring Force in a Mass-Spring System

Consider a mass $m$ attached to a spring of spring constant $k$, resting on a frictionless surface. When displaced by $x$ from equilibrium, **Hooke's Law** gives the restoring force:

$$F = -kx$$

Applying Newton's second law ($F = ma$):

$$ma = -kx$$

$$a = -\frac{k}{m}x$$

Since $k$ and $m$ are constants, this confirms $a \propto -x$, proving the mass-spring system executes SHM.

---

## The SHM Equation: $a = -\omega^2 x$

Comparing $a = -\dfrac{k}{m}x$ with the standard SHM equation:

$$\boxed{a = -\omega^2 x}$$

we identify:

$$\omega^2 = \frac{k}{m} \quad \Rightarrow \quad \omega = \sqrt{\frac{k}{m}}$$

where $\omega$ is the **angular frequency** (rad s⁻¹).

### Key values of acceleration in SHM:

| Position | Displacement $x$ | Acceleration $a$ |
|---|---|---|
| Mean position | $0$ | $0$ (minimum) |
| Extreme position | $\pm x_0$ (amplitude) | $\mp \omega^2 x_0$ (maximum) |

---

## Period of SHM

The **time period** $T$ is the time for one complete oscillation. Since $\omega = \dfrac{2\pi}{T}$:

$$T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{m}{k}}$$

$$\boxed{T = 2\pi\sqrt{\frac{m}{k}}}$$

**Key observations:**
- $T$ increases if mass $m$ increases (heavier object oscillates more slowly).
- $T$ decreases if spring constant $k$ increases (stiffer spring oscillates faster).
- $T$ is **independent of amplitude** (isochronous property).

<WorkedExample title="Worked Example">

**Problem:** A mass of $0.5\text{ kg}$ is attached to a spring with $k = 200\text{ N m}^{-1}$. Find (a) the angular frequency, (b) the period, and (c) the acceleration when $x = 0.05\text{ m}$.

**Solution:**

(a) $\omega = \sqrt{\dfrac{k}{m}} = \sqrt{\dfrac{200}{0.5}} = \sqrt{400} = 20\text{ rad s}^{-1}$

(b) $T = \dfrac{2\pi}{\omega} = \dfrac{2\pi}{20} \approx 0.314\text{ s}$

(c) $a = -\omega^2 x = -(20)^2 \times 0.05 = -400 \times 0.05 = -20\text{ m s}^{-2}$

The negative sign confirms the acceleration is directed back towards the mean position.

</WorkedExample>
---

## Summary

| Quantity | Formula |
|---|---|
| Condition for SHM | $a \propto -x$ |
| Acceleration | $a = -\omega^2 x$ |
| Angular frequency | $\omega = \sqrt{k/m}$ |
| Period | $T = 2\pi\sqrt{m/k}$ |
| Restoring force | $F = -kx$ |

---

<!-- note kx79hv6qyhh8yxj4w22bfca48985qs5z | topic ms702gy2mz473hv2sm8qh888k585phgv | status published -->
# Uniform Circular Motion and SHM

Simple Harmonic Motion (SHM) can be understood geometrically by analysing the projection of **Uniform Circular Motion (UCM)** onto a diameter.

## The Reference Circle

Consider a particle $P$ moving with constant speed around a circle of radius $x_0$ (the **reference circle**). The radius $x_0$ equals the **amplitude** of the corresponding SHM. If $P$ completes one revolution in time $T$, its **angular frequency** is:

$$\omega = \frac{2\pi}{T}$$

The projection of $P$ onto the x-axis (a diameter) moves back and forth between $-x_0$ and $+x_0$, executing SHM.

## Displacement

If at $t = 0$ the particle is at the rightmost point of the circle, the angle swept in time $t$ is $\theta = \omega t$. The x-projection gives the **instantaneous displacement**:

$$x = x_0 \cos(\omega t)$$

where $x_0$ is the amplitude and $\omega$ is the angular frequency.

## Velocity

The particle $P$ moves with tangential speed $v_0 = \omega x_0$. The x-component of this velocity gives the **instantaneous velocity** of the SHM projection:

$$v = -v_0 \sin(\omega t) = -\omega x_0 \sin(\omega t)$$

This can also be written as:

$$v = v_0 \cos\!\left(\omega t + \frac{\pi}{2}\right)$$

In terms of displacement $x$, using $\sin^2(\omega t) + \cos^2(\omega t) = 1$:

$$v = \pm\,\omega\sqrt{x_0^2 - x^2}$$

**Extreme values of velocity:**
- At the **mean position** ($x = 0$): $v = \pm\,\omega x_0$ (maximum)
- At the **extreme positions** ($x = \pm x_0$): $v = 0$

## Acceleration

The centripetal acceleration of $P$ points toward the centre of the circle with magnitude $\omega^2 x_0$. Its x-component gives the **instantaneous acceleration** of the SHM projection:

$$a = -\omega^2 x_0 \cos(\omega t) = -\omega^2 x$$

The negative sign confirms that acceleration is always directed toward the mean position (restoring in nature).

**Extreme values of acceleration:**
- At the **mean position** ($x = 0$): $a = 0$
- At the **extreme positions** ($x = \pm x_0$): $|a| = \omega^2 x_0$ (maximum)

## Summary Table

| Quantity | At Mean Position ($x=0$) | At Extreme ($x=\pm x_0$) |
|---|---|---|
| Displacement $x$ | 0 | $\pm x_0$ |
| Velocity $v$ | $\pm\omega x_0$ (max) | 0 |
| Acceleration $a$ | 0 | $\mp\omega^2 x_0$ (max magnitude) |

## Key Equations

$$x = x_0 \cos(\omega t)$$
$$v = v_0 \cos(\omega t) \quad \text{(where } v_0 = \omega x_0\text{, starting from extreme)}$$
$$v = \pm\,\omega\sqrt{x_0^2 - x^2}$$
$$a = -\omega^2 x$$

---

<!-- note kx73gbqgy8kyd5zp8pnns2m38185p4xg | topic ms703ea1bwtvtpshxn4hfak0sx85q79f | status published -->
# 17.4 Phase

## What is Phase?

**Phase** is the angle $\theta = \omega t$ that describes the complete state of an oscillating quantity at any given instant. It tells us:
- The **instantaneous displacement** of the oscillator from its mean position.
- The **direction of motion** (whether moving toward or away from the mean position).

Phase is measured in **radians**.

For a particle executing SHM, the displacement is:
$x = x_0 \cos(\omega t)$
Here, $\omega t$ is the phase at time $t$.

---

## Initial Phase (Phase Constant)

In the general SHM equation:
$x = x_0 \cos(\omega t + \varphi)$
the quantity $(\omega t + \varphi)$ is the **phase** at time $t$, and $\varphi$ is the **initial phase** (or **phase constant**).

$\varphi$ is the value of the phase at $t = 0$. It sets the starting condition of the oscillator:

| Initial Phase $\varphi$ | Starting Position |
|---|---|
| $0$ | Positive extreme: $x = x_0$ |
| $90^\circ$ ($\pi/2$) | Mean position: $x = 0$, moving in negative direction |
| $180^\circ$ ($\pi$) | Negative extreme: $x = -x_0$ |

---

## Phase Difference

When two oscillating quantities of the **same frequency** are compared, the **phase difference** $\Delta\phi$ is the constant angle by which one leads or lags the other.

Given:
$A = A_0 \sin(\omega t + \phi_1), \quad B = B_0 \sin(\omega t + \phi_2)$

Phase difference: $\Delta\phi = \phi_1 - \phi_2$

- If $\Delta\phi > 0$: $A$ **leads** $B$
- If $\Delta\phi < 0$: $A$ **lags** $B$
- If $\Delta\phi = 0$: $A$ and $B$ are **in phase**
- If $\Delta\phi = 180^\circ$: $A$ and $B$ are **in antiphase** (out of phase)

---

## Phase Lead and Phase Lag

A quantity **leads** another if it reaches its peak value **earlier** in time.
A quantity **lags** another if it reaches its peak value **later** in time.

**Example:** If $V = V_0 \cos(\omega t + \phi)$ and $I = I_0 \cos(\omega t)$, then:
- Voltage **leads** current by angle $\phi$
- Current **lags** voltage by angle $\phi$

---

## Phasors

A **phasor** is a rotating vector used to represent a sinusoidal quantity graphically.

| Property | Meaning |
|---|---|
| **Length** of phasor | Peak (amplitude) value: $V_0$ or $I_0$ |
| **Angular position** | Phase angle at that instant: $\omega t + \varphi$ |
| **Projection** on reference axis | Instantaneous value of the quantity |
| **Direction of rotation** | Counter-clockwise (anti-clockwise) with angular velocity $\omega$ |

Phasor diagrams make it easy to add two AC quantities of the same frequency by vector addition.

---

## Phase in Purely Resistive AC Circuits

In a circuit containing **only resistance**, voltage and current are **in phase**:
$\phi = 0^\circ$
Both reach their maximum and minimum values at exactly the same instant.

$V = V_0 \sin(\omega t), \quad I = I_0 \sin(\omega t)$

---

## Summary of Key Terms

| Term | Symbol | Definition |
|---|---|---|
| Displacement | $x$ | Instantaneous distance from mean position |
| Amplitude | $x_0$ | Maximum displacement |
| Period | $T$ | Time for one complete oscillation |
| Frequency | $f$ | Number of oscillations per second; $f = 1/T$ |
| Angular frequency | $\omega$ | $\omega = 2\pi f$ (rad s⁻¹) |
| Phase | $\theta$ | $\theta = \omega t$; specifies state of oscillator |
| Initial phase | $\varphi$ | Phase at $t = 0$ |

---

<!-- note kx73ctx24xgtm9x63504t1enh585qrv7 | topic ms71mbag8mn0rg24cef1mf0vbs85p18h | status published -->
# 17.5 SHM Graphs: Displacement, Velocity, and Acceleration

## Equations of Motion in SHM

If a particle starts from the mean position at $t = 0$, its displacement is given by:

$x = x_0 \sin(\omega t)$

Differentiating with respect to time gives the velocity:

$v = \frac{dx}{dt} = x_0 \omega \cos(\omega t)$

This can also be written as:

$v = v_0 \cos(\omega t)$

where $v_0 = x_0 \omega$ is the maximum (peak) velocity.

Differentiating velocity gives the acceleration:

$a = \frac{dv}{dt} = -x_0 \omega^2 \sin(\omega t) = -\omega^2 x$

## Graphical Representations

### Displacement–Time Graph

- Shape: **sine curve** (if starting from mean position)
- Amplitude: $x_0$
- The curve crosses zero at $t = 0,\ T/2,\ T$
- Maximum at $t = T/4$, minimum at $t = 3T/4$

### Velocity–Time Graph

- Shape: **cosine curve**
- Amplitude: $v_0 = \omega x_0$
- Velocity **leads displacement by $\pi/2$ radians ($90°$)**
- Maximum velocity occurs at the mean position ($x = 0$)
- Zero velocity at extreme positions ($x = \pm x_0$)

### Acceleration–Time Graph

- Shape: **negative sine curve**
- Amplitude: $a_0 = \omega^2 x_0$
- Acceleration is in **anti-phase with displacement** (phase difference = $\pi$ radians = $180°$)
- Maximum magnitude of acceleration at extreme positions
- Zero acceleration at the mean position

## Phase Relationships Summary

| Quantity | Equation | Phase relative to $x$ |
|---|---|---|
| Displacement | $x = x_0 \sin(\omega t)$ | Reference (0) |
| Velocity | $v = x_0 \omega \cos(\omega t)$ | Leads by $\pi/2$ |
| Acceleration | $a = -x_0 \omega^2 \sin(\omega t)$ | Leads by $\pi$ (anti-phase) |

## Velocity as a Function of Displacement

Using the identity $\sin^2(\omega t) + \cos^2(\omega t) = 1$:

$v = \pm \omega \sqrt{x_0^2 - x^2}$

This formula gives the instantaneous speed at any displacement $x$:
- At $x = 0$: $v = \omega x_0$ (maximum)
- At $x = \pm x_0$: $v = 0$ (extreme positions)

## Acceleration Using $a = -\omega^2 x$

The defining equation of SHM relates acceleration directly to displacement:

$a = -\omega^2 x$

This means:
- Acceleration is always **directed towards the mean position** (negative sign)
- Maximum acceleration: $a_{max} = \omega^2 x_0$ at $x = \pm x_0$
- Zero acceleration at $x = 0$

## Gradient Relationships

- The **gradient of the $x$–$t$ graph** at any instant equals the instantaneous **velocity** at that time.
- The **gradient of the $v$–$t$ graph** at any instant equals the instantaneous **acceleration** at that time.
- The steepest slope on the $x$–$t$ graph occurs at the mean position, confirming maximum velocity there.

## Key Values at Special Positions

| Position | $x$ | $v$ | $a$ |
|---|---|---|---|
| Mean position | $0$ | $\omega x_0$ (max) | $0$ |
| Extreme position | $\pm x_0$ | $0$ | $\mp \omega^2 x_0$ (max magnitude) |

---

<!-- note kx702f7exhhetg5mgnj58g5mbn85q049 | topic ms7aj7tah6d0qqqvxaryas8qhd85pfz2 | status published -->
# 17.6 Simple Pendulum

## What is a Simple Pendulum?

An **ideal simple pendulum** consists of a heavy point mass (called the **bob**) suspended from a rigid, frictionless support by a **weightless, inextensible string** of length $l$. When displaced from its equilibrium position and released, it oscillates back and forth.

## Restoring Force and SHM Condition

Consider a bob of mass $m$ displaced through a small angle $\theta$ from the vertical equilibrium position.

The forces acting on the bob are:
- Tension $T$ along the string
- Weight $mg$ vertically downward

The **tangential component** of weight acts as the restoring force, directed back toward the equilibrium:

$$F = -mg\sin\theta$$

The negative sign indicates the force opposes the displacement.

### Small Angle Approximation

For **small angles** ($\theta < 10°$), $\sin\theta \approx \theta$ (in radians), so:

$$F \approx -mg\theta$$

Since the arc length $s = l\theta$, we have $\theta = s/l$, giving:

$$F = -\frac{mg}{l}\cdot s$$

This shows that the restoring force is **directly proportional to the displacement** $s$ and directed toward the mean position: the defining condition for **Simple Harmonic Motion (SHM)**.

## Acceleration in SHM

Applying Newton's second law ($F = ma$):

$$ma = -\frac{mg}{l}\cdot s$$

$$a = -\frac{g}{l}\cdot s$$

Comparing with the standard SHM equation $a = -\omega^2 x$:

$$\omega^2 = \frac{g}{l}$$

$$\omega = \sqrt{\frac{g}{l}}$$

This confirms the pendulum executes SHM (for small angles) with $a \propto -x$.

## Time Period of a Simple Pendulum

Using $\omega = 2\pi/T$:

$$\frac{2\pi}{T} = \sqrt{\frac{g}{l}}$$

$$\boxed{T = 2\pi\sqrt{\frac{l}{g}}}$$

where:
- $T$ = time period (s)
- $l$ = length of the pendulum (m)
- $g$ = acceleration due to gravity (m s$^{-2}$)

### Key Observations

| Factor | Effect on $T$ |
|---|---|
| Length $l$ increases | $T$ increases ($T \propto \sqrt{l}$) |
| Gravity $g$ increases | $T$ decreases ($T \propto 1/\sqrt{g}$) |
| Mass of bob | **No effect** (mass cancels out) |
| Amplitude (small) | **No effect** (valid for $\theta < 10°$) |

<WorkedExample title="Worked Example">

**Problem:** A simple pendulum has a length of 1.0 m. Calculate its time period on Earth where $g = 9.8$ m s$^{-2}$.

**Solution:**

$$T = 2\pi\sqrt{\frac{l}{g}} = 2\pi\sqrt{\frac{1.0}{9.8}} = 2\pi \times 0.319 \approx 2.0 \text{ s}$$

</WorkedExample>
## Seconds Pendulum

A **seconds pendulum** is a pendulum with a time period of exactly **2 seconds** (it takes 1 second to swing from one side to the other: one beat).

Its length on Earth ($g = 9.8$ m s$^{-2}$):

$$l = \frac{gT^2}{4\pi^2} = \frac{9.8 \times 4}{4\pi^2} \approx 0.99 \text{ m} \approx 1 \text{ m}$$

## Using $a = -\omega^2 x$ for the Pendulum

For a simple pendulum, $\omega = \sqrt{g/l}$, so:

$$a = -\omega^2 x = -\frac{g}{l}\cdot x$$

**Example:** A pendulum of length 0.25 m is displaced 0.02 m from equilibrium. Find the acceleration.

$$\omega^2 = \frac{g}{l} = \frac{9.8}{0.25} = 39.2 \text{ rad}^2\text{s}^{-2}$$

$$a = -39.2 \times 0.02 = -0.784 \text{ m s}^{-2}$$

The negative sign confirms the acceleration is directed toward the equilibrium position.

---

<!-- note kx79chxbc41kjypz6q5t6gh1dn85q2bn | topic ms72h7b0zce1h6kbah4ewra76x85prbr | status published -->
# 17.7 Energy Conservation in SHM

## Potential Energy in SHM

For a mass-spring system, the elastic potential energy stored when the mass is at displacement $x$ from the mean position is:

$P.E. = \frac{1}{2} k x^2$

**Key observations:**
- At the **mean position** ($x = 0$): $P.E. = 0$ (minimum)
- At the **extreme positions** ($x = \pm x_0$): $P.E. = \frac{1}{2} k x_0^2$ (maximum)

The P.E. varies as the **square of displacement**, so its graph against $x$ is a **parabola opening upwards**.

---

## Kinetic Energy in SHM

The instantaneous velocity at displacement $x$ is:

$v = \omega\sqrt{x_0^2 - x^2}$

Substituting into $K.E. = \frac{1}{2}mv^2$ and using $k = m\omega^2$:

$K.E. = \frac{1}{2}m\omega^2(x_0^2 - x^2) = \frac{1}{2}k(x_0^2 - x^2)$

**Key observations:**
- At the **mean position** ($x = 0$): $K.E. = \frac{1}{2}kx_0^2$ (maximum)
- At the **extreme positions** ($x = \pm x_0$): $K.E. = 0$ (minimum)

The K.E. graph against $x$ is a **downward-opening parabola**.

---

## Total Mechanical Energy

Adding P.E. and K.E. at any displacement $x$:

$E_{total} = K.E. + P.E. = \frac{1}{2}k(x_0^2 - x^2) + \frac{1}{2}kx^2$

$\boxed{E_{total} = \frac{1}{2}kx_0^2 = \frac{1}{2}m\omega^2 x_0^2}$

This result is **independent of displacement**: the total energy depends only on the **spring constant** $k$, the **mass** $m$, the **angular frequency** $\omega$, and the **amplitude** $x_0$.

> **Important:** Since $E_{total} \propto x_0^2$, doubling the amplitude **quadruples** the total energy.

---

## Energy Interchange During SHM

| Position | K.E. | P.E. | Total E |
|---|---|---|---|
| Mean position ($x = 0$) | Maximum $= \frac{1}{2}kx_0^2$ | Zero | $\frac{1}{2}kx_0^2$ |
| Extreme position ($x = \pm x_0$) | Zero | Maximum $= \frac{1}{2}kx_0^2$ | $\frac{1}{2}kx_0^2$ |
| $x = x_0/\sqrt{2}$ | $\frac{1}{4}kx_0^2$ | $\frac{1}{4}kx_0^2$ | $\frac{1}{2}kx_0^2$ |

At $x = x_0/\sqrt{2}$, the kinetic and potential energies are **equal**, each equal to half the total energy.

---

## Conservation of Energy (No Dissipation)

In the absence of friction or air resistance, no energy is lost. The total mechanical energy remains constant:

$E_{total} = K.E. + P.E. = \text{constant} = \frac{1}{2}kx_0^2$

In real systems, resistive forces cause **damping**, gradually reducing the amplitude and total energy over time.

---

<!-- note kx73vaj9tnnjmffjesywcwff4185q6nj | topic ms78je1qnxfp51tpby5vxfj4zx85q3c4 | status published -->
# 17.8 Free, Forced and Damped Oscillations

## Free Oscillations

A system undergoes **free oscillations** when it is displaced from its equilibrium position and then left to vibrate under the action of its own **restoring force alone**, with no external driving force and no energy loss.

### Natural Frequency

Every oscillating system has a characteristic **natural frequency**: the frequency at which it vibrates freely when disturbed. The natural frequency depends on the physical properties of the system:

- For a **simple pendulum**: $f = \frac{1}{2\pi}\sqrt{\frac{g}{l}}$: depends on length $l$ and gravitational field strength $g$, **not** on the mass of the bob or the amplitude (for small angles).
- For a **mass–spring system**: $f = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$: depends on spring constant $k$ and mass $m$.

In an ideal (frictionless) free oscillation the amplitude and period remain **constant indefinitely**.

### Practical Examples of Free Oscillations

| System | What determines natural frequency |
|---|---|
| Simple pendulum displaced and released | Length $l$ and local $g$ |
| Plucked guitar string | Length, tension, and mass per unit length |
| Tuning fork struck once | Shape and material of the fork |

---

## Forced Oscillations

**Forced oscillations** occur when an external **periodic driving force** is continuously applied to an oscillator, compelling it to vibrate at the **driving frequency** rather than its own natural frequency.

- The external force must continuously supply energy to **counteract energy losses** due to resistive forces (friction, air resistance) and maintain a steady amplitude.
- If the driving frequency equals the natural frequency, **resonance** occurs and the amplitude becomes very large (see Topic 17.9).

### Practical Examples of Forced Oscillations

1. **Child on a swing**: periodic pushes by an external agent supply energy at the driving frequency to maintain oscillation.
2. **Pendulum of a clock**: a small motor provides a periodic driving force to counteract energy losses and keep the pendulum swinging at a controlled frequency.
3. **Loudspeaker cone**: an alternating electrical signal drives the cone to oscillate at the signal frequency.

---

## Damped Oscillations

### What is Damping?

In any real oscillating system, **resistive forces** (friction, air resistance, viscous drag) oppose the motion and dissipate the system's mechanical energy: usually as **heat**. This causes the amplitude to **decrease progressively over time**. Such oscillations are called **damped oscillations**.

> A **damping force** is a resistive force that opposes the velocity of the oscillator, causing it to lose energy and reducing its amplitude with each successive oscillation.

### Types of Damping

Depending on the magnitude of the resistive force, three types of damping are distinguished:

#### 1. Light Damping
- The resistive force is **small**.
- The system completes **many oscillations** before coming to rest.
- Amplitude decreases **gradually** (exponentially) with each cycle.
- The frequency of oscillation is approximately equal to the natural frequency.
- **Example:** A playground swing gradually slowing down after a single push; a lightly damped pendulum.

#### 2. Critical Damping
- The resistive force has a **specific value** that causes the system to return to equilibrium in the **shortest possible time without oscillating**.
- It is the boundary case between light and heavy damping.
- **Example:** Car shock absorbers; door closers that shut quickly without slamming.

#### 3. Heavy Damping
- The resistive force is **very large**.
- The object returns to equilibrium **very slowly** without completing even a single oscillation.
- **Example:** A mass oscillating in a thick viscous liquid (e.g., oil or treacle).

### Displacement–Time Graphs for Damping

- **Light damping:** sinusoidal oscillation with an exponentially decaying envelope.
- **Critical damping:** smooth exponential return to zero: no oscillation.
- **Heavy damping:** very slow, asymptotic return to zero: no oscillation, slower than critical.

---

## Practical Examples of Damped Oscillations

### Car Suspension System

A car's suspension consists of **springs** (which absorb road bumps) and **shock absorbers** (fluid-filled tubes that provide damping).

- Without damping, the springs would cause the car to bounce repeatedly after every bump: **light damping**.
- Shock absorbers are designed to provide **critical damping**: the car returns to its normal ride height in the shortest possible time **without bouncing**.
- This maximises passenger comfort and maintains tyre contact with the road for safe handling.
- **Heavy damping** would make the ride uncomfortably stiff and slow to respond.

### Other Practical Examples

| Application | Type of damping | Purpose |
|---|---|---|
| Car shock absorbers | Critical | Quickest return to equilibrium, no bounce |
| Door dampers (hydraulic closers) | Critical/heavy | Prevent door slamming |
| Galvanometer needle | Critical | Needle settles quickly to correct reading |
| Playground swing | Light | Gradual energy loss over many swings |
| Mass in viscous oil | Heavy | Very slow return, no oscillation |

---

<!-- note kx708j7rb1waarkkemsdvbmg3585p0cj | topic ms7cpgw18pmv5td7fwg41xane585qy2m | status published -->
# 17.9 Resonance

## What is Resonance?

Every oscillating system has a **natural frequency** ($f_0$): the frequency at which it oscillates freely when displaced and released. When an external periodic driving force is applied at exactly this natural frequency, the system absorbs energy most efficiently and the amplitude of oscillation builds up to a **maximum**. This phenomenon is called **resonance**.

> **Resonance** occurs when the frequency of the applied driving force equals the natural frequency of the system, resulting in maximum amplitude of oscillation.

## Condition for Resonance

$$f_{\text{drive}} = f_0$$

At resonance:
- The driving force continuously transfers energy to the oscillator in phase with its motion.
- Amplitude reaches its maximum value (limited only by damping).
- In an ideal (undamped) system, amplitude would grow without limit.

## Sharpness of Resonance (Frequency Response)

The **sharpness** of a resonance peak describes how rapidly the amplitude falls off as the driving frequency moves away from $f_0$.

### Factors Affecting Sharpness

| Factor | Effect on Resonance Peak |
|---|---|
| **Low damping** | Sharp, tall, narrow peak: high amplitude at $f_0$ |
| **High damping** | Broad, flat, short peak: lower amplitude at $f_0$ |

- A **lightly damped** system has a **sharp resonance**: it responds strongly only to frequencies very close to $f_0$.
- A **heavily damped** system has a **broad resonance**: it responds to a wider range of frequencies but with lower maximum amplitude.

The **quality factor (Q-factor)** is a qualitative measure of sharpness:
- High Q → sharp resonance, low energy loss per cycle.
- Low Q → broad resonance, high energy loss per cycle.

## Practical Examples of Resonance

### Where Resonance is Useful

**1. Radio tuning**

A radio receiver contains an LC circuit whose natural frequency can be adjusted. When its response is strongest at a broadcast frequency, that station is selected while other frequencies give a smaller response.

**2. Microwave ovens**

Microwave heating is mainly due to dielectric loss: the alternating electric field drives molecular rotation and other polarization processes in food. It is not accurately explained as microwaves being tuned to one fixed natural frequency of water molecules.

**3. Musical instruments**

Strings, air columns, and resonating chambers are designed so that resonance amplifies specific frequencies to produce musical notes.

### Where Resonance Must Be Avoided

**1. Bridges (Tacoma Narrows, 1940)**

The Tacoma Narrows Bridge failure involved wind-driven **aeroelastic flutter** and coupled torsional motion. It is a warning about wind-structure dynamics, but it should not be reduced to the claim that vortex frequency simply matched one natural frequency.

**2. Buildings in Earthquakes**

If seismic forcing lies near a building mode, resonance can increase structural motion. Engineers use damping and structural design to reduce this risk.

**3. Aircraft engines**

Engine vibrations must not excite damaging structural modes of wings or the fuselage.
## Summary Table

| Situation | Resonance Effect | Desired Outcome |
|---|---|---|
| Radio tuning | Maximum signal amplitude at $f_0$ | Useful: select one station |
| Bridge in wind | Growing oscillation amplitude | Dangerous: must be avoided |
| Microwave oven | Maximum energy absorption by water | Useful: efficient heating |
| Car suspension | Road vibrations at natural frequency | Dangerous: critical damping used |