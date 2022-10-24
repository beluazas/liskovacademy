// Esconder o mostrar texto de la sección programa

let readMore_btn = document.getElementById('readMore_btn');
let hideText = document.getElementById('hideText');

readMore_btn.addEventListener('click', toggleText);

function toggleText() {
  hideText.classList.toggle('showText');

  if(hideText.classList.contains('showText')) {
    readMore_btn.innerHTML = 'Ver menos'
  }
  else {
    readMore_btn.innerHTML = 'Ver más'
  }
}

// Alerta al presionar el botón de inscripción

function showAlert() {
  alert("Las inscripciones han terminado.")
}
