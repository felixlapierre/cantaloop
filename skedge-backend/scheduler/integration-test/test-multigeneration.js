var expect = require('chai').expect;
var individual = require("../semester-generation/individual.js");
var generation = require("../semester-generation/generation.js").generation;



describe( 'multigeneration', function(){
    it('should create a descendant generation with a better average fitness than the first generation', function()
    {
        // arrange
        var sectionList = 
        {
            "COMP346" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
            "SOEN341" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
            "SOEN331" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        };

        class fitnessFunction{

            EvaluateFitness(individual)
            {

                
                var testA = individual.semester["COMP346"].valueOf() == (individual.semester["SOEN341"]).valueOf();
                var testB = individual.semester["SOEN331"].valueOf() == (individual.semester["SOEN341"]).valueOf();
            
                if(testA)
                {   
                    if (testB) { individual.fitness = 10;}
                    else { individual.fitness = 8;}
                }
                else
                {
                    if (testB) { individual.fitness = 6;}
                    else{ individual.fitness = 2;}
                }
            }
        }
        var fitnessFunctions = [new fitnessFunction];
        var oldGeneration = [];
        for (let index = 0; index < 20; index++) 
        {
            var semester = 
            {
                "COMP346" : sectionList["COMP346"][Math.floor(sectionList["COMP346"].length* Math.random())],
                "SOEN341" : sectionList["SOEN341"][Math.floor(sectionList["SOEN341"].length* Math.random())],
                "SOEN331" : sectionList["SOEN331"][Math.floor(sectionList["SOEN331"].length* Math.random())]
            };

            oldGeneration[index] = new individual(semester);
                 
        }

        oldGeneration.forEach(individual => {
            fitnessFunctions.forEach(fitnessFunction => {
                fitnessFunction.EvaluateFitness(individual);
            });
        });

        var oldGenAverage = 0;
        var newGenAverage = 0;
        oldGeneration.every(function(val)
        {
            oldGenAverage += val.fitness;
            return true;
        });

        oldGenAverage = oldGenAverage/20;

        // act
        var newGeneration = new generation(oldGeneration, fitnessFunctions, sectionList, 20);
        for (let i = 0; i < 100; i++) { 
            var temp = new generation(oldGeneration, fitnessFunctions, sectionList, 20);
            oldGeneration = newGeneration;
            newGeneration = temp;
        }

        newGeneration.every(function(val)
        {     
            newGenAverage += val.fitness;
            return true;
        });

        newGenAverage = newGenAverage/20;
        
        // assert
        expect(newGenAverage).to.satisfy( function(newGenAverage){
            return (newGenAverage>=oldGenAverage);
        });
    });

});