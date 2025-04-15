const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

let currentIndex = 0;

function updateSlider() {
		slider.style.transform = `translateX(-${currentIndex * 444}px)`;
}

document.getElementById('next').addEventListener('click', () => {
	const slidesPerView = 2;
		if (currentIndex < totalSlides - slidesPerView) {
				currentIndex++;
		} else {
				currentIndex = 0; // Повернення до першого слайду
		}
		updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
		if (currentIndex > 0) {
				currentIndex--;
		} else {
				currentIndex = totalSlides - 2; // Перехід до останнього слайду
		}
		updateSlider();
});

document.getElementById('next-btn').addEventListener('click', () => {
	const slidesPerView = 2;
		if (currentIndex < totalSlides - slidesPerView) {
				currentIndex++;
		} else {
				currentIndex = 0; // Повернення до першого слайду
		}
		updateSlider();
});

document.getElementById('prev-btn').addEventListener('click', () => {
		if (currentIndex > 0) {
				currentIndex--;
		} else {
				currentIndex = totalSlides - 2; // Перехід до останнього слайду
		}
		updateSlider();
});