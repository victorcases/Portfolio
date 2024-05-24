document.addEventListener("DOMContentLoaded", () => {
    // Crear el elemento del cursor personalizado
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    // Actualizar la posición del cursor personalizado
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
    const links = document.querySelectorAll('a');

    // Añadir eventos para cambiar el tamaño del cursor al pasar sobre un enlace
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor--link-hover');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor--link-hover');
        });
    });
});
// Mostrar mensaje de bienvenida
const showWelcomeMessage = () => {
    alert('Welcome to my page! I know it is not the best page. But I hope to improve it soon.');
};
setTimeout(showWelcomeMessage, 1000);