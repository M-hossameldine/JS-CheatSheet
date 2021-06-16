/* links */
/*
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#using_arrow_functions_and_array.from

*/

// Array.from()
/*
  Array.from(iterable, [ mapFunction]),
  also accepts an iterable and transforms it into an array.
*/
const message = 'Hi!';
const chars = Array.from(message);
console.log(chars); // -> ['H', 'i', '!']

/*
array-like:
  An array-like or iterable object (such as: Map and Set) to convert to an array.

mapFn:
  Map function to call on every element of the array.

thisArg:
  Value to use as this when executing mapFn.

/********************* Return Value ******************/
/* a new array instance */

/***************************** another equivalent***********************************/
/* 
 Array.from(obj, mapFn, thisArg)
 === Array.from(obj).map(mapFn, thisArg)
*/

/******************************* Eaxmples **************************************/
// Array from a string 
console.log(Array.from("Hi!")) // -> ['H', 'i', '!'];

// Array from Set
const set = new Set(['Ali', 'Wafaa', 'Mahmoud', 'Nesma'])
console.log(Array.from(set))
// -> ['Ali', 'Wafaa', 'Mahmoud', 'Nesma']

// Array from Map
const mapper = new Map ([['a', 'A'], ['b', 'B']]);
console.log(Array.from(mapper))          // -> [['a', 'A'], ['b', 'B']]
console.log(Array.from(mapper.values())) // -> ['A', 'B']
console.log(Array.from(mapper.keys()))   // -> ['a', 'b']

// Array from a NodeList
/*
const images = document.getElementsByTagName('img');
const sources = Array.from(images, image => image.src);
const insecureSources = sources.filter(link => link.startsWith('http://'));
*/

// Array form an array-like object (arguments)
function f() {
  return Array.from(arguments);
}

console.log(f(1, 2, 3)); // -> [1, 2, 3]


// Using Arrow functions and Array.from()
  /* using and arrow function as the map function to manipulate the elements */
  const mapper2 = Array.from([1, 2, 3], x => x + x);
  console.log(mapper2) //-> [2, 4, 6]

  /* Use arrow function to generate a sequence of numbers 
     Since the array is intialized with `undefined` on each position,
     the value of 'v' below will be `undefined`
     `v` -> element, `i` -> index 
  */
  console.log(Array.from({length: 5}, (v, i) => i)) 
  // -> [0, 1, 2, 3, 4]

// Sequence Generator Function (commonly referred to as "range")
  const range = (start, stop, step) => {
    return Array.from({length: (stop - start) / step + 1}, ( _, i) => start + i * step)
  }

  // Generate numbers range 0..4
  range(0, 4, 1);
  // [0, 1, 2, 3, 4]

  // Generate numbers range 1..10 with step of 2
  range(1, 10, 2);
  // [1, 3, 5, 7, 9]

  // Generate the alphabet using Array.from making use of it being ordered as a sequence
  range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
  // ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]