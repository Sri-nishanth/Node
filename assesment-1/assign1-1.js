function x(num){
	if(num <= 100){
		console.log(num++);
		x(num);
	}
	return;
};

x(1);