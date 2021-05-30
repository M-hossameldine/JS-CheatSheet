// The Map Object
/*
 * Map object holds key-value pairs and remembers the original insertion order of the keys
 * Any value (both objects and primitive values) may be used as either a key or a value.
 * 
 * Map keys:
 * Map does not contain any keys by default, only contains what is explicitly put into it.
 * Map's key can be any value (including functions, objects, or any primitive).
 */ 

// Instance Constructor 
  // --> Map() : creates a new Map object
  let numberMap = new Map();

// Setting Object properties (Storing Data)

  /* ----> 1st approach: Setting Object properties works for Map objects as well
  * but not a recommended approach
  * That way of setting a property does not interact with the Map data structure.
  * The values are not stored in the Map for queries.
  * Map operations like "has", "delete"... will fail. 
  */ 

  numberMap["one"] = "onee";
  numberMap["two"] = "twoo";

  console.log(numberMap);
  // -> Map {one: "onee", two: "twoo"}
  console.log(numberMap.get("one"));
  // -> undefined

  /* ----> 2nd approach: set(key, value method)
  * The correct usage
  * Allow all Mab object instance methods: get, has, delete, ...
  */ 
  let contacts = new Map();
  contacts.set("Marie", {phone: "213-222-9655", address: "123 N 1st Ave"});
  console.log(contacts.has("Marie")); // -> true
  console.log(contacts.get("Marie")); // -> {phone: "213-222-9655", address: "123 N 1st Ave"}

// Instance Properties ************************ #
  // ***_ Map.prototype.size : returns the number of key/values pairs in the Map Object
  console.log(contacts.size); // -> 1

// Instance Methods    ************************ #

// Map.prototype.set(key, value)
  /* sets the value for the key in the Map object. Returns the Map object */
  let smallCapital = new Map();
  smallCapital.set("a", "A");
  smallCapital.set("b", "B");
  smallCapital.set("c", "C");
  smallCapital.set("d", "D");

// Map.prototype.get(key)
  /* Returns the value associated to the key, or "undefined" if there is none*/
  console.log(smallCapital.get("c")); // -> C
  console.log(smallCapital.get("s")); // -> undefined

// Map.prototype.has(key)
  /* Returns boolean asserting whether a value has been  associated to the key in the Map object or not */
  console.log(smallCapital.has("b"));  // -> true
  console.log(smallCapital.has("n"));  // -> false

// Map.prototype.delete(key) 
  /* Returns true if an element in the Map object exist and has been removed
  * or false if the element does not exist
  */
  console.log(smallCapital.has("d"));      // -> true
  console.log(smallCapital.delete("d"));   // -> true
  console.log(smallCapital.delete("d"));   // -> false


// Map.prototype.clear(): Removes all key-value pairs form the Map Object
  smallCapital.clear();
  console.log(smallCapital); // -> Map(0){}
  console.log(smallCapital.size); // -> 0 


let oddNums = new Map();
oddNums.set("one", 1);
oddNums.set("three", 3);
oddNums.set("five", 5);
// Iteration Methods **************************** #

// Map.prototype.keys()
  /* Returns a new iterator object that contains the keys for each element in the Map object */
  let keyIterator = oddNums.keys();
  console.log(keyIterator); // -> Map Iterator {one, three, five}

// Map.prototype.values()
  /* Return a new Iterator object that contains the values for each element in the Map object in insertion order */
  let valueIterator = oddNums.values();
  console.log(valueIterator); // -> Map Iterator {1, 3, 5}

// Map.prototype.entries()
  /* Returns a new iterator object that contains an array of [key, value] for each element in the Map object in insertion order */
  let entryInterator = oddNums.entries();
  console.log(entryInterator); 
  // -> Map Iterator {"one" => 1, "three" => 3, "five" => 5}

  console.log(entryInterator.next().value);  // -> ["one", 1]
  console.log(entryInterator.next().value);  // -> ["three", 3]
  console.log(entryInterator.next().value);  // -> ["five", 5]


  let myMap = new Map();
  let keyString = "a string";
  let keyObj = {};
  let keyFunc = function () {};

  myMap.set(keyString, 'value of key string');
  myMap.set(keyObj, 'value of the key Object');
  myMap.set(keyFunc, 'Value of the key Function');

  console.log(myMap.get(keyString));
  console.log(myMap.get(keyObj));
  console.log(myMap.get(keyFunc));

  console.log(myMap.has("a string"));
  console.log(myMap.has({}));
  console.log(myMap.has(function (){}));


  let loopMap = new Map();
  loopMap.set("0", "zero");
  loopMap.set("1", "one");

  for(let [key, value] of loopMap) {
    console.log(`${key} = ${value}`);
  }
  // -> 0 = zero
  // -> 1 = one

  for (let key of loopMap.keys()) {
    console.log(key);
  }
  // -> 0
  // -> 1

  for (let value of loopMap.values()){
    console.log(value);
  }
  // -> zero
  // -> one

  loopMap.forEach((value, key) => console.log(`${key} = ${value}`))