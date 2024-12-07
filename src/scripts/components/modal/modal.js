// Easter egg: Pedro
import { playAudio, pauseAudio } from '../pedro/pedro.js';

// Работа модальных окон
const eventHandlers = [];

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
	const closeButtonClickHandler = () => closePopup(popup, closeButton);
	const overlayClickHandler = (evt) => handleOverlayClick(evt, popup, closeButton);
	const escKeyPushHandler = (evt) => handleEscClose(evt, popup, closeButton);

	eventHandlers.push(closeButtonClickHandler);
	eventHandlers.push(overlayClickHandler);
	eventHandlers.push(escKeyPushHandler);

	closeButton.addEventListener('click', closeButtonClickHandler);
	popup.addEventListener('click', overlayClickHandler);
	document.addEventListener('keydown', escKeyPushHandler);
}

function removePopupListeners(popup, closeButton) {
	eventHandlers.forEach((handler) => {
		closeButton.removeEventListener('click', handler);
		popup.removeEventListener('click', handler);
		document.removeEventListener('keydown', handler);
	});
}
