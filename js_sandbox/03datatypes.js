//Data Types and JavaScripts

//Primitive types vs References types


/*Primitive types- data is stored in the location the variable accesses
stored on the stack (memory heap)
when we access that data we access it by its actual value*/ 

/* Reference Types
Accessed by reference, not by the actual value
objects are stored on the heap, not in the variable
basically a pointer to a location in memory*/

//Primitive Types
// strings - Text(sequences of characters)

// they can be number integers floats Scripts 

//Boolean-true/false
//NULL- intentional empty value
//undefined-variable that hasnt been assigned a value yet. All variables are undefined by default
//symbols [ESG]

//References Types
//Arrays
//object Literals
//Functions
//Dates
//anything else of value that we can store

//JS is a dynamically typed language
    //types are associated with the actual values not variables
    // SAme variable van hold multiple types
    //Do not need to specify types

/* PRIMITIVE TYPES */
const name = 'Shazia';

//const haskids = true;

//Null
const car =null;

//undefined
let gotNothingtoSay;

const sym = Symbol();

/* Reference Types/Objects*/
const hobbies = ['coding','reading','sport'];

//Object Literals
const address = {
    street: "222 This Way",
    city:"chicago",
    state:"IL"
}


//output
console.log(typeof address); // change the variable in typeof

const today = new Date();
console.log(today);
console.log(typeof today);


