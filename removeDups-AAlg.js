//. Q: Remove Duplicate Elements from an Array
{
   let cities = ["Athens","Athens", "Thessaloniki", "Iraklion", "Drama", "Thessaloniki"];
 
 //Remove Dups from an Array
  
 function removeDuplicates(arr){
     return arr.sort().reduce(function(acc ,curr){
     if(curr !== acc[acc.length-1]) acc.push(curr);
       // OR curr !== acc[0] acc.unshift(curr) -- I compare either from left to right or vice versa
     return acc;
   }, []);
 }
 
     console.log(cities.sort());
     console.log(removeDuplicates(cities)); // ["Athens", "Drama", "Iraklion", "Thessaloniki"]
 
 //OR with the Set() object method
  function noDuplicates(arr){
     const removeDups = [...new Set(arr)];
     return removeDups;
  }
  console.log(noDuplicates(cities)); // 
 }// end block


