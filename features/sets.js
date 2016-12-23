// unique arrays, keeps unique items only 

var chatRooms = new Set();

// Add
chatRooms.add('Runners');
chatRooms.add('Runners');
chatRooms.add('Bikers');


// Size

console.log(chatRooms.size);

// Has
console.log(`Does the set have Runners: ${chatRooms.has('Runners')}`);

// // Remove
// chatRooms.delete('Bikers');
// console.log(chatRooms.size);
// chatRooms.clear();
// console.log(chatRooms.size);

// to array
chatRooms.add({name: 'Mel'});
console.log([...chatRooms]);

chatRooms.forEach(function (chatRoom) {
	console.log(`Found chatroom: ${chatRoom}`);
});

console.log('--------------------------');
console.log(' ');
console.log(' ');
console.log(' ');

var movies = new Set();

function addMovie (movieTitle) {

	if(movies.has(movieTitle)) {
		console.log(`duplicate movie found: ${movieTitle} alredy exists!`);
	} else {
		movies.add(movieTitle);
		console.log(`Success! ${movieTitle} was added!`);
	}

}

addMovie('A new Hope');
addMovie('District 9');
addMovie('A new Hope');


