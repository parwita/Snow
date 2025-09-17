var $J = jQuery.noConflict();
$J(document).ready(function () {
  "use strict";
  $J("[data-vbg]").youtube_background();
});

// Menu Functionality
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const lines = menuBtn.querySelectorAll("span");

let isOpen = false;

menuBtn.addEventListener("click", () => {
  // Toggle menu
  if (mobileMenu.classList.contains("max-h-0")) {
    mobileMenu.classList.remove("max-h-0");
    mobileMenu.classList.add("max-h-screen");
  } else {
    mobileMenu.classList.remove("max-h-screen");
    mobileMenu.classList.add("max-h-0");
  }

  // Animate hamburger to X
  isOpen = !isOpen;
  if (isOpen) {
    lines[0].classList.add("rotate-45", "translate-y-[13px]");
    lines[1].classList.add("opacity-0");
    lines[2].classList.add("-rotate-45", "-translate-y-[13px]");
  } else {
    lines[0].classList.remove("rotate-45", "translate-y-[13px]");
    lines[1].classList.remove("opacity-0");
    lines[2].classList.remove("-rotate-45", "-translate-y-[13px]");
  }
});

// Hero Animation
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hero-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-12", "translate-x-[-3rem]");
          entry.target.classList.add("opacity-100", "translate-y-0", "translate-x-0");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});
