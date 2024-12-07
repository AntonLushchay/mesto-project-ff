// Рендеринг карточек

export function createCard(cardData, cardSettings) {
	const cardElement = createCardElement(cardSettings.cardTemplate);
	const currentCardComponents = {
		cardTitle: cardElement.querySelector('.card__title'),
		cardImage: cardElement.querySelector('.card__image'),
		cardLikeButton: cardElement.querySelector('.card__like-button'),
		deleteButton: cardElement.querySelector('.card__delete-button'),
	};
	cardFilling(currentCardComponents, cardData);

	currentCardComponents.cardImage.addEventListener('click', (evt) =>
		cardSettings.fillImageElement(evt),
	);

	if (cardData.owner._id !== '73e6973ea1f4959c04ced3be') {
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

function cardFilling(currentCardComponents, cardData) {
	currentCardComponents.cardImage.src = cardData.link;
	currentCardComponents.cardImage.alt = cardData.name;
	currentCardComponents.cardTitle.textContent = cardData.name;

	showCardLikes(currentCardComponents.cardLikeButton, cardData);
}

export function showCardLikes(likeButton, cardData) {
	if (Array.isArray(cardData.likes) && cardData.likes.length > 0) {
		// Если лйки пришли и они уже есть на карточке
		if (likeButton.nextElementSibling) {
			likeButton.nextElementSibling.textContent = cardData.likes.length;
			isUserLikedCard(likeButton, cardData.likes);

			// Если лайки пришли и их нет на карточке
		} else {
			const likeCountElement = document.createElement('span');

			likeCountElement.classList.add('card__like-count');
			likeCountElement.textContent = cardData.likes.length;
			likeButton.after(likeCountElement);
			isUserLikedCard(likeButton, cardData.likes);
		}
	} else {
		// Если лайки не пришли, но они есть на карточке
		if (likeButton.nextElementSibling) {
			likeButton.nextElementSibling.remove();
			isUserLikedCard(likeButton, cardData.likes);
		} else {
			// Если лайки не пришли и их нет на карточке... такго быть не должно
		}
	}
}

function isUserLikedCard(likeButton, userId) {
	if (userId.some((user) => user._id === '73e6973ea1f4959c04ced3be')) {
		likeButton.classList.add('card__like-button_is-active');
	} else {
		likeButton.classList.remove('card__like-button_is-active');
	}
}
