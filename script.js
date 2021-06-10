'use strict';
let increase = document.querySelector('.increase');
let decrease = document.querySelector('.decrease');
let counter = (document.querySelector('.counter').value = 0);
let body = document.querySelector('body');

let total = 0;
increase.addEventListener('click', () => {
  total = counter += 1;

  document.querySelector('.counter').textContent = total;
});

decrease.addEventListener('click', () => {
  total = counter -= 1;
  document.querySelector('.counter').textContent = total;
});

// Waits for ArrowUp to increase the value
body.addEventListener('keydown', (tecla) => {
  if (tecla.key === 'ArrowUp') {
    total = counter += 1;
    console.log(tecla);
    document.querySelector('.counter').textContent = total;
  }
});

// EventListener waits for ArrowDown to decrease the value
body.addEventListener('keydown', (tecla) => {
  if (tecla.key === 'ArrowDown') {
    total = counter -= 1;
    console.log(tecla);
    document.querySelector('.counter').textContent = total;
  }
});
