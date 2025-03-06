document.querySelectorAll("tbody tr").forEach((row) => {
  row.addEventListener("mouseenter", () => {
    row.style.transform = "scale(1.02)";
    row.style.transition = "0.3s";
  });
  row.addEventListener("mouseleave", () => {
    row.style.transform = "scale(1)";
  });
});

function searchTable() {
  let input = document.getElementById("searchInput");
  let filter = input.value.toLowerCase();
  let table = document.getElementById("healthTable");
  let tr = table.getElementsByTagName("tr");

  for (let i = 1; i < tr.length; i++) {
    let tdArray = tr[i].getElementsByTagName("td");
    let found = false;

    for (let j = 0; j < tdArray.length; j++) {
      if (
        tdArray[j] &&
        tdArray[j].innerHTML.toLowerCase().indexOf(filter) > -1
      ) {
        found = true;
        break;
      }
    }

    tr[i].style.display = found ? "" : "none";
  }
}
// Get the button
const goToTopBtn = document.getElementById("goToTopBtn");

// Show or hide the button based on scroll position
window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
};

// Scroll to the top when button is clicked
goToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Auto-update the year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      const submenu = this.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle("active");
      }
    });
  });
});
