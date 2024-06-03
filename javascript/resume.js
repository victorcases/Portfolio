// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const goTopButton = document.querySelector('.button a');

// Scroll hacia arriba suave
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

//TRADUCTOR PÁGINA.
    function googleTranslateElementInit() {
	    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'ca,eu,gl,es,fr,it,pt,de', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
        }
//MENÚ DESPLEGABLE
        function toggleMenu() {
            var menu = document.querySelector('.menu');
            menu.classList.toggle('show');
        }