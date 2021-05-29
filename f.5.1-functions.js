// passing objects as parameters
/*
 * x1, x2, y1, y2 are treated as local binding to the function
 * x, y of each object, are the bindings of object keys
 * Note: 
 *  Names of object keys in both functin definition and invocation should be the same  
*/

function distanceBetweenPoints({x: x1, y: y1}, {x: x2, y: y2}) {
  return Math.hypot((x1 - x2), (y1 - y2))
}

distanceBetweenPoints({x: 2, y: 6}, {x: 5, y: 6})


// "this" binding in functions Vs. Arrow Functions
/*
 ******** Normal Functions: 
 * Each function has it's own binding, whose value depends on the way it is called.
 * You cannot refer to the this of the wrapping scope in a regular function defined with the function keyword -> function () { ...body}
 ******** Arrow functions are different:
 * Arrow functions don't bind their own "this" but can see the 'this' binding of the scope around them. 
*/ 

function normalizeWizArrow () {
  console.log(this.croods.map( n => n/ this.length));
} 

function normalizeWizFunction () {
  console.log(this.croods.map(function (n) {return n / this.length}));
}

normalizeWizArrow.call({croods: [0, 2, 3], length: 5});
normalizeWizFunction.call({croods: [0, 2, 3], length: 5});

// -> [0, 0.4, 0.6]
// -> [NAN, NAN, NAN]