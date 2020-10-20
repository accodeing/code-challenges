const mobileMenuToggle = document.querySelector('.menu__mobile-menu-toggle');
const menu = document.querySelector('.menu');

mobileMenuToggle.addEventListener('click', event => {
  menu.classList.toggle('menu--open');
});
