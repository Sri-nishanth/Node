var bike = {name : "RE" , colour : "Black"};
console.log(bike["name"]);
//using object literal
var mobile = new Object();
mobile.brand = "Apple";
mobile.colour = "Grey";
mobile.model = "6s";
console.log(mobile);

//using the keyword new
var college = Object.create(null);
college.name = "KCT";
console.log(college);
//Using the properties of the parameter Object
var country = function(name, territory, state){
	this.name = name;
	this.states = state;
	this.territory = territory;
}
var India = new country("India",29,7);
console.log(India);
//Defining an object constructor and creating objects on the constructed type