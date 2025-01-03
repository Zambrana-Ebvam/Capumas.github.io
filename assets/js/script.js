// Seleccionamos todos los enlaces con la clase "animated-link"
const links = document.querySelectorAll('.animated-link');

// Dividimos cada letra del texto en spans
links.forEach((link) => {
    const text = link.dataset.text || link.textContent; // Obtenemos el texto original
    link.innerHTML = ''; // Limpiamos el contenido del enlace

    // Creamos un span por cada letra
    text.split('').forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        link.appendChild(span);
    });
});

// Selecciona todos los enlaces que apunten a anclas (#)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el salto brusco
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Realiza el desplazamiento suave
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});



