'use strict';

// Buttons
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Score Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Dice Element
const diceEl = document.querySelector('.dice');
console.log(diceEl);

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing;

const init = function () {
	// Starting conditions
	// Hide dice
	diceEl.classList.add('hidden');

	// Set scores to 0
	score0El.textContent = 0;
	score1El.textContent = 0;
	scores = [0, 0];

	// Active Player
	activePlayer = 0;
	playing = true;

	// set current scores to 0
	currentScore = 0;
	current0El.textContent = 0;
	current1El.textContent = 0;

	// set active player to 0
	activePlayer = 0;
	player0El.classList.add('player--active');
	player0El.classList.remove('player--winner');
	player1El.classList.remove('player--active', 'player--winner');
};

init();

const swapPlayers = function () {
	// Reset current score
	currentScore = 0;
	document.getElementById(`current--${activePlayer}`).textContent = 0;
	// Turn goes to next player
	activePlayer = activePlayer === 0 ? 1 : 0;
	player0El.classList.toggle('player--active');
	player1El.classList.toggle('player--active');
};

// Click Roll Dice button
btnRoll.addEventListener('click', function () {
	if (playing) {
		// Generate random number between 1-6
		let diceRoll = Math.trunc(Math.random() * 6) + 1;

		// Display dice image
		diceEl.classList.remove('hidden');
		diceEl.src = `dice-${diceRoll}.png`;

		// Add up current score
		if (diceRoll !== 1) {
			// Add dice roll to current score
			currentScore += diceRoll;
			document.getElementById(`current--${activePlayer}`).textContent =
				currentScore;
		} else {
			swapPlayers();
		}
	}
});

// Click Hold button
btnHold.addEventListener('click', function () {
	console.log(
		playing &&
			Number(
				document.getElementById(`current--${activePlayer}`).textContent,
			) !== 0,
	);
	if (
		playing &&
		document.getElementById(`current--${activePlayer}`.textContent) !== '0'
	) {
		// Add current score to player score
		scores[activePlayer] += currentScore;

		document.getElementById(`score--${activePlayer}`).textContent =
			scores[activePlayer];

		// Check if player score is >= 100
		if (scores[activePlayer] >= 100) {
			playing = false;
			diceEl.classList.add('hidden');
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.add('player--winner');
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.remove('player--active');
		} else {
			swapPlayers();
		}
	}
});

// Click New Game button
btnNewGame.addEventListener('click', init);
