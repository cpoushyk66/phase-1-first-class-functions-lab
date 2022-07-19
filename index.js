// Code your solution in this file!
const returnFirstTwoDrivers = function(arry) {
    return arry.slice(0, 2);
}

const returnLastTwoDrivers = function(arry) {
    return arry.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMulti) {
    return function(fare) { return fare * fareMulti}
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arry, divers) {
    return divers(arry);
}