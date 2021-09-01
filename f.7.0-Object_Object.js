
/*
 - Object.freeze()
 - Object.seal()
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

  let obj2 = Object.freeze({value: 2});
  obj2.value = 5;
  console.log(obj2.value); // -> 2

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