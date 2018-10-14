/*
IF statements are used to evaluate some kind of condition and then perform an action based on that condition or perform another action if that conditions are not met.

Syntax
if(givenCondition){
    doSomething}
    else{
do SomethingElse
    }

    if(givenCondition){
    doSomething}
    elseif{
do SomethingElse
    }
    else{
        do Something Else}
    }
*/
const id = 100;

if (id == 100) {
    console.log('correct');
}
else {
    console.log('incorrect');
}

if (id != 100) {
    console.log('correct');
}
else {
    console.log('incorrect');
}

if (id !== '100') {
    console.log('correct');
}
else {
    console.log('incorrect');
}
//elseif statements

if (id > 100) {
    console.log('Your ID is greater than 100!')
}
else if (id < 100) {
    console.log('Your ID is less than 100!')
}
else {
    console.log('Your ID is equal to 100!')
}

const color = 'red';
if (color === 'red'); {
    console.log('Color is red!');
}
else if (color === 'blue') {
    console.log('Color is blue');
}
else {
    console.log('Color is neither red nor blue');
}

//create an if else statement
//if age is between 0 and 12, print that name is child
//if age is between 13 and 19, print that name is teenager
//else name is adult


const name ='Steve';
let age = 1;
if (age>0 && age<12){
    console.log('${name}' is a child);
}

else if (age>=13 && age<=19){
    console.log('${name}' is a teenager);
}
else {
    console.log('${name}' is an adult);
}


//ternary operator - short way of doing conditionals
console.log(id===100)

// TERNARY OPERATOR - short way of doing conditionals
console.log(id===100 ? "correct":"incorrect")

// without braces -

if ( id === 100)
console.log('correct with out braces')
else
console.log('incorrect without braces');