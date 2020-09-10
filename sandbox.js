    


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


//Convert HTML Entities

    // Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

{
  function convertHTML(str) {
    let htmlEntities = {
     "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    }
   return str.replace(/[&,<,>,"",'']/g, key=> htmlEntities[key]);
  }
  
  //  console.log(convertHTML("Dolce & Gabbana"));
  //  console.log(convertHTML("<>")); 
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

//#################################################################################

// SORTED UNION

  // Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

  // In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

  // The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

  // Check the assertion tests for examples.


{
    function uniteUnique(arr){
     
    }
      
      // console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1,3,2,5,4]

}

//Convert HTML Entities

    // Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

    {
      function convertHTML(str) {
        let htmlEntities = {
          "&":"&amp;",
          "<":"&let;",
          ">":"&gt;",
          "\"":"&quot;",
          "'":"&apos;"
        }

        return "Not solved yet!";
      }
      
        console.log(convertHTML("Dolce & Gabbana"));
        console.log(convertHTML("<>")); 
    }


    // Missing letters

      // Find the missing letter in the passed letter range and return it.
      
      // If all letters are present in the range, return undefined.

  {
    function fearNoLetter(str){
     return 'Not solved yet!';
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
    // check validity
   if(num <= 0) return 0; // the exercise assumes a positive integer num - hence we check
   let fibonacciArray = [1,1];
   let sumOfNums;

   while((sumOfNums  = fibonacciArray[0] + fibonacciArray[1])<= num){
     fibonacciArray.unshift(sumOfNums);
   }
   return fibonacciArray.filter(num => num%2 != 0).reduce((a,b)=> a+b);
  }
  console.log(sumFibs( 10)); //10  1 1 2 3, 5, 8
  console.log(sumFibs(75024)); // 60696
  console.log(sumFibs(75025)); // 135721
}



