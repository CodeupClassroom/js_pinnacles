// PROBLEM 1 ==================

"use strict";

console.log("======== Problem 1 ========");

// store the average of grades in a variable
var gradeAverage = (70 + 80 + 95) / 3;
var message = "";

// create an if statement to conditionally check the average grade variable
if (gradeAverage > 80) {
    message = "You're awesome!"
} else {
    message = "You need to practice more.";
}

// output a different message depending on the condition
console.log(message);


// PROBLEM 2 ==================

console.log("======== Problem 2 ========");

// define a variable for the name of the customer;
var customer;

// define a variable for the total amount charged
var costDollars = null;

// define a variable for the discount rate
var discountRate = .35;

// define a variable for the total amount purchased
var totalSpentDollars;

// define a variable for the discount breakpoint (the minimum amount spent to apply)
var discountBreakpointDollars = 200;

// define a variable for each customer's purchase
var cameronSpentDollars = 180;
var ryanSpentDollars = 250;
var georgeSpentDollars = 320;

var cameron = "Cameron";
var ryan = "Ryan";
var george = "George";


// the following logic will be repeated for each customer (3 times total)

customer = cameron;
totalSpentDollars = cameronSpentDollars;

if (totalSpentDollars > discountBreakpointDollars) {
    costDollars = totalSpentDollars - (totalSpentDollars * discountRate);
} else {
    costDollars = totalSpentDollars;
}

console.log(customer + " bought " + "$" + totalSpentDollars + " worth of products." + " Final payment: " + "$" + parseFloat(Math.round(costDollars * 100) / 100).toFixed(2) + ".");


customer = ryan;
totalSpentDollars = ryanSpentDollars;

if (totalSpentDollars > discountBreakpointDollars) {
    costDollars = totalSpentDollars - (totalSpentDollars * discountRate);
} else {
    costDollars = totalSpentDollars;
}

console.log(customer + " bought " + "$" + totalSpentDollars + " worth of products." + " Final payment: " + "$" + parseFloat(Math.round(costDollars * 100) / 100).toFixed(2) + ".");


customer = george;
totalSpentDollars = georgeSpentDollars;

if (totalSpentDollars > discountBreakpointDollars) {
    costDollars = totalSpentDollars - (totalSpentDollars * discountRate);
} else {
    costDollars = totalSpentDollars;
}

console.log(customer + " bought " + "$" + totalSpentDollars + " worth of products." + " Final payment: " + "$" + parseFloat(Math.round(costDollars * 100) / 100).toFixed(2) + ".");



// PROBLEM 3 ==================

console.log("======== Problem 3 ========");

// create a variable to hold a random number (coin toss result)
var flipACoin = Math.floor(Math.random()* 2);


// create an if statement that will output a specific choice depending on the condition (coin toss result)
if (flipACoin) {
    console.log("Buy a house");
} else {
    console.log("Buy a car");
}

// refactor exercise as a ternary statement

// store output in a variable
var choice = (flipACoin) ? "Buy a house" : "Buy a car";

// console.log out the output

console.log(choice);

