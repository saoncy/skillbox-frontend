document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');

  let count = 0;

  function incrementCount() {
    button.textContent = count++;
  }

  incrementCount();

  button.addEventListener('click', incrementCount);
  button.style.marginTop = '1.5rem'
  button.style.padding = '.5rem 1rem'
  document.body.append(button);
});
