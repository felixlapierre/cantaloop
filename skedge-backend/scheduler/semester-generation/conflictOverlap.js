const overlaps = require('./overlaps.js');

function conflictOverlap (class1, class2){
    
    var dayMultiplier = overlaps.checkDayOverlap( class1.days ,  class2.days);
    
    if (dayMultiplier==0) return 0;

    classTimes[0][0] = overlaps.convertTimeToInt(class1.time_start);
    classTimes[0][1] = overlaps.convertTimeToInt(class1.time_end);

    classTimes[1][0] = overlaps.convertTimeToInt(class2.time_start);
    classTimes[1][1] = overlaps.convertTimeToInt(class2.time_end);

    var timeOverlap = overlaps.computeTimeOverlap(classTimes);

    return dayMultiplier*timeOverlap;

}

module.exports = conflictOverlap;