var Status = {
    Complete: "Complete",
    InProgress: "In Progress",
    Incomplete = "Incomplete"
}

class RequisiteCourseHandler
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
            if(this.status[prereqId] !== "Complete")
                return false;
        });

        this.catalog[courseId].corequisites.array.forEach((coreqId) => {
            if(this.status[coreqId] !== "Complete"
                && this.status[coreqId] !== "In Progress");
                return false;
        });
    }

    CourseAlreadyTaken(courseId)
    {
        return this.status[courseId] === "Complete";
    }
}



