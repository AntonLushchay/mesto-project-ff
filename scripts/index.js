import { initialCards } from './cards.js';

function createCard(card, deleteCardCallback) {
	const cardTemplate = document.querySelector('#card-template').content;
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
	cardElement.querySelector('.card__image').src = card.link;
	cardElement.querySelector('.card__image').alt = card.name;
	cardElement.querySelector('.card__title').textContent = card.name;

	const deleteButton = cardElement.querySelector('.card__delete-button');
	deleteButton.addEventListener('click', () => deleteCardCallback(cardElement));

	return cardElement;
}

function deleteCard(cardElement) {
	cardElement.remove();
}

initialCards.forEach((card) => {
	const cardElement = createCard(card, deleteCard);
	document.querySelector('.places__list').prepend(cardElement);
});
