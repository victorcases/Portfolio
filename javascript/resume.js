// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const goTopButton = document.querySelector('.button a');

    // Botón para que haga scroll hacia arriba suavemente
    goTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Mostrar mensaje de bienvenida
    const showWelcomeMessage = () => {
        alert('Welcome to my resume page! Here you can watch I little resume of what I have done');
    };
    setTimeout(showWelcomeMessage, 1000);