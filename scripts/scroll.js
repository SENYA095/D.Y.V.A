let lastScrollY = 0;

window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  const currentScrollY = window.pageYOffset;

  if (currentScrollY > lastScrollY) {
    // При прокрутці вниз — приховати хедер
    header.classList.add('hidden');
  } else {
    // При прокрутці вгору — показати хедер
    header.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
});
