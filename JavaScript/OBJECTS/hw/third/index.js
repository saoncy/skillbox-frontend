function createSelectFromObjects(array, defaultValue) {
  let data = formatArrayToCorrectFormat(array);
  let body = document.body;
  let select = document.createElement('select');
  data.forEach(obj => {
    let option = document.createElement('option');

    option.value = obj.value;
    option.innerHTML = obj.label;

    if (obj.value === defaultValue) option.selected = true;

    select.append(option);
  });

  body.append(select);
}

function formatArrayToCorrectFormat(array) {
  let newArray = [];

  if (Array.isArray(array)) {
    if (typeof(array[0]) === 'object') return array;

    array.forEach(el => {
      newArray.push({value: el, label: el});
    });
  } else {
    for (let el of Object.entries(array)) {
      newArray.push({value: el[0], label: el[1]});
    }
  }

  return newArray;
}


let arr = [1, 2, 'три', 'четыре'];
let obj = {value1: 'Значение 1', value2: 'Значение 2',};

console.log(createSelectFromObjects(arr));
console.log(createSelectFromObjects(obj));
