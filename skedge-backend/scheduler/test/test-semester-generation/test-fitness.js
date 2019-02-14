var expect = require('chai').expect;
var fitness = require("../../semester-generation/fitness.js");
var semester = [];
semester[0] = // pure single conflict
{
    "COMP346" : {
        "LEC" : { "time_start":"8:45","time_end":"10:00","days":"TuTh" },
        "TUT" : { "time_start":"14:45","time_end":"16:00","days":"We" },
        "LAB" : { "time_start":"10:15","time_end":"11:30","days":"Mo" }
    },
    "SOEN341" : {
        "LEC" : { "time_start":"10:15","time_end":"11:30","days":"TuTh" },
        "TUT" : { "time_start":"14:45","time_end":"16:00","days":"Fr" } //conflict
    },
    "SOEN331" : {
        "LEC" : { "time_start":"8:45","time_end":"10:00","days":"MoWe" },
        "TUT" : { "time_start":"14:45","time_end":"16:00","days":"Fr" } //conflict
    }
}
semester[1] = // pure double conflict
{
    "COMP346" : {
        "LEC" : { "time_start":"8:45","time_end":"10:00","days":"TuTh" }, //conflict
        "TUT" : { "time_start":"14:45","time_end":"16:00","days":"We" },
        "LAB" : { "time_start":"10:15","time_end":"11:30","days":"Mo" }
    },
    "SOEN341" : {
        "LEC" : { "time_start":"8:45","time_end":"10:00","days":"TuTh" }, //conflict
        "TUT" : { "time_start":"14:45","time_end":"16:00","days":"Fr" } 
    },
    "SOEN331" : {
        "LEC" : { "time_start":"8:45","time_end":"10:00","days":"MoWe" },
        "TUT" : { "time_start":"14:45","time_end":"16:00","days":"Mo" } 
    }
}
semester[2] = // partial single conflict
{
    "COMP346" : {
        "LEC" : { "time_start":"8:45","time_end":"10:00","days":"TuTh" },
        "TUT" : { "time_start":"14:45","time_end":"16:00","days":"We" },
        "LAB" : { "time_start":"10:15","time_end":"11:30","days":"Mo" }
    },
    "SOEN341" : {
        "LEC" : { "time_start":"10:15","time_end":"11:30","days":"TuTh" },
        "TUT" : { "time_start":"15:45","time_end":"17:00","days":"Fr" } //conflict
    },
    "SOEN331" : {
        "LEC" : { "time_start":"8:45","time_end":"10:00","days":"MoWe" },
        "TUT" : { "time_start":"14:45","time_end":"16:00","days":"Fr" } //conflict 
    }
}
semester[3] = // partial double conflict
{
    "COMP346" : {
        "LEC" : { "time_start":"8:45","time_end":"10:00","days":"TuTh" }, //conflict
        "TUT" : { "time_start":"14:45","time_end":"16:00","days":"We" },
        "LAB" : { "time_start":"10:15","time_end":"11:30","days":"Mo" }
    },
    "SOEN341" : {
        "LEC" : { "time_start":"9:45","time_end":"10:15","days":"TuTh" },//conflict
        "TUT" : { "time_start":"14:45","time_end":"16:00","days":"Fr" } 
    },
    "SOEN331" : {
        "LEC" : { "time_start":"8:45","time_end":"10:00","days":"MoWe" },
        "TUT" : { "time_start":"14:45","time_end":"16:00","days":"Mo" } 
    }
}
semester[4] = // GOOD
{
    "COMP346" : {
        "LEC" : { "time_start":"8:45","time_end":"10:00","days":"TuTh" },
        "TUT" : { "time_start":"14:45","time_end":"16:00","days":"We" },
        "LAB" : { "time_start":"10:15","time_end":"11:30","days":"Mo" }
    },
    "SOEN341" : {
        "LEC" : { "time_start":"10:15","time_end":"11:30","days":"TuTh" },
        "TUT" : { "time_start":"14:45","time_end":"16:00","days":"Fr" } 
    },
    "SOEN331" : {
        "LEC" : { "time_start":"8:45","time_end":"10:00","days":"MoWe" },
        "TUT" : { "time_start":"14:45","time_end":"16:00","days":"Mo" } 
    }
}

describe('rankFitness', function(){
    it('should set fitness value for semester without conflicts', function(){
        // arrange

        // act
        var fitnessRank = fitness(semester[4]);

        // assert
        expect(fitnessRank).to.satisfy(function(fitnessRank){
            return fitnessRank == 1440;
        });

    });

    it('should set fitness value for semester with pure single conflict', function(){
        // arrange

        // act
        var fitnessRank = fitness(semester[0]);

        // assert
        expect(fitnessRank).to.satisfy(function(fitnessRank){
            return fitnessRank == 1365;
        });

    });
    
    it('should set fitness value for semester with pure double conflict', function(){
        // arrange

        // act
        var fitnessRank = fitness(semester[1]);

        // assert
        expect(fitnessRank).to.satisfy(function(fitnessRank){
            return fitnessRank == 1290;
        });

    });

    it('should set fitness value for semester with partial single conflict', function(){
        // arrange
        // act
        var fitnessRank = fitness(semester[2]);

        // assert
        expect(fitnessRank).to.satisfy(function(fitnessRank){
            return fitnessRank == 1425;
        });

    });

    it('should set fitness value for semester with partial double conflict', function(){
        // arrange

        // act
        var fitnessRank = fitness(semester[3]);

        // assert
        expect(fitnessRank).to.satisfy(function(fitnessRank){
            return fitnessRank == 1410;
        });

    });

});