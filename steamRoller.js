// STEAM ROLLER

//Flatten a nested array. You must account for varying levels of nesting.

    function steamrollArray(arr){
       
        // we are gonna use recursion reducing the array => if element is number will be shifted to new array,
        // else recursion will go one level deep
        return arr.reduce((acc, val)=> acc.concat(Array.isArray(val)?steamrollArray(val):val), []);
    }
      

  console.log(steamrollArray([1, [], [3, [[4]]]])); // [1, 3, 4];
  console.log(steamrollArray([1, {}, [3, [[4]]]])); // [1, {}, 3, 4];

