const navigationList = document.querySelector('.navigation__list');
const navigationButton = document.querySelector('.navigation__button');
const navigationToggle = navigationButton.querySelector('.navigation__toggle');
const navigationClue = navigationButton.querySelector('.navigation__clue');

navigationButton.addEventListener('click', () => {
  navigationToggle.classList.toggle('navigation__toggle--open');
  navigationList.classList.toggle('navigation__list--open');
  navigationList.classList.contains('navigation__list--open') ? navigationClue.textContent = 'Закрыть меню.' : navigationClue.textContent = 'Открыть меню.';
});
