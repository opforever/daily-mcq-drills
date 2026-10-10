<!-- note kx7fj2r8wqjsekqqx4a2py04qd85qa80 | topic ms74bvekp0hjr0x4811zp7rzns85qd64 | status published -->
# 9.1 Maximum and Minimum Values of Trigonometric Functions

# 9.1 Maximum and Minimum Values of Trigonometric Functions

## Domain and Range of Trigonometric Functions

The six trigonometric functions have the following domains and ranges:

| Function | Domain | Range |
|---|---|---|
| $\sin x$ | $\mathbb{R}$ | $[-1,\, 1]$ |
| $\cos x$ | $\mathbb{R}$ | $[-1,\, 1]$ |
| $\tan x$ | $\mathbb{R} \setminus \left\{\frac{(2n+1)\pi}{2} : n \in \mathbb{Z}\right\}$ | $(-\infty,\, \infty)$ |
| $\cot x$ | $\mathbb{R} \setminus \{n\pi : n \in \mathbb{Z}\}$ | $(-\infty,\, \infty)$ |
| $\sec x$ | $\mathbb{R} \setminus \left\{\frac{(2n+1)\pi}{2} : n \in \mathbb{Z}\right\}$ | $(-\infty,-1] \cup [1,\infty)$ |
| $\csc x$ | $\mathbb{R} \setminus \{n\pi : n \in \mathbb{Z}\}$ | $(-\infty,-1] \cup [1,\infty)$ |

---

## Even and Odd Trigonometric Functions

A function $f(x)$ is:
- **Even** if $f(-x) = f(x)$ for all $x$ in its domain (graph symmetric about the y-axis).
- **Odd** if $f(-x) = -f(x)$ for all $x$ in its domain (graph symmetric about the origin).

### Classification of Trig Functions

| Even | Odd |
|---|---|
| $\cos(-x) = \cos x$ | $\sin(-x) = -\sin x$ |
| $\sec(-x) = \sec x$ | $\tan(-x) = -\tan x$ |
| | $\cot(-x) = -\cot x$ |
| | $\csc(-x) = -\csc x$ |

**Example:** Show that $f(x) = \dfrac{x^2 \tan x}{x + \sin x}$ is even.

$$f(-x) = \frac{(-x)^2 \tan(-x)}{(-x) + \sin(-x)} = \frac{x^2(-\tan x)}{-(x + \sin x)} = \frac{-x^2 \tan x}{-(x + \sin x)} = \frac{x^2 \tan x}{x + \sin x} = f(x)$$

Since $f(-x) = f(x)$, the function is **even**.

---

## Periodicity of Trigonometric Functions

A function $f(x)$ is **periodic** with period $T$ if $f(x + T) = f(x)$ for all $x$, and $T$ is the smallest such positive number.

| Function | Period |
|---|---|
| $\sin x$, $\cos x$ | $2\pi$ |
| $\tan x$, $\cot x$ | $\pi$ |
| $\sec x$, $\csc x$ | $2\pi$ |

### Period of Transformed Functions

$$\text{Period of } \sin(ax) \text{ or } \cos(ax) = \frac{2\pi}{|a|}$$

$$\text{Period of } \tan(ax) \text{ or } \cot(ax) = \frac{\pi}{|a|}$$

**Example:** Find the period of $y = \sin\!\left(\dfrac{ax}{b}\right)$.

Here $k = \dfrac{a}{b}$, so period $= \dfrac{2\pi}{a/b} = \dfrac{2\pi b}{a}$.

### Period of a Sum of Two Trig Functions

For $y = f(x) + g(x)$, find the period of each term separately, then take their **LCM**.

**Example:** Find the period of $y = \sin x + \cos 2x$.
- Period of $\sin x = 2\pi$
- Period of $\cos 2x = \pi$
- LCM$(2\pi,\, \pi) = 2\pi$

So the period of $y$ is $2\pi$.

---

## Maximum and Minimum Values

### Standard Form: $y = a + b\sin(cx + d)$ or $y = a + b\cos(cx + d)$

Since $-1 \leq \sin(cx+d) \leq 1$:

$$\boxed{\text{Maximum} = a + |b|, \qquad \text{Minimum} = a - |b|}$$

**Example:** Find the max and min of $y = 5 - 3\cos(2\theta)$.

Here $a = 5$, $b = -3$, so $|b| = 3$.
- Maximum $= 5 + 3 = 8$ (when $\cos 2\theta = -1$)
- Minimum $= 5 - 3 = 2$ (when $\cos 2\theta = 1$)

### Reciprocal Functions: $y = \dfrac{1}{f(x)}$ where $f(x) > 0$

When the denominator is **smallest**, $y$ is **largest**, and vice versa:

$$\text{Maximum of } y = \frac{1}{\min f(x)}, \qquad \text{Minimum of } y = \frac{1}{\max f(x)}$$

**Example:** Find the max and min of $y = \dfrac{1}{3 + 2\sin\theta}$.

- $\max(3 + 2\sin\theta) = 3 + 2 = 5$ (when $\sin\theta = 1$)
- $\min(3 + 2\sin\theta) = 3 - 2 = 1$ (when $\sin\theta = -1$)
- Maximum of $y = \dfrac{1}{1} = 1$
- Minimum of $y = \dfrac{1}{5}$

---

## Graphs and Properties of $\sin\theta$, $\cos\theta$, and $\tan\theta$

### $y = \sin\theta$
- **Domain:** $\mathbb{R}$ &nbsp;|&nbsp; **Range:** $[-1, 1]$
- **Period:** $2\pi$ &nbsp;|&nbsp; **Amplitude:** $1$
- **Parity:** Odd — symmetric about the origin
- Passes through $(0, 0)$; maximum at $\theta = \pi/2$; minimum at $\theta = 3\pi/2$

### $y = \cos\theta$
- **Domain:** $\mathbb{R}$ &nbsp;|&nbsp; **Range:** $[-1, 1]$
- **Period:** $2\pi$ &nbsp;|&nbsp; **Amplitude:** $1$
- **Parity:** Even — symmetric about the y-axis
- Maximum at $\theta = 0$; zero crossings at $\theta = \pm\pi/2$

### $y = \tan\theta$
- **Domain:** $\mathbb{R} \setminus \left\{\frac{(2n+1)\pi}{2}\right\}$ &nbsp;|&nbsp; **Range:** $(-\infty, \infty)$
- **Period:** $\pi$ &nbsp;|&nbsp; **No amplitude** (unbounded)
- **Parity:** Odd — symmetric about the origin
- Vertical asymptotes at $\theta = \pm\dfrac{\pi}{2}, \pm\dfrac{3\pi}{2}, \ldots$

### Graphical Solution of Equations

To solve $\cos x = x$ graphically: plot $y = \cos x$ and $y = x$ on the same axes. The x-coordinate(s) of their intersection point(s) are the solutions.

---

<!-- note kx75tyeys00xkxd644s7ndeg7d8cv23z | topic ms70253wghhyr6hdkvhxac7r5h8ctspq | status published -->
# 9.2 Periodicity of Trigonometric Functions

## Definition and Periodicity

We often encounter periodic phenomenon in the nature, technology, and human society. Recall the 24 -hour day-night cycle, or tidal cycles caused by the moon revolving around the earth.
A periodic function is a function whose value repeats after a specific time interval. A periodic function is represented as :

$$
f(x+p)=f(x)
$$

Where " $p$ " is the period of the function. For example, Sine wave, triangular wave, square wave, and saw tooth wave are periodic in nature.
![](./images/89189a19-df1f-47fb-acbf-2844bf358a05-221_336_449_1683_510.jpg)
![](./images/89189a19-df1f-47fb-acbf-2844bf358a05-221_249_464_1690_1062.jpg)

Saw tooth wave
All trigonometric functions repeat itself at regular intervals, or periods. The values of trigonometric functions for ' $\theta$ ' and ' $2 \mathrm{n} \pi \pm \theta$ ', where $\theta \in \mathbb{R}$ and $n \in \mathrm{Z}$, are same. This periodic behavior of trigonometric functions is called periodicity.
![](./images/89189a19-df1f-47fb-acbf-2844bf358a05-221_179_1199_2228_462.jpg)

## Periodicity of Sine Function

Suppose " $p$ " is the period of Sine function, then:

$$
\begin{equation*}
\sin (\theta+p)=\sin \theta \tag{i}
\end{equation*}
$$

Now putting $\theta=0$, we have:
![](./images/89189a19-df1f-47fb-acbf-2844bf358a05-222_116_114_292_1103.jpg)

Period of a trigonometric function is the smallest +ve integer which when added to the original circular measure of the angle, gives the same value of the function.

Case 1: Put $p=\pi$ in (i) , $\operatorname{Sin}(\theta+\pi)=\operatorname{Sin} \theta$, which is not true.

$$
\because \operatorname{Sin}(\pi+\theta)=-\operatorname{Sin} \theta
$$

$\therefore \quad \pi$ is not the period of $\operatorname{Sin} \theta$.
Case 2: $\quad$ Put $p=2 \pi$ in (i)

$$
\begin{equation*}
(\theta+2 \pi)=\operatorname{Sin} \theta \tag{ii}
\end{equation*}
$$

From (ii) $\quad$ L.H.S $=\quad(2 \pi+\theta)=\operatorname{Sin}\left(4 \frac{\pi}{2}+\theta\right)=\operatorname{Sin} \theta=$ R.H.S
Since terminal side of angle is in first quadrant, and ' $2 \pi$ ' is the smallest +ve real number for which: $\quad \operatorname{Sin}(\theta+2 \pi)=\operatorname{Sin} \theta$.

Key Facts

$$
\therefore 2 \pi \text { is the period of } \operatorname{Sin} \theta .
$$

![](./images/89189a19-df1f-47fb-acbf-2844bf358a05-222_119_121_1227_1108.jpg)

Cosine is the periodic function and its period is $2 \pi$.

## Periodicity of Tangent Function

$$
\cos (\theta+2 \pi)=\cos \theta
$$

Suppose " $p$ " is the period of Tangent function, then:

$$
\begin{equation*}
\tan (\theta+p)=\tan \theta \tag{i}
\end{equation*}
$$

Now putting $\theta=0$ in (i), we have:

$$
\begin{array}{ll} 
& \tan (0+p)=\tan 0 \\
\Rightarrow & \tan p=0 \\
\Rightarrow & p=\tan ^{-1}(0)=0, \pi, 2 \pi, 3 \pi, \ldots
\end{array}
$$

Put $p=\pi$ in (i)

$$
\begin{equation*}
\operatorname{Tan}(\theta+\pi)=\operatorname{Tan} \theta \tag{ii}
\end{equation*}
$$

From (ii): L.H.S $=\boldsymbol{\operatorname { T a n }}(\boldsymbol{\pi}+\boldsymbol{\theta})=\boldsymbol{\operatorname { T a n }}\left(2 \frac{\pi}{2}+\boldsymbol{\theta}\right)=\boldsymbol{\operatorname { T a n }} \boldsymbol{\theta}=$ R.H.S
Since terminal side of an angle is in third quadrant, and ' $\pi$ ' is the least +ve real number for which:

$$
\operatorname{Tan}(\theta+\pi)=\operatorname{Tan} \theta
$$

$\therefore \quad \pi$ is the period of $\operatorname{Tan} \theta$.

Cotangent is the periodic function and its period is $\pi$.

$$
\cot (\theta+\pi)=\cot \theta
$$

If " $p$ " is the period of a periodic function $f(x)$, then $\frac{1}{f(x)}$ is also a periodic function and will have the same period " $p$ " as $f(x)$.

Thus, $\mathrm{y}=\operatorname{cosec} \theta$ is a periodic function and its period is $2 \pi$ because $\sin \theta=\frac{1}{\operatorname{cosec} \theta}$. Similarly, $\mathrm{y}=\sec \theta$ is a periodic function and its period is $2 \pi$ because $\cos \theta=\frac{1}{\sec \theta}$. If " $p$ " is the period of the periodic function $f(x)$, then $f(a x+b), a>0$ is also a periodic function with a period $\frac{p}{|a|}$.

| Trigonometric Functions | Period | Trigonometric Function | Period |
| :--- | :--- | :--- | :--- |
| $f(x)=\operatorname{Sin} x$ | $2 \pi$ | $f(x)=\sin a x$ or $f(x)=\operatorname{Sin}(a x+b)$ | $\frac{2 \pi}{\|a\|}$ |
| $f(x)=\operatorname{Cos} x$ | $2 \pi$ | $f(x)=\cos a x$ or $f(x)=\cos (a x+b)$ | $\frac{2 \pi}{\|a\|}$ |
| $f(x)=\boldsymbol{\operatorname { T a n }} \boldsymbol{x}$ | $\boldsymbol{\pi}$ | $f(x)=\tan a x \quad$ or $\quad f(x)=\tan (a x+b)$ | $\frac{\pi}{\|a\|}$ |
| $f(x)=\operatorname{Cot} x$ | $\pi$ | $f(x)=\cot a x$ or $f(x)=\cot (a x+b)$ | $\frac{\pi}{\|a\|}$ |
| $f(x)=\operatorname{Sec} x$ | $2 \pi$ | $f(x)=\sec a x$ or $f(x)=\sec (a x+b)$ | $\frac{2 \pi}{\|a\|}$ |
| $f(x)=\operatorname{Cosec} x$ | $2 \pi$ | $f(x)=\operatorname{cosec} a x$ or $f(x)=\operatorname{cosec}(a x+b)$ | $\frac{2 \pi}{\|a\|}$ |

Example 2:
Find the periods of:
(i) $f(x)=\sin 3 x$
(ii) $f(x)=\cos \frac{2 x}{5}$
(iii) $f(x)=\tan \frac{5 x}{7}$

Solution:

(i) We know that period of sine function is $2 \pi$, i. e., period of $\sin x=2 \pi$

Period of $\sin (a x+b)=\frac{2 \pi}{|a|}$, where $a=3$
Key Facts

⇒ Period of $\sin 3 x=\frac{2 \pi}{3}$
(ii) We know that period of $\cos x=2 \pi$

Period of $\cos (a x+b)=\frac{2 \pi}{|a|}$, where $a=\frac{2}{5}$
⇒ Period of $\cos \frac{2 x}{5}=\frac{2 \pi}{\frac{2}{5}}=2 \pi \cdot \frac{5}{2}=5 \pi$.
Hence, $5 \pi$ is period of $\cos \frac{2 x}{5}$.
Check: Since ' $5 \pi$ ' is period of $\cos \frac{2 x}{5}$.

$$
\therefore \cos \left(\frac{2 x}{5}+5 \pi\right)=\cos \frac{2}{5}(x+2 \pi)
$$

This clearly shows that ' $5 \pi$ ' is period of $\cos \frac{2 x}{5}$.

- Periodicity of $\cos ^{n}(x)=\frac{2 \pi}{2}=\pi$

$$
=\frac{\text { Periodicity of } \operatorname{Cos} x}{2} \text { (if ' } \mathrm{n} \text { ' is even) }
$$

- Periodicity of $\cos ^{\mathrm{n}}(x)$
= Periodicity of $\cos x$

$$
=2 \pi \text { (if ' } n \text { ' is odd) }
$$

- Similarly, for Sine function.
- Periodicity of $\tan ^{\mathrm{n}}(x)$
= Periodicity of $\tan x$ (no matter ' n ' is even or odd).
(iii) We know that the period of Tangent is $\pi$, i.e., Period of $\tan x=\pi$.

Period of $\tan (a x+b)=\frac{\pi}{|a|}$, where $a=\frac{5}{7}$
$\Rightarrow \quad$ Period of $\tan \frac{5 x}{7}=\frac{\pi}{5}=\pi \cdot \frac{7}{5}=\frac{7 \pi}{5}$.
Hence, $\quad \frac{7 \pi}{5}$ is period of $\tan \frac{5 x}{7}$.
Note: If " $p$ " is the period of the periodic function $f(x)$ then $a f(x)+b, a>0$, is also a periodic function with a period of " $p$ ",

| Trigonometric Functions | Period | Trigonometric Function | Period |
| :--- | :--- | :--- | :--- |
| $\boldsymbol{f} \boldsymbol{(} \boldsymbol{x} \boldsymbol{)} \boldsymbol{=} \boldsymbol{a} \boldsymbol{\operatorname { s i n }} \boldsymbol{x} \boldsymbol{+} \boldsymbol{b}$ | $2 \pi$ | $f(x)=a \operatorname{cosec} x+b$ | $2 \pi$ |
| $f(x)=a \cos x+b$ | $2 \pi$ | $\boldsymbol{f} \boldsymbol{(} \boldsymbol{x} \boldsymbol{)} \boldsymbol{=} \boldsymbol{a} \boldsymbol{\operatorname { s e c }} \boldsymbol{x} \boldsymbol{+} \boldsymbol{b}$ | $2 \pi$ |
| $f(x)=a \tan x+b$ | $\pi$ | $f(x)=a \cot x+b$ | $\pi$ |

Example 3: Find the period of $f(x)=\cot 3 x+\sin \frac{2 x}{3}$.
Solution:

| Period of $f(x)=\cot 3 x$ | Period of $f(x)=\sin \frac{2 x}{3}$ |
| :--- | :--- |
| Since, period of $\cot x=\pi$ <br> Period of $\cot (a x+b)=\frac{\pi}{\|\alpha\|} \quad$ where $a=3$ <br> Thus, the period of $\cot 3 x=\frac{\pi}{3}$ | Since, period of $\sin x=2 \pi$ <br> Period of $\sin (a x+b)=\frac{2 \pi}{\|a\|}$ where $a=\frac{2}{3}$ <br> Thus, the period of $\sin \frac{2 x}{3}=\frac{2 \pi}{\frac{2}{3}}=3 \pi$ |

Hence,

$$
\text { Period of } f(x)=\frac{3 \pi}{1}=3 \pi
$$

Hence, $3 \pi$ is a period of $\cot 3 x+\sin \frac{2 x}{3}$.

$$
\text { Period of } f(x)=\frac{\text { L.C.M of } \pi \text { and } 3 \pi}{\text { H.C.F of } 3 \text { and } 1}
$$

Example 4: Find the period of $f(x)=7 \sin (3 x+5)$.
Solution: $\quad f(x)=7 \sin (3 x+5)$
Since, period of $\sin x=2 \pi$
Period of $\sin (a x+b)=\frac{2 \pi}{|a|}$ where $a=3$
Thus, the period of $7 \sin (3 x+5)=\frac{2 \pi}{3}$.