
<<<<<<< HEAD
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


=======
// Header y footer para todos los htmls.
document.addEventListener("DOMContentLoaded", () => {
  const loadCarouselImage = img => {
    if (!img || !img.dataset.src) return;
    img.src = img.dataset.src;
    img.removeAttribute("data-src");
  };

  const warmCarouselImages = carousel => {
    const items = [...carousel.querySelectorAll(".carousel-item")];
    const activeIndex = Math.max(0, items.findIndex(item => item.classList.contains("active")));
    [activeIndex, activeIndex + 1].forEach(index => {
      const item = items[index % items.length];
      loadCarouselImage(item && item.querySelector("img"));
    });
  };

  const setupCarouselLazyLoading = carousel => {
    carousel.addEventListener("slide.bs.carousel", event => {
      const items = [...carousel.querySelectorAll(".carousel-item")];
      const nextIndex = event.to;

      [nextIndex, nextIndex + 1].forEach(index => {
        const item = items[index % items.length];
        loadCarouselImage(item && item.querySelector("img"));
      });
    });
  };

  fetch("/header.html")
    .then(res => res.text())
    .then(data => {
      const header = document.getElementById("header");
      if (header) header.innerHTML = data;
    });

  fetch("/footer.html?v=8")
    .then(res => res.text())
    .then(data => {
      const footer = document.getElementById("footer");
      if (footer) footer.innerHTML = data;
    });

  document.querySelectorAll("img").forEach(img => {
    img.decoding = img.decoding || "async";
  });

  document.querySelectorAll(".carousel").forEach(setupCarouselLazyLoading);

  const mainCarousel = document.querySelector("#CarruselInicio");
  if (mainCarousel && window.bootstrap) {
    warmCarouselImages(mainCarousel);
    new bootstrap.Carousel(mainCarousel, {
      interval: 3200,
      touch: true,
      pause: "hover"
    });
  }

  document.querySelectorAll(".btn-more").forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const targetCarousel = document.getElementById(targetId);

      document.querySelectorAll(".carrusel").forEach(carousel => {
        carousel.classList.remove("active");
        carousel.classList.add("hidden");
      });

      if (!targetCarousel) return;

      targetCarousel.classList.remove("hidden");
      targetCarousel.classList.add("active");

      warmCarouselImages(targetCarousel);

      if (window.bootstrap) {
        bootstrap.Carousel.getOrCreateInstance(targetCarousel, {
          interval: false,
          touch: true,
          pause: "hover"
        });
      }

      targetCarousel.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});

// Funciones para desplazamiento suave a secciones específicas.
function scrollToSectionInicio() {
  const section = document.getElementById("inicio");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

function scrollToSectionContacto() {
  const section = document.getElementById("contact");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

function scrollToSectionCasa() {
  const section = document.querySelector("#trayectoria");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "casa.html";
  }
}


>>>>>>> e91db88 (Actualizacion rc geometrica optimizado gracias a codex)



