var expect = require('chai').expect;
var Scheduler = require('./../scheduler');
var fs = require('fs');

//One-time setup before all tests
var catalog = JSON.parse(fs.readFileSync(__dirname + "./../test/courses.json")).courses;
var scheduler = new Scheduler(catalog);

describe('createSchedules', () => {
    it('should produce an error when passed a non-array course record', () => {
        //Arrange
        var someObject = {};

        //Act & Assert
        expect(() => scheduler.GenerateSchedules(someObject, undefined, undefined)).to.throw("SchedulerInputFormatException");
    })

    it('should produce an error when passed a course record with a non-string in it', () => {
        //Arrange
        var someCourseRecordContainingNonString = ["COMP228",{}];

        //Act & Assert
        expect(() => scheduler.GenerateSchedules(someCourseRecordContainingNonString, undefined, undefined)).to.throw("SchedulerInputFormatException");
    })

    it('should produce an error when passed a course record with a string that is not formatted as a course ID', () => {
        //Arrange
        var someCourseRecordContainingNonString = ["SomeStringThatIsNotACourseId",{}];

        //Act & Assert
        expect(() => scheduler.GenerateSchedules(someCourseRecordContainingNonString, undefined, undefined)).to.throw("SchedulerInputFormatException");
    })

    it('should produce an error when passed a non-array course sequence', () => {
        //Arrange
        var someCourseRecord = [];
        var someObject = {};

        //Act & Assert
        expect(() => scheduler.GenerateSchedules(someCourseRecord, someObject, undefined)).to.throw("SchedulerInputFormatException");
    })

    it('should produce an error when passed a course sequence with a non-string in it', () => {
        //Arrange
        var someCourseRecord = [];
        var someCourseSequenceContainingNonString = ["COMP228",{}];

        //Act & Assert
        expect(() => scheduler.GenerateSchedules(someCourseRecord, someCourseSequenceContainingNonString, undefined)).to.throw("SchedulerInputFormatException");
    })

    it('should produce an error when passed a course sequence with a string that is not formatted as a course ID', () => {
        //Arrange
        var someCourseRecord = [];
        var someCourseSequenceContainingNonString = ["SomeStringThatIsNotACourseId",{}];

        //Act & Assert
        expect(() => scheduler.GenerateSchedules(someCourseRecord, someCourseSequenceContainingNonString, undefined)).to.throw("SchedulerInputFormatException");
    })

    it('should create an empty schedule when provided an empty course sequence', () => {
        //Arrange
        var someEmptyCourseRecord = [];
        var someEmptyCourseSequence = [];
        var someSemesters = [
            {
                "season": "fall",
                "year": "2019",
                "credits": 16,
                "numberOfCourses": 5
            }
        ]

        //Act
        var schedules = scheduler.GenerateSchedules(someEmptyCourseRecord, someEmptyCourseSequence, someSemesters);

        //Assert
        schedules.forEach(semester => {
            expect(semester.schedules).to.be.empty;
        });
    })
    it('should place a single class on its own in the first semester', () => {
        //Arrange
        var someClass = "COMP248";

        var someEmptyCourseRecord = [];
        var someCourseSequenceWithOneClass = [someClass];
        var someSemesters = [
            {
                "season":"fall",
                "year":"2019",
                "credits": 16,
                "numberOfCourses": 5
            }
        ]

        //Act
        var schedules = scheduler.GenerateSchedules(someEmptyCourseRecord, someCourseSequenceWithOneClass, someSemesters);

        //Assert
        var firstSemester = schedules[0];
        firstSemester.schedules.forEach(schedule => {
            expect(schedule[someClass]).to.not.be.undefined;
        })
    })
})