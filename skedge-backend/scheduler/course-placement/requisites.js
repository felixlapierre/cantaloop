var Status = {
    Complete: "Complete",
    InProgress: "In Progress",
    Incomplete: "Incomplete"
}

class Requisites
{
    constructor(courseCatalog, courseRecord, courseSequence)
    {
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
        var prerequisites = this.catalog[courseId].prerequisites;
        var corequisites = this.catalog[courseId].corequisites;
        return this.CoursesAreFulfilledPrerequisites(prerequisites)
            && this.CoursesAreFulfilledCorequisites(corequisites);        
    }

    CoursesAreFulfilledPrerequisites(listOfCourses)
    {
        return listOfCourses.every(courseId => {
            return this.IsCourseIgnored(courseId)
                || this.IsCourseComplete(courseId);
        });
    }

    CoursesAreFulfilledCorequisites(listOfCourses)
    {
        return listOfCourses.every(courseId => {
            return this.IsCourseIgnored(courseId)
                || this.IsCourseComplete(courseId)
                || this.IsCourseInProgress(courseId);
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

    IsCourseIgnored(courseId)
    {
        return courseId.match(/(MATH|PHYS|BIOL|COEN)/);
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