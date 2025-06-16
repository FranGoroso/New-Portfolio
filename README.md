# 🚀 Portfolio Personal - Francisco Goroso

Portfolio personal moderno y responsive desarrollado con React, TypeScript y Tailwind CSS. Incluye tema claro/oscuro, animaciones fluidas con Framer Motion y diseño optimizado para todos los dispositivos.

![Portfolio Preview](./src/assets/preview.png)

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz limpia y profesional con atención al detalle
- **🌓 Tema Claro/Oscuro**: Cambio dinámico entre temas con persistencia
- **📱 Totalmente Responsive**: Optimizado para móviles, tablets y escritorio
- **⚡ Animaciones Fluidas**: Implementadas con Framer Motion para una experiencia suave
- **📧 Formulario de Contacto**: Integrado con Formspree para recibir mensajes
- **🎯 SEO Optimizado**: Estructura semántica y metadatos optimizados
- **🚀 Alto Rendimiento**: Carga rápida y optimización de recursos

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework**: React 18 con TypeScript
- **Estilos**: Tailwind CSS con diseño personalizado
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Build Tool**: Vite
- **Formularios**: Formspree
- **Notificaciones**: SweetAlert2

## 📦 Instalación

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

3. **Configura las variables de entorno**
   ```bash
   cp .env.example .env
   ```
   
   Edita el archivo `.env` y añade tu clave de Formspree:
   ```
   VITE_FORM_KEY=tu_formspree_form_id
   ```

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. **Abre tu navegador**
   
   Visita `http://localhost:5173`

## 🏗️ Estructura del Proyecto

```
src/
├── assets/          # Imágenes y recursos estáticos
├── components/      # Componentes React
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── Preloader.tsx
├── contexts/        # Context API para gestión de estado
│   └── ThemeContext.tsx
├── hooks/           # Custom hooks
│   └── useScrollAnimation.ts
├── App.tsx          # Componente principal
├── main.tsx         # Punto de entrada
└── index.css        # Estilos globales
```

## 🎨 Personalización

### Cambiar colores

Los colores principales se pueden modificar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Tus colores primarios
  },
  secondary: {
    // Tus colores secundarios
  }
}
```

### Modificar contenido

- **Información personal**: Edita los componentes en `src/components/`
- **Proyectos**: Actualiza el array en `ProjectsSection.tsx`
- **Experiencia**: Modifica los datos en `ExperienceSection.tsx`

## 📱 Características Responsive

- **Mobile First**: Diseñado pensando primero en móviles
- **Breakpoints optimizados**: 
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- **Menú hamburguesa**: Para navegación móvil
- **Imágenes optimizadas**: Diferentes tamaños según dispositivo

## 🚀 Despliegue

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Conecta tu repositorio con Vercel
3. Configura las variables de entorno
4. ¡Despliega!

### Build para producción

```bash
npm run build
# o
yarn build
```

Los archivos optimizados estarán en la carpeta `dist/`

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👤 Autor

**Francisco Goroso**

- GitHub: [@FranGoroso](https://github.com/FranGoroso)
- LinkedIn: [Francisco Goroso](https://www.linkedin.com/in/francisco-goroso-609796266/)
- Email: contacto@frangoroso.com

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes alguna sugerencia o encuentras algún bug:

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📸 Capturas de Pantalla

### Tema Claro
![Light Theme](./screenshots/light-theme.png)

### Tema Oscuro
![Dark Theme](./screenshots/dark-theme.png)

### Vista Móvil
![Mobile View](./screenshots/mobile-view.png)

---

⭐ Si te gusta este proyecto, ¡no olvides darle una estrella en GitHub!
