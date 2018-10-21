var balance=-20;
var checkBalance = true ;
var isActive = true;


if (!checkBalance){
    console.log('Thank You Have a nice Day')
}

else if(isActive=== true && balance>0){
    console.log('Your balance is $'+ balance+'.')
}

else if(!isActive){
    console.log('Your account is no longer active')
}

else if( balance===0){
    console.log('Your account is empty')
}
else {
console.log('Your Balance is negative. Please contact bank')
}


