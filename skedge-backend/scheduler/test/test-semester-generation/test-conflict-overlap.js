const expect = require('chai').expect;
const conflictOverlap = require("../../semester-generation/conflictOverlap.js");

describe('conflictOverlap', function(){

    it('should return zero for two classes happening on different days', function(){
        // Arrange
        var someClass = { "time_start":"02:00","time_end":"04:00","days":"Tu"};
        var someClassHappeningOnAnotherDay = { "time_start":"02:00","time_end":"04:00","days":"Mo"};

        // Act
        var overlap = conflictOverlap(someClass, someClassHappeningOnAnotherDay);

        // Assert
        expect(overlap).to.equal(0);
    });

    it('should return zero for two classes happening on the same day at separate times', function(){
        // Arrange
        var someClass = { "time_start":"02:00","time_end":"04:00","days":"Tu"};
        var someClassOnTheSameDayAtASeparateTime = { "time_start":"07:00","time_end":"09:00","days":"Tu"};

        // Act
        var overlapTime = conflictOverlap(someClass, someClassOnTheSameDayAtASeparateTime);

        // Assert
        expect(overlapTime).to.equal(0);
    });

    it('should return the amount of overlapping time for two classes happening in the same slot with partial overlap across one day', function(){
        // Arrange
        var someClass = { "time_start":"02:00","time_end":"08:00","days":"Tu"};
        var someClassOnTheSameDayAtASeparateTime = { "time_start":"07:00","time_end":"09:00","days":"Tu"};

        // Act
        var overlapTime = conflictOverlap(someClass, someClassOnTheSameDayAtASeparateTime);

        // Assert
        expect(overlapTime).to.equal(60);
    });
    it('should return the amount of overlapping time for two classes happening in the same slot with partial overlap across two days', function(){
        // Arrange
        var someClass = { "time_start":"02:00","time_end":"08:00","days":"TuTh"};
        var someClassOnTheSameDayAtASeparateTime = { "time_start":"07:00","time_end":"09:00","days":"TuTh"};

        // Act
        var overlapTime = conflictOverlap(someClass, someClassOnTheSameDayAtASeparateTime);

        // Assert
        expect(overlapTime).to.equal(60);
    });
    
    it('should return the amount of overlapping time for two classes happening in the same slot across one day', function(){
        // Arrange
        var someClass = { "time_start":"07:00","time_end":"09:00","days":"Tu"};
        var someClassOnTheSameDayAtASeparateTime = { "time_start":"07:00","time_end":"09:00","days":"Tu"};

        // Act
        var overlapTime = conflictOverlap(someClass, someClassOnTheSameDayAtASeparateTime);

        // Assert
        expect(overlapTime).to.equal(120);
    });

    it('should return the amount of overlapping time for two classes happening in the same slot across two days', function(){
        // Arrange
        var someClass = { "time_start":"07:00","time_end":"08:00","days":"TuTh"};
        var someClassOnTheSameDayAtASeparateTime = { "time_start":"07:00","time_end":"08:00","days":"TuTh"};

        // Act
        var overlapTime = conflictOverlap(someClass, someClassOnTheSameDayAtASeparateTime);

        // Assert
        expect(overlapTime).to.equal(120);
    });


});