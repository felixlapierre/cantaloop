/**
 * Evaluates the cost of an overlap between a class and its restrictions
 * 
 * @param sectionClass a class
 * @param restriction a restriction
 * @returns score to be deducted from final fitness of an individual
 */

const checkDayOverlap= require('./overlaps.js').checkDayOverlap;
const convertTimeToInt= require('./overlaps.js').convertTimeToInt;
const computeTimeOverlap= require('./overlaps.js').computeTimeOverlap;

function restrictionOverlap( sectionClass , restriction){

    var dayMultiplier = checkDayOverlap( sectionClass.days ,  restriction.days);
    
    if (dayMultiplier == 0) return 0;

    var classTimes = [[], [] ];

    classTimes[0][0] = convertTimeToInt(sectionClass.time_start);
    classTimes[0][1] = convertTimeToInt(sectionClass.time_end);
    classTimes[1][0] = convertTimeToInt(restriction.time_start);
    classTimes[1][1] = convertTimeToInt(restriction.time_end);

    var timeOverlap = computeTimeOverlap(classTimes);

    var percentage = scaleToPercentage(classTimes, timeOverlap);

    return timeOverlap * percentage *dayMultiplier;

}

function scaleToPercentage( times, timeOverlap){

    var restrictionDuration = times[1][1] - times[1][0]; 

    var percentage = timeOverlap /restrictionDuration;

    return percentage;
}

module.exports = restrictionOverlap;