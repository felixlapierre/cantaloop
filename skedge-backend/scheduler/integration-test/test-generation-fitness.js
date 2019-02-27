var expect = require('chai').expect;
var individual = require("../semester-generation/individual.js");
var generation = require("../semester-generation/generation.js");
var rankGeneration = require("../semester-generation/fitness.js").rankGeneration;



describe( 'rankMultigenerationFitness', function(){
    it('should create a descendant with a better average fitness than the parent using rankGeneration', function()
    {
        // arrange
        var sectionList = 
        {
            "COMP346" : [
                { // A
                "LEC" : { "code":"A", "time_start":"8:45","time_end":"10:00","days":"TuTh" },
                "TUT" : { "code":"A", "time_start":"14:45","time_end":"16:00","days":"We" },
                "LAB" : { "code":"A", "time_start":"10:15","time_end":"11:30","days":"Mo" }
                },
                { //A2
                    "LEC" : { "code":"A2", "time_start":"8:45","time_end":"10:00","days":"TuTh" }, //conflict
                    "TUT" : { "code":"A", "time_start":"14:45","time_end":"16:00","days":"We" },
                    "LAB" : { "code":"A", "time_start":"10:15","time_end":"11:30","days":"Mo" }
                },
                { // A4
                    "LEC" : { "code":"A4", "time_start":"8:45","time_end":"10:00","days":"TuTh" }, //conflict
                    "TUT" : { "code":"A", "time_start":"14:45","time_end":"16:00","days":"We" },
                    "LAB" : { "code":"A", "time_start":"10:15","time_end":"11:30","days":"Mo" }
                },],
            "SOEN341" : [
                {
                    "LEC" : {  "code":"B", "time_start":"10:15","time_end":"11:30","days":"TuTh" },
                    "TUT" : {  "code":"B", "time_start":"14:45","time_end":"16:00","days":"Fr" } 
                },
                { // B1
                "LEC" : { "code":"B", "time_start":"10:15","time_end":"11:30","days":"TuTh" },
                "TUT" : { "code":"B1", "time_start":"14:45","time_end":"16:00","days":"Fr" } //conflict
                },
                { // B2
                    "LEC" : { "code":"B2", "time_start":"8:45","time_end":"10:00","days":"TuTh" }, //conflict
                    "TUT" : { "code":"B", "time_start":"14:45","time_end":"16:00","days":"Fr" } 
                },
                { //B3
                    "LEC" : { "code":"B", "time_start":"10:15","time_end":"11:30","days":"TuTh" },
                    "TUT" : { "code":"B3", "time_start":"15:45","time_end":"17:00","days":"Fr" } //conflict
                }, 
                { //B4
                    "LEC" : { "code":"B4", "time_start":"9:45","time_end":"10:15","days":"TuTh" },//conflict
                    "TUT" : { "code":"B", "time_start":"14:45","time_end":"16:00","days":"Fr" } 
                }],
            "SOEN331" : [
                { // C
                    "LEC" : { "code":"C", "time_start":"8:45","time_end":"10:00","days":"MoWe" },
                    "TUT" : { "code":"C", "time_start":"14:45","time_end":"16:00","days":"Mo" } 
                },
                { // C1
                "LEC" : { "code":"C", "time_start":"8:45","time_end":"10:00","days":"MoWe" },
                "TUT" : { "code":"C1", "time_start":"14:45","time_end":"16:00","days":"Fr" } //conflict
                },
                { // C3
                    "LEC" : { "code":"C", "time_start":"8:45","time_end":"10:00","days":"MoWe" },
                    "TUT" : { "code":"C3", "time_start":"14:45","time_end":"16:00","days":"Fr" } //conflict 
                }]
        };
        var semester = [];
        semester[0] = // pure single conflict
        {
            "COMP346" : {
                "LEC" : { "code":"A", "time_start":"8:45","time_end":"10:00","days":"TuTh" },
                "TUT" : { "code":"A", "time_start":"14:45","time_end":"16:00","days":"We" },
                "LAB" : { "code":"A", "time_start":"10:15","time_end":"11:30","days":"Mo" }
            },
            "SOEN341" : {
                "LEC" : { "code":"B", "time_start":"10:15","time_end":"11:30","days":"TuTh" },
                "TUT" : { "code":"B1", "time_start":"14:45","time_end":"16:00","days":"Fr" } //conflict
            },
            "SOEN331" : {
                "LEC" : { "code":"C", "time_start":"8:45","time_end":"10:00","days":"MoWe" },
                "TUT" : { "code":"C1", "time_start":"14:45","time_end":"16:00","days":"Fr" } //conflict
            }
        };
        semester[1] = // pure double conflict
        {
            "COMP346" : {
                "LEC" : { "code":"A2", "time_start":"8:45","time_end":"10:00","days":"TuTh" }, //conflict
                "TUT" : { "code":"A", "time_start":"14:45","time_end":"16:00","days":"We" },
                "LAB" : { "code":"A", "time_start":"10:15","time_end":"11:30","days":"Mo" }
            },
            "SOEN341" : {
                "LEC" : { "code":"B2", "time_start":"8:45","time_end":"10:00","days":"TuTh" }, //conflict
                "TUT" : { "code":"B", "time_start":"14:45","time_end":"16:00","days":"Fr" } 
            },
            "SOEN331" : {
                "LEC" : { "code":"C", "time_start":"8:45","time_end":"10:00","days":"MoWe" },
                "TUT" : { "code":"C", "time_start":"14:45","time_end":"16:00","days":"Mo" } 
            }
        };
        semester[2] = // partial single conflict
        {
            "COMP346" : {
                "LEC" : { "code":"A", "time_start":"8:45","time_end":"10:00","days":"TuTh" },
                "TUT" : { "code":"A", "time_start":"14:45","time_end":"16:00","days":"We" },
                "LAB" : { "code":"A", "time_start":"10:15","time_end":"11:30","days":"Mo" }
            },
            "SOEN341" : {
                "LEC" : { "code":"B", "time_start":"10:15","time_end":"11:30","days":"TuTh" },
                "TUT" : { "code":"B3", "time_start":"15:45","time_end":"17:00","days":"Fr" } //conflict
            },
            "SOEN331" : {
                "LEC" : { "code":"C", "time_start":"8:45","time_end":"10:00","days":"MoWe" },
                "TUT" : { "code":"C3", "time_start":"14:45","time_end":"16:00","days":"Fr" } //conflict 
            }
        };
        semester[3] = // partial double conflict
        {
            "COMP346" : {
                "LEC" : { "code":"A4", "time_start":"8:45","time_end":"10:00","days":"TuTh" }, //conflict
                "TUT" : { "code":"A", "time_start":"14:45","time_end":"16:00","days":"We" },
                "LAB" : { "code":"A", "time_start":"10:15","time_end":"11:30","days":"Mo" }
            },
            "SOEN341" : {
                "LEC" : { "code":"B4", "time_start":"9:45","time_end":"10:15","days":"TuTh" },//conflict
                "TUT" : { "code":"B", "time_start":"14:45","time_end":"16:00","days":"Fr" } 
            },
            "SOEN331" : {
                "LEC" : { "code":"C", "time_start":"8:45","time_end":"10:00","days":"MoWe" },
                "TUT" : { "code":"C", "time_start":"14:45","time_end":"16:00","days":"Mo" } 
            }
        };
        semester[4] = // GOOD
        {
            "COMP346" : {
                "LEC" : { "code":"A", "time_start":"8:45","time_end":"10:00","days":"TuTh" },
                "TUT" : { "code":"A", "time_start":"14:45","time_end":"16:00","days":"We" },
                "LAB" : { "code":"A",  "time_start":"10:15","time_end":"11:30","days":"Mo" }
            },
            "SOEN341" : {
                "LEC" : {  "code":"B", "time_start":"10:15","time_end":"11:30","days":"TuTh" },
                "TUT" : {  "code":"B", "time_start":"14:45","time_end":"16:00","days":"Fr" } 
            },
            "SOEN331" : {
                "LEC" : { "code":"C", "time_start":"8:45","time_end":"10:00","days":"MoWe" },
                "TUT" : { "code":"C", "time_start":"14:45","time_end":"16:00","days":"Mo" } 
            }
        };
        var oldGeneration = [];
        for (let i = 0; i < 4; i++) {
            oldGeneration[i] = new individual(semester[0]);
            oldGeneration[i+4] = new individual(semester[1]);
            oldGeneration[i+8] = new individual(semester[2]);
            oldGeneration[i+12] = new individual(semester[3]);
            oldGeneration[i+16] = new individual(semester[4]);
            
        }
        rankGeneration(oldGeneration);

        var oldGenAverage = 0;
        var newGenAverage = 0;
        oldGeneration.every(function(val)
        {
            // console.log(val.fitness);
            oldGenAverage += val.fitness;
            return true;
        });

        oldGenAverage = oldGenAverage/20;

        // act
        var newGeneration = new generation(oldGeneration, rankGeneration, sectionList);
        
        for (let i = 0; i < 100; i++) { 
            var temp = new generation(oldGeneration, rankGeneration, sectionList);
            oldGeneration = newGeneration;
            newGeneration = temp;
        }

        newGeneration.every(function(val)
        {     
            // console.log(val.fitness+ " help "+ val.semester);
            newGenAverage += val.fitness;
            return true;
        });
        newGenAverage = newGenAverage/20;


    });

});