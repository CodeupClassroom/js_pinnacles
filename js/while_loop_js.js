"use strict";


// ========== Exercise 1 ============= //

// generate number of cones to sell
var conesInventory = Math.floor(Math.random() * 50) + 50;

var conesRequested;

var conesSold;

console.log("I have " + conesInventory + " ice cream cones in my store.");


// do-while loop that continues to take orders until inventory is sold out
do {
	// generate random number of cones ordered
    conesRequested = Math.floor(Math.random() * 5) + 1;

	// how to sell last few cones
    if (conesInventory < conesRequested && conesInventory !== 0) {
        console.log("I cannot sell you " + conesRequested + ". I only have " + conesInventory + " left.");
        conesSold = conesInventory; // selling out inventory
    } else {
        conesSold = conesRequested;
    }


    // decrement inventory by cones sold
    conesInventory -= conesSold;

    console.log(conesSold + " were just sold...");
    console.log("I have " + conesInventory + " left.");

} while (conesInventory > 0);

console.log("Yay! I sold them all!");




