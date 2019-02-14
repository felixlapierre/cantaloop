var rankCourses = require('rank-courses');
import Requisites from "./requisites";

class GenomeSelector
{
    constructor(courseCatalog)
    {
        this.courseCatalog = courseCatalog;
    }

    /**
     * Selects the genome for each semester. Assumes start of Fall 2017
     * @param {*} courseRecord An array of strings representing the courses already taken
     * @param {*} courseSequence An array of strings representing the courses to be taken
     * @param {*} semesters An array containing objects with properties 'season' and 'year' indicating the sequence of semesters to be taken and their credits
     */
    selectGenomes(courseRecord, courseSequence, semesters)
    {
        this.requisites = new Requisites(this.courseCatalog, courseRecord, courseSequence);
        this.requisites.AddMissingPrerequisitesCorequisitesToCourseSequence(courseSequence);

        var ranks = rankCourses(courseSequence, this.courseCatalog);

        return CreateGenomesForEachSemester(semesters, ranks);
    }

    CreateGenomesForEachSemester(semesters, courseRanks)
    {
        var genomes = {};

        semesters.array.forEach(semester => {
            var genomeOfThisSemester = [];
            var creditsTakenSoFar = 0;

            courseRanks.array.forEach(courseId => {
                if(this.ClassCanBeTaken(courseId, creditsTakenSoFar, semester))
                {
                    genomeOfThisSemester.push(courseId);
                    this.requisites.SetCourseInProgress(courseId);
                    creditsTakenSoFar += this.courseCatalog[courseId].credits;
                }
            })

            genomes[semester.season + " " + semester.year] = genomeOfThisSemester;

            genomeOfThisSemester.array.forEach((courseId) => {
                this.requisites.SetCourseComplete(courseId);
            });
        });

        return genomes;
    }

    ClassCanBeTaken(courseId, creditsSoFar, semester)
    {
        return !this.requisites.IsCourseComplete(courseId)
            && this.requisites.ArePrereqsAndCoreqsTaken(courseId)
            && CourseCreditsFitInSemester(courseId, creditsSoFar, semester)
    }

    CourseCreditsFitInSemester(courseId, creditsTaken, semester)
    {
        return semester.credits - creditsTaken >= this.courseCatalog[courseId].credits;
    }
}


module.exports = selectGenomes;