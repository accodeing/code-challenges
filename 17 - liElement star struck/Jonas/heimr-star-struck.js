import { LitElement, html, css } from 'lit-element';

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
        this.dispatchEvent(new CustomEvent("change", {
            detail: this.struck,
            composed: true,
            bubbles: true
        }));
    }
    render() {
        return html `<div class="striking_star${this.struck ? ' struck' : ''}" @click=${this.handle_strike}>
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
    static get styles() { return css `:host {\n  display: inline-block;\n}\n\n@keyframes star_struck {\n  0% {\n    opacity: 1;\n    transform: scale(1);\n    fill: var(--heimr-star-struck__unlit-fill, #b7dff2);\n    stroke: var(--heimr-star-struck__unlit-stroke, #9ac5da);\n  }\n  12.5% {\n    opacity: 0.8;\n    transform: scale(0.9);\n  }\n  25% {\n    opacity: 0.5;\n    transform: scale(0.75);\n    fill: var(--heimr-star-struck__unlit-fill, #b7dff2);\n    stroke: var(--heimr-star-struck__unlit-stroke, #9ac5da);\n  }\n  37.5% {\n    opacity: 0;\n    transform: scale(0);\n    fill: var(--heimr-star-struck__unlit-fill, #b7dff2);\n    stroke: var(--heimr-star-struck__unlit-stroke, #9ac5da);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(0.75);\n    fill: var(--heimr-star-struck__lit-fill, #fed702);\n    stroke: var(--heimr-star-struck__lit-stroke, #e8c400);\n  }\n  75% {\n    transform: scale(1.2);\n  }\n  87.5% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes star_unstruck {\n  0% {\n    transform: scale(1);\n    fill: var(--heimr-star-struck__lit-fill, #fed702);\n    stroke: var(--heimr-star-struck__lit-stroke, #e8c400);\n  }\n\n  40% {\n    transform: scale(.75);\n    fill: var(--heimr-star-struck__lit-fill, #fed702);\n    stroke: var(--heimr-star-struck__lit-stroke, #e8c400);\n  }\n\n  50% {\n    transform: scale(.75);\n    fill: var(--heimr-star-struck__unlit-fill, #b7dff2);\n    stroke: var(--heimr-star-struck__unlit-stroke, #9ac5da);\n  }\n\n  90% {\n    transform: scale(1.2);\n  }\n\n  95% {\n    transform: scale(.95);\n  }\n\n  100% {\n    transform: scale(1);\n    fill: var(--heimr-star-struck__unlit-fill, #b7dff2);\n    stroke: var(--heimr-star-struck__unlit-stroke, #9ac5da);\n  }\n}\n\n@keyframes star_nova {\n  0% {\n    width: 0em;\n    height: 0em;\n    border: 0em solid var(--heimr-star-struck__lit-fill, #fed702);\n  }\n  50% {\n    width: 1em;\n    height: 1em;\n    border: .5em solid var(--heimr-star-struck__lit-fill, #fed702);\n  }\n  98% {\n    width: 1.3em;\n    height: 1.3em;\n    border: .0625em solid var(--heimr-star-struck__lit-fill--light, #ffee94);\n  }\n  99% {\n    width: 1.3em;\n    height: 1.3em;\n    border: 0em solid var(--heimr-star-struck__lit-fill--light, #ffee94)00;\n  }\n  100% {\n    border: 0em solid var(--heimr-star-struck__lit-fill--light, #ffee94);\n  }\n}\n\n@keyframes star_sparkles {\n  0% {\n    width: 100%;\n    height: 100%;\n    opacity: 1;\n  }\n  50% {\n    width: 225%;\n    height: 225%;\n    opacity: .75;\n    animation-timing-function: ease-in-out;\n  }\n  99% {\n    opacity: .5;\n    fill: var(--heimr-star-struck__lit-fill--light, #ffee94);\n  }\n  100% {\n    width: 250%;\n    height: 250%;\n    opacity: 0;\n    animation-timing-function: ease-out;\n  }\n}\n\n@keyframes star_more_sparkles {\n  0% {\n    width: 100%;\n    height: 100%;\n    opacity: 1;\n  }\n  50% {\n    width: 250%;\n    height: 250%;\n    opacity: .75;\n    animation-timing-function: ease-in-out;\n  }\n  99% {\n    opacity: .5;\n    fill: var(--heimr-star-struck__lit-fill--light, #ffee94);\n  }\n  100% {\n    width: 275%;\n    height: 275%;\n    opacity: 0;\n    animation-timing-function: ease-out;\n  }\n}\n\n.striking_star {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 1em;\n  height: 1em;\n  position: relative;\n  fill: var(--heimr-star-struck__unlit-fill, #b7dff2);\n  stroke: var(--heimr-star-struck__unlit-stroke, #9ac5da);\n}\n\n.striking_star .star {\n  position: absolute;\n  width: 1em;\n  height: 1em;\n  animation: star_unstruck 200ms 1;\n}\n\n.striking_star .sparkles,\n.striking_star .more_sparkles {\n  position: absolute;\n  width: 0em;\n  height: 0em;\n  fill: var(--heimr-star-struck__lit-fill, #fed702);\n  stroke: var(--heimr-star-struck__lit-stroke, #e8c400);\n}\n\n.striking_star.struck {\n  fill: var(--heimr-star-struck__lit-fill, #fed702);\n  stroke: var(--heimr-star-struck__lit-stroke, #e8c400);\n}\n\n.striking_star.struck .star {\n  animation: star_struck 600ms 1;\n}\n\n.striking_star.struck .sparkles {\n  animation: star_sparkles 400ms 1;\n  animation-delay: 150ms;\n}\n\n.striking_star.struck .more_sparkles {\n  transform: rotate(135deg);\n  animation: star_more_sparkles 400ms 1;\n}\n\n.striking_star.struck::after {\n  position: absolute;\n  box-sizing: border-box;\n  content: "";\n  border-radius: 50%;\n  animation: star_nova 300ms 1;\n}\n`; }
}
window.customElements.define('heimr-star-struck', LitElementStarStruck);
//# sourceMappingURL=heimr-star-struck.js.map
