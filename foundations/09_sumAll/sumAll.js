const sumAll = function(a, b) {
    const arr = []
    const start = a < b ? a : b
    const end = a > b ? a : b
    if (!Number.isInteger(a) || !Number.isInteger(b) || (a < 0 || b < 0)) {
        return 'ERROR'
    } 
    for (let i = start; i <= end; i++) {
        arr.push(i)
    }
    return arr.reduce((initial, current) => initial += current, 0);
};

// Do not edit below this line
module.exports = sumAll;
