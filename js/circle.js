// (function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function(area) {
         var area = Math.pow(circle.radius, 2) * Math.PI ;
            return area;
        },

        logInfo: function (doRounding) {
            var result = 0;
        if  (doRounding === true) {
            area = Math.round(area);
            var area = this.getArea();
            console.log("Area of a circle with radius: " + this.radius + ", is: " + area)
            // set result to the rounded area of the circle
        } else {
            // set result to the exact area of the circle
        }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
// })();