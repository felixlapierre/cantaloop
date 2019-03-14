var expect = require('chai').expect;
var getAllCourses = require('../get-all-courses');

describe('getAllCourses', function() {
    it('should return the courses SOEN287, COMP232 from courses JSON object.', () => {
        //Arrange
        var filename = __dirname + "\\courses.json";

        //Act
        var courses = getAllCourses(filename);

        //Assert
        expect(courses).to.include.members(["SOEN287", "COMP232"]);
    });
});