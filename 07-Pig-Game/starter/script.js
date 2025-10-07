'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const scoreP0 = document.querySelector('#score--0');
const scoreP1 = document.querySelector('#score--1');
const currentScoreP0 = document.querySelector('#current--0');
const currentScoreP1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');

const rollDice = document.querySelector('.btn--roll');
const holdPoints = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

//starting condition
scoreP0.textContent = 0;
scoreP1.textContent = 0;
dice.classList.add('hidden');

//ROLL DICE
