// Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.

{
   'use strict'; 

let user = {
   name: 'Kenneth',
   age: 28,
   data: {
     username: 'kennethCodesAllDay',
     joinDate: 'March 26, 2016',
     organization: 'freeCodeCamp',
     friends: [
       'Sam',
       'Kira',
       'Tomo'
     ],
     location: {
       city: 'San Francisco',
       state: 'CA',
       country: 'USA'
     }
   }
 };
 
 function addFriend(userObj, friend) {
   // Only change code below this line
     user.data.friends.push(friend);
     return user.data.friends;
   // Only change code above this line
 }

//  addFriend(user, 'Pete');
//  console.log(user);//(5) ["Sam", "Kira", "Tomo", "Pete"];

} //end of block


// something else
{
   'user strict';

   // Return an array consisting of the largest number from each provided sub-array

   function largestOfFour(arr) {
        return arr.map(elem => {
           return elem.reduce((prev, current)=>{
              return (current > prev)? current : prev;
           })
        })
    }
    
  //console.log(largestOfFour([[4, 5, 1], [13, 27, 18], [32, 35, 39], [1001, 857, 1]])); // [5, 27, 39, 1001]
    
} // end of block

{
   'use strict';
  
 //Check if a string (first argument, str) ends with the given target string (second argument, target).
 // using endsWith() method

  const userName = "Bastian";
  const targetLetter = "n";
// testing 
 // console.log(userName.endsWith(targetLetter)); // true

// create a function for checking
  function confirmEnding(str, target) {
     let targetStrPart =   str.substring(str.length-target.length);
     if (targetStrPart === target) return true;
     return false;
   }

  console.log(confirmEnding("Nickolopoulos", "poulos")); //true
  console.log(confirmEnding("Kazantzidis", "poulos")); // false

} // end of block


{
  let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

let funModule = (function(){
  return {
      isCuteMixin: function(obj){
        obj.isCute= function(){
          return true;
        };
  },
    singMixin : function(obj){
      obj.sing = function(){
        console.log("Singing to an awesome tune");
      };
    }
  }; // end of return obj

})(); // end iife
}// end block

{
  
}// end block