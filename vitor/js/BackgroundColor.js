function changeColor(event) {
  var color = event.value;
  document.getElementsByTagName('BODY')[0].style.backgroundColor = color;
  saveBackgroundColor(color);
}

function saveBackgroundColor(hexadecimalColor) {
  localStorage.setItem("background-color", hexadecimalColor);
}

function loadColor() {
  var backgroundColor = localStorage.getItem("background-color");
  if (backgroundColor) {
    changeColor({ value: backgroundColor }); // Chama changeColor com a cor carregada
  }
}

// Chama a função loadColor quando a página for carregada para carregar a cor do localStorage
window.addEventListener("load", loadColor);
