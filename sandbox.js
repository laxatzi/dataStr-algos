
{
  function findLongestWordLength(str) {

    const lengthOfMaxWord = str.split(' ').map(word=> word.length ); // end of map
    return Math.max(...lengthOfMaxWord);

  }

  console.log(findLongestWordLength("Hi my name is Lampros")); //7

}// block

{
  function findLongestWordLength(str){
    return str.split(' ').reduce((a,b)=> Math.max(a,b.length), 0);
  }

  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //6

}//block


