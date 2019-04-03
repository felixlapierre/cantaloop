/**
 * Ranks each course in the provided course list by how many classes
 * depend on it.
 * @param {*} courseList The list of classes to be ranked
 * @param {*} courseCatalog The map containing course prerequisites, corequisites.
 * @returns an array with each course in order of the ranking
 */
function assignCourseRanks(courseList, courseCatalog)
{
    var courseRanks = {};
    for(var key = 0; key < courseList.length; key++)
    {
        var courseId = courseList[key];
        if(courseRanks[courseId] === undefined)
            courseRanks[courseId] = 0;

        addRankToPrerequisitesAndCorequisites(courseId, courseCatalog, courseRanks);
    }
    var ranksAsArray = toSortedArray(courseRanks);
    return ranksAsArray;
}

function addRankToPrerequisitesAndCorequisites(courseId, courseMap, courseRanks)
{
    if(!courseMap.hasOwnProperty(courseId))
        throw new Error("Course in course list was not found in course map: " + courseId);
    
    var prerequisites = courseMap[courseId].prerequisites;
    var corequisites = courseMap[courseId].corequisites;

    addRankToAllInRecursively(prerequisites, courseMap, courseRanks);
    addRankToAllInRecursively(corequisites, courseMap, courseRanks);
}

function addRankToAllInRecursively(listOfCoursesToRankUp, courseMap, courseRanks)
{
    //Base case
    if(listOfCoursesToRankUp === undefined)
        return;
    
    //Recursive case
    for(var i = 0; i < listOfCoursesToRankUp.length; i++)
    {
        var courseId = listOfCoursesToRankUp[i];
        if(!CourseExcluded(courseId))
        {
            RankUp(courseId, courseRanks);
            addRankToPrerequisitesAndCorequisites(courseId, courseMap, courseRanks);
        }
    }
}

function RankUp(courseId, courseRanks)
{
    if(courseRanks[courseId] === undefined)
        courseRanks[courseId] = 1;
    else
        courseRanks[courseId] += 1;
}

function toSortedArray(courseRanks)
{
    var array = [];
    for(var key in courseRanks)
    {
        if(courseRanks.hasOwnProperty(key))
        {
            array.push(key);
        }
    }
    var sorted = array.sort((a,b) => {
        return courseRanks[b] - courseRanks[a];
    });

    return sorted;
}

function CourseExcluded(courseId)
{
    return courseId.match(/(MATH|PHYS)/);
}

module.exports = assignCourseRanks;