import { LitElement, html } from 'lit-element';

import './style.css'

class LitElementStarStruck extends LitElement {
  constructor() {
    super();
    this.struck = false;
  }

  static get properties() {
    return {
      struck: { type: Boolean },
    };
  }

  handle_strike(event) {
    this.struck = !this.struck;
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: this.struck,
        composed: true,
        bubbles: true
      })
    );
  }

  render(){
    return html`<div class="striking_star${ this.struck ? ' struck' : '' }" @click=${this.handle_strike}>
      <svg viewBox="0 0 512 512" class="star">
        <polygon stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919"/>
      </svg>
      <svg viewBox="0 0 512 512" class="sparkles">
        <circle cx="100" cy="255" r="8" />
        <circle cx="200" cy="455" r="10" />
        <circle cx="455" cy="300" r="9" />
        <circle cx="255" cy="55" r="5" />
      </svg>
      <svg viewBox="-300 -300 812 812" class="sparkles">
        <circle cx="100" cy="255" r="8" />
        <circle cx="200" cy="455" r="10" />
        <circle cx="455" cy="300" r="9" />
        <circle cx="255" cy="55" r="5" />
      </svg>
      <svg viewBox="0 0 512 512" class="more_sparkles">
        <circle cx="50" cy="255" r="8" />
        <circle cx="200" cy="455" r="7" />
        <circle cx="455" cy="300" r="9" />
        <circle cx="255" cy="55" r="10" />
      </svg>
      <svg viewBox="0 0 512 512" class="more_sparkles">
        <circle cx="25" cy="255" r="8"></circle>
        <circle cx="250" cy="490" r="10"></circle>
        <circle cx="485" cy="280" r="9"></circle>
        <circle cx="245" cy="95" r="5"></circle>
      </svg>
    </div>`;
  }
}



window.customElements.define('heimr-star-struck', LitElementStarStruck);
