function findCardIndex(cards, wantedCard = 'Туз') {
  console.log(`Ищем карту '${wantedCard}' в колоде.`)

  for (let index in cards) {
    let card = cards[index];
    console.log(`Из колоды вытянута карта '${card}'.`)

    if (card === wantedCard) {
      console.log(`В колоде найдена карта '${wantedCard}'.`);
      return +index;
    }
  }

  // console.log(found ?
  //   `В колоде найдена карта '${wantedCard}'.` :
  //   `В колоде нет карты '${wantedCard}'.`)

  console.log(`В колоде нет карты '${wantedCard}'`)

  return -1;
}


let myCards = ['2', 'Король', 'Туз', '5', '6', 'Король'];

// findCard(myCards);
// findCard(myCards, '5')


let aceIndex = findCardIndex(myCards);
console.log(aceIndex);
let jackIndex = findCardIndex(myCards, 'Валет');
console.log(jackIndex);
