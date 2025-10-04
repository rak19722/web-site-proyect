
//Header y footer para todos los htmls

// Inyectar header y footer en todas las páginas
document.addEventListener("DOMContentLoaded", () => {
  fetch("/header.html")
    .then(res => res.text())
    .then(data => document.getElementById("header").innerHTML = data);

  fetch("/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data);
});






// Funciones para desplazamiento suave a secciones específicas
function scrollToSectionInicio() {
    var section = document.getElementById('inicio');
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSectionContacto() {
    var section = document.getElementById('contact');
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSectionTrayectoria() {
    var section = document.getElementById('trayectoria');
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSectionProyectos() {
    var section = document.getElementById('proyectos');
    section.scrollIntoView({ behavior: 'smooth' });
}

// Funciones específicas para "trayectoria"
function scrollToSectionResidencia(){
    var section = document.getElementById('residencia');
    section.scrollIntoView({ behavior: 'smooth'});
}

function scrollToSectionConjunto(){
    var section = document.getElementById('conjunto');
    section.scrollIntoView({ behavior: 'smooth'});
}

function scrollToSectionComercial(){
    var section = document.getElementById('comercial');
    section.scrollIntoView({ behavior: 'smooth'});
}

function scrollToSectionInter(){
    var section = document.getElementById('inter');
    section.scrollIntoView({ behavior: 'smooth'});
}

function scrollToSectionProy(){
    var section = document.getElementById('proy');
    section.scrollIntoView({ behavior: 'smooth'});
}







// botton para llevarte a nosotros desde inicio hasta nosotros

function scrollToSectionCasa() {
    // Comprobar si la sección "Nosotros" está en esta página
    const section = document.querySelector('#trayectoria');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Si no está, redirigir a "nosotros.html"
        window.location.href = 'casa.html';
    }
}


// Carrusel de la luna
const myCarouselElement = document.querySelector('#CarruselInicio');

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,  // cambia cada 2 segundos
  touch: false     // desactiva swipe en móviles
});

//carrusel de inicio


