const showMenuButton = document.querySelector('.header__button');
const closeMenuButton = document.querySelector('.close__button');
const overlayElement = document.querySelector('.overlay');
const menuElement = document.querySelector('.header__nav');
const screenChangeWidth = 910;

const showMenu = () => {
  if (!menuElement.classList.contains('show__menu')) {
    showMenuButton.style.display = 'none';
    menuElement.classList.add('show__menu');
    overlayElement.classList.add('show__overlay');
  }
};

const closeMenu = () => {
  overlayElement.classList.remove('show__overlay');
  menuElement.classList.remove('show__menu');
  showMenuButton.style.display = 'block';
};

const defaultView = () => {
  const currentWindowWidth = window.innerWidth;
  if (
    currentWindowWidth > prevWwindowWidth &&
    currentWindowWidth > screenChangeWidth
  ) {
    showMenuButton.style.display = 'none';
    if (menuElement.classList.contains('show__menu')) {
      menuElement.classList.remove('show__menu');
    }
    if (overlayElement.classList.contains('show__overlay')) {
      overlayElement.classList.remove('show__overlay');
    }
  }
  if (
    currentWindowWidth < prevWwindowWidth &&
    currentWindowWidth < screenChangeWidth
  ) {
    showMenuButton.style.display = 'block';
  }

  prevWwindowWidth = currentWindowWidth;
};

let prevWwindowWidth = 0;
showMenuButton.addEventListener('click', showMenu);
closeMenuButton.addEventListener('click', closeMenu);
window.addEventListener('resize', defaultView);
