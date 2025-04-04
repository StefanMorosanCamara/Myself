document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".carousel-container");
    let index = 0;
    const images = document.querySelectorAll(".carousel img");
    const totalImages = images.length;

    function nextImage() {
        index = (index + 1) % totalImages;
        container.style.transition = "transform 0.5s ease-in-out";
        container.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextImage, 3000); // Cambia cada 3 segundos
});
