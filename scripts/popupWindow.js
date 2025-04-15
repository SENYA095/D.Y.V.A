// document.addEventListener('DOMContentLoaded', () => {
// 	const popup = document.getElementById('consent-popup');
// 	const acceptButton = document.getElementById('accept-button');

// 	// Перевіряємо, чи збереглася згода користувача
// 	if (!localStorage.getItem('userConsent')) {
// 			popup.classList.remove('hidden');
// 	}

// 	// Обробляємо натискання кнопки "Погоджуюсь"
// 	acceptButton.addEventListener('click', () => {
// 			localStorage.setItem('userConsent', 'true'); // Зберігаємо згоду в localStorage
// 			popup.classList.add('hidden');
// 	});
// });
document.addEventListener('DOMContentLoaded', () => {
	const popup = document.getElementById('consent-popup');
	const acceptButton = document.getElementById('accept-button');

	// Обробляємо натискання кнопки "Ок"
	acceptButton.addEventListener('click', () => {
			popup.classList.add('visible'); // Додаємо клас, щоб приховати вікно
	});
});