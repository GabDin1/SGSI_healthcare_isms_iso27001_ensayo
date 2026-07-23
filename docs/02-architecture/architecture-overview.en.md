# Architecture Overview

🌐 **Language**

- **English**
- [Español](architecture-overview.es.md)

---

| Field | Information |
|--------|-------------|
| **Document ID** | ARC-001 |
| **Version** | 1.0 |
| **Status** | Draft |
| **Classification** | Internal |
| **Owner** | IT Architecture Manager |
| **Creation Date** | Pending |
| **Last Review** | Pending |

---

# 1. Purpose

This document provides a high-level overview of the reference technology architecture used to develop the Information Security Management System (ISMS).

Its purpose is to describe the main infrastructure components, their relationships and the technological environment supporting the business processes included within the ISMS scope.

---

# 2. Scope

The architecture described in this document represents a reference implementation based on publicly available information and industry best practices for enterprise architecture and information security.

It does not represent the actual infrastructure of NYC Health + Hospitals.

---

# 3. Design Principles

The reference architecture has been designed following these principles:

- Protection of information confidentiality, integrity and availability.
- Defense in Depth.
- Infrastructure segmentation.
- Principle of Least Privilege.
- High availability for critical services.
- Scalability.
- Centralized security management.
- Integration of on-premises and cloud services.

---

# 4. Main Components

The architecture consists of the following major components:

- Internal users.
- Patients and external users.
- Corporate network infrastructure.
- Data centers.
- Clinical systems.
- Administrative systems.
- Identity services.
- Cloud services.
- Backup and recovery systems.
- Security monitoring solutions.

---

# 5. High-Level Architecture

The infrastructure is organized into several functional domains.

## Users

Including access for:

- Healthcare professionals.
- Administrative staff.
- IT personnel.
- Executive management.
- Patients (through authorized services).

## On-Premises Infrastructure

Including:

- Data centers.
- Physical servers.
- Virtualization infrastructure.
- Corporate networks.
- Storage systems.

## Clinical Services

Including:

- Electronic Health Record (EHR).
- Hospital Information System (HIS).
- Laboratory Information System (LIS).
- Radiology Information System / PACS.

## Corporate Services

- Corporate email.
- Directory services.
- Human Resources.
- Financial management.
- Collaboration platforms.

## Cloud Services

The architecture assumes the use of cloud services for:

- Email.
- Collaboration.
- Backup.
- Disaster recovery.
- Authorized SaaS platforms.

---

# 6. Architecture Objectives

The architecture aims to:

- Protect critical information.
- Ensure service continuity.
- Reduce the attack surface.
- Support risk management.
- Improve infrastructure resilience.
- Meet applicable regulatory requirements.

---

# 7. Relationship with the ISMS

The architecture described in this document provides the foundation for:

- Network architecture.
- Security architecture.
- Asset identification.
- Information classification.
- Risk assessment.
- Security control selection.
- Business continuity planning.

---

# 8. Related Documents

- [Information Security Management System](../01-context/isms.en.md)
- [Network Architecture](network-architecture.en.md)
- [Security Architecture](security-architecture.en.md)
- [Trust Boundaries](trust-boundaries.en.md)
- [Data Flows](data-flows.en.md)
- [Technology Stack](technology-stack.en.md)

---

# 9. References

- ISO/IEC 27001:2022
- ISO/IEC 27002:2022
- NIST SP 800-160 – Systems Security Engineering
- CIS Critical Security Controls

---

# 10. Revision History

| Version | Date | Description | Author |
|---------|------|-------------|--------|
| 1.0 | Pending | Initial document creation | Gabriel |
