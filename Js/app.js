// Get references to the hamburger button and the nav menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const menuLinks = navLinks.querySelectorAll('a');

// When the button is clicked, toggle the "active" class on the menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// Hide the menu when a link is clicked
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
