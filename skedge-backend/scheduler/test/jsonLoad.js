var expect = require('chai').expect;
var getAllCourses = require('../getAllCourses');

describe('getAllCourses', function() {
    it('should return the courses ENGR371, SOEN331, SOEN341 from courses JSON object.', () => {
        //Arrange
        var filename = __dirname + "\\courses.json";

        //Act
        var courses = getAllCourses(filename);
        console.log(courses);
        //Assert
        expect(courses).to.include.members(["ENGR371", "SOEN331", "SOEN341"]);
    });
});