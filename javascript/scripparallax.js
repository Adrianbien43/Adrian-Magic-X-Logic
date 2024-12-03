document.addEventListener('DOMContentLoaded', () => {
  const iconFire = document.querySelector('#icon-fire');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;

    if (iconFire) {
      iconFire.style.transform = `translateY(${scrollTop * -0.3}px)`;
    }
  });
});