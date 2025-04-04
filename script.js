document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".carousel-container");
    const slides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let index = 0;
    const totalSlides = slides.length;

    function updateCarousel() {
        container.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener("click", function () {
        index = (index - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    nextButton.addEventListener("click", function () {
        index = (index + 1) % totalSlides;
        updateCarousel();
    });
});
