const menuLinks = document.querySelectorAll('.menu-entries .menu-entry > a');
const sections = document.querySelectorAll('section.section');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.8
};

const observer = new window.IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      menuLinks.forEach(link => {
        link.classList.toggle('text-white', link.getAttribute('href') === `#${entry.target.id}`);
        const line = link.querySelector('.line')
        line.classList.toggle('w-[55px]', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));
