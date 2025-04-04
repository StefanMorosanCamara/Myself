document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".carousel-container");
    const images = document.querySelectorAll(".carousel img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let index = 0;
    const totalImages = images.length;

    function updateCarousel() {
        container.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener("click", function () {
        index = (index - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    nextButton.addEventListener("click", function () {
        index = (index + 1) % totalImages;
        updateCarousel();
    });
});
