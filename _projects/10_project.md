---
layout: project
title: Mombasa County Education Analytics Platform (MCEA)
description: An integrated data platform for profiling schools and driving outcome-based educational resource allocation across Mombasa County.
img: assets/img/analytics.jpg
importance: 10
category: systems
slug: 10_project
related_publications: true
status: Completed
period: 2015-2018
---

## Background

Education authorities in Kenya lack visibility into school performance, resource needs, and infrastructure readiness at the sub-national level. Data is fragmented across multiple systems (census, test scores, infrastructure surveys), making it difficult to make evidence-based decisions about resource allocation. The Mombasa County Education Office partnered with IBM Research Africa to create a unified analytics platform that integrates diverse data sources and provides actionable insights for educational planning and intervention.

## Problem Statement

**How can we create an integrated data platform that provides comprehensive school profiling and enables evidence-based resource allocation for education authorities?**

The education data challenges include:
- **Data fragmentation**: School data scattered across multiple systems and formats
- **Lack of visibility**: Education authorities cannot see comprehensive school profiles
- **Resource allocation inefficiency**: Decisions made without data-driven insights
- **Reporting delays**: Manual data collection and reporting processes are slow
- **Anomaly detection**: No systematic way to identify underperforming schools or data quality issues

## System Architecture

MCEA (Mombasa County Education Analytics Platform) provides a **unified data integration and analytics platform**:

### Platform Components

1. **Multi-source Data Integration**: ETL pipelines aggregating data from census, test scores, infrastructure surveys
2. **School Profile Database**: Comprehensive database schema for school-level indicators
3. **Analytics Engine**: Real-time anomaly detection and performance metrics computation
4. **Interactive Dashboards**: Custom dashboards for regional education directors
5. **Mobile Data Collection**: Open Data Kit (ODK) integration for field agent data capture

### Key Innovation

MCEA was among the first systems to integrate **multiple education data sources** into a unified analytics platform with real-time anomaly detection for sub-national education management.

## Key Features

- **Multi-source school data integration** from census, test scores, infrastructure, and enrollment data
- **Real-time anomaly detection** on performance metrics, identifying data quality issues and outliers
- **Custom dashboards** for regional directors, providing actionable insights for decision-making
- **Offline field agent data sync** & conflict resolution, enabling data collection in areas with poor connectivity

## Technologies

- **Data Warehousing (MySQL/Postgres)**: Centralized storage for integrated education data
- **Interactive Dashboards**: Web-based visualization tools for education authorities
- **Data Cleaning Pipelines**: Automated ETL processes for data quality assurance
- **Geo-tagged School Profiles**: Location-based analysis and mapping
- **Mobile Data Collection (Open Data Kit – ODK)**: Android-based field data capture

## My Role

As **Field Analytics Developer** at IBM Research Africa, I developed:

- **School profile database schema**: Designed comprehensive data model for school indicators
- **ETL pipeline**: Engineered data extraction, transformation, and loading processes
- **Field agent toolchain**: Deployed and maintained mobile data collection systems
- **Training programs**: Trained local education officers on data usage and interpretation
- **Platform deployment**: Deployed system across 100+ schools in Mombasa County
- **Impact measurement**: Achieved 40% improvement in resource allocation accuracy

## Implementation Details

The MCEA platform was implemented through:

### System Performance

- **Data integration**: 100+ schools with complete profiles
- **Resource allocation accuracy**: 40% improvement in targeting interventions
- **Reporting efficiency**: 25% reduction in data reporting delays
- **Anomaly detection**: Identified 15+ data quality issues and underperforming schools

## Outcomes

- **Digitized profiles for 100+ schools** across Mombasa County
- **Improved resource allocation accuracy by 40%** through data-driven insights
- **Reduced data reporting delays by 25%** through automated processes
- **Used by education ministry** for 3 regional interventions based on platform insights

## Impact

MCEA addresses critical challenges in education analytics and digital governance:

- **Education analytics**: Demonstrates value of integrated data for education management
- **Data for development**: Practical application of data analytics in public sector
- **Digital governance**: Enables evidence-based policy and resource allocation
- **Sub-national decision support**: Provides tools for local education authorities

## Status

**Completed** (2015-2018) - Deployed Prototype. Cross-sector public-private partnership. The platform design continues to inform education data initiatives in Kenya and other African countries.

## Research Contributions

This work contributes to:
1. **Education data integration** methodologies
2. **Real-time anomaly detection** in education systems
3. **Mobile data collection** for resource-constrained environments
4. **Evidence-based education** policy and resource allocation
