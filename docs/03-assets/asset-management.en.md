# Asset Management

🌐 **Language**

- **English**
- [Español](asset-management.es.md)

---

| Field | Information |
|--------|-------------|
| **Document ID** | AST-001 |
| **Version** | 1.0 |
| **Status** | Draft |
| **Classification** | Internal |
| **Owner** | ISMS Manager |
| **Creation Date** | Pending |
| **Last Review** | Pending |

---

# 1. Purpose

This document establishes the framework for managing assets included within the scope of the Information Security Management System (ISMS).

Its purpose is to ensure that assets relevant to information security are identified, recorded, classified, assigned to an owner and managed throughout their lifecycle.

Asset management also provides a foundation for the subsequent identification, analysis and treatment of information security risks.

---

# 2. Scope

This process applies to all assets relevant to information security included within the scope of the ISMS.

These include, among others:

- Information assets.
- Hardware.
- Software.
- Network infrastructure.
- Technology services.
- Cloud services.
- Physical resources related to information processing.

---

# 3. Asset Management Principles

Asset management is based on the following principles:

- All relevant assets shall be identified.
- Assets shall be maintained in an inventory.
- Each asset shall have a defined owner or responsible party.
- Assets shall be classified according to their importance and sensitivity.
- Assets shall be protected according to their associated risks.
- The asset inventory shall be kept up to date.
- Assets shall be managed throughout their lifecycle.
- Asset disposal shall be performed securely.

---

# 4. Asset Categories

To facilitate their management, assets are grouped into the following categories:

## Information Assets

Information relevant to the organization's activities.

Examples:

- Medical records.
- Patient personal data.
- Laboratory results.
- Medical images.
- Prescriptions.
- Financial information.
- Employee information.
- Audit logs.

## Hardware

Physical equipment used to process, store or transmit information.

Examples:

- Servers.
- Workstations.
- Laptops.
- Network equipment.
- Storage systems.
- Devices used in clinical environments.

## Software

Operating systems, applications and platforms used by the organization.

Examples:

- EHR.
- HIS.
- LIS.
- RIS/PACS.
- Operating systems.
- Database management systems.
- Virtualization software.
- Administrative applications.

## Services

Technology services required for the operation of information systems.

Examples:

- Identity and authentication services.
- DNS.
- DHCP.
- Corporate email.
- VPN.
- Backup services.
- Monitoring services.
- Cloud services.

## Physical Infrastructure

Facilities and supporting infrastructure required to host or protect information systems.

Examples:

- Data centers.
- Communication rooms.
- Network cabinets.
- Electrical systems.
- Uninterruptible Power Supply (UPS) systems.

---

# 5. Asset Lifecycle

Assets shall be managed throughout the following lifecycle stages:

## 5.1 Identification

The existence of the asset and its relationship with processes included within the ISMS scope are determined.

## 5.2 Registration

The asset is added to the asset inventory together with the information required for its management.

## 5.3 Classification

The asset is classified according to its sensitivity, importance and criticality to the organization.

## 5.4 Ownership Assignment

An asset owner is assigned responsibility for ensuring that the asset is appropriately managed and protected.

## 5.5 Operation and Maintenance

During its use, the asset shall remain protected and maintained in accordance with applicable policies and procedures.

## 5.6 Review

Assets and their associated information shall be periodically reviewed to ensure that the inventory remains accurate and up to date.

## 5.7 Disposal

When an asset is no longer required, it shall be removed from service in a controlled manner.

Where the asset contains sensitive information, that information shall be securely erased or destroyed before the asset is reused, returned or disposed of.

---

# 6. Asset Inventory

Assets identified within the scope of the ISMS shall be recorded in an asset inventory.

At a minimum, the inventory shall allow the following information to be recorded:

- Asset identifier.
- Name.
- Category.
- Description.
- Owner.
- Location or environment.
- Classification.
- Criticality.
- Status.

The specific methodology for maintaining the inventory is documented in:

- [Asset Inventory](asset-inventory.en.md)

---

# 7. Asset Ownership

Each asset shall have a clearly identified owner.

The asset owner shall be responsible for:

- Ensuring that the asset is correctly registered.
- Determining or validating its classification.
- Identifying its protection requirements.
- Participating in the assessment of associated risks.
- Periodically reviewing the asset information.
- Authorizing, where applicable, the conditions for access and use.

Asset ownership represents responsibility for its management and does not necessarily imply physical or legal ownership of the asset.

---

# 8. Classification and Criticality

Assets shall be classified according to their sensitivity and importance to the organization's operations.

Classification will help determine the required protection measures and support the risk assessment process.

Particular consideration shall be given to potential impacts on:

- Confidentiality.
- Integrity.
- Availability.

The classification methodology is defined in:

- [Asset Classification](asset-classification.en.md)

---

# 9. Asset Inventory Review

The asset inventory shall be reviewed:

- Periodically.
- When new systems or services are introduced.
- When assets are retired.
- When significant architectural changes occur.
- When the classification or criticality of an asset changes.
- When the risk assessment identifies the need for an update.

---

# 10. Relationship with Risk Management

The assets identified during this phase will constitute one of the main inputs to the ISMS risk management process.

Information regarding their criticality, ownership, location and function will subsequently support:

- Identification of relevant threats.
- Identification of vulnerabilities.
- Analysis of potential impacts.
- Risk assessment.
- Determination of risk treatment requirements.
- Selection of appropriate security controls.

---

# 11. Related Documents

- [ISMS Scope](../01-context/scope.en.md)
- [Architecture Overview](../02-architecture/architecture-overview.en.md)
- [Asset Inventory](asset-inventory.en.md)
- [Asset Classification](asset-classification.en.md)
- [Asset Ownership](asset-ownership.en.md)
- [Information Assets](information-assets.en.md)
- [Hardware Assets](hardware-assets.en.md)
- [Software Assets](software-assets.en.md)
- [Service Assets](service-assets.en.md)

---

# 12. References

- ISO/IEC 27001:2022
- ISO/IEC 27002:2022
- ISO/IEC 27005

---

# 13. Revision History

| Version | Date | Description | Author |
|---------|------|-------------|--------|
| 1.0 | Pending | Initial document creation | Gabriel |
