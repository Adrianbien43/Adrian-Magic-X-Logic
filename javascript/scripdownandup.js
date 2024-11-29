function updateProgressBar() {
  // Obtener el contenedor del contenido
  const CONTENT = document.documentElement;
  const SCROLL_TOP = CONTENT.scrollTop;
  const SCROLL_HEIGHT = CONTENT.scrollHeight;
  const CLIENT_HEIGHT = CONTENT.clientHeight;

  const SCROLL_PERCENTAGE = (SCROLL_TOP / (SCROLL_HEIGHT - CLIENT_HEIGHT)) * 100;

  const PROGRESSBAR = document.getElementById('progressbar');
  PROGRESSBAR.style.height = SCROLL_PERCENTAGE + '%';
}

window.addEventListener('scroll', updateProgressBar);

updateProgressBar();