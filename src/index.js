import './pages/index.css';
import { createCard, showCardLikes } from './scripts/components/create-card/create-card.js';
import { openPopup, closePopup } from './scripts/components/modal/modal.js';
import { enableValidation, clearValidation } from './scripts/utils/validation/validation.js';
import { request, isImgReq } from './scripts/utils/api/api.js';

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

// Переменные для удаления карточки
let currentDeleteButton = null;
let currentCardId = null;

// Константы профиля
let userId;

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

const settings = {
	form: '.popup__form',
	input: '.popup__input',
	inputInvalid: 'popup__input-invalid',
	erorrSpan: 'popup__input-error',
	erorrSpanActive: 'popup__input-error_active',
	submitButtonSelector: '.popup__button',
	// inactiveButtonClass: '.popup__button_disabled',
};

// Валидация форм
const allInputs = enableValidation(settings);

// Реднер карточек
renderCards();

async function renderCards() {
	try {
		const [profileData, cardsData] = await Promise.all([request('/users/me', 'GET'), request('/cards', 'GET')]);

		userId = profileData._id;
		profileTitle.textContent = profileData.name;
		profileDiscription.textContent = profileData.about;
		profileAvatar.style.backgroundImage = `url(${profileData.avatar})`;

		cardsData.forEach((cardData) => {
			const cardElement = createCard(cardData, cardSettings, userId);
			placesList.append(cardElement);
		});
	} catch (error) {
		console.log('Ошибка при загрузке карточек и профиля:', error);
	}
}

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

// Поиск нужных инпутов в форме
function inputsSearch(formName) {
	return allInputs.filter((input) => {
		if (input.form.getAttribute('name') === formName) {
			return input;
		}
	});
}

// Установка слушателей на кнопки
profileEditButton.addEventListener('click', () => {
	profileInputName.value = profileTitle.textContent;
	profileInputDiscription.value = profileDiscription.textContent;

	const editProfInputs = inputsSearch('edit-profile');

	clearValidation(editProfInputs, settings);
	openPopup(profileTypePopup);
});

contentAddButton.addEventListener('click', () => {
	newCardInputPlace.value = '';
	newCardInputLink.value = '';

	const addCardInputs = inputsSearch('new-place');

	clearValidation(addCardInputs, settings);
	openPopup(newCardTypePopup);
});

avatarUpdateButton.addEventListener('click', () => {
	avatarInputLink.value = '';
	const avatarUpdateInputs = inputsSearch('update-avatar');

	clearValidation(avatarUpdateInputs, settings);
	openPopup(avatarUpdateTypePopup);
});

function addDeleteCardlistener(deleteButton, cardId) {
	deleteButton.addEventListener('click', () => {
		openPopup(cardDeleteTypePopup);
		currentDeleteButton = deleteButton;
		currentCardId = cardId;
	});
}

function addLikeCardListener(likeButton, cardId) {
	likeButton.addEventListener('click', (evt) => {
		const metod = likeButton.classList.contains('card__like-button_is-active') ? 'DELETE' : 'PUT';
		const options = {
			endPoint: `/cards/likes/${cardId}`,
			metod: metod,
		};

		handleRequest(evt, options).then((submitResult) => {
			showCardLikes(likeButton, submitResult, userId);
		});
	});
}

// Обработчики submit событий в popup'ах
profileTypePopup.addEventListener('submit', (evt) => {
	const options = {
		endPoint: '/users/me',
		metod: 'PATCH',
		data: {
			name: profileInputName.value,
			about: profileInputDiscription.value,
		},
	};

	handleRequest(evt, options).then((submitResult) => {
		profileTitle.textContent = submitResult.name;
		profileDiscription.textContent = submitResult.about;
	});
});

newCardTypePopup.addEventListener('submit', (evt) => {
	const options = {
		endPoint: '/cards',
		metod: 'POST',
		data: {
			name: newCardInputPlace.value,
			link: newCardInputLink.value,
		},
	};

	handleRequest(evt, options).then((submitResult) => {
		const cardElement = createCard(submitResult, cardSettings, userId);

		placesList.prepend(cardElement);
		evt.target.reset();
	});
});

avatarUpdateTypePopup.addEventListener('submit', (evt) => {
	evt.preventDefault();
	const options = {
		endPoint: '/users/me/avatar',
		metod: 'PATCH',
		data: { avatar: avatarInputLink.value },
	};

	isImgReq(options.data.avatar).then(() => {
		handleRequest(evt, options).then((submitResult) => {
			profileAvatar.style.backgroundImage = `url(${submitResult.avatar})`;
		});
	});
});

cardDeleteTypePopup.addEventListener('submit', (evt) => {
	const options = {
		endPoint: `/cards/${currentCardId}`,
		metod: 'DELETE',
	};
	handleRequest(evt, options, ['Удаление...', 'да']).then(() => {
		currentDeleteButton.closest('.card').remove();
	});
});

// Отправка запроса на сервер
// Не идеально, но уже лучше =)
async function handleRequest(evt, options, submitText = ['Сохранение...', 'Сохранить']) {
	evt.preventDefault();

	const submitButton = evt.submitter;

	if (!evt.target.classList.contains('card__like-button')) {
		submitButton.textContent = `${submitText[0]}`;
	}
	try {
		const result = await request(options.endPoint, options.metod, options.data);

		if (!evt.target.classList.contains('card__like-button')) {
			closePopup(evt.target.closest('.popup'));
		}
		return result;
	} catch (error) {
		console.log('Ошибка при обновлении данных:', error);
	} finally {
		if (!evt.target.classList.contains('card__like-button')) {
			submitButton.textContent = `${submitText[1]}`;
		}
	}
}
