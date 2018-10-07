/*
var- been around since the beginning of the javacript
let- update to the JS language
const- short for constant , can never change any variables

*/

var name = 'Sam'; //declaring a variable
console.log(name);

name = 'Stevie Fitcher';
console.log(name);

var greeting; //created a variable without putting a value in it... initializing the variable 
console.log(greeting); //no value defined.... displays as undefined in the console

greeting = "Hello Everybody!"; //defining value to the pre-created variable
console.log(greeting);

/*Rules or Conventions of JavaScipt
-variables can include letters,numbers and $ 
-cannot start with a number
-multiword conventions
-camelCasing
PascalCasing
underscore_casing
*/
 /*
let favoriteSport = 'Basketball';
console.log(favoriteSport);
favoriteSport = 'Soccer';
console.log(favoriteSport);
*/

//const- it cant be changed or re-assigned

const nickname= 'Shaz';
console.log(nickname);

/*nickname = 'Shazia';
console.log(nickname);*/ //trying to change but cannot change the nickname

//cont cannot be initialised. it needs some kind of value before initialization

//quirk- working with objects

const person = {
    name:"Rodney Rodnington",
    age:"32",
    height:"5'4"
}

console.log(person);

person.name = 'Sara';
console.log(person);

/*const numbers = [1,2,3,4,5,6,7,8];
console.log(numbers);*/

const array = ['Bob','Jim','Joe'];
console.log(array); 

console.log(array[2]); //index starts from 0 (zer0) , so displays Joe the 3rd one

array.push('Michael Jordan');
console.log(array);





