class Person {
	constructor (name) {
		this.name =  typeof name === 'string' ? name : 'Anonymous';
							// don't rly get this :/
	}
	set name (val) {
		this._name = Person.capitalizeWord(val);
	}
	get name () {
		return this._name;
	}
	printGreeting () {
		console.log(`Hello, I am ${this.name}!`);
	} 
	static capitalizeWord (word) {
		return word[0].toUpperCase() + word.slice(1);
	}

}
class Emp extends Person {
	constructor (name, job = 'Unemployed') {
		super(name);
		this.job = job; 
	}
	printGreeting () {
		console.log(`Hi, I am ${this.name} and I am a ${this.job}!`);
	}
	callSuperMethod () {
		//just an example
		super.printGreeting();
	}
}




var person1 = new Emp('melissa', 'developer');
//person1.name = 'jen';
person1.printGreeting();

var person2 = new Emp();
person2.printGreeting();



