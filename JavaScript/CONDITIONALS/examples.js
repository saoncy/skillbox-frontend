// Вычисление корней квадратного уравнения

function sqrEq(a, b, c) {
  let d = b * b - 4 * a * c;

  if (d < 0) {
    console.log('Квадратное уравнение не имеет корней\n');
  } else if (d === 0) {
    let x = -b / (2 * a);
    console.log('Квадратное уравнение имеет единственное решение: x = ' + x + '\n');
  } else {
    let dRoot = Math.sqrt(d);
    let x1 = (-b + dRoot) / (2 * a);
    let x2 = (-b - dRoot) / (2 * a);
    console.log(`Квадратное уравнение имеет два корня: x1 = ${x1}, x2 = ${x2}\n`);
  }
}

sqrEq(3, 5, 10);
sqrEq(2, 6, 4);
sqrEq(2, 4, 2);


function checkForWeekend(day) {
  switch(day) {
    case 'Понедельник':
    case 'Вторник':
    case 'Среда':
    case 'Четверг':
    case 'Пятница':
      console.log('Это будний день\n');
      break;
    case 'Суббота':
    case 'Воскресенье':
      console.log('Это выходной день\n')
      break;
    default:
      console.log('Не знаю такого дня ( ' + day + ' )\n');
  }
}

checkForWeekend('Среда');
checkForWeekend('Воскресенье');
checkForWeekend('true');
