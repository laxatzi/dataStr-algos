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
		
		return "revers string with use of recursion";
	}
		   console.log(reverseString("hello")); //olleh
}//block


//EXERCISE #2
 //.Return the factorial of the provided integer.
 //.If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 //.Only integers greater than or equal to zero will be supplied to the function.

{
	function factorialize(num) {
		
		return 'factorialize';
	}

	console.log(factorialize(5)); // 120  
	console.log(factorialize(-3)); // 0
	console.log(factorialize(0)); // 1
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
	{
		function findElement(arr, func) {
		
			return 'Finders Keepers';
		}
	
		console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0)); //8
	} //block
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
		
		return 'franken splice';
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
			return "chunky monkey algorithm"
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
//imdbRating, Director
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

	//console.log(add(10)(20)(1)); // 31
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
		
		return 'destroyer algo';
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
		return 'pig latin algorithm';
	}


	//test here
	console.log(pigLatin("california")); // should return aliforniacay;
	console.log(pigLatin("paragraphs")); // should return "aragraphspay"
	console.log(pigLatin("algorithm")); // algorithmway
} // end block


//EXERCISE #21
// Search and ReplacePassed
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//First argument is the sentence to perform the search and replace on.
//Second argument is the word that you will be replacing (before).
//Third argument is what you will be replacing the second argument with (after).
//Note
//Preserve the case of the first character in the original word when you are replacing it.
//For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

{
	function myReplace(str, before, after) {
		
	  return "Solve 'search and replace' algorithm";
	  
	}

	console.log( myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); //"He is Sitting on the couch"
	console.log(myReplace("I think we should look up there", "up", "Down")); // "I think we should look down there"
} //end block



//EXERCISE #22
//. Q: Find the second largest number in a given array.
//. Params: We are given an array of whole, positive integers (no negative numbers or floats). 
//We are to write //. a function and return the second largest integer.
{
	function secondLargest(arr) {
		
		return "return second largest";
	}

  console.log(secondLargest([1,2,3,4,10])); // 4
} // end block;


// EXERCISE #23
//. Q: Remove Duplicate Elements from an Array
{

	let cities = [
		"Comotini",
		"Athens",
		"Athens",
		"Thessaloniki",
		"Iraklion",
		"Drama",
		"Thessaloniki",
	];

	//Remove Dups from an Array

	function removeDups(arr) {
	
		return "remove duplicates";
	}
	   console.log(removeDups(cities)); // ["Athens", "Drama", "Iraklion", "Thessaloniki"]
} // end block


// EXERCISE #24
// DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

{
	const dnaPairs = {
		A: "T",
		G: "C",
		T: "A",
		C: "G",
	};

	function pairElement(str) {
		
	return "return pairElement";
	}
	console.log(pairElement("CTCTA")); //[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
} //block


// EXERCISE #25
//Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
console.log('START HERE!');
{

	function fearNotLetter(str) {
	 let  curLetter = str.charCodeAt(0);
	 let missingLetter;

	 str.split('').map((el, idx)=> {
	
		(str.charCodeAt(idx) === curLetter) ? (curLetter++) : (missingLetter = String.fromCharCode(curLetter));

	 });

	 if (!missingLetter) return 'No letter is missing!';
	 return `The missing letter is '${missingLetter}'!`;
	
		 return `The missing letter is ?'!`
}	

	console.log(fearNotLetter("abce"));
	console.log(fearNotLetter("abcde"));

//end block

}


//. EXERCISE #26
// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of
//the original provided arrays.
// In other words, all values present from all arrays should be included
//in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// Check the assertion tests for examples.

{

	function uniteUnique(arr) {
		
		return "sorted union algorithm";

	}

	console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //[1, 3, 2, 5, 4]
} //end block


//. EXERCISE #27
//Convert HTML Entities
//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

{
	const htmlEntities = {
		'&' : '&amp;',
		'<' : '&lt;',
		'>' : '&gt;',
		'"' : '&quot;',
		"'": '&apos;',
	}
	function convertHTML(str) {
		
		return 'convert html entities';
	}

	console.log(convertHTML("Dolce & Gabbana")); // Dolce &amp; Gabbana
} //end block	


// EXERCISE #28
// Sum All Odd Fibonacci Numbers

	// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
	// The first two numbers in the Fibonacci sequence are 1 and 1. 
	//Every additional number in the sequence is the sum of the two previous numbers. 
	//The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
	// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


{
    function sumFibs(num) {
     return 'Sum of odd fibonacci numbers';
    
  }
        console.log(sumFibs(10)); //10
        console.log(sumFibs(100)); // 188
        console.log(sumFibs(75024)); // 60696
       
} // end block


// EXERCISE 29
//  Sum All Primes

	// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
	// For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 
	// 4 is not prime since it is divisible by 1, 2 and 4.

	// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

{

	function sumPrimes(num) {
		
	return 'Find sum of all primes less or equal to num';

}
	  console.log(sumPrimes(10));  // 17.
      console.log(sumPrimes(977)); // 73156.

}//end block


// EXERCISE #30
// Smallest Common Multiple

    // Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
	//as well as by all sequential numbers in the range between these parameters.
    // The range will be an array of two numbers that will not necessarily be in numerical order.
    // For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers 
	//between 1 and 3. The answer here would be 6.

	{

		function smallestCommons(arr) {
		
			return "smallest common multiple";
	}

		console.log(smallestCommons([1, 5])); // 60
		console.log(smallestCommons([5, 1])); // 60
		console.log(smallestCommons([23, 18])); //6056820
	}//end block

	

	//EXERCISE #31
// Drop it

	// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
	// until the function func returns true when the iterated element is passed through it.

	// Then return the rest of the array once the condition is satisfied, otherwise... 
	// arr should be returned as an empty array.

{
	function dropElements(arr, func) {
		
		return 'drop';
	  }
 
	//test
	console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})); // should return [1, 0, 1]
	console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})); // should return [7, 4]
	console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})); //  should return []
}

//EXERCISE #32
//Steamroller
  // Flatten a nested array. You must account for varying levels of nesting.
{
	function steamrollArray(arr) {
			return "Flatten deep array";
	}
	  console.log(steamrollArray([1,[2]])); // [1,2];
	  console.log(steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]
	  console.log(steamrollArray([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]
}// end block



//EXERCISE #33
// binaryAgents
  // Return an English translated sentence of the passed binary string.
  // The binary string will be space separated.

  {
	function binaryAgent(str){
	   
		return "binary Agent";
	}
	// bellow str should return -I love FreeCodeCamp! - '
	console.log(binaryAgent('01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001')); 

}// block


