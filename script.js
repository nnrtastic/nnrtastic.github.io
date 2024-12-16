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
