"use strict";

// break

var y = 0;

while (true) {
    if (y === 10) {
        console.log("End of loop!");
        break;
    }
    ++y;
    console.log(y);
}


// web example

var y = 0;

var password = "123";

while (true) {
    console.log("Please enter a valid password: ");
    if (password === "123") {
        break;
    }
}


console.log("Access granted.");


// game example

var gameRunning = true;

var lives = 3;

while (gameRunning) {
    // play game
    if (lives === 0) {
        console.log("Game over");
        break;
    }
}

// continue

console.log("Continue example");

var y = 0;

while (true) {
    y++;
    if (y === 100) {
        console.log("End of loop!");
        break;
    }
    if (y % 5 === 0) {
        continue;
    }
    console.log(y);
}



// web example

/*

    Display a list of years in which a specific geographic region experienced drought conditions.
        Skip any years that do not meet the criteria.
        Create additional HTML to display the drought years in a formatted table.

 */