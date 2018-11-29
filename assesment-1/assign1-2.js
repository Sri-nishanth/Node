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


Promise.all(promiseArray).then(values => { 
  console.log(values);
}, reason => {
  console.log(reason)
});