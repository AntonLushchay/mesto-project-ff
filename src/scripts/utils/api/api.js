export async function getUserReq() {
	try {
		const response = await fetch('https://nomoreparties.co/v1/wff-cohort-15/users/me', {
			method: 'GET',
			headers: {
				authorization: '6ecdd90f-2ff6-4f8a-9fae-be11c25c4731',
			},
		});

		if (!response.ok) {
			throw new Error(`Ошибка: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (err) {
		console.log('Ошибка функции getUserReq: ' + err);
		throw err;
	}
}

export async function getCardsReq() {
	try {
		const response = await fetch('https://nomoreparties.co/v1/wff-cohort-15/cards', {
			method: 'GET',
			headers: {
				authorization: '6ecdd90f-2ff6-4f8a-9fae-be11c25c4731',
			},
		});

		if (!response.ok) {
			throw new Error(`Ошибка: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (err) {
		console.log('Ошибка функции getCardsReq: ' + err);
		throw err;
	}
}

export async function UserUpdatingReq(profileData) {
	try {
		const response = await fetch('https://nomoreparties.co/v1/wff-cohort-15/users/me', {
			method: 'PATCH',
			headers: {
				authorization: '6ecdd90f-2ff6-4f8a-9fae-be11c25c4731',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(profileData),
		});

		if (!response.ok) {
			throw new Error(`Ошибка: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (err) {
		console.log('Ошибка функции UserUpdatingReq: ' + err);
		throw err;
	}
}

export async function addNewCardReq(cardData) {
	try {
		const response = await fetch('https://nomoreparties.co/v1/wff-cohort-15/cards', {
			method: 'POST',
			headers: {
				authorization: '6ecdd90f-2ff6-4f8a-9fae-be11c25c4731',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(cardData),
		});

		if (!response.ok) {
			throw new Error(`Ошибка: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (err) {
		console.log('Ошибка функции addNewCardReq: ' + err);
		throw err;
	}
}

export async function cardDeleteReq(cardId) {
	try {
		const response = await fetch(`https://nomoreparties.co/v1/wff-cohort-15/cards/${cardId}`, {
			method: 'DELETE',
			headers: {
				authorization: '6ecdd90f-2ff6-4f8a-9fae-be11c25c4731',
			},
		});

		if (!response.ok) {
			throw new Error(`Ошибка: ${response.status}`);
		}
	} catch (err) {
		console.log('Ошибка функции cardDeleteReq: ' + err);
		throw err;
	}
}

export async function likeCardReq(cardId, metod) {
	try {
		const response = await fetch(`https://nomoreparties.co/v1/wff-cohort-15/cards/likes/${cardId}`, {
			method: `${metod}`,
			headers: {
				authorization: '6ecdd90f-2ff6-4f8a-9fae-be11c25c4731',
			},
		});

		if (!response.ok) {
			throw new Error(`Ошибка: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (err) {
		console.log('Ошибка функции likeCardReq: ' + err);
		throw err;
	}
}

export async function isImgReq(url) {
	try {
		const response = await fetch(url, {
			method: 'HEAD',
		});

		if (!response.ok) {
			throw new Error(`Ошибка: ${response.status}`);
		}

		const contentType = response.headers.get('Content-Type');

		if (!contentType || !contentType.startsWith('image/')) {
			throw new Error('Не картинка ваша ссылка');
		}
	} catch (err) {
		console.log('Ошибка функции isImgReq: ' + err);
		return false;
	}
}

export async function avatarUpdateReq(avatarUrl) {
	try {
		const response = await fetch('https://nomoreparties.co/v1/wff-cohort-15/users/me/avatar', {
			method: 'PATCH',
			headers: {
				authorization: '6ecdd90f-2ff6-4f8a-9fae-be11c25c4731',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ avatar: avatarUrl }),
		});

		if (!response.ok) {
			throw new Error(`Ошибка: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (err) {
		console.log('Ошибка функции avatarUpdateReq: ' + err);
		throw err;
	}
}
