<!-- note kx7b3kc9sserthsnt158r8zb2s85q7eq | topic ms7dqzy99xyw5pewhx1g27sx5x85qrte | status published -->
# Newton's Law of Universal Gravitation

Newton's law of universal gravitation describes the attractive force between every pair of masses.

## Statement and Mathematical Form

Every object in the universe attracts every other object with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between their centres.

$$F = \frac{Gm_1m_2}{r^2}$$

where $F$ is the gravitational force, $m_1$ and $m_2$ are the masses, $r$ is the distance between their centres, and $G = 6.67 \times 10^{-11}\ \mathrm{N\,m^2\,kg^{-2}}$.

## Vector Form and Direction

$$\vec{F}_{21} = -\frac{Gm_1m_2}{r^2}\hat{r}_{12}$$

Here $\hat{r}_{12}$ points from $m_1$ to $m_2$. The negative sign shows that gravity is attractive, so the force acts toward the source mass. Newton's third law gives equal and opposite forces:

$$\vec{F}_{12} = -\vec{F}_{21}$$

## Universal Gravitational Constant

| Property | Value |
|---|---|
| Symbol | $G$ |
| Value | $6.67 \times 10^{-11}\ \mathrm{N\,m^2\,kg^{-2}}$ |
| SI units | $\mathrm{N\,m^2\,kg^{-2}}$ |
| Dimensions | $[M^{-1}L^3T^{-2}]$ |
| First measured by | Henry Cavendish in 1798 using a torsion balance |

Cavendish measured $G$ about a century after Newton proposed the law.

## Why the Law Is Universal

The law applies to every pair of objects, regardless of their size, composition, or location. It governs interactions ranging from objects on Earth to planets, stars, and galaxies.

## Inverse-Square Relationship

Because $F \propto 1/r^2$:

| Change in distance | Effect on force |
|---|---|
| $r \to 2r$ | $F$ becomes $F/4$ |
| $r \to r/2$ | $F$ becomes $4F$ |
| $r \to 3r$ | $F$ becomes $F/9$ |

<WorkedExample title="Worked Example">

**Problem:** Calculate the gravitational force between Earth ($m_E = 5.97 \times 10^{24}\ \mathrm{kg}$) and the Moon ($m_M = 7.35 \times 10^{22}\ \mathrm{kg}$), separated by $3.84 \times 10^8\ \mathrm{m}$.

**Solution:**

$$F = \frac{(6.67 \times 10^{-11})(5.97 \times 10^{24})(7.35 \times 10^{22})}{(3.84 \times 10^8)^2}$$

$$F \approx 1.98 \times 10^{20}\ \mathrm{N}$$

This attractive force keeps the Moon in orbit around Earth.

</WorkedExample>

---

<!-- note kx78gjnn70a5gca2sdnvdp758n85p903 | topic ms789qctbtvpzbad9zkpwxdhyh85qnjg | status published -->
# 15.2 Gravitational Field Strength

A gravitational field surrounds every mass. Another mass placed in this region experiences an attractive gravitational force.

## Definition of Gravitational Field Strength

The gravitational field strength $g$ at a point is the gravitational force per unit mass acting on a small test mass:

$g = \frac{F_g}{m}$

where $F_g$ is gravitational force and $m$ is the test mass.

- $g$ is a vector directed radially inward toward the source mass.
- Its SI units are $\mathrm{N\,kg^{-1}}$ or, equivalently, $\mathrm{m\,s^{-2}}$.

## Gravitational Field Lines

Field lines represent the direction and relative strength of a gravitational field:

- They point radially inward toward the source mass.
- A greater density of lines represents a stronger field.
- The lines spread farther apart as distance from the mass increases.
- Around a uniform spherical mass, the pattern is radially symmetric.

## Derivation at Distance $r$

For a test mass $m$ at distance $r$ from a source mass $M$, Newton's law gives:

$F_g = \frac{GMm}{r^2}$

Substitution into $g = F_g/m$ gives:

$\boxed{g = \frac{GM}{r^2}}$

Thus, $g$ depends on the source mass and distance, not on the test mass. At Earth's surface:

$g_s = \frac{GM_E}{R_E^2} \approx 9.8\ \mathrm{m\,s^{-2}}$

## Why $g$ Is Approximately Constant Near Earth

At height $h$ above Earth, $r = R_E + h$ and:

$g_h = \frac{GM_E}{(R_E+h)^2} = g_s\frac{1}{\left(1+\dfrac{h}{R_E}\right)^2}$

For $h \ll R_E$, the binomial approximation gives:

$g_h \approx g_s\left(1-\frac{2h}{R_E}\right)$

The fractional decrease is approximately $2h/R_E$. Because $R_E \approx 6.4 \times 10^6\ \mathrm{m}$, even at $h=10\ \mathrm{km}$ the change is only about $0.3\%$. Therefore, $g \approx 9.8\ \mathrm{m\,s^{-2}}$ is a good approximation for everyday motion near Earth's surface.

## Summary Table

| Quantity | Formula | Units |
|---|---|---|
| Field strength by definition | $g=F_g/m$ | $\mathrm{N\,kg^{-1}}$ |
| Field strength at distance $r$ | $g=GM/r^2$ | $\mathrm{m\,s^{-2}}$ |
| Earth's surface field strength | $g_s=GM_E/R_E^2$ | approximately $9.8\ \mathrm{m\,s^{-2}}$ |

---

<!-- note kx72ez5zm02246a7757d0k0s0585qqb9 | topic ms7fgqjrh77pcb08pr0qj7zzcx85qx0b | status published -->
# 15.3 Satellites and Orbits

## What is a Satellite?

A **satellite** is any object that orbits a larger body under the influence of gravity. Natural satellites include the Moon; artificial satellites are human-made objects placed in orbit for communication, navigation, weather monitoring, and scientific research.

<CaptionedImage src="kg20t6h59kn0r7ar2cekd0m89188ac3r" alt="Orbital motion" caption="Orbital Motion" />

---

## Circular Orbital Motion

For a satellite of mass $m$ moving in a circular orbit of radius $r$ around Earth (mass $M_E$), the gravitational force provides the centripetal force:

$$F_g = F_c$$

$$\frac{GM_E m}{r^2} = \frac{mv^2}{r}$$

Solving for orbital velocity $v_o$:

$$\boxed{v_o = \sqrt{\frac{GM_E}{r}}}$$

where $r = R_E + h$ is the orbital radius (Earth's radius $R_E$ plus altitude $h$).

Since $g = \frac{GM_E}{r^2}$, this can also be written as:

$$v_o = \sqrt{gr}$$

where $g$ is the gravitational field strength at the orbital radius.

### Key Relationship: Speed vs. Orbital Radius

Since $v_o \propto \frac{1}{\sqrt{r}}$, **higher satellites move slower**. Doubling the orbital radius reduces orbital speed by a factor of $\sqrt{2}$.

---

## Orbital Period

Using the circumference of the orbit $2\pi r$ and orbital speed $v_o$:

$$T = \frac{2\pi r}{v_o} = \frac{2\pi r}{\sqrt{GM_E/r}} = 2\pi\sqrt{\frac{r^3}{GM_E}}$$

This is consistent with **Kepler's Third Law**: $T^2 \propto r^3$.

---

## Types of Satellite Orbits

| Orbit Type | Description |
|---|---|
| **Equatorial** | Lies in the plane of Earth's equator |
| **Inclined** | At an angle to the equatorial plane |
| **Polar** | Passes over Earth's poles; useful for full-surface coverage |
| **Geostationary** | Equatorial orbit with $T = 24$ h; satellite appears stationary |

---

## Effect of Launch Speed

After insertion at a particular position, the path depends on tangential speed **relative to the circular-orbit speed at that position**:

- **Below local circular speed:** the path is generally an ellipse whose low point may intersect Earth; it is not automatically a simple fall straight down.
- **At local circular speed:** the path is circular.
- **Above local circular speed but below escape speed:** the path is an ellipse.
- **At or above local escape speed:** an unpowered object can follow an unbound trajectory and escape Earth.

A real launch also requires a trajectory from the launch site to the chosen orbit. This comparison describes the speed at the intended orbital position, not every stage of a launch.
## Geostationary Satellites

A **geostationary satellite** orbits Earth with the same angular velocity as Earth's rotation, so it appears **stationary** above a fixed point on the equator.

### Conditions for a Geostationary Orbit

1. **Orbital period** $T = 24$ hours (one sidereal day ≈ 23 h 56 min, but 24 h is used in FBISE)
2. **Orbital plane** must be in the **equatorial plane** (inclination = 0°)
3. **Direction of rotation** must be the same as Earth's rotation (**west to east**)

### Calculating the Geostationary Orbital Radius

Setting $T = 24\ \mathrm{h} = 86{,}400\ \mathrm{s}$ in the period formula:

$$T = 2\pi\sqrt{\frac{r^3}{GM_E}}$$

$$r^3 = \frac{GM_E T^2}{4\pi^2}$$

$$r = \left(\frac{GM_E T^2}{4\pi^2}\right)^{1/3}$$

Substituting $G = 6.67 \times 10^{-11}\ \mathrm{N\ m^2\ kg^{-2}}$, $M_E = 5.97 \times 10^{24}\ \mathrm{kg}$:

$$r \approx 4.23 \times 10^7\ \mathrm{m} = 42{,}300\ \mathrm{km}$$

Since $R_E \approx 6{,}400\ \mathrm{km}$, the **altitude above Earth's surface** is:

$$h = r - R_E \approx 42{,}300 - 6{,}400 = 35{,}900\ \mathrm{km} \approx 36{,}000\ \mathrm{km}$$

### Orbital Velocity of a Geostationary Satellite

$$v_o = \frac{2\pi r}{T} = \frac{2\pi \times 4.23 \times 10^7}{86{,}400} \approx 3.07\ \mathrm{km\ s^{-1}} \approx 3.1\ \mathrm{km\ s^{-1}}$$

### Applications

Geostationary satellites are used for:
- **Television broadcasting** and telecommunications
- **Weather monitoring** (e.g., Meteosat)
- **GPS augmentation** systems

### Limitation

A geostationary satellite **cannot** be placed directly over the poles because the orbit must lie in the equatorial plane. Polar regions are served by satellites in inclined or polar orbits.


---

<!-- note kx7cwhayyqnnjtntt5q06wbpn185pdzx | topic ms7d1ja3gj5w48k5ajg5fnc9r585pfaf | status published -->
# Geostationary Satellites

A **geostationary satellite** is an artificial satellite that orbits Earth in a circular path directly above the equator such that it appears **stationary** relative to a fixed point on Earth's surface. This is achieved because the satellite's orbital period exactly matches Earth's rotational period.

---

## Conditions for a Geostationary Orbit

For a satellite to be geostationary, these conditions must be satisfied simultaneously:

1. **Circular orbit:** the orbit is circular.
2. **Sidereal period:** the orbital period equals Earth's sidereal rotation period (about 23 h 56 min 4 s). Textbook calculations often use the convenient approximation $T = 24$ h = 86,400 s.
3. **Equatorial plane:** the orbital plane lies in Earth's equatorial plane (the **Geostationary Earth Orbit**, GEO).
4. **West-to-east direction:** the satellite moves in the same direction as Earth's rotation.

> A satellite placed over either pole cannot be geostationary, because a geostationary orbit must lie in the equatorial plane.
## Derivation of Geostationary Orbital Radius

For a satellite in a circular orbit, the gravitational force provides the centripetal force:

$F_g = F_c$

$\frac{GM_E m}{r^2} = \frac{mv^2}{r} = mr\omega^2$

where:
- $G = 6.67 \times 10^{-11}\text{ N m}^2\text{ kg}^{-2}$ is the gravitational constant
- $M_E = 5.97 \times 10^{24}\text{ kg}$ is the mass of Earth
- $m$ is the mass of the satellite
- $r$ is the orbital radius from Earth's centre
- $\omega = \dfrac{2\pi}{T}$ is the angular velocity

Substituting $\omega = \dfrac{2\pi}{T}$:

$\frac{GM_E}{r^2} = r \left(\frac{2\pi}{T}\right)^2$

$GM_E = \frac{4\pi^2 r^3}{T^2}$

Solving for $r$:

$\boxed{r = \sqrt[3]{\frac{GM_E T^2}{4\pi^2}}}$

**Key observation:** The orbital radius $r$ depends only on $G$, $M_E$, and $T$: it is **independent of the satellite's mass**.

---

## Numerical Values for a Geostationary Satellite

Using the FBISE classroom approximation $T = 86{,}400\text{ s}$, $G = 6.67 \times 10^{-11}\text{ N m}^2\text{ kg}^{-2}$, and $M_E = 5.97 \times 10^{24}\text{ kg}$:

$$r = \sqrt[3]{\frac{(6.67 \times 10^{-11})(5.97 \times 10^{24})(86{,}400)^2}{4\pi^2}} \approx 4.23 \times 10^7\text{ m}$$

Thus $r \approx 42{,}300\text{ km}$ and, with $R_E \approx 6{,}400\text{ km}$, $h \approx 36{,}000\text{ km}$. The true sidereal-period value is slightly smaller; these are the intended rounded textbook values.
## Orbital Velocity of a Geostationary Satellite

The orbital velocity is given by:

$v = \frac{2\pi r}{T} = \frac{2\pi \times 4.23 \times 10^7}{86{,}400} \approx 3.07\text{ km s}^{-1}$

Alternatively, using the orbital velocity formula:

$v_o = \sqrt{\frac{GM_E}{r}}$

This is much slower than a low-Earth orbit satellite (which travels at ~7.9 km/s), consistent with the fact that **higher satellites move slower** ($v \propto \dfrac{1}{\sqrt{r}}$).

---

## Summary Table

| Property | Value |
|---|---|
| Orbital period $T$ | 24 hours (86,400 s) |
| Orbital radius $r$ | $4.23 \times 10^7$ m (42,300 km) |
| Altitude above surface $h$ | ~36,000 km |
| Orbital velocity $v$ | ~3.07 km/s |
| Orbital plane | Equatorial |
| Direction | West to East |

---

## Applications of Geostationary Satellites

- **Communications**: TV broadcasting, telephone relay, internet (e.g., INTELSAT)
- **Weather monitoring**: continuous imaging of the same region (e.g., METEOSAT)
- **GPS and navigation**: though GPS uses medium Earth orbit, geostationary satellites assist
- **Military surveillance**

---

<!-- note kx72zjhdx1fm3bh9an3f5avfhd85pky9 | topic ms72tjt8470sxx267pd2p0kwcx85p06a | status published -->
# 15.5 Gravitational Potential

## Definition

**Gravitational potential** ($V$) at a point in a gravitational field is defined as the **work done per unit mass** in bringing a small test mass from infinity to that point:

$$V = \frac{W}{m}$$

Gravitational potential is a **scalar quantity** with SI unit **J kg⁻¹**.

---

## Formula for Gravitational Potential

For a point mass $M$, the gravitational potential at a distance $r$ from its centre is:

$$V = -\frac{GM}{r}$$

where $G = 6.67 \times 10^{-11}\text{ N m}^2\text{ kg}^{-2}$ is the Universal Gravitational Constant.

### Why is $V$ always negative?

- The **reference point** is chosen at infinity, where $V = 0$.
- As a mass moves **towards** $M$, the gravitational field does **positive work** on it, so the potential **decreases** (becomes more negative).
- Equivalently, external work must be done **against** the field to move a mass **away** to infinity, confirming that $V < 0$ everywhere in the field.

---

## Gravitational Potential at Earth's Surface

At ***Earth's surface*** ($r = R_E$):

$$
V_{\text{surface}} = -\frac{GM_E}{R_E}
$$

Using $M_E = 5.97 \times 10^{24}\text{ kg}$ and $R_E = 6.37 \times 10^6\text{ m}$:

$$
V_{\text{surface}} \approx -6.25 \times 10^7\text{ J kg}^{-1}
$$

---

## Relationship Between $V$ and Gravitational Field Strength $g$

Gravitational field strength is the **negative gradient** of gravitational potential:

$$
g = -\frac{dV}{dr}
$$

This means $g$ points in the direction of **decreasing** $V$ (i.e., towards the mass $M$), consistent with the attractive nature of gravity.

**Verification:** Differentiating $V = -\frac{GM}{r}$:

$$
g = -\frac{d}{dr}\left(-\frac{GM}{r}\right) = -\frac{GM}{r^2}
$$

which matches the standard formula for gravitational field strength.

---

## Gravitational Potential Energy

**Gravitational potential energy** ($U$) of a mass $m$ at a point where the gravitational potential is $V$ is:

$$
U = mV = -\frac{GMm}{r}
$$
## Why $\Delta PE = mgh$ is Only Valid Near Earth's Surface

The familiar formula $\Delta PE = mgh$ assumes $g$ is **constant**. This is only valid for **small heights** $h \ll R_E$ near Earth's surface.

At large distances, $g$ decreases with $r^2$, so the general formula must be used:

$$U = -\frac{GMm}{r}$$

The change in gravitational potential energy between two distances $r_1$ and $r_2$ is:

$$\Delta U = GMm\left(\frac{1}{r_1} - \frac{1}{r_2}\right)$$

---

<WorkedExample title="Worked Example">

**Calculate the gravitational potential at a distance of $2R_E$ from Earth's centre.**

Given: $G = 6.67 \times 10^{-11}\text{ N m}^2\text{ kg}^{-2}$, $M_E = 5.97 \times 10^{24}\text{ kg}$, $R_E = 6.37 \times 10^6\text{ m}$

$$V = -\frac{GM_E}{2R_E} = -\frac{(6.67 \times 10^{-11})(5.97 \times 10^{24})}{2 \times 6.37 \times 10^6}$$

$$V \approx -3.13 \times 10^7\text{ J kg}^{-1}$$

<Callout type="note">This is **half** the magnitude of the surface potential, consistent with $V \propto \frac{1}{r}$.</Callout>

</WorkedExample>
---

## Summary

- Gravitational potential $V = -\frac{GM}{r}$ is always **negative** and a **scalar**.
- $V = 0$ at infinity (reference point).
- Gravitational potential energy $U = mV = -\frac{GMm}{r}$.
- Field strength $g = -\frac{dV}{dr}$ (negative potential gradient).
- $\Delta PE = mgh$ is only valid near Earth's surface where $g$ is approximately constant.
