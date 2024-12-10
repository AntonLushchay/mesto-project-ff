import { checkResponse } from '../utils.js';

const config = {
	baseUrl: 'https://nomoreparties.co/v1/wff-cohort-15',
	headers: {
		authorization: '6ecdd90f-2ff6-4f8a-9fae-be11c25c4731',
		'Content-Type': 'application/json',
	},
};

export async function request(endPoint, metod, data) {
	try {
		const options = {
			method: `${metod}`,
			headers: config.headers,
		};

		if (data) {
			options.body = JSON.stringify(data);
		}

		const response = await fetch(`${config.baseUrl}${endPoint}`, options);

		return await checkResponse(response);
	} catch (err) {
		console.log('Ошибка запроса к серверу: ' + err);
		throw err;
	}
}

export async function isImgReq(url) {
	try {
		const response = await fetch(url, {
			method: 'HEAD',
		});

		if (!response.ok) {
			return Promise.reject(`Ошибка: ${res.status}`);
		}

		const contentType = response.headers.get('Content-Type');

		if (!contentType || !contentType.startsWith('image/')) {
			throw new Error('Не картинка ваша ссылка');
		}
	} catch (err) {
		console.log('Ошибка функции isImgReq: ' + err);
		throw err;
	}
}
