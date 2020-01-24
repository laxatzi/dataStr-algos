// Greater Than Ten
// Check array indexes, select greater than ten, and store them in a new arr

function greaterThanTen(arr){
   let newArr = [];
   for(let j=0; j<arr.length; j++){
      if(arr[j]>10){
         newArr.push(arr[j]);
      }
   }
   return newArr;
}
let numArr = [45,89,66,77,1,4,8];
console.log(greaterThanTen(numArr));  // (4)[45,89,66,77]


//We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

function filteredArray(arr, elem){
   let newArr = [];
   for(let j = 0; j<arr.length; j++){
      if(arr[j].indexOf(elem) == -1){
   //Checks every parameter for the element and if is NOT there continues the code
      newArr.push(arr[j]);//Inserts the element of the array in the new filtered array
      }
   }
   return newArr;
}
let nestArr = [[4,5,78], [1,4,34], [2,34,8]];

console.log(filteredArray(nestArr, 5)); // [[1,4,34], [2,34,8]];