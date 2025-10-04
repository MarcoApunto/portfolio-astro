// Ocultar hamburguesa menú (responsive)
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Modo noche y día
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });
}

// # fuera de la barra de url
document.querySelectorAll("nav a, #mobile-menu a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // 🔴 evita que el navegador meta el #

    const sectionId = link.getAttribute("href").replace("#", ""); 
    const el = document.getElementById(sectionId);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, null, " "); // limpia el # de la barra
    }
  });
});

// M.A.F.S. al inicio sin #
document.getElementById("logo").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.replaceState(null, null, " ");
});