let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let mainColor = rootStyles.getPropertyValue('--font-color');
console.log(mainColor);
