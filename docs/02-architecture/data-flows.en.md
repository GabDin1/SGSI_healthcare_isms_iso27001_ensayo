# Data Flows

🌐 **Language**

- **English**
- [Español](data-flows.es.md)

---

| Field | Information |
|--------|-------------|
| **Document ID** | ARC-005 |
| **Version** | 1.0 |
| **Status** | Draft |
| **Classification** | Internal |
| **Owner** | IT Architecture Manager |
| **Creation Date** | Pending |
| **Last Review** | Pending |

---

# 1. Purpose

This document describes the main information flows within the reference architecture used by the Information Security Management System (ISMS).

Its purpose is to identify how information moves between users, applications, systems and services, providing the foundation for risk assessment, asset identification and security control selection.

---

# 2. Scope

This document applies to the business processes and systems included within the ISMS scope.

It covers both internal communications and interactions with external services and cloud platforms.

---

# 3. Principles

Information flows shall comply with the following principles:

- Confidentiality.
- Integrity.
- Availability.
- Authentication.
- Authorization.
- Traceability.
- Encryption where required.

---

# 4. Main Data Flows

## Patient Care

Patient

↓

Patient Portal / Reception

↓

Electronic Health Record (EHR)

↓

Clinical Database

↓

Healthcare Professionals

---

## Clinical Diagnostics

Healthcare Professional

↓

Test Request

↓

Laboratory Information System (LIS)

↓

Clinical Results

↓

Electronic Health Record (EHR)

---

## Medical Imaging

Healthcare Professional

↓

Imaging Request

↓

RIS/PACS

↓

Medical Images

↓

Electronic Health Record (EHR)

---

## Administrative Management

Employee

↓

Administrative Management System

↓

Corporate Database

↓

Finance and Human Resources Services

---

## Remote Access

Authorized User

↓

VPN

↓

Authentication

↓

Corporate Network

↓

Authorized Services

---

## Backup Operations

Critical Systems

↓

Backup Server

↓

Secure Storage

↓

Disaster Recovery

---

# 5. Data Flow Classification

| Data Flow | Sensitivity |
|-----------|-------------|
| Medical records | High |
| Personal data | High |
| Medical results | High |
| Financial information | High |
| Administrative information | Medium |
| System logs | Medium |
| Public information | Low |

---

# 6. Data Flow Protection

Information flows shall be protected through:

- Encryption during transmission.
- User authentication.
- Access control.
- Network segmentation.
- Event logging.
- Continuous monitoring.
- Communication integrity.

---

# 7. Relationship with the ISMS

The documented data flows provide the basis for:

- Information asset identification.
- Risk assessment.
- Trust boundary definition.
- Security control selection.
- Data Flow Diagram (DFD) development.

---

# 8. Related Documents

- [Architecture Overview](architecture-overview.en.md)
- [Network Architecture](network-architecture.en.md)
- [Security Architecture](security-architecture.en.md)
- [Trust Boundaries](trust-boundaries.en.md)

---

# 9. References

- ISO/IEC 27001:2022
- ISO/IEC 27002:2022
- NIST SP 800-207 – Zero Trust Architecture
- NIST SP 800-160 – Systems Security Engineering

---

# 10. Revision History

| Version | Date | Description | Author |
|---------|------|-------------|--------|
| 1.0 | Pending | Initial document creation | Gabriel |
