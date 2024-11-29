window.addEventListener('scroll', function () {
  let SCROLL_POSITION = window.scrollY;

  document.querySelector('.img-background-1 img').style.transform = 'translateY(' + (SCROLL_POSITION * 0.6) + 'px)';
  document.querySelector('.img-background-2 img').style.transform = 'translateY(' + (SCROLL_POSITION * 0.4) + 'px)';
});
