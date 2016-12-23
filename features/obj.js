var age = 23;

function printHello () {
	console.log('Hello');
}

var person = {
	name: 'Melissa',
	age,
	printHello,
	['hello' + (3 +2)]: 'I am here',
	printAge () {
		console.log(this.age);
	}
};

console.log(person.printAge());
person.printAge();