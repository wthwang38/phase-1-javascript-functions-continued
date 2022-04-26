// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
} //function with a default

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
} //function expression with a default

function wrapAdjective(flair = "*"){
    return function(word = "special"){
            return `You are ${flair}${word}${flair}!`;
        }
    }