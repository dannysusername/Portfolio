const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const navLinks = document.querySelector(".nav-links");

function closeMenu() {
  nav.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}

if (burger && nav) {
  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu after tapping a link, pressing Escape, or returning to desktop.
  navLinks?.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) closeMenu();
  });
}

function addBoxShadow(id) {
  const element = document.getElementById(id);
  if (element) element.style.boxShadow = "0px 0px 5px 1.5px rgba(0, 0, 0, 0.2)";
}

function removeBoxShadow(id) {
  const element = document.getElementById(id);
  if (element) element.style.boxShadow = "";
}
