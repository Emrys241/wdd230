const imageContainers = document.querySelectorAll('[src]');
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;
      const dataSrc = image.parentElement.dataset.src;

      if (!image.getAttribute('data-loaded')) {
        image.setAttribute('src', dataSrc);
        image.onload = () => {
          image.style.opacity = 1;
          image.setAttribute('data-loaded', 'true');
        };
        image.onerror = () => {
          console.error(`Error loading image: ${dataSrc}`);
        };
      }

      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

imageContainers.forEach(container => {
  observer.observe(container);
});
