# Visión General de la Arquitectura

🌐 **Idioma**

- **Español**
- [English](architecture-overview.en.md)

---

| Campo | Información |
|--------|-------------|
| **Código del documento** | ARC-001 |
| **Versión** | 1.0 |
| **Estado** | Borrador |
| **Clasificación** | Interno |
| **Propietario** | Responsable de Arquitectura de TI |
| **Fecha de creación** | Pendiente |
| **Última revisión** | Pendiente |

---

# 1. Objetivo

Este documento proporciona una visión general de la arquitectura tecnológica de referencia utilizada para el desarrollo del Sistema de Gestión de Seguridad de la Información (SGSI).

Su finalidad es describir los principales componentes de la infraestructura, sus relaciones y el entorno tecnológico sobre el que se apoyan los procesos de negocio incluidos dentro del alcance del SGSI.

---

# 2. Alcance

La arquitectura descrita en este documento representa una implementación de referencia basada en información pública y en buenas prácticas de arquitectura empresarial y seguridad de la información.

No pretende reflejar la infraestructura real de NYC Health + Hospitals.

---

# 3. Principios de diseño

La arquitectura de referencia se ha diseñado siguiendo los siguientes principios:

- Protección de la confidencialidad, integridad y disponibilidad de la información.
- Arquitectura en profundidad (Defense in Depth).
- Segmentación de la infraestructura.
- Principio de mínimo privilegio.
- Alta disponibilidad para los servicios críticos.
- Escalabilidad.
- Gestión centralizada de la seguridad.
- Integración de servicios locales y en la nube.

---

# 4. Componentes principales

La arquitectura se compone de los siguientes elementos principales:

- Usuarios internos.
- Pacientes y usuarios externos.
- Infraestructura de red corporativa.
- Centros de datos.
- Sistemas clínicos.
- Sistemas administrativos.
- Servicios de identidad.
- Servicios en la nube.
- Sistemas de respaldo y recuperación.
- Herramientas de monitorización y seguridad.

---

# 5. Arquitectura de alto nivel

La infraestructura se organiza en varios dominios funcionales:

## Usuarios

Incluye el acceso de:

- Personal sanitario.
- Personal administrativo.
- Equipo de TI.
- Dirección.
- Pacientes (a través de servicios autorizados).

## Infraestructura local

Compuesta por:

- Centros de datos.
- Servidores físicos.
- Infraestructura de virtualización.
- Redes corporativas.
- Sistemas de almacenamiento.

## Servicios clínicos

Incluyen:

- Historia Clínica Electrónica (EHR).
- Sistema de Información Hospitalaria (HIS).
- Laboratorios (LIS).
- Diagnóstico por imagen (RIS/PACS).

## Servicios corporativos

- Correo electrónico.
- Directorio corporativo.
- Recursos Humanos.
- Gestión financiera.
- Plataformas de colaboración.

## Servicios en la nube

La arquitectura contempla el uso de servicios cloud para:

- Correo electrónico.
- Colaboración.
- Copias de seguridad.
- Recuperación ante desastres.
- Servicios SaaS autorizados.

---

# 6. Objetivos de la arquitectura

La arquitectura persigue los siguientes objetivos:

- Proteger la información crítica.
- Garantizar la continuidad de los servicios.
- Reducir la superficie de ataque.
- Facilitar la gestión de riesgos.
- Mejorar la resiliencia de la infraestructura.
- Cumplir los requisitos regulatorios aplicables.

---

# 7. Relación con el SGSI

La arquitectura descrita en este documento sirve como base para:

- Arquitectura de red.
- Arquitectura de seguridad.
- Identificación de activos.
- Clasificación de la información.
- Análisis de riesgos.
- Selección de controles.
- Continuidad del negocio.

---

# 8. Documentos relacionados

- [Sistema de Gestión de Seguridad de la Información](../01-context/isms.es.md)
- [Arquitectura de Red](network-architecture.es.md)
- [Arquitectura de Seguridad](security-architecture.es.md)
- [Límites de Confianza](trust-boundaries.es.md)
- [Flujos de Datos](data-flows.es.md)
- [Tecnologías Utilizadas](technology-stack.es.md)

---

# 9. Referencias

- ISO/IEC 27001:2022
- ISO/IEC 27002:2022
- NIST SP 800-160 – Systems Security Engineering
- CIS Critical Security Controls

---

# 10. Historial de cambios

| Versión | Fecha | Descripción | Autor |
|---------|------|-------------|-------|
| 1.0 | Pendiente | Creación inicial del documento | Gabriel |
