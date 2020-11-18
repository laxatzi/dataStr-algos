//EXERCISE #1
  // Iterate through array items

  //We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array.
  // elem represents an element that may or may not be present on one or more of the arrays nested within arr. 
  //Modify the function, using a for loop, to return a filtered version of the passed array 
  //such that any array nested within arr containing elem has been removed.

  {
    function filteredArray(arr, elem) {
    
    return arr;
    
    }

    console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

  }//end block


//EXERCISE #2
//Create complex multi-dimensional arraysPassed

  //We have defined a variable, myNestedArray, set equal to an array. 
  //Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements,
  // so that it has exactly five levels of depth (remember, the outer-most array is level 1). 
  //Somewhere on the third level, include the string 'deep', on the fourth level, 
  //include the string 'deeper', and on the fifth level, include the string 'deepest'.

  {
    let myNestedArray = [
      // Only change code below this line
      ['unshift', false, 1, 2, 3, 'complex', 'nested'],
      ['loop', 'shift', 6, 7, 1000, 'method'],
      ['concat', false, true, 'spread', 'array'],
      ['mutate', 1327.98, 'splice', 'slice', 'push'],
      ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
      // Only change code above this line
    ];

    console.log(myNestedArray);
  }//end block


//EXERCISE #3
//Access Property Names with Bracket Notation

  //We've defined a function, checkInventory, which receives a scanned item as an argument.
  // Return the current value of the scannedItem key in the foods object.
  // You can assume that only valid keys will be provided as an argument to checkInventory.

  {
    let foods = {
      apples: 25,
      oranges: 32,
      plums: 28,
      bananas: 13,
      grapes: 35,
      strawberries: 27
    };
    
    function checkInventory(scannedItem) {
   
    }
    
    console.log(checkInventory("apples"));
  } // end block


//EXERCISE #4
//Check objects' property

  // We've created an object, users, with some users in it and a function isEveryoneHere, 
  //which we pass the users object to as an argument. Finish writing this function so that it returns true 
  //only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.

{
  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(obj) {
   return obj;
  }
  
  console.log(isEveryoneHere(users));

}// end block


//EXERCISE #5
//Iterate Through the Keys of an Object with a for...in StatementPassed

  //We've defined a function countOnline which accepts one argument (a users object).
  // Use a for...in statement within this function to loop through the users object passed into the function 
  //and return the number of users whose online property is set to true.
  // An example of a users object which could be passed to countOnline is shown below. 
  //Each user will have an online property with either a true or false value.
/*
{
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
}
*/
{
    function countOnline(usersObj){
      return usersObj;
    }
}// end block


//EXERCISE #6
//Generate an Array of All Object Keys with Object.keys()

  //Finish writing the getArrayOfUsers function so that it returns an array containing 
  //all the properties in the object it receives as an argument.

  {
    let users = {
      Alan: {
        age: 27,
        online: false
      },
      Jeff: {
        age: 32,
        online: true
      },
      Sarah: {
        age: 48,
        online: false
      },
      Ryan: {
        age: 19,
        online: true
      }
    };
    
    function getArrayOfUsers(obj) {
      return obj;
    }
    
    console.log(getArrayOfUsers(users));
  }// end block


//EXERCISE #7
// Modify an Array stored in an Object
  
  // Take a look at the object we've provided in the code editor.
  // The user object contains three keys. The data key contains five keys, one of which contains an array of friends.
  // From this, you can see how flexible objects are as data structures.
  // We've started writing a function addFriend.
  // Finish writing it so that it takes a user object and adds the name of the friend argument 
  //to the array stored in user.data.friends and returns that array.

  {
    let user = {
      name: 'Kenneth',
      age: 28,
      data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
          'Sam',
          'Kira',
          'Tomo'
        ],
        location: {
          city: 'San Francisco',
          state: 'CA',
          country: 'USA'
        }
      }
    };
    
    function addFriend(userObj, friend) {
      return userObj;
    }
    
    console.log(addFriend(user, 'Pete'));
  }
  
  
  
  //EXERCISE #8
  // Convert Celsius To Fahrenheit

    //.The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
    //.You are given a variable celsius representing a temperature in Celsius.
    // Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.
    // Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
    {
          function convertToF(celsius) {
            let fahrenheit;
            return fahrenheit;
          }
          
          console.log(convertToF(30)); // 82
    }//block


//EXERCISE #9
// Reverse a String

   //.Reverse the provided string.You may need to turn the string into an array before you can reverse it.
   //.Your result must be a string.
{
      function reverseString(str) {
         return str;
      }
             console.log(reverseString("hello")); //oleh
}//block


//EXERCISE #10
// Factorialize a Number
   //.Return the factorial of the provided integer.
   //.If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
   //.Only integers greater than or equal to zero will be supplied to the function.
{
    function factorialize(num) {
      
      return num;
    }
    
    console.log(factorialize(5)); // 120  
}


//EXERCISE #11
//Find the Longest Word in a String

  //.Return the length of the longest word in the provided sentence.
  //.Your response should be a number.
  {
    function findLongestWordLength(str) {
        // code here
      }
      
      console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6

  }//block


//EXERCISE #12
// Return Largest Numbers in ArraysPassed

  //.Return an array consisting of the largest number from each provided sub-array. 
  //For simplicity, the provided array will contain exactly 4 sub-arrays.
  //.Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

    {
      function largestOfFour(arr) {
          return arr;
        }
      console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])); //[27, 5, 39, 1001]

    }//block


//EXERCISE #13
// Confirm the Ending

  //.Check if a string (first argument, str) ends with the given target string (second argument, target).
  //.This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
  //But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
  {
    function confirmEnding(str, target) {
        return str;
      }
      
      confirmEnding("Bastian", "n");
  }//block


//EXERCISE #14
//Repeat a String

  //. Repeat a given string str (first argument) for num times (second argument).
  // Return an empty string if num is not a positive number.

  {
    function repeatStringNumTimes(str, num) {
        return str;
      }
      
    console.log(repeatStringNumTimes("abc", 3)); //abcabcabc

  }//block



//EXERCISE #15
//Truncate a String

  //.Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
  //Return the truncated string with a ... ending.

  {
    function truncateString(str, num) {
        return str;
      }
      
    console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));//"A-tisket..."

  }//block


//EXERCISE #16
//Finders Keepers
  //.Create a function that looks through an array (first argument) and returns the first element in the array that passes 
  //a truth test (second argument). If no element passes the test, return undefined

    {
      function findElement(arr, func) {
          let num = 0;
          return num;
        }
        
      console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0)); // 
        
    }//block


//EXERCISE #17
// Boo who

  //.Check if a value is classified as a boolean primitive. Return true or false.
  //. Boolean primitives are true and false.
  {

    function booWho(bool) {
        return bool;
      }
      
    console.log(booWho(false)); // true
  }// block


//EXERCISE #18
//Title Case a Sentence

  //.Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
  //.For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

    {
        function titleCase(str){
            return str;
        }

      console.log(titleCase('sHoRt AnD sToUt')); // Short And Stout
    }// block


//EXERCISE #19 
// Slice and SplicePassed

  //. You are given two arrays and an index.
  //. Use the array methods slice and splice to copy each element of the first array into the second array, in order.
  //. Begin inserting elements at index n of the second array. Return the resulting array. 
  //The input arrays should remain the same after the function runs.

    {
      function frankenSplice(arr1, arr2, n) {
          
          return arr2;
        }
        
      console.log(frankenSplice([1, 2, 3], [4, 5], 1));   // [4, 1, 2, 3, 5]

    }// end block


//EXERCISE #20
//Falsy Bouncer

  //.Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
    {
      function bouncer(arr) {
          return arr;
        }

    //test
        console.log(bouncer([null, NaN, 1, 2, undefined])); // [1,2]

}//block


//EXERCISE #14
  //. Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

  //.For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

  //.Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
{

   function getIndexToIns(arr, num) {
      return num;
    }

    console.log([10, 20, 30, 40, 50], 30); //2
}//block


//EXERCISE #15
// Chunky Monkey

  //.Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
  //.Our goal for this Algorithm is to split arr (first argument) into smaller chunks of arrays with the length provided by size (second argument). There are 4 green checks (objectives) our code needs to pass in order to complete this Algorithm:
  //? bear in mind slice method
  //? bear in mind concat method

    {
        function chunkArrayInGroups(arr, size) {
          return 'original';
        }
    
        //test
        console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); //should return [[0, 1], [2, 3], [4, 5]].
        console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); //should return [[0, 1, 2, 3], [4, 5]].
        console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); //should return [[0, 1, 2], [3, 4, 5], [6]].
        console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
  
  
  }//block

  //FUNCTIONAL JS---------------------------------------------------

//EXERCISE #16
// Refactor Global Variables Out of FunctionsPassed
  //Rewrite the code so the global array bookList is not changed inside either function. 
  //The add function should add the given bookName to the end of the array passed to it and return a new array (list).
  // The remove function should remove the given bookName from the array passed to it.
  //Note: Both functions should return an array, and any new parameters should be added before the bookName parameter

{
// The global variable
 let bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (bookName) {

  bookList.push(bookName);
  return bookList;
  
}

function remove (bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList); // ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]
console.log(newBookList); // ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]
}// end block


// EXERCISE #17
// EXTRACT DATA FROM ARRAY
  //The watchList array holds objects with information on several movies. 
  //Use map on watchList to assign a new array of objects with only title and rating keys to the ratings variable. 
  //The code in the editor currently uses a for loop to do this, so you should replace the loop functionality with your map expression.

{

  // The global variable
    var watchList = [
      {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
      },
      {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
      },
      {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
      }
    ];




console.log(JSON.stringify(ratings));

}//end block


//EXERCISE #18
//Analyze Data
  //On the variable watchList(above). Find the average IMDB rating of the movies directed by Christopher Nolan. 
  //Note that the rating values are saved as strings in the object 
  //and need to be converted into numbers before they are used in any mathematical operations.

  {

    // copy paste watchlist here

    function getRating(watchList){
      return averageRating;
    }
    console.log(getRating(watchList)); // 8.3

  }//end block



//EXERCISE #19
// Squared Integers
  //We have defined a function named squareList. 
  //You need to complete the code for the squareList function 
  //so that it returns a new array containing only the square of only the positive integers 
  //(decimal numbers are not integers) when an array of real numbers is passed to it.
  // An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2]
{

  const squareList = (arr) => {
    return arr;
  };
  
  const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);

  console.log(squaredIntegers);//[9, 100, 49]
}//end block


//EXERCISE #20
//Convert Strings to URL Slugs
  //Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. 
  //You can use any of the methods covered in this section, and don't use replace. Here are the requirements:
  //The input is a string with spaces and title-cased words.
  //The output is a string with the spaces between words replaced by a hyphen (-).
  //The output should be all lower-cased letters
  //The output should not have any spaces

  {
    function urlSlug(title){

    }

    console.log(urlSlug(" Winter Is  Coming")); // winter-is-coming

  }//end block


//EXERCISE #21
// Partial Application
  // Fill in the body of the add function so it uses currying to add parameters x, y, and z.

  {
      function add(x){

      }

      console.log(add(10)(20)(30));// 60
      
  }// end block


// EXERCISE #22
// 



//EXERCISE #16
  //.Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

  //.For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

  //.The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

  //.Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
  //. Θέλω τα γράμματα που υπάρχουν στο δεύτερο element να υπάρχουν και στο πρώτο. Οχι το αντιθετο.
  //? check JavaScript String.prototype.indexOf() 
  //? 0 doesn't evaluate to true and -1 doesn't evaluate to false. Therefore, when checking if a specific string exists within another string, the correct way to check would be:'Blue Whale'.indexOf('Blue') !== -1  // true
  //? arr.every(callback(element[, index[, array]])[, thisArg])

  {
   function mutation(arr) {
     return arr;
    }
  
    //test
    console.log(mutation(["voodoo", "no"])); //false
    console.log(mutation(["Mary", "Army"])); //true
  }//block



//EXERCISE #17
//. We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

//. For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

(function () {
  'use strict';
function sumAll([ a, b ] ) {
  return;
}

console.log('sum is: ' + sumAll([5,1])) // 15
console.log(sumAll([5, 10])); // should return 45.
console.log(sumAll([10, 5])); // should return 45.
})();

//EXERCISE #18
//. Q: Find the second largest number in a given array.
//. Params: We are given an array of whole, positive integers (no negative numbers or floats). We are to write //. a function and return the second largest integer.
{
  function secondLargest(arr){};

}// end block;

// EXERCISE #19
//. Q: Remove Duplicate Elements from an Array
{
  let cities = ["Athens","Athens", "Thessaloniki", "Iraklion", "Drama", "Thessaloniki"];

//Remove Dups from an Array
 
function removeDups(arr){
  //return;  
}

    console.log(cities.sort());
    console.log(removeDuplicates(cities)); // ["Athens", "Drama", "Iraklion", "Thessaloniki"]

}// end block

// EXERCISE #20
//. Intermediate Algorithm Scripting: Diff Two Arrays (SYMETRIC DIFF)
//. Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.

//. Note
//. You can return the array with its elements in any order.

{

  function diffArray(arr1, arr2) {
    
   }

 console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
  //. should return ["diorite", "pink wool"].
}//block

// EXERCISE #20
// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

{

   function destroyer(arr) {
      return something 
      }

  console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // should return ["hamburger"]

}//end block

//. EXERCISE #21
// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

{
  function whatIsInAName(collection, source) {
   let sourceKey = Object.keys(source);
   
  }
 
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); // should return [{ first: "Tybalt", last: "Capulet" }].

}//end block


//. EXERCISE #22
// Spinal case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

{
  function spinalCase(str) {
    return str;
  }
 
console.log(spinalCase("thisIsSpinalTap")); //   return "this-is-spinal-tap".
}//end block


// EXERCISE #23
  // Pig Latin
  // Pig Latin is a way of altering English Words. The rules are as follows:

  // - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

  // - If a word begins with a vowel, just add "way" at the end.
  // Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
{

  function pigLatin(str) {
    
  }

    // test here
    console.log(translatePigLatin("consonant"));
    console.log(pigLatin("grreen"));
  console.log(pigLatin('aubergine'));
  
  
  } // end block