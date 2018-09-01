function doA(){
	var sum = 0;
	
	console.log("sum:", sum);
	console.log("this.sum:", this.sum); // 'this' is context
}

var sum = 100;
var obj = {sum: 10000};

doA(); console.log("------------------------------");
doA.apply(obj);