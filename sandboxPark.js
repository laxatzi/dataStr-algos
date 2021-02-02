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
	); // should return []
} //end block
