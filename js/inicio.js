let currentIndex = 0;

function moveSlide() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    currentIndex = (currentIndex + 1) % totalSlides;
    const offset = -currentIndex * 100;
    if (currentIndex > slides.length - 1) {
        currentIndex = 0;
    }
    document.querySelector('.slider--inner').style.transform = `translateX(${offset}%)`;
}

setInterval(moveSlide, 3000);


