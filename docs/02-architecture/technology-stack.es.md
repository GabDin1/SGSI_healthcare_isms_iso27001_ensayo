# Tecnologías de Referencia

🌐 **Idioma**

- **Español**
- [English](technology-stack.en.md)

---

| Campo | Información |
|--------|-------------|
| **Código del documento** | ARC-006 |
| **Versión** | 1.0 |
| **Estado** | Borrador |
| **Clasificación** | Interno |
| **Propietario** | Responsable de Arquitectura de TI |
| **Fecha de creación** | Pendiente |
| **Última revisión** | Pendiente |

---

# 1. Objetivo

Este documento describe las tecnologías de referencia utilizadas en la arquitectura del Sistema de Gestión de Seguridad de la Información (SGSI).

Su finalidad es proporcionar una visión general de las principales plataformas, servicios y herramientas que soportan la infraestructura tecnológica de la organización de referencia.

---

# 2. Alcance

Este documento aplica a las tecnologías utilizadas para soportar los procesos de negocio incluidos dentro del alcance del SGSI.

La selección de tecnologías representa una implementación de referencia basada en buenas prácticas del sector y no refleja necesariamente la infraestructura real de NYC Health + Hospitals.

---

# 3. Categorías tecnológicas

Las tecnologías se agrupan en las siguientes categorías:

- Infraestructura.
- Redes.
- Gestión de identidades.
- Sistemas operativos.
- Virtualización.
- Bases de datos.
- Almacenamiento.
- Servicios en la nube.
- Seguridad.
- Monitorización.
- Copias de seguridad.

---

# 4. Tecnologías de referencia

| Categoría | Tecnología de referencia | Propósito |
|-----------|--------------------------|-----------|
| Virtualización | VMware vSphere | Infraestructura de virtualización |
| Sistemas Operativos | Windows Server / Ubuntu Server | Servicios de infraestructura y aplicaciones |
| Gestión de identidades | Active Directory | Autenticación y gestión de identidades |
| DNS / DHCP | Windows Server | Servicios de red |
| Correo electrónico | Microsoft Exchange Online | Correo corporativo |
| Colaboración | Microsoft 365 | Productividad y colaboración |
| Almacenamiento | SAN / NAS | Almacenamiento empresarial |
| Bases de datos | Microsoft SQL Server / PostgreSQL | Persistencia de datos |
| Firewall | Palo Alto Networks | Protección perimetral |
| VPN | IPSec / SSL VPN | Acceso remoto seguro |
| Protección de endpoints | Microsoft Defender for Endpoint | Protección de equipos |
| SIEM | Microsoft Sentinel | Monitorización y correlación de eventos |
| Gestión de copias de seguridad | Veeam Backup & Replication | Respaldo y recuperación |
| Plataforma Cloud | Microsoft Azure | Servicios cloud autorizados |

---

# 5. Criterios de selección

Las tecnologías de referencia han sido seleccionadas considerando:

- Madurez tecnológica.
- Amplia adopción en entornos empresariales.
- Capacidades de seguridad.
- Escalabilidad.
- Alta disponibilidad.
- Integración con otras plataformas.
- Soporte del fabricante.

---

# 6. Gestión del ciclo de vida

Las tecnologías incluidas dentro del alcance del SGSI deberán gestionarse durante todo su ciclo de vida, incluyendo:

- Evaluación.
- Adquisición.
- Implantación.
- Operación.
- Mantenimiento.
- Actualización.
- Sustitución.
- Retirada segura.

---

# 7. Relación con el SGSI

La información contenida en este documento sirve como base para:

- Inventario de activos.
- Gestión de vulnerabilidades.
- Gestión de configuración.
- Gestión de cambios.
- Selección de controles.
- Gestión de riesgos.

---

# 8. Documentos relacionados

- [Visión General de la Arquitectura](architecture-overview.es.md)
- [Arquitectura de Red](network-architecture.es.md)
- [Arquitectura de Seguridad](security-architecture.es.md)
- [Límites de Confianza](trust-boundaries.es.md)
- [Flujos de Datos](data-flows.es.md)

---

# 9. Referencias

- ISO/IEC 27001:2022
- ISO/IEC 27002:2022
- NIST SP 800-53 Rev. 5
- CIS Critical Security Controls

---

# 10. Historial de cambios

| Versión | Fecha | Descripción | Autor |
|---------|------|-------------|-------|
| 1.0 | Pendiente | Creación inicial del documento | Gabriel |
