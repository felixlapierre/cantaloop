var CoursePlacer = require("./course-placement");
var Requisites = require("./requisites");
var AddMissingRequisites = require("./add-missing-requisites");

class Scheduler
{
    constructor(courseCatalog)
    {
        this.catalog = courseCatalog;
    }

    GenerateSchedules(courseRecord, courseSequence, semesters)
    {
        var placements = this.GetPlacements(courseRecord, courseSequence, semesters);
    }

    GetPlacements(courseRecord, courseSequence, semesters)
    {
        var requisites = new Requisites(this.catalog, courseRecord, courseSequence);

        AddMissingRequisites(this.catalog, courseSequence, requisites);

        var placer = new CoursePlacer(this.catalog, requisites);

        return placer.placeCourses(courseRecord, courseSequence, semesters);
    }
}