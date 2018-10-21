/* General Loops ANd Iteration

Loops

an instruction that repeats until a specific condition is reached or met
-used to run the same block of code using different values each time 
-the most popular types of general loops 

1. FOR Loops
    -takes in 3 parameters and they are all separated by semi-colons
        -1. the declaration of the variable
        -2. the condition
        -3. increment ( i++ is the same as i=i+1)

        when we know how many iterations we want to run
2. WHILE Loops
3. DO WHILE Loops- Always going to run atleast once no matter what 

--Looping through Arrays
-foreach() takes in a callback function(anonymous), 
it can accept upto three parameters
1.iterator- naming convention is singular syntax

2. index
3. the actual entire array


-map()- Used to return something different or a different array 


Looping through objects- for in loop- used to loop or iterate through objects so we can get keyvalue pairs

*/


//FOR Loops

for (let i = 0; i < 10; i++) {
    console.log(i)
}

//Other things we can do
//concat

for (let i = 0; i < 10; i++) {
    console.log('number' + i);
}

//Skip an interation or break out a loop

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log(`${i} is my favorite number`);
    continue;
    }

    //break out of loop
    if (i === 5) {
        console.log(`${i} is my favorite number`);
    continue;
    }
    console.log('number' + i);
}

// While Loops

let i=0;
while(i=10){
    console.log('while loop' + i);
    i++;
}

//Do while loops

let e= 0;
do{
    console.log ('do while loop' + e);
    e++;
}
while(e<10);

//example 3

let f = 100;
do{
    console.log ('do while example2' + f);
    f++
} 

while (f<10)

//Iterating /Looping through array

const cars = ['Ford','Nissan', 'Honda', 'Toyota'];
for (let i=o; i<cars.length;i++){
    console.log(cars[i]);
}

//foreach()

cars.forEach(function(cars,index, theEntireDarnArray){
    //console.log('foreach' +car);
    console.log(`with index ${index}: ${car}`);
})

// map() method

const users= [
    {id:1, name: 'Rik'},
    {id:2, name: 'Sik'},
    {id:3, name: 'Tik'},
    {id:4, name: 'Pik'},
    {id:5, name: 'Nik'},
    {id:6, name: 'Bik'}
]

//create another variable called ids and take the users array and creates and array fo the id;s for the users

const ids = users.map(function(Kids){
    return Kids.id;
})
console.log(ids);

//iterating through Objects using 'for in loop'
const user= {
    firstName: 'Champa',
    lastName: 'Chameli',
    age: 89,
    decentHUmanBeing: false
}

for(let x in user){
    console.log(x);
    console.log(user[x]);
    console.log(`${x} :${user[x]}`);
}

