/*
  Math.min()
  Math.max()
  Math.random()
  Math.floor()
  Math.ceil()
  Math.round()
  Math.pow()
  Math.abs()
  Math.hypot()
  Math.trunc()
*/

// Math.min()
/* Static function return the lowest-valued number passed into it, or NAN if any parameter isn't a number */
console.log(Math.min(2, -1, 3)); // -> -1
let arr1 = [2, 8, 0];
console.log(Math.min(...arr1)); // -> 0

// Math.max()
/* Function returns the largest of the zero or more number given as input parameters or NAN if any parameter isn't a number*/
console.log(Math.max(1, 2, 0)); // -> 2
console.log(Math.max(...[-9, -6, -1])); // -> -1

// Math.random();
/*
 * Function returns a psuedorandom number between 0 (inclusive) and 1 (exclusive) when it's called
 * Note: to produce random whole numbers: multiply it by( the maximum value you want to get + or - 1 ) and rounds it up or down using other Math methods
 */

console.log(Math.random()); // -> 0.9387792823351946
console.log(Math.random() * 10); // 0 <= return value < 10

// Math.floor()
/*
 * Function rounds down to the nearsed Whole number
 */
console.log(Math.floor(6.6)); // -> 6

// Math.ceil()
/*
 * Function rounds up to the neares whole number
 */
console.log(Math.ceil(9.4)); // -> 10

// Math.round()
/*
 * Function rounds to the nearest number
 */
console.log(Math.round(5.3)); // -> 5
console.log(Math.round(5.8)); // -> 6

// Math.pow()
/* Function returns the base to the exponent power, as in base^exponent*/
console.log(Math.pow(2, 3)); // -> 8

// Math.abs()
/*
 * Return absolute values
 * Negates negative values, positive values stays as there are
 */
console.log(Math.abs(-9)); // -> 9
console.log(Math.abs(9)); // -> 9

// Math.hypot( , , , )
/*
 * Function returns the square root of the sum of squares of its arguments
 */

Math.hypot(3, 4); // -> 5
console.log(Math.hypot(3, 4, 5)); // -> 7.0710678118654755
let point1 = { x1: 1, y1: 6 },
  point2 = { x2: 4, y2: 2 };
console.log(Math.hypot(point1.x1 - point2.x2), point1.y1 - point2.y2); // -> 5

// Math.trunc()
/*
 * function returns the integer of a number by removing any fractional digits.
 */
console.log(Math.trunc(19.25)); // -> 13
