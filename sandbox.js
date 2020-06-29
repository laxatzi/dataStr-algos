

//. Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

//. Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

{
  function largestOfFour(arr) {
      return arr.map(sub => {
        return sub.reduce((acc, curr)=> {
          return curr >= acc ? curr : acc;
        })
      })
    }

  console.log(largestOfFour([ [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); //. [27,39, 1001]

}//end block


