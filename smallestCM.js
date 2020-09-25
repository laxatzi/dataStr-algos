console.log('Smallest Common Multiple');
// Find the smallest common multiple on the provided params that can be evenly divided by both, as well as
// all the sequential numbers in the range between these two params. 
// The range is an array of two numbers, not necessarily in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly 
// divisible by all numbers between 1 and 3. The answer here would be 6.

// Another way to calculate the least common multiple of any set of numbers 
// is to first break the numbers down into their prime factors.
//  Prime Factorization is => finding which prime numbers multiply together to make the original number
//  to calculate the lowest common multiple (lcm) for these  numbers, we just multiply them all out

//https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-132.php

{
    function leastCommon(arr) {
  // Range between arr elements
      let max = Math.max(...arr);
      let min = Math.min(...arr);
      var range = [];
      for (var i = min; i <= max; i++) {
        range.unshift(i);
      }
  // The Math   
    // Euclidean algorithm for Greatest Common divisor 
        const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    // Least Common Multiple for two numbers based on Euclidean algorithm
        const lcm = (a,b)=> (a * b)/ gcd(a, b);

  // Initially the solution is assigned to the highest value of the array
      let currentLcm = max; 

  // Loop to check each element
      while(min<max){
        currentLcm = lcm(currentLcm, min); // implement the Euclidean algorithm
        min++; 
      }

      return currentLcm;
}
    console.log(leastCommon([1, 5])); // 60
    console.log(leastCommon([5, 1])); // 60
    console.log(leastCommon([2, 10])); //2520
}


    
     