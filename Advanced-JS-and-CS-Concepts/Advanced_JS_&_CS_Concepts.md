# Advanced JS and CS Concepts

## Primitives & Object Wrappers
### Pirmitives (MDN):
- Primitive (value / primitive data type) is data that is not and object and has not methods 
- There are 7-Primitive data types: 
  string, number, bigInt, boolean, symbol, undefined and null.  

#### Primitives are "immutable" 
  They cannot be changed/altered.
  There is a differece between a primitive and a variable assigned to aprimitive. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.
```
var bar = "baz";
console.log(bar); // -> "baz"
bar.toUpperCase();
console.log(bar); // -> "baz"

// Using an array method mutates the array
var foo = [];
console.log(foo); // -> []
foo.push("plugh"); 
console.log(foo); // -> ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase();
console.log(bar); // -> "BAZ"
```

#### Primitive wrapper objects in JavaScript
* Except for _null_ an _undefined_, all primitive values have object equivalents that wrap around primitive values
* The wrapper's prototype contain all the method that we call on the primitive values

- _String_ for the string primitive.
- _Number_ for the number primitive.
- _BigInt_ for the biging primitive.
- _Boolea_" for the boolean primitive.
- _Symbol_ for the symbol primitive.

* The wrapper's _valueOf ()_ method returns the primitive value.
```
console.log(typeof "str");                       // -> string
console.log(typeof new String("str"));           // -> object
console.log(typeof new String("str").valueOf()); // -> string
```
