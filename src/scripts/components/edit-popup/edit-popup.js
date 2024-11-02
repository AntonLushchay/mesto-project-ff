// Редактирование имени и информации о себе
export function initializeEditPopup(profileTypePopup, profileCloseButton, closePopup) {
	const profileTitle = document.querySelector('.profile__title');
	const profileDiscription = document.querySelector('.profile__description');

	const profileInputName = profileTypePopup.querySelector('.popup__input_type_name');
	const profileInputDiscription = profileTypePopup.querySelector(
		'.popup__input_type_description',
	);

	profileInputName.value = profileTitle.textContent;
	profileInputDiscription.value = profileDiscription.textContent;

	profileTypePopup.addEventListener('submit', handleFormSubmit);

	function handleFormSubmit(evt) {
		evt.preventDefault();
		profileTitle.textContent = profileInputName.value;
		profileDiscription.textContent = profileInputDiscription.value;
		closePopup(profileTypePopup, profileCloseButton);
		profileTypePopup.removeEventListener('submit', handleFormSubmit);
	}
}
