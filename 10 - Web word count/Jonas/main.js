const form = document.querySelector('.form');
const word_field = document.querySelector('.form__field-word');
const letter_field = document.querySelector('.form__field-letter');
const count_output = document.querySelector('.count');
const text_width_element = document.querySelector('.text-width');


const text_width = text => {
    text_width_element.innerText = text;

    console.log( 'width', text_width_element.offsetWidth );

    return text_width_element.offsetWidth;
};

const count = () => {
  const word = word_field.value;
  const letter = letter_field.value;

  if( !word || !letter ){ return 0; }

  const regex = new RegExp( letter, 'g' );
  const count = (word.match(regex) || []).length;

  return count;
}

const update = () => {
  word_field.style.width = text_width( word_field.value || word_field.placeholder ) + 'px'
  letter_field.style.width = text_width( letter_field.value || letter_field.placeholder ) + 'px'
  count_output.innerText = count();
}

update();

form.addEventListener( 'change', update );
form.addEventListener( 'keyup', update );
form.addEventListener( 'paste', update );

word_field.addEventListener("keyup", function (event) {
  if (word_field.validity.typeMismatch) {
    word_field.setCustomValidity("The field should only contain one word, no special characters or spaces.");
  } else {
    word_field.setCustomValidity("");
  }
});

letter_field.addEventListener("keyup", function (event) {
  if (letter_field.validity.typeMismatch) {
    letter_field.setCustomValidity("The field should only contain a single letter, no special characters or spaces.");
  } else {
    letter_field.setCustomValidity("");
  }
});
