let template = document.createElement('template');
template.innerHTML = `
  <style>button { background-color: tomato; color: rebeccapurple; width: 200px; height: 200px; font-size: 2rem; }</style>
  <button><slot></slot> My Button<slot name="after"></slot></button>
`;

class MyButton extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('my-button', MyButton);
