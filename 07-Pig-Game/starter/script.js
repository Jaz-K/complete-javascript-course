'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const scoreP0 = document.querySelector('#score--0');
const scoreP1 = document.querySelector('#score--1');
// const currentScoreP0 = document.querySelector('#current--0');
// const currentScoreP1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldPoints = document.querySelector('.btn--hold');

//starting condition
scoreP0.textContent = 0;
scoreP1.textContent = 0;
dice.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
//ROLL DICE

btnRollDice.addEventListener('click', rollDice);

function rollDice() {
  if (playing) {
    const roll = Math.trunc(Math.random() * 6) + 1;
    console.log('roll', roll);
    dice.classList.remove('hidden');
    dice.src = `dice-${roll}.png`;

    //check for rolled 1
    if (roll !== 1) {
      //add to current score
      currentScore += roll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
}

function switchPlayer() {
  //switch  to player 2
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //toggles the active class from both players
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

btnHoldPoints.addEventListener('click', function () {
  if (playing) {
    // add current score to active players score
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check score is >= 100
    if (scores[activePlayer] >= 20) {
      //Finish game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});
