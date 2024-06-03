//HACER QUE EL CAMPO NOMBRE, TELÉFONO Y EMAIL SEAN OBLIGATORIOS.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.querySelector('input[name="name"]').value.trim();
        const phone = document.querySelector('input[name="mobile"]').value.trim();
        const email = document.querySelector('input[name="email"]').value.trim();

        if (name === '' || phone === '' || email === '') {
            alert('Please fill in all required fields.');
            return;
        }
    });
});

//RESETEAR EL FORMULARIO. DARLE FUNCIONALIDAD AL BOTÓN RESET.

const resetButton = document.querySelector('input[type="reset"]');
    resetButton.addEventListener('click', function() {
        form.reset();
    });

//TRADUCTOR PÁGINA.

        function googleTranslateElementInit() {
	        new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'ca,eu,gl,es,fr,it,pt,de', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
        }
//MENÚ DESPLEGABLE

        function toggleMenu() {
            var menu = document.querySelector('.menu');
            menu.classList.toggle('show');
        }