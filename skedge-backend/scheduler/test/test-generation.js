var expect = require('chai').expect;
var individual = require("../individual.js");
var survive = require("../survive.js");
var breed = require("../breed.js");
var mutate = require("../mutate.js");
var generation = require("../generation.js");


describe( 'generation', function(){
    it('should create a generation of individuals based on a parent generation', function()
    {
        // arrange
        var sectionList = 
        {
            "COMP346" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
            "SOEN341" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
            "SOEN331" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        };

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
            oldGeneration[index].fitness= Math.floor(10* Math.random());
            console.log(oldGeneration[index].fitness+ " "+JSON.stringify(oldGeneration[index].semester));      
        }
        function evaluateFitness(population)
        {

            for (const key in population) {
                if (population.hasOwnProperty(key)) {
                    var testA = population[key].semester["COMP346"].valueOf() == (population[key].semester["SOEN341"]).valueOf();
                    var testB = population[key].semester["SOEN331"].valueOf() == (population[key].semester["SOEN341"]).valueOf();
                    var testC = population[key].semester["SOEN331"].valueOf() == (population[key].semester["COMP346"]).valueOf();

                    if(testA)
                    {   
                        if (testB)
                        {
                            if(testC){population[key].fitness = 10;}
                            else
                            {
                                population[key].fitness = 7;
                            }
                        }
                        else
                        {
                            if(testC){population[key].fitness = 10;}
                            else { population[key].fitness = 4;}
                        }
                    }
                    else
                    {
                        if (testB)
                        {
                            if(testC){ population[key].fitness = 7; }
                            else{ population[key].fitness = 4;  }
                        }
                        else
                        {
                            if(testC){population[key].fitness = 4;}
                            else{population[key].fitness = 2;}
                        }
                    }
                }
            }
        }

        // act
        var newGeneration = generation(oldGeneration, evaluateFitness, sectionList);
        newGeneration.every(function(val)
        {
            console.log(val.fitness+ " "+JSON.stringify(val.semester));
            return true;
        });

        // assert
        expect(newGeneration).to.satisfy( function(newGeneration){
            return (newGeneration.length==20);
        });
    });

});