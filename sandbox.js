    


 // ##################################################################################################

// Missing Letters
    // Find the missing letter in the passed letter range and return it.
    // If all letters are present in the range, return undefined.
    // {
    //   function fearNoLetter(str){
    //    let current = str.charCodeAt(0); //97
    //    let missing;
    //    str.split('').map((el, index)=> {
    //      if(str.charCodeAt(index) === current) ++current;
    //      else missing = String.fromCharCode(current);
    //    })
    //    if(missing === undefined) return 'No letter is missing from the row!';
    //     return missing; // d 
    //   }
    //   console.log(fearNoLetter('abce')); // "d" 
    //   console.log(fearNoLetter('abcdefghijklmnopqrstuvwxyz')); // undefined
    // }

// algorithm 
  
  // store current
  // store missing  (empty)
  // make array
  // map array
  // compare index toLowerCase() charCode.split('').every(arr[0].)
  // conditions : if equal ascend by one
  // if not  ask for the string (fromCharCode) and store it in missing
  // return missing

{
  function uniteUnique(arr){
    let args = [...arguments];
    return args.reduce((acc, cur)=> {
      
      return acc.concat(cur.filter(el=> acc.indexOf(el) === -1));
    },[]);
  }
    
  // console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1,3,2,5,4]

  }


// Missing lettersPassed

      // Find the missing letter in the passed letter range and return it.
      
      // If all letters are present in the range, return undefined.

      {
        function fearNoLetter(str){
          let control = str.charCodeAt(0); // 97;
          let missingLetter;
          str.split('').map((el,index) => {
            if(str.charCodeAt(index) === control)  ++control; 
            else missingLetter = String.fromCharCode(control);
          });
          if(missingLetter === undefined) return "No letter is missing!";
          return "The missing letter is "+ missingLetter;
        }
    
        // console.log(fearNoLetter('abcde')); undefined
        // console.log(fearNoLetter('abce')); // d
      }


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

//#################################################################################

// SORTED UNION

  // Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

  // In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

  // The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

  // Check the assertion tests for examples.
console.log('Sorted Union below');

{
    function uniteUnique(arr){
      let args = [...arguments];
      return args.reduce((acc, cur) => {
        return acc.concat(cur.filter(el => acc.indexOf(el) === -1));
      },[]);
  
    }
       console.log('unite unique!');
       console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1,3,2,5,4]

}

    // Missing letters

      // Find the missing letter in the passed letter range and return it.
      
      // If all letters are present in the range, return undefined.

  {
    function fearNoLetter(str){
     let control = str.charCodeAt(0);
     let missingLetter;
     str.split('').map((v,i)=> {
       if(str.charCodeAt(i)=== control) return ++control;
       else missingLetter = String.fromCharCode(i);
     });
     if(control === undefined) return "No letter is missing!";
     return "The missing letter is: "+missingLetter;
    }
 
    console.log(fearNoLetter('abcde')); undefined
    console.log(fearNoLetter('abce')); // d
  }


  // Sum All Odd Fibonacci Numbers

    // Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
    
    // The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum 
    // of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
    
    // For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

{

  function sumFibs(num) {
    if(num <= 0) return 0;
    let fibArr = [1, 1];
    let control=0;

    while((control = fibArr[0] + fibArr[1] )<= num){
       fibArr.unshift(control);
      
    }
    return fibArr.filter(el => el % 2 !== 0).reduce((a,b)=> a + b);
    
  }
  console.log('fibonacci')
  console.log(sumFibs( 10)); //10  1 1 2 3, 5, 8
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
    let numSequence = Array.from({length:num +1}, (v,i)=> i);
    // create callback checking primality 
    function callback(n){
      if(n<2) return false;
      let sqrt = Math.floor(Math.sqrt(n));
      let i = 2;
      while(i <= sqrt){
        if(n % i == 0) return false;
        i++;
      }
      return true;
    }
    // We filter the sequence by checking primality with the use of a callback and then we sum the remaining prime numbers with reduce method
     return numSequence.filter(el => callback(el)).reduce((a,b)=> a + b) ;
  }

  console.log(sumPrimes(11)); // 28    

}