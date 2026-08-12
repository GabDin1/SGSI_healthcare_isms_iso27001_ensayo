# Asset Inventory

🌐 **Language**

- **English**
- [Español](asset-inventory.es.md)

---

| Field | Information |
|-------|-------------|
| **Document ID** | AST-002 |
| **Version** | 1.0 |
| **Status** | Draft |
| **Classification** | Internal |
| **Owner** | ISMS Manager |
| **Creation Date** | Pending |
| **Last Review** | Pending |

---

# 1. Purpose

This document establishes the structure and criteria used to maintain the inventory of assets included within the scope of the Information Security Management System (ISMS).

The inventory enables the identification of assets relevant to information security, their functions and responsibilities, and provides the information required for classification and subsequent risk assessment.

---

# 2. Scope

The inventory covers assets relevant to information security that fall within the defined ISMS scope.

The following categories are included:

- Information assets.
- Hardware.
- Software.
- Technology services.
- Physical infrastructure related to information systems.

Assets are identified by type. This inventory does not represent the actual quantities or physical inventory of NYC Health + Hospitals.

---

# 3. Inventory Structure

Each asset shall be documented using the following fields where applicable:

| Field | Description |
|-------|-------------|
| ID | Unique asset identifier |
| Name | Descriptive asset name |
| Category | Information, hardware, software, service or infrastructure |
| Description | Primary function of the asset |
| Owner | Role responsible for the asset |
| Location / Environment | Physical, logical or cloud environment |
| Classification | Information sensitivity level |
| Criticality | Importance to organizational operations |
| C | Confidentiality requirement |
| I | Integrity requirement |
| A | Availability requirement |
| Status | Active, maintenance, retired or other applicable status |

---

# 4. Asset Identification

Assets shall be identified considering:

- Business processes included within the scope.
- Systems required to provide healthcare services.
- Documented information flows.
- Reference technology architecture.
- Dependencies between systems.
- Internal and external services required for operations.

Each asset shall have an identifiable function within the ISMS environment.

---

# 5. Inventory Categories

## 5.1 Information Assets

Information requiring protection.

Examples:

- Electronic health records.
- Patient personal data.
- Laboratory results.
- Medical images.
- Prescriptions.
- Financial information.
- Employee information.
- Audit logs.

## 5.2 Hardware

Physical devices used to process, store or transmit information.

Examples:

- Servers.
- Workstations.
- Laptops.
- Firewalls.
- Routers.
- Switches.
- Storage systems.
- Equipment used in clinical environments.

## 5.3 Software

Applications, operating systems and platforms used to process information.

Examples:

- EHR.
- HIS.
- LIS.
- RIS/PACS.
- Operating systems.
- Database management systems.
- Virtualization software.
- Administrative applications.

## 5.4 Services

Technology services required for system operations.

Examples:

- Active Directory.
- DNS.
- DHCP.
- VPN.
- Corporate email.
- Backup services.
- Monitoring.
- Authorized cloud services.

## 5.5 Physical Infrastructure

Physical resources required to host and maintain information systems.

Examples:

- Data centers.
- Communication rooms.
- Network cabinets.
- Electrical systems.
- UPS systems.
- Cooling systems supporting technology infrastructure.

---

# 6. Asset Identification Scheme

Each asset shall use a unique identifier based on its category.

| Category | Prefix | Example |
|----------|--------|---------|
| Information | INF | INF-001 |
| Hardware | HW | HW-001 |
| Software | SW | SW-001 |
| Service | SRV | SRV-001 |
| Physical Infrastructure | PHY | PHY-001 |

This identification scheme will enable assets to be linked to risks, controls and other ISMS elements.

---

# 7. CIA Assessment

Each asset shall be assessed according to the three fundamental information security properties:

### Confidentiality (C)

The potential impact of unauthorized disclosure of information associated with the asset.

### Integrity (I)

The potential impact of unauthorized modification, corruption or destruction.

### Availability (A)

The potential impact of the asset being unavailable when required.

Specific assessment criteria are established in the asset classification document.

---

# 8. Ownership

Each asset shall have an assigned owner.

The asset owner shall be responsible for:

- Validating recorded information.
- Reviewing its classification.
- Determining protection requirements.
- Participating in risk assessment.
- Reporting relevant changes.

Responsibilities are further defined in:

- [Asset Ownership](asset-ownership.en.md)

---

# 9. Inventory Maintenance

The inventory shall be updated when:

- A new asset is introduced.
- An existing asset is significantly modified.
- Ownership changes.
- Classification or criticality changes.
- An asset is retired.
- Relevant architectural changes occur.

Periodic reviews shall also be performed to ensure that recorded information remains accurate.

---

# 10. Relationship with Risk Management

The asset inventory constitutes a fundamental input to the risk management process.

The identifiers defined in this inventory enable traceability between:

Asset → Threat → Vulnerability → Risk → Treatment → Control

For example:

`INF-001 → Risk R-001 → Applicable Control`

This relationship will be developed during the ISMS risk management phase.

---

# 11. Inventory Limitations

This project uses a reference architecture for educational and professional purposes.

Therefore:

- It does not represent the actual asset inventory of NYC Health + Hospitals.
- Actual device quantities are not documented.
- Real internal identifiers are not used.
- Actual internal configurations are not documented.
- Technology assets are derived from the reference architecture designed for this project.

---

# 12. Related Documents

- [Asset Management](asset-management.en.md)
- [Asset Classification](asset-classification.en.md)
- [Asset Ownership](asset-ownership.en.md)
- [Information Assets](information-assets.en.md)
- [Hardware Assets](hardware-assets.en.md)
- [Software Assets](software-assets.en.md)
- [Service Assets](service-assets.en.md)
- [Architecture Overview](../02-architecture/architecture-overview.en.md)

---

# 13. References

- ISO/IEC 27001:2022
- ISO/IEC 27002:2022
- ISO/IEC 27005

---

# 14. Revision History

| Version | Date | Description | Author |
|---------|------|-------------|--------|
| 1.0 | Pending | Initial document creation | Gabriel |
