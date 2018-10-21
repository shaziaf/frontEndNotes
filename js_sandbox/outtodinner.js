/*
 Create a variable claled bill and assign it to the result of 10.25 +3.99+7.15 (dont perform the calculation yourself, let the javascript do it )

 Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. 
 Finally, add the bill and tip together and store it into a variable called total.

 Hint: 15% in decimal form is written as 0.15_._

 TIP: to print out the total with a dollar sign ($) use string concatenation,
 to round up by two decimal points you want to use the toFixed() method
 
 
 */

 var bill= 10.25+3.99+7.15;
 var tip= bill* .15;
 var total= bill +tip;

 console.log('$ ' +total.toFixed(2));