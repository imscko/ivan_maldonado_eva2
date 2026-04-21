# Información del Proyecto Web

## Nombre del proyecto
GameCodes | Trucos y Claves de Videojuegos

## Descripción general
Este proyecto es una página web estática en HTML y CSS dedicada a compartir trucos y códigos secretos para videojuegos populares. Incluye secciones de inicio, trucos destacados, información del autor y enlaces a redes sociales.

## Estructura de archivos
- `index.html`: página principal con el contenido de la web.
- `style.css`: hoja de estilo CSS que define el diseño, colores y la estructura responsiva.
- `imagenes/`: carpeta que contiene los recursos gráficos, incluido el favicon `hackerman.ico`.

## Contenido principal
- `#inicio`: banner principal con el título y la propuesta de valor.
- `#trucos`: listado de trucos para los juegos `GTA San Andreas`, `GTA V`, `Age of Empires II` y `The Sims 4`.
- `#sobre-mi`: presentación personal con layout flex (texto a la izquierda, imagen a la derecha). Incluye una imagen personal del autor.
- `#redes`: enlaces a Instagram y Discord.

## Características de diseño
- Tema oscuro con acentos naranja.
- Navegación fija en el `header` para facilitar el desplazamiento.
- Diseño de tarjetas para presentar trucos y redes sociales.
- Sección "Sobre Mí" con layout `display: flex` para colocar texto e imagen lado a lado.
- La imagen en "Sobre Mí" tiene borde naranja y bordes redondeados (`border-radius`).
- Estilos responsivos para pantallas de menos de 768px (la imagen se mueve debajo del texto en móvil).

## Conceptos HTML utilizados
- **`<nav>`, `<ul>`, `<li>`, `<a>`**: menú de navegación. `<li>` organiza los elementos como lista, `<a>` los hace clicables. El CSS los convierte visualmente en botones.
- **`<article>`**: etiqueta semántica que envuelve cada tarjeta de truco. Indica contenido independiente y autocontenido.
- **Entidades HTML numéricas** (`&#128273;`, `&#127918;`, etc.): representan emojis usando su código Unicode. Ejemplo: `&#128273;` = 🔑.
- **Atributo `alt` en `<img>`**: texto alternativo que describe la imagen. Se muestra si la imagen no carga, es leído por lectores de pantalla (accesibilidad) y ayuda al SEO.
- **`display: grid`**: usado en `.trucos-grid` para organizar las tarjetas en 2 columnas. No es automático; sin CSS las tarjetas se apilan verticalmente.
- **`display: flex`**: usado en el header, nav y "Sobre Mí" para organizar elementos en fila horizontal.

## Seguridad y confidencialidad
- En este proyecto no hay `API keys`, certificados, contraseñas ni datos sensibles almacenados en el código.
- Para mantener la confidencialidad, nunca subas claves privadas ni certificados al repositorio.

## Seguridad de redes sociales en GitHub
- Es seguro incluir enlaces públicos a redes sociales en un proyecto de GitHub si solo compartes nombres de usuario o URLs públicas.
- No es recomendable subir información privada o personal sensible (como datos de contacto directo, contraseñas o documentos privados).
- Si quieres proteger tu privacidad, puedes retirar o publicar solo cuentas que uses específicamente para el proyecto.

## Cómo subir el proyecto a GitHub
1. Crea un repositorio nuevo en GitHub.
2. Si usas GitHub Desktop, arrastra la carpeta `web nueva` al cliente y sigue los pasos para publicar.
3. Si prefieres la línea de comandos y tienes Git instalado, usa estos comandos desde la carpeta del proyecto:


4. Alternativamente, sube los archivos directamente desde la interfaz web de GitHub si no tienes Git instalado.

## Registro de actualizaciones

### 13 de abril de 2026
- **Sección "Sobre Mí" actualizada**: se reorganizó con `display: flex` para mostrar texto a la izquierda e imagen a la derecha.
- **Imagen agregada en "Sobre Mí"**: se añadió un `<div class="sobre-mi-imagen">` con una etiqueta `<img>` para foto personal.
- **CSS responsivo actualizado**: en pantallas menores a 768px, la sección "Sobre Mí" cambia a `flex-direction: column` (imagen debajo del texto).
- **Truco de The Sims 4 modificado**: se cambió `+1,000 simoleones: kaching` por `Editar Sims: cas.fulleditmode`.
- **Punto faltante corregido**: se agregó un punto después de `<strong>Iván</strong>` en el texto de presentación.

## Notas finales
- El proyecto está listo para publicarse como sitio estático.
- Puedes agregar más juegos, mejorar el diseño o incluir animaciones más adelante.
- **Importante**: actualizar `src="imagenes/tu-imagen.png"` en la sección "Sobre Mí" con el nombre real del archivo de imagen.
