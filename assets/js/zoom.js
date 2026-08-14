// Initialize medium zoom.
document.addEventListener("DOMContentLoaded", function () {
  mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for transparency.
  });
});
