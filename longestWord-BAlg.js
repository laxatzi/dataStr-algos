//.Return the length of the longest word in the provided sentence.Your response should be a number
{
  function findLongestWordLength(str) {

    const lengthOfMaxWord = str.split(' ').map(word=> word.length ); // end of map
    return Math.max(...lengthOfMaxWord); // spread operator use rate 90%

  }

  console.log(findLongestWordLength("Hi my name is Lampros")); //7

}// block
{
  function findLongestWordLength(str){
    return str.split(' ').reduce((a,b)=> Math.max(a,b.length), 0); //a = 0 second arg also a num so it works fine *
  }

  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //6

}//block

//. * const  theBigger = (str, num)=> Math.max(num , str.length); works




