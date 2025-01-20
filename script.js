const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Toggle the navigation menu on mobile when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
