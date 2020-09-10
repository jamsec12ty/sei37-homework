// ## Text Soup
// Using HTML, CSS and JS + jQuery, create a web page which prints a random word from a large sample of text,
// in a random position on the page, every 100 milliseconds.
// #### Hints:
// - Grab some plain text (20-50 paragraphs should do) from one the top 100 novels in the public domain at
//  [Project Gutenberg](https://www.gutenberg.org/browse/scores/top), and paste the text into a hidden `<div>`
//   element in your HTML file (use CSS to hide it).
// - Use jQuery to get the contents of the div as a string, then split up the string into an array of words.
// - Re-use the `getRandomElementFromArray()` function we wrote at the end of week 1 to pick a random word
// from the array.
// - Use jQuery to 1) create a new DIV with that word as its contents, 2) set the DIV to appear at a random
// position on the page , and 3) append it to the DOM.
// #### Bonus:
// - Fade the text in to make it appear, and then fade it out to disappear, to stop the page getting too dense
//  with texty text.
// - Try random colours, random font sizes, rotation, whatever floats your boat.



$(document).ready(function(){
let ranArray = [];
const str = $('#one').val();

ranArray = str.split("");
  const generateRandomInt = (x) => {
    const randomNum = Math.random() * 10;
    const randomInt = Math.floor(randomNum);
    return randomInt;
  };

  const getRandomElementFromArray = (ranArray) => {
    const randomIndex = generateRandomInt(ranArray.length);
    const randomItem = ranArray[randomIndex];
    return randomItem;
  };


const randomWordDisplay = () => {
  const $blob = $('<div class="blob">');
  let word = getRandomElementFromArray();
$('.blob').text(word);
  // Set the position and colour etc using .css()
  $blob.css({
    top:  yPos * (100) + 'px', // how far from the top?
    left: xPos * (100) + 'px', // how far from the left?
  });

  // Add the new div to the page
  $('body').append( $blob );

};
setTimeout(randomWordDisplay(), 100);

});
