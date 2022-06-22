const { BadRequestError } = require("../utils/errors")
class GiftExchange {
    static pairs(names) {
        if(names.length % 2 != 0) {
            throw new BadRequestError("Array must have an even number of inputs!")
        } else if(names.length % 2 == 0) {
            let tempArray = [...names]
            console.log("tempArray before shuffle: ", tempArray)
            shuffleArray(tempArray)
            console.log("tempArray after shuffle: ", tempArray)

            const result = [];
            for(let i = 0; i < tempArray.length; i += 2) {
                const chunk = tempArray.slice(i, i + 2);
                result.push(chunk);
            }

            return result;
        }    
    }

    static traditional(names) {
        let temp = [...names]
        shuffleArray(temp)
        let result = []
        
        for(let i = 0; i < temp.length; i++) {
            if(i == 7) {
                result.push(temp[i] + " is giving a gift to " + temp[0])
            } else {
                result.push(temp[i] + " is giving a gift to " + temp[i + 1])
            }          
        }

        return result
    }
}

module.exports = GiftExchange

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}