# Trust Boundaries

🌐 **Language**

- **English**
- [Español](trust-boundaries.es.md)

---

| Field | Information |
|--------|-------------|
| **Document ID** | ARC-004 |
| **Version** | 1.0 |
| **Status** | Draft |
| **Classification** | Internal |
| **Owner** | Information Security Manager |
| **Creation Date** | Pending |
| **Last Review** | Pending |

---

# 1. Purpose

This document identifies the trust boundaries within the reference architecture of the Information Security Management System (ISMS).

Its purpose is to define the different trust zones, describe the relationships between them and identify the points where security controls must be applied to protect information and reduce risk.

---

# 2. Scope

The trust boundaries defined in this document apply to all systems, networks, services and users included within the ISMS scope.

---

# 3. Trust Boundary Concept

A trust boundary represents the point where the level of trust changes between two security domains.

Whenever information crosses a trust boundary, appropriate controls must be applied to ensure:

- Authentication.
- Authorization.
- Confidentiality.
- Integrity.
- Availability.
- Event logging.
- Monitoring.

---

# 4. Trust Zones

The reference architecture is divided into the following trust zones.

## Internet

Completely untrusted zone used for external communications.

Examples:

- External users.
- Public networks.
- Third-party services.

---

## DMZ

Intermediate zone used to expose authorized services while minimizing exposure of the internal network.

Examples:

- Patient portal.
- Web servers.
- Reverse proxy.
- Access gateway.

---

## Corporate Network

Zone used by organizational personnel.

Including:

- User workstations.
- Administrative services.
- Corporate applications.

---

## Clinical Network

Dedicated zone for systems supporting healthcare operations.

Including:

- Electronic Health Record (EHR).
- Hospital Information System (HIS).
- RIS/PACS.
- Laboratory Information System (LIS).

---

## Data Center

High-trust zone hosting critical infrastructure.

Including:

- Servers.
- Databases.
- Storage.
- Virtualization infrastructure.

---

## Cloud Services

Zone representing authorized cloud services used by the organization.

Examples:

- Email.
- Collaboration.
- Backup.
- Disaster recovery.

---

# 5. Communications Between Trust Zones

Communications between trust zones shall be protected using appropriate security mechanisms, including:

- Firewalls.
- Access control.
- Network segmentation.
- VPN.
- Encryption.
- Multi-Factor Authentication where applicable.
- Logging and monitoring.

---

# 6. Protection Principles

Communications between trust zones shall follow these principles:

- Deny by default.
- Allow only required traffic.
- Apply the Principle of Least Privilege.
- Validate identities before granting access.
- Log relevant events.
- Periodically review access rules.

---

# 7. Relationship with Risk Assessment

The trust boundaries identified in this document provide the basis for:

- Threat identification.
- Vulnerability identification.
- Attack vector analysis.
- Risk assessment.
- Security control selection.

---

# 8. Related Documents

- [Architecture Overview](architecture-overview.en.md)
- [Network Architecture](network-architecture.en.md)
- [Security Architecture](security-architecture.en.md)
- [Data Flows](data-flows.en.md)

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
