function stringReverser(string) {
  let newString = [];
  for (let symb of string) {
    newString.unshift(symb);
  }

  return newString.join('');
}

console.log(stringReverser('Hello, world!'));
console.log(stringReverser('Привет, мир!'));
console.log(stringReverser('1'));
console.log(stringReverser(''));
