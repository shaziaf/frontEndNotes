/* 
Type Conversion is taking a variable and changing the data type
*/


let val;

val = 555;

//convert number to string

val = String(555);
val = String(4+4);

//boolean to string
val = String(true);

//date to string

val = String(new Date());

//array to string
val = String([1,2,3,4,5]);


//to String() method

val = (5).toString();
val = ('BoB had a lamp').toString();

//string to number
val = Number('5');

//boolean to number
val= Number(true);
val= Number(false);

//Null to number
val= Number(null);
//if we try to parse null as a number, value will always be returned to '0'

val= Number('hello');
val= Number ([1,2,3,]);


//parse method

val = parseInt('100,30');

val = parseFloat('100,30');

val = parseFloat('100.9848949889')

/* Type Coersions- Java Script will do for us 
- we take one type of data and change it to another*/ 

const val1 = String(5);
const val2 = 6;
const sum= val1+val2;



//new output

console.log(sum);
console.log(typeof sum);







//output
console.log(val);
console.log(typeof val);
//console.log(val.length);
