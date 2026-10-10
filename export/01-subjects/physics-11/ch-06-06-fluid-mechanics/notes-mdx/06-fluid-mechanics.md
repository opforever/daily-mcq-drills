<!-- note kx75scxrkc033esazt1880fysd85qqjt | topic ms71yphrrtcynvhjxta4t2sx4n85qxan | status published -->
# Archimedes' Principle and Buoyancy

## Why Ships Float and Pebbles Sink

Have you ever wondered why a massive steel ship floats, while a small pebble sinks? Or why a hot-air balloon rises, and a water-filled mug feels lighter when submerged? The answer to these questions lies in the concept of **buoyancy**, which is explained by Archimedes' Principle. This principle describes the upward force exerted by a fluid on any object submerged in it.
## Buoyant Force (Upthrust)

When an object is submerged in a fluid (a liquid or a gas), the fluid exerts pressure on all surfaces of the object. Since pressure increases with depth, the pressure on the bottom surface of the object is greater than the pressure on its top surface. This pressure difference results in a net upward force on the object, known as the **buoyant force** or **upthrust**.

<CaptionedImage src="kg29wzh6x84kxabg8793g3sr0x88d6wg" alt="Archimedes Principle" caption="Archimedes' Principle" />

## Archimedes' Principle

Archimedes' Principle gives us a way to calculate the magnitude of this buoyant force.

**Statement:** *An object wholly or partially submerged in a fluid experiences an upward buoyant force equal to the weight of the fluid it displaces.*

**Mathematical Formulation:**

Consider a cylindrical object of height $h$ and cross-sectional area $A$ submerged in a fluid of density $\rho_f$. The depth of the top surface is $h_1$, and the bottom surface is $h_2$.

- Pressure on the top surface: $P_1 = \rho_f g h_1$. The downward force is $F_1 = P_1 A$.
- Pressure on the bottom surface: $P_2 = \rho_f g h_2$. The upward force is $F_2 = P_2 A$.
- The net upward force (buoyant force, $F_B$) is the difference between these two forces:

$$F_B = F_2 - F_1 = (P_2 - P_1)A = (\rho_f g h_2 - \rho_f g h_1)A$$

$$F_B = \rho_f g (h_2 - h_1)A$$

- Since $(h_2 - h_1)A$ is the volume of the submerged part of the object ($V_{sub}$), which is also the volume of the fluid displaced, the formula becomes:

$$F_B = \rho_f V_{sub} g$$

This is the weight of the fluid displaced.

## The Principle of Flotation

Whether an object floats, sinks, or remains suspended depends on the balance between its weight ($W$) and the buoyant force ($F_B$).

| Condition | Comparison | Behavior of the Object |
| :--- | :--- | :--- |
| **Sinks** | Weight > Buoyant Force ($W > F_B$) | The object accelerates downwards. |
| **Floats** | Weight < Buoyant Force ($W < F_B$) | The object rises until the buoyant force on the submerged part equals its weight. |
| **Suspended** | Weight = Buoyant Force ($W = F_B$) | The object remains in equilibrium at any depth. |

**Law of Flotation:** A floating object displaces a weight of fluid equal to its own weight.

<InlineNoteTag label="Equilibrium" notePath="physics-11/equilibrium" />

## Applications

### Ships

A ship is made of dense steel, but its hollow shape displaces a vast volume of water. This creates a buoyant force large enough to support the ship's weight, allowing it to float. A ship sinks if it takes on too much weight (from cargo or water), causing its total weight to exceed the maximum buoyant force.

### Submarines

Submarines control their depth by altering their weight. They have ballast tanks that can be filled with water to increase their overall weight, causing them to sink. To rise, compressed air is used to force the water out of the tanks, decreasing their weight and allowing the buoyant force to push them to the surface.

### Hot-Air Balloons

A hot-air balloon rises because the hot air inside it is less dense than the cooler, surrounding air. The balloon displaces a large volume of the cooler, denser air, creating a buoyant force greater than the balloon's total weight.




---

<!-- note kx7ekmd1cqertc99mwajmqv23985qqak | topic ms70t4tmm5v3sbd6ze7ym3fezd85p8v2 | status published -->
# Types of Fluid Flow

## What Makes a Substance a Fluid

A fluid is any substance that can flow and take the shape of its container, such as a liquid or a gas. The study of how fluids move is a core part of fluid dynamics.
## 1. Streamline Flow (Laminar Flow)

Streamline flow, also known as **laminar** or **steady flow**, is a smooth, orderly, and predictable type of fluid motion.

**Characteristics:**

- Every fluid particle follows the same smooth path (a **streamline**) as the particles that passed before it.
- Streamlines do not cross each other.
- The velocity of the fluid at any given point remains constant over time.

**Conditions:** It typically occurs at lower speeds and when flowing past streamlined objects.

**Example:** A gentle river flowing or water moving slowly through a smooth pipe.

## 2. Turbulent Flow

Turbulent flow is a chaotic, irregular, and unpredictable type of fluid motion.

**Characteristics:**

- The fluid flow is characterized by eddies, swirls, and whirlpool-like regions.
- The velocity of the fluid at any point fluctuates randomly.
- Flow paths are disordered and intermixed.

**Conditions:** It occurs at higher velocities, when an obstacle is in the flow path, or when the pipe's dimensions change abruptly.

**Example:** Whitewater rapids in a river or smoke rising from a chimney.

| Flow Type | Fluid Motion | Velocity | Conditions |
| :--- | :--- | :--- | :--- |
| **Streamline (Laminar)** | Smooth, orderly, layered | Constant at a point | Low speeds, streamlined objects |
| **Turbulent** | Chaotic, irregular, mixed | Fluctuates randomly | High speeds, abrupt changes |

## Ideal vs. Real Fluids

To simplify complex calculations in fluid dynamics, the concept of an **ideal fluid** is used. An ideal fluid is a theoretical model with specific properties that are not perfectly met by real fluids.

**Assumptions for an Ideal Fluid:**

1. **Non-viscous:** It has zero internal friction.
2. **Incompressible:** Its density remains constant.
3. **Steady Flow:** Its motion is streamline (laminar).
4. **Irrotational:** The fluid elements do not rotate or spin.

| Property | Real Fluids | Ideal Fluids |
| :--- | :--- | :--- |
| **Viscosity** | Always present (internal friction) | Zero (no friction) |
| **Density** | Can be compressible (especially gases) | Always constant (incompressible) |
| **Flow** | Can be laminar or turbulent | Always streamline (laminar) |

## Why Real Fluids Are Viscous

**Real fluids are considered viscous** because they always possess some degree of internal friction between adjacent layers of fluid. This property, called **viscosity**, causes resistance to flow.

Unlike ideal fluids (which are non-viscous), real fluids like water, air, and oil exhibit viscosity. When one layer of fluid moves faster than an adjacent layer, friction acts between them, slowing the faster layer and speeding up the slower one. This internal friction is what makes real fluids viscous.

**Examples of viscosity in real fluids:**
- Honey flows much more slowly than water because it has a much higher viscosity.
- Engine oil resists flow more than water, which is why it lubricates moving parts effectively.
- Even air has a small but non-zero viscosity, which becomes important at high speeds.

Viscosity becomes particularly important when analyzing flow through pipes or around objects, and it is the reason why turbulent flow can develop in real fluids.

See also related concepts:
- <InlineNoteTag label="Viscous Drag" notePath="physics-11/viscous-drag" />
- <InlineNoteTag label="Terminal Velocity" notePath="physics-11/terminal-velocity" />


---

<!-- note kx7cxhpd3gb6148cbtmq5xr85d85qjv0 | topic ms706d5gmgwqh7d1dn6c2saf9d85q4nw | status published -->
# 6.3 Equation of Continuity

## What the Equation of Continuity States

The equation of continuity is a fundamental principle in fluid dynamics derived from the **law of conservation of mass**. It states that for an ideal fluid flowing through a pipe or channel, the mass flow rate is constant at all points. This means the product of the fluid's cross-sectional area and its velocity remains constant along a streamline.

The equation for an ideal, incompressible fluid is:

$$A_{1} v_{1} = A_{2} v_{2} \quad \text{or} \quad A \cdot v = \text{constant}$$

* $A_{1}, A_{2}$: Cross-sectional areas at points 1 and 2.
* $v_{1}, v_{2}$: Fluid velocities at points 1 and 2.

Essentially, where the pipe is narrower, the fluid must speed up, and where it is wider, the fluid slows down to ensure that the same amount of mass passes through every section in the same amount of time. This principle is essential in understanding fluid flow and is directly applied in Bernoulli's Equation.
## Conservation of Mass

The core principle is that mass is neither created nor destroyed within the fluid flow. The mass of fluid entering a section of a pipe in a given time interval must equal the mass of fluid exiting it in the same interval.

## Ideal Fluid

The simplified version of the equation ($Av = \text{constant}$) assumes the fluid is "ideal." An ideal fluid is a theoretical concept with the following properties:

| Property | Description |
| :--- | :--- |
| **Incompressible** | The density ($\rho$) of the fluid remains constant. |
| **Non-viscous** | There is no internal friction (viscosity) within the fluid. |
| **Steady Flow** | The velocity of the fluid at any given point does not change over time. |
| **Irrotational Flow** | The fluid flows without rotation or turbulence. |

## Real vs. Ideal Fluids

For **real fluids** (like gases), density can change. The equation of continuity is therefore generalized to include density:

$$
\rho_1 A_{1} v_{1} = \rho_2 A_{2} v_{2} \quad \text{or} \quad \rho A v = \text{constant}
$$

This is the most complete form of the equation, as it accounts for fluids that can be compressed.

<CaptionedImage src="kg29682cwpe16pv75jvzmz1b2188wsrp" alt="Fluid flow through a pipe of varying cross-section showing velocity changes" caption="Fluid flow through a pipe of varying cross-section showing velocity changes" />

## Mathematical Derivation

The equation is derived directly from the principle of mass conservation.

1. **Mass Conservation:** Consider a fluid flowing through a pipe. The mass entering at point 1 ($\Delta m_{1}$) in a time interval $\Delta t$ must equal the mass exiting at point 2 ($\Delta m_{2}$) in the same time.

$$
\Delta m_{1} = \Delta m_{2}
$$

2. **Relating Mass, Density, and Volume:** Mass is the product of density ($\rho$) and volume ($V_{\text{vol}}$).

$$
\Delta m = \rho \cdot \Delta V_{\text{vol}}
$$

3. **Expressing Volume in Terms of Flow:** The volume of a fluid segment passing a point is its cross-sectional area ($A$) times the distance it travels ($\Delta x$).

$$
\Delta V_{\text{vol}} = A \cdot \Delta x
$$

Since distance is velocity times time ($\Delta x = v \cdot \Delta t$), the volume is:

$$
\Delta V_{\text{vol}} = A \cdot v \cdot \Delta t
$$

4. **Formulating the Mass Flow Rate:** Substituting this into the mass equation gives the mass passing a point in time $\Delta t$:

$$
\Delta m = \rho \cdot A \cdot v \cdot \Delta t
$$

5. **Equating Mass Flow at Two Points:** Applying the conservation of mass ($\Delta m_{1} = \Delta m_{2}$):

$$
\rho_1 A_{1} v_{1} \Delta t = \rho_2 A_{2} v_{2} \Delta t
$$

6. **Final Equation:** After canceling the time interval $\Delta t$, we get the general form of the equation of continuity:

$$
\rho_1 A_{1} v_{1} = \rho_2 A_{2} v_{2}
$$

For an **ideal, incompressible fluid**, the density is constant ($\rho_1 = \rho_2$), so it cancels out, leaving the simplified version:

$$
A_{1} v_{1} = A_{2} v_{2}
$$



---

<!-- note kx75v6r18p5a8chn46gp45r5xx85q6hf | topic ms7cbbe0az78sj21mgkef6mr0d85pwfq | status published -->
# Bernoulli's Equation

## Energy Conservation Along a Streamline

Bernoulli's equation is a cornerstone of fluid dynamics, expressing the principle of **conservation of energy** for an ideal fluid in motion. It states that for a fluid flowing along a streamline, the sum of its pressure energy, kinetic energy, and potential energy per unit volume remains constant.

The equation is formulated as:

$$
P + \frac{1}{2} \rho v^{\!2} + \rho gh = \text{constant}
$$

The equation is composed of three energy terms per unit volume:

-   ***Pressure Energy ($P$):*** This represents the "flow work" or the energy stored in the fluid due to the pressure it is under.
-   ***Kinetic Energy ($\frac{1}{2} \rho v^{\!2}$):*** This is the energy of the fluid due to its motion.
-   ***Potential Energy ($\rho gh$):*** This is the gravitational potential energy of the fluid due to its elevation.

The core idea is that energy can be transformed between these three forms, but their total sum along a single streamline does not change. For example, if a fluid's speed increases (higher kinetic energy), its pressure or height must decrease to keep the total energy constant.

| Variable | Description | SI Unit |
| :--- | :--- | :--- |
| **$P$** | Pressure | Pascals (Pa) |
| **$\rho$** | Density of the fluid | kg/m³ |
| **$v$** | Velocity of the fluid | m/s |
| **$g$** | Acceleration due to gravity | m/s² |
| **$h$** | Height above a reference point | m |
## Derivation of the Equation

The equation is derived from the **work-energy theorem**, which states that the total work done on a system is equal to the change in its mechanical energy (kinetic + potential).

### Step 1: The Work-Energy Theorem
Consider a volume of fluid, $\Delta V$, moving along a pipe. The net work done on this volume of fluid equals the change in its kinetic and potential energy.

$$
W_{\text{net}} = \Delta KE + \Delta PE
$$

### Step 2: Work Done by Pressure
The work is done by the pressure forces at the two ends of the fluid segment.
-   Work done on the fluid at point 1 (entering): $W_{1} = P_{1} A_{1} \Delta x_{1} = P_{1} \Delta V$
-   Work done by the fluid at point 2 (exiting): $W_{2} = -P_{2} A_{2} \Delta x_{2} = -P_{2} \Delta V$

The net work done on the fluid is:

$$
W_{\text{net}} = W_{1} + W_{2} = (P_{1} - P_{2}) \Delta V
$$

### Step 3: Changes in Mechanical Energy
The changes in kinetic and potential energy for the mass ($m = \rho \Delta V$) of the fluid are:
-   Change in Kinetic Energy: $\Delta KE = \frac{1}{2} m v_{2}^2 - \frac{1}{2} m v_{1}^2$
-   Change in Potential Energy: $\Delta PE = mgh_2 - mgh_1$

### Step 4: Combining and Final Formulation
Setting the net work equal to the total change in energy:

$$
(P_{1} - P_{2}) \Delta V = (\frac{1}{2} m v_{2}^2 - \frac{1}{2} m v_{1}^2) + (mgh_2 - mgh_1)
$$

Substitute $m = \rho \Delta V$ and divide the entire equation by the volume $\Delta V$:

$$
P_{1} - P_{2} = (\frac{1}{2} \rho v_{2}^2 - \frac{1}{2} \rho v_{1}^2) + (\rho gh_2 - \rho gh_1)
$$

Rearranging the terms to group them by their position (1 or 2):

$$
P_{1} + \frac{1}{2} \rho v_{1}^2 + \rho gh_1 = P_{2} + \frac{1}{2} \rho v_{2}^2 + \rho gh_2
$$

This shows that the sum of the three energy terms is constant at any point along the streamline.




---

<!-- note kx7814847beezd108ejycxkvg985qhvw | topic ms7ct9myk1zxkr2vqamftnya4d85qzgf | status published -->
# Applications of Bernoulli's Equation

## Bernoulli's Principle in Everyday Devices

Bernoulli's equation describes the relationship between the speed, pressure, and potential energy of a fluid in motion. This principle finds numerous practical applications in engineering and everyday devices.
## 1. Speed of Efflux (Torricelli’s Theorem)

Suppose a large tank has an orifice (small hole) at a depth $h$ below the surface of the liquid. Let $v_1$ be the velocity of the liquid at the top and $v_2$ be the velocity with which it leaves the orifice. Since the area of the tank is much larger than the area of the orifice, $v_1 \approx 0$.

Applying Bernoulli's equation:
$P_1 + \frac{1}{2}\rho v_1^2 + \rho gh_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho gh_2$

Since both the top and the orifice are open to the atmosphere, $P_1 = P_2 = P_a$.
$\rho gh_1 = \frac{1}{2}\rho v_2^2 + \rho gh_2$
$v_2 = \sqrt{2g(h_1 - h_2)} = \sqrt{2gh}$

This is known as **Torricelli's Theorem**, which states that the speed of efflux is equal to the velocity gained by a fluid falling freely through a height $h$.

## 2. Venturi Relation (Venturi Meter)

The Venturi effect is the reduction in fluid pressure that results when a fluid flows through a constricted section of a pipe. For a horizontal pipe ($h_1 = h_2$):

$P_1 - P_2 = \frac{1}{2}\rho (v_2^2 - v_1^2)$

A **Venturi meter** is a device used to measure the speed of liquid flow. By measuring the pressure difference, the flow velocity can be calculated.

## 3. Filter Pump

A filter pump is a device used to circulate and purify liquids by removing suspended impurities. It is essential in systems such as swimming pools, aquariums, and industrial water treatment plants.

### Working Principle

The operation of a filter pump relies on creating a pressure difference using Bernoulli's Equation.

**Creating Flow:** The pump forces water to move through a pipe. To increase the speed of water, it is channeled through a narrower section (a venturi section).

**Pressure Drop:** As the water's velocity increases in the narrow section, its pressure decreases according to Bernoulli's principle.

**Suction Effect:** This low-pressure area creates a suction effect at the inlet, which continuously draws water from the source (such as a pool or tank) into the filtration system.

**Filtration:** Once drawn in, the water is pushed through a filter medium that traps debris, and the clean water is then returned to the system.

| Location | Fluid Velocity | Pressure |
| :--- | :--- | :--- |
| **Wide Inlet Pipe** | Lower | Higher |
| **Narrow Pump Section** | Higher | Lower |

## 4. Atomizer

An atomizer is a device that converts a stream of liquid into a fine mist or spray. This mechanism is used in perfume bottles, spray paint cans, and medical nebulizers.

### How an Atomizer Works

Atomizers use Bernoulli's principle to break a liquid into tiny droplets.

**High-Velocity Airflow:** When a bulb is squeezed or a trigger is pressed, a jet of air is forced to move at high speed across the top of a small tube (nozzle).

**Pressure Reduction:** This fast-moving stream of air creates a region of low pressure directly above the tube, based on Bernoulli's principle.

**Drawing Liquid Up:** The atmospheric pressure inside the container, which is now higher than the pressure above the tube, pushes the liquid up the tube.

**Mist Formation:** As the liquid reaches the top, the high-velocity air stream shatters it into millions of tiny droplets, forming a fine mist.
## 5. Lift on an Aerofoil

The wing of an airplane is shaped as an **aerofoil**. It is designed such that air moves faster over the top surface than the bottom surface.

- **Top Surface:** Higher velocity $\rightarrow$ Lower pressure.
- **Bottom Surface:** Lower velocity $\rightarrow$ Higher pressure.

The pressure difference creates an upward force called **lift**.

## 6. Swing of a Ball

When a cricket ball or tennis ball is spun, it drags a layer of air with it. On one side of the ball, the air velocity due to spin and the air velocity due to the ball's motion are in the same direction (higher velocity). On the other side, they are in opposite directions (lower velocity).

The resulting pressure difference causes the ball to curve or "swing" toward the low-pressure side.

## 7. Blood Flow

The flow of blood in our arteries can be understood via Bernoulli's principle. If an artery becomes constricted (due to plaque), the blood velocity increases at the constriction, leading to a drop in internal pressure. If the external pressure is high enough, the artery may collapse momentarily.

---

<!-- note kx75b08wt6e1p1qc8am46yt9e585pskm | topic ms70pqftm087x2hfdjgmmkxffn85qeht | status published -->
# 6.4.2 Torricelli's Theorem

## Torricelli's Law of Efflux

Torricelli's theorem, also known as Torricelli's law, is a principle in fluid dynamics that relates the speed of a fluid flowing out of an orifice (an opening) to the height of the fluid above that opening. It states that the speed of efflux is the same as the speed an object would acquire by falling freely from the same height. This theorem is a specialized case of Bernoulli's Equation.

The formula for the speed of efflux ($v$) is:

$$
v = \sqrt{2gh}
$$
## Energy Conversion

Torricelli's theorem is a statement of the conservation of energy. The potential energy of the fluid at the top surface is converted into kinetic energy as it exits the orifice.

- **Potential Energy:** Stored in the fluid due to its height ($h$) above the opening.
- **Kinetic Energy:** The energy of motion of the fluid as it flows out of the hole.

## The Setup

The theorem is typically applied to a scenario involving a large, open container or tank filled with a fluid, with a small hole near its base. The speed of the exiting fluid depends only on the vertical distance ($h$) from the surface of the fluid to the center of the hole.

## Derivation from Bernoulli's Equation

The theorem can be derived directly from Bernoulli's Equation, which describes the conservation of energy in a moving fluid.

$$
P_{1} + \frac{1}{2} \rho v_{1}^2 + \rho gh_1 = P_{2} + \frac{1}{2} \rho v_{2}^2 + \rho gh_2
$$

Let's define two points for our analysis:

- **Point 1:** The top surface of the fluid in the container.
- **Point 2:** The orifice where the fluid exits.

### Assumptions for Simplification

1. **Atmospheric Pressure:** The container is open to the atmosphere, so the pressure at the top surface ($P_{1}$) and at the orifice ($P_{2}$) are both equal to the atmospheric pressure ($P_{atm}$). Therefore, $P_{1} = P_{2}$.

2. **Large Reservoir:** The cross-sectional area of the container ($A_{1}$) is much larger than the area of the orifice ($A_{2}$). From the Equation of Continuity ($A_1v_1 = A_2v_2$), this means the speed at which the top surface of the fluid falls ($v_{1}$) is negligible compared to the exit speed ($v_{2}$). We can approximate $v_{1} \approx 0$.

### Applying the Assumptions

1. Start with Bernoulli's equation:
   $$
   P_{1} + \frac{1}{2} \rho v_{1}^2 + \rho gh_1 = P_{2} + \frac{1}{2} \rho v_{2}^2 + \rho gh_2
   $$

2. Apply the assumptions ($P_{1} = P_{2}$ and $v_{1} = 0$):
   $$
   P_{atm} + 0 + \rho gh_1 = P_{atm} + \frac{1}{2} \rho v_{2}^2 + \rho gh_2
   $$

3. The atmospheric pressure terms ($P_{atm}$) on both sides cancel out:
   $$
   \rho gh_1 = \frac{1}{2} \rho v_{2}^2 + \rho gh_2
   $$

4. Rearrange the equation to solve for the kinetic energy term:
   $$
   \frac{1}{2} \rho v_{2}^2 = \rho gh_1 - \rho gh_2 = \rho g(h_{1} - h_{2})
   $$

5. Let $h = (h_{1} - h_{2})$, which is the vertical height of the fluid above the orifice. The equation becomes:
   $$
   \frac{1}{2} \rho v_{2}^2 = \rho gh
   $$

6. Cancel the density ($\rho$) from both sides and solve for the efflux velocity ($v_{2}$, which we can simply call $v$):
   $$
   \frac{1}{2} v^{\!2} = gh \quad \implies \quad v = \sqrt{2gh}
   $$

This final expression is Torricelli's law.




<SideActivity kind="tidbit" title="Do You Know?">
<p>In the summer you can enjoy by getting heat from the fireplace without the room filling up with smoke! This is again due to the Bernoulli's effect. Can you explain how?</p>
</SideActivity>

---

<!-- note kx7cpqfgcvxwjarg7cd6z3n2p585qeqp | topic ms78q9984mrjxr8xaw6dyn85bn85pwkg | status published -->
# Venturi Meter

## How a Venturi Meter Works

A Venturi meter is a device used to measure the flow rate (or discharge) of a fluid moving through a pipe. It works by narrowing the path of the fluid, which causes its velocity to increase and its pressure to decrease. By measuring this pressure difference, the flow rate can be calculated. The device operates based on Bernoulli's Equation and the Equation of Continuity.

### Construction

The Venturi meter consists of three main parts:

1.  **Converging Section:** A short pipe that gradually decreases in diameter, causing the fluid to accelerate.
2.  **Throat:** The narrowest part of the meter, where the fluid velocity is at its maximum and the pressure is at its minimum.
3.  **Diverging Section:** A longer pipe that gradually increases in diameter, allowing the fluid to slow down and recover its pressure.

### Working Principle

The operation of a Venturi meter is based on two fundamental principles of fluid dynamics:

1.  **Equation of Continuity ($A_1V_1 = A_2V_2$):** As the fluid flows from the wider inlet to the narrow throat, its velocity must increase to maintain a constant mass flow rate.
2.  **Bernoulli's Principle ($P + \frac{1}{2}\rho v^2 = \text{constant}$ for a horizontal pipe):** As the fluid's velocity increases at the throat, its pressure must decrease.

This pressure difference between the inlet and the throat is measured, typically with a U-tube manometer, and is directly related to the fluid's flow rate.

| Section | Cross-Sectional Area | Fluid Velocity | Fluid Pressure |
| :--- | :--- | :--- | :--- |
| **Inlet** | Large ($A_1$) | Lower ($V_1$) | Higher ($P_1$) |
| **Throat** | Small ($A_2$) | Higher ($V_2$) | Lower ($P_2$) |
## Mathematical Derivation

The formula for the flow rate is derived by combining Bernoulli's equation and the equation of continuity.

### Step 1: Apply Bernoulli's Equation

For an ideal, incompressible fluid flowing horizontally through the meter ($h_1 = h_2$), Bernoulli's equation between the inlet (point 1) and the throat (point 2) is:

$$P_1 + \frac{1}{2} \rho V_1^2 = P_2 + \frac{1}{2} \rho V_2^2$$

Rearranging to find the pressure difference:

$$P_1 - P_2 = \frac{1}{2} \rho (V_2^2 - V_1^2)$$

### Step 2: Apply the Equation of Continuity

The mass flow rate is constant:

$$A_1 V_1 = A_2 V_2$$

We can express the velocity at the throat ($V_2$) in terms of the inlet velocity ($V_1$):

$$V_2 = \frac{A_1}{A_2} V_1$$

### Step 3: Combine the Equations

Substitute the expression for $V_2$ from Step 2 into the Bernoulli's equation from Step 1:

$$P_1 - P_2 = \frac{1}{2} \rho \left( \left(\frac{A_1}{A_2} V_1\right)^2 - V_1^2 \right)$$

Factor out $V_1^2$:

$$P_1 - P_2 = \frac{1}{2} \rho V_1^2 \left( \frac{A_1^2}{A_2^2} - 1 \right)$$

### Step 4: Solve for the Velocity ($V_1$)

Rearrange the equation to solve for the inlet velocity, $V_1$:

$$V_1^2 = \frac{2(P_1 - P_2)}{\rho \left( \frac{A_1^2}{A_2^2} - 1 \right)} = \frac{2(P_1 - P_2) A_2^2}{\rho(A_1^2 - A_2^2)}$$

$$V_1 = A_2 \sqrt{\frac{2(P_1 - P_2)}{\rho(A_1^2 - A_2^2)}}$$

### Step 5: Express in Terms of Manometer Height ($h$)

The pressure difference is often measured with a manometer, where $P_1 - P_2 = \rho g h$. Substituting this into the equation:

$$V_1 = A_2 \sqrt{\frac{2 \rho g h}{\rho(A_1^2 - A_2^2)}}$$

The fluid density $\rho$ cancels out, giving the final expression for the velocity at the inlet:

$$V_1 = \frac{A_2 \sqrt{2 g h}}{\sqrt{A_1^2 - A_2^2}}$$

The **volume flow rate ($Q$)** is then found by multiplying the inlet velocity by the inlet area: $Q = A_1 V_1$.




---

<!-- note kx7f69vz4v151asmyrbhw54n1985p9mn | topic ms746q7b8p5bbc659hwbc54r5h85px04 | status published -->
# Aerofoil

## What Is an Aerofoil?

An aerofoil is a structure with a curved shape, like a wing, designed to generate lift when it moves through a fluid such as air. Its primary application is in aviation, enabling airplanes to fly.

The flight of an aircraft is governed by four primary forces. For stable flight, lift must balance weight, and thrust must balance drag.

| Force | Description |
| :--- | :--- |
| **Lift** | The upward force generated by the aerofoil, acting perpendicular to the airflow. |
| **Drag** | The resistive force that opposes the aerofoil's motion, acting parallel to the airflow. |
| **Weight** | The downward force due to gravity. |
| **Thrust** | The forward force generated by the engines to overcome drag. |

## Working Principle

The generation of lift is primarily explained by two principles:

1. **Bernoulli's Principle:** The curved upper surface of the aerofoil forces air to travel a longer distance than the air flowing under the flatter bottom surface. This means the air on top moves faster. According to Bernoulli's principle, faster-moving air has lower pressure. This pressure difference between the lower (high pressure) and upper (low pressure) surfaces creates a net upward force: lift.

For more details on Bernoulli's principle, refer to <InlineNoteTag label="Bernoulli's Equation" notePath="physics-11/bernoulli-s-equation" />.

The lift force can be calculated as:

$$F_{L} = (P_{1} - P_{2}) \times A$$

where $P_{1}$ is the pressure on the lower surface, $P_{2}$ is the pressure on the upper surface, and $A$ is the wing area.

2. **Newton's Third Law:** The aerofoil is angled to deflect air downwards. According to Newton's Third Law (for every action, there is an equal and opposite reaction), as the wing pushes air down, the air pushes the wing up.

## Angle of Attack and Stalling

- **Angle of Attack (AOA):** This is the angle between the aerofoil's chord line (an imaginary line from its leading to trailing edge) and the direction of the oncoming air.

- **Effect on Lift:** Increasing the AOA generally increases lift, but only up to a certain point.
- **Stall:** If the AOA becomes too high (the *critical angle of attack*), the airflow separates from the upper surface of the aerofoil. This causes a drastic reduction in lift and an increase in drag, a condition known as a stall.
# Spin Bowling and the Magnus Effect

In cricket, when a bowler imparts spin on the ball, it deviates from a straight path as it travels through the air. This curving motion is caused by the **Magnus effect**, which is the result of the interaction between the spinning ball and the surrounding air.

### The Magnus Effect Explained

1. **Spin and Airflow:** A spinning ball drags a thin layer of air with it. On one side of the ball, this layer of air moves in the same direction as the airflow, causing the air to speed up. On the opposite side, it moves against the airflow, slowing it down.
2. **Pressure Difference:** According to **Bernoulli's Principle**, the faster-moving air on one side creates a region of lower pressure, while the slower-moving air on the other side creates a region of higher pressure.
3. **Lateral Force:** This pressure difference generates a net force on the ball, pushing it from the high-pressure side to the low-pressure side. This force is perpendicular to both the direction of the ball's motion and the axis of its spin, causing it to curve or "drift" sideways.

### Types of Spin in Cricket

The direction of drift and subsequent turn off the pitch depends on the spin axis.

| Type of Spin | Spin Direction | Effect in the Air (Drift) |
| :--- | :--- | :--- |
| **Off-Spin** | Rotates clockwise (from bowler's view) | Drifts away from a right-handed batsman. |
| **Leg-Spin** | Rotates counter-clockwise (from bowler's view) | Drifts towards a right-handed batsman. |
| **Top-Spin** | Forward rotation | Causes the ball to "dip" sharply downwards. |
| **Back-Spin** | Backward rotation | Causes the ball to have a flatter trajectory and "skid". |

> **Drift vs Turn:** *Drift* is the sideways deviation of the ball *in the air* before it bounces, caused by the Magnus effect. *Turn* is the deviation *after* the ball bounces, caused by friction between the spinning ball and the pitch surface.

---

<!-- note kx7064xtbtjrcskksm7gkt7c3585q755 | topic ms7by316qjr1tyr6e59p00nwws85prjn | status published -->
# Viscosity and Drag

## How Viscosity Creates Drag

Viscosity is a fundamental property of fluids that measures their resistance to flow. It's what makes honey thick and slow-moving, while water is thin and flows easily. When an object moves through a fluid, this viscosity creates a resistive force known as **drag**, which opposes the object's motion.
## Viscosity

Viscosity can be thought of as the internal friction between the layers of a fluid. A fluid with high internal friction (high viscosity) resists motion, while a fluid with low internal friction (low viscosity) flows readily. Real fluids are viscous because intermolecular forces between fluid layers resist relative sliding motion between those layers.

*   **Coefficient of Viscosity ($\eta$):** This is the quantitative measure of viscosity.
    *   **SI Units:** Pascal-second ($\text{Pa}\cdot\text{s}$), also written as $N\cdot s/m^2$ or $kg\cdot m^{-1}\cdot s^{-1}$.
    *   **Dimensions:** $[ML^{-1}T^{-1}]$
*   **Temperature Dependence:** The effect of temperature on viscosity differs for liquids and gases.
    *   **Liquids:** Viscosity *decreases* as temperature increases (e.g., warm honey flows more easily than cold honey).
    *   **Gases:** Viscosity *increases* as temperature increases.

<InlineNoteTag label="Dimensions" notePath="physics-11/dimensions" />

| Substance | Viscosity (mPa·s at ~20°C) |
| :--- | :--- |
| Water | 1.0 |
| Honey | ~2,000–10,000 |
| Glycerin | ~1,410 |
| Air | ~0.018 |

## Drag Force

Drag is the resistive force exerted by a fluid on an object moving through it. It is the practical consequence of the fluid's viscosity.

*   **Types of Drag:**
    *   **Aerodynamic Drag:** Drag force in a gas (e.g., air resistance on a moving car).
    *   **Hydrodynamic Drag:** Drag force in a liquid (e.g., water resistance on a swimmer).
*   **Factors Affecting Drag Force:** The magnitude of the drag force depends on:
    *   The **velocity** of the object relative to the fluid.
    *   The **size and shape** of the object (streamlined shapes experience less drag).
    *   The **viscosity and density** of the fluid.

## Stokes' Law

Stokes' Law provides a formula to calculate the drag force ($F_d$) on a **small, spherical object** moving at a **low speed** through a viscous fluid (laminar/streamline flow).

$$F_d = 6\pi\eta r v$$

Where:
*   $F_d$ = Drag force (N)
*   $\eta$ = Coefficient of viscosity of the fluid ($\text{Pa}\cdot\text{s}$)
*   $r$ = Radius of the spherical object (m)
*   $v$ = Velocity of the object relative to the fluid ($\text{m/s}$)

**Conditions for validity:** Stokes' Law applies only to small spherical objects at low speeds where flow is laminar (not turbulent).

## Terminal Velocity

When an object falls through a fluid, it initially accelerates due to gravity. As its velocity increases, the drag force also increases (according to Stokes' Law). Eventually, the drag force plus the buoyant (upthrust) force equals the weight of the object. At this point, the net force is zero, and the object falls at a constant speed called **terminal velocity**.

**Condition for terminal velocity:**
$$W = F_d + F_u$$
$$mg = 6\pi\eta r v_t + \rho_f V g$$

For a solid sphere of radius $r$ and density $\rho_s$ falling through a fluid of density $\rho_f$ and viscosity $\eta$, substituting $m = \frac{4}{3}\pi r^3 \rho_s$ and $V = \frac{4}{3}\pi r^3$:

$$v_t = \frac{2r^2(\rho_s - \rho_f)g}{9\eta}$$

This shows that terminal velocity is **directly proportional to $r^2$**: a larger sphere reaches a higher terminal velocity.

<InlineNoteTag label="Equilibrium" notePath="physics-11/equilibrium" />


---

<!-- note kx7ax7f0v0f6k5n7k17csk973n85p8q6 | topic ms76karsyp8pj5g3gje8g0q0j585qvtg | status published -->
# Fluid Friction and Drag

## What Causes Fluid Friction

Fluid friction is the resistive force generated when an object moves through a fluid (a liquid or a gas). This force, commonly known as **drag** or viscous force, opposes the object's motion and arises from the interactions between the object's surface and the fluid's particles.
## Viscosity

Viscosity is a measure of a fluid's internal resistance to flow. It can be thought of as the "thickness" of a fluid. For example, honey has a high viscosity and flows slowly, while water has a low viscosity and flows easily. This internal friction between the layers of a fluid is a primary contributor to drag.

Real fluids exhibit viscosity because their molecules interact with each other, creating internal friction that resists flow. This is why real fluids are **viscous fluids**, unlike the idealised non-viscous (inviscid) fluid assumed in Bernoulli's equation.

The SI unit of the coefficient of viscosity $\eta$ is $\text{Pa}\cdot\text{s}$ (pascal-second), equivalent to $\text{kg}\cdot\text{m}^{-1}\cdot\text{s}^{-1}$. Its dimensions are $[ML^{-1}T^{-1}]$.

<InlineNoteTag label="Derived Units" notePath="physics-11/derived-units" />
## Drag Force

Drag is the component of fluid friction that acts parallel and opposite to an object's direction of motion. The magnitude of the drag force is influenced by several factors:

- **Velocity of the Object:** The faster the object moves, the greater the drag force.
- **Size and Shape of the Object:** Streamlined or aerodynamic shapes experience less drag.
- **Fluid Properties:** The density and viscosity of the fluid significantly affect drag. Denser and more viscous fluids create more resistance.

The general equation for drag force, particularly at higher velocities, is:

$$
F_D = \frac{1}{2} \rho v^2 C_D A
$$

Where:
- $F_D$ = Drag force
- $\rho$ = Density of the fluid
- $v$ = Velocity of the object relative to the fluid
- $C_D$ = Drag coefficient (a dimensionless number that depends on the object's shape)
- $A$ = Cross-sectional area of the object perpendicular to the flow

<InlineNoteTag label="Dimensions" notePath="physics-11/dimensions" />

Viscous forces in a fluid create a retarding force on a moving object through friction between the object's surface and adjacent fluid layers. As the object moves, it drags some fluid along with it, and fluid layers at different velocities exert shear stresses on each other, opposing the motion.

## Stokes' Law

Stokes' Law is a specific formula used to calculate the drag force on a **small spherical object** moving at a **low velocity** through a viscous fluid. The flow of the fluid around the sphere must be smooth and orderly (laminar flow).

The formula is given by:

$$
F = 6\pi \eta r v
$$

Where:
- $F$ = Viscous drag force (Stokes' drag)
- $\eta$ = Coefficient of viscosity of the fluid
- $r$ = Radius of the spherical object
- $v$ = Velocity of the object

Stokes' Law is applicable under the following conditions:
1. The object must be a perfect sphere.
2. The velocity must be low enough to ensure laminar (streamline) flow around the sphere.
3. The fluid must be viscous and incompressible.

### Comparison: Stokes' Law and General Drag Equation

| Factor | Stokes' Law ($F = 6\pi \eta r v$) | General Drag Equation ($F_D = \frac{1}{2} \rho v^2 C_D A$) |
| :--- | :--- | :--- |
| **Object Shape** | Assumes a perfect sphere | Applicable to any shape (accounted for by $C_D$) |
| **Flow Condition** | Valid for low velocities (laminar flow) | Applicable for higher velocities (turbulent flow) |
| **Velocity Dependence** | Proportional to velocity ($v$) | Proportional to the square of the velocity ($v^2$) |

## Terminal Velocity

When an object falls through a fluid, it initially accelerates due to gravity. As its velocity increases, the drag force also increases. Eventually, the drag force equals the weight of the object (minus any upthrust), and the net force becomes zero. From this point, the object falls at a constant velocity called the **terminal velocity**.

<InlineNoteTag label="Equilibrium" notePath="physics-11/equilibrium" />

At terminal velocity, the forces are balanced:

$$
mg = F_D + \text{upthrust}
$$

For a sphere in a viscous fluid, substituting Stokes' Law:

$$
mg = 6\pi \eta r v_t + \rho_f V g
$$

where $v_t$ is the terminal velocity and $\rho_f$ is the fluid density.

## Applications

Understanding fluid friction has practical uses in sports and engineering. Cyclists and speed skaters wear smooth, tight-fitting clothing to minimize drag: the streamlined shape and smooth texture reduce the fluid friction from the air, allowing them to travel faster with the same amount of effort.


---

<!-- note kx78fpzfq8t2t9whsscc22zpcd85p1xm | topic ms78zd4v411g5zhy3024khws9h85pbvw | status published -->
# Terminal Velocity

## The Terminal Velocity Condition

Terminal velocity is the maximum constant speed that a freely falling object eventually reaches when the resistance of the medium (like air or water) through which it is moving equals the force of gravity. At this point, the net force on the object is zero, and it stops accelerating, continuing to fall at a constant velocity.
## Forces in Balance

The motion of an object falling through a fluid is governed by two primary forces:

1. **Gravitational Force ($F_g$):** The force of weight pulling the object downward ($F_g = mg$). This force is constant.
2. **Drag Force ($F_D$):** The fluid friction that opposes the object's motion, acting upward. This force is not constant; it increases as the object's velocity increases.

Terminal velocity is achieved when these two forces become equal in magnitude and opposite in direction.

$$F_g = F_D$$

At this equilibrium point, the net force is zero, and according to Newton's Second Law ($F_{net} = ma$), the acceleration ($a$) becomes zero.

## Mathematical Derivation (for a Sphere)

We can derive a formula for the terminal velocity ($v_t$) of a spherical object using **Stokes' Law** for the drag force:

$$F_D = 6\pi \eta r v$$

where $\eta$ is the viscosity of the fluid, $r$ is the radius of the sphere, and $v$ is its velocity.

### Derivation Steps

1. **Force Balance:** At terminal velocity, the gravitational force equals the drag force.

$$mg = 6\pi \eta r v_t$$

2. **Expressing Mass in Terms of Density:** The mass ($m$) of a sphere is its density ($\rho$) multiplied by its volume ($V = \frac{4}{3} \pi r^3$).

$$m = \rho \cdot \frac{4}{3} \pi r^3$$

3. **Substituting and Solving for $v_t$:** Substitute the expression for mass into the force balance equation:

$$\left(\rho \cdot \frac{4}{3} \pi r^3\right) g = 6\pi \eta r v_t$$

Rearranging and simplifying:

$$v_t = \frac{2 \rho g r^2}{9 \eta}$$

This formula shows that terminal velocity is:
- **Directly proportional** to the square of the object's radius: $v_t \propto r^2$
- **Inversely proportional** to the viscosity of the fluid: $v_t \propto \frac{1}{\eta}$
- **Directly proportional** to the density of the object: $v_t \propto \rho$

## Application: A Paratrooper's Jump

The jump of a paratrooper is a classic real-world example of manipulating drag to control terminal velocity.

- **Phase 1: Freefall (Before Opening Parachute)**
  - The paratrooper accelerates downwards due to gravity.
  - As their speed increases, the upward drag force also increases.
  - Eventually, the drag force balances their weight, and they reach a high terminal velocity (approximately 50–60 m/s or 120 mph).

- **Phase 2: Parachute Deployed**
  - Opening the parachute dramatically increases the surface area, which massively increases the drag force.
  - The upward drag force is now much greater than the downward force of gravity, causing the paratrooper to rapidly decelerate.
  - As they slow down, the drag force decreases until it once again balances their weight.
  - A new, much lower terminal velocity is reached (approximately 5–7 m/s or 15 mph), allowing for a safe landing.

## Conceptual Questions

- **Q:** Why does a crumpled piece of paper fall faster than a flat sheet?
  **A:** The crumpled paper has a much smaller surface area exposed to the air, which results in a significantly lower drag force. Because its weight is the same as the flat sheet, it must reach a higher speed before the small drag force can balance its weight.

- **Q:** Do heavier objects always fall faster?
  **A:** In a vacuum, all objects fall at the same rate. In a fluid like air, a heavier object of the same size and shape will have a higher terminal velocity because a greater drag force (and thus a higher speed) is needed to counteract its greater weight.

<InlineNoteTag label="Equilibrium" notePath="physics-11/equilibrium" />

---

<!-- note kx7ctrw5qnmxwwf1j86a09kf7x85qdbq | topic ms790qdz17q40ndc6mk4z1m79x85q2d8 | status published -->
# Superfluidity

## What Is Superfluidity?

Superfluidity is a state of matter in which a fluid flows with **zero viscosity**. This means it moves without any loss of kinetic energy due to internal friction. Because of this property, superfluids exhibit several unusual behaviors, such as defying gravity by creeping up and over the walls of a container.
## Characteristics of a Superfluid

- **Zero Viscosity:** The most defining property. A superfluid has no internal friction, allowing it to flow without resistance.
- **Persistent Motion:** Once set in motion, a superfluid will form vortices that spin indefinitely without slowing down.
- **High Thermal Conductivity:** Superfluids conduct heat with extreme efficiency, far better than any other known substance.
- **Quantum Effects:** Its behavior is a macroscopic manifestation of quantum mechanics, where individual atoms act in a coherent, collective state.

This relates to the concept of non-viscous flow studied in fluid mechanics. An ideal fluid is defined as one that has no viscosity, and superfluidity represents an extreme case of such flow at extremely low temperatures.

## Examples and Creation

Superfluidity occurs only at extremely low temperatures, close to absolute zero. The temperature at which the transition occurs is known as the **Lambda Point** ($T_\lambda$).

| Substance | Superfluid Transition Temperature |
| :--- | :--- |
| **Helium-4 ($^4$He)** | Below 2.17 K (−270.98 °C) |
| **Helium-3 ($^3$He)** | Below 0.0025 K |

Other examples where superfluid-like behavior is observed include:

- Electrons in **superconductors**.
- Neutron fluids within **neutron stars**.
- **Ultracold atomic gases** in laboratory settings.

To achieve a superfluid state, a substance like helium gas is cooled by compressing it and then allowing it to expand rapidly. This process is repeated until it liquefies and reaches its transition temperature.

## Quantized Vortices

The rotation of a superfluid is fundamentally different from that of a normal fluid.

- **Critical Angular Velocity:** When a container holding a superfluid is rotated slowly, the fluid inside remains perfectly stationary.
- **Vortex Formation:** If the rotation speed exceeds a certain critical velocity, the fluid begins to rotate by forming tiny, discrete whirlpools called **quantized vortices**. The strength of these vortices is quantized, meaning they can only exist in specific, discrete states.
- **Pattern Formation:** As the rotation speed increases further, an array of these vortices forms a regular, lattice-like pattern.

## Applications

The unique properties of superfluids make them useful in highly specialized scientific and technological fields:

1. **High-Precision Devices:** Used in ultra-sensitive gyroscopes for measuring minute changes in rotation, which can be applied to geodesy and tests of general relativity.
2. **Quantum Research:** Superfluids provide a macroscopic system for studying the laws of quantum mechanics directly.
3. **Coolants:** Superfluid helium is an exceptional coolant used for high-field magnets in devices like MRI machines and particle accelerators.
4. **Optical Applications:** Researchers have used superfluids to slow down and even trap light.


