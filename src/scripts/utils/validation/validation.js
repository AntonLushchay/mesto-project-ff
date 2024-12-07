// Валидация форм

const userLang = navigator.language || navigator.userLanguage;
const lang = userLang.startsWith('ru') ? 'ru' : 'en';
const regExp = /^[\p{L}\s-]*$/u;

export function enableValidation() {
	const formList = Array.from(document.querySelectorAll('.popup__form'));
	const allInputLists = [];
	const buttonElements = [];

	formList.forEach((formElement) => {
		const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
		const buttonElement = formElement.querySelector('.popup__button');

		inputList.forEach((inputElement) => {
			const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

			inputElement.addEventListener('input', () => {
				checkInputValidity(inputElement, errorElement);
				toggleButtonState(inputList, buttonElement);
			});
		});

		allInputLists.push(inputList);
		buttonElements.push(buttonElement);
	});

	return { allInputLists, buttonElements };
}

function checkInputValidity(inputElement, errorElement) {
	if (inputElement.type !== 'url') {
		if (!regExp.test(inputElement.value)) {
			inputElement.setCustomValidity(inputElement.getAttribute(`data-error-message-${lang}`));
		} else {
			inputElement.setCustomValidity('');
		}
	}

	if (inputElement.validity.valid) {
		hideErrorMessage(inputElement, errorElement);
	} else {
		showErrorMessage(inputElement, errorElement);
	}
}

function toggleButtonState(inputList, buttonElement) {
	const isValid = inputList.every((inputElement) => inputElement.validity.valid);
	if (isValid) {
		buttonElement.disabled = false;
	} else {
		buttonElement.disabled = true;
	}
}

function hideErrorMessage(inputElement, errorElement) {
	errorElement.textContent = '';
	errorElement.classList.remove('popup__input-error_active');
	inputElement.style.borderBottom = '1px solid rgba(0, 0, 0, .2)';
}

function showErrorMessage(inputElement, errorElement) {
	errorElement.textContent = inputElement.validationMessage;
	errorElement.classList.add('popup__input-error_active');
	inputElement.style.borderBottom = '1px solid rgba(255, 0, 0, 1)';
}

export function clearValidation(inputList, buttonElement) {
	inputList.forEach((inputElement) => {
		hideErrorMessage(inputElement, inputElement.nextElementSibling);
		inputElement.setCustomValidity('');
	});
	toggleButtonState(inputList, buttonElement);
}
