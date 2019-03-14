var expect = require('chai').expect;
var overlap = require("../../semester-generation/overlaps.js");

var classes = [];
classes[0] = { "time_start":"8:45", "time_end":"10:00","days":"TuTh" }; // base double
classes[1] = { "time_start":"9:45", "time_end":"11:00","days":"TuTh" }; // partial double
classes[2] = { "time_start":"8:45", "time_end":"10:00","days":"MoWe" }; // none
classes[3] = { "time_start":"8:45", "time_end":"10:00","days":"Tu" };   // base single
classes[4] = { "time_start":"9:45", "time_end":"11:00","days":"Tu" };   // partial single
classes[5] = { "time_start":"0:00", "time_end":"00:00","days":"TBD" };  // online
classes[6] = { "time_start":"10:15","time_end":"11:30","days":"Tu" };   // single same day no

describe('overlaps', function() {

    it('should assign no value for online course overlap', function(){
        // Arrange
        var someClass = classes[0];
        var someClassThatIsOnline = classes[5];

        // Act
        var overlapAmount = overlap(someClass, someClassThatIsOnline);

        // Assert
        expect(overlapAmount).to.equal(0);
    });

    it('should assign no value for classes happening on different day', function(){
        // Arrange

        // Act
        var overlapAmount = overlap(classes[0], classes[2]);

        // Assert
        expect(overlapAmount).to.satisfy(function(overlapAmount){
            return overlapAmount == 0;
        });
    });

    it('should assign no value for online course overlap', function(){
        // Arrange

        // Act
        var overlapAmount = overlap(classes[3], classes[6]);

        // Assert
        expect(overlapAmount).to.satisfy(function(overlapAmount){
            return overlapAmount == 0;
        });
    });

    it('should assign a fitness value corresponding to full double overlap', function(){
        // Arrange

        // Act
        var overlapAmount = overlap(classes[0], classes[0]);

        // Assert
        expect(overlapAmount).to.satisfy(function(overlapAmount){
            return overlapAmount > 60;
        });
    });

    it('should assign a fitness value corresponding to partial double overlap', function(){
        // arrange

        // act
        var overlapAmount = overlap(classes[0], classes[1]);

        // assert
        expect(overlapAmount).to.satisfy(function(overlapAmount){
            return overlapAmount > 0;
        });
    });

    // full single
    it('should assign a fitness value corresponding to full single overlap', function(){
        // arrange

        // act
        var overlapAmount = overlap(classes[3], classes[3]);

        // assert
        expect(overlapAmount).to.satisfy(function(overlapAmount){
            return overlapAmount == 75;
        });

    });
    // partial single
    it('should assign a fitness value corresponding to partial single overlap', function(){
        // arrange

        // act
        var overlapAmount = overlap(classes[3], classes[4]);

        // assert
        expect(overlapAmount).to.satisfy(function(overlapAmount){
            return overlapAmount == 15;
        });
    });
});