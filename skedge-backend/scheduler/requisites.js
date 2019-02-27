var Status = {
    Complete: "Complete",
    InProgress: "In Progress",
    Incomplete: "Incomplete"
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
        courseList.forEach(courseId => {
            this.status[courseId] = newStatus;
        });
    }
    
    ArePrereqsAndCoreqsTaken(courseId)
    {
        //Return false as soon as an untaken prerequisite or corequisite is found
        if(!this.catalog[courseId].prerequisites.every(prereqId => {
            return this.IsCourseComplete(prereqId);
        }))
            return false;

        if(!this.catalog[courseId].corequisites.every(coreqId => {
            return this.IsCourseComplete(coreqId) || this.IsCourseInProgress(coreqId);
        }))
            return false;

        return true;
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

module.exports = Requisites;