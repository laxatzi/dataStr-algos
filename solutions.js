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


//EXERCISE #7
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


//EXERCISE #8
//.Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
{
	function bouncer(arr) {
		return arr.filter(el => el);
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
		const sortedArray = arr.concat(num).sort((a,b)=> a - b);
		return sortedArray.indexOf(num);
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
		
		const secondStr = arr[1].toLowerCase().split('');
		const firstStr = arr[0].toLowerCase().split('');
		return secondStr.every((el) => firstStr.indexOf(el));
	  }
	  
	  console.log(mutation(["hello", "hey"])); // false
	  console.log(mutation(["Noel", "Ole"])); // true
}


//EXERCISE #12
//Spinal Tap Case
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

{
	function spinalCase(str) {
		return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s+|_/g,'-').toLowerCase();

	}

	console.log(spinalCase("This Is Spinal Tap"));
} //end block



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



//EXERCISE #15
// Partial Application
// Fill in the body of the add function so it uses currying to add parameters x, y, and z.

{
	function add(x) {
		return function(y){
			return function(z){
				return x + y + z;
			}
		}

	}

	//console.log(add(10)(20)(30)); // 60
} // end block



//EXERCISE #16
//. We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

//. For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
{

	
	function sumAll(arr) {
		const min = Math.min(...arr);
		const max = Math.max(...arr);
		if (min === max) return max;
		return min + sumAll([min + 1, max]);
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
		return arr1.filter(el => arr2.indexOf(el) === -1).concat(arr2.filter(el=> arr1.indexOf(el) === -1));
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
	function destroyer(...args) {
		
		return args[0].filter(el => args.indexOf(el) === -1 );
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
		const objKeys = Object.keys(source); // last
		return collection.filter(obj => objKeys.every(key => obj[key] === source[key]));
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
//Spinal Tap Case
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

{
	function spinalCase(str) {
		const reg1 = /([a-z])([A-Z])/g;
		const reg2 = /\s|_/g;
		return str.replace(reg1,'$1 $2').replace(reg2, '-').toLowerCase();
	}

	console.log(spinalCase("This Is Spinal Tap"));
	console.log(spinalCase("ThisIsSpinalTap"));

} //end block


//EXERCISE #21
//// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
{
	function pigLatin(str) {
		//^aeiou => starts with vowel, ^[^aeiou] DO NOT starts with vowel
		const vowel = /[aeiou]/;
		const consonantCluster = /^[^aeiou]+/g;
		if(str[0].match(vowel)) return str + "way";
		return str.replace(consonantCluster, '').concat(str.match(consonantCluster),"ay");
	}


	//test here
	console.log(pigLatin("california")); // should return aliforniacay;
	console.log(pigLatin("paragraphs")); // should return "aragraphspay"
	console.log(pigLatin("algorithm")); // algorithmway
} // end block


//EXERCISE #22
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
	  if (before[0].match(/[A-Z]/g)){
		  after = after.replace(after[0], after[0].toUpperCase());
		  return str.replace(before, after);
	  }
		  after = after.replace(after[0], after[0].toLowerCase());
		  return str.replace(before, after);
	  
	}

	console.log( myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); //"He is Sitting on the couch"
	console.log(myReplace("I think we should look up there", "up", "Down")); // "I think we should look down there"
} //end block


//EXERCISE #23
//. Q: Find the second largest number in a given array.
//. Params: We are given an array of whole, positive integers (no negative numbers or floats). 
//We are to write //. a function and return the second largest integer.
{
	function secondLargest(arr) {
		const maxRemoved = arr.sort((a,b) => a < b);
		maxRemoved.shift();
		return Math.max(...maxRemoved);

		return 'second largest number in a given array'
	}

  console.log(secondLargest([1,2,3,4,10])); // 4
} // end block;


// EXERCISE #24
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
		const unique = [...new Set(arr)];
		return unique;
	
	}
	console.log(removeDups(cities)); // ["Athens", "Drama", "Iraklion", "Thessaloniki"]

	function removeTheDups(arr) {
		const sorted = arr.sort((a,b) => b > a);
		 return sorted.reduce((acc, cur) => {
			if (acc[0] !== cur) acc.unshift(cur);
			return acc;
		 }, []);
		}
		console.log(removeTheDups(cities)); // ["Athens", "Drama", "Iraklion", "Thessaloniki"]
	
		function removeDuplicates(arr) {
			return	arr.filter((el, idx, thisArray) => {
					return thisArray.indexOf(el) === idx;
				}).sort((a,b) => a > b);
		   }
		   console.log(removeDuplicates(cities)); // ["Athens", "Drama", "Iraklion", "Thessaloniki"]
} // end block


// EXERCISE #25
//Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

{
	function fearNotLetter(str) {

	let compareBase = str.charCodeAt(0);
	let missingLetter;

	str.split('').map((el, idx)=> {
		(str.charCodeAt(idx) === curLetter) ? (curLetter++) : (missingLetter = String.fromCharCode(curLetter));
	  });
 
	  if (!missingLetter) return 'No letter is missing!';
	  return `The missing letter is '${missingLetter}'!`;

}

	console.log(fearNotLetter("abce"));
} //end block


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
		const args = [...arguments];
		return args.reduce((acc, cur) => {
			return acc.concat(cur);
		},[]).filter((el, idx, thisArray) => {
			return thisArray.indexOf(el) === idx;
		});
	}

	console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //[1, 3, 2, 5, 4]
} //end block


//. EXERCISE #27
//Convert HTML Entities
//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

{

	function convertHTML(str) {

  const htmlEntities = {
		'&' : '&amp;',
		'<' : '&lt;',
		'>' : '&gt;',
		'"' : '&quot;',
		'\'': '&apos;',
	}

	const regex = /([&<>'"])/g;
	return str.replace(regex, key => htmlEntities[key]);
}
	console.log(convertHTML("Dolce & Gabbana")); // Dolce &amp; Gabbana
} //end block	


// EXERCISE #28
// Sum All Odd Fibonacci NumbersPassed

	// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
	// The first two numbers in the Fibonacci sequence are 1 and 1. 
	//Every additional number in the sequence is the sum of the two previous numbers. 
	//The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
	// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

	{

        function fibonacciSequence(num) {

        // "given a positive integer "num" check condition
            if(num<=0) return null;

        // represent  fibonacci sequence in our code
            let fibSequence = [1,1];
            let i;
		//While loops have the advantage over for loops WHEN looking at an external condition. (like the above... we would have 
		 // difficulty trying to use a for loop here )

            while((i = fibonacciSequence[0] + fibonacciSequence[1]) <= num){ // fibonacci axiom
                fibonacciSequence.unshift(i);
            }
        
        
        // filter odd fibonacci numbers and then sum them up
            return fibonacciSequence.filter(el => el%2!==0).reduce((a,b)=> a + b );
          
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
	  // exception
      if (num <= 1) return false;

      // primes array
	  const localArray = [2, num];

	  // range creator
	  function rangeOfNumbers(arr) {
		// Range between arr elements
		  let min = Math.min(...arr);
		  let max = Math.max(...arr);
			let range = Array(max-min+1).fill().map((v, i) => i + min);
			return range;
	   }

	  // prime checker
		function isPrime (n){
		  if(n<2) return false;
		    let  squareRoot = Math.floor(Math.sqrt(n));
		    let i = 2;
		  while(i<=squareRoot){
			if(n % i == 0) return false;
			i++;
		  }
		  return true; 
		} 
	  
	  // create range 
	  const range = rangeOfNumbers(localArray);

	return range.filter((el) => isPrime(el)).reduce((a,b) => a + b);
  }
  console.log(sumPrimes(10));  // 17.
  console.log(umPrimes(977)); // 73156.

}

// EXERCISE
// Smallest Common MultiplePassed

	// Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
	// as well as by all sequential numbers in the range between these parameters.
	// The range will be an array of two numbers that will not necessarily be in numerical order.
	// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 
	// that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.


function smallestCommons(arr) {
	// Setup
	const [min, max] = arr.sort((a, b) => a - b);
	const range = Array(max - min + 1)
	  .fill(0)
	  .map((_, i) => i + min);
	// GCD of two numbers
	// https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
	const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
	// LCM of two numbers
	// https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
	const lcm = (a, b) => a * b / gcd(a, b);
	// LCM of multiple numbers
	// https://en.wikipedia.org/wiki/Least_common_multiple#Other
	return range.reduce((multiple, curr) => lcm(multiple, curr));
  }
  
  smallestCommons([1, 5]);

// TEST
// console.log(smallestCommons([1, 5])) // should return 60.
// console.log(smallestCommons([5, 1])) // should return 60.
// console.log(smallestCommons([2, 10])) // should return 2520.


//EXERCISE #31
// Drop it

	// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
	// until the function func returns true when the iterated element is passed through it.

	// Then return the rest of the array once the condition is satisfied, otherwise, 
	// arr should be returned as an empty array.

{
	function dropElements(arr, func) {
		const firstTruthyElem =  arr.find(func);
		if (firstTruthyElem === undefined) return [];
		const firstTruthyIdx = arr.indexOf(firstTruthyElem);
		return arr.slice(firstTruthyIdx);
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
		return arr.reduce((acc, cur) => {
			return acc.concat(Array.isArray(cur) ? steamrollArray(cur) : cur);
		}, []);
	  }

	  console.log(steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]
	  console.log(steamrollArray([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]
}// end block


//EXERCISE #33
// binaryAgents
  // Return an English translated sentence of the passed binary string.
  // The binary string will be space separated.

{
	function binaryAgent(str){
		const localArray = str.split(' ');
		const decimals = localArray.map((el) => parseInt(el, 2));
		const joinedLetters = decimals.map((el) => String.fromCharCode(el)).join('');
		return joinedLetters;
	}
	// bellow str should return -I love FreeCodeCamp! - '
	console.log(binaryAgent('01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001')); 

}// block


// EXERCISE #34
//Arguments OptionalPassed

   // Create a function that sums two arguments together. If only one argument is provided, then return a function that expects 
   // one argument and returns the sum.
   // For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
   // Calling this returned function with a single argument will then return the sum:
   // var sumTwoAnd = addTogether(2);
   // sumTwoAnd(3) returns 5.
   // If either argument isn't a valid number, return undefined.
   // It can be quite complicated to understand what needs to be done. 
   // There are always many ways to do something when coding but regardless of the algorithm used, 
   // we have to create a program that does the following:

   // It has to add two numbers passed as parameters and return the sum.
   // It has to check if any of the numbers are actual numbers, otherwise return undefined and stop the program right there.
   // It has to check if it has one or two arguments passed. More are ignored.
   // If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.
 
   {
	function addTogether() {
	// we check only the first two args, ignoring all the rest
	 const [arg1, arg2, ] = arguments;
	// create a number checker
	 const isInt = function isInt(el){
		 return Number.isInteger(el);
	 }
    // check condition with the number checker (undefined is )
	  if (isInt(arg1)) {
		if (!arg2){
			return (arg2) => {
				if (isInt(arg2)){
					return arg2 + arg1;
				}
			}
		}
		if (isInt(arg2)){
			return arg1 + arg2;
		}
	  }
    }// end addTogether

	console.log(addTogether(2,3)); // 5
    console.log(addTogether(5)(2)); // 7
	console.log(addTogether(2,'3')); // undefined
    console.log(addTogether(2,3,4)); // 5
    console.log(addTogether(2)([3]));
}//block


// EXERCISE #35
// Make a Person

// Fill in the object constructor with the following methods below:

var Person = function(firstAndLast) {
	// Only change code below this line
	// Complete the method below and implement the others similarly
	var fullName = firstAndLast;
  
	this.getFirstName = function() {
	  return fullName.split(' ')[0];
	}
	this.getLastName = function(){
	  return fullName.split(' ')[1];
	}
  
	this.getFullName = function() {
	  return fullName;
	};
  
	this.setFirstName = function(name){
	   fullName = name +" "+ fullName.split(' ')[1];
	}
  
	this.setLastName = function(name){
	  fullName =  fullName.split(' ')[0] +" "+ name;
	}
	this.setFullName = function(name){
	   fullName = name;
	}
	
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName(); // Bob Ross

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

// Run the tests to see the expected output for each method. The methods that take an argument
// must accept only one argument and it has to be a string. 

// TEST!
// console.log(Object.keys(bob).length) // 6.
// console.log(bob.getLastName()) // Ross
// bob.setFirstName("Haskell") 
// NOW 
// console.log(bob.getFullName()) // Haskell

{
	var Person = function(firstAndLast) {
		var fullName = firstAndLast;
	  
		this.getFirstName = function() {
		  return fullName.split(" ")[0];
		};
	  
		this.getLastName = function() {
		  return fullName.split(" ")[1];
		};
	  
		this.getFullName = function() {
		  return fullName;
		};
	  
		this.setFirstName = function(name) {
		  fullName = name + " " + fullName.split(" ")[1];
		};
	  
		this.setLastName = function(name) {
		  fullName = fullName.split(" ")[0] + " " + name;
		};
	  
		this.setFullName = function(name) {
		  fullName = name;
		};
	  };
}