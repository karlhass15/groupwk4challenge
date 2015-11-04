function yearsOfService(minYears, maxYears) {
    minYears = parseInt(minYears);
    maxYears = parseInt(maxYears);

    var years = randomNumber(minYears, maxYears);
    return years;
}

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = yearsOfService;

