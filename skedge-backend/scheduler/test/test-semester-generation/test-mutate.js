var expect = require('chai').expect;
var mutate = require("../../semester-generation/mutate.js");
var individual = require("../../semester-generation/individual.js");

describe('mutate', function(){
    it('should create new offspring with different allele', function(){
        // Arrange
        var semester = {
            "COMP346" : "SomeSectionA",
            "SOEN341" : "SomeSectionA",
            "SOEN331" : "SomeSectionA"
        };
        var parent = new individual(semester);
        var sectionList = {
            "COMP346" : ["SomeSectionA", "SomeSectionB", "SomeSectionC", "SomeSectionD","SomeSectionE","SomeSectionF","SomeSectionG"],
            "SOEN341" : ["SomeSectionA", "SomeSectionB", "SomeSectionC", "SomeSectionD","SomeSectionE","SomeSectionF","SomeSectionG"],
            "SOEN331" : ["SomeSectionA", "SomeSectionB", "SomeSectionC", "SomeSectionD","SomeSectionE","SomeSectionF","SomeSectionG"]
        }

        // Act
        var child = mutate(parent, sectionList);
        
        // Assert
        expect(child).to.satisfy(function(child){
            return !(child.semester["COMP346"].valueOf() == (parent.semester["COMP346"]).valueOf()
                && child.semester["SOEN341"].valueOf() == (parent.semester["SOEN341"]).valueOf()
                && child.semester["SOEN331"].valueOf() == (parent.semester["SOEN331"]).valueOf());
        })
    });

    it('should create an identical offspring if there is only one possible allele', function () {
        // Arrange
        var semester = {
            "COMP346" : "SomeSectionA",
            "SOEN341" : "SomeSectionA",
            "SOEN331" : "SomeSectionA"
        };
        var parent = new individual(semester);
        var someSectionListWithOnlyOnePossibleAllele = {
            "COMP346" : ["SomeSectionA"],
            "SOEN341" : ["SomeSectionA"],
            "SOEN331" : ["SomeSectionA"]
        }

        // Act
        var child = mutate(parent, someSectionListWithOnlyOnePossibleAllele);

        // Assert
        expect(child).to.satisfy(function(child){
            return (child.semester["COMP346"].valueOf() == (parent.semester["COMP346"]).valueOf()
                && child.semester["SOEN341"].valueOf() == (parent.semester["SOEN341"]).valueOf()
                && child.semester["SOEN331"].valueOf() == (parent.semester["SOEN331"]).valueOf());
        })
    });
});