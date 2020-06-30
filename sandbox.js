// EXERCISE #20
//. Intermediate Algorithm Scripting: Diff Two Arrays
//. Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

//. Note
//. You can return the array with its elements in any order.

{
   //% My own solution (with filter and indexOf)
    function diffArray(arr1, arr2) {
       let filterFirst =  arr1.filter(el => arr2.indexOf(el) === -1);
       let filterSecond = arr2.filter(el => arr1.indexOf(el) === -1);
       return [...filterFirst, ...filterSecond];
     }
  
   console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
    //. should return ["diorite", "pink wool"].
  }//block
  {
     //% FCC first solution (with filter and indexOf)
     function diffArray(arr1, arr2){
       return [...diff(arr1,arr2), ...diff(arr2,arr1)];
       // nested function
       function diff(a,b){
          return a.filter(el => b.indexOf(el) === -1);
       }
     }
     console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
 
  }