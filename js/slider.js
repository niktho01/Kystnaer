let currentSlide = 0;
const slides = document.querySelectorAll('.topbar-slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide hvert 10. sekund (ændre 10000 til ønsket hastighed)
setInterval(nextSlide, 10000);