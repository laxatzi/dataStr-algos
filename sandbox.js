//MATH ALGORITHMS

// Sum All Odd Fibonacci Numbers

    // Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
    
    // The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum 
    // of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
    
    // For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

    {

      function sumFibs(num) {
        // The exercise assumes the num is a positive integer, so we check
          if (num <= 0) return 0;

        // Create an array of fib numbers till num
          const arrFib = [1, 1];
          let result = 0;

        // We put the new Fibonacci numbers to the front so we
        // don't need to calculate the length of the array on each
        // iteration -- we always add index[0] and index[1]
          while ((result = arrFib[0] + arrFib[1]) <= num) {
            arrFib.unshift(result);
          }

        // We filter the array to get the odd numbers and reduce them to get their sum.
          return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
        
      }

      console.log(sumFibs(1000)); //1785
      console.log(sumFibs(75024)); // 60696
      console.log(sumFibs(75025)); // 135721
    }


  
// Intermediate Algorithm Scripting: Sum All Primes

    // A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
    // For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

    // Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

    {

      function sumPrimes(num){
        // generate a sequence of numbers based on parameter number (num)
         let numArr = Array.from({length: num + 1}, (value, index) => index); //Since the array is initialized with `undefined` on each position,
         // the value will be `undefined`
        
        // create a callback for boolean checking primality in the filtering process  
          function isPrime (n){
            if(n<2) return false;
          let  squareRoot = Math.floor(Math.sqrt(n));
          let i = 2;
          while(i<=squareRoot){
            if(n % i == 0) return false;
            i++;
          }
          return true;    
             
       } // end isPrime function
        
        // We filter the sequence by checking primality with the use of a callback and then we sum the remaining prime numbers with reduce method
         return numArr.filter(el => isPrime(el)).reduce((a,b)=> a + b);
      }
    
      console.log(sumPrimes(11)); // 28    

    }

//LEAST COMMON
{

  function leastCommon(arr) {
    // Range between arr elements
      let max = Math.max(...arr);
      let min = Math.min(...arr);
      let range = Array(max-min+1).fill().map((v,i)=> i + min);
        
    // The Math   
      // Euclidean algorithm for Greatest Common divisor 

          const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

      // Least Common Multiple for two numbers based on Euclidean algorithm

          const lcm = (a,b)=> (a * b)/ gcd(a, b);

    // Initially the solution is assigned to the highest value of the array

        let currentLcm = max; 

    // implement the Euclidean algorithm to each array's element

        while(min<max){
          currentLcm = lcm(currentLcm, min); 
          min++; 
        }

        return currentLcm;
  }
      console.log(leastCommon([1, 5])); // 60
      console.log(leastCommon([5, 1])); // 60
      console.log(leastCommon([2, 10])); //2520

}


// MISC

console.log('Everything Be True');
{
  //Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
  // In other words, you are given an array collection of objects. 
  //The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

  function truthCheck(collection, pre) {
  

  }//end func

  console.log(truthCheck([{"single": "yes"}], "single")); // true

  console.log(
    truthCheck(
    [ 
      {"single": ""}, 
      {"single": "double"},
      {"name":"Mark"},
    ], 

      "single"
     )); // false
}



console.log('Add Arguments Optional');

//Add Arguments Optional

  // Create a function that sums two arguments together. 
  // If only one argument is provided, then return a function that expects one argument and returns the sum.

  // For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

  // Calling this returned function with a single argument will then return the sum:

  // var sumTwoAnd = addTogether(2);

  // sumTwoAnd(3) returns 5.

  // If either argument isn't a valid number, return undefined.
{
  function addTogether(){
    
  }
  

   console.log(addTogether(2,3)); // 5
  console.log(addTogether(5)(7)); // 12
   console.log(addTogether(2,'3')); // undefined



  }//block


// MAKE A PERSON
  // Fill in the object constructor with the following methods below:

/*
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
*/

//Run the tests to see the expected output for each method.
// The methods that take an argument must accept only one argument and it has to be a string. 
//These methods must be the only available means of interacting with the object.

{
  var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return "";
    };
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  console.log(bob.getFullName()); // Bob Ross
  //bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
  console.log(bob.getFullName()); //"Haskell Ross"

}// END BLOCK


//Map the Debris -- Part of the Math section

  //Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
  //The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
  //You can read about orbital periods on Wikipedia.
  //The values should be rounded to the nearest whole number. The body being orbited is Earth.//
  //The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
  //Hint 1: The formula needed is: T=2p root(a^3/μ);
  // Hint 2: Use Math.round() to round up to the next whole number as requested. Using Math.ceil() will let you pass the first test but fail the second one.
  // Hint 3: Find out how to remove and add key to a JavaScript object.
  
  {
    function orbitalPeriod(arr) {
      var GM = 398600.4418;
      var earthRadius = 6367.4447;
      return arr;
    }
    
    console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
    

  }//end block



//EXERCISE #21
// Partial Application
  // Fill in the body of the add function so it uses currying to add parameters x, y, and z.

  { 
    function add(x){

    }

    console.log(add(10)(20)(30));// 60
    
}// end block