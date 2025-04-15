// document.querySelector('.burger').addEventListener('click',function(){
// 	this.classList.toggle('active');
// 	document.querySelector('.nav').classList.toggle('open');
// })

// document.querySelectorAll('.nav a').forEach(link => {
// 	link.addEventListener('click', () => {
// 			document.querySelector('.burger').classList.remove('active');
// 			document.querySelector('.nav').classList.remove('open');
// 	});
// });
// Додаємо функціональність для бургер-меню
document.querySelector('.burger').addEventListener('click', function () {
	this.classList.toggle('active'); // Активний стан кнопки
	document.querySelector('.nav').classList.toggle('open'); // Відкриття меню
	document.querySelector('.overlay').classList.toggle('active'); // Показуємо/ховаємо затемнення
});

// Закриваємо меню при кліку на пункт меню
document.querySelectorAll('.nav a').forEach(link => {
	link.addEventListener('click', () => {
			document.querySelector('.burger').classList.remove('active'); // Знімаємо активний стан
			document.querySelector('.nav').classList.remove('open'); // Закриваємо меню
			document.querySelector('.overlay').classList.remove('active'); // Ховаємо затемнення
	});
});

// Закриваємо меню при кліку на затемнення
document.querySelector('.overlay').addEventListener('click', () => {
	document.querySelector('.burger').classList.remove('active');
	document.querySelector('.nav').classList.remove('open');
	document.querySelector('.overlay').classList.remove('active');
});