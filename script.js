function toggleMenu(id) {
  const section = document.getElementById(id);
  section.style.display =
    section.style.display === "flex" ? "none" : "flex";
}

function showThanks() {
  alert("Thank you for contacting Rose Café.");
}
