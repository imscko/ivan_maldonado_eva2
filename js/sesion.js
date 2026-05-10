// ================================
// SISTEMA DE SESIÓN Y BIENVENIDA
// ================================
// Este archivo verifica si hay un usuario logueado y muestra
// un mensaje de bienvenida personalizado en la página principal.
// El código está organizado en funciones modulares.
//
// FLUJO COMPLETO:
// 1. El usuario se registra en registro.html → se guarda en el arreglo de localStorage
// 2. El usuario inicia sesión en login.html → se guarda "usuarioLogueado" en localStorage
// 3. Al volver a index.html, este script lee localStorage y muestra "¡Hola! (usuario)"

document.addEventListener("DOMContentLoaded", function () {

    // --- PASO 1: CAPTURAR ELEMENTOS DEL DOM ---
    var barraBienvenida = document.getElementById("barraBienvenida");
    var mensajeBienvenida = document.getElementById("mensajeBienvenida");
    var cerrarBienvenida = document.getElementById("cerrarBienvenida");
    var btnRegistro = document.getElementById("btnRegistro");
    var btnLogin = document.getElementById("btnLogin");
    var btnLogout = document.getElementById("btnLogout");

    // ================================================================
    // FUNCIONES MODULARES
    // ================================================================

    // --- FUNCIÓN: obtenerUsuarioLogueado() ---
    // Lee el nombre del usuario logueado desde localStorage.
    // Retorna el nombre (string) o null si no hay sesión activa.
    function obtenerUsuarioLogueado() {
        return localStorage.getItem("usuarioLogueado");
    }

    // --- FUNCIÓN: mostrarBienvenida() ---
    // Muestra la barra de bienvenida con el nombre del usuario.
    // Modifica el DOM: cambia display, inserta texto, oculta/muestra botones.
    function mostrarBienvenida(nombreUsuario) {
        // Mostrar la barra de bienvenida
        barraBienvenida.style.display = "flex";

        // Insertar el mensaje personalizado
        mensajeBienvenida.textContent = "¡Hola! " + nombreUsuario + " 🎮";

        // Ocultar botones de Registro y Login
        if (btnRegistro) btnRegistro.style.display = "none";
        if (btnLogin) btnLogin.style.display = "none";

        // Mostrar botón de Cerrar Sesión
        if (btnLogout) btnLogout.style.display = "inline-block";
    }

    // --- FUNCIÓN: ocultarBarra() ---
    // Oculta la barra de bienvenida (sin cerrar la sesión).
    function ocultarBarra() {
        barraBienvenida.style.display = "none";
    }

    // --- FUNCIÓN: cerrarSesion() ---
    // Elimina la sesión activa de localStorage y recarga la página.
    // Al recargar, como ya no hay usuario logueado, la barra desaparece
    // y los botones de login/registro vuelven a aparecer.
    function cerrarSesion(event) {
        event.preventDefault(); // Evitar que el enlace "#" navegue

        // localStorage.removeItem() elimina un dato específico del almacenamiento
        localStorage.removeItem("usuarioLogueado");

        // Recargar la página
        location.reload();
    }

    // ================================================================
    // VERIFICAR SESIÓN AL CARGAR LA PÁGINA
    // ================================================================

    // Leer si hay un usuario logueado
    var usuarioLogueado = obtenerUsuarioLogueado();

    // Si hay un usuario logueado, mostrar la bienvenida
    if (usuarioLogueado) {
        mostrarBienvenida(usuarioLogueado);
    }

    // Asignar evento al botón cerrar barra (×)
    if (cerrarBienvenida) {
        cerrarBienvenida.addEventListener("click", ocultarBarra);
    }

    // Asignar evento al botón cerrar sesión
    if (btnLogout) {
        btnLogout.addEventListener("click", cerrarSesion);
    }
});
