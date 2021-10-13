# Pass By Value & Pass By Reference

## Pass By Value

```
  let name = "Ali";     // points to a memory address i. 0x346
  let nameCopy = name;   // allocationg new memory nameCopy that contains "Ali" i.0x367

  name = "Alaa";         // change name
  console.log(name);     // -> Alaa
  console.log(nameCopy); // -> Ali
```

## Pass By Reference

  Ojects are passed by refernce (also know as reference types) 
```
  let fruits = ["Cherry", "Mango"]; // points to a certain memory adrress    0x456
  let fruitsCopy = fruits;          // points to the fruits memory address   0x456
  fruits.push("Apple", "Banana");

  console.log(fruits);        // -> ["Cheryr", "Mango", "Apple", "Banana"]
  console.log(fruitsCopy);    // -> ["Cherry", "Mango", "Apple", "Banana"]
```
