function printObjectProperty(obj, propName) {
  console.log(obj[propName]);
}

let me = {
  name: 'Александр',
  surname: 'Сыромятников',
  middleName: 'Олегович',
  birthDate: {year: 1999, month: 7, day: 21},
  occupation: 'Frontend Developer',
  married: false,
};

printObjectProperty(me, 'name');
printObjectProperty(me, 'surname');
printObjectProperty(me, 'occupation');
