"use strict";


alert("Welcome to my Website");

var userInput = prompt('What is your name?:');
console.log('The user entered: ' + userInput);

if (userInput)
alert(userInput + " has " + userInput.length + " characters.");

if (userInput !== "") {
} else {
    alert("Name must be filled out");
}


/*
alert("Welcome to my Website");
var madLib = prompt("What noun would you like to use? Restrain yourself:");

var madLib2 = prompt("What verb would you use to follow up that noun?:");

var madLib3 = prompt("Adjective?? Need one of those next!");

var madLib4 = prompt("Now just gimme an Adverb and boy I've got something funny to tell you!");

alert("The " +  madLib + " " +  madLib2 + " " +  madLib3 + " " +  madLib4 + " " );
*/

/*
alert("Welcome to my Website");
var userRental = prompt("How many days would you like to rent the Little Mermaid?:");

var userRental2 = prompt("How many days would you like to rent the Brother Bear?:");

var userRental3 = prompt("How many days would you like to rent Hercules?");

alert("It will cost $" + (Number(userRental)+ Number(userRental2) +  Number(userRental3)) * 3);
*/