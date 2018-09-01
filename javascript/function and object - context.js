function doA(){
	var sum = 0;
	var doB = function(){
		console.log("sum:", sum);
		console.log("this.sum:", this.sum); // 'this' is context
	};
	
	doB();
}

var sum = 100;
var obj = {sum: 10000};

doA.apply(obj);