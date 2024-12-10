// Валидация форм

const userLang = navigator.language || navigator.userLanguage;
const lang = userLang.startsWith('ru') ? 'ru' : 'en';
const regExp = /^[\p{L}\s-]*$/u;

export function enableValidation(settings) {
	const formList = Array.from(document.querySelectorAll(settings.form));

	const allInputs = [];

	formList.forEach((formElement) => {
		const inputList = Array.from(formElement.querySelectorAll(settings.input));
		const buttonElement = formElement.querySelector(settings.submitButtonSelector);

		toggleButtonState(inputList, buttonElement);

		inputList.forEach((inputElement) => {
			const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

			allInputs.push(inputElement);
			console.log('vs nen1', settings);
			inputElement.addEventListener('input', () => {
				console.log('vs nen2', settings);
				checkInputValidity(inputElement, errorElement, settings);
				toggleButtonState(inputList, buttonElement);
			});
		});
	});

	return allInputs;
}

function checkInputValidity(inputElement, errorElement, settings) {
	if (inputElement.type !== 'url') {
		if (!regExp.test(inputElement.value)) {
			inputElement.setCustomValidity(inputElement.getAttribute(`data-error-message-${lang}`));
		} else {
			inputElement.setCustomValidity('');
		}
	}

	if (inputElement.validity.valid) {
		hideErrorMessage(inputElement, errorElement, settings);
	} else {
		showErrorMessage(inputElement, errorElement, settings);
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

function hideErrorMessage(inputElement, errorElement, settings) {
	errorElement.textContent = '';
	errorElement.classList.remove(settings.erorrSpanActive);
	inputElement.classList.remove(settings.inputInvalid);
}

function showErrorMessage(inputElement, errorElement, settings) {
	errorElement.textContent = inputElement.validationMessage;

	console.log('vs nen2');
	errorElement.classList.add(settings.erorrSpanActive);
	inputElement.classList.add(settings.inputInvalid);
}

export function clearValidation(inputList, settings) {
	inputList.forEach((inputElement) => {
		hideErrorMessage(inputElement, inputElement.nextElementSibling, settings);
		inputElement.setCustomValidity('');
	});

	const buttonElement = inputList[0].form.querySelector(settings.submitButtonSelector);
	toggleButtonState(inputList, buttonElement);
}
