"use strict";
// Create a function named showMultiplicationTable that accepts a number
// and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output

// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70


// function showMultiplicationTable(workingNum){
//     for (var increNum = 1; increNum <= 10; increNum++) {
//         console.log(workingNum + " x " + increNum + " = " + (workingNum * increNum));
//     }
// }
// showMultiplicationTable(7);

// for (var decreNum = 100; decreNum >= 5; decreNum -= 5) {
//     console.log(decreNum);
// }

// var number = 2;
// // // while(number <= 65536){
// // //     num *= 2;
// // //     console.log(number);
// // //

// console.log("It's a great day at the ice cream selling stand!");
//
// var allCones = Math.floor(Math.random() * 50) + 50;
// console.log("I have" + allCones + "number of cones to sell everybody!");
//
// var conesOrder;
// do {
//     conesOrder = Math.ceil(Math.random() * 5);
//     if (conesOrder <= allCones){
//     allCones - allCones - conesOrdered;
//     console.log("I now have" + allCones + "left.");
// } else {
//     console.log("Not enough for you. Next customer, please!");
// } while(allCones > 0);
//     console.log("Yay! I sold all the cones and get to go home!");}

// function isEven(num) {
//     return num % 2 === 0;
// }
// var randomNumber;
// for (var 1 = 0; i < 10; i++) {
//     randomNumber = Math.floor(Math.random() * 180) + 20;

//     if(isEven(randomNumber)){
// //         console.log(randomNumber + " is even!");
// //     } else {
// //         console.log(randomNumber + " is odd!");
// //     }
// // }

for (var i = 1; i <= 9; i++){
    i = i + "";
    console.log(i.repeat(i));
}