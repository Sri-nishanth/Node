function student (name, age){
	this.name = name;
	this.age = age;
}
//Adding a prototype to student constructor
student.prototype.performance =function(){
	console.log("The performance of " + this.name + " is Good");
}
function another_student(name, age){
	student.call(this, name, age);
}
//here we will create a new object with student.prototype as its prototype  
another_student.prototype = Object.create(student.prototype);
another_student.prototype.constructor = another_student;

var nishanth = new another_student("Sri Nishanth","12");
//new object nishanth is created using the another_student constructor
console.log(nishanth);
nishanth.performance();
console.log(nishanth.college);
 