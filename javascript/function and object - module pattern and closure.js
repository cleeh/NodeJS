var calculator = (function(){
	var sum = 0;
	var add = function(num){
		sum += num;
	};
	var show = function(){
		console.log(sum);
	};

	return {add:add, show:show};
}());

calculator.add(10);
calculator.add(20);
calculator.add(30);
calculator.add(40);
calculator.add(50);
calculator.show();