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