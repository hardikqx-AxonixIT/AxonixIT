// Multi-Dropdown Functionality - Click Only
const dropdownItems = document.querySelectorAll('.dropdown');

dropdownItems.forEach((item) => {
  const link = item.querySelector('a');
  const dropdownContent = item.querySelector('.dropdown-content');

  if (link && dropdownContent) {
    // Toggle on click
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Close all other dropdowns
      dropdownItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherContent = otherItem.querySelector('.dropdown-content');
          if (otherContent) {
            otherContent.classList.remove('active');
          }
        }
      });
      // Toggle current dropdown
      dropdownContent.classList.toggle('active');
    });
  }
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    dropdownItems.forEach((item) => {
      const dropdownContent = item.querySelector('.dropdown-content');
      if (dropdownContent) {
        dropdownContent.classList.remove('active');
      }
    });
  }
});

// Close dropdown on window resize to prevent overflow
window.addEventListener('resize', () => {
  dropdownItems.forEach((item) => {
    const dropdownContent = item.querySelector('.dropdown-content');
    if (dropdownContent && dropdownContent.classList.contains('active')) {
      const rect = dropdownContent.getBoundingClientRect();
      if (rect.right > window.innerWidth || rect.left < 0) {
        dropdownContent.classList.remove('active');
      }
    }
  });
});

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

const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Chat Button Functionality
const chatButton = document.querySelector('.chat-button');
if (chatButton) {
  chatButton.addEventListener('click', () => {
    alert('Chat with Ani - Coming soon! 💬\n\nYou can also reach us at support@axonixit.com');
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Simulate AI-enabled response
      const response = `Thank you, ${name}! We have received your message: "${message}". Our team will contact you at ${email} shortly.`;

      alert(response);

      // Clear the form
      form.reset();
    });
  }
});
