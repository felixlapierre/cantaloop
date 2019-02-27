function AddMissingPrerequisitesAndCorequisites(courseCatalog, courseSequence, requisites)
{
    //Regular for loop since course sequence will be extended
    for(var i = 0; i < courseSequence.length; i++)
    {
        courseCatalog[courseSequence[i]].prerequisites.forEach(courseId => {
            if(requisites.status[courseId] === undefined)
            {
                requisites.status[courseId] = "Incomplete";
                courseSequence.push(courseId);
            }
        });

        courseCatalog[courseSequence[i]].corequisites.forEach(courseId => {
            if(requisites.status[courseId] === undefined)
            {
                requisites.status[courseId] = "Incomplete";
                courseSequence.push(courseId);
            }            
        });
    }
}

module.exports = AddMissingPrerequisitesAndCorequisites;