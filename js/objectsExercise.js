(function(){
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */

    var person = {};

    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */

    person.firstName = "Justin";
    person.lastName = "Reich";


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    };

    console.log(person.sayHello());


    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper, index) {
        var discountRate = .35;
        var totalDollarsPaid = 0;
        var discountBreakpointDollars = 200;
        var outputMessage = "";

        if (shopper.amount > discountBreakpointDollars) {
            totalDollarsPaid = shopper.amount - (shopper.amount * discountRate);
        } else {
            totalDollarsPaid = shopper.amount;
        }

        outputMessage += shopper.name + " bought " + "$" + shopper.amount + " worth of products.";
        outputMessage += " Final payment: " + "$";
        outputMessage += (Math.round(totalDollarsPaid * 100) / 100).toFixed(2) + ".";

        console.log("----CUSTOMER " + (index + 1) + "----");

        console.log(outputMessage);
    });

	// todo:
	// Create an array of objects that represent books.
	// Each book should have a title and an author property.
	// The author property should be an object with a firstName and lastName.
	// Be creative and add at least 5 books to the array

	// create a variable that holds an author object
	var stephenPinker = {firstName: 'Stephen', lastName: 'Pinker'};

	// an array with 4 elements where each of the elements is an object
	var books = [
		{
			title: 'A Brief History of Time',
			// the author property's value is itself an object
			author: {firstName: 'Stephen', lastName: 'Hawking'}
		}, {
			title: 'JavaScript: The Good Parts',
			// we can also define an object like this, javascript doesn't care
			// about whitespace, so we can use it when it makes sense
			// to make our code more readable
			author: {
				firstName: 'Douglas',
				lastName: 'Crockford'
			}
		}, {
			// property values can be expressions as well
			title: 'Fight' + ' ' + 'Club',
			author: {firstName: 'Chuck', lastName: 'Palahniuk'}
		}, {
			title: 'The Stuff of Thought : Language as a Window Into Human Nature',
			// property values can be variables
			author: stephenPinker
		}
	];

	// we could also do this
	books.push({
		title: 'Guns Germs and Steel',
		author: {firstName: 'Jared', lastName: 'Diamond'}
	});

	// log out the books array
	console.log(books);

	// todo:
	// Loop through the array of books using .forEach and print out the specified information about each one.
	// start loop here

	// remember that parameter names are like variable names, the javascript interpreter doesn't
	// care what we name them, but since code is written for humans, we should give
	// them meaningful names

		// console.log("Book #" + todo);
		// console.log("Title: " + todo);
		// console.log("Author: " + todo);
		// console.log("---");

	// end loop here

})();
