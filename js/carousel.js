document.addEventListener("DOMContentLoaded", function() {
    let currentImageIndex = 0;
    const images = document.querySelectorAll(".carousel a");

    function showNextImage() {
        images[currentImageIndex].style.display = "none"; // Oculta o link atual (com a imagem)
        currentImageIndex = (currentImageIndex + 1) % images.length; // Avança para o próximo link/imagem
        images[currentImageIndex].style.display = "block"; // Exibe o próximo link/imagem
    }

    setInterval(showNextImage, 3000); // Troca de imagem a cada 3 segundos
});
