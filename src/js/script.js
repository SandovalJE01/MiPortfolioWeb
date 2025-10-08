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

// Modo oscuro con localStorage
const toggleModo = document.createElement('button');
toggleModo.textContent = '🌙 / ☀️';
toggleModo.style.position = 'fixed';
toggleModo.style.bottom = '1rem';
toggleModo.style.right = '1rem';
toggleModo.style.zIndex = '1001';
document.body.appendChild(toggleModo);

const aplicarTema = () => {
  const modo = localStorage.getItem('modo');
  if (modo === 'claro') {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
};

aplicarTema();

toggleModo.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  localStorage.setItem('modo', document.body.classList.contains('light-mode') ? 'claro' : 'oscuro');
});


/*MENÚ HAMBURGUESA */
const hamburgerButton = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

if (hamburgerButton && navLinks) {
// Escuchamos el clic en el botón de hamburguesa
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
