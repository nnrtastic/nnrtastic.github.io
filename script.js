/* tooltip */
document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

/* show navbar when scroll up */
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
// Get the current scroll position
const scrollTop = window.scrollY || document.documentElement.scrollTop;

// Check if scrolling down or up
if (scrollTop > lastScrollTop && scrollTop > 100) {
  // Scrolling down: Hide the navbar
  navbar.style.top = "-110px";
} else {
  // Scrolling up: Show the navbar
  navbar.style.top = "0";
}

// Update lastScrollTop to the current scroll position
lastScrollTop = scrollTop;
});



  // Get the button
  const backToTopButton = document.querySelector('.back-to-top');

  // Show or hide the button based on scroll position
  window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          backToTopButton.classList.add('show'); // Show button
      } else {
          backToTopButton.classList.remove('show'); // Hide button
      }
  };

  // Scroll to top when clicked
  backToTopButton.addEventListener('click', function(event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
