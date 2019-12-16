CSS.paintWorklet.addModule(
  'https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hilite.js'
)

document
  .querySelector('.main-navigation__mobile-menu-toggle')
  .addEventListener('click', (event) => {
    document
      .querySelector('.main-navigation')
      .classList.toggle('main-navigation--is-active')
  })
