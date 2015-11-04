function getSalary(minSalary, maxSalary) {
    var salary = randomNumber(minSalary, maxSalary);
    return salary;
}

function randomNumber(min,max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

module.exports = getSalary;

//CREATE YEARS SERVICE NEXT