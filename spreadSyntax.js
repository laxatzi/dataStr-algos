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

