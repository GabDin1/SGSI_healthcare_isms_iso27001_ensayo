# Gestión de Activos

🌐 **Idioma**

- **Español**
- [English](asset-management.en.md)

---

| Campo | Información |
|--------|-------------|
| **Código del documento** | AST-001 |
| **Versión** | 1.0 |
| **Estado** | Borrador |
| **Clasificación** | Interno |
| **Propietario** | Responsable del SGSI |
| **Fecha de creación** | Pendiente |
| **Última revisión** | Pendiente |

---

# 1. Objetivo

Este documento establece el marco para la gestión de los activos incluidos dentro del alcance del Sistema de Gestión de Seguridad de la Información (SGSI).

Su finalidad es garantizar que los activos relevantes para la seguridad de la información sean identificados, registrados, clasificados, asignados a un responsable y gestionados durante todo su ciclo de vida.

La gestión de activos proporciona además una base para la posterior identificación, análisis y tratamiento de los riesgos de seguridad de la información.

---

# 2. Alcance

Este proceso aplica a todos los activos relevantes para la seguridad de la información incluidos dentro del alcance del SGSI.

Se consideran, entre otros:

- Activos de información.
- Hardware.
- Software.
- Infraestructura de red.
- Servicios tecnológicos.
- Servicios en la nube.
- Recursos físicos relacionados con el tratamiento de información.

---

# 3. Principios de gestión de activos

La gestión de activos se basa en los siguientes principios:

- Todos los activos relevantes deben ser identificados.
- Los activos deben mantenerse registrados en un inventario.
- Cada activo debe disponer de un propietario o responsable definido.
- Los activos deben clasificarse según su importancia y sensibilidad.
- Los activos deben protegerse de acuerdo con los riesgos asociados.
- El inventario debe mantenerse actualizado.
- Los activos deben gestionarse durante todo su ciclo de vida.
- La retirada de activos debe realizarse de forma segura.

---

# 4. Categorías de activos

Para facilitar su gestión, los activos se agrupan en las siguientes categorías:

## Activos de información

Información relevante para la actividad de la organización.

Ejemplos:

- Historias clínicas.
- Datos personales de pacientes.
- Resultados de laboratorio.
- Imágenes médicas.
- Prescripciones.
- Información financiera.
- Información de empleados.
- Registros de auditoría.

## Hardware

Equipamiento físico utilizado para procesar, almacenar o transmitir información.

Ejemplos:

- Servidores.
- Estaciones de trabajo.
- Equipos portátiles.
- Equipamiento de red.
- Sistemas de almacenamiento.
- Dispositivos utilizados en entornos clínicos.

## Software

Sistemas operativos, aplicaciones y plataformas utilizadas por la organización.

Ejemplos:

- EHR.
- HIS.
- LIS.
- RIS/PACS.
- Sistemas operativos.
- Sistemas de gestión de bases de datos.
- Software de virtualización.
- Aplicaciones administrativas.

## Servicios

Servicios tecnológicos necesarios para el funcionamiento de los sistemas.

Ejemplos:

- Servicios de identidad y autenticación.
- DNS.
- DHCP.
- Correo electrónico.
- VPN.
- Servicios de copia de seguridad.
- Monitorización.
- Servicios en la nube.

## Infraestructura física

Instalaciones necesarias para alojar o proteger los sistemas de información.

Ejemplos:

- Centros de datos.
- Salas de comunicaciones.
- Armarios de comunicaciones.
- Sistemas eléctricos.
- Sistemas de alimentación ininterrumpida (SAI/UPS).

---

# 5. Ciclo de vida de los activos

Los activos deben gestionarse durante las siguientes fases:

## 5.1 Identificación

Se determina la existencia del activo y su relación con los procesos incluidos dentro del alcance del SGSI.

## 5.2 Registro

El activo se incorpora al inventario de activos junto con la información necesaria para su gestión.

## 5.3 Clasificación

El activo se clasifica según su sensibilidad, importancia y criticidad para la organización.

## 5.4 Asignación de responsabilidad

Se asigna un propietario responsable de garantizar que el activo sea gestionado y protegido adecuadamente.

## 5.5 Operación y mantenimiento

Durante su utilización, el activo debe mantenerse protegido y actualizado conforme a las políticas y procedimientos aplicables.

## 5.6 Revisión

Los activos y su información asociada deben revisarse periódicamente para garantizar que el inventario continúa siendo correcto y actualizado.

## 5.7 Retirada

Cuando un activo deja de ser necesario, debe retirarse de forma controlada.

Cuando contenga información sensible, esta deberá eliminarse o destruirse de forma segura antes de su reutilización, devolución o eliminación.

---

# 6. Inventario de activos

Los activos identificados dentro del alcance del SGSI deberán registrarse en un inventario.

Como mínimo, el inventario deberá permitir registrar:

- Identificador del activo.
- Nombre.
- Categoría.
- Descripción.
- Propietario.
- Ubicación o entorno.
- Clasificación.
- Criticidad.
- Estado.

La metodología específica para el mantenimiento del inventario se documenta en:

- [Inventario de Activos](asset-inventory.es.md)

---

# 7. Propiedad de los activos

Cada activo deberá disponer de un propietario claramente identificado.

El propietario del activo será responsable de:

- Garantizar que el activo esté correctamente registrado.
- Determinar o validar su clasificación.
- Identificar sus requisitos de protección.
- Participar en la evaluación de riesgos asociados.
- Revisar periódicamente la información del activo.
- Autorizar, cuando corresponda, las condiciones de acceso y utilización.

La propiedad de un activo implica responsabilidad sobre su gestión y no necesariamente propiedad física o legal sobre el mismo.

---

# 8. Clasificación y criticidad

Los activos deberán clasificarse de acuerdo con su sensibilidad y su importancia para las operaciones de la organización.

La clasificación permitirá determinar las medidas de protección necesarias y apoyar el análisis de riesgos.

Se tendrán en cuenta especialmente los posibles impactos sobre:

- Confidencialidad.
- Integridad.
- Disponibilidad.

La metodología de clasificación se define en:

- [Clasificación de Activos](asset-classification.es.md)

---

# 9. Revisión del inventario

El inventario deberá revisarse:

- Periódicamente.
- Cuando se incorporen nuevos sistemas o servicios.
- Cuando se retiren activos.
- Cuando se produzcan cambios significativos en la arquitectura.
- Cuando cambie la clasificación o criticidad de un activo.
- Cuando el análisis de riesgos identifique la necesidad de actualizarlo.

---

# 10. Relación con la gestión de riesgos

Los activos identificados en esta fase constituirán una de las principales entradas para el proceso de gestión de riesgos del SGSI.

La información relativa a su criticidad, propietario, ubicación y función permitirá posteriormente:

- Identificar amenazas relevantes.
- Identificar vulnerabilidades.
- Analizar posibles impactos.
- Evaluar los riesgos.
- Determinar las necesidades de tratamiento.
- Seleccionar controles de seguridad apropiados.

---

# 11. Documentos relacionados

- [Alcance del SGSI](../01-context/scope.es.md)
- [Visión General de la Arquitectura](../02-architecture/architecture-overview.es.md)
- [Inventario de Activos](asset-inventory.es.md)
- [Clasificación de Activos](asset-classification.es.md)
- [Propiedad de los Activos](asset-ownership.es.md)
- [Activos de Información](information-assets.es.md)
- [Activos de Hardware](hardware-assets.es.md)
- [Activos de Software](software-assets.es.md)
- [Activos de Servicios](service-assets.es.md)

---

# 12. Referencias

- ISO/IEC 27001:2022
- ISO/IEC 27002:2022
- ISO/IEC 27005

---

# 13. Historial de cambios

| Versión | Fecha | Descripción | Autor |
|---------|-------|-------------|-------|
| 1.0 | Pendiente | Creación inicial del documento | Gabriel |
