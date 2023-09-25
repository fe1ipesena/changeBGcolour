document.addEventListener("DOMContentLoaded", function () {
  // Llama a la función para cargar el color al cargar la página
  loadColor();

  // Agrega un evento al botón "Trocar de cor"
  var colorButton = document.getElementById("colorButton");
  colorButton.addEventListener("click", toggleColorPicker);

  // Obtén todos los botones de color y agrega un evento a cada uno
  var colorButtons = document.querySelectorAll(".color-option");
  colorButtons.forEach(function (button) {
      button.addEventListener("click", function () {
          var color = button.style.backgroundColor;
          changeColor(color);
      });
  });
});

function changeColor(color) {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = color;
  saveBackgroundColor(color);
}

function saveBackgroundColor(hexadecimalColor) {
  localStorage.setItem("background-color", hexadecimalColor);
}

function loadColor() {
  var backgroundColor = localStorage.getItem("background-color");
  if (backgroundColor) {
      changeColor(backgroundColor);
  }
}

function toggleColorPicker() {
  var colorSelector = document.getElementById("colors");
  if (colorSelector.style.display === "none" || colorSelector.style.display === "") {
      colorSelector.style.display = "block";
  } else {
      colorSelector.style.display = "none";
  }
}
