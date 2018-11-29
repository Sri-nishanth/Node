function sentenceToObject(x){
	x = x.toLowerCase();
	let y = x.length;
	var count = 0;
	var obj = {};
	for(var i = 0; i < y; i++){
		var count = 1;
		var k = x[i];
		if(x.charCodeAt(i) >= 97 && x.charCodeAt(i) <= 122){
			for(var j = i+1; j < y; j++){
				if(k == x[j]){
					count = count + 1;
				}
			}
		x = x.replace(new RegExp(k, 'g'), ' ');
		obj[k] = count;
		}
	}
	for(var i = 0; i < y; i++){
		var count = 1;
		var k = x[i];
		if((x.charCodeAt(i) <= 96 || x.charCodeAt(i) >= 123) && x.charCodeAt(i) != 32){
			for(var j = i+1; j < y; j++){
				if(k == x[j]){
					count = count + 1;
				}
			}
		x = x.replace(new RegExp(k, 'g'), ' ');
		obj[k] = count; 
		}
	}
	return obj;
}

module.exports = sentenceToObject;