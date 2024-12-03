var POS = document.documentElement;

POS.addEventListener('mousemove', EVENT => {
  POS.style.setProperty('--x', EVENT.clientX + 'px');
  POS.style.setProperty('--y', EVENT.clientY + 'px');
});
