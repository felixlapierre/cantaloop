class CoursePlacer
{
    constructor(courseCatalog, requisites)
    {
        this.courseCatalog = courseCatalog;
        this.requisites = requisites;
    }

    /**
     * Select which courses will be taken in which semesters
     * @param {Array<Semester>} semesters Semesters in which classes will be taken, sorted in chronological ascending order.
     * @param {Array<String>} courseRanks Course IDs to be taken, sorted by priority of prerequisite, corequisite
     */
    PlaceCourses(semesters, courseRanks)
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