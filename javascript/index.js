// Script para mostrar un mensaje de confirmación al hacer clic en un enlace de contacto
const contactLinks = document.querySelectorAll('contact-link');

contactLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const confirmed = confirm("¿Estás seguro de que quieres contactar conmigo?");
        if (!confirmed) {
            event.preventDefault(); // Evita que el enlace se siga cuando se cancela el mensaje de confirmación
        }
    });
});
