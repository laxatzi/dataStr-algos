//EXERCISE #18
//. Q: Find the second largest number in a given array.
//. Params: We are given an array of whole, positive integers (no negative numbers or floats). We are to write //. a function and return the second largest integer.
{
    function secondLargest(arr){
        let max = Math.max(...arr);
        let maxi = arr.indexOf(max);
        arr.splice(maxi, 1);
        return Math.max(...arr);
    };
  
    console.log(secondLargest([3, 35, 25, 18, 190])); // 35;
  }// end block;

  // Second algo
  {
    function secondLargest(arr){
        let sorted = arr.sort((a,b)=> a-b);
        sorted.pop();
        return Math.max(...sorted);
        
      };
    
      console.log(secondLargest([1,11, 222, 1034])); // 222
  }
