// Расстояние между двумя точками

let x1 = 10;
let y1 = 2;

let x2 = -3;
let y2 = 3;

let x = x2 - x1;
let y = y2 - y1;

let distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
console.log(distance);

// Сравнить числа с указанной точностью
let first = 0.1 + 0.2 + 0.033;
let second = 0.3334;
let eps = 0.001;

console.log('Исходные числа равны - ', first === second);
console.log('Числа равны - ', first - second < eps);
console.log('Первое число больше', first > second);
console.log('Второе число больше', second > first);


// Случайное число в интервале от n до m
let n = -100;
let m = 350;

let range = Math.abs(n - m);
let numberInRange = Math.round(Math.random() * range);
let leftBorder = Math.min(n, m);

console.log(leftBorder + numberInRange);

// Вывести отдельно целую и дробные части числа
let number = 25.667243;
let precision = 4;

console.log('Исходное число - ', number);
console.log('Целая часть - ', Math.floor(number));
console.log('Дробная часть - ', Math.round(number % 1 * Math.pow(10, precision)));
