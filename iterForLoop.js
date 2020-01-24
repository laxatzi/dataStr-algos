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
