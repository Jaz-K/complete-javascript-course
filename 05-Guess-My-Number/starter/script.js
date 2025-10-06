'use strict';
/* 
const message = (document.querySelector('.message').textContent =
  '🎉 Correct Number');
const score = (document.querySelector('.score').textContent = 15);
const number = (document.querySelector('.number').textContent = 10);
const input = (document.querySelector('.guess').value = 50);

console.log(message);
console.log(document.querySelector('.guess').value); */

const button = document.querySelector('.check');
const input = document.querySelector('.guess');
const message = document.querySelector('.message');
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector('.number');
const shownScore = document.querySelector('.score');
const resetButton = document.querySelector('.again');

let score = 5;
shownScore.textContent = score;
console.log('score', score);

button.addEventListener('click', sendNumber);
resetButton.addEventListener('click', resetGame);

function sendNumber() {
  const guess = Number(input.value);
  console.log('guess', guess, typeof guess);

  if (!guess) {
    message.textContent = '🛑 No Number';
  } else if (guess === secretNumber) {
    number.textContent = secretNumber;
    message.textContent = '🎉 Correct Number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 too high';
      score--;
      shownScore.textContent = score;
      console.log('score', score);
    } else {
      message.textContent = '💥 You lost the game"';
      shownScore.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 too low';
      score--;
      shownScore.textContent = score;
      console.log('score', score);
    } else {
      message.textContent = '💥 You lost the game"';
      shownScore.textContent = 0;
    }
  }
}

function resetGame() {
  console.log('lets reset the game');
}

console.log('secretNumber', secretNumber);
