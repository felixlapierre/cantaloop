var rankCourses = require('./rank-courses');
var Requisites = require("./requisites");

class CoursePlacer
{
    constructor(courseCatalog)
    {
        this.courseCatalog = courseCatalog;
    }

    /**
     * Selects the placement for each semester. Assumes start of Fall 2017
     * @param {*} courseRecord An array of strings representing the courses already taken
     * @param {*} courseSequence An array of strings representing the courses to be taken
     * @param {*} semesters An array containing objects with properties 'season' and 'year' indicating the sequence of semesters to be taken and their credits
     */
    placeCourses(courseRecord, courseSequence, semesters)
    {
        this.requisites = new Requisites(this.courseCatalog, courseRecord, courseSequence);
        this.requisites.AddMissingPrerequisitesAndCorequisites(courseSequence);

        var ranks = rankCourses(courseSequence, this.courseCatalog);

        return this.PlaceCoursesForEachSemester(semesters, ranks);
    }

    PlaceCoursesForEachSemester(semesters, courseRanks)
    {
        var placements = {};

        semesters.forEach(semester => {
            var placementOfThisSemester = [];
            var creditsTakenSoFar = 0;

            courseRanks.forEach(courseId => {
                if(this.ClassCanBeTaken(courseId, creditsTakenSoFar, semester))
                {
                    placementOfThisSemester.push(courseId);
                    this.requisites.SetCourseInProgress(courseId);
                    creditsTakenSoFar += this.courseCatalog[courseId].credits;
                }
            })

            placements[semester.season + " " + semester.year] = placementOfThisSemester;

            placementOfThisSemester.forEach((courseId) => {
                this.requisites.SetCourseComplete(courseId);
            });
        });

        return placements;
    }

    ClassCanBeTaken(courseId, creditsSoFar, semester)
    {
        return !this.requisites.IsCourseComplete(courseId)
            && this.requisites.ArePrereqsAndCoreqsTaken(courseId)
            && this.CourseCreditsFitInSemester(courseId, creditsSoFar, semester)
    }

    CourseCreditsFitInSemester(courseId, creditsTaken, semester)
    {
        return semester.credits - creditsTaken >= this.courseCatalog[courseId].credits;
    }
}


module.exports = CoursePlacer;