// 1 - TOOLTIP
document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

// 2 - SHOW NAVBAR and menu WHEN SCROLL UP
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const menu_search_bar = document.getElementById('menu-search-bar');

let disableScroll = false;
// Select all nav links
const navLinks = document.querySelectorAll('#menu a:not([data-bs-toggle="dropdown"])');

window.addEventListener('scroll', function() {
    if (disableScroll) return; // Skip scroll logic if disabled
    const scrollTop = window.scrollY || document.documentElement.scrollTop; // Get the current scroll position
    // Check if scrolling down or up
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.top = "-110px"; // Scrolling down: Hide the navbar
    } else {
        navbar.style.top = "0"; // Scrolling up: Show the navbar
    }

    // This script only work for menu
    if (window.location.pathname.endsWith('menu.html')) {
        if (scrollTop < lastScrollTop && scrollTop > 380) {
            menu_search_bar.style.position = "fixed"; // Scrolling up: show the search bar
            menu_search_bar.style.top = "105px";
        } else {
            menu_search_bar.style.position = "relative"; // Scrolling down: Hide the search bar
            menu_search_bar.style.top = "0px";
        }
    }

    lastScrollTop = scrollTop; // Update lastScrollTop to the current scroll position
    console.log(navbar)
});

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        disableScroll = true; // Disable scroll event temporarily
        navbar.style.top = "-110px";
        menu_search_bar.style.top = "-400px";
        console.log(`Link clicked: ${event.target.textContent}`);
    
        // Re-enable scroll after 1000ms
        setTimeout(() => {
            disableScroll = false;
        }, 1000);
    });
  });



// 3 - BACK-TO-TOP BUTTON
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


// 4 - FUNCTION TO SEARCH MENU ITEMS
function searchMenu() {
  const searchQuery = document.getElementById('searchBar').value.toLowerCase();
  const menuItems = document.querySelectorAll('.menu-item');
  const headings = document.querySelectorAll('.menu-category');

  menuItems.forEach(item => {
      const dishName = item.querySelector('.card-body').textContent.toLowerCase();
      if (dishName.includes(searchQuery)) {
          item.style.display = 'block'; // Show item if it matches the search
      } else {
          item.style.display = 'none'; // Hide item if it doesn't match the search
      }
  });

  // Loop through each category and hide the heading if no items match
  headings.forEach(category => {
      const categoryItems = category.querySelectorAll('.menu-item');
      let visibleItems = Array.from(categoryItems).filter(item => item.style.display !== 'none');
      const heading = category.querySelector('h4');
      
      if (visibleItems.length === 0) {
          heading.style.display = 'none'; // Hide heading if no items are visible
      } else {
          heading.style.display = 'block'; // Show heading if there are visible items
      }
  });
}


