function generator(n, m) {
  let range = Math.abs(n - m);
  let numberInRange = Math.round(Math.random() * range);
  let leftBorder = Math.min(n, m);
  let number = leftBorder + numberInRange;

  return number === leftBorder ? number + (number % 2 + 1) : number + (number % 2 - 1);
}

console.log(generator(0, 100));
console.log(generator(2, 5));
console.log(generator(100, -5));
console.log(generator(-3, -10));
