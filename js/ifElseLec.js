"use strict";

// =======================If Else 3.3.1.

// If Statements

/*

 if (condition) {
    action; // only runs if condition true
 }

*/


// if (3 > 1) {
//     console.log("3 is greater than 1");
// }
//
// var x = 3;
//
// if (x - 3) {
//     console.log(x + " partner!");
// }


// "Truthy" and "Falsy" Values

/*

JavaScript values are inherently "truthy" or "falsy".

The following values evaluate to false:
    1) false
    2) 0 (zero)
    3) "" (empty string)
    4) null
    5) undefined
    6) NaN (a special Number value meaning Not-a-Number!)

*/




// Else

/*

 if (condition) {
     action; // runs if condition true
 } else {
     action; // runs if condition false
 }

*/

// x = 6;
//
// if (x === 10) {
//     console.log("x is 10");
// } else {
//
// }






// Else if

/*

if (condition1) {
    action; // runs if condition true
} else if (condition2) {
    action; // runs if condition 1 is false and condition 2 is true
} else {
    action; // runs if condition 1 and condition 2 are false
}

*/


// x = 6;
//
// if (x === 0) {
//     console.log("x is 10");
// } else if (x === 9) {
//     conso.e.log("x is 9");
// } else {
//     console.log("x is not 9 or 10");
// }





// Operators

/*

Comparison operators

==	  ----   equal to (value)
===	  ----   equal to (type and value)
!=	  ----   not equal to (value)
!==	  ----   not equal to (type and value)
>	  ----   greater than
<	  ----   less than
>=	  ----   greater than or equal to
<=	  ----   less than or equal to

*/



if ("10" === 10) {
    console.log("Condition met.");
} else {
    console.log("Condition NOT met.");
}


// Ternary operators

/*

 (condition) ? returnValueIfTrue : returnValueIfFalse

*/

var someNumber = 9;

var divisibleByFive = (someNumber % 5 === 0) ? "Number is divisible by five." : "Number is not divisible by five.";

console.log(divisibleByFive);

