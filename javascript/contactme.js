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