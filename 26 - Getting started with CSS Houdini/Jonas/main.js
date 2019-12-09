document.querySelector('.main-navigation__mobile-menu-toggle').addEventListener('click', event => {
  document.querySelector('.main-navigation').classList.toggle('main-navigation--is-active');
});

const start = performance.now();

const tick = (now) => {
  const count = Math.floor(now - start) / 100;
  document.documentElement.style.setProperty( '--tick', count );
  requestAnimationFrame( tick );
}

requestAnimationFrame( tick );

console.log('loaded');
