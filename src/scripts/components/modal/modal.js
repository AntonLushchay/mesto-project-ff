// Easter egg: Pedro
import { playAudio, pauseAudio } from '../is-pedro/is-pedro.js';

// Работа модальных окон

export function workWithImagePopup(evt, imageTypePopup, popupImag, imageCloseButton) {
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

function setImgPopupCaption(evt, imageTypePopup) {
	imageTypePopup.querySelector('.popup__caption').textContent = evt.target
		.closest('.card')
		.querySelector('.card__title').textContent;
}

function setImgPopupSrc(evt, popupImag) {
	popupImag.src = evt.target.src;
}

export function openPopup(popup, closeButton) {
	popup.classList.add('popup_is-opened');
	// Пасхалка старт
	if (popup.querySelector('img') && popup.querySelector('img').src.includes('pedro')) {
		playAudio();
	}
	// Пасхалка конец
	setPopupListeners(popup, closeButton);
}

export function closePopup(popup, closeButton) {
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
