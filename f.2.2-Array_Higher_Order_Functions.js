// Filter Arrays: array-prototype.filter( Predicate_Method )
/*
 * To Filter Elements of array that passes a certain test method
 * There is a standard built-in method for arrays
 * A Pure Function that does not modify the array it is given and produces a new arraY
*/ 

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(numbers.filter(number => number % 2 == 1));
  // -> [1, 3, 5, 7, 9]


// Array-prototype.map(mapping-method)
/*
 * Transforms an array by applying a function to all of its elements
 * Building new array form the returned values
 * The new array will have the same length as the input array
 * The content will have been mapped to a new form by the function
 * Map is also a pure built-in standard array method
*/

  let people = [{name: 'Hossam', age: 67}, {name: "Ali", age: 98}]
  console.log(people.map( person => person.name));
  // -> ["Hossam", "Ali"]


// Array-prototype.reduce(reduction_mehtod, start value)
/*
 * Sometimes aslo called fold.
 * Combines all elements in the array into a single value
 * It builds a value be repeatedly taking a singel element from the array 
   and combining it withe the current value.
 * If the array contains at least one element, 
   you can omit/ leave off the start argument,
   the method will take first element as it's start value,
   and start reducing at the second element. 
*/

  let oldArray = [1, 2, 3, 4, 5]
  console.log(oldArray.reduce( (a, b) => a + b));
  // -> 15


// ARRAY-PROTOTYPE.some( test-method )
/*
 * "some" for some elements
 * Method tests whether any array element matches a given predicate function
 * returns: true | false;
*/ 

  let numbers = [0, 1, 2, 3, 4];
  console.log(numbers.some( number => number > 0)); // -> true
  console.log(numbers.some( number => number < 0)); // -> false


