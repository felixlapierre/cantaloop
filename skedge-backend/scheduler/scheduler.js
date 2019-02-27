var CoursePlacer = require("./course-placement")
var 

class Scheduler
{
    constructor(courseCatalog)
    {
        this.catalog = courseCatalog;
    }

    GenerateSchedules(courseRecord, courseSequence, semesters)
    {
        var placer = new CoursePlacer(this.catalog);

        var placements = placer.placeCourses(courseRecord, courseSequence, semesters);
    }
}