document.addEventListener('DOMContentLoaded', () => {
  const ICON_FIRE = document.querySelector('#icon-fire');

  window.addEventListener('scroll', () => {
    const SCROLL_TOP = window.pageYOffset;

    if (ICON_FIRE) {
      ICON_FIRE.style.transform = `translateY(${SCROLL_TOP * -0.3}px)`;
    }
  });
});
