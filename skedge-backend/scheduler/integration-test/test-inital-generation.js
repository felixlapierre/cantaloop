var expect = require('chai').expect;

var initialGeneration = require("../semester-generation/generation.js").initalGeneration;
var rankGeneration = require("../semester-generation/fitness.js").rankGeneration;

describe('initialGeneration', function(){
    it('should create and rank a generation from a given genome', function()
    {
        // Arrange
        var genome = ["COMP346", "SOEN331", "SOEN341"];
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
        var POPULATIONLIMIT = 20;
        // Act
        var population = initialGeneration(genome, sectionList, rankGeneration, POPULATIONLIMIT);

        // Assert
        expect(population).to.satisfy( function(population)
        {
          return  population.every(function(val)
            {     
                // console.log(val.fitness+ " help "+ JSON.stringify(val.semester));
               return (typeof val !== undefined);
            });
        });
    });
});
