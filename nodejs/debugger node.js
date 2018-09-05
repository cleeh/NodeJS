x = 5;
setTimeout(function (){
	debugger; // Breakpoint
	console.log("world");
}, 1000);
console.log("hello");

// node debug <file name>