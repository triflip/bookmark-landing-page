# 🌐 Bookmark Landing Page

Proyecto desarrollado en el marco de la **IT Academy – Sprint 1**, cuyo objetivo es construir una landing page profesional aplicando buenas prácticas de **maquetación, accesibilidad y responsive design**.

---

## 🧭 Descripción general

Esta landing page se desarrolla en **3 iteraciones progresivas**, cada una centrada en una mejora específica:

| Iteración | Descripción | Tecnologías principales |
|------------|--------------|--------------------------|
| **1** | Maquetación base con HTML y CSS | HTML5, CSS3 |
| **2** | Componentes, variables y animaciones | SASS |
| **3** | Refactorización con TailwindCSS | TailwindCSS, Node.js |

Cada iteración tiene su propio `README.md` con instrucciones específicas y ramas dedicadas 

---

## 🚀 Cómo ejecutar el proyecto

1️⃣ **Clonar el repositorio**
```bash
git clone https://github.com/triflip/bookmark-landing-page.git
cd bookmark-landing-page
```

2️⃣ **Elegir la iteración**
```bash
git checkout feature/vanilla-implementation       # Iteración 1
git checkout feature/sass-implementation          # Iteración 2
git checkout feature/tailwind-implementation      # Iteración 3
```

3️⃣ **Abrir el proyecto**
- Abre `index.html` en tu navegador  
  o usa **Live Server** desde VS Code.

4️⃣ *(Solo iteración 3)*  
Si usas Tailwind, instala dependencias:
```bash
npm install
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

---

## ✅ Checklist final
- [x] Tailwind funcionando  
- [x] Responsive completo  
- [x] Accesibilidad OK  
- [x] Listo para desplegar en GitHub Pages


## Visit site
[![See Demo](https://img.shields.io/badge/See%20Demo-9932CC?style=for-the-badge)](https://triflip.github.io/bookmark-landing-page/)
