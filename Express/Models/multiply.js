function printMultiples(num) {
	var arr = [];
	let y;
	for (let i = 1; i <= 10; i++) {
		y = i * num;
		arr.push(y);
	}
	return arr;
}



module.exports = printMultiples;