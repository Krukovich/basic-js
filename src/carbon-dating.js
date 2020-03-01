const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	// RIGHT
	
	if (isNaN(parseFloat(sampleActivity))) return false;
	if (arguments.length === 0 || typeof sampleActivity !== "string") return false;
	if (Number(sampleActivity) > 15 || Number(sampleActivity) <= 0 && typeof Number(sampleActivity) === "number") return false;

	const dpm = Math.log(MODERN_ACTIVITY / Number(checkDoubleDot(sampleActivity)));
	const k = (0.693 / HALF_LIFE_PERIOD);
	const result = (dpm / k);

	return Math.ceil(result);


	function checkDoubleDot(sampleActivity) {
		if (sampleActivity.lastIndexOf(".") > 4) {
			let point = sampleActivity.lastIndexOf(".");
			return sampleActivity.slice(0,point);
		} else {
			return sampleActivity;
		}
	}
};




