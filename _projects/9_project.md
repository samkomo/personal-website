---
layout: project
title: Cognitive Learning Companion (CLC)
description: An adaptive, sensor-powered learning assistant for African primary schools capable of personalized feedback, attention tracking, and cognitive load estimation.
img: assets/img/education_ai.jpg
importance: 9
category: systems
slug: 9_project
related_publications: true
status: Completed
period: 2014-2017
patent: US9961139B2
---

## Background

Primary education in Sub-Saharan Africa faces severe challenges: large class sizes (often 50+ students per teacher), limited resources, and lack of personalized instruction. Traditional teaching methods cannot adapt to individual learning needs, leading to high dropout rates and poor learning outcomes. The Kenyan Ministry of Education and IBM Research Africa identified AI and sensor technology as potential solutions to create adaptive learning systems that provide personalized instruction at scale.

## Problem Statement

**How can we create an adaptive learning system that monitors student engagement, identifies learning difficulties, and delivers personalized feedback in resource-constrained classroom environments?**

The educational challenges include:
- **Large class sizes**: Teachers cannot provide individual attention to 50+ students
- **Limited resources**: Schools lack computers, internet, and educational technology
- **Learning detection**: Teachers cannot identify when students are stuck or disengaged
- **Personalization gap**: One-size-fits-all instruction doesn't meet diverse learning needs
- **Offline requirements**: Many schools lack reliable internet connectivity

## System Architecture

CLC (Cognitive Learning Companion) is a **multimodal sensor-based tutoring system**:

### System Components

1. **Embedded Sensor Hub**: Raspberry Pi-based device with eye-tracking and keystroke monitoring
2. **Attention Estimation Engine**: ML models detecting learner state (engaged, stuck, distracted)
3. **Adaptive Feedback System**: Personalized instructional responses based on learner state
4. **Offline Sync Module**: Bluetooth-based data synchronization for rural classrooms
5. **Teacher Dashboard**: Web-based interface for cohort tracking and intervention

### Key Innovation

CLC was among the first systems to combine **multimodal sensor fusion** (eye-tracking + keystroke analysis) with **offline AI** for personalized learning in resource-constrained environments.

## Key Features

- **Eye-tracking + keystroke monitoring** for engagement profiling, detecting when learners are stuck or distracted
- **Context-aware feedback model** for personalized instruction, adapting to individual learning patterns
- **Offline sync** and rural classroom integration, functioning without internet connectivity
- **Teacher-assist dashboards** for cohort tracking, enabling data-driven teaching interventions

## Technologies

- **Multimodal Sensor Fusion**: Combining eye-tracking and keystroke data for learner state detection
- **Machine Learning for Attention Estimation**: Real-time classification of learner engagement
- **Embedded Devices (Raspberry Pi)**: Low-cost hardware for resource-constrained schools
- **Real-time Feedback Loops**: Sub-second response to detected learning difficulties
- **Bluetooth Low-Energy + Android Mobile SDK**: Offline data collection and synchronization

## My Role

As **Research Engineer – Embedded Intelligence** at IBM Research Africa, I developed:

- **Embedded device firmware**: Built firmware for Raspberry Pi sensor hub
- **Bluetooth integrations**: Developed BLE protocols for mobile device communication
- **Machine learning models**: Trained models for learner state detection using sensor data
- **Field deployment**: Led deployment and data collection across 5 Kenyan classrooms
- **Patent co-inventor**: Co-invented cognitive learning system (US9961139B2)
- **Research publication**: Co-authored ACM MOBILESoft '16 paper on adaptive learning systems

## Implementation Details

The CLC system was implemented through:

### System Performance

- **Attention detection accuracy**: 85%+ in identifying engaged vs. distracted learners
- **Feedback response time**: < 2 seconds from detection to intervention
- **Offline operation**: 100% functionality without internet connectivity
- **Battery life**: 8+ hours on portable power banks

## Outcomes

- **Pilot deployed across 5 Kenyan classrooms** with 200+ students
- **US patent granted**: US9961139B2 for cooperative content downloading and cognitive learning
- **Published in ACM MOBILESoft '16** with comprehensive evaluation results
- **Contributed to Kenya's digital literacy program** architecture

## Impact

CLC addresses critical challenges in AI for education and learning analytics:

- **AI for education**: Demonstrates practical AI applications in resource-constrained settings
- **Cognitive systems**: Advances understanding of learner cognition and engagement
- **Learning analytics**: Provides data-driven insights for educational improvement
- **Human-computer interaction (HCI)**: Explores multimodal interaction for learning

## Status

**Completed** (2014-2017) - Research-driven public sector collaboration. Patented + Published. The system design continues to inform adaptive learning research in developing markets.

## Research Contributions

This work advances:
1. **Multimodal sensor fusion** for learning analytics
2. **Offline AI systems** for resource-constrained environments
3. **Personalized learning** in large classroom settings
4. **Educational technology** for developing markets
