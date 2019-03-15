var expect = require('chai').expect;
var Scheduler = require('./../scheduler');
var fs = require('fs');

//One-time setup before all tests
var catalog = JSON.parse(fs.readFileSync(__dirname + "./../test/courses.json")).courses;
var scheduler = new Scheduler(catalog);

describe('createSchedules', () => {
    it('should create an empty schedule when provided an empty course sequence', () => {
        //Arrange
        var someEmptyCourseRecord = [];
        var someEmptyCourseSequence = [];
        var someSemesters = [
            {
                "season": "fall",
                "year": "2019",
                "credits": 16,
                "numCourses": 5
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
                "numCourses": 5
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