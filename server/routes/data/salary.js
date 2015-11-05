function getSalary(minSalary, maxSalary) {
    minSalary = parseInt(minSalary);
    maxSalary = parseInt(maxSalary);

    var salary = randomNumber(minSalary, maxSalary);
    return salary;
}

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = getSalary;

