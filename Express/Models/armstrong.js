function isArmstrong(req){
	let x = req.query.id;
	let len = x.toString().length;
	let y = x.toString();
	let sum = 0;
	for(let i = 0;i < len;i++){
		sum += Math.pow(y[i],len);
	}
	if(x == sum) 
		return true;
	else
		return false;
};



module.exports = isArmstrong;