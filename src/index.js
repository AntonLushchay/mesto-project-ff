import './pages/index.css';
import { initialCards } from './scripts/cards.js';

// Пасхалка старт
import audioFile from './audio/Pedro.mp3';
const audio = new Audio(audioFile);
function playAudio() {
	audio.play();
}
function pauseAudio() {
	audio.pause();
	audio.currentTime = 0;
}
// Пасхалка конец

// Рендеринг карточек
const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

renderCards();

function renderCards() {
	placesList.innerHTML = '';
	initialCards.forEach((card) => {
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

// Работа модальных окон
const profileEditButton = document.querySelector('.profile__edit-button');
const contentAddButton = document.querySelector('.profile__add-button');

const profileTypePopup = document.querySelector('.popup_type_edit');
const newCardTypePopup = document.querySelector('.popup_type_new-card');
const imageTypePopup = document.querySelector('.popup_type_image');

const popupImag = imageTypePopup.querySelector('.popup__image');

const profileCloseButton = profileTypePopup.querySelector('.popup__close');
const newCardCloseButton = newCardTypePopup.querySelector('.popup__close');
const imageCloseButton = imageTypePopup.querySelector('.popup__close');

profileTypePopup.classList.add('popup_is-animated');
newCardTypePopup.classList.add('popup_is-animated');
imageTypePopup.classList.add('popup_is-animated');

document.addEventListener('click', (evt) => {
	if (evt.target === profileEditButton) {
		openPopup(profileTypePopup, profileCloseButton);
	} else if (evt.target === contentAddButton) {
		openPopup(newCardTypePopup, newCardCloseButton);
	} else if (evt.target.classList.contains('card__image')) {
		setImgPopupCaption(evt, imageTypePopup);
		setImgPopupSrc(evt, popupImag);
		popupImag.addEventListener(
			'load',
			() => {
				openPopup(imageTypePopup, imageCloseButton);
			},
			{ once: true },
		);
	}
});

function setImgPopupCaption(evt, imageTypePopup) {
	imageTypePopup.querySelector('.popup__caption').textContent = evt.target
		.closest('.card')
		.querySelector('.card__title').textContent;
}

function setImgPopupSrc(evt, popupImag) {
	popupImag.src = evt.target.src;
}

function openPopup(popup, closeButton) {
	popup.classList.add('popup_is-opened');
	// Пасхалка старт
	if (popup.querySelector('img') && popup.querySelector('img').src.includes('pedro')) {
		playAudio();
	}
	// Пасхалка конец
	setPopupListeners(popup, closeButton);
}

function closePopup(popup, closeButton) {
	popup.classList.remove('popup_is-opened');
	// Пасхалка старт
	if (popup.querySelector('img') && popup.querySelector('img').src.includes('pedro')) {
		pauseAudio();
	}
	// Пасхалка конец
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

// Редактирование имени и информации о себе
const profileTitle = document.querySelector('.profile__title');
const profileDiscription = document.querySelector('.profile__description');

const profileInputName = profileTypePopup.querySelector('.popup__input_type_name');
const profileInputDiscription = profileTypePopup.querySelector('.popup__input_type_description');

profileInputName.value = profileTitle.textContent;
profileInputDiscription.value = profileDiscription.textContent;

profileTypePopup.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(evt) {
	evt.preventDefault();
	profileTitle.textContent = profileInputName.value;
	profileDiscription.textContent = profileInputDiscription.value;
	closePopup(profileTypePopup, profileCloseButton);
}

// Добавление карточки
const addNewCardName = newCardTypePopup.querySelector('.popup__input_type_card-name');
const addNewCardUrl = newCardTypePopup.querySelector('.popup__input_type_url');

newCardTypePopup.addEventListener('submit', addCard);

function addCard(evt) {
	evt.preventDefault();
	const newCard = {
		name: addNewCardName.value,
		link: addNewCardUrl.value,
	};
	initialCards.unshift(newCard);
	closePopup(newCardTypePopup, newCardCloseButton);
	renderCards();
}
