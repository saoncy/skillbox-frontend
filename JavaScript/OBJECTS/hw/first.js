function filterObjectByKey(objects, filterKey, value) {
  let goodObjects = [];

  for (let obj of objects){
    let keys = Object.keys(obj);
    for (let key of keys) {
      if (key === filterKey && obj[key] === value) goodObjects.push(obj);
    }
  }

  return goodObjects;
}

let objects = [
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Васильев' },
  { name: 'Пётр', surname: 'Петров' },
  { name: 'Иван', surname: 'Петров' },
];

console.log(filterObjectByKey(objects, 'name', 'Иван'));
