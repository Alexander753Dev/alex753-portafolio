# Alex753 Portafolio

Sitio estático en español, adaptable a móviles y listo para GitHub Pages. No requiere npm ni compilación. El diseño usa ilustraciones hechas con CSS y tipografías de Google Fonts; si no hay conexión, utiliza fuentes del sistema.

## 1. Personalízalo

Abre `config.js` con un editor de texto:

- `nombre`: tu nombre o alias. Actualmente: Alex753 Portafolio.
- `discordUsuario`: usuario para mostrar y copiar. Actualmente: AlexGamer753.
- `discordUrl`: tu enlace de invitación (`https://discord.gg/...`) o perfil (`https://discord.com/users/TU_ID`). Para obtener tu ID, activa el modo desarrollador en Discord y copia tu ID de usuario. Verifica el enlace antes de compartirlo.
- `bio`: tu presentación.
- `historia`: cómo comenzaste, qué sabes hacer y qué quieres construir.
- `proyectos`: cambia títulos, descripciones y tecnologías; añade enlaces reales. Cambia `demo` a `false` cuando sea un proyecto tuyo. Duplica un objeto para agregar más tarjetas. Categorías disponibles: `Web`, `Minecraft` y `Discord`. Estilos: `web`, `minecraft` y `discord`.

Las tarjetas originales son conceptos, no trabajos realizados. La historia inicial incluye un espacio para completar; no se inventaron clientes, experiencia ni resultados. Cuando reemplaces todos los conceptos, puedes quitar el párrafo `demo-note` de `index.html`.

Si `discordUrl` está vacío, el botón abre Discord y muestra el usuario que deben añadir. El botón Copiar usuario copia AlexGamer753; si el navegador no permite copiar, selecciona el texto para copiarlo manualmente. Para abrir directamente tu perfil, añade tu enlace con ID numérico en `discordUrl`.

Los textos de servicios y secciones se editan en `index.html`. Colores, espacios y tamaños están en `styles.css`; el color principal es `--lime`. No publiques contraseñas o tokens: este sitio y su configuración serán públicos.

## 2. Míralo

Abre `index.html` en tu navegador. Todos los archivos usan rutas relativas, por lo que funciona también bajo `usuario.github.io/nombre-repositorio/`.

### Abrir y editar en Visual Studio Code

1. Descomprime todo el ZIP en una carpeta.
2. En Visual Studio Code, ve a **Archivo → Abrir área de trabajo desde archivo…** y selecciona `Alex753-Portafolio.code-workspace`. También puedes usar **Archivo → Abrir carpeta…** y elegir la carpeta del portafolio.
3. Abre `config.js` para cambiar tu nombre, Discord, historia y proyectos; `index.html` para los textos de las secciones; y `styles.css` para el diseño.
4. Para ver los cambios automáticamente, instala la extensión **Live Server**, de **Ritwick Dey**, recomendada por el área de trabajo.
5. Haz clic derecho sobre `index.html` y selecciona **Open with Live Server**. Guarda tus cambios con **Ctrl + S** para actualizar la vista.

No necesitas instalar Node.js, Python ni ejecutar comandos. Si prefieres no instalar extensiones, abre `index.html` directamente en el navegador y recarga después de guardar.

## 3. Súbelo a GitHub Pages

1. Crea un repositorio en tu cuenta de GitHub, por ejemplo `mi-portafolio`.
2. En **Add file → Upload files**, sube el contenido de esta carpeta, con `index.html` en la raíz del repositorio. No subas el ZIP sin descomprimirlo.
3. Guarda los archivos con **Commit changes**.
4. Ve a **Settings → Pages**. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama `main`, carpeta `/ (root)` y guarda.
6. GitHub mostrará la dirección del sitio cuando termine la publicación, normalmente `https://TU_USUARIO.github.io/mi-portafolio/`.

No necesitas un dominio comprado. Si nombras el repositorio `TU_USUARIO.github.io`, la dirección será `https://TU_USUARIO.github.io/`.

## Antes de compartir

Completa tu alias, historia y Discord. Comprueba los botones, los filtros y la vista móvil. Añade solo proyectos propios o en los que hayas participado y describe tu contribución. Los presupuestos y plazos se acuerdan por Discord; no hay formularios que almacenen datos.
