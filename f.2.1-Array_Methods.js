// Array Methods 
var fruits = ['Apple', 'Mango', 'Watermelon'];
var fruits2 = ['Orange'];

// toString() -> Returns String
    console.log(typeof fruits.toString());

// join() -> Returns string
    console.log(fruits.join());
    console.log(fruits.join(' - '));

// arr1.concat(arr2)
    console.log(fruits.concat(fruits2)); 

/* unshift() | shift() => objects at the start of the array - */

    // unshift() - add element to begining of array
    fruits.unshift('kiwi', 'banana');
    console.log(fruits);

    // shift() => removes the first element from array and returns that removed element 
    fruits.shift();
    console.log(fruits.shift());

/* push() | pop() => object at the end of the array - */

    fruits.push('Banana', 'Kiwi');
    console.log(fruits.pop()); //remove Last Element and return it 
    console.log(fruits);
    fruits.push('Strawberry')
    console.log(fruits); //Add after last index

/* splice(Start index, 
          num. of elements to be deleted from this index, 
          insert element, 
          insert element, 
          ...)
*/
    fruits.splice(2, 0, 'Date', 'Pineapple');
    console.log(fruits);

// delete()
    delete(fruits[0]);
    console.log(fruits);

// reverse() to reverse order
    console.log(fruits.reverse());

/* Sort Elements*/
    // sort() // works only with strings, sorts according to first letter or number digit 
    console.log(fruits.sort());

    var nums = [ 5, 90, 25, 50, 11, 110];
    console.log(nums.sort());

    // sort numbers
    var sortnums = nums.sort(
        function(a, b) { return b-a; }
    )
    console.log(sortnums);

    var sortnumsAsc = nums.sort(
        (a,b) => { return a-b; }
    )
    console.log(sortnumsAsc);

/* Search in array .includes()*/
    let studentNames = ["Ahmed", "Alaa", "Ola", "Nassim", "Salma"];
    console.log(studentNames.includes('Alaa')); // -> true