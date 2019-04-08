var expect = require('chai').expect;
var Scheduler = require('./../scheduler');
var fs = require('fs');

//One-time setup before all tests
var catalog = JSON.parse(fs.readFileSync(__dirname + "./../test/courses.json")).courses;
var scheduler = new Scheduler(catalog);

var twoSemesters = [
    {
        "season": "fall",
        "year":"2019",
        "credits":15,
        "numCourses":5
    },
    {
        "season": "winter",
        "year": "2020",
        "credits":15,
        "numCourses":5
    }
];

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
    it('should place a class in the first semester if its prerequisites are taken', () => {
        //Arrange
        var someCourse = "COMP248";
        var someCourseWithPrereq = "COMP249";

        var someCourseRecord = [someCourse];
        var someCourseSequenceWithPrerequisite = [someCourseWithPrereq];
        var someSemesters = twoSemesters;

        //Act
        var schedules = scheduler.GenerateSchedules(someCourseRecord, someCourseSequenceWithPrerequisite, someSemesters);

        //Assert
        var firstSemester = schedules[0];
        var secondSemester = schedules[1];

        firstSemester.schedules.forEach(schedule => {
            expect(schedule[someCourseWithPrereq]).to.not.be.undefined;
            expect(schedule[someCourse]).to.be.undefined;
        })
        expect(secondSemester.schedules).to.be.empty;
    })

    it('should place a class in the second semester if its prerequisite is not taken', () => {
        //Arrange
        var someCourseWithPrereq = "COMP249";
        var prerequisiteCourse = "COMP248";

        var someCourseRecord = [];
        var someCourseSequenceWithPrerequisite = [someCourseWithPrereq];
        var someSemesters = twoSemesters;

        //Act
        var schedules = scheduler.GenerateSchedules(someCourseRecord, someCourseSequenceWithPrerequisite, someSemesters);

        //Assert
        var firstSemester = schedules[0];
        var secondSemester = schedules[1];

        firstSemester.schedules.forEach(schedule => {
            expect(schedule[prerequisiteCourse]).to.not.be.undefined;
            expect(schedule[someCourseWithPrereq]).to.be.undefined;
        })
        secondSemester.schedules.forEach(schedule => {
            expect(schedule[prerequisiteCourse]).to.be.undefined;
            expect(schedule[someCourseWithPrereq]).to.not.be.undefined;
        });
    })
})