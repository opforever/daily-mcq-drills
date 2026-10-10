<!-- note kx7ag3m1dx8aqhkw0hcezajngh85pjez | topic ms72k0zssah8xh1j0rh29g2wfh85p658 | status published -->
# 1.1 System Usability, Security and Accessibility

This topic introduces three foundational pillars of computer system design: **Usability**, **Security**, and **Accessibility**. Understanding how these concepts interact is essential for evaluating and improving human interaction with technology.

---

## 1. Usability

**Usability** is the measure of how easily and efficiently users can interact with a device or system to achieve their goals. A usable system is effective, efficient, and satisfying to use.

### Five Components of Usability (Nielsen's Heuristics)

| Component | Description |
|---|---|
| **Learnability** | How easy is it for users to accomplish basic tasks the first time? |
| **Efficiency** | Once learned, how quickly can users perform tasks? |
| **Memorability** | When users return after a period of not using the system, how easily can they re-establish proficiency? |
| **Errors** | How many errors do users make, how severe are they, and how easily can they recover? |
| **Satisfaction** | How pleasant is it to use the design? |

### Common Usability Problems
- Cluttered or confusing interfaces
- Inconsistent navigation
- Lack of feedback after user actions
- Poor error messages that don't guide recovery
- Slow system response times

### Methods for Improving Usability
- **User testing**, observing real users attempting tasks
- **Heuristic evaluation**, experts review the interface against usability principles
- **Prototyping and iteration**, building and refining designs based on feedback
- **Accessibility audits**, ensuring the interface works for all users

---

## 2. Security

**Security** in computing refers to protecting systems, networks, and data from unauthorized access, damage, or attack.

### The CIA Triad

The three core principles of information security are:

| Principle | Meaning | Example Threat |
|---|---|---|
| **Confidentiality** | Keeping data private and accessible only to authorized users | Data breach, eavesdropping |
| **Integrity** | Ensuring data is accurate and has not been tampered with | Man-in-the-middle attack, data corruption |
| **Availability** | Ensuring systems and data are accessible when needed | Denial of Service (DoS) attack |

> **Key insight:** A DoS attack targets **Availability**, it does not steal data but makes the system unreachable for legitimate users.

### Security and Usability

There is a well-known **Security-Usability Trade-off**: as security measures become stricter (e.g., longer passwords, frequent re-authentication, CAPTCHAs), the system becomes harder and more tedious to use. Designers must balance both.

---

## 3. Accessibility

**Accessibility** is the design of devices, systems, and services so that they can be used by people with a wide range of abilities and disabilities, including visual, auditory, motor, and cognitive impairments.

### The POUR Principles (WCAG)

The Web Content Accessibility Guidelines (WCAG) define four principles, remembered as **POUR**:

| Principle | Meaning | Example |
|---|---|---|
| **Perceivable** | Information must be presentable in ways users can perceive (sight, sound) | Alt text for images, captions for videos |
| **Operable** | All functionality must be operable via various inputs | Full keyboard navigation (no mouse required) |
| **Understandable** | Content and operation must be understandable | Clear language, consistent navigation |
| **Robust** | Content must be interpreted reliably by assistive technologies | Compatibility with screen readers |

### Implications of Accessibility

- **Ethical:** Every person has the right to access information and technology regardless of ability.
- **Social:** Inaccessible systems exclude large portions of society, widening the digital divide.
- **Economic:** Accessible design expands the potential user base and reduces legal risk.
- **Environmental:** Designing for longevity and compatibility reduces the need for hardware replacement.

---

## 4. How Usability, Security, and Accessibility Interact

These three concepts are deeply interconnected:

- A system that is **secure but not usable** will be abandoned or bypassed (users write passwords on sticky notes).
- A system that is **usable but not accessible** excludes users with disabilities.
- A system that is **accessible but not secure** puts all users at risk.

Effective system design requires balancing all three.

---

<!-- note kx7fpmrjpkaqnc19ybqennagrh85q1yj | topic ms7636kes62q9cysw8h1jp1n5185pa4k | status published -->
# 1.2 Human-Computer Interaction (HCI)

## What is HCI?

**Human-Computer Interaction (HCI)** is a multidisciplinary field that studies how people interact with computers and designs systems to be more **user-friendly, efficient, and accessible**. It draws from computer science, psychology, design, and sociology.

### Four Key Elements of HCI

| Element | Description |
|---|---|
| **Users** | The people who interact with the system |
| **Tasks** | The goals users want to accomplish |
| **Interface** | The point of interaction (screen, keyboard, voice, etc.) |
| **Environment** | The physical and social context of use (lighting, noise, setting) |

---

## Usability

**Usability** measures how effectively, efficiently, and satisfactorily a user can achieve their goals with a system. Its five key components are:

1. **Learnability**, How easy is it for new users to learn the system?
2. **Efficiency**, How quickly can experienced users perform tasks?
3. **Memorability**, Can users return after a break and remember how to use it?
4. **Error Handling**, How well does the system prevent errors and help users recover?
5. **Satisfaction**, How pleasant is the experience?

---

## UI vs UX

- **UI (User Interface):** The specific visual and interactive elements users interact with, buttons, menus, screens, icons.
- **UX (User Experience):** The overall feeling, emotion, and efficiency a user experiences while using the entire system.

> UI is *what* you interact with; UX is *how* that interaction makes you feel.

---

## Common HCI Problems

- **Cognitive overload**, Too much information presented at once overwhelms users.
- **Poor feedback**, System does not inform users whether their action succeeded or failed.
- **Inconsistency**, Different parts of the interface behave differently, confusing users.
- **Accessibility barriers**, Interfaces that exclude users with disabilities (visual, motor, cognitive).
- **Error-prone design**, Layouts that make it easy to click the wrong button.
- **Long learning curves**, Non-intuitive designs that require extensive training.

---

## Methods for Improvement

### User-Centered Design (UCD)
A design philosophy that places **end-users at the core** of the design process. It is **iterative**: designers repeatedly prototype, test with real users, gather feedback, and refine the product.

**UCD Cycle:**
1. Understand user needs
2. Design prototype
3. Test with users
4. Analyse feedback
5. Refine → repeat

### Other Improvement Methods
- **Usability testing**, Observing real users attempting real tasks.
- **Heuristic evaluation**, Experts review the interface against established usability principles (Nielsen's 10 heuristics).
- **Accessibility audits**, Checking compliance with standards like WCAG (Web Content Accessibility Guidelines).
- **A/B testing**, Comparing two design variants to see which performs better.
- **Prototyping**, Building low-fidelity (paper) or high-fidelity (digital) mockups before full development.

---

## Ethical Implications of HCI

| Issue | Explanation |
|---|---|
| **Dark patterns** | Deceptive UI designs that trick users into unintended actions (e.g., hidden unsubscribe buttons) |
| **Privacy** | Systems that collect excessive user data without informed consent |
| **Addiction by design** | Infinite scroll, notifications engineered to maximise screen time at the cost of user wellbeing |
| **Bias in design** | Interfaces designed without considering diverse user groups, excluding minorities |
| **Informed consent** | Users must understand what they agree to, complex terms of service violate this principle |

---

## Social Implications of HCI

- **Digital divide**, Poor HCI design can exclude elderly, disabled, or low-literacy users from digital services.
- **Social isolation**, Poorly designed social platforms can increase loneliness rather than connection.
- **Behavioural change**, Persuasive technology (likes, streaks) shapes social behaviour and norms.
- **Accessibility and inclusion**, Good HCI design promotes equal participation in digital society.

---

## Economic Implications of HCI

- **Productivity gains**, Well-designed interfaces reduce time-on-task and training costs for organisations.
- **E-commerce conversion**, Poor UX directly reduces sales; good UX increases revenue.
- **Cost of poor design**, Fixing usability problems after launch is far more expensive than designing correctly from the start.
- **Job displacement**, Automation enabled by better HCI (voice assistants, kiosks) can reduce demand for certain roles.

---

## Environmental Implications of HCI

- **Energy consumption**, Poorly optimised interfaces (e.g., auto-playing video) increase device and server energy use.
- **E-waste**, Devices become obsolete faster when software updates make older hardware unusable (planned obsolescence).
- **Paperless design**, Good digital HCI can reduce paper consumption in offices and education.
- **Green UX**, Designing interfaces that encourage energy-saving behaviours (e.g., dark mode, sleep prompts).

---

<!-- note kx76ncvr1wc8j4ja2dayyw5r8n85qzbw | topic ms70w2pde05bw16yxx4ryzkc7s85q3bt | status published -->
# 1.3 Trade-offs Between Usability and Security in Computing Systems

# 1.3 Trade-offs Between Usability and Security in Computing Systems

In computing, **usability** and **security** are two essential but often competing goals. Designing a system that is both highly secure and easy to use is one of the central challenges in computer science and Human-Computer Interaction (HCI).

---

## The Core Trade-off

The fundamental tension is simple:

- **More security** → more barriers, more steps, more friction → **lower usability**
- **More usability** → fewer barriers, simpler access → **lower security**

This relationship is often called the **Security-Usability Seesaw**: pushing one side up forces the other side down. The goal of good system design is to find the **optimal balance point**.

> **Example:** Requiring a 20-character password with symbols, numbers, and uppercase letters is highly secure but very difficult to remember, reducing usability. A simple 4-digit PIN is easy to use but easy to guess, reducing security.

---

## Real-World Examples of the Trade-off

| Security Measure | Security Level | Usability Impact |
|---|---|---|
| Complex password policy | High | Low, hard to remember, users write them down |
| Multi-Factor Authentication (MFA) | High | Medium, extra steps slow login |
| Biometric authentication (fingerprint) | High | High, fast and requires no memorisation |
| Single-factor PIN | Low | High, quick and simple |
| Auto-logout after 30 seconds | High | Low, constant re-authentication is frustrating |
| Password manager | High | High, auto-fills strong passwords |

---

## Consequences of Getting the Balance Wrong

### Too Much Security, Too Little Usability
When security measures are too restrictive:
- Users write passwords on sticky notes (defeating the purpose of strong passwords)
- Users adopt **Shadow IT**, using unauthorized third-party tools to bypass restrictions, creating new, unmanaged security risks
- Productivity drops and user frustration increases

### Too Much Usability, Too Little Security
When ease of use is prioritised over security:
- Systems become vulnerable to brute-force attacks, phishing, and unauthorized access
- Sensitive data may be exposed
- Compliance with data protection regulations may be violated

---

## Recommending Cybersecurity Measures: Key Factors

When recommending a cybersecurity measure, the following factors must be considered:

### 1. Efficiency
Does the measure slow down users significantly? A good measure should protect the system without creating major bottlenecks.
- **Example:** Password managers improve efficiency by auto-filling credentials while maintaining strong, unique passwords.

### 2. Cost
Is the measure affordable to implement and maintain? Expensive solutions may not be practical for all organisations.
- **Example:** Hardware security keys (like YubiKey) are very secure but have a per-unit cost that may be prohibitive for large deployments.

### 3. Privacy
Does the measure collect or store sensitive personal data? Users have a right to know what data is collected and how it is used.
- **Example:** Biometric systems store fingerprint or facial data, if this data is breached, it cannot be changed like a password.

### 4. Ethics
Does the measure treat all users fairly? Security measures must not discriminate or unfairly disadvantage certain groups.
- **Example:** Biometric authentication may disadvantage users with certain disabilities. Facial recognition systems have shown bias against certain ethnic groups.

---

## Finding the Optimal Balance

The best cybersecurity measures aim to be **both secure and usable**. Strategies include:

- **Biometric authentication**, strong security with minimal user effort
- **Single Sign-On (SSO)**, one secure login grants access to multiple systems, reducing password fatigue
- **Password managers**, generate and store complex passwords automatically
- **Risk-based authentication**, applies stricter checks only when unusual behaviour is detected (e.g., login from a new country)
- **User education**, training users to follow security practices reduces the need for overly restrictive technical controls

---

## Summary

| Concept | Definition |
|---|---|
| Usability-Security Trade-off | The inverse relationship where increasing security often reduces ease of use |
| Security-Usability Seesaw | Metaphor for the balance designers must achieve |
| Shadow IT | Unauthorized tools used when official systems are too restrictive |
| Key factors | Efficiency, Cost, Privacy, Ethics |