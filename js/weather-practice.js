// console.log(data);
// // console.log the current weather description
// console.log(data.list[0].weather[0].description);
// // console.log the humidity of the 2nd day
// console.log(data.list[11].main.humidity);
// // console.log the humidity of all the days (use a for loop)
// for (var i = 0; i < data.list.length; i += 1) {
//     console.log(data.list[i].main.humidity);
// }
// // console.log the temperature of the 3rd day in celsius
// console.log(data.list[24].main.temp);
// // console.log the temperature of the 3rd day in Fahrenheit
// console.log(data.list[24].main.temp);
// // console.log all types of information you will ultimately display for a single day in the 3-day forecast div
// console.log(data.list[0].main.temp);
// console.log(data.list[8].main.temp);
// console.log(data.list[16].main.temp);
// // console.log all type of information you will ultimately display for all days in the 3-day forecast divs
// console.log(getMinMaxDayTemp(data, 1));
// console.log(getMinMaxDayTemp(data, 2));
// console.log(getMinMaxDayTemp(data, 3));
// // write html and css to make/style a three-day forecast set of divs (may use design from curriculum)
//