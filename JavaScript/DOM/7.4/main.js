let countDisplay = document.querySelector('.count-display');
let incrementButton = document.querySelector('.increment-button');

function incrementCount() {
  let displayValue = parseInt(countDisplay.textContent);
  countDisplay.textContent = displayValue + 1;
}

incrementButton.addEventListener('click', incrementCount);


// Color-block

let colorInput = document.querySelector('.color-input');
let colorBlock = document.querySelector('.color-block');
let clearButton = document.querySelector('.clear-color-button')

function changeColorBlockBackground() {
  colorBlock.style.backgroundColor = colorInput.value;
}

changeColorBlockBackground();

function clearColorBlockBackground() {
  colorBlock.style.removeProperty('background-color');
  colorInput.value = '';
}

colorInput.addEventListener('input', changeColorBlockBackground);
clearButton.addEventListener('click', clearColorBlockBackground);
