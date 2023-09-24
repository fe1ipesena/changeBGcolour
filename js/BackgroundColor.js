function toggleColorMenu() {
  var colorMenu = document.getElementById("colorMenu");
  colorMenu.style.display =
    colorMenu.style.display === "none" ? "block" : "none";
}

function changeColor(color) {
  document.body.style.backgroundColor = color;
  saveBackgroundColor(color);
}

function saveBackgroundColor(hexadecimalColor) {
  localStorage.setItem("background-color", hexadecimalColor);
}

function loadColor() {
  var backgroundColor = localStorage.getItem("background-color");
  changeColor(backgroundColor);
}
