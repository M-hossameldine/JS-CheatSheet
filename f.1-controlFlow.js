// Function 
function sum(a, b) {
    document.getElementById('sum').innerHTML = a * b;
}

/* Arrow function */
var pill;
// pill = () => { alert('Welcome To JS!')};
// var pill = function(){alert('Welcome to JS');} 
window.onload = pill;

// Triggering (Calling) Function with timer - setTimeOut() Vs. setInterval() 

function showDiv() {
    var x = document.getElementById('showDiv');
    x.style = 'opacity: 1'; 
}

function changeToYellow() {
    var y = document.getElementById('showDiv');
    y.style = 'background-color: blue; opacity: 1;';
}

setTimeout(showDiv, 2000); //triger function after 2sec

setInterval(changeToYellow, 4000); //triger function every 4sec

/* Skip Quotes */
var counter = 0;
var colors = ['lightseagreen', 'saddlebrown', 'green', 'orchid'];
var bg = document.getElementById('coloredDiv');

function changeBgColor() {
    
    // bg.style = `background : ${colors[counter]}`;
    bg.style.backgroundColor = colors[counter];
    
    if(counter < colors.length - 1 ) {
        counter++; 
    }else {
        counter = 0;  
    }
    // setInterval(changeBgColor, 3000);  
}
changeBgColor();
setInterval(changeBgColor, 3000);

/* Operators */ 
/*
+ add
- sub
/ divide 
* multiply 
< smaller than 
> grater than
<=, >=
== equal value 
=== equal value and type
&& and 
|| or 
!= not equal 
!== not equal type and value 
++, --  
*/

// case 
var h = 2;
var g = '2';
console.log(g != h);    //=> false
console.log( h !== g ); //=> true

/* If Statement */
var age = 36;
var ifBox = document.getElementById('if-statement');
if(age > 0 && age < 18) {
    ifBox.innerText = 'You are too young';
}else if(age >= 18 && age < 30) {
    ifBox.innerText = 'you should Work hard';
}else{
    ifBox.innerText = 'Work Work Work work - Rihanna';
}

/* new Date() Methods: getDay() //number of week day
                     | getUTCDate() // day number of the month 
                     | getMonth() 
                     | getHours() 
                     | getMinutes() 
                     | getSeconds()  
                     | getFullYear()
*/
console.log(new Date().getDate());

// Program To Show Week day 
var toDay = new Date().getDay();
var toDayDiv = document.getElementById('today');
if(toDay == 1 ) {
    toDayDiv.innerHTML = 'Today is Monday';
}else if(toDay == 2) {
    toDayDiv.innerHTML = 'Today is Tuesday';
}else if(toDay == 3) {
    toDayDiv.innerHTML = 'Today is Wednesday';
}else if(toDay == 4) {
    toDayDiv.innerHTML = 'Today is Thrusday';
}else if(toDay == 5) {
    toDayDiv.innerHTML = 'Today is Friday';
}else if (toDay == 6) {
    toDayDiv.innerHTML = 'Today is Saturday';
}else {
    toDayDiv.innerHTML = 'Today is Sunday';
}


// Calculator 

function calc() {
    var op1 = parseInt(document.getElementById('operator-one').value);
    var op2 = parseInt(document.getElementById('operator-two').value);
    var operation = document.getElementById('operation').value;
    var calculate;

    if(operation == '+')      { calculate = op1 + op2;}
    else if(operation == '-') { calculate = op1 - op2;}
    else if(operation = '*')  { calculate = op1 * op2;}
    else if(operation = '/')  { calculate = op1 / op2;}
    else { calculate = 'please insert Numbers' }
    document.getElementById('result').innerHTML = calculate;
}

/* Switch-Case */
var switchDiv = document.getElementById('today-switch');
switch(toDay) {
    case 1: switchDiv.innerText = 'Today is Monday';
    break;
    case 2: switchDiv.innerText = 'Today is Tuesday';
    break;
    case 3: switchDiv.innerHTML = 'Today is Wednesday';
    break;
    case 4: switchDiv.innerText = 'Today is Thrusday';
    break;
    case 5: switchDiv.innerText = 'Today is Friday';
    break;
    case 6: switchDiv.innerText = 'Today is Saturday';
    break;
    default: switchDiv.innerText = 'Today is Sunday';
}

// Calculator

function sCalc() {
    let num1 = parseInt(document.getElementById('num1').value) ,
    num2 = parseInt(document.getElementById('num2').value),
    op = document.getElementById('sOperation').value,
    sCalculate;
    
    switch(op) {
        case '+': sCalculate = num1 + num2;
        break;
        case '-': sCalculate = num1 - num2;
        break;
        case '*': sCalculate = num1 * num2;
        break;
        case '/': sCalculate = num1 / num2;
        break;
        default : sCalculate = 'Please, Insert numbers';  
    }
    console.log(sCalculate);
    document.getElementById('result2').innerHTML = sCalculate;
}

/* Selection of Elements  */ 
document.getElementsByTagName('h2')[0].style = 'background-color: #09C; color: white;';
document.getElementsByClassName('pClass')[0].style = 'font-size: 2rem; font-weight: 700;';

/* onchange() Event */

// Change Body color  + onchange event in HTML file 
function changeBodyColor() {
    var colorPicker = document.getElementById('colr').value;
    document.getElementsByTagName('body')[0].style.backgroundColor = colorPicker;
}

/* Looping: for | while | do-while */ 

/* for loop - Syntactic Sugar 
(Sweetens the synatax and makes it a little easier for developers to write )
compared to while and do-while 
*/
/* for (var; condition; step) {
    do something 
   }
*/

// style many element elements with same class
var d1 = document.getElementsByClassName('d1');
var colrs = ['tomato', 'yellowgreen', 'seagreen'];
var i = 0;
for(i ; i < d1.length; i++ ) {
    d1[i].style = `background-color: ${colrs[i]}; color: white`;
}

/* continue & break */

// continue
var cSpan = document.getElementsByClassName('c1');
var u = 0; 
for(u; u < 6; u++) {
    if(u == 3) {
        continue;
    }
    cSpan[u].innerText = u;
} 

// break
var o = 0;
var bSpan = document.getElementsByClassName('b1');
for(o; o < 6; o++) {
    if(o == 3) {
        break;
    }
    bSpan[o].innerText = o;
}

/* while */ 
var n = 0; 
while(n < 10 ){
    if(n == 4) {
        console.log(n);
    }
    if(n == 9) {
        console.log(n);
    }
    n++;
} 

// While Vs. For - Use Cases 
/*
    //while - used when checking for a state not number of iterations
    while(something is true) {  
        //Do something
    }

    //for - used when for iterating with a certain limit
    for(i=0; i<2; i++){ 
        //Do something 
    }
*/

/* do{ } ... while( ) ... */
var t = 0;
do{
    console.log(t);
    t++;
} while(t < 9);

/* Loopin Array Elements - forEach() */

/* forEach(): execute function for each element of the array */
// used also with node list: querySelectorAll('')
var myFruits = ['Apple', 'Orange', 'Cherry'];
    // case(1): using the array 
document.getElementById('test1').innerHTML = myFruits;
    
    // case(2): innerHTML item without += 
myFruits.forEach(fruitFunction);
function fruitFunction(item) {
    document.getElementById('test2').innerHTML = item;
}
    // case(3): innerHTML item with += 
myFruits.forEach(fruitsFunction)
function fruitsFunction(item) {
    document.getElementById('test3').innerHTML += item + '<br>';
}

// Looping: adding class for several element 

var aLink = document.getElementsByTagName('a');
var st = 0;
for(st; st < aLink.length; st++) {
    aLink[st].className = 'link-' + st;
}