// Desplazamiento suave para enlaces del navbar
const enlaces = document.querySelectorAll('nav a');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
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
  if (modo === 'oscuro') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
};

aplicarTema();

toggleModo.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('modo', document.body.classList.contains('dark-mode') ? 'oscuro' : 'claro');
});

// Traducciones extendidas
const traducciones = {
  "es": {
    "inicio": "Inicio",
    "sobreMi": "Sobre Mí",
    "proyectos": "Proyectos",
    "tecnologias": "Tecnologías y Herramientas",
    "certificaciones": "Certificaciones",
    "contacto": "Contacto",
    "tituloInicio": "Bienvenido a mi Portfolio",
    "tituloSobreMi": "Conóceme",
    "tituloProyectos": "Mis Proyectos",
    "tituloTecnologias": "Tecnologías y Herramientas",
    "tituloCertificaciones": "Certificaciones",
    "tituloContacto": "Contáctame"
  },
  "en": {
    "inicio": "Home",
    "sobreMi": "About Me",
    "proyectos": "Projects",
    "tecnologias": "Technologies & Tools",
    "certificaciones": "Certifications",
    "contacto": "Contact",
    "tituloInicio": "Welcome to my Portfolio",
    "tituloSobreMi": "Get to Know Me",
    "tituloProyectos": "My Projects",
    "tituloTecnologias": "Technologies & Tools",
    "tituloCertificaciones": "Certifications",
    "tituloContacto": "Contact Me"
  }
};

const cambiarIdioma = (idioma) => {
  localStorage.setItem('idioma', idioma);
  document.querySelector('a[href="#inicio"]').textContent = traducciones[idioma].inicio;
  document.querySelector('a[href="#sobre-mi"]').textContent = traducciones[idioma].sobreMi;
  document.querySelector('a[href="#proyectos"]').textContent = traducciones[idioma].proyectos;
  document.querySelector('a[href="#tecnologias"]').textContent = traducciones[idioma].tecnologias;
  document.querySelector('a[href="#certificaciones"]').textContent = traducciones[idioma].certificaciones;
  document.querySelector('a[href="#contacto"]').textContent = traducciones[idioma].contacto;

  document.querySelector('#inicio h1').textContent = traducciones[idioma].tituloInicio;
  document.querySelector('#sobre-mi h1').textContent = traducciones[idioma].tituloSobreMi;
  document.querySelector('#proyectos h1').textContent = traducciones[idioma].tituloProyectos;
  document.querySelector('#tecnologias h1').textContent = traducciones[idioma].tituloTecnologias;
  document.querySelector('#certificaciones h1').textContent = traducciones[idioma].tituloCertificaciones;
  document.querySelector('#contacto h1').textContent = traducciones[idioma].tituloContacto;
};

// Agregar selector de idioma con localStorage
const selectorIdioma = document.createElement('select');
selectorIdioma.style.position = 'fixed';
selectorIdioma.style.top = '1rem';
selectorIdioma.style.right = '1rem';
selectorIdioma.style.zIndex = '1001';
selectorIdioma.innerHTML = '<option value="es">ES</option><option value="en">EN</option>';
document.body.appendChild(selectorIdioma);

selectorIdioma.addEventListener('change', e => {
  cambiarIdioma(e.target.value);
});

// Aplicar idioma guardado
const idiomaGuardado = localStorage.getItem('idioma') || 'es';
selectorIdioma.value = idiomaGuardado;
cambiarIdioma(idiomaGuardado);
