var expect = require('chai').expect;
var individual = require("../individual.js");
var survive = require("../survive.js");


describe('survive', function(){
    it('should generate an array of individuals with high rank', function(){
        // arrange
        var cullRate = 5;
        var sectionList = {
            "COMP346" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
            "SOEN341" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
            "SOEN331" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        };

        var oldGeneration = [];
        for (let index = 0; index < 10; index++) {
            var semester = {
                "COMP346" : sectionList["COMP346"][index],
                "SOEN341" : sectionList["SOEN341"][index],
                "SOEN331" : sectionList["SOEN331"][index]
            };

            oldGeneration[index] = new individual(semester);
            
        }

        for ( var key in oldGeneration)
        {
            if ( oldGeneration.hasOwnProperty(key))
            {
              //  oldGeneration[key].fitness = key;
              oldGeneration[key].fitness = Math.floor(20* Math.random());
              //  console.log(oldGeneration[key].fitness+ " "+JSON.stringify(oldGeneration[key].semester));
            }
        }

        
        // act
        var newGeneration = survive(oldGeneration);
        console.log("Survivors");
        for ( var key in newGeneration)
        {
            if ( newGeneration.hasOwnProperty(key))
            {
                console.log(newGeneration[key].fitness+ " "+JSON.stringify(newGeneration[key].semester));
            }
        }

        // assert
        expect(newGeneration).to.satisfy( function(newGeneration){
            return newGeneration.every( val => oldGeneration.includes(val) );
        });

    });
});
