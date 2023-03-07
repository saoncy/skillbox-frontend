console.log(parseEmployeesData(`
Тиунов Тимофей  Сергеевич, системный архитектор
Иванов Иван Иванович , frontend-разработчик`));

function parseEmployeesData(dataString) {
  return dataString
  .split('\n').filter(line => line.trim().length > 0)
  .map(line => {
    const [fullName, occupation] = line.split(',').map(str => str.trim()).filter(text => text.length > 0);
    const [surname, name, middleName] = fullName.split(' ').map(text => text.trim()).filter(text => text.length > 0);

    return {surname, name, middleName, occupation};
  })
}
