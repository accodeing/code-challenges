import {LitElement, html, css} from 'lit-element';

class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin-right: 2rem;
      }

      div {
        border: 1px solid lightgrey;
        border-radius: 4px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        width: 200px;
        padding: 1rem;
        font-family: sans-serif;
      }

      h1 {
        text-transform: uppercase;
        color: seagreen;
        font-size: 1rem;
      }

      p {
        color: darkcyan;
      }
    `;
  }

  render() {
    return html`
      <div>
        <h1>A sea green header</h1>
        <p>A dark cyan paragraph</p>
      </div>
    `;
  }
}
customElements.define('my-element', MyElement);
