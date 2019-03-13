var CoursePlacer = require("./course-placement/course-placement");
var Requisites = require("./course-placement/requisites");
var AddMissingRequisites = require("./course-placement/add-missing-requisites");
var RankCourses = require("./course-placement/rank-courses");

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

        var schedules = this.GenerateSchedulesForSemesters(semesters, placements);

        return schedules;
    }

    GetPlacements(courseRecord, courseSequence, semesters)
    {
        var requisites = new Requisites(this.catalog, courseRecord, courseSequence);

        AddMissingRequisites(this.catalog, courseSequence, requisites);

        var ranks = RankCourses(courseSequence, this.catalog);

        var placer = new CoursePlacer(this.catalog, requisites);

        var placements = placer.PlaceCourses(semesters, ranks);

        return placements;
    }

    GenerateSchedulesForSemesters(semesters, placements)
    {
        var schedules = [];

        semesters.forEach(semester => {

            var placement = placements[semester.season + " " + semester.year];

            var sectionList = this.GetSectionList(placement, semester.season);

            var generation = InitialGeneration(placement, sectionList, rankingFunction, populationLimit);

            for(var i = 0; i < numberOfGenerations; i++)
            {
                generation = Generation(generation, rankingFunction, sectionList, populationLimit);
            }

            schedules.push({
                "year": semester.year,
                "season": semester.season,
                "credits": semester.credits,
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

module.exports = Scheduler;