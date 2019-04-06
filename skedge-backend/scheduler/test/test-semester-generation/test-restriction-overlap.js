const expect = require('chai').expect;
const restrictionOverlap = require("../../semester-generation/restrictionOverlap.js");

describe('restrictionOverlap', function(){

    it('should return zero for class and restriction on different days', function(){
        // Arrange
        var someClass = { "time_start":"02:00","time_end":"04:00","days":"Tu"};
        var restriction = { "time_start":"02:00","time_end":"04:00","days":"Mo"};

        // Act
        var timeOverlap = restrictionOverlap(someClass, restriction)

        // Assert
        expect(timeOverlap).to.equal(0);
    });
    
    it('should return zero for class and restriction on the same day at separate times', function(){
        // Arrange
        var someClass = { "time_start":"02:00","time_end":"04:00","days":"Tu"};
        var restriction = { "time_start":"05:00","time_end":"08:00","days":"Tu"};

        // Act
        var timeOverlap = restrictionOverlap(someClass, restriction)

        // Assert
        expect(timeOverlap).to.equal(0);
    });

    it('should return the amo for non overlapping class and restriction', function(){
        // Arrange
        var someClass = { "time_start":"00:30","time_end":"03:00","days":"Tu"};
        var restriction = { "time_start":"00:30","time_end":"00:45","days":"Tu"};

        // Act
        var timeOverlap = restrictionOverlap(someClass, restriction)

        // Assert
        expect(timeOverlap).to.equal(15);
    });
    
});