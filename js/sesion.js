// ================================
// SISTEMA DE SESIÓN Y BIENVENIDA
// ================================

// Este archivo se encarga de verificar si hay un usuario logueado
// y mostrar un mensaje de bienvenida personalizado en la página principal.
//
// FLUJO COMPLETO:
// 1. El usuario se registra en registro.html → se guarda en localStorage
// 2. El usuario inicia sesión en login.html → se guarda "usuarioLogueado" en localStorage
// 3. Al volver a index.html, este script lee localStorage y muestra "¡Hola! (usuario)"

document.addEventListener("DOMContentLoaded", function () {

    // --- PASO 1: LEER EL USUARIO LOGUEADO DE LOCALSTORAGE ---
    // localStorage.getItem("clave") devuelve el valor guardado, o null si no existe.
    // "usuarioLogueado" es la clave que login.js guarda cuando el login es exitoso.
    var usuarioLogueado = localStorage.getItem("usuarioLogueado");

    // --- PASO 2: OBTENER ELEMENTOS DEL DOM ---
    var barraBienvenida = document.getElementById("barraBienvenida");
    var mensajeBienvenida = document.getElementById("mensajeBienvenida");
    var cerrarBienvenida = document.getElementById("cerrarBienvenida");
    var btnRegistro = document.getElementById("btnRegistro");
    var btnLogin = document.getElementById("btnLogin");
    var btnLogout = document.getElementById("btnLogout");

    // --- PASO 3: VERIFICAR SI HAY USUARIO LOGUEADO ---
    // Si usuarioLogueado no es null (es decir, hay un usuario guardado),
    // mostramos la barra de bienvenida con su nombre.
    if (usuarioLogueado) {

        // Mostrar la barra de bienvenida
        barraBienvenida.style.display = "flex";

        // Insertar el mensaje personalizado con el nombre del usuario
        mensajeBienvenida.textContent = "¡Hola! " + usuarioLogueado + " 🎮";

        // Ocultar botones de Registro y Login (ya no los necesita)
        if (btnRegistro) btnRegistro.style.display = "none";
        if (btnLogin) btnLogin.style.display = "none";

        // Mostrar botón de Cerrar Sesión
        if (btnLogout) btnLogout.style.display = "inline-block";
    }

    // --- PASO 4: BOTÓN CERRAR BARRA DE BIENVENIDA ---
    // El botón "×" cierra la barra pero NO cierra la sesión.
    if (cerrarBienvenida) {
        cerrarBienvenida.addEventListener("click", function () {
            barraBienvenida.style.display = "none";
        });
    }

    // --- PASO 5: BOTÓN CERRAR SESIÓN ---
    // Al hacer clic en "Cerrar Sesión":
    // 1. Eliminamos "usuarioLogueado" del localStorage
    // 2. Recargamos la página para que los cambios se reflejen
    if (btnLogout) {
        btnLogout.addEventListener("click", function (event) {
            event.preventDefault(); // Evitar que el enlace "#" navegue

            // localStorage.removeItem() elimina un dato específico del almacenamiento
            localStorage.removeItem("usuarioLogueado");

            // Recargar la página: al recargar, como ya no hay usuario en localStorage,
            // la barra desaparece y los botones de login/registro vuelven a aparecer
            location.reload();
        });
    }
});
