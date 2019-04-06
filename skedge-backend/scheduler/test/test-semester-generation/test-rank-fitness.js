var expect = require('chai').expect;
var evaluateFitness = require("../../semester-generation/fitness.js").evaluateFitness;

var semester = [];
semester[0] = // pure single conflict
{
    "COMP346" : {
        "lecture" : { "time_start":"8:45","time_end":"10:00","days":"TuTh" },
        "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"We" },
        "lab" : { "time_start":"10:15","time_end":"11:30","days":"Mo" }
    },
    "SOEN341" : {
        "lecture" : { "time_start":"10:15","time_end":"11:30","days":"TuTh" },
        "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"Fr" } //conflict
    },
    "SOEN331" : {
        "lecture" : { "time_start":"8:45","time_end":"10:00","days":"MoWe" },
        "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"Fr" } //conflict
    }
};
semester[1] = // pure double conflict
{
    "COMP346" : {
        "lecture" : { "time_start":"8:45","time_end":"10:00","days":"TuTh" }, //conflict
        "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"We" },
        "lab" : { "time_start":"10:15","time_end":"11:30","days":"Mo" }
    },
    "SOEN341" : {
        "lecture" : { "time_start":"8:45","time_end":"10:00","days":"TuTh" }, //conflict
        "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"Fr" } 
    },
    "SOEN331" : {
        "lecture" : { "time_start":"8:45","time_end":"10:00","days":"MoWe" },
        "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"Mo" } 
    }
};
semester[2] = // partial single conflict
{
    "COMP346" : {
        "lecture" : { "time_start":"8:45","time_end":"10:00","days":"TuTh" },
        "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"We" },
        "lab" : { "time_start":"10:15","time_end":"11:30","days":"Mo" }
    },
    "SOEN341" : {
        "lecture" : { "time_start":"10:15","time_end":"11:30","days":"TuTh" },
        "tutorial" : { "time_start":"15:45","time_end":"17:00","days":"Fr" } //conflict
    },
    "SOEN331" : {
        "lecture" : { "time_start":"8:45","time_end":"10:00","days":"MoWe" },
        "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"Fr" } //conflict 
    }
};
semester[3] = // partial double conflict
{
    "COMP346" : {
        "lecture" : { "time_start":"8:45","time_end":"10:00","days":"TuTh" }, //conflict
        "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"We" },
        "lab" : { "time_start":"10:15","time_end":"11:30","days":"Mo" }
    },
    "SOEN341" : {
        "lecture" : { "time_start":"9:45","time_end":"10:15","days":"TuTh" },//conflict
        "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"Fr" } 
    },
    "SOEN331" : {
        "lecture" : { "time_start":"8:45","time_end":"10:00","days":"MoWe" },
        "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"Mo" } 
    }
};
semester[4] = // GOOD
{
    "COMP346" : {
        "lecture" : { "time_start":"8:45","time_end":"10:00","days":"TuTh" },
        "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"We" },
        "lab" : { "time_start":"10:15","time_end":"11:30","days":"Mo" }
    },
    "SOEN341" : {
        "lecture" : { "time_start":"10:15","time_end":"11:30","days":"TuTh" },
        "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"Fr" } 
    },
    "SOEN331" : {
        "lecture" : { "time_start":"8:45","time_end":"10:00","days":"MoWe" },
        "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"Mo" } 
    }
};

describe('rankFitness', function(){
    it('should set fitness value for semester without conflicts', function(){
        // arrange

        // act
        var fitnessRank = evaluateFitness(semester[4]);

        // assert
        expect(fitnessRank).to.satisfy(function(fitnessRank){
            return fitnessRank == 1440;
        });

    });

    it('should set fitness value for semester with pure single conflict', function(){
        // arrange

        // act
        var fitnessRank = evaluateFitness(semester[0]);

        // assert
        expect(fitnessRank).to.satisfy(function(fitnessRank){
            return fitnessRank == 1365;
        });

    });
    
    it('should set fitness value for semester with pure double conflict', function(){
        // arrange

        // act
        var fitnessRank = evaluateFitness(semester[1]);

        // assert
        expect(fitnessRank).to.satisfy(function(fitnessRank){
            return fitnessRank == 1290;
        });

    });

    it('should set fitness value for semester with partial single conflict', function(){
        // arrange
        // act
        var fitnessRank = evaluateFitness(semester[2]);

        // assert
        expect(fitnessRank).to.satisfy(function(fitnessRank){
            return fitnessRank == 1425;
        });

    });

    it('should set fitness value for semester with partial double conflict', function(){
        // arrange

        // act
        var fitnessRank = evaluateFitness(semester[3]);

        // assert
        expect(fitnessRank).to.satisfy(function(fitnessRank){
            return fitnessRank == 1410;
        });

    });

    it('should not crash when provided objects with properties other than lecture, lab, tutorial', () => {
        //arrange
        semesterCopy = JSON.parse(JSON.stringify(semester[4]));
        semesterCopy.COMP346.id = "5";

        //act
        var fitnessRank = evaluateFitness(semesterCopy);

        //assert
        expect(fitnessRank).to.equal(1440);
    })

});