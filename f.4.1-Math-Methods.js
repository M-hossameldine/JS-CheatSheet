/*
toFixed()

*/

//toFixed()
/* Method formats a number using a fixed-point notation.
 * At some cases this method yields expected values ex: 1.005 results 1.00 instead of getting 1.01
*/
let numObj = 12345.6789;
console.log(numObj.toFixed());  // -> '12346': note rounding, no fractional part 
console.log(numObj.toFixed(1)); // -> '12346.7': note rounding
console.log(numObj.toFixed(2)); // -> '12346.68'
