const overlaps = require('./overlaps.js');

function restrictionOverlap( sectionClass , restriction){

    var dayMultiplier = overlaps.checkDayOverlap( sectionClass.days ,  restriction.days);
    
    if (dayMultiplier == 0) return 0;

    var classTimes = {
        "sectionClass" : [],
        "restriction" : []
    }; 

    classTimes['sectionClass'][0] = overlaps.convertTimeToInt(sectionClass.time_start);
    classTimes['sectionClass'][1] = overlaps.convertTimeToInt(sectionClass.time_end);
    classTimes['restriction'][0] = overlaps.convertTimeToInt(restriction.time_start);
    classTimes['restriction'][1] = overlaps.convertTimeToInt(restriction.time_end);

    var timeOverlap = overlaps.computeTimeOverlap(classTimes);

    var percentage = scaleToPercentage(classTimes, timeOverlap);

    return timeOverlap * percentage *dayMultiplier;

}

function scaleToPercentage( times, timeOverlap){

    var restrictionDuration = times['restriction'][1] - times['restriction'][0]; 

    var percentage = timeOverlap /restrictionDuration;

    return percentage;
}

module.exports = restrictionOverlap;