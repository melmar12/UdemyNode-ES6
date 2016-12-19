// function greet (name = 'Mel') {
// 	console.log('Hello ' + name +'!');
// 	console.log(`hello ${name}`)

// }

// greet();
// greet('Kate');
// console.log(`1 + 6 = ${1 + 6}`);
// console.log(`hey,

// this kinda looks like an email

// - wooo `);
var person = {
	name: 'Dave', 
	age: 26
};
var defaultPerson = {
	name: 'Anonymous',
	age: 0
};

function somePerson (person = defaultPerson) {
	console.log(`Hello ${person.name}, you are ${person.age}`)
}

somePerson(person);
somePerson();