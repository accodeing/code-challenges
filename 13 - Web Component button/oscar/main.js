const tmpl = document.createElement('template');
tmpl.innerHTML = `
<style>
button { 
    background-color: mediumaquamarine; color: saddlebrown; font-size: 2rem; width: 100px; height: 100x;  
}

::slotted(h1) {
    font-weight: 800;
    font-size: 4rem;
    color: blanchedalmond;
}

</style>
<button><slot></slot> the Kool button</button>
`;

window.customElements.define(
  'test-button',
  class KoolButton extends HTMLElement {
    constructor() {
      super();

      let shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
  }
);
