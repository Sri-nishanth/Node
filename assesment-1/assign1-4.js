function multiply(num1, num2, callback){
	setTimeout(function(){ 
		if( isFinite(num1) && isFinite(num2)){
			callback(null, num1, num2);			
		}else{	
			callback("Invalid Input", num1, num2);
		}
	}, 3000);
}

multiply(10,10, mul);
multiply(10,'q',mul);


function mul(error, num1, num2){
	if(error){
		console.log("Error : ",error);
	}else{
	 console.log(num1*num2);
	}
}
