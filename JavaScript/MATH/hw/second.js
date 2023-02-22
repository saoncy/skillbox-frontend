let a = 13.123456789;
let b = 13.12345;
let n = 5;

let aWithPrecision = Math.floor(a * Math.pow(10, n));
let bWithPrecision = Math.floor(b * Math.pow(10, n));

console.log('Дробные части - ', Math.floor(a % 1 * Math.pow(10, n)), ' ', Math.round(b % 1 * Math.pow(10, n)));
console.log('Исходные числа равны ', a === b);
console.log('Числа равны ', Math.floor(aWithPrecision) === bWithPrecision);
console.log('Первое число больше ', aWithPrecision > bWithPrecision)
console.log('Первое исходное число больше ', a > b)
