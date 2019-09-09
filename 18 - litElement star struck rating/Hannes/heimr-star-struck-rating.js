import { LitElement } from 'lit-element'

class LitElementStarStruckRating extends LitElement {
  constructor() {
    super()
    this._stars = this.getAttribute('stars')
    this._rating = this.getAttribute('rating') || 0
    console.log(this._stars)
    console.log(this._rating)
  }

  static get properties() {
    return {
      stars: { type: Number },
      rating: { type: Number },
    }
  }

  set rating(val) {
    const oldValue = this._rating
    let newValue = Math.min(this._stars, parseInt(val) || 0)
    const change = newValue - oldValue
    if (change === 0 && newValue === 1) {
      newValue = 0
    }
    this._rating = newValue
    this.requestUpdate('rating', oldValue)
  }

  set stars(val) {
    const oldValue = this._stars
    this._stars = parseInt(val) || 5
    this._rating = Math.min(this._rating, this._stars)
    this.requestUpdate('stars', oldValue)
    this.renderStars()
  }

  renderStars() {
    Array.from(this.shadowRoot.children).forEach((child) => {
      this.shadowRoot.removeChild(child)
    })

    for (let i = 1; i <= this._stars; i++) {
      const child = document.createElement('heimr-star-struck')
      child.addEventListener('change', () => {
        this._rating = i
      })
      this.shadowRoot.appendChild(child)
    }
    this.after_rating_change(0)
  }

  after_rating_change(change) {
    let rating

    Array.from(this.shadowRoot.children).forEach((child, index) => {
      child.struck = index < this._rating ? true : false
    })

    this.dispatchEvent(
      new CustomEvent('rating_change', {
        detail: { rating: this._rating, max: this._stars },
        composed: true,
        bubbles: true,
      })
    )
  }
}
window.customElements.define(
  'lit-heimr-star-struck-rating',
  LitElementStarStruckRating
)
