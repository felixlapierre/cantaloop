var Status = {
    Complete: "Complete",
    InProgress: "In Progress",
    Incomplete = "Incomplete"
}

class Requisites
{
    constructor(courseCatalog, courseRecord, courseSequence)
    {
        //Status holds the status of each course
        this.status = {};
        this.catalog = courseCatalog;

        this.SetStatusesOfCourses(courseRecord, Status.Complete);
        this.SetStatusesOfCourses(courseSequence, Status.Incomplete);
    }

    SetStatusesOfCourses(courseList, newStatus)
    {
        courseList.array.forEach(courseId => {
            this.status[courseId] = newStatus;
        });
    }

    AddMissingPrerequisitesAndCorequisites(courseSequence)
    {
        //Regular for loop since course sequence will be extended
        for(var i = 0; i < courseSequence.length; i++)
        {
            this.catalog[courseSequence[i]].prerequisites.array.forEach(courseId => {
                if(status[courseId] === undefined)
                {
                    status[courseId] = "Incomplete";
                    courseSequence.push(courseId);
                }
            });

            this.catalog[courseSequence[i]].corequisites.array.forEach(courseId => {
                if(status[courseId] === undefined)
                {
                    status[courseId] = "Incomplete";
                    courseSequence.push(courseId);
                }            
            });
        }
    }

    CoursePrereqsAndCoreqsTaken(courseId)
    {
        //Return false as soon as an untaken prerequisite or corequisite is found
        this.catalog[courseId].prerequisites.array.forEach((prereqId) => {
            if(!IsCourseComplete(courseId))
                return false;
        });

        this.catalog[courseId].corequisites.array.forEach((coreqId) => {
            if(!IsCourseComplete(courseId)
                && !IsCourseInProgress(courseId));
                return false;
        });
    }

    IsCourseComplete(courseId)
    {
        return this.status[courseId] === Status.Complete;
    }

    IsCourseInProgress(courseId)
    {
        return this.status[courseId] === Status.InProgress;
    }

    SetCourseInProgress(courseId)
    {
        this.status[courseId] = Status.InProgress;
    }

    SetCourseComplete(courseId)
    {
        this.status[courseId] = Status.Complete;
    }
}



