/**
 * 
 * Evaluates if two class objects have a time conflict
 * 
 * @param {*} class1 
 * @param {*} class2
 * @returns integer amount of time overlapping in minutes
 */

function overlaps(class1, class2)
{
    var c1startTime = class1.time_start.split(":");
    var c2startTime = class2.time_start.split(":");
    var c1endTime = class1.time_end.split(":");
    var c2endTime = class2.time_end.split(":");

    var multipleOverlap = 1;

    if ( class1.days.length == 3 || class1.days.length == 3) return 0; // "TBD"

    if (!(days1.includes(days2) || days2.includes(days1))) return 0; // no days in common

    if ( class1.days.length == 4 && class1.days.valueOf() ==  class2.days.valueOf()) // 2 days in common
    {
        multipleOverlap = 2;
    }

    var s1 = parseInt(c1startTime[0], 10) * 60 + parseInt(c1startTime[1], 10);
    var s2 = parseInt(c2startTime[0], 10) * 60 + parseInt(c2startTime[1], 10);

    var e1 = parseInt(c1endTime[0], 10) * 60 + parseInt(c1endTime[1], 10);
    var e2 = parseInt(c2endTime[0], 10) * 60 + parseInt(c2endTime[1], 10);

    var startToStart = ( s1 < s2);
    var endToend = ( e1 < e2 );
    var endToStart = ( e1 < s2)

    if (startToStart)
    {
        if (endToend)
        {
            if (endToStart)
            {
                return 0;
            }
            else 
            {
                return multipleOverlap*(e1-s2);
            }
        }
        else
        {
            return multipleOverlap*(e2-s2);
        }
    }
    else 
    {
        if (endToend)
        {
            return multipleOverlap*(e1-s1);
        }
        else
        {
            if (endToStart)
            {
                return multipleOverlap*(e1-s2);
            }
            else 
            {
                return 0;
            }
        }
    } 
}

module.exports = overlaps;