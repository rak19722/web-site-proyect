
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


// ocultar carrusles inicio y solo mostrar cuando se pique el boton mostrar experiencia: 

console.log("JS cargado correctamente ✅");

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn-more");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      console.log("➡️ Click detectado en:", targetId);

      // ✅ NO tocamos intro-images
      // ✅ NO ocultamos ninguna sección

      // Oculta solo otros carruseles (para evitar que se solapen)
      document.querySelectorAll(".carrusel").forEach(c => {
        c.classList.remove("active");
        c.classList.add("hidden");
      });

      // Muestra el carrusel correspondiente
      const targetCarousel = document.getElementById(targetId);
      if (targetCarousel) {
        targetCarousel.classList.remove("hidden");
        targetCarousel.classList.add("active");
        targetCarousel.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn("⚠️ No se encontró el carrusel con id:", targetId);
      }
    });
  });
});



//arranca carrusels

  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-more");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        console.log("Click detectado en:", targetId);

        // Ocultar tarjetas
        const introSection = document.querySelector(".intro-images");
       

        // Ocultar todos los carruseles
        document.querySelectorAll(".carrusel").forEach(c => c.classList.add("hidden"));

        // Mostrar el carrusel correspondiente
        const targetCarousel = document.getElementById(targetId);
        if (targetCarousel) {
          targetCarousel.classList.remove("hidden");
          targetCarousel.scrollIntoView({ behavior: "smooth" });
        } else {
          console.warn("No se encontró el carrusel con id:", targetId);
        }
      });
    });
  });







