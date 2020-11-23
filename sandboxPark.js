
{

let sumFunctionThatMayBreak = (a, b, inconsistentParameter) => a+b+inconsistentParameter

 console.log(sumFunctionThatMayBreak(12,40, undefined)); // => NaN

}//end block

{
	let sumFunctionThatMayBreak = (a,b, inconsistentParameter)=> a + b (!!inconsistentParameter?inconsistentParameter:0);
}
{
	let sumFunctionThatMayBreak = (a,b,inconsistentParameter)=>  a+b+(!!inconsistentParameter??inconsistentParameter);
	console.log(sumFunctionThatMayBreak(12,40, null)); // => 52

}


