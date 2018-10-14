let val;
const today = new Date();
val=today;

//turn into a string

val=today.toString();

//we can manually change date and time ourselves

let birthday = new Date('9-9-1991 11:25:00');
birthday= new Date('September 9,1991');
birthday= new Date('9/9/1991');
val=birthday;

//to get the month
val=today.getMonth();
//index-based january starts at zero and december ends at 11
val=today.getDate();
val=today.getDay();
//index-based zero starts at sunday
val=today.getFullYear();
val=today.getMinutes();
val=today.getSeconds();
val=today.getMilliseconds();
val=today.getTime();
val=birthday;
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1218);






//output

console.log(val);