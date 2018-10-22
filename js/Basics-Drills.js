// var i = 10;
//
// while (i <= 10){
//     console.log("They are the same")
// }
//
// var i = 10;
//
// while (i <= 10){
//     console.log("They are the same")
// }
//---------------while loop--------------------------------------
// var title = document.getElementById("main-title");
// console.log(title.innerHTML);
//
// var title = document.getElementById("main-title");
// console.log(title.innerText);
// //------------------DOM-----------------------------------
//
// for (/*initialization*/; /*condition*/; /*increment*/) {
//     // body
// }
//
// for (var i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }
//
// for (var i = 7; i < 40; i++){
//     console.log("for loop iteration #" + i);
// }
//--------for loops---------------------------------------

// // if/else example
// if (condition) {
//     // code here gets executed if condition evaluates to true
// } else {
//     // code here gets executed if condition evaluates to false
// }
//
// if(raining) {
//     alert("bring umbrella")
// } else {
//     alert("enjoy the sunny day!")
// }

//---Fizzbuzz Drills Week 1//
// function fizzbuzz(num){
//     for (var i = 1; i <= num; i++){
//         if (i % 15 == 0) {
//             console.log("fizzbuzz");
//         }else if{ (i % 3 === 0){
//             console.log("fizz");
//         }else if{ (i % 5 === 0){
//             console.log("buzz");
//         }else{
//             console.log(i);
//         }
//
//
//         }
//         }
//     }
// }
// function fizzbuzz(num){
//     for(var i = 1; i <= num; i++){
//         if (i % 15 == 0){
//             console.log("fizzbuzz");
//         }else if{ (i % 3 === 0){
//             console.log("fizz");
//         }else if{ (i % 5 === 0)}
//             console.log("buzz");
//         }else{
//             console.log("i");
//         }
//     }
// }
// //-----------While Loops-----------//
// var i = 9;
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }
//
// var num = 24;
// while (num < 26) {
//     console.log('while loop iteration #' + num);
// }
//     num++;
//
// var starships = 120
// while (starships > 62) {
//         console.log('while loop iteration #' + starships);
//         starships++;
// }
// //-------Do While Loops-------//
// var i = 10;
// do {
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 10);
//
//
// var doggo = 18;
// do {
//     console.log('while loop iteration #' + doggo);
// } while (doggo < 20);
//
//
// var ronin = 47;
// do {
//     console.log('while loop iteration #' + ronin);
// } while (ronin > 90);
//
// //---------For Loops---------//
// for (var i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }
//
// for (var horizons = 4; horizons > -2; horizons++){
//     console.log('for loop iteration #' + horizons);
// }
//
// for (var breakfasburritos = 2; breakfasburritos > -4; breakfasburritos++){
//     console.log('for loop iteration #' + breakfasburritos);
// }
//------Break and Continue Loops-----//

// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }

//
//------------Practice Drills from Justin---------//
// var arr = ["fred", true, 5, 3];
// function filterNumber(numberOnly) {
//     var expectedReturn = [];
//     for (var i = 0; i < numberOnly.length; i++){
//         if(typeof numberOnly[i]==="number"){
//             expectedReturn.push(numberOnly[i])
//         }
//     }
//     expectedReturn.sort();
//     return expectedReturn;
// }
// console.log(filterNumber(arr));

var arr = [{name: "Chompers", breed: "Pug", age: 7}, {name: "Freddy", breed: "Lab", age: 4}, {name: "Mr. Pig", breed: "Mastif", age: 10}];
function getOlder(dog){
    var olderDog = [];
    for (var i = 0; i <dog.length; i++){
        {
            dog[i].age += 1;
        }
    }
    olderDog.sort();
    return olderDog;
}
console.log(getOlder(arr));