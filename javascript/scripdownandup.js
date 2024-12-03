function UPDATE_PROGRESS_BAR() {
  const CONTENT = document.documentElement;
  const SCROLL_TOP = CONTENT.scrollTop;
  const SCROLL_HEIGHT = CONTENT.scrollHeight;
  const CLIENT_HEIGHT = CONTENT.clientHeight;

  const SCROLL_PERCENTAGE = (SCROLL_TOP / (SCROLL_HEIGHT - CLIENT_HEIGHT)) * 100;

  const PROGRESS_BAR = document.getElementById('progressbar');
  PROGRESS_BAR.style.height = SCROLL_PERCENTAGE + '%';
}

window.addEventListener('scroll', UPDATE_PROGRESS_BAR);

UPDATE_PROGRESS_BAR();
