document
  .querySelector('.main-navigation__mobile-menu-toggle')
  .addEventListener('click', event => {
    document
      .querySelector('.main-navigation')
      .classList.toggle('main-navigation--is-active');
  });

var container = document.getElementsByTagName('body')[0];

function toggleNightMode() {
  container.classList.toggle('container--night-mode');
}
