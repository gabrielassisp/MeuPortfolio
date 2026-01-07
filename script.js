function loadHeader() {
  fetch("components/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header").innerHTML = html;
      addScrollEvents();
    });
}

function loadSection(section) {
  fetch(`pages/${section}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById(section).innerHTML = html;
    });
}

function addScrollEvents() {
  document.querySelectorAll("[data-scroll]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const target = document.getElementById(link.dataset.scroll);
      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  loadHeader();

  ["home", "sobremim", "projetos", "contato"].forEach(loadSection);
});
