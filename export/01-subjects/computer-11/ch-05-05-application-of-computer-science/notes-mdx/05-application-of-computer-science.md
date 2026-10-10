<!-- note kx79b4x1dr4fe083a2kkpaaxb985qs4c | topic ms7b3cwcwrqc25rjx58h4wtqjx85peqy | status published -->
# 5.1 Introduction to Internet of Things (IoT)

## What is IoT?

The **Internet of Things (IoT)** is a network of physical objects, called *'things'*, that are embedded with **sensors, software, and connectivity technologies**. These objects collect and exchange data with other devices and systems over the internet, often without any direct human intervention.

Examples of IoT devices include smart thermostats, fitness trackers, smart door locks, industrial sensors, and connected vehicles.

---

## Four Main Components of an IoT System

| Component | Role |
|---|---|
| **1. Sensors / Devices** | Collect data from the physical environment (e.g., temperature, motion, humidity) |
| **2. Connectivity** | Transmit collected data to the cloud or processing centre via Wi-Fi, Bluetooth, 4G/5G, etc. |
| **3. Data Processing** | Software (often cloud-based) analyses the data and makes decisions or triggers actions |
| **4. User Interface** | Presents information to the user or allows them to send commands (e.g., a mobile app) |

---

## Sensors vs. Actuators

- A **Sensor** is an *input* device that detects a physical parameter (light, temperature, pressure) and converts it into an electrical signal for the IoT system to process.
- An **Actuator** is an *output* device that receives a command from the IoT system and converts it into a **physical action**, for example, opening a valve, switching on a light, or unlocking a door.

> **Example:** A water-leak sensor detects flooding → sends signal to cloud → cloud instructs the actuator → actuator closes the water valve automatically.

---

## IoT and Network Scalability & Reliability

IoT networks must support **billions of connected devices** simultaneously. Two key network properties are therefore critical:

- **Scalability**, the ability of the network to grow and accommodate new devices without degrading performance.
- **Reliability**, the ability to maintain consistent, uninterrupted data transmission even when individual nodes fail.

### Network Topology and IoT

The choice of **network topology** directly affects scalability and reliability:

| Topology | Scalability | Reliability | Notes |
|---|---|---|---|
| **Star** | Moderate | Low (single point of failure at hub) | Simple but hub failure brings down the network |
| **Mesh** | High | High (multiple paths available) | Ideal for large IoT deployments; self-healing |
| **Bus** | Low | Low | Simple but not suitable for large IoT networks |

For large-scale IoT deployments (e.g., smart cities, industrial IoT), **mesh topology** is preferred because it eliminates single points of failure and allows the network to reroute data automatically.

---

## IoT and Cybersecurity

Because IoT devices continuously collect and transmit **sensitive personal and environmental data**, cybersecurity is a critical concern.

### Why IoT Devices Are Vulnerable
- Many IoT devices have **limited processing power** and cannot run complex security software.
- Devices often use **default or weak passwords**.
- Large numbers of connected devices increase the **attack surface** for hackers.
- Data is transmitted over public networks, making interception possible.

### Security Measures for IoT

| Method | Description |
|---|---|
| **Encryption** | Converts data into an unreadable format during transmission (e.g., AES, TLS/SSL) so only authorised parties can read it |
| **Authentication** | Verifies the identity of devices and users before granting access |
| **Firewalls** | Filter incoming and outgoing network traffic to block unauthorised access |
| **Regular Updates** | Firmware/software patches fix known security vulnerabilities |

> **Key Point:** Without proper encryption and authentication, an attacker could intercept IoT data or take control of connected devices (e.g., unlocking smart locks, accessing security cameras).

---

## Applications of IoT

| Domain | Example |
|---|---|
| **Smart Home** | Smart thermostat, smart lighting, connected security cameras |
| **Healthcare** | Wearable heart-rate monitors, remote patient monitoring |
| **Agriculture** | Soil moisture sensors that automatically trigger irrigation |
| **Industry (IIoT)** | Predictive maintenance sensors on factory machines |
| **Smart Cities** | Connected traffic lights, smart waste management |

---

## Summary

- IoT connects physical objects to the internet to collect and exchange data automatically.
- The four components are: **Sensors → Connectivity → Data Processing → User Interface**.
- **Actuators** perform physical actions based on IoT system commands.
- IoT networks require **scalable and reliable topologies** (mesh is preferred for large deployments).
- **Cybersecurity** (encryption, authentication) is essential because IoT devices handle sensitive data and are often resource-constrained.

---

<!-- note kx77qdqtvs7qasgb2swzb27y8s85p9qc | topic ms736xf64wr8pq230hbvtq4xgx85phjz | status published -->
# 5.2 Technologies Enabling IoT

The Internet of Things (IoT) does not rely on a single technology, it is made possible by a **combination of enabling technologies** that work together to connect physical devices to the digital world.

---

## 1. Sensors and Actuators

**Sensors** are the foundation of any IoT system. They act as the *eyes and ears* of IoT by detecting physical conditions in the environment and converting them into digital signals.

| Sensor Type | What It Measures |
|---|---|
| Temperature Sensor | Heat / Cold |
| Motion Sensor | Movement / Presence |
| Light Sensor | Brightness / Luminosity |
| Humidity Sensor | Moisture in air |
| Pressure Sensor | Force / Weight |

**Actuators** are the *hands* of IoT, they receive digital commands and perform physical actions:
- Opening/closing a valve
- Turning a motor on/off
- Switching lights on/off

> **Key distinction:** Sensors *input* data from the physical world; Actuators *output* actions into the physical world.

---

## 2. RFID (Radio Frequency Identification)

RFID is a wireless technology that uses **electromagnetic fields** to automatically identify and track objects.

### Components of an RFID System:
- **RFID Tag**, A small chip attached to an object that stores data (e.g., product ID, location).
- **RFID Reader**, A device that emits radio waves and reads data from nearby tags.

### Applications in IoT:
- **Supply chain management**, tracking goods from warehouse to store
- **Inventory management**, automated stock counting
- **Access control**, smart ID cards
- **Animal tracking**, microchips in pets

---

## 3. Connectivity Technologies

IoT devices must communicate with each other and with the cloud. Several wireless protocols enable this:

| Technology | Range | Use Case |
|---|---|---|
| **Wi-Fi** | Medium (home/office) | Smart home devices |
| **Bluetooth / BLE** | Short range | Wearables, health monitors |
| **Zigbee / Z-Wave** | Short range, low power | Smart lighting, sensors |
| **5G** | Wide area, high speed | Smart cities, autonomous vehicles |
| **LoRaWAN** | Long range, low power | Agriculture, remote monitoring |

---

## 4. IPv6, The Address Space Enabler

Every IoT device needs a **unique IP address** to communicate over the internet.

- **IPv4** supports approximately $2^{32} \approx 4.3$ billion addresses, already exhausted.
- **IPv6** supports $2^{128}$ addresses, a virtually unlimited number sufficient for billions of IoT devices.

Without IPv6, the massive scale of IoT (projected tens of billions of devices) would be impossible.

---

## 5. Cloud Computing

IoT devices generate enormous volumes of data that cannot be stored or processed locally. **Cloud Computing** provides:

- **Remote storage**, data from millions of devices stored in data centres
- **Processing power**, servers analyse data in real time
- **Accessibility**, data accessible from anywhere via the internet
- **Scalability**, storage and compute resources can grow with demand

---

## 6. Big Data Analytics

The data collected by IoT sensors is only useful if it can be **analysed and interpreted**. Big Data Analytics tools process high-volume, high-velocity data to:

- Identify patterns and trends
- Generate predictions (predictive maintenance)
- Trigger automated responses

---

## 7. Artificial Intelligence (AI) and Machine Learning

AI enables IoT systems to become **intelligent and autonomous**:

- **Machine Learning**, devices learn from historical data to improve decisions
- **Predictive Analytics**, anticipate failures before they occur
- **Natural Language Processing**, voice-controlled IoT (e.g., smart speakers)

---

## Summary Table

| Technology | Role in IoT |
|---|---|
| Sensors | Collect physical data |
| Actuators | Perform physical actions |
| RFID | Wireless identification and tracking |
| Wi-Fi / 5G / BLE | Device connectivity |
| IPv6 | Unique addressing for all devices |
| Cloud Computing | Storage and remote processing |
| Big Data Analytics | Pattern recognition and insights |
| AI / ML | Intelligent decision-making |

---

<!-- note kx78qmd2e6gyek74peeb6matsn85pee6 | topic ms79wcacmpat8ajwg1c6w4a1k185pkh2 | status published -->
# 5.3 Blockchain

## What is Blockchain?

A **blockchain** is a decentralized, distributed digital ledger that records transactions across a network of computers. Once data is recorded, it cannot be altered without changing all subsequent blocks, making the record tamper-evident and highly secure.

Blockchain was originally developed as the underlying technology for Bitcoin (2008) but is now applied across many industries.

---

## Structure of a Block

Each **block** in a blockchain contains three key elements:

| Component | Description |
|---|---|
| **Data** | The transaction or information being recorded |
| **Hash** | A unique cryptographic fingerprint of the block's content |
| **Previous Hash** | The hash of the block before it, linking blocks into a chain |

If any data in a block is changed, its hash changes, which breaks the link to the next block, immediately signaling tampering.

---

## Key Properties of Blockchain

### 1. Decentralization
No single entity controls the blockchain. The ledger is copied and maintained across thousands of nodes (computers) worldwide. This eliminates a single point of failure.

### 2. Immutability
Once a transaction is recorded and confirmed, it **cannot be changed or deleted**. This is enforced by cryptographic hashing, altering one block invalidates all blocks that follow it.

### 3. Transparency
All participants in a public blockchain can view the entire transaction history, promoting trust and accountability.

### 4. Security
Data is secured through cryptographic hashing and consensus mechanisms, making unauthorized changes computationally infeasible.

---

## Consensus Mechanisms

Before a new block is added to the chain, all nodes must **agree** that the transaction is valid. This agreement process is called a **consensus mechanism**.

| Mechanism | How it Works |
|---|---|
| **Proof of Work (PoW)** | Nodes (miners) compete to solve a complex mathematical puzzle; the winner adds the next block. Used by Bitcoin. |
| **Proof of Stake (PoS)** | Validators are chosen based on the amount of cryptocurrency they "stake" (lock up) as collateral. More energy-efficient than PoW. |

---

## Types of Blockchain

### Public Blockchain
- **Open** to anyone, anyone can join, read, and validate transactions.
- Examples: Bitcoin, Ethereum.
- Fully decentralized and transparent.

### Private (Permissioned) Blockchain
- **Restricted**, only authorized participants can join, validate transactions, and access the ledger.
- Controlled by a single organization or consortium.
- Used in enterprise solutions (e.g., banking, healthcare).

### Hybrid Blockchain
- Combines elements of both public and private blockchains.
- Some data is public; sensitive data remains private.

---

## Smart Contracts

A **smart contract** is a self-executing program stored on a blockchain that automatically enforces and executes the terms of an agreement when predefined conditions are met, without requiring a human intermediary.

**Example:** An insurance smart contract automatically pays a claim when flight-delay data confirms a delay of more than 3 hours.

---

## Applications of Blockchain

| Sector | Application |
|---|---|
| **Finance** | Cryptocurrency (Bitcoin, Ethereum), cross-border payments |
| **Supply Chain** | Tracking goods from manufacturer to consumer with full transparency |
| **Healthcare** | Secure sharing of patient records between hospitals |
| **Voting** | Tamper-proof digital voting systems |
| **Education** | Verifiable digital certificates and degrees |

---

## Advantages and Disadvantages

**Advantages:**
- Highly secure and tamper-resistant
- Eliminates need for intermediaries (banks, notaries)
- Transparent and auditable
- Decentralized, no single point of failure

**Disadvantages:**
- High energy consumption (especially Proof of Work)
- Slow transaction speeds compared to centralized databases
- Difficult to scale
- Irreversibility can be a problem if errors occur

---

---

<!-- note kx717kpvz9tmk08btfk0r67tds85qq95 | topic ms74k8h24ndn4261y8jfjsefzx85q28q | status published -->
# 5.5 Blockchain and IoT Integration

## Introduction

The **Internet of Things (IoT)** connects billions of physical devices to the internet, generating vast amounts of data. However, traditional IoT architectures rely on a **centralized client-server model**, which creates a single point of failure and poses serious security risks. **Blockchain technology** offers a solution by providing a decentralized, secure, and transparent framework for IoT networks.

---

## Why Integrate Blockchain with IoT?

Traditional IoT systems face several challenges:

| Challenge | Description |
|---|---|
| **Single Point of Failure** | A central server, if compromised, brings down the entire network |
| **Data Tampering** | Centralized data can be altered without detection |
| **Scalability** | Central servers struggle to handle billions of IoT devices |
| **Privacy** | All data passes through a central authority |

Blockchain addresses these by replacing the central authority with a **distributed ledger** shared across all network nodes.

---

## Key Benefits of Blockchain-IoT Integration

### 1. Decentralization
Instead of routing all IoT data through a central server, blockchain distributes data across **multiple nodes**. No single entity controls the network, improving both **scalability** and **reliability**.

### 2. Data Immutability
Once IoT sensor data is recorded on the blockchain, it **cannot be altered or deleted**. Each block contains a cryptographic hash of the previous block, so any tampering is immediately detectable. This provides a reliable and permanent audit trail.

### 3. Enhanced Security
Blockchain uses **cryptographic hashing** and **consensus algorithms** to verify every transaction. This ensures that only legitimate data from authenticated IoT devices is added to the ledger.

### 4. Elimination of Single Point of Failure
Data is **replicated across all nodes** in the network. If one node fails or is attacked, the rest of the network continues to function normally, a critical advantage for mission-critical IoT deployments.

### 5. Transparency and Trust
All participants in a blockchain network can view the same ledger, creating **transparency** without requiring a trusted central authority.

---

## Smart Contracts in Blockchain-IoT

A **Smart Contract** is a self-executing program stored on the blockchain that automatically performs actions when predefined conditions are met.

**Example:** A smart contract in a smart home system could automatically unlock the door when a registered IoT sensor detects the homeowner's presence, without any human intervention.

**Benefits for IoT:**
- Automates device-to-device transactions
- Removes the need for intermediaries
- Executes reliably and transparently
- Reduces human error

---

## Types of Blockchain for IoT

### Public (Permissionless) Blockchain
- Anyone can join, read, and write to the ledger
- Fully decentralized
- Slower due to open consensus (e.g., Proof of Work)
- Example: Bitcoin, Ethereum

### Permissioned (Private) Blockchain
- Only **authorized devices and participants** can join
- Faster transactions and higher privacy
- Controlled by an organization
- **Most suitable for corporate IoT applications** (e.g., supply chain management, healthcare)

---

## Challenges of Blockchain-IoT Integration

| Challenge | Explanation |
|---|---|
| **Computational Overhead** | Consensus mechanisms like Proof of Work require high processing power that low-power IoT sensors lack |
| **Storage Limitations** | IoT devices have limited memory; storing a full blockchain copy is impractical |
| **Latency** | Blockchain confirmation times may be too slow for real-time IoT applications |
| **Energy Consumption** | Mining and consensus processes consume significant energy |

---

## Real-World Applications

- **Supply Chain Management:** Track goods from manufacturer to consumer with tamper-proof records
- **Smart Healthcare:** Secure sharing of patient data from wearable IoT devices
- **Smart Grid / Energy:** Automated peer-to-peer energy trading between IoT-enabled meters
- **Smart Cities:** Secure management of traffic sensors, surveillance, and utilities
- **Agriculture:** Monitor crop conditions with IoT sensors; record data immutably for quality assurance

---

## Summary

Blockchain and IoT integration combines the **connectivity of IoT** with the **security and decentralization of blockchain**. This integration solves key IoT problems, single points of failure, data tampering, and lack of trust, while enabling autonomous device interactions through smart contracts. Permissioned blockchains are preferred in corporate settings for their speed and privacy.

---

<!-- note kx72571z0jckjn3sdne8psep0s85qkft | topic ms7byyjaf0pqb44bhyvmd01ztd85pxe7 | status published -->
# 5.6 Stakeholder Interests in AI Systems

An **AI system** does not exist in isolation, it is designed, deployed, and used by a wide range of people and groups, each with their own goals, values, and concerns. These groups are called **stakeholders**. Understanding their interests is essential for building AI systems that are fair, effective, and ethical.

---

## Who Are Stakeholders?

A **stakeholder** is any individual or group that is affected by, or has an interest in, an AI system. The four primary stakeholder groups are:

| Stakeholder | Role |
|---|---|
| **Developers** | Build and train the AI model |
| **Users** | Interact with and consume the AI's output |
| **Organizations** | Own, fund, and deploy the AI system |
| **Society** | Affected third parties, the broader public |

---

## Interests of Each Stakeholder Group

### 1. Developers
Developers are the engineers, data scientists, and researchers who create AI systems. Their primary interests include:
- **Technical robustness**, the model must work correctly and reliably.
- **Algorithmic efficiency**, the system should be fast and resource-effective.
- **Accuracy**, minimising errors in predictions or classifications.
- **Ethical implementation**, avoiding bias in training data and model design.

### 2. Users
Users are the people who directly interact with the AI system (e.g., customers using a recommendation engine). Their key concerns are:
- **Privacy**, personal data should not be misused.
- **Ease of use**, the interface should be intuitive.
- **Transparency / Explainability (XAI)**, users want to understand *why* the AI made a particular decision.
- **Fairness**, the AI's output should not discriminate against them.

### 3. Organizations
Organizations invest in AI to gain business value. Their priorities include:
- **Return on Investment (ROI)**, AI must generate measurable financial benefit.
- **Competitive advantage**, staying ahead of rivals in the market.
- **Legal compliance**, adhering to data protection laws (e.g., GDPR).
- **Operational efficiency**, automating tasks to reduce costs.

### 4. Society
Society represents the broader public and regulatory bodies. Their concerns include:
- **Employment impact**, AI-driven automation may displace workers.
- **Ethical use of data**, citizens' data must be handled responsibly.
- **Algorithmic bias**, AI must not systematically discriminate against groups.
- **Public safety**, AI used in critical systems (healthcare, justice) must be safe.

---

## Conflicting Interests

Stakeholder interests often **conflict** with one another. The most common tensions are:

### Data Privacy vs. Data Monetization
- **Users** want their personal data kept private.
- **Organizations** want to use or sell that data to improve models or generate revenue.

### Accuracy vs. Fairness
- **Developers** may optimise for overall accuracy.
- **Society** demands that accuracy is equitable across all demographic groups.

### Profit vs. Transparency
- **Organizations** may keep AI models proprietary (black-box) to protect competitive advantage.
- **Users and regulators** demand explainability and accountability.

> **Key Insight:** These conflicts mean that designing an ethical AI system requires negotiation and compromise between all stakeholder groups, there is rarely a single solution that satisfies everyone perfectly.

---

## Algorithmic Bias

**Algorithmic bias** refers to systematic and unfair discrimination in AI outputs. It arises when:
- Training data reflects historical inequalities.
- Certain demographic groups are under-represented in the dataset.
- Proxy variables inadvertently encode protected characteristics (e.g., using postcode as a proxy for race).

Algorithmic bias is a major concern for **society** and **regulatory bodies**, and addressing it is a shared responsibility of developers and organizations.

**Example:** A hiring AI trained on historical data from a male-dominated industry may unfairly rank female applicants lower, even if gender is not an explicit input variable.

---

## Cultural and Value Differences

Stakeholders from different cultural backgrounds may have different values that affect AI design:
- Some cultures prioritise **collective benefit** over individual privacy.
- Regulatory frameworks differ by country (e.g., EU's strict GDPR vs. more permissive regimes).
- AI systems deployed globally must be sensitive to these differences to avoid harm.
- What is considered "fair" or "ethical" may vary significantly across societies.

---