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
} // end block

//.Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
{
	function bouncer(arr) {
		return arr.filter(el => el);
	}

	//test
	console.log(bouncer([null, NaN, 1, 2, undefined])); // [1,2]
} //block

//EXERCISE #14
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.

//.For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

//.Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
{
	function getIndexToIns(arr, num) {
		const sortedArray = arr.concat(num).sort((a,b)=> a - b);
		return sortedArray.indexOf(num);
	}
	console.log(getIndexToIns([10, 40, 5 ,20, 50], 30)); //3
	console.log(getIndexToIns([2, 20, 10], 19)); // 2
	
} //block


//EXERCISE #15
// Chunky Monkey

//.Write a function that splits an array (first argument) into groups the length of size (second argument) 
//and returns them as a two-dimensional array.
//.Our goal for this Algorithm is to split arr (first argument) into smaller chunks of arrays with the length provided by size (second argument). There are 4 green checks (objectives) our code needs to pass in order to complete this Algorithm:


{
	function chunkArrayInGroups(arr, size) {
		if(arr.length === 0) return arr;
		if(arr.length < size) return [arr];
		return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size), size)) ;
	}

	//test
	console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); //should return [[0, 1], [2, 3], [4, 5]].
	console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); //should return [[0, 1, 2, 3], [4, 5]].
} //block


// EXERCISE #11
// Mutations

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
{

	function mutation(arr) {
		
		return arr[1].toLowerCase().split('').every(el => arr[0].toLowerCase().split('').indexOf(el));
	  }
	  
	  console.log(mutation(["hello", "hey"])); // false
	  console.log(mutation(["Noel", "Ole"])); // true
}

//EXERCISE#13
// The variable watchList holds an array of objects with information on several movies.
//Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan.
//Recall from prior challenges how to filter data and map over it to pull what you need.
// You may need to create other variables, and return the average rating from getRating function.
// Note that the rating values are saved as strings in the object
//and need to be converted into numbers before they are used in any mathematical operations.
{
	function getAvgRating(arr, director) {
		
		const ratings = arr.filter(el=> el.Director === director).map(el=>Number(el.imdbRating));
		const ratingsSum = ratings.reduce((acc,cur)=> acc + cur).toFixed(2);
		return ratingsSum/ratings.length;
	}
	console.log(getAvgRating(watchList, 'Cristopher Nolan'));
} //end block

//EXERCISE #14
//Convert Strings to URL Slugs
//Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL.
//You can use any of the methods covered in this section, and don't use replace. Here are the requirements:
//The input is a string with spaces and title-cased words.
//The output is a string with the spaces between words replaced by a hyphen (-).
//The output should be all lower-cased letters
//The output should not have any spaces

{
	function urlSlug(title) {
	const convertToArray = title.trim().toLowerCase().split(' ');
	return convertToArray.filter(el => el.length>0).join('-');
	}

	console.log(urlSlug(" Winter Is  Coming")); // winter-is-coming
} //end block