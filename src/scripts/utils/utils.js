export function checkResponse(res) {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(`Ошибка внутри промиса: ${res.status}`);
}
