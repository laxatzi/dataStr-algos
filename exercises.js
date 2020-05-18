//EXERCISE #1
  //.The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
  //.You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
{
      function convertToF(celsius) {
         let fahrenheit;
         return fahrenheit;
      }
      
      console.log(convertToF(30)); // 82
}//block

//EXERCISE #2
   //.Reverse the provided string.You may need to turn the string into an array before you can reverse it.
   //.Your result must be a string.
{
      function reverseString(str) {
         return str;
      }
             console.log(reverseString("hello")); //oleh
}//block


//EXERCISE #3
   //.Return the factorial of the provided integer.
   //.If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
   //.Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
   
   return num;
 }
 
 console.log(factorialize(5)); // 120  

//EXERCISE #4
  //.Return the length of the longest word in the provided sentence.
  //.Your response should be a number.
{
   function findLongestWordLength(str) {
      // code here
    }
    
    console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6

}//block


//EXERCISE #5
 //.Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

//.Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

{
  function largestOfFour(arr) {
      return arr;
    }
  console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])); //[27, 5, 39, 1001]

}//block

//EXERCISE #6
  //.Check if a string (first argument, str) ends with the given target string (second argument, target).

  //.This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
{
   function confirmEnding(str, target) {
      return str;
    }
    
    confirmEnding("Bastian", "n");
}//block

//EXERCISE #7
  //. Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
{
   function repeatStringNumTimes(str, num) {
      return str;
    }
    
   console.log(repeatStringNumTimes("abc", 3)); //abcabcabc
}//block

//EXERCISE #8
//.Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

{
   function truncateString(str, num) {
      return str;
    }
    
   console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));//"A-tisket..."

}//block

//EXERCISE #9
  //.Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined

{
   function findElement(arr, func) {
      let num = 0;
      return num;
    }
    
   console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0)); // 
    
}//block

//EXERCISE #10
  //.Check if a value is classified as a boolean primitive. Return true or false.
  //. Boolean primitives are true and false.
{

   function booWho(bool) {
      return bool;
    }
    
   console.log(booWho(false)); // true
}// block


//EXERCISE #11
  //.Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

  //.For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
{
   function titleCase(str){
      return str;
   }

console.log(titleCase('sHoRt AnD sToUt')); // Short And Stout
}// block

//EXERCISE #12
  //. You are given two arrays and an index.

  //. Use the array methods slice and splice to copy each element of the first array into the second array, in order.

  //. Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.

{
   function frankenSplice(arr1, arr2, n) {
      
      return arr2;
    }
    
  console.log(frankenSplice([1, 2, 3], [4, 5], 1));   // [4, 1, 2, 3, 5]

}// end block

//EXERCISE #13
  //.Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

  //. Hint: Try converting each value to a Boolean
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

//EXERCISE #16
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