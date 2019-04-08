var expect = require('chai').expect;
var individual = require("../semester-generation/individual.js");
var generation = require("../semester-generation/generation.js").generation;



describe( 'generation', function(){
    it('should create a generation of individuals based on a parent generation', function()
    {
        // arrange
        var sectionList = 
        {
            "SomeClass1" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
            "SomeClass2" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
            "SomeClass3" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        };
        class fitnessFunction{

            EvaluateFitness(individual)
            {
                var testA = individual.semester["SomeClass1"].valueOf() == (individual.semester["SomeClass2"]).valueOf();
                var testB = individual.semester["SomeClass3"].valueOf() == (individual.semester["SomeClass2"]).valueOf();
                var testC = individual.semester["SomeClass3"].valueOf() == (individual.semester["SomeClass1"]).valueOf();

                if(testA)
                {   
                    if (testB)
                    {
                        if(testC){individual.fitness = 10;}
                        else{  individual.fitness = 9; }
                    }
                    else
                    {
                        if(testC){individual.fitness = 9;}
                        else { individual.fitness = 6;}
                    }
                }
                else
                {
                    if (testB)
                    {
                        if(testC){ individual.fitness = 9; }
                        else{ individual.fitness = 6;  }
                    }
                    else
                    {
                        if(testC){individual.fitness = 6;}
                        else{individual.fitness = 2;}
                    }
                }
                
            }

        }
        var fitnessFunctions = [new fitnessFunction];
        var oldGeneration = [];
        for (let index = 0; index < 20; index++) 
        {
            var semester = 
            {
                "SomeClass1" : sectionList["SomeClass1"][Math.floor(sectionList["SomeClass1"].length* Math.random())],
                "SomeClass2" : sectionList["SomeClass2"][Math.floor(sectionList["SomeClass2"].length* Math.random())],
                "SomeClass3" : sectionList["SomeClass3"][Math.floor(sectionList["SomeClass3"].length* Math.random())]
            };
            oldGeneration[index] = new individual(semester);    
        }

        oldGeneration.forEach(individual => {
            fitnessFunctions.forEach(fitnessFunction => {
                fitnessFunction.EvaluateFitness(individual);
            });
        });

        // act
        var newGeneration = new generation(oldGeneration, fitnessFunctions, sectionList, 20);
        
        // assert
        expect(newGeneration).to.satisfy( function(newGeneration){
            return (newGeneration.length==20);
        });
    });

});