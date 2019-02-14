var rankCourses = require('rank-courses');

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
        //Status indicates, for every class, if student has taken, is taking, or will take (upcoming) class.
        var courseStatus = {};


        AddMissingPrerequisitesCorequisitesToCourseSequence(courseSequence, this.courseCatalog, courseStatus);

        var ranks = rankCourses(courseSequence, this.courseCatalog);

        return CreateGenomesForEachSemester(semesters, ranks, courseStatus, this.courseCatalog);
    }

    CreateGenomesForEachSemester(semesters, courseRanks, courseStatus)
    {
        var genomes = {};

        semesters.array.forEach(semester => {
            var genomeOfThisSemester = [];
            var creditsTakenSoFar = 0;

            courseRanks.array.forEach(courseId => {
                if(!CourseAlreadyTaken(courseId, courseStatus)
                    && PrerequisitesCorequisitesTaken(courseId, courseStatus)
                    && CourseCreditsFitInSemester(courseId, creditsTakenSoFar, semester))
                {
                    genomeOfThisSemester.push(courseId);
                    courseStatus[courseId] = "In Progress";
                    creditsTakenSoFar += this.courseCatalog[courseId].credits;
                }
            })

            genomes[semester.season + " " + semester.year] = genomeOfThisSemester;

            genomeOfThisSemester.array.forEach((courseId) => {
                courseStatus[courseId] = "Complete";
            });
        });

        return genomes;
    }

    CourseAlreadyTaken(courseId, courseStatus)
    {
        return courseStatus[courseId] === "Complete";
    }

    CourseCreditsFitInSemester(courseId, creditsTaken, semester)
    {
        return semester.credits - creditsTaken >= this.courseCatalog[courseId].credits;
    }
}


module.exports = selectGenomes;