var POS = document.documentElement;
POS.addEventListener('mousemove', e => {
  POS.style.setProperty('--x', e.clientX + 'px');
  POS.style.setProperty('--y', e.clientY + 'px');
});