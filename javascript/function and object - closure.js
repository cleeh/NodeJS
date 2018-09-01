function makeFunc(){
	var name = "Mozilla"; // Variable 'name' would be removed in other language but, not in JS
	function displayName(){
		alert(name); // Closure: Outter Variables Reference
	}

	return displayName;
}

var myFunc = makeFunc();
myFunc();

function Counter(){
	var count = 0;
	var check = function(){
		console.log(++count);
	};

	return check;
}

var checker = Counter();

checker();
checker();
checker();
checker();
checker();