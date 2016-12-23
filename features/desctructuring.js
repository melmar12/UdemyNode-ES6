//  this is most useful in,
// function arguments
// and function return values

var array = ['first', 'second', 'third'];
var [a, b, c] = array;

console.log(a, c);
console.log('-----------');

var todo = {
	description: 'watch new Es6 section',
	completed: false
};
// var {description} = todo;
// console.log(description);

// var {description: message, completed} = todo;
// console.log(message);
// console.log(completed);

function getTodoStatus ({completed}) {
	// what/??? o.o
	if (typeof completed === 'boolean') {
		return [`todo is ${completed ? '': 'not '}completed.`];
	} else {
		return [undefined, {error: 'INVALID_TODO_ITEM'}]
	}
}


// common use
var [res, err] = getTodoStatus(todo);
if (err) {
	console.log(err.error);
} else {
	console.log(res);
}

getTodoStatus(todo);




