var CoursePlacer = require("./course-placement/course-placement");
var Requisites = require("./course-placement/requisites");
var AddMissingRequisites = require("./course-placement/add-missing-requisites");

var Generation = require("./semester-generation/generation").generation;
var InitialGeneration = require("./semester-generation/generation").initalGeneration;
var rankingFunction = require("./semester-generation/fitness").rankGeneration;

const populationLimit = 20;
const numberOfGenerations = 100;

class Scheduler
{
    constructor(courseCatalog)
    {
        this.catalog = courseCatalog;
    }

    GenerateSchedules(courseRecord, courseSequence, semesters)
    {
        var placements = this.GetPlacements(courseRecord, courseSequence, semesters);

        var schedules = GenerateSchedulesFromGenerations(placements);

        return schedules;
    }

    GetPlacements(courseRecord, courseSequence, semesters)
    {
        var requisites = new Requisites(this.catalog, courseRecord, courseSequence);

        AddMissingRequisites(this.catalog, courseSequence, requisites);

        var placer = new CoursePlacer(this.catalog, requisites);

        return placer.placeCourses(courseRecord, courseSequence, semesters);
    }

    GenerateSchedulesForSemesters(semesters, placements)
    {
        var schedules = [];

        semesters.forEach(semester => {

            var placement = placements[semester.season + " " + semester.year];

            var sectionList = GetSectionList(placement, semester.season);

            var generation = InitialGeneration(placement, sectionList, rankingFunction, populationLimit);

            for(var i = 0; i < numberOfGenerations; i++)
            {
                generation = Generation(generation, rankingFunction, sectionList, populationLimit);
            }

            schedules.push({
                "year": semester.year,
                "season": semester.season,
                "schedules": generation
            });
        });

        return schedules;
    }

    GetSectionList(courses, season)
    {
        var sectionList = {};

        courses.forEach(courseId => {
            sectionList[courseId] = this.catalog[courseId][season];
        })

        return sectionList;
    }
}