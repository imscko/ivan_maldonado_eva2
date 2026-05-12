// ================================
// LÓGICA DEL FORMULARIO DE LOGIN
// ================================
// Este archivo maneja la validación e inicio de sesión.
// Busca las credenciales ingresadas dentro del arreglo de usuarios
// registrados que se almacena en localStorage.
// El código está organizado en funciones modulares.

document.addEventListener("DOMContentLoaded", function () {

    // --- PASO 1: CAPTURAR LOS ELEMENTOS DEL DOM ---
    var formulario = document.getElementById("loginForm");
    var correo = document.getElementById("correoLogin");
    var password = document.getElementById("passwordLogin");
    var mensaje = document.getElementById("mensajeLogin");

    // ================================================================
    // FUNCIONES MODULARES
    // ================================================================

    // --- FUNCIÓN: validarCamposVacios() ---
    // Verifica que los campos de login no estén vacíos.
    // Retorna true si ambos tienen contenido, false si alguno está vacío.
    function validarCamposVacios(valorCorreo, valorPassword) {
        if (valorCorreo === "" || valorPassword === "") {
            return false;
        }
        return true;
    }

    // --- FUNCIÓN: validarEmail() ---
    // Verifica que el correo tenga formato válido y dominio válido usando regex.
    // El dominio debe tener al menos 2 caracteres y la extensión al menos 2 letras.
    // Ejemplos válidos:   usuario@gmail.com, test@correo.cl
    // Ejemplos inválidos: usuario@.com, usuario@a.s, usuario@correo.x
    // Retorna true si es válido, false si no.
    function validarEmail(correoValor) {
        var regexEmail = /^[^\s@]+@[^\s@]{2,}\.[a-zA-Z]{2,}$/;
        return regexEmail.test(correoValor);
    }

    // --- FUNCIÓN: obtenerListaUsuarios() ---
    // Lee el arreglo de usuarios registrados desde localStorage.
    // JSON.parse() convierte el string JSON de vuelta a un array.
    // Si no existe, retorna un arreglo vacío [].
    function obtenerListaUsuarios() {
        var datos = localStorage.getItem("listaUsuarios");
        if (datos) {
            return JSON.parse(datos);
        }
        return [];
    }

    // --- FUNCIÓN: buscarUsuario() ---
    // Busca dentro del arreglo de usuarios si existe uno que coincida
    // con el correo y contraseña ingresados.
    //
    // Recorre el arreglo con un bucle for, comparando cada elemento.
    // Si encuentra coincidencia, retorna el objeto usuario.
    // Si no encuentra coincidencia, retorna null.
    function buscarUsuario(listaUsuarios, valorCorreo, valorPassword) {
        for (var i = 0; i < listaUsuarios.length; i++) {
            if (listaUsuarios[i].correo === valorCorreo && listaUsuarios[i].password === valorPassword) {
                return listaUsuarios[i]; // Usuario encontrado
            }
        }
        return null; // No se encontró coincidencia
    }

    // --- FUNCIÓN: guardarSesion() ---
    // Guarda el nombre del usuario logueado en localStorage.
    // Este dato será leído por sesion.js para mostrar la barra de bienvenida.
    function guardarSesion(nombreUsuario) {
        localStorage.setItem("usuarioLogueado", nombreUsuario);
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

    // --- FUNCIÓN: redirigirAlInicio() ---
    // Redirige al usuario a la página principal después de 2 segundos.
    // setTimeout ejecuta una función después del tiempo indicado (en ms).
    function redirigirAlInicio() {
        setTimeout(function () {
            window.location.href = "index.html";
        }, 2000);
    }

    // ================================================================
    // EVENTO SUBMIT - PROCESO DE LOGIN
    // ================================================================

    formulario.addEventListener("submit", function (event) {

        // Prevenir el comportamiento por defecto (recarga de página)
        event.preventDefault();

        // Obtener los valores ingresados
        var valorCorreo = correo.value.trim();
        var valorPassword = password.value;

        // Validación 1: Campos vacíos
        if (!validarCamposVacios(valorCorreo, valorPassword)) {
            actualizarDOM(mensaje, "Todos los campos son obligatorios.", false);
            return;
        }

        // Validación 2: Formato de email
        if (!validarEmail(valorCorreo)) {
            actualizarDOM(mensaje, "El formato del correo electrónico no es válido.", false);
            return;
        }

        // Obtener el arreglo de usuarios registrados
        var listaUsuarios = obtenerListaUsuarios();

        // Verificar si hay usuarios registrados
        if (listaUsuarios.length === 0) {
            actualizarDOM(mensaje, "No hay usuarios registrados. Regístrate primero.", false);
            return;
        }

        // Buscar el usuario en el arreglo
        var usuarioEncontrado = buscarUsuario(listaUsuarios, valorCorreo, valorPassword);

        if (usuarioEncontrado) {
            // Login exitoso: guardar sesión y redirigir
            guardarSesion(usuarioEncontrado.nombre);
            actualizarDOM(mensaje, "¡Hola! " + usuarioEncontrado.nombre + " - Inicio de sesión exitoso.", true);
            redirigirAlInicio();
        } else {
            // Credenciales incorrectas
            actualizarDOM(mensaje, "Correo o contraseña incorrectos.", false);
        }
    });

});
