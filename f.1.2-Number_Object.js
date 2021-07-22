/*
 -Number.isNaN() Vs. global isNaN()

 Links: 
 https://stackoverflow.com/questions/33164725/confusion-between-isnan-and-number-isnan-in-javascript#:~:text=The%20String%20'ponyfoo'%20for%20example,but%20it%20is%20not%20NaN%20.&text=isNaN%20converts%20the%20argument%20to,a%20Number%20and%20is%20NaN%20.

 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN

 
*/

/*********************************************************************/
// Number.isNaN() Vs. global isNaN()
/*********************************************************************/ 
/* The Number.isNan() method determines whether the passed value is NaN and its type is Number. It's a more robust version of the original global isNaN()

Number.isNaN returns whether the provided value equals NaN. This is a very different question from “is this not a number?”.

So isNaN just checks whether the passed value is not a number or cannot be converted into a Number. Number.isNaN on the other hand only checks if the value is equal to NaN (it uses a different algorithm than === though).

The String 'ponyfoo' for example is not a number and cannot be converted into a number, but it is not NaN.
*/
Number.isNaN({}) 
// -> false, {} is not a NaN
Number.isNaN('ponyfoo');
// -> false, 'ponyfoo' is not a NaN
Number.isNaN(NaN);
// -> true, NaN is Nan
Number.isNaN('pony' / 'foo');
// -> true, 'pony' / 'foo' is NaN

isNaN({});
// -> true, {} is not a number
isNaN('ponyfoo')
// -> true, 'ponyfoo' is not a number
isNaN('pony' / 'foo');
// -> true, 'pony' / 'foo' is NaN, NaN is not a number

// This is a false positive and the reason why isNaN is not entirely reliable
isNaN('blabla');   // true: "blabla" is converted to a number.
                   // Parsing this as a number fails and returns NaN


// cases
console.log(Number.isNaN(undefined)) // -> false
console.log(isNaN(undefined))        // -> true

console.log(Number.isNaN(null))      // -> false
console.log(isNaN(null))             // -> false

console.log(Number.isNaN("orange"))  // -> false
console.log(isNaN("orange"))         // -> true

