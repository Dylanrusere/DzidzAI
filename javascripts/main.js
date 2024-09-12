// Pre-Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".preloader");
  
    loader.classList.add("preloader_hidden");
  
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
  });

// sticky Navigation
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  
// Ham Menu
const hamMenu = document.querySelector(".menu");
const offMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offMenu.classList.toggle("active");
});

// Get all sections and nav links (main and offscreen)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".main_nav li a");
const offNavLinks = document.querySelectorAll(".offScreenMenu li a");

// Function to change active class based on scroll position
window.addEventListener("scroll", () => {
  let current = "";

  // Find the section currently in view
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 50) {
      current = section.getAttribute("id");
    }
  });

  // Remove active class from all main nav links, then add to the current one
  navLinks.forEach((link) => {
    link.classList.remove("active_nav");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active_nav");
    }
  });

  // Remove active class from all offscreen nav links, then add to the current one
  offNavLinks.forEach((link) => {
    link.classList.remove("active_nav_ham");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active_nav_ham");
    }
  });
});

