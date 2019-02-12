var expect = require('chai').expect;
var breed = require("../breed.js");
var individual = require("../individual.js");

describe('breed', function(){
    it('should create new offspring with random alleles from parents', function(){
        // arrange
        var semester1 = {
            "COMP346" : "SomeSectionA",
            "SOEN341" : "SomeSectionA",
            "SOEN331" : "SomeSectionA"
        };
        var semester2 = {
            "COMP346" : "SomeSectionG",
            "SOEN341" : "SomeSectionG",
            "SOEN331" : "SomeSectionG"
        };
        var parent1 = new individual(semester1);
        var parent2 = new individual(semester2);    
        
        // act
        var child = breed(parent1, parent2);
        console.log(child.semester);
        
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