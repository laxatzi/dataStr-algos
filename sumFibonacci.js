 // Sum All Odd Fibonacci Numbers

    // Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
    
    // The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum 
    // of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
    
    // For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

    {

        function sumFibs(num) {

        // "given a positive integer "num" check condition
            if(num<=0) return false;

        // represent  fibonacci sequence in our code
            let fibonacciSequence = [1,1];
            let i;
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

 console.log("FIND SUM OF FIBONACCI NUMBERS IN RANGE");
 // Fibonacci numbers in range
 {

    function fibsInRangeSum(arr){
     // range
     let max = Math.max(...arr);
     let min = Math.min(...arr);
     let range = Array(max-min+1).fill().map((_,i)=> i + 1);
     // find fibonacci
     function fibonacciNumbs(num) {
        if(num<=0) return false;
        let fibSequence = [1,1];
        let i;
        while((i = fibSequence[0] + fibSequence[1]) <= num){
         fibSequence.unshift(i);
        }
        return fibSequence;
      } // end fibonacci numbs

      return fibonacciNumbs(max).filter(el => el>=min).reduce((a,b)=> a + b);

    } // end function
console.log(fibsInRangeSum([3,10])); // 16
console.log(fibsInRangeSum([14,100])); // 199

 }// end block
