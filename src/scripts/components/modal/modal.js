// Easter egg: Pedro
import { playAudio, pauseAudio } from '../pedro/pedro.js';

// Работа модальных окон
const eventHandlers = [];

// ___
// Это реально круто решение до которого я не додумался! Спасибо!
const closeButtons = document.querySelectorAll('.popup__close');

closeButtons.forEach((button) => {
	button.addEventListener('click', () => {
		closePopup(button.closest('.popup'), button);
	});
});
// ___

export function openPopup(popup) {
	popup.classList.add('popup_is-opened');
	// Пасхалка старт
	if (popup.querySelector('img') && popup.querySelector('img').src.includes('pedro')) {
		playAudio();
	}
	// Пасхалка конец
	setPopupListeners(popup);
}

export function closePopup(popup) {
	popup.classList.remove('popup_is-opened');
	// Пасхалка старт
	if (popup.querySelector('img') && popup.querySelector('img').src.includes('pedro')) {
		pauseAudio();
	}
	// Пасхалка конец
	removePopupListeners(popup);
}

function handleOverlayClick(evt, popup) {
	if (evt.target === popup) {
		closePopup(popup);
	}
}

function handleEscClose(evt, popup) {
	if (evt.key === 'Escape') {
		closePopup(popup);
	}
}

function setPopupListeners(popup) {
	const overlayClickHandler = (evt) => handleOverlayClick(evt, popup);
	const escKeyPushHandler = (evt) => handleEscClose(evt, popup);

	eventHandlers.push(overlayClickHandler);
	eventHandlers.push(escKeyPushHandler);

	popup.addEventListener('click', overlayClickHandler);
	document.addEventListener('keydown', escKeyPushHandler);
}

function removePopupListeners(popup) {
	eventHandlers.forEach((handler) => {
		popup.removeEventListener('click', handler);
		document.removeEventListener('keydown', handler);
	});
}
