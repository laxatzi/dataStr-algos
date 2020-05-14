//.Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

//first solution
{
function getIndexToIns(arr, num) {
   const sortedArr = arr.sort(function(a,b){
      return a - b;
   });
 
   const greaterPart = sortedArr.filter(elem => {
      return elem > num;
   });
   const lowerPart = sortedArr.filter(elem => {
      return elem < num;
   });
   const completePart = lowerPart.concat(num, greaterPart);
   return completePart.indexOf(num);
}
 console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); //should return 3.
}// end block

// second cleaner method
{
      const getIndexToIns = (arr, num)=> arr.concat(num)
                                            .sort((a,b)=>a-b)
                                            .indexOf(num);

   console.log(getIndexToIns([10,15, 20, 30, 40], 17)); //should return 2.

}//block

// even cleaner
{
   const getIndexToIns = (arr, num)=> arr.filter(elem => num > elem)
                                         .length;
                                         
   console.log(getIndexToIns([10,15,20,30,40], 17)); // should return 2
}//block
