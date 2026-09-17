// Menú hamburguesa (responsive)
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.toggle("hidden");
    mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
    mobileMenuButton.setAttribute(
      "aria-label",
      isOpen ? "Cerrar menú" : "Abrir menú"
    );
  });
}

// Modo noche y día
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    themeToggle.setAttribute("aria-pressed", String(isDark));
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// Navegación por anclas sin "#" en la barra de URL
document.querySelectorAll("nav a[href^='#'], #mobile-menu a[href^='#']").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const sectionId = link.getAttribute("href").replace("#", "");
    const el = document.getElementById(sectionId);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, null, " ");
    }

    // En móvil, cierra el menú tras elegir sección
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
      if (mobileMenuButton) {
        mobileMenuButton.setAttribute("aria-expanded", "false");
        mobileMenuButton.setAttribute("aria-label", "Abrir menú");
      }
    }
  });
});

// M.A.F.S. al inicio sin "#"
const logo = document.getElementById("logo");
if (logo) {
  logo.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, null, " ");
  });
}

// Scrollspy: resalta la sección visible en la barra de navegación
const sectionLinks = [
  ...document.querySelectorAll("nav a[href^='#'], #mobile-menu a[href^='#']"),
];
const sections = sectionLinks
  .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        );

      const activeId = visible.length > 0 ? visible[0].target.id : null;

      sectionLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeId}`;
        if (isActive) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

// Accesibilidad: el toggle de tema arranca reflejando el estado real
if (themeToggle) {
  themeToggle.setAttribute(
    "aria-pressed",
    String(document.documentElement.classList.contains("dark"))
  );
}