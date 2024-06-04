document.addEventListener('DOMContentLoaded', () => {
  // Active links functionality
  const links = document.querySelectorAll(".nav-left .nav-links li, .nav-right .links li");

  if (links.length) {
      links.forEach((link) => {
          link.addEventListener("click", (e) => {
              links.forEach((link) => {
                  link.classList.remove("active");
              });
              link.classList.add("active");
          });
      });
  }

  // Hamburger menu functionality
  const hamburgerBtn = document.querySelector(".menu");
  const link = document.querySelector(".nav-right .links");
  hamburgerBtn.addEventListener("click", () => {
      link.classList.toggle("show");
  });
});
