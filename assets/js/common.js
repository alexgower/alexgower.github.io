document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Toggle functionality for abstract / award / bibtex buttons on publication entries
  const panels = ["abstract", "award", "bibtex"];
  panels.forEach(function (name) {
    document.querySelectorAll("a." + name).forEach(function (link) {
      link.addEventListener("click", function () {
        const entry = link.closest("li") || link.parentElement.parentElement;
        panels.forEach(function (other) {
          entry.querySelectorAll("." + other + ".hidden").forEach(function (panel) {
            if (other === name) {
              panel.classList.toggle("open");
            } else {
              panel.classList.remove("open");
            }
          });
        });
      });
    });
  });
});
