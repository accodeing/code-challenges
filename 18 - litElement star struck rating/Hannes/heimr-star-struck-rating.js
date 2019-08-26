import { LitElement } from 'lit-element';

class LitElementStarStruckRating extends LitElement {
    constructor() {
        super();
        this.stars = this.getAttribute("stars");
        this.rating = this.getAttribute("rating") || 0;
    }
    static get properties() {
        return {
            stars: { type: Number },
            rating: { type: Number },
        };
    }
    set rating(val) {
        this.old_value = this._rating;
        let new_value = Math.min(this.stars, parseInt(val) || 0);
        const change = new_value - this.rating;
        if (change === 0 && new_value === 1) {
            new_value = 0;
        }
        this._rating = new_value;
        this.requestUpdate("rating", old_value);
    }
    set stars(val) {
        this.old_value = this._stars;
        this._stars = parseInt(val) || 5;
        this.rating(Math.min(this._rating, this._stars));
        this.requestUpdate("stars", old_value);
    }
}
window.customElements.define("lit-heimr-star-struck", LitElementStarStruckRating);
//# sourceMappingURL=heimr-star-struck-rating.js.map
