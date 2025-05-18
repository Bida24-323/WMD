// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Example JS to enhance user interaction
  
    // Form validation
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
      feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
  
        if (!name || !email || !message) {
          alert('Please fill in all fields.');
          return;
        }
  
        alert('Thank you for your feedback, ' + name + '!');
        feedbackForm.reset();
      });
    }
  
    // Scroll to top button visibility logic (optional enhancement)
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          scrollTopBtn.style.display = 'block';
        } else {
          scrollTopBtn.style.display = 'none';
        }
      });
  
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  });
  