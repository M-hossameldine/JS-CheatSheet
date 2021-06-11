// Array.from()
/*
  Array.from(iterable, [ mapFunction]),
  also accepts an iterable and transforms it into an array.
*/
const message = 'Hi!';
const chars = Array.from(message);
console.log(chars); // -> ['H', 'i', '!']