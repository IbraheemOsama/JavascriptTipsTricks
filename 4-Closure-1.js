function foo(){
	var bar="bar";
	function baz() {
	console.log(bar);
	}
	bam(baz);
}

// passing a function as a variable ex Func and Action in C#
function bam(func)
{
	func();
}

foo();