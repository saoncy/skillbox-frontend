(() => {
  const GAME_TIME = 60;
  let cardsOnTable = [];
  let pairsFound = 0;
  let intervalID = null;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  function startTimer() {
    if (!intervalID) {
      intervalID = setInterval(runTimer, 1000);
    } else {
      stopTimer();
      startTimer();
    }
  }

  function runTimer() {
    let timer = document.getElementById('timer');
    timer.textContent = parseInt(timer.textContent) - 1;
    if (parseInt(timer.textContent) == 0) stopTimer();
  }

  function stopTimer() {
    clearInterval(intervalID);
    intervalID = null;
  }


  function createGameSizeForm() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const inputText = document.createElement('span');
    const buttonWrapper = document.createElement('div');
    const button = document.createElement('button');

    form.classList.add('input-group', 'mb-3', 'mt-3');
    form.style.width = '800px'
    form.style.marginRight = 'auto';
    form.style.marginLeft = 'auto';
    inputText.classList.add('input-group-text', 'bg-success', 'text-white');
    inputText.textContent = 'Карточек по вертикали/горизонтали:';
    input.classList.add('form-control');
    input.placeholder = '(от 2 до 10)';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-success');
    button.setAttribute('id', 'submit');
    button.textContent = 'Начать игру';

    buttonWrapper.append(button);
    form.append(inputText);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button,
    };
  }

  function createCardsList() {
    const cardsList = document.createElement('div');
    cardsList.classList.add('d-flex', 'justify-content-between', 'flex-wrap');
    cardsList.setAttribute('id', 'cards');
    return cardsList;
  }


  function createCard(value, id, cardsInRow) {
    const card = document.createElement('div');
    const cardBody = document.createElement('div');
    let cardIndex;

    card.classList.add('card', 'mb-2');
    card.setAttribute('id', `${value}${id}`);
    card.style.flexBasis = `calc(${100 / cardsInRow}% - 0.5rem)`
    card.style.height = '100px';
    cardBody.classList.add('card-body', 'text-center', 'align-middle', 'fs-2');
    cardBody.textContent = value;
    cardBody.style.visibility = 'hidden';

    card.append(cardBody);

    card.addEventListener('click', () => {
      cardsOnTable.forEach((el, index) => {
        if (el.card == card && el.opened == false) {
          cardBody.style.visibility = 'visible';
          el.opened = true;
          cardIndex = index;
        }
      });

      for (let i = 0; i < cardsOnTable.length; i++) {
        if (cardsOnTable[cardIndex].cardBody.textContent == cardsOnTable[i].cardBody.textContent
          && cardsOnTable[i].opened && cardIndex != i
          && !cardsOnTable[i].found && !cardsOnTable[cardIndex].found) {
            pairsFound++;
            cardsOnTable[i].found = true;
            cardsOnTable[cardIndex].found = true;
            cardsOnTable[i].card.classList.add('bg-success', 'text-white');
            cardsOnTable[cardIndex].card.classList.add('bg-success', 'text-white');
            cardsOnTable[i].card.style.pointerEvents = 'none'
            cardsOnTable[cardIndex].card.style.pointerEvents = 'none'
        }
        if (cardsOnTable[cardIndex].cardBody.textContent != cardsOnTable[i].cardBody.textContent
          && cardsOnTable[i].opened && !cardsOnTable[i].found) {
            document.getElementById('cards').style.pointerEvents = 'none';
            cardsOnTable[cardIndex].opened = false;
            cardsOnTable[i].opened = false;
            setTimeout(() => {
              cardsOnTable[cardIndex],cardBody.style.visibility = 'hidden';
              cardsOnTable[i].cardBody.style.visibility = 'hidden';
              document.getElementById('cards').style.pointerEvents = 'auto';
            }, 500);
        }
      }

      if (pairsFound == cardsOnTable.length / 2) {
        stopTimer();
        document.getElementById('submit').disabled = false;
        let playAgainBtn = document.createElement('button');
        playAgainBtn.classList.add('btn', 'btn-danger', 'd-block', 'mt-4', 'fs-3', 'p-2');
        playAgainBtn.style.marginLeft = 'auto';
        playAgainBtn.style.marginRight = 'auto';
        playAgainBtn.setAttribute('id', 'play-again')
        playAgainBtn.textContent = 'Сыграть еще раз';
        playAgainBtn.addEventListener('click', () => {
          document.getElementById('game').innerHTML = '';
          createConcentrationGame();
        })
        document.getElementById('game').append(playAgainBtn);
      }
      console.log(cardsOnTable)
    });

    return {
      card,
      cardBody,
      opened: false,
      found: false,
    };
  }


  function createTimer() {
    const timerHeader = document.createElement('p');
    const timer = document.createElement('p');
    const timerScale = document.createElement('p');
    const timerWraper = document.createElement('div');

    timerHeader.classList.add('fs-2', 'fw-light');
    timerHeader.textContent = 'Таймер:';
    timer.classList.add('fs-2', 'fw-semibold', 'ms-2');
    timer.setAttribute('id', 'timer');
    timerScale.classList.add('fs-5', 'ms-1', 'fw-lighter');
    timerScale.textContent = 'сек';
    timerWraper.classList.add('d-flex', 'justify-content-center', 'align-items-center');

    timerWraper.append(timerHeader);
    timerWraper.append(timer);
    timerWraper.append(timerScale);

    return {
      timerHeader,
      timer,
      timerWraper,
    };

  }

  function createConcentrationGame() {
    const container = document.getElementById('game');

    const gameSizeForm = createGameSizeForm();
    const cardsList = createCardsList();
    const timer = createTimer();

    container.append(timer.timerWraper);
    container.append(gameSizeForm.form);
    container.append(cardsList);

    gameSizeForm.form.addEventListener('submit', ev => {
      ev.preventDefault();
      gameSizeForm.button.disabled = true;
      stopTimer();
      cardsOnTable = [];
      pairsFound = 0;

      try {
        document.getElementById('play-again').remove();
      } catch (error) {
        console.log(error);
      }
      cardsList.innerHTML = '';

      let cardsInRow = parseInt(gameSizeForm.input.value);

      if (cardsInRow < 2 || cardsInRow > 10 || gameSizeForm.input.value == '' || cardsInRow % 2 != 0) {
        cardsInRow = 4;
        gameSizeForm.input.value = '4';
      }

      for (let i = 1; i <= (cardsInRow * cardsInRow / 2); i++) {
        cardsOnTable.push(createCard(i, 1, cardsInRow));
        cardsOnTable.push(createCard(i, 2, cardsInRow));
      }

      shuffle(cardsOnTable);
      console.log(cardsOnTable)
      cardsOnTable.forEach(el => {
        cardsList.append(el.card);
      });
      timer.timer.textContent = `${60 * (cardsInRow / 4)}`;
      gameSizeForm.input.value = '';
      startTimer();
    });
  }

    window.createConcentrationGame = createConcentrationGame;
})();
