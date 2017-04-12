"use strict";

// TODO: Ask the user for their name.
// Keep asking if an empty input is provided.

do {
	var userName = prompt("What is your name?");

} while (userName === "");


userName = (userName === null) ? "Guest" : userName;

// TODO: Show an alert message that welcomes the user based on their input.

alert("Welcome " + userName + "!");


// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var theirReply = prompt("What pizza do you like?");

switch (theirReply.toLowerCase()) {
    case "pepperoni":
        alert("That's mine too!");
        break;
    case "cheese":
        alert("Yuck.");
        break;
    case "veggie":
        alert("Health nut, eh?");
        break;
    case "meat lovers":
        alert("What a caveman!!");
        break;
    case "sausage":
        alert("Hmmmm... I don't like that one.");
        break;
    default:
        alert("Uhhhhh...as IF!");
}