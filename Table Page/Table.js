document.querySelectorAll("tbody tr").forEach(row => {
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
            if (tdArray[j] && tdArray[j].innerHTML.toLowerCase().indexOf(filter) > -1) {
                found = true;
                break;
            }
        }

        tr[i].style.display = found ? "" : "none";
    }
}
