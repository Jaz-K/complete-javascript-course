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
const number = document.querySelector('.number');
const shownScore = document.querySelector('.score');
const resetButton = document.querySelector('.again');
const body = document.querySelector('body');
const highscoreShown = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
shownScore.textContent = score;
let highscore = 0;

button.addEventListener('click', sendNumber);

function sendNumber() {
  const guess = Number(input.value);

  //Whene there is no input
  if (!guess) {
    message.textContent = '🛑 No Number';

    //When player wins
  } else if (guess === secretNumber) {
    number.textContent = secretNumber;
    message.textContent = '🎉 Correct Number';
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
    }
    highscoreShown.textContent = highscore;

    //When guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 too high';
      score--;
      shownScore.textContent = score;
    } else {
      message.textContent = '💥 You lost the game"';
      shownScore.textContent = 0;
    }
    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 too low';
      score--;
      shownScore.textContent = score;
    } else {
      message.textContent = '💥 You lost the game"';
      shownScore.textContent = 0;
    }
  }
}

resetButton.addEventListener('click', resetGame);

function resetGame() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Star guessing...';
  shownScore.textContent = score;
  input.value = '';
  number.textContent = '?';
  number.style.width = '15rem';
  body.style.backgroundColor = '#222';
}

// Reset game by refreshing page
/* resetButton.addEventListener('click', refreshPage);

function refreshPage() {
  window.location.reload();
} */
