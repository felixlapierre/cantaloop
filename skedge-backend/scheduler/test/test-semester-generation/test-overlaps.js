var expect = require('chai').expect;
var overlap = require("../../semester-generation/overlaps.js");

var classes = [];
classes[0] = { "time_start":"8:45","time_end":"10:00","days":"TuTh" };
classes[1] = { "time_start":"9:45","time_end":"11:00","days":"TuTh" };
classes[2] = { "time_start":"8:45","time_end":"10:00","days":"MoWe" };

describe('overlaps', function(){
    it('should assign a fitness value corresponding to full double overlap', function(){
        // arrange

        // act
        var overlapAmount = overlap(classes[0], classes[0]);

        // assert
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
    it('should assign a fitness value corresponding to no overlap', function(){
        // arrange

        // act
        var overlapAmount = overlap(classes[0], classes[2]);

        // assert
        expect(overlapAmount).to.satisfy(function(overlapAmount){
            return overlapAmount == 0;
        });

    });
});