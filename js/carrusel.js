// ================================
// CARRUSEL DE IMÁGENES - JAVASCRIPT PURO
// ================================
// Este archivo implementa un carrusel funcional SIN librerías externas.
// Modifica dinámicamente el DOM (nodos, atributos y clases) para
// cambiar la imagen visible cuando el usuario hace clic en los botones.

// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

    // --- PASO 1: CAPTURAR ELEMENTOS DEL DOM ---
    // Obtenemos referencias a los elementos HTML que necesitamos manipular.
    var slides = document.querySelectorAll(".carrusel-slide");   // Todos los slides (NodeList)
    var btnAnterior = document.getElementById("btnAnterior");    // Botón "Anterior"
    var btnSiguiente = document.getElementById("btnSiguiente");  // Botón "Siguiente"
    var indicador = document.getElementById("carruselIndicador"); // Indicador "1 / 3"

    // Variable que guarda el índice del slide actualmente visible (empieza en 0)
    var indiceActual = 0;

    // --- PASO 2: FUNCIÓN cambiarImagen() ---
    // Esta función es el núcleo del carrusel. Modifica el DOM dinámicamente:
    // - Quita la clase "activo" de todos los slides (los oculta)
    // - Agrega la clase "activo" al slide correspondiente al nuevo índice (lo muestra)
    // - Actualiza el texto del indicador
    //
    // Parámetro: nuevoIndice (number) - el índice del slide que queremos mostrar
    function cambiarImagen(nuevoIndice) {

        // Recorremos todos los slides para quitar la clase "activo"
        // forEach ejecuta una función por cada elemento del NodeList
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove("activo");
        }

        // Actualizamos el índice actual con el nuevo valor
        indiceActual = nuevoIndice;

        // Agregamos la clase "activo" al slide que debe mostrarse
        // Esto modifica dinámicamente los atributos de clase del nodo DOM
        slides[indiceActual].classList.add("activo");

        // Actualizamos el texto del indicador (ej: "2 / 3")
        actualizarIndicador();
    }

    // --- PASO 3: FUNCIÓN actualizarIndicador() ---
    // Modifica el contenido de texto del elemento indicador en el DOM.
    // Muestra la posición actual del slide (índice + 1 porque los arrays empiezan en 0)
    function actualizarIndicador() {
        indicador.textContent = (indiceActual + 1) + " / " + slides.length;
    }

    // --- PASO 4: FUNCIÓN irAnterior() ---
    // Calcula el índice del slide anterior y llama a cambiarImagen().
    // Si estamos en el primer slide (índice 0), vuelve al último.
    function irAnterior() {
        var nuevoIndice;
        if (indiceActual === 0) {
            nuevoIndice = slides.length - 1; // Ir al último slide
        } else {
            nuevoIndice = indiceActual - 1;  // Ir al slide anterior
        }
        cambiarImagen(nuevoIndice);
    }

    // --- PASO 5: FUNCIÓN irSiguiente() ---
    // Calcula el índice del slide siguiente y llama a cambiarImagen().
    // Si estamos en el último slide, vuelve al primero (bucle infinito).
    function irSiguiente() {
        var nuevoIndice;
        if (indiceActual === slides.length - 1) {
            nuevoIndice = 0;                 // Volver al primer slide
        } else {
            nuevoIndice = indiceActual + 1;  // Ir al slide siguiente
        }
        cambiarImagen(nuevoIndice);
    }

    // --- PASO 6: ASIGNAR EVENTOS A LOS BOTONES ---
    // addEventListener conecta los clics de los botones con nuestras funciones.
    // Al hacer clic en "Anterior", se ejecuta irAnterior().
    // Al hacer clic en "Siguiente", se ejecuta irSiguiente().
    btnAnterior.addEventListener("click", irAnterior);
    btnSiguiente.addEventListener("click", irSiguiente);

    // --- PASO 7: AUTOPLAY (cambio automático cada 4 segundos) ---
    // setInterval ejecuta una función repetidamente en un intervalo de tiempo.
    // Aquí avanzamos automáticamente al siguiente slide cada 4000ms (4 segundos).
    setInterval(irSiguiente, 4000);

});
