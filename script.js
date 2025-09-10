// @ts-nocheck
/**toggle icon navbar */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/**scrool sections active link */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /***========= stcky navbar=====*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".homme-contente, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".homme-img, .services-container,.Portofolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".homme-contente h1, .about-image", { origin: "left" });
ScrollReveal().reveal(".homme-contente p, .about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Développeur web", "Designer", "Hackeur"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
