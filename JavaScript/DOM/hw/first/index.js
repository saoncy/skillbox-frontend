let timerInput = document.querySelector('.timer__input');
let timerButton = document.querySelector('.timer__button');
let timer = document.querySelector('.timer');
let intervalID = null;

function startTimer() {
  if (!intervalID) {
    timer.textContent = timerInput.value;
    intervalID = setInterval(runTimer, 1000);
  } else {
    stopTimer();
    startTimer();
  }
}

function runTimer() {
  timer.textContent = parseInt(timer.textContent) - 1;
  if (parseInt(timer.textContent) == 0) stopTimer();
}

function stopTimer() {
  clearInterval(intervalID);
  intervalID = null;
}

timerButton.addEventListener('click', startTimer);
