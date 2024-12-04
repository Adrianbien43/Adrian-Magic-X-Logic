// Obtener el div y el elemento de audio
const box = document.querySelector('.box');
const audio = document.getElementById('music');

// Reproducir la música cuando el ratón pasa por encima del div
box.addEventListener('mouseover', function () {
  audio.play(); // Reproduce la música
});

// Detener la música cuando el ratón deja el div
box.addEventListener('mouseout', function () {
  audio.pause(); // Pausa la música
  audio.currentTime = 0; // Vuelve al inicio de la música
});
