<!-- note kx72z4t74d4cd17xkb527f95bx85p6r6 | topic ms73cdtkq708crtrgffkpjn1td85px0q | status published -->
# 1.1 Data Representation in a Digital Computer

Digital computers store and process all information, numbers, text, images, sound, using only two symbols: **0** and **1**. This section explains why binary is used and how data is organized in a digital system.

---

## Why Binary?

A digital computer is built from millions of tiny electronic switches called **transistors**. Each transistor has exactly two stable states:

| State | Voltage Level | Binary Digit |
|-------|--------------|-------------|
| ON    | High (~5V or ~3.3V) | 1 |
| OFF   | Low (~0V)    | 0 |

Because hardware can reliably distinguish between only **two** voltage levels, the **binary number system** (base-2) is the natural choice for representing data. Using more than two levels would make circuits far more complex and error-prone.

---

## Units of Data

### Bit
A **bit** (binary digit) is the **most fundamental unit** of data. It holds a single value: either **0** or **1**.

### Nibble
A **nibble** is a group of **4 bits**. It can represent $2^4 = 16$ different values (0–15).

### Byte
A **byte** is a group of **8 bits**. It can represent $2^8 = 256$ different values and is typically used to store a single character.

### Larger Units

| Unit      | Size         |
|-----------|--------------|
| Kilobyte (KB) | $2^{10}$ bytes = 1,024 bytes |
| Megabyte (MB) | $2^{20}$ bytes ≈ 1 million bytes |
| Gigabyte (GB) | $2^{30}$ bytes ≈ 1 billion bytes |
| Terabyte (TB) | $2^{40}$ bytes ≈ 1 trillion bytes |

---

## Character Encoding

To represent text, computers use **character encoding** schemes that map characters to binary numbers.

### ASCII
**ASCII** (American Standard Code for Information Interchange) is the most widely used encoding for English text.

- **Standard ASCII**: uses **7 bits** → $2^7 = 128$ characters (letters A–Z, a–z, digits 0–9, punctuation, control characters)
- **Extended ASCII**: uses **8 bits** → $2^8 = 256$ characters (adds special symbols and accented letters)

**Example:**
- The letter `A` = ASCII code 65 = binary `01000001`
- The letter `a` = ASCII code 97 = binary `01100001`

### Unicode
**Unicode** is a universal encoding standard designed to represent **all written languages** in the world.

- Assigns a unique **code point** to every character in every language (Latin, Arabic, Chinese, Urdu, emoji, etc.)
- The most common implementation is **UTF-8**, which uses 1–4 bytes per character
- Backward compatible with ASCII for the first 128 characters

### EBCDIC
**EBCDIC** (Extended Binary Coded Decimal Interchange Code) is an 8-bit encoding used primarily on IBM mainframe computers. It is not commonly used in modern personal computers.

### BCD (Binary Coded Decimal)
**BCD** represents each decimal digit (0–9) using a 4-bit binary code. It is used in applications where decimal accuracy is critical, such as financial calculations and digital clocks.

---

## Summary Table

| Concept | Key Fact |
|---------|----------|
| Bit | Single binary digit (0 or 1) |
| Nibble | 4 bits, $2^4 = 16$ values |
| Byte | 8 bits, $2^8 = 256$ values |
| ASCII (7-bit) | 128 characters |
| ASCII (8-bit extended) | 256 characters |
| Unicode | Represents all world languages |
| Binary used because | Hardware has 2 stable voltage states |

---

---

<!-- note kx7adq78s1nv3bg2n00ge9zk4x85q1v5 | topic ms70f4y1nf1g0dxr8sk3ymdr3n85pt11 | status published -->
# 1.2 Analog and Digital Signals

Computers and communication systems deal with two fundamental types of signals: **analog** and **digital**. Understanding the difference between them is essential to understanding how computers process and transmit information.

---

## Analog Signals

An **analog signal** is a **continuous signal** that varies smoothly over time. It can take **any value** within a given range, there are infinitely many possible values between any two points.

**Examples of analog signals:**
- Sound waves (human voice, music)
- Temperature readings from a thermometer
- Voltage from a microphone
- AM/FM radio waves

Analog signals are represented as **continuous waveforms** (sine waves). The height (amplitude) and frequency of the wave carry the information.

**Disadvantage:** Analog signals are highly susceptible to **noise and interference**. When amplified over long distances, the noise is amplified along with the signal, degrading quality.

---

## Digital Signals

A **digital signal** is a **discrete signal** that represents information using a finite set of distinct values. In computers, only **two values** are used:

| Voltage Level | Binary Value | Meaning |
|---|---|---|
| High voltage (~5V or 3.3V) | **1** | ON / True |
| Low voltage (~0V) | **0** | OFF / False |

Digital signals appear as **square waves**, abrupt transitions between high and low states.

**Examples of digital signals:**
- Data stored on a hard drive
- Data transmitted over Ethernet
- CD/DVD audio
- Computer processor signals

---

## Key Differences: Analog vs Digital

| Feature | Analog Signal | Digital Signal |
|---|---|---|
| **Values** | Continuous (infinite range) | Discrete (finite steps: 0 and 1) |
| **Representation** | Continuous waveform | Square wave / pulses |
| **Noise resistance** | Low, noise degrades signal | High, small distortions don't change 0/1 state |
| **Transmission** | Degrades over distance | Can be regenerated perfectly |
| **Storage** | Harder to store accurately | Easy to store in memory |
| **Processing** | Requires analog circuits | Processed by digital computers |

---

## Noise Resistance of Digital Signals

One of the most important advantages of digital signals is their **resistance to noise**.

- In an **analog system**, any electrical interference adds to the signal. When the signal is amplified, the noise is amplified too. Over long distances, the signal becomes increasingly distorted.
- In a **digital system**, a device called a **repeater** reads the incoming signal, determines whether each bit is a 0 or a 1, and **regenerates a perfect copy** of the original signal. Noise is eliminated, not amplified.

This is why digital transmission is preferred for long-distance communication (e.g., telephone networks, internet cables).

---

## Analog-to-Digital Conversion (ADC)

The real world is analog (sound, light, temperature), but computers are digital. To process real-world data, we must convert analog signals to digital, this is done by an **Analog-to-Digital Converter (ADC)**.

The conversion involves two key steps:

### 1. Sampling
**Sampling** is the process of measuring the amplitude (value) of an analog signal at **regular time intervals**. The more frequently you sample (higher **sampling rate**), the more accurately the digital signal represents the original analog signal.

> **Example:** Audio CDs sample sound at 44,100 times per second (44.1 kHz).

### 2. Quantization
Each sampled value is rounded to the nearest value in a fixed set of discrete levels and encoded as a binary number.

---

## The Modem: Bridging Analog and Digital

Older telephone networks were designed to carry **analog signals** (voice). To send **digital computer data** over these analog lines, a device called a **Modem** (Modulator-Demodulator) is used.

- **Modulation:** Converts digital signals → analog signals for transmission over the phone line.
- **Demodulation:** Converts received analog signals → digital signals for the computer.

Modems are still used today in DSL internet connections.

---

## Summary

- **Analog signals** are continuous and can take any value; they are vulnerable to noise.
- **Digital signals** are discrete (0s and 1s); they are noise-resistant and can be perfectly regenerated.
- **Sampling** converts analog signals to digital by measuring values at regular intervals.
- A **Modem** converts between digital and analog signals for transmission over analog telephone lines.

---

<!-- note kx795qn3txx1hfn2g5mg0t0cws85qe7x | topic ms7denbgqvmgaxh4j157vq2rk585q9fm | status published -->
# 1.3 Digital Logic and Logic Gates

## What is Digital Logic?

**Digital Logic** is the foundation of all digital electronic circuits. It uses binary values, **0 (LOW)** and **1 (HIGH)**, to represent the two voltage states in electronic components. Computers, calculators, and all digital devices are built using digital logic circuits.

Digital logic is based on **Boolean Algebra**, developed by George Boole, which uses logical operators (AND, OR, NOT) to manipulate binary values.

---

## Logic Gates

A **Logic Gate** is a basic electronic circuit that performs a logical operation on one or more binary inputs and produces a single binary output. Logic gates are the building blocks of all digital systems.

Each gate can be described by:
- A **Boolean expression** (algebraic notation)
- A **Truth Table** (all possible input/output combinations)
- A **Logic Symbol** (circuit diagram symbol)

---

## Basic Logic Gates

### 1. AND Gate

- **Function:** Outputs HIGH (1) only when **ALL** inputs are HIGH.
- **Boolean Expression:** $F = A \cdot B$
- **Truth Table:**

| A | B | F = A · B |
|---|---|----------|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

---

### 2. OR Gate

- **Function:** Outputs HIGH (1) when **ANY** input is HIGH.
- **Boolean Expression:** $F = A + B$
- **Truth Table:**

| A | B | F = A + B |
|---|---|----------|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

---

### 3. NOT Gate (Inverter)

- **Function:** Inverts the input. Outputs the **complement** of the input.
- **Boolean Expression:** $F = \overline{A}$
- **Truth Table:**

| A | F = Ā |
|---|-------|
| 0 | 1 |
| 1 | 0 |

---

## Compound Logic Gates

### 4. NAND Gate (NOT-AND)

- **Function:** Combines AND and NOT. Output is the **inverse of AND**.
- **Boolean Expression:** $F = \overline{A \cdot B}$
- **Truth Table:**

| A | B | F = (A·B)' |
|---|---|------------|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

> **Key fact:** NAND outputs LOW (0) **only** when ALL inputs are HIGH.

---

### 5. NOR Gate (NOT-OR)

- **Function:** Combines OR and NOT. Output is the **inverse of OR**.
- **Boolean Expression:** $F = \overline{A + B}$
- **Truth Table:**

| A | B | F = (A+B)' |
|---|---|------------|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

> **Key fact:** NOR outputs HIGH (1) **only** when ALL inputs are LOW.

---

### 6. XOR Gate (Exclusive-OR)

- **Function:** Outputs HIGH (1) only when the inputs are **different** (unequal).
- **Boolean Expression:** $F = A \oplus B$
- Also called the **Inequality Detector**.
- **Truth Table:**

| A | B | F = A ⊕ B |
|---|---|----------|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

---

## Universal Gates

A **Universal Gate** is a gate that can be used to implement **any Boolean function** without needing any other type of gate.

Both **NAND** and **NOR** gates are universal gates:
- Any basic gate (AND, OR, NOT) can be built using only NAND gates.
- Any basic gate (AND, OR, NOT) can also be built using only NOR gates.

This makes them extremely important in digital circuit design, as manufacturers only need to produce one type of gate.

---

## Summary Table

| Gate | Symbol | Boolean Expression | Output is HIGH when... |
|------|--------|--------------------|------------------------|
| AND | · | $F = A \cdot B$ | All inputs are 1 |
| OR | + | $F = A + B$ | Any input is 1 |
| NOT | ‾ | $F = \overline{A}$ | Input is 0 |
| NAND | (·)' | $F = \overline{A \cdot B}$ | Not all inputs are 1 |
| NOR | (+)' | $F = \overline{A + B}$ | All inputs are 0 |
| XOR | ⊕ | $F = A \oplus B$ | Inputs are different |

---

<!-- note kx74p3jdtzd7hs3jrnn7g5mamh85qa54 | topic ms75rn8ne87m7jjzssde5kjy2x85q7t5 | status published -->
# 1.4 Software Development Life Cycle (SDLC)

The **Software Development Life Cycle (SDLC)** is a structured framework that defines the process used to develop, maintain, and replace software systems. It ensures high-quality software is delivered on time and within budget by breaking the project into well-defined phases.

---

## Why SDLC?

- Provides a **systematic approach** to software development
- Ensures software **meets user requirements**
- Helps manage **cost, time, and quality**
- Reduces project risk through planning and documentation

---

## Phases of SDLC

### 1. Planning

The first phase defines the **scope and purpose** of the project.

- Identify the problem or opportunity
- Conduct a **Feasibility Study** to evaluate viability:
  - **Technical Feasibility**, Can it be built with available technology?
  - **Economic Feasibility**, Is it cost-effective?
  - **Operational Feasibility**, Will users accept and use it?
  - **Schedule Feasibility**, Can it be completed within the required timeframe?
- Estimate resources, timeline, and budget

### 2. Requirement Analysis

Developers and stakeholders gather and document all **functional and non-functional requirements**.

- Functional requirements: what the system *must do* (e.g., login, generate reports)
- Non-functional requirements: performance, security, scalability
- Output: **Software Requirement Specification (SRS)** document, a formal contract between client and developers

### 3. System Design

The SRS is translated into **technical blueprints**.

- **Logical Design**, data flow diagrams, entity-relationship diagrams
- **Physical Design**, database schemas, system architecture, UI prototypes
- Defines hardware and software requirements

### 4. Implementation (Coding)

Developers write the actual **source code** based on the design documents.

- Programming languages and tools are selected
- Code is written in small units (modules)
- Version control systems (e.g., Git) are used to manage code

### 5. Testing

The software is rigorously tested to find and fix defects.

| Type | Description |
|---|---|
| **Unit Testing** | Testing individual modules |
| **Integration Testing** | Testing combined modules |
| **System Testing** | Testing the complete system |
| **User Acceptance Testing (UAT)** | End-users verify the system meets their needs |

**Verification vs Validation:**
- **Verification**, Are we building the product *right*? (matches design specs)
- **Validation**, Are we building the *right* product? (meets user needs)

### 6. Deployment

The tested software is released to the production environment.

**Deployment Strategies:**

| Strategy | Description |
|---|---|
| **Direct Changeover** | Old system replaced immediately by new system (risky) |
| **Parallel Running** | Both old and new systems run simultaneously until new system is verified |
| **Pilot Deployment** | New system tested with a small group of users before full rollout |
| **Phased Implementation** | System rolled out in stages to different departments or regions |

### 7. Maintenance

After deployment, the system is monitored and updated.

- **Corrective Maintenance**, fixing bugs found after release
- **Adaptive Maintenance**, updating software for new environments
- **Perfective Maintenance**, adding new features or improving performance

---

## SDLC Models (Methodologies)

### Waterfall Model

- **Linear and sequential**, each phase must be completed before the next begins
- Simple and easy to manage
- **Disadvantage:** Inflexible; difficult to go back to a previous phase
- Best for: projects with well-defined, stable requirements

```
Planning → Analysis → Design → Coding → Testing → Deployment → Maintenance
```

### Agile Model

- **Iterative and incremental**, software is developed in small cycles called *sprints*
- Highly flexible; requirements can change during development
- Continuous feedback from stakeholders
- Best for: projects with evolving or unclear requirements

### Spiral Model

- Combines **Waterfall and iterative** approaches
- Emphasizes **risk analysis** at each cycle
- Each spiral loop passes through: Planning → Risk Analysis → Engineering → Evaluation
- Best for: large, complex, high-risk projects

### Iterative Model

- Development starts with a **partial implementation** that is progressively improved
- Each iteration produces a working version of the software
- Requirements are refined with each cycle

---

## Summary Table

| SDLC Phase | Key Output |
|---|---|
| Planning | Feasibility Report |
| Requirement Analysis | SRS Document |
| Design | System Architecture / Blueprints |
| Implementation | Source Code |
| Testing | Test Reports / Bug-free Software |
| Deployment | Live System |
| Maintenance | Updated / Patched System |

---

<!-- note kx7ey37dqkwcsynz84ehwqqxwh85px2s | topic ms7dsfedjqa6esmtcq1r8jvvs585p445 | status published -->
# 1.5 Network Topology

Network topology refers to the **physical or logical arrangement** of nodes (computers, devices) and the connections (links) between them in a network. The choice of topology directly affects a network's **scalability** (ability to grow) and **reliability** (ability to continue functioning when components fail).

---

## Types of Network Topology

### 1. Bus Topology

In a **Bus topology**, all nodes are connected to a single central cable called the **backbone**.

- Data travels along the backbone in both directions.
- **Terminators** are placed at both ends of the cable to absorb signals and prevent signal reflection (bounce).
- If the backbone cable fails, the **entire network goes down**.

| Feature | Detail |
|---|---|
| **Cost** | Low (minimal cabling) |
| **Scalability** | Poor, adding nodes degrades performance |
| **Reliability** | Low, single point of failure (backbone) |
| **Installation** | Simple |

---

### 2. Star Topology

In a **Star topology**, all nodes are connected to a **central device** (Hub or Switch).

- All data passes through the central device.
- If the **central device fails**, the entire network goes down.
- If a **single node fails**, the rest of the network is unaffected.
- New nodes can be added easily without disrupting the network.

| Feature | Detail |
|---|---|
| **Cost** | Medium |
| **Scalability** | High, easy to add/remove nodes |
| **Reliability** | Medium, central device is a single point of failure |
| **Installation** | Easy to set up and troubleshoot |

---

### 3. Ring Topology

In a **Ring topology**, each node is connected to exactly two other nodes, forming a **closed loop**.

- Data travels in **one direction** (unidirectional) or both directions (bidirectional/dual ring).
- Each node acts as a repeater, boosting the signal.
- In a unidirectional ring, if **one node or link fails**, the entire network is disrupted.
- A **dual ring** provides an alternate path, improving reliability.

| Feature | Detail |
|---|---|
| **Cost** | Medium |
| **Scalability** | Poor, adding nodes requires interrupting the ring |
| **Reliability** | Low (unidirectional) / Medium (dual ring) |
| **Installation** | Moderate |

---

### 4. Mesh Topology

In a **Mesh topology**, every node is connected to **every other node** via dedicated point-to-point links.

#### Number of Links Formula

For a fully connected Mesh network with $n$ nodes, the number of physical links required is:

$$\text{Number of Links} = \frac{n(n-1)}{2}$$

**Example:** For $n = 10$ nodes:
$$\frac{10 \times 9}{2} = 45 \text{ links}$$

- Multiple paths exist for data, if one link fails, data is **automatically rerouted**.
- This makes Mesh the **most reliable** topology.
- However, the large number of cables makes it the **most expensive** and difficult to scale.

| Feature | Detail |
|---|---|
| **Cost** | Very High |
| **Scalability** | Poor, each new node requires connections to all existing nodes |
| **Reliability** | Very High, multiple redundant paths |
| **Installation** | Complex |

---

### 5. Hybrid Topology

A **Hybrid topology** combines two or more different topologies (e.g., Star-Bus, Star-Ring, Star-Mesh).

- Used in **large networks** (e.g., enterprise networks, the internet) to leverage the advantages of multiple topologies.
- Example: A Star-Bus hybrid uses Star topology within each department and Bus topology to connect departments.

| Feature | Detail |
|---|---|
| **Cost** | High (depends on combination) |
| **Scalability** | High, flexible design |
| **Reliability** | High, can be designed for redundancy |
| **Installation** | Complex |

---

## Comparison Summary

| Topology | Cost | Scalability | Reliability | Best Use Case |
|---|---|---|---|---|
| Bus | Low | Poor | Low | Small, temporary networks |
| Star | Medium | High | Medium | Home/office LANs |
| Ring | Medium | Poor | Low–Medium | Token Ring networks |
| Mesh | Very High | Poor | Very High | Military, critical systems |
| Hybrid | High | High | High | Large enterprise networks |

---

<!-- note kx79y69y5w9ehygkvjfwhkw8f985qp26 | topic ms7d2v2sbthb7pq8m202sqgne185ppam | status published -->
# 1.6 Cybersecurity

Cybersecurity is the practice of protecting systems, networks, and programs from **digital attacks**, unauthorized access, and damage. The three core goals of cybersecurity are known as the **CIA Triad**:

- **Confidentiality**, ensuring data is accessible only to authorized users
- **Integrity**, ensuring data is accurate and has not been tampered with
- **Availability**, ensuring systems and data are accessible when needed

---

## Why is Cybersecurity Needed?

As individuals, organizations, and governments rely increasingly on digital systems, the risks of cyber threats have grown significantly. Cybersecurity protects:

- Personal and financial data
- National infrastructure (power grids, hospitals)
- Business operations and intellectual property
- Privacy and civil liberties

Human error remains the **weakest link** in cybersecurity, most successful attacks exploit people rather than technology directly.

---

## Common Cyber Threats

### Malware (Malicious Software)
Malware is any software intentionally designed to disrupt, damage, or gain unauthorized access to a computer system.

| Type | Description |
|------|-------------|
| **Virus** | Attaches itself to legitimate files; spreads when the file is executed |
| **Worm** | Self-replicates and spreads across networks **without human intervention** |
| **Trojan Horse** | Disguises itself as legitimate software to trick users into installing it |
| **Ransomware** | Encrypts user data and demands payment (ransom) for the decryption key |
| **Spyware** | Secretly monitors user activity and collects sensitive information |

### Phishing
Phishing is a **social engineering** attack that uses disguised emails or fraudulent websites to trick users into revealing sensitive information such as passwords or credit card numbers.

- **Spear Phishing**, targeted phishing aimed at a specific individual or organization
- **Smishing**, phishing via SMS text messages

---

## Cybersecurity Measures

### Firewall
A firewall is a network security device that **monitors and filters** incoming and outgoing network traffic based on predefined security rules. It acts as a barrier between a trusted internal network and untrusted external networks (like the internet).

- Can be hardware-based, software-based, or both
- Blocks unauthorized access while permitting legitimate communication

### Antivirus Software
Detects, quarantines, and removes malware from a system by scanning files against a database of known threat signatures.

### Strong Passwords and Multi-Factor Authentication (MFA)
- Strong passwords use a mix of letters, numbers, and symbols
- MFA requires two or more verification factors (e.g., password + OTP)

---

## Encryption

Encryption is the process of converting **plaintext** (readable data) into **ciphertext** (unreadable data) using an algorithm and a key. Only authorized parties with the correct key can decrypt and read the data.

$$\text{Plaintext} \xrightarrow{\text{Encryption Key + Algorithm}} \text{Ciphertext}$$

### Symmetric Encryption
- Uses the **same key** for both encryption and decryption
- **Faster** and efficient for large amounts of data
- Challenge: the key must be securely shared between sender and receiver
- Example: **AES** (Advanced Encryption Standard)

### Asymmetric Encryption
- Uses a **key pair**: a **public key** (shared openly) to encrypt, and a **private key** (kept secret) to decrypt
- **Slower** than symmetric encryption but solves the key distribution problem
- Example: **RSA** (Rivest–Shamir–Adleman)
- Used in HTTPS, digital signatures, and email encryption

| Feature | Symmetric | Asymmetric |
|---------|-----------|------------|
| Keys used | 1 (shared) | 2 (public + private) |
| Speed | Faster | Slower |
| Key distribution | Difficult | Easier |
| Example | AES | RSA |

### HTTPS and SSL/TLS
**HTTPS** (Hypertext Transfer Protocol Secure) secures web communication by using **SSL/TLS** encryption. It combines asymmetric encryption (for key exchange) and symmetric encryption (for data transfer), ensuring confidentiality and integrity between a browser and a web server.