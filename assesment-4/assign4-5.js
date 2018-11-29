var Promise = require('bluebird');
var fs = require('fs');
var read_file = Promise.promisify(fs.readFile);

read_file("pracc.js","utf-8")
.then((data) => {
	console.log(data);
}).catch((err) => {
	console.log("Error reading file : "+err );
})

//This is how we will readfile without promisify 
// fs.readFile('pracc.js', function(err, data) {
// 	if(!err)
//     console.log('fs.readFile: ' + data.toString());
// });



var p1 = new Promise(function(resolve, reject){ 
  setTimeout(resolve, 1000, 'one'); 
}); 
var p2 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 2000, 'two'); 
});
 var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'three');
});
var promiseArray = [p1, p2, p3];


// Promise.all(promiseArray).then(values => { 
//   console.log(values);
// }, reason => {
//   console.log(reason)
// });

Promise.map(promiseArray,function(values){
	console.log(values);
}).then(function(){
	console.log("done");
})
