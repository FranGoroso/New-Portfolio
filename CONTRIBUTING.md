# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a este proyecto! Este documento proporciona pautas para contribuir al portfolio.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Guía de Estilo](#guía-de-estilo)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Mejoras](#sugerir-mejoras)
- [Pull Requests](#pull-requests)

## Código de Conducta

Este proyecto sigue un código de conducta simple:
- Sé respetuoso con todos los participantes
- Acepta críticas constructivas
- Enfócate en lo que es mejor para la comunidad
- Muestra empatía hacia otros miembros

## ¿Cómo puedo contribuir?

### 🐛 Reportando Bugs

Los bugs son rastreados como [GitHub issues](https://github.com/FranGoroso/portfolio/issues).

Antes de crear un reporte de bug:
- Verifica que el bug no haya sido reportado previamente
- Verifica que el bug no haya sido solucionado en la última versión

Al crear un reporte incluye:
- Un título claro y descriptivo
- Pasos exactos para reproducir el problema
- Comportamiento esperado vs comportamiento actual
- Screenshots si es aplicable
- Tu entorno (OS, navegador, versión)

### 💡 Sugerencias de Mejoras

Las sugerencias también se rastrean como [GitHub issues](https://github.com/FranGoroso/portfolio/issues).

Al sugerir una mejora:
- Usa un título claro y descriptivo
- Proporciona una descripción detallada de la mejora
- Explica por qué esta mejora sería útil
- Lista ejemplos de cómo se usaría

### 🔧 Contribuciones de Código

1. **Fork el repositorio**
2. **Crea una rama** para tu característica (`git checkout -b feature/NuevaCaracteristica`)
3. **Haz tus cambios** siguiendo la guía de estilo
4. **Escribe tests** si es aplicable
5. **Commit tus cambios** (`git commit -m 'Add: descripción clara'`)
6. **Push a la rama** (`git push origin feature/NuevaCaracteristica`)
7. **Abre un Pull Request**

## Proceso de Desarrollo

### 🔄 Flujo de Trabajo

1. **Issue** - Todo comienza con un issue
2. **Discusión** - Discutimos la implementación
3. **Implementación** - Codifica la solución
4. **Review** - Revisión de código
5. **Merge** - Integración a main

### 🏗️ Estructura de Branches

- `main` - Rama principal, siempre estable
- `feature/*` - Nuevas características
- `fix/*` - Corrección de bugs
- `docs/*` - Mejoras en documentación
- `refactor/*` - Refactorización de código

## Guía de Estilo

### 📝 TypeScript/React

```typescript
// ✅ Bueno
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// ❌ Evitar
const Button = (props: any) => {
  return <button onClick={props.onClick}>{props.children}</button>
};
```

### 🎨 CSS/Tailwind

- Usa clases de Tailwind cuando sea posible
- Agrupa clases relacionadas
- Evita estilos inline
- Mantén la consistencia con el diseño existente

```jsx
// ✅ Bueno
<div className="flex items-center justify-between p-4 bg-white dark:bg-dark-800 rounded-lg shadow-md">

// ❌ Evitar
<div style={{ display: 'flex', padding: '1rem' }}>
```

### 📦 Componentes

- Un componente por archivo
- Nombres descriptivos en PascalCase
- Props tipadas con interfaces
- Documentación con JSDoc cuando sea necesario

### 💬 Commits

Formato de commits:

```
<tipo>: <descripción>

[cuerpo opcional]

[footer opcional]
```

Tipos:
- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato
- `refactor`: Refactorización
- `test`: Añadir tests
- `chore`: Tareas de mantenimiento

Ejemplos:
```
feat: agregar animación de hover en proyectos
fix: corregir responsive en móviles pequeños
docs: actualizar guía de instalación
```

## Pull Requests

### 📋 Checklist

Antes de enviar tu PR, asegúrate de:

- [ ] El código sigue la guía de estilo
- [ ] Has probado los cambios localmente
- [ ] Has actualizado la documentación si es necesario
- [ ] No hay errores en la consola
- [ ] El build de producción funciona (`npm run build`)
- [ ] Has añadido tests si aplica

### 📝 Plantilla de PR

```markdown
## Descripción
Breve descripción de los cambios

## Tipo de cambio
- [ ] Bug fix
- [ ] Nueva característica
- [ ] Breaking change
- [ ] Documentación

## ¿Cómo se ha probado?
Describe las pruebas realizadas

## Screenshots (si aplica)
Añade capturas de pantalla

## Checklist
- [ ] Mi código sigue el estilo del proyecto
- [ ] He realizado auto-review
- [ ] He comentado código complejo
- [ ] He actualizado la documentación
- [ ] Mis cambios no generan warnings
```

## 🎯 Áreas de Contribución Prioritarias

Actualmente buscamos ayuda en:

1. **Accesibilidad** - Mejorar ARIA labels y navegación por teclado
2. **Performance** - Optimización de imágenes y lazy loading
3. **Internacionalización** - Soporte para múltiples idiomas
4. **Testing** - Añadir tests unitarios y de integración
5. **Documentación** - Mejorar ejemplos y guías

## 📞 Contacto

Si tienes preguntas:
- Abre un [issue](https://github.com/FranGoroso/portfolio/issues)
- Envía un email a contacto@frangoroso.com
- Conecta en [LinkedIn](https://www.linkedin.com/in/francisco-goroso-609796266/)

---

¡Gracias por contribuir! 🎉
