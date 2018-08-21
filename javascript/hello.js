"use strict";

string = "Hello Javascript!"; // ReferenceError: string is not defined
// Statement - Interpret Stage
function doA(data){
	console.log(data);
}
// Expression - Execute Stage
var doB = function(){
	
};

function main(){
	// Expression
	console.log(doA);
	doA(string);
}

main();