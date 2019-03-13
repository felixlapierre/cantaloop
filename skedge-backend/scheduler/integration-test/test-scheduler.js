var expect = require('chai').expect;
var Scheduler = require('./../scheduler');
var fs = require('fs');

describe('createSchedules', () => {
    it('should place a single class on its own in the first semester', () => {
        //Arrange
        var catalog = JSON.parse(fs.readFileSync(__dirname + "./../test/courses.json")).courses;
        expect(catalog).not.to.be.undefined; //Quick sanity test to make sure file was loaded without errors

        var scheduler = new Scheduler(catalog)

        var someEmptyCourseRecord = [];
        var someCourseSequenceWithOneClass = ["COMP248"];
        var someSemesters = [
            {
                "season":"fall",
                "year":"2019",
                "credits":3,
                "numberOfCourses":3
            }
        ]

        var schedules = scheduler.GenerateSchedules(someEmptyCourseRecord, someCourseSequenceWithOneClass, someSemesters);
    })
})