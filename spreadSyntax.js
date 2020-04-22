//The function is supposed to return a new array made up of 'num' copies of 'arr'
  // modify it using spread syntax so that is works

function copyMachine(arr, num){
   let newArr = [];
   // iteration
   while(num >= 1) {
      let spreadArg = [...arr];
      newArr.push(spreadArg);
      num--;
   }
   return newArr;
}

//console.log(copyMachine([1,3,5],3));


