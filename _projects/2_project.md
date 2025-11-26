---
layout: project
title: PlexiChain - Secure Blockchain-Based Flexibility Aggregator
description: A secure blockchain framework integrating Physical Unclonable Functions (PUFs) and NFTs to strengthen device identity and protect decentralized IoT nodes.
img: assets/img/security_lock.jpg
importance: 2
category: frameworks
slug: 2_project
related_publications: true
---

## Background

As blockchain-based energy trading systems scale, they become attractive targets for sophisticated cyberattacks. Traditional security mechanisms relying on software-based authentication are vulnerable to device cloning, false data injection, and man-in-the-middle attacks. In energy flexibility markets, where IoT devices (smart inverters, batteries, EV chargers) participate in real-time trading, ensuring device authenticity and data integrity is critical for grid stability and market fairness.

## Problem Statement

**How can we create a blockchain framework that provides hardware-anchored device identity, ensures data authenticity, and protects against cyberattacks in decentralized energy flexibility markets?**

The security challenges include:

- **Device identity spoofing**: Malicious actors can clone device credentials to inject false flexibility offers
- **False Data Injection (FDI) attacks**: Compromised devices can submit fraudulent energy flexibility data
- **Man-in-the-Middle (MitM) attacks**: Interception and modification of energy trading transactions
- **Lack of hardware trust anchors**: Software-only authentication cannot guarantee device authenticity
- **Scalability of security mechanisms**: Security solutions must not compromise system performance

## Architecture

PlexiChain integrates **Physical Unclonable Functions (PUFs)** and **Non-Fungible Tokens (NFTs)** into a blockchain-based flexibility trading framework. The architecture provides multi-layered security:

### Security Layers

1. **Hardware Identity Layer**: PUFs provide unique, unclonable device fingerprints
2. **Tokenized Access Layer**: NFTs represent device rights and trading permissions
3. **Anomaly Detection Layer**: Machine learning models detect suspicious trading patterns
4. **Blockchain Verification Layer**: Immutable records of all flexibility transactions

### Core Innovation

PlexiChain is the first framework to combine **hardware-based device attestation (PUFs)** with **blockchain-based asset tokenization (NFTs)** for energy flexibility markets. This dual-layer approach ensures both device authenticity and transaction integrity.

## Key Features

- **Hardware-level device attestation** using Physical Unclonable Functions, providing unclonable device identity
- **Tokenized access and rights management** through NFT-based asset tokens representing flexibility capacity
- **Anomaly-aware data validation** for detecting cyberattacks in real-time using ML-based pattern recognition
- **Proof-of-Flexibility transaction model** specifically designed for energy flexibility markets with verifiable capacity claims

## Technologies

- **Physical Unclonable Functions (PUFs)**: Hardware-based unique device identifiers
- **NFT-based Asset Tokens**: Blockchain tokens representing energy flexibility capacity
- **Ethereum Smart Contracts**: Automated execution of flexibility trading agreements
- **Lightweight Encryption**: Efficient cryptographic protocols for resource-constrained IoT devices
- **Multi-Agent Consensus Modules**: Distributed decision-making for flexibility aggregation

## My Role

As **PhD Researcher** at UNSW, I designed and developed PlexiChain:

- **Framework architecture**: Conceived the integration of PUFs and NFTs for energy flexibility markets
- **Security protocol design**: Developed the Proof-of-Flexibility transaction model and anomaly detection algorithms
- **Smart contract development**: Implemented Ethereum smart contracts for NFT-based asset tokens
- **Simulation and evaluation**: Built adversarial simulation environment and validated attack resistance
- **Research publication**: Authored arXiv preprint and presented security analysis at conferences

## Implementation Details

The framework was implemented and tested through:

- **3-node energy system simulation** under adversarial conditions including FDI and MitM attacks
- **PUF integration**: Hardware PUF modules integrated with smart inverters and battery systems
- **NFT marketplace**: Smart contract-based marketplace for trading flexibility tokens
- **Anomaly detection**: Real-time ML models monitoring transaction patterns for suspicious activity

### Security Evaluation

- **Attack resistance**: Successfully mitigated 95%+ of simulated FDI and device cloning attacks
- **Performance overhead**: Less than 5% latency increase compared to non-secure baseline
- **Scalability**: Supports 100+ devices per flexibility aggregator with linear scaling

## Outcomes

- **Published as arXiv preprint** (arXiv:2212.09064) with detailed security analysis
- **Attack mitigation**: Demonstrated effectiveness against FDI, MitM, and device cloning attacks
- **Formed security backbone** for BAILIF cross-chain validation mechanisms
- **Industry interest**: Framework design adopted in smart grid security research

## Impact

PlexiChain mitigates critical security threats in blockchain-based energy systems through multi-layered anomaly detection and hardware-anchored cryptographic integrity. The framework serves as the security and governance layer for:

- **Real-time smart grid negotiations** in microgrids and distributed energy systems
- **Carbon market transactions** requiring verifiable device identity
- **Energy flexibility aggregation** with guaranteed data authenticity
- **IoT device management** in critical energy infrastructure

## Research Contributions

This work advances the state-of-the-art in:

1. **Hardware-software co-design** for blockchain security
2. **PUF-based device attestation** in energy systems
3. **NFT applications** beyond digital art to critical infrastructure
4. **Anomaly detection** in blockchain-based energy markets
