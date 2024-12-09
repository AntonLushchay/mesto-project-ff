import './pages/index.css';
import { createCard, showCardLikes } from './scripts/components/create-card/create-card.js';
import { openPopup, closePopup } from './scripts/components/modal/modal.js';
import { enableValidation, clearValidation } from './scripts/utils/validation/validation.js';
import {
	getUserReq,
	getCardsReq,
	userUpdatingReq,
	addNewCardReq,
	cardDeleteReq,
	likeCardReq,
	avatarUpdateReq,
	isImgReq,
} from './scripts/utils/api/api.js';

// Константы модальных окон
const profileTypePopup = document.querySelector('.popup_type_edit');
const newCardTypePopup = document.querySelector('.popup_type_new-card');
const imageTypePopup = document.querySelector('.popup_type_image');
const cardDeleteTypePopup = document.querySelector('.popup_type_delete-card');
const avatarUpdateTypePopup = document.querySelector('.popup_type_update-avatar');

const profileEditButton = document.querySelector('.profile__edit-button');
const contentAddButton = document.querySelector('.profile__add-button');
const avatarUpdateButton = document.querySelector('.profile__image');

const popupImag = imageTypePopup.querySelector('.popup__image');
const popupCaption = imageTypePopup.querySelector('.popup__caption');

const imgLoadingSpan = document.createElement('span');
imgLoadingSpan.textContent = 'Loading...';
imgLoadingSpan.classList.add('loading');

profileTypePopup.classList.add('popup_is-animated');
newCardTypePopup.classList.add('popup_is-animated');
imageTypePopup.classList.add('popup_is-animated');
cardDeleteTypePopup.classList.add('popup_is-animated');
avatarUpdateTypePopup.classList.add('popup_is-animated');

// Константы профиля
let userId; //NEW

const profileTitle = document.querySelector('.profile__title');
const profileDiscription = document.querySelector('.profile__description');

const profileAvatar = document.querySelector('.profile__image');

const profileInputName = profileTypePopup.querySelector('.popup__input_type_name');
const profileInputDiscription = profileTypePopup.querySelector('.popup__input_type_description');

const newCardInputPlace = newCardTypePopup.querySelector('.popup__input_type_card-name');
const newCardInputLink = newCardTypePopup.querySelector('.popup__input_type_url');

const avatarInputLink = avatarUpdateTypePopup.querySelector('.popup__input_type_url');

// Константы рендера карточек
const placesList = document.querySelector('.places__list');
const cardSettings = {
	cardTemplate: document.querySelector('#card-template').content,
	fillImageElement: fillingImageTypePopupHandler,
	addDeleteCardlistener: addDeleteCardlistener,
	addLikeCardListener: addLikeCardListener,
};

// Загрузка данных пользователя
try {
	const profileData = await getUserReq();

	userId = profileData._id; //NEW
	profileTitle.textContent = profileData.name;
	profileDiscription.textContent = profileData.about;
	profileAvatar.style.backgroundImage = `url(${profileData.avatar})`;
} catch (error) {
	console.log('Ошибка при загрузке данных пользователя:', error);
}

// Валидация форм
const validationArtefacts = enableValidation();

// Реднер карточек
renderCards();

async function renderCards() {
	try {
		const cardsData = await getCardsReq();
		cardsData.forEach((cardData) => {
			const cardElement = createCard(cardData, cardSettings, userId); //NEW
			placesList.append(cardElement);
		});
	} catch (error) {
		console.log('Ошибка при загрузке карточек:', error);
	}
}

// Установка слушателей на кнопки
profileEditButton.addEventListener('click', () => {
	profileInputName.value = profileTitle.textContent;
	profileInputDiscription.value = profileDiscription.textContent;

	clearValidation(validationArtefacts.allInputLists[0], validationArtefacts.buttonElements[0]);
	openPopup(profileTypePopup);
});

contentAddButton.addEventListener('click', () => {
	newCardInputPlace.value = '';
	newCardInputLink.value = '';

	clearValidation(validationArtefacts.allInputLists[1], validationArtefacts.buttonElements[1]);
	openPopup(newCardTypePopup);
});

function addDeleteCardlistener(deleteButton, cardId) {
	deleteButton.addEventListener('click', () => {
		openPopup(cardDeleteTypePopup);

		//Обработчик submit событий в popup
		cardDeleteTypePopup.addEventListener('submit', (evt) => handleDeleteCard(evt, deleteButton, cardId));
	});
}

function addLikeCardListener(likeButton, cardId) {
	likeButton.addEventListener('click', () => handleLikeCard(likeButton, cardId));
}

avatarUpdateButton.addEventListener('click', () => {
	avatarInputLink.value = '';

	clearValidation(validationArtefacts.allInputLists[2], validationArtefacts.buttonElements[2]);
	openPopup(avatarUpdateTypePopup);
});

// Обработчики submit событий в popup'ах
profileTypePopup.addEventListener('submit', (evt) => handleEditFormSubmit(evt));

newCardTypePopup.addEventListener('submit', (evt) => handleAddFormSubmit(evt));

avatarUpdateTypePopup.addEventListener('submit', (evt) => handleAvatarUpdate(evt));

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
			openPopup(imageTypePopup);
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
		const result = await userUpdatingReq(updatedProfileData);
		console.log('result UserUpdat', result);
		profileTitle.textContent = result.name;
		profileDiscription.textContent = result.about;
		closePopup(profileTypePopup);
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
		closePopup(newCardTypePopup);
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
		closePopup(cardDeleteTypePopup);
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
		showCardLikes(likeButton, updatedCard, userId);
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
		await isImgReq(avatarUrl);
		try {
			const result = await avatarUpdateReq(avatarUrl);

			profileAvatar.style.backgroundImage = `url(${result.avatar})`;
			closePopup(avatarUpdateTypePopup);
		} catch (error) {
			console.log('Ошибка при обновлении аватара:', error);
		}
	} catch (error) {
		console.log('Ошибка проверки URL:', error);
	} finally {
		submitButton.textContent = 'Сохранить';
	}
}
