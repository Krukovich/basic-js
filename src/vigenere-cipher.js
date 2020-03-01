class VigenereCipheringMachine {
    // RIGHT
    
    constructor() {
        this.engCharArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        this.cipherSquare = this.prepareSquare();
        this.inputStr = "";
    }

    encrypt(str, keyStr) {
        if (arguments.length === 0) throw new Error();
        if (!str || !keyStr) throw new Error();

        let result = "";
        const prepStrKey = this.prepareStrKey(str.length, keyStr.length, str, keyStr);

        for (var i = 0; i < str.length; i++) {
            if (this.engCharArray.indexOf(str[i].toUpperCase()) < 0) {
                result += str[i];
            } else {
                result += this.cipherSquare[this.engCharArray.indexOf(str[i].toUpperCase())][this.engCharArray.indexOf(prepStrKey[i].toUpperCase())];
            }
            this.inputStr = result;
        }
        return result;
    }

    decrypt(str, keyStr) {
        if (arguments.length === 0) throw new Error();
        if (!str || !keyStr) throw new Error();

        let reversStr = str.split("").reverse().join("");
        if (this.inputStr === reversStr) {
            let decorStr = this.prepareStrKey(reversStr.length, keyStr.length, reversStr, keyStr);
            let result = [];

            for (let i = 0; i < reversStr.length; i++) {
                if (!reversStr[i].match(/[A-Za-z]/)) {
                    result.push(reversStr[i]);
                    continue;
                }
                let row = this.engCharArray.indexOf(decorStr[i].toUpperCase());
                let coll = this.cipherSquare[row].indexOf(reversStr[i]);
                result.push(this.cipherSquare[coll][0]);
            }
            return result.reverse().join("");
        }

        let decorStr = this.prepareStrKey(str.length, keyStr.length, str, keyStr);
        let result = [];

        for (let i = 0; i < str.length; i++) {
            if (!str[i].match(/[A-Za-z]/)) {
                result.push(str[i]);
                continue;
            }
            let row = this.engCharArray.indexOf(decorStr[i].toUpperCase());
            let coll = this.cipherSquare[row].indexOf(str[i]);
            result.push(this.cipherSquare[coll][0]);
        }
        return result.join("");
    }

    prepareSquare() {
        const cipherSquare = [];
        for (var i = 0; i < this.engCharArray.length; i++) {
            cipherSquare[i] = this.engCharArray.slice(i).concat(this.engCharArray.slice(0, i));
        }
        return cipherSquare;
    }

    prepareStrKey(strLength, keyLength, str, keyStr) {
        let tempArray = str.split("");
        let indexArray = [];
        tempArray.forEach((char, index) => {
            if (!char.match(/[A-Za-z]/))  {
                indexArray.push(index);
            }
        });

        let result = "";
        if (strLength % keyLength !== 0) {
            const count = Math.floor(strLength / keyLength);
            let index = strLength - (count * keyLength);
            let i = 0;
            while (i < count) {
                result += keyStr;
                i++;
            }
            result += keyStr.slice(0, index);
            let tempResult = result.split("");
            indexArray.forEach(item => {
                tempResult.splice(item, 0, "");
            });
            return tempResult;
        } else {
            const count = strLength / keyLength;
            let i = 0;
            while (i < count) {
                result += keyStr;
                i++;
            }
            return result;
        }
    }
}

module.exports = VigenereCipheringMachine;
