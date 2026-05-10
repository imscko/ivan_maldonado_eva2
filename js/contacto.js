// ================================
// LÓGICA DEL FORMULARIO DE CONTACTO
// ================================
// Este archivo maneja la validación del formulario de contacto.
// Los campos requeridos son: Nombre, Email y Mensaje.
// El código está organizado en funciones modulares.

document.addEventListener("DOMContentLoaded", function () {

    // --- PASO 1: CAPTURAR LOS ELEMENTOS DEL DOM ---
    var formulario = document.getElementById("contactoForm");
    var nombre = document.getElementById("nombreContacto");
    var email = document.getElementById("emailContacto");
    var mensajeTexto = document.getElementById("mensajeContacto");
    var contador = document.getElementById("contadorCaracteres");
    var mensajeResultado = document.getElementById("mensajeContactoResult");

    // ================================================================
    // FUNCIONES MODULARES
    // ================================================================

    // --- FUNCIÓN: validarCamposVacios() ---
    // Verifica que los tres campos del formulario tengan contenido.
    // Retorna true si todos están llenos, false si alguno está vacío.
    function validarCamposVacios(valorNombre, valorEmail, valorMensaje) {
        if (valorNombre === "" || valorEmail === "" || valorMensaje === "") {
            return false;
        }
        return true;
    }

    // --- FUNCIÓN: validarEmail() ---
    // Verifica que el correo electrónico tenga un formato válido.
    // Usa la misma expresión regular que en registro.js y login.js.
    // Retorna true si es válido, false si no.
    function validarEmail(correoValor) {
        var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(correoValor);
    }

    // --- FUNCIÓN: actualizarContador() ---
    // Actualiza el contador de caracteres del textarea en tiempo real.
    // Modifica el contenido de texto del elemento contador en el DOM.
    function actualizarContador() {
        var cantidadCaracteres = mensajeTexto.value.length;
        contador.textContent = cantidadCaracteres + " caracteres";
    }

    // --- FUNCIÓN: actualizarDOM() ---
    // Actualiza un elemento del DOM para mostrar mensajes al usuario.
    function actualizarDOM(elemento, texto, esExito) {
        elemento.textContent = texto;
        elemento.className = "formulario-mensaje";
        if (esExito) {
            elemento.classList.add("formulario-mensaje-exito");
        }
    }

    // --- FUNCIÓN: limpiarFormulario() ---
    // Vacía todos los campos del formulario y resetea el contador.
    // Se ejecuta después de un envío exitoso.
    function limpiarFormulario() {
        nombre.value = "";
        email.value = "";
        mensajeTexto.value = "";
        contador.textContent = "0 caracteres";
    }

    // ================================================================
    // EVENTO INPUT - CONTADOR DE CARACTERES EN TIEMPO REAL
    // ================================================================

    // El evento "input" se dispara cada vez que el usuario escribe o borra.
    mensajeTexto.addEventListener("input", actualizarContador);

    // ================================================================
    // EVENTO SUBMIT - VALIDACIÓN COMPLETA
    // ================================================================

    formulario.addEventListener("submit", function (event) {

        // Prevenir el comportamiento por defecto (recarga de página)
        event.preventDefault();

        // Obtener los valores ingresados
        var valorNombre = nombre.value.trim();
        var valorEmail = email.value.trim();
        var valorMensaje = mensajeTexto.value.trim();

        // Validación 1: Campos vacíos
        if (!validarCamposVacios(valorNombre, valorEmail, valorMensaje)) {
            actualizarDOM(mensajeResultado, "Todos los campos son obligatorios.", false);
            return;
        }

        // Validación 2: Formato de email
        if (!validarEmail(valorEmail)) {
            actualizarDOM(mensajeResultado, "El formato del correo electrónico no es válido.", false);
            return;
        }

        // Si todo es correcto, mostrar éxito y limpiar
        actualizarDOM(mensajeResultado, "Mensaje enviado correctamente. ¡Gracias!", true);
        limpiarFormulario();
    });

});
