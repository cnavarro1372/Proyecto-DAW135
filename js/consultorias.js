
window.addEventListener('load',()=>{
   
    var app = document.getElementById('writer');
    var typewriter = new Typewriter(app, {
        loop: true
    });
    typewriter.typeString('¡Potencia tu empresa con empleados mas capacitados!')
        .pauseFor(2500)
        .deleteAll()
        .pauseFor(2500)
        .start();

        var acc = document.getElementsByClassName("accordion-p");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");
        
            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }
})