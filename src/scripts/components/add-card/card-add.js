// Добавление карточки
export function addCard(
	newCardTypePopup,
	newCardCloseButton,
	initialCards,
	closePopup,
	renderCards,
) {
	const inputNewCardName = newCardTypePopup.querySelector('.popup__input_type_card-name');
	const inputNewCardUrl = newCardTypePopup.querySelector('.popup__input_type_url');

	newCardTypePopup.addEventListener('submit', updateCardData);
	function updateCardData(evt) {
		evt.preventDefault();
		const newCard = {
			name: inputNewCardName.value,
			link: inputNewCardUrl.value,
		};
		initialCards.unshift(newCard);
		closePopup(newCardTypePopup, newCardCloseButton);
		renderCards();
		newCardTypePopup.removeEventListener('submit', updateCardData);
	}
}
