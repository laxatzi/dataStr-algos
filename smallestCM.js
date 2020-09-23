console.log('Smallest Common Multiple');
// Find the smallest common multiple on the provided params that can be evenly divided by both, as well as
// all the sequential numbers in the range between these two params. 
// The range is an array of two numbers, not necessarily in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly 
// divisible by all numbers between 1 and 3. The answer here would be 6.

{
    function smallestCM(arr){
    // construct the array of numbers
        arr = arr.sort((a,b)=> a -b);
        let numDisplayed = Array.from({length: arr[1] + 1}, (v, i) => i);
         numDisplayed.shift(arr[0]);
    //loop through each of them and check for prime factorization 
        // check out algorithm in link
        // check again isPrime function

    // concat each finding in an array

    // reduce that array by multiply all numbers 

    

    console.log(smallestCM([1, 5])); // 60
    console.log(smallestCM([5, 1])); // 60
}

//https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-132.php
