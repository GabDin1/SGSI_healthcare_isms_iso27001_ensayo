# Límites de Confianza

🌐 **Idioma**

- **Español**
- [English](trust-boundaries.en.md)

---

| Campo | Información |
|--------|-------------|
| **Código del documento** | ARC-004 |
| **Versión** | 1.0 |
| **Estado** | Borrador |
| **Clasificación** | Interno |
| **Propietario** | Responsable de Seguridad de la Información |
| **Fecha de creación** | Pendiente |
| **Última revisión** | Pendiente |

---

# 1. Objetivo

Este documento identifica los límites de confianza (Trust Boundaries) presentes en la arquitectura de referencia del Sistema de Gestión de Seguridad de la Información (SGSI).

Su finalidad es definir las diferentes zonas de confianza, describir las relaciones entre ellas e identificar los puntos donde deben aplicarse controles de seguridad para proteger la información y reducir los riesgos.

---

# 2. Alcance

Los límites de confianza definidos en este documento abarcan todos los sistemas, redes, servicios y usuarios incluidos dentro del alcance del SGSI.

---

# 3. Concepto de límite de confianza

Un límite de confianza representa el punto donde cambia el nivel de confianza entre dos dominios de seguridad.

Cuando la información atraviesa un límite de confianza deben aplicarse controles adecuados para garantizar:

- Autenticación.
- Autorización.
- Confidencialidad.
- Integridad.
- Disponibilidad.
- Registro de eventos.
- Monitorización.

---

# 4. Zonas de confianza

La arquitectura de referencia se divide en las siguientes zonas de confianza.

## Internet

Zona completamente no confiable utilizada para las comunicaciones externas.

Ejemplos:

- Usuarios externos.
- Redes públicas.
- Servicios de terceros.

---

## DMZ

Zona intermedia utilizada para exponer servicios autorizados al exterior minimizando la exposición de la red interna.

Ejemplos:

- Portal del paciente.
- Servidores web.
- Proxy inverso.
- Gateway de acceso.

---

## Red Corporativa

Zona destinada al uso del personal de la organización.

Incluye:

- Equipos de usuario.
- Servicios administrativos.
- Aplicaciones corporativas.

---

## Red Clínica

Zona dedicada a los sistemas utilizados durante la atención sanitaria.

Incluye:

- Historia Clínica Electrónica (EHR).
- HIS.
- RIS/PACS.
- LIS.

---

## Centro de Datos

Zona de alta confianza donde residen los sistemas críticos.

Incluye:

- Servidores.
- Bases de datos.
- Almacenamiento.
- Virtualización.

---

## Servicios en la nube

Zona correspondiente a servicios cloud autorizados utilizados por la organización.

Ejemplos:

- Correo electrónico.
- Colaboración.
- Copias de seguridad.
- Recuperación ante desastres.

---

# 5. Comunicaciones entre zonas

Las comunicaciones entre zonas de confianza deben realizarse mediante mecanismos de seguridad apropiados.

Entre ellos:

- Firewalls.
- Control de acceso.
- Segmentación de red.
- VPN.
- Cifrado.
- Autenticación multifactor cuando sea aplicable.
- Registro y monitorización.

---

# 6. Principios de protección

Las comunicaciones entre zonas deben seguir los siguientes principios:

- Denegar por defecto.
- Permitir únicamente el tráfico necesario.
- Aplicar el principio de mínimo privilegio.
- Validar identidades antes de conceder acceso.
- Registrar los eventos relevantes.
- Revisar periódicamente las reglas de acceso.

---

# 7. Relación con el análisis de riesgos

Los límites de confianza identificados en este documento servirán como referencia para:

- Identificar amenazas.
- Identificar vulnerabilidades.
- Analizar vectores de ataque.
- Evaluar riesgos.
- Seleccionar controles de seguridad.

---

# 8. Documentos relacionados

- [Visión General de la Arquitectura](architecture-overview.es.md)
- [Arquitectura de Red](network-architecture.es.md)
- [Arquitectura de Seguridad](security-architecture.es.md)
- [Flujos de Datos](data-flows.es.md)

---

# 9. Referencias

- ISO/IEC 27001:2022
- ISO/IEC 27002:2022
- NIST SP 800-207 – Zero Trust Architecture
- NIST SP 800-160 – Systems Security Engineering

---

# 10. Historial de cambios

| Versión | Fecha | Descripción | Autor |
|---------|------|-------------|-------|
| 1.0 | Pendiente | Creación inicial del documento | Gabriel |
