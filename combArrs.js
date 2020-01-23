//Modify the function using the 'spread op' so that it returns the array ['learning', 'to', 'code', 'is', 'fun'];

function spreadOut(){
   let fragment = ['to','code'];
   let sentence = [...fragment];
   sentence.push('is','fun');
   sentence.unshift('learning');
   return sentence;
}

 console.log(spreadOut());
