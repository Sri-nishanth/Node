//String.prototype.replace
var sentance = "This is a test statement and this statement can be changed";
//g-global,i-ignore these flags in regular-expression helps to replace every occurence

var regexx = /statement/gi;
console.log(sentance.replace(regexx, 'sentance'));

//console.log(sentance.replace("test", "sample")); only first instance was changed
