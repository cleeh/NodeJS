function makeFunc(){
	var name = "Mozilla"; // Variable 'name' would be removed in other language but, not in JS
	function displayName(){
		alert(name); // Closure: Outter Variables Reference
	}

	return displayName;
}

var myFunc = makeFunc();
myFunc();