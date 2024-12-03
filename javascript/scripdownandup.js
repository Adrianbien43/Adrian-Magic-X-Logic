function UPDATE_PROGRESS_BAR() {
  const content = document.documentElement;
  const scrollTop = content.scrollTop;
  const scrollHeight = content.scrollHeight;
  const clientHeight = content.clientHeight;

  const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

  const progressBar = document.getElementById('progressbar');
  progressBar.style.height = scrollPercentage + '%';
}

window.addEventListener('scroll', UPDATE_PROGRESS_BAR);

UPDATE_PROGRESS_BAR();
