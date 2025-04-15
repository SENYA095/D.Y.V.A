// Отримуємо URL сторінки
const currentUrl = window.location.href.split('?')[0]; // Прибираємо GET-параметри

// Знаходимо посилання мов
const langEn = document.querySelector('#lang-en');
const langRu = document.querySelector('#lang-ru');

// Визначаємо активну мову за URL
if (currentUrl.includes('index.html')) {
  langEn.classList.add('active');
} else if (currentUrl.includes('index-ru.html')) {
  langRu.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
	const langLinks = document.querySelectorAll('.lang');
	const currentLang = document.documentElement.lang || 'en'; // Можна додати <html lang="en">

	langLinks.forEach(link => {
			if (link.dataset.lang === currentLang) {
					link.classList.add('active');
			}
	});
});