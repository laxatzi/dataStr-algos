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
