function AddMissingPrerequisitesAndCorequisites(courseCatalog, courseSequence, requisites)
{
    //Regular for loop since course sequence will be extended
    console.log(courseSequence);
    for(var i = 0; i < courseSequence.length; i++)
    {
        var courseId = courseSequence[i];
        courseSequence.push(...AddMissingPrerequisites(courseId, courseCatalog, requisites));
        courseSequence.push(...AddMissingCorequisites(courseId, courseCatalog, requisites));
    }
}

function AddMissingPrerequisites(courseId, courseCatalog, requisites)
{
    var courses = courseCatalog[courseId].prerequisites;
    return AddAllMissingCoursesFrom(courses, requisites);
}

function AddMissingCorequisites(courseId, courseCatalog, requisites)
{
    var courses = courseCatalog[courseId].corequisites;
    return AddAllMissingCoursesFrom(courses, requisites);
}

function AddAllMissingCoursesFrom(courses, requisites)
{
    var missingCourses = [];
    
    courses.forEach(courseId => {
        if(requisites.status[courseId] === undefined)
        {
            requisites.status[courseId] = "Incomplete";
            missingCourses.push(courseId);
        }
    });

    return missingCourses;
}

module.exports = AddMissingPrerequisitesAndCorequisites;