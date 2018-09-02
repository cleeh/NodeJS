var obj = {v1:'AAA', v2:'BBB'};
obj.v3 = 'CCC';

console.dir(obj);
console.dir('v1: ' + obj['v1']);
console.dir('v2: ' + obj['v2']);
console.dir('v3: ' + obj.v3);

function Person(ssn){
	this.ssn = ssn;

	Person.prototype.display_in = function(){
		console.log('[' + this.ssn + '] display_in...');
	};
}

Person.prototype.display_out = function(){
	console.log('[' + this.ssn + '] display_out...');
};

// it looks like 'class'
var p1 = new Person('Apple');
var p2 = new Person('Banana');
var p3 = new Person('Carrot');

console.dir(p1);
console.dir(p2);
console.dir(p3);
console.dir(Person);

p1.display_in();
p2.display_out();
p3.display_out();