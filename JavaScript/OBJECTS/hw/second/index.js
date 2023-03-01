function createSelectFromObjects(array, defaultValue) {
  let body = document.body;
  let select = document.createElement('select');
  array.forEach(obj => {
    let option = document.createElement('option');

    option.value = obj.value;
    option.innerHTML = obj.label;

    if (obj.value === defaultValue) option.selected = true;

    select.append(option);
  });

  body.append(select);
}

let cars = [
  {value: 'volvo', label: 'Volvo'},
  {value: 'bmw', label: 'BMW'},
  {value: 'saab', label: 'SAAB'},
  {value: 'mercedes', label: 'Mercedes'},
  {value: 'audi', label: 'AUDI'},
];

createSelectFromObjects(cars, 'mercedes');
createSelectFromObjects(cars, 'saab');
createSelectFromObjects(cars, 'bmw');
