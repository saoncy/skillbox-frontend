function initializeDocument() {
  let h1 = document.createElement('h1');
  h1.textContent = 'Список покупок';
  document.body.append(h1);

  let ol = document.createElement('ol');
  document.body.append(ol);

  let list = [
    document.createElement('li'),
    document.createElement('li'),
    document.createElement('li')
  ];
  list[0].textContent = 'Циркулярная пила';
  list[1].textContent = 'Молоко';
  list[2].textContent = 'Хлеб';

  ol.prepend(list[0]);
  ol.prepend(list[1]);
  ol.prepend(list[2]);

  let eggs = document.createElement('li');
  eggs.textContent = 'Яйца';
  list[1].before(eggs);

  let sausage = document.createElement('li');
  sausage.textContent = 'Колбаса';
  list[2].after(sausage);

  let breadBought = document.createElement('li');
  breadBought.innerHTML = '<strike>Хлеб</strike>'
  list[2].replaceWith(breadBought);

  ol.children[4].remove();
}


initializeDocument();
