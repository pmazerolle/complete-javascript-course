'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

console.log(btnsShowModal);

const openModal = function () {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

// Create event handler for each modal button
for (let i = 0; i < btnsShowModal.length; i++) {
	btnsShowModal[i].addEventListener('click', openModal);
}

// Create event handler for close button
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Create listener for Esc key to close modal
document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});
