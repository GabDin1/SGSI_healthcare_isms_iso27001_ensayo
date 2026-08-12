# Clasificación de Activos

🌐 **Idioma**

- **Español**
- [English](asset-classification.en.md)

---

| Campo | Información |
|--------|-------------|
| **Código del documento** | AST-003 |
| **Versión** | 1.0 |
| **Estado** | Borrador |
| **Clasificación** | Interno |
| **Propietario** | Responsable del SGSI |
| **Fecha de creación** | Pendiente |
| **Última revisión** | Pendiente |

---

# 1. Objetivo

Este documento establece la metodología utilizada para clasificar los activos incluidos dentro del alcance del Sistema de Gestión de Seguridad de la Información (SGSI).

La clasificación permite determinar la importancia de los activos, establecer requisitos de protección adecuados y proporcionar información para el posterior análisis y tratamiento de riesgos.

---

# 2. Alcance

Esta metodología aplica a los activos registrados dentro del inventario del SGSI, incluyendo:

- Activos de información.
- Hardware.
- Software.
- Servicios tecnológicos.
- Infraestructura física.

La clasificación se realizará teniendo en cuenta tanto la sensibilidad de la información como la criticidad del activo para las operaciones de la organización.

---

# 3. Principios de clasificación

La clasificación de activos se basa en los siguientes principios:

- La protección debe ser proporcional a la importancia del activo.
- La sensibilidad de la información y la criticidad operativa son conceptos diferentes.
- La clasificación debe considerar confidencialidad, integridad y disponibilidad.
- Los propietarios de los activos participan en la determinación y revisión de su clasificación.
- La clasificación debe revisarse cuando cambie el uso, función o contexto del activo.

---

# 4. Clasificación de la información

Los activos de información se clasifican según su nivel de sensibilidad.

| Nivel | Descripción | Ejemplo |
|-------|-------------|---------|
| **Pública** | Información cuya divulgación no produce un impacto significativo. | Información publicada oficialmente |
| **Interna** | Información destinada al uso interno de la organización. | Procedimientos internos generales |
| **Confidencial** | Información cuya divulgación no autorizada podría causar un impacto significativo. | Información financiera o de empleados |
| **Restringida** | Información altamente sensible que requiere el máximo nivel de protección. | Historias clínicas y datos médicos sensibles |

La clasificación determina las medidas de protección que deberán aplicarse durante el almacenamiento, procesamiento, transmisión y eliminación de la información.

---

# 5. Valoración CIA

Además de la clasificación de sensibilidad, cada activo se valorará según sus requisitos de:

- **Confidencialidad (C)**
- **Integridad (I)**
- **Disponibilidad (D)**

Cada dimensión utilizará una escala de cuatro niveles.

| Valor | Nivel | Descripción |
|------:|-------|-------------|
| 1 | Bajo | El impacto sería limitado y no afectaría significativamente a las operaciones. |
| 2 | Medio | El impacto podría afectar parcialmente a procesos o servicios. |
| 3 | Alto | El impacto podría causar una interrupción importante, pérdidas relevantes o incumplimientos. |
| 4 | Crítico | El impacto podría afectar gravemente a servicios sanitarios, pacientes, obligaciones legales o continuidad operativa. |

---

# 6. Confidencialidad

La confidencialidad representa la necesidad de impedir la divulgación de información a personas o sistemas no autorizados.

### Bajo

La información puede ser pública o su divulgación tendría un impacto mínimo.

### Medio

La divulgación podría afectar a procesos internos.

### Alto

La divulgación podría afectar significativamente a la organización o a personas.

### Crítico

La divulgación podría comprometer información clínica altamente sensible, producir graves consecuencias legales o afectar significativamente a los pacientes.

---

# 7. Integridad

La integridad representa la necesidad de mantener la información correcta, completa y libre de modificaciones no autorizadas.

### Bajo

Los errores pueden corregirse fácilmente y tienen poco impacto.

### Medio

Una modificación incorrecta podría afectar a procesos administrativos.

### Alto

La alteración podría afectar significativamente a procesos operativos o información importante.

### Crítico

Una modificación no autorizada podría afectar directamente a decisiones clínicas, tratamientos o seguridad del paciente.

---

# 8. Disponibilidad

La disponibilidad representa la necesidad de que el activo permanezca accesible cuando sea requerido.

### Bajo

La indisponibilidad puede tolerarse durante periodos prolongados.

### Medio

La indisponibilidad puede producir retrasos operativos.

### Alto

La interrupción puede afectar significativamente a servicios importantes.

### Crítico

La indisponibilidad puede afectar directamente a servicios sanitarios esenciales o impedir el acceso a información necesaria para la atención del paciente.

---

# 9. Determinación de la criticidad

Para este proyecto, la criticidad global del activo se determinará utilizando el valor más alto obtenido entre Confidencialidad, Integridad y Disponibilidad:

`Criticidad = MAX(C, I, D)`

Ejemplo:

| Activo | C | I | D | Criticidad |
|--------|---|---|---|------------|
| Historia Clínica Electrónica | 4 | 4 | 4 | Crítica |
| Información financiera | 3 | 3 | 2 | Alta |
| Documentación interna general | 2 | 2 | 2 | Media |
| Información pública | 1 | 1 | 1 | Baja |

Este método evita que un requisito crítico quede oculto por una media de valores inferiores.

---

# 10. Criticidad y redundancia

La existencia de redundancia, copias de seguridad o mecanismos de alta disponibilidad **no reduce automáticamente la criticidad inherente de un activo**.

Por ejemplo, una base de datos clínica puede seguir siendo crítica aunque exista una réplica.

La redundancia constituye una medida de protección que reduce el riesgo asociado a determinados escenarios de indisponibilidad, pero no modifica necesariamente la importancia que el activo tiene para la organización.

Esta distinción será relevante durante el análisis de riesgos.

---

# 11. Revisión de la clasificación

La clasificación deberá revisarse:

- Periódicamente.
- Cuando cambie el uso del activo.
- Cuando cambie su propietario.
- Cuando cambien los procesos que dependen de él.
- Cuando aparezcan nuevos requisitos legales o contractuales.
- Cuando se produzcan cambios significativos en la arquitectura.
- Cuando el análisis de riesgos determine que la clasificación debe revisarse.

---

# 12. Relación con la gestión de riesgos

La clasificación representa una entrada para la evaluación posterior del impacto.

Debe distinguirse entre:

**Criticidad del activo**

→ importancia del activo para la organización.

y

**Nivel de riesgo**

→ resultado del proceso de evaluación de riesgos considerando los criterios definidos en la metodología correspondiente.

Por tanto, un activo crítico no implica automáticamente que todos sus riesgos sean críticos.

---

# 13. Documentos relacionados

- [Gestión de Activos](asset-management.es.md)
- [Inventario de Activos](asset-inventory.es.md)
- [Propiedad de los Activos](asset-ownership.es.md)
- [Activos de Información](information-assets.es.md)
- [Activos de Hardware](hardware-assets.es.md)
- [Activos de Software](software-assets.es.md)
- [Activos de Servicios](service-assets.es.md)

---

# 14. Referencias

- ISO/IEC 27001:2022
- ISO/IEC 27002:2022
- ISO/IEC 27005

---

# 15. Historial de cambios

| Versión | Fecha | Descripción | Autor |
|---------|-------|-------------|-------|
| 1.0 | Pendiente | Creación inicial del documento | Gabriel |# Clasificación de Activos

🌐 **Idioma**

- **Español**
- [English](asset-classification.en.md)

---

| Campo | Información |
|--------|-------------|
| **Código del documento** | AST-003 |
| **Versión** | 1.0 |
| **Estado** | Borrador |
| **Clasificación** | Interno |
| **Propietario** | Responsable del SGSI |
| **Fecha de creación** | Pendiente |
| **Última revisión** | Pendiente |

---

# 1. Objetivo

Este documento establece la metodología utilizada para clasificar los activos incluidos dentro del alcance del Sistema de Gestión de Seguridad de la Información (SGSI).

La clasificación permite determinar la importancia de los activos, establecer requisitos de protección adecuados y proporcionar información para el posterior análisis y tratamiento de riesgos.

---

# 2. Alcance

Esta metodología aplica a los activos registrados dentro del inventario del SGSI, incluyendo:

- Activos de información.
- Hardware.
- Software.
- Servicios tecnológicos.
- Infraestructura física.

La clasificación se realizará teniendo en cuenta tanto la sensibilidad de la información como la criticidad del activo para las operaciones de la organización.

---

# 3. Principios de clasificación

La clasificación de activos se basa en los siguientes principios:

- La protección debe ser proporcional a la importancia del activo.
- La sensibilidad de la información y la criticidad operativa son conceptos diferentes.
- La clasificación debe considerar confidencialidad, integridad y disponibilidad.
- Los propietarios de los activos participan en la determinación y revisión de su clasificación.
- La clasificación debe revisarse cuando cambie el uso, función o contexto del activo.

---

# 4. Clasificación de la información

Los activos de información se clasifican según su nivel de sensibilidad.

| Nivel | Descripción | Ejemplo |
|-------|-------------|---------|
| **Pública** | Información cuya divulgación no produce un impacto significativo. | Información publicada oficialmente |
| **Interna** | Información destinada al uso interno de la organización. | Procedimientos internos generales |
| **Confidencial** | Información cuya divulgación no autorizada podría causar un impacto significativo. | Información financiera o de empleados |
| **Restringida** | Información altamente sensible que requiere el máximo nivel de protección. | Historias clínicas y datos médicos sensibles |

La clasificación determina las medidas de protección que deberán aplicarse durante el almacenamiento, procesamiento, transmisión y eliminación de la información.

---

# 5. Valoración CIA

Además de la clasificación de sensibilidad, cada activo se valorará según sus requisitos de:

- **Confidencialidad (C)**
- **Integridad (I)**
- **Disponibilidad (D)**

Cada dimensión utilizará una escala de cuatro niveles.

| Valor | Nivel | Descripción |
|------:|-------|-------------|
| 1 | Bajo | El impacto sería limitado y no afectaría significativamente a las operaciones. |
| 2 | Medio | El impacto podría afectar parcialmente a procesos o servicios. |
| 3 | Alto | El impacto podría causar una interrupción importante, pérdidas relevantes o incumplimientos. |
| 4 | Crítico | El impacto podría afectar gravemente a servicios sanitarios, pacientes, obligaciones legales o continuidad operativa. |

---

# 6. Confidencialidad

La confidencialidad representa la necesidad de impedir la divulgación de información a personas o sistemas no autorizados.

### Bajo

La información puede ser pública o su divulgación tendría un impacto mínimo.

### Medio

La divulgación podría afectar a procesos internos.

### Alto

La divulgación podría afectar significativamente a la organización o a personas.

### Crítico

La divulgación podría comprometer información clínica altamente sensible, producir graves consecuencias legales o afectar significativamente a los pacientes.

---

# 7. Integridad

La integridad representa la necesidad de mantener la información correcta, completa y libre de modificaciones no autorizadas.

### Bajo

Los errores pueden corregirse fácilmente y tienen poco impacto.

### Medio

Una modificación incorrecta podría afectar a procesos administrativos.

### Alto

La alteración podría afectar significativamente a procesos operativos o información importante.

### Crítico

Una modificación no autorizada podría afectar directamente a decisiones clínicas, tratamientos o seguridad del paciente.

---

# 8. Disponibilidad

La disponibilidad representa la necesidad de que el activo permanezca accesible cuando sea requerido.

### Bajo

La indisponibilidad puede tolerarse durante periodos prolongados.

### Medio

La indisponibilidad puede producir retrasos operativos.

### Alto

La interrupción puede afectar significativamente a servicios importantes.

### Crítico

La indisponibilidad puede afectar directamente a servicios sanitarios esenciales o impedir el acceso a información necesaria para la atención del paciente.

---

# 9. Determinación de la criticidad

Para este proyecto, la criticidad global del activo se determinará utilizando el valor más alto obtenido entre Confidencialidad, Integridad y Disponibilidad:

`Criticidad = MAX(C, I, D)`

Ejemplo:

| Activo | C | I | D | Criticidad |
|--------|---|---|---|------------|
| Historia Clínica Electrónica | 4 | 4 | 4 | Crítica |
| Información financiera | 3 | 3 | 2 | Alta |
| Documentación interna general | 2 | 2 | 2 | Media |
| Información pública | 1 | 1 | 1 | Baja |

Este método evita que un requisito crítico quede oculto por una media de valores inferiores.

---

# 10. Criticidad y redundancia

La existencia de redundancia, copias de seguridad o mecanismos de alta disponibilidad **no reduce automáticamente la criticidad inherente de un activo**.

Por ejemplo, una base de datos clínica puede seguir siendo crítica aunque exista una réplica.

La redundancia constituye una medida de protección que reduce el riesgo asociado a determinados escenarios de indisponibilidad, pero no modifica necesariamente la importancia que el activo tiene para la organización.

Esta distinción será relevante durante el análisis de riesgos.

---

# 11. Revisión de la clasificación

La clasificación deberá revisarse:

- Periódicamente.
- Cuando cambie el uso del activo.
- Cuando cambie su propietario.
- Cuando cambien los procesos que dependen de él.
- Cuando aparezcan nuevos requisitos legales o contractuales.
- Cuando se produzcan cambios significativos en la arquitectura.
- Cuando el análisis de riesgos determine que la clasificación debe revisarse.

---

# 12. Relación con la gestión de riesgos

La clasificación representa una entrada para la evaluación posterior del impacto.

Debe distinguirse entre:

**Criticidad del activo**

→ importancia del activo para la organización.

y

**Nivel de riesgo**

→ resultado del proceso de evaluación de riesgos considerando los criterios definidos en la metodología correspondiente.

Por tanto, un activo crítico no implica automáticamente que todos sus riesgos sean críticos.

---

# 13. Documentos relacionados

- [Gestión de Activos](asset-management.es.md)
- [Inventario de Activos](asset-inventory.es.md)
- [Propiedad de los Activos](asset-ownership.es.md)
- [Activos de Información](information-assets.es.md)
- [Activos de Hardware](hardware-assets.es.md)
- [Activos de Software](software-assets.es.md)
- [Activos de Servicios](service-assets.es.md)

---

# 14. Referencias

- ISO/IEC 27001:2022
- ISO/IEC 27002:2022
- ISO/IEC 27005

---

# 15. Historial de cambios

| Versión | Fecha | Descripción | Autor |
|---------|-------|-------------|-------|
| 1.0 | Pendiente | Creación inicial del documento | Gabriel |
