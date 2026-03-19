const dropdownItems = document.querySelectorAll('.dropdown');

const closeDropdowns = () => {
  dropdownItems.forEach((item) => {
    const dropdownContent = item.querySelector('.dropdown-content');
    const trigger = item.querySelector('a');

    if (dropdownContent) {
      dropdownContent.classList.remove('active');
    }

    if (trigger) {
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
};

dropdownItems.forEach((item) => {
  const trigger = item.querySelector('a');
  const dropdownContent = item.querySelector('.dropdown-content');

  if (!trigger || !dropdownContent) {
    return;
  }

  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    const isOpen = dropdownContent.classList.contains('active');

    closeDropdowns();

    if (!isOpen) {
      dropdownContent.classList.add('active');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });

  dropdownContent.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeDropdowns();
    });
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown')) {
    closeDropdowns();
  }
});

window.addEventListener('resize', closeDropdowns);

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.3 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const chatButton = document.querySelector('.chat-button');
if (chatButton) {
  chatButton.addEventListener('click', () => {
    alert('Chat with Ani - Coming soon! 💬\n\nYou can also reach us at support@axonixit.com');
  });
}

const sectionLinks = document.querySelectorAll('a[href^="#"]');
sectionLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sectionLinks.forEach((item) => item.classList.remove('active-link'));
    if (!link.closest('.dropdown-content')) {
      link.classList.add('active-link');
    }
  });
});
