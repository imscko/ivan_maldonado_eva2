// ================================
// LÓGICA DEL FORMULARIO DE REGISTRO
// ================================
// Este archivo maneja la validación y registro de nuevos usuarios.
// El código está organizado en funciones modulares para cumplir
// con los principios de reutilización y claridad.
//
// Estructuras de datos utilizadas:
// - Objeto: para representar a cada usuario { nombre, correo, password }
// - Arreglo (Array): para almacenar la lista de todos los inscritos

document.addEventListener("DOMContentLoaded", function () {

    // --- PASO 1: CAPTURAR LOS ELEMENTOS DEL DOM ---
    // Usamos document.getElementById() para obtener una referencia
    // a cada elemento HTML que necesitamos manipular.
    var formulario = document.getElementById("registroForm");
    var usuario = document.getElementById("usuario");
    var correo = document.getElementById("correoRegistro");
    var password = document.getElementById("passwordRegistro");
    var confirmar = document.getElementById("confirmarPassword");
    var mensaje = document.getElementById("mensajeRegistro");

    // ================================================================
    // FUNCIONES MODULARES
    // ================================================================

    // --- FUNCIÓN: validarCamposVacios() ---
    // Verifica que ningún campo obligatorio esté vacío.
    // Recibe los 4 valores como parámetros.
    // Retorna true si todos tienen contenido, false si alguno está vacío.
    function validarCamposVacios(valorUsuario, valorCorreo, valorPassword, valorConfirmar) {
        if (valorUsuario === "" || valorCorreo === "" || valorPassword === "" || valorConfirmar === "") {
            return false;
        }
        return true;
    }

    // --- FUNCIÓN: validarEmail() ---
    // Verifica que el correo electrónico tenga un formato válido.
    // Usa una expresión regular (regex) para validar el patrón.
    //
    // Desglose del regex /^[^\s@]+@[^\s@]+\.[^\s@]+$/:
    //   ^          = inicio del texto
    //   [^\s@]+    = uno o más caracteres que NO sean espacio ni @
    //   @          = el símbolo arroba (obligatorio)
    //   [^\s@]+    = uno o más caracteres que NO sean espacio ni @
    //   \.         = un punto literal (obligatorio)
    //   [^\s@]+    = uno o más caracteres que NO sean espacio ni @
    //   $          = fin del texto
    //
    // Retorna true si el formato es válido, false si no lo es.
    function validarEmail(correoValor) {
        var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(correoValor);
    }

    // --- FUNCIÓN: validarPassword() ---
    // Verifica que la contraseña cumpla con los requisitos de seguridad:
    // 1. Debe tener al menos 8 caracteres
    // 2. Debe coincidir con la confirmación
    //
    // Retorna null si no hay error, o un string con el mensaje de error.
    function validarPassword(valorPassword, valorConfirmar) {
        if (valorPassword.length < 8) {
            return "La contraseña debe tener al menos 8 caracteres.";
        }
        if (valorPassword !== valorConfirmar) {
            return "Las contraseñas no coinciden.";
        }
        return null; // Sin errores
    }

    // --- FUNCIÓN: crearObjetoUsuario() ---
    // Crea un objeto JavaScript que representa a un usuario.
    // Este es la estructura de datos que se guarda en el arreglo.
    //
    // Retorna un objeto con las propiedades: nombre, correo, password
    function crearObjetoUsuario(nombre, correoUsuario, passwordUsuario) {
        var datosUsuario = {
            nombre: nombre,
            correo: correoUsuario,
            password: passwordUsuario
        };
        return datosUsuario;
    }

    // --- FUNCIÓN: guardarUsuario() ---
    // Guarda un nuevo usuario en el arreglo (array) de inscritos.
    //
    // ESTRUCTURA DE DATOS: Arreglo (Array)
    // En localStorage guardamos un ARREGLO de objetos usuario.
    // Cada vez que alguien se registra, se agrega (push) al array.
    //
    // JSON.parse() convierte el string guardado de vuelta a un array.
    // JSON.stringify() convierte el array a string para guardarlo.
    //
    // Si no existe el arreglo todavía, se crea uno vacío con [].
    function guardarUsuario(datosUsuario) {
        // Leer el arreglo existente de localStorage (o crear uno vacío)
        var listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];

        // Agregar el nuevo usuario al final del arreglo con push()
        listaUsuarios.push(datosUsuario);

        // Guardar el arreglo actualizado en localStorage
        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
    }

    // --- FUNCIÓN: actualizarDOM() ---
    // Actualiza el contenido de un elemento del DOM para mostrar
    // mensajes de error o éxito al usuario.
    //
    // Parámetros:
    // - elemento: el nodo del DOM donde mostrar el mensaje
    // - texto: el texto del mensaje
    // - esExito: boolean, true si es mensaje de éxito, false si es error
    function actualizarDOM(elemento, texto, esExito) {
        elemento.textContent = texto;
        elemento.className = "formulario-mensaje";
        if (esExito) {
            elemento.classList.add("formulario-mensaje-exito");
        }
    }

    // ================================================================
    // EVENTO SUBMIT - VALIDACIÓN COMPLETA
    // ================================================================

    formulario.addEventListener("submit", function (event) {

        // Prevenir el comportamiento por defecto (recarga de página)
        event.preventDefault();

        // Obtener los valores ingresados por el usuario
        var valorUsuario = usuario.value.trim();
        var valorCorreo = correo.value.trim();
        var valorPassword = password.value;
        var valorConfirmar = confirmar.value;

        // Validación 1: Campos vacíos
        if (!validarCamposVacios(valorUsuario, valorCorreo, valorPassword, valorConfirmar)) {
            actualizarDOM(mensaje, "Todos los campos son obligatorios.", false);
            return;
        }

        // Validación 2: Formato de email
        if (!validarEmail(valorCorreo)) {
            actualizarDOM(mensaje, "El formato del correo electrónico no es válido.", false);
            return;
        }

        // Validación 3: Contraseña
        var errorPassword = validarPassword(valorPassword, valorConfirmar);
        if (errorPassword !== null) {
            actualizarDOM(mensaje, errorPassword, false);
            return;
        }

        // Si todas las validaciones pasan, crear el objeto usuario y guardarlo
        var datosUsuario = crearObjetoUsuario(valorUsuario, valorCorreo, valorPassword);
        guardarUsuario(datosUsuario);

        // Mostrar mensaje de éxito
        actualizarDOM(mensaje, "Registro exitoso. ¡Bienvenido, " + valorUsuario + "!", true);
    });

});
