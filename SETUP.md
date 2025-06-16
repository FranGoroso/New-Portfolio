# Configuración del Proyecto

## Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn

## Instalación

1. Clona este repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración

### Variables de Entorno

1. Copia el archivo `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edita el archivo `.env` y configura tu clave de Formspree:
   ```
   VITE_FORM_KEY=tu_formspree_form_id
   ```

### Obtener tu Formspree Form ID

1. Ve a [Formspree](https://formspree.io)
2. Crea una cuenta o inicia sesión
3. Crea un nuevo formulario
4. Copia el Form ID (algo como "xyzabcde")
5. Pégalo en tu archivo `.env`

## Desarrollo

Ejecuta el proyecto en modo desarrollo:

```bash
npm run dev
```

## Compilación

Para compilar el proyecto para producción:

```bash
npm run build
```

## Solución de Problemas

Si recibes el error "You must provide a form key or hashid":
1. Asegúrate de haber creado el archivo `.env`
2. Verifica que la variable `VITE_FORM_KEY` esté configurada correctamente
3. Reinicia el servidor de desarrollo después de cambiar el archivo `.env`
