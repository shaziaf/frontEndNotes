//Global Scope
 var a= 1;
 var b=2;
 const c= 3;

 

 //function scope

 function test(){
     var a=4;
     let b=5;
     const c=6;
     console.log ('Function scope: a,b,c');
 }
 test();

 //block level scope- for if statement loops and anything wrapped around curly braces

 //If statements
if(true){
    var a=7;
    let b=8;
    const c=9;
    console.log ('Block Scope: a,b,c');
}

//for loop

for (let a=0; a<10; a++){
    console.log( 'Block-level scope for loop with let: ${a}');
}

//let and const have block level scope and var has a function scope 

 //global scope output

 console.log('Global Scope: a,b,c');