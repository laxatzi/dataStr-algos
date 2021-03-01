// watchList variable
const watchList = [
	{
		Title: "Inception",
		Year: "2010",
		Rated: "PG-13",
		Released: "16 Jul 2010",
		Runtime: "148 min",
		Genre: "Action, Adventure, Crime",
		Director: "Christopher Nolan",
		Writer: "Christopher Nolan",
		Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
		Plot:
			"A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
		Language: "English, Japanese, French",
		Country: "USA, UK",
		Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
		Poster:
			"http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
		Metascore: "74",
		imdbRating: "8.8",
		imdbVotes: "1,446,708",
		imdbID: "tt1375666",
		Type: "movie",
		Response: "True",
	},
	{
		Title: "Batman Begins",
		Year: "2005",
		Rated: "PG-13",
		Released: "15 Jun 2005",
		Runtime: "140 min",
		Genre: "Action, Adventure",
		Director: "Christopher Nolan",
		Writer:
			"Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
		Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
		Plot:
			"After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
		Language: "English, Urdu, Mandarin",
		Country: "USA, UK",
		Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
		Poster:
			"http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
		Metascore: "70",
		imdbRating: "8.4",
		imdbVotes: "972,584",
		imdbID: "tt0372784",
		Type: "movie",
		Response: "True",
	},
	{
		Title: "Avatar",
		Year: "2009",
		Rated: "PG-13",
		Released: "18 Dec 2009",
		Runtime: "162 min",
		Genre: "Action, Adventure, Fantasy",
		Director: "James Cameron",
		Writer: "James Cameron",
		Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
		Plot:
			"A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
		Language: "English, Spanish",
		Country: "USA, UK",
		Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
		Poster:
			"http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
		Metascore: "83",
		imdbRating: "7.9",
		imdbVotes: "876,575",
		imdbID: "tt0499549",
		Type: "movie",
		Response: "True",
	},
];

//EXERCISE #1  !!
   //.Reverse the provided string.You may need to turn the string into an array before you can reverse it.
   //.Your result must be a string.
   {
	
	function reverseString(str){
		return 'reverse string using recursion'
	}
		   console.log(reverseString("hello")); //olleh
}//block


//EXERCISE #2
 //.Return the factorial of the provided integer.
 //.If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 //.Only integers greater than or equal to zero will be supplied to the function.
{
function factorialize(num) {
	return 'factorial of num';
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
	  
	  return 'create a new string by concatenate itself num number of times';
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
		return "truncate a string";
	}

	console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); //"A-tisket..."
} //block


//EXERCISE #5
//Finders Keepers
//.Create a function that looks through an array (first argument) and returns the first element in the array that passes
//a truth test (second argument). If no element passes the test, return undefined

{
	function findElement(arr, func) {
	   return "return first el in arr that passes a truth test";
	}

	console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0)); //8
} //block


//EXERCISE #6
//Title Case a Sentence

//.Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//.For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

{
	function titleCase(str) {
	
	 
	 return 'capitalize words in string';
	}

	console.log(titleCase("sHoRt AnD sToUt")); // Short And Stout
} // block



//EXERCISE #7
// Slice and SplicePassed

//. You are given two arrays and an index.
//. Use the array methods slice and splice to copy each element of the first array into the second array, in order.
//. Begin inserting elements at index n of the second array. Return the resulting array.
//The input arrays should remain the same after the function runs.

{
	function frankenSplice(arr1, arr2, n) {
		return "franken splice";
	}

	console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // [4, 1, 2, 3, 5]
} // end block


//EXERCISE #8
//Falsy Bouncer

//.Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
{

	function bouncer(arr) {
		return 'remove false values';
	}

	//test
	console.log(bouncer([null, NaN, 1, 2, undefined])); // [1,2]
} //block



//EXERCISE #9
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.

//.For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

//.Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
{
	function getIndexToIns(arr, num) {
		
		return "Where do i belong algorithm";
	}
	console.log(getIndexToIns([10, 40, 5 ,20, 50], 30)); //3
	console.log(getIndexToIns([2, 20, 10], 19)); // 2
	
} //block



//EXERCISE #10
// Chunky Monkey

//.Write a function that splits an array (first argument) into groups the length of size (second argument) 
//and returns them as a two-dimensional array.
//.Our goal for this Algorithm is to split arr (first argument) into smaller chunks of arrays with the length provided by size (second argument). There are 4 green checks (objectives) our code needs to pass in order to complete this Algorithm:


{
	function chunkArrayInGroups(arr, size) {
	    
		return "chunky monkey algorithm";
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
	    return "solve mutation algorithm";
	  }
	  
	  console.log(mutation(["hello", "hey"])); // false
	  console.log(mutation(["Noel", "Ole"])); // true
}


//EXERCISE #12
//Spinal Tap Case 
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

{
	function spinalCase(str) {
	    return 'spinal case algorithm';
	}

	console.log(spinalCase("This  Is Spinal Tap")); //"this-is-spinal-tap"
	console.log(spinalCase("This_Is_Spinal_Tap")); //"this-is-spinal-tap"
    console.log(spinalCase("thisIsSpinalTap"));
} //end block


//FUNCTIONAL JS---------------------------------------------------

//EXERCISE#13
// The variable watchList holds an array of objects with information on several movies.
//Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan.
//Recall from prior challenges how to filter data and map over it to pull what you need.
// You may need to create other variables, and return the average rating from getRating function.
// Note that the rating values are saved as strings in the object
//and need to be converted into numbers before they are used in any mathematical operations.
{
	function getAvgRating(arr, director) {
		return "Get average Rating!";
	}
	console.log(getAvgRating(watchList));
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
		return "string to URL slug converter";
		
	}

	console.log(urlSlug(" Winter Is  Coming")); // winter-is-coming
} //end block


//EXERCISE #15
// Partial Application
// Fill in the body of the add function so it uses currying to add parameters x, y, and z.

{
	function add(x) {
		return "partial application";

	}

	//console.log(add(10)(20)(30)); // 60
} // end block

//EXERCISE #16
//. We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

//. For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
{

	function sumAll(arr) {
		
		return 'Sum of all numbers between array elements';
	}

	console.log("sum is: " + sumAll([5, 1])); // 15
	console.log(sumAll([5, 10])); // should return 45.
	console.log(sumAll([10, 5])); // should return 45.
}


//EXERCISE #17
//. Intermediate Algorithm Scripting: Diff Two Arrays (SYMMETRIC DIFF)
//. Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.

//. Note
//. You can return the array with its elements in any order.

{
	function diffArray(arr1, arr2) {
		return "return symmetric diff!";
	}

	console.log(
		diffArray(
			["andesite", "grass", "dirt", "pink wool", "dead shrub"],
			["diorite", "andesite", "grass", "dirt", "dead shrub"]
		)
	);
	//. should return ["diorite", "pink wool"].
} //end block


//EXERCISE #18
// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

{
	function destroyer(arr) {
		let args = [...arguments];
		return arr.filter((el) => args.indexOf(el) === -1);
	}

	console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // should return ["hamburger"]
	console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], 
	                       "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")); // [12,92,65]
} //end block


//EXERCISE #19
// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument)
// and returns an array of all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
//{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, 
//then you must return the third object from the array (the first argument), because it contains the name and its value, 
//that was passed on as the second argument.

{
	function whatIsInAName(collection, source) {
			return "What is in a name";
	}

	console.log(
		whatIsInAName(
			[
				{ first: "Romeo", last: "Montague" },
				{ first: "Mercutio", last: null },
				{ first: "Tybalt", last: "Capulet" },
				{first: "Lambros"},
			],
			{ last: "Capulet" }
		)
	); // should return [{ first: "Tybalt", last: "Capulet" }].
} //end block

//EXERCISE #20
//// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
{
	function pigLatin(str) {
		return 'pig latin algo';
	}


	//test here
	console.log(pigLatin("california")); // should return aliforniacay;
	console.log(pigLatin("paragraphs")); // should return "aragraphspay"
	console.log(pigLatin("algorithm")); // algorithmway
} // end block