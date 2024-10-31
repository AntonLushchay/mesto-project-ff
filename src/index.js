import './pages/index.css';
import { initialCards } from './scripts/cards.js';

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

// second sprint

const profileEditButton = document.querySelector('.profile__edit-button');
const contentAddButton = document.querySelector('.profile__add-button');

const profilePopup = document.querySelector('.popup_type_edit');
const addNewCardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

const profileCloseButton = profilePopup.querySelector('.popup__close');
const newCardCloseButton = addNewCardPopup.querySelector('.popup__close');
const imageCloseButton = imagePopup.querySelector('.popup__close');

document.addEventListener('click', (evt) => {
	if (evt.target === profileEditButton) {
		openPopup(profilePopup, profileCloseButton);
	} else if (evt.target === contentAddButton) {
		openPopup(addNewCardPopup, newCardCloseButton);
	} else if (evt.target.classList.contains('card__image')) {
		imagePopup.querySelector('.popup__image').src = evt.target.src;
		openPopup(imagePopup, imageCloseButton);
	}
});

function openPopup(popup, closeButton) {
	popup.style.display = 'flex';
	setPopupListeners(popup, closeButton);
}

function closePopup(popup, closeButton) {
	popup.style.display = 'none';
	removePopupListeners(popup, closeButton);
}

function handleOverlayClick(evt, popup, closeButton) {
	if (evt.target === popup) {
		closePopup(popup, closeButton);
	}
}

function handleEscClose(evt, popup, closeButton) {
	if (evt.key === 'Escape') {
		closePopup(popup, closeButton);
	}
}

function setPopupListeners(popup, closeButton) {
	const closeClickHandler = () => closePopup(popup, closeButton);
	const overlayClickHandler = (evt) => handleOverlayClick(evt, popup, closeButton);
	const escCloseHandler = (evt) => handleEscClose(evt, popup, closeButton);

	closeButton.addEventListener('click', closeClickHandler);
	popup.addEventListener('click', overlayClickHandler);
	document.addEventListener('keydown', escCloseHandler);

	closeButton._closeClickHandler = closeClickHandler;
	popup._overlayClickHandler = overlayClickHandler;
	popup._escCloseHandler = escCloseHandler;
}

function removePopupListeners(popup, closeButton) {
	closeButton.removeEventListener('click', closeButton._closeClickHandler);
	popup.removeEventListener('click', popup._overlayClickHandler);
	document.removeEventListener('keydown', popup._escCloseHandler);

	delete popup._overlayClickHandler;
	delete popup._escCloseHandler;
	delete closeButton._closeClickHandler;
}
