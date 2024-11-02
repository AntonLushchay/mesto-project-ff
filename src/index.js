import './pages/index.css';
import { initialCards } from './scripts/data/cards.js';
import { renderCards } from './scripts/components/render/render.js';
import { initializeEditPopup } from './scripts/components/edit-popup/edit-popup.js';
import { addCard } from './scripts/components/add-card/card-add.js';
import { workWithImagePopup, openPopup, closePopup } from './scripts/components/modal/modal.js';

// _____________________________________________________________
// Рендер карточек
const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

renderCards(initialCards, cardTemplate, placesList);

// _____________________________________________________________
// Инициализация модальных окон
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
		initializeEditPopup(profileTypePopup, profileCloseButton, closePopup);
	} else if (evt.target === contentAddButton) {
		openPopup(newCardTypePopup, newCardCloseButton);
		addCard(newCardTypePopup, newCardCloseButton, initialCards, closePopup, () => {
			renderCards(initialCards, cardTemplate, placesList);
		});
	} else if (evt.target.classList.contains('card__image')) {
		workWithImagePopup(evt, imageTypePopup, popupImag, imageCloseButton);
	}
});
