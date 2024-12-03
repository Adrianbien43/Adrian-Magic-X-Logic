const CONTAINER_DIVS = document.querySelectorAll('.container, .container1, .container2, .container3, .container4');

function parallaxEffect() {
  const scrollPosition = window.pageYOffset;

  CONTAINER_DIVS.forEach((div, index) => {
    let speed;

    if (index === 2 || index === 3) {
      speed = 0.018;
    } else if (index === 4 || index === 5) {
      speed = 0.016;
    } else {
      speed = 0.1;
    }

    div.style.transform = `translateY(-${scrollPosition * speed}px)`;

    const divPosition = div.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (divPosition < windowHeight - 100) {
      div.style.opacity = 1;
    } else {
      div.style.opacity = 0;
    }
  });
}

window.addEventListener('scroll', parallaxEffect);
parallaxEffect();
