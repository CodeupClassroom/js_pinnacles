"use strict";

// 2. what are objects?
//    - key - value pairs
// 3. object literal

// curly braces, {}, are used to create an object
// var pizza = {
//     price: 9.99,
//     isDelivery: true,
//     toppings: ['pepperoni', 'green peppers', 'mushrooms', 'olives'],
//     getPrice: function() {
//         if (this.isDelivery) {
//             return this.price + 4.99;
//         }
//         return this.price;
//     }
// };

// creating the same object as above, but with different syntax
// start out with an empty object
// console.log("The price of the pizza is: " + pizza.price);

// 4. add a getPrice method

// 5. accessing object properties, getting and setting
//    - . notation
//    - [notation]
// 6. arrays of objects
//    - more pizzas

var pizzas = [
    {
        price: 9.99,
        isDelivery: true,
        toppings: ['pepperoni', 'green peppers', 'mushrooms', 'olives']
    }, {
        price: 8.99,
        isDelivery: true,
        toppings: ['pepperoni', 'bacon']
    }, {
        price: 12.99,
        isDelivery: false,
        toppings: ['olives']
    }, {
        price: 13.99,
        isDelivery: false,
        toppings: ['pineapple', 'ham']
    }, {
        price: 9.99,
        isDelivery: true,
        toppings: ['extra cheese']
    }
];

// display pizzas for delivery
pizzas.forEach(function(pizza){
    if (! pizza.isDelivery) {
        return;
    }
    console.log('---------------------------------------------------');
    console.log("Price: " + pizza.price);
    console.log("Toppings: " + pizza.toppings.join(", "));
});


