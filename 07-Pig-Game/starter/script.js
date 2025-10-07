'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const scoreP0 = document.querySelector('#score--0');
const scoreP1 = document.querySelector('#score--1');
const currentScoreP0 = document.querySelector('#current--0');
const currentScoreP1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldPoints = document.querySelector('.btn--hold');

//starting condition
scoreP0.textContent = 0;
scoreP1.textContent = 0;
dice.classList.add('hidden');

let currentScore = 0;

//ROLL DICE

btnRollDice.addEventListener('click', rollDice);

function rollDice() {
  const roll = Math.trunc(Math.random() * 6) + 1;

  dice.classList.remove('hidden');
  dice.src = `dice-${roll}.png`;

  //check for rolled 1
  if (roll !== 1) {
    //add to current score
    currentScore += roll;
    currentScoreP0.textContent = currentScore; // CHANGE LATER
  } else {
    //switch  to player 2
  }
}
