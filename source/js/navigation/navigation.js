const list = document.querySelector('.navigation__list');
const button = document.querySelector('.navigation__button');
const toggle = button.querySelector('.navigation__toggle');
const clue = button.querySelector('.navigation__clue');

navigationButton.addEventListener('click', () => {
  navigationToggle.classList.toggle('navigation__toggle--open');
  navigationList.classList.toggle('navigation__list--open');
  navigationList.classList.contains('navigation__list--open') ? navigationClue.textContent = 'Закрыть меню.' : navigationClue.textContent = 'Открыть меню.';
});
