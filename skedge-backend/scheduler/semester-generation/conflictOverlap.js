const overlaps = require('./overlaps.js');

function conflictOverlap (class1, class2){
    
    var dayMultiplier = overlaps.checkDayOverlap( class1.days ,  class2.days);
    
    if (dayMultiplier==0) return 0;

    var classTimes = {
        "class1" : [],
        "class2" : []
    }; 

    classTimes['class1'][0] = overlaps.convertTimeToInt(class1.time_start);
    classTimes['class1'][1] = overlaps.convertTimeToInt(class1.time_end);
    classTimes['class2'][0] = overlaps.convertTimeToInt(class2.time_start);
    classTimes['class2'][1] = overlaps.convertTimeToInt(class2.time_end);

    var timeOverlap = overlaps.computeTimeOverlap(classTimes);

    return dayMultiplier*timeOverlap;

}

module.exports = conflictOverlap;