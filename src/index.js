import './pages/index.css';
import { initialCards } from './scripts/data/cards.js';
import { createCard } from './scripts/components/create-card/create-card.js';
import { openPopup, closePopup } from './scripts/components/modal/modal.js';
import { enableValidation, clearValidation } from './scripts/utils/validation/validation.js';

// Константы рендера карточек
const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

// Константы модальных окон
const profileTypePopup = document.querySelector('.popup_type_edit');
const newCardTypePopup = document.querySelector('.popup_type_new-card');
const imageTypePopup = document.querySelector('.popup_type_image');

const profileCloseButton = profileTypePopup.querySelector('.popup__close');
const newCardCloseButton = newCardTypePopup.querySelector('.popup__close');
const imageCloseButton = imageTypePopup.querySelector('.popup__close');

const profileEditButton = document.querySelector('.profile__edit-button');
const contentAddButton = document.querySelector('.profile__add-button');

const popupImag = imageTypePopup.querySelector('.popup__image');
const popupCaption = imageTypePopup.querySelector('.popup__caption');

const imgLoadingSpan = document.createElement('span');
imgLoadingSpan.textContent = 'Loading...';
imgLoadingSpan.classList.add('loading');

profileTypePopup.classList.add('popup_is-animated');
newCardTypePopup.classList.add('popup_is-animated');
imageTypePopup.classList.add('popup_is-animated');

// Константы редактирования профиля
const profileTitle = document.querySelector('.profile__title');
const profileDiscription = document.querySelector('.profile__description');

const profileInputName = profileTypePopup.querySelector('.popup__input_type_name');
const profileInputDiscription = profileTypePopup.querySelector('.popup__input_type_description');

const newCardInputPlace = newCardTypePopup.querySelector('.popup__input_type_card-name');
const newCardInputLink = newCardTypePopup.querySelector('.popup__input_type_url');

// Валидация форм
const validationArtefacts = enableValidation();

// Реднер карточек
initialCards.forEach((cardData) => {
	const cardElement = createCard(cardData, cardTemplate, fillingImageTypePopupHandler);
	placesList.append(cardElement);
});

// Обработчики открытия popup'ов
profileEditButton.addEventListener('click', () => {
	profileInputName.value = profileTitle.textContent;
	profileInputDiscription.value = profileDiscription.textContent;

	clearValidation(validationArtefacts.allInputLists[0], validationArtefacts.buttonElements[0]);
	openPopup(profileTypePopup, profileCloseButton);
});

contentAddButton.addEventListener('click', () => {
	newCardInputPlace.value = '';
	newCardInputLink.value = '';

	clearValidation(validationArtefacts.allInputLists[1], validationArtefacts.buttonElements[1]);
	openPopup(newCardTypePopup, newCardCloseButton);
});

// Обработчики submit событий в popup'ах
profileTypePopup.addEventListener('submit', (evt) => {
	handleEditFormSubmit(evt);
});

newCardTypePopup.addEventListener('submit', (evt) => {
	handleAddFormSubmit(evt);
});
// ___

function fillingImageTypePopupHandler(evt) {
	popupImag.src = evt.target.src;
	popupImag.alt = evt.target.alt;
	popupCaption.textContent = evt.target
		.closest('.card')
		.querySelector('.card__title').textContent;

	imgLoadingSpan.style.display = 'block';
	evt.target.after(imgLoadingSpan);

	popupImag.addEventListener(
		'load',
		() => {
			imgLoadingSpan.style.display = 'none';
			openPopup(imageTypePopup, imageCloseButton);
		},
		{ once: true },
	);
}

function handleEditFormSubmit(evt) {
	evt.preventDefault();
	profileTitle.textContent = profileInputName.value;
	profileDiscription.textContent = profileInputDiscription.value;
	closePopup(profileTypePopup, profileCloseButton);
}

function handleAddFormSubmit(evt) {
	evt.preventDefault();
	const cardData = {
		name: evt.target[0].value,
		link: evt.target[1].value,
	};
	const cardElement = createCard(cardData, cardTemplate, fillingImageTypePopupHandler);
	placesList.prepend(cardElement);
	evt.target.reset();
	closePopup(newCardTypePopup, newCardCloseButton);
}
