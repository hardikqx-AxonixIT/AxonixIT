const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.4 }
);

revealItems.forEach((item) => observer.observe(item));

const yearNode = document.getElementById('year');
if (yearNode) yearNode.textContent = new Date().getFullYear();
