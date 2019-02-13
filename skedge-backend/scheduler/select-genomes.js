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
        genomes[semester.season + " " + semester.year] = [];

        for(var i = 0; i < ranks.length; i++)
        {
            
        }
    });
    
}

function SetStatusOfCoursesTaken(courseRecord, courseStatus)
{
    courseRecord.array.forEach(element => {
        courseStatus[element] = "Taken";
    });
}

function SetStatusOfUpcomingCourses(courseSequence, courseStatus)
{
    courseSequence.array.forEach(element => {
        courseStatus[element] = "Upcoming";
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
        courseStatus[courseId] = "Upcoming";
        courseSequence.push(courseId);
    }
}

function CheckPrerequisitesCorequisitesTaken(courseId, courseStatus, courseMap)
{

}
module.exports = selectGenomes;