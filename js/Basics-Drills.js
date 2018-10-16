var i = 10;

while (i <= 10){
    console.log("They are the same")
}

var i = 10;

while (i <= 10){
    console.log("They are the same")
}
//---------------while loop--------------------------------------
var title = document.getElementById("main-title");
console.log(title.innerHTML);

var title = document.getElementById("main-title");
console.log(title.innerText);
//------------------DOM-----------------------------------

for (/*initialization*/; /*condition*/; /*increment*/) {
    // body
}

for (var i = 0; i < 10; i++) {
    console.log('for loop iteration #' + i);
}

for (var i = 7; i < 40; i++){
    console.log("for loop iteration #" + i);
}
//--------for loops---------------------------------------

// if/else example
if (condition) {
    // code here gets executed if condition evaluates to true
} else {
    // code here gets executed if condition evaluates to false
}

if(raining) {
    alert("bring umbrella")
} else {
    alert("enjoy the sunny day!")
}

//---Fizzbuzz Drills Week 1//
function fizzbuzz(num){
    for (var i = 1; i <= num; i++){
        if (i % 15 == 0) {
            console.log("fizzbuzz");
        }else if{ (i % 3 === 0){
            console.log("fizz");
        }else if{ (i % 5 === 0){
            console.log("buzz");
        }else{
            console.log(i);
        }


        }
        }
    }
}
function fizzbuzz(num){
    for(var i = 1; i <= num; i++){
        if (i % 15 == 0){
            console.log("fizzbuzz");
        }else if{ (i % 3 === 0){
            console.log("fizz");
        }else if{ (i % 5 === 0)}
            console.log("buzz");
        }else{
            console.log("i");
        }
    }
}