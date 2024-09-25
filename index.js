// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2);
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier = 4){
    return function(fare){
        return fare * multiplier;
    };
}
function fareDoubler(fare){
    const doubler = Math.abs(fare * 2);
    return doubler;
}
function fareTripler(fare){
    const tripler = Math.abs(fare *3);
    return tripler;
}
function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}