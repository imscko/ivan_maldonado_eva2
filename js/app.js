// ================================
// LÓGICA DEL FORMULARIO DE REGISTRO
// Los IDs se usan aquí en JavaScript
// para acceder a los elementos del DOM.
// ================================

document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const direccion = document.getElementById("direccion").value;
    const password = document.getElementById("password").value;

    // Referencia al elemento del mensaje
    const mensaje = document.getElementById("mensaje");

    // Limpiar clases previas de estilo
    mensaje.className = "formulario-mensaje";

    // Validación: todos los campos son obligatorios
    if (nombre === "" || correo === "" || direccion === "" || password === "") {
        mensaje.textContent = "Todos los campos son obligatorios.";
        return;
    }

    // Si pasa la validación, mostrar mensaje de éxito
    mensaje.textContent = "Formulario enviado correctamente.";
    mensaje.classList.add("formulario-mensaje-exito");
});
