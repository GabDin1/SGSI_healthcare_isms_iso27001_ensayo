# Arquitectura de Red

🌐 **Idioma**

- **Español**
- [English](network-architecture.en.md)

---

| Campo | Información |
|--------|-------------|
| **Código del documento** | ARC-002 |
| **Versión** | 1.0 |
| **Estado** | Borrador |
| **Clasificación** | Interno |
| **Propietario** | Responsable de Infraestructura de Red |
| **Fecha de creación** | Pendiente |
| **Última revisión** | Pendiente |

---

# 1. Objetivo

Este documento describe la arquitectura de red de referencia utilizada en el proyecto del Sistema de Gestión de Seguridad de la Información (SGSI).

Su objetivo es definir la estructura lógica de la red, los principales segmentos de comunicación y las interconexiones necesarias para soportar de forma segura los servicios sanitarios y administrativos.

---

# 2. Alcance

La arquitectura de red comprende las infraestructuras de comunicación que soportan los sistemas incluidos dentro del alcance del SGSI.

Incluye tanto la infraestructura local como las conexiones con servicios externos y plataformas en la nube.

---

# 3. Principios de diseño

La arquitectura de red se basa en los siguientes principios:

- Segmentación de la red.
- Defensa en profundidad.
- Alta disponibilidad.
- Redundancia de componentes críticos.
- Acceso basado en el principio de mínimo privilegio.
- Monitorización continua del tráfico.
- Separación entre redes internas y externas.

---

# 4. Componentes de la red

La arquitectura contempla los siguientes componentes principales:

- Conectividad a Internet.
- Firewall perimetral.
- Zona desmilitarizada (DMZ).
- Red corporativa.
- Red de centros sanitarios.
- Red de administración.
- Red inalámbrica corporativa.
- Acceso remoto seguro mediante VPN.
- Centros de datos.
- Servicios en la nube.

---

# 5. Segmentación de la red

La infraestructura de referencia se divide en los siguientes segmentos lógicos:

## Red perimetral

Zona encargada de gestionar las comunicaciones con Internet.

## DMZ

Segmento destinado a alojar servicios accesibles desde el exterior, reduciendo la exposición de la red interna.

## Red corporativa

Segmento utilizado por el personal para acceder a los sistemas internos.

## Red clínica

Segmento dedicado a los sistemas utilizados durante la atención sanitaria.

## Red administrativa

Segmento destinado a aplicaciones administrativas y de gestión.

## Centro de datos

Segmento donde residen los sistemas críticos y el almacenamiento de información.

## Servicios en la nube

Infraestructura utilizada para proporcionar servicios autorizados de colaboración, correo electrónico, respaldo y recuperación.

---

# 6. Comunicaciones

Las comunicaciones entre segmentos deben realizarse a través de dispositivos de seguridad que permitan:

- Filtrado del tráfico.
- Control de acceso.
- Registro de eventos.
- Inspección de comunicaciones.
- Aplicación de políticas de seguridad.

---

# 7. Disponibilidad y resiliencia

La arquitectura contempla mecanismos para mejorar la disponibilidad de los servicios, incluyendo:

- Redundancia de enlaces.
- Redundancia de dispositivos críticos.
- Balanceo de carga cuando sea aplicable.
- Copias de seguridad de configuraciones.
- Monitorización continua de la infraestructura.

---

# 8. Relación con el SGSI

La arquitectura de red proporciona la base para:

- La identificación de activos de red.
- El análisis de riesgos.
- La definición de límites de confianza.
- La selección de controles de seguridad.
- La planificación de la continuidad del negocio.

---

# 9. Documentos relacionados

- [Visión General de la Arquitectura](architecture-overview.es.md)
- [Arquitectura de Seguridad](security-architecture.es.md)
- [Límites de Confianza](trust-boundaries.es.md)
- [Flujos de Datos](data-flows.es.md)

---

# 10. Referencias

- ISO/IEC 27001:2022
- ISO/IEC 27002:2022
- NIST SP 800-41 – Guidelines on Firewalls and Firewall Policy
- NIST SP 800-115 – Technical Guide to Information Security Testing

---

# 11. Historial de cambios

| Versión | Fecha | Descripción | Autor |
|---------|------|-------------|-------|
| 1.0 | Pendiente | Creación inicial del documento | Gabriel |
