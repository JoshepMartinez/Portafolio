document.getElementById("form-contacto").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Gracias por tu mensaje. Te contactaré pronto.");
    this.reset();
  });

  const video = document.getElementById('miVideo');
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

    function mostrarContenido(tipo) {
        const tecnicas = document.getElementById('tecnicas');
        const blandas = document.getElementById('blandas');

        if (tipo === 'tecnicas') {
            tecnicas.style.display = 'block';
            blandas.style.display = 'none';
        } else if (tipo === 'blandas') {
            blandas.style.display = 'block';
            tecnicas.style.display = 'none';
        }
    }