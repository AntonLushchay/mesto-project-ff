import { initialCards } from './cards.js';

const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function createCard(card, deleteCardCallback) {
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
	const cardImage = cardElement.querySelector('.card__image');

	cardImage.src = card.link;
	cardImage.alt = card.name;
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
	placesList.append(cardElement);
});
