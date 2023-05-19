// code your solution here
// function called saturdayFun. Return a string like "This Saturday, I want to ....!". If nothing is passed in as the first parameter, default to 'roller-skate'.

function saturdayFun (activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun('Sleep');


// function expression called mondayWork.
// return 'This Monday, I will ....' If nothing is passed, default to 'go to the office'

const mondayWork = function (doing = 'go to the office'){
    return `This Monday, I will ${doing}.`;
}
mondayWork('sleep');


// function called wrapAdjective, should return a function.
// inner function should take a parameter which defaults to 'special'. Returns a string "You are ...!"
function wrapAdjective(String = "*"){
    return function(word1 = 'special'){
           return `You are ${String}${word1}${String}!`
    }
}

