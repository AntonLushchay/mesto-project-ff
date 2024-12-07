import './pages/index.css';
import { createCard, showCardLikes } from './scripts/components/create-card/create-card.js';
import { openPopup, closePopup } from './scripts/components/modal/modal.js';
import { enableValidation, clearValidation } from './scripts/utils/validation/validation.js';
import {
	getUserReq,
	getCardsReq,
	UserUpdatingReq,
	addNewCardReq,
	cardDeleteReq,
	likeCardReq,
	avatarUpdateReq,
	isImgReq,
} from './scripts/utils/api/api.js';

// Константы рендера карточек
const placesList = document.querySelector('.places__list');

// Константы модальных окон
const profileTypePopup = document.querySelector('.popup_type_edit');
const newCardTypePopup = document.querySelector('.popup_type_new-card');
const imageTypePopup = document.querySelector('.popup_type_image');
const cardDeleteTypePopup = document.querySelector('.popup_type_delete-card');
const avatarUpdateTypePopup = document.querySelector('.popup_type_update-avatar'); //NEW

const profileCloseButton = profileTypePopup.querySelector('.popup__close');
const newCardCloseButton = newCardTypePopup.querySelector('.popup__close');
const imageCloseButton = imageTypePopup.querySelector('.popup__close');
const deletCardCloseButton = cardDeleteTypePopup.querySelector('.popup__close');
const avatarUpdateCloseButton = avatarUpdateTypePopup.querySelector('.popup__close'); //NEW

const profileEditButton = document.querySelector('.profile__edit-button');
const contentAddButton = document.querySelector('.profile__add-button');
const avatarUpdateButton = document.querySelector('.profile__image'); //NEW

const popupImag = imageTypePopup.querySelector('.popup__image');
const popupCaption = imageTypePopup.querySelector('.popup__caption');

const imgLoadingSpan = document.createElement('span');
imgLoadingSpan.textContent = 'Loading...';
imgLoadingSpan.classList.add('loading');

profileTypePopup.classList.add('popup_is-animated');
newCardTypePopup.classList.add('popup_is-animated');
imageTypePopup.classList.add('popup_is-animated');
cardDeleteTypePopup.classList.add('popup_is-animated');
avatarUpdateTypePopup.classList.add('popup_is-animated'); //NEW

// Константы профиля
const profileTitle = document.querySelector('.profile__title');
const profileDiscription = document.querySelector('.profile__description');

const profileAvatar = document.querySelector('.profile__image');

const profileInputName = profileTypePopup.querySelector('.popup__input_type_name');
const profileInputDiscription = profileTypePopup.querySelector('.popup__input_type_description');

const newCardInputPlace = newCardTypePopup.querySelector('.popup__input_type_card-name');
const newCardInputLink = newCardTypePopup.querySelector('.popup__input_type_url');

const avatarInputLink = avatarUpdateTypePopup.querySelector('.popup__input_type_url'); //NEW

// Загрузка данных пользователя
try {
	const profileData = await getUserReq();

	profileTitle.textContent = profileData.name;
	profileDiscription.textContent = profileData.about;
	profileAvatar.style.backgroundImage = `url(${profileData.avatar})`;
} catch (error) {
	console.log('Ошибка при загрузке данных пользователя:', error);
}

// Валидация форм
const validationArtefacts = enableValidation();

// Реднер карточек
// Константы рендера карточек
const cardSettings = {
	cardTemplate: document.querySelector('#card-template').content,
	fillImageElement: fillingImageTypePopupHandler,
	addDeleteCardlistener: addDeleteCardlistener,
	addLikeCardListener: addLikeCardListener,
};

renderCards();

async function renderCards() {
	try {
		const cardsData = await getCardsReq();
		cardsData.forEach((cardData) => {
			const cardElement = createCard(cardData, cardSettings);
			placesList.append(cardElement);
		});
	} catch (error) {
		console.log('Ошибка при загрузке карточек:', error);
	}
}

// Eventlisteners for buttons (profile edit, add new card, delete card, like card, update avatar)
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

function addDeleteCardlistener(deleteButton, cardId) {
	deleteButton.addEventListener('click', () => {
		openPopup(cardDeleteTypePopup, deletCardCloseButton);

		// обработчик submit события в popup'е удаления карточки
		cardDeleteTypePopup.addEventListener('submit', (evt) => handleDeleteCard(evt, deleteButton, cardId));
	});
}

function addLikeCardListener(likeButton, cardId) {
	likeButton.addEventListener('click', () => handleLikeCard(likeButton, cardId));
}

avatarUpdateButton.addEventListener('click', () => {
	avatarInputLink.value = '';

	clearValidation(validationArtefacts.allInputLists[2], validationArtefacts.buttonElements[2]);
	openPopup(avatarUpdateTypePopup, avatarUpdateCloseButton);
});

// Обработчики submit событий в popup'ах
profileTypePopup.addEventListener('submit', (evt) => handleEditFormSubmit(evt));

newCardTypePopup.addEventListener('submit', (evt) => handleAddFormSubmit(evt));

avatarUpdateTypePopup.addEventListener('submit', (evt) => handleAvatarUpdate(evt)); //NEW

// Заполнение попапа с изображением
function fillingImageTypePopupHandler(evt) {
	popupImag.src = evt.target.src;
	popupImag.alt = evt.target.alt;
	popupCaption.textContent = evt.target.closest('.card').querySelector('.card__title').textContent;

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

// Обработчики submit событий в popup'ах
async function handleEditFormSubmit(evt) {
	evt.preventDefault();

	const submitButton = evt.submitter;
	submitButton.textContent = 'Сохранение...';

	const updatedProfileData = {
		name: profileInputName.value,
		about: profileInputDiscription.value,
	};

	try {
		const result = await UserUpdatingReq(updatedProfileData);
		console.log('result UserUpdat', result);
		profileTitle.textContent = result.name;
		profileDiscription.textContent = result.about;
		closePopup(profileTypePopup, profileCloseButton);
	} catch (error) {
		console.log('Ошибка при обновлении данных пользователя:', error);
	} finally {
		submitButton.textContent = 'Сохранить';
	}
}

async function handleAddFormSubmit(evt) {
	evt.preventDefault();

	const submitButton = evt.submitter;
	submitButton.textContent = 'Сохранение...';

	const cardData = {
		name: newCardInputPlace.value,
		link: newCardInputLink.value,
	};

	try {
		const newCard = await addNewCardReq(cardData);
		const cardElement = createCard(newCard, cardSettings);

		placesList.prepend(cardElement);
		evt.target.reset();
		closePopup(newCardTypePopup, newCardCloseButton);
	} catch (error) {
		console.log('Ошибка при добавлении новой карточки:', error);
	} finally {
		submitButton.textContent = 'Сохранить';
	}
}

async function handleDeleteCard(evt, deleteButton, cardId) {
	evt.preventDefault();

	const submitButton = evt.submitter;
	submitButton.textContent = 'Удаление...';

	try {
		await cardDeleteReq(cardId);
		deleteButton.closest('.card').remove();
		closePopup(cardDeleteTypePopup, deletCardCloseButton);
	} catch (error) {
		console.log('Ошибка при удалении карточки:', error);
	} finally {
		submitButton.textContent = 'Удалить';
	}
}

async function handleLikeCard(likeButton, cardId) {
	const metod = likeButton.classList.contains('card__like-button_is-active') ? 'DELETE' : 'PUT';

	try {
		const updatedCard = await likeCardReq(cardId, metod);
		showCardLikes(likeButton, updatedCard);
	} catch (error) {
		console.log('Ошибка при обновлении данных карточки:', error);
	}
}

async function handleAvatarUpdate(evt) {
	evt.preventDefault();

	const submitButton = evt.submitter;
	submitButton.textContent = 'Сохранение...';

	const avatarUrl = avatarInputLink.value;

	try {
		const chtoTakoe = await isImgReq(avatarUrl);
		console.log('chtoTakoe', chtoTakoe);
		try {
			const result = await avatarUpdateReq(avatarUrl);
			console.log('result', result);

			profileAvatar.style.backgroundImage = `url(${result.avatar})`;
			closePopup(avatarUpdateTypePopup, avatarUpdateCloseButton);
		} catch (error) {
			console.log('Ошибка при обновлении аватара:', error);
		}
	} catch (error) {
		console.log('Ошибка проверки URL:', error);
	} finally {
		submitButton.textContent = 'Сохранить';
	}
}
