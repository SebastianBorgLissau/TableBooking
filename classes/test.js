

function findAntalPersoner() {
    var e = document.getElementById("seats");
    var antalpladser = e.options[e.selectedIndex].value;
    alert(antalpladser);
}