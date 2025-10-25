
document.addEventListener('DOMContentLoaded', function () {
  const scrollElements = document.querySelectorAll('.scroll-element');

  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add('in-view');
  };

  const hideScrollElement = (element) => {
    element.classList.remove('in-view');
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 85)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });

  // Initial check
  handleScrollAnimation();
});