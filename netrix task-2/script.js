window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// Scroll animation
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  });
  cards.forEach(card => observer.observe(card));
});

// Mobile menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
if (hamburger) {
  hamburger.onclick = () => menu.classList.toggle("show");
}

// Dark mode
const toggle = document.getElementById("themeToggle");
if (toggle) {
  toggle.onclick = () => document.body.classList.toggle("dark");
}

// Form toast
const form = document.querySelector("form");
if (form) {
  form.onsubmit = e => {
    e.preventDefault();
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(()=>toast.classList.remove("show"),3000);
    form.reset();
  };
}
