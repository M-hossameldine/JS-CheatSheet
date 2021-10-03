
/*
 - Object.freeze()
 - Object.seal()
 - Object.values()
 - Object.keys()
*/

// Object.freeze()
/*
  - Method freezes an object, A frozen object can no longer be changed
  - prevents: adding new properties, deleting present properties or changing their values 
  - freeze() returns the same object that was passed in.
*/
  let obj = { propOne: 45};
  Object.freeze(obj);
  obj.propOne = 30; // -> Throws an error in the strict mode 
  console.log(obj.propOne); // -> 45
  
/*******************************************************************/
// Object.seal()
/*
 - Method seals an object, preventing new properties from being added to it
 - Mark all existing properties as non-configurable, values of present properties can still be changed as long as they are writable
*/

let object1 = Object.seal({value1: 23});
object1.value1 = 30; 
object1.value2 = 40; // -> Throws an error in the strict mode 

console.log(object1.value1); // -> 30
console.log(object1.value2); // -> undefined

delete object1.value1;       // -> Cannot delete when sealed 
console.log(object1.value1); // -> 30

/*******************************************************************/
// Object.values()
// returns an array of given object enumerable property values in the same order for..in looping would do, the only difference that for..in loop enumerates  properties in the prototype chain as well.

console.log(Object.values({'a': 1, 'b': true})); // -> [1, true]

/*******************************************************************/
// Objec.keys()
// returns an array of given object property names, in the same order that the same loop would
console.log(Object.key({'a': 1, 'b': false})); // -> ['a', 'b']

/*******************************************************************/
