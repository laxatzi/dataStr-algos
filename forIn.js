//We have defined a function "countOnline" which accepts one argument (a users object). Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose "online" property is a "true" value.

let users = {
   Alan: {
     age: 27,
     online: false
   },
   Jeff: {
     age: 32,
     online: true
   },
   Sarah: {
     age: 48,
     online: false
   },
   Ryan: {
     age: 19,
     online: true
   },
   Bob: {
      age: 46,
      online: true
   }
 };

 function countOnline(obj){
    let result= 0;
    for(let user in obj){
       if(obj[user].online == true){
          result++;
       }
    }
    return result;
 }
console.log(countOnline(users));  //3
