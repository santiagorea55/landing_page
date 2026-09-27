let formulario = document.getElementById("registroForm");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let control = document.getElementById("control").value;
    let correo = document.getElementById("correo").value;
    let carrera = document.getElementById("carrera").value;
    let taller = document.getElementById("taller").value;
    let mensaje = document.getElementById("mensaje");

    if (
        nombre === "" ||
        control === "" ||
        correo === "" ||
        carrera === "" ||
        taller === ""
    ) {
        mensaje.style.color = "red";
        mensaje.textContent = "Completa todos los campos.";
    } else {
        mensaje.style.color = "green";
        mensaje.textContent = "¡Registro realizado correctamente!";
    }
});

gsap.from("#titulo", {
    duration: 2,
    opacity: 0,
    y: -30
});

gsap.from("#formulario", {
    duration: 2,
    opacity: 0,
    y: 30
});