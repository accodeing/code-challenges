document.querySelector('.main-navigation__mobile-menu-toggle').addEventListener('click', event => {
  document.querySelector('.main-navigation').classList.toggle('main-navigation--is-active');
});

document.querySelector('.theme-switcher__checkbox').addEventListener('change', event => {
  document.documentElement.classList.toggle('dark-mode');
});
