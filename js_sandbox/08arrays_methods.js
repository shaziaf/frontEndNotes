//alert(123)

const numbers = [43, 56, 33, 23, 44, 36, 5];
//conventional method

//array object
const numbers2 = new Array(22,45,12,87,34);
//using the array constructor also called array-object

const fruits = ['Apple', 'Banana', 'Orange', 'Pear'];

const mixedArray = [22,'String', true, undefined, null, {a:1, b:'two'}, new Date()];

const age = [12, 65, 52, 63, 45, 23];

/*console.log(numbers);
console.log(numbers2);
console.log(fruits);
console.log(mixedArray);*/

let val;
val = numbers.length; //get array length

//check if it is an array

val= Array.isArray(numbers);

 val= Array.isArray('hello');

 //get a single value from an array

 val= numbers[3];
 
 //insert into array

 numbers [2]= 100;

 //find the index of a certain value

 val= numbers.indexOf(36);





//mutating the arrays

//add onto the front of an array

numbers.unshift(120);

//take off from the front

numbers.shift(120);

//add on to the end
numbers.push(250);

//take off from the end
numbers.pop();

//splice values

numbers.splice(1,3);

//reverse an array
numbers.reverse();

//concatenate arrays
val= numbers.concat(numbers2);

//sorting arrays
val= fruits.sort();


//sorts numbers

val= numbers.sort();

//sort numbers
val= age.sort();

//use 'compare function'
val=age.sort((x,y) => {return x-y;});

val=age.sort((x,y) => {return y-x;});

//find method (takes in a testing function)
//to use the find method we  must first create a testing function

var under50 = (num) =>
{return num < 50};

val=age.find(under50);



//OUTPUT

console.log(val);
//console.log(numbers);
console.log(age);
