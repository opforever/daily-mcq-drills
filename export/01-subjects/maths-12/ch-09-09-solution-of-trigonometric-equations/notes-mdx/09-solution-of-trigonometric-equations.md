<!-- note kx70rbyje51cyb6ntdxtnyvxbd85qws0 | topic ms7cfj2zcpbv4j0ay2ensdja2d85q28p | status published -->
# 9.1 Exercise 9.1

# **Key Concepts**

This exercise focuses on the following concepts:

*   Solving basic and multi-step trigonometric equations.
*   Working with specific domains in both radians ($[0, 2\pi]$) and degrees ($[0^\circ, 360^\circ]$).
*   Finding general solutions for sine, cosine, and tangent functions.
*   Applying the property of periodicity to find multiple solutions.

*   Understanding the difference between inclusive and exclusive intervals (e.g., $[0, 2\pi]$ vs $[0, 2\pi)$).

---

# **Important Formulas**

Below are the key formulas used in this exercise:

**General Solutions (where $n \in \mathbb{Z}$):**

| Equation | General Solution (Radians) |
| :--- | :--- |
| $\sin \theta = a$ | $\theta = n\pi + (-1)^n \arcsin(a)$ |

| $\cos \theta = a$ | $\theta = 2n\pi \pm \arccos(a)$ |

| $\tan \theta = a$ | $\theta = n\pi + \arctan(a)$ |

**Periodicity Identities:**
*   $\sin(\theta + 2\pi k) = \sin \theta$
*   $\cos(\theta + 2\pi k) = \cos \theta$
*   $\tan(\theta + \pi k) = \tan \theta$

---

# **Summary**

This exercise covers the fundamental techniques for solving trigonometric equations. Key learnings include identifying all possible solutions within a restricted interval by considering the unit circle or the function's graph, and expressing the infinite set of solutions using general solution formulas. Strategies involve isolating the trigonometric term, determining the reference angle, and adjusting for the specific period of the function (especially when the argument is modified, such as $2\theta$ or $\theta + \phi$).

---

<!-- note kx76tvk3zav2frevnjwkfxh4nn85qk45 | topic ms76j6jg19nwx99h6jhvpev0nx85psr1 | status published -->
# 9.2 Exercise 9.2

# **Exercise Questions**

<ExerciseQuestionList questions="[{&quot;num&quot;:1,&quot;path&quot;:&quot;exercises/class-12/maths/09_Solution of Trigonometric Equations/9.2 Q&A/9.2 Q-1.md&quot;,&quot;statement&quot;:&quot;Solve the following trigonometric equations graphically:&quot;}]"></ExerciseQuestionList>

---
---

# **Key Concepts**

This exercise focuses on the following concepts:

- **Graphical Solutions:** Finding the roots of an equation by identifying where two functions intersect on a coordinate plane.

- **Trigonometric Functions:** Understanding the periodic behavior and wave patterns of sine, cosine, and tangent functions.

- **Points of Intersection:** Determining the $x$-values where $f(x) = g(x)$ visually.

---

# **Important Formulas**

Below are the key formulas used in this exercise:

| Function Type | Standard Form |
| :--- | :--- |
| Sine Function | $y = \sin(x)$ |
| Cosine Function | $y = \cos(x)$ |
| Tangent Function | $y = \tan(x)$ |
| Intersection Method | $f(x) = g(x)$ |

---

# **Summary**

This exercise focuses on solving trigonometric equations using graphical methods. The primary strategy involves plotting the trigonometric functions involved and identifying their intersection points within a specified domain. This approach provides a visual understanding of the number of solutions and their approximate values based on the periodicity of the functions.

---

<!-- note kx792mvrz1bxqfqq3t4rqset6s85qykr | topic ms7b97k9jtt2h324t4f5f08gpx85pag5 | status published -->
# 9.3 Exercise 9.3

# **Key Concepts**

## Angles of Elevation and Depression

- The **angle of elevation** is the angle measured **upward** from the horizontal to the line of sight toward an object above.
- The **angle of depression** is the angle measured **downward** from the horizontal to the line of sight toward an object below.
- These two angles are **equal** when measured from two ends of the same line of sight, because they are **alternate interior angles** between parallel horizontal lines.

## Right-Angled Trigonometry (SOH CAH TOA)

For a right triangle with angle $\theta$:

| Ratio | Formula |
| :--- | :--- |
| **Sine** | $\sin(\theta) = \dfrac{\text{Opposite}}{\text{Hypotenuse}}$ |
| **Cosine** | $\cos(\theta) = \dfrac{\text{Adjacent}}{\text{Hypotenuse}}$ |
| **Tangent** | $\tan(\theta) = \dfrac{\text{Opposite}}{\text{Adjacent}}$ |
| **Pythagorean Theorem** | $a^2 + b^2 = c^2$ |

## Inverse Trigonometric Functions

When side lengths are known and an angle must be found, use the inverse functions:

$$\theta = \sin^{-1}\!\left(\frac{\text{Opp}}{\text{Hyp}}\right), \quad \theta = \cos^{-1}\!\left(\frac{\text{Adj}}{\text{Hyp}}\right), \quad \theta = \tan^{-1}\!\left(\frac{\text{Opp}}{\text{Adj}}\right)$$

## Proportional Reasoning with Shadows

At the same time of day, the sun's angle of elevation $\theta$ is constant. If a flagpole of height $h_1$ casts a shadow $s_1$, and a building casts a shadow $s_2$, then:

$$\frac{h_1}{s_1} = \tan(\theta) = \frac{h_2}{s_2} \implies h_2 = \frac{h_1 \cdot s_2}{s_1}$$

---

# **Worked Examples**

## Example 1: Finding Height Using Angle of Elevation

**Problem:** A person stands 50 m from the base of a building and measures the angle of elevation to the top as $32°$. Find the height of the building.

**Solution:**
$$\tan(32°) = \frac{h}{50} \implies h = 50 \times \tan(32°) \approx 50 \times 0.6249 \approx 31.2 \text{ m}$$

## Example 2: Finding an Angle Using Inverse Trig

**Problem:** A ramp rises 1.2 m over a horizontal distance of 6 m. Find the angle of inclination.

**Solution:**
$$\tan(\theta) = \frac{1.2}{6} = 0.2 \implies \theta = \tan^{-1}(0.2) \approx 11.3°$$

## Example 3: Angle of Depression

**Problem:** From the top of a 40 m cliff, the angle of depression to a boat is $25°$. How far is the boat from the base of the cliff?

**Solution:** The angle of depression equals the angle of elevation from the boat, so:
$$\tan(25°) = \frac{40}{d} \implies d = \frac{40}{\tan(25°)} \approx \frac{40}{0.4663} \approx 85.8 \text{ m}$$

---

# **Summary**

This exercise applies basic trigonometric principles to practical engineering, architecture, and surveying problems. The primary strategy involves:
1. Identifying the right-angled triangle within the word problem.
2. Labelling the known components (angles or sides).
3. Selecting the appropriate trigonometric ratio (SOH CAH TOA) to solve for the unknown.
4. Using inverse trig functions ($\sin^{-1}$, $\cos^{-1}$, $\tan^{-1}$) when an angle must be found from side lengths.
5. Applying similar-triangle proportions for shadow problems.