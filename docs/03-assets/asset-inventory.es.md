# Inventario de Activos

🌐 **Idioma**

- **Español**
- [English](asset-inventory.en.md)

---

| Campo | Información |
|--------|-------------|
| **Código del documento** | AST-002 |
| **Versión** | 1.0 |
| **Estado** | Borrador |
| **Clasificación** | Interno |
| **Propietario** | Responsable del SGSI |
| **Fecha de creación** | Pendiente |
| **Última revisión** | Pendiente |

---

# 1. Objetivo

Este documento establece la estructura y los criterios utilizados para mantener el inventario de activos incluidos dentro del alcance del Sistema de Gestión de Seguridad de la Información (SGSI).

El inventario permite identificar los activos relevantes para la seguridad de la información, conocer su función, asignar responsabilidades y disponer de la información necesaria para su clasificación y posterior evaluación de riesgos.

---

# 2. Alcance

El inventario comprende los activos relevantes para la seguridad de la información que forman parte del alcance definido para el SGSI.

Se incluyen las siguientes categorías:

- Activos de información.
- Hardware.
- Software.
- Servicios tecnológicos.
- Infraestructura física relacionada con los sistemas de información.

La identificación se realiza por tipos de activos y no pretende representar las cantidades ni el inventario físico real de NYC Health + Hospitals.

---

# 3. Estructura del inventario

Cada activo se documentará utilizando, cuando resulte aplicable, los siguientes campos:

| Campo | Descripción |
|-------|-------------|
| ID | Identificador único del activo |
| Nombre | Nombre descriptivo |
| Categoría | Información, hardware, software, servicio o infraestructura |
| Descripción | Función principal del activo |
| Propietario | Rol responsable del activo |
| Ubicación / Entorno | Entorno físico, lógico o cloud |
| Clasificación | Nivel de sensibilidad de la información |
| Criticidad | Importancia del activo para las operaciones |
| C | Requisito de confidencialidad |
| I | Requisito de integridad |
| D | Requisito de disponibilidad |
| Estado | Activo, mantenimiento, retirada u otro estado aplicable |

---

# 4. Identificación de activos

Los activos se identificarán considerando:

- Los procesos de negocio incluidos en el alcance.
- Los sistemas necesarios para prestar servicios sanitarios.
- Los flujos de información documentados.
- La arquitectura tecnológica de referencia.
- Las dependencias entre sistemas.
- Los servicios internos y externos necesarios para las operaciones.

Cada activo deberá tener una función identificable dentro del entorno del SGSI.

---

# 5. Categorías del inventario

## 5.1 Activos de información

Representan la información que debe protegerse.

Ejemplos:

- Historias clínicas electrónicas.
- Datos personales de pacientes.
- Resultados de laboratorio.
- Imágenes médicas.
- Prescripciones.
- Información financiera.
- Información de empleados.
- Registros de auditoría.

---

## 5.2 Hardware

Incluye los dispositivos físicos necesarios para procesar, almacenar o transmitir información.

Ejemplos:

- Servidores.
- Estaciones de trabajo.
- Equipos portátiles.
- Firewalls.
- Routers.
- Switches.
- Sistemas de almacenamiento.
- Equipos utilizados en entornos clínicos.

---

## 5.3 Software

Incluye aplicaciones, sistemas operativos y plataformas utilizadas para procesar información.

Ejemplos:

- EHR.
- HIS.
- LIS.
- RIS/PACS.
- Sistemas operativos.
- Sistemas de gestión de bases de datos.
- Software de virtualización.
- Aplicaciones administrativas.

---

## 5.4 Servicios

Incluye servicios tecnológicos necesarios para el funcionamiento de los sistemas.

Ejemplos:

- Active Directory.
- DNS.
- DHCP.
- VPN.
- Correo electrónico.
- Servicios de copia de seguridad.
- Monitorización.
- Servicios cloud autorizados.

---

## 5.5 Infraestructura física

Incluye elementos físicos necesarios para alojar y mantener los sistemas de información.

Ejemplos:

- Centros de datos.
- Salas de comunicaciones.
- Armarios de comunicaciones.
- Sistemas eléctricos.
- Sistemas UPS.
- Sistemas de climatización asociados a infraestructura tecnológica.

---

# 6. Identificación de activos

Cada activo utilizará un identificador único basado en su categoría.

| Categoría | Prefijo | Ejemplo |
|-----------|---------|---------|
| Información | INF | INF-001 |
| Hardware | HW | HW-001 |
| Software | SW | SW-001 |
| Servicio | SRV | SRV-001 |
| Infraestructura física | PHY | PHY-001 |

Esta identificación permitirá relacionar posteriormente cada activo con riesgos, controles y otros elementos del SGSI.

---

# 7. Valoración CIA

Para cada activo se evaluará la importancia de las tres propiedades fundamentales de seguridad:

### Confidencialidad (C)

Impacto que tendría la divulgación no autorizada de la información asociada al activo.

### Integridad (I)

Impacto que tendría una modificación, corrupción o destrucción no autorizada.

### Disponibilidad (D)

Impacto que tendría la imposibilidad de acceder al activo cuando sea necesario.

Los criterios concretos de valoración se establecen en el documento de clasificación de activos.

---

# 8. Propiedad

Cada activo deberá tener asignado un propietario responsable.

El propietario será responsable de:

- Validar la información registrada.
- Revisar su clasificación.
- Determinar sus requisitos de protección.
- Participar en la evaluación de riesgos.
- Comunicar cambios relevantes.

La asignación de responsabilidades se desarrolla en:

- [Propiedad de los Activos](asset-ownership.es.md)

---

# 9. Mantenimiento del inventario

El inventario deberá actualizarse cuando:

- Se incorpore un nuevo activo.
- Se modifique significativamente un activo existente.
- Cambie su propietario.
- Cambie su clasificación o criticidad.
- El activo sea retirado.
- Se produzcan cambios relevantes en la arquitectura.

Además, deberá realizarse una revisión periódica para comprobar que la información registrada continúa siendo válida.

---

# 10. Relación con la gestión de riesgos

El inventario constituye una entrada fundamental para el proceso de gestión de riesgos.

Los identificadores definidos permitirán establecer trazabilidad entre:

Activo → Amenaza → Vulnerabilidad → Riesgo → Tratamiento → Control

Por ejemplo:

`INF-001 → Riesgo R-001 → Control aplicable`

Esta relación se desarrollará durante la fase de gestión de riesgos del SGSI.

---

# 11. Limitaciones del inventario

Este proyecto utiliza una arquitectura de referencia con fines educativos y profesionales.

Por tanto:

- No representa el inventario real de NYC Health + Hospitals.
- No se documentan cantidades reales de dispositivos.
- No se utilizan identificadores internos reales.
- No se documentan configuraciones internas reales.
- Los activos tecnológicos se derivan de la arquitectura de referencia diseñada para este proyecto.

---

# 12. Documentos relacionados

- [Gestión de Activos](asset-management.es.md)
- [Clasificación de Activos](asset-classification.es.md)
- [Propiedad de los Activos](asset-ownership.es.md)
- [Activos de Información](information-assets.es.md)
- [Activos de Hardware](hardware-assets.es.md)
- [Activos de Software](software-assets.es.md)
- [Activos de Servicios](service-assets.es.md)
- [Visión General de la Arquitectura](../02-architecture/architecture-overview.es.md)

---

# 13. Referencias

- ISO/IEC 27001:2022
- ISO/IEC 27002:2022
- ISO/IEC 27005

---

# 14. Historial de cambios

| Versión | Fecha | Descripción | Autor |
|---------|-------|-------------|-------|
| 1.0 | Pendiente | Creación inicial del documento | Gabriel |
