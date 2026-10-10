<!-- note kx7epcbz5r12x56vxt89kzwqgs85pcwt | topic ms74j5hwxqqmtc6f275yj0fdsd85qr2f | status published -->
# Coulomb's Law

## The Electrostatic Force Law

**Coulomb's Law** is a fundamental principle in physics that describes the electrostatic force of interaction between two stationary, electrically charged particles. Formulated by Charles-Augustin de Coulomb in the 18th century, this law is the cornerstone of electrostatics.

**Statement:** *The force of attraction or repulsion between two point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them.*

If two point charges, $q_1$ and $q_2$, are separated by a distance $r$, the magnitude of the electrostatic force ($F$) between them is given by:
$$
F = k \frac{|q_1 q_2|}{r^2}
$$
## The Formula and Constants
The relationship can be broken down:
-   Force is proportional to the product of the charges: $F \propto |q_1 q_2|$
-   Force is inversely proportional to the square of the distance: $F \propto \frac{1}{r^2}$

The constant of proportionality, $k$, is known as **Coulomb's constant**.
$$
k = \frac{1}{4 \pi \varepsilon_0} \approx 9 \times 10^9 \, \mathrm{N} \cdot \mathrm{m}^2 / \mathrm{C}^2
$$
Here, $\varepsilon_0$ is the **permittivity of free space** ($\varepsilon_0 \approx 8.85 \times 10^{-12} \, \mathrm{C}^2 / (\mathrm{N} \cdot \mathrm{m}^2)$), a fundamental constant that describes how an electric field permeates a vacuum.

<CaptionedImage src="kg22qm1kvt4h8mrsayqf2zhqt98dgpqk" alt="Two like charges repelling each other." caption="Figure 10.1: Two similar charges separated by a distance r." />

## Vector Form of Coulomb's Law
Force is a vector, having both magnitude and direction. The force exerted on charge $q_1$ by charge $q_2$ is:
$$
\vec{F}_{12} = k \frac{q_1 q_2}{r^2} \hat{r}_{21}
$$
Where $\hat{r}_{21}$ is a unit vector pointing from $q_2$ to $q_1$. Similarly, the force on $q_2$ by $q_1$ is:
$$
\vec{F}_{21} = k \frac{q_1 q_2}{r^2} \hat{r}_{12}
$$
Since the unit vectors are in opposite directions ($\hat{r}_{12} = -\hat{r}_{21}$), this demonstrates Newton's Third Law:
$$
\vec{F}_{12} = -\vec{F}_{21}
$$
The forces are equal in magnitude and opposite in direction. This confirms that Coulomb's force is a mutual force.

<InlineNoteTag label="Scalar And Vector Quantities" notePath="physics-11/scalar-and-vector-quantities" />

## Direction of the Force
-   If the charges have the **same sign** (both positive or both negative), the product $q_1q_2$ is positive, and the force is **repulsive**.
-   If the charges have **opposite signs** (one positive, one negative), the product $q_1q_2$ is negative, and the force is **attractive**.

## Comparison with Gravitational Force
Coulomb's Law has a mathematical form very similar to Newton's Law of Universal Gravitation ($F = G \frac{m_1 m_2}{r^2}$).

| Feature | Electrostatic Force (Coulomb's Law) | Gravitational Force |
| :--- | :--- | :--- |
| **Nature of Force**| Can be attractive or repulsive | Always attractive |
| **Strength** | Very strong | Extremely weak in comparison |
| **Dependence** | Depends on electric charge | Depends on mass |
| **Form** | Both are inverse-square laws ($F \propto 1/r^2$) | Both are inverse-square laws ($F \propto 1/r^2$) |

## The Superposition Principle
If more than two charges are present, the net force on any single charge is the **vector sum** of the individual forces exerted on it by all the other charges. For a charge $q_1$ in the presence of charges $q_2, q_3, \ldots, q_n$, the total force is:
$$
\vec{F}_{1, \text{total}} = \vec{F}_{12} + \vec{F}_{13} + \ldots + \vec{F}_{1n}
$$

## Effect of Medium
When an insulating medium (dielectric) is placed between the charges, the electrostatic force decreases. The relative permittivity $\varepsilon_r$ (also called the dielectric constant) of the medium is defined such that the force in the medium $F_{\text{med}}$ is:
$$
F_{\text{med}} = \frac{1}{4 \pi \varepsilon_0 \varepsilon_r} \frac{q_1 q_2}{r^2} = \frac{F_{\text{vac}}}{\varepsilon_r}
$$

## Coulomb's Law and Spherical Conductors
For a point **outside** a uniformly charged spherical conductor, the entire charge of the sphere may be treated as a **point charge concentrated at its center**. This means Coulomb's Law applies exactly with $r$ measured from the center of the sphere to the external point.

---

<!-- note kx71tng4165wgtzzbbq3ywy8vx85pxq7 | topic ms78vymd1x57jjzwnw3kt6f4w585q780 | status published -->
# Electric Field Intensity

## What Is an Electric Field?

An **electric field** is a region of space around an electric charge or a group of charges within which an electric force is exerted on other charged objects. This field concept, introduced by Michael Faraday, provides a way to describe how electric forces are transmitted through space.
## 1. The Electric Field and Force

A source charge ($Q$) creates an electric field in the space surrounding it. When another charge, often called a "test charge" ($q$), is placed in this field, it experiences an electric force ($\vec{F}$). The electric field is the intermediary that communicates the force from the source charge to the test charge.

<InlineNoteTag label="Scalar and Vector Quantities" notePath="physics-11/scalar-and-vector-quantities" />

## 2. Electric Field Intensity ($\vec{E}$)

**Electric field intensity** (or simply the electric field) is a vector quantity that describes the strength and direction of the electric field at a specific point.

**Definition:** The electric field intensity at a point is defined as the electrostatic force ($\vec{F}$) experienced by a unit positive test charge ($q$) placed at that point.

**Formula:**
$$
\vec{E} = \frac{\vec{F}}{q}
$$

- **Magnitude:** The magnitude of the electric field ($E$) represents the force per unit charge.
- **Direction:** The direction of $\vec{E}$ at a point is the same as the direction of the force that would be exerted on a **positive** test charge placed at that point.
  - Electric fields point **away from** positive source charges.
  - Electric fields point **towards** negative source charges.

> **Test charge:** A hypothetical charge of very small magnitude used to probe the electric field at a point without significantly disturbing the field created by the source charges.

## 3. Electric Field of a Point Charge

We can derive the formula for the electric field created by a single point source charge ($Q$) using Coulomb's Law.

1. The force ($F$) exerted by a source charge $Q$ on a test charge $q$ at a distance $r$ is:
   $$
   \vec{F} = k \frac{Qq}{r^{\!2}} \hat{r}
   $$
2. Using the definition of the electric field, $\vec{E} = \vec{F}/q$, we divide the force by the test charge $q$:
   $$
   \vec{E} = \frac{1}{q} \left( k \frac{Qq}{r^{\!2}} \hat{r} \right)
   $$
3. This gives the formula for the electric field intensity due to a point charge $Q$:
   $$
   \vec{E} = k \frac{Q}{r^{\!2}} \hat{r} = \frac{1}{4\pi\varepsilon_{0}} \frac{Q}{r^{\!2}} \hat{r}
   $$
   where $\hat{r}$ is a unit vector pointing from the source charge $Q$ towards the field point. The electric field strength decreases with the **square** of the distance from the source charge.

## 4. Units of Electric Field Intensity

From the defining equation ($E = F/q$), the SI unit of electric field intensity is **Newtons per Coulomb (N C$^{-1}$)**. It is also commonly expressed in **Volts per metre (V m$^{-1}$)**, since:
$$
1\,\text{V m}^{-1} = 1\,\text{N C}^{-1}
$$

<InlineNoteTag label="Derived Units" notePath="physics-11/derived-units" />

<CaptionedImage src="kg22vf4aawwyv34sva2tndxjkn8dhv6m" alt="Figure 10.4: Electric field lines from a positive point charge." caption="Figure 10.4: Electric field lines from a positive point charge." />

## 5. Example Calculation

**Problem:** A point charge of $q = 9\,\mu\mathrm{C}$ is located at the centre of a sphere with radius $r = 3.0\,\mathrm{m}$. Find the electric field intensity at the surface of the sphere.

**Solution:**

1. **Formula:** $E = k\dfrac{|q|}{r^{\!2}}$
2. **Values:**
   - $k = 9 \times 10^9\,\mathrm{N\,m^{\!2}\,C^{\!-2}}$
   - $q = 9\,\mu\mathrm{C} = 9 \times 10^{-6}\,\mathrm{C}$
   - $r = 3.0\,\mathrm{m}$
3. **Calculation:**
   $$
   E = (9 \times 10^9) \frac{9 \times 10^{-6}}{(3.0)^2} = (9 \times 10^9) \frac{9 \times 10^{-6}}{9} = 9 \times 10^3\,\mathrm{N\,C^{\!-1}}
   $$

**Result:** The electric field intensity at the surface is $\mathbf{9 \times 10^3\,\mathrm{N\,C^{\!-1}}}$, directed radially outward.

---

<!-- note kx7199jxfc64s57syx72kdrrsd85p5s7 | topic ms70n4pvrykgsab4we64a7x3zs85p49s | status published -->
# Electric Field Lines

## What Are Electric Field Lines?

**Electric field lines** (also known as lines of force) are a visual tool used to represent the direction and strength of an electric field in space. Introduced by Michael Faraday, they provide an intuitive way to map out the invisible electric field around charged objects.
## Definition and Representation

- An electric field line is a curve drawn in such a way that the **tangent to it at any point gives the direction of the electric field vector ($\vec{E}$) at that point**.
- They are used to visualize the path that a small, positive "test charge" would take if it were free to move in the electric field.

## Properties and Rules for Drawing Electric Field Lines

1. **Origin and Termination:** Electric field lines **originate on positive charges** and **terminate on negative charges**. If there is an excess of one type of charge, some lines will begin or end at infinity.
2. **Direction:** The arrow on a field line indicates the direction of the force on a positive test charge. Thus, lines point **radially outward** from a positive point charge and **radially inward** toward a negative point charge.
3. **Strength of the Field:** The **density of the field lines** (how close they are to each other) in a region represents the strength of the electric field.
    - Where the lines are **close together**, the electric field is **strong**.
    - Where the lines are **far apart**, the electric field is **weak**.
4. **Lines Never Intersect:** Electric field lines can never cross each other. If they did, it would imply that the electric field has two different directions at the same point, which is physically impossible.
5. **Proportionality to Charge:** The number of lines leaving a positive charge or entering a negative charge is proportional to the magnitude of the charge.

<CaptionedImage src="kg28sa1ay4wy90x2caa14knkyx8dgpew" alt="Diagrams showing electric field lines for a positive charge, a negative charge, a dipole, and two like charges." caption="Electric field patterns for various charge configurations." />

## Common Electric Field Patterns

- **Electric Dipole:** An electric dipole consists of two equal and opposite charges. The field lines originate on the positive charge and curve around to terminate on the negative charge.
- **Two Like Charges:** For two positive charges, the field lines emerge from each charge and curve away from each other, creating a **neutral point** in the middle where the electric field is zero. A neutral point is a location where the net electric field intensity is zero: the field vectors from the two source charges are equal in magnitude and opposite in direction, canceling each other out.
- **Uniform Electric Field:** Between two large, oppositely charged parallel plates, the electric field lines are parallel, equally spaced, and point from the positive plate to the negative plate. This represents a **uniform electric field**, where the strength and direction are constant everywhere (except near the edges, where "fringing" occurs).
## Summary Table

| Property | Description |
| :--- | :--- |
| **Direction** | The tangent to a field line at any point gives the direction of the electric field. |
| **Origin/End** | Lines start on positive charges and end on negative charges. |
| **Strength** | The density of the lines (how close they are) indicates the field's strength. |
| **Intersection** | Field lines never cross. |
| **Behavior** | Lines show attraction between opposite charges (by connecting them) and repulsion between like charges (by curving away). |

---

<!-- note kx79dv045baprkfg1hmprehr9d85ps51 | topic ms78kwr1w256q07knsyan1y9d585qwby | status published -->
# 10.4 Ferrofluid

## What Is a Ferrofluid?

A ferrofluid is a liquid that becomes strongly magnetized when an external magnetic field is applied. It is a stable colloidal suspension composed of nanoscale magnetic particles suspended within a liquid carrier.
## Composition and Structure

A ferrofluid is made of three key components:

1. **Magnetic Nanoparticles:** Extremely small particles (typically 10 nm in diameter) of a magnetic material, such as magnetite ($\mathrm{Fe_3O_4}$).
2. **Surfactant:** A soap-like coating on each nanoparticle that prevents them from clumping together.
3. **Carrier Liquid:** A liquid medium, usually an oil or water, where the coated particles are dispersed.

<CaptionedImage src="kg2c0y2yg4a727q5pek74x2gg18dgxj3" alt="Microscopic view of ferrofluid particles suspended in a liquid." caption="Figure 10.X: Nanoscale magnetic particles suspended in a carrier liquid." />

## Magnetic Behavior

- **Without a Field:** The magnetic particles are randomly oriented, and the fluid behaves like a normal, non-magnetic liquid.
- **With a Field:** The nanoparticles instantly align with the magnetic field lines. The fluid is drawn to the magnet and forms sharp, spiky patterns on its surface that trace the lines of the magnetic field. These spikes represent the alignment of magnetic moments with the field, creating channels through which magnetic flux passes.
- **Superparamagnetism:** Ferrofluids are strongly magnetic only while the field is applied. They retain no permanent magnetism once the field is removed. This on/off magnetic property is crucial for their applications.

## Applications of Ferrofluids

The unique ability to control a liquid with a magnet allows for many innovative uses across different fields.

### Electronics and Audio

- **Loudspeaker Cooling:** In high-performance loudspeakers, ferrofluid is placed in the gap around the voice coil. It conducts heat away from the coil and dampens unwanted vibrations, resulting in clearer sound.

### Mechanical Engineering

- **Rotating Shaft Seals:** Ferrofluid can form a perfect, frictionless seal around a spinning shaft. Magnets hold the liquid in place, preventing dust, debris, or gases from passing through, which is useful in computer hard drives and other machinery.

### Medical Physics

- **Targeted Drug Delivery:** Scientists are researching how to attach drugs to ferrofluid particles and guide them to a specific target in the body (like a tumor) using external magnets.
- **MRI Contrast Agent:** Ferrofluids can be used as a contrast agent to improve the visibility of images in Magnetic Resonance Imaging (MRI).

### Art and Education

- **Visualizing Magnetic Fields:** The dramatic spiky patterns make ferrofluids a popular tool in science museums, art installations, and educational demonstrations to provide a stunning visual representation of invisible magnetic fields.

## Ferrofluid vs. Iron Filings in Oil

A natural comparison is to ask why a ferrofluid behaves so differently from a jar of ordinary iron filings mixed into oil. Iron filings are macroscopic and will quickly clump together under mutual magnetic attraction, then settle out of the oil under gravity within minutes.

A ferrofluid avoids both problems at once: its nanoparticles are small enough that Brownian motion (thermal agitation) keeps them permanently suspended against gravity, while the surfactant coating on each particle provides a steric repulsive barrier that keeps the magnetic cores too far apart to clump, even under an applied field. The result is a stable colloidal liquid rather than a coarse, settling slurry.


<SideActivity kind="info" title="For Your Information">
<p>A Faraday cage is a cage made of a conducting material. A Faraday cage distributes charge or radiation around the cage's exterior, it cancels out electric charges or radiation within the cage. In short, a Faraday cage is a hollow conductor, in which the charge remains on the external surface of the cage.</p>
</SideActivity>

---

<!-- note kx79jzhhs7rmeqpqg6m71kx9ys85p7ch | topic ms75nbfh4dx08jadjx80d4w37s85p3xh | status published -->
# Potential Gradient

## What Is Potential Gradient?

The **potential gradient** is a physical quantity that describes how electric potential changes with respect to distance in an electric field. It is a vector quantity that points in the direction of the steepest increase in electric potential, and its magnitude equals the rate of change of potential with distance. This concept is essential for understanding the relationship between electric field and electric potential.
## 1. Definition and Relationship to Electric Field

The electric field ($\vec{E}$) is directly related to the potential gradient. Specifically, the electric field is the **negative of the potential gradient**.

**Formula:**
$$E = -\frac{\Delta V}{\Delta r}$$

- $E$ is the component of the electric field along the direction of displacement $\Delta r$.
- $\Delta V$ is the change in electric potential.
- $\Delta r$ is the small displacement.

**Significance of the Negative Sign:**

The negative sign indicates that the **electric field vector ($\vec{E}$) always points in the direction of the greatest decrease in electric potential**. A positive charge placed in an electric field will naturally move from a region of high potential to a region of low potential.

## 2. Derivation of the Potential Gradient

The relationship can be derived by considering the work done to move a test charge in an electric field.

1. Consider a positive test charge $q_0$ being moved a small distance $\Delta r$ from point A to point B against a uniform electric field $\vec{E}$.
2. The external force ($\vec{F}_{ext}$) required to move the charge must be equal and opposite to the electric force ($\vec{F}_E = q_0 \vec{E}$), so $\vec{F}_{ext} = -q_0 \vec{E}$.
3. The work done ($W$) by this external force is:
   $$W = F_{ext} \Delta r = (-q_0 E) \Delta r$$
4. By the definition of electric potential difference, the work done to move a charge is also equal to the charge multiplied by the potential difference:
   $$W = q_0 \Delta V$$
5. Equating the two expressions for work done:
   $$q_0 \Delta V = -q_0 E \Delta r$$
6. Canceling the test charge $q_0$ and rearranging gives the final relationship:
   $$E = -\frac{\Delta V}{\Delta r}$$

## 3. Units of Electric Field Intensity

The potential gradient formula $E = -\Delta V / \Delta r$ shows that the SI unit of electric field intensity can be expressed as **volt per metre (V m⁻¹)**.

This is equivalent to **newton per coulomb (N C⁻¹)**:

$$\frac{\text{V}}{\text{m}} = \frac{\text{J C}^{-1}}{\text{m}} = \frac{\text{N m C}^{-1}}{\text{m}} = \text{N C}^{-1}$$

Since $1\text{ V} = 1\text{ J C}^{-1}$ and $1\text{ J} = 1\text{ N m}$.

## 4. Analogy with a Hill

A useful analogy is to think of electric potential as the height on a hill (gravitational potential).

- The **electric field** is like the **slope** of the hill. It points "downhill," the direction a ball would roll.
- The **potential gradient** is the steepness of the slope. A large potential gradient (steep slope) corresponds to a strong electric field.
- Moving "uphill" requires work and increases potential. Moving "downhill" releases potential energy.

## 5. Motion of a Charged Particle in a Uniform Electric Field

A uniform electric field exerts a constant force on a charged particle, causing it to accelerate:

- A **positive charge** ($+q$) placed in an electric field will experience a force in the *same direction* as the field ($\vec{F} = q\vec{E}$) and will accelerate from a region of **high potential to low potential**.
- A **negative charge** ($-q$) will experience a force in the *opposite direction* to the field and will accelerate from a region of **low potential to high potential**.

This is directly analogous to a mass falling under gravity: the charge moves to minimise its potential energy.

<CaptionedImage src="kg20rev3m88qrfb20d6mf50dpn8dgbcn" alt="Figure 10.1: A positive charge accelerating in a uniform electric field between two plates." caption="Figure 10.1: A positive charge accelerating in a uniform electric field between two plates." />
## 6. Example Calculation

**Problem:** The electric potential at a point is $V = 13$ J/C (or 13 Volts), and the magnitude of the electric field at that point is $E = 26$ N/C. Assuming the field is created by a single point charge, what is the distance ($r$) from the charge?

**Solution:**

For a point charge, the potential is $V = kQ/r$ and the electric field is $E = kQ/r^2$. Dividing gives $E = V/r$.

1. **Formula:** Rearrange to solve for distance:
   $$r = \frac{V}{E}$$
2. **Substitute values:**
   $$r = \frac{13 \, \mathrm{V}}{26 \, \mathrm{V\,m^{-1}}} = 0.5 \, \mathrm{m}$$

The distance from the charge is **0.5 m**.

<InlineNoteTag label="Derived Units" notePath="physics-11/derived-units" />