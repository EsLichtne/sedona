const list = document.querySelector('.navigation__list');
const button = document.querySelector('.navigation__button');
const toggle = button.querySelector('.navigation__toggle');
const clue = button.querySelector('.navigation__clue');

let listHeight = list.offsetHeight;
list.style.transform = `translateY(-${listHeight}px)`;

button.addEventListener('click', () => {
  toggle.classList.toggle('navigation__toggle--open');
  list.classList.toggle('navigation__list--open');
  listHeight = list.offsetHeight;
  if (list.classList.contains('navigation__list--open')) {
    clue.textContent = 'Закрыть меню.';
    list.style.transform = `translateY(0)`;
  } else {
    clue.textContent = 'Открыть меню.';
    list.style.transform = `translateY(-${listHeight}px)`;
  }
});
