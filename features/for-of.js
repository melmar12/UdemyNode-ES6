// var locations = [];

// locations.push({
// 	name: 'Houston',
// 	weather: 70
// });
// locations.push({
// 	name: 'San Francisco',
// 	weather: 60
// });

// for (let location of locations) {
// 	console.log(`its ${location.weather} in ${location.name}`);
// }

function averageGrade (...grades) {
	var total = 0;

	for (let grade of grades) {
		total += grade;
	}

	return (total / grades.length)
}

var total = averageGrade(1, 44, 99);
console.log(total);