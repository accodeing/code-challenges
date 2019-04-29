var menuToggle = document.getElementById('menu-toggle');
var menu = document.getElementById('menu');

function toggleMenu() {
  var display = getComputedStyle(menu, null).display;
  if (display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}

menuToggle.addEventListener('click', toggleMenu);
