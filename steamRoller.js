// STEAM ROLLER

//Flatten a nested array. You must account for varying levels of nesting.

    function steamrollArray(arr){
       
        // we are gonna use recursion reducing the array => if element is number will be shifted to new array,
        // else recursion will go one level deep
        return arr.reduce((acc, val)=> acc.concat(Array.isArray(val)?steamrollArray(val):val), []);
    }
      

  console.log(steamrollArray([1, [], [3, [[4]]]])); // [1, 3, 4];
  console.log(steamrollArray([1, {}, [3, [[4]]]])); // [1, {}, 3, 4];

//OR

{
    function steamrollArray(arr){
            // we flat one deep nest arr
        let flat = arr.flat(); 
            // then if no more arrays return .. else .. flat again (recursion) the already flattened array until no more arrays exist
        return flat.some(Array.isArray)?steamrollArray(flat):flat;
    }
}