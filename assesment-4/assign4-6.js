var Chance = require('chance');
//To use chance it has to be instantiated after loading
var chance = new Chance;
var email = chance.email({domain : "gmail.com"});
var name = chance.name({gender : "female", middle : false})
var age = chance.age({type : 'teen'})
//chance.pickset(array,quantity)
var subject = chance.pickset(['Circuit-thoery','Devices','Antennas','Networks','Data-Structures','Ray-optics'],3);
var cgpa = chance.floating({min : 6,max : 9,fixed : 2});
var Personal_details = new Object();
Personal_details.name = name;
Personal_details.age = age;
Personal_details.email = email;
Personal_details.subjects = subject;
Personal_details.cgpa = cgpa;
//console.log(email,name,age,subject,cgpa);
console.log(Personal_details)