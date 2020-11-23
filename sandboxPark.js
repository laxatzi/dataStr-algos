
{

let sumFunctionThatMayBreak = (a, b, inconsistentParameter) => a+b+inconsistentParameter

 console.log(sumFunctionThatMayBreak(12,40)); // => NaN

}//end block

{
	console.log('DISMISS ALL FAULTY')
	let sumFunctionThatMayBreak = (a,b, inconsistentParameter)=>a+b+(!!inconsistentParameter?inconsistentParameter:0);
	console.log(sumFunctionThatMayBreak(12,40, null)); // => 52
	console.log(sumFunctionThatMayBreak(12,40, '')); // => 52

}
{
	console.log('DISMISS ONLY NULL AND UNDEFINED')

	let sumFunctionThatMayBreak = (a,b,inconsistentParameter)=>  a+b+(inconsistentParameter??0);
	console.log(sumFunctionThatMayBreak(12,40,'')); // => "52"
	console.log(sumFunctionThatMayBreak(12,40, null)); // => 52


}


