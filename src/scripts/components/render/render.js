// Рендеринг карточек
export function renderCards(cardsObj, cardTemplate, placesList) {
	placesList.innerHTML = '';
	cardsObj.forEach((card) => {
		const cardElement = createCard(card, cardTemplate, deleteCard, likeCard);
		placesList.append(cardElement);
	});
}

function createCard(card, cardTemplate, deleteCardCallback, likeCardCallback) {
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

	const cardTitle = cardElement.querySelector('.card__title');
	const cardImage = cardElement.querySelector('.card__image');

	const likeButton = cardElement.querySelector('.card__like-button');
	const deleteButton = cardElement.querySelector('.card__delete-button');

	cardFilling(cardTitle, cardImage, card);

	likelistener(likeButton, likeCardCallback);
	deleteCardListener(deleteButton, deleteCardCallback);

	return cardElement;
}

function deleteCard(cardElement) {
	cardElement.remove();
}

function deleteCardListener(deleteButton, deleteCardCallback) {
	deleteButton.addEventListener('click', () => deleteCardCallback(deleteButton.closest('.card')));
}

function likeCard(likeButton) {
	likeButton.classList.toggle('card__like-button_is-active');
}

function likelistener(likeButton, likeCardCallback) {
	likeButton.addEventListener('click', () => likeCardCallback(likeButton));
}

function cardFilling(cardTitle, cardImage, card) {
	cardImage.src = card.link;
	cardImage.alt = card.name;
	cardTitle.textContent = card.name;
}
