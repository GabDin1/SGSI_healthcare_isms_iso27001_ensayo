# Flujos de Datos

🌐 **Idioma**

- **Español**
- [English](data-flows.en.md)

---

| Campo | Información |
|--------|-------------|
| **Código del documento** | ARC-005 |
| **Versión** | 1.0 |
| **Estado** | Borrador |
| **Clasificación** | Interno |
| **Propietario** | Responsable de Arquitectura de TI |
| **Fecha de creación** | Pendiente |
| **Última revisión** | Pendiente |

---

# 1. Objetivo

Este documento describe los principales flujos de información de la arquitectura de referencia utilizada en el Sistema de Gestión de Seguridad de la Información (SGSI).

Su finalidad es identificar cómo se transmite la información entre usuarios, aplicaciones, sistemas y servicios, proporcionando una base para el análisis de riesgos, la clasificación de activos y la definición de controles de seguridad.

---

# 2. Alcance

Este documento aplica a los procesos de negocio y sistemas incluidos dentro del alcance del SGSI.

Se consideran tanto las comunicaciones internas como aquellas realizadas con servicios externos y plataformas en la nube.

---

# 3. Principios

Los flujos de información deben cumplir los siguientes principios:

- Confidencialidad.
- Integridad.
- Disponibilidad.
- Autenticación.
- Autorización.
- Trazabilidad.
- Cifrado cuando sea necesario.

---

# 4. Flujos principales

## Atención al paciente

Paciente

↓

Portal del paciente / Recepción

↓

Historia Clínica Electrónica (EHR)

↓

Base de datos clínica

↓

Profesionales sanitarios

---

## Diagnóstico clínico

Profesional sanitario

↓

Solicitud de prueba

↓

Sistema de Laboratorio (LIS)

↓

Resultados clínicos

↓

Historia Clínica Electrónica (EHR)

---

## Diagnóstico por imagen

Profesional sanitario

↓

Solicitud de estudio

↓

RIS/PACS

↓

Imágenes médicas

↓

Historia Clínica Electrónica (EHR)

---

## Gestión administrativa

Empleado

↓

Sistema de gestión administrativa

↓

Base de datos corporativa

↓

Servicios financieros y Recursos Humanos

---

## Acceso remoto

Usuario autorizado

↓

VPN

↓

Autenticación

↓

Red corporativa

↓

Servicios autorizados

---

## Copias de seguridad

Sistemas críticos

↓

Servidor de copias de seguridad

↓

Almacenamiento seguro

↓

Recuperación ante desastres

---

# 5. Clasificación de los flujos

| Flujo | Sensibilidad |
|--------|--------------|
| Historia clínica | Alta |
| Datos personales | Alta |
| Resultados médicos | Alta |
| Información financiera | Alta |
| Información administrativa | Media |
| Registros del sistema | Media |
| Información pública | Baja |

---

# 6. Protección de los flujos

Los flujos de información deberán protegerse mediante:

- Cifrado durante la transmisión.
- Autenticación de usuarios.
- Control de acceso.
- Segmentación de red.
- Registro de eventos.
- Monitorización continua.
- Integridad de las comunicaciones.

---

# 7. Relación con el SGSI

Los flujos de datos documentados sirven como base para:

- Identificar activos de información.
- Analizar riesgos.
- Definir límites de confianza.
- Seleccionar controles de seguridad.
- Elaborar diagramas de flujo de datos (DFD).

---

# 8. Documentos relacionados

- [Visión General de la Arquitectura](architecture-overview.es.md)
- [Arquitectura de Red](network-architecture.es.md)
- [Arquitectura de Seguridad](security-architecture.es.md)
- [Límites de Confianza](trust-boundaries.es.md)

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
