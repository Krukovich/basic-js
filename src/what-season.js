module.exports = function getSeason(date) {
	// RIGHT
	
	if (arguments.length === 0) return "Unable to determine the time of year!";

	try {
		date.getTime()
	} catch (error) {
		throw new Error(error);
	}

	if (typeof date === undefined || typeof date !== "object") {
		throw new Error("Message");
	} else {
		const selectDate = new Date(date);
		const temp = selectDate.toString();

		if (temp === "Invalid Date") throw new Error("Message");

		const month = selectDate.getMonth();
	
		if (month === 2 || month === 3 || month === 4) return "spring";
		if (month === 5 || month === 6 || month === 7) return "summer";
		if (month === 8 || month === 9 || month === 10) return "autumn";
		if (month === 0 || month === 1 || month === 11) return "winter";
	}
};

