function doA(){
	console.log("v1:", v1);
	console.log("v2:", v2);
	
	var v1 = 'AAA';
	
	if(v1 === 'AAA'){
		// Hoisting: Same scope in same function no matter what {, }
		var v2 = 'BBB';
	}
	
	console.log("v1:", v1);
	console.log("v2:", v2);
}

doA();
console.log('====================================');

function doB(){
	var v1 = 10;
	var v2 = function(){
		v1++;
		console.log("v1:",v1);
	}; // Overlapping Function
	
	v2();
}

doB();
console.log('====================================');

function doC(fn){
	var v1 = 10;
	var v2 = function(){
		v1++;
		console.log("v1:",v1);
		fn(v1);
	};
	
	v2();
}

doC(function(number){console.log("CCCC" + number);});