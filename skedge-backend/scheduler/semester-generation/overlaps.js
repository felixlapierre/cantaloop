    /**
 * 
 * Evaluates if two class objects have a time conflict
 * 
 * @param {*} class1 
 * @param {*} class2
 * @returns integer amount of time overlapping in minutes
 */


function checkDayOverlap(c1days, c2days){

        if (c1days.match(/TBD|N\/A/g) || c2days.match(/TBD|N\/A/g) ) 
            return 0; // no overlap
        
        if (c1days.length == 4 && c1days.valueOf() ==  c2days.valueOf())  
            return 2;// 2 days in common
        
        if ((c1days.length == 2 && c2days.includes(c1days) ) || ( c2days.length == 2 && c1days.includes(c2days) ) ) 
            return 1;
        
        if (c1days.length == 4 && c2days.length == 4 && 
            ( ( c2days.includes(c1days.substring(0,2)) || c2days.includes(c1days.substring(2,4)) ) ) ) 
            return 1;

        else return 0;
    }
    
function convertTimeToInt(timeString){

        var SplitTime = timeString.split(":");
        var intTime = parseInt(SplitTime[0], 10) * 60 + parseInt(SplitTime[1], 10);
        return intTime;
    }

function computeTimeOverlap(times){
        var s1 = times[0][0];
        var e1 = times[0][1];
        var s2 = times[1][0];
        var e2 = times[1][1];
        
        if (s1<s2)
        {
            // c1 starts earlier than c2
            if (e1<e2)
            { 
                // c1 ends earlier than c2
                if (e1 < s2)
                {
                    //c1 ends before c2 starts: no conflict
                    return 0;
                }
                else if (e1>s2)
                {
                    // c1 ends after c2 starts: partial
                    return (e1-s2);
                }
                else
                {
                    //c1 ends when c2 starts: no conflict
                    return 0;
                }
            }
            else if (e2<e1)
            {
                // c2 ends earlier than c1: c2 full
                return (e2-s2);
            }
            else
            {
                // end at same time: c2 full
                return (e2-s2);
            }
        }
        else if (s1>s2)
        {
            // c2 starts earlier
            if (e2<e1)
            {
                // c2 ends before c1
                if (e2<s1)
                {
                    // c2 ends before c1 starts: no conflict
                    return 0;
                }
                else if (e2>s1)
                {
                    //c2 ends after c1 starts: partial
                    return (e2-s1);
                }
                else
                {
                    // c2 ends when c1 starts: no conflict
                    return 0;
                }
            }
            else if (e2>e1)
            {
                // c2 ends after c1: c1 full
                return (e1-s1);
            }
            else
            {
                // end at same time: c1 full
                return (e1-s1);
            }
        }
        else
        {
            //same start
            if (e1<e2)
            {
                // c1 ends before c2: c1 full
                return (e1-s1);
            }
            else if (e1>e2)
            {
                // c2 ends before c1: c2 full
                return (e2-s2);
            }
            else
            {
                // end at same time: double full conflict
                return (e1-s1);
            }
        }
    }



module.exports = {};
module.exports.checkDayOverlap = checkDayOverlap;
module.exports.convertTimeToInt = convertTimeToInt;
module.exports.computeTimeOverlap = computeTimeOverlap;
