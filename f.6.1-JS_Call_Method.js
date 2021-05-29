// The call() function 
/* Method Reuse
 * with a method call(), you can write a function that can be used on different objects
 * The call() method is a predefined Javascript mehtod
 * With call(), an object can use a method belonging to another object
 * It can be used to invoke (call) with an owner object as an argument (parameter).
*/
function normalize () {
  console.log(this.croods.map( n => n / this.length));
}

normalize.call({croods: [0, 2, 3], length: 5})
// -> [0, 0.4, 0.6]

let person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

let person1 = { firstName: "Ali", lastName: "Mostafa"};

person.fullName.call(person1);
// -> Ali Mostafa


