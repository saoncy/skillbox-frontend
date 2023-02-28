function arrayGenerator(n, m, count) {
  let array = [];

  let range = Math.abs(n - m);
  for (let i = 0; i < count; i++) {
    let numberInRange = Math.round(Math.random() * range);
    let leftBorder = Math.min(n, m);
    array.push(leftBorder + numberInRange);
  }

  return array;
}

console.log(arrayGenerator(0, 100, 100))
console.log(arrayGenerator(2, 5, 50))
console.log(arrayGenerator(100, -5, 70))
console.log(arrayGenerator(-3, -10, 42))
