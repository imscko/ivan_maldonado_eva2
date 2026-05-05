// ================================
// LÓGICA DEL FORMULARIO DE LOGIN
// ================================

// Esperamos a que el documento HTML esté completamente cargado.
document.addEventListener("DOMContentLoaded", function () {

    // --- PASO 1: CAPTURAR LOS ELEMENTOS DEL DOM ---
    // Usamos document.getElementById() para obtener cada elemento
    // que necesitamos del HTML, usando sus IDs.
    var formulario = document.getElementById("loginForm");      // El formulario de login
    var correo = document.getElementById("correoLogin");        // Campo de email
    var password = document.getElementById("passwordLogin");    // Campo de contraseña
    var mensaje = document.getElementById("mensajeLogin");      // Elemento donde mostramos errores/éxito

    // --- PASO 2: ESCUCHAR EL EVENTO "SUBMIT" ---
    // Cuando el usuario hace clic en "Ingresar", interceptamos el envío.
    formulario.addEventListener("submit", function (event) {

        // --- PASO 3: PREVENIR EL COMPORTAMIENTO POR DEFECTO ---
        // Evitamos que la página se recargue al enviar el formulario.
        event.preventDefault();

        // --- PASO 4: OBTENER LOS VALORES INGRESADOS ---
        // .value captura lo que el usuario escribió.
        // .trim() quita espacios al inicio y al final.
        var valorCorreo = correo.value.trim();
        var valorPassword = password.value;

        // --- PASO 5: LIMPIAR MENSAJES ANTERIORES ---
        // Reseteamos el texto y las clases CSS del mensaje.
        mensaje.textContent = "";
        mensaje.className = "formulario-mensaje";

        // --- PASO 6: VALIDAR CAMPOS OBLIGATORIOS ---
        // Si alguno de los dos campos está vacío, mostramos error.
        if (valorCorreo === "" || valorPassword === "") {
            mensaje.textContent = "Todos los campos son obligatorios.";
            return; // Detenemos aquí la ejecución
        }

        // --- PASO 7: VALIDAR FORMATO DEL EMAIL ---
        // Usamos la misma expresión regular que en el registro
        // para verificar que el email tenga formato válido.
        var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(valorCorreo)) {
            mensaje.textContent = "El formato del correo electrónico no es válido.";
            return;
        }

        // --- PASO 8: BUSCAR EL USUARIO REGISTRADO EN LOCALSTORAGE ---
        // localStorage es un almacenamiento del navegador que persiste datos
        // incluso después de cerrar la pestaña.
        //
        // En registro.js, cuando un usuario se registra exitosamente,
        // guardamos sus datos como un string JSON con la clave "usuarioRegistrado".
        //
        // Aquí recuperamos ese dato con localStorage.getItem() y lo convertimos
        // de nuevo a objeto con JSON.parse().
        var datosGuardados = localStorage.getItem("usuarioRegistrado");

        if (datosGuardados) {
            // JSON.parse() convierte el string JSON de vuelta a un objeto JavaScript
            var usuario = JSON.parse(datosGuardados);

            // --- PASO 9: VERIFICAR CREDENCIALES ---
            // Comparamos el correo y contraseña ingresados con los datos guardados.
            if (valorCorreo === usuario.correo && valorPassword === usuario.password) {

                // --- PASO 10: GUARDAR SESIÓN ACTIVA ---
                // Guardamos el nombre de usuario en localStorage con la clave "usuarioLogueado".
                // Este valor será leído por sesion.js en la página index.html
                // para mostrar la barra de bienvenida con "¡Hola! (usuario)".
                localStorage.setItem("usuarioLogueado", usuario.nombre);

                // Mostrar mensaje de éxito personalizado con el nombre del usuario
                mensaje.textContent = "¡Hola! " + usuario.nombre + " - Inicio de sesión exitoso.";
                mensaje.classList.add("formulario-mensaje-exito");

                // Redirigir a la página principal después de 2 segundos
                // setTimeout ejecuta una función después de un tiempo determinado (en ms).
                setTimeout(function () {
                    window.location.href = "index.html";
                }, 2000);

                return;
            } else {
                // Las credenciales no coinciden con las registradas
                mensaje.textContent = "Correo o contraseña incorrectos.";
                return;
            }
        }

        // --- PASO 11: SI NO HAY USUARIO REGISTRADO ---
        // Si no existe ningún dato en localStorage, no hay usuario registrado aún.
        mensaje.textContent = "No hay usuarios registrados. Regístrate primero.";
    });

});
