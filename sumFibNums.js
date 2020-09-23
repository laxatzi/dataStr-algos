 // Sum All Odd Fibonacci Numbers

    // Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
    
    // The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum 
    // of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
    
    // For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

    {

        function sumFibs(num) {
          if(num <= 0) return 0;
          let fibArr = [1, 1];
          let i =0;
      
          while((i = fibArr[0] + fibArr[1] )<= num){
             fibArr.unshift(i);
            
          }
          return fibArr.filter(el => el % 2 !== 0).reduce((a,b)=> a + b);
          
        }
        console.log('fibonacci')
        console.log(sumFibs( 10)); //10  1 1 2 3, 5, 8
        console.log(sumFibs(75024)); // 60696
        console.log(sumFibs(75025)); // 135721
      }


      {
        {

            function sumFibs(num) {
              
                return fibonacciNumbs;
            }
            console.log('fibonacci EXERCISE')
            console.log(sumFibs( 10)); //10  1 1 2 3, 5, 8
            console.log(sumFibs(75024)); // 60696
            console.log(sumFibs(75025)); // 135721
          }
      }