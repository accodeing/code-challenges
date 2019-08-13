import { LitElement, html, css } from '@polymer/lit-element';

/**
 * `heimr-button`
 * Simple Polymer litElement version of the button code challenge
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class HeimrButton extends LitElement {
  static get styles() {
    return [ css`
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
    ` ];
  }

  static get properties() {
    return { icon: String };
  }

  render(){
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return this.icon ?
      html`<button><img src="${this.icon}" /><slot></slot></button>`:
      html`<button><slot></slot></button>`;
  }
}

window.customElements.define('heimr-button', HeimrButton);
