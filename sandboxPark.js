//EXERCISE #1
// Iterate through array items

//We have defined a function, filteredArray, which takes arr, a nested array, and el as arguments, and returns a new array.
// el represents an element that may or may not be present on one or more of the arrays nested within arr.
//Modify the function, using a for loop, to return a filtered version of the passed array
//such that any array nested within arr containing el has been removed.

{
	function filteredArray(arr, n) {
		return arr.filter((el) => !el.includes(n));
	}

	console.log(
		filteredArray(
			[
				[3, 2, 3],
				[1, 6, 3],
				[3, 13, 26],
				[19, 5, 9],
			],
			3
		)
	); // should return [19, 5, 9]
} //end block
//EXERCISE #4
//Check objects' property

// We've created an object, users, with some users in it and a function isEveryoneHere,
//which we pass the users object to as an argument. Finish writing this function so that it returns true
//only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.

{
	let users = {
		Alan: {
			age: 27,
			online: true,
		},
		Jeff: {
			age: 32,
			online: true,
		},
		Sarah: {
			age: 48,
			online: true,
		},
		Ryan: {
			age: 19,
			online: true,
		},
	};

	function isEveryoneHere(obj) {
		if ("Alan" in obj && "Jeff" in obj && "Sarah" in obj && "Ryan" in obj)
			return true;
		else return false;
	}

	console.log(isEveryoneHere(users));
} // end block

//EXERCISE #5
//Iterate Through the Keys of an Object with a for...in Statement

//We've defined a function countOnline which accepts one argument (a users object).
// Use a for...in statement within this function to loop through the users object passed into the function
//and return the number of users whose online property is set to true.
// An example of a users object which could be passed to countOnline is shown below.
//Each user will have an online property with either a true or false value.

{
	const usersObj = {
		Alan: {
			online: true,
		},
		Jeff: {
			online: true,
		},
		Sarah: {
			online: true,
		},
	};

	function countOnline(obj) {
		let numberOfTruths = 0;
		for (let property in obj) {
			if (obj[property].online === true) numberOfTruths += 1;
		}

		return numberOfTruths;
	}

	console.log(countOnline(usersObj));
}
// end block
