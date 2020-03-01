module.exports = function transform(array) {
	// RIGHT
	
    if (!Array.isArray(array)) throw "error";
    if (array.length === 0) return [];
  
	let flag = false;
	
    while (!flag) {
		flag = true;
		for (let i = 0; i <= array.length; i++) {
			if (array[i] === "--discard-next" && array[i + 2] === "--double-prev") {
				array.splice(i, 1);
				array.splice(i + 1, 1);
				flag = false;
				break;
			}
			if (array[i] === "--discard-prev") {
				if (i - 1 >= 0 ) array.splice(i - 1, 2);
				else array.splice(i, 1);
				flag = false;
				break;
			} else if (array[i] === "--discard-next") {
				array.splice(i, 1);
				array.splice(i, 1);
				flag = false;
				break;
			} else if (array[i] === "--double-next") {
				if (i + 1 < array.length - 1) array.splice(i, 1, array[i + 1]);
				else array.splice(i, 1);
				flag = false;
				break;
			} else if (array[i] === "--double-prev") {
				if (i - 1 >= 0 ) array.splice(i, 1, array[i - 1]);
				else array.splice(i, 1);
				flag = false;
				break;
			}
		}
    }
    return array;
};