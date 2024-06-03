//RECOGIDA DE LAS 3 IMÁGENES EN LAS CUALES SE VA A REALIZAR EL CARRUSEL.

let imagenes = [
    {
        "url": "media/primerapractica.png",
        "nombre": "Proyect 1",
        "descripcion": "My first proyect. It works by the use of HTML.",
        "link":"home.html",
    },
    {
        "url": "media/hunter.png",
        "nombre": "Proyect 2",
        "descripcion": "My second proyect. This proyect also includes CSS.",
        "link": "https://hunterboots.co.uk/",
    },
    {
        "url": "media/ultima.png",
        "nombre": "Proyect 3",
        "descripcion": "My last proyect. My favourite one 'cause it's using javascript.",
        "link":"https://www.larstornoe.com/",
    },
];

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto');
let actual = 0;

//FUNCIONABILIDAD DEL CARRUSEL

function posicionCarrusel() {
    puntos.innerHTML = "";
    for (let i = 0; i < imagenes.length; i++) {
        if (i == actual) {
            puntos.innerHTML += '<p class="bold">.</p>';
        } else {
            puntos.innerHTML += '<p>.</p>';
        }
    }
}
function actualizarCarrusel() {
    imagen.innerHTML = `<a href="${imagenes[actual].link}" target="_blank"><img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></a>`;
    texto.innerHTML = `
        <h3>${imagenes[actual].nombre}</h3>
        <p>${imagenes[actual].descripcion}</p>`;
    posicionCarrusel();
}

//FUNCIOANBILIDAD A LAS FLECHAS (DELANTE Y ATRÁS)

atras.addEventListener('click', function() {
    actual -= 1;
    if (actual == -1) {
        actual = imagenes.length - 1;
    }
    actualizarCarrusel();
});

adelante.addEventListener('click', function() {
    actual += 1;
    if (actual == imagenes.length) {
        actual = 0;
    }
    actualizarCarrusel();
});

posicionCarrusel(); 

//TRADUCTOR PÁGINA.

        function googleTranslateElementInit() {
	        new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'ca,eu,gl,es,fr,it,pt,de', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
        }
//MENÚ DESPLEGABLE

        function toggleMenu() {
            var menu = document.querySelector('.menu');
            menu.classList.toggle('show');
        }