//EXERCISE #1
   //.Reverse the provided string.You may need to turn the string into an array before you can reverse it.
   //.Your result must be a string.
   {
	
	function reverseString(str){
		if(str.length === 0) return "";
		return reverseString(str.substr(1)).concat(str.substr(0,1));
	}
		   console.log(reverseString("hello")); //olleh
}//block


//EXERCISE #2
 //.Return the factorial of the provided integer.
 //.If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 //.Only integers greater than or equal to zero will be supplied to the function.
 {
    function factorialize(num) {
        if(num<0) return false;
        if(num === 0) return 1;
        return num * factorialize(num - 1);
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
	  if(num <= 0) return "";
	  return repeatStringNumTimes(str, num-1).concat(str);
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
		if(str.length>num) return str.substr(0,num).concat('...');
		return str;
	}

	console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); //"A-tisket..."
} //block


//EXERCISE #5
//Finders Keepers
//.Create a function that looks through an array (first argument) and returns the first element in the array that passes
//a truth test (second argument). If no element passes the test, return undefined

{
	function findElement(arr, func) {
	
		return arr[arr.map(func).indexOf(true)];
	}

	console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0)); //8
} //block


//EXERCISE #6
//Title Case a Sentence

//.Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//.For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

{
	function titleCase(str) {
	
	 const convertToArray = str.toLowerCase().split(' ');
	 const capitalizeArrayEls = convertToArray.map(el=> el.charAt(0).toUpperCase().concat(el.substr(1)));
	 return capitalizeArrayEls.join(' ');
	}

	console.log(titleCase("sHoRt AnD sToUt")); // Short And Stout
} // block


//EXERCISE #19
// Slice and SplicePassed

//. You are given two arrays and an index.
//. Use the array methods slice and splice to copy each element of the first array into the second array, in order.
//. Begin inserting elements at index n of the second array. Return the resulting array.
//The input arrays should remain the same after the function runs.

{
	function frankenSplice(arr1, arr2, n) {
    // copy the array coz splice cause mutation
		const arr2Copy = arr2.slice(); 
    // mutate the array BUT NOT return it - splice returns the spliced element (if not such thing, an empty array)
	    arr2Copy.splice(n,0,...arr1);
    // return the already mutated array
		return arr2Copy;
	}

	console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // [4, 1, 2, 3, 5]
} // end bl