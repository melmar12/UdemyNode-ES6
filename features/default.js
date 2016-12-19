// function sayHello(name = 'world') {
// 	console.log('hello ' + name + '!');
// }

// sayHello();

function greetUser (user = {name: 'Anonymous'}) {
	console.log('Hello ' + user.name + '!');
}

greetUser();
greetUser({name: 'Kieran'});