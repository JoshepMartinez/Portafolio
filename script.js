document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form-contacto");
  if (form) { form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("✅ Gracias por tu mensaje. Te contactaré pronto.");
      this.reset();
    });
  }
});

// Mostrar habilidades
function mostrarContenido(tipo) {
  const tecnicas = document.getElementById('tecnicas');
  const blandas = document.getElementById('blandas');
  if (tipo === 'tecnicas') {
    tecnicas.style.display = 'block';
    blandas.style.display = 'none';
  } else {
    blandas.style.display = 'block';
    tecnicas.style.display = 'none';
  }
}

function toggleMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');   // Muestra/oculta el menú
    hamburger.classList.toggle('active'); // Animación de la X
  });

  // Cierra el menú al hacer click en un enlace
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      hamburger.classList.remove('active');
    });
  });
}

toggleMenu();