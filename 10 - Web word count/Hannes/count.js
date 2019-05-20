var wordElement = document.getElementById('word');
var letterElement = document.getElementById('letter');
var resultElement = document.getElementById('result');

var countLetters = function() {
  countOccurrences(letterElement.value, wordElement.value);
};

var countOccurrences = function(letter, word) {
  var regExp = new RegExp(letter, 'gi');
  var occurrences = word.match(regExp).length;

  resultElement.innerHTML = occurrences;
};
