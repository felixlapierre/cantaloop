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
    //Status indicates, for every class, if student has taken, is taking, or will take (upcoming) class.
    var courseStatus = {};

    SetStatusesOfCourses(courseRecord, "Complete", courseStatus);
    SetStatusesOfCourses(courseSequence, "Incomplete", courseStatus)
    AddMissingPrerequisitesCorequisitesToCourseSequence(courseSequence, courseMap, courseStatus);

    var ranks = rankCourses(courseSequence, courseMap);

    return CreateGenomesForEachSemester(semesters, ranks, courseStatus, courseMap);
}

function SetStatusesOfCourses(courseList, newStatus, courseStatusMap)
{
    courseList.array.forEach(courseId => {
        courseStatusMap[courseId] = newStatus;
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

function PrerequisitesCorequisitesTaken(courseId, courseStatus, courseMap)
{
    courseMap[courseId].prerequisites.array.forEach((prereqId) => {
        if(courseStatus[prereqId] !== "Complete")
            return false;
    });

    courseMap[courseId].corequisites.array.forEach((coreqId) => {
        if(courseStatus[coreqId] !== "Complete"
            && courseStatus[coreqId] !== "In Progress");
            return false;
    });
}

function CreateGenomesForEachSemester(semesters, courseRanks, courseStatus, courseMap)
{
    var genomes = {};

    semesters.array.forEach(semester => {
        var genomeOfThisSemester = [];
        var creditsTakenSoFar = 0;

        courseRanks.array.forEach(courseId => {
            if(!CourseAlreadyTaken(courseId, courseStatus)
                && PrerequisitesCorequisitesTaken(courseId, courseStatus, courseMap)
                && CourseCreditsFitInSemester(courseId, creditsTakenSoFar, semester, courseMap))
            {
                genomeOfThisSemester.push(courseId);
                courseStatus[courseId] = "In Progress";
                creditsTakenSoFar += courseMap[courseId].credits;
            }
        })

        genomes[semester.season + " " + semester.year] = genomeOfThisSemester;

        genomeOfThisSemester.array.forEach((courseId) => {
            courseStatus[courseId] = "Complete";
        });
    });

    return genomes;
}

function CourseAlreadyTaken(courseId, courseStatus)
{
    return courseStatus[courseId] === "Complete";
}

function CourseCreditsFitInSemester(courseId, creditsTaken, semester, courseMap)
{
    return semester.credits - creditsTaken >= courseMap[courseId].credits;
}
module.exports = selectGenomes;