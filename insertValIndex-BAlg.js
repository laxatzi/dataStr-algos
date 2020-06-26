//.Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

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
