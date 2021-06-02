// Maps Relation with Array Objects ***************************************************************** #

  let kvArray = [['key1', 'value1'], ['key2', 'value2']];
  
// Regular Map constructor to transform a 2D key-value Array into a map
  let myMap = new Map(kvArray);
  console.log(myMap.get('key1'));   // -> value1

// Array.from() to transform a map into a 2D key-value array
  console.log(Array.from(kvArray)); // -> [['key1', 'value1'], ['key2', 'value2']]

// keys() or values() iterators, and convert them into an array
  console.log(Array.from(kvArray.keys())); // -> [0, 1]
  
// Spread operator to transform a map into a 2D key-value array
  console.log([...myMap]);          // -> [['key1', 'value1'], ['key2', 'value2']]


// Cloning Maps ************************************************************************************* #
// Just like Arrays, Maps can be cloned
let original = new Map([
  [1, 'one']
]) 

let clone = new Map(original);
console.log(clone.get(1)); // -> one
console.log(original === clone); // -> false (useful for shallow comparison)


// Merging Maps ************************************************************************************* #
let first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
]);

let second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

// the last repeated keys wins
// spread operator essentially converts a Map into an array
let merged = new Map([...first, ...second]);

console.log(merged.get(1)); // -> uno
console.log(merged.get(3)); // -> three

// Merge Maps & Arrays  ***************************************************************************** #
let MA = new Map ([...first, ...second, [1, 'eins']]);
console.log(MA.get(1)); // -> eins
console.log(MA.get(2)); // -> dos





  
