(() => {
  const GAME_TIME = 60;
  let cardsOnTable = [];
  let openCardOnTable = false;
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
    document.getElementById('cards').innerHTML = '';
    document.getElementById('timer').innerHTML = GAME_TIME;

  }


  function createGameSizeForm() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const buttonWrapper = document.createElement('div');
    const button = document.createElement('button');

    form.classList.add('input-group', 'mb-3', 'mt-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите количество карточек по вертикали/горизонтали (от 2 до 10)';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Начать игру';

    buttonWrapper.append(button);
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
    cardBody.classList.add('card-body', 'text-center', 'align-middle');
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

      if (openCardOnTable) {
        for (let i = 0; i < cardsOnTable.length; i++) {
          if (cardsOnTable[cardIndex].cardBody.textContent == cardsOnTable[i].cardBody.textContent
            && cardsOnTable[i].opened && cardIndex != i
            && !cardsOnTable[i].found && !cardsOnTable[cardIndex].found) {
            cardsOnTable[i].found = true;
            cardsOnTable[cardIndex].found = true;
          }
          if (cardsOnTable[cardIndex].cardBody.textContent != cardsOnTable[i].cardBody.textContent
            && cardsOnTable[i].opened && !cardsOnTable[i].found) {
            cardsOnTable[cardIndex].opened = false;
            cardsOnTable[i].opened = false;
            setTimeout(() => {
              cardsOnTable[cardIndex],cardBody.style.visibility = 'hidden';
              cardsOnTable[i].cardBody.style.visibility = 'hidden';
            }, 700);
            openCardOnTable = false;
          }
        }
      }

      openCardOnTable = true;
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
    const timerWraper = document.createElement('div');

    timerHeader.classList.add('fs-2');
    timerHeader.textContent = 'Таймер:';
    timer.classList.add('fs-2', 'fw-bold', 'ms-2');
    timer.textContent = '60';
    timer.setAttribute('id', 'timer');
    timerWraper.classList.add('d-flex', 'justify-content-center');

    timerWraper.append(timerHeader);
    timerWraper.append(timer);

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

      cardsList.innerHTML = '';

      const cardsInRow = +gameSizeForm.input.value;
      for (let i = 1; i <= (cardsInRow * cardsInRow / 2); i++) {
        cardsOnTable.push(createCard(i, 1, cardsInRow));
        cardsOnTable.push(createCard(i, 2, cardsInRow));
      }

      shuffle(cardsOnTable);
      console.log(cardsOnTable)
      cardsOnTable.forEach(el => {
        cardsList.append(el.card);
      });
      startTimer();
    });
  }

    window.createConcentrationGame = createConcentrationGame;
})();
