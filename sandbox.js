

//EXERCISE #15
  //.Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

  //.For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

  //.The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

  //.Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
  //. Θέλω τα γράμματα που υπάρχουν στο δεύτερο element να υπάρχουν και στο πρώτο. Οχι το αντιθετο.
  //? check JavaScript String.prototype.indexOf() 
  //? 0 doesn't evaluate to true and -1 doesn't evaluate to false. Therefore, when checking if a specific string exists within another string, the correct way to check would be:'Blue Whale'.indexOf('Blue') !== -1  // true
  //? arr.every(callback(element[, index[, array]])[, thisArg])

  {
    
     function mutation(arr){
       let converted = arr.map(el => el.toLowerCase().split(''));
       return converted[1].every(el => converted[0].indexOf(el) !== -1);
      };     
  
     //test

     console.log(mutation(["voodoo", "no"])); //false
     console.log(mutation(["Mary", "Army"])); //true
     console.log(mutation(["Mary", "Aarmy"])); //true
     console.log(mutation(["Alien", "line"])); // true  
 }//block


