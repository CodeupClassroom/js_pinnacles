"use strict";

// Syntax

/*

 for (initialization; test; iteration) {

 }

*/


// with incrementer
// for (var i = 0; i <= 10; ++i) {
//     console.log(i);
// }


// with decrementer
// for (var i = 20; i >= 10; --i) {
//     console.log(i);
// }


// nested for loops
// for (var i = 0; i <= 10; ++i) {
//     console.log("Badgers, badgers, badgers");
//     for (var j = 0; j <= 1; ++j) {
//         console.log("Mushroom");
//     }
// }



// multiple iterators
for (var i = 0, j = 9; i < 10; ++i, --j) {
    console.log("value of i:" + i + " and value of j: " + j);
}



// for-in loop

    // allows to loop through the properties of an object
