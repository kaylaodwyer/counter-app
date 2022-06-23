const numberDisplay = document.querySelector("#number");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");

let number = 0;

function add() {
  number++;
  update();
}

function subtract() {
  number--;
  update();
}

function update() {
  numberDisplay.textContent = number;
}

window.addEventListener("load", update);
addButton.addEventListener("click", update);
subtractButton.addEventListener("click", update);
