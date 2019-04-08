var CourseIgnored = require("./ignored-courses");

function AddMissingPrerequisitesAndCorequisites(courseCatalog, courseSequence, requisites)
{
    //Regular for loop since course sequence will be extended
    for(var i = 0; i < courseSequence.length; i++)
    {
        var courseId = courseSequence[i];
        courseSequence.push(...GetMissingPrerequisites(courseId, courseCatalog, requisites));
        courseSequence.push(...GetMissingCorequisites(courseId, courseCatalog, requisites));
    }
}

function GetMissingPrerequisites(courseId, courseCatalog, requisites)
{
    var courses = courseCatalog[courseId].prerequisites;
    return GetAllMissingCoursesFrom(courses, requisites);
}

function GetMissingCorequisites(courseId, courseCatalog, requisites)
{
    var courses = courseCatalog[courseId].corequisites;
    return GetAllMissingCoursesFrom(courses, requisites);
}

function GetAllMissingCoursesFrom(courses, requisites)
{
    var missingCourses = [];

    courses.forEach(courseId => {
        if(requisites.status[courseId] === undefined && !CourseIgnored(courseId))
        {
            requisites.status[courseId] = "Incomplete";
            missingCourses.push(courseId);
        }
    });

    return missingCourses;
}

module.exports = AddMissingPrerequisitesAndCorequisites;