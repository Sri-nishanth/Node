//Array elements can be of different types - Integers,strings,null,undefined,
//another array ,or even another object.
 var array = new Array(10);
 var Obj = {
 	name : "Object",
 	lang : "JS"
 }
 array = [10, null, undefined,Obj];
 array.push("String")
 array.unshift("[\"another\", \"array\"]");

 console.log(array);
