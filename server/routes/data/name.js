var womenNameArray = require('./womenNameArray');
var menNameArray = require('./menNameArray');
var lastNameArray = require('./lastNameArray');

function createName(gender){
    var firstName;
    if(gender == "female"){
        firstName = womenNameArray[randomNumber(0, womenNameArray.length -1)];
    } else if(gender == "male"){
        firstName = menNameArray[randomNumber(0, menNameArray.length -1)];
    } else if(gender == "both"){
        var genderPicker = Math.random();
            if(genderPicker >= 0.5){
                firstName = womenNameArray[randomNumber(0, womenNameArray.length -1)];
            } else {
                firstName = menNameArray[randomNumber(0,  menNameArray.length -1)];
            }
    }

    var lastName = lastNameArray[randomNumber(0, lastNameArray.length -1)];
    return firstName + " " + lastName;
}

function randomNumber(min,max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

module.exports =  createName;