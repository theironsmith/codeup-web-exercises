"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
// function sayName(name) {
//     var output = ("Hello " + name + "!");
//     return output;
// }
// console.log(sayName("K"));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
/*
var name = prompt("What is your name?");
function sayHello(name) {
    var helloMessage= "hello " + name;
    return helloMessage;
};
console.log(sayHello(name));
*/

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
/*
var name = prompt("What is your name?");
function sayHello(name) {
    var helloMessage= "hello " + name;
    return helloMessage;
};
console.log(sayHello(name));
*/
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
//
// function isTwo(number) {
//     var result;
//     result = number === 2;
//
//
// }
// (isTwo(random)); // picks random number
// console.log(isTwo(random));//displays true/false
// console.log("number = " + random); //displays number

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
// function CalculateTip(tipTotal, billTotal) {
//     return billTotal * tipTotal;
//
// }
// console.log(CalculateTip(0.20, 20));
// console.log(CalculateTip(0.25, 25.50));
// console.log(CalculateTip(0.15, 33.42));
// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */
// function calculateTip (billTotal, tipPercentage) {
//     var tipAmount = billTotal * (tipPercentage / 20);
//     return tipAmount;
// }
//
// alert("Your tip is " +  calculateTip(20, 4));
//
//
// console.log(tipAmount);


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */


// function applyDiscount(originalPrice, discountPercentage) {
//
// }


//(1)
// function returnTwo(){
//     return 2;
// }
// console.log(returnTwo());
//(2)
// function returnName(){
// //     return "Keenan";
// // }
// // console.log(returnName());

//(3) function addThree(x){
//     return x + 3;
// }
// console.log(addThree(5));

//(4)
// function sayString(){
// //     return "string";
// // }
// // console.log(sayString());

//05 function sayHowdy(){
//     return "Howdy!";
// }
// console.log(sayHowdy());

function identity(input) {
    return input;
}
console.log(identity('lol'));






