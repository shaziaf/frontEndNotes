const firstName = 'William';
const lastName = 'Johnson';
const age= 48;

const str = 'Hello there! I am a BA!';
const tags = 'web-design,development,programming,sports';

let val;

val= firstName + lastName;

val = firstName + ' ' + lastName; //creates a space  

val = 'Hello, My name is '+firstName+ '. And Im ' + age + ' years old.';

//displays Hello, My name is William. And Im 48 years old... with proper spaces in the right places

//append- adding onto a variable without completely replacing it

val='Shazia';
val+=' Fatima';

//escaping

val= 'That\'s awesome, I can\'t wait';
//val= "That's awesome, I can't wait";

//length property
val = firstName.length;

//concat() method
val= firstName.concat(' ', lastName);

//change cases
val=firstName.toUpperCase();
val=firstName.toLowerCase();

//treating strings like read-only arrays
    //finding specidic characteristics/values using the index

    val= firstName[5];

//indexof()- used to find the index of a value
val=firstName.indexOf('l');
val=firstName.lastIndexOf('l');

//charAt()- the opposite of indexOf()

val=firstName.charAt('2');
val=firstName.charAt(firstName.length -1);

//substring()- pulling a substring from string-pulling a part of the string
val= firstName.substring(0,4);

//slice() -used with arrays to pull things out of them, but we caan also use with string
val= firstName.slice(0,4);
val= firstName.slice(-3);

//split()- splits a string into an array based on a separator

val= str.split(' ');
val= tags.split(',');

//replace()- 

val= str.replace('BA','Business Analyst');

//includes() - gives a true or false value based on if something is in the string
val=str.includes('Hello');//gives true or false value based on whether the value is present or not within the var object







//output
console.log(val);

