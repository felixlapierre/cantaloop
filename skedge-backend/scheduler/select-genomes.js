var rankCourses = require('rank-courses');

/**
 * Selects the genome for each semester. Assumes start of Fall 2017
 * @param {*} courseRecord An array of strings representing the courses already taken
 * @param {*} courseSequence An array of strings representing the courses to be taken
 * @param {*} semesters An array containing objects with properties 'season' and 'year' indicating the sequence of semesters to be taken and their credits
 * @param {*} courseMap An object containing all the course codes and their sections, prerequisites, corequisites.
 */
function selectGenomes(courseRecord, courseSequence, semesters, courseMap)
{
    var genomes = [];

    //Status indicates, for every class, if student has taken, is taking, or will take (upcoming) class.
    var courseStatus = {};

    SetStatusOfCoursesTaken(courseRecord, courseStatus);
    SetStatusOfUpcomingCourses(courseSequence, courseStatus)
    AddMissingPrerequisitesCorequisitesToCourseSequence(courseSequence, courseMap, courseStatus);

    var ranks = rankCourses(courseSequence, courseMap);

    semesters.array.forEach(semester => {
        var genomeOfThisSemester = [];

        for(var i = 0; i < ranks.length; i++)
        {
            var courseId = ranks[i];
            //Skip class if already taken
            if(courseStatus[courseId].valueOf() !== "Incomplete")
                break;

            //Are this class' prerequisites/corequisites taken/in progress?
            var canTakeClass = CheckPrerequisitesCorequisitesTaken(courseId, courseStatus, courseMap);
            
            if(canTakeClass)
            {
                genomeOfThisSemester.push(courseId);
                courseStatus[courseId] = "In Progress";
            }
        }

        genomes[semester.season + " " + semester.year] = genomeOfThisSemester;

        genomeOfThisSemester.forEach((courseId) => {
            courseStatus[courseId] = "Complete";
        });
    });

    return genomes;
}

function SetStatusOfCoursesTaken(courseRecord, courseStatus)
{
    courseRecord.array.forEach(element => {
        courseStatus[element] = "Complete";
    });
}

function SetStatusOfUpcomingCourses(courseSequence, courseStatus)
{
    courseSequence.array.forEach(element => {
        courseStatus[element] = "Incomplete";
    });
}

function AddMissingPrerequisitesCorequisitesToCourseSequence(courseSequence, courseMap, courseStatus)
{
    //Regular for loop since course sequence will be extended
    for(var i = 0; i < courseSequence.length; i++)
    {
        courseMap[courseSequence[i]].prerequisites.array.forEach(courseId => {
            AddUpcomingCourseIfNotUpcoming(courseId, courseStatus, courseSequence);
        });

        courseMap[courseSequence[i]].corequisites.array.forEach(courseId => {
            AddUpcomingCourseIfNotUpcoming(courseId, courseStatus, courseSequence);
        })
    }
}

function AddUpcomingCourseIfNotUpcoming(courseId, courseStatus, courseSequence)
{
    if(courseStatus[courseId] === undefined)
    {
        courseStatus[courseId] = "Incomplete";
        courseSequence.push(courseId);
    }
}

function CheckPrerequisitesCorequisitesTaken(courseId, courseStatus, courseMap)
{
    courseMap[courseId].prerequisites.forEach((prereqId) => {
        if(courseStatus[prereqId] !== "Complete")
            return false;
    });

    courseMap[courseId].corequisites.forEach((coreqId) => {
        if(courseStatus[coreqId] !== "Complete"
            && courseStatus[coreqId] !== "In Progress");
            return false;
    });
}
module.exports = selectGenomes;