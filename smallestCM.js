console.log('Smallest Common Multiple');
// Find the smallest common multiple on the provided params that can be evenly divided by both, as well as
// all the sequential numbers in the range between these two params. 
// The range is an array of two numbers, not necessarily in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly 
// divisible by all numbers between 1 and 3. The answer here would be 6.

{
// Another way to calculate the least common multiple of any set of numbers 
// is to first break the numbers down into their prime factors.
//  Prime Factorization is => finding which prime numbers multiply together to make the original number
//  to calculate the lowest common multiple (lcm) for these  numbers, we just multiply them all out

    function smallestCommons(arr){
    // construct the array of numbers
        arr = arr.sort((a,b)=> a + b);
        arr = Array.from({length: arr[1] + 1}, (v, i) => i);
        return arr;
         let arrReversed =  arr.slice(arr[0]);
         return arrReversed.sort((a,b)=> a + b);
    //loop through each of them and check for prime factorization 
    // concat each finding in an array
       function primeFactors(n){
            function isPrime(n){
                let square = Math.floor(Math.sqrt(n));
                if(n<2) return false;
        
                let i = 2;
                while(i <= square){
                if(n % i == 0) return false;
                i++;
                }
                return true;
            }
        
            const result = [];
            for (let i = 2; i <= n; i++)
            {
              while (isPrime(i) && n % i === 0) 
              {
                if (!result.includes(i)) result.push(i);
                n /= i;
              }
            }
            return result;
          }
        
     
    // reduce that array by multiply all numbers 
    return numDisplayedSliced.map(el => primeFactors(el))
    // .reduce((acc, cur) => acc.concat(cur),[]).reduce((a,b)=> a * b );
   
  }
    

    // console.log(smallestCommons([1, 5])); // 60
    // console.log(smallestCommons([5, 1])); // 60
    // console.log(smallestCommons([2, 10])); //2520
    // console.log(smallestCommons([30, 45, 56])); // 2520
}

//https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-132.php

// Second attempt 

{
    function leastCommon(arr){
        let max = Math.max(arr[0], arr[1]);
        let min = Math.min(arr[0], arr[1]);
        let mltple = max;
        return max;
    }
    console.log("SECOND ATTEMPT");
    console.log(leastCommon([1, 5])); // 60
    console.log(leastCommon([5, 1])); // 60
    console.log(leastCommon([2, 10])); //2520
}
