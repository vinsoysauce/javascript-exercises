const repeatString = function(str, num) {
    let i = 0
    let arr = []
    if (num < 0) return 'ERROR'
    while (i < num) {
        arr.push(str)
        i++;
    }
    return arr.join('')
};

// Do not edit below this line
module.exports = repeatString;
