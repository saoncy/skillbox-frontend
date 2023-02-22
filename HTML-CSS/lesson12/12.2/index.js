window.addEventListener('DOMContentLoaded', () => {
  console.log(document.querySelector('.block'));
  console.log(document.querySelectorAll('.text'));

  document.querySelector('.text').style.color = 'blue';
  // document.querySelector('#text').style.backgroundColor = 'red';
  // document.querySelector('.text').style.display = 'none';

  document.querySelector('#text').classList.add('alert');
  // document.querySelector('#text').classList.remove('alert');
  // document.querySelector('#text').classList.toggle('alert');

    document.querySelectorAll('.text').forEach(el => {
      el.classList.add('alert');
    })

    console.log(document.getElementsByTagName('p'));
    console.log(document.querySelectorAll('p'));

});
