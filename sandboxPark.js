
//EXERCISE #2
   //.Reverse the provided string.You may need to turn the string into an array before you can reverse it.
   //.Your result must be a string.
   {
	
	function reverseString(str){
		return 'Reverse string with recursion';
	}
		   console.log(reverseString("hello")); //olleh
}//block


//EXERCISE #3
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

//EXERCISE #14
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

//EXERCISE #15
//Truncate a String

//.Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
//Return the truncated string with a ... ending.

{
	function truncateString(str, num) {
		return str.length <= num ? str : str.substr(0,num).concat('...');
	}

	console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); //"A-tisket..."
} //block
