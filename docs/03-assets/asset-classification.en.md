# Asset Classification

🌐 **Language**

- **English**
- [Español](asset-classification.es.md)

---

| Field | Information |
|-------|-------------|
| **Document ID** | AST-003 |
| **Version** | 1.0 |
| **Status** | Draft |
| **Classification** | Internal |
| **Owner** | ISMS Manager |
| **Creation Date** | Pending |
| **Last Review** | Pending |

---

# 1. Purpose

This document establishes the methodology used to classify assets included within the scope of the Information Security Management System (ISMS).

Classification enables the organization to determine asset importance, establish appropriate protection requirements and provide input for subsequent risk assessment and treatment.

---

# 2. Scope

This methodology applies to assets registered within the ISMS asset inventory, including:

- Information assets.
- Hardware.
- Software.
- Technology services.
- Physical infrastructure.

Classification considers both information sensitivity and the operational criticality of each asset.

---

# 3. Classification Principles

Asset classification is based on the following principles:

- Protection shall be proportional to asset importance.
- Information sensitivity and operational criticality are separate concepts.
- Classification shall consider confidentiality, integrity and availability.
- Asset owners shall participate in determining and reviewing classification.
- Classification shall be reviewed when the use, function or context of an asset changes.

---

# 4. Information Classification

Information assets are classified according to their sensitivity.

| Level | Description | Example |
|-------|-------------|---------|
| **Public** | Information whose disclosure would not cause significant impact. | Officially published information |
| **Internal** | Information intended for internal organizational use. | General internal procedures |
| **Confidential** | Information whose unauthorized disclosure could cause significant impact. | Financial or employee information |
| **Restricted** | Highly sensitive information requiring the highest level of protection. | Medical records and sensitive health information |

Classification determines the protection requirements applied during information storage, processing, transmission and disposal.

---

# 5. CIA Assessment

In addition to sensitivity classification, each asset shall be assessed according to:

- **Confidentiality (C)**
- **Integrity (I)**
- **Availability (A)**

Each dimension uses a four-level scale.

| Value | Level | Description |
|------:|-------|-------------|
| 1 | Low | Impact would be limited and would not significantly affect operations. |
| 2 | Medium | Impact could partially affect processes or services. |
| 3 | High | Impact could cause significant disruption, loss or compliance consequences. |
| 4 | Critical | Impact could severely affect healthcare services, patients, legal obligations or operational continuity. |

---

# 6. Confidentiality

Confidentiality represents the need to prevent information from being disclosed to unauthorized individuals or systems.

### Low

Information may be public or unauthorized disclosure would have minimal impact.

### Medium

Disclosure could affect internal processes.

### High

Disclosure could significantly affect the organization or individuals.

### Critical

Disclosure could compromise highly sensitive clinical information, result in serious legal consequences or significantly affect patients.

---

# 7. Integrity

Integrity represents the need to maintain information that is accurate, complete and protected against unauthorized modification.

### Low

Errors can be easily corrected and have little impact.

### Medium

Incorrect modification could affect administrative processes.

### High

Alteration could significantly affect operational processes or important information.

### Critical

Unauthorized modification could directly affect clinical decisions, treatments or patient safety.

---

# 8. Availability

Availability represents the need for an asset to remain accessible when required.

### Low

Unavailability can be tolerated for extended periods.

### Medium

Unavailability may cause operational delays.

### High

Disruption may significantly affect important services.

### Critical

Unavailability may directly affect essential healthcare services or prevent access to information required for patient care.

---

# 9. Determining Criticality

For this project, overall asset criticality shall be determined using the highest value obtained across Confidentiality, Integrity and Availability:

`Criticality = MAX(C, I, A)`

Example:

| Asset | C | I | A | Criticality |
|-------|---|---|---|-------------|
| Electronic Health Record | 4 | 4 | 4 | Critical |
| Financial Information | 3 | 3 | 2 | High |
| General Internal Documentation | 2 | 2 | 2 | Medium |
| Public Information | 1 | 1 | 1 | Low |

This approach prevents a critical security requirement from being obscured by averaging lower values.

---

# 10. Criticality and Redundancy

The existence of redundancy, backups or high-availability mechanisms **does not automatically reduce the inherent criticality of an asset**.

For example, a clinical database may remain critical even when a replica exists.

Redundancy represents a protective measure that can reduce the risk associated with certain availability scenarios, but it does not necessarily change the importance of the asset to the organization.

This distinction will be considered during risk assessment.

---

# 11. Classification Review

Classification shall be reviewed:

- Periodically.
- When the use of an asset changes.
- When ownership changes.
- When dependent processes change.
- When new legal or contractual requirements arise.
- When significant architectural changes occur.
- When risk assessment indicates that classification should be reviewed.

---

# 12. Relationship with Risk Management

Asset classification provides input for subsequent impact assessment.

A distinction shall be maintained between:

**Asset Criticality**

→ the importance of the asset to the organization.

and

**Risk Level**

→ the result of the risk assessment process according to the criteria established in the applicable risk methodology.

Therefore, a critical asset does not automatically mean that every associated risk is critical.

---

# 13. Related Documents

- [Asset Management](asset-management.en.md)
- [Asset Inventory](asset-inventory.en.md)
- [Asset Ownership](asset-ownership.en.md)
- [Information Assets](information-assets.en.md)
- [Hardware Assets](hardware-assets.en.md)
- [Software Assets](software-assets.en.md)
- [Service Assets](service-assets.en.md)

---

# 14. References

- ISO/IEC 27001:2022
- ISO/IEC 27002:2022
- ISO/IEC 27005

---

# 15. Revision History

| Version | Date | Description | Author |
|---------|------|-------------|--------|
| 1.0 | Pending | Initial document creation | Gabriel |
