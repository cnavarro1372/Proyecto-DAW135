document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todas las imágenes con la clase premio-img
    const premioImages = document.querySelectorAll('.img');
    
    // Añade un evento de clic a cada imagen
    premioImages.forEach(img => {
        img.addEventListener('click', function() {
            // Alterna la clase expanded al hacer clic
            img.classList.toggle('expanded');
        });
    });
});