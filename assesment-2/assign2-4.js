class Student{
	constructor(name){
		this._name = name;
	}
	get name(){
		return this._name.toUpperCase();
	}
	//get property will be defined on the prototype of the object
	set name(new_name){
		if(new_name)
		this._name = new_name;
	}
	//binds the objects property 
	static age(){
		console.log("20");
	}
}


class Person extends Student{
	constructor(name){
		super(name);
	}
}

Person.age();
//instatiation like var x = new Student . then student.age is not needed for static methods.
let nishanth = new Person("Srinishanth");
console.log(nishanth);
var mohan = new Student("srinisanth");
mohan.name = "Mohan";
//use of setter.
console.log(mohan);
