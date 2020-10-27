document.querySelector('.main-navigation__mobile-menu-toggle').addEventListener('click', event => {
  document.querySelector('.main-navigation').classList.toggle('main-navigation--is-active');
});

function changeColorMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}