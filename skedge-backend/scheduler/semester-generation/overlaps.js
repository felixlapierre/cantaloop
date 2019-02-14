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

    if ( class1.days.length == 3 || class1.days.length == 3) {// "TBD"
        console.log("no common");
        return 0;
    }

    if (!(class1.days.includes(class2.days) || class2.days.includes(class1.days))) {
        console.log("no common");
        return 0; // no days in common
    }
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
    var endToStart = ( e1 < s2);

    // console.log(s1);
    // console.log(e1);
    // console.log(s2);
    // console.log(e2);
    
    if (s1<s2)
    {
        // c1 starts earlier than c2
        if (e1<e2)
        {
            // c1 ends earlier than c2
            if (e1 < s2)
            {
                //c1 ends before c2 starts
                // no conflict
                console.log("no conflict");
                return 0;
            }
            else if (e1>s2)
            {
                // c1 ends after c2 starts
                //there is a partial overlap
                console.log("partial");
                return multipleOverlap*(e1-s2);
            }
            else
            {
                //c1 ends when c2 starts
                console.log("tight");
                return 0;
            }
        }
        else if (e2<e1)
        {
            // c2 ends earlier than c1

            // c2 entirely overlaps c1
            console.log("c2 during c1");
            return multipleOverlap*(e2-s2);
        }
        else
        {
            // end at same time
            // c2 entirely overlaps c1
            console.log("c2 during c1 Same end");
            return multipleOverlap*(e2-s2);
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
                // c2 ends before c1 starts
                // no conflict
                console.log(" no conflict c2 before c1");
                return 0;
            }
            else if (e2>s1)
            {
                //c2 ends after c1 starts
                //overlap e2-s1
                console.log("partial: c2 ends after c1 start");
                return multipleOverlap*(e2-s1);
            }
            else
            {
                // c2 ends when c1 starts
                // no conflict
                console.log("tight, no conflict c2-c1");
                return 0;
            }
        }
        else if (e2>e1)
        {
            // c2 ends after c1
            // c1 during c2
            console.log("full overlap c1 is during c2");
            return multipleOverlap*(e1-s1);
        }
        else
        {
            // end at same time
            console.log("full overlap c1 is during c2");
            return multipleOverlap*(e1-s1);
        }
    }
    else
    {
        //same start
        if (e1<e2)
        {
            // c1 ends before c2
            console.log("full overlap c1 is during c2");
            return multipleOverlap*(e1-s1);
        }
        else if (e1>e2)
        {
            // c2 ends before c1
            console.log("full overlap c2 is during c1");
            return multipleOverlap*(e2-s2);
        }
        else
        {
            // end at same time
            // full conflict
            console.log("full overlap c1 and c2");
            return multipleOverlap*(e1-s1);
        }
    }
}

module.exports = overlaps;