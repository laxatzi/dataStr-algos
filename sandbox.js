//EXERCISE #15
  //.Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

  //.For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

  //.The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

  //.Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
  //? check JavaScript String.prototype.indexOf() 

  {
   function mutation(arr) {
     let convert = arr.map(el => el.toLowerCase().split('').sort().join(''));
     return convert[1].indexOf(convert[0]) !== -1;
 }
  
    
  }//block
//const intersection = array1.filter(element => array2.includes(element));
