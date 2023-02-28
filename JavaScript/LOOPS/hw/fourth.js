function arrayGenerator(length) {
  let array = [];
  for (let i = 1; i <= length; i++) {
    array.push(i);
  }

  return array;
}

function calendarWriter(firstDayOfWeek) {
  let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  let days = arrayGenerator(31);
  let firstDayOfMonth = daysOfWeek.indexOf(firstDayOfWeek);

  for (let i = 0; i < days.length; i++) {
    console.log(`${i + 1} января, ${daysOfWeek[(firstDayOfMonth + i) % daysOfWeek.length]}`)
  }
}

calendarWriter('Среда');
calendarWriter('Вторник');
