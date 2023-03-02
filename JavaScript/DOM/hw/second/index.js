let timeoutID = null;

(function () {
  let container = document.querySelector('.container');

  let input = document.createElement('input');
  input.classList.add('text-input');
  container.append(input);

  let h2 = document.createElement('h2');
  h2.classList.add('text');
  container.append(h2);
})();

function changeTextOnScreen() {
  clearTimeout(timeoutID);
  timeoutID = setTimeout(showText, 300);
}

function showText() {
  document.querySelector('.text').textContent = document.querySelector('.text-input').value;
}

document.querySelector('.text-input').addEventListener('input', changeTextOnScreen);
