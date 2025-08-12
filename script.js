// Select the mobile menu toggle button and the nav menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

// Add click event to toggle the visibility of the nav links on mobile
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
