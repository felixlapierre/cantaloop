var CoursePlacer = require("./course-placement/course-placement");
var Requisites = require("./course-placement/requisites");
var AddMissingRequisites = require("./course-placement/add-missing-requisites");
var RankCourses = require("./course-placement/rank-courses");

var Generation = require("./semester-generation/generation").generation;
var InitialGeneration = require("./semester-generation/generation").initalGeneration;
var TimeRestrictionFitness = require("./semester-generation/fitnessFunctions").TimeRestrictionFitness;
var CourseConflictFitness = require("./semester-generation/fitnessFunctions").CourseConflictFitness;
var validator = require("./validate-scheduler-input");

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
        this.ValidateInput(courseRecord, courseSequence, semesters);

        var placements = this.GetPlacements(courseRecord, courseSequence, semesters);

        var schedules = this.GenerateSchedulesForSemesters(semesters, placements);

        return schedules;
    }

    ValidateInput(courseRecord, courseSequence, semesters)
    {
        validator.ValidateParameterIsArrayOfCourseIds(courseRecord, "courseRecord");
        validator.ValidateCourseIdsAreInCourseCatalog(courseRecord, this.catalog, "courseRecord");

        validator.ValidateParameterIsArrayOfCourseIds(courseSequence, "courseSequence");
        validator.ValidateCourseIdsAreInCourseCatalog(courseSequence, this.catalog, "courseSequence");
        
        validator.ValidateParameterIsArrayOfSemesters(semesters, "semesters");
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
        var allSchedules = [];

        semesters.forEach(semester => {

            var currentSemesterSchedules = [];

            var placement = placements[semester.season + " " + semester.year];

            var fitnessFunctions = [ new CourseConflictFitness(), new TimeRestrictionFitness(semester.restrictions)];

            if(placement.length != 0)
            {
                var sectionList = this.GetSectionList(placement, semester.season);

                var generation = InitialGeneration(placement, sectionList, fitnessFunctions, populationLimit);

                for(var i = 0; i < numberOfGenerations; i++)
                {
                    generation = Generation(generation, fitnessFunctions, sectionList, populationLimit);
                }

                generation.forEach(individual => {
                    currentSemesterSchedules.push(individual.semester);
                })
            }

            allSchedules.push({
                "year": semester.year,
                "season": semester.season,
                "credits": semester.credits,
                "schedules": currentSemesterSchedules
            });
        });

        return allSchedules;
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