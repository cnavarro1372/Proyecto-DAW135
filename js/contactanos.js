document.getElementById('btnEnviar').addEventListener('click', function() {
    Swal.fire({
        title: "Enhorabuena!",
        text: "Formulario enviado con éxito!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false  // Oculta el botón de confirmación
    });

    setTimeout(function() {
        window.location.href = 'contactanos.html';
    }, 1000);
});
