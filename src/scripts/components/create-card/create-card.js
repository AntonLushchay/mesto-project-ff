// Рендеринг карточек

export function createCard(card, cardTemplate, fillingImageTypePopupHandler) {
	const cardElement = createCardElement(cardTemplate);
	const cardImage = cardElement.querySelector('.card__image');

	cardImage.addEventListener('click', (evt) => {
		fillingImageTypePopupHandler(evt);
	});

	cardFilling(cardElement, card);
	addLikelistener(cardElement);
	addDeleteCardListener(cardElement);

	return cardElement;
}

function createCardElement(cardTemplate) {
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

	return cardElement;
}

function cardFilling(cardElement, card) {
	const cardImage = cardElement.querySelector('.card__image');
	const cardTitle = cardElement.querySelector('.card__title');

	cardImage.src = card.link;
	cardImage.alt = card.name;
	cardTitle.textContent = card.name;

	return cardElement;
}

function addLikelistener(cardElement) {
	const likeButton = cardElement.querySelector('.card__like-button');

	likeButton.addEventListener('click', () => likedCard(likeButton));
}

function likedCard(likeButton) {
	likeButton.classList.toggle('card__like-button_is-active');
}

function addDeleteCardListener(cardElement) {
	const deleteButton = cardElement.querySelector('.card__delete-button');

	deleteButton.addEventListener('click', () => deleteCard(deleteButton.closest('.card')));
}

function deleteCard(cardElement) {
	cardElement.remove();
}
