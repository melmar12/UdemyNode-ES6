// classes are like bluepritns 
class Person {
	constructor (name) {
		this.name =  typeof name === 'string' ? Person.capitalizeWord(name) : 'Anonymous';
							// don't rly get this :/
	}
	printGreeting () {
		console.log(`Hello, I am ${this.name}!`);
	} 
	static capitalizeWord (word) {
		return word[0].toUpperCase() + word.slice(1);
	}

}

var person1 = new Person('melissa');
person1.printGreeting();

var person2 = new Person();
person2.printGreeting();


console.log(Person.capitalizeWord('mike'));