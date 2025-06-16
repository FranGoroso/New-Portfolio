# 🚀 Portfolio Personal - Francisco Goroso

<div align="center">
  <img src="./src/assets/preview.png" alt="Portfolio Preview" width="100%" />
  
  [![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://frangoroso.com)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
  
  <p align="center">
    <strong>Portfolio profesional moderno con React, TypeScript y animaciones avanzadas</strong>
  </p>
</div>

## 📋 Tabla de Contenidos

- [✨ Características](#-características)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [🚀 Instalación](#-instalación)
- [🔧 Configuración](#-configuración)
- [📦 Scripts Disponibles](#-scripts-disponibles)
- [🏗️ Estructura del Proyecto](#️-estructura-del-proyecto)
- [🎨 Personalización](#-personalización)
- [📱 Responsive Design](#-responsive-design)
- [🌐 Despliegue](#-despliegue)
- [🔄 Mantenimiento](#-mantenimiento)
- [🤝 Contribuciones](#-contribuciones)
- [📄 Licencia](#-licencia)
- [👤 Autor](#-autor)

## ✨ Características

### 🎯 Funcionalidades Principales

- **🌓 Tema Claro/Oscuro**: Sistema completo de temas con persistencia en localStorage
- **🎨 Diseño Moderno**: Interfaz limpia con paleta de colores naranja personalizada
- **⚡ Animaciones Fluidas**: Implementadas con Framer Motion para transiciones suaves
- **🌊 Fondo Interactivo**: Partículas animadas con react-tsparticles
- **📱 Totalmente Responsive**: Optimizado para todos los dispositivos
- **📧 Formulario de Contacto**: Integrado con Formspree para recepción de mensajes
- **🤖 Sección de IA**: Destacando experiencia en automatización e inteligencia artificial
- **📊 Actualización Automática**: Las fechas de experiencia se calculan dinámicamente

### 🔐 Características Técnicas

- **TypeScript**: Tipado estático para mayor robustez
- **Optimización SEO**: Estructura semántica y metadatos optimizados
- **Lazy Loading**: Carga optimizada de componentes
- **Accesibilidad**: Cumple con estándares WCAG
- **Performance**: Score 95+ en Lighthouse

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** - Biblioteca UI
- **TypeScript** - Superset de JavaScript con tipado
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Librería de animaciones
- **Vite** - Build tool ultrarrápido

### Librerías Adicionales
- **react-tsparticles** - Fondo de partículas interactivo
- **Lucide React** - Iconos modernos y optimizados
- **Formspree** - Gestión de formularios
- **SweetAlert2** - Notificaciones elegantes

## 🚀 Instalación

### Prerrequisitos

- Node.js 16.0 o superior
- npm 7.0 o superior (o yarn)

### Pasos de Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/FranGoroso/portfolio.git
cd portfolio
```

2. **Instala las dependencias**

```bash
npm install
# o
yarn install
```

3. **Copia el archivo de variables de entorno**

```bash
cp .env.example .env
```

4. **Configura las variables de entorno**

Edita el archivo `.env` con tus propias claves:

```env
VITE_FORM_KEY=tu_formspree_form_id
```

5. **Inicia el servidor de desarrollo**

```bash
npm run dev
# o
yarn dev
```

6. **Abre tu navegador**

Visita `http://localhost:5173` para ver el portfolio en acción.

## 🔧 Configuración

### Variables de Entorno

| Variable | Descripción | Requerido |
|----------|-------------|-----------|
| `VITE_FORM_KEY` | ID del formulario de Formspree | Sí |

### Configuración de Formspree

1. Crea una cuenta en [Formspree](https://formspree.io)
2. Crea un nuevo formulario
3. Copia el Form ID (formato: `xyzabcde`)
4. Pégalo en tu archivo `.env`

### Personalización de Colores

Los colores se pueden modificar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Tonos naranja principales
    500: '#f47e20',
    600: '#e5671a',
  },
  accent: {
    // Tonos naranja dorados
    500: '#ffa32e',
  },
  // ... más colores
}
```

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo
npm run build        # Compila para producción
npm run preview      # Vista previa de producción
npm run lint         # Ejecuta el linter
npm run clean        # Limpia caché de Vite

# Utilidades
npm run type-check   # Verifica tipos TypeScript
npm run format       # Formatea código con Prettier
```

## 🏗️ Estructura del Proyecto

```
portfolio/
├── public/
│   ├── docs/
│   │   └── cv.pdf          # Tu CV
│   └── favicon.ico
├── src/
│   ├── assets/             # Imágenes y recursos
│   ├── components/         # Componentes React
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Preloader.tsx
│   │   └── ParticlesBackground.tsx
│   ├── contexts/           # Context API
│   │   └── ThemeContext.tsx
│   ├── hooks/              # Custom hooks
│   │   └── useScrollAnimation.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example            # Ejemplo de variables
├── .gitignore
├── tailwind.config.js      # Configuración Tailwind
├── tsconfig.json           # Configuración TypeScript
├── vite.config.ts          # Configuración Vite
├── package.json
└── README.md
```

## 🎨 Personalización

### Actualizar Información Personal

1. **Datos personales**: Edita los componentes en `src/components/`
2. **Foto de perfil**: Reemplaza `src/assets/foto_perfil_fran.jpg`
3. **CV**: Actualiza el archivo en `public/docs/cv.pdf`

### Agregar Nuevos Proyectos

Edita el array `projects` en `src/components/ProjectsSection.tsx`:

```typescript
const projects = [
  {
    title: "Nombre del Proyecto",
    description: "Descripción detallada",
    technologies: ["React", "Node.js"],
    link: "https://ejemplo.com",
    image: proyectoImage,
    featured: true,
    category: "Full Stack"
  },
  // ... más proyectos
];
```

### Modificar Experiencia Laboral

Actualiza el array `experiences` en `src/components/ExperienceSection.tsx`:

```typescript
const experiences = [
  {
    title: "Título del Puesto",
    company: "Nombre de Empresa",
    location: "Ubicación",
    startDate: "2024-01-01",
    endDate: null, // null para "actualidad"
    responsibilities: ["..."],
    skills: ["..."],
    achievements: ["..."]
  },
  // ... más experiencias
];
```

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Características Responsive

- Menú hamburguesa en móvil con animación fullscreen
- Grid adaptativo en proyectos y habilidades
- Timeline vertical en experiencia para móvil
- Tipografía y espaciado optimizados

## 🌐 Despliegue

### Vercel (Recomendado)

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. Despliega:
```bash
vercel
```

### Netlify

1. Build el proyecto:
```bash
npm run build
```

2. Arrastra la carpeta `dist` a Netlify

### GitHub Pages

1. Instala gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Agrega scripts en package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Despliega:
```bash
npm run deploy
```

## 🔄 Mantenimiento

### Actualización Regular

#### Mensual
- [ ] Actualizar proyectos recientes
- [ ] Revisar y actualizar skills
- [ ] Verificar enlaces rotos
- [ ] Actualizar CV

#### Trimestral
- [ ] Actualizar dependencias
- [ ] Revisar performance
- [ ] Actualizar screenshots
- [ ] Backup del proyecto

#### Anual
- [ ] Rediseño de secciones si es necesario
- [ ] Actualizar stack tecnológico
- [ ] Revisar compatibilidad con navegadores

### Comandos de Mantenimiento

```bash
# Actualizar dependencias
npm update

# Verificar vulnerabilidades
npm audit

# Actualizar a últimas versiones
npm outdated
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guía de Estilo

- Usa TypeScript para nuevos componentes
- Sigue la estructura de carpetas existente
- Mantén los componentes pequeños y reutilizables
- Documenta funciones complejas
- Asegúrate de que pase el linter

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👤 Autor

**Francisco Goroso**

- 🌐 Website: [frangoroso.com](https://frangoroso.com)
- 💼 LinkedIn: [Francisco Goroso](https://www.linkedin.com/in/francisco-goroso-609796266/)
- 🐙 GitHub: [@FranGoroso](https://github.com/FranGoroso)
- 📧 Email: contacto@frangoroso.com

---

<div align="center">
  <p>Hecho con ❤️ por Fran Goroso</p>
  <p>⭐ Si te gusta este proyecto, dale una estrella!</p>
</div>
