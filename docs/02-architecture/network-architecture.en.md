# Network Architecture

🌐 **Language**

- **English**
- [Español](network-architecture.es.md)

---

| Field | Information |
|--------|-------------|
| **Document ID** | ARC-002 |
| **Version** | 1.0 |
| **Status** | Draft |
| **Classification** | Internal |
| **Owner** | Network Infrastructure Manager |
| **Creation Date** | Pending |
| **Last Review** | Pending |

---

# 1. Purpose

This document describes the reference network architecture used in the Information Security Management System (ISMS) project.

Its purpose is to define the logical network structure, the main communication segments and the interconnections required to securely support healthcare and administrative services.

---

# 2. Scope

The network architecture covers the communication infrastructure supporting the systems included within the ISMS scope.

It includes both on-premises infrastructure and connectivity with external services and cloud platforms.

---

# 3. Design Principles

The network architecture is based on the following principles:

- Network segmentation.
- Defense in Depth.
- High availability.
- Redundancy of critical components.
- Least privilege access.
- Continuous network monitoring.
- Separation of internal and external networks.

---

# 4. Network Components

The architecture includes the following major components:

- Internet connectivity.
- Perimeter firewall.
- Demilitarized Zone (DMZ).
- Corporate network.
- Healthcare network.
- Administrative network.
- Corporate wireless network.
- Secure remote access through VPN.
- Data centers.
- Cloud services.

---

# 5. Network Segmentation

The reference infrastructure is divided into the following logical segments:

## Perimeter Network

Responsible for managing communications with the Internet.

## DMZ

Hosts externally accessible services while reducing exposure of the internal network.

## Corporate Network

Used by employees to access internal business systems.

## Clinical Network

Dedicated to systems supporting healthcare operations.

## Administrative Network

Supports administrative and management applications.

## Data Center

Hosts critical systems and information storage.

## Cloud Services

Infrastructure used for authorized collaboration, email, backup and disaster recovery services.

---

# 6. Communications

Communications between network segments are controlled through security devices that provide:

- Traffic filtering.
- Access control.
- Event logging.
- Traffic inspection.
- Security policy enforcement.

---

# 7. Availability and Resilience

The architecture includes mechanisms to improve service availability, including:

- Link redundancy.
- Redundant critical devices.
- Load balancing where applicable.
- Configuration backups.
- Continuous infrastructure monitoring.

---

# 8. Relationship with the ISMS

The network architecture provides the foundation for:

- Network asset identification.
- Risk assessment.
- Trust boundary definition.
- Security control selection.
- Business continuity planning.

---

# 9. Related Documents

- [Architecture Overview](architecture-overview.en.md)
- [Security Architecture](security-architecture.en.md)
- [Trust Boundaries](trust-boundaries.en.md)
- [Data Flows](data-flows.en.md)

---

# 10. References

- ISO/IEC 27001:2022
- ISO/IEC 27002:2022
- NIST SP 800-41 – Guidelines on Firewalls and Firewall Policy
- NIST SP 800-115 – Technical Guide to Information Security Testing

---

# 11. Revision History

| Version | Date | Description | Author |
|---------|------|-------------|--------|
| 1.0 | Pending | Initial document creation | Gabriel |
