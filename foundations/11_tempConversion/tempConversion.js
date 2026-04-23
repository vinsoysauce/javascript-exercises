const convertToCelsius = function(farenheit) {
    const celsius = ((farenheit - 32) / 1.8)
    const round = Math.round(celsius * 10)/10
    return round
};

const convertToFahrenheit = function(celsius) {
    const farenheit = ((celsius * 1.8) + 32)
    const round = Math.round(farenheit * 10)/10
    return round
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
