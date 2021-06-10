// JavaScript Iterators online Article
/*
https://dmitripavlutin.com/javascript-iterators/
*/

// --> Iterables & Iterators (iterable -> iter + able meaning able ot be iterated)

/***********************************************************************************************/
/***********************************************************************************************/
// Iterables (data structure)
/*
  The iterable interface requires the object to contain a method Symbol.iterator that returns an Iterator object

  * An object is iterable when it conforms to Iterable interface
  
  interface Iterable {
    [Symbol.iterator]() {
      // ....
      return Iterator;
    }
  }
  
*/

  
// To know whether object is iterable use the for/of loop
/*
  // In the next example you can not iterate over the properties of person object
  const person = {name: 'Eric', address: 'South Park'};
  for( let prop of person) { console.log(prop);} 
  // -> "TypeError: person is not iterable" 
*/
/***********************************************************************************************/
/***********************************************************************************************/

// The Iterator object
/*
  * The Iterator object is the one that performs iteration over the data structure.
  * The Iterator object must have a method next(), that return an object with properties:
    - value: the item extracted form the collection of the iteration.
    - done: a boolean indicating the end of the iteration
  
  * The Iterator Object must conform to Iterator interface 
  interface Iterator {
    next() {
      // ...
      return{
        value: <value>,
        done: <boolean>
      };
    };
  }
*/

/***********************************************************************************************/
/***********************************************************************************************/
// Array conforms to iterable
const numbers = [1, 3 ,5];

console.log(numbers[Symbol.iterator]()); // -> Array Iterator {} - object
let numberIterator = numbers[Symbol.iterator]();

console.log(numberIterator.next()); // -> {value:1, done: false}
console.log(numberIterator.next()); // -> {value: 3, done: false}
console.log(numberIterator.next()); // -> {value:5, done: false}
console.log(numberIterator.next()); // -> {value:undefined, done: true}

/**************************************************************************************/
/**************************************************************************************/





