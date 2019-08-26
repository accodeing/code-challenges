class StarStruckRating extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.stars = this.getAttribute("stars");
    }
    get rating() {
        return parseInt(this.getAttribute("rating")) || 0;
    }
    set rating(val) {
        let new_value = Math.min(this.stars, parseInt(val) || 0);
        const change = new_value - this.rating;
        if (change === 0 && new_value === 1) {
            new_value = 0;
        }
        this.setAttribute("rating", new_value);
        this.after_rating_change(change);
    }
    get stars() {
        return parseInt(this.getAttribute("stars"));
    }
    set stars(val) {
        this.setAttribute("stars", parseInt(val) || 5);
        this.rating = Math.min(this.rating, this.stars);
        this.render_stars();
    }
    render_stars() {
        Array.from(this.shadowRoot.children).forEach(child => {
            this.shadowRoot.removeChild(child);
        });
        for (let i = 1; i <= this.stars; i++) {
            const child = document.createElement("heimr-star-struck");
            child.addEventListener("change", () => {
                this.rating = i;
            });
            this.shadowRoot.appendChild(child);
        }
        this.after_rating_change(0);
    }
    after_rating_change(change) {
        Array.from(this.shadowRoot.children).forEach((child, index) => {
            child.struck = index < this.rating ? true : false;
        });
        this.dispatchEvent(new CustomEvent("rating_change", {
            detail: { rating: this.rating, max: this.stars },
            composed: true,
            bubbles: true
        }));
    }
}
window.customElements.define("heimr-star-struck-rating", StarStruckRating);
//# sourceMappingURL=heimr-star-struck-rating.js.map
