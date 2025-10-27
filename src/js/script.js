// Desplazamiento suave para enlaces del navbar
const enlaces = document.querySelectorAll('nav a');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    };
  });
});

//Modo oscuro con localStorage
const toggleModo = document.createElement('button');
toggleModo.className = 'theme-toggle';
toggleModo.setAttribute('aria-label', 'Cambiar tema de color');

//iconos de Font Awesome
toggleModo.innerHTML = `
  <i class="fa-solid fa-moon icon-moon"></i>
  <i class="fa-solid fa-sun icon-sun"></i>`;

toggleModo.style.position = 'fixed';
toggleModo.style.bottom = '1rem';
toggleModo.style.right = '1rem';
toggleModo.style.zIndex = '1001';
document.body.appendChild(toggleModo);

const aplicarTema = () => {
  const modo = localStorage.getItem('modo');
  if (modo === 'claro') {
    document.body.classList.add('light-mode');
    toggleModo.classList.add('sun-active');
  } else {
    document.body.classList.remove('light-mode');
    toggleModo.classList.remove('sun-active');
  }
};

aplicarTema();

toggleModo.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  toggleModo.classList.toggle('sun-active');

  localStorage.setItem('modo', document.body.classList.contains('light-mode') ? 'claro' : 'oscuro');
});


/*MENÚ HAMBURGUESA */
const hamburgerButton = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

if (hamburgerButton && navLinks) {

hamburgerButton.addEventListener('click', () => {
// Añadir/quitar la clase 'active' para mostrar/ocultar el menú
navLinks.classList.toggle('active');
// Añadir/quitar la clase 'active' para animar el ícono
hamburgerButton.classList.toggle('active');
// accesibilidad
const expanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
hamburgerButton.setAttribute('aria-expanded', (!expanded).toString());
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('#nav-links a').forEach(link => {
link.addEventListener('click', () => {
navLinks.classList.remove('active');
hamburgerButton.classList.remove('active');
hamburgerButton.setAttribute('aria-expanded', 'false');
});
});
};

//  LÓGICA PARA EL SLIDER DE PROYECTOS

document.addEventListener('DOMContentLoaded', () => {

  const sliders = document.querySelectorAll('.project-slider');

  sliders.forEach(slider => {
    const slides = slider.querySelectorAll('.slider-img');
    const prevBtn = slider.querySelector('.slider-btn.prev');
    const nextBtn = slider.querySelector('.slider-btn.next');
    const dotsContainer = slider.querySelector('.slider-dots');
    
    let currentSlide = 0;

    //puntos de navegación
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.classList.add('slider-dot');
      dot.setAttribute('aria-label', `Ir a imagen ${i + 1}`);
      
      if (i === 0) {
        dot.classList.add('active');
      }

      dot.addEventListener('click', () => {
        showSlide(i);
      });
      
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.slider-dot');

    //Función principal para mostrar una slide
    function showSlide(index) {
      if (index >= slides.length) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = slides.length - 1;
      } else {
        currentSlide = index;
      }

      // Ocultamos todas las imágenes y quitamos "active" de todos los dots
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));

      // Mostramos solo la imagen y el dot actual
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }

    //Event Listeners para los botones
    prevBtn.addEventListener('click', () => {
      showSlide(currentSlide - 1);
    });

    nextBtn.addEventListener('click', () => {
      showSlide(currentSlide + 1);
    });
  });
});
