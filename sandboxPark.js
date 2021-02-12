
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

//EXERCISE #11
//Find the Longest Word in a String

//.Return the length of the longest word in the provided sentence.
//.Your response should be a number.
{
		function findLongestWordLength(str) {
			return 'return the length of the lengthiest word in the sentence';
		}

		console.log(
			findLongestWordLength("The quick brown fox jumped over the lazy dog")
		); // 6
} //block

//EXERCISE #12
// Return Largest Numbers in ArraysPassed

//.Return an array consisting of the largest number from each provided sub-array.
//For simplicity, the provided array will contain exactly 4 sub-arrays.
//.Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

{
		function largestOfFour(arr) {
			return 'return an array consisting of the maximum number in each subarray';
		}
		console.log(
			largestOfFour([
				[13, 27, 18, 26],
				[4, 5, 1, 3],
				[32, 35, 37, 39],
				[1000, 1001, 857, 1],
			])
		); //[27, 5, 39, 1001]
} //block

//EXERCISE #13
// Confirm the Ending

//.Check if a string (first argument, str) ends with the given target string (second argument, target).
//.This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
//But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
{
	function confirmEnding(str, target) {
		return str.substr(-target.length) === target ? true : false;
	}

	console.log(confirmEnding("Bastian", "k"));
} //block

//EXERCISE #14
//Repeat a String

//. Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.

{
	function repeatStringNumTimes(str, num) {
	  if(num<=0) return "";
	  return str.concat(repeatStringNumTimes(str, num - 1));
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
		return 'truncate string';
	}

	console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); //"A-tisket..."
} //block
