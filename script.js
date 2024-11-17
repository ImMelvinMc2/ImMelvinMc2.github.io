// Función para crear corazones flotantes
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';

    // Ubicación inicial aleatoria para cada corazón
    heart.style.left = Math.random() * 100 + 'vw'; // El corazón aparece en un lugar aleatorio
    heart.style.fontSize = Math.random() * 20 + 10 + 'px'; // Tamaño aleatorio del corazón

    // Añadir el corazón al cuerpo de la página
    document.body.appendChild(heart);

    // Eliminar el corazón después de un tiempo (5 segundos)
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generar corazones a intervalos regulares
setInterval(createHeart, 500);
