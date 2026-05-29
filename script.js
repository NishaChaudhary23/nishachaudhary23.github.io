(function () {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const savedTheme = localStorage.getItem("theme");
  root.dataset.theme = savedTheme || "light";

  function syncToggle() {
    if (!toggle) return;
    toggle.textContent = root.dataset.theme === "dark" ? "☼" : "☾";
  }

  syncToggle();

  if (toggle) {
    toggle.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", root.dataset.theme);
      syncToggle();
    });
  }
})();
