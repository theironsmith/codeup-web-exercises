$(document).ready (function () {
    "use strict";
    const getMinMaxDayTemp = (data, day) => {
        const temps = data.list.slice(day * 8 - 8, day * 8)
            .reduce((prev, curr) => {
                prev.push(curr.main.temp);
                return prev;
            }, []).sort();
        return {min: temps.shift(), max: temps.pop()};
    };
    function weather(forecast){
            for (var i = 1; i <= forecast.list.length - 16; i+=8 )
                console.log(forecast.list[i].main.humidity);
            $("#allCards").append("<p>Humidity: " + forecast.list[i].main.humidity +  "%</p>");
            $("#allCards").last().append("<p>Min Temp: " + getMinMaxDayTemp(forecast, 1).min + "%F</p>");
            $("#allCards").last().append("<p>Max Temp: " + getMinMaxDayTemp(forecast, 1).max + "%F</p>");
            $("#allCards").last().append("<p>Pressure: " + forecast.list[i].main.pressure + "%</p>");
            $("#allCards").last().append("<p>It is a " + forecast.list[i].weather[0].description + " today</p>");

            for (var p = 1; p <= forecast.list.length - 16; p+=8 )
                console.log(forecast.list[p].main.humidity);
            $("#allCards2").append("<p>Humidity: " + forecast.list[p].main.humidity +  "%</p>");
            $("#allCards2").last().append("<p>Min Temp: " + getMinMaxDayTemp(forecast, 1).min + "%F</p>");
            $("#allCards2").last().append("<p>Max Temp: " + getMinMaxDayTemp(forecast, 1).max + "%F</p>");
            $("#allCards2").last().append("<p>Pressure: " + forecast.list[p].main.pressure + "%</p>");
            $("#allCards2").last().append("<p>It is a " + forecast.list[p].weather[0].description + " today</p>");


            for (var g = 1; g <= forecast.list.length - 16; g+=8 )
                console.log(forecast.list[g].main.humidity);
            $("#allCards3").append("<p>Humidity: " + forecast.list[g].main.humidity +  "%</p>");
            $("#allCards3").last().append("<p>Min Temp: " + getMinMaxDayTemp(forecast, 1).min + "%F</p>");
            $("#allCards3").last().append("<p>Max Temp: " + getMinMaxDayTemp(forecast, 1).max + "%F</p>");
            $("#allCards3").last().append("<p>Pressure: " + forecast.list[g].main.pressure + "%</p>");
            $("#allCards3").last().append("<p>It is a " + forecast.list[g].weather[0].description + " today</p>");



        // $("#update3").last().append(""+ 16.getMinMaxDayTemp();
        // var getForecasts = [0, 8, 16];
        // for (var i = 0; i < data.list.length; i += 0){
        // var getForecast = {};
        // forecast.getForecasts = {}
        //     // }
    }


    // MAKE THE WEATHER FORECAST
    // make a function to get the weather object from the OpenWeatherMap API
    // base url should be "http://api.openweathermap.org/data/2.5/forecast"
    // practice writing console.logs of various parts of the OpenWeatherMap object...
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: "e739ac2c81f83d0ba451d6801fccf051",
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
       weather(data);
        console.log(data.list[8]);
    });

});



//Add console log to see information live for needed adjustments. Also ensure add data input to day 2 and 3 for each card
//so that you can have it completed. It may be the variables or some other parts. Look and see...
//