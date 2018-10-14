const person = {
    firstName: 'Shazia',
    lastName: 'Fatima',
    age: '13',
    email: 'cuteguy@gmail.com',
    hobbies: ['coding', 'family time', 'sleeping'],
    address: {
        City: 'Chicago',
        State: 'IL',
    },
    BirthYear: () =>{
        return 1986 //new way to create functions
    }
}

//creating object
//object is like and array but just with more information on a certain object
//all the methods we have been running add, concat.. they are all built in methods. these are functions which someone already wrote inside an object

//curly braces define this variable as an object literal
//inside the curly braces we put key value pairs that are separated by commas and functions stored inside the objects are called methods

let val;

val=person;

//get specific value
val= person.firstName;
//another way of doing it
val=person['lastName'];

val=person.age;
val=person.hobbies;
val=person.address;
val=person.address.State;

//another way of doing this but not recommended

val= person.address['City'];

val= person.BirthYear();

//in object literal, we can access other properties
//THIS keyword
const person2 = {
    age: 32,
    getBirthYear:function()
    {
        return 2018-this.age;
    }
}
val= person2.getBirthYear();

//arrays made of objects
const people=[
    {name: 'Bob',age:54 },
    {name: 'Tim',age:23 },
    {name: 'Wes',age: 26},
    {name: 'Ray',age:52 },
    {name: 'Jim',age:17 },
    {name: 'Messi',age:44 }
]

for (let i=0; i<people.length; i++){
    console.log(people[i].name);
}

//output

console.log(val);