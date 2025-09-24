
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





// Esconder y mostrar la barra de navegación al hacer scroll
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.getElementById("nav-bar-hide").style.top = "0";
    } else {
        document.getElementById("nav-bar-hide").style.top = "-100%";
    }

    prevScrollPos = currentScrollPos;
};

// Smooth scrolling para anclajes internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Función para alternar el menú de navegación en dispositivos móviles
function toggleMenu() {
    const menu = document.querySelector('.menu-toggle');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}


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

// Selección de miniaturas y carrusel
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImg = document.querySelector('.main_img');
let currentIndex = 0;
const visibleThumbnails = 15; // Número de miniaturas visibles a la vez

function updateThumbnails() {
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.style.display = (index >= currentIndex && index < currentIndex + visibleThumbnails) ? 'block' : 'none';
    });
}

function moveThumbnails(direction) {
    const maxIndex = thumbnails.length - visibleThumbnails;
    currentIndex = Math.max(0, Math.min(currentIndex + direction, maxIndex));
    updateThumbnails();
}

// Inicializa el carrusel mostrando los primeros 9 thumbnails
updateThumbnails();

// Añadir un evento de clic a cada miniatura
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Actualizar la imagen principal
        mainImg.src = this.src;

        // Quitar la clase activa de todas las miniaturas
        thumbnails.forEach(thumb => thumb.classList.remove('active'));

        // Añadir la clase activa a la miniatura seleccionada
        this.classList.add('active');
    });
});


// Variables para el carrusel
const slidesCarousel = document.querySelectorAll('.casa-inicio-slideshow .slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentSlideIndex = 0;
let autoSlideInterval;

// Función para mostrar un slide específico
function showSlide(index) {
    slidesCarousel[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (index + slidesCarousel.length) % slidesCarousel.length; // Asegura el índice
    slidesCarousel[currentSlideIndex].classList.add('active');
}

// Función para mostrar el siguiente slide
function showNextSlide() {
    showSlide(currentSlideIndex + 1);
}

// Función para mostrar el slide anterior
function showPrevSlide() {
    showSlide(currentSlideIndex - 1);
}

// Iniciar el desplazamiento automático
function startAutoSlide() {
    autoSlideInterval = setInterval(showNextSlide, 4000); // Cambia de imagen cada 4 segundos
}

// Detener el desplazamiento automático
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Reiniciar el desplazamiento automático
function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

// Event listeners para los botones
nextButton.addEventListener('click', () => {
    showNextSlide();
    resetAutoSlide(); // Reinicia el automático al hacer clic
});

prevButton.addEventListener('click', () => {
    showPrevSlide();
    resetAutoSlide(); // Reinicia el automático al hacer clic
});

// Inicializa el carrusel
slidesCarousel[currentSlideIndex].classList.add('active');
startAutoSlide(); // Inicia el desplazamiento automático

// Modal para mostrar imágenes en grande
const slidesModal = document.querySelectorAll('.casa-inicio-slideshow .slide'); // Reutilizamos los slides
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const caption = document.getElementById('caption');
const closeModal = document.querySelector('.close');

// Mostrar modal al hacer clic en una imagen
slidesModal.forEach((slide) => {
    slide.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el clic dispare otros eventos
        modal.style.display = 'block';
        modalImage.src = slide.src; // Carga la imagen seleccionada en el modal
        caption.textContent = slide.alt; // Muestra el texto alternativo
        stopAutoSlide(); // Detenemos el carrusel automático mientras el modal está abierto
    });
});

// Cerrar el modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    startAutoSlide(); // Reinicia el carrusel automático al cerrar el modal
});

// Cerrar el modal al hacer clic fuera de la imagen
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        startAutoSlide(); // Reinicia el carrusel automático al cerrar el modal
    }
});


//slide box

document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider-box"); // Selecciona todos los carruseles
    const modal = document.getElementById("imageModal"); // Modal
    const modalImage = document.getElementById("modalImage"); // Imagen dentro del modal
    const closeModal = document.querySelector(".close"); // Botón para cerrar el modal

    let globalInterval = null; // Intervalo único para todos los carruseles

    function stopAllSlides() {
        if (globalInterval) {
            clearInterval(globalInterval);
            globalInterval = null;
        }
    }

    function startAllSlides() {
        if (!globalInterval) {
            globalInterval = setInterval(() => {
                sliders.forEach((slider) => {
                    const sliderBox = slider.querySelector("ul");
                    const slides = slider.querySelectorAll("li");
                    const totalSlides = slides.length;
                    let currentIndex = parseInt(sliderBox.dataset.currentIndex || "0", 10);

                    currentIndex = (currentIndex + 1) % totalSlides;
                    sliderBox.style.transform = `translateX(${-currentIndex * 100}%)`;
                    sliderBox.dataset.currentIndex = currentIndex;
                });
            }, 3000); // Cambia cada 3 segundos
        }
    }

    sliders.forEach((slider) => {
        const sliderBox = slider.querySelector("ul"); // ul dentro del carrusel actual
        const slides = slider.querySelectorAll("li"); // li dentro del carrusel actual
        const prevButton = slider.querySelector("#prev"); // Botón "anterior" del carrusel actual
        const nextButton = slider.querySelector("#next"); // Botón "siguiente" del carrusel actual

        sliderBox.dataset.currentIndex = "0"; // Inicializa el índice actual para cada carrusel

        function nextSlide() {
            const totalSlides = slides.length;
            let currentIndex = parseInt(sliderBox.dataset.currentIndex || "0", 10);

            currentIndex = (currentIndex + 1) % totalSlides;
            sliderBox.style.transform = `translateX(${-currentIndex * 100}%)`;
            sliderBox.dataset.currentIndex = currentIndex;
        }

        function prevSlide() {
            const totalSlides = slides.length;
            let currentIndex = parseInt(sliderBox.dataset.currentIndex || "0", 10);

            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            sliderBox.style.transform = `translateX(${-currentIndex * 100}%)`;
            sliderBox.dataset.currentIndex = currentIndex;
        }

        // Eventos para botones
        nextButton.addEventListener("click", () => {
            stopAllSlides(); // Detén todos los carruseles
            nextSlide();
            startAllSlides(); // Reinicia todos los carruseles
        });

        prevButton.addEventListener("click", () => {
            stopAllSlides(); // Detén todos los carruseles
            prevSlide();
            startAllSlides(); // Reinicia todos los carruseles
        });

        // Evento para detener todos los carruseles al seleccionar una imagen
        slides.forEach((slide) => {
            const img = slide.querySelector("img");
            img.addEventListener("click", () => {
                stopAllSlides(); // Detén todos los carruseles
                modal.style.display = "block";
                modalImage.src = img.src; // Muestra la imagen seleccionada
            });
        });
    });

    // Cerrar el modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        modalImage.src = ""; // Limpia el src de la imagen
        startAllSlides(); // Reinicia todos los carruseles
    });

    // Cerrar el modal haciendo clic fuera de la imagen
    modal.addEventListener("click", (event) => {
        if (event.target !== modalImage) {
            modal.style.display = "none";
            modalImage.src = ""; // Limpia el src de la imagen
            startAllSlides(); // Reinicia todos los carruseles
        }
    });

    // Inicia el auto deslizamiento para todos los carruseles
    startAllSlides();
});








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



//Cuadros preinfo casas

function mostrarCasa(casa) {
    // Oculta todos los detalles primero
    document.querySelectorAll('.casa-detalles').forEach(function (detalle) {
        detalle.style.display = 'none';
    });
    // Muestra el detalle de la casa seleccionada
    const casaSeleccionada = document.getElementById(`casa-${casa}`);
    if (casaSeleccionada) {
        casaSeleccionada.style.display = 'block';
        // Opcional: Hacer scroll automático al detalle
        casaSeleccionada.scrollIntoView({ behavior: 'smooth' });
    }
}



function changeImage(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const mainImg = carousel.querySelector('.main-img');

    // Listas de imágenes por carrusel
    const imageSets = {
        "carousel-moratilla": [
            "Moratilla/0.JPG",
            "Moratilla/2.JPG",
            "Moratilla/3.JPG",
            "Moratilla/4.JPG",
            "Moratilla/5.JPG",
            "Moratilla/6.JPG",
            "Moratilla/7.JPG",
            "Moratilla/8.JPG",
            "Moratilla/9.JPG",
            "Moratilla/10.JPG"
        ],
        "carousel-luna": [
            "Venta/1.jpg", 
            "Venta/2.jpg",
            "Venta/3.jpg", 
            "Venta/4.jpg", 
            "Venta/5.jpg",
            "Venta/6.jpg", 
            "Venta/7.jpg",
            "Venta/8.jpg",
            "Venta/9.jpg",
            "Venta/10.jpg",
            "Venta/11.jpg",
            "Venta/12.jpg",
            "Venta/13.jpg",
            "Venta/14.jpg",
            "Venta/15.jpg"
        ]
    };

    // Selecciona la lista de imágenes correspondiente al carrusel
    const images = imageSets[carouselId];

    // Encuentra el índice actual
    let currentIndex = images.findIndex(src => mainImg.src.includes(src));

    // Cambiar índice según la dirección (positivo = abajo, negativo = arriba)
    currentIndex = (currentIndex + direction + images.length) % images.length;

    // Actualizar la imagen principal
    mainImg.src = images[currentIndex];
}



