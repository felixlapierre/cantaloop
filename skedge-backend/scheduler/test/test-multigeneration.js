var expect = require('chai').expect;
var individual = require("../individual.js");
var generation = require("../generation.js");



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

        function evaluateFitness(population)
        {

            for (const key in population) 
            {
                if (population.hasOwnProperty(key)) 
                {
                    var testA = population[key].semester["COMP346"].valueOf() == (population[key].semester["SOEN341"]).valueOf();
                    var testB = population[key].semester["SOEN331"].valueOf() == (population[key].semester["SOEN341"]).valueOf();
                
                    if(testA)
                    {   
                        if (testB)
                        {
                            population[key].fitness = 10; 
                        }
                        else
                        {
                            population[key].fitness = 8;
                        }
                    }
                    else
                    {
                        if (testB)
                        {
                            population[key].fitness = 6;
                        }
                        else
                        {
                            population[key].fitness = 2;
                        }
                    }
                }
            }
            population.sort(function(a, b){return a.fitness - b.fitness});
        }

        
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

        evaluateFitness(oldGeneration);
        var oldGenAverage = 0;
        var newGenAverage = 0;
        oldGeneration.every(function(val)
        {
            // console.log(val.fitness+ " "+JSON.stringify(val.semester));
            oldGenAverage += val.fitness;
            return true;
        });

        oldGenAverage = oldGenAverage/20;

        // act
        var newGeneration = new generation(oldGeneration, evaluateFitness, sectionList);
        for (let i = 0; i < 100; i++) { 
            var temp = new generation(oldGeneration, evaluateFitness, sectionList);
            oldGeneration = newGeneration;
            newGeneration = temp;
        }

        console.log("100th decendant");
        newGeneration.every(function(val)
        {     
            // console.log(val.fitness+ " "+JSON.stringify(val.semester));
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