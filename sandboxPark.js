
//EXERCISE #1
   //.Reverse the provided string.You may need to turn the string into an array before you can reverse it.
   //.Your result must be a string.
   {
	
	function reverseString(str){
		return 'Reverse string with recursion';
	}
		   console.log(reverseString("hello")); //olleh
}//block


//EXERCISE #2
 //.Return the factorial of the provided integer.
 //.If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 //.Only integers greater than or equal to zero will be supplied to the function.
{
function factorialize(num) {
	return 'return factorials';
}

console.log(factorialize(5)); // 120  
console.log(factorialize(-3));//0
console.log(factorialize(0));//1
}

//EXERCISE #3
//Repeat a String

//. Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.

{
	function repeatStringNumTimes(str, num) {
	  return 'repeat string x number of times';
	}

	console.log(repeatStringNumTimes("abc", 3)); //abcabcabc
	console.log(repeatStringNumTimes('*', 8)); // ********
} //block

//EXERCISE #4
//Truncate a String

//.Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
//Return the truncated string with a ... ending.

{
	function truncateString(str, num) {
		return str.substr(0,num).concat('...');
	}

	console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); //"A-tisket..."
} //block


//EXERCISE #16
//Finders Keepers
//.Create a function that looks through an array (first argument) and returns the first element in the array that passes
//a truth test (second argument). If no element passes the test, return undefined

{
	function findElement(arr, func) {
	
		return arr[arr.map(func).indexOf(true)];
	}

	console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0)); //
} //block


//EXERCISE #17
// Boo who

//.Check if a value is classified as a boolean primitive. Return true or false.
//. Boolean primitives are true and false.
{
	function booWho(bool) {
		return "Is this data type a boolean?";
	}

	console.log(booWho(true)); // true
	console.log(booWho("true"));// false.

} // block

//EXERCISE #18
//Title Case a Sentence

//.Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//.For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

{
	function titleCase(str) {
	 const convertedToArr = str.toLowerCase().split(' ');
	 const capitalize = convertedToArr.map(el=> el.charAt(0).toUpperCase().concat(el.substr(1)));
	 return capitalize.join(' ');
	}

	console.log(titleCase("sHoRt AnD sToUt")); // Short And Stout
} // block
