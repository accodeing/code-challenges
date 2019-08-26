import { LitElement, html, css } from "lit-element";

const template = document.createElement("template");
template.innerHTML = `
<style>
  :host {
    display: inline-block;
  }

  @keyframes star_struck {
    0% {
      opacity: 1;
      transform: scale(1);
      fill: var(--heimr-star-struck__unlit-fill, #b7dff2);
      stroke: var(--heimr-star-struck__unlit-stroke, #9ac5da);
    }
    12.5% {
      opacity: 0.8;
      transform: scale(0.9);
    }
    25% {
      opacity: 0.5;
      transform: scale(0.75);
      fill: var(--heimr-star-struck__unlit-fill, #b7dff2);
      stroke: var(--heimr-star-struck__unlit-stroke, #9ac5da);
    }
    37.5% {
      opacity: 0;
      transform: scale(0);
      fill: var(--heimr-star-struck__unlit-fill, #b7dff2);
      stroke: var(--heimr-star-struck__unlit-stroke, #9ac5da);
    }
    50% {
      opacity: 1;
      transform: scale(0.75);
      fill: var(--heimr-star-struck__lit-fill, #fed702);
      stroke: var(--heimr-star-struck__lit-stroke, #e8c400);
    }
    75% {
      transform: scale(1.2);
    }
    87.5% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes star_unstruck {
    0% {
      transform: scale(1);
      fill: var(--heimr-star-struck__lit-fill, #fed702);
      stroke: var(--heimr-star-struck__lit-stroke, #e8c400);
    }

    40% {
      transform: scale(.75);
      fill: var(--heimr-star-struck__lit-fill, #fed702);
      stroke: var(--heimr-star-struck__lit-stroke, #e8c400);
    }

    50% {
      transform: scale(.75);
      fill: var(--heimr-star-struck__unlit-fill, #b7dff2);
      stroke: var(--heimr-star-struck__unlit-stroke, #9ac5da);
    }

    90% {
      transform: scale(1.2);
    }

    95% {
      transform: scale(.95);
    }

    100% {
      transform: scale(1);
      fill: var(--heimr-star-struck__unlit-fill, #b7dff2);
      stroke: var(--heimr-star-struck__unlit-stroke, #9ac5da);
    }
  }

  @keyframes star_nova {
    0% {
      width: 0em;
      height: 0em;
      border: 0em solid var(--heimr-star-struck__lit-fill, #fed702);
    }
    50% {
      width: 1em;
      height: 1em;
      border: .5em solid var(--heimr-star-struck__lit-fill, #fed702);
    }
    98% {
      width: 1.3em;
      height: 1.3em;
      border: .0625em solid var(--heimr-star-struck__lit-fill--light, #ffee94);
    }
    99% {
      width: 1.3em;
      height: 1.3em;
      border: 0em solid var(--heimr-star-struck__lit-fill--light, #ffee94)00;
    }
    100% {
      border: 0em solid var(--heimr-star-struck__lit-fill--light, #ffee94);
    }
  }

  @keyframes star_sparkles {
    0% {
      width: 100%;
      height: 100%;
      opacity: 1;
    }
    50% {
      width: 225%;
      height: 225%;
      opacity: .75;
      animation-timing-function: ease-in-out;
    }
    99% {
      opacity: .5;
      fill: var(--heimr-star-struck__lit-fill--light, #ffee94);
    }
    100% {
      width: 250%;
      height: 250%;
      opacity: 0;
      animation-timing-function: ease-out;
    }
  }

  @keyframes star_more_sparkles {
    0% {
      width: 100%;
      height: 100%;
      opacity: 1;
    }
    50% {
      width: 250%;
      height: 250%;
      opacity: .75;
      animation-timing-function: ease-in-out;
    }
    99% {
      opacity: .5;
      fill: var(--heimr-star-struck__lit-fill--light, #ffee94);
    }
    100% {
      width: 275%;
      height: 275%;
      opacity: 0;
      animation-timing-function: ease-out;
    }
  }

  .striking_star {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1em;
    height: 1em;
    position: relative;
    fill: var(--heimr-star-struck__unlit-fill, #b7dff2);
    stroke: var(--heimr-star-struck__unlit-stroke, #9ac5da);
  }

  .striking_star .star {
    position: absolute;
    width: 1em;
    height: 1em;
    animation: star_unstruck 200ms 1;
  }

  .striking_star .sparkles,
  .striking_star .more_sparkles {
    position: absolute;
    width: 0em;
    height: 0em;
    fill: var(--heimr-star-struck__lit-fill, #fed702);
    stroke: var(--heimr-star-struck__lit-stroke, #e8c400);
  }

  .striking_star.struck {
    fill: var(--heimr-star-struck__lit-fill, #fed702);
    stroke: var(--heimr-star-struck__lit-stroke, #e8c400);
  }

  .striking_star.struck .star {
    animation: star_struck 600ms 1;
  }

  .striking_star.struck .sparkles {
    animation: star_sparkles 400ms 1;
    animation-delay: 150ms;
  }

  .striking_star.struck .more_sparkles {
    transform: rotate(135deg);
    animation: star_more_sparkles 400ms 1;
  }

  .striking_star.struck::after {
    position: absolute;
    box-sizing: border-box;
    content: "";
    border-radius: 50%;
    animation: star_nova 300ms 1;
  }
</style>
<div class="striking_star">
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
</div>
`;

class PlainStarStruck extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));

    this._struck = !!this.hasAttribute("struck");
    this.root_element = shadowRoot.querySelector(".striking_star");

    this.root_element.addEventListener("click", event => {
      this._struck = !this._struck;
      this.after_state_change();
      this.dispatchEvent(
        new CustomEvent("change", {
          detail: this._struck,
          composed: true,
          bubbles: true,
        }),
      );
    });
  }

  static get observedAttributes() {
    return ["struck"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "struck":
        this._struck = this.hasAttribute("struck");
        break;
    }
  }

  get struck() {
    return this.hasAttribute("struck");
  }

  set struck(val) {
    this._struck = !!val;
    this.after_state_change();
  }

  after_state_change() {
    if (this._struck) {
      this.root_element.classList.add("struck");
      this.setAttribute("struck", "");
    } else {
      this.root_element.classList.remove("struck");
      this.removeAttribute("struck");
    }
  }
}

class LitElementStarStruck extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
      }

      @keyframes star_struck {
        0% {
          opacity: 1;
          transform: scale(1);
          fill: var(--heimr-star-struck__unlit-fill, #b7dff2);
          stroke: var(--heimr-star-struck__unlit-stroke, #9ac5da);
        }
        12.5% {
          opacity: 0.8;
          transform: scale(0.9);
        }
        25% {
          opacity: 0.5;
          transform: scale(0.75);
          fill: var(--heimr-star-struck__unlit-fill, #b7dff2);
          stroke: var(--heimr-star-struck__unlit-stroke, #9ac5da);
        }
        37.5% {
          opacity: 0;
          transform: scale(0);
          fill: var(--heimr-star-struck__unlit-fill, #b7dff2);
          stroke: var(--heimr-star-struck__unlit-stroke, #9ac5da);
        }
        50% {
          opacity: 1;
          transform: scale(0.75);
          fill: var(--heimr-star-struck__lit-fill, #fed702);
          stroke: var(--heimr-star-struck__lit-stroke, #e8c400);
        }
        75% {
          transform: scale(1.2);
        }
        87.5% {
          transform: scale(0.9);
        }
        100% {
          transform: scale(1);
        }
      }

      @keyframes star_unstruck {
        0% {
          transform: scale(1);
          fill: var(--heimr-star-struck__lit-fill, #fed702);
          stroke: var(--heimr-star-struck__lit-stroke, #e8c400);
        }

        40% {
          transform: scale(0.75);
          fill: var(--heimr-star-struck__lit-fill, #fed702);
          stroke: var(--heimr-star-struck__lit-stroke, #e8c400);
        }

        50% {
          transform: scale(0.75);
          fill: var(--heimr-star-struck__unlit-fill, #b7dff2);
          stroke: var(--heimr-star-struck__unlit-stroke, #9ac5da);
        }

        90% {
          transform: scale(1.2);
        }

        95% {
          transform: scale(0.95);
        }

        100% {
          transform: scale(1);
          fill: var(--heimr-star-struck__unlit-fill, #b7dff2);
          stroke: var(--heimr-star-struck__unlit-stroke, #9ac5da);
        }
      }

      @keyframes star_nova {
        0% {
          width: 0em;
          height: 0em;
          border: 0em solid var(--heimr-star-struck__lit-fill, #fed702);
        }
        50% {
          width: 1em;
          height: 1em;
          border: 0.5em solid var(--heimr-star-struck__lit-fill, #fed702);
        }
        98% {
          width: 1.3em;
          height: 1.3em;
          border: 0.0625em solid
            var(--heimr-star-struck__lit-fill--light, #ffee94);
        }
        99% {
          width: 1.3em;
          height: 1.3em;
          border: 0em solid var(--heimr-star-struck__lit-fill--light, #ffee94)
            00;
        }
        100% {
          border: 0em solid var(--heimr-star-struck__lit-fill--light, #ffee94);
        }
      }

      @keyframes star_sparkles {
        0% {
          width: 100%;
          height: 100%;
          opacity: 1;
        }
        50% {
          width: 225%;
          height: 225%;
          opacity: 0.75;
          animation-timing-function: ease-in-out;
        }
        99% {
          opacity: 0.5;
          fill: var(--heimr-star-struck__lit-fill--light, #ffee94);
        }
        100% {
          width: 250%;
          height: 250%;
          opacity: 0;
          animation-timing-function: ease-out;
        }
      }

      @keyframes star_more_sparkles {
        0% {
          width: 100%;
          height: 100%;
          opacity: 1;
        }
        50% {
          width: 250%;
          height: 250%;
          opacity: 0.75;
          animation-timing-function: ease-in-out;
        }
        99% {
          opacity: 0.5;
          fill: var(--heimr-star-struck__lit-fill--light, #ffee94);
        }
        100% {
          width: 275%;
          height: 275%;
          opacity: 0;
          animation-timing-function: ease-out;
        }
      }

      .striking_star {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 1em;
        height: 1em;
        position: relative;
        fill: var(--heimr-star-struck__unlit-fill, #b7dff2);
        stroke: var(--heimr-star-struck__unlit-stroke, #9ac5da);
      }

      .striking_star .star {
        position: absolute;
        width: 1em;
        height: 1em;
        animation: star_unstruck 200ms 1;
      }

      .striking_star .sparkles,
      .striking_star .more_sparkles {
        position: absolute;
        width: 0em;
        height: 0em;
        fill: var(--heimr-star-struck__lit-fill, #fed702);
        stroke: var(--heimr-star-struck__lit-stroke, #e8c400);
      }

      .striking_star.struck {
        fill: var(--heimr-star-struck__lit-fill, #fed702);
        stroke: var(--heimr-star-struck__lit-stroke, #e8c400);
      }

      .striking_star.struck .star {
        animation: star_struck 600ms 1;
      }

      .striking_star.struck .sparkles {
        animation: star_sparkles 400ms 1;
        animation-delay: 150ms;
      }

      .striking_star.struck .more_sparkles {
        transform: rotate(135deg);
        animation: star_more_sparkles 400ms 1;
      }

      .striking_star.struck::after {
        position: absolute;
        box-sizing: border-box;
        content: "";
        border-radius: 50%;
        animation: star_nova 300ms 1;
      }
    `;
  }

  constructor() {
    super();
    this.struck = false;
  }

  static get properties() {
    return {
      struck: { type: String },
    };
  }

  handleClick(event) {
    this.struck = !this.struck;
  }

  render() {
    return html`
      <div
        class="striking_star ${this.struck ? " struck" : ""}"
        @click="${this.handleClick}"
      >
        <svg viewBox="0 0 512 512" class="star">
          <polygon
            stroke-width="37.6152"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919"
          />
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
      </div>
    `;
  }
}

window.customElements.define("heimr-star-struck", PlainStarStruck);
window.customElements.define("lit-heimr-star-struck", LitElementStarStruck);
