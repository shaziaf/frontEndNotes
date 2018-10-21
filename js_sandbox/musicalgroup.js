/*

For example a Quartet is a musical group with four musicians, barberhsop quartets were popular type of quartet in the early 1900s  and featured  four singers made up of a lead, tenor,baritone and bass

write a series of conditional statements that

-prints "not a group" if musicians is less than or equal to 0
-prints "solo" if musicians is equal to 1
-print "duet" if musicians is equal to 2
-print "trip" if musicians is equal to 3
-print "quartet" if musciains is equal to 4
-print "this is a large group" if musicians is greater than 4




*/

var musicians=7;

if( musicians<=0){
 console.log('not a group');
} 
else if (musicians===1){
console.log('Solo')
}
else if (musicians===2){
    console.log('Duet')
    }
else if (musicians===3){
        console.log('trio')
        }
else if (musicians===4){
            console.log('Quartet')
            }
else if (musicians>4){
    console.log('This is large Group')
}