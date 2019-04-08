var checkDayOverlap= require('./overlaps.js').checkDayOverlap;
var convertTimeToInt= require('./overlaps.js').convertTimeToInt;
var  computeTimeOverlap= require('./overlaps.js').computeTimeOverlap;


function conflictOverlap (class1, class2){

    var dayMultiplier = checkDayOverlap( class1.days ,  class2.days);
    var classTimes = [[], []];

    if (dayMultiplier==0) return 0;

    classTimes[0][0] = convertTimeToInt(class1.time_start);
    classTimes[0][1] = convertTimeToInt(class1.time_end);

    classTimes[1][0] = convertTimeToInt(class2.time_start);
    classTimes[1][1] = convertTimeToInt(class2.time_end);

    var timeOverlap = computeTimeOverlap(classTimes);
    return dayMultiplier*timeOverlap;
}

module.exports = conflictOverlap;