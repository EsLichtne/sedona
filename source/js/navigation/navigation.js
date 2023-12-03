const menu = document.querySelector('.navigation__list');
const button = document.querySelector('.navigation__button');
const toggle = button.querySelector('.navigation__toggle');
const clue = button.querySelector('.navigation__clue');
const TABLET_WIDTH = 640;

const openList = () => {
  toggle.classList.add('navigation__toggle--open');
  menu.classList.add('navigation__list--open');
  clue.textContent = 'Закрыть меню.';
  menu.style.transform = `translateY(0)`;
};

const closeList = () => {
  toggle.classList.remove('navigation__toggle--open');
  menu.classList.remove('navigation__list--open');
  clue.textContent = 'Открыть меню.';
  menu.style.transform = `translateY(-${menu.offsetHeight}px)`;
};

const onButtonClick = () => {
  menu.classList.contains('navigation__list--open')
    ? closeList()
    : openList();
};

const renderMenu = () => {
  menu.classList.contains('navigation__list--open')
    ? openList()
    : closeList();

  button.addEventListener('click', onButtonClick);
};

const closeMenu = () => {
  menu.style.transform = `translateY(0)`;
  button.removeEventListener('click', onButtonClick);
};

if (window.screen.width < TABLET_WIDTH) {
  menu.style.transform = `translateY(-${menu.offsetHeight}px)`;
  renderMenu();
}

window.addEventListener('resize', () => {
  window.screen.width < TABLET_WIDTH
    ? renderMenu()
    : closeMenu();
});
