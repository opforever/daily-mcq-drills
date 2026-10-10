<!-- note kx748pn74q143r9y5q7jd99v5d85pmap | topic ms75p22sf9za22j74k9r69sjbn85pxaw | status published -->
# 8.1 Introduction to Product Development

## What is Product Development?

Product development is the **complete process** of bringing a new product to market or improving an existing one. In software engineering, it covers every stage from the initial idea to the final release and beyond, including ideation, market research, design, coding, testing, and launch.

A **software product** is a continuous entity that is developed, maintained, and evolved over its lifecycle to provide ongoing value to users (e.g., a mobile banking app, an e-commerce platform).

> **Product vs. Project:**
> - A **project** is a *temporary* endeavor with a defined start and end date (e.g., building a specific feature).
> - A **product** is a *continuous* entity that evolves over time to meet changing user needs.

---

## Stages of Product Development

Product development follows a structured lifecycle that closely mirrors the **Software Development Life Cycle (SDLC)**:

### 1. Ideation
The goal is to generate, develop, and communicate new ideas that solve specific user problems or fulfill market needs. Techniques include brainstorming, mind mapping, and user interviews.

### 2. Market Research
Before building anything, teams must:
- Identify the **target audience**
- Understand **competitor offerings**
- Validate whether there is **genuine demand** for the proposed solution

This reduces the risk of building a product nobody wants.

### 3. Design and Prototyping
This phase creates a **blueprint** of the software's user interface (UI) and user experience (UX). Outputs include:
- **Wireframes**, basic structural layouts
- **Mockups**, visual representations
- **Prototypes**, interactive models for user feedback

### 4. Development (Coding)
The actual source code is written based on the approved design. Development follows a chosen **software development methodology** (e.g., Agile, Waterfall, Scrum).

### 5. Testing and Validation
- **Testing** checks that the product works correctly (no bugs, meets specifications).
- **Validation** confirms the product meets **user needs and market requirements**, i.e., the right product is being built.

### 6. Launch (Deployment)
The product is released to end users. This may be a full release or a staged rollout.

### 7. Maintenance and Evolution
After launch, the product is continuously monitored, updated, and improved based on user feedback.

---

## Minimum Viable Product (MVP)

An **MVP** is a version of a new product that includes only the **core essential features** needed to satisfy early adopters and gather validated learning about customers with the least effort.

| Aspect | MVP | Full Product |
|---|---|---|
| Features | Core only | Complete feature set |
| Development time | Short | Long |
| Cost | Low | High |
| Purpose | Validate idea | Deliver full value |

**Advantage:** An MVP reduces development costs and time by focusing on core value, allowing teams to test the market before committing full resources.

---

## Characteristics of a Successful Product

A successful software product should:
- **Solve a specific problem** for its target users
- Be **user-friendly** (intuitive interface, good UX)
- Be **scalable** (able to handle growth in users/data)
- Be **well-documented** (users and developers can understand and use it)
- Provide **ongoing value** over time

> ❌ High complexity with no user documentation is NOT a characteristic of a successful product, it hinders usability and adoption.

---

## Connection to the SDLC

Product development is closely aligned with the **Software Development Life Cycle (SDLC)**, which provides a structured framework for planning, creating, testing, and deploying software:

| SDLC Phase | Product Development Stage |
|---|---|
| Analysis | Market Research + Ideation |
| Design | Design and Prototyping |
| Coding | Development |
| Testing | Testing and Validation |
| Deployment | Launch |
| Maintenance | Post-launch Evolution |

Understanding product development helps software engineers make better decisions at each stage of the SDLC.

---

---

<!-- note kx77w12wyzgj6fkq7qdw1h0qah85pb9z | topic ms75nrdkj6tkjvkdskes7741g185qg28 | status published -->
# 8.2 Understanding Prototypes

A **prototype** is an early, simplified model of a software product built to test concepts, explore design options, and gather user feedback before committing to full-scale development. Prototyping is a key activity in the **Software Development Life Cycle (SDLC)** and is especially valuable when requirements are unclear or likely to change.

---

## Why Prototype?

Prototyping helps teams:

- **Clarify requirements**, stakeholders can see and interact with a model rather than reading abstract specifications.
- **Reduce risk**, misunderstandings and technical problems are discovered early, before significant resources are spent.
- **Gather feedback**, real users evaluate the prototype and suggest improvements.
- **Validate design decisions**, layout, navigation, and workflows can be tested cheaply.

---

## Types of Prototypes by Fidelity

| Type | Description | Example |
|---|---|---|
| **Low-Fidelity** | Simple, often paper-based sketches; non-interactive; focuses on layout and flow | Hand-drawn wireframes, sticky-note mockups |
| **High-Fidelity** | Interactive, digital representations that closely resemble the final product's look and feel | Clickable Figma mockup, HTML/CSS prototype |

Low-fidelity prototypes are quick and cheap to produce, making them ideal for early-stage brainstorming. High-fidelity prototypes are used later to validate detailed design and usability.

---

## Types of Prototyping Approaches

### 1. Throwaway (Rapid) Prototyping

A small part of the system is built quickly to **clarify requirements**. Once the requirements are understood, the prototype is **discarded** and the actual system is built from scratch.

- **Best for:** Highly uncertain or ambiguous requirements.
- **Advantage:** Prevents poor requirements from being locked in.
- **Disadvantage:** Time spent on the prototype does not directly contribute to the final product.

### 2. Evolutionary Prototyping

The prototype is **continuously refined** through multiple iterations based on user feedback until it eventually **becomes the final system**.

- **Best for:** Projects where requirements are expected to change frequently.
- **Advantage:** Reduces duplication of effort; the prototype is never wasted.
- **Disadvantage:** Without careful management, the system can become difficult to maintain.

### 3. Incremental Prototyping

The final system is built as a series of prototypes, each adding more functionality. The prototypes are eventually integrated into the complete product.

### 4. Extreme Prototyping

Commonly used in web development; consists of three phases, building a static prototype, making it functional with simulated services, and finally integrating real services.

---

## Prototyping in the SDLC

Prototyping fits into the **design phase** of the SDLC but influences all stages:

1. **Analysis**, prototype helps elicit and confirm requirements.
2. **Design**, prototype tests UI/UX decisions.
3. **Coding**, evolutionary prototypes feed directly into implementation.
4. **Testing**, prototype is evaluated by users; feedback drives iteration.

The iterative cycle of **Build → Evaluate → Refine** is central to prototyping.

---

## Prototyping as a Data-Collection Tool

Prototypes are also used as a **data-collection approach** (SLO CS-11-G-01). By observing how users interact with a prototype, developers gather **qualitative data** (e.g., user confusion, workflow preferences) and **quantitative data** (e.g., task completion times, error rates) that inform the final design.

---

## Creating, Testing, and Iterating a Prototype (Business Context)

For a business idea, the prototype development cycle involves:

1. **Define the problem**, identify the user need your product addresses.
2. **Sketch / Wireframe**, create a low-fidelity prototype of the key screens or features.
3. **Build**, develop a higher-fidelity interactive prototype.
4. **Test**, present the prototype to target users; collect structured feedback.
5. **Iterate**, revise the prototype based on feedback and repeat until the design is validated.

This cycle aligns with the **Minimum Viable Product (MVP)** philosophy: launch the simplest version that delivers core value, then improve based on real-world feedback.

---

## Summary Table

| Prototyping Type | Prototype Fate | Best Used When |
|---|---|---|
| Throwaway | Discarded | Requirements are unclear |
| Evolutionary | Becomes final system | Requirements change frequently |
| Incremental | Merged into final system | Large systems built in stages |

---

<!-- note kx744py8sfn4aj7bx2qdaaq40985q9bn | topic ms79576dq96k3dpqa4dgy647p585pak9 | status published -->
# 8.3 Creating Prototypes

## What is a Prototype?

A **prototype** is an early, simplified version or model of a software product. It is built to test concepts, explore design features, and gather user feedback **before** full-scale development begins. Prototyping is a key data-collection approach in the SDLC, it lets developers and stakeholders validate requirements through hands-on interaction rather than abstract documentation.

---

## Why Create Prototypes?

Prototyping serves several critical purposes:

| Benefit | Explanation |
|---|---|
| **Early error detection** | Requirement misunderstandings are caught before expensive coding begins |
| **User validation** | Stakeholders interact with a tangible model and confirm or correct their needs |
| **Reduced risk** | Uncertainty about design and functionality is resolved iteratively |
| **Better communication** | Visual models communicate ideas more clearly than written specs |

---

## Types of Prototypes

### Low-Fidelity Prototypes
- Simple, often **paper-based** sketches or hand-drawn wireframes
- Focus on **layout and user flow**, not visual polish
- Quick and cheap to produce
- Example: a hand-drawn sketch of an app's navigation screens

### High-Fidelity Prototypes
- **Interactive, digital** representations that closely resemble the final product
- Include realistic colours, fonts, and clickable elements
- Built using tools like Figma, Adobe XD, or InVision
- Example: a clickable Figma mockup of a mobile app

---

## Types of Prototyping Models

### 1. Evolutionary Prototyping
- The prototype is **continuously refined** through multiple iterations based on user feedback
- The prototype **eventually becomes** the final system
- Best suited for projects where **requirements are expected to change** frequently
- Follows the **create → test → iterate** cycle

### 2. Throwaway Prototyping
- A small part of the system is built quickly to **clarify requirements or explore risks**
- The prototype is **discarded** once requirements are finalised
- The actual system is then built **from scratch** using the clarified requirements
- Best suited when technology or requirements are **highly uncertain**

---

## The Create–Test–Iterate Cycle

Creating a prototype for a business idea follows a structured cycle:

```
1. DEFINE → Identify the problem and target users
2. CREATE → Build a low-fidelity or high-fidelity prototype
3. TEST → Present to users; collect qualitative feedback
4. ANALYSE → Identify what works and what needs improvement
5. ITERATE → Refine the prototype based on feedback
6. REPEAT → Continue until the design meets user needs
```

This cycle aligns with **design thinking** and ensures the final product is user-centred.

---

## Steps to Create a Prototype

1. **Define the scope**, decide which features or screens to prototype
2. **Choose fidelity**, low-fidelity for early exploration, high-fidelity for detailed validation
3. **Select a tool**, paper sketches, Balsamiq (low-fi), or Figma/Adobe XD (high-fi)
4. **Build the prototype**, create screens, flows, and interactions
5. **Test with users**, conduct usability sessions and collect feedback
6. **Iterate**, update the prototype based on findings and repeat

---

## Advantages and Disadvantages of Prototyping

| Advantages | Disadvantages |
|---|---|
| Reduces project risk | May lead to **scope creep** |
| Increases user involvement | Users may mistake prototype for finished product |
| Detects errors early | Can be time-consuming if iterations are excessive |
| Improves communication | May create unrealistic expectations |

---

## Prototyping Tools

| Tool | Type | Use |
|---|---|---|
| **Paper & pen** | Low-fidelity | Quick sketches and wireframes |
| **Balsamiq** | Low-fidelity | Digital wireframing |
| **Figma** | High-fidelity | Interactive UI/UX design |
| **Adobe XD** | High-fidelity | Clickable prototypes |
| **InVision** | High-fidelity | Collaborative prototyping |

---

---

<!-- note kx71nn7hwj4m5mycwaz49p3nms85q759 | topic ms731mfngxrn1rqq56behdz64185p6qh | status published -->
# 8.4 Testing Prototypes

Testing a prototype is a critical phase in the **Software Development Life Cycle (SDLC)** and the entrepreneurial product-development process. It allows developers and stakeholders to identify functional gaps, usability issues, and technical bugs **before** the final product is built, saving time and cost.

---

## Why Test a Prototype?

| Benefit | Explanation |
|---|---|
| Early error detection | Bugs found early are cheaper to fix |
| Requirement validation | Confirms the product meets user needs |
| Reduced project risk | Prevents costly rework in later stages |
| Stakeholder confidence | Demonstrates progress to clients |

---

## Types of Testing

### 1. Black Box Testing
The tester has **no knowledge** of the internal code or logic. Testing is based purely on **inputs and expected outputs**. It checks whether the system behaves correctly from the user's perspective.

- Also called **functional testing**
- Suitable for acceptance and system testing

### 2. White Box Testing
The tester has **full knowledge** of the internal code structure, logic, and paths. It verifies that all statements, branches, and conditions execute correctly.

- Requires programming knowledge
- Used during unit and integration testing

### 3. Alpha Testing
Conducted by **internal staff** (developers or QA team) in a **controlled environment** before the product is released externally.

### 4. Beta Testing
Conducted by **actual end-users** in their **real-world environment**. Feedback is collected to make final refinements before the official launch.

### 5. Usability Testing
Observes real users attempting to complete specific tasks with the prototype. The goal is to evaluate **ease of use**, **interface clarity**, and **user satisfaction**.

---

## Verification vs. Validation

| Concept | Question it answers | Focus |
|---|---|---|
| **Verification** | *Are we building the product right?* | Checks against specifications/design |
| **Validation** | *Are we building the right product?* | Checks against user needs |

---

## The Iterative Testing Cycle

Prototype testing follows an **iterative** approach aligned with the SDLC:

1. **Build** a prototype
2. **Test** it (functional, usability, etc.)
3. **Collect feedback** from users/stakeholders
4. **Refine** the prototype based on findings
5. **Repeat** until the prototype meets requirements

This cycle directly supports **SLO CS-11-B-01**: planning, developing, systematically testing, and refining computational artifacts.

---

## Key Terms

- **Bug / Defect**, An error in the prototype that causes incorrect behaviour
- **Test Case**, A set of conditions used to determine if a feature works correctly
- **Test Plan**, A document describing the scope, approach, and schedule of testing activities
- **Regression Testing**, Re-testing after fixes to ensure no new bugs were introduced