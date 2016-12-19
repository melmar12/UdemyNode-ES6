var people = ['andrew', 'kieran', 'vikram', 'nick', 'dave'];

// people.forEach(function (name) {
// 	console.log(`hello ${name}!`);
// });

// people.forEach((name) => console.log(name));

// people.forEach((name) => {
// 	console.log('welcome');
// 	console.log(name);
// });

// // original function definition
// function add (a, b) {
// 	return a + b;
// }

// console.log(add(3, 9));

// var add = (a, b) => a + b;
// var add = (a,b) => {return a + b;}

// console.log(add(3,9));

// // original workaround 
// var person = {
// 	name: 'Mel',
// 	likes: ['cooking', 'coding', 'gaming'],
// 	generateGreeter: function () {
// 		var that = this;
// 		return function () {

// 			console.log(that.name);
// 		}
// 	}
// }
// person.generateGreeter()();

// es2015 solution
var person = {
	name: 'Mel',
	likes: ['cooking', 'coding', 'gaming'],
	generateGreeter: function () {
		return () => {
			console.log(this.name);
		}
	},
	printLikes: function () {
		this.likes.forEach((like) => {
			console.log(`${this.name} likes ${like}`);
		});
	}
}
person.generateGreeter()();
person.printLikes();

