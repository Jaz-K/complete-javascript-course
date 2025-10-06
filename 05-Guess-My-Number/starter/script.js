'use strict';

const message = (document.querySelector('.message').textContent =
  '🎉 Correct Number');
const score = (document.querySelector('.score').textContent = 15);
const number = (document.querySelector('.number').textContent = 10);
const input = (document.querySelector('.guess').value = 50);

console.log(message);
console.log(document.querySelector('.guess').value);
