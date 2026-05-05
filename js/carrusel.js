// ================================
// INICIALIZACIÓN DEL CARRUSEL (jQuery Slick)
// ================================

// $(document).ready() es el equivalente en jQuery de
// document.addEventListener("DOMContentLoaded", ...).
// Espera a que el DOM esté completamente cargado antes de ejecutar el código.

$(document).ready(function () {

    // --- PASO 1: SELECCIONAR EL CONTENEDOR DEL CARRUSEL ---
    // $(".carrusel-slick") usa jQuery para seleccionar el div con la clase "carrusel-slick".
    // El signo $ es un atajo de jQuery. Lo que está dentro de las comillas es un selector CSS.

    // --- PASO 2: LLAMAR AL MÉTODO .slick() ---
    // .slick() es un método que viene del plugin Slick Carousel.
    // Convierte cualquier contenedor con hijos <div> en un carrusel interactivo.
    // Le pasamos un objeto {} con las opciones de configuración.

    $(".carrusel-slick").slick({

        // --- OPCIONES DE COMPORTAMIENTO ---

        // autoplay: el carrusel avanza solo sin que el usuario haga clic
        autoplay: true,

        // autoplaySpeed: tiempo en milisegundos entre cada transición (3 segundos)
        autoplaySpeed: 3000,

        // speed: duración en ms de la animación de transición (800ms = 0.8 segundos)
        speed: 800,

        // fade: usa una transición de desvanecimiento en lugar de deslizar
        fade: true,

        // cssEase: tipo de curva de animación CSS para la transición
        cssEase: "ease-in-out",

        // --- OPCIONES DE NAVEGACIÓN ---

        // dots: muestra puntos de navegación debajo del carrusel
        dots: true,

        // arrows: muestra flechas de navegación a los lados
        arrows: true,

        // infinite: el carrusel se repite en bucle infinito
        infinite: true,

        // pauseOnHover: pausa el autoplay cuando el mouse está encima
        pauseOnHover: true,

        // --- OPCIONES DE VISUALIZACIÓN ---

        // slidesToShow: cuántos slides se ven al mismo tiempo
        slidesToShow: 1,

        // slidesToScroll: cuántos slides se avanzan por transición
        slidesToScroll: 1,

        // adaptiveHeight: ajusta la altura del carrusel al contenido del slide activo
        adaptiveHeight: true,

        // --- RESPONSIVE: AJUSTES PARA PANTALLAS PEQUEÑAS ---
        // responsive es un array de objetos con breakpoints.
        // Cada objeto define nuevas opciones cuando la pantalla es menor al breakpoint dado.
        responsive: [
            {
                breakpoint: 768, // Si la pantalla es menor a 768px...
                settings: {
                    arrows: false, // ...ocultamos las flechas (para móvil)
                    dots: true     // ...mantenemos los puntos
                }
            }
        ]
    });
});
