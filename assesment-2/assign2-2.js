//First a constructor is created
function Student(name, college, degree){
	this.name = name;
	this.college = college;
	this.degree = degree;
}

//Prototype object having a constructor property is evoked to add a new property.
Student.prototype.department = "ECE";
var nishanth = new Student("sri", "KCT", "BE");
//object nishanth is created with the help of the constructor Student
console.log(nishanth);
console.log(nishanth["department"]);