module.exports = function repeater(str, options) {
    // RIGHT

    let result = "";

    if (options.repeatTimes !== undefined) {
        let i = 0;
        while (i < options.repeatTimes) {
            result += `${convertData(str)}${addition(convertData(options.addition), options.additionRepeatTimes, options.additionSeparator)}${separator(options.separator)}`;
            i++;
        }    
    } else {
       return `${str}${options.addition}`;
    }
    
    return finishStr(result, options.separator, options.additionSeparator);


    function convertData(str) {
        if (str === null) {
            return String(str);
        } else {
            return str;
        }
    }

    function finishStr(str, charFirst) {
        let point = str.lastIndexOf(charFirst);
        return str.slice(0,point);
    }

    function addition(char, count, str) {
        if (count !== undefined && str !== undefined) {
            let i = 0;
            let result = [];
    
            while(i < count) {
                result.push(char);
                result.push(str);
                i++;
            }
            result.pop();
            return String(result.join(""));
        }
        if (char !== undefined) {
            return char;
        } else {
            return "";
        }
    }
    
    function separator(separator) {
        if (options.addition === undefined) {
            if (separator === undefined) {
                return "+";
            } else {
                return separator;
            }
        } else {
            if (separator === undefined) {
                return "+";
            } else {
                return separator;
            }
        }
    }
};

  