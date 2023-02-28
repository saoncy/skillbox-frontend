function findCard(cards, wantedCard = 'Туз') {
  console.log(`Ищем карту '${wantedCard}' в колоде.`)

  let found = false;

  for (let card of cards) {
    console.log(`Из колоды вытянута карта '${card}'.`)

    if (card === wantedCard) {
      found = true;
      break;
    }
  }

  console.log(found ?
    `В колоде найдена карта '${wantedCard}'.` :
    `В колоде нет карты '${wantedCard}'.`)
}
