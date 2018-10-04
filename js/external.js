"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

    /*
    console.log("Hello from external JavaScript");
    alert("Welcome to my Website");
    var userFavColor = prompt("Please enter your fav color:");
    alert("I love" + " " + userFavColor + " " + "too!");
    */
    /*
    console.log("Hello from external JavaScript");
    alert("Welcome to my Website");
    var userRental = prompt("How many days would you like to rent the Little Mermaid?:");

    var userRental2 = prompt("How many days would you like to rent the Brother Bear?:");

    var userRental3 = prompt("How many days would you like to rent Hercules?");

    alert("It will cost $" + (Number(userRental)+ Number(userRental2) +  Number(userRental3)) * 3);
    */

    /*
    console.log("Hello from external JavaScript");
    alert("Welcome to my Website");
    var googleSalary = prompt("How many days would you like to work at Google?:");

    var facebookSalary= prompt("How many days would you like to work at Facebook?:");

    var amazonSalary = prompt("How many days would you like to work at Amazon?");

    alert("Your expected salary should be" + "$ " + ((Number(googleSalary) * 400 ) + (Number(facebookSalary) * 350) +  (Number(amazonSalary) * 380)));
    */
/*
console.log("Hello from external JavaScript");
alert("Welcome to my Website");
var userRental = prompt("How many days would you like to rent the Little Mermaid?:");

var userRental2 = prompt("How many days would you like to rent the Brother Bear?:");

var userRental3 = prompt("How many days would you like to rent Hercules?");

alert("It will cost $" + (Number(userRental)+ Number(userRental2) +  Number(userRental3)) * 3);

*/

var IsClassFull = confirm("Is the Class Full?");
var conflictSchedule = confirm("Does this conflict with Schedule?");

if (IsClassFull===false && conflictSchedule===false) {
    alert("You can come to class!")
} else{
    alert("You can't come to class!")
}