// Рендеринг карточек

export function createCard(cardData, cardSettings, userId) {
	const cardElement = createCardElement(cardSettings.cardTemplate);
	const currentCardComponents = {
		cardTitle: cardElement.querySelector('.card__title'),
		cardImage: cardElement.querySelector('.card__image'),
		cardLikeButton: cardElement.querySelector('.card__like-button'),
		cardLikeCount: cardElement.querySelector('.card__like-counter'),
		deleteButton: cardElement.querySelector('.card__delete-button'),
	};

	cardFilling(currentCardComponents, cardData, userId);

	currentCardComponents.cardImage.addEventListener('click', (evt) => cardSettings.fillImageElement(evt));

	if (cardData.owner._id !== userId) {
		currentCardComponents.deleteButton.remove();
	} else {
		cardSettings.addDeleteCardlistener(currentCardComponents.deleteButton, cardData._id);
	}

	cardSettings.addLikeCardListener(currentCardComponents.cardLikeButton, cardData._id);

	return cardElement;
}

function createCardElement(cardTemplate) {
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

	return cardElement;
}

function cardFilling(currentCardComponents, cardData, userId) {
	currentCardComponents.cardImage.src = cardData.link;
	currentCardComponents.cardImage.alt = cardData.name;
	currentCardComponents.cardTitle.textContent = cardData.name;

	showCardLikes(currentCardComponents.cardLikeButton, cardData, userId);
}

export function showCardLikes(likeButton, cardData, userId) {
	if (Array.isArray(cardData.likes) && cardData.likes.length > 0) {
		likeButton.nextElementSibling.textContent = cardData.likes.length;
		isUserLikedCard(likeButton, cardData.likes, userId);
	} else {
		likeButton.nextElementSibling.textContent = 0;
		isUserLikedCard(likeButton, cardData.likes, userId);
	}
}

function isUserLikedCard(likeButton, likes, userId) {
	if (likes.some((like) => like._id === userId)) {
		likeButton.classList.add('card__like-button_is-active');
	} else {
		likeButton.classList.remove('card__like-button_is-active');
	}
}
