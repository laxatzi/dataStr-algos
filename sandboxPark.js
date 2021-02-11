
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
