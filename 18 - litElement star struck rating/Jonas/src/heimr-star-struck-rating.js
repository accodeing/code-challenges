import { component, html, useState } from "haunted";

const LitElementStarStruckRating = el => {
  const [numberOfStars, setNumberOfStars] = useState(3);
  const [rating, setRating] = useState(0);

  const rating_change = (event, new_rating) => {
    console.log(event);
    event.preventDefault();
    setRating(new_rating);

    el.dispatchEvent(
      new CustomEvent("rating_change", {
        detail: { rating: new_rating, max: numberOfStars },
        composed: true,
        bubbles: true
      })
    );
  };

  let stars_array = new Array(numberOfStars);

  for (let index = 1; index <= numberOfStars; index++) {
    stars_array[index - 1] = index < rating ? true : false;
  }

  console.log(stars_array);

  return html`${stars_array.map(
    (struck, index) =>
      html`<heimr-star-struck struck="${
        struck ? true : false
      }" @change="${event =>
        rating_change(event, index + 1)}"></heimr-star-struck>`
  )}`;
};

customElements.define(
  "heimr-star-struck-rating",
  component(LitElementStarStruckRating)
);
