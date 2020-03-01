const chainMaker = {
	// RIGHT

	charArray: [],
  
	getLength() {
		return this.charArray.length;
	},
  
	addLink(value) {
		this.charArray.push(value);
		return this;
	},
  
	removeLink(position) {

		if (typeof position !== "number" || position == '' || this.charArray[position] === undefined) {
			this.charArray = [];
			throw new Error("Message");
		}

		this.charArray.splice(position - 1, 1);
		return this;
	},
  
	reverseChain() {
		this.charArray.reverse();
		return this;
	},
  
	finishChain() {
		let finishString = "";
		
		this.charArray.forEach(item  => {
			finishString += `( ${item} )~~`;
		});
		this.charArray = [];
		return finishString.substring(0, finishString.length - 2);
	}
  };
  
  module.exports = chainMaker;
  