// // Maps: kinda like Objects but with built in methods


// var myMap = new Map();

// // Set
// myMap.set('name', 'Andrew');

// // Get

// console.log(myMap.get('name'));

// // has
// myMap.set('age', '22');
// console.log(myMap.has('age'));

// //delete
// myMap.delete('name');

// // Clear

// myMap.clear();

// // Size
// console.log(myMap.size);

// var myMap = new Map();

// myMap.set(1, 'Andrew');
// myMap.set(2, 'Mel');
// myMap.set(3, 'Ben');

// console.log([...myMap]);
// console.log(myMap.keys());
// console.log(myMap.values());

// ///////

var location = {name: 'houston'};
var locationTwo = {name: 'Oslo'};
var weather = new Map();

function setWeather (location, temp) {
	weather.set(location, temp);
}

function printWeather (location) {
	if (weather.has(location)) {
		console.log(`Its ${weather.get(location)} in ${location.name}`);
	} else {
		console.log(`no weather recorded for ${location.name}`);
	}
}

setWeather(location, 22);
printWeather(location);
printWeather(locationTwo);






