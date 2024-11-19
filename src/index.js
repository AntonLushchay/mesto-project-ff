import './pages/index.css';
import { initialCards } from './scripts/data/cards.js';
import { createCard } from './scripts/components/create-card/create-card.js';
import { openPopup, closePopup } from './scripts/components/modal/modal.js';

// _____________________________________________________________
// Рендер карточек
const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

initialCards.forEach((cardData) => {
	const cardElement = createCard(cardData, cardTemplate);

	placesList.append(cardElement);
});

// _____________________________________________________________
// Инициализация модальных окон
const profileTypePopup = document.querySelector('.popup_type_edit');
const newCardTypePopup = document.querySelector('.popup_type_new-card');
const imageTypePopup = document.querySelector('.popup_type_image');

const profileCloseButton = profileTypePopup.querySelector('.popup__close');
const newCardCloseButton = newCardTypePopup.querySelector('.popup__close');
const imageCloseButton = imageTypePopup.querySelector('.popup__close');

const profileEditButton = document.querySelector('.profile__edit-button');
const contentAddButton = document.querySelector('.profile__add-button');

const popupImag = imageTypePopup.querySelector('.popup__image');

const imgLoading = document.createElement('span');
imgLoading.textContent = 'Loading...';
imgLoading.classList.add('loading');

profileTypePopup.classList.add('popup_is-animated');
newCardTypePopup.classList.add('popup_is-animated');
imageTypePopup.classList.add('popup_is-animated');

// ___
// Константы для редактирования профиля
const profileTitle = document.querySelector('.profile__title');
const profileDiscription = document.querySelector('.profile__description');

const profileInputName = profileTypePopup.querySelector('.popup__input_type_name');
const profileInputDiscription = profileTypePopup.querySelector('.popup__input_type_description');
// ___

profileEditButton.addEventListener('click', (evt) => {
	if (evt.target === profileEditButton) {
		filliingEditForm();
		openPopup(profileTypePopup, profileCloseButton);
		profileTypePopup.addEventListener('submit', (evt) => {
			handleEditFormSubmit(evt, profileTypePopup, profileCloseButton);
		});
	}
});

contentAddButton.addEventListener('click', (evt) => {
	if (evt.target === contentAddButton) {
		openPopup(newCardTypePopup, newCardCloseButton);
		newCardTypePopup.addEventListener('submit', (evt) => {
			handleAddFormSubmit(evt, newCardTypePopup, newCardCloseButton);
		});
	}
});

placesList.addEventListener('click', (evt) => {
	if (evt.target.tagName === 'IMG') {
		fillingImageTypePopup(evt);
		popupImag.addEventListener(
			'load',
			() => {
				imgLoading.style.display = 'none';
				openPopup(imageTypePopup, imageCloseButton);
			},
			{ once: true },
		);
	}
});

function filliingEditForm() {
	profileInputName.value = profileTitle.textContent;
	profileInputDiscription.value = profileDiscription.textContent;
}

function handleEditFormSubmit(evt) {
	evt.preventDefault();
	profileTitle.textContent = profileInputName.value;
	profileDiscription.textContent = profileInputDiscription.value;
	closePopup(profileTypePopup, profileCloseButton);
	profileTypePopup.removeEventListener('submit', handleEditFormSubmit);
}

function handleAddFormSubmit(evt) {
	evt.preventDefault();
	const cardData = { name: evt.target[0].value, link: evt.target[1].value };
	const cardElement = createCard(cardData, cardTemplate);
	placesList.prepend(cardElement);
	evt.target.reset();
	closePopup(newCardTypePopup, newCardCloseButton);
	newCardTypePopup.removeEventListener('submit', handleAddFormSubmit);
}

function fillingImageTypePopup(evt) {
	popupImag.src = evt.target.src;
	popupImag.alt = evt.target.alt;
	imgLoading.style.display = 'block';
	evt.target.after(imgLoading);
}
