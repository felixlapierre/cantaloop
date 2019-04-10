const expect = require('chai').expect;
const restrictionOverlap = require("../../semester-generation/restrictionOverlap.js");

describe('restrictionOverlap', function(){

    it('should return zero for class and restriction on different days', function(){
        // Arrange
        var someClass = 
            { "time_start":"02:00","time_end":"04:00","days":"Tu"};
        var someRestrictionHappeningOnADifferentDay = 
            { "time_start":"02:00","time_end":"04:00","days":"Mo"};

        // Act
        var timeOverlap = restrictionOverlap(someClass, someRestrictionHappeningOnADifferentDay)

        // Assert
        expect(timeOverlap).to.equal(0);
    });
    
    it('should return zero for class and restriction on the same day at separate times', function(){
        // Arrange
        var someClass = 
            { "time_start":"02:00","time_end":"04:00","days":"Tu"};
        var someRestrictionHappeningOnTheSameDayAtADifferentTime = 
            { "time_start":"05:00","time_end":"08:00","days":"Tu"};

        // Act
        var timeOverlap = restrictionOverlap(someClass, someRestrictionHappeningOnTheSameDayAtADifferentTime)

        // Assert
        expect(timeOverlap).to.equal(0);
    });

    it('should return the length of the restriction if a class overlaps entirely with the restriction', function(){
        // Arrange
        var someClass = 
            { "time_start":"00:30","time_end":"03:00","days":"Tu"};
        var someRestrictionHappeningDuringTheClassTime = 
            { "time_start":"00:30","time_end":"00:45","days":"Tu"};

        // Act
        var timeOverlap = restrictionOverlap(someClass, someRestrictionHappeningDuringTheClassTime)

        // Assert
        expect(timeOverlap).to.equal(15);
    });

    it('should return double the length of the restriction if a class overlaps entirely with the restriction on two days', function(){
        // Arrange
        var someClass = 
            { "time_start":"00:30","time_end":"03:00","days":"TuTh"};
        var someRestrictionHappeningDuringTheClassTimeAcrossTwoDays = 
        { "time_start":"00:30","time_end":"00:45","days":"TuTh"};

        // Act
        var timeOverlap = restrictionOverlap(someClass, someRestrictionHappeningDuringTheClassTimeAcrossTwoDays)

        // Assert
        expect(timeOverlap).to.equal(30);
    });
    
    it('should return a value proportional to the amount of overlap onto the restriction', function(){
        
        // Arrange
        var someClass = 
            { "time_start":"00:30","time_end":"03:00","days":"Tu"};
        var someRestrictionWithPartialOverlap = 
            { "time_start":"00:00","time_end":"01:00","days":"Tu"};

        // Act
        var timeOverlap = restrictionOverlap(someClass, someRestrictionWithPartialOverlap)

        // Assert
        expect(timeOverlap).to.equal(15);
    });

    it('should return double the value proportional to the amount of overlap onto the restriction ', function(){
        
        // Arrange
        var someClass = 
            { "time_start":"00:30","time_end":"03:00","days":"TuTh"};
        var someRestrictionWithPartialOverlapAcrossTwoDays = 
            { "time_start":"00:00","time_end":"01:00","days":"TuTh"};

        // Act
        var timeOverlap = restrictionOverlap(someClass, someRestrictionWithPartialOverlapAcrossTwoDays)

        // Assert
        expect(timeOverlap).to.equal(30);
    });

});