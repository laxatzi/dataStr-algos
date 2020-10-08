// DROP IT

//Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
// until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
// we basically want to keep the elements that are placed after  funcs' argument number's index, and drop the rest. 

function dropElements(arr, func){
   let indexFound = arr.findIndex(func);
   if (indexFound === -1) return [];
   else return arr.slice(indexFound);
}

console.log(dropElements([1,2,3,4], n=> n>=3)); // [3,4]
console.log(dropElements([1,2,3,4] ,n=>  n>5));   // []
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})); // [1, 0, 1] --0 is returned since we care only about index position