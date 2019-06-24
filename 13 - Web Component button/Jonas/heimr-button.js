const plain_template = document.createElement("template");
plain_template.innerHTML = `
<style>
  :host {
    display: block;
    font-family: sans-serif;
    text-align: center;
  }

  button {
    font-size: 1rem;
    background-color: #bd8dbd;
    border-radius: 4px;
    box-shadow: 0 3px 0 #858, 0 3px 5px #aaa;
    padding: .25rem .5rem;
    border: none;
    border-top: 1px solid #e2b9e2;
    margin: .5rem;
  }
</style>
<button><slot></slot></button>
`;

const icon_template = document.createElement("template");
icon_template.innerHTML = `
<style>
  :host {
    display: block;
    font-family: sans-serif;
    text-align: center;
  }

  button {
    font-size: 1rem;
    background-color: #bd8dbd;
    border-radius: 4px;
    box-shadow: 0 3px 0 #858, 0 3px 5px #aaa;
    padding: .25rem .5rem;
    border: none;
    border-top: 1px solid #e2b9e2;
    margin: .5rem;
  }

  img {
    max-height: 1rem;
    display: inline-block;
    vertical-align: middle;
    margin-right: .5rem;
  }
</style>
<button><img src="" /><slot></slot></button>
`;

class Button extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.icon = this.getAttribute("icon");
    if (this.icon) {
      this._shadowRoot.appendChild(icon_template.content.cloneNode(true));
      this._shadowRoot.querySelector("img").src = this.icon;
    } else {
      this._shadowRoot.appendChild(plain_template.content.cloneNode(true));
    }
  }
}

window.customElements.define("heimr-button", Button);
