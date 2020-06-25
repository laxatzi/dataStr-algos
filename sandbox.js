
//.Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
//.Our goal for this Algorithm is to split arr (first argument) into smaller chunks of arrays with the length provided by size (second argument). 
  //? bear in mind slice method
  //? bear in mind concat method
  {
    function chunkArray(arr, size) {
      
     }
 
     //test
     console.log(chunkArray([0, 1, 2, 3, 4, 5, 6], 2)); //should return [[0, 1], [2, 3], [4, 5],[6]].

    }//end block


//. Q: Remove Duplicate Elements from an Array
{
  let cities = ["Athens","Athens", "Thessaloniki", "Iraklion", "Drama", "Thessaloniki"];

//Remove Dups from an Array
 
function removeDuplicates(arr){
  return ;
}

    console.log(cities.sort());
    console.log(removeDuplicates(cities)); // ["Athens", "Drama", "Iraklion", "Thessaloniki"]

 //OR with the Set() object method
    function noDuplicates(arr){
      return;
    }
    console.log(noDuplicates(cities)); //  ["Athens", "Drama", "Iraklion", "Thessaloniki"]

}// end block


//.Return the factorial of the provided integer.

//.If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//.Only integers greater than or equal to zero will be supplied to the function.
{
    function factorialize(n) {
      if(n <= 0 ) return 1;
      return n * factorialize(n-1);
    }

    console.log(factorialize(5)); // 120

}//end block
