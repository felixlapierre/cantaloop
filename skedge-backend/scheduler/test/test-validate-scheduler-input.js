var expect = require('chai').expect;
var validator = require('./../validate-scheduler-input');

describe('ValidateParameterIsArrayOfCourseIds', () => {
    it('should produce an error when passed a non-array course record', () => {
        //Arrange
        var someObject = {};

        //Act & Assert
        expect(() => validator.ValidateParameterIsArrayOfCourseIds(someObject, "parameterName")).to.throw("SchedulerInputFormatException");
    })

    it('should produce an error when passed a course record with a non-string in it', () => {
        //Arrange
        var someCourseRecordContainingNonString = ["COMP228",{}];

        //Act & Assert
        expect(() => validator.ValidateParameterIsArrayOfCourseIds(someCourseRecordContainingNonString, "parameterName")).to.throw("SchedulerInputFormatException");
    })

    it('should produce an error when passed a course record with a string that is not formatted as a course ID', () => {
        //Arrange
        var someCourseRecordContainingBadlyFormattedString = ["SomeStringThatIsNotACourseId"];

        //Act & Assert
        expect(() => validator.ValidateParameterIsArrayOfCourseIds(someCourseRecordContainingBadlyFormattedString, "parameterName")).to.throw("SchedulerInputFormatException");
    })
})
var someValidSemester;

describe('ValidateParameterIsArrayOfSemesters', () => {
    before(() => {
        someValidSemester = {
            year: 5,
            season: "fall",
            credits: 15,
            numCourses: 5,
            restrictions: []
        };
    });

    it('should produce no error when passed a valid semester object', () => {
        //Arrange
        var someSemesters = [someValidSemester];
        
        //Act & Assert
        validator.ValidateParameterIsArrayOfSemesters(someSemesters, "someSemesters");

        //No exception is thrown
    })
    it('should produce an error when passed a semester with a non-number year', () => {
        //Arrange
        var someSemesterWithBadYear = someValidSemester;
        someSemesterWithBadYear.year = "SomeNonNumberString";

        var someSemesters = [someSemesterWithBadYear];
        
        //Act & Assert
        expect(() => validator.ValidateParameterIsArrayOfSemesters(someSemesters, "someSemesters")).to.throw("SchedulerInputFormatException");
    })

    it('should produce an error when passed a semester with non-number credits', () => {
        //Arrange
        var someSemesterWithBadCredits = someValidSemester;
        someSemesterWithBadCredits.credits = "SomeNonNumberString";

        var someSemesters = [someSemesterWithBadCredits]

        //Act & Assert
        expect(() => validator.ValidateParameterIsArrayOfSemesters(someSemesters, "someSemesters")).to.throw("SchedulerInputFormatException");
    })

    it('should produce an error when passed a semester with non-number numCourses', () => {
        //Arrange
        var someSemesterWithBadNumCourses = someValidSemester;
        someSemesterWithBadNumCourses.numCourses = "SomeNonNumberString";

        var someSemesters = [someSemesterWithBadNumCourses];

        //Act & Assert
        expect(() => validator.ValidateParameterIsArrayOfSemesters(someSemesters, "someSemesters")).to.throw("SchedulerInputFormatException");
    })

    it('should produce an error when passed a semester with an season that isn\'t fall, winter or summer', () => {
        //Arrange
        var someSemesterWithBadSeason = someValidSemester;
        someSemesterWithBadSeason.season = "spring";

        var someSemesters = [someSemesterWithBadSeason];

        //Act & Assert
        expect(() => validator.ValidateParameterIsArrayOfSemesters(someSemesters, "someSemesters")).to.throw("SchedulerInputFormatException");
    })
})

describe('ValidateCourseIdsAreInCourseCatalog', () => {
    it('should produce no error when provided course IDs that are in the catalog', () => {
        //Arrange
        var someCatalog = {
            "COMP248": {},
            "COMP232": {},
        }
        var someCoursesInCatalog = ["COMP248", "COMP232"];

        //Act & Assert
        validator.ValidateCourseIdsAreInCourseCatalog(someCoursesInCatalog, someCatalog, "someCourses")

        //No exception is thrown
    })

    it('should produce an error when provided course IDs that are not in the catalog', () => {
        //Arrange
        var someCatalog = {
            "COMP248": {},
            "COMP232": {},
        }
        var someCoursesNotInCatalog = ["SOEN228", "ENGR213"];

        //Act & Assert
        expect(() => validator.ValidateCourseIdsAreInCourseCatalog(someCoursesNotInCatalog, someCatalog, "someCoursesNotInCatalog"))
            .to.throw("SchedulerInputFormatException");
    })
})