(function () {
  const heading = document.querySelector('.typed-heading');
  if (!heading) return;

  const text = heading.dataset.text || '';
  let i = 0;
  let started = false;

  function typeNext() {
    if (i <= text.length) {
      heading.textContent = text.slice(0, i);
      i += 1;
      setTimeout(typeNext, 25);
      return;
    }
    heading.classList.add('done');
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started) {
        started = true;
        typeNext();
        observer.disconnect();
      }
    });
  }, { threshold: 0.55 });

  observer.observe(heading);
})();