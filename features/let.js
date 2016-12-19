// var x = 0;

// if (true) {
// 	let x = 12;
// 	console.log(x);
// }

// console.log(x);


for (let i = 0; i < 3; i++) {
	console.log(`for loop iteration ${i}`);
}

// console.log(i);

function genCallback () {
	let name = 'Mel';

	return function () {
		console.log(`Hello ${name}`);
	}
}
genCallback()();

