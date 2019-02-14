var expect = require('chai').expect;
var breed = require("../../semester-generation/breed.js");
var individual = require("../../semester-generation/individual.js");

describe('breed', function(){
    it('should create new offspring with random alleles from parents', function(){
        // arrange
        var semester1 = {
            "COMP346" : "A",
            "SOEN341" : "A",
            "SOEN331" : "A"
        };
        var semester2 = {
            "COMP346" : "G",
            "SOEN341" : "G",
            "SOEN331" : "G"
        };
        var parent1 = new individual(semester1);
        var parent2 = new individual(semester2);    
        
        // act
        var child = breed(parent1, parent2);
        
        // assert
        expect(child).to.satisfy(function(child){
            return (child.semester["COMP346"].valueOf() == (parent1.semester["COMP346"]).valueOf()
                || child.semester["COMP346"].valueOf() == (parent2.semester["COMP346"]).valueOf())

                && (child.semester["SOEN341"].valueOf() == (parent1.semester["SOEN341"]).valueOf() 
                || child.semester["SOEN341"].valueOf() == (parent2.semester["SOEN341"]).valueOf())

                && (child.semester["SOEN331"].valueOf() == (parent1.semester["SOEN331"]).valueOf() 
                || child.semester["SOEN331"].valueOf() == (parent2.semester["SOEN331"]).valueOf());
        })


    });
});