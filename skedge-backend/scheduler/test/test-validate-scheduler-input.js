var expect = require('chai').expect;
var validator = require('./../validate-scheduler-input');

describe('ValidateParameterIsArrayOfCourseIds', () => {
    before(() => {
        someValidSemester = {
            year: 5,
            season: "fall",
            credits: 15,
            numCourses: 5,
            restrictions: []
        };
    })

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

describe('ValidateParameterIsArrayOfSemesters', () => {
    it('should produce an error when passed a semester with a non-number year', () => {
        //Arrange
        var someSemesterWithBadYear = someValidSemester;
        someSemesterWithBadYear.year = "5";

        //Act & Assert
        expect(() => validator.ValidateParameterIsArrayOfSemesters(someSemesterWithBadYear, "parameterName")).to.throw("SchedulerInputFormatException");
    })
})