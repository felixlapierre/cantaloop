var expect = require('chai').expect;
var survive = require("../survive.js");
var breed = require("../breed.js");
var individual = require("../individual.js");
var mutate = require("../mutate.js");


describe('survive', function(){
    it('should generate an array of individuals with high rank', function(){
        // arrange
        var semester0 = {
            "COMP346" : "SomeSectionA",
            "SOEN341" : "SomeSectionA",
            "SOEN331" : "SomeSectionA"
        };
        var semester1 = {
            "COMP346" : "SomeSectionD",
            "SOEN341" : "SomeSectionD",
            "SOEN331" : "SomeSectionD"
        };
        var semester2 = {
            "COMP346" : "SomeSectionG",
            "SOEN341" : "SomeSectionG",
            "SOEN331" : "SomeSectionG"
        };

        var sectionList = {
            "COMP346" : ["SomeSectionA", "SomeSectionB", "SomeSectionC", "SomeSectionD","SomeSectionE","SomeSectionF","SomeSectionG"],
            "SOEN341" : ["SomeSectionA", "SomeSectionB", "SomeSectionC", "SomeSectionD","SomeSectionE","SomeSectionF","SomeSectionG"],
            "SOEN331" : ["SomeSectionA", "SomeSectionB", "SomeSectionC", "SomeSectionD","SomeSectionE","SomeSectionF","SomeSectionG"]
        };
        
        var oldGeneration = [];
        oldGeneration[0] = new individual(semester0);
        oldGeneration[1] = new individual(semester1);
        oldGeneration[2] = new individual(semester2); 
        oldGeneration[3] = mutate(oldGeneration[0], sectionList);
        oldGeneration[4] = mutate(oldGeneration[1], sectionList);
        oldGeneration[5] = mutate(oldGeneration[2], sectionList);
        oldGeneration[6] = breed(oldGeneration[0], oldGeneration[1]);
        oldGeneration[7] = breed(oldGeneration[0], oldGeneration[2]);

        for ( var key in oldGeneration)
        {
            if ( oldGeneration.hasOwnProperty(key))
            {
                oldGeneration[key].fitness = Math.floor( 20* Math.random());
                console.log(oldGeneration[key].fitness+ " "+JSON.stringify(oldGeneration[key].semester));
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
        expect(newGeneration).to.satisfy(function(newGeneration){
            return newGeneration.every(val => oldGeneration.includes(val));
        })

    });
});
