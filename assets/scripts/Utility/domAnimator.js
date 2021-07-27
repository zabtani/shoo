class DomAnimator {
  fade(el, speed = 60) {
    function action(el) {
      const currentOpacity = el.style.opacity;
      if (currentOpacity > 0.99) {
        clearInterval(fadeInterval);
        return;
      }
      el.style.opacity = +currentOpacity + 0.1;
    }
    el.style.opacity = 0;
    const fadeInterval = setInterval(() => {
      action(el);
    }, speed);
  }

  slideIn(el) {
    el.classList.add('slide');
  }
}
