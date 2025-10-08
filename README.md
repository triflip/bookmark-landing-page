🧱 Iteración 2 – Refactorización con SASS

Una vez validada la estructura base con HTML y CSS, es momento de mejorar la organización del código y el flujo de trabajo. En esta fase, se refactoriza la hoja de estilos para trabajar con SASS (SCSS), priorizando la modularidad, la claridad visual y el control sobre los estilos.

🎯 Objetivos de Aprendizaje:

Organizar el CSS en parciales SCSS para facilitar la escalabilidad.

Aplicar variables para colores, tipografías y espaciados.

Crear y reutilizar mixins para estilos repetitivos.

Usar anidación con criterio para mantener la legibilidad.

Consolidar el flujo de trabajo con Git y ramas por iteración.

---

🧰 Herramientas y Tecnologías:

SASS (SCSS) → preprocesador para modularizar estilos.

VS Code → editor principal.

Git + GitHub → control de versiones y ramas por iteración.

Live Server / navegador → visualización en tiempo real.

Herramientas de validación → W3C Validator, Lighthouse.

---

🚀 Pasos para Ejecutar la Iteración:

1️⃣ Crear nueva rama para la refactorización
git checkout -b feature/sass-implementation
2️⃣ Crear estructura SCSS
3️⃣ Importar parciales en main.scss
scss
@use 'variables';
@use 'mixins';
@use 'base';
@use 'layouts';
@use 'components';
4️⃣ Refactorizar estilos

Sustituir clases repetidas por mixins.

Aplicar variables para colores y tamaños.

Anidar selectores con máximo 3 niveles.

Validar visualmente cada componente.

♿ Accesibilidad (WCAG)
Mantener atributos aria-label en elementos interactivos.

Validar contraste y navegación por teclado tras refactorizar estilos.

Confirmar que las imágenes mantienen sus textos alternativos (alt).

---

💡 Buenas Prácticas
Modularizar por secciones reales del layout.

Validar visualmente cada cambio antes de avanzar.

Evitar anidación excesiva para mantener legibilidad.

Commits frecuentes y descriptivos:

bash
feat: refactoriza estilos con SASS modular
style: añade mixins para layout y botones
fix: corrige anidación excesiva en nav-header

🌐 Despliegue en GitHub Pages
bash
git checkout main
git merge feature/sass-implementation
git push origin main

---

✅ Checklist Final
[x] Estructura SCSS creada y conectada

[x] Variables definidas y aplicadas

[x] Mixins funcionales y reutilizables

[x] Layouts refactorizados con Mobile First

[x] Código modular, limpio y visualmente validado

[x] README actualizado con Iteración 2

---
✍️ Autor
Nombre: Toni Valls 
Proyecto: IT Academy – Sprint 1: Maquetación Bookmark Landing Page 
Año: 2025