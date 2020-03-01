module.exports = class DepthCalculator {
    // RIGHT
    
    calculateDepth(arr, level = 1, count = []) {
        count.push(level);
        arr.forEach(item => {
            if(Array.isArray(item)) {
                this.calculateDepth(item, level + 1, count);
            }
        });

        return Math.max.apply(null, count);
    }  
};

