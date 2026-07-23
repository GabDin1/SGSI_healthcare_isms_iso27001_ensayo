# Arquitectura de Seguridad

🌐 **Idioma**

- **Español**
- [English](security-architecture.en.md)

---

| Campo | Información |
|--------|-------------|
| **Código del documento** | ARC-003 |
| **Versión** | 1.0 |
| **Estado** | Borrador |
| **Clasificación** | Interno |
| **Propietario** | Responsable de Seguridad de la Información |
| **Fecha de creación** | Pendiente |
| **Última revisión** | Pendiente |

---

# 1. Objetivo

Este documento describe la arquitectura de seguridad de referencia utilizada en el proyecto del Sistema de Gestión de Seguridad de la Información (SGSI).

Su finalidad es definir las principales capas de protección, los mecanismos de seguridad y los principios arquitectónicos empleados para proteger los activos de información incluidos dentro del alcance del SGSI.

---

# 2. Alcance

La arquitectura de seguridad aplica a todos los sistemas, servicios, infraestructuras y activos definidos dentro del alcance del SGSI.

Incluye tanto los entornos locales como los servicios desplegados en la nube.

---

# 3. Principios de diseño

La arquitectura de seguridad se basa en los siguientes principios:

- Defensa en profundidad (Defense in Depth).
- Zero Trust como modelo de referencia.
- Principio de mínimo privilegio.
- Separación de funciones.
- Seguridad por diseño (Security by Design).
- Seguridad por defecto (Secure by Default).
- Gestión basada en riesgos.
- Mejora continua.

---

# 4. Capas de seguridad

La arquitectura contempla múltiples capas de protección.

## Seguridad física

Protección de instalaciones, centros de datos y equipos críticos mediante controles físicos de acceso y monitorización.

## Seguridad de red

Protección del perímetro, segmentación de redes, filtrado de tráfico y monitorización de las comunicaciones.

## Gestión de identidades y accesos

Control de autenticación, autorización y gestión del ciclo de vida de las identidades.

## Seguridad de los sistemas

Protección de servidores, estaciones de trabajo y dispositivos mediante configuraciones seguras, actualización de software y endurecimiento de sistemas.

## Protección de la información

Clasificación de la información, cifrado, gestión de claves y protección frente a accesos no autorizados.

## Monitorización y respuesta

Registro de eventos, supervisión continua y gestión de incidentes de seguridad.

---

# 5. Capacidades de seguridad

La arquitectura incorpora capacidades orientadas a:

- Gestión de identidades y accesos (IAM).
- Autenticación multifactor (MFA).
- Gestión de privilegios.
- Protección de endpoints.
- Protección del correo electrónico.
- Protección frente a malware.
- Detección y respuesta ante incidentes.
- Gestión de vulnerabilidades.
- Copias de seguridad y recuperación.
- Registro y monitorización de eventos.

---

# 6. Objetivos de seguridad

La arquitectura está diseñada para:

- Proteger la confidencialidad de la información.
- Garantizar la integridad de los datos.
- Mantener la disponibilidad de los servicios críticos.
- Reducir la superficie de ataque.
- Detectar actividades anómalas.
- Facilitar la respuesta ante incidentes.
- Cumplir los requisitos legales y regulatorios.

---

# 7. Relación con el SGSI

La arquitectura de seguridad proporciona el marco técnico para:

- La identificación de controles de seguridad.
- La evaluación de riesgos.
- La protección de los activos de información.
- La gestión de incidentes.
- La continuidad del negocio.
- La mejora continua del SGSI.

---

# 8. Documentos relacionados

- [Visión General de la Arquitectura](architecture-overview.es.md)
- [Arquitectura de Red](network-architecture.es.md)
- [Límites de Confianza](trust-boundaries.es.md)
- [Flujos de Datos](data-flows.es.md)
- [Tecnologías Utilizadas](technology-stack.es.md)

---

# 9. Referencias

- ISO/IEC 27001:2022
- ISO/IEC 27002:2022
- NIST Cybersecurity Framework (CSF) 2.0
- NIST SP 800-160 – Systems Security Engineering
- CIS Critical Security Controls

---

# 10. Historial de cambios

| Versión | Fecha | Descripción | Autor |
|---------|------|-------------|-------|
| 1.0 | Pendiente | Creación inicial del documento | Gabriel |
