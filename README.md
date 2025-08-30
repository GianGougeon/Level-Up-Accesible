# 🙌 Level-Up Accesible – Obligatorio Taller de usabilidad y accesibilidad

**Sitio web accesible para gamers con discapacidades**  

![Accesibilidad Gaming](https://img.shields.io/badge/Accessible-Gaming-brightgreen) 
![WCAG](https://img.shields.io/badge/WCAG-2.1_AA-blue) 
![Keyboard-Nav](https://img.shields.io/badge/Keyboard%20Friendly-Yes-success)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple)
![Responsive](https://img.shields.io/badge/Responsive-Yes-green)

## 📌 Propósito  
Level-Up Accesible es una **comunidad virtual** dedicada a brindar información sobre videojuegos, hardware y comunidades gaming que promuevan la **inclusión de jugadores con discapacidades**.  

🚀 **Objetivos**:  
✔ Informar sobre videojuegos y periféricos accesibles  
✔ Orientar a jugadores con necesidades específicas  
✔ Conectar a la comunidad gamer inclusiva  
✔ Promover estándares de accesibilidad en el desarrollo de videojuegos  

## 🌟 Características principales  
✅ **Diseño accesible**: Compatible con lectores de pantalla (NVDA, VoiceOver, JAWS)  
✅ **Navegación completa por teclado**: Totalmente operable sin mouse  
✅ **Contenido claro**: Estructura semántica y lenguaje sencillo  
✅ **Modos de visualización**: Alto contraste y tamaño de texto ajustable  
✅ **Multimedia accesible**: Subtítulos y transcripciones para contenido audiovisual  
✅ **Formularios inclusivos**: Validación accesible y etiquetas ARIA  
✅ **Cobertura de hardware inclusivo**: Información detallada del Xbox Adaptive Controller y sus accesorios compatibles

## 🧪 Tecnologías utilizadas

### Frontend
- **HTML5 semántico** (ARIA landmarks, estructura accesible)
- **CSS3/SASS** (arquitectura ITCSS, patrones BEM)
- **JavaScript ES6+** (módulos, localStorage)
- **Bootstrap 5.3** (componentes accesibles)
- **Font Awesome 6.4** (iconos accesibles)

### Herramientas
- **Webpack** (bundling y optimización)
- **Lighthouse** (auditoría continua de accesibilidad)
- **Git & GitHub** (control de versiones)
- **npm** (gestión de dependencias)

### Estándares
- **WCAG 2.1 AA** (nivel de conformidad)
- **WAI-ARIA** (enriquecimiento semántico)
- **ESLint** (estándares de código)

## 📂 Estructura del proyecto

```
Proyecto/
├── .env
├── .gitignore
├── README.md
├── index.html
├── package.json
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   │       ├── inicio/
│   │       ├── noticiasYlanzamientos/
│   │       ├── consolasYperifericos/
│   │       ├── comunidades/
│   │       ├── foro/
│   │       ├── accesibilidad/
│   │       └── xboxAdaptativeController/
│   ├── css/
│   │   ├── styles.css
│   │   └── styles.css.map
│   ├── js/
│   │   ├── app.js
│   │   ├── config.js
│   │   ├── modules/
│   │   │   ├── forms.js
│   │   │   ├── maps.js
│   │   │   └── modals.js
│   │   └── tooltips.js
│   ├── pages/
│   │   ├── accesibilidad.html
│   │   ├── comunidades.html
│   │   ├── consolasYperifericos.html
│   │   ├── foro.html
│   │   ├── noticiasYlanzamientos.html
│   │   └── xboxAdaptativeController.html
│   └── scss/
│       ├── abstracts/
│       │   ├── _accessibility.scss
│       │   ├── _mixins.scss
│       │   ├── _utilities.scss
│       │   └── _variables.scss
│       ├── base/
│       │   ├── _reset.scss
│       │   └── _typography.scss
│       ├── components/
│       │   ├── _footer.scss
│       │   └── _header.scss
│       ├── layouts/
│       │   ├── _grid.scss
│       │   ├── _navigation.scss
│       │   └── _sections.scss
│       ├── main.scss
│       └── pages/
│           ├── _accesibilidad.scss
│           ├── _comunidades.scss
│           ├── _consolasYperifericos.scss
│           ├── _foro.scss
│           ├── _inicio.scss
│           └── _noticiasYlanzamientos.scss
└── webpack.config.js
```

## ♿ Implementación de accesibilidad

### Características clave
- **Navegación por teclado**: Todos los componentes son accesibles mediante tabulación
- **Contraste 4.5:1**: Cumple con WCAG AA para texto normal
- **Textos alternativos**: Todas las imágenes tienen descripciones adecuadas
- **Roles ARIA**: Uso correcto de landmarks, alerts y live regions
- **Validación de formularios**: Mensajes de error accesibles
- **Accesibilidad en hardware**: Se incluye documentación completa del Xbox Adaptive Controller y sus accesorios compatibles

### Pruebas realizadas
- Lectores de pantalla: NVDA, JAWS, VoiceOver
- Navegación solo con teclado
- Herramientas de auditoría: Lighthouse, axe DevTools
- Pruebas con usuarios con diversas discapacidades


## 👨‍💻 Autores

- **Gianfranco Gougeon** - [GitHub](https://github.com/GianGougeon)
- **Santiago Pino** - [GitHub](https://github.com/SantiPino95)


## 🌐 Acceso en línea

Puedes ver el proyecto funcionando en:

👉 [Level-Up-Accesible en GitHub Pages](https://giangougeon.github.io/Level-Up-Accesible/) 👈

---

## 📸 Capturas de pantalla

### Página principal
![Inicio](https://github.com/GianGougeon/Level-Up-Accesible/blob/master/screenshots/inicio.png?raw=true)
![Inicio](https://github.com/GianGougeon/Level-Up-Accesible/blob/master/screenshots/inicio2.png?raw=true)

### Noticias y Lanzamientos
![Noticias](https://github.com/GianGougeon/Level-Up-Accesible/blob/master/screenshots/noticiasylanzamientos.png?raw=true)
![Noticias](https://github.com/GianGougeon/Level-Up-Accesible/blob/master/screenshots/noticiasylanzamientos2.png?raw=true)

### Consolas y Periféricos
![Consolas](https://github.com/GianGougeon/Level-Up-Accesible/blob/master/screenshots/consolasyperifericos.png?raw=true)
![Consolas](https://github.com/GianGougeon/Level-Up-Accesible/blob/master/screenshots/consolasyperifericos2.png?raw=true)

### Comunidades
![Comunidades](https://github.com/GianGougeon/Level-Up-Accesible/blob/master/screenshots/comunidades.png?raw=true)
![Comunidades](https://github.com/GianGougeon/Level-Up-Accesible/blob/master/screenshots/comunidades2.png?raw=true)

### Foro de Ayuda
![Foro](https://github.com/GianGougeon/Level-Up-Accesible/blob/master/screenshots/forodeayuda.png?raw=true)
![Foro](https://github.com/GianGougeon/Level-Up-Accesible/blob/master/screenshots/forodeayuda2.png?raw=true)

### Accesibilidad
![Foro](https://github.com/GianGougeon/Level-Up-Accesible/blob/master/screenshots/accesibilidad.png?raw=true)
![Foro](https://github.com/GianGougeon/Level-Up-Accesible/blob/master/screenshots/accesibilidad2.png?raw=true)

### Xbox Adaptative Controller
![XboxAdaptativeController](https://github.com/GianGougeon/Level-Up-Accesible/blob/master/screenshots/xboxAdaptativeController.png?raw=true)
![XboxAdaptativeController](https://github.com/GianGougeon/Level-Up-Accesible/blob/master/screenshots/xboxAdaptativeController2.png?raw=true)
![XboxAdaptativeController](https://github.com/GianGougeon/Level-Up-Accesible/blob/master/screenshots/xboxAdaptativeController3.png?raw=true)

---

## 📌 Estado del proyecto

✅ Finalizado para entrega de curso.

---