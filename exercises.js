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

//EXERCISE #8

//EXERCISE #9



// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

{
   function frankenSplice(arr1, arr2, n) {
      let newArr = arr2.slice();
      newArr.splice(n, 0, ...arr1);
      return newArr;
    }
    
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 0));   // 
}// end block

{
   const months = ['Jan', 'March', 'April', 'June'];
   let someMonths = months.slice(1,3);
   // console.log('new months: ' + someMonths);
   // console.log('old monts: '+months);

}